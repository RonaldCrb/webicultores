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
import TimelineMarketing from '@/components/marketing/TimelineMarketing.vue'
import TimelineMarketingMobile from '@/components/marketing/TimelineMarketingMobile.vue'
import MarketingCard from '@/components/marketing/MarketingCard.vue'
export default {
  components: {
    MarketingCard,
    TimelineMarketing,
    TimelineMarketingMobile
  }
}
</script>
