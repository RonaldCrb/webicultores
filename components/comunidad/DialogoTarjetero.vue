<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" width="auto">
      <template v-slot:activator="{ on }">
        <v-btn color="red" large v-on="on">
          Open Dialog
        </v-btn>
      </template>
      <v-card>
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
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      dialog: false
    }
  }
}
</script>
