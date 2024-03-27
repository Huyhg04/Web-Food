export default class User {
    constructor(id = undefined, name, address, phone, email, username, password, role) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.phone = phone;
        this.email = email;
        this.username = username;
        this.password = password;
        this.role = role;
    }
    getId() {
        return this.id;
    }
    setId(id) {
        this.id = id;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name.length === 0 ? "No name" : name;
    }
    getAddress() {
        return this.address;
    }
    setAddress(address) {
        this.address = address;
    }
    getPhone() {
        return this.phone;
    }
    setPhone(phone) {
        this.phone = phone;
    }
    getEmail() {
        return this.email;
    }
    setEmail(email) {
        this.email = email;
    }
    getUsername() {
        return this.username;
    }
    setUsername(username) {
        this.username = username;
    }
    getPassword() {
        return this.password;
    }
    setPassword(password) {
        this.password = password;
    }
    getRole() {
        return this.role;
    }
    setRole(role) {
        this.role = role;
    }
    // Hàm xử lí login
    async login(email, password) {
        try {
            const response = await fetch('http://localhost:3000/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            });
            if (response.ok) {
                const data = await response.json(); // Lấy dữ liệu JSON từ phản hồi
                const userName = data.user.name; // Lấy thông tin người dùng từ dữ liệu JSON
                console.log('User name:', userName);
                // Lưu thông tin người dùng vào Session Storage
                sessionStorage.setItem('user', JSON.stringify({ name: userName }));
                // In tên người dùng vào phần tử có class là "nameLogin"
                const nameLoginElement = document.querySelector('.nameLogin');
                if (nameLoginElement) {
                    nameLoginElement.textContent = userName ? userName : "Noname";
                }
                else {
                    console.error('Element with class "nameLogin" not found.');
                }
                return true; // Đăng nhập thành công
            }
            else {
                return false; // Đăng nhập không thành công với mã trạng thái không 200
            }
        }
        catch (error) {
            console.error('Error during login:', error);
            return false; // Đăng nhập không thành công do lỗi
        }
    }
    // Hàm xử lý register
    async register(email, password) {
        try {
            const response = await fetch('http://localhost:3000/users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            });
            if (response.ok) {
                return true; // Đăng ký thành công
            }
            else {
                return false; // Đăng ký không thành công với mã trạng thái không 200
            }
        }
        catch (error) {
            console.error('Error during registration:', error);
            return false; // Đăng ký không thành công do lỗi
        }
    }
}
