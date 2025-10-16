<script setup>
import { NCard, NFlex } from "naive-ui"
const props = defineProps(["card", "width", "aspectRatio", "path"])
import { useAppStore } from "@/stores/app.js"

const appStore = useAppStore()
</script>

<template>
  <n-card
    :content-style="{ padding: appStore.isMobile ? '10px' : '12px' }"
    :style="{
      width: props.width,
      backgroundColor: props.card.color,
      aspectRatio: props.aspectRatio[0] / props.aspectRatio[1],
    }"
  >
    <n-flex vertical :style="{ height: '100%' }">
      <div class="image-container">
        <img
          :src="`${props.path}/${props.card.content.image}`"
          alt="Ein Bild, das einen Artikel zur Geschichte des Kinderbüros begleitet."
          draggable="false"
        />
      </div>
      <div
        :style="{
          fontSize: appStore.isMobile ? '13px' : '16px',
          fontWeight: 600,
          marginTop: 'auto' /* pushes this div to the bottom */,
        }"
      >
        {{ props.card.content.subtitle }}
      </div>
    </n-flex>
  </n-card>
</template>

<style scoped>
.image-container {
  width: 100%;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  border-radius: 50%;
}
.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
