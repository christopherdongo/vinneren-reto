import React from 'react'
import { useStore } from '../../store/useStore'
import type { Product } from '../../types/Products'


interface ItemProps {
  item: Product
}

export const ItemCart: React.FC<ItemProps> = ({item}) => {

        const { removeFromCart } = useStore()

    return (
     <div
        key={item.id}
        className="flex gap-4 border-2 border-red-400 p-2 rounded bg-white"
      >
        <img
          src={item.image}
          alt={item.title}
          className="w-20 h-20 object-contain"
        />
        <div className="flex flex-col justify-center flex-1">
          <p className="text-sm font-semibold text-black">{item.title}</p>
          <p className="text-green-600 font-bold">${item.price}</p>
          <p className="text-green-600 font-bold">Cantidad: <span>{item.count}</span></p>
          <button
            className="text-red-600 text-sm mt-2 hover:underline"
            onClick={() => removeFromCart(item.id)}
          >
            Eliminar
          </button>
        </div>
      </div>
    )
}