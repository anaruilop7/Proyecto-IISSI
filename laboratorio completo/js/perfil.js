const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const idUserPag = urlParams.get('id');
const PHOTOS_PER_ROW = 2;





function processProfile(dataPhotos) {
    // $("#username").text(usuario.user);
    // $("#nombre").text(usuario.name);
    // $("#apellidos").text(usuario.surname);
    let row = $("div.container > div.row").last();
    let counter = 0;


    for (photo of dataPhotos) {
        console.log(photo)

        let html = `<div class="col-md text-center">
            <div class="photo-image">
              <a href="photo_detail_user.php?photoId=${photo.id}">
                <img src="${photo.url}" class="photo-image">
              </a>
              </p>
          </div>`;

        let col = $.parseHTML(html);
        row.append(col);

        counter++;
        if (counter % PHOTOS_PER_ROW == 0) {
            let new_row = $("<div></div>", { "class": "row" });
            $("div.container").append(new_row);
            row = new_row;
        }

    }
}

function loadPhotosProfile(idUser) {
    $.ajax({
        url: "http://localhost:3000/photos?userId=" + idUser,
        success: processProfile,
        error: console.log,
    });
}

// function loadPerfil(usuario) {
//     if(id === null) {
//         alert("Please provide a user ID");
//     } else {
//         $.ajax({
//             url: "http://localhost:3000/photos",
//             success: function(dataUser){
//                     $(processProfile(usuario, dataUser))
//             } ,
//             error: console.log,
//         });
//     }
// }


$(loadProfile);

function loadProfile() {
    console.log(idUserPag)
    $.ajax({
        url: "http://localhost:3000/users/" + idUserPag,
        success: getProfile,
        error: function (error) {
            console.log("Ha ocurrido un error: " + error.toString());
        }
    });
}

// function createMap() {

//     $.ajax({
//         url: "http://localhost:3000/users",
//         success: function (data){
//           let mapa=new Map;
//           for(usuario of data){
//             mapa.set(usuario.id,usuario);
//           }
//           $(loadPerfil(mapa.get(parseInt(id))));
//         },
//         error: function (error) {
//             console.log("Ha ocurrido un error: " + error.toString());
//         }
//     });

// }

function getProfile(data) {
    $("#username").text(data.user);
    // $("#username").text(usuario.user);
    $("#nombre").text(data.name);
    $("#apellidos").text(data.surname);
    loadPhotosProfile(idUserPag);
}
// $(createMap);