import Image from 'next/image'
import React from 'react'
import { IoAirplane, IoBrowsersOutline, IoCalculator } from 'react-icons/io5'
import { SidebarMenuItem } from './SidebarMenuItem'

const menuItems = [
    {
        path: '/dashboard/main',
        icon: <IoBrowsersOutline size={30}/>,
        title: 'Dashboard',
        subTitle: 'Data Overview'
    },
    {
        path: '/dashboard/counter',
        icon: <IoCalculator size={30}/>,
        title: 'Reservaciones',
        subTitle: 'Counter Test'
    },
]



export const Sidebar = () => {
    return (
        <div id="menu"
            style={{ width: '400px' }}
            className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0 h-screen overflow-y-scroll">

            <div id="logo" className="my-4 px-6">
                <h1 className="flex items-center text-lg md:text-2xl font-bold text-white">
                    <IoAirplane className='mr-2' />
                    <span>Reservati</span>
                    <span className="text-blue-500">o</span>.</h1>
                <p className="text-slate-500 text-sm">Manage your reservations</p>
            </div>

            <div id="profile" className="px-6 py-10">
                <p className="text-slate-500">Welcome back,</p>
                <a href="#" className="inline-flex space-x-2 items-center">
                    <span>
                        <Image className="rounded-full w-8 h-8"
                            src="https://res.cloudinary.com/dlkeaojyg/image/upload/v1676489127/ibwpjbvikgmkar0modic.png"
                            alt="User Avatar"
                            width={50}
                            height={50}
                        />
                    </span>
                    <span className="text-sm md:text-base font-bold">
                        Juan Carlos Santamaria
                    </span>
                </a>
            </div>


            <div id="nav" className="w-full px-6">
                {
                    menuItems.map(item => (
                        <SidebarMenuItem
                            key={item.path}
                            path={item.path}
                            icon={item.icon}
                            title={item.title}
                            subTitle={item.subTitle}
                        />
                    ))
                }
            </div>
        </div>
    )
}
