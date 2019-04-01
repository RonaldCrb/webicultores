<template>
  <div>
    <ComandoUltimateParallax />
    <Perfiles2 />
    <ComandoUltimateTarjetero />
  </div>
</template>

<script>
import ComandoUltimateParallax from '@/components/ComandoUltimateParallax.vue'
import ComandoUltimateTarjetero from '@/components/ComandoUltimateTarjetero.vue'
import Perfiles2 from '@/components/Perfiles2.vue'

export default {
  components: {
    Perfiles2,
    ComandoUltimateParallax,
    ComandoUltimateTarjetero
  }
}
</script>
