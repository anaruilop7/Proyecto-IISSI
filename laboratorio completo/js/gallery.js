const PHOTOS_PER_ROW = 4;

function processPhotos(data, mapa) {
  let row = $("div.container > div.row").last();
  let counter = 0;
  //console.log(mapa);
  for (photo of data) {
    let usuario = photo.userId;
    let username = mapa.get(parseInt(usuario));
    let html = `<div class="col-md text-center">
      <div class="card">
      <a href="photo_detail.php?photoId=${photo.id}">
      <div class="embed-responsive embed-responsive-1by1">
      <img src="${photo.url}" class="card-img-top embed-responsive-item">
    </div>
        </a>
        <div class="card-body">
          <h5 class="card-title">${photo.title}</h5>
          <p class="card-text">${photo.description}</p>
          <a href="perfil.php?id=${usuario}"> ${username}</a>
          <hr>
          <p class="card-text">
            
          </p>
        </div>
      </div>
    </div>`;

    let col = $.parseHTML(html);
    row.append(col);

    let p_tags = $("p.card-text").last();

    for (tag of photo.tags) {
      let tag_span = $("<span></span>", {
        "class": "badge badge-secondary",
        text: tag,
      });
      p_tags.append(tag_span);
    }
    $("span.badge").after(" ");

    counter++;
    if (counter % PHOTOS_PER_ROW == 0) {
      let new_row = $("<div></div>", { "class": "row" });
      $("div.container").append(new_row);
      row = new_row;
    }


  }
}

function createMap() {

  $.ajax({
    url: "http://localhost:3000/users",
    success: function (data) {
      let mapa = new Map;
      for (usuario of data) {
        mapa.set(usuario.id, usuario.name);
      }
      $(loadPhotos(mapa));
    },
    error: function (error) {
      console.log("Ha ocurrido un error: " + error.toString());
    }
  });

}
function loadPhotos(mapa) {
  console.log("Cargando fotos...");

  $.ajax({
    url: "http://localhost:3000/photos?_sort=date&_order=desc&_limit=8",
    success: function (data) {
      $(processPhotos(data, mapa));
    },
    error: function (error) {
      console.log("Ha ocurrido un error: " + error.toString());
    }
  });

}
// Llamar a loadPhotos cuando la página esté lista
$(createMap);
