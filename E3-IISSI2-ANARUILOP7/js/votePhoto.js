//const queryString = window.location.search;
//const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('photoId');
const userId = localStorage.getItem("userId");

/*
function vote(i) {

	$.ajax({
		url:"http://localhost:3000/votes?photoId="+id+"&userId="+userId,
		method:"GET",
		headers: {
            'Content-Type': 'application/json',
			'Authorization': 'Bearer ' + getToken(),
			'Cache-Control': 'no-cache, no-store, must-revalidate',
			'Pragma': 'no-cache',
			'Expires': 0
		},
		success:function(voteResponse){
			if(voteResponse.length > 0){
				$(updateVote(voteResponse[0].id, voteResponse[0].type, i));
			}else{
				$(newVote(i));
			}
		},
		error:console.log
	});
}

function updateVote(voteId, type, i){
	if((type === "upvote" && i === "down") || (type === "downvote" && i === "up") ){

		let type = i=="up"?"upvote":"downvote";

		let rem = i=="up"?"down":"up";

		let uVote = {
			photoId: id,
			userId:userId,
			type:type,
		}

		$.ajax({
			url:"http://localhost:3000/votes/"+voteId,
			headers: {
				'Content-Type': 'application/json',
				'Authorization': 'Bearer ' + getToken(),

			},
			method:"PATCH",
			data: JSON.stringify(uVote),
			success:function(){
				$(handleVote(rem, -1));
				$(handleVote(i, 1));
			},
			error:console.log
		});
	}

	
	

}

function newVote(i){

	let type = i=="up"?"upvote":"downvote";

	let nVote = {
		photoId: id,
		userId: userId, 
		type: type,
	}

	$.ajax({
		url:"http://localhost:3000/votes",
		method: "POST",
		headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + getToken(),
        },
		data: JSON.stringify(nVote),
		success:photoVote(i, 1)

	});
}


function handleVote(i, num) {

	let votes = i=='up'? parseInt($("#image-upvotes").text()): parseInt($("#image-downvotes").text());

	votes = votes + num;

	let photo;
	
	if(i=='up'){
		photo = {
			upvotes:votes,
		};
	}else{
		photo = {
			downvotes:votes,
		};
	}

	$.ajax({
		url: 'http://localhost:3000/photos/' + id,
		headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + getToken(),
		},
		data:JSON.stringify(photo)
	});

	fetch('http://localhost:3000/photos/' + id, {
        method: "PATCH",
        body: JSON.stringify(photo),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + getToken(),
        }
    }).then(function (response) {
        if (response.ok) {
			$(i=='up'?"#image-upvotes":"#image-downvotes").text(votes);
		} else {
            $("#errors-container").append(getError(response.statusText));
        }
	}).catch(console.log);
	


}
*/