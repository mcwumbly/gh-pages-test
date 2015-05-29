var nav = document.getElementsByClassName('nav')[0];
var mc = new Hammer(nav);

// listen to events...
mc.on("panleft", function(ev) {
  var link = document.getElementsByClassName('previous-artwork')[0].href
  window.location.href = link; 
});
mc.on("panright", function(ev) {
  var link = document.getElementsByClassName('next-artwork')[0].href
  window.location.href = link; 
});
