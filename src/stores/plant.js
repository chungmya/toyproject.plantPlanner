import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'

const API_URL = '/api/plants'


export const usePlantStore = defineStore('plant', () => {
  const plants = ref([])

  // 전체 목록 불러오기
  async function fetchPlants() {
    const response = await axios.get(API_URL)
    plants.value = response.data
  }

  // 추가 (서버에 저장 후 목록 갱신)
  async function addPlant(plant) {
    await axios.post(API_URL, plant)
    await fetchPlants()
  }

  // 삭제
  async function removePlant(id) {
    await axios.delete(`${API_URL}/${id}`)
    await fetchPlants()
  }

  function getPlantById(id) {
    return plants.value.find(p => p.id === id)
  }

  //물주기 버튼 해당 식물의 lastWateredAt을 오늘 날짜로 업데이트
  function waterPlant(id) {
    const plant = plants.value.find(p => p.id === id) 
    if (plant) {
      plant.lastWateredAt = new Date().toISOString()
    }
  }


  return { plants, fetchPlants, addPlant, removePlant, getPlantById, waterPlant }
})