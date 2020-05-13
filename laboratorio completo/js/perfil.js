const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');
const PHOTOS_PER_ROW = 3;





function processProfile(usuario, dataUser) {
    $("#usuario").text(usuario.user);
    $("#nombre").text(usuario.name);
    $("#apellidos").text(usuario.surname);
    let row = $("div.container > div.row").last();
    let counter = 0;
    
    
    for (photo of dataUser) {
      console.log(photo.userId);
      console.log(dataUser);
        if(parseInt(photo.userId) == parseInt(id)){
          console.log(photo);
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
  }


function loadPerfil(usuario) {
    if(id === null) {
        alert("Please provide a user ID");
    } else {
        $.ajax({
            url: "http://localhost:3000/photos?_sort=date&_order=desc",
            success: function(dataUser){
                    $(processProfile(usuario, dataUser))
            } ,
            error: console.log,
        });
    }
}
    
  
$(loadPerfil);

function createMap() {

    $.ajax({
        url: "http://localhost:3000/users",
        success: function (data){
          let mapa=new Map;
          for(usuario of data){
            mapa.set(usuario.id,usuario.name);
          }
          $(loadPerfil(mapa.get(parseInt(id))));
        },
        error: function (error) {
            console.log("Ha ocurrido un error: " + error.toString());
        }
    });

}

function getProfile(mapa){
    $("#username").text(mapa.get(parseInt(id)));
}
$(createMap);