import './App.css';
import User from './component/User/User';
import WelcomeComponent from './component/WelcomeComponent/WelcomeComponent';
import { Routes,Route,Navigate,Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<WelcomeComponent/>}/>
        <Route path='/user' element={<User/>}/>
        <Route path='*' element={<Navigate to="/" />}/>
      </Routes>
    </div>
  );
}

export default App;
