import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Home from '@/pages/Home.vue'

import Settings from '@/pages/Settings.vue'
import SettingsLanguage from '@/components/settings/Language.vue'
import STT from '@/components/settings/STT.vue'
import TTS from '@/components/settings/TTS.vue'
import Appearance from '@/components/settings/Appearance.vue'
import WordReplace from '@/components/settings/WordReplace.vue'
import Translation from '@/components/settings/Translation.vue'
import Export from '@/components/settings/Export.vue'
import Connections from '@/components/settings/connections/Connections.vue'
import OSC from '@/components/settings/OSC.vue'
import OSCParams from '@/components/settings/OSCParams.vue'
import Advanced from '@/components/settings/Advanced.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    components: {
      default: Home,
      // Header,
      Footer,
    },
  },
  {
    path: '/settings/',
    name: 'settings',
    components: {
      default: Settings,
      panel: Settings,
      Header,
      Footer,
    },
    children: [
      {
        path: 'language',
        name: 'language',
        components: {
          default: Settings,
          panel: SettingsLanguage,
          Header,
        },
      },
      {
        path: 'stt',
        name: 'stt',
        components: {
          default: Settings,
          panel: STT,
          Header,
        },
      },
      {
        path: 'tts',
        name: 'tts',
        components: {
          default: Settings,
          panel: TTS,
          Header,
        },
      },
      {
        path: 'appearance',
        name: 'appearance',
        components: {
          default: Settings,
          panel: Appearance,
          Header,
        },
      },
      {
        path: 'wordreplace',
        name: 'wordreplace',
        components: {
          default: Settings,
          panel: WordReplace,
          Header,
        },
      },
      {
        path: 'translation',
        name: 'translation',
        components: {
          default: Settings,
          panel: Translation,
          Header,
        },
      },
      {
        path: 'export',
        name: 'export',
        components: {
          default: Settings,
          panel: Export,
          Header,
        },
      },
      {
        path: 'connections',
        name: 'connections',
        components: {
          default: Settings,
          panel: Connections,
          Header,
        },
      },
      {
        path: 'osc',
        name: 'osc',
        components: {
          default: Settings,
          panel: OSC,
          Header,
        },
      },
      {
        path: 'oscparams',
        name: 'oscparams',
        components: {
          default: Settings,
          panel: OSCParams,
          Header,
        },
      },
      {
        path: 'advanced',
        name: 'advanced',
        components: {
          default: Settings,
          panel: Advanced,
          Header,
        },
      },
    ],
  },
]

export default createRouter({
  history: createWebHistory('/'),
  routes: routes as RouteRecordRaw[],
})
