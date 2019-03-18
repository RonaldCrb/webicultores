<template>
  <div>
    <v-layout justify-center row class="icon">
      <div class="px-2">
        <a
          target="_blank"
          title="Siguenos en Facebook"
          href="https://www.facebook.com/Comando-Ultimate-792152754453407/?eid=ARDBlzT4Mcwb9fdvrCkAFaQYxUflUtWkC1y0vXQlbIT01OfGr_p2ZnYu8eVhwDDaqByMnCHdQwgxOPze"
        >
          <img
            class="redes"
            width="36px"
            alt="follow me on facebook"
            src="~/assets/redes/face.png"
            border="0"
          >
        </a>
      </div>
      <div class="px-2">
        <a
          target="_blank"
          title="Siguenos en Instagram"
          href="https://www.instagram.com/ronaldcrb/"
        >
          <img
            shadow="20px"
            class="redes"
            width="36"
            alt="Siguenos en instagram"
            src="~/assets/redes/Instagram.png"
            border="0"
          >
        </a>
      </div>
      <div class="px-2 ">
        <a
          target="_blank"
          title="follow me on youtube"
          href="https://www.youtube.com/channel/UCvA-UAOnvajhrnNW2jDN0Aw"
        >
          <img
            width="48"
            class="redes"
            alt="follow me on youtube"
            src="~/assets/redes/Youtube.png"
            border="0"
          >
        </a>
      </div>
      <div class="px-2 pt-1 ">
        <a
          target="_blank"
          title="follow me on Twitter"
          href="https://twitter.com/RonaldCrb"
        >
          <img
            width="36"
            class="redes"
            alt="follow me on twitter"
            src="~/assets/redes/Twitter.png"
            border="0"
          >
        </a>
      </div>
    </v-layout>
  </div>
</template>

<style>
.redes {
  transition: 0.3s;
  opacity: 0.5;
}
a .redes {
  transform: rotatey(0deg) scale(0.6);
}
.redes:hover {
  box-shadow: 0 0 15px white;
  transform: scale(1.1);
  opacity: 1;
}
</style>
