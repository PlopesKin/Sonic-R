const sonic = document.getElementById("sonic");
function jump() {
    if (sonic.classList != "jump") {
        sonic.classList.add("jump");
        
        setTimeout(function () {
            sonic.classList.remove("jump");
        }, 400);
    }   
}

document.addEventListener("keydown", function (event) {
    jump();
});