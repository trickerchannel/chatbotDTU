const messagesContainer = document.getElementById('chatbot-messages');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');
const suggestionArea = document.getElementById('suggestion-area');

const botAvatarSrc = 'https://bom.so/LjBOof';
const userAvatarSrc = 'https://bom.so/eYj7KH';

//  DANH SÁCH CÂU HỎI GỢI Ý 
const suggestionQuestions = [
    "Học phí",
    "Các ngành đào tạo",
    "Phương thức xét tuyển",
    "Địa chỉ các cơ sở",
    "Thông tin học bổng",
    "Liên hệ"
];

//CƠ SỞ DỮ LIỆU CỦA CHATBOT 
const qaData = [
    // TUYỂN SINH & NGÀNH HỌC
    {
        keywords: ["xét tuyển", "phương thức", "đăng ký", "nộp hồ sơ"],
        answer: "Năm nay, ĐH Duy Tân có các phương thức xét tuyển chính: \n1. Xét tuyển thẳng theo quy định của Bộ GD&ĐT.\n2. Xét kết quả thi Tốt nghiệp THPT.\n3. Xét kết quả học bạ THPT.\n4. Xét tuyển theo kết quả thi Đánh giá Năng lực của ĐH Quốc gia. \nBạn có thể xem chi tiết và nộp hồ sơ trực tuyến tại trang: https://tuyensinh.duytan.edu.vn"
    },
    {
        keywords: ["ngành học", "chuyên ngành", "các ngành", "đào tạo ngành gì"],
        answer: "ĐH Duy Tân là một trường đại học đa ngành, đào tạo các khối ngành chính như: \n- Công nghệ Thông tin\n- Y-Dược\n- Kinh tế - Quản trị\n- Ngoại ngữ - Xã hội Nhân văn\n- Du lịch\n- Xây dựng - Kiến trúc\nĐể xem danh sách đầy đủ các ngành, bạn vui lòng truy cập trang tuyển sinh nhé."
    },
    {
        keywords: ["học phí", "tiền học", "chi phí", "học phi"],
        answer: "Học phí tại ĐH Duy Tân được tính theo tín chỉ và sẽ khác nhau tùy thuộc vào ngành học và chương trình đào tạo (Đại trà, Chương trình Tiên tiến, Quốc tế...). Thông tin học phí chi tiết cho từng ngành được công bố rõ ràng hàng năm trên trang tuyển sinh của trường."
    },
    {
        keywords: ["điểm chuẩn", "diem chuan"],
        answer: "Điểm chuẩn các ngành của trường thay đổi theo từng năm và phụ thuộc vào phương thức xét tuyển. Để có thông tin chính xác nhất, bạn hãy truy cập trang https://tuyensinh.duytan.edu.vn và chọn năm tuyển sinh mà bạn quan tâm nhé."
    },
    {
        keywords: ["học bổng", "ưu đãi", "chính sách"],
        answer: "Hàng năm, ĐH Duy Tân có rất nhiều suất học bổng giá trị như: Học bổng Toàn phần/Bán phần, học bổng cho các ngành học đặc biệt, học bổng cho thí sinh có điểm cao... Bạn nên thường xuyên theo dõi trang tuyển sinh để không bỏ lỡ các chính sách học bổng mới nhất."
    },
    {
        keywords: ["chương trình quốc tế", "liên kết", "du học tại chỗ", "chương trình tiên tiến", "psu", "csu"],
        answer: "Trường có nhiều chương trình liên kết quốc tế và chương trình tiên tiến, giúp sinh viên tiếp cận giáo trình chuẩn quốc tế. Các chương trình nổi bật như hợp tác với ĐH Pennsylvania State (PSU), ĐH California State (CSU)... mang lại nhiều cơ hội học tập và nhận bằng cấp giá trị."
    },

    //CƠ SỞ VẬT CHẤT & LIÊN HỆ 
    {
        keywords: ["địa chỉ", "cơ sở", "trường ở đâu", "campus"],
        answer: "Đại học Duy Tân có nhiều cơ sở tại trung tâm thành phố Đà Nẵng. Các cơ sở chính bao gồm:\n- 254 Nguyễn Văn Linh, Q. Thanh Khê\n- 137 Nguyễn Văn Linh, Q. Thanh Khê\n- K7/25 Quang Trung, Q. Hải Châu\n- 03 Quang Trung, Q. Hải Châu\n- Cơ sở Hòa Khánh Nam, Q. Liên Chiểu."
    },
    {
        keywords: ["liên hệ", "số điện thoại", "email", "hotline", "tư vấn"],
        answer: "Để được tư vấn tuyển sinh, bạn có thể liên hệ:\n- Hotline: 1900.2252\n- Email: tuyensinh@duytan.edu.vn\n- Zalo: 0905.294.390 - 0905.294.391"
    },
    {
        keywords: ["thư viện", "mượn sách"],
        answer: "Thư viện của trường có 3 cơ sở lớn tại 254 Nguyễn Văn Linh, 03 Quang Trung và cơ sở Hòa Khánh Nam. Với hàng chục ngàn đầu sách và hệ thống thư viện điện tử, đây là nơi lý tưởng để sinh viên học tập và nghiên cứu."
    },

    // DÀNH CHO SINH VIÊN
    {
        keywords: ["mydtu", "cổng thông tin", "portal", "xem điểm", "lịch học"],
        answer: "MyDTU là cổng thông tin dành riêng cho sinh viên, giảng viên và nhân viên trường. Bạn có thể truy cập https://mydtu.duytan.edu.vn để xem điểm, lịch học, lịch thi, thông tin học phí và các thông báo quan trọng khác."
    },
    {
        keywords: ["câu lạc bộ", "clb", "hoạt động", "ngoại khóa", "đoàn hội"],
        answer: "Tại Duy Tân có hơn 50 Câu lạc bộ (CLB) học thuật, sở thích, thể thao và tình nguyện đang hoạt động rất sôi nổi. Bạn có thể tìm hiểu và đăng ký tham gia tại văn phòng Đoàn Thanh niên hoặc fanpage của các CLB."
    },
    {
        keywords: ["ký túc xá", "ktx", "chỗ ở"],
        answer: "Ký túc xá của trường nằm tại cơ sở Hòa Khánh Nam, Q. Liên Chiểu, rất gần khu vực giảng đường. KTX được xây dựng hiện đại, an ninh và đầy đủ tiện nghi, ưu tiên cho các bạn sinh viên ở xa."
    },
    {
        keywords: ["lịch nghỉ", "kế hoạch năm học", "lịch học vụ"],
        answer: "Kế hoạch đào tạo và lịch nghỉ Lễ, Tết của từng năm học được công bố trên trang web của Phòng Đào tạo và cổng thông tin MyDTU. Sinh viên cần theo dõi thường xuyên để cập nhật thông tin chính xác."
    },

    //HỖ TRỢ NGƯỜI DÙNG MỚI 
    {
        keywords: ["help", "trợ giúp", "giúp đỡ", "bắt đầu", "gợi ý"],
        answer: "Chào bạn! Để bắt đầu, bạn có thể hỏi tôi về các chủ đề phổ biến sau đây:\n\n- 'Học phí của trường'\n- 'Các ngành đào tạo'\n- 'Phương thức xét tuyển'\n- 'Địa chỉ các cơ sở'\n- 'Thông tin học bổng'\n- 'Cách xem lịch học'\n\nChỉ cần gõ từ khóa liên quan đến vấn đề bạn quan tâm, tôi sẽ cố gắng giải đáp!"
    },
    
    //CÁC CÂU HỎI CHUNG & GIAO TIẾP
    {
        keywords: ["giới thiệu", "lịch sử"],
        answer: "Đại học Duy Tân được thành lập vào ngày 11/11/1994, là trường Đại học Tư thục đầu tiên và lớn nhất miền Trung Việt Nam. Trường luôn nỗ lực không ngừng trong việc nâng cao chất lượng đào tạo và nghiên cứu khoa học."
    },
    {
        keywords: ["chào", "hi", "hello", "xin chào"],
        answer: "Chào bạn, tôi là chatbot hỗ trợ sinh viên của ĐH Duy Tân. Tôi có thể giúp gì cho bạn hôm nay?"
    },
    {
        keywords: ["cảm ơn", "thank you", "cám ơn"],
        answer: "Rất vui vì đã có thể giúp bạn! Nếu cần thêm thông tin, đừng ngần ngại hỏi nhé. 😉"
    },
    {
        keywords: ["tạm biệt", "bye"],
        answer: "Tạm biệt bạn! Chúc bạn một ngày tốt lành."
    }
];

// Hàm tìm câu trả lời dựa trên từ khóa
function findAnswer(question) {
    const lowerCaseQuestion = question.toLowerCase();
    const foundQA = qaData.find(qa => qa.keywords.some(keyword => lowerCaseQuestion.includes(keyword)));
    if (foundQA) {
        return foundQA.answer;
    }
    return "Xin lỗi, tôi chưa hiểu câu hỏi của bạn. Bạn có thể thử các câu hỏi gợi ý hoặc hỏi theo cách khác nhé.";
}

//HÀM DISPLAYMESSAGE ĐÃ ĐƯỢC CẬP NHẬT
function displayMessage(message, sender) {
    // 1. Tạo container chính cho tin nhắn
    const messageContainer = document.createElement('div');
    messageContainer.classList.add('message-container', `${sender}-message-container`);

    // 2. Tạo ảnh avatar
    const avatar = document.createElement('img');
    avatar.src = sender === 'user' ? userAvatarSrc : botAvatarSrc;
    avatar.classList.add('avatar');

    // 3. Tạo bong bóng chat
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', `${sender}-message`);
    messageElement.innerHTML = message.replace(/\n/g, '<br>');

    // 4. Gắn avatar và bong bóng chat vào container
    messageContainer.appendChild(avatar);
    messageContainer.appendChild(messageElement);

    // 5. Gắn container vào khung chat
    messagesContainer.appendChild(messageContainer);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}


function sendQuestion(question) {
    displayMessage(question, 'user');
    const botAnswer = findAnswer(question);
    setTimeout(() => {
        displayMessage(botAnswer, 'bot');
    }, 500);
    suggestionArea.style.display = 'none';
}


function handleSendMessage() {
    const userQuestion = userInput.value.trim();
    if (userQuestion === "") return;
    sendQuestion(userQuestion);
    userInput.value = "";
    userInput.focus();
}


sendBtn.addEventListener('click', handleSendMessage);
userInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        handleSendMessage();
    }
});


function createSuggestionButtons() {
    suggestionArea.innerHTML = '';
    suggestionQuestions.forEach(question => {
        const button = document.createElement('button');
        button.classList.add('suggestion-btn');
        button.innerText = question;
        button.onclick = () => {
            sendQuestion(question);
};
        suggestionArea.appendChild(button);
    });
}


window.addEventListener('load', () => {
    setTimeout(() => {
        displayMessage("Chào mừng bạn đến với Chatbot Duy Tân! Vui lòng chọn một chủ đề bên dưới hoặc nhập câu hỏi của bạn.", 'bot');
        createSuggestionButtons();
    }, 1000);
});