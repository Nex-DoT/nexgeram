import React,{useState} from 'react';
//style
import style from "./SettingMenu.module.css";
//icon
import { BsList } from "react-icons/bs";
import { AiOutlineClose } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';
import { AiOutlineDown } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineTeam } from "react-icons/ai";
import { AiOutlineNotification } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlineSave } from "react-icons/ai";
import { AiOutlineSetting } from "react-icons/ai";
import { BsMoonStars } from "react-icons/bs";
//blaw balw
const NexgramVersion = "v-1.2";
const SettingMenu = () => {
    const menuHandelaer = ()=>{
        if(menu === false ){
            setMenu(true)
        }else{
            setMenu(false)
        }
    }
    const [menu , setMenu] = useState(false)
    return (
        <>
        {/* //menu Btn */}
            <div className='flex items-center w-1/1 h-12 place-content-between pr-4 pl-4'>
                <div onClick={menuHandelaer} className={ menu ? " z-10 w-7 h-7 bg-gray-700 flex items-center justify-center rounded-full shadow-lg cursor-pointer transition-all ml-52" : "w-7 h-7 bg-gray-700 flex items-center justify-center rounded-full shadow-lg cursor-pointer transition-all"}>
                    {menu ? <AiOutlineClose className={style.icon}/> : <BsList  className={style.icon} />}
                </div>
                <h3 className='text-white'>NexGeram</h3>
                <div className="w-7 h-7 bg-gray-700 flex items-center justify-center rounded-full shadow-lg cursor-pointer">
                    <BsSearch className={style.icon}/>
                </div>
            </div>
        {/* //Menu */}
            <div className={menu ? ' drop-shadow-lg w-1/3 h-full bg-gray-800 text-white absolute left-0 top-0 flex flex-col justify-around pb-80 transition-all opacity-100' : " drop-shadow-xl opacity-0 -left-1/2 transition-all w-1/3 h-full bg-gray-800 text-white absolute top-0 flex flex-col justify-around pb-80"} >
                <div className='p-3'>
                    <img src="" alt="" className='w-12 h-12 rounded-full mb-3'/>
                    <div className='flex w-full items-center justify-between pr-1 pl-1'>
                        <p>Name</p>
                        <i><AiOutlineDown/></i>
                    </div>
                </div>
                <ul className='p-3 text-sm'>
                    <li className='flex h-8 items-center cursor-pointer border-solid'><AiOutlineTeam className=' text-lg mr-3'/>New group</li>
                    <li className='flex h-8 items-center cursor-pointer'><AiOutlineNotification className=' text-lg mr-3'/>New Channel</li>
                    <li className='flex h-8 items-center cursor-pointer'><AiOutlineUser className=' text-lg mr-3'/>Contacts</li>
                    <li className='flex h-8 items-center cursor-pointer'><AiOutlinePhone className=' text-lg mr-3'/>Calls</li>
                    <li className='flex h-8 items-center cursor-pointer'><AiOutlineSave className=' text-lg mr-3'/>Saved Messages</li>
                    <li className='flex h-8 items-center cursor-pointer'><AiOutlineSetting className=' text-lg mr-3'/>Setting</li>
                    <li className='flex h-8 items-center cursor-pointer'><BsMoonStars className=' text-lg mr-3'/>Dark mode</li>
                </ul>
                <br/>
                <div className='text-sm pl-2 underline'>
                    <a href="">NexGeram Desktop</a><br/>
                    <a href="">{`version ${NexgramVersion}`}</a><br/>
                    <a href="">About</a>
                </div>
            </div>
        </>
    );
};

export default SettingMenu;