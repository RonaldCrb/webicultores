<template>
  <v-container flex row mb-5>
    <v-layout row wrap justify-center>
      <div flex fluid justify-center class="">
        <h2>NUESTROS ALIADOS</h2>
        <p>Habitantes de nuestro ecosistema webicultor, desde la raiz hemos integrado a estas Apps aqui en nuestro habitad</p>
      </div>
    </v-layout>
    <v-layout flex fluid class="color" row justify-center>
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
  height: 150px;
  transition: 0.8s;
}
.fecha {
  text-align: center;
}
.titulo {
  text-decoration: none;
  color: black;
  text-align: center;
}
.ciudad {
  text-align: center;
}
.eventos {
  text-align: center;
}
.color {
  display: flex;
  max-width: 100%;
  height: 400px;
  background-color: white;
}
h2 {
  text-align: center;
  padding-top: 100px;
  letter-spacing: 10px;
  text-shadow: 0 0 12px #5f2ae4;
  /* color: #130e1a; */
  color: white;
  font-size: 50px;
  transition: 0.6s;
}
/* h2:hover {
  text-shadow: 2px 2px #5f2ae4;
  letter-spacing: 0px;
  letter-spacing: 10px;
  text-shadow: 0 0 12px #5f2ae4;
  font-size: 40px;
  color: white;
} */
.transparent {
  border-color: 4px 4px red;
  padding-top: 100px;
}
p {
  font-size: 20px;
  text-align: center;
  padding-bottom: 40px;
}
</style>
