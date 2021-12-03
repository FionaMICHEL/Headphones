
window.onload = function() {
// creation hover img

let hover = document.querySelectorAll('.headphone');

// Ce gestionnaire sera exécuté à chaque fois que le curseur
// se déplacera sur un autre élément de la liste
for (i=0; i<hover.length; i++){

hover[i].addEventListener("mouseover", function() {

  this.style.filter = "brightness(50%)";
  
})
}

for (i=0; i<hover.length; i++){

    hover[i].addEventListener("mouseout", function() {
    
      this.style.filter = "brightness(100%)";
      
    })
    }


    

}