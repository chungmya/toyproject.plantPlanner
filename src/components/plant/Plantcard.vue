<template>
    <li class="plant-card" @click="goToDetail">
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
      <span class="badge" :class="`badge--${status}`">D+3</span>
      <button class="plant-card__delete" @click.stop="$emit('delete', id)">
       <i class="ti ti-trash" aria-hidden="true"></i><span>삭제</span>
      </button>
    </li>
</template>

<script setup>
import { useRouter } from 'vue-router'

const props = defineProps({
  id: Number,
  name: String,
  value: String,
  status: String
})


//삭제 버튼
const emit = defineEmits(['delete'])

//카드 클릭 -> 해당 번호 이동
const router = useRouter()

function goToDetail() {
  router.push(`/plant/${props.id}`)
}


</script>
