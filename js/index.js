$(document).ready(function(){
    var monArr = ["Jan.", "Feb.", "Mar.", "Apr.", "May.", "Jun.", "July.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."];
    var date = new Date();
    $("#weatherBar-date").html("<h4>"+date.getDate()+" "+monArr[date.getMonth()*1]+"</h4>");
    var geolocation = new BMap.Geolocation();
    geolocation.getCurrentPosition(function(r){
        if(this.getStatus() == BMAP_STATUS_SUCCESS){
            $("#weatherBar-city").html('<h5><span class=\"fui-location\"></span>'+r.address.city+'</h5>');
            $.ajax({
                url: "http://api.openweathermap.org/data/2.5/weather?appid=5471c7b82f8273ec8e7eb428e263e172&lat="+r.point.lat+"&lon="+r.point.lng,
                type: "GET",
                dataType: "json",
                success: function(json){
                    var weather = json.weather[0].main;
                    var temperature = parseInt(json.main.temp*1-273);
                    $("#weatherBar-bottom").html(temperature+"°");
                    var weatherHtml = "";
                    switch(weather){
                        case "Clear":
                            weatherHtml = "<div class='icon'><div class=\"sun\"> <div class=\"rays\"></div></div></div>";
                            break;
                        case "Clouds":
                            weatherHtml = "<div class='icon'><div class=\"cloud\"></div><div class=\"cloud\"></div><div>";
                            break;
                        case "Rain":
                            weatherHtml = "<div class='icon'><div class=\"cloud\"></div><div class=\"rain\"></div></div>";
                            break;
                        case "Thunderstorm":
                            weatherHtml = "<div class='icon'><div class=\"cloud\"></div><div class=\"lightning\"><div class=\"bolt\"></div><div class=\"bolt\"></div> </div></div>";
                            break;
                        case "Snow":
                            weatherHtml = "<div class='icon'><div class=\"cloud\"></div><div class=\"snow\"><div class=\"flake\"></div><div class=\"flake\"></div></div></div>";
                            break;
                    }
                    console.log(weatherHtml);
                    $("#weatherBar-icon").html(weatherHtml);
                }
            });
        }
        else {
            console.log("Error in getting geolocation.");
        }
    },{enableHighAccuracy: false})
});