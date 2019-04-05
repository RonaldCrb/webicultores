<template>
  <div>
    <ComandoUltimateParallax />
    <Perfiles2 />
    <TarjetaComunidadForm />
    <ComandoUltimateTarjetero />
  </div>
</template>

<script>
import TarjetaComunidadForm from '@/components/TarjetaComunidadForm.vue'
import ComandoUltimateParallax from '@/components/ComandoUltimateParallax.vue'
import ComandoUltimateTarjetero from '@/components/ComandoUltimateTarjetero.vue'
import Perfiles2 from '@/components/Perfiles2.vue'

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
