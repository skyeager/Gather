import Client from './api'

export const GetCategories = async () => {
  try {
    const res = await Client.get('/category/')
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetCategoryList = async (id) => {
  try {
    const res = await Client.get(`/event/categorylist/${id}`)
    return res.data.Events
  } catch (error) {
    throw error
  }
}
