(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";var cheillondon=cheillondon||{};cheillondon.targetBoilerplate=function(){var e={init:function(){e.doEverythingTimeout()},doEverythingTimeout:function(){var t=this;console.log("XXX - doEverythingTimeout"),setTimeout(function(){window.$?(console.log("doEverythingTimeout - jQuery loaded"),e.kickoff(),e.tagging(),e.appendNewStyle()):(console.log("no jquery"),t.doEverythingTimeout())},6e3)},appendNewStyle:function(){var e=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style");t.type="text/css",t.styleSheet?t.styleSheet.cssText=".tv-trade-in-container{color:black;padding:5px;margin:10px 0px}.tv-trade-in-container strong{font-family:SamsungOne700, Arial, Helvetica, sans-serif}":t.appendChild(document.createTextNode(".tv-trade-in-container{color:black;padding:5px;margin:10px 0px}.tv-trade-in-container strong{font-family:SamsungOne700, Arial, Helvetica, sans-serif}")),e.appendChild(t)},kickoff:function(){console.log("we have kickoff");var e=["RF23R62E3SR/EU","RF50A5002S9/EU","RF23R62E3B1/EU","RF24R7201B1/EU","RF24R7201SR/EU","RF65A967FS9/EU","RF65A967FB1/EU","RF65A977FB1/EU","RF65A977FSR/EU","RF23BB860EQNEU","RB34A6B2ECS/EU","RB34A6B2ECE/EU","RB34A6B2E22/EU","RB34A6B2E12/EU","RB34A6B2E48/EU","RB38A7B53S9/EU","RB38A7B53B1/EU","RB38A7B6BB1/EU","RL38A776ASR/EU","RB38T633ESA/EU","RB38T602CS9/EU","RB38T602CWW/EU","RB38T605DB1/EU","RL4363SBASL/EU","RL4363SBAB1/EU","RB36R8839SR/EU","RB36R8899SR/EU","RZ32A74A501/EU","RR39A74A301/EU","RZ32A74A5CE/EU","RZ32A74A5CS/EU","RR39A74A3CE/EU","RR39A74A3CL/EU","RZ32A74A5CL/EU","RR39A74A322/EU","RZ32A74A522/EU","RZ32A74A512/EU","RZ32A74A541/EU","RZ32A74A539/EU","RZ32A74A548/EU","RR39A74A312/EU","RR39A74A339/EU","RR39A74A341/EU","RR39A74A348/EU","RS67A8810S9/EU","RS67A8811S9/EU","RS68A8820S9/EU","RS68A8830S9/EU","RS68A8830B1/EU","RS68A8840B1/EU","RH68B8830S9/EU","RH68B8830B1/EU","RS6HA8880S9/EU","RH69B8931S9/EU","RH69B8031S9/EU","RH69B8941S9/EU","RH69B8931B1/EU","RS6HA8891SL/EU","DV90T6240LH/S1","DV90T6240LN/S1","DV90T8240SH/S1","DV90BB9445GBS1","DV90BB9445GHS1","DV90T8240SX/S1","WD10T654DBH/S1","WD10T654DBN/S1","WD90T984DSH/S1","WD90T984DSX/S1","WW11BB744DGES1","WW10T684DLH/S1","WW10T684DLN/S1","WW11BB944DGHS1","WW11BB944DGBS1","WW90T854DBH/S1","WW90T854DBX/S1","WW90T986DSH/S1","WW90T986DSX/S1"];document.querySelectorAll(".delivery-info-description-wrapper").forEach(function(t){for(var n in e){var o=t.querySelector(".info-left-code");if(Object.hasOwnProperty.call(e,n)){var i=e[n];if(o.innerText===i){var r=document.createElement("div");r.classList.add("tv-trade-in-container"),r.innerHTML="<p><strong>Trade Up</strong> : Delivery ,collection and recycling of your old Samsung appliance is included for free with the ‘Delivery Only’ option . Please select another if you would like any additional services</p>",t.append(r)}}}})},setEvents:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";console.log("XXX - setEvents: "+e)},resizeWindow:function(){setTimeout(function(){$(window).resize(),console.log("window resized")},100)},tagging:function(){function e(e,t){for(var n in t)e.setAttribute(n,t[n])}function t(e){s.linkTrackVars="eVar41,events",s.linkTrackEvents="scAdd,scView",s.events="scAdd,scView",s.eVar41=e,s.tl(this,"o")}var n=document.querySelectorAll(".delivery-info-description-wrapper"),o=document.querySelector(".cx-summary-continueBtn");n.forEach(function(n){n.querySelectorAll(".info-right-checkbox-wrapper").forEach(function(n){var o=n.children[0].children[0],i=n.children[0].children[1].innerText;e(o,{"data-omni-type":"microsite","data-omni":"uk:228:cart:tvtradeup:"+i,"ga-ac":"pd buying tool","ga-ca":"option input"}),o.onclick=function(){t(o.getAttribute("data-omni"))}})}),e(o,{"data-omni-type":"microsite","data-omni":"uk:228:cart:tvtradeup:"+o.innerText,"ga-ac":"pd buying tool","ga-ca":"option input"}),o.onclick=function(){t(o.getAttribute("data-omni"))}}};return{main:e}}(),cheillondon.targetBoilerplate.main.init();

},{}]},{},[1])

//# sourceMappingURL=main.js.map
