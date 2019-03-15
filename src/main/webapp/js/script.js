
var dataArray = [];
$( document ).ready(function() {


    $.ajax({
        url: "https://data.cityofnewyork.us/resource/nwxe-4ae8.json",
        type: "GET",
        data: {
            "$limit" : 50,
            "$$app_token" : "GzhdobtDfIvbeUcZCvG5t35nT"
        }
    }).done(function(data) {
        dataArray = data;
        for(var k = 0; k < data.length; k++){
            var o = data[k];
            var c = "<div class='item'> "
                +"<span onclick=\"this.parentNode.style.display = 'none';\""+ ">x</span>"

                +" <ul> <li>" + "Adress :" + o.address + "</li>"
                + "<li> Specie Name :" + o.spc_common + "</li>"
                + "<li> Borough Name :" + o.boroname + "</li>" + "</ul>"

                +"<input type='button' value='See More' onclick='display("+k+")'></input>   </div>";
            $("#container").append(c);

        }
        display(0);
    });

});


function display(i){
    $("#extradisplay").empty();
    var obj= dataArray[i];
    var c = "<div class='buy'> <ul>";
    for(o in obj)
        c += "<li>"+ o +" :" + obj[o] +"</li>";

    c += "</ul></div>";
    $("#extradisplay").append(c);

}

