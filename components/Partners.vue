<template>
  <div class="bg">
    <v-layout row wrap justify-center>
      <h2 class="titulo">
        NUESTROS ALIADOS
      </h2>
      <p>Habitantes de nuestro ecosistema webicultor, desde la raiz hemos integrado a estas Apps aqui en nuestro habitat</p>
      <v-flex
        v-for="(amigo, i) in amigos"
        :key="i"
        xs12
        sm6
        md3
        pa-2
        justify-center
        class="color"
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
  </div>
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
.bg {
  background-color: #ff0375;
}
.bg2 {
  background-color: #ff0375;
}
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
  text-align: center;
  font-size: 2em;
  text-shadow: 4px 4px #5f2ae4;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-family: 'Helvetica' fantasy;
  font-weight: bolder;
  /* background-color: black; */
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
h2:hover {
  letter-spacing: 12px;
}
.transparent {
  box-shadow: 0 0 8px solid red;
  transform: scale(0.5);
  padding-top: 100px;
}
.transparent:hover {
  transform: scale(1);
}
p {
  border-style: none;
  text-decoration: none;
  font-size: 20px;
  text-align: center;
  padding-bottom: 40px;
}
</style>
