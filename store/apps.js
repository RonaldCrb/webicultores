export const state = () => ({
  timelineItemsApps: [
    {
      icon: 'important_devices',
      color: '#ff0375',
      image: 'http://tododeredes.mx/wp-content/uploads/Responsive1.png',
      title: 'Aplicaciones Universales',
      content: `Ya sea usando o aprendiendo JavaScript en general, seguramente
      hayas escuchado el término Aplicaciones universales o Aplicaciones isomórficas
      y si estás aprendiendo JS probablemente te preguntes qué significa. Una
      aplicación universal es aquella que comparte todo (o casi todo) su código
      entre el cliente y el servidor.`
    },
    {
      icon: 'list',
      color: '#5f2ae4',
      title: 'Sistemas de gestion de datos',
      image:
        'http://blogs.bmc.com/wp-content/uploads/2016/06/database-blue.png',
      content: `La implementación de un sistema de gestión de datos promueve una
      imagen integrada de las operaciones de una organización. Es fácil ver cómo
      los procesos en un segmento de la organización afectan a otros segmentos.
      Por lo tanto, la integración efectiva de los datos se logra mediante el
      uso de sistemas de gestión de datos.`
    },
    {
      icon: 'shopping_cart',
      color: '#04bbff',
      title: 'E-COMMERCE',
      image:
        'https://cdn.semrush.com/blog/static/media/8c/d7/8cd76c5e51533cf3ee7c428999d22ed9/resize/885x-/crear-ecommerce-exito.jpg',
      content: `El comercio electrónico, también conocido como e-commerce (electronic
        commerce en inglés) o bien comercio por Internet o comercio en línea,
        consiste en la compra y venta de productos o de servicios a través de
        medios electrónicos, tales como redes sociales y otras páginas web.`
    }
  ]
})

export const getters = {
  timelineItemsApps: state => state.timelineItemsApps
}
