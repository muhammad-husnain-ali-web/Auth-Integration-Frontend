import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
    const params = useParams();
    const {name} = params
  return (
    <div>
      Product Name: {name}
    </div>
  )
}

export default ProductDetail
