# 🌱 toyproject.plant

식집사를 위한 식물 관리 앱. Vue 3 학습 목적으로 제작 중인 토이 프로젝트입니다.

## 기술 스택

- **Vue 3** — Composition API, `<script setup>`
- **Vite** — 빌드 도구
- **Vue Router 4** — 페이지 라우팅
- **Pinia** — 전역 상태 관리

## 시작하기

```bash
npm install
npm run dev
```

## 폴더 구조

```
toyproject.plant/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── main.js                   앱 진입점 (Vue + Pinia + Router 등록)
    ├── App.vue                   루트 컴포넌트
    ├── router/
    │   └── index.js              라우터 설정
    ├── stores/
    │   ├── plant.js              식물 상태 (Pinia)
    │   └── diary.js              관리 일지 상태 (Pinia)
    ├── views/
    │   ├── HomeView.vue          식물 목록 (/)
    │   ├── PlantDetailView.vue   식물 상세 (/plant/:id)
    │   ├── PlantAddView.vue      식물 추가 (/plant/add)
    │   └── DiaryView.vue         관리 일지 (/diary)
    ├── components/
    │   ├── common/               버튼, 모달 등 공통 컴포넌트
    │   └── plant/                식물 카드 등 식물 전용 컴포넌트
    ├── composables/
    │   └── usePlant.js           물주기 알림 등 재사용 로직
    ├── utils/
    │   └── date.js               날짜 포맷, D-Day 계산
    └── assets/images/
```

## 라우트

| 경로 | 뷰 | 설명 |
|------|-----|------|
| `/` | HomeView | 식물 목록 |
| `/plant/:id` | PlantDetailView | 식물 상세 정보 |
| `/plant/add` | PlantAddView | 식물 추가 |
| `/diary` | DiaryView | 관리 일지 |
