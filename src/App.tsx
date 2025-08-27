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
        // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
      <Layout>
       <ProductCard />
      </Layout>
  )
}

export default App
