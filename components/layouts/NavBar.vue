<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
      class="navdrawer"
    >
      <nuxt-link to="/">
        <div v-if="miniVariant === false">
          <img class="drawertitle" src="~/assets/LogoColors.png" height="55">
        </div>
        <div v-if="miniVariant === true" class="pt-2 toolbartitle">
          <WebiLogo />
        </div>
      </nuxt-link>
      <v-divider dark />
      <v-list class="pt-5">
        <v-list-tile
          v-for="item in navegacion"
          :key="item.title"
          :to="item.to"
          router
          exact
          class="pad"
        >
          <v-list-tile-action>
            <v-flex>
              <img width="50px" :src="`${item.icon}`">
            </v-flex>
            <!-- <v-icon color="#00FFFF">
              {{ item.icon }}
            </v-icon> -->
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="pad2" v-text="item.title" />
          </v-list-tile-content>
        </v-list-tile>
        <v-spacer />
        <v-list-tile
          v-for="(item, i) in naviconfig"
          :key="i"
          exact
          @click.stop="miniVariant = !miniVariant"
        >
          <v-list-tile-action>
            <v-btn icon @click.stop="miniVariant = !miniVariant">
              <v-icon color="#ff0375">
                {{ `chevron_${miniVariant ? 'right' : 'left'}` }}
              </v-icon>
            </v-btn>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title" />
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed app height="60px" class="transparent">
      <v-toolbar-side-icon @click="drawer = !drawer" />
      <v-toolbar-title>
        <nuxt-link to="/">
          <div v-if="drawer === false">
            <img
              class="toolbartitle"
              src="~/assets/LogoColors.png"
              height="45px"
            >
          </div>
        </nuxt-link>
      </v-toolbar-title>

      <v-spacer />
      <div class="hidden-xs-only">
        <SocialButtons class="mt-2" />
      </div>
    </v-toolbar>
  </div>
</template>

<script>
import WebiLogo from '@/components/layouts/WebiLogo'
import SocialButtons from '@/components/layouts/SocialButtons.vue'
export default {
  components: {
    WebiLogo,
    SocialButtons
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: true
    }
  },
  computed: {
    navegacion() {
      return this.$store.state.navbar.navegacion
    },
    naviconfig() {
      return this.$store.state.navbar.naviconfig
    }
  }
}
</script>

<style lang="css" scoped>
.toolbartitle {
  padding-top: 5px;
  }
.pad {
  padding-bottom: 25px;
}
.drawertitle {
  padding-left: 15px;
  padding-top: 10px;
}
.fotos {
  height: 30px;
  width: auto;
}
.bg {
  background-image: linear-gradient(90deg, #ff0375, #04bbff, #ff0375);
}
.pad2
{
  margin-left: 10px;
}
</style>
