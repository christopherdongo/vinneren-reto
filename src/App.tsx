import { useEffect } from 'react'
import './App.css'
import {Layout} from './Components/Layout'
import { ProductCard } from './Components/ProductCard'
import { useStore } from './store/useStore';


function App() {


  const { getProducts, getProductsStorage } = useStore()


  useEffect(() => {
       getProducts()
       getProductsStorage()
  }, [])


  return (
      <Layout>
       <ProductCard />
      </Layout>
  )
}

export default App
