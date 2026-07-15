<template>
  <div class="cont__inner">
    <div class="home__banner">
      <div class="tit__head">
        <h2 class="tit__head-title">오.식.소</h2>
        <p class="tit__head-sub">
          오늘의 식물을 소개합니다. <br />매일 새로운 식물 친구를 만나보세요.
        </p>
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
    </div>

    <!-- 물주기 임박 리스트 -->
    <div class="home__content">
      <section
        v-if="wateringSoon.length > 0"
        class="home__watering"
        aria-labelledby="watering-title"
      >
        <div class="tit__head">
          <h2
            id="watering-title"
            class="tit__head-title"
          >
            식집사님,<br />
            물 시중 Please
          </h2>
          <p class="tit__head-sub">
            물주기 까먹으신거 아니죠?<br />
            식물들이 너무 목마르지 않게 물을 주세요.
          </p>
        </div>
        <ul class="watering-list">
          <li
            v-for="plant in wateringSoon"
            :key="plant.id"
            class="watering-list__item"
            :class="{ 'watering-list__item--overdue': plant.daysLeft <= 0 }"
          >
            <RouterLink :to="`/plant/${plant.id}`">
              <div>
                <strong class="watering-list__name">{{ plant.name }}</strong>

                <span
                  class="watering-list__dday"
                  :class="`watering-list__dday--${getDdayStatus(plant.daysLeft)}`"
                  >{{
                    plant.daysLeft <= 0
                      ? `D + ${Math.abs(plant.daysLeft)}`
                      : `D - ${plant.daysLeft}`
                  }}</span
                >
              </div>
            </RouterLink>
            <button
              @click.stop="handleWatering(plant.id)"
              class="watering-mark"
            >
              <i>💧</i>
            </button>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { ref, onMounted, onUnmounted, computed } from "vue";

import { usePlantStore } from "@/stores/plant";
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

//물주기 임박한 식물 리스트
function getDaysLeft(plant) {
  const last = new Date(plant.lastWateredAt);
  const today = new Date();
  last.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);

  const elapsed = Math.floor((today - last) / (1000 * 60 * 60 * 24)); // 물 준 지 며칠 지났는지 계산
  return plant.wateringInterval - elapsed; // 식물 물주기 - elapsed = 남은 일수 (마이너스이면 지남)
}

const wateringSoon = computed(() => {
  return plantStore.plants
    .filter((p) => p.lastWateredAt && p.wateringInterval) // 데이터 없는 애 제외
    .map((p) => ({ ...p, daysLeft: getDaysLeft(p) })) // 계산 결과를 붙여둠
    .filter((p) => p.daysLeft <= 3) // 3일 이내 + 지난 애들
    .sort((a, b) => a.daysLeft - b.daysLeft); // 급한 순
});

//D+ 별로 배경 컬러 다르게 하기
function getDdayStatus(daysLeft) {
  if (daysLeft > 0) return "safe"; // 아직 여유 있음 → 초록
  if (daysLeft === 0) return "warn"; // 오늘! → 노란
  return "danger"; // 이미 지남 → 빨간
}

//handleWatering
function handleWatering(id) {
  plantStore.waterPlant(id);
}
</script>
