var myIndex=0;
carousel();
function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}
  x[myIndex-1].style.display = "block";
  setTimeout(carousel, 3000);
}
function openshopPage() {
  window.location.href ="https://HTML-CSS-JS-4.aniketgaikwad9.repl.co";
}
function openaccountpage() {
  window.location.href ="https://HTML-CSS-JS-2.aniketgaikwad9.repl.co";
}
