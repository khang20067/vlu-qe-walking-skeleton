const login = require("./login");

describe("Login Function", () => {

    test("Đăng nhập thành công với tài khoản đúng", () => {
        expect(login("admin", "123")).toBe(true);
    });

    test("Đăng nhập thất bại với tài khoản sai", () => {
        expect(login("user", "123")).toBe(false);
    });

    test("Đăng nhập thất bại với password sai", () => {
        expect(login("admin", "456")).toBe(false);
    });

});
