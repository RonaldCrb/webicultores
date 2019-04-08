<template>
  <div>
    <MarketingCard />
    <MarketingForm />
    <div class="hidden-xs-only">
      <TimelineMarketing />
    </div>
    <div class="hidden-sm-and-up">
      <TimelineMarketingMobile />
    </div>
  </div>
</template>
<script>
import MarketingForm from '@/components/marketing/MarketingForm.vue'
import TimelineMarketing from '@/components/marketing/TimelineMarketing.vue'
import TimelineMarketingMobile from '@/components/marketing/TimelineMarketingMobile.vue'
import MarketingCard from '@/components/marketing/MarketingCard.vue'
export default {
  components: {
    MarketingCard,
    MarketingForm,
    TimelineMarketing,
    TimelineMarketingMobile
  },
  fetch({ store }) {
    return store.dispatch('marketing/setTimelineItemsMarketing')
  }
}
</script>
