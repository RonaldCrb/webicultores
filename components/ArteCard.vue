<template>
  <v-layout>
    <v-flex mt-5 xs12>
      <v-card class="bg">
        <img class="centroimg" src="~/assets/banners/bannerC.jpg">
        <v-container fill-height fluid>
          <v-layout column fill-height>
            <v-flex xs12 align-end flexbox>
              <v-card-title class="margen">
                <span class="titulo">Creando diseños conceptuales y personajes</span>
                <div>
                  <span class="intro">Arte digital.</span><br>

                  <blockquote class="blockquote frase">
                    &#8220;Art is never finished, only abandoned.&#8221;
                    <footer>
                      <small>
                        <em>&mdash;Leonardo Davinci</em>
                      </small>
                    </footer>
                  </blockquote>
                </div>
              </v-card-title>
              <v-flex justify-end align-end left>
                <img class="venado" src="~/assets/banners/venad2.png">
              </v-flex>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</template>


<style scoped>
.intro {
  font-size: 24px;
}
.frase {
  color: #04bbff;
  font-size: 48px;
  font-style: italic;
}
.titulo {
  color: #ff0375;
  font-size: 3em;
}
.centroimg {
  width: 100%;
  background-image: black;
}
.venado {
  position: absolute;
  margin-left: 1200px;
  margin-top: -1000px;
}
.bg {
  background-color: white;
}
.margen {
  margin-left: 40px;
  margin-top: 40px;
}
</style>
