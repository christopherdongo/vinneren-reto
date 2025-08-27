import { Card } from './Card'
import { useStore } from '../../store/useStore'
import type { Product } from '../../types/Products'

export const ProductCard = () => {

    const { products, filter: filterText } = useStore()

    const productFilter = filterText.length > 0 ? products.filter(item => item.title.toLowerCase().includes(filterText) ) : products

    return(
         <div className='grid gap-5 p-4'
         style={{
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        }}
         >
        {
           productFilter.map( (product: Product) => (
                <Card key={product.id} product={product} />
            ) )
        }
         </div>
    )
}