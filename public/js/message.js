
document.querySelector(".messages").animate({ scrollTop: document });

document.querySelector("#profile-img").click(function() {
    document.querySelector("#status-options").toggleClass("active");
});

document.querySelector(".expand-button").click(function() {
    document.querySelector("#profile").toggleClass("expanded");
    document.querySelector("#contacts").toggleClass("expanded");
});

document.querySelector("#status-options ul li").click(function() {
    document.querySelector("#profile-img").removeClass();
    document.querySelector("#status-online").removeClass("active");
    document.querySelector("#status-away").removeClass("active");
    document.querySelector("#status-busy").removeClass("active");
    document.querySelector("#status-offline").removeClass("active");
    document.querySelector(this).addClass("active");
	
    if($("#status-online").hasClass("active")) {
        document.querySelector("#profile-img").addClass("online");
    } else if ($("#status-away").hasClass("active")) {
        document.querySelector("#profile-img").addClass("away");
    } else if ($("#status-busy").hasClass("active")) {
        document.querySelector("#profile-img").addClass("busy");
    } else if ($("#status-offline").hasClass("active")) {
        document.querySelector("#profile-img").addClass("offline");
    } else {
        document.querySelector("#profile-img").removeClass();
    };
	
    document.querySelector("#status-options").removeClass("active");
});

window.addEventListener('onkeydown', function(e) {
if (e.which == 13) {
    newMessage();
    return false;
}
});

// sourceURL=pen.js
