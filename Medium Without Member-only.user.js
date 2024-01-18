// ==UserScript==
// @name         Medium Without Member-only
// @namespace    http://tampermonkey.net/
// @version      2024-01-18
// @description  自动将 Medium 文章详情链接跳转到 https://readmedium.com/，实现免费阅读 Member-only 的文章
// @author       elvis
// @match        https://medium.com/
// @icon         https://miro.medium.com/v2/1*m-R_BkNf1Qjr1YbyOIJY2w.png
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const style = document.createElement('style');
    style.innerHTML = `a * { pointer-events: none }`;
    document.body.append(style);

    document.body.addEventListener("click",function (event) {
        var target = event.target || event.srcElement;
        if (target.nodeName.toLocaleLowerCase() === "a") {
            if (event.preventDefault) {
                event.preventDefault();
            } else {
                event.returnValue = true;
            }

            const pattern = new window.URLPattern(target.href);
            const pathNameSplit = pattern.pathname.split("/");
            window.open("https://readmedium.com/" + pathNameSplit[pathNameSplit.length - 1], "_blank");
        }
    }, {
        capture: true
    })
})();