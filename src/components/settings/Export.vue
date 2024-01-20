<template>
  <v-card :title="$t('settings.captions.export.title')" color="transparent" flat>
    <v-divider />
    <v-card-text>
      <v-row>
        <v-col :cols="12" class="d-flex flex-no-wrap justify-space-between">
          <v-card-text class="text-subtitle-1 font-weight-medium">
            {{ $t('settings.captions.export.transcript') }}
          </v-card-text>
          <v-btn color="primary" class="mt-2" @click="logStore.export()">
            <v-icon>mdi-download</v-icon>
          </v-btn>
        </v-col>
        <v-divider />
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { useLogStore } from '@/stores/logs'

export default {
  name: 'SettingsExport',
  setup() {
    const logStore = useLogStore()

    return {
      logStore,
    }
  },
}
</script>
