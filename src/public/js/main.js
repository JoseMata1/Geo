   
    // Map initialization 
    //var map = L.map('map').setView([9.959000310162903, -84.10747635195314], 13);
    var map = L.map('map', {
        center: [9.959000310162903, -84.10747635195314],
        zoom: 13
       
    })

    
    const socket = io();

    //osm layer
    var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });
    osm.addTo(map);   
    map.locate({enbleHighAccuracy: true});

 map.on('locationfound', e => {
        const coords = [e.latlng.lat, e.latlng.lng];
        const marker = L.marker(coords); 
        marker.bindPopup('aqui estoy 1');
        map.addLayer(marker);
        const titulo = marker._popup._content
        coords.push(titulo)

        setInterval(() => {
       socket.emit('userCoordinates', coords);
       console.log('envio')
    }, 3000);
// ./ngrok http 3000
 });
        
 
     

    