const button = document.getElementById("myDIV")

function myFunction() {
    var x = document.getElementById("divInstructions");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

button.addEventListener("click",myFunction)  