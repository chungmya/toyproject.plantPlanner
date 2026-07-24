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
        <PlantCardGrid
          v-for="plant in plantStore.plants"
          :key="plant.id"
          :id="plant.id"
          :name="plant.name"
          :value="plant.species"
          :status="plant.status"
          :image="plant.photo"
          :daysLeft="getDaysLeft(plant)"
          @water="handleWatering"
        />
      </ul>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { RouterLink } from "vue-router";
import { usePlantStore } from "@/stores/plant";
import PlantCardGrid from "@/components/plant/PlantCardGrid.vue";
import { getDaysLeft } from "@/composables/usePlant";
import "@/assets/scss/pages/PlantListView.scss";

const plantStore = usePlantStore();

onMounted(() => {
  plantStore.fetchPlants();
});

function handleWatering(id) {
  plantStore.waterPlant(id);
}
</script>