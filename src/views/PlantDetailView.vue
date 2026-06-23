<template>
  <div class="plant-detail">
    <!-- 식물 상세 정보 -->
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { usePlantStore } from '@/stores/plant'

const route = useRoute()
const plantStore = usePlantStore()
const plant = plantStore.getPlantById(Number(route.params.id))
</script>
