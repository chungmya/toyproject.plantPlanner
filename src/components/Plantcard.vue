<template>
  <li
    class="plant-card"
    @click="goToDetail"
  >
    <div :class="['plant-card__thumb', `plant-card__thumb--${status}`]">
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

    <div class="plant-card__actions">
      <span
        class="badge"
        :class="`badge--${status}`"
        >D+3</span
      >

      <div style="display: flex; gap: 0.6rem">
        <button
          class="watering-mark"
          @click.stop="$emit('water', id)"
        >
          <i>💧</i>
        </button>
        <button
          class="plant-card__delete"
          @click.stop="$emit('delete', id)"
        >
          <i
            class="ti ti-trash"
            aria-hidden="true"
          ></i>
        </button>
      </div>
    </div>
  </li>
</template>

<script setup>
import { useRouter } from "vue-router";

const props = defineProps({
  id: Number,
  name: String,
  value: String,
  status: String,
});

//삭제 버튼
const emit = defineEmits(["delete"]);

//카드 클릭 -> 해당 번호 이동
const router = useRouter();

function goToDetail() {
  router.push(`/plant/${props.id}`);
}
</script>
