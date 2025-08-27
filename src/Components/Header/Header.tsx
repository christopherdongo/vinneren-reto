
import { Cart } from '../Cart'
import { Search } from '../Search'

export const Header = () => {

    return (
        <header className='flex justify-between items-center p-4 bg-blue-600 text-white fixed w-full'>
            <h1 className='text-xl font-bold'>Fake Store</h1>
            <div className='flex justify-between items-center gap-5'>
                <Search />
                <Cart />
            </div>
        </header>
    )
}