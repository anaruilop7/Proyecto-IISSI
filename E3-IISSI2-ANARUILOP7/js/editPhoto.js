let visible = "public";

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

    $.ajax({
        url: "http://localhost:3000/palabrotas",
        success: getTags,
        error: console.log("Ha ocurrido un error")
    })

});


function getTags(data) {
    console.log("tags")
    $.ajax({
        url: "http://localhost:3000/tags/",
        method: "GET",
        success: function (dataTags) {
            $(checkTags(data, dataTags))
        },
        error: console.log
    });

}

function checkTags(data, dataTags) {
    let tags = $("#tags-input").val().split(",").map(tag => tag.trim());
    let mySet = new Set();

    for (tag of dataTags) {
        mySet.add(tag.title);

    }

    for (tag of tags) {
        b = mySet.has(tag);
        if (!b) {
            $("#errors-container").append(
                getError("This tag doesn't exist!:   " + tag)
            );
            break;
        }
    }

    if (b) {
        checkphoto(data);
    }


}

function checkphoto(badword) {

    let description = $("#description-input").val();
    let tags = $("#tags-input").val().split(",").map(tag => tag.trim());
    let visibilidad = visible;
    let d = true;
    if (d) {
        if (description != "") {
            for (w of description.split(",")) {
                for (word of w.split(" ")) {
                    if (badword[word.toLowerCase()]) {
                        d = false;
                        break;
                    }
                }
            }
        }
    }

    if (d) {

        let photo = {
            description, tags, visibilidad
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


    }
    else {
        $("#errors-container").append(getError("Your words are not allowed in this site"));
    }


};






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



function esVisible(tipo) {
    $.ajax({
        url: "http://localhost:3000/comentarios/",
        success: function (data) {
            esVisible2(tipo, data)
        },
        error: console.log,
    });


}
function esVisible2(tipo, data) {


    if (tipo == "true") {
        visible = "public";
    } else {
        let b = true;
        for (c of data) {

            if (parseInt(id) == parseInt(c.photoId)) {
                b = false;
                console.log(b)
                break;
            }
        }
        if (b) {
            visible = "private";
        }else {
            console.log("Lo hace bien")
            alert("You can't hide this photo!");
            //$("#errors-container").append(getError("You can't delete this!"));
        }

    } 
}

/*

function esVisible(tipo){
    console.log("pruebav")
    if(tipo == "true"){
        visible = "public";
    } else {
        visible = "private";
    }
    console.log(visible)

}


*/
