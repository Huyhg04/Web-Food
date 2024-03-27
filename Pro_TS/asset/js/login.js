import User from './models/userModel.js';
// Hàm login
async function login() {
    // Lấy giá trị của email và password từ trường nhập
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('passWord');
    // Kiểm tra xem emailInput và passwordInput có tồn tại không trước khi sử dụng
    if (emailInput && passwordInput) {
        // Sử dụng lớp User để đăng nhập
        const user = new User(undefined, '', '', '', '', '', '', 0);
        const email = emailInput.value;
        const password = passwordInput.value;
        try {
            const isLoggedIn = await user.login(email, password);
            if (isLoggedIn) {
                console.log('Login successful');
            }
            else {
                console.log('Login failed');
                // Xử lý trường hợp đăng nhập không thành công
            }
        }
        catch (error) {
            console.error('Error during login:', error);
        }
    }
    else {
        console.error('email or password input element not found.');
    }
}
// // Gọi hàm login khi form được gửi đi
const formLogin = document.querySelector('.formLogin');
if (formLogin) {
    formLogin.addEventListener('submit', function (event) {
        event.preventDefault(); // Ngăn chặn gửi form mặc định
        login(); // Gọi hàm login khi form được gửi đi
    });
}
// Hàm register
async function register() {
    // Lấy giá trị của email và password từ trường nhập
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('passWord');
    // Kiểm tra xem emailInput và passwordInput có tồn tại không trước khi sử dụng
    if (emailInput && passwordInput) {
        // Sử dụng lớp User để đăng nhập
        const user = new User(undefined, '', '', '', '', '', '', 0);
        const email = emailInput.value;
        const password = passwordInput.value;
        try {
            const isLoggedIn = await user.register(email, password);
            if (isLoggedIn) {
                console.log('Register successful');
                emailInput.value = "";
                passwordInput.value = "";
            }
            else {
                console.log('Register failed');
                // Xử lý trường hợp đăng nhập không thành công
            }
        }
        catch (error) {
            console.error('Error during Register:', error);
        }
    }
    else {
        console.error('email or password input element not found.');
    }
}
// Gọi hàm register khi form được gửi đi
const formRegester = document.querySelector('.formRegester');
if (formRegester) {
    formRegester.addEventListener('submit', function (event) {
        event.preventDefault(); // Ngăn chặn gửi form mặc định
        register(); // Gọi hàm Register khi form được gửi đi
    });
}
