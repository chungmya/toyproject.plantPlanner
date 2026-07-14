# 🌱 오식소 (오늘의 식물을 소개합니다)

식집사를 위한 식물 관리 앱입니다.

저는 식집사로서 10~20여 개의 식물을 키우면서
사용하던 물주기 앱이 두 차례 서비스 종료를 겪었고,
그때마다 모든 식물을 재등록해야 했습니다.(새로 등록하기 너무 귀찮음..)

직접 만들면 이 문제가 없겠다 싶어 시작한 프로젝트입니다.

## 주요 기능

- 🪴 **식물 목록/등록/상세** — 반려 식물 CRUD
- 💧 **물주기 알림** — 마지막 물 준 날과 물주기 주기를 기반으로
  물주기가 지난 식물을 홈에서 D+일수와 함께 표시
- 🖼️ **배너 슬라이드** — 자동 롤링, 터치 시 일시정지
- ♿ **웹 접근성** — WAI-ARIA 적용, 시맨틱 마크업, 헤딩 계층 준수

## 기술 스택

- **Vue 3** — Composition API, `<script setup>`
- **Vite** — 빌드 도구, 개발 서버 프록시
- **Vue Router 4** — 페이지 라우팅 (동적 라우트, lazy loading)
- **Pinia** — 전역 상태 관리
- **Axios** — HTTP 클라이언트
- **json-server** — 목업 REST API
- **SCSS** — BEM 네이밍, Vite additionalData로 전역 변수 주입

## 시작하기

터미널 2개가 필요합니다. (API 서버 + 개발 서버)

```bash
npm install

# 터미널 1 — json-server (목업 API)
npx json-server db.json --port 3000

# 터미널 2 — Vite 개발 서버
npm run dev
```

모바일 기기에서 테스트하려면:

```bash
# vite.config.js에 server.host: true 설정 후
npm run dev
# 표시되는 Network 주소로 접속 (PC와 같은 와이파이 필요)
```

API 요청은 Vite 프록시(`/api` → `localhost:3000`)를 통해 전달되므로
접속 기기와 무관하게 동작합니다.

## 라우트

| 경로          | 뷰              | 설명                        |
| ------------- | --------------- | --------------------------- |
| `/`           | HomeView        | 홈 (배너, 물주기 임박 알림) |
| `/plant/list` | PlantListView   | 식물 목록                   |
| `/plant/:id`  | PlantDetailView | 식물 상세 정보              |
| `/plant/add`  | PlantAddView    | 식물 등록                   |
| `/diary`      | DiaryView       | 관리 일지                   |
| `/memorial`   | FavoriteView    | 초록별                      |
