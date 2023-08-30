var menuicon = document.querySelector(".menu")
var sidebar = document.querySelector(".sidebar")
var mainbox = document.querySelector(".main-box")

menuicon.onclick = function(){
    sidebar.classList.toggle("hidden-sidebar")
    mainbox.classList.toggle("large-main-box")
}
