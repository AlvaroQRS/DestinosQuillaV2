// class Localizacion{
//     constructor(callback){
//         if(navigator.geolocation){
//             navigator.geolocation.getCurrentPosition((position)=>{
//                 this.latitude = position.coords.latitude;
//                 this.longitude = position.coords.longitude;
//                 callback();
//             });
//         }else{
//             alert('tu navegador no soporta geolocalizacion')

//         }
//     }
// }

// const my_place = {
//     lat: -12.863585,
//     lng: -72.694632,
// }
// function initMap(){
//     const ubicacion = new Localizacion(()=>{
//         const options = {
//             center: {
//                 lat: -12.863585,
//                 lng: -72.694632,
//             },
//             zoom: 18
//         }
//         var map = document.getElementById('map');
//         const mapa = new google.maps.Map(map, options);
//         UserLocation.get((coords)=>{
//            let origen  = new google.maps.Latlng(coords.lat,coords.lng); 
//            let destino = new google.maps.Latlng(my_place.lat,my_place.lng);
           
//            let service = new google.maps.DistanceMatrixService()
//            service.getDistanceMatrix({
//                origins: [origen],
//                destinations: [destino],
//                travelMode: google.maps.travelMode.DRIVING
//            },(response,status)=>{
//                if(status === google.maps.DistanceMatrixStatus.OK){
//                    const duration_element = response.row[0].elements[0];
//                    console.log(duration_element)
//                }
//            })
//         })
//     });
    
// }
// var marker = new google.maps.Marker({
//     position: my_place,
//     map:  map,
//     title: "Destinos"

// });
var map;
function initMap() {
  var destinos =  {lat: -12.863585, lng: -72.694632,};
  var map = new google.maps.Map(document.getElementById('map'),{zoom: 17, center: destinos});
  var marker = new google.maps.Marker({position: destinos, map: map, title: "Destinos Quillabamba"});
}
// ;(function(){
//     google.maps.event.addDomListener(window,"load",()=>{
//         const map = new google.maps.Map(document.getElementById('map'),
//         {
//             center:{
//                 lat: -12.863585,
//                 lng: -72.694632
//             },
//             zoom: 17
//         }
//         )
//     })
// })()