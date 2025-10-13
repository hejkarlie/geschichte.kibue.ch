<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue"

const container = ref(null)
const canvas = ref(null)

const MOBILE_THRESHOLD = 768
const MOVE_THRESHOLD = 5
const MOVE_THRESHOLD_MOBILE = 10
const MAX_EXTRA = { x: 0.25, y: 0.15 }
const MAX_EXTRA_MOBILE = { x: 0.5, y: 0.1 }

const windowWidth = ref(window.innerWidth)
const isMobile = computed(() => windowWidth.value < MOBILE_THRESHOLD)

let isPanning = false
let movedEnough = ref(false)

let panStart = { x: 0, y: 0 }

// The actual reactive offset the canvas is translated to
let initialOffset = { x: 0, y: 0 }
const offset = ref({ x: 0, y: 0 })

// Boundaries
let boundaries = { minX: 0, maxX: 0, minY: 0, maxY: 0 }

const maxExtraX = computed(() => {
  return isMobile.value ? MAX_EXTRA_MOBILE.x : MAX_EXTRA.x
})
const maxExtraY = computed(() => {
  return isMobile.value ? MAX_EXTRA_MOBILE.y : MAX_EXTRA.y
})

const panableWidth = computed(() => {
  if (!container.value) return window.innerWidth
  return container.value.clientWidth * (1 + maxExtraX.value)
})

const panableHeight = computed(() => {
  if (!container.value) return window.innerHeight
  return container.value.clientHeight * (1 + maxExtraY.value)
})

const moveThreshold = computed(() => {
  return isMobile.value ? MOVE_THRESHOLD : MOVE_THRESHOLD_MOBILE
})

function updateBoundaries() {
  if (!container.value || !canvas.value) return

  const cW = container.value.clientWidth
  const cH = container.value.clientHeight

  const canvasW = panableWidth.value
  const canvasH = panableHeight.value

  // Center offset: place the canvas so that extra space is evenly around content
  const centerOffset = {
    x: (cW - canvasW) / 2,
    y: (cH - canvasH) / 2,
  }

  offset.value = { ...centerOffset }
  initialOffset = { ...centerOffset }

  // Boundaries relative to this center
  boundaries = {
    minX: centerOffset.x - canvasW * maxExtraX.value,
    maxX: centerOffset.x + canvasW * maxExtraX.value,
    minY: centerOffset.y - canvasH * maxExtraY.value,
    maxY: centerOffset.y + canvasH * maxExtraY.value,
  }
}

function startPan(event) {
  // Event @mousedown
  isPanning = true
  movedEnough.value = false

  const point = getEventPoint(event)

  // The point the panning starts
  panStart = {
    x: point.x,
    y: point.y,
  }

  initialOffset = { ...offset.value }
}

function pan(event) {
  if (!isPanning) return

  const point = getEventPoint(event)

  // Movement since pan start
  const dx = point.x - panStart.x // How much it moved on x-axis
  const dy = point.y - panStart.y // How much if moved on y-axis

  // Compute total distance from start for click prevention
  const distance = Math.sqrt(dx * dx + dy * dy)

  if (distance > moveThreshold.value) {
    movedEnough.value = true
  }

  // Compute new offset within boundaries
  offset.value = {
    x: Math.min(Math.max(initialOffset.x + dx, boundaries.minX), boundaries.maxX),
    y: Math.min(Math.max(initialOffset.y + dy, boundaries.minY), boundaries.maxY),
  }
}

function endPan(event) {
  if (isPanning) {
    isPanning = false
    if (movedEnough.value) {
      // Prevent click propagation after panning
      event.preventDefault()
      event.stopImmediatePropagation()
    }
  }
}

function getEventPoint(event) {
  if (event.touches && event.touches.length > 0) {
    return {
      x: event.touches[0].clientX,
      y: event.touches[0].clientY,
    }
  } else {
    return {
      x: event.clientX,
      y: event.clientY,
    }
  }
}

function test() {
  if (!movedEnough.value) {
    console.log("click")
  }
  // reset movedEnough for next interaction
  movedEnough.value = false
}

let resizeTimeout

function handleResize() {
  windowWidth.value = window.innerWidth
  clearTimeout(resizeTimeout)
  resizeTimeout = setTimeout(() => {
    updateBoundaries()
  }, 500)
}

onMounted(() => {
  updateBoundaries()
  window.addEventListener("resize", handleResize)
})

onUnmounted(() => {
  window.removeEventListener("resize", handleResize)
})
</script>

<template>
  <div ref="container" class="canvas-container">
    <!-- Fixed elements -->
    <a href="https://kibue.ch" target="_blank" rel="noopener noreferrer">
      <img src="" alt="Logo" class="logo" />
    </a>
    <span class="title">Unsere Geschichte</span>

    <!-- Panable canvas -->
    <div
      ref="canvas"
      class="canvas"
      :style="{
        width: panableWidth + 'px',
        height: panableHeight + 'px',
        transform: `translate(${offset.x}px, ${offset.y}px)`,
      }"
      @mousedown="startPan"
      @touchstart="startPan"
      @mousemove="pan"
      @touchmove="pan"
      @mouseup="endPan"
      @mouseleave="endPan"
      @touchend="endPan"
    >
      <div class="column" v-for="n in 5" :key="n">
        <div @click="test" class="card" v-for="i in 5" :key="i">Card {{ n }}-{{ i }}</div>
      </div>
    </div>
  </div>
</template>

<style>
html,
body {
  margin: 0;
  padding: 0;
  overflow: hidden;
}
</style>
<style scoped>
.logo {
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 1000;
}

.title {
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 1000;
}
.canvas-container {
  width: 100vw;
  height: 100vh;
  background: #f0f0f0;
  cursor: grab;
  position: relative;
  touch-action: none; /* prevent native scrolling / pinch zoom */
  -webkit-user-select: none; /* Safari/Chrome */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE/Edge */
  user-select: none; /* Standard */
}
.canvas-container:active {
  cursor: grabbing;
}
.canvas {
  display: flex;
  flex-direction: row;
  gap: 20px;
  justify-content: center;
  align-items: center;
}
.column {
  background: #fff;
  padding: 20px;
  min-width: 200px;
  max-height: 300px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
.card {
  background: #eee;
  padding: 10px;
  border-radius: 4px;
}
</style>
