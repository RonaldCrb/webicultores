<template>
  <div>
    <BannerGiant />

    <v-layout row wrap>
      <v-flex xs12 class="hidden-sm-and-up">
        <TarjeteroMobile />
      </v-flex>
      <v-flex xs12 class="hidden-xs-only">
        <TarjeteroDesktop />
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
import BannerGiant from '@/components/BannerGiant.vue'
import TarjeteroDesktop from '@/components/TarjeteroDesktop.vue'
import TarjeteroMobile from '@/components/TarjeteroMobile.vue'

export default {
  components: {
    TarjeteroMobile,
    TarjeteroDesktop,
    BannerGiant
  }
}
</script>
