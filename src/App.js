import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegistrationPage from './pages/registration/RegistrationPage';
import SelectCategory from './pages/selectCategory/SelectCategory';
import Homepage from './pages/homepage/Homepage';
import BrowsePage from './pages/browsePage/BrowsePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/register" element=<RegistrationPage /> />
          <Route path="/select-category" element=<SelectCategory /> />
          <Route path="/home" element=<Homepage /> />
          <Route path="/browse" element=<BrowsePage /> />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
