<template>
  <div>
    <BannerGiant />
    <Bienvenida />
    <v-layout row wrap>
      <v-flex xs12>
        <div class="hidden-xs-only">
          <TarjeteroDesktop />
        </div>
        <div class="hidden-sm-and-up">
          <TarjeteroMobile />
        </div>
      </v-flex>
      <v-flex xs12>
        <Partners />
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
import Partners from '@/components/inicio/Partners.vue'
import Bienvenida from '@/components/inicio/Bienvenida.vue'
import BannerGiant from '@/components/inicio/BannerGiant.vue'
import TarjeteroDesktop from '@/components/inicio/TarjeteroDesktop.vue'
import TarjeteroMobile from '@/components/inicio/TarjeteroMobile.vue'

export default {
  components: {
    Partners,
    TarjeteroMobile,
    TarjeteroDesktop,
    BannerGiant,
    Bienvenida
  }
}
</script>
