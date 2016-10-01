$(document).ready(function(){
   console.log("hehe");


    var geolocation = new BMap.Geolocation();
    geolocation.getCurrentPosition(function(r){
        if(this.getStatus() == BMAP_STATUS_SUCCESS){
            $.ajax({
                url: "http://api.openweathermap.org/data/2.5/weather?appid=5471c7b82f8273ec8e7eb428e263e172&lat="+r.point.lat+"&lon="+r.point.lng,
                type: "GET",
                dataType: "json",
                success: function(json){
                    console.log("got location");
                    console.log(json);
                }
            });
        }
        else {
            console.log("Error in getting geolocation.");
        }
    },{enableHighAccuracy: false})
});