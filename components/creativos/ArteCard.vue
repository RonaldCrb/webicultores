<template>
  <v-layout>
    <v-flex xs12>
      <v-card class="bg">
        <img class="centroimg" src="~/assets/banners/bannerC.jpg">
        <v-container fill-height fluid>
          <v-layout column fill-height>
            <v-flex xs12 align-end flexbox>
              <v-flex class="hidden-md-and-down">
                <img class="venado" src="~/assets/banners/venad2.png">
              </v-flex>
              <v-flex fixed class="hidden-lg-and-up hidden-sm-and-down">
                <img class="venado2" src="~/assets/banners/venad2.png">
              </v-flex>
              <v-flex fixed class="hidden-sm-and-up">
                <img class="venado3" src="~/assets/banners/venad2.png">
              </v-flex>
              <v-card-title class="margen">
                <span class="titulo">Arte y conceptos ultilizados para inspirar</span>
                <div>
                  <span class="intro">Busca lo que realmente disfrutas hacer</span><br>

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
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</template>


<style scoped>
.intro {
  color: black;
  font-size: 24px;
}
.frase {
  color: #04bbff;
  font-size: 48px;
  font-style: italic;
}
.titulo {
  color: #ff0375;
  font-size: 4em;
}
.centroimg {
  width: 100%;
  background-image: black;
}
.venado {
  position: absolute;
  margin-left: 1100px;
  margin-top: -660px;
}
.venado2 {
  position: absolute;
  margin-top: -420px;
  margin-left: 800px;
  width: 400px;
}
.venado3 {
  position: absolute;
  margin-top: -140px;
  margin-left: 220px;
  width: 160px;
}
.bg {
  background: linear-gradient(yellow, white);
}
.margen {
  margin-left: 40px;
  margin-top: 20px;
}
</style>
