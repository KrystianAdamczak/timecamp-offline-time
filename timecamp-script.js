// ==UserScript==
// @name         Timecamp - missing time
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  set meeting for missing offline time for timecamp
// @author       You
// @match        https://app.timecamp.com/offline
// @icon         https://www.google.com/s2/favicons?sz=64&domain=timecamp.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var elements = document.getElementsByClassName('button-with-icon');
    if(elements.length > 0){

        if (confirm('Do you want to set an "meeting" for missing offline time?')) {
            var elemt = elements.length;
            for (var i = 0; i < elemt; i++) {
                elements[0].click();
            }
            setTimeout(function (){
                var elementsSave = document.getElementsByClassName('save');
                for (var i = 0; i < elemt; i++) {
                    elementsSave[0].click();
                }
            }, 1000);
        } else {
        }
    }
})();