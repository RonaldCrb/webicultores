<template>
  <div>
    <AppsCard />
    <TimelineApps />
  </div>
</template>

<script>
import AppsCard from '@/components/AppsCard.vue'
import TimelineApps from '@/components/TimelineApps.vue'
export default {
  components: {
    TimelineApps,
    AppsCard
  }
}
</script>
