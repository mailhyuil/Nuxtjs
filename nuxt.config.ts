// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: 'My Nuxt App',
        },
        pageTransition: { name: 'page', mode: 'out-in' }
    },
    modules: [
        '@nuxtjs/tailwindcss'
    ],
    css: ['~/assets/sass/font.scss'],
})
