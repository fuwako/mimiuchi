<template>
  <!-- <v-navigation-drawer :width="Math.ceil((window_size.x * .2) / 10) * 10" v-model="settingsStore.drawer" :permanent="!smAndDown" floating v-resize="on_resize">
            {{ window_size }} {{ Math.ceil((window_size.x * .2) / 2) * 2 }}
        </v-navigation-drawer> -->
  <v-navigation-drawer v-model="settingsStore.drawer" :permanent="!smAndDown">
    <v-list density="compact" nav>
      <v-list-subheader>{{ $t('settings.title') }}</v-list-subheader>
      <v-list-item
        v-for="(setting, i) in settings_language"
        :prepend-icon="setting.icon"
        :title="setting.title"
        :value="setting.value"
        :active="setting.value === $route.name"
        color="primary"
        @click="$router.push({ path: `/settings/${setting.value}` })"
      />

      <v-divider class="my-2" />
      <v-list-subheader>{{ $t('settings.app_settings.title') }}</v-list-subheader>
      <v-list-item
        v-for="(setting, i) in settings_captions"
        :prepend-icon="setting.icon"
        :title="setting.title"
        :value="setting.value"
        :active="setting.value === $route.name"
        color="primary"
        @click="$router.push({ path: `/settings/${setting.value}` })"
      />

      <v-divider class="my-2" />
      <v-list-subheader>{{ $t('settings.connections.title') }}<v-icon class="ml-1">mdi-broadcast</v-icon></v-list-subheader>
      <v-list-item
        v-for="(setting, i) in settings_connections"
        :prepend-icon="setting.icon"
        :title="setting.title"
        :value="setting.value"
        :active="setting.value === $route.name"
        color="primary"
        @click="$router.push({ path: `/settings/${setting.value}` })"
      />

      <v-divider class="my-2" />
      <v-list-subheader>{{ $t('settings.osc.title') }}<v-icon class="ml-1">mdi-broadcast</v-icon></v-list-subheader>
      <v-list-item
        v-for="(setting, i) in settings_osc"
        :prepend-icon="setting.icon"
        :title="setting.title"
        :value="setting.value"
        :active="setting.value === $route.name"
        color="primary"
        @click="$router.push({ path: `/settings/${setting.value}` })"
      />

      <v-divider class="my-2" />
      <v-list-item
        v-for="(setting, i) in settings_advanced"
        :prepend-icon="setting.icon"
        :title="setting.title"
        :value="setting.value"
        :active="setting.value === $route.name"
        color="primary"
        @click="$router.push({ path: `/settings/${setting.value}` })"
        class="mb-16"
      />
    </v-list>

    <!-- <v-list :items="settings_list" density="compact" nav></v-list> -->
    <template #append>
      <v-divider />
      <v-col id="version-bar" class="d-flex justify-end px-2 align-center">
        <v-btn v-if="update_available" size="small" variant="flat" prepend-icon="mdi-download" @click="open_external('https://github.com/naeruru/mimiuchi/releases/latest')">
          <template #prepend>
            <v-icon color="success" size="large" />
          </template>
          {{ $t('general.update') }}
        </v-btn>
        <v-spacer />
        <v-btn size="small" variant="flat" prepend-icon="mdi-tag" @click="open_external(`https://github.com/naeruru/mimiuchi`)">
          V{{ APP_VERSION }}
        </v-btn>
      </v-col>
    </template>
  </v-navigation-drawer>

  <div id="settings" class="d-flex justify-center settings">
    <v-col class="pa-0 mt-2" cols="12" md="10" lg="8" xl="6">
      <router-view v-slot="{ Component }" name="panel">
        <transition name="slide-up">
          <component :is="Component" />
        </transition>
      </router-view>
      <div class="mt-16 pt-8"></div>
    </v-col>
  </div>
</template>

<script lang="ts">
import { useDisplay } from 'vuetify'
import is_electron from '@/helpers/is_electron'
import { useSettingsStore } from '@/stores/settings'

declare const window: any

export default {
  name: 'Settings',
  setup() {
    const settingsStore = useSettingsStore()
    const { smAndDown } = useDisplay()

    settingsStore.drawer = !smAndDown.value

    return {
      settingsStore,
      smAndDown,
    }
  },
  data() {
    return {
      APP_VERSION: __APP_VERSION__,
      update_available: false,
      window_size: {
        x: 0,
        y: 0,
      },
    }
  },
  computed: {
    outer_size: () => is_electron() ? '140px' : '105px',
    settings_language() {
      return [
        {
          title: this.$t('settings.language.title'),
          value: 'language',
          icon: 'mdi-web',
        },
        {
          title: this.$t('settings.appearance.title'),
          value: 'appearance',
          icon: 'mdi-palette',
        },
      ]
    },
    settings_captions() {
      const settings_captions = [
        {
          title: this.$t('settings.app_settings.stt.title'),
          value: 'stt',
          icon: 'mdi-microphone-outline',
        },
        {
          title: this.$t('settings.app_settings.tts.title'),
          value: 'tts',
          icon: 'mdi-account-voice',
        },
        {
          title: this.$t('settings.app_settings.word_replace.title'),
          value: 'wordreplace',
          icon: 'mdi-swap-horizontal',
        },
        {
          title: this.$t('settings.app_settings.translation.title'),
          value: 'translation',
          icon: 'mdi-translate',
        },
        {
          title: this.$t('settings.app_settings.export.title'),
          value: 'export',
          icon: 'mdi-export',
        },
      ]
      if (is_electron())
        return settings_captions
      else return settings_captions.slice(0, 1)
    },
    settings_connections() {
      return [
        {
          title: this.$t('settings.connections.connections.title'),
          value: 'connections',
          icon: 'mdi-transit-connection-variant',
        },
      ]
    },
    settings_osc() {
      const settings_osc = [
        {
          title: this.$t('settings.osc.general.title'),
          value: 'osc',
          icon: 'mdi-message-text',
        },
        {
          title: this.$t('settings.osc.parameters.title'),
          value: 'oscparams',
          icon: 'mdi-format-list-bulleted-square',
        },
      ]
      if (is_electron())
        return settings_osc
      else return settings_osc.slice(0, 1)
    },
    settings_advanced() {
      return [
        {
          title: this.$t('settings.advanced.title'),
          value: 'advanced',
          icon: 'mdi-cogs',
        },
      ]
    },
  },
  mounted() {
    if (is_electron()) {
      window.ipcRenderer.removeListener('update-check')
      window.ipcRenderer.send('update-check')
      window.ipcRenderer.receive('update-check', (event: any, data: any) => {
        if (event != `v${this.APP_VERSION}`)
          this.update_available = true
      })
    }

    window.addEventListener('keydown', this.handleKeyDown)
  },
  methods: {
    open_external(link: string) {
      window.open(link, '_blank')
    },
    handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        this.$router.push({ path: '/' })
      }
    },
  },
}
</script>

<style>
.v-list-subheader__text {
  display: flex;
  align-items: center;
}

#version-bar {
  height: 60px; /* Match v-footer. */
}

.settings {
    overflow-y: auto;
    max-height: calc(100svh - v-bind(outer_size));
}

.slide-up-enter-active {
  transition: all 0.25s ease-out;
}

.slide-up-leave-active {
  transition: all 0s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
