import React, { useState } from "react";
import "./Appendix.css";

const Appendix = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    holderName: "",
    birthDate: "",
    oldSerial: "",
    newSerial: "",
    newId: "",
    content: "",
    receiverSignatureName: "",
    notes: "",
    issueDate: new Date().toISOString().split("T")[0],
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const fakeHash =
        "0x" +
        Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15);

      alert(
        `Tạo Phụ lục Văn bằng thành công!\n\n` +
          `Họ tên: ${formData.holderName}\n` +
          `Văn bằng gốc: ${formData.oldSerial}\n` +
          `Số phụ lục mới: ${formData.newSerial}\n` +
          `Transaction Hash: ${fakeHash}`
      );

      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <div className="appendix-page">
      <div className="issue-container">
        <h1 className="issue-title">Tạo Phụ lục Văn bằng</h1>
        <p className="issue-subtitle">
          Trường Đại học Hàng Hải Việt Nam - Hệ thống Blockchain
        </p>

        <div className="issue-card">
          <form onSubmit={handleSubmit} className="issue-form">
            <div className="form-grid">
              {/* Hàng 1 */}
              <div className="form-group">
                <label>Họ và tên *</label>
                <input
                  name="holderName"
                  value={formData.holderName}
                  onChange={handleChange}
                  required
                />
              </div>

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

              {/* Hàng 2 */}
              <div className="form-group">
                <label>Số seri văn bằng gốc *</label>
                <input
                  name="oldSerial"
                  value={formData.oldSerial}
                  onChange={handleChange}
                  required
                  placeholder="VD: VB2025-001"
                />
              </div>

              <div className="form-group">
                <label>Số seri phụ lục mới *</label>
                <input
                  name="newSerial"
                  value={formData.newSerial}
                  onChange={handleChange}
                  required
                  placeholder="VD: PL2025-001"
                />
              </div>

              {/* Hàng 3 */}
              <div className="form-group">
                <label>ID bổ sung</label>
                <input
                  name="newId"
                  value={formData.newId}
                  onChange={handleChange}
                  placeholder="Nếu có"
                />
              </div>

              <div className="form-group">
                <label>Ngày cấp phụ lục</label>
                <input
                  type="date"
                  name="issueDate"
                  value={formData.issueDate}
                  onChange={handleChange}
                />
              </div>

              {/* Hàng 4 */}
              <div className="form-group full-width">
                <label>Nội dung bổ sung / sửa đổi *</label>
                <textarea
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                  rows="5"
                  required
                />
              </div>

              {/* Hàng 5 */}
              <div className="form-group">
                <label>Tên người nhận (ký nhận)</label>
                <input
                  name="receiverSignatureName"
                  value={formData.receiverSignatureName}
                  onChange={handleChange}
                />
              </div>

              {/* Ghi chú */}
              <div className="form-group full-width">
                <label>Ghi chú</label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows="4"
                />
              </div>
            </div>

            <div className="form-actions">
              <button
                type="submit"
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting
                  ? "Đang ghi lên Blockchain..."
                  : "Tạo Phụ lục & Ghi Blockchain"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Appendix;
