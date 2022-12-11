import { useState, useEffect } from 'react'
import { GetCategoryList } from '../services/CategoryServices'

const CategoryList = () => {
  const [categoryList, setCategoryList] = useState([])

  useEffect(() => {
    const handleCategoryList = async () => {
      const data = await GetCategoryList()
      setCategoryList(data)
    }
    handleCategoryList()
  }, [])

  return (
    <div className="grid col-4">
      {categoryList.map((category) => (
        <div className="category-card" key={category.id}>
          <h1>{category.name}</h1>
          <h4>{category.description}</h4>
          <h2>{category.event}</h2>
        </div>
      ))}
    </div>
  )
}

export default CategoryList
