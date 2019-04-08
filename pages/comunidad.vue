<template>
  <div>
    <ComunidadParallax />
    <Perfiles2 />
    <TarjetaComunidadForm />
    <ComunidadTarjetero />
  </div>
</template>

<script>
import TarjetaComunidadForm from '@/components/comunidad/TarjetaComunidadForm'
import ComunidadParallax from '@/components/comunidad/ComunidadParallax'
import ComunidadTarjetero from '@/components/comunidad/ComunidadTarjetero'
import Perfiles2 from '@/components/comunidad/Perfiles2'

export default {
  components: {
    Perfiles2,
    ComunidadParallax,
    ComunidadTarjetero,
    TarjetaComunidadForm
  },
  fetch({ store }) {
    return store.dispatch('comunidad/setTarjetasComunidad')
  }
}
</script>
