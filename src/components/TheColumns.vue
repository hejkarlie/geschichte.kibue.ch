<script setup>
import { NFlex } from "naive-ui"
import { columns as columnDimensions } from "@/utils/dimensions.js"
import TheCards from "@/components/TheCards.vue"

const props = defineProps(["columns"])

const columnFlex = (size) => (size === "large" ? columnDimensions.large : columnDimensions.small)
</script>

<template>
  <n-flex :size="55">
    <div
      v-for="column in props.columns"
      :key="column.columnId"
      :style="{
        flex: columnFlex(column.size),
      }"
    >
      <TheCards :cards="column.cards" />
    </div>
  </n-flex>
</template>

<style lang="css" scoped>
/* .column {
  background: #fff;
  padding: 20px;
  min-width: 200px;
  max-height: 300px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
} */
</style>
