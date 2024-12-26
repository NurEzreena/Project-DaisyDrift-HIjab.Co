
const minusButton = document.getElementById('minus');
const plusButton = document.getElementById('plus');
const inputField = document.getElementById('input');

minusButton.addEventListener('click', event => {
    event.preventDefault();
    let currentValue = Number(inputField.value) || 0;
    if (currentValue > 0) {
        inputField.value = currentValue - 1;
    }
});

plusButton.addEventListener('click', event => {
    event.preventDefault();
    const currentValue = Number(inputField.value) || 0;
    inputField.value = currentValue + 1;
});

inputField.addEventListener('input', event => {
    let currentValue = Number(inputField.value) || 0;
    if (currentValue < 0) {
        inputField.value = 0;
    }
});

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


var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
    content.style.display = "none";
    } else {
    content.style.display = "block";
    }
});
}