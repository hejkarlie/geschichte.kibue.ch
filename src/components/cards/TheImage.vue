<script setup>
import { computed } from "vue"
import { NCard } from "naive-ui"
const props = defineProps(["card", "width", "aspectRatio", "path"])

const imageUrl = computed(() => {
  return `${import.meta.env.BASE_URL}${props.path}/${props.card.content.image}`
})
</script>

<template>
  <n-card :style="{ width: props.width }">
    <template #cover>
      <div
        class="image-container"
        :style="{ aspectRatio: props.aspectRatio[0] / props.aspectRatio[1] }"
      >
        <img
          :src="imageUrl"
          alt="Ein Bild, das einen Meilenstein in der Geschichte des Kinderbüros repräsentiert."
          draggable="false"
        />
      </div>
    </template>
  </n-card>
</template>

<style scoped>
.image-container {
  width: 100%;
  overflow: hidden;
}
.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
