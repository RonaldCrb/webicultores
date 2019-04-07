<template>
  <div>
    <ComandoUltimateParallax />
    <Perfiles2 />
    <TarjetaComunidadForm />
    <ComandoUltimateTarjetero />
  </div>
</template>

<script>
import TarjetaComunidadForm from '@/components/comunidad/TarjetaComunidadForm.vue'
import ComandoUltimateParallax from '@/components/comunidad/ComandoUltimateParallax.vue'
import ComandoUltimateTarjetero from '@/components/comunidad/ComandoUltimateTarjetero.vue'
import Perfiles2 from '@/components/comunidad/Perfiles2.vue'

export default {
  components: {
    Perfiles2,
    ComandoUltimateParallax,
    ComandoUltimateTarjetero,
    TarjetaComunidadForm
  },
  fetch({ store }) {
    return store.dispatch('comunidad/setTarjetasComunidad')
  }
}
</script>
