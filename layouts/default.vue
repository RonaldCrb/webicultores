<template>
  <v-app dark>
    <NavBar />
    <v-content>
      <nuxt />
    </v-content>
    <WebiFooter />
  </v-app>
</template>

<script>
import NavBar from '@/components/NavBar'
import WebiFooter from '@/components/WebiFooter.vue'

export default {
  components: {
    NavBar,
    WebiFooter
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'bubble_chart',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
