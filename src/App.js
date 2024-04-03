import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import WritePage from './pages/WritePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<MainPage />}></Route>
        <Route path='/register' element={<RegisterPage />}></Route>
        <Route path='/login' element={<LoginPage />}></Route>
        <Route path='/write' element={<WritePage />}></Route>

      </Routes>
      
    </div>
  );
}

export default App;
