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
      width: props.width,
      backgroundColor: props.card.color,
      aspectRatio: props.aspectRatio[0] / props.aspectRatio[1],
    }"
  >
    <n-flex vertical :style="{ height: '100%', display: 'flex', flexDirection: 'column' }">
      <div
        :style="{
          fontSize: appStore.isMobile ? '18px' : '22px',
        }"
      >
        {{ props.card.content.quote }}
      </div>
      <div
        :style="{
          fontSize: appStore.isMobile ? '10px' : '12px',
          fontWeight: 600,
          marginTop: 'auto' /* pushes this div to the bottom */,
        }"
      >
        {{ props.card.content.subtitle }}
      </div>
    </n-flex>
  </n-card>
</template>
