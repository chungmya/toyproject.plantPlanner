import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useDiaryStore = defineStore('diary', () => {

  // localStorage에서 불러오기
  const saved = localStorage.getItem('diaries')
  const entries = ref(saved ? JSON.parse(saved) : [])
  
  // 바뀌면 자동 저장
  watch(entries, (newValue) => {
    localStorage.setItem('diaries', JSON.stringify(newValue))
  },
    {deep : true}
  )

  function addEntry(entry) {
    //최신 일자가 위로쌓임
    entries.value.unshift({ id: Date.now(), date: new Date().toISOString(), ...entry }) 
  }

  function removeEntry(id) {
    entries.value = entries.value.filter(e => e.id !== id)
  }

  function getEntriesByPlant(plantId) {
    return entries.value.filter(e => e.plantId === plantId)
  }

  return { entries, addEntry, removeEntry, getEntriesByPlant }
})
