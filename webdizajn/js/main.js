var span = document.querySelector('#menu span');
var ul = document.querySelector('#menu ul');
var clicked = false;
function menuActivate(){
    clicked = !clicked;
    if(clicked){
        console.log('prvi')
        span.classList.add('menuActivated');
        ul.classList.add('menuActivated');
        span.innerHTML = 'clear';
        span.style.color = "red";
    }else{
        span.classList.remove('menuActivated');
        ul.classList.remove('menuActivated');
        span.innerHTML = 'menu';
        span.style.color = "#fff";
    }

}