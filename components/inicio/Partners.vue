<template>
  <div class="bg">
    <v-layout row wrap justify-center>
      <v-flex xs12>
        <h2 class="titulo">
          NUESTROS ALIADOS
        </h2>
        <p class="contenido hidden-sm-and-up">
          Habitantes de nuestro ecosistema webicultor, desde la raiz hemos integrado a estas Apps aqui en nuestro habitat
        </p>
        <p class="contenido2 hidden-xs-only">
          Habitantes de nuestro ecosistema webicultor, desde la raiz hemos integrado a estas Apps aqui en nuestro habitat
        </p>
      </v-flex>
      <v-flex
        v-for="(amigo, i) in partners"
        :key="i"
        xs12
        sm6
        md3
        px-2
        fill-height
        justify-center
        class="color"
      >
        <v-card class="transparent" flat>
          <a class="aliados" :href="`${amigo.link}`">
            <v-img
              contain
              class="fotos"
              :src="`${amigo.src}`"
              :alt="amigo.titulo"
            />
            <v-card-text>
              <span class="links">
                {{ amigo.title }}
              </span>
            </v-card-text>
          </a>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  data: () => ({
    dialog: false
  }),
  computed: {
    partners() {
      return this.$store.state.comunidad.partners
    }
  }
}
</script>

<style scoped>
.bg {
  background-color: #ff0375;
}
.aliados {
  text-decoration-line: none;
}
.transparent {
}
.fotos:hover {
  transform: scale(1);
}
.fotos {
  box-shadow: 0 0 8px solid red;
  transform: scale(0.8);
  display: block;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  height: 200px;
  transition: 0.4s;
}
.fecha {
  text-align: center;
}
.titulo {
  text-align: center;
  font-size: 3em;
  text-shadow: 4px 4px #5f2ae4;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-family: 'Helvetica' fantasy;
  font-weight: bolder;
  padding-top: 40px;
  color: white;
  transition: 0.6s;
}
.titulo:hover {
  letter-spacing: 12px;
}
.contenido {
  border-style: none;
  text-decoration: none;
  font-size: 20px;
  text-align: center;
  padding-bottom: 40px;
  font-size: 1.5em;
}
.contenido2 {
  border-style: none;
  text-decoration: none;
  font-size: 20px;
  text-align: center;
  padding-bottom: 40px;
  font-size: 2em;
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
.links {
  text-align: center;
  font-size: 2em;
  color: black;
  text-transform: uppercase;
  font-family: 'Helvetica' fantasy;
  font-weight: bolder;
}
</style>
