<!doctype HTML>
<html>

<head>
    <?php include 'imports.php' ?>
    <title>Edit photo</title>
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

        <form id="photo-form">
            <div class="row">
                <div class="col-md" id="errors-container">
                </div>
            </div>

            <div class="row">
                <div class="col-md text-center">
                    <img id="image" class="img-fluid">
                </div>
                <div class="col-md text-center">
                    <h5>Date: <span id="date"></span></h5>
                    <span>Description:</span>
                    <textarea class="form-control" id="description-input" name="description" required></textarea>
                    <hr>
                    <h3>Tags:</h3>
                    <input type="text" class="form-control" id="tags-input" name="tags" required>
                    <div class="col-md text-center">
                        <hr>
                    <button onclick='esVisible("true")' type="button" class="btn btn-outline-warning">Public</button>
                    <button onclick="esVisible('false')" type="button" class="btn btn-outline-secondary">Private</button>

                </div>

                    <hr>
                </div>
            </div>


            <div class="row">
               
            </div>
            <hr>

            <div class="row">
                <div class="col-md text-center">
                    <button type="submit" class="btn btn-warning">Save</button>
                </div>
            </div>

        </form>
    </div>

    <?php include 'footer.php' ?>
    <script src="js/editPhoto.js"></script>

</body>