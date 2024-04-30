<template>
  <v-navigation-drawer
    v-model="quick_settings"
    location="right"
  >
    <v-list id="quick_settings" nav>
      <v-list-item v-if="!is_electron()">
        <v-list-item-title>{{ $t('Speech to Text') }}</v-list-item-title>
        <v-select
          v-model="speechStore.stt.language"
          class="mt-4"
          :items="Object.keys(speechStore.pinned_languages).map((key) => ({
            title: key,
            value: speechStore.pinned_languages[key].value,
          }))"
          item-title="title"
          item-value="value"
          :label="$t('Language')"
          variant="solo-filled"
          hide-details
        />
        <v-divider />
      </v-list-item>
      <v-list-item>
        <v-card flat>
          <v-list-item>
            <v-list-item-title>{{ $t('Text to Speech') }}</v-list-item-title>
            <template #append>
              <v-switch
                v-model="speechStore.tts.enabled"
                color="primary"
                density="compact"
                hide-details
                inset
              />
            </template>
          </v-list-item>
        </v-card>
        <v-divider />
      </v-list-item>
      <v-list-item v-if="is_electron()">
        <v-card flat>
          <v-list-item>
            <v-list-item-title>{{ $t('Translations') }}</v-list-item-title>
            <template #append>
              <v-switch
                v-model="speechStore.tts.enabled"
                color="primary"
                density="compact"
                hide-details
                inset
              />
            </template>
          </v-list-item>
        </v-card>
        <v-divider />
      </v-list-item>
      <v-list-item v-if="is_electron()">
        <v-card flat>
          <v-list-item>
            <v-list-item-title>{{ $t('OSC') }}</v-list-item-title>
            <template #append>
              <v-switch
                v-model="oscStore.osc_text"
                color="primary"
                density="compact"
                hide-details
                inset
              />
            </template>
          </v-list-item>
        </v-card>
        <v-divider />
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { useSettingsStore } from '@/stores/settings'
import { useOSCStore } from '@/stores/osc'
import { useSpeechStore } from '@/stores/speech'

import is_electron from '@/helpers/is_electron'

export default {
  name: 'QuickSettings',
  props: {
    modelValue: Boolean,
  },
  setup() {
    const settingsStore = useSettingsStore()
    const oscStore = useOSCStore()
    const speechStore = useSpeechStore()

    return {
      settingsStore,
      oscStore,
      speechStore,

      is_electron,
    }
  },
  computed: {
    quick_settings: {
      get() {
        return this.modelValue
      },
      set() {},
    },
    outer_size: () => is_electron() ? '140px' : '105px',
  },
}
</script>

<style>
#quick_settings .v-list-item:first-child {
  margin-top: 16px;
}

#quick_settings .v-list-item {
  margin-top: 0;
  margin-bottom: 0;
  padding-top: 0;
  padding-bottom: 0;
}

.v-divider {
  margin-top: 16px;
  margin-bottom: 16px;
}
</style>
