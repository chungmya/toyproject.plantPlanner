<template>
    <li class="plant-card">
      <div 
      :class="[
      'plant-card__thumb',
      `plant-card__thumb--${status}`
      ]"
      >
        <i class="ti ti-flower" aria-hidden="true"></i>
      </div>
      <div class="plant-card__info">
        <p class="plant-card__name">{{ name }}</p>
        <p class="plant-card__type">{{ value }}</p>
      </div>
      <span class="badge badge--safe">D+3</span>
    </li>
</template>

<script setup>
defineProps({
  name: String,
  value: String,
  status: String
})
</script>