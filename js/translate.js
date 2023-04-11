let check=document.querySelector('.nav__check');
check.addEventListener('click',language);

function language(){
    let id=check.checked;
    if (id==true){
        location.href="english/index.html"
    }
    else{
        location.href="../index.html"
    }
}