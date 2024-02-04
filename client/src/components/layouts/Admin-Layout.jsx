import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { FaHome, FaRegListAlt, FaUser } from "react-icons/fa";
import {FaMessage} from "react-icons/fa6";

export const AdminLayout = () => {
  return (
    <>
    <div className="container">
        <nav>
            <ul>
                <li><NavLink to="/admin/users"><FaUser/> User</NavLink></li>
                <li> <NavLink to="/admin/contacts"><FaMessage/> Contacts</NavLink></li>
                <li><NavLink to="/service"><FaRegListAlt/> Services</NavLink></li>
                <li><NavLink to="/"><FaHome/> Home</NavLink></li>
            </ul>
        </nav>
    </div>
    <Outlet/>
    </>
  )
}

