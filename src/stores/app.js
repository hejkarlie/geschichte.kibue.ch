import { ref, computed } from "vue"
import { defineStore } from "pinia"

export const useAppStore = defineStore("app", () => {
  // Screen size
  const TABLET_THRESHOLD_UPPER = 1025
  const MOBILE_THRESHOLD = 768
  const windowWidth = ref(window.innerWidth)
  const isTablet = computed(
    () => windowWidth.value >= MOBILE_THRESHOLD && windowWidth.value < TABLET_THRESHOLD_UPPER,
  )
  const isMobile = computed(() => windowWidth.value < MOBILE_THRESHOLD)

  // Canvas data (columns and cards)
  const canvas = ref(null)

  async function fetchCanvasData() {
    const timestamp = Date.now()
    try {
      const response = await fetch(`${import.meta.env.BASE_URL}data/canvas.json?v=${timestamp}`)
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

  // Handle clicks on card while panning
  const movedEnough = ref(false)

  // History drawer
  const showHistoryDrawer = ref(false)

  // Card drawer
  const showCardDrawer = ref(false)

  // Selected card
  const selectedCard = ref(null)
  const drawerContent = ref(null)

  async function fetchDrawerContent(cardId) {
    const timestamp = Date.now()
    try {
      const response = await fetch(
        `${import.meta.env.BASE_URL}cards/${cardId}/drawer.json?v=${timestamp}`,
      )
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data = await response.json()
      drawerContent.value = data
    } catch (error) {
      console.error("Failed to load drawer data:", error)
      drawerContent.value = null
    }
  }

  return {
    fetchCanvasData,
    fetchDrawerContent,
    canvas,
    windowWidth,
    isTablet,
    isMobile,
    movedEnough,
    showHistoryDrawer,
    showCardDrawer,
    selectedCard,
    drawerContent,
  }
})
