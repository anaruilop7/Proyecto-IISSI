

const conjunto = new Set();


function validateForm() {
    $("#errors-container").empty();

    let errorCounter = 0;

    let nombre = $("#nombre").val();
    let apellidos = $("#apellidos").val();
    let telefono = $("#telefono").val();
    let email = $("#email").val();
    let usuario = $("#usuario").val();
    let password1 = $("#password1").val();
    let password2 = $("#password2").val();


    console.log(conjunto)

    if (conjunto.has(email)){
       
          //  alert("Este email ya está registrado")
          $("#errors-container").append(
            getError("Este email ya está registrado. Por favor, elija uno nuevo o inicie sesión")
        );
        errorCounter++;
        
        
    }

    if (nombre.trim().length < 3) {
        $("#errors-container").append(
            getError("El nombre debe tener al menos 3 caracteres de longitud")
        );
        errorCounter++;
    }

    if (apellidos.trim().length < 6) {
        $("#errors-container").append(
            getError("Los apellidos deben tener al menos 6 caracteres de longitud")
        );
        errorCounter++;
    }

    if (
        !new RegExp("^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$").test(telefono)
    ) {
        $("#errors-container").append(getError("El telefono esta mal formateado"));
        errorCounter++;
    }


    if (password1.length<4) {
        $("#errors-container").append(getError("La contraseña es demasiado corta")
        );
        errorCounter++;
    }


    if (password1 != password2) {
        $("#errors-container").append(
            getError("Las contraseñas deben ser iguales")
        );
        errorCounter++;
    }

    if (errorCounter === 0) {
        let user = {
            name: nombre,
            surname: apellidos,
            phone: telefono,
            email: email,
            password: password1,
            user: usuario,
        };

        $.ajax({
            url: "http://localhost:3000/register",
            method: "POST",
            data: JSON.stringify(user),
            contentType: "application/json",
            success: handleRegister,
            error: console.log, // Hay que gestionar este posible error en el registro y mostrárselo al usuario
        });
    }

    return false;
}

function handleRegister(data) {
    let token = data.accessToken;
    saveToken(token).then(() => {
        window.location.href = "index.php";
    });
}

///////////////////////////////////////////////////////////////////////////////

function getError(message) {
    return (
        "<div onclick='removeError(this);' class='alert alert-danger' role='alert'><strong><i class='fa fa-times' aria-hidden= 'true'></i > Error! </strong>" +
        message +
        "</div>"
    );
}


function removeError(error) {
    $(error).remove();
}

$(document).ready(function () {
    $("#nombre").change(function () {
        input = $(this);
        if (input.val().length < 3) {
            input.removeClass("is-valid");
            input.addClass("is-invalid");
        } else {
            input.removeClass("is-invalid");
            input.addClass("is-valid");
        }
    });
});


function loadEmails(){

    $.ajax({
        url: "http://localhost:3000/users",
        success: createSet,
        error: console.log("Ha ocurrido un error")
    })
}

function createSet(data){

    for(u of data){
        conjunto.add(u.email)
    }
    console.log(conjunto)
}


$(loadEmails)