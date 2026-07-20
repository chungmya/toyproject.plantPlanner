<script setup>
import { useRouter } from "vue-router";
import { computed } from "vue";
import { getDdayStatus, formatDday } from "@/composables/usePlant";

const props = defineProps({
  id: Number,
  name: String,
  value: String,
  status: String,
  image: String,
  daysLeft: Number,
});

const emit = defineEmits(["delete", "water"]);
const router = useRouter();

function goToDetail() {
  router.push(`/plant/${props.id}`);
}
</script>

<template>
  <li
    class="plant-card-grid"
    @click="goToDetail"
  >
    <div class="plant-card-grid__thumb">
      <img
        v-if="image"
        :src="image"
        :alt="name"
      />
      <i
        v-else
        class="ti ti-flower"
        aria-hidden="true"
      ></i>
    </div>

    <div class="plant-card-grid__body">
      <p class="plant-card-grid__name">{{ name }}</p>
      <p class="plant-card-grid__type">{{ value }}</p>

      <div class="plant-card-grid__actions">
        <span
          class="badge"
          :class="`badge--${getDdayStatus(daysLeft)}`"
        >
          {{ formatDday(daysLeft) }}
        </span>

        <div class="plant-card-grid__btns">
          <button
            class="watering-mark"
            @click.stop="emit('water', id)"
            aria-label="물주기"
          >
            <i>💧</i>
          </button>
        </div>
      </div>
    </div>
  </li>
</template>
