<!doctype HTML>
<html>

<head>
  <?php include 'imports.php' ?>
  <title>Login</title>
</head>

<body>
  <?php include 'header.php' ?>

  <div class="container">

    <div class="row">
      <div class="col-md text-center">
        <h3>Log in</h3>
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
            <label for="email">Email:</label>
            <div class="input-group mb-2">
              <div class="input-group-prepend">
                <div class="input-group-text">@</div>
              </div>
              <input type="email" class="form-control" id="email" name="email" placeholder="Email">
            </div>
          </div>
        </div>

        <div class="col-md">
          <div class="form-group">
            <label for="password">Password:</label>
            <input type="password" class="form-control" id="password" name="password" placeholder="Contraseña">
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md text-center">
          <button type="submit" class="btn btn-warning">Login</button>
        </div>
      </div>

    </form>

  </div>

  <?php include 'footer.php' ?>
  <script src="js/login.js"></script>

</body>

</html>