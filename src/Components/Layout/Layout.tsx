import React from 'react'
import {Footer} from '../Footer'
import { Header } from '../Header'


type Props = {
    children: React.ReactNode
}

export const Layout: React.FC<Props> = ({children}) => {

    return (
       <>
       <Header />
        <main className='min-h-screen w-full pt-30'>
        {children}
        </main>
        <Footer />
       </>
    )
}