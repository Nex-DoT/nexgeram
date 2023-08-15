import './App.css';
import ChatMenu from './component/Chats/ChatMenu';
import SettingMenu from './component/SettingMneu/SettingMenu';
import Chats from './component/Chats/Chats';
function App() {
  return (
    <div className="App">
      <SettingMenu/>
      <ChatMenu/>
      <Chats/>
    </div>
  );
}

export default App;
