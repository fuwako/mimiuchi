<template>
  <v-card :title="$t('settings.language.title')" color="transparent" flat>
    <v-snackbar v-model="snackbar" location="top" color="success">
      {{ snackbar_text }}
      <template #actions>
        <v-btn variant="text" @click="snackbar = false">
          {{ $t('settings.language.reset.snackbar.button') }}
        </v-btn>
      </template>
    </v-snackbar>
    <v-divider />
    <v-card-text>
      <v-row>
        <v-col :cols="12">
          <v-radio-group v-model="settingsStore.language" :label="$t('settings.language.language')">
            <v-card v-for="(language, i) in languages" class="pa-2 mb-2" :color="language.value === settingsStore.language ? 'primary' : 'default'" @click="settingsStore.language = language.value">
              <v-radio :label="language.title" :value="language.value">
                <template #label>
                  <div>{{ language.title }}</div>
                </template>
              </v-radio>
            </v-card>
          </v-radio-group>
        </v-col>
        <v-divider />
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { useAppearanceStore } from '@/stores/appearance'
import { useWordReplaceStore } from '@/stores/word_replace'
import { useSettingsStore } from '@/stores/settings'
import { useSpeechStore } from '@/stores/speech'
import { useConnectionStore } from '@/stores/connections'
import { useLogStore } from '@/stores/logs'

export default {
  name: 'SettingsLanguage',
  setup() {
    const appearanceStore = useAppearanceStore()
    const wordReplaceStore = useWordReplaceStore()
    const settingsStore = useSettingsStore()
    const speechStore = useSpeechStore()
    const connectionStore = useConnectionStore()
    const logStore = useLogStore()

    return {
      appearanceStore,
      wordReplaceStore,
      settingsStore,
      speechStore,
      connectionStore,
      logStore,
    }
  },
  data: () => ({
    languages: [
      {
        title: 'English (United States)',
        value: 'en',
      },
      {
        title: 'Spanish (España)',
        value: 'es',
      },
      {
        title: '日本語（日本）',
        value: 'ja',
      },
    ],

    snackbar: false,
    snackbar_text: '',

    reset_dialog: false,
    appearance: true,
    settings: true,
    word_replace: true,
    speech: true,
    connection: true,
  }),
  methods: {
    reset_submit() {

    },
    reset_settings() {
      if (this.appearance)
        this.appearanceStore.$reset()
      if (this.word_replace)
        this.wordReplaceStore.$reset()
      if (this.settings)
        this.settingsStore.$reset()
      if (this.speech)
        this.speechStore.$reset()
      if (this.connection)
        this.connectionStore.$reset()
      this.reset_dialog = false
      this.snackbar_text = this.$t('settings.language.reset.snackbar.title')
      this.snackbar = true
      // this.$i18n.locale = this.settingsStore.language
    },
  },
}
</script>
