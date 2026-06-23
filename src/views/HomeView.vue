

<template>
  <div class="home">
  <header class="home__header">
    <h1 class="home__title">식집사 다이어리</h1>
    <div class="action-bar">
      <RouterLink to="/plant/add" class="home__add-btn">
        <i class="ti ti-circle-plus" aria-hidden="true"></i>
      </RouterLink>
      <RouterLink to="" class="home__alert-btn">
        <i class="ti ti-bell home__bell" aria-hidden="true"></i>
      </RouterLink>
    </div>
  </header>

  <div class="home__search">
    <i class="ti ti-search" aria-hidden="true"></i>
    <span>식물 검색</span>
  </div>


  <ul class="plant-list">
    <PlantCard 
    v-for="plant in plants" 
    :key="plant.id"
    :name="plant.name"
    :value="plant.value"
    :status="plant.status"
    />
  </ul>
</div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { usePlantStore } from '@/stores/plant'
import PlantCard from '@/components/plant/PlantCard.vue'

import "@/assets/scss/pages/HomeView.scss";


const plantStore = usePlantStore()

const plants = [
  { id: 1, value:'다육이', name:'하월시아', status:'safe' },
  { id: 2, value:'아프리카식물', name:'아이오베숨', status:'warn' },
  { id: 3, value:'관엽', name:'스킨답서스', status:'danger' },
] 
</script>


