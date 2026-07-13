<template>
  <div class="plant-list">
    <div class="home__banner">
      <p class="home__banner-label">나의 반려 식물 리스트</p>
      <div class="home__banner-top">
        <h1 class="home__title">
          우리집 반려 식물 리스트를 한눈에 확인해보세요. <br />식물의 상태와
          물주기 정보를 관리할 수 있습니다.
        </h1>
      </div>
    </div>

    <div class="home__content">
      <ul class="plant-list">
        <PlantCard
          v-for="plant in plantStore.plants"
          :key="plant.id"
          :id="plant.id"
          :name="plant.name"
          :value="plant.species"
          :status="plant.status"
          @delete="handleDelete"
        />
      </ul>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { ref, onMounted, onUnmounted } from "vue";

import { usePlantStore } from "@/stores/plant";
import PlantCard from "@/components/plant/PlantCard.vue";

const plantStore = usePlantStore();

const props = defineProps({
  id: Number,
  name: String,
  value: String,
  status: String,
  image: String,
});

onMounted(() => {
  // 식물 데이터 불러오기
  plantStore.fetchPlants();
});

// 삭제 버튼 클릭 시 해당 식물 삭제
function handleDelete(id) {
  plantStore.removePlant(id);
}
</script>
