
let prevScrollPos = window.pageYOffset;

window.onscroll = function() {
const currentScrollPos = window.pageYOffset;

if (prevScrollPos > currentScrollPos) {
    document.getElementById("menuIcon").style.top = "10px"; // Adjust the desired position when scrolling up
} else {
    document.getElementById("menuIcon").style.top = "-50px"; // Adjust the desired position when scrolling down
}

prevScrollPos = currentScrollPos;
};


        
function openNav() {
document.getElementById("mySidenav").style.width = "250px";
document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
document.getElementById("mySidenav").style.width = "0";
document.getElementById("main").style.marginLeft= "0";
}