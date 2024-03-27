export default class User {
    private id: string | undefined;
    private name: string;
    private address: string;
    private phone: string;
    private email: string;
    private username: string;
    private password: string;
    private role: number;

    constructor(
        id: string | undefined = undefined,
        name: string,
        address: string,
        phone: string,
        email: string,
        username: string,
        password: string,
        role: number
    ){
        this.id = id;
        this.name = name;
        this.address = address;
        this.phone = phone;
        this.email = email;
        this.username = username;
        this.password = password;
        this.role = role;
    }

    getId(): string | undefined {
        return this.id;
    }

    setId(id: string | undefined) {
        this.id = id;
    }

    getName(): string {
        return this.name;
    }

    setName(name: string) {
        this.name = name.length === 0 ? "No name" : name;
    }

    getAddress(): string {
        return this.address;
    }

    setAddress(address: string) {
        this.address = address;
    }

    getPhone(): string {
        return this.phone;
    }

    setPhone(phone: string) {
        this.phone = phone;
    }

    getEmail(): string {
        return this.email;
    }

    setEmail(email: string) {
        this.email = email;
    }

    getUsername(): string {
        return this.username;
    }

    setUsername(username: string) {
        this.username = username;
    }

    getPassword(): string {
        return this.password;
    }

    setPassword(password: string) {
        this.password = password;
    }

    getRole(): number {
        return this.role;
    }

    setRole(role: number) {
        this.role = role;
    }
    // Hàm xử lí login
    async login(email: string, password: string): Promise<boolean> {
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
                } else {
                    console.error('Element with class "nameLogin" not found.');
                }
                return true; // Đăng nhập thành công
            } else {
                return false; // Đăng nhập không thành công với mã trạng thái không 200
            }
        } catch (error) {
            console.error('Error during login:', error);
            return false; // Đăng nhập không thành công do lỗi
        }
    }
    // Hàm xử lý register
    async register(email: string, password: string): Promise<boolean> {
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
            } else {
                return false; // Đăng ký không thành công với mã trạng thái không 200
            }
        } catch (error) {
            console.error('Error during registration:', error);
            return false; // Đăng ký không thành công do lỗi
        }
    }

    
}
