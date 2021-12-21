function changeUsername() {
    document.getElementById("username").innerText = "Jaynne Dough";
}

function acceptRequest(el) {
    el.parentNode.parentNode.remove();
    document.getElementById("connectionsBubble").innerText++;
    if(document.getElementById("reqBubble").innerText == 1) {
        document.getElementById("reqBubble").remove();
    } else {
        document.getElementById("reqBubble").innerText--;
    }
}

function declineRequest(el) {
    el.parentNode.parentNode.remove();
    if(document.getElementById("reqBubble").innerText == 1) {
        document.getElementById("reqBubble").remove();
    } else {
        document.getElementById("reqBubble").innerText--;
    }
}