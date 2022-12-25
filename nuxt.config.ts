// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: 'My Nuxt App',
        }
    },
    modules: [
        '@nuxtjs/tailwindcss'
    ],
    css: ['~/assets/sass/font.scss'],
})
