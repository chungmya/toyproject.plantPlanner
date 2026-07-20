<template>
  <div
    class="plant-detail"
    v-if="plant"
  >
    <!-- 식물 상세 정보 -->
    <header class="plant-dtail__header">
      <i
        class="ti ti-arrow-left"
        aria-hidden="true"
        @click="router.back()"
      >
      </i>
      <h1 class="plant-detail__title">{{ plant.name }}</h1>
    </header>

    <img
      v-if="plant.photo"
      :src="plant.photo"
      class="plant-detail__photo"
    />

    <h2 class="plant-detail__name">{{ plant.name }}</h2>

    <div class="tool-bar--list">
      <button
        class="plant-card-grid__delete"
        aria-label="삭제"
        @click="handleDelete"
      >
        <i
          class="ti ti-trash"
          aria-hidden="true"
        ></i>
      </button>
      <button
        class="plant-card-grid__edit"
        aria-label="수정"
      >
        <i
          class="ti ti-edit"
          aria-hidden="true"
        ></i>
      </button>
    </div>

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
import { computed, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import { usePlantStore } from "@/stores/plant";
import "@/assets/scss/pages/PlantDetailView.scss";

const router = useRouter();
const route = useRoute();
const plantStore = usePlantStore();

//해당 아이디 식물 찾기
onMounted(() => {
  plantStore.fetchPlants();
});

const plant = computed(() => plantStore.getPlantById(route.params.id));

// 삭제 버튼 클릭 시 해당 식물 삭제
function handleDelete() {
  plantStore.removePlant(Number(route.params.id)); // 현재 페이지 식물 id 사용
  router.push("/"); // 삭제 후 홈으로 이동
}
</script>
