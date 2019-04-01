<template>
  <v-layout justify-center>
    <v-flex xs10 pt-5>
      <v-card>
        <v-container grid-list-sm>
          <v-layout row wrap justify-center>
            <v-flex
              v-for="(pieza, i) in coleccion"
              :key="i"
              xs4
            >
              <DialogoGaleria
                :src="`${pieza.src}`"
                :titulo="`${pieza.titulo}`"
                :color="`${pieza.color}`"
              />
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import DialogoGaleria from '@/components/DialogoGaleria.vue'
export default {
  components: {
    DialogoGaleria
  },
  data() {
    return {
      coleccion: [
        // Colocar las imagenes de la galeria en la carpeta static/galeria
        // y referenciarlas como (EJ 'galeria/imagen1.png')
        { src: 'icons/AppsF.png', color: '#fff', titulo: 'apps' },
        { src: 'icons/AppsF.png', color: '#000', titulo: 'apps' },
        { src: 'icons/AppsF.png', color: '#fff', titulo: 'apps' },
        { src: 'icons/AppsF.png', color: '#fff', titulo: 'apps' },
        { src: 'icons/AppsF.png', color: '#000', titulo: 'apps' },
        { src: 'icons/AppsF.png', color: '#fff', titulo: 'apps' }
      ]
    }
  }
}
</script>

<style scoped>
</style>
