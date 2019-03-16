<template>
  <div>
    <AppsCard />
    <div class="hidden-xs-only">
      <TimelineApps />
    </div>
    <div class="hidden-sm-and-up">
      <TimelineAppsMobile />
    </div>
  </div>
</template>

<script>
import AppsCard from '@/components/AppsCard.vue'
import TimelineAppsMobile from '@/components/TimelineAppsMobile.vue'
import TimelineApps from '@/components/TimelineApps.vue'

export default {
  components: {
    TimelineApps,
    AppsCard,
    TimelineAppsMobile
  }
}
</script>
