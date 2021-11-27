var camname = document.querySelector("#camera-name").textContent.replaceAll(/[A-Z]/ig,'').replaceAll(" ",'').replaceAll('<', '').replaceAll('>', '')

// https://stackoverflow.com/a/2314027/
function fetchHeader(url, wch) {
    try {
        var req=new XMLHttpRequest();
        req.open("HEAD", url, false);
        req.send(null);
        if(req.status== 200){
            return req.getResponseHeader(wch);
        }
        else return false;
    } catch(er) {
        return er.message;
    }
}

if(camname === '01') {
   var url = 'https://poppyplaytimeco.com/assets/hub_cam01.gif'
} else if (camname === '08') {
   url = 'https://poppyplaytimeco.com/assets/machine_room_cam01.gif'
} else if (camname === '27') {
   url = 'https://poppyplaytimeco.com/assets/catwalk_cam01.gif'
}

alert(fetchHeader(url,'Last-Modified'));
