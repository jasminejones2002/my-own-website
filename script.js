/*
const h2 = document.createElement("h2");
h2.textContent = "Who is Jasmine?";
document.querySelector("body").appendChild(h2);
h2.remove();
*/

document.addEventListener("DOMContentLoaded", function() {
   const images = document.querySelectorAll(".zoomable-image");
 
   images.forEach(function(image) {
     image.addEventListener("click", function() {
       image.classList.toggle("zoomed");
      });
   });
});
