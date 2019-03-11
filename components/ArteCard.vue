<template>
  <v-layout>
    <v-flex xs12>
      <v-card>
        <img width="100%" class="centroimg" src="~/assets/logo.png">
        <v-container fill-height fluid>
          <v-layout fill-height>
            <v-flex xs12 align-end flexbox>
              <span class="titulo">Arte Visionaria que eleva tu estado de conciencia</span>
            </v-flex>
          </v-layout>
        </v-container>
        <v-card-title>
          <div>
            <span class="intro">Colocar texto relacionado a arte.</span><br>

            <blockquote class="blockquote moto">
              &#8220;Art is never finished, only abandoned.&#8221;
              <footer>
                <small>
                  <em>&mdash;Leonardo Davinci</em>
                </small>
              </footer>
            </blockquote>
          </div>
        </v-card-title>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<style scoped>
.intro {
  font-size: 24px;
}
.moto {
  color: #04bbff;
  font-size: 48px;
  font-style: italic;
}
.titulo {
  color: #ff0375;
  font-size: 3em;
}
</style>
