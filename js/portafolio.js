function show() {
    var box = document.getElementById("box");
    box.style.display = "block";
    box.addEventListener("click", hidden);
  }
  
  function hidden() {
    var box = document.getElementById("box");
    box.style.display = "none";
    box.removeEventListener("click", hidden);
  }
  