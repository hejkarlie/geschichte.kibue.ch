<script setup>
import { useAppStore } from "@/stores/app.js"

const appStore = useAppStore()
</script>

<template>
  <div
    :style="{
      fontSize: appStore.isMobile ? '10px' : '12px',
      fontWeight: 600,
      marginTop: appStore.isMobile ? '10px' : '12px',
      marginRight: '0px',
      marginBottom: '5px',
      marginLeft: '0px',
    }"
  >
    {{ appStore.drawerContent.legend }}
  </div>
</template>
