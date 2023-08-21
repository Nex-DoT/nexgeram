import React,{useState,useContext,useEffect} from 'react';
// active bar context Reducer 
import { activebar } from '../../../Database/ActiveListfiltered';
const ChatMenu = () => {
    // context 
    const [state , newAction] =  useContext(activebar);
    // mounting for set state to active the user Bar
    useEffect(() =>{
        newAction({type:"cheange" , name:"user"})
    },[]);
    //jsx
    return (
        <div>
            <ul className='flex justify-around w-full text-gray-500 font-bold text-sm h-10 items-center'>
                <li onClick={()=>{newAction({type:"cheange" , name:"user"})}} className={state.user? ' cursor-pointer text-blue-400 border-b-2 border-blue-400 transition-all' :' cursor-pointer transition-all'}>User</li>
                <li onClick={()=>{newAction({type:"cheange" , name:"channel"})}} className={state.channel? ' cursor-pointer text-blue-400 border-b-2 border-blue-400 transition-all' :' cursor-pointer transition-all'}>Channel</li>
                <li onClick={()=>{newAction({type:"cheange" , name:"group"})}} className={state.group? ' cursor-pointer text-blue-400 border-b-2 border-blue-400 transition-all' :' cursor-pointer transition-all'}>group</li>
                <li onClick={()=>{newAction({type:"cheange" , name:"bot"})}} className={state.bot? ' cursor-pointer text-blue-400 border-b-2 border-blue-400 transition-all' :' cursor-pointer transition-all'}>Bot</li>
            </ul>
        </div>
    );
};

export default ChatMenu;