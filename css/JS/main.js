let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 12.092618030810716, lng: 77.30401018765784 },
    zoom: 8,
  });
}
