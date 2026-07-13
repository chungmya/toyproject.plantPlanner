<template>
  <div class="home">
    <div class="home__banner">
      <p class="home__banner-label">오.식.소</p>
      <div class="home__banner-top">
        <h1 class="home__title">
          오늘의 식물을 소개합니다. <br />매일 새로운 식물 친구를 만나보세요.
        </h1>
      </div>
    </div>

    <!-- 
    슬라이드 배너
      -->
    <div
      class="home__banner-slider"
      role="region"
      aria-label="배너 이미지 슬라이드"
      @touchstart="stopSlide"
      @touchend="startSlide"
    >
      <div
        v-for="(bnrimg, index) in bnrimgs"
        :key="bnrimg.id"
        class="home__banner-img"
        :class="{ 'home__banner-img--active': index === currentIndex }"
        :aria-hidden="index !== currentIndex"
        aria-label="배너 이미지 슬라이드"
        role="`${bnrimg.name} 배너 이미지`"
      >
        <img
          :src="bnrimg.image"
          :alt="bnrimg.name"
        />
        <span class="blind">{{ bnrimg.name }}</span>
      </div>
      <div
        class="home__banner-dots"
        role="tablist"
      >
        <button
          v-for="(bnrimg, index) in bnrimgs"
          :key="bnrimg.id"
          class="home__banner-dot"
          :class="{ 'home__banner-dot--active': index === currentIndex }"
          @click="currentIndex = index"
          :aria-selected="index == currentIndex"
          :aria-label="`${index + 1}번째 배너 이미지`"
        ></button>
      </div>
    </div>

    <!-- 물주기 임박 리스트 -->
    <div class="home__content">
      <section
        class="home__watering"
        aria-labelledby="watering-title"
      >
        <h2
          id="watering-title"
          class="home__watering-title"
        >
          💧 식집사님, 물 시중이 필요해요
        </h2>
        <ul class="watering-list">
          <li
            v-for="plant in wateringSoon"
            key="plant.id"
            class="watering-list__item"
          >
            <RouterLink>
              <strong class="watering-list__name">{{ plant.name }}</strong>
              <span class="watering-list__dday"></span>
            </RouterLink>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { ref, onMounted, onUnmounted } from "vue";

import { usePlantStore } from "@/stores/plant";
import PlantCard from "@/components/plant/PlantCard.vue";
import "@/assets/scss/pages/HomeView.scss"; //scss 파일 import
// 배너 이미지 import
import banner01 from "@/assets/images/home-banner01.png";
import banner02 from "@/assets/images/home-banner02.png";
import banner03 from "@/assets/images/home-banner03.png";

const plantStore = usePlantStore();

const bnrimgs = [
  { id: 1, image: banner01, name: "알부카 콘코르디아나" },
  { id: 2, image: banner02, name: "파키포디움 그락실리우스" },
  { id: 3, image: banner03, name: "구갑룡" },
];

//배너 이미지 자동 슬라이드
const currentIndex = ref(0);
let timer = null;

onMounted(() => {
  // 식물 데이터 불러오기
  plantStore.fetchPlants();

  //배너 자동 슬라이드
  timer = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % bnrimgs.length;
  }, 3000);
});

onUnmounted(() => {
  clearInterval(timer);
});
</script>
