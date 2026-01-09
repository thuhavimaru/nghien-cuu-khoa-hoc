import React from 'react';
import Sidebar from '../sidebar/sidebar';
import Header from '../header/header';
import './layout.css'; // nếu cần style thêm cho layout

const Layout = ({ children }) => {
  return (
    <div className="layout">
      {/* Sidebar cố định bên trái */}
      <Sidebar />

      {/* Phần chính: Header + Nội dung trang */}
      <div className="main-content">
        <Header />
        <div className="page-content">
          {children} {/* Đây là nơi render Dashboard, StudentInfo, v.v. */}
        </div>
      </div>
    </div>
  );
};

export default Layout;