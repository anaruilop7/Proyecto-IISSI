const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('photoId');

function editPhoto() {
	window.location.href = "photo_edit.php?id=" + id;
}


function processVote(data) {
    data.upvotes += 1;
	let score = data.upvotes - data.downvotes;
	let score_text = "Puntuación: " + score;
	$("#image-score").text(score_text);

	/*
	let usuario = data.userId;

	let nombre =  "http://localhost:3000/photos/" + usuario;

	let nombre2 = nombre.user;
*/

}

function loadPhoto() {
    if(id === null) {
        alert("Please provide a photo ID");
    } else {
        $.ajax({
            url: "http://localhost:3000/photos/" + id,
            success: processPhotoLoad,
            error: console.log,
        });
    }
}

$(loadPhoto); // Cargar la foto cuando la página esté lista