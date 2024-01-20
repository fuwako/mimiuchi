<template>
  <v-card :title="$t('settings.captions.translation.title')" color="transparent" flat>
    <v-divider />
    <v-card-text>
      <v-row>
        <v-col>
          <v-chip variant="outlined" label color="error" size="large">
            <v-icon start icon="mdi-alert" />
            {{ $t('settings.captions.translation.warning') }}
          </v-chip>
        </v-col>
        <v-col :cols="12">
          <v-card flat>
            <v-switch
              v-model="translationStore.enabled"
              :label="$t('settings.captions.translation.enabled')"
              color="primary"
              hide-details
              inset
              class="mx-3"
            />
          </v-card>
        </v-col>
        <v-col :cols="12">
          <v-select
            v-model="translationStore.type"
            :label="$t('settings.captions.translation.type')"
            :items="translation_types"
            item-title="title"
            item-value="value"
            variant="outlined"
            hide-details
          >
            <template #item="{ props, item }">
              <v-list-item v-bind="props">
                <template #append>
                  <v-icon icon="mdi-laptop" />
                </template>
              </v-list-item>
            </template>
          </v-select>
        </v-col>
        <v-col v-if="translation_types.find(o => o.type === 'local')" :cols="12">
          <v-alert variant="outlined" type="info" prominent>
            <v-alert-title class="text-subtitle-1">
              <i18n-t keypath="settings.captions.translation.ml_notice" tag="label" scope="global">
                <span class="text-primary">{{ translationStore.type }}</span>
              </i18n-t>
            </v-alert-title>
          </v-alert>
        </v-col>
        <v-col :cols="12" :sm="6">
          <v-autocomplete
            v-model="translationStore.source"
            :label="$t('settings.captions.translation.source')"
            :items="translation_options"
            item-title="title"
            item-value="value"
            auto-select-first
            :hint="`${$t('settings.captions.translation.speech_lang')}${stt_language}`"
            persistent-hint
          />
        </v-col>
        <v-col :cols="12" :sm="6">
          <v-autocomplete
            v-model="translationStore.target"
            :label="$t('settings.captions.translation.target')"
            :items="translation_options"
            item-title="title"
            item-value="value"
            auto-select-first
            hide-details
          />
        </v-col>
        <v-col :cols="12">
          <v-card flat>
            <v-switch
              v-model="translationStore.show_original"
              :label="$t('settings.captions.translation.show_original')"
              color="primary"
              hide-details
              inset
              class="mx-3"
            />
          </v-card>
        </v-col>
        <v-divider />
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { useTranslationStore } from '@/stores/translation'
import { useSpeechStore } from '@/stores/speech'
import translation_options from '@/constants/translation_options'

export default {
  name: 'SettingsTranslation',
  setup() {
    const translationStore = useTranslationStore()
    const speechStore = useSpeechStore()

    return {
      translationStore,
      stt_language: speechStore.stt.language,
    }
  },
  data() {
    return {
      translation_types: [
        {
          title: 'Transformers.js (BETA)',
          value: 'Transformers.js',
          type: 'local',
        },
      ],
      translation_options,
    }
  },
  async mounted() {

  },
  methods: {
    open_external(link: string | null) {
      if (link)
        window.open(link, '_blank')
    },
  },
}
</script>
