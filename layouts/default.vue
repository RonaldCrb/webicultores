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
  }
}
</script>
