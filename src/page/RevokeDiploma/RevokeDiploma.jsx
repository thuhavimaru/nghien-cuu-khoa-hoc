import React, { useState } from "react";
import "./RevokeDiploma.css";

const RevokeDiploma = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    serialNumber: "",
    holderName: "",
    citizenId: "",
    revokeDate: new Date().toISOString().split("T")[0],
    revokeReason: "",
    decisionNumber: "",
    revokedBy: "",
    notes: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Giả lập ghi giao dịch thu hồi lên Blockchain
    setTimeout(() => {
      const fakeTxHash =
        "0x" +
        Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15);

      alert(
        `Thu hồi văn bằng thành công!\n\n` +
          `Số seri: ${formData.serialNumber}\n` +
          `Họ tên: ${formData.holderName}\n` +
          `Transaction Hash: ${fakeTxHash}`
      );

      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <div className="revoke-page">
      <div className="revoke-container">
        <h1 className="revoke-title">Thu hồi Văn bằng</h1>
        <p className="revoke-subtitle">
          Hệ thống Quản lý Văn bằng bằng Blockchain
        </p>

        <div className="revoke-card">
          <form className="revoke-form" onSubmit={handleSubmit}>
            <div className="form-grid">
              {/* Hàng 1 */}
              <div className="form-group">
                <label>Số seri văn bằng *</label>
                <input
                  name="serialNumber"
                  value={formData.serialNumber}
                  onChange={handleChange}
                  required
                  placeholder="VD: VB2025-001"
                />
              </div>

              <div className="form-group">
                <label>Họ và tên người được cấp *</label>
                <input
                  name="holderName"
                  value={formData.holderName}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Hàng 2 */}
              <div className="form-group">
                <label>Căn cước công dân *</label>
                <input
                  name="citizenId"
                  value={formData.citizenId}
                  onChange={handleChange}
                  required
                  placeholder="12 số"
                />
              </div>

              <div className="form-group">
                <label>Ngày thu hồi *</label>
                <input
                  type="date"
                  name="revokeDate"
                  value={formData.revokeDate}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Hàng 3 */}
              <div className="form-group full-width">
                <label>Lý do thu hồi *</label>
                <textarea
                  name="revokeReason"
                  value={formData.revokeReason}
                  onChange={handleChange}
                  required
                  rows="4"
                  placeholder="VD: Phát hiện hồ sơ không hợp lệ"
                />
              </div>

              {/* Hàng 4 */}
              <div className="form-group">
                <label>Số quyết định thu hồi *</label>
                <input
                  name="decisionNumber"
                  value={formData.decisionNumber}
                  onChange={handleChange}
                  required
                  placeholder="VD: QĐ-THVB-2025-01"
                />
              </div>

              <div className="form-group">
                <label>Người thực hiện thu hồi *</label>
                <input
                  name="revokedBy"
                  value={formData.revokedBy}
                  onChange={handleChange}
                  required
                  placeholder="VD: Phòng Đào tạo"
                />
              </div>

              {/* Ghi chú */}
              <div className="form-group full-width">
                <label>Ghi chú</label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows="3"
                  placeholder="Thông tin bổ sung (nếu có)"
                />
              </div>
            </div>

            <div className="form-actions">
              <button
                type="submit"
                className="revoke-btn"
                disabled={isSubmitting}
              >
                {isSubmitting
                  ? "Đang ghi giao dịch thu hồi..."
                  : "Thu hồi & Ghi Blockchain"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RevokeDiploma;
