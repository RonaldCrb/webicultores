<template>
  <div>
    <MarketingCard />
    <div class="hidden-xs-only">
      <TimelineMarketing />
    </div>
    <div class="hidden-sm-and-up">
      <TimelineMarketingMobile />
    </div>
  </div>
</template>
<script>
import TimelineMarketing from '@/components/TimelineMarketing.vue'
import TimelineMarketingMobile from '@/components/TimelineMarketingMobile.vue'
import MarketingCard from '@/components/MarketingCard.vue'
export default {
  components: {
    MarketingCard,
    TimelineMarketing,
    TimelineMarketingMobile
  }
}
</script>
