import './App.css';
import ChatMenu from './component/ChatMenu/ChatMenu';
import SettingMenu from './component/SettingMneu/SettingMenu';
function App() {
  return (
    <div className="App">
      <SettingMenu/>
      <ChatMenu/>
    </div>
  );
}

export default App;
