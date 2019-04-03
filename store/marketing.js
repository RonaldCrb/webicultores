export const state = () => ({
  timelineItemsMarketing: [
    {
      icon: 'all_inclusive',
      color: '#ff0375',
      title: 'Email Marketing',
      image:
        'https://www.grid.cl/blog/wp-content/uploads/2019/01/s3-news-tmp-114803-emailmarketing-2x1-940.jpg',
      content: `El email marketing (emailing o e-mailing) es una excelente
      herramienta de comunicación de la que dispone la marca para comunicarse
      con el cliente. Es un arma muy poderosa que, bien utilizada, puede dar
      muy buenos resultados, sobre todo de conversión. Es una oportunidad
      perfecta para ofrecer al usuario contenido de calidad y de valor. Un plus
      personalizable con el objetivo de convertir los leads en posibles
      clientes. El email marketing utiliza el correo electrónico y se envía a
      un grupo de contactos, es personalizable y nada invasivo.`
    },
    {
      icon: 'directions_boat',
      color: '#5f2ae4',
      title: 'Search Engine Optimization (SEO)',
      image:
        'http://www.mpoderate.net/wp-content/uploads/2018/07/imagen-de-seo.png',
      content: `El SEO (Search Engine Optimization) no es otra cosa que optimizar
      un sitio web para mejorar su posición en los resultados obtenidos por los
      motores de búsqueda. Es decir, intentar que tu web salga la primera cuando
      los usuarios busquen en Google`
    },
    {
      icon: 'apps',
      color: '#04bbff',
      title: 'Redes Sociales',
      image:
        'https://cdn.searchenginejournal.com/wp-content/uploads/2019/01/Top-9-Benefits-of-Social-Media-for-Your-Business-760x400.png',
      content: `Las innovaciones del marketing en redes sociales están fundamentadas
      en que esta actividad no se limita a lanzar un anuncio, sino cómo, cuándo y
      sobre todo: a quién va dedicado. Es decir que el marketing en redes sociales,
      es todo un proceso complejo. Debido a ello, las empresas gastan millones de
      dólares cada año investigando todo el tráfico que hay en las redes sociales,
      para que de esta manera, realicen mejores campañas publicitarias.`
    }
  ]
})

export const getters = {
  timelineItemsMarketing: state => state.timelineItemsMarketing
}
