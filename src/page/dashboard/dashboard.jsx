import React from "react";
import "./dashboard.css";

const Dashboard = () => {
  const stats = [
    { label: "Văn bằng", value: 1247, color: "stat-indigo" },
    { label: "Phụ lục", value: 89, color: "stat-teal" },
    { label: "Bản sao", value: 312, color: "stat-orange" },
    { label: "Hôm nay", value: 7, color: "stat-purple" },
  ];

  const recentTransactions = [
    { type: "Cấp văn bằng", serial: "VB2025-264", holder: "Nguyễn Văn An", time: "10:45 04/01/2026" },
    { type: "Bản sao", serial: "VB2024-156", holder: "Trần Thị Bình", time: "09:30 04/01/2026" },
    { type: "Phụ lục", serial: "PL2025-012", holder: "Lê Văn Cường", time: "08:15 04/01/2026" },
  ];

  return (
    <div className="dashboard">
      {/* HERO */}
      <div className="dashboard-hero">
        <div>
          <span className="hero-tag">Blockchain</span>
          <h1>Hệ thống Quản lý Văn bằng</h1>
          <p>Trường Đại học Hàng Hải Việt Nam</p>
        </div>
      </div>

      {/* QUICK STATS */}
      <div className="dashboard-stats">
        {stats.map((s) => (
          <div key={s.label} className={`stat-card ${s.color}`}>
            <p className="stat-label">{s.label}</p>
            <h2>{s.value.toLocaleString()}</h2>
          </div>
        ))}
      </div>

      {/* RECENT TRANSACTIONS */}
      <div className="dashboard-card">
        <h3>Giao dịch gần đây</h3>

        <table className="dashboard-table">
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
                  <span className={`badge ${tx.type.replace(/\s+/g, "-")}`}>
                    {tx.type}
                  </span>
                </td>
                <td className="mono">{tx.serial}</td>
                <td>{tx.holder}</td>
                <td>{tx.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
