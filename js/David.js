/*const btns = document.querySelectorAll('.btn');

    if(btns){
        btns.forEach(item => {
        item.addEventListener('click', function(event){
        let id = event.target.getAttribute('data-id');
        if(id){
        document.querySelector('.active').classList.remove('active');
        document.getElementById(id).classList.add('active');
        }
        })
    })
    }
    */
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

    
