const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');

// Función auxiliar para convertir un mensaje de error a un elemento HTML
// Si se usa mucho, sería aconsejable ponerla en un archivo común.
function getError(message) {
    return "<div class='alert alert-danger' role='alert'><strong><i class='fa fa-times' aria-hidden= 'true'></i > Error! </strong>" + message + "</div>";
}

// Obtenemos los datos de la foto que queremos modificar y los mostramos en el formulario
function loadPhoto() {
    axios.get('http://localhost:3000/photos/' + id)
        .then(function (response) {
            if (response.status === 200) {
                showPhoto(response.data);
            }
        })
        .catch(console.log);
}

// Función para mostrar los datos de la foto en el formulario cuando se haga la petición
function showPhoto(photo) {
    let date = new Date(photo.date);

    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let date_string = `${day}/${month}/${year}`;
    $("#date").text(date_string);

    $("#image").attr("src", photo.url);
    $("#description-input").val(photo.description);
    $("#tags-input").val(photo.tags.join(", "));
}

// Ejecutaremos loadPhoto cuando la página esté lista
$(loadPhoto);


$("#photo-form").submit(function (event) {
    event.preventDefault();
    $("#errors-container").empty();

    let description = $("#description-input").val();
    let tags = $("#tags-input").val().split(",").map(tag => tag.trim());

    let photo = {
        description, tags
    };

    // Aquí hacemos el envío
    fetch('http://localhost:3000/photos/' + id, {
        method: "PATCH",
        body: JSON.stringify(photo),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + getToken(),
        }
    }).then(function (response) {
        if (response.ok) {
            window.location.href = "index.php";
        } else {
            $("#errors-container").append(getError(response.statusText));
        }
    }).catch(console.log);
});

    function rLenguaje(palabrotas){
        let url = $("#url-input").val();
        let title = $("#title-input").val();
        let description = $("#description-input").val();
        let tags = $("tags-input").val().split(",").map(tag => tag.trim());
        let date = new Date().toString();
        let cont = 0;
        let palabrota = palabrotas[0].words;
        for(p of palabrota){
            if(title.includes(palabra)||description.includes(palabra)){
                $("#errors-container").append(
                    getError("Los apellidos deben tener al menos 6 caracteres de longitud")
                );
            }
        }
    }


    
function buscaPalabras() {

    $.ajax({
        url: "http://localhost:3000/palabrotas",
        success: function (data){
          let mapa=new Map;
          for(palabra of palabrotas){
            mapa.set(palabra.val);
          }
          $(rLenguaje(mapa));
        },
        error: function (error) {
            console.log("Ha ocurrido un error: " + error.toString());
        }
    });
  
  }
    
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

