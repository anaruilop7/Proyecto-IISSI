function getError(message) {
    return "<div onclick='removeError(this);' class='alert alert-danger' role='alert'><strong><i class='fa fa-times' aria-hidden= 'true'></i > Error! </strong>" + message + "</div>";
}


$("form").submit(function (event) {
    event.preventDefault();
    $("#errors-container").empty();

    let url = $("#url-input").val();
    let title = $("#title-input").val();
    let description = $("#description-input").val();
    let tags = $("#tags-input").val().split(",").map(tag => tag.trim());
    let date = new Date().toISOString();

    let photo = {
        url: url,
        title: title,
        description: description,
        tags: tags,
        date: date,
        upvotes: 0,
        downvotes: 0,
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

});