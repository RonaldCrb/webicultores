<template>
  <v-footer
    height="auto"
  >
    <v-card
      height="100%"
      width="100%"
      flat
      tile
      class="text-xs-center"
    >
      <v-card-text>
        <SocialButtons />
      </v-card-text>
      <hr>
      <v-layout row wrap>
        <v-card-text class="white--text">
          &copy;2019 — <strong>Webicultores</strong>
        </v-card-text>
      </v-layout>
    </v-card>
  </v-footer>
</template>

<script>
import SocialButtons from '@/components/SocialButtons.vue'
export default {
  components: {
    SocialButtons
  }
}
</script>
<style scoped>
.bg1 {
  background-color: linear-gradient(90deg, #ff0375, #04bbff, #ff0375);
}
</style>
