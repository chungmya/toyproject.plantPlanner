<script setup>
import { RouterLink } from "vue-router";
import { usePlantStore } from "@/stores/plant";
import PlantCard from "@/components/plant/PlantCard.vue";
import "@/assets/scss/pages/HomeView.scss";

const plantStore = usePlantStore();

function handleDelete(id) {
  plantStore.removePlant(id);
}
</script>

<template>
  <div class="home">
    <div class="home__banner">
      <p class="home__banner-label">오늘의 식물 소개</p>
      <div class="home__banner-top">
        <h1 class="home__title">오.식.소</h1>
        <RouterLink to="/plant/add" class="home__add-btn">
          <i class="ti ti-circle-plus" aria-hidden="true"></i>
        </RouterLink>
      </div>
      <div class="home__banner-img">
        <span>배너 이미지 영역</span>
      </div>
    </div>

    <div class="home__content">
      <div class="home__search">
        <i class="ti ti-search" aria-hidden="true"></i>
        <span>식물 검색</span>
      </div>

      <ul class="plant-list">
        <PlantCard v-for="plant in plantStore.plants" :key="plant.id" :id="plant.id" :name="plant.name" :value="plant.species" :status="plant.status" @delete="handleDelete" />
      </ul>
    </div>
  </div>
</template>
<<<<<<< HEAD
=======

<script setup>
import { RouterLink } from 'vue-router'
import { usePlantStore } from '@/stores/plant'
import PlantCard from '@/components/plant/PlantCard.vue'
import "@/assets/scss/pages/HomeView.scss";

const plantStore = usePlantStore()

//delete버튼
function handleDelete(id) {
  plantStore.removePlant(id)
}


const plants = [
  { id: 1, value:'다육이', name:'하월시아', status:'safe' },
  { id: 2, value:'아프리카식물', name:'아이오베숨', status:'warn' },
  { id: 3, value:'관엽', name:'스킨답서스', status:'danger' },
] 
</script>


>>>>>>> origin/master
