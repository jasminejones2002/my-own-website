/*
const h2 = document.createElement("h2");
h2.textContent = "Who is Jasmine?";
document.querySelector("body").appendChild(h2);
h2.remove();
*/
function clickHere(funsurprise) {
   const button = document.getElementById("HERE").click();
   button.addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    link.textcontent = "HERE";
    document.body.appendChild(link);
   });
}
