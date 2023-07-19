// Layout.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const Layout = () => {
  // Redirect the root URL to /register
  return <Navigate to="/register" replace />;
};

export default Layout;
