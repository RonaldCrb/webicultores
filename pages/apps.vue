<template>
  <div>
    <AppsCard />
    <AppsForm />
    <div class="hidden-xs-only">
      <TimelineApps />
    </div>
    <div class="hidden-sm-and-up">
      <TimelineAppsMobile />
    </div>
  </div>
</template>

<script>
import AppsForm from '@/components/apps/AppsForm.vue'
import AppsCard from '@/components/apps/AppsCard'
import TimelineAppsMobile from '@/components/apps/TimelineAppsMobile'
import TimelineApps from '@/components/apps/TimelineApps'

export default {
  components: {
    AppsForm,
    TimelineApps,
    AppsCard,
    TimelineAppsMobile
  },
  fetch({ store }) {
    return store.dispatch('apps/setTimelineApps')
  }
}
</script>
