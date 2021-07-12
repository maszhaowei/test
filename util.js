// ==UserScript==
// @name         Default
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        http://*/*
// @match        https://*/*
// @require      https://raw.githubusercontent.com/maszhaowei/arrive/master/minified/arrive.min.js
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        unsafeWindow
// @noframes
// ==/UserScript==

(function() {
    'use strict';

    const scriptInfo = GM_info.script;
    const scriptName = scriptInfo.name;

    let $$ = jQuery.noConflict();

    let cutil = {
        clog(c) {
            console.group(`[${scriptName}]`);
            console.log(c);
            console.groupEnd();
        },
        cdebug(c) {
            console.group(`[${scriptName}]`);
            console.debug(c);
            console.groupEnd();
        },
        getCookie(name) {
            let arr = document.cookie.replace(/\s/g, "").split(';');
            for (let i = 0, l = arr.length; i < l; i++) {
                let tempArr = arr[i].split('=');
                if (tempArr[0] == name) {
                    return decodeURIComponent(tempArr[1]);
                }
            }
            return '';
        },
        getValue(name) {
            return GM_getValue(name);
        },
        setValue(name, value) {
            GM_setValue(name, value);
        },
        post(url, headers, data, responseType) {
            headers = headers || {"Content-Type": "application/x-www-form-urlencoded"};
            return new Promise((resolve, reject) => {
                let requestObj = GM_xmlhttpRequest({
                    method: "POST", url, headers, data,
                    responseType: responseType || 'json',
                    onload: (res) => {
                        resolve(res.response || res.responseText);
                    },
                    onerror: (err) => {
                        reject(err);
                    }
                });
            });
        },
        get(url, headers, responseType) {
            return new Promise((resolve, reject) => {
                let requestObj = GM_xmlhttpRequest({
                    method: "GET", url, headers,
                    responseType: responseType || 'json',
                    onload: (res) => {
                        resolve(res.response || res.responseText);
                    },
                    onerror: (err) => {
                        reject(err);
                    }
                });
            });
        },
        lCamelObject(obj) {
            if(Object.prototype.toString.call(obj) != '[object Object]') return {};

            let o = {};
            let reg=/_([^_]+|$)/g;
            let fields = Object.keys(obj);
            for(let i=0;i<fields.length;i++) {
                let field = fields[i];
                let _index = field.indexOf("_");
                if(_index == -1) {
                    o[field] = obj[field];
                    continue;
                }

                let f = field.substr(0, _index);
                let r;
                while(r = reg.exec(field)) f += r[1].charAt(0).toUpperCase() + r[1].substr(1);
                o[f] = obj[field];
            }
            return o;
        },
        strToRegExp(str) {
            let arr = str.match(/^\/([^/]+)\/([^/]*)$/);
            if(arr && arr.length == 3) return new RegExp(arr[1], arr[2]);
        },
        asyncDelayedFn(context, fn, args, delay) {
            delay = delay || 0;
            return new Promise((resolve, reject)=>setTimeout(()=>{
                if(args === undefined) fn.apply(context);
                else if($$.isArray(args)) fn.apply(context, args);
                else reject(args);
                resolve(true);
            }, delay));
        }
    };

    document.addEventListener('keydown', function (e) {
        if (e.keyCode == 119) { // F8
            debugger;
        }
    }, true);
})();