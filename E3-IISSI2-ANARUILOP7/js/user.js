const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = localStorage.getItem("userId")
const PHOTOS_PER_ROW = 3;

function editProfile() {
	window.location.href = "editaperfil.php?id=" + id;
}

function processProfile(data) {
    $("#usuario").text(localStorage.getItem("usuario"));
    $("#nombre").text(localStorage.getItem("userName"));
    $("#apellidos").text(localStorage.getItem("apellido"));
    let row = $("div.container > div.row").last();
    let counter = 0;
    
    
    for (photo of data) {
      console.log(photo.userId);
      console.log(localStorage.getItem("userId"));
      console.log(data);
        if(parseInt(photo.userId) == parseInt(localStorage.getItem("userId"))){
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
  }


function loadPerfil() {
    if(id === null) {
        alert("Please provide a user ID");
    } else {
        $.ajax({
            url: "http://localhost:3000/photos/" ,
            success: processProfile,
            error: console.log,
        });
    }
}
    
  
$(loadPerfil);
