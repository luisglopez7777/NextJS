import React, { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { useRouter } from 'next/router'

const ProductPage = () => {
  const [product, setProduct] = useState<TProduct>()
  const {
    query: { id },
  } = useRouter()

  useEffect(() => {
    if (id) {
      window
        .fetch(`/api/avo/${id}`)
        .then((res) => res.json())
        .then((data) => setProduct(data))
    }
  }, [id])

  return (
    <div>
      <Navbar />
      <div>Platzi and Next.js!</div>
      {product?.name}
    </div>
  )
}

export default ProductPage
