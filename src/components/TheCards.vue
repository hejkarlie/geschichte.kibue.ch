<script setup>
import { defineAsyncComponent } from "vue"
import { NFlex } from "naive-ui"

const cardComponents = {
  article: defineAsyncComponent(() => import("@/components/cards/TheArticle.vue")),
  image: defineAsyncComponent(() => import("@/components/cards/TheImage.vue")),
  interview: defineAsyncComponent(() => import("@/components/cards/TheInterview.vue")),
  milestone: defineAsyncComponent(() => import("@/components/cards/TheMilestone.vue")),
  quote: defineAsyncComponent(() => import("@/components/cards/TheQuote.vue")),
  video: defineAsyncComponent(() => import("@/components/cards/TheVideo.vue")),
}

const props = defineProps(["cards"])
</script>

<template>
  <div class="card">
    {{ props.cards }}
  </div>

  <n-flex :size="55" vertical>
    <component
      v-for="card in props.cards"
      :key="card.id"
      :is="cardComponents[card.type]"
      :data="card"
    />
  </n-flex>
</template>

<style lang="css" scoped>
/* .card {
  background: #eee;
  padding: 10px;
  border-radius: 4px;
} */
</style>
