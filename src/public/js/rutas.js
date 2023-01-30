   
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


    const marker = L.marker([0,0]).addTo(map);  
   
  
   //     socket.on('newUserCoordinates', (coords) => {     
     //       const marker = L.marker(coords);
      //      marker.bindPopup(coords[2]);   
     //       map.addLayer(marker);
         
         // marker.setLatLng(coords);

     
      //      socket.emit('userCoordinates', coords);
      //      console.log('Nueva ruta')
      
          
        
      //   });      

            
         socket.on('newUserCoordinates', (coords) => {    
           
                              
             //    map.removeLayer(marker)
               
                    const marker = L.marker(coords);
           
                    marker.bindPopup(coords[2]);   
                    map.addLayer(marker);
                 
                 // marker.setLatLng(coords);
                 console.log(coords)
                    socket.emit('userCoordinates', coords);
                   
                    setTimeout(() => {
                        map.removeLayer(marker)
                        console.log("4 segundos.");
                      }, 4000)
            
         
            
          
        
         });
        
         



   
 