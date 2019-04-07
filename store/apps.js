import { db } from '@/plugins/firebase'
import { success, error } from '@/plugins/swal'

export const state = () => ({
  timelineItemsApps: []
})

export const getters = {
  timelineItemsApps: state => state.timelineItemsApps
}

export const mutations = {
  setTimelineApps(state, payload) {
    state.timelineItemsApps.push(payload)
  },
  resetTimelineApps(state) {
    state.timelineItemsApps = []
  }
}

export const actions = {
  setTimelineApps({ commit }) {
    commit('resetTimelineApps')
    db.collection('timelineApps')
      .get()
      .then(data => {
        data.forEach(item => {
          const payload = {
            id: item.id,
            icon: item.data().icon,
            color: item.data().color,
            title: item.data().title,
            image: item.data().image,
            content: item.data().content
          }
          commit('setTimelineApps', payload)
        })
      })
      .catch(e => {
        error.fire(e)
      })
  },
  createTimelineItem({ dispatch }, payload) {
    db.collection('timelineApps')
      .doc()
      .set(payload)
      .then(data => {
        dispatch('setTimelineApps')
        success.fire(`Item del timeline creado correctamente` + ' :: ' + data)
      })
      .catch(e => {
        error.fire(e)
      })
  }
}
