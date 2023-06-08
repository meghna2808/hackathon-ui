import React, { useState } from 'react';
import logo from "../assets/logo1.png";
import walmart from "../assets/walmart.png"
import { FaLayerGroup } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { GoSearch } from "react-icons/go";
import { MdLogin, MdLogout } from "react-icons/md";
import { BiWorld } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsPhone } from "react-icons/bs";
import { Link } from 'react-router-dom';
import DropDown from "./Dropdown";
import "./Navbar.css"
import {
  Button
} from "@walmart-web/livingdesign-components";
const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const openDropDown = () => {
    setDropdown(!dropdown);
  }
  return (
    <>
      <nav className={["navbar" && "bg-[#0071dc] px-3 py-2 lg:px-8 text-white flex justify-between items-center w-full"]}>
        {/* <div > */}
        <ul className="flex  items-center gap-x-3 shrink-0">
          <li >
            <img src={walmart} alt="" className=" h-12" />
          </li>
          <li
          >
            <Link
              className="md:flex hidden  items-center gap-2 hover:bg-[#06529a] p-3 rounded-full"
            >
              Departments <i className="text-[16px] font-semibold" />
            </Link>
          </li>
          <li >

            {dropdown && <DropDown />}
            <Link
              to='/'
              className='md:flex hidden  items-center gap-2 hover:bg-[#06529a] p-3 rounded-full'
            >
              <Button onClick={openDropDown}> Services</Button>
            </Link>
          </li>
          <li className='md:flex hidden  items-center gap-2 hover:bg-[#06529a] p-3 rounded-full'>
            <Link
              to='/Recommerce'
              className='md:flex hidden  items-center gap-2 hover:bg-[#06529a] p-3 rounded-full'
            >
              Recommerce
            </Link>
          </li>
        <li className={["search-bar"]}>
            <input

              placeholder='Search at Walmart'
              type="search"
              className="rounded-full py-1.5 outline-0 flex-1 px-1.5 gap-x-10"
            />
          </li>
          <li className='md:flex hidden  items-center gap-10 hover:bg-[#06529a] p-3 rounded-full'>
            <div className="flex items-center gap-x-2 hover:bg-[#06529a] p-3 rounded-full">
              <MdLogin className="text-[17px] rotate-90" />
              <p className="text-[16px] font-semibold">Register</p>
            </div>
          </li>
          <li className='flex items-center gap-2 hover:bg-[#06529a] p-3 rounded-full whitespace-nowrap'>
            <div className="flex items-center gap-10 hover:bg-[#06529a] p-3 rounded-full whitespace-nowrap">
              <MdLogout className="text-[20px] -rotate-90" />
              <p className="text-[16px] font-semibold">Sign in</p>
            </div>
          </li>
          <li className="hover:bg-[#06529a] p-3 rounded-full">
            <div className="hover:bg-[#06529a] p-3 rounded-full">
              <AiOutlineShoppingCart className="w-7 h-7" />
            </div>
          </li>
        </ul>


        {/* </div> */}

      </nav>
    </>
  )
}
export default Navbar;
