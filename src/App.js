import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import RegistrationPage from './pages/registration/RegistrationPage';
import SelectCategory from './pages/selectCategory/SelectCategory';
import Homepage from './pages/homepage/Homepage';
import BrowsePage from './pages/browsePage/BrowsePage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Use the layout component for the root URL */}
          <Route path="/" element={<Layout />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/select-category" element={<SelectCategory />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/browse" element={<BrowsePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
