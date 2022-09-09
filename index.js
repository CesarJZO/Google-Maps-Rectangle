
function inicio() {
    let miMapa = new google.maps.Map(document.getElementById('mapa'), {
        center: { lat: 40, lng: -3.5 },
        zoom: 6
    });

    let verticesLinea = [
        { lat: 41.59, lng: -1.93 },
        { lat: 40.21, lng: -2.10 },
        { lat: 39.24, lng: -3.31 },
        { lat: 37.84, lng: -3.03 },
        { lat: 36.91, lng: -5.40 }
    ];

    let verticesPoligono = [
        { lat: 41.05, lng: -4.79 },
        { lat: 40.39, lng: -6.09 },
        { lat: 39.29, lng: -5.85 },
        { lat: 38.39, lng: -4.09 },
        { lat: 38.94, lng: -2.59 },
        { lat: 40.09, lng: -3.12 },
        { lat: 40.95, lng: -3.99 }
    ];

    let linea = new google.maps.Polyline({
        path: verticesLinea,
        map: miMapa,
        strokeColor: 'rgb(255, 0, 0)',
        strokeWeight: 2
    });

    let poligono = new google.maps.Polygon({
        path: verticesPoligono,
        map: miMapa,
        strokeColor: 'rgb(255, 0, 0)',
        fillColor: 'rgb(255, 255, 0)',
        strokeWeight: 4,
    });

    let popup = new google.maps.InfoWindow();

    poligono.addListener('click', function (e) {
        popup.setContent('Contenido');
        popup.setPosition(e.latLng);
        popup.open(miMapa);
    });
}
