import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegistrationPage from './pages/registration/RegistrationPage';
import SelectCategory from './pages/selectCategory/SelectCategory';
import Homepage from './pages/homepage/Homepage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/register" element=<RegistrationPage /> />
          <Route path="/select-category" element=<SelectCategory /> />
          <Route path="/home" element=<Homepage /> />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
