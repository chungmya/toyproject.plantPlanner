<template>
  <div class="plant-detail" v-if="plant">
    <header class="plant-dtail__header">
      <i class="ti ti-arrow-left" aria-hidden="true" @click="router.back()"></i>
      <h1 class="plant-detail__title">{{ plant.name }}</h1>
    </header>

    <img v-if="plant.photo" :src="plant.photo" class="plant-detail__photo" />

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
        <span>매 {{ plant.wateringInterval }}일마다</span>
      </div>
    </div>
  </div>
  <div v-else>
    <p>식물을 찾을수 없어요.</p>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import { usePlantStore } from "@/stores/plant";
import "@/assets/scss/pages/PlantDetailView.scss";

const router = useRouter();
const route = useRoute();
const plantStore = usePlantStore();

// Number() 제거 → 문자열 그대로 비교
const plant = computed(() =>
  plantStore.getPlantById(route.params.id)
)
</script>