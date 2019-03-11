<template>
  <div>
    <MarketingCard />
    <TimelineMarketing />
  </div>
</template>
<script>
import TimelineMarketing from '@/components/TimelineMarketing.vue'
import MarketingCard from '@/components/MarketingCard.vue'
export default {
  components: {
    MarketingCard,
    TimelineMarketing
  }
}
</script>
