function init(){
  var button = document.getElementById("submit");
  var input = document.getElementById("name");
  button.addEventListener("click", myFunction);
 
  function myFunction() {
    text = ('Thank you ' + input.value + ', you should receive a text message soon!');
    alert(text);
  }
  
  const myLatLng = {lat: 41.257210, lng: -95.965462};
  const map = new google.maps.Map(document.getElementById("map"), {zoom: 15, center: myLatLng,});

}
window.addEventListener('load', init);
window.init = init;
