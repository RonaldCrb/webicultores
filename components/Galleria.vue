<template>
  <v-layout>
    <v-flex xs12 sm6 pt-5 pl-4>
      <v-card>
        <v-container grid-list-sm fluid>
          <v-layout row wrap justify-center>
            <v-flex
              v-for="(pieza, i) in coleccion"
              :key="i"
              xs4
              d-flex
            >
              <v-card flat tile class="d-flex">
                <v-img
                  :src="`${pieza.src}`"
                  aspect-ratio="1"
                  :alt="`${pieza.titulo}`"
                  class="grey lighten-2"
                >
                  <template v-slot:placeholder>
                    <v-layout
                      fill-height
                      align-center
                      justify-center
                      ma-0
                    >
                      <v-progress-circular indeterminate color="grey lighten-5" />
                    </v-layout>
                  </template>
                </v-img>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      coleccion: [
        // Colocar las imagenes de la galeria en la carpeta static/galeria
        // y referenciarlas como (EJ 'galeria/imagen1.png')
        { src: 'icons/AppsF.png', titulo: 'apps' },
        { src: 'icons/ComunidadF.png', titulo: 'comunidad' },
        { src: 'icons/CreativosF.png', titulo: 'creativos' },
        { src: 'icons/MarketingF.png', titulo: 'marketing' },
        { src: 'icons/AppsF.png', titulo: 'apps' },
        { src: 'icons/ComunidadF.png', titulo: 'comunidad' },
        { src: 'icons/CreativosF.png', titulo: 'creativos' },
        { src: 'icons/MarketingF.png', titulo: 'marketing' },
        { src: 'icons/AppsF.png', titulo: 'apps' },
        { src: 'icons/ComunidadF.png', titulo: 'comunidad' },
        { src: 'icons/CreativosF.png', titulo: 'creativos' },
        { src: 'icons/MarketingF.png', titulo: 'marketing' }
      ]
    }
  }
}
</script>
