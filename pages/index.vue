<template>
  <v-container fluid>
    <v-layout>
      <v-flex xs12>
        <img width="100%" src="~/assets/bg-web.jpg">
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 class="hidden-sm-and-up">
        <TarjeteroMobile />
      </v-flex>
      <v-flex xs12 class="hidden-xs-only">
        <TarjeteroDesktop />
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import TarjeteroDesktop from '@/components/TarjeteroDesktop.vue'
import TarjeteroMobile from '@/components/TarjeteroMobile.vue'

export default {
  components: {
    TarjeteroMobile,
    TarjeteroDesktop
  }
}
</script>
