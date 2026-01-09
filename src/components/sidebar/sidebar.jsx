import React from 'react';
import { NavLink } from 'react-router-dom';
import "./sidebar.css";
import {
  Menu,
  FileText,
  Copy,
  CheckCircle,
  Shield,
  Globe,
  Settings,
  LogOut,
} from 'lucide-react';

const menuItems = [
  { to: '/dashboard', icon: Menu, label: 'Dashboard' },
  { to: '/issue-diploma', icon: FileText, label: 'Cấp Văn bằng Chính thức' },
  { to: '/appendix', icon: Copy, label: 'Tạo Phụ lục' },
  { to: '/duplicate', icon: Copy, label: 'Tạo Bản Sao' },
  { to: '/verify', icon: CheckCircle, label: 'Xác thực Văn bằng' },
  { to: '/revoke', icon: Shield, label: 'Thu hồi Văn bằng' },
  { to: '/explorer', icon: Globe, label: 'Blockchain Explorer' },
  { to: '/settings', icon: Settings, label: 'Cài đặt' },
];

const Sidebar = () => {
  return (
    <aside className="sidebar">
      {/* Header chỉ có text, không logo */}
      <div className="sidebar-header">
        <div className="sidebar-title-wrapper">
          <h1 className="sidebar-title">VMU Blockchain</h1>
          <p className="sidebar-subtitle">Quản lý Văn bằng</p>
        </div>
      </div>

      {/* Menu */}
      <nav className="sidebar-nav">
        <ul className="sidebar-menu">
          {menuItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `sidebar-link ${isActive ? 'active' : ''}`
                }
              >
                <item.icon className="sidebar-icon" />
                <span className="sidebar-label">{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Logout */}
      <div className="sidebar-footer">
        <button className="sidebar-logout">
          <LogOut className="sidebar-icon" />
          <span className="sidebar-label">Đăng xuất</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;