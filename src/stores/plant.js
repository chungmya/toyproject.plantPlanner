import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const usePlantStore = defineStore('plant', () => {
  // localStorage에서 저장된 게 있으면 가져오고, 없으면 빈 배열
  const saved = localStorage.getItem('plants')
  const plants = ref(saved ? JSON.parse(saved) : [])

  watch(plants, (newValue) => {
    localStorage.setItem('plants', JSON.stringify(newValue))
  }, { deep:true})

  function addPlant(plant) {
    plants.value.push({ id: Date.now(), ...plant })
  }

  function removePlant(id) {
    plants.value = plants.value.filter(p => p.id !== id)
  }

  function getPlantById(id) {
    return plants.value.find(p => p.id === id)
  }

  return { plants, addPlant, removePlant, getPlantById }
})
