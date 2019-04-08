<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" width="auto">
      <template v-slot:activator="{ on }">
        <v-btn color="#ff0375" large v-on="on">
          Ver Mas
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <img :src="src" :alt="title">
        </v-card-title>
        <v-card-text>
          <h1>{{ title }}</h1>
          <p>{{ content }}</p>
        </v-card-text>
        <v-card-text />
        <v-card-actions>
          <v-spacer />
          <v-btn color="green darken-1" flat="flat" @click="dialog = false">
            atras
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: 'icons/AppsF.png'
    },
    title: {
      type: String,
      default: 'Webicultores.com'
    },
    content: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      dialog: false
    }
  }
}
</script>
