const back = document.getElementById("back");
const register = document.getElementById("register");
const login = document.getElementById("login");

function validate(event) {
    event.preventDefault()
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirm_password = document.getElementById("confirm_password").value;

    if (username === "") {
        alert("Bạn chưa nhập họ tên");
    }
    else if (email === "") {
        alert("Bạn chưa nhập email");
    }
    else if (password === "") {
        alert("Bạn chưa nhập password");
    }
    else if (password != confirm_password) {
        alert("Password nhập lại không đúng");
    }
    else {
        (async () => {
            const data = { username: username, email: email, password: password };
            await axios.post('https://62ba4bff573ca8f8328256e6.mockapi.io/api/users', data)
        })()
        register.style.display = "none";
        login.style.display = "block";
    }
}
sign_in.addEventListener("click", function () {
    register.style.display = "none";
    login.style.display = "block";
});

back.addEventListener("click", function () {
    register.style.display = "block";
    login.style.display = "none";
});

async function validate_login(event) {
    event.preventDefault()
    const valueEmail = document.querySelector('#email_login').value;
    const valuePassword = document.querySelector('#password_login').value;
    const response = await axios.get('https://62ba4bff573ca8f8328256e6.mockapi.io/api/users');
    const data = response.data;
    let isValid = false;

    if (data) {
        data.map(item => {
            if (item.email === valueEmail && item.password === valuePassword) {
                isValid = true
            }
        })
        if (isValid) {
            alert("Thành công");
        } else {
            alert("Email hoặc password không đúng");
        }
    }

}