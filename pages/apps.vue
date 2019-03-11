<template>
  <div>
    <AppsCard />
    <Timeline />
  </div>
</template>

<script>
import AppsCard from '@/components/AppsCard.vue'
import Timeline from '@/components/Timeline.vue'
export default {
  components: {
    Timeline,
    AppsCard
  }
}
</script>
