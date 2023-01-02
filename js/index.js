function openMenu(id,opener,closer){
    // function to display hidden menu
    var menu = document.getElementById(id);
    var opener = document.getElementById(opener);
    var closer= document.getElementById(closer);

    opener.style.display='none';
    closer.style.display='block';
    menu.style.display='block';
}

function closeMenu(id,opener,closer){
    // function to close menu
    var menu = document.getElementById(id);
    var opener = document.getElementById(opener);
    var closer= document.getElementById(closer);

    opener.style.display='block';
    closer.style.display='none';
    menu.style.display='none';
}

function sliderRight(id){
    var slide =document.getElementById(id);
    slide.scrollLeft+=565;
}

function sliderLeft(id){
    var slide =document.getElementById(id);
    slide.scrollLeft-=565;
}


