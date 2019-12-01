function openNav() {
    document.getElementById("myNav").style.width = "100%";
}
  
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
} 

var slideIndex = 1;
mostrarDiv(slideIndex);

function mudarDiv(n) {
    mostrarDiv(slideIndex += n);
}

function mostrarDiv() {
  var i;
  var slides = document.getElementsByClassName("meusSlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(mostrarDiv, 5000); // muda imagem a cada 3 segundos
}
