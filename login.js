function login(username, password) {
    if (username === "admin" && password === "123") {
        return true;
    }
    return false;
}

// Xử lý form đăng nhập khi chạy trên trình duyệt
if (typeof document !== "undefined") {
    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault();

            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;
            const message = document.getElementById("message");

            if (login(username, password)) {
                message.textContent = "Đăng nhập thành công!";
            } else {
                message.textContent = "Sai username hoặc password!";
            }
        });
    }
}

module.exports = login;
