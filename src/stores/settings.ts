import { defineStore } from 'pinia'

export const useSettingsStore = defineStore('settings', {
  state: () => ({
    welcome_overlay: true,
    settings_drawer: false,

    ui_language: navigator.language.split('-')[0],

    stt_Settings: {
      language: 'en-US',
      confidence: 0.9,
    },
  }),
  getters: {

  },
  actions: {

  },
})
