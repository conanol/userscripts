// ==UserScript==
// @name         Advanced Fanfou
// @namespace    https://github.com/conanol
// @version      0.1
// @description  Some convenient changes for fanfou.
// @author       conanol
// @match        http://fanfou.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
    var observeMutationSupport = !!MutationObserver;

    var img = document.getElementById("ZoomImage");
    var div = document.getElementById("ZoomToAlbum");
    if (observeMutationSupport && img && div) {
        var mo = new MutationObserver(function(records) {
            records.map(function(record) {
                if (record.type == 'attributes' && record.attributeName == 'src') {
                    var a = div.getElementsByTagName('a')[0];
                    if (a) {
                        a.href = img.src.split('@')[0];
                        a.target = '_blank';
                    }
                }
            });
        });

        mo.observe(img, {
            'attributes': true,
            'attributeFilter': ['src']
        });
    }
})();