// ==UserScript==
// @name         Unstat
// @version      2.7
// @description  Unstatic Images, and Bright the images in the poppy playtime site.
// @author       poggersbutnot
// @match        *://poppyplaytimeco.com/*
// @icon         https://poppyplaytimeco.com/assets/icon.jpg
// @grant        none
// ==/UserScript==

"use strict";

function _newArrowCheck(a, b) {
  if (a !== b) throw new TypeError("Cannot instantiate an arrow function");
}
!(function () {
    var b = this;
    !(function (a) {
        document.getElementsByTagName('style')[0].textContent = a
    })(
        "\n    \n    @font-face {\n        font-family: 'VCR OSD Mono';\n        font-style: normal;\n        font-weight: normal;\n        src: local('VCR OSD Mono'), url('assets/fontVCR.woff') format('woff');\n        }\n        body {\n          user-select: none;\n          color: white;\n          background-color: black;\n          margin: 0;\n          padding: 0;\n          width: 100%;\n          height: 100%;\n          position: fixed;\n        }\n        a {\n          text-decoration: none;\n          color: white;\n        }\n        .camera-hud {\n          font-family: 'VCR OSD Mono';\n          font-size: 3em;\n          background-color: black;\n          width: auto;\n          height: auto;\n          z-index: 4;\n          left: 1em;\n          position: fixed;\n        }\n        .camera-info {\n          font-family: 'VCR OSD Mono';\n          font-size: 1.5em;\n          width: auto;\n          height: auto;\n          z-index: 4;\n          line-height: 1.25em;\n          top: 2em;\n          right: 2em;\n          text-shadow: 0.125em 0.125em black;\n          text-align: right;\n          position: fixed;\n        }\n        #camera-name {\n          bottom: 1em;\n          cursor: pointer;\n        }\n        #camera-time {\n          top: 1em;\n        }\n        .camera-container img {\n          width: 100%;\n          position: fixed;\n          left: 50%;\n          top: 50%;\n          transform: translate(-50%, -50%);\n          pointer-events: none;\n        }\n        .camera-container button {\n          width: 30%;\n          height: 20%;\n          position: fixed;\n          left: 50%;\n          top: 50%;\n          transform: translate(-50%, -50%);\n        }\n        @keyframes staticidle {\n          0% { opacity: 0%; }\n        }\n        @keyframes staticblip {\n          0% { opacity: 0%; }\n\n        }\n      "
        );
    updateTime = function updateTime() {};
    changeCameraScreen = function () {(currentCamKey = (currentCamKey + 1) % cameraData.length),(imageElement.style.animation = "none"),imageElement.offsetHeight,(imageElement.style.animation = null),setCameraImageAndName(currentCamKey);};

        var remElem = function(c) {
             _newArrowCheck(this, b),
             "undefined" === typeof document['getElementsByClassName'](c)[0]
             ? document['getElementById'](c)['remove']()
             : document['getElementsByClassName'](c)[0]['remove']();
        }.bind(this)
        Window.prototype.onLoad = (window, function() {
            document['getElementsByClassName']("camera-container")[0]['children'][5]['remove']();remElem("camera-info")%remElem("camera-time");document['getElementsByClassName']("camera-container")[0]['children'][3]['remove']();document['querySelector']("body > div > img:nth-child(1)")['remove']()
        })()
        let input = document.createElement("input");
        input.type = "number";input.max = 500;input.min = 25;input.step = 10;input.value = 150;input.placeholder = "Brightness";input.id="brightlev"
        document.body.insertBefore(input, document.body.firstChild);
        document.getElementsByTagName('style')[0].textContent +=
        "\n        input {\n            font-family: 'VCR OSD Mono';\n            font-size: 1.5em;\n            width: auto;\n            height: auto;\n            z-index: 4;\n            line-height: 1.25em;\n            top: 2em;\n            right: 2em;\n            text-shadow: 0.125em 0.125em black;\n            text-align: right;\n            position: fixed;\n          }"
        setInterval(function() {
            document.getElementsByTagName('style')[0].textContent +=  "\n            img {\n                filter: brightness(" +
            input.value +
            "%);\n            }";
        }, 100);
})();
