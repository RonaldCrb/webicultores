<template>
  <div>
    <v-container fluid>
      <v-layout column>
        <v-flex v-for="card in cardItems" :key="card.title" xs12 pa-1>
          <v-card class="tarjetas">
            <v-layout row wrap>
              <v-flex xs12 sm6>
                <img class="fotos" :src="card.src">
              </v-flex>
              <v-flex xs12 sm6>
                <v-card-title primary-title>
                  <h1>{{ card.title }}</h1>
                </v-card-title>
                <v-card-text class="ma-1">
                  {{ card.content }}
                </v-card-text>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cardItems: [
        {
          src:
            'http://xpeeriencegroup.com/wp-content/uploads/2017/05/ultimate-frisbee.jpg',
          title: 'Campo Norte Cancha de futbol',
          content: 'es uno de los campos en mejores condiciones de Anaco'
        },
        {
          src:
            'https://currentnewspapers.com/wp-content/uploads/2017/04/Wilson-Ultimate-Frisbee-2017.jpg',
          title: 'Campo Norte Cancha de practica Baseball',
          content: 'Normalmente hay bastante brisa desde el noreste'
        },
        {
          src:
            'https://www.grana.com/themodern/wp-content/uploads/2017/03/grana_frisbee_4.jpg',
          title: 'Campo Norte Cancha de golf',
          content:
            'este campo no esta nivelado y solo lo usamos para trickshots'
        },
        {
          src:
            'https://ultiworld.com/wordpress/wp-content/uploads/2016/01/USAU-NATS_Thu_20131017_202743_BC4_04207-ZF-2481-60912-1-001.jpg',
          title: 'Parque las ballenas, cancha de futbol',
          content:
            'aqui fue donde empezamos a entrenar, actualmente lo hemos abandonado un poco por cuestiones de falta de mantenimiento'
        }
      ]
    }
  }
}
</script>

<style scoped>
.fotos {
  border-radius: 20px;
  max-width: 100%;
  height: auto;
}
.tarjetas {
  border-radius: 20px;
}
.american {
  color: blue;
}
</style>
