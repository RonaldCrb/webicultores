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
        <div class="hidden-sm-and-up">
          <PerfilesMobile />
        </div>
        <div class="hidden-xs-only">
          <Perfiles2 />
        </div>
      </v-flex>
      <v-flex xs12>
        <AmigosForm />
        <Partners />
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
import AmigosForm from '@/components/AmigosForm.vue'
import Partners from '@/components/Partners.vue'
import Bienvenida from '@/components/Bienvenida.vue'
import PerfilesMobile from '@/components/PerfilesMobile.vue'
import Perfiles2 from '@/components/Perfiles2.vue'
import BannerGiant from '@/components/BannerGiant.vue'
import TarjeteroDesktop from '@/components/TarjeteroDesktop.vue'
import TarjeteroMobile from '@/components/TarjeteroMobile.vue'

export default {
  components: {
    AmigosForm,
    Perfiles2,
    PerfilesMobile,
    Partners,
    TarjeteroMobile,
    TarjeteroDesktop,
    BannerGiant,
    Bienvenida
  }
}
</script>
