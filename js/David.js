//cambiar cards 
function moreinfo(){
    var div = document.getElementById("cardinfo");
    if (div.style.height === "520px"){
        div.style.height = "108px";
        div.style.backgroundColor = "blue";
        div.style.color = "#011E41";
    }
    else {
        div.style.height = "520px";
        div.style.backgroundColor = "#011E41";
        div.style.color = "white";       
    }           
    }
    function popup() {
        var x = document.getElementById("popup");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }
    function popregresar() {
        var x = document.getElementById("popup");
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
        }
    }
