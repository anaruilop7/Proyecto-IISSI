const PHOTOS_PER_ROW = 4;

function processPhotos(data) {
    let row = $("div.container > div.row").last();
    let counter = 0;

    for (photo of data) {
        let html = `<div class="col-md text-center">
        <div class="card">
          <a href="photo_detail.php?photoId=${photo.id}">
            <img src="${photo.url}" class="card-img-top">
          </a>
          <div class="card-body">
            <h5 class="card-title">${photo.title}</h5>
            <p class="card-text">${photo.description}</p>
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

function loadPhotos() {
    console.log("Cargando fotos...");

    $.ajax({
        url: "http://localhost:3000/photos?_sort=id&_order=desc",
        success: processPhotos,
        error: function (error) {
            console.log("Ha ocurrido un error: " + error.toString());
        }
    });

}

// Llamar a loadPhotos cuando la página esté lista
$(loadPhotos);