import React,{useState} from 'react';

const ChatMenu = () => {
    return (
        <div>
            <ul className='flex justify-around w-full text-gray-500 font-bold text-sm h-10 items-center'>
                <li>All</li>
                <li>User</li>
                <li>Channel</li>
                <li>group</li>
                <li>Bot</li>
            </ul>
        </div>
    );
};

export default ChatMenu;