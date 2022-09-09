let map;

let polygon;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 41.89022, lng: 12.49223 },
        zoom: 18
    });

    polygon = new google.maps.Polygon();
}

window.initMap = initMap;
