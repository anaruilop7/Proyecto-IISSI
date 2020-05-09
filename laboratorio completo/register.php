<!doctype HTML>
<html>

<head>
    <?php include 'imports.php' ?>
    <title>Register</title>
</head>

<body>
    <?php include 'header.php' ?>

    <div class="container">

        <div class="row">
            <div class="col-md text-center">
                <h3>Registrer</h3>
            </div>
        </div>

        <hr>

        <div class="row">
            <div class="col-md" id="errors-container">
            </div>
        </div>

        <form onsubmit="return validateForm()">
            <div class="row">
                <div class="col-md">
                    <div class="form-group">
                        <label for="nombre">Name:</label>
                        <input type="text" class="form-control" id="nombre" name="nombre" placeholder="Name">
                    </div>
                </div>

                <div class="col-md">
                    <div class="form-group">
                        <label for="apellidos">Surname:</label>
                        <input type="text" class="form-control" id="apellidos" name="apellidos" placeholder="Surname">
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-md">
                    <div class="form-group">
                        <label for="telefono">Telephone:</label>
                        <input type="telephone" class="form-control" id="telefono" name="telefono"
                            placeholder="Telephone">
                    </div>
                </div>

                <div class="col-md">
                    <div class="form-group">
                        <label for="email">Email:</label>
                        <div class="input-group mb-2">
                            <div class="input-group-prepend">
                                <div class="input-group-text">@</div>
                            </div>
                            <input type="email" class="form-control" id="email" name="email" placeholder="Email">
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-md">
                    <div class="form-group">
                        <label for="usuario">User:</label>
                        <input type="text" class="form-control" id="usuario" name="usuario" placeholder="User">
                    </div>
                </div>

                <div class="col-md">
                    <div class="form-group">
                        <label for="password1">Password:</label>
                        <input type="password" class="form-control" id="password1" name="password1"
                            placeholder="Contraseña">
                    </div>
                </div>

                <div class="col-md">
                    <div class="form-group">
                        <label for="password2">Repeat password:</label>
                        <input type="password" class="form-control" id="password2" name="password2"
                            placeholder="Repeat password">
                    </div>
                </div>

            </div>

            <div class="row">
                <div class="col-md text-center">
                    <button type="submit" class="btn btn-warning">Sign up</button>
                </div>
            </div>

        </form>

    </div>

    <?php include 'footer.php' ?>
    <script src="js/register.js"></script>

</body>

</html>
