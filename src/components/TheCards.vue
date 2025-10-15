<script setup>
import { defineAsyncComponent } from "vue"
import { NFlex } from "naive-ui"
import { cards as cardDimensions } from "@/utils/dimensions.js"
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
const getAspectRatio = (orientation) => (orientation === "portrait" ? [3, 4] : [4, 3])

function test() {
  if (!appStore.movedEnough) {
    console.log("click")
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
      :width="cardDimensions[card.type][card.orientation][card.width]"
      :aspect-ratio="getAspectRatio(card.orientation)"
      :path="`/cards/${card.id}`"
      @click="test"
    />
  </n-flex>
</template>
