let visible = "public";
const idUserPag = localStorage.getItem("userId");



function getError(message) {
    return "<div onclick='removeError(this);' class='alert alert-danger' role='alert'><strong><i class='fa fa-times' aria-hidden= 'true'></i > Error! </strong>" + message + "</div>";
}


$("form").submit(function (event) {
    event.preventDefault();
    $("#errors-container").empty();
    $.ajax({
        url: "http://localhost:3000/palabrotas",
        success: loadPhotos,
        error: console.log("Ha ocurrido un error")
    })

});


function countPhotos(data, dataPhotos) {
    console.log(dataPhotos)
    if (dataPhotos.length >= 50) {
       // console.log(error)
        $("#upload-button").hide();
        $("#errors-container").append(getError("You can't upload more photos"));
    }
    else {
        getTags(data);
    }
}


function loadPhotos(data) {
    $.ajax({
        url: "http://localhost:3000/photos?userId=" + idUserPag,
        success: function (dataPhotos) {
           $(countPhotos(data, dataPhotos))
        },
        error: console.log
    });

}



function getTags(data){
    $.ajax({
        url: "http://localhost:3000/tags/",
        method: "GET",
        success: function (dataTags) {
            $(checkTags(data, dataTags))
        },
        error: console.log
    });
    
}

function checkTags(data, dataTags){
    let tags = $("#tags-input").val().split(",").map(tag => tag.trim());
    let mySet = new Set();

    for (tag of dataTags){
        mySet.add(tag.title);

    }
    
    for(tag of tags){
        b = mySet.has(tag);
        if(!b){
            $("#errors-container").append(
                getError("This tag doesn't exist!:   " + tag)
            );
            break;
        } 
    }

    if(b){
        checkphoto(data);
    }
    

}



function checkphoto(badword) {
    let url = $("#url-input").val();
    let title = $("#title-input").val();
    let description = $("#description-input").val();
    let tags = $("#tags-input").val().split(",").map(tag => tag.trim());
    let date = new Date().toISOString();
    let visibilidad = visible;

    let d = true;
    if (title != "") {
        for (w of title.split(",")) {
            for (word of w.split(" ")) {
                if (badword[word.toLowerCase()]) {
                    d = false;
                    break;
                }
            }
        }
    }
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

    //let palabras=badword[0].words;
    // for(palabra of badword){
    //     if(title.includes(palabra)||description.includes(palabra)){
    //         cont++;
    //     }

    // }
    if (d) {


        let photo = {
            url: url,
            title: title,
            description: description,
            tags: tags,
            date: date,
            upvotes: 0,
            downvotes: 0,
            visibilidad: visibilidad,
            userId: localStorage.getItem("userId"),
        };

        fetch('http://localhost:3000/photos/', {
            method: "POST",
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
}


function esVisible(tipo){
    if(tipo == "true"){
        visible = "public";
    } else { 
        visible = "private";
    }

}
/*

function getTags(data){
    $.ajax({
        url: "http://localhost:3000/tags/",
        method: "GET",
        success: function (dataTags) {
            $(checkTags(data, dataTags))
        },
        error: console.log
    });
    
}

function checkTags(data, dataTags){
    let tags = $("#tags-input").val().split(",").map(tag => tag.trim());
    let mySet = new Set();

    for (tag of dataTags){
        mySet.add(tag.title);

    }
    
    for(tag of tags){
        b = mySet.has(tag);
        if(!b){
            $("#errors-container").append(
                getError("This tag doesn't exist!:   " + tag)
            );
        }
    }
    

}

*/