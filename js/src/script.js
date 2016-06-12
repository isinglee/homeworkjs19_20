/*jslint browser: true, newcap: false */
/*global $, jQuery, escape, console, tmpl, $JssorBulletNavigator$, $JssorSlider$ */
$(function () {
    'use strict';

    var jssor_1_options = {
        $AutoPlay: true,
        $Idle: 2000,
        $BulletNavigatorOptions: {
            $Class: $JssorBulletNavigator$
        }
    },
        jssor_1_slider = new $JssorSlider$("slider", jssor_1_options);

    $("#accordion").accordion();

});
