import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'
import { MoveRight } from 'lucide-react'


export default function Navbar() {
    return (
        <header>
            <nav className='flex justify-between items-center p-4 md:px-3 md:py-4 border border-[#197686] rounded-[24px]'>
                <Link href={"/"}>
                    <Image src="/logo.png" alt="Logo" width={100} height={100} className='cursor-pointer' />
                </Link>
                <ul className='hidden font-[JejuMyeongjo] md:flex px-[10px] justify-center items-center gap-4 lg:text-lg font-normal'>
                    <li className='text-white '>
                        <Link href={"#"} >Events</Link>
                    </li>
                    <li className='text-[#B3B3B3] hover:text-white'>
                        <Link href={"#"}>My Tickets</Link>
                    </li>
                    <li className='text-[#B3B3B3] hover:text-white'>
                        <Link href={"#"}>About Project</Link>
                    </li>
                </ul>
                <div>
                    <Button variant="default" className='flex gap-2 font-[JejuMyeongjo] group font-light'>
                        My Tickets
                        <MoveRight className='group-hover:-rotate-45 duration-100' />
                    </Button>
                </div>
            </nav>
        </header>
    )
}
