document.querySelector(".messages").animate({ scrollTop: document });
let messa=  document.querySelector(".messages")
document.querySelector(".messages").scrollTop=messa.scrollTopMax



document.querySelector("#profile-img").addEventListener('click',(e)=> {
    document.querySelector("#status-options").classList.toggle("active");
});

document.querySelector(".expand-button").addEventListener('click',(e)=>{
    document.querySelector("#profile").classList.toggle("expanded");
    document.querySelector("#contacts").classList.toggle("expanded");
});

document.querySelectorAll("#status-options ul li").forEach((stat)=>{
    stat.addEventListener('click',(e)=>{
        document.querySelector("#profile-img").classList.remove();
        document.querySelector("#status-online").classList.remove("active");
        document.querySelector("#status-away").classList.remove("active");
        document.querySelector("#status-busy").classList.remove("active");
        document.querySelector("#status-offline").classList.remove("active");
        
        stat.classList.add("active");
        
        if(document.querySelector("#status-online")
        .classList.contains("active")) {
            document.querySelector("#profile-img").classList.add("online");
            statuss('online')
        } else if (document.querySelector("#status-away").classList.contains("active")) {
            document.querySelector("#profile-img").classList.add("away");
            statuss('away')
        } else if (document.querySelector("#status-busy").classList.contains("active")) {
            document.querySelector("#profile-img").classList.add("busy");
            statuss('busy')
            
        } else if (document.querySelector("#status-offline").classList.contains("active")) {
            document.querySelector("#profile-img").classList.add("offline");
            statuss('offline')
        } else {
            document.querySelector("#profile-img").classList.remove();
        };       
        document.querySelector("#status-options").classList.remove("active");
    });
})

window.addEventListener('onkeydown', function(e) {
if (e.which == 13) {
    newMessage();
    return false;
}
});

// sourceURL=pen.js
