import options from './options.json'
export default {
	target: 'static',
	components: true,
	axios: { baseURL: '/' },
	loading: { color: '#fff' },
	generate: {
	  async routes() {
			const { $content } = require('@nuxt/content')
			const files = await $content({ deep: true }).only(['path']).fetch()
			return files.map(file => file.path === '/index' ? '/' : file.path)
		}
	},
	env: {
		title: options.title,
		author: options.author,
		description: options.description,
		keywords: options.keywords
	},
	colorMode: {
		preference: 'light',
		fallback: 'light',
		hid: 'nuxt-color-mode-script',
		globalName: '__NUXT_COLOR_MODE__',
		componentName: 'ColorScheme',
		classPrefix: '',
		classSuffix: '-mode',
		storageKey: 'nuxt-color-mode'
	},
  modules: [
		'@nuxt/content',
		'@nuxtjs/moment',
		'@nuxtjs/color-mode',
    '@nuxtjs/style-resources'
  ],
  styleResources: { sass: [ './assets/*.sass' ] },
  build: {
    extend (config, ctx) {},
    build: {
      postcss: {
        plugins: {
          'postcss-url': false,
          'postcss-nested': {},
          'postcss-responsive-type': {},
          'postcss-hexrgba': {}
        },
        preset: { autoprefixer: { grid: true } }
      }
    }
  }
}
