$(document).ready(function(){
   console.log("hehe");
    $.ajax({
        url: "http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=json&ip=123.123.123.123",
        type: "GET",
        dataType: "json",
        success: function(json){
            console.log(json);
        }
    });
});