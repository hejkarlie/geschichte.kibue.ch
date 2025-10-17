<script setup>
import { defineAsyncComponent } from "vue"
import { NDrawer, NDrawerContent, NIcon } from "naive-ui"
import { useAppStore } from "@/stores/app.js"
import { CloseRound } from "@vicons/material"
import TheDrawerTitle from "@/components/drawers/TheDrawerTitle.vue"

const appStore = useAppStore()

const drawerComponents = {
  video: defineAsyncComponent(() => import("@/components/drawers/TheVideo.vue")),
  gallery: defineAsyncComponent(() => import("@/components/drawers/TheGallery.vue")),
  interview: defineAsyncComponent(() => import("@/components/drawers/TheInterview.vue")),
  article: defineAsyncComponent(() => import("@/components/drawers/TheArticle.vue")),
}
</script>

<template>
  <n-drawer
    v-model:show="appStore.showCardDrawer"
    :height="'100%'"
    placement="bottom"
    :style="{ backgroundColor: '#f7f3e9' }"
  >
    <n-drawer-content>
      <n-icon
        :component="CloseRound"
        @click="appStore.showCardDrawer = false"
        :size="55"
        :style="{
          position: 'absolute',
          top: '1rem',
          right: '1rem',
          cursor: 'pointer',
          zIndex: '200',
        }"
      />
      <div class="content-container">
        <TheDrawerTitle />
        <component :is="drawerComponents[appStore.selectedCard.drawerType]" />
      </div>
    </n-drawer-content>
  </n-drawer>
</template>

<style lang="css" scoped>
.content-container {
  padding: 50px 25px;
}
</style>
