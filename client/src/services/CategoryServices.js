import Client from './api'

export const GetCategories = async () => {
  try {
    const res = await Client.get('/category/')
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetCategoryList = async () => {
  try {
    const res = await Client.get('/event/categorylist/:category_id')
    console.log(res.data)
    return res.data
  } catch (error) {
    throw error
  }
}
