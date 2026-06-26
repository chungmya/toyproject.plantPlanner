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
      <button class="plant-card__delete" @click="$emit('delete', id)">
       <i class="ti ti-trash" aria-hidden="true"></i><span>삭제</span>
      </button>
    </li>
</template>

<script setup>
defineProps({
  id: Number,
  name: String,
  value: String,
  status: String
})

const emit = defineEmits(['delete'])

</script>