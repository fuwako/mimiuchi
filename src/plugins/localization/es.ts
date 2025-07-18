export default {
  welcome: {
    intro: {
      title: 'Bienvenido a {name}!',
      description: '{name} es una herramienta de subtítulos que permite transcribir el texto hablado o escrito en una ventana personalizable para que puedas mostrar los resultados sin esfuerzo en aplicaciones como OBS. También admite la transmisión de texto y comandos a otras aplicaciones (como VRChat).',
      button: 'Siguiente',
    },
    controls: {
      title: 'Controles',
      broadcast: 'Transmisión OSC (requiere aplicación de escritorio)',
      mic: 'Voz a texto (requiere permiso del navegador)',
      settings: 'Abrir el panel de ajustes',
      button: 'Cerrar',
    },
  },
  general: {
    type_message: 'Escribe un mensaje',
    beta: 'BETA',
    update: 'Actualizar',
  },
  snackbar: {
    version_mismatch: 'La aplicación de escritorio tiene una versión diferente a la versión web. Considere la posibilidad de actualizar, ya que la aplicación puede fallar.',
    no_speech: 'Tu navegador no es compatible con Web Speech API (Voz a Texto).',
    speech_recognition_error_event: {
      aborted: 'Error: El micrófono está siendo usado por otra pestaña',
      not_allowed: 'Error al habilitar el micrófono. Debes dar permiso para usarlo.',
    },
  },
  settings: {
    title: 'Ajustes',
    general: {
      title: 'Ajustes generales',
      description: 'Ajustes generales de la aplicación',
      language: 'Selecciona el lenguaje de la interfaz',
      transcript: 'Descargar transcripción de la sesión',
      reset: {
        button: 'Resetear todos los ajustes.',
        dialog: {
          title: 'Resetear los ajustes.',
          description: 'Está a punto de restablecer la configuración de toda la aplicación.',
          button: 'Resetear',
        },
        snackbar: {
          title: 'Resetear los ajustes',
          button: 'Cerrar',
        },
      },
    },
    stt: {
      title: 'Voz a Texto',
      description: 'Ajustes de Voz a Texto',
      type: 'Selecciones un servicio STT',
      sensitivity: 'Seleccione el nivel de sensibilidad',
      sensitivity_start: 'Probar',
      sensitivity_stop: 'Parar',
      device: 'Escuchando: ',
      pinned_languages: 'Lenguajes fijados',
      language: 'Selecciones un lenguaje de escucha',
      unsupported: {
        text: 'Web Speech API (Voz a Texto) solo está disponible en {link}. {kaomoji}',
        link: 'la página web',
        kaomoji: '(^・ω・^)',
      },
    },
    tts: {
      title: 'Texto a Voz',
      description: 'Ajustes de Texto a Voz',
      enabled: 'Activar la reproducción de Texto a Voz',
      type: 'Selecciona un servicio TTS',
      rate: 'Tasa',
      pitch: 'Pitch',
      language: 'Seleccione una voz de Texto a Voz',
      unsupported: {
        text: 'Texto a Voz solo está disponible en {link}. {kaomoji}',
        link: 'la página web',
        kaomoji: '(^・ω・^)',
      },
    },
    appearance: {
      title: 'Apariencia',
      description: 'Cambiar la apariencia de la aplicación',
      theme: 'Tema',
      text: {
        title: 'Ajusts de Texto',
        font_family: 'Fuente',
        font_type: 'Escribe',
        font_size: 'Tamaño de letra',
        fade: 'Desvanecer el texto',
        fade_after: 'Desvanecer el texto después de ',
        seconds: 'segundos',
        fade_for: 'Desvanecer el texto durante ',
        new_line_delay: {
          hint: 'Saltar de linea cuando no se haya enviado texto en ',
          options: [
            {
              title: 'Instantaneamente',
              value: 0,
            },
            {
              title: 'después de 2 segundos',
              value: 2,
            },
            {
              title: 'después de 4 segundos',
              value: 4,
            },
            {
              title: 'después de 6 segundos',
              value: 6,
            },
            {
              title: 'después de 8 segundos',
              value: 8,
            },
            {
              title: 'después de 10 segundos',
              value: 10,
            },
            {
              title: 'Nunca',
              value: -1,
            },
          ],
        },
        color: 'Color del Texto',
        interim_color: 'Color del texto provisional',
      },
      ui: {
        title: 'Ajuste de la Interfaz',
        color: 'Color de Fondo',
      },
    },
    word_replace: {
      title: 'Sustitución de palabras',
      description: 'Agregue palabras o frases para reemplazar aquí',
      enabled: 'Permitir reemplazar palabras o frases',
      match_whole_word: 'Sólo palabras completas',
      match_case: 'Coincidir mayúsculas/minúsculas',
      info: 'Utilice el botón {icon} para agregar un nuevo reemplazo.',
      replacing: 'Reemplazando ',
      replacement: 'Reemplazo',
    },
    translation: {
      title: 'Traducciones',
      description: 'Ajustes para traducir a otro idioma',
      warning: 'Las traducciones están en desarrollo. No confie plenamente en ellas',
      enabled: 'Habilitar traducciones',
      type: 'Seleccione un servicio de traducción',
      source: 'Fuente',
      target: 'Objetivo',
      show_original: 'Mostrar frase original antes de traducir',
      ml_notice: '{0} es una biblioteca basada en ML que utiliza recursos locales (CPU) para generar traducciones en su dispositivo. En dispositivos de gama baja, es posible que no funcione bien.',
      speech_lang: 'Tu lenguaje para Voz a Texto es ',
      unsupported: {
        text: 'Traducciones solo está disponible en {link}. {kaomoji}',
        link: 'Aplicación de Escritorio',
        kaomoji: '(^・ω・^)',
      },
    },
    connections: {
      title: 'Conexiones',
      description: 'Enviar datos a otras aplicaciones cuando se utiliza {icon}',
      dialog: {
        title: {
          edit: 'Actualizar conexión',
        },
        description: {
          websocket: 'Envia actualizaciones de texto en tiempo real a través de un websocket',
          webhook: 'Enviar actualizaciones de texto a través de una solicitud POST de Webhook',
        },
      },
    },
    osc: {
      title: 'VRChat',
      general: {
        title: 'General',
        description: 'Configuraciones para personalizar la conexión OSC',
        osc_ip: 'IP OSC predeterminada',
        osc_port: 'Puerto OSC predeterminado',
        enabled: 'Enviar todo el texto con OSC (al transmitir)',
        show_keyboard: 'Abrir teclado en VRChat al enviar texto',
        sfx: 'Reproduce un efecto de sonido después de enviar un texto.',
        typing_indicator_speech: 'Habilitar indicador de escritura para Voz a Texto',
        typing_indicator_keyboard: 'Habilitar el indicador de escritura al escribir',
        typing_indicator_icon: 'mdi-message-processing',
        unsupported: {
          text: 'Para utilizar OSC, debe utilizar el {link}. Una vez instaladas, las versiones de sitio web y de escritorio se pueden utilizar junto con el {icon} botón. {kaomoji}',
          link: 'Aplicación de Escritorio',
          icon: 'mdi-broadcast',
          kaomoji: '(  ᐡᴗ  ̫ ᴗᐡ)',
        },
      },
      triggers: {
        title: 'Parámetros personalizados',
      },
    },
  },
}
