import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useDiaryStore = defineStore('diary', () => {
  const entries = ref([])

  function addEntry(entry) {
    entries.value.push({ id: Date.now(), date: new Date().toISOString(), ...entry })
  }

  function getEntriesByPlant(plantId) {
    return entries.value.filter(e => e.plantId === plantId)
  }

  return { entries, addEntry, getEntriesByPlant }
})
