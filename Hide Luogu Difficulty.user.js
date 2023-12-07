// ==UserScript==
// @name         Hide Luogu Difficulty
// @namespace    https://www.luogu.com.cn/training/*
// @version      0.1
// @description  Hide Luogu Difficulty in the Problem List
// @author       Linmobi
// @match        https://www.luogu.com.cn/training/*
// @match        https://www.luogu.com.cn/problem/list*
// @match        https://www.luogu.com.cn/problem/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=luogu.com.cn
// @grant        none
// ==/UserScript==

function re() {
    if(document.location.pathname == "/problem/list" || document.location.pathname.search("/training/") != -1) {
        for(var i = 0; i < document.getElementsByClassName('difficulty').length; i ++) {
            var x = document.getElementsByClassName('difficulty')[i];
            if(x.childNodes.length > 0) {
                var b = x.childNodes[0];
                x.removeChild(b);
            }
        }
    } else {
        if(!window._feInjection.currentData.problem.accepted) window._feInjection.currentData.problem.difficulty = 0;
    }
}

(function() {
    'use strict';
    //re()
    setInterval(re, 1);
})();