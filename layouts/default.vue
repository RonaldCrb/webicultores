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
<style>
body {
  font-family: Montserrat, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
</style>
