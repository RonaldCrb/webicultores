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
import NavBar from '@/components/layouts/NavBar'
import WebiFooter from '@/components/layouts/WebiFooter.vue'

export default {
  components: {
    NavBar,
    WebiFooter
  }
}
</script>
