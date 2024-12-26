
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        var content = this.nextElementSibling;

        // Close all other open content
        for (var j = 0; j < coll.length; j++) {
            if (coll[j] !== this) {
                coll[j].classList.remove("active");
                coll[j].nextElementSibling.style.display = "none";
            }
        }

        // Toggle the active class on the clicked button
        this.classList.toggle("active");

        // Toggle the display of the content
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}

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