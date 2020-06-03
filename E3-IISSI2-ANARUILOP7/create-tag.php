
<!doctype HTML>
<html>

<head>
  <?php include 'imports.php' ?>
  <title>Etiquetas</title>
</head>
<body>
<?php include 'header.php' ?>

<div class="wrapper fadeInDown"> <!-- Hace que el bloque esté centrado-->

  <div id="formContent">
    

    <div class="container">
        <div class="row">
            <div class="col-md text-center">
                <h3>New tag</h3>
            </div>
        </div>

        <hr>

        <div class="row">
            <div class="col-md" id="errors-container"></div>
        </div>

        <form>
            <div class="row">
                <div class="col-md">
                    <div class="form-group">
                        <label for="url-input">URL:</label>
                        <input type="text" class="form-control" id="url-input" name="url" placeholder="URL" required>
                    </div>
                </div>
                <div class="col-md">
                    <div class="form-group">
                        <label for="title-input">Title:</label>
                        <input type="text" class="form-control" id="title-input" name="nombre" placeholder="Title" required>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md text-center">
                    <button type="submit" class="btn btn-warning" id="create">Create tag</button>
                </div>
            </div>

        </form>

    </div>
<?php include 'footer.php' ?>
<script src="js/create-tag.js"></script>
</body>

</html>

<script>

if(getToken()==null){
    $("#create").remove();

}</script>