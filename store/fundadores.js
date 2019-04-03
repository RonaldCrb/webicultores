export const state = () => ({
  fundadores: [
    {
      name: 'Carmen Moya',
      img: 'perfiles/cc.jpg',
      headline: 'Administracción de Mercadeo',
      skills: 'Redes sociales, Producción audivisual, Mercadeo',
      color: '#1B0414',
      bio:
        'Gracias a mis conocimientos y experiencias en la administracion de mercadeo y como audiovisualista puedo realizar estudios para la creacion y ampliación de condiciones favorables en la publicidad de manera eficaz y persuasiva. Planifico, organizo y coordino encuentros de relaciones publicas y empresas e instituciones. Asesoramiento de clientes y empresas para la creacion de identidad corporativa o diseño de campaña publicitaria. Poseo la empatia y una buena dosis de creatividad e ingenio junto con las habilidades necesarias para construir, gestionar y administrar la comunidad online alrededor de una marca en internet, creando y manteniendo relaciones estables y duraderas con sus clientes, fans y en general. Actualmente estoy interesada en aplicar como Community Manager y por eso mi plan es ir escalando poco a poco, para obtener experiencias hasta estar mas capacitada para manejar cuentas de gran escala.',
      moto: 'Sigueme!',
      instagram: 'https://www.instagram.com/ismrnobody/?hl=es-la',
      facebook: 'https://www.facebook.com/jose.millan2'
    },
    {
      name: 'José Millan',
      img: 'perfiles/jm.jpg',
      headline: 'Artista Gráfico Digital',
      skills:
        'Arte Grafico e ilustración, Edición de Video, Desarrollo Frontend',
      color: '#130E1A',
      bio:
        'Soy un artista grafico dedicado al arte digital, vivo creando proyectos desde simples bocetos hasta diseños complejos, Me dedico a crecer profesionalmente ofreciendo resultados muy creativos. Poseo la capacidad de adaptación con los requerimientos del cliente para ayudarlo a crear lo que realmete busca, soluciono las necesidades de comunicacion visual en diferentes plataformas: Desarrolo Web, indentidad corporativa, ilustración digital/tradicional, creación de contenido e imagen visual adaptada para publicidad, mediante el diseño y la creacion de graficos para fines de mercadotecnia, publicidad y editorial. Actualmente interesado en el desarrollo web de proyectos creativos de aplicaciones completas.',
      moto: 'Sigueme!',
      instagram: 'https://www.instagram.com/ismrnobody/?hl=es-la',
      facebook: 'https://www.facebook.com/jose.millan2',
      youtube: 'https://www.youtube.com'
    },
    {
      name: 'Ronald Alonzo',
      img: 'perfiles/ron.png',
      headline: 'Desarrollador Full Stack',
      skills:
        'Desarrollo frontend y backend con Javascript, SQL, Firebase, Ruby, Python',
      color: '#05172A',
      bio:
        'Puedo desarrollar profesionalmente en Javascript y Ruby on Rails. amo el ecosistema de nodejs y puedo aprender y sobresalir en cualquier cosa relacionada con NodeJS, Aprendo muy rapido, algunos de mis proyectos personales incluyen software de auditoría y aseguramiento, control documental en la nube, gestión de riesgos utilizando AI para calcular los factores de riesgo asociados con las operaciones industriales, Remesas y servicios de pago en la nube, por nombrar algunos. Puedo dirigir a cualquier individuo o grupo en un esfuerzo conjunto de forma pragmática, eficiente en movimientos centrados en el exito y dentro del contexto de los objetivos propuestos... la confianza, el liderazgo y la iniciativa son naturales para mí, provengo de la industria de la construccion submarina petrolera',
      moto: 'Follow me!',
      linkedIn: 'https://www.linkedin.com/in/ronaldalonzo/',
      twitter: 'https://twitter.com/RonaldCrb',
      facebook: 'https://www.facebook.com/alonzo.ronald',
      youtube: 'https://www.youtube.com/channel/UCvA-UAOnvajhrnNW2jDN0Aw'
    }
  ]
})

export const getters = {
  fundadores: state => state.fundadores
}
