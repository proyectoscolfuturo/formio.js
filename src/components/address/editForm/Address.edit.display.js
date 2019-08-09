export default [
  {
    type: 'container',
    key: 'map',
    input: true,
    weight: 610,
    components: [
      {
        type: 'textfield',
        input: true,
        label: 'Region Bias',
        key: 'region',
        tooltip: "La región a usar para esta búsqueda. Ver <a href='https://developers.google.com/maps/documentation/geocoding/intro#RegionCodes' target='_blank'>Region Biasing</a> para más información.",
        placeholder: 'Dallas'
      },
      {
        type: 'textfield',
        input: true,
        label: 'Google Maps API Key',
        key: 'key',
        tooltip: "Llave de API para Google Maps. Ver <a href='https://developers.google.com/maps/documentation/geocoding/get-api-key' target='_blank'>Get an API Key</a> para más información.",
        placeholder: 'xxxxxxxxxxxxxxxxxxx-xxxxxxxxxxxxxxxxxxx'
      },
      {
        type: 'select',
        input: true,
        label: 'Language',
        key: 'language',
        tooltip: 'Language',
        placeholder: 'Lenguaje',
        dataSrc: 'custom',
        valueProperty: 'value',
        data: {
          custom: [
            {
              value: 'af',
              label: 'Afrikaans'
            },
            {
              value: 'sq',
              label: 'Albanian'
            },
            {
              value: 'am',
              label: 'Amharic'
            },
            {
              value: 'ar',
              label: 'Arabic'
            },
            {
              value: 'hy',
              label: 'Armenian'
            },
            {
              value: 'az',
              label: 'Azerbaijani'
            },
            {
              value: 'eu',
              label: 'Basque'
            },
            {
              value: 'be',
              label: 'Belarusian'
            },
            {
              value: 'bn',
              label: 'Bengali'
            },
            {
              value: 'bs',
              label: 'Bosnian'
            },
            {
              value: 'bg',
              label: 'Bulgarian'
            },
            {
              value: 'my',
              label: 'Burmese'
            },
            {
              value: 'ca',
              label: 'Catalan'
            },
            {
              value: 'zh',
              label: 'Chinese'
            },
            {
              value: 'zh-CN',
              label: 'Chinese (Simplified)'
            },
            {
              value: 'zh-HK',
              label: 'Chinese (Hong Kong)'
            },
            {
              value: 'zh-TW',
              label: 'Chinese (Traditional)'
            },
            {
              value: 'hr',
              label: 'Croatian'
            },
            {
              value: 'cs',
              label: 'Czech'
            },
            {
              value: 'da',
              label: 'Danish'
            },
            {
              value: 'nl',
              label: 'Dutch'
            },
            {
              value: 'en',
              label: 'English'
            },
            {
              value: 'en-AU',
              label: 'English (Australian)'
            },
            {
              value: 'en-GB',
              label: 'English (Great Britain)'
            },
            {
              value: 'et',
              label: 'Estonian'
            },
            {
              value: 'fa',
              label: 'Farsi'
            },
            {
              value: 'fi',
              label: 'Finnish'
            },
            {
              value: 'fil',
              label: 'Filipino'
            },
            {
              value: 'fr',
              label: 'French'
            },
            {
              value: 'fr-CA',
              label: 'French (Canada)'
            },
            {
              value: 'gl',
              label: 'Galician'
            },
            {
              value: 'ka',
              label: 'Georgian'
            },
            {
              value: 'de',
              label: 'German'
            },
            {
              value: 'el',
              label: 'Greek'
            },
            {
              value: 'gu',
              label: 'Gujarati'
            },
            {
              value: 'iw',
              label: 'Hebrew'
            },
            {
              value: 'hi',
              label: 'Hindi'
            },
            {
              value: 'hu',
              label: 'Hungarian'
            },
            {
              value: 'is',
              label: 'Icelandic'
            },
            {
              value: 'id',
              label: 'Indonesian'
            },
            {
              value: 'it',
              label: 'Italian'
            },
            {
              value: 'ja',
              label: 'Japanese'
            },
            {
              value: 'kn',
              label: 'Kannada'
            },
            {
              value: 'kk',
              label: 'Kazakh'
            },
            {
              value: 'km',
              label: 'Khmer'
            },
            {
              value: 'ko',
              label: 'Korean'
            },
            {
              value: 'ky',
              label: 'Kyrgyz'
            },
            {
              value: 'lo',
              label: 'Lao'
            },
            {
              value: 'lv',
              label: 'Latvian'
            },
            {
              value: 'lt',
              label: 'Lithuanian'
            },
            {
              value: 'mk',
              label: 'Macedonian'
            },
            {
              value: 'ms',
              label: 'Malay'
            },
            {
              value: 'ml',
              label: 'Malayalam'
            },
            {
              value: 'mr',
              label: 'Marathi'
            },
            {
              value: 'mn',
              label: 'Mongolian'
            },
            {
              value: 'ne',
              label: 'Nepali'
            },
            {
              value: 'no',
              label: 'Norwegian'
            },
            {
              value: 'pl',
              label: 'Polish'
            },
            {
              value: 'pt',
              label: 'Portuguese'
            },
            {
              value: 'pt-BR',
              label: 'Portuguese (Brazil)'
            },
            {
              value: 'pt-PT',
              label: 'Portuguese (Portugal)'
            },
            {
              value: 'pa',
              label: 'Punjabi'
            },
            {
              value: 'ro',
              label: 'Romanian'
            },
            {
              value: 'ru',
              label: 'Russian'
            },
            {
              value: 'sr',
              label: 'Serbian'
            },
            {
              value: 'si',
              label: 'Sinhalese'
            },
            {
              value: 'sk',
              label: 'Slovak'
            },
            {
              value: 'sl',
              label: 'Slovenian'
            },
            {
              value: 'es',
              label: 'Spanish'
            },
            {
              value: 'es-419',
              label: 'Spanish (Latin America)'
            },
            {
              value: 'sw',
              label: 'Swahili'
            },
            {
              value: 'sv',
              label: 'Swedish'
            },
            {
              value: 'ta',
              label: 'Tamil'
            },
            {
              value: 'te',
              label: 'Telugu'
            },
            {
              value: 'th',
              label: 'Thai'
            },
            {
              value: 'tr',
              label: 'Turkish'
            },
            {
              value: 'uk',
              label: 'Ukrainian'
            },
            {
              value: 'ur',
              label: 'Urdu'
            },
            {
              value: 'uz',
              label: 'Uzbek'
            },
            {
              value: 'vi',
              label: 'Vietnamese'
            },
            {
              value: 'zu',
              label: 'Zulu'
            }
          ]
        }
      }

    ]
  }
];
