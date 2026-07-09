<template>
  <div class="diary">
    <header class="diary__header">
      <i class="ti ti-arrow-left" @click="router.back()"></i>
      <h1 class="diary__title">타임라인</h1>
    </header>

    <!-- 일지 작성 폼 -->
    <div class="diary__form">
      <p class="diary__form-label">새 일지 작성</p>

      <form class="diary-add__from" @submit.prevent="handleSubmit">
        <div class="photo-upload" @click="triggerFileInput">
          <div v-if="photoPreview">
            <img :src="photoPreview" class="photo-upload__preview" />
          </div>
          <template v-else>
            <i class="ti ti-camera-plus" aria-hidden="true"></i>
            <span>사진 추가</span>
          </template>
        </div>
        <input ref="fileInput" type="file" accept="image/*" style="display: none" @change="handlePhotoChange" />
        <div class="form-group">
          <label for="date">날짜</label>
          <input id="date" type="date" v-model="selectedDate" />
        </div>

        <div class="form-group">
          <label for="note">기록</label>
          <textarea id="note" v-model="selectedNote" placeholder="오늘의 기록을 남겨보세요..."></textarea>
        </div>

        <button type="submit" class="diary__submit">기록하기</button>
      </form>
    </div>

    <!-- 타임라인 목록 -->
    <ul class="timeline">
      <li class="timeline__item" v-for="entry in diaryStore.entries" :key="entry.id">
        <div class="timeline__dot"></div>
        <div class="timeline__line"></div>
        <div class="timeline__card">
          <p class="timeline__date">{{ entry.date }}</p>
          <img v-if="entry.photo" class="timeline__photo" :src="entry.photo" alt="일지 사진" />
          <p class="timeline__note">{{ entry.note }}</p>
          <button type="button" class="timeline__delete" @click="diaryStore.removeEntry(entry.id)">
            <i class="ti ti-trash" aria-hidden="true"></i>
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useDiaryStore } from "@/stores/diary";
import "@/assets/scss/pages/DiaryView.scss";
import { ref } from "vue";
import { useRouter } from "vue-router";

const diaryStore = useDiaryStore();

//사진 업로드
const fileInput = ref(null);
const photoPreview = ref(null);

function triggerFileInput() {
  fileInput.value.click();
}

function handlePhotoChange(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      photoPreview.value = e.target.result;
    };
    reader.readAsDataURL(file);
  }
}

//제출 버튼
const selectedDate = ref("");
const selectedNote = ref("");

function handleSubmit() {
  if (!selectedNote.value.trim()) return; // 기록이 비어있으면 제출하지 않음

  diaryStore.addEntry({
    date: selectedDate.value,
    note: selectedNote.value,
    photo: photoPreview.value,
  });

  //폼 제출후 초기화
  selectedDate.value = "";
  selectedNote.value = "";
  photoPreview.value = null;
}
</script>
