<script setup>
import { useRouter } from 'vue-router'

const props = defineProps({
  id: Number,
  name: String,
  value: String,
  status: String,
  image: String,
  daysLeft: Number,
})

const emit = defineEmits(['delete', 'water'])
const router = useRouter()

function goToDetail() {
  router.push(`/plant/${props.id}`)
}

function getDdayStatus(daysLeft) {
  if (daysLeft > 0) return 'safe'
  if (daysLeft === 0) return 'warn'
  return 'danger'
}
</script>

<template>
  <li class="plant-card-grid" @click="goToDetail">

    <div class="plant-card-grid__thumb">
      <img v-if="image" :src="image" :alt="name" />
      <i v-else class="ti ti-flower" aria-hidden="true"></i>
    </div>

    <div class="plant-card-grid__body">
      <p class="plant-card-grid__name">{{ name }}</p>
      <p class="plant-card-grid__type">{{ value }}</p>

      <div class="plant-card-grid__actions">
        <span
          class="badge"
          :class="`badge--${getDdayStatus(daysLeft)}`"
        >
          {{ daysLeft <= 0
            ? `D+${Math.abs(daysLeft)}`
            : `D-${daysLeft}` }}
        </span>

        <div class="plant-card-grid__btns">
          <button
            class="watering-mark"
            @click.stop="emit('water', id)"
            aria-label="물주기"
          >
            <i>💧</i>
          </button>
          <button
            class="plant-card-grid__delete"
            @click.stop="emit('delete', id)"
            aria-label="삭제"
          >
            <i class="ti ti-trash" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div>

  </li>
</template>
