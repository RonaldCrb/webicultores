<template>
  <v-layout>
    <v-flex xs12>
      <v-card>
        <img width="100%" src="~/assets/webi.jpg">
        <v-container fill-height fluid>
          <v-layout fill-height>
            <v-flex xs12 align-end flexbox>
              <span class="titulo">Apps que agradan a tus sentidos y manejan tu
                data de forma eficiente</span>
            </v-flex>
          </v-layout>
        </v-container>
        <v-card-title>
          <div>
            <span class="intro">La webicultura es un concepto que desarrollamos
              y practicamos todos los dias, y lo definimos como el proceso diario
              de resolver problemas de forma creativa. En este concepto se mezclan
              el arte con la ciencia, la ingenieria con la artesania, la realidad con la
              creatividad; Creamos aplicaciones que resuelven problemas reales para personas
              y empresas reales, ponemos las herramientas mas modernas en las manos
              de los Webicultores emergentes con las ideas mas creativas y elegantes</span><br>
            <blockquote class="blockquote moto">
              &#8220;If i have seen further it is by standing on the shoulders of giants.&#8221;
              <footer>
                <small>
                  <em>&mdash;Isaac Newton</em>
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
