<template>
  <div>
    <v-layout justify-center row class="icon fondo">
      <div class="px-3 redes">
        <a
          target="_blank"
          title="Siguenos en Facebook"
          href="https://www.facebook.com/Comando-Ultimate-792152754453407/?eid=ARDBlzT4Mcwb9fdvrCkAFaQYxUflUtWkC1y0vXQlbIT01OfGr_p2ZnYu8eVhwDDaqByMnCHdQwgxOPze"
        >
          <img
            width="36px"
            alt="Siguenos en Facebook"
            src="~/assets/redes/face.png"
            border="0"
          >
        </a>
      </div>
      <div class="px-3 redes">
        <a
          target="_blank"
          title="Siguenos en Instagram"
          href="https://www.instagram.com/ronaldcrb/"
        >
          <img
            class=""
            width="36"
            alt="Siguenos en Instagram"
            src="~/assets/redes/instagram.png"
            border="0"
          >
        </a>
      </div>
      <div class="px-3 redes">
        <a
          target="_blank"
          title="Sigueme en Youtube"
          href="https://www.youtube.com/channel/UCvA-UAOnvajhrnNW2jDN0Aw"
        >
          <img
            width="48"
            class=""
            alt="Sigueme en Youtube"
            src="~/assets/redes/youtube.png"
            border="0"
          >
        </a>
      </div>
      <div class="px-3 redes">
        <a
          target="_blank"
          title="Sigueme en Twitter"
          href="https://twitter.com/RonaldCrb"
        >
          <img
            width="42"
            class=""
            alt="Sigueme en Twitter"
            src="~/assets/redes/twitter.png"
            border="0"
          >
        </a>
      </div>
      <div class="px-3 redes">
        <a
          target="_blank"
          title="Sigueme en LinkedIn"
          href="https://www.linkedin.com/in/ronaldalonzo/"
        >
          <img
            alt="Sigueme en LinkedIn"
            height="40px"
            width="40px"
            src="https://www.allphincom.com/images/site/linkedin_icon_white.png"
            border="0"
          >
        </a>
      </div>
    </v-layout>
  </div>
</template>

<style>
.redes {
  opacity: 0.4;
  transition: 0.2s;
  transform: scale(0.9);
}
.redes:hover {
  opacity: 1;
  transform: scale(1);
}
.redes:hover:before {
  left: 0;
  content: '';
  z-index: -1;
  width: 100%;
  height: 80%;
  filter: blur(12px);
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(45deg, #ff0375, #5f2ae4, #04bbff);
}
.fondo::before {
  width: 20%;
  flex-grow: 20%;
  height: 10%;
  opacity: 0;
  content: '0';
  margin-top: 10px;
  transition: 0.2s;
  position: absolute;
  filter: blur(18px);
  transition: 0.4s;
  background: linear-gradient(45deg, #ff0375, #5f2ae4, #04bbff);
}
.fondo:hover:before {
  mix-blend-mode: lighten;
  opacity: 0.9;
}
</style>
