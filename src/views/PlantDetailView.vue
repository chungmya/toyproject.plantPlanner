<template>
  <div class="plant-detail" v-if="plant">
    <!-- 식물 상세 정보 -->
     <header class="plant-dtail__header">
      <i class="ti ti-arrow-left" aria-hidden="true"></i>
      <h1 class="plant-detail__title">{{ plant.name }}</h1>
     </header>

     <img v-if="plant.photo" :src="plant.photo" class="plant-detail__photo"/>

     <h2 class="plant-detail__name">{{ plant.name }}</h2>

    <div class="plant-detail__info">
      <div class="plant-detail__row">
        <span>품종</span>
        <span>{{ plant.species }}</span>
      </div>
      <div class="plant-detail__row">
        <span>입양일</span>
        <span>{{ plant.adoptedDate }}</span>
      </div>
      <div class="plant-detail__row">
        <span>물주기</span>
        <span>매 {{ plant.wateringCycle }}일마다</span>
      </div>   
    </div>

  </div>
  <div v-else>
    <p>식물을 찾을수 없어요.</p>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { usePlantStore } from '@/stores/plant'
import "@/assets/scss/pages/PlantDetailView.scss";


const route = useRoute()
const plantStore = usePlantStore()
const plant = plantStore.getPlantById(Number(route.params.id))

function getPlantById(id) {
  return plantStore.value.find(p => p.id == id)
}
</script>
