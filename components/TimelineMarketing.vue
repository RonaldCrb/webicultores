<template>
  <v-container fluid>
    <v-flex fluid xs12>
      <v-timeline align-top class="hidden-xs-only">
        <v-timeline-item
          v-for="item in timelineItemsMarketing"
          :key="item.title"
          :color="item.color"
          fill-dot
          dark
        >
          <v-card :color="item.color">
            <v-layout row wrap>
              <v-flex xs12>
                <img class="fotos" :src="item.image">
              </v-flex>
            </v-layout>
            <v-layout row wrap>
              <v-flex xs12>
                <v-card-title class="title">
                  <h1>{{ item.title }}</h1>
                </v-card-title>
              </v-flex>
            </v-layout>
            <v-layout row wrap>
              <v-flex xs12>
                <v-card-text class="black--text bg texto">
                  <p>{{ item.content }}</p>
                </v-card-text>
              </v-flex>
            </v-layout>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-flex>
  </v-container>
</template>

<script>
export default {
  computed: {
    timelineItemsMarketing() {
      return this.$store.state.marketing.timelineItemsMarketing
    }
  }
}
</script>

<style scoped>
.icon {
  color: black;
}
.fotos {
  width: 100%;
  height: auto;
}
.texto {
  font-size: 1.5em;
}
.title {
  color: white;
}
.bg {
  /* background-image: linear-gradient(to left, #001208, #001208); */
  background-color: #e0e0e0;
}
</style>
