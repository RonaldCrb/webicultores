<template>
  <div>
    <v-layout column justify-center>
      <h1 class="titulo">
        Conoce a los Webicultores
      </h1>
      <v-flex
        v-for="webicultor in fundadores"
        :key="webicultor.name"
        xs12
        fill-height
      >
        <v-layout row wrap>
          <v-flex
            xs12
            ma-3
          >
            <v-card :color="webicultor.color" class="white--text">
              <v-layout row>
                <v-flex xs12 pt-3>
                  <v-img
                    :src="`${webicultor.img}`"
                    contain
                    class="perfil"
                  />
                </v-flex>
              </v-layout>

              <v-layout row d-block>
                <v-flex xs12>
                  <v-card-title primary-title>
                    <div>
                      <h2 class="head text-xs-center">
                        {{ webicultor.headline }}
                      </h2>
                      <h1 class="name text-xs-center">
                        {{ webicultor.name }}
                      </h1>
                      <p class="skills text-xs-center">
                        {{ webicultor.skills }}
                      </p>
                      <p class="bio">
                        {{ webicultor.bio }}
                      </p>
                    </div>
                  </v-card-title>
                </v-flex>
              </v-layout>
              <v-divider light />
              <v-card-actions class="pa-3 bggray">
                <v-spacer />
                <div>
                  <v-layout justify-center row class="icon">
                    <div v-if="webicultor.facebook" class="px-1 redes">
                      <a
                        target="_blank"
                        title="Siguenos en Facebook"
                        :href="`${webicultor.facebook}`"
                      >
                        <img
                          width="36px"
                          alt="Siguenos en Facebook"
                          src="~/assets/redes/face.png"
                          border="0"
                        >
                      </a>
                    </div>
                    <div v-if="webicultor.instagram" class="px-1 redes">
                      <a
                        target="_blank"
                        title="Siguenos en Instagram"
                        :href="`${webicultor.instagram}`"
                      >
                        <img
                          class=""
                          width="36"
                          alt="Siguenos en Instagram"
                          src="~/assets/redes/instagram.png"
                          border="0"
                        >
                      </a>
                    </div>
                    <div v-if="webicultor.youtube" class="px-1 redes">
                      <a
                        target="_blank"
                        title="Sigueme en Youtube"
                        :href="`${webicultor.youtube}`"
                      >
                        <img
                          width="48"
                          class=""
                          alt="Sigueme en Youtube"
                          src="~/assets/redes/youtube.png"
                          border="0"
                        >
                      </a>
                    </div>
                    <div v-if="webicultor.twitter" class="px-1 redes">
                      <a
                        target="_blank"
                        title="Sigueme en Twitter"
                        :href="`${webicultor.twitter}`"
                      >
                        <img
                          width="42"
                          class=""
                          alt="Sigueme en Twitter"
                          src="~/assets/redes/twitter.png"
                          border="0"
                        >
                      </a>
                    </div>
                    <div v-if="webicultor.linkedIn" class="px-1 redes">
                      <a
                        target="_blank"
                        title="Sigueme en LinkedIn"
                        :href="`${webicultor.linkedIn}`"
                      >
                        <img
                          alt="Sigueme en LinkedIn"
                          height="40px"
                          width="40px"
                          src="https://www.allphincom.com/images/site/linkedin_icon_white.png"
                          border="0"
                        >
                      </a>
                    </div>
                  </v-layout>
                </div>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  computed: {
    fundadores() {
      return this.$store.state.fundadores.fundadores
    }
  }
}
</script>

<style scoped>
.icon {
  justify-content: center;
}
.perfil {
  margin: auto;
  filter: grayscale(1);
  border-style: inset;
  height: 160px;
  width: 160px;
  border: 1px solid #5f2ae4;
  border-radius: 50%;
  box-shadow: 4px 4px 2px #000;
  transition: 0.3s;
}
.perfil:hover:before {
  content: '';
  left: -2px;
  top: -2px;
  width: 165px;
  height: 165px;
  mix-blend-mode: lighten;
  position: absolute;
  border-radius: 50%;
  border: 3px solid #ff0375;
  transition: 0.8s 0.4s;
  opacity: 1;
}
.perfil:hover {
  filter: grayscale(0);
  box-shadow: 0 0 4px #5f2ae4;
}
.perfil::before {
  content: '';
  top: -2px;
  left: -2px;
  opacity: 0;
  width: 165px;
  height: 165px;
  position: absolute;
  border-radius: 50%;
  border: 3px solid #ff0375;
  box-shadow: 0 0 4px #5f2ae4;
}
.bggray {
  background-color: #151515;
}
.moto {
  color: #424242;
  font-style: italic;
  font-size: 1.6em;
  padding-right: 20px;
}
.bio {
  letter-spacing: 1px;
  text-align: justify;
  font-style: italic;
  font-size: 1em;
  color: #04bbff;
  opacity: 0.6;
}
.skills {
  color: white;
  opacity: 0.5;
  font-size: 1.2;
  transition: 0.8s;
}
.skills:hover {
  opacity: 1;
}
.name {
  color: white;
}
.head {
  color: grey;
}
.redes {
  opacity: 0.4;
  transition: 0.2s;
  transform: scale(0.6);
}
.redes:hover {
  opacity: 1;
  transform: scale(1);
}
.redes:hover:before {
  left: 0;
  content: '';
  z-index: -1;
  width: 100%;
  height: 80%;
  filter: blur(12px);
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(45deg, #ff0375, #5f2ae4, #04bbff);
}
.fondo::before {
  width: 36%;
  height: 40px;
  opacity: 0;
  content: '';
  margin-top: 5px;
  transition: 0.2s;
  position: absolute;
  filter: blur(18px);
  transition: 0.4s;
  background: linear-gradient(45deg, #ff0375, #5f2ae4, #04bbff);
}
.fondo:hover:before {
  mix-blend-mode: lighten;
  opacity: 0.2;
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
</style>
