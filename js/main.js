function unhideAboutDiv() {
    var x = document.getElementById("info");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }