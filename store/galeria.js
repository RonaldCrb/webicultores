// import axios from 'axios'

export const state = () => ({
  coleccion: [
    { src: 'icons/AppsF.png', color: '#fff', titulo: 'apps' },
    { src: 'icons/AppsF.png', color: '#000', titulo: 'apps' },
    { src: 'icons/AppsF.png', color: '#fff', titulo: 'apps' },
    { src: 'icons/AppsF.png', color: '#fff', titulo: 'apps' },
    { src: 'icons/AppsF.png', color: '#000', titulo: 'apps' }
    // { src: 'icons/AppsF.png', color: '#fff', titulo: 'apps' }
  ]
})

export const mutations = {
  resetGaleria(state) {
    state.coleccion = []
  },
  setGaleria(state, payload) {
    state.coleccion = payload
  }
}

// const actions = {
//   setGaleria({ state, dispatch, commit, getters }, payload) {
//     commit('resetGaleria')
//     axios
//       .get('http://localhost:3000/api/')
//       .then(res => {
//         res.data.forEach(compra => {
//           const payload = {
//             trader: compra.trader,
//             payment: compra.payment,
//             price: compra.price
//           }
//           commit('setCompraPen', payload)
//         })
//         success.fire('el array de objetos compraPEN [] esta disponible!')
//       })
//       .catch(e => {
//         error.fire(e.message)
//       })
//   }
// }

export const getters = {
  coleccion: state => state.coleccion
}
