// 물주기 남은 날짜 계산
export function getDaysLeft(plant) {
  if (!plant.lastWateredAt || !plant.wateringInterval) return null

  const last = new Date(plant.lastWateredAt)
  const today = new Date()
  last.setHours(0, 0, 0, 0)
  today.setHours(0, 0, 0, 0)

  const elapsed = Math.floor((today - last) / (1000 * 60 * 60 * 24))
  return plant.wateringInterval - elapsed
}

// D-day 상태 계산
export function getDdayStatus(daysLeft) {
  if (daysLeft === null || daysLeft === undefined) return 'safe'
  if (daysLeft > 0) return 'safe'
  if (daysLeft === 0) return 'warn'
  return 'danger'
}

// D-day 텍스트 포맷
export function formatDday(daysLeft) {
  if (daysLeft === null || daysLeft === undefined) return '-'
  if (daysLeft === 0) return 'D-day'
  if (daysLeft > 0) return `D-${daysLeft}`
  return `D+${Math.abs(daysLeft)}`
}