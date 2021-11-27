var camname = document.querySelector("#camera-name").textContent.replaceAll(/[A-Z]/ig,'').replaceAll(" ",'').replaceAll('<', '').replaceAll('>', '')

// https://stackoverflow.com/a/2314027/
function fetchHeader(a, b) {
    try {
        var c = new XMLHttpRequest();
        return (
            c.open("HEAD", a, !1),
            c.send(null),
            200 == c.status && c.getResponseHeader(b)
        );
    } catch (a) {
        return a.message;
    }
}

if ("01" === camname)
    var url = "https://poppyplaytimeco.com/assets/hub_cam01.gif";
else
    "08" === camname
        ? (url = "https://poppyplaytimeco.com/assets/machine_room_cam01.gif")
    : "27" === camname &&
        (url = "https://poppyplaytimeco.com/assets/catwalk_cam01.gif");
alert(fetchHeader(url, "Last-Modified"));
