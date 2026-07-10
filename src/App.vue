<script setup>
import { RouterView, RouterLink, useRoute } from "vue-router";

const route = useRoute();
</script>

<template>
  <div class="app-wrap">
    <nav class="tab-bar">
      <RouterLink to="/" class="tab-bar__item" :class="{ 'tab-bar__item--active': route.path === '/' }">
        <i class="ti ti-home" aria-hidden="true"></i>
        <span>홈</span>
      </RouterLink>
      <RouterLink to="/diary" class="tab-bar__item" :class="{ 'tab-bar__item--active': route.path === '/diary' }">
        <i class="ti ti-notebook" aria-hidden="true"></i>
        <span>일지</span>
      </RouterLink>
      <RouterLink to="/plant/list" class="tab-bar__item" :class="{ 'tab-bar__item--active': route.path === '/plant/list' }">
        <i class="ti ti-leaf" aria-hidden="true"></i>
        <span>식물</span>
      </RouterLink>
      <RouterLink to="/favorite" class="tab-bar__item" :class="{ 'tab-bar__item--active': route.path === '/favorite' }">
        <i class="ti ti-star" aria-hidden="true"></i>
        <span>초록별</span>
      </RouterLink>
    </nav>
    <RouterView />
  </div>
</template>
