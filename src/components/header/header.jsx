import React from 'react';
import { Search, Bell } from 'lucide-react';
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-gradient-overlay" />

      {/* PHẦN NỘI DUNG – DỊCH QUA PHẢI */}
      <div className="header-inner">
        <div className="header-left">
          <img
            src="/images/logo.png"
            alt="VMU Logo"
            className="header-logo"
          />

          <div className="header-search-container">
            <Search className="header-search-icon" />
            <input
              type="text"
              placeholder="Tìm kiếm văn bằng, mã sinh viên, hash blockchain..."
              className="header-search-input"
            />
          </div>
        </div>

        <div className="header-right">
          <button className="header-notification-btn">
            <Bell className="header-bell-icon" />
            <span className="header-notification-badge">5</span>
          </button>

          <div className="header-user">
            <div className="header-avatar">
              <img
                src="https://ui-avatars.com/api/?name=Admin+VMU&background=14b8a6&color=fff"
                alt="Admin"
              />
            </div>
            <div className="header-user-info">
              <p className="header-username">Admin VMU</p>
              <p className="header-role">Quản trị viên</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
