<script setup>
import TheImageLegend from "@/components/drawers/TheImageLegend.vue"
import { useAppStore } from "@/stores/app.js"
const appStore = useAppStore()
</script>

<template>
  <div class="video-wrapper">
    <div class="video-container">
      <iframe
        :src="appStore.drawerContent.youTubeEmbedUrl"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
    <div>
      <TheImageLegend />
    </div>
  </div>
</template>

<style lang="css" scoped>
.video-wrapper {
  width: 100%;
  max-width: 980px;
  margin: 0 auto;
}

.video-container {
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* 16:9 ratio */
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
