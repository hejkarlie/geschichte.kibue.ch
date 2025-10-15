import { ref, computed } from "vue"
import { defineStore } from "pinia"

export const useAppStore = defineStore("app", () => {
  // Screen size
  const MOBILE_THRESHOLD = 768
  const windowWidth = ref(window.innerWidth)
  const isMobile = computed(() => windowWidth.value < MOBILE_THRESHOLD)

  // Canvas data (columns and cards)
  const canvas = ref(null)

  async function fetchCanvasData() {
    const timestamp = Date.now()
    try {
      const response = await fetch(`/data/canvas.json?v=${timestamp}`)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data = await response.json()
      console.log("Cyrill Martin - Karlie GmbH")
      canvas.value = data.columns
    } catch (error) {
      console.error("Failed to load canvas data:", error)
      canvas.value = null
    }
  }

  return { fetchCanvasData, canvas, windowWidth, isMobile }
})
