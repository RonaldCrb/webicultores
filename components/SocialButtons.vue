<template>
  <div>
    <v-layout justify-center row>
      <div
        v-for="button in socialButtons"
        :key="button.title"
        class="px-3"
      >
        <a
          target="_blank"
          :title="button.title"
          :href="`${button.href}`"
        >
          <img
            alt="button.title"
            :src="`${button.icon}`"
            border="0"
          >
        </a>
      </div>
    </v-layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      socialButtons: [
        {
          title: 'Siguenos en Facebook',
          icon: 'social/FaceIcon.svg',
          href:
            'https://www.facebook.com/Comando-Ultimate-792152754453407/?eid=ARDBlzT4Mcwb9fdvrCkAFaQYxUflUtWkC1y0vXQlbIT01OfGr_p2ZnYu8eVhwDDaqByMnCHdQwgxOPze'
        },
        {
          title: 'Siguenos en Instagram',
          icon: 'social/InstaIcon.svg',
          href: 'https://www.instagram.com/ronaldcrb/'
        },
        {
          title: 'Siguenos en Youtube',
          icon: 'social/YoutubeIcon.svg',
          href: 'https://www.youtube.com/channel/UCvA-UAOnvajhrnNW2jDN0Aw'
        },
        {
          title: 'Siguenos en Twitter',
          icon: 'social/TwitterIcon.svg',
          href: 'https://twitter.com/RonaldCrb'
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>
