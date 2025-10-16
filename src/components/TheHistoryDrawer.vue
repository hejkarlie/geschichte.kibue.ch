<script setup>
import { NDrawer, NDrawerContent, NIcon } from "naive-ui"
import { useAppStore } from "@/stores/app.js"
import { CloseRound } from "@vicons/material"

const appStore = useAppStore()
</script>

<template>
  <n-drawer
    v-model:show="appStore.showHistoryDrawer"
    :width="appStore.isMobile ? '100%' : '33%'"
    placement="right"
  >
    <n-drawer-content>
      <n-icon
        :component="CloseRound"
        @click="appStore.showHistoryDrawer = false"
        :size="55"
        :style="{
          position: 'absolute',
          top: '1.5rem',
          right: '1.5rem',
          cursor: 'pointer',
          zIndex: '200',
        }"
      />
      <!-- Drawer content -->
    </n-drawer-content>
  </n-drawer>
</template>
