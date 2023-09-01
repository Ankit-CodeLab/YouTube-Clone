/*----------------------------------------------------Side Bar-----------------------------------------------------*/

var menuicon = document.querySelector(".menu")
var sidebar = document.querySelector(".sidebar")
var mainbox = document.querySelector(".main-box")

menuicon.onclick = function(){
    sidebar.classList.toggle("hidden-sidebar")
    mainbox.classList.toggle("large-main-box")
}

/*---------------------------------------------------Search Bar----------------------------------------------------*/

function hide() {

var div = document.getElementById("hide");  
var div2 = document.getElementById("hide2");  
var div3 = document.getElementById("hide3"); 
var show = document.getElementById("show"); 
var show2 = document.getElementById("show2"); 
var show3 = document.getElementById("show3"); 
var close = document.getElementById("search-close"); 
var close2 = document.getElementById("close"); 

    if(div.style.display === "none") {
        div.style.display = "flex";
        div2.style.display = "block";
        div3.style.display = "flex";
        show.style.display = "none";
        show2.style.display = "none";
        show3.style.display = "none";
        close.style.display = "none";
        close2.style.display = "none";
    }
    else {
        div.style.display = "none";
        div2.style.display = "none";
        div3.style.display = "none";
        show.style.display = "flex";
        show2.style.display = "block";
        show3.style.display = "block";
        close.style.display = "block";
        close2.style.display = "block";
    }
}

function show() {
    var div = document.getElementById("hide");  
    var div2 = document.getElementById("hide2");  
    var div3 = document.getElementById("hide3"); 
    var show = document.getElementById("show"); 
    var show2 = document.getElementById("show2"); 
    var show3 = document.getElementById("show3"); 
    var close = document.getElementById("search-close"); 
    var close2 = document.getElementById("close"); 

    if(div.style.display === "none") {
        div.style.display = "flex";
        div2.style.display = "flex";
        div3.style.display = "flex";
        show.style.display = "none";
        show2.style.display = "none";
        show3.style.display = "none";
        close.style.display = "none";
        close2.style.display = "none";
    }
    else {
        div.style.display = "none";
        div2.style.display = "none";
        div3.style.display = "none";
        show.style.display = "flex";
        show2.style.display = "block";
        show3.style.display = "block";
        close.style.display = "block";
        close2.style.display = "block";
    }
}

var creatorName = "ANKIT";
    document.getElementById("creator").textContent = "Page created by: " + creatorName;

const searchInput = document.getElementById('show2');
const searchButton = document.getElementById('show3');

searchButton.addEventListener('click', () => {
  const searchTerm = searchInput.value;
  const selectedOption = document.querySelector(`#options option[value="${searchTerm}"]`);
  if (selectedOption) {
    const link = selectedOption.getAttribute('data-link');
    window.location.href = link;
  }
});
