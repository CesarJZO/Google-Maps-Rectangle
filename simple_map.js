let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 41.89022, lng: 12.49223 },
        zoom: 18
    });
}

window.initMap = initMap;
