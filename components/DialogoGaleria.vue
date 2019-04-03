<template>
  <v-dialog v-model="dialog" hide-overlay full-width width="auto">
    <template v-slot:activator="{ on }">
      <v-img
        :src="`${src}`"
        aspect-ratio="1"
        :alt="`${titulo}`"
        v-on="on"
      />
    </template>
    <v-card :color="`${color}`">
      <v-card-title>
        <span class="headline">Use Google's location service?</span>
      </v-card-title>
      <v-card-text />
      <v-card-actions>
        <v-spacer />
        <v-btn color="green darken-1" flat="flat" @click="dialog = false">
          Disagree
        </v-btn>
        <v-btn color="green darken-1" flat="flat" @click="dialog = false">
          Agree
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: 'icons/AppsF.png'
    },
    alt: {
      type: String,
      default: 'Webicultores.com'
    },
    color: {
      type: String,
      default: '#000'
    }
  },
  data() {
    return {
      dialog: false,
      titulo: ''
    }
  }
}
</script>
