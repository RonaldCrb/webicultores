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
        <Perfiles2 />
      </v-flex>
      <v-flex xs12>
        <Partners />
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
import Partners from '@/components/Partners.vue'
import Bienvenida from '@/components/Bienvenida.vue'
import Perfiles2 from '@/components/Perfiles2.vue'
import BannerGiant from '@/components/BannerGiant.vue'
import TarjeteroDesktop from '@/components/TarjeteroDesktop.vue'
import TarjeteroMobile from '@/components/TarjeteroMobile.vue'

export default {
  components: {
    Perfiles2,
    Partners,
    TarjeteroMobile,
    TarjeteroDesktop,
    BannerGiant,
    Bienvenida
  }
}
</script>
