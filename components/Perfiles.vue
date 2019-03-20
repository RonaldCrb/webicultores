<template>
  <div>
    <v-layout row>
      <v-flex
        v-for="webicultor in webicultores"
        :key="webicultor.name"
        sm6
        ma-3
        class="hidden-xs-only"
      >
        <v-card :color="webicultor.color" class="white--text">
          <v-layout row>
            <v-flex sm4>
              <v-img
                :src="`${webicultor.img}`"
                contain
                class="perfil"
              />
            </v-flex>
            <v-flex sm8>
              <v-card-title primary-title>
                <div>
                  <h2 class="head">
                    {{ webicultor.headline }}
                  </h2>
                  <h1 class="name">
                    {{ webicultor.name }}
                  </h1>
                  <p class="skills">
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
              <v-layout justify-center row class="icon fondo">
                <div v-if="webicultor.facebook" class="px-3 redes">
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
                <div v-if="webicultor.instagram" class="px-3 redes">
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
                <div v-if="webicultor.youtube" class="px-3 redes">
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
                <div v-if="webicultor.twitter" class="px-3 redes">
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
                <div v-if="webicultor.linkedIn" class="px-3 redes">
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

    <!-- Version para movil -->

    <v-layout row wrap>
      <v-flex
        v-for="webicultor in webicultores"
        :key="webicultor.name"
        xs12
        ma-3
        class="hidden-sm-and-up"
      >
        <v-card :color="webicultor.color" class="white--text">
          <v-layout row d-block>
            <v-flex xs12>
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
                  <h2 class="head">
                    {{ webicultor.headline }}
                  </h2>
                  <h1 class="name">
                    {{ webicultor.name }}
                  </h1>
                  <p class="skills">
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
                <div v-if="webicultor.facebook" class="px-3 redes">
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
                <div v-if="webicultor.instagram" class="px-3 redes">
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
                <div v-if="webicultor.youtube" class="px-3 redes">
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
                <div v-if="webicultor.twitter" class="px-3 redes">
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
                <div v-if="webicultor.linkedIn" class="px-3 redes">
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      webicultores: [
        {
          name: 'Jose Millan',
          img: 'https://i.ebayimg.com/images/g/n9MAAOSwNSxVBtzI/s-l300.jpg',
          headline: 'Artista Grafico Digital',
          skills:
            'Arte Grafico, Desarrollo Frontend, Produccion cinematografica',
          color: '#ff0375',
          bio:
            'Soy un artista grafico dedicado al mundo del desarrollo web, .... ... ... ... ... .... ... .. .. .. . . .',
          moto: 'Sigueme!'
        },
        {
          name: 'Ron Alonzo',
          img: 'RonHelmet.png',
          headline: 'Desarrollador Full Stack',
          skills:
            'Desarrollo frontend y backend con Javascript, SQL, Firebase, Ruby, Python',
          color: '#04bbff',
          bio:
            'Puedo desarrollar profesionalmente en Javascript y Ruby on Rails. amo el ecosistema de nodejs y puedo aprender y sobresalir en cualquier cosa relacionada con NodeJS, Aprendo muy rapido, algunos de mis proyectos personales incluyen software de auditoría y aseguramiento, control documental en la nube, gestión de riesgos utilizando AI para calcular los factores de riesgo asociados con las operaciones industriales, Remesas y servicios de pago en la nube, por nombrar algunos. Puedo dirigir a cualquier individuo o grupo en un esfuerzo conjunto de forma pragmática, eficiente en movimientos centrados en el exito y dentro del contexto de los objetivos propuestos... la confianza, el liderazgo y la iniciativa son naturales para mí, provengo de la industria de la construccion submarina petrolera',
          moto: 'Follow me!',
          linkedIn: 'https://www.linkedin.com/in/ronaldalonzo/',
          twitter: 'https://twitter.com/RonaldCrb',
          facebook: 'https://www.facebook.com/alonzo.ronald',
          youtube: 'https://www.youtube.com/channel/UCvA-UAOnvajhrnNW2jDN0Aw'
        }
      ]
    }
  }
}
</script>

<style scoped>
.perfil {
  padding: 30px;
  height: 250px;
  width: auto;
}
.bggray {
  background-color: #424242;
}
.moto {
  color: #424242;
  font-style: italic;
  font-size: 1.6em;
  padding-right: 20px;
}
.bio {
  font-style: italic;
  font-size: 1.4em;
  color: #424242;
}
.skills {
  color: #424242;
  font-size: 1.2;
}
.name {
  color: #424242;
}
.head {
  color: #212121;
}
.redes {
  opacity: 0.4;
  transition: 0.2s;
  transform: scale(0.9);
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
  width: 20%;
  flex-grow: 20%;
  height: 10%;
  opacity: 0;
  content: '';
  margin-top: 10px;
  transition: 0.2s;
  position: absolute;
  filter: blur(18px);
  transition: 0.4s;
  background: linear-gradient(45deg, #ff0375, #5f2ae4, #04bbff);
}
.fondo:hover:before {
  mix-blend-mode: lighten;
  opacity: 0.9;
}
</style>
