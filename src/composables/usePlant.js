// 식물 관련 재사용 로직 (물주기 알림, 상태 계산 등)



//물주기 임박한 식물 리스트
export function getDaysLeft(plant) {
  if (!plant.lastWateredAt || !plant.wateringInterval) return null

  
  const last = new Date(plant.lastWateredAt);
  const today = new Date();
  last.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);

  const elapsed = Math.floor((today - last) / (1000 * 60 * 60 * 24)); // 물 준 지 며칠 지났는지 계산
  return plant.wateringInterval - elapsed; // 식물 물주기 - elapsed = 남은 일수 (마이너스이면 지남)
}


//D+ 별로 배경 컬러 다르게 하기
export  function getDdayStatus(daysLeft) {
  if (daysLeft === null || daysLeft === undefined) return 'safe' 
  if (daysLeft > 0) return "safe"; // 아직 여유 있음 → 초록
  if (daysLeft === 0) return "warn"; // 오늘! → 노란
  return "danger"; // 이미 지남 → 빨간
}


export function formatDday(daysLeft) {
  if (daysLeft === null || daysLeft === undefined) return '-'
  if (daysLeft === 0) return 'D-day'
  if (daysLeft > 0) return `D-${daysLeft}`
  return `D+${Math.abs(daysLeft)}`
}