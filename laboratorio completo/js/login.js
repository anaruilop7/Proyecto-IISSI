function validateForm() {
    let email = $("#email").val();
    let password = $("#password").val();

    // Hay que validar este formulario como cualquier otro!!!

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
        error: console.log, // Hay que gestionar este posible error en el login y mostrárselo al usuario
    });

    return false;
}

function handleLogin(data) {
    let token = data.accessToken;
    saveToken(token).then(function () {
        window.location.href = "index.php";
    });
}
