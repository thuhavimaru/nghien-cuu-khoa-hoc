// src/page/Dashboard/Dashboard.jsx

import React from "react";
import "./dashboard.css";  // Giữ dòng này

const Dashboard = () => {
  const stats = {
    totalDiplomas: 1247,
    totalAppendices: 89,
    totalDuplicates: 312,
    todayTransactions: 7,
  };

  const diplomaByYear = [
    { year: "2021", count: 198 },
    { year: "2022", count: 245 },
    { year: "2023", count: 312 },
    { year: "2024", count: 428 },
    { year: "2025", count: 264 },
  ];

  const recentTransactions = [
    { type: "Cấp văn bằng", serial: "VB2025-264", holder: "Nguyễn Văn An", time: "10:45 04/01/2026" },
    { type: "Cấp bản sao", serial: "VB2024-156", holder: "Trần Thị Bình", time: "09:30 04/01/2026" },
    { type: "Tạo phụ lục", serial: "PL2025-012", holder: "Lê Văn Cường", time: "08:15 04/01/2026" },
  ];

  const maxCount = Math.max(...diplomaByYear.map(d => d.count));
  const getBarHeight = (count) => `${(count / maxCount) * 100}%`;

  return (
    <div className="dashboard-page">
      <div className="dashboard-container">
        {/* Header */}
        <h1 className="dashboard-title">Dashboard Quản trị</h1>
        <p className="dashboard-subtitle">
          Trường Đại học Hàng Hải Việt Nam - Hệ thống Quản lý Văn bằng Blockchain
        </p>

        {/* Stats Cards */}
        <div className="stats-grid">
          <div className="stat-card">
            <h3>Tổng Văn bằng</h3>
            <p className="stat-number text-indigo">{stats.totalDiplomas.toLocaleString()}</p>
          </div>
          <div className="stat-card">
            <h3>Phụ lục</h3>
            <p className="stat-number text-teal">{stats.totalAppendices}</p>
          </div>
          <div className="stat-card">
            <h3>Bản sao</h3>
            <p className="stat-number text-orange">{stats.totalDuplicates}</p>
          </div>
          <div className="stat-card today">
            <h3>Hôm nay</h3>
            <p className="stat-number">{stats.todayTransactions}</p>
          </div>
        </div>

        {/* Biểu đồ */}
        <div className="chart-card">
          <h2>Số Văn bằng Cấp Theo Năm</h2>
          <div className="bar-chart">
            {diplomaByYear.map((item) => (
              <div key={item.year} className="bar-item">
                <div className="bar-wrapper">
                  <div
                    className="bar"
                    style={{ height: getBarHeight(item.count) }}
                  >
                    <span className="bar-label">{item.count}</span>
                  </div>
                </div>
                <span className="bar-year">{item.year}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Giao dịch gần đây */}
        <div className="table-container">
          <h2 className="table-title">Giao dịch Gần đây</h2>
          <table className="transactions-table">
            <thead>
              <tr>
                <th>Loại</th>
                <th>Số seri</th>
                <th>Sinh viên</th>
                <th>Thời gian</th>
              </tr>
            </thead>
            <tbody>
              {recentTransactions.map((tx, i) => (
                <tr key={i}>
                  <td>
                    <span className={`type-badge ${tx.type.includes("Cấp văn bằng") ? "cấp" : "tạo"}`}>
                      {tx.type}
                    </span>
                  </td>
                  <td className="tx-hash">{tx.serial}</td>
                  <td>{tx.holder}</td>
                  <td>{tx.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="dashboard-footer">
          Dữ liệu cập nhật đến ngày 04/01/2026
        </p>
      </div>
    </div>
  );
};

export default Dashboard;