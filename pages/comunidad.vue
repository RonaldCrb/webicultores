<template>
  <div>
    <ComunidadParallax />
    <div class="hidden-xs-only">
      <v-container>
        <v-layout row wrap>
          <v-flex xs10 offset-xs1>
            <Perfiles2 />
            <TarjetaComunidadForm />
            <ComunidadTarjetero />
          </v-flex>
        </v-layout>
      </v-container>
    </div>
    <div class="hidden-sm-and-up">
      <PerfilesMobile />
      <v-layout row wrap>
        <v-flex xs12>
          <ComunidadTarjetero />
          <TarjetaComunidadForm />
        </v-flex>
      </v-layout>
    </div>
  </div>
</template>

<script>
import TarjetaComunidadForm from '@/components/comunidad/TarjetaComunidadForm'
import ComunidadParallax from '@/components/comunidad/ComunidadParallax'
import ComunidadTarjetero from '@/components/comunidad/ComunidadTarjetero'
import Perfiles2 from '@/components/comunidad/Perfiles2'
import PerfilesMobile from '@/components/comunidad/PerfilesMobile'

export default {
  components: {
    Perfiles2,
    PerfilesMobile,
    ComunidadParallax,
    ComunidadTarjetero,
    TarjetaComunidadForm
  },
  fetch({ store }) {
    return store.dispatch('comunidad/setTarjetasComunidad')
  }
}
</script>
