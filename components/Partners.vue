<template>
  <v-container mb-5>
    <v-layout row wrap justify-center>
      <h2>NUESTROS AMIGOS</h2>
    </v-layout>
    <v-layout row wrap justify-center>
      <v-flex
        v-for="(amigo, i) in amigos"
        :key="i"
        xs12
        sm6
        md3
        pa-2
      >
        <a :href="`${amigo.link}`">
          <v-card class="transparent" flat>
            <v-card-media
              contain
              class="fotos"
              :src="`${amigo.src}`"
              :alt="amigo.titulo"
            />
            <v-card-text>
              <p class="titulo">
                {{ amigo.titulo }}
              </p>
            </v-card-text>
          </v-card>
        </a>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    amigos: [
      {
        titulo: 'El Reto de Vane Herrera',
        link: 'https://lit-chamber-21738.herokuapp.com/',
        src: 'amigos/piña.png'
      },
      {
        titulo: 'Vaper Anaco',
        link: 'https://lit-springs-89652.herokuapp.com/',
        src: 'amigos/VaperAnaco.png'
      },
      {
        titulo: 'Jartate',
        link: '',
        src: ''
      },
      {
        titulo: 'CDlogs',
        link: '',
        src: 'amigos/CDlogs.png'
      }
    ]
  })
}
</script>

<style scoped>
.fotos {
  display: block;
  margin-left: auto;
  margin-right: auto;
  height: 200px;
  width: 200px;
}
.fecha {
  text-align: center;
}
.titulo {
  text-align: center;
}
.ciudad {
  text-align: center;
}
.eventos {
  text-align: center;
}
</style>
