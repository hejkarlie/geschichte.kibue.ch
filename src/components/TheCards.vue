<script setup>
import { defineAsyncComponent } from "vue"
import { NFlex } from "naive-ui"
import { cardWidth, aspectRatio } from "@/utils/dimensions.js"
import { useAppStore } from "@/stores/app.js"

const appStore = useAppStore()

const cardComponents = {
  article: defineAsyncComponent(() => import("@/components/cards/TheArticle.vue")),
  image: defineAsyncComponent(() => import("@/components/cards/TheImage.vue")),
  interview: defineAsyncComponent(() => import("@/components/cards/TheInterview.vue")),
  milestone: defineAsyncComponent(() => import("@/components/cards/TheMilestone.vue")),
  quote: defineAsyncComponent(() => import("@/components/cards/TheQuote.vue")),
  video: defineAsyncComponent(() => import("@/components/cards/TheVideo.vue")),
}

const props = defineProps(["cards"])

function handleCardClick() {
  if (!appStore.movedEnough) {
    appStore.showCardDrawer = true
  }
  // Reset movedEnough for next interaction
  appStore.movedEnough = false
}
</script>

<template>
  <n-flex :size="55" vertical align="center">
    <component
      v-for="card in props.cards"
      :key="card.id"
      :is="cardComponents[card.type]"
      :card="card"
      :width="cardWidth[card.type][card.orientation][card.width]"
      :aspect-ratio="aspectRatio[card.type][card.orientation]"
      :path="`/cards/${card.id}`"
      @click="handleCardClick"
      :style="{ cursor: 'pointer' }"
    />
  </n-flex>
</template>
