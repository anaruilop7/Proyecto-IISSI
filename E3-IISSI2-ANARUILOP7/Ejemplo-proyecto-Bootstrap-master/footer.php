<hr>
<p class="footer" id="footer">© IISSI-2 - </p>

<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" crossorigin="anonymous"></script>
<script src="js/scripts.js"></script>

<script>
    let currentYear = new Date().getFullYear();
    let footer = document.getElementById("footer");
    footer.innerHTML += currentYear;
</script>