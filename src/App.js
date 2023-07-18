import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegistrationPage from './pages/registration/RegistrationPage';
import SelectCategory from './pages/selectCategory/SelectCategory';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/register" element=<RegistrationPage /> />
          <Route path="/select-category" element=<SelectCategory /> />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
