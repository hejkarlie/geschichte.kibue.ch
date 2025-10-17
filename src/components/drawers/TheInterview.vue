<script setup>
// import TheImageLegend from "@/components/drawers/TheImageLegend.vue"
// import { NFlex } from "naive-ui"
import { useAppStore } from "@/stores/app.js"
const appStore = useAppStore()
</script>

<template>
  <div>{{ appStore.drawerContent }}</div>
  <!-- <TheImageLegend /> -->
</template>
