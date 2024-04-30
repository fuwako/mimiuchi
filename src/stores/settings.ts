import { defineStore } from 'pinia'

export const useSettingsStore = defineStore('settings', {
  state: () => ({

    welcome: true,
    quick_settings: false,

    language: navigator.language.split('-')[0],

    drawer: true,

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
