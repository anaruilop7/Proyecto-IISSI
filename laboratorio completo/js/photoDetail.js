const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('photoId');

function editPhoto() {
	window.location.href = "photo_edit.php?id=" + id;
}



function votePhoto() {
    let likes = parseInt(data.upvotes) + 1;
	let score = likes - data.downvotes;
	let score_text = "Puntuación: " + score;
	$("#image-score").text(score_text);

	/*
	let usuario = data.userId;

	let nombre =  "http://localhost:3000/photos/" + usuario;

	let nombre2 = nombre.user;
*/

}
function deletePhoto() {
	fetch('http://localhost:3000/photos/' + id, {
		method: "DELETE",
		headers: {
			'Authorization': 'Bearer ' + getToken(),
		}
	}).then(function(response) {
		if(response.ok) {
			window.location.href = "index.php";
		} else {
			console.log("Error al borrar la foto: " + response.statusText);
		}
	}).catch(function(error){
		console.log("Error al borrar la foto: " + error);
	});
	}

function processPhotoLoad(data) {
	$("#image").attr("src", data.url);
	$("#image-title").text(data.title);
	$("#image-desc").text(data.description);
	
	let photo_date = data.date;
	let date = new Date(photo_date);

	let year = date.getFullYear();
	let month = date.getMonth() + 1;
	let day = date.getDate();

	//let date_string = "Fecha: " + day + "/" + month + "/" + year;
	let date_string = `Fecha: ${day}/${month}/${year}`;
	$("#image-date").text(date_string);

	for(tag of data.tags) {
		let span = $("<span></span>", {
			text: tag,
			"class": "badge badge-secondary"
		});

		$("#image-tags").append(span);
	}
	$("span.badge").after(" ");

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