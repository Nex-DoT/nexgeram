import React from 'react';
import Setting from './Setting/Setting';
import SettingMenu from './SettingMneu/SettingMenu';
import Chats from './Chats/Chats';
const User = () => {
    return (
        <div>
            <Chats/>
            <Setting/>
            <SettingMenu/>
        </div>
    );
};

export default User;