import React from 'react';
import { FaPlus, FaFile, FaLayerGroup  } from "react-icons/fa6";
import { IoHome, IoPerson } from "react-icons/io5";
import { IoIosRocket  } from "react-icons/io";

import { NavLink } from 'react-router-dom';

function Sidebar({children}) {
    const menuItem = [
        {
            path: "/",
            name: "Add Task",
            icon : <FaPlus/>
        },
        {
            path: "/inbox",
            name: "Inbox", 
            icon : <IoHome />
        },
        
    ]
    const accountPageItems = [
        {
            path: "/profile",
            name: "Profile",
            icon : <IoPerson/>
        },
        {
            path: "/login",
            name: "Sign In",
            icon : <FaFile />
        },
        {
            path: "/register",
            name: "Sign up",
            icon : <IoIosRocket />
        },
    ]
    return (
        <div>
            <div className="container mx-auto flex bg-custom-gray px-4 py-6">
                <div className="left_sidebar w-1/5 px-2">
                    <div className='logo_company px-4 py-8 flex items-center relative'>
                        <div className='Logo mr-3'><FaLayerGroup /></div>
                        <h1 className='text-lg font-bold'>
                            Grooup1 - To Do App
                        </h1>
                    </div>
                    <div className='list_option mt-4 pe-6'>
                        {
                            menuItem.map((item, index) => (
                                <NavLink to={item.path} key={index} className='group group-nav-item' activeClassName='active'>
                                    <div className='container_nav_item text-black flex items-center px-3 py-3 rounded-xl mb-2 group.active:bg-white group-hover:bg-white duration-500 ease-in-out'>
                                        <div className="icon px-2 py-2 rounded-xl bg-white group-hover:bg-custom-turquoise group-hover:text-white text-cusotom-turquoise mr-2  duration-500 ease-in-out">{item.icon}</div>
                                        <div className="">{item.name}</div>
                                    </div>
                                </NavLink>
                            ))
                        }
                    </div>
                    <div className='mt-4'>
                        <div className='my-3 px-3'>
                            <h2 className='uppercase font-bold text-sm'>Account pages</h2>
                        </div>
                        <div className='pe-6'>
                            {
                                accountPageItems.map((item, index) => (
                                    <NavLink to={item.path} key={index} className='group group-nav-item mt-2' activeClassName='active'>
                                        <div className='container_nav_item text-black flex items-center px-3 py-3 rounded-xl mb-2 group.active:bg-white group-hover:bg-white duration-500 ease-in-out'>
                                            <div className="icon px-2 py-2 rounded-xl bg-white group-hover:bg-custom-turquoise group-hover:text-white text-cusotom-turquoise mr-2  duration-500 ease-in-out">{item.icon}</div>
                                            <div className="font-custom-bold text-[#a0aec0]">{item.name}</div>
                                        </div>
                                    </NavLink>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <main className='w-4/5'>
                    <div className="top_path">
                        <div className='px-6'>
                            <h1 className='text-3xl pt-6 text-[#a0aec0]'>Pages <span className='text-sm text-black'>/ Content</span></h1>
                            <div className='mt-2 font-bold'>Main Content</div>
                        </div>
                    </div>
                    <div className="main_space py-2">
                        <div className='bg-white w-full px-6 py-4 rounded-2xl h-screen'>
                            {children}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Sidebar;