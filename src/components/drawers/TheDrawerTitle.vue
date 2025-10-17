<script setup>
import { useAppStore } from "@/stores/app.js"

const appStore = useAppStore()

const cardsWithoutTitles = ["image", "video"]
</script>

<template>
  <div
    :style="{
      fontSize: appStore.isMobile ? '22px' : '28px',
      marginTop: '0px',
      marginRight: '0px',
      marginBottom: appStore.isMobile ? '30px' : '45px',
      marginLeft: '0px',
    }"
  >
    <div
      v-if="cardsWithoutTitles.includes(appStore.selectedCard.type)"
      :style="{ fontWeight: 600 }"
    >
      {{ appStore.drawerContent.title }}
    </div>
    <div v-else-if="appStore.selectedCard.type === 'milestone'" :style="{ lineHeight: 1.2 }">
      <span>
        {{ appStore.selectedCard.content.year }}
      </span>
      <br />
      <span :style="{ fontWeight: 600 }">
        {{ appStore.selectedCard.content.title }}
      </span>
    </div>
  </div>
</template>
