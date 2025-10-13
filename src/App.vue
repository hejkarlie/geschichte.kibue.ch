<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue"

const container = ref(null)
const canvas = ref(null)

const windowWidth = ref(window.innerWidth)
const windowHeight = ref(window.innerHeight)

const isMobile = computed(() => windowWidth.value < 768)

let isPanning = false
let movedEnough = ref(false)
const MOBILE_THRESHOLD = 768
const MOVE_THRESHOLD_DESKTOP = 5
const MOVE_THRESHOLD_MOBILE = 10
const getMoveThreshold = () =>
  window.innerWidth < MOBILE_THRESHOLD ? MOVE_THRESHOLD_MOBILE : MOVE_THRESHOLD_DESKTOP

let panStart = { x: 0, y: 0 } // Starting point of the panning event

// The actual reactive offset the canvas is translated to
const offset = ref({ x: 0, y: 0 }) // The initial offset
let initialOffset = { x: 0, y: 0 }

// Boundaries
const maxExtraX = computed(() => {
  return isMobile.value ? 0.5 : 0.25
})
const maxExtraY = computed(() => {
  return isMobile.value ? 0.1 : 0.15
})

const panableWidth = computed(() => {
  if (!container.value) return window.innerWidth
  return container.value.clientWidth * (1 + maxExtraX.value)
})

const panableHeight = computed(() => {
  if (!container.value) return window.innerHeight
  return container.value.clientHeight * (1 + maxExtraY.value)
})

// The inital boundaries (they get updated immediately)
let boundaries = { minX: 0, maxX: 0, minY: 0, maxY: 0 }
// minX => added to top left
// maxX => added to top right
// minY => addet to bottom left
// maxY => added to bottom right

function updateBoundaries() {
  // The boundaries are added to the available viewport
  // They determine up to where you can pan
  if (!container.value || !canvas.value) return

  const cW = container.value.clientWidth
  const cH = container.value.clientHeight
  const sW = canvas.value.scrollWidth
  const sH = canvas.value.scrollHeight

  boundaries = {
    minX: -sW + cW - cW * maxExtraX.value,
    maxX: cW * maxExtraX.value,
    minY: -sH + cH - cH * maxExtraY.value,
    maxY: cH * maxExtraY.value,
  }

  // offset.value = { x: 50, y: 50 }
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
  const moveThreshold = getMoveThreshold()

  if (distance > moveThreshold) {
    movedEnough.value = true
  }

  // compute new offset within boundaries
  offset.value = {
    x: Math.min(Math.max(initialOffset.x + dx, boundaries.minX), boundaries.maxX),
    y: Math.min(Math.max(initialOffset.y + dy, boundaries.minY), boundaries.maxY),
  }
}

function endPan(event) {
  if (isPanning) {
    isPanning = false
    if (movedEnough.value) {
      // prevent click propagation after panning
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

function handleResize() {
  windowWidth.value = window.innerWidth
  windowHeight.value = window.innerHeight
}

onMounted(() => {
  updateBoundaries() // compute canvas size first

  const centerOffset = {
    x: (container.value.clientWidth - panableWidth.value) / 2,
    y: (container.value.clientHeight - panableHeight.value) / 2,
  }

  offset.value = { ...centerOffset } // start centered

  // compute boundaries relative to this center
  boundaries = {
    minX: centerOffset.x - panableWidth.value * maxExtraX.value,
    maxX: centerOffset.x + panableWidth.value * maxExtraX.value,
    minY: centerOffset.y - panableHeight.value * maxExtraY.value,
    maxY: centerOffset.y + panableHeight.value * maxExtraY.value,
  }

  window.addEventListener("resize", handleResize)
  window.addEventListener("resize", updateBoundaries)
})

onUnmounted(() => {
  window.removeEventListener("resize", handleResize)
  window.removeEventListener("resize", updateBoundaries)
})

function test() {
  if (!movedEnough.value) {
    console.log("click")
  }
  // reset movedEnough for next interaction
  movedEnough.value = false
}
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
