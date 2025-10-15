<script setup>
import { NCard } from "naive-ui"
const props = defineProps(["card", "width", "aspectRatio", "path"])
</script>

<template>
  <n-card :style="{ backgroundColor: props.card.color }">
    {{ props.card }}
  </n-card>
</template>
