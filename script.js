var menuBtn   = document.getElementById("menuBtn");
var sideNav   = document.getElementById("sideNav");
var menuStart = document.getElementById("menuStart");
var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedDuration: true
});

sideNav.style.right = "-250px";
menuBtn.onclick = function() {
    if (sideNav.style.right == "-250px") {
        sideNav.style.right = "0";
        menuStart.style.display = "none";
    }

    else {
        sideNav.style.right = "-250px";
        menuStart.style.display = "block";
    }
}

/**********Comment: The menuStart display style was added to this project. First Time ref: https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp
*************/


