import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './components/layout/Layout';

import IssueDiploma from './page/IssueDiploma/IssueDiploma';
import Appendix from './page/Appendix/Appendix';
import Duplicate from './page/Duplicate/Duplicate';
import Dashboard from './page/Dashboard/Dashboard';  // Đảm bảo import
import RevokeDiploma from './page/RevokeDiploma/RevokeDiploma'; // ✅ THÊM


const NotFound = () => (
  <div className="p-10 text-center min-h-screen flex flex-col items-center justify-center bg-gray-50">
    <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
    <p className="text-2xl text-gray-700 mb-8">Trang không tồn tại</p>
    <a href="/" className="bg-teal-600 text-white px-8 py-4 rounded-lg text-lg hover:bg-teal-700 transition">
      Quay về Trang chủ
    </a>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        {/* Các route cụ thể đặt TRƯỚC */}
        <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
        <Route path="/issue-diploma" element={<Layout><IssueDiploma /></Layout>} />
        <Route path="/appendix" element={<Layout><Appendix /></Layout>} />
        <Route path="/duplicate" element={<Layout><Duplicate /></Layout>} />
        <Route path="/revoke" element={<Layout><RevokeDiploma /></Layout>} />


        {/* Các trang placeholder */}
        <Route path="/verify" element={<Layout><NotFound /></Layout>} />
        <Route path="/revoke" element={<Layout><NotFound /></Layout>} />
        <Route path="/explorer" element={<Layout><NotFound /></Layout>} />
        <Route path="/settings" element={<Layout><NotFound /></Layout>} />

        {/* Trang chủ và route mặc định - đặt SAU các route cụ thể */}
        <Route path="/" element={<Layout><Dashboard /></Layout>} />

        {/* 404 catch-all - đặt CUỐI CÙNG */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;