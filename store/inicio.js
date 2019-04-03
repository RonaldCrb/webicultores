export const state = () => ({
  cardItems: [
    {
      color: '#ff0375',
      icon: 'icons/CreativosF.png',
      title: 'Creativos',
      content: 'Arte visionaria que eleva tu estado de conciencia',
      link: 'arte'
    },
    {
      color: '#3F51B5',
      icon: 'icons/MarketingF.png',
      title: 'Marketing',
      content: 'Mercadeo de guerrilla para verte justo como quieres',
      link: 'marketing'
    },
    {
      color: '#04bbff',
      icon: 'icons/AppsF.png',
      title: 'Apps',
      content: 'Apps que agradan a tus sentidos y manejan tu data',
      link: 'apps'
    },
    {
      color: '#04bbff',
      icon: 'icons/ComunidadF.png',
      title: 'Comunidad',
      content: 'Somos Amantes de el Ultimate Frisbee y los Trickshots',
      link: 'comunidad'
    }
  ]
})

export const getters = {
  cardItems: state => state.cardItems
}
