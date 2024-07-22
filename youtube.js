var menuIcon= document.querySelector(".menu-icon");
var sidebar= document.querySelector(".side-bar");
var containers = document.querySelector(".container");

menuIcon.onclick = function(){
    sidebar.classList.toggle("small-sidebar");
    containers.classList.toggle("contain");
}



var btcouleur= document.querySelector(".couleur");
var navigation = document.querySelector(".mynav");
var containerss = document.querySelector(".container");
var sidebars= document.querySelector(".side-bar");
var menuh= document.querySelector(".favoa");



btcouleur.onclick = function(){
    sidebars.classList.toggle("ibsidebar");
    navigation.classList.toggle("ibnav");
    containerss.classList.toggle("ibcontainer");
    menuh.classList.toggle("menuhaut");

}
