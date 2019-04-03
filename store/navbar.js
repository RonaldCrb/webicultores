export const state = () => ({
  navegacion: [
    {
      icon: 'icons/CreativosF.png',
      title: 'Arte!',
      to: 'arte'
    },
    {
      icon: 'icons/MarketingF.png',
      title: 'Marketing!',
      to: 'marketing'
    },
    {
      icon: 'icons/AppsF.png',
      title: 'Apps!',
      to: 'apps'
    },
    {
      icon: 'icons/ComunidadF.png',
      title: 'Comunidad',
      to: 'comunidad'
    }
  ],
  naviconfig: [
    {
      icon: 'icons/CreativosF.png',
      title: 'Mini',
      task: 'miniVariant = !miniVariant'
    }
  ]
})

export const getters = {
  navegacion: state => state.navegacion,
  naviconfig: state => state.naviconfig
}
