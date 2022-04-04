function transform_to_active(element) {
    var els = document.getElementsByClassName("navbar-link");

    for (var i = 0; i < els.length; i++) {
        els[i].style.color = "white"
    }
    element.style.color = 'rgb(193, 31, 31)'

    var id = element.id;
    console.log(id);
    id = id + "_";
    console.log(id);
    /*const Myelement = document.getElementById(id);
    Myelement.scrollIntoView();
*/
    var element = document.getElementById(id);
    var headerOffset = 50;
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });

}