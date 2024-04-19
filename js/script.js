function init(){
  var button = document.getElementById("submit");
  var input = document.getElementById("name");
  button.addEventListener("click", myFunction);
 
  function myFunction() {
    if (input.value.length == 0) {
      text = ('Please Enter Your Contact Info!');
      alert(text);
    } else if(){
      text = ('Thank you ' + input.value + ', you should receive a text message soon!');
      alert(text);
    }
  }
}
function initMap(){
  const myLatLng = {lat: 41.257210, lng: -95.965462};
  const map = new google.maps.Map(document.getElementById("map"), {zoom: 20, center: myLatLng,});
  
  const marker = new google.maps.Marker({
    position: myLatLng,
    map,
    title: "IIT",
  }); 
  
  marker.addListener("click", () =>
    {infowindow.open({anchor: 
      marker, map, });
      });
}
window.addEventListener('load', init);
window.initMap = initMap;
