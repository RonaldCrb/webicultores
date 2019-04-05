import { db } from '@/plugins/firebase'

export const state = () => ({
  tarjetasComunidad: [],
  amigos: []
})

export const getters = {
  tarjetasComunidad: state => state.tarjetasComunidad,
  amigos: state => state.amigos
}

export const mutations = {
  setTarjetasComunidad(state, payload) {
    state.tarjetasComunidad.push(payload)
  },
  resetTarjetasComunidad(state) {
    state.tarjetasComunidad = []
  },
  setAmigos(state, payload) {
    state.amigos.push(payload)
  },
  resetAmigos(state) {
    state.amigos = []
  }
}

export const actions = {
  setAmigos({ commit }) {
    commit('resetAmigos')
    db.collection('amigos')
      .get()
      .then(data => {
        data.forEach(amigo => {
          const payload = {
            src: amigo.data().src,
            title: amigo.data().title,
            link: amigo.data().link
          }
          commit('setAmigos', payload)
        })
      })
      .catch(e => {
        alert(e.message)
      })
  },
  setTarjetasComunidad({ commit }) {
    commit('resetTarjetasComunidad')
    db.collection('tarjetasComunidad')
      .get()
      .then(data => {
        data.forEach(tarjeta => {
          const payload = {
            src: tarjeta.data().src,
            title: tarjeta.data().title,
            content: tarjeta.data().content
          }
          commit('setTarjetasComunidad', payload)
        })
      })
      .catch(e => {
        alert(e.message)
      })
  },
  createAmigo({ dispatch }, payload) {
    db.collection('amigos')
      .doc()
      .set(payload)
      .then(data => {
        dispatch('setAmigos')
        alert('amigo creado exitosamente Gracias!' + ' ' + data)
      })
      .catch(e => {
        alert(e.message)
      })
  },
  createPost({ dispatch }, payload) {
    db.collection('tarjetasComunidad')
      .doc()
      .set(payload)
      .then(data => {
        dispatch('setTarjetasComunidad')
        alert('Post creado exitosamente Gracias!' + ' ' + data)
      })
      .catch(e => {
        alert(e.message)
      })
  }
}
