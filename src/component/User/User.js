import React from 'react';
import Setting from './Setting/Setting';
import SettingMenu from './SettingMneu/SettingMenu';
import ChatMenu from './Chats/ChatMenu';
import Chats from './Chats/Chats';
const User = () => {
    return (
        <div className='h-full'>
            <SettingMenu/>
            <Setting/>
            <ChatMenu/>
            <Chats/>
        </div>
    );
};

export default User;