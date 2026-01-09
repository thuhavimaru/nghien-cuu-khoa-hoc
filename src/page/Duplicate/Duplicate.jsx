import React, { useState } from "react";
import "./Duplicate.css"; // Có thể dùng chung với IssueDiploma.css

const Duplicate = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    receiverName: "",
    count: 1,
    notes: "",
    issueAt: new Date().toISOString().split("T")[0], // hôm nay
    serialNumber: "",        // số seri văn bằng gốc
    holderName: "",
    citizenId: "",
    birthDate: "",
    major: "",
    graduationYear: "",
    diplomaId: "",
  });

  const handleChange = (e) => {
    const value = e.target.name === "count" ? parseInt(e.target.value) || 1 : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const fakeHash = "0x" + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
      alert(`Cấp bản sao văn bằng thành công!\n\nSố lượng: ${formData.count} bản\nNgười nhận: ${formData.receiverName}\nVăn bằng gốc: ${formData.serialNumber}\nTransaction Hash: ${fakeHash}`);
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <div className="issue-page">
      <div className="issue-container">
        <h1 className="issue-title">Tạo Bản Sao Văn bằng</h1>
        <p className="issue-subtitle">Trường Đại học Hàng Hải Việt Nam - Hệ thống Blockchain</p>

        <div className="issue-card">
          <form onSubmit={handleSubmit} className="issue-form">
            <div className="form-grid">
              {/* Hàng 1 */}
              <div className="form-group">
                <label>Số seri văn bằng gốc *</label>
                <input
                  name="serialNumber"
                  value={formData.serialNumber}
                  onChange={handleChange}
                  required
                  placeholder="VD: VB2025-001"
                />
              </div>

              <div className="form-group">
                <label>ID văn bằng gốc</label>
                <input
                  name="diplomaId"
                  value={formData.diplomaId}
                  onChange={handleChange}
                  placeholder="Nếu có"
                />
              </div>

              {/* Hàng 2 */}
              <div className="form-group">
                <label>Họ và tên sinh viên *</label>
                <input
                  name="holderName"
                  value={formData.holderName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Căn cước công dân *</label>
                <input
                  name="citizenId"
                  value={formData.citizenId}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Hàng 3 */}
              <div className="form-group">
                <label>Ngày sinh *</label>
                <input
                  type="date"
                  name="birthDate"
                  value={formData.birthDate}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Ngành học *</label>
                <input
                  name="major"
                  value={formData.major}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Hàng 4 */}
              <div className="form-group">
                <label>Năm tốt nghiệp *</label>
                <input
                  name="graduationYear"
                  value={formData.graduationYear}
                  onChange={handleChange}
                  required
                  placeholder="VD: 2025"
                />
              </div>

              <div className="form-group">
                <label>Số lượng bản sao *</label>
                <input
                  type="number"
                  name="count"
                  value={formData.count}
                  onChange={handleChange}
                  min="1"
                  max="10"
                  required
                />
              </div>

              {/* Hàng 5 */}
              <div className="form-group">
                <label>Người nhận bản sao *</label>
                <input
                  name="receiverName"
                  value={formData.receiverName}
                  onChange={handleChange}
                  required
                  placeholder="Họ tên người được cấp bản sao"
                />
              </div>

              <div className="form-group">
                <label>Ngày cấp bản sao</label>
                <input
                  type="date"
                  name="issueAt"
                  value={formData.issueAt}
                  onChange={handleChange}
                />
              </div>

              {/* Ghi chú full width */}
              <div className="form-group full-width">
                <label>Ghi chú</label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Lý do cấp bản sao, mục đích sử dụng..."
                />
              </div>
            </div>

            <div className="form-actions">
              <button type="submit" disabled={isSubmitting} className="submit-btn">
                {isSubmitting ? "Đang ghi lên Blockchain..." : "Cấp Bản Sao & Ghi Blockchain"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Duplicate;