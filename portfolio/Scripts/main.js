$(document).ready(function () {
    // Transition effect for navbar 
        $(".menu-icon").on("click", function () {
            $("nav ul").toggleClass("showing");
        });

    });



$(window).scroll(function () {
    // checks if window is scrolled more than 500px, adds/removes solid class
    if ($(this).scrollTop()) {
        $('nav').addClass('black');
    } else {
        $('nav').removeClass('black');
    }
});


// Change style of navbar on scroll
window.onscroll = function () { myFunction() };
function myFunction() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " purple";
    } else {
        navbar.className = navbar.className.replace(" w3-card w3-animate-top purple", "");
    }
}

// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}





$("#myNavbar a[href^='#']").on('click', function (e) {

    // prevent default anchor click behavior
    e.preventDefault();

    // store hash
    var hash = this.hash;

    // animate
    $('html, body').animate({
        scrollTop: $(hash).offset().top
    }, 1000, function () {

        // when done, add hash to url
        // (default click behaviour)
        window.location.hash = hash;
    });

});


$(document).ready(function () {
    $(".message").hide();
    $(".message2").hide();
    $("span.readmore").click(function () {
        $(".message").slideToggle("slow");
    });

    $("span.readmore2").click(function () {
        $(".message2").slideToggle("slow");
    });
});