<!doctype HTML>
<html>

<head>
    <?php include 'imports.php' ?>
    <title>Photo details</title>
</head>

<body>
    <?php include 'header.php' ?>

    <div class="container">
        <div class="row">
            <div class="col-md text-center">
                <h3>Photo details</h3>
            </div>
        </div>

        <hr>
        
        <div class="row">
            <div class="col-md" id="errors-container"></div>
        </div>


        <hr>

        <div class="row">

            <div class="col-md text-center">
                <img id="image" class="img-fluid">
            </div>

            <div class="col-md text-center">
                <h2 id="image-title"></h2>
                <h5 id="image-date"></h5>
                <span id="image-desc"></span>

                <hr>

                <h3 id="image-score"></h3>
                <button onclick='vote("upvote")' type="button" class="btn btn-warning">Like</button>
                <button onclick='vote("downvote")' type="button" class="btn btn-light">Dislike</button>


                <hr>

                <h3>Tags:</h3>
                <div id="image-tags">

                </div>


                <!--
                <button onclick='editPhoto()' type="button" class="btn btn-outline-warning">Edit</button>
                <button onclick="deletePhoto()" type="button" class="btn btn-outline-secondary">Delete</button>
                -->

            </div>

        </div>
        <hr>
        <div class="container">

            <div class="row">
                <div class="col-md text-center">
                    <h3>Comments</h3>
                    <form>
                    <label for="title-input" id="comentarios">Leave your comments:</label>
                    <input type="text" class="form-control" id="text-input" name="text" placeholder="Comment here..." required>

                    <button type="submit" id="comentar" class="btn btn-warning">Comment</button>
                </form>
                </div>
            </div>

            <hr>
        
       

        <div class="row">
            <div class="col-md">
               

            </div>
            <hr>
        </div>




       
    </div>
</div>
    <div class="row">
            <div class="col-md text-center">
                <a href="index.php" class="btn btn-light">Go back</a>
            </div>
        </div>



    <?php include 'footer.php' ?>
</body>

</html>

<script src="js/photoDetail.js"></script>

<script>
    if(getToken()==null){
    $("#comentar").remove();
    $("#text-input").remove();
    $("#comentarios").remove();
    

}
</script>