export const state = () => ({
  tarjetasComunidad: [
    {
      src:
        'http://xpeeriencegroup.com/wp-content/uploads/2017/05/ultimate-frisbee.jpg',
      title: 'Que es el Ultimate?',
      content:
        'Ultimate frisbee es un deporte competitivo de equipo sin contacto entre jugadores. Se juega entre dos equipos de 7 jugadores (o 5 en la modalidad de playa) y un frisbee. El objetivo es obtener puntos capturando el disco en una zona de gol situada al lado opuesto del campo, de modo similar al fútbol americano. Los jugadores no pueden caminar ni correr mientras tienen el disco en las manos.'
    },
    {
      src:
        'https://currentnewspapers.com/wp-content/uploads/2017/04/Wilson-Ultimate-Frisbee-2017.jpg',
      title: 'Espiritu de juego!',
      content:
        'El ultimate se distingue por su principio de “espíritu de juego” (o principio del juego justo), por su alto rendimiento y alegría y se manifiesta en la particular ausencia de un árbitro, el deporte se regula por el espíritu deportivo de cada jugador y equipo.'
    },
    {
      src:
        'https://www.grana.com/themodern/wp-content/uploads/2017/03/grana_frisbee_4.jpg',
      title: 'Venezuela y el Ultimate',
      content: `Venezuela fue el primer país latinoamericano en participar en un campeonato mundial (Toronto 1991), también el primero en llevarse el premio al “espíritu de juego”, adjudicado en solo dos oportunidades. Es el país latinoamericano con más participaciones en campeonatos mundiales, de clubs o de naciones, con un total de siete (7) participaciones. En todas fue el mejor clasificado por la región con excelentes ubicaciones en la tabla general.`
    },
    {
      src:
        'https://ultiworld.com/wordpress/wp-content/uploads/2016/01/USAU-NATS_Thu_20131017_202743_BC4_04207-ZF-2481-60912-1-001.jpg',
      title: 'Ultimate en Anaco',
      content:
        'El ultimate en Anaco tiene ya casi una decada de empezar a practicarse de manera exporadica y en ocasiones competitivas con las participaciones de equipos como Caciques, Hammers, Comando Canales entre otros, gracias tambien a la colaboracion y orientacion de nuestros amigos del club Vafteu de la ciudad de El Tigre'
    }
  ],
  amigos: [
    {
      titulo: 'RVH',
      link: 'https://lit-chamber-21738.herokuapp.com/',
      src: 'amigos/piña.png'
    },
    {
      titulo: 'Vaper Anaco',
      link: 'https://lit-springs-89652.herokuapp.com/',
      src: 'amigos/VaperAnaco.png'
    },
    {
      titulo: 'Jartate',
      link: '',
      src: ''
    },
    {
      titulo: 'CDlogs',
      link: '',
      src: 'amigos/CDlogs.png'
    }
  ]
})

export const getters = {
  tarjetasComunidad: state => state.tarjetasComunidad,
  amigos: state => state.amigos
}
