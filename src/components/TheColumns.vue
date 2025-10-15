<script setup>
import { NFlex } from "naive-ui"
import { columns as columnDimensions } from "@/utils/dimensions.js"
import TheCards from "@/components/TheCards.vue"

const props = defineProps(["columns"])
</script>

<template>
  <n-flex :size="55">
    <div
      v-for="column in props.columns"
      :key="column.columnId"
      :style="{
        flex: columnDimensions[column.width],
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', // centers children horizontally
      }"
    >
      <TheCards :cards="column.cards" />
    </div>
  </n-flex>
</template>
