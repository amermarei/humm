// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['nuxt-icon', '@nuxtjs/apollo'],
  
  apollo: {
    clients: {
      default: {
        httpEndpoint: 'https://board.humm.world/graphql'
      }
    },
  },
    css: [
        "@fortawesome/fontawesome-free/css/all.min.css" , "assets/css/main.scss"
    ],
    app: {
        head: {
            link: [
                {
                href: "https://fonts.gstatic.com",
                rel:"preconnect"
                },
                {
                href: "https://fonts.googleapis.com",
                rel:"preconnect"
                },
                {
                href: "https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;500;600;700;800;900;1000&display=swap",
                rel:"stylesheet"
                },
                {
                  rel: "stylesheet",
                    href: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css",
                    integrity: "sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC",
                    crossorigin : "anonymous"
                },
              ],
            script: [
                {
                    src: "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js",
                    integrity: "sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM",
                    crossorigin : "anonymous"
                  }
              ]
      },
      pageTransition: {
        name: 'page',
        mode: 'out-in' 
      },
      layoutTransition: { name: 'layout', mode: 'out-in' }
    }
    
      
})
