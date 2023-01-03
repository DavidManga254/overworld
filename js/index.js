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

var classes=document.getElementsByClassName('slidernews')
var slide = document.getElementById('mslide')
const observer = new IntersectionObserver((entries)=>{
    if(entries[0].isIntersecting){
        setTimeout(function(){
            for(var i=0;i<=2;i++){
                var theclone = classes[i].cloneNode(true);
                slide.appendChild(theclone)
                console.log('appended')
            }
            observer.unobserve(last);
            last = slide.lastElementChild;
            observer.observe(last);
        },500);  
    }
})

var last;
function sliderRight(id){
    var slide =document.getElementById(id);
    slide.scrollLeft+=500;
    last=slide.lastElementChild
    observer.observe(last)
}



function sliderLeft(id){
    var slide =document.getElementById(id);
    slide.scrollLeft-=500;
}

