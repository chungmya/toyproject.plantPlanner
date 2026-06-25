<template>
  <div class="plant-add">
    <!-- 식물 추가 폼 -->
     <h1>식물 등록</h1>
     <div class="plant-add">
  <header class="plant-add__header">
    <i class="ti ti-arrow-left plant-add__back" aria-hidden="true"></i>
    <h1 class="plant-add__title">식물 친구 등록</h1>
  </header>

  <div class="plant-add__photo">
    <div class="photo-upload" @click="triggerFileInput">
    <img v-if="photoPreview" :src="photoPreview" class="photo-upload__preview" />
    <template v-else>
      <i class="ti ti-camera-plus" aria-hidden="true"></i>
      <span>사진 추가</span>
    </template>
    </div>
    <input 
    ref="fileInput"
    type="file"
    accept="image/*"
    @change="handlePhotoChange"
    style="display: none;"
    />
  </div>

  <form class="plant-add__form">
    <div class="form-group">
      <label for="name">이름</label>
      <input v-model="name" id="name" type="text" placeholder="예: 하월시아" />
      <p class="form-group__hint">우리집 식물에게 붙여줄 별명</p>
    </div>

    <div class="form-group">
      <label for="species">관엽식물</label>
      <input v-model="species" id="species" type="text" placeholder="예: 다육이, 관엽식물" />
    </div>

    <div class="form-group">
      <label for="adoptedDate">입양한 날짜</label>
      <input v-model="adoptedDate" id="adoptedDate" type="date" />
    </div>

    <div class="form-group">
      <label for="cycle">물주기</label>
      <div class="watering-input">
        <span>매</span>
        <input v-model="wateringCycle" id="cycle" type="number" value="7" min="1" />
        <span>일마다</span>
      </div>
    </div>

    <button type="submit" class="plant-add__submit">등록하기</button>
  </form>
</div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { usePlantStore } from '@/stores/plant'
import "@/assets/scss/pages/PlantAddView.scss";

import { ref } from 'vue'
const name = ref('') 
const species = ref('')
const adoptedDate = ref('')
const wateringCycle = ref(7)

//사진 업로드
const fileInput = ref(null)
const photoPreview = ref(null)

function triggerFileInput() {
  fileInput.value.click()
}

function handlePhotoChange(event) {
  const file = event.target.files[0]
  if (!file) return

  const reader = new FileReader()
  reader.onload = (e) => {
    photoPreview.value = e.target.result
  }
  reader.readAsDataURL(file)
}


const router = useRouter()
const plantStore = usePlantStore()
</script>
