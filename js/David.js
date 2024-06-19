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