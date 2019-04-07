<template>
  <div>
    <ArteCard />
    <Galleria />
  </div>
</template>

<script>
import ArteCard from '@/components/creativos/ArteCard.vue'
import Galleria from '@/components/creativos/Galleria.vue'
export default {
  components: {
    ArteCard,
    Galleria
  }
  // middleware: 'ron'
}
</script>
