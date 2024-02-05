import { defineStore } from 'pinia'

import { useConnectionStore } from '@/stores/connections'
import { useSettingsStore } from '@/stores/settings'
import { useAppearanceStore } from '@/stores/appearance'
import { useTranslationStore } from '@/stores/translation'
import { useOSCStore } from '@/stores/osc'
import type { WebSpeech } from '@/modules/speech'
import { i18n } from '@/plugins/i18n'
import is_electron from '@/helpers/is_electron'

export const useDefaultStore = defineStore('default', {
  state: () => ({
    worker: null as any,
    ws: null as any,
    loading_websocket: false,
    broadcasting: false,
    connections: 0,
    typing_limited: false,
    speech: {} as WebSpeech,
    snackbar: {
      enabled: false,
      type: 'error',
      desc: '',
    },
  }),
  getters: {

  },
  actions: {
    show_snackbar(type: string, desc: string) {
      console.log(desc)
      this.snackbar.type = type
      this.snackbar.desc = desc
      this.snackbar.enabled = true
    },
    toggle_broadcast() {
      if (this.broadcasting) {
        this.broadcasting = false
        this.connections = 0
        if (this.ws) {
          this.ws.send('{"type": "command", "data": "stop"}')
          this.ws.close()
          this.ws = null
        }
        return
      }

      const { ws, wh } = useConnectionStore()
      const settingsStore = useSettingsStore()
      const appearanceStore = useAppearanceStore()
      const translationStore = useTranslationStore()
      const oscStore = useOSCStore()

      this.broadcasting = true

      if (!is_electron() && ws.enabled) {
        this.loading_websocket = true
        try {
          this.ws = new WebSocket(`ws://${ws.url}`)
        }
        catch {
          this.broadcasting = false
          this.loading_websocket = false
          this.ws = null
          this.show_snackbar('error', i18n.t('alerts.websocket_error'))
          return
        }
        this.ws.onopen = () => {
          this.broadcasting = true
          this.loading_websocket = false
          this.connections += 1

          if (this.broadcasting) {
            // Synchronize on broadcast (Web App → Electron App)
            if (this.ws) {
              let data
              
              data = { store: "settings", newPatch: settingsStore.$state }
              data = JSON.stringify(data)
              this.ws.send(`{"type": "sync", "data": ${data}}`)
              
              data = { store: "appearance", newPatch: appearanceStore.$state }
              data = JSON.stringify(data)
              this.ws.send(`{"type": "sync", "data": ${data}}`)
  
              data = { store: "translation", newPatch: translationStore.$state }
              data = JSON.stringify(data)
              this.ws.send(`{"type": "sync", "data": ${data}}`)
  
              data = { store: "osc", newPatch: oscStore.$state }
              data = JSON.stringify(data)
              this.ws.send(`{"type": "sync", "data": ${data}}`)
            }
          }
        }
        this.ws.onmessage = (event: any) => {
          const msg = JSON.parse(event.data)
          if (msg.event === 'connect' && msg.version !== __APP_VERSION__)
            this.show_snackbar('error', i18n.t('alerts.version_mismatch'))
        }
        this.ws.onclose = () => {
          console.log('websocket closed')
          if (this.connections === 0)
            this.broadcasting = false
          this.loading_websocket = false
          this.ws = null
        }
        this.ws.onerror = () => {
          this.show_snackbar('error', i18n.t('alerts.broadcast_error'))
        }
      }

      if (wh.enabled)
        this.connections += 1
    },
  },
})
