<script setup>
import { NCard } from "naive-ui"
const props = defineProps(["card", "width", "aspectRatio", "path"])
import { useAppStore } from "@/stores/app.js"

const appStore = useAppStore()
</script>

<template>
  <n-card
    :content-style="{ padding: appStore.isMobile ? '16px' : '20px' }"
    :style="{
      backgroundColor: props.card.color,
      width: props.width,
      aspectRatio: props.aspectRatio[0] / props.aspectRatio[1],
      lineHeight: 1.2,
    }"
  >
    <div
      :style="{
        position: 'relative',
        fontSize: appStore.isMobile ? '24px' : '30px',
      }"
    >
      <span>
        {{ props.card.content.year }}
      </span>
      <br />
      <span :style="{ fontWeight: 600 }" class="card-content">
        {{ props.card.content.title }}
      </span>
    </div>
  </n-card>
</template>

<style lang="css" scoped>
.card-content {
  hyphens: auto;
  overflow-wrap: break-word;
  word-break: break-word; /* fallback for old browsers */
}
</style>
