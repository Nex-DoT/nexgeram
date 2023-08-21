import React,{useState} from 'react';
//icon 
import { AiOutlineSend } from "react-icons/ai";
import { AiOutlineMore} from "react-icons/ai";
import { AiOutlineClose} from "react-icons/ai";
//component
const Pv = () => {
    //state For more btn
    const [more , setMore] = useState(false);
    //function for more btn for show or hide
    const moreHandeler = () => {
        if(more){
            setMore(false);
        }else{
            setMore(true);
        }
    };
    //jsx
    return (
        <div className=' bg-gray-700 w-2/3 m-2 h-full  rounded-md shadow-inner relative'>
            <div className=' absolute bottom-2 left-1/2 -translate-x-1/2 w-5/6 flex items-center justify-center'>
                <button className=' w-10 h-10 flex mr-3 justify-center items-center rounded-full transition-all bg-gray-600 hover:bg-gray-500' onClick={moreHandeler}>{more ? <AiOutlineClose className='text-2xl text-blue-400 '/>:<AiOutlineMore className='text-2xl text-blue-400 '/>  }</button>
                <input type="text" className='bg-gray-600 w-3/4 h-10 rounded-md text-white p-2 outline-none' placeholder='write a message' />
                <button className=' w-10 h-10 flex ml-3 justify-center items-center rounded-full bg-gray-600'>
                    <AiOutlineSend className='text-2xl text-blue-400 '/>
                </button>
            </div>
            {more && <div className=' shadow-lg absolute bottom-14 left-20 w-28 h-28 rounded-md bg-gray-500'>
                <ul className='w-full h-full flex flex-col justify-around items-center'>
                    <li className='h-1/3 justify-center items-center flex text-white hover:bg-gray-600 w-full rounded-t-md cursor-pointer text-xs'>background color</li>
                    <li className='h-1/3 w-full border-gray-400 border-b border-t flex items-center justify-center text-white hover:bg-gray-600 cursor-pointer text-xs'>font size</li>
                    <li className='h-1/3 flex items-center justify-center text-white hover:bg-gray-600 w-full rounded-b-md cursor-pointer text-xs'>text color</li>
                </ul>
                </div>}
        </div>
    );
};

export default Pv;