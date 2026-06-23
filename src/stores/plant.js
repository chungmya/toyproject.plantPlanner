import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePlantStore = defineStore('plant', () => {
  const plants = ref([])

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
