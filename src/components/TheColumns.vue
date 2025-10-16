<script setup>
import { NFlex } from "naive-ui"
import { columnWidth } from "@/utils/dimensions.js"
import TheCards from "@/components/TheCards.vue"

const props = defineProps(["columns"])
</script>

<template>
  <n-flex :size="55" align="center">
    <div
      v-for="column in props.columns"
      :key="column.columnId"
      :style="{ flex: columnWidth[column.width] }"
    >
      <TheCards :cards="column.cards" />
    </div>
  </n-flex>
</template>
