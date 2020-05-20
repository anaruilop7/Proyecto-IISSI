<div class="title-block">
  <h1 id="title"> scatto <i class="fa fa-camera-retro fa-1g" aria-hidden="true"></i></h1>
  <h3 id="subtitle">it's just a click away!</h3>

  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" id="newpic" href="newpic.php"><i class="fa fa-camera-retro" aria-hidden="true"></i>
  
</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="index.php">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="register" href="register.php">Sign up </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="Profile" href="usuario.php">Profile</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="login" href="login.php">Login</a>
        
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDesplegableId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Trending
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <a class="dropdown-item" href="usuarios_trending.php">Trending users</a>
            <a class="dropdown-item" href="trending_photos.php">Trending photos</a>
            <a class="dropdown-item" href="tags_trending.php">Trending tags</a>
          </div> 
        </li>
        <li>
        <li class="nav-item">
                    <a class="nav-link" id="logout" onclick="logout()" href="index.php">Logout</a>
                </li>

         <li class="espacio">
          <a class="nav-link" href="">     </a>
        </li>

        <li class="espacio">
          <a class="nav-link" href="">     </a>
        </li>

        <li class="espacio">
          <a class="nav-link" href="">     </a>
        </li>

        <li class="espacio">
          <a class="nav-link" href="">     </a>
        </li>
        <li class="espacio">
          <a class="nav-link" href="">     </a>
        </li>

        <li class="espacio">
          <a class="nav-link" href="">     </a>
        </li>

        <li class="espacio">
          <a class="nav-link" href="">     </a>
        </li>

        <li class="espacio">
          <a class="nav-link" href="">     </a>
        </li>

        <li class="espacio">
          <a class="nav-link" href="">     </a>
        </li>

        <li class="espacio">
          <a class="nav-link" href="">     </a>
        </li>

        <li class="espacio">
          <a class="nav-link" href="">     </a>
        </li>

        <li class="espacio">
          <a class="nav-link" href="">     </a>
        </li>


        <li class="espacio">
          <a class="nav-link" href="">     </a>
        </li>

        <li class="espacio">
          <a class="nav-link" href="">     </a>
        </li>

        <li class="espacio">
          <a class="nav-link" href="">     </a>
        </li>

        <li class="espacio">
          <a class="nav-link" href="">     </a>
        </li>


        <li class="espacio">
          <a class="nav-link" href="">     </a>
        </li>

        <li class="espacio">
          <a class="nav-link" href="">     </a>
        </li>

        <li class="espacio">
          <a class="nav-link" href="">     </a>
        </li>

        <li class="espacio">
          <a class="nav-link" href="">     </a>
        </li>
        <li class="espacio">
          <a class="nav-link" href="">     </a>
        </li>

        <li class="espacio">
          <a class="nav-link" href="">     </a>
        </li>

        <li class="espacio">
          <a class="nav-link" href="">     </a>
        </li>

        <li class="espacio">
          <a class="nav-link" href="">     </a>
        </li>
        <li class="espacio">
          <a class="nav-link" href="">     </a>
        </li>

        <li class="espacio">
          <a class="nav-link" href="">     </a>
        </li>

        <li class="espacio">
          <a class="nav-link" href="">     </a>
        </li>

        <li class="espacio">
          <a class="nav-link" href="">     </a>
        </li>
        <li class="espacio">
          <a class="nav-link" href="">     </a>
        </li>

        <li class="espacio">
          <a class="nav-link" href="">     </a>
        </li>

        <li class="espacio">
          <a class="nav-link" href="">     </a>
        </li>

        <li class="espacio">
          <a class="nav-link" href="">     </a>
        </li>
        <li class="espacio">
          <a class="nav-link" href="">     </a>
        </li>

        <li class="espacio">
          <a class="nav-link" href="">     </a>
        </li>

        <li class="espacio">
          <a class="nav-link" href="">     </a>
        </li>

        <li class="espacio">
          <a class="nav-link" href="">     </a>
        </li>
        <li class="espacio">
          <a class="nav-link" href="">     </a>
        </li>

        <li class="espacio">
          <a class="nav-link" href="">     </a>
        </li>

        <li class="espacio">
          <a class="nav-link" href="">     </a>
        </li>

        <li class="espacio">
          <a class="nav-link" href="">     </a>
        </li>
        
        <a class="navbar-brand" href="#" id="showUsername"></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
</li>


    </div>
  </nav>
</div>

<hr>


<script>
let username = isLogged() ? "Welcome back, " + localStorage.getItem("userName") : "Please, log in";
$("#showUsername").text(username);

if(getToken()==null){
    $("#logout").remove();
    $("#Profile").remove();
    $("#newpic").remove();
    $("#navbarDesplegableId").remove();
}
else{
    $("#register").remove();
    $("login").remove();
}
</script>



<script src="js/login.js"></script>


