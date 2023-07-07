var coordinates = {}

$(document).ready(function () {
    getCoordinates()
})
//ar_navigation.html?source=${latitude};${longitude}&destination=${destination.lat};${destination.lng}
function getCoordinates() {
 var searchParams = new URLSearchParams(window.location.search);
 if (searchParams.has('source')&& searchParams.has('destination')){
    var source = searchParams.get('source')
    var destination = searchParams.get('destination')
    coordinates.source_lat = source.split(';')[0]
    coordinates.destination_lat = destination.split(';')[0]
    coordinates.source_long = source.split(';')[1]
    coordinates.destination_long = destination.split(';')[1]
 }else{
    alert("Coordinates are not selected");
    window.history.back();
 }
}