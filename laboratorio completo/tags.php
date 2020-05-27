


<!doctype HTML>
<html>

<head>
    <?php include 'imports.php' ?>
    <title>Tags</title>
</head>

<body>
    <?php include 'header.php' ?>

    <div class="container">

        <div class="row">
            <div class="col-md text-center">
                <h3>Tags</h3>
            </div>
        </div>
        <hr>
        <div class="row">

        </div>
    </div>
    <hr>
    <div class="row">
            <div class="col-md text-center">
            <a href="create-tag.php" id="new" class="btn btn-light">New tag</a>
            </div>
        </div>

    <?php include 'footer.php' ?>
    <script src="js/tags.js"></script>

</body>

</html>

<script>

if(getToken()==null){
    $("#new").remove();
   
}
</script>