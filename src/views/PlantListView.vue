<template>
  <div class="cont__inner plant-list__view">
    <div class="tit__head">
      <h2 class="tit__head-title">반려 식물 리스트</h2>
      <p class="tit__head-sub">
        식물의 상태와 물주기 정보를 관리할 수 있습니다.
      </p>
    </div>

    <div class="plant-list__content">
      <div class="tool-bar">
        <RouterLink
          to="/plant/add"
          class="plant__add-btn"
        >
          <span>식물 등록하기</span>
          <i
            class="ti ti-circle-plus"
            aria-hidden="true"
          ></i>
        </RouterLink>
      </div>
      <ul class="plant-list">
        <PlantCard
          v-for="plant in plantStore.plants"
          :key="plant.id"
          :id="plant.id"
          :name="plant.name"
          :value="plant.species"
          :lastWateredAt="plant.lastWateredAt"
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
import PlantCard from "@/components/PlantCard.vue";
import "@/assets/scss/pages/PlantListView.scss"; //scss 파일 import

const plantStore = usePlantStore();

const props = defineProps({
  id: Number,
  name: String,
  value: String,
  lastWateredAt: String,
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
