<script setup>
import { NCard, NFlex } from "naive-ui"
const props = defineProps(["card", "width", "aspectRatio", "path"])
import { useAppStore } from "@/stores/app.js"

const appStore = useAppStore()
</script>

<template>
  <n-card
    :content-style="{ padding: appStore.isMobile ? '12px 12px 12px 8px' : '15px 10px 10px 10px' }"
    :style="{
      width: props.width,
      backgroundColor: props.card.color,
      aspectRatio: props.aspectRatio[0] / props.aspectRatio[1],
    }"
  >
    <n-flex vertical :style="{ height: '100%' }" align="center">
      <n-flex :style="{ width: '75%' }">
        <div
          :style="{
            fontSize: appStore.isMobile ? '18px' : '22px',
            fontWeight: 600,
          }"
        >
          {{ props.card.content.title }}
        </div>
        <div class="image-container">
          <img
            :src="`${props.path}/${props.card.content.image}`"
            alt="Ein Bild, das ein Interview im Rahmen der Geschichte des Kinderbüros repräsentiert."
            draggable="false"
          />
        </div>
      </n-flex>
      <div
        :style="{
          fontSize: appStore.isMobile ? '10px' : '12px',
          fontWeight: 600,
          marginTop: 'auto' /* pushes this div to the bottom */,
          width: '100%' /* take full card width */,
          textAlign: 'left' /* align text left */,
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
