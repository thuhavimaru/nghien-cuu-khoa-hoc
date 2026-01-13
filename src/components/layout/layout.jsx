import React from 'react';
import Sidebar from '../sidebar/sidebar';
import Header from '../header/header';
import './layout.css';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      {/* Sidebar cố định bên trái */}
      <Sidebar />

      {/* Header cố định phía trên, KHÔNG nằm trong main-content */}
      <Header />

      {/* Nội dung chính */}
      <div className="main-content">
        <div className="page-content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
