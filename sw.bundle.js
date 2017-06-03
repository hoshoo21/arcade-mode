!function e(t,n,o){function c(r,i){if(!n[r]){if(!t[r]){var l="function"==typeof require&&require;if(!i&&l)return l(r,!0);if(s)return s(r,!0);var u=new Error("Cannot find module '"+r+"'");throw u.code="MODULE_NOT_FOUND",u}var a=n[r]={exports:{}};t[r][0].call(a.exports,function(e){var n=t[r][1][e];return c(n||e)},a,a.exports,e,t,n,o)}return n[r].exports}for(var s="function"==typeof require&&require,r=0;r<o.length;r++)c(o[r]);return c}({1:[function(e,t,n){"use strict";function o(e,t){return caches.open(t).then(function(t){return t.match(e).then(function(t){return t?(console.log("Response found in cache "+t+"."),t):fetch(e)})})}function c(e,t){return new Promise(function(n,o){var c=setTimeout(o,t);fetch(e).then(function(e){console.log("Response found from network "+e+"."),clearTimeout(c),n(e)},o)})}var s=e(2),r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(s),i={font:"font-cache-v3",css:"css-cache-v3",html:"html-cache-v3",img:"img-cache-v3",js:"js-cache-v3"};self.addEventListener("install",function(e){console.log("in the install event"),e.waitUntil(Object.keys(i).forEach(function(e){caches.open(i[e]).then(function(t){return t.addAll(r[e])}).then(function(){return console.log(e+" has been cached."),self.skipWaiting()})}))}),self.addEventListener("fetch",function(e){console.log("Handling fetch event for "+e.request.url);var t=void 0;switch(e.request.url.split(".")[e.request.url.split(".").length-1]){case"http://localhost:3000/":case"http://localhost:8080/":case"com/":case"io/arcade-mode/":t="html";break;case"ttf":t="font";break;case"css":t="css";break;case"svg":case"png":case"jpeg":case"jpg":t="img";break;case"js":t="js";break;default:t="not found"}if("not found"===t)return console.log("Requested type, "+e.request.url+", is not in the cache"),console.log(e.request.url.split(".")[e.request.url.split(".").length-1]),fetch(e.request);e.respondWith(c(e.request,400).catch(function(){return o(e.request,i[t])}))}),self.addEventListener("activate",function(e){console.log("[activate]: Activating Service Worker.");var t=Object.keys(i).map(function(e){return i[e]});e.waitUntil(caches.keys().then(function(e){return Promise.all(e.map(function(e){if(-1===t.indexOf(e))return console.log("Deleting out of date cache: "+e),caches.delete(e)}))}).then(function(){return self.clients.claim()}))})},{2:2}],2:[function(e,t,n){t.exports={html:["/"],js:["public/js/index.bundle.js","public/js/main.bundle.js","public/js/sw.bundle.js","public/js/ww.bundle.js"],json:["public/json/challenges-algorithms.json","public/json/challenges-arcade.json","public/json/challenges-combined.json","public/json/challenges-data-structures.json"],img:["public/img/FCCfire.svg","public/img/FCClogo.svg","public/img/favicon.ico","public/img/challenges/pexels-photo-358717.jpeg","public/img/challenges/pexels-photo-127556.jpeg"],font:["public/font/Kalam/Kalam-Regular.ttf","public/font/Lato/Lato-Black.ttf","public/font/Roboto/Roboto-Bold.ttf","public/font/Roboto/Roboto-Medium.ttf","public/font/Roboto/Roboto-Regular.ttf"],css:["public/css/style.css","public/css/vendor/bootswatch/bootstrap.min.css","public/css/vendor/codemirror/codemirror.min.css","public/css/vendor/codemirror/monokai.min.css"]}},{}]},{},[1]);