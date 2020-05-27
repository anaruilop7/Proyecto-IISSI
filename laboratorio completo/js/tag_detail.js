const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const idTagPag = urlParams.get('tagId');
const PHOTOS_PER_ROW = 2;





function processTag(dataPhotos, title) {
    let row = $("div.container > div.row").last();
    let counter = 0;


    for (photo of dataPhotos) {
        let b = false;

        for (tag of photo.tags) {

            if (tag == title) {
                console.log(tag)
                b = true;

            }
        }

        if (b) {
            if (photo.visibilidad == "public") {
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

    }
}

function loadPhotosTag(titulo) {
    $.ajax({
        url: "http://localhost:3000/photos/",
        success: function (dataPhotos) {
            $(processTag(dataPhotos, titulo))
        },
        error: console.log,
    });
}


$(loadTag);

function loadTag() {
    $.ajax({
        url: "http://localhost:3000/tags/" + idTagPag,
        success: getTag,
        error: function (error) {
            console.log("Ha ocurrido un error: " + error.toString());
        }
    });
}


function getTag(data) {
    $("#title").text(data.title);
    console.log("jungkook")
    loadPhotosTag(data.title);
}
// $(createMap);