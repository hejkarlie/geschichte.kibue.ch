<script setup>
import { NDrawer, NDrawerContent, NIcon } from "naive-ui"
import { useAppStore } from "@/stores/app.js"
import { CloseRound } from "@vicons/material"

const appStore = useAppStore()
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
      <!-- Drawer content -->
    </n-drawer-content>
  </n-drawer>
</template>
