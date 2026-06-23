// 날짜 포맷, D-Day 계산 등 유틸 함수
export function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString('ko-KR')
}

export function daysSince(dateString) {
  const diff = Date.now() - new Date(dateString).getTime()
  return Math.floor(diff / (1000 * 60 * 60 * 24))
}
