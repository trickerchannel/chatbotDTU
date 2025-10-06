# Chatbot Hỗ trợ Sinh viên Đại học Duy Tân

Đây là một dự án chatbot đơn giản được xây dựng bằng HTML, CSS và JavaScript, nhằm mục đích tự động trả lời các câu hỏi thường gặp của sinh viên Đại học Duy Tân. Dữ liệu câu hỏi và trả lời được định sẵn và có thể dễ dàng mở rộng.

## ✨ Tính năng

-   **Giao diện thân thiện:** Thiết kế giao diện trò chuyện hiện đại, chuyên nghiệp và tối ưu hóa cho cả máy tính và thiết bị di động.
-   **Phản hồi tức thì:** Chatbot trả lời ngay lập tức dựa trên bộ dữ liệu được cung cấp.
-   **Dễ dàng tùy chỉnh:** Cơ sở dữ liệu câu hỏi và câu trả lời nằm gọn trong một tệp JavaScript, giúp người quản trị dễ dàng thêm, xóa hoặc sửa đổi.
-   **Mã nguồn gọn nhẹ:** Không phụ thuộc vào bất kỳ thư viện hay framework phức tạp nào, chỉ sử dụng HTML, CSS và JS thuần.

## 🚀 Công nghệ sử dụng

-   **HTML5:** Xây dựng cấu trúc cơ bản của trang web.
-   **CSS3:** Tạo kiểu dáng, hiệu ứng và đảm bảo giao diện responsive.
-   **JavaScript (ES6):** Xử lý toàn bộ logic hoạt động của chatbot.

## 🔧 Cách sử dụng và Tùy chỉnh

1.  **Sử dụng:**
    -   Tải toàn bộ mã nguồn về máy tính.
    -   Mở tệp `index.html` bằng bất kỳ trình duyệt web hiện đại nào (Chrome, Firefox, Edge...).

2.  **Mở rộng Cơ sở dữ liệu Câu hỏi:**
    -   Mở tệp `script.js`.
    -   Tìm đến biến `const qaData = [...]`.
    -   Để thêm một câu hỏi mới, hãy sao chép một khối `{...}` có sẵn và chỉnh sửa nội dung bên trong:
        ```javascript
        {
            keywords: ["từ khóa 1", "từ khóa 2"], // Các từ khóa mà người dùng có thể hỏi
            answer: "Câu trả lời tương ứng của bạn." // Câu trả lời của bot
        },
        ```
    -   Lưu tệp `script.js` và tải lại trang web để xem thay đổi.

## 📜 Giấy phép và Điều khoản sử dụng

Dự án này được chia sẻ với mục đích học hỏi và phát triển phi thương mại.

-   ✅ **ĐƯỢC PHÉP:**
    -   Sao chép, sửa đổi và sử dụng mã nguồn cho các dự án cá nhân, phi lợi nhuận.
    -   Mở rộng cơ sở dữ liệu câu hỏi để phù hợp với nhu cầu sử dụng của bạn.

-   ❌ **KHÔNG ĐƯỢC PHÉP:**
    -   **Nghiêm cấm bán lại, kinh doanh hoặc sử dụng mã nguồn này dưới bất kỳ hình thức thương mại nào.**

-   **GHI NGUỒN (Attribution):**
    -   Khi bạn sử dụng hoặc chia sẻ lại dự án này, vui lòng giữ lại thông tin ghi nguồn ở phần chân trang (footer) của chatbot hoặc ghi rõ nguồn trong tài liệu của bạn.

## ✍️ Nguồn

-   **Phát triển bởi:** [Hoan IT](https://hoanit.id.vn/)
