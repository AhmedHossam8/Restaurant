function transform_to_active(element) {
    var els = document.getElementsByClassName("navbar-link");
    
    for(var i=0; i<els.length; i++){
        els[i].style.color = "white"
    }
    element.style.color = 'rgb(193, 31, 31)'
}