import React from 'react'
import { useStore } from '../../store/useStore'
import type { Product } from '../../types/Products'


interface CartProps {
  product: Product
}


export const Card: React.FC<CartProps> = ( {product} ) => {

    const { addToCart } = useStore()

    return (
    <div className="border rounded-lg p-4 flex flex-col items-center shadow-md hover:shadow-lg transition">
      <img src={product.image} alt={product.title} className="h-32 object-contain mb-2" />
      <h2 className="font-semibold text-center text-sm line-clamp-2">{product.title}</h2>
      <p className="text-lg font-bold text-green-600">${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="text-black mt-2 px-3 py-1 bg-blue-600 rounded border hover:border-b-blue-950"
      >
        agregar al carrito
      </button>
    </div>
        
    )
}