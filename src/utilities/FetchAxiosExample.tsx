import axios from 'axios'
import { useState, useEffect } from 'react'

const BASE_URL = 'https://jsonplaceholder.typicode.com'
const BASE_URL1 = 'https://dummyjson.com/products'

const FetchAxiosExample = () => {
  const [products, setProducts] = useState<[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState()

  useEffect(()=> {
    const fetchProducts = async () => {
      setIsLoading(true)

      try {
        const data = await axios.get(`${BASE_URL1}`)
        setProducts(data.data.products)
      } catch (error: any) {
        setError(error)
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchProducts()
  }, [])

  if(isLoading) {
    return <div>Loading...</div>
  }

  if(error) {
    return <div>Something went wrong.. Try again please!</div>
  }

  return (
    <section className="padding bg-indigo-700">
      <h1 className="text-3xl text-white font-bold font-palanquin text-center">Products</h1>
      <div className="bg-amber-500 p-20">
        {products.map((product: any) => product.category === "laptops" ? <img key={product.id} src={product.thumbnail} /> : null
        )}
      </div>
    </section>
  )
}

export default FetchAxiosExample