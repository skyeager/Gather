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
    console.log(res.data)
    return res.data.events
  } catch (error) {
    throw error
  }
}
