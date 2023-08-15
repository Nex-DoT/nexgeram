import React,{useState,useContext} from 'react';
import { activebar } from '../../Database/ActiveListfiltered';
const ChatMenu = () => {
    const [state , newAction] =  useContext(activebar);
    return (
        <div>
            {console.log(state)}
            <ul className='flex justify-around w-full text-gray-500 font-bold text-sm h-10 items-center'>
                <li onClick={()=>{newAction({type:"cheange" , name:"all"})}} className={state.all? ' cursor-pointer text-blue-400 border-b-2 border-blue-400 transition-all' :' cursor-pointer transition-all'}>All</li>
                <li onClick={()=>{newAction({type:"cheange" , name:"user"})}} className={state.user? ' cursor-pointer text-blue-400 border-b-2 border-blue-400 transition-all' :' cursor-pointer transition-all'}>User</li>
                <li onClick={()=>{newAction({type:"cheange" , name:"channel"})}} className={state.channel? ' cursor-pointer text-blue-400 border-b-2 border-blue-400 transition-all' :' cursor-pointer transition-all'}>Channel</li>
                <li onClick={()=>{newAction({type:"cheange" , name:"group"})}} className={state.group? ' cursor-pointer text-blue-400 border-b-2 border-blue-400 transition-all' :' cursor-pointer transition-all'}>group</li>
                <li onClick={()=>{newAction({type:"cheange" , name:"bot"})}} className={state.bot? ' cursor-pointer text-blue-400 border-b-2 border-blue-400 transition-all' :' cursor-pointer transition-all'}>Bot</li>
            </ul>
        </div>
    );
};

export default ChatMenu;