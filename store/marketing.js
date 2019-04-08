import { db } from '@/plugins/firebase'
import { success, error } from '@/plugins/swal'

export const state = () => ({
  timelineItemsMarketing: []
})

export const getters = {
  timelineItemsMarketing: state => state.timelineItemsMarketing
}

export const mutations = {
  setTimelineItemsMarketing(state, payload) {
    state.timelineItemsMarketing.push(payload)
  },
  resetTimelineItemsMarketing(state) {
    state.timelineItemsMarketing = []
  }
}

export const actions = {
  setTimelineItemsMarketing({ commit }) {
    commit('resetTimelineItemsMarketing')
    db.collection('timelineMarketing')
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
          commit('setTimelineItemsMarketing', payload)
        })
      })
      .catch(e => {
        error.fire(e)
      })
  },
  createTimelineMarketing({ dispatch }, payload) {
    db.collection('timelineMarketing')
      .doc()
      .set(payload)
      .then(data => {
        dispatch('setTimelineItemsMarketing')
        success.fire(`Item del timeline creado correctamente` + ' :: ' + data)
      })
      .catch(e => {
        error.fire(e)
      })
  }
}
