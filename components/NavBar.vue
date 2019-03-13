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
          <img class="drawertitle" src="~/assets/LogoColors.png" height="55"></img>
        </div>
        <div v-if="miniVariant === true" class="toolbartitle">
          <WebiLogo />
        </div>
      </nuxt-link>
      <v-list>
        <v-list-tile
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-tile-action>
            <v-icon color="#00FFFF">
              {{ item.icon }}
            </v-icon>
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
    <v-toolbar
      fixed
      app
      height="70px"
      class="transparent"
    >
      <v-toolbar-side-icon @click="drawer = !drawer" />
      <v-toolbar-title>
        <nuxt-link to="/">
          <div v-if="drawer === false">
            <img class="toolbartitle" src="~/assets/LogoColors.png" height="64"></img>
          </div>
        </nuxt-link>
      </v-toolbar-title>

      <v-spacer />
      <SocialButtons class="mt-2" />
    </v-toolbar>
  </div>
</template>

<script>
import WebiLogo from '@/components/WebiLogo'
import SocialButtons from '@/components/SocialButtons.vue'
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
      items: [
        {
          icon: 'filter_vintage',
          title: 'Arte!',
          to: 'arte'
        },
        {
          icon: 'attach_money',
          title: 'Marketing!',
          to: 'marketing'
        },
        {
          icon: 'stars',
          title: 'Apps!',
          to: 'apps'
        },
        {
          icon: 'stars',
          title: 'Comando Ultimate',
          to: 'comandoultimate'
        }
      ],
      naviconfig: [
        {
          icon: 'chevron',
          title: 'Mini',
          task: 'miniVariant = !miniVariant'
        }
      ],
      miniVariant: true
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
  background-image: linear-gradient(90deg, #ff0375, #04bbff, #ff0375);
}

</style>
