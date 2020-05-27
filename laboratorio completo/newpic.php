<!doctype HTML>
<html>

<head>
    <?php include 'imports.php' ?>
    <title>New photo</title>
</head>

<body>
    <?php include 'header.php' ?>

    <div class="container">
        <div class="row">
            <div class="col-md text-center">
                <h3>New pic</h3>
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
                        <input type="text" class="form-control" id="title-input" name="title" placeholder="Title">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md">
                    <div class="form-group">
                        <label for="description-input">Description:</label>
                        <textarea class="form-control" id="description-input" name="description"
                            placeholder="Description"></textarea>
                    </div>
                </div>
                <div class="col-md">
                    <div class="form-group">
                        <label for="tags-input">Tags:</label>
                        <input type="text" class="form-control" id="tags-input" name="tags"
                            placeholder="photography, black and white, etc.">
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-md text-center">
                    <button onclick='esVisible("true")' type="button" class="btn btn-outline-warning">Public</button>
                    <button onclick='esVisible("false")'' type="button" class="btn btn-outline-secondary">Private</button>

                </div>

            </div>
            <hr>
            <div class="row">
                <div class="col-md text-center">
                    <button type="submit" class="btn btn-warning">Submit</button>
                </div>
            </div>
        </form>

    </div>

    <?php include 'footer.php' ?>
    <script src="js/createPhoto.js"></script>
</body>