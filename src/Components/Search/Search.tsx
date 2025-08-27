
import { useStore } from '../../store/useStore'

export const Search = () => {


    const { filter, setFilter } = useStore()


    return (
       <div>
       <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="buscar producto"
        className="px-2 py-1 rounded text-black border-2 border-amber-100"
      />
        </div>
    )
}