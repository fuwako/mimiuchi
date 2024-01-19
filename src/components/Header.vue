<template>
  <v-app-bar color="primary" app flat height="50">
    <v-app-bar-nav-icon variant="text" @click.stop="settingsStore.drawer = !settingsStore.drawer" />
    <v-container class="d-flex ml-0">
      <v-icon class="d-sm-flex ma-auto me-6 ms-4" icon="mdi-weather-night" />

      <v-app-bar-title class="font-weight-medium">
        {{ APP_NAME }}
        <!-- <v-chip class="ml-2" label>{{ $t('general.beta') }}</v-chip> -->
      </v-app-bar-title>

    </v-container>
  </v-app-bar>
</template>

<script lang='ts'>
import { useSettingsStore } from '@/stores/settings'

export default {
  name: 'Header',
  setup() {
    const settingsStore = useSettingsStore()
    return {
      settingsStore,
    }
  },
  data() {
    return {
      APP_NAME: __APP_NAME__,
    }
  },
}
</script>
