<script setup>
import { RouterView, RouterLink, useRoute } from "vue-router";

const route = useRoute();
</script>

<template>
  <div class="app-inner">
    <nav
      class="tab-bar"
      aria-label="주요 메뉴"
    >
      <RouterLink
        to="/"
        class="tab-bar__item"
        :class="{ 'tab-bar__item--active': route.path === '/' }"
      >
        <p class="menu-name">
          <i
            class="ti ti-home"
            aria-hidden="true"
          ></i>
          <span>HOME</span>
        </p>
      </RouterLink>
      <RouterLink
        to="/plant/list"
        class="tab-bar__item"
        :class="{ 'tab-bar__item--active': route.path === '/plant/list' }"
      >
        <p class="menu-name">
          <i
            class="ti ti-leaf"
            aria-hidden="true"
          ></i>
          <span>식물</span>
        </p>
      </RouterLink>
      <RouterLink
        to="/diary"
        class="tab-bar__item"
        :class="{ 'tab-bar__item--active': route.path === '/diary' }"
      >
        <p class="menu-name">
          <i
            class="ti ti-notebook"
            aria-hidden="true"
          ></i>
          <span>일지</span>
        </p>
      </RouterLink>
      <RouterLink
        to="/memorial"
        class="tab-bar__item"
        :class="{ 'tab-bar__item--active': route.path === '/memorial' }"
      >
        <p class="menu-name">
          <i
            class="ti ti-star"
            aria-hidden="true"
          ></i>
          <span>초록별</span>
        </p>
      </RouterLink>
    </nav>
  </div>
  <main>
    <h1 class="app__title">
      <img src="@/assets/images/logo.png" alt="MY Plant" />
      <span class="blind">MY Plant</span>
    </h1>
    <RouterView />
  </main>
</template>
