let conjunto = new Set();
function getError(message) {
    return "<div onclick='removeError(this);' class='alert alert-danger' role='alert'><strong><i class='fa fa-times' aria-hidden= 'true'></i > Error! </strong>" + message + "</div>";
}

function loadTags(){

    $.ajax({
        url: "http://localhost:3000/tags",
        success: createSet,
        error: console.log("Ha ocurrido un error")
    })
}

function createSet(data){

    for(e of data){
        conjunto.add(e.title)
    }
    console.log(conjunto)
}


$(loadTags)

$("form").submit(function (event) {
    
    event.preventDefault();
    $("#errors-container").empty();

    let url = $("#url-input").val();
    let title = $("#title-input").val();
    console.log(title)
    if(!conjunto.has(title)){   

    let tag = {
        url: url,
        title: title,
    };
    

    fetch('http://localhost:3000/tags/', {
        method: "POST",
        body: JSON.stringify(tag),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + getToken(),
        }
    }).then(function (response) {
        if (response.ok) {
            window.location.href = "tags.php";
        } else {
            $("#errors-container").append(getError(response.statusText));
        }
    }).catch(console.log);

    } else{
        alert("This tag already exists")
    }
  
    
   
});
