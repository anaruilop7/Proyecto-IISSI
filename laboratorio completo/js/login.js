function validateForm() {
    let email = $("#email").val();
    let password = $("#password").val();

    let login_data = {
        email,
        password,
    };

    $.ajax({
        url: "http://localhost:3000/login",
        method: "POST",
        contentType: "application/json",
        data: JSON.stringify(login_data),

        success: handleLogin,
        error: invalid, // Hay que gestionar este posible error en el login y mostrárselo al usuario
    });
  

    return false;
}

function handleLogin(data) {
    let token = data.accessToken;
    saveToken(token).then(function () {
        window.location.href = "index.php";
    });
}

function invalid(){
    alert("Check your password, please")
}
