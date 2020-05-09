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

            <div class="col-md text-center">
                <img id="image" class="img-fluid">
            </div>

            <div class="col-md text-center">
                <h2 id="image-title"></h2>
                <h5 id="image-date"></h5>
                <span id="image-desc"></span>

                <hr>

                <h3 id="image-score"></h3>
                <button type="button" class="btn btn-warning">Like</button>
                <button type="button" class="btn btn-light">Dislike</button>


                <hr>

                <h3>Tags:</h3>
                <div id="image-tags">

                </div>
                <hr>

               

                <button onclick='editPhoto()' type="button" class="btn btn-outline-warning">Edit</button>
                <button onclick="deletePhoto()" type="button" class="btn btn-outline-secondary">Delete</button>
            </div>

        </div>

        <hr>

        <div class="row">
            <div class="col-md text-center">
            <a href="index.php" class="btn btn-light">Go back</a>
            </div>
        </div>

    </div>

 
    <?php include 'footer.php' ?>
</body>

</html>

<script src="js/photoDetail.js"></script>