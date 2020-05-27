const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('photoId');
const userId = localStorage.getItem("userId");
const PHOTOS_PER_ROW = 3;

function editPhoto() {
	window.location.href = "photo_edit.php?id=" + id;
}

function deletePhoto(){
	$.ajax({
		url: "http://localhost:3000/comentarios/",
		success: function (data) {
			deletePhoto2(data)
		},
		error: console.log,
	});


}
function deletePhoto2(data) {	

	let b = true;
	for(c of data){

		if(parseInt(id) == parseInt(c.photoId)){
			b = false;
			console.log(b)
			break;
		}
	}
	if(b){
	fetch('http://localhost:3000/photos/' + id, {
		method: "DELETE",
		headers: {
			'Authorization': 'Bearer ' + getToken(),
		}
	}).then(function (response) {
		if (response.ok) {
			window.location.href = "usuario.php";
		} else {
			console.log("Error al borrar la foto: " + response.statusText);
		}
	}).catch(function (error) {
		console.log("Error al borrar la foto: " + error);
	});
	} else{
		console.log("Lo hace bien")
		alert("You can't delete this photo!");
		//$("#errors-container").append(getError("You can't delete this!"));
	}
}

function processPhotoLoad(data) {
	$("#image").attr("src", data.url);
	$("#image-title").text(data.title);
	$("#image-desc").text(data.description);
	$("#visib").text(data.visibilidad);

	let photo_date = data.date;
	let date = new Date(photo_date);

	let year = date.getFullYear();
	let month = date.getMonth() + 1;
	let day = date.getDate();

	//let date_string = "Fecha: " + day + "/" + month + "/" + year;
	let date_string = `Fecha: ${day}/${month}/${year}`;
	$("#image-date").text(date_string);

	for (tag of data.tags) {
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

}

function loadPhoto() {
	if (id === null) {
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
$(createMap);



function createMap() {

	$.ajax({
		url: "http://localhost:3000/users",
		success: function (data) {
			let mapa = new Map;
			for (usuario of data) {
				mapa.set(usuario.id, usuario.name);
			} console.log(mapa)
			$(loadComments(mapa));
		},
		error: function (error) {
			console.log("Ha ocurrido un error: " + error.toString());
		}
	});

}

function loadComments(mapa) {
	console.log("llega??")
	$.ajax({
		url: "http://localhost:3000/comentarios/",
		success: function (data) {
			processComments(mapa, data)
		},
		error: console.log,
	});

}

function processComments(mapa, data) {
	console.log(mapa)
	//console.log(userId)
	
	let row = $("div.container > div.row").last();
	let counter = 0;
	for(c of data){
	
	if (parseInt(id) == parseInt(c.photoId)) {
		let texto = c.text;
		let usuario = c.userId
		let username = mapa.get(parseInt(usuario));
		let html = `<div class="col-md text-center">
      <div class="card">
     
        </a>
        <div class="card-body">
          <h5 class="card-title">${username}</h5>
          <p class="card-text">${c.text}</p>
          <a href="perfil.php?id=${c.userId}"> ${username}</a>
          <hr>
          <p class="card-text">
            
          </p>
        </div>
      </div>
    </div>`;

    let col = $.parseHTML(html);
    row.append(col);

    let p_tags = $("p.card-text").last();

    counter++;
    if (counter % PHOTOS_PER_ROW == 0) {
      let new_row = $("<div></div>", { "class": "row" });
      $("div.container").append(new_row);
      row = new_row;
    }
  }
  }

  }
 





function vote(i) {
	$.ajax({
		url: "http://localhost:3000/votes?photoId=" + id + "&userId=" + userId,
		method: "GET",
		headers: {
			'Content-Type': 'application/json',
			'Authorization': 'Bearer ' + getToken(),
			'Cache-Control': 'no-cache, no-store, must-revalidate',
			'Pragma': 'no-cache',
			'Expires': 0
		},
		success: function (voteResponse) {
			if (voteResponse.length > 0) {
				//	console.log("?¿?¿¿?¿??¿?¿?")
				$(updateVote(voteResponse[0].id, voteResponse[0].type, i));
				//$(updateVote(voteResponse.id, voteResponse.type, i));
			} else {
				console.log("lo crea nuevo no ??")
				$(newVote(i));
			}
		},
		error: console.log
	});
}

function updateVote(voteId, type, i) {
	console.log(type)
	console.log(i)

	if ((type === "upvote" && i === "upvote") || (type === "downvote" && i === "downvote")) {
		alert("You can't vote two times!!!")
		console.log("You have already voted")
	} else {

		//let type = i=="upvote"?"upvote":"downvote";

		let rem = i == "upvote" ? "downvote" : "upvote";

		let uVote = {
			photoId: id,
			userId: userId,
			type: i,
		}

		$.ajax({
			url: "http://localhost:3000/votes/" + voteId,
			headers: {
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + getToken(),

			},
			method: "PATCH",
			data: JSON.stringify(uVote),
			success: function () {
				$(photoVote(rem, -1));
				$(photoVote(i, 1));
			},
			error: console.log
		});
	}



}


function newVote(i) {
	console.log("jk")
	console.log(" pero lo coge buen??" + i)

	let nVote = {
		photoId: id,
		userId: userId,
		type: i,
	}


	$.ajax({
		url: "http://localhost:3000/votes",
		method: "POST",
		headers: {
			'Content-Type': 'application/json',
			'Authorization': 'Bearer ' + getToken(),
		},
		data: JSON.stringify(nVote),
		success: photoVote(i, 1)

	});
}


function photoVote(i, num) {

	$.ajax({
		url: "http://localhost:3000/photos/" + id,
		success: function (dataPhotos) {
			$(handleVote(i, num, dataPhotos))

		},
		error: console.log,
	});

}

function handleVote(i, num, dataPhotos) {
	console.log("sigue bien ??" + i)
	console.log(dataPhotos.upvotes)

	let votes = dataPhotos.upvotes;
	if (i == 'downvote') votes = dataPhotos.downvotes;
	console.log("prueba votes " + votes)
	votes = votes + num;
	console.log("actualizado " + votes)

	let photo;

	if (i == 'upvote') {
		photo = {
			upvotes: votes,
		};
	} else {
		photo = {
			downvotes: votes,
		};
	}

	fetch('http://localhost:3000/photos/' + id, {
		method: "PATCH",
		body: JSON.stringify(photo),
		headers: {
			'Content-Type': 'application/json',
			'Authorization': 'Bearer ' + getToken(),
		}
	}).then(function (response) {
		if (response.ok) {
			$(i == 'upvotes' ? "#image-upvotes" : "#image-downvotes").text(votes);
			window.location.href = "photo_detail.php?photoId=" + parseInt(id);
		} else {
			$("#errors-container").append(getError(response.statusText));
		}
	}).catch(console.log);
}


	$("form").submit(function (event) {
		console.log("??")
		event.preventDefault();
		$("#errors-container").empty();

		let text = $("#text-input").val();
		comentario = {
			"text": text,
			"photoId": id,
			"userId": userId
		}
		fetch('http://localhost:3000/comentarios/', {
			method: "POST",
			body: JSON.stringify(comentario),
			headers: {
				'Content-Type': 'application/json'
			}
		}).then(function (response) {
			if (response.ok) {
				window.location.href = "photo_detail.php?photoId=" + parseInt(id);
				//window.location.href = "index.php";
			} else {
				$("#errors-container").append(getError(response.statusText));
			}
		}).catch(function (error) {
			console.log("Error al comentar las fotos: " + error);
		});
	} 
	

	);

