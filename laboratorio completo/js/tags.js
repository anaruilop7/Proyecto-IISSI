const PHOTOS_PER_ROW = 4;

function processTags(data) {
  console.log("jungkook")
  let row = $("div.container > div.row").last();
  let counter = 0;
  //console.log(mapa);
  for (tag of data) {
    let html = `<div class="col-md text-center">
            <div class="photo-image">
              <a href="tag_detail.php?tagId=${tag.id}">
              <div class="embed-responsive embed-responsive-1by1">
                <img src="${tag.url}" class="photo-image">
              
              </a>
              <h5 class="card-title">${tag.title}</h5>
              </div>
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


function loadTags() {
  console.log("Cargando etiquetas...");

  $.ajax({
    url: "http://localhost:3000/tags?_sort=title&_order=asc",
    method: "GET",
    success: function (data) {
      console.log(data)
      $(processTags(data))
    },
    error: function (error) {
      console.log("Ha ocurrido un error: " + error.toString());
    }
  });

}
// Llamar a loadPhotos cuando la página esté lista
$(loadTags);
