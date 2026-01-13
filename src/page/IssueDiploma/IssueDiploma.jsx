import React, { useState } from "react";
import "./IssueDiploma.css";
const IssueDiploma = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    serialNumber: "",
    holderName: "",
    citizenId: "",
    birthDate: "",
    birthPlace: "",
    gender: "",
    ethnicity: "Kinh", // mặc định phổ biến ở VN
    nationality: "Việt Nam", // mặc định
    major: "",
    graduationYear: "",
    graduationRank: "",
    recipientSignatureName: "",
    notes: "",
    documentHash: "",
    issueDate: new Date().toISOString().split("T")[0], // hôm nay
    areaValid: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Giả lập ghi blockchain
    setTimeout(() => {
      const fakeHash = "0x" + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
      alert(`Cấp văn bằng thành công!\n\nSố seri: ${formData.serialNumber}\nHọ tên: ${formData.holderName}\nTransaction Hash: ${fakeHash}`);
      setIsSubmitting(false);

      // Reset form sau khi cấp thành công (tùy chọn)
      // setFormData({ ...formData, serialNumber: "", holderName: "", ... });
    }, 2000);
  };

  return (
    <div className="issue-page">
      <div className="issue-container">
        <h1 className="issue-title">Cấp Văn bằng Chính thức</h1>
        <p className="issue-subtitle">Trường Đại học Hàng Hải Việt Nam - Hệ thống Blockchain</p>

        <div className="issue-card">
          <form onSubmit={handleSubmit} className="issue-form">
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
                <label>Họ và tên sinh viên *</label>
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
                <label>Ngày sinh *</label>
                <input
                  type="date"
                  name="birthDate"
                  value={formData.birthDate}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Hàng 3 */}
              <div className="form-group">
                <label>Nơi sinh</label>
                <input
                  name="birthPlace"
                  value={formData.birthPlace}
                  onChange={handleChange}
                  placeholder="VD: Hà Nội"
                />
              </div>

              <div className="form-group">
                <label>Giới tính *</label>
                <select name="gender" value={formData.gender} onChange={handleChange} required>
                  <option value="">Chọn giới tính</option>
                  <option value="Nam">Nam</option>
                  <option value="Nữ">Nữ</option>
                  <option value="Khác">Khác</option>
                </select>
              </div>

              {/* Hàng 4 */}
              <div className="form-group">
                <label>Dân tộc</label>
                <input
                  name="ethnicity"
                  value={formData.ethnicity}
                  onChange={handleChange}
                  placeholder="VD: Kinh"
                />
              </div>

              <div className="form-group">
                <label>Quốc tịch</label>
                <input
                  name="nationality"
                  value={formData.nationality}
                  onChange={handleChange}
                  placeholder="VD: Việt Nam"
                />
              </div>

              {/* Hàng 5 */}
              <div className="form-group">
                <label>Ngành học *</label>
                <input
                  name="major"
                  value={formData.major}
                  onChange={handleChange}
                  required
                  placeholder="VD: Công nghệ thông tin"
                />
              </div>

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

              {/* Hàng 6 */}
              <div className="form-group">
                <label>Xếp loại tốt nghiệp</label>
                <select name="graduationRank" value={formData.graduationRank} onChange={handleChange}>
                  <option value="">Chọn xếp loại</option>
                  <option value="Xuất sắc">Xuất sắc</option>
                  <option value="Giỏi">Giỏi</option>
                  <option value="Khá">Khá</option>
                  <option value="Trung bình">Trung bình</option>
                </select>
              </div>

              <div className="form-group">
                <label>Ngày cấp</label>
                <input
                  type="date"
                  name="issueDate"
                  value={formData.issueDate}
                  onChange={handleChange}
                />
              </div>

              {/* Hàng 7 */}
              <div className="form-group full-width">
                <label>Tên người nhận (ký nhận)</label>
                <input
                  name="recipientSignatureName"
                  value={formData.recipientSignatureName}
                  onChange={handleChange}
                  placeholder="Họ tên người nhận bằng"
                />
              </div>

              {/* Hàng 8 */}
              <div className="form-group full-width">
                <label>Phạm vi hiệu lực</label>
                <input
                  name="areaValid"
                  value={formData.areaValid}
                  onChange={handleChange}
                  placeholder="VD: Toàn quốc"
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
                  placeholder="Thông tin bổ sung (nếu có)"
                />
              </div>
            </div>

            <div className="form-actions">
              <button type="submit" disabled={isSubmitting} className="submit-btn">
                {isSubmitting ? "Đang ghi lên Blockchain..." : "Cấp Văn bằng & Ghi Blockchain"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default IssueDiploma;