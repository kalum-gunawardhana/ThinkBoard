import { PlusIcon } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <header className='bg-base-300 boarder-b boarder-base-content/10'>
            <div className='mx-auto max-w-6xl p-4'>
                <div className='flex items-center justify-between'>
                    {/* Logo */}
                    <h1 className='text-3xl font-bold text-primary font-mono tracking-tight'>ThinkBoard</h1>

                    {/* New Note Button */}
                    <div className='flex items-center gap-4'>
                        <Link to={"/create"} className='btn btn-primary'>
                            <PlusIcon className='size-5' />
                            <span>New Note</span>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar
