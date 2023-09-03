let box = document.getElementById('box');
let view = window.innerWidth;
let viewHeight = window.innerHeight;
box.addEventListener("mouseover", function() {
    let boxAttr = box.getBoundingClientRect();
    let pos = getNewPosition(boxAttr.width, boxAttr.height);
    box.style.top = pos.y + "px";
    box.style.left = pos.x + "px";
});
function getNewPosition(boxWidth, boxHeight) {
    var newX = Math.floor((Math.random() * view)  - boxWidth);
    var newY = Math.floor((Math.random() * viewHeight)  - boxHeight);
    if(newX < 0) {
        newX = 0;
    }
    if(newY < 0) {
        newY = 0;
    }
    return {x: newX, y: newY};
}