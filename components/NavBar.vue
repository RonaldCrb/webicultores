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
      <div v-if="miniVariant === false">
        <img class="drawertitle" src="~/assets/logo.png" height="55"></img>
      </div>
      <div v-if="miniVariant === true" class="toolbartitle">
        <WebiLogo />
      </div>
      <v-list>
        <v-list-tile
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title" />
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
            <v-btn
              icon
              @click.stop="miniVariant = !miniVariant"
            >
              <v-icon>{{ `chevron_${miniVariant ? 'right' : 'left'}` }}</v-icon>
            </v-btn>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title" />
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar-side-icon @click="drawer = !drawer" />

    <!-- <v-toolbar

      fixed
      app
      class="bg"
    >
      <v-toolbar-title>
        <nuxt-link to="/">
          <div v-if="drawer === false">
            <img class="toolbartitle" src="~/assets/logo2.png" height="64"></img>
          </div>
        </nuxt-link>
      </v-toolbar-title> -->

    <v-spacer />
    </v-toolbar>
  </div>
</template>

<script>
import WebiLogo from '@/components/WebiLogo'
export default {
  components: {
    WebiLogo
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'bubble_chart',
          title: 'Portafolio',
          to: 'Portafolio'
        }
      ],
      naviconfig: [
        {
          icon: 'chevron',
          title: 'Mini',
          task: 'miniVariant = !miniVariant'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>

<style lang="css" scoped>
.toolbartitle {
  padding-top: 10px;

}
.drawertitle {
  padding-left: 15px;
  padding-top: 10px;
}
.bg {
  background-image: linear-gradient(45deg, #ff0375, #5f2ae4, #04bbff);
}
.navdrawer {
  background-color: #CA2C92;
}
</style>
