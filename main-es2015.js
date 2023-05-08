(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/button-generator/button-generator.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/button-generator/button-generator.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n    <div class=\"header-style\">\n        <labled-icon-button (onClick)=\"downloadImage()\" lable=\"Download Image\" color=\"#ffffff\" backgroundColor=\"#1E1E1E\"\n            iconSrc=\"assets/icons/downloadicon.svg\" style=\"margin: 0px 10px;float: right;\"></labled-icon-button>\n        <labled-icon-button (onClick)=\"downloadJson()\" lable=\"Download JSON\" color=\"#ffffff\" backgroundColor=\"#179D5B\"\n            iconSrc=\"assets/icons/downloadicon.svg\" style=\"margin: 0px 10px;float: right;\"></labled-icon-button>\n    </div>\n    <div class=\"main-wrapper\">\n        <div class=\"editor-left-sidebar shown\">\n            <div class=\"vertical-tab-button-container\">\n                <button class=\"tab-button tablinks active\">\n                    <img src=\"./assets/icons/heading-white.svg\" class=\"tab-icon\" />\n                    <p class=\"tab-title\">Properties</p>\n                </button>\n            </div>\n            <div class=\"left-wrapper\">\n                <div class=\"inner-left-wrapper\">\n                    <div class=\"property-panel\">\n                        <div class=\"property-panel-wrapper\">\n                            <div class=\"property-panel-content\" *ngIf=\"selected\">\n\n                                <!-- Button Size Properties (Size) -->\n                                <div class=\"single-control-container\">\n                                    <span class=\"single-control-lable\">Width : </span>\n                                    <input type=\"number\" class=\"text-size-value-container\" [(ngModel)]=\"props.width\"\n                                        (change)=\"setButtonSize({width: props.width, height: props.height})\" />\n                                </div>\n                                <div class=\"single-control-container\">\n                                    <span class=\"single-control-lable\">Height : </span>\n                                    <input type=\"number\" class=\"text-size-value-container\" [(ngModel)]=\"props.height\"\n                                        (change)=\"setButtonSize({width: props.width, height: props.height})\" />\n                                </div>\n\n                                <!-- Text Properties (Font) -->\n                                <div class=\"single-control-container\" *ngIf=\"selected.type == 'button'\">\n                                    <span class=\"single-control-lable\">Font : </span>\n                                    <select class=\"font-selection-box\" [(ngModel)]=\"props.fontFamily\"\n                                        (change)=\"changeFontFamily(props.fontFamily)\">\n                                        <option [value]=\"font.fontName\" *ngFor=\"let font of fontList\">\n                                            {{font.fontLabel}}\n                                        </option>\n                                    </select>\n                                </div>\n\n                                <!-- Text Properties (font Size) -->\n                                <div class=\"single-control-container\" *ngIf=\"selected.type == 'button'\">\n                                    <span class=\"single-control-lable\">Size : </span>\n                                    <input type=\"number\" class=\"text-size-value-container\" [(ngModel)]=\"props.fontSize\"\n                                        (change)=\"setFontSize(props.fontSize)\" />\n                                </div>\n\n                                <!-- Text Properties (Style) -->\n                                <div class=\"single-control-container\" *ngIf=\"selected.type == 'button'\">\n                                    <span class=\"single-control-lable\">Style : </span>\n                                    <div>\n                                        <button class=\"font-style-buttons\" (click)=\"toggleStyle('bold')\"\n                                            [ngClass]=\"{'active': props.isBold}\">\n                                            <svg preserveAspectRatio=\"xMidYMid meet\" style=\"height: 20px; width: 20px;\"\n                                                version=\"1.0\" viewBox=\"0 0 1024.000000 1024.000000\"\n                                                xmlns=\"http://www.w3.org/2000/svg\" class=\"ng-star-inserted\">\n                                                <g fill=\"#ffffff\" stroke=\"none\"\n                                                    transform=\"translate(0.000000,1024.000000) scale(0.100000,-0.100000)\">\n                                                    <path\n                                                        d=\"M1480 5120 l0 -5100 2343 3 c2191 2 2349 4 2447 20 384 65 716 180 1017 352 464 265 850 654 1113 1124 159 282 280 640 335 991 26 159 32 576 11 754 -100 860 -566 1621 -1288 2104 -84 56 -96 67 -85 81 7 9 46 62 89 118 500 666 687 1540 507 2368 -172 788 -678 1481 -1382 1894 -271 158 -574 274 -882 336 -278 56 -218 55 -2302 55 l-1923 0 0 -5100z m3456 3629 c443 -61 820 -439 967 -969 163 -585 8 -1236 -386 -1622 -139 -137 -294 -226 -477 -276 l-95 -26 -637 -4 -638 -3 0 1455 0 1456 594 0 c372 0 624 -4 672 -11z m734 -4381 c239 -59 418 -163 592 -347 391 -411 518 -1086 312 -1663 -40 -112 -138 -295 -208 -389 -76 -100 -216 -238 -304 -298 -94 -63 -235 -128 -347 -158 l-100 -28 -972 -3 -973 -3 0 1456 0 1456 968 -4 c843 -3 975 -5 1032 -19z\">\n                                                    </path>\n                                                </g>\n                                            </svg>\n                                        </button>\n                                        <button class=\"font-style-buttons\" (click)=\"toggleStyle('italic')\"\n                                            [ngClass]=\"{'active': props.isItalic}\">\n                                            <svg preserveAspectRatio=\"xMidYMid meet\" style=\"height: 20px; width: 20px;\"\n                                                version=\"1.0\" viewBox=\"0 0 1024.000000 1024.000000\"\n                                                xmlns=\"http://www.w3.org/2000/svg\" class=\"ng-star-inserted\">\n                                                <g fill=\"#ffffff\" stroke=\"none\"\n                                                    transform=\"translate(0.000000,1024.000000) scale(0.100000,-0.100000)\">\n                                                    <path\n                                                        d=\"M4065 10206 c-203 -64 -335 -243 -335 -451 0 -205 133 -385 329 -445 60 -19 95 -20 742 -20 373 0 679 -3 679 -7 -1 -5 -376 -1880 -833 -4168 l-833 -4160 -794 -5 -795 -5 -75 -36 c-133 -65 -220 -164 -255 -292 -24 -88 -17 -230 14 -310 43 -109 148 -214 258 -259 l58 -23 1975 0 1975 0 78 37 c383 183 344 743 -62 868 -60 19 -95 20 -742 20 -373 0 -679 3 -679 8 1 4 376 1879 833 4167 l833 4160 794 5 795 5 75 36 c180 87 270 230 270 428 0 141 -47 249 -147 341 -61 56 -90 73 -171 101 -53 18 -118 19 -2001 18 -1544 0 -1954 -3 -1986 -13z\">\n                                                    </path>\n                                                </g>\n                                            </svg>\n                                        </button>\n                                        <button class=\"font-style-buttons\" (click)=\"toggleStyle('underline')\"\n                                            [ngClass]=\"{'active': props.isUnderLine}\">\n                                            <svg preserveAspectRatio=\"xMidYMid meet\" style=\"height:20px; width:20px;\"\n                                                version=\"1.0\" viewBox=\"0 0 1024.000000 1024.000000\"\n                                                xmlns=\"http://www.w3.org/2000/svg\" class=\"ng-star-inserted\">\n                                                <g fill=\"#ffffff\" stroke=\"none\"\n                                                    transform=\"translate(0.000000,1024.000000) scale(0.100000,-0.100000)\">\n                                                    <path\n                                                        d=\"M1953 7533 c3 -2684 3 -2688 24 -2813 48 -279 103 -484 190 -705 240 -609 662 -1129 1212 -1494 398 -263 826 -423 1336 -498 171 -25 639 -25 810 0 289 43 514 101 750 194 820 323 1475 978 1798 1798 87 221 142 426 190 705 21 125 21 129 24 2813 l3 2687 -425 0 -424 0 -4 -2617 c-3 -2364 -4 -2628 -19 -2723 -53 -338 -148 -610 -306 -877 -557 -940 -1681 -1367 -2705 -1029 -824 272 -1429 975 -1571 1826 -34 205 -36 352 -36 2893 l0 2527 -425 0 -425 0 3 -2687z\">\n                                                    </path>\n                                                    <path\n                                                        d=\"M1810 445 l0 -425 3310 0 3310 0 0 425 0 425 -3310 0 -3310 0 0 -425z\">\n                                                    </path>\n                                                </g>\n                                            </svg>\n                                        </button>\n                                        <button class=\"font-style-buttons\" (click)=\"toggleStyle('strikethrough')\"\n                                            [ngClass]=\"{'active': props.isStrikeThrough}\">\n                                            <svg preserveAspectRatio=\"xMidYMid meet\" style=\"height: 20px; width: 20px;\"\n                                                version=\"1.0\" viewBox=\"0 0 1024.000000 1024.000000\"\n                                                xmlns=\"http://www.w3.org/2000/svg\" class=\"ng-star-inserted\">\n                                                <g fill=\"#ffffff\" stroke=\"none\"\n                                                    transform=\"translate(0.000000,1024.000000) scale(0.100000,-0.100000)\">\n                                                    <path\n                                                        d=\"M4675 9759 c-1307 -110 -2276 -639 -2723 -1489 -107 -204 -190 -463 -228 -715 -27 -178 -25 -540 4 -730 73 -471 247 -833 551 -1147 l96 -98 -1177 0 -1178 0 0 -460 0 -460 2528 0 2527 0 235 -40 c1162 -200 1666 -380 1985 -711 168 -174 258 -361 301 -624 22 -135 21 -370 -1 -500 -127 -750 -840 -1237 -2009 -1372 -203 -24 -735 -24 -943 0 -670 76 -1183 269 -1543 579 -157 136 -303 331 -367 489 -16 38 -32 69 -36 69 -15 0 -842 -302 -851 -311 -13 -12 33 -129 105 -267 384 -740 1188 -1249 2261 -1432 273 -47 442 -61 799 -67 458 -7 760 15 1111 82 1243 240 2101 927 2343 1879 56 220 69 340 69 606 -1 189 -5 263 -22 375 -73 472 -246 833 -551 1147 l-96 98 1178 0 1177 0 0 460 0 460 -2522 0 -2523 0 -265 45 c-701 120 -1122 226 -1444 364 -577 248 -837 625 -838 1216 -1 407 134 724 424 1000 446 424 1267 666 2183 642 809 -21 1449 -219 1886 -584 162 -134 320 -341 386 -504 16 -38 31 -69 35 -69 14 0 843 303 852 311 13 12 -34 129 -105 267 -384 739 -1175 1242 -2254 1431 -292 51 -440 63 -855 66 -217 2 -444 -1 -505 -6z\">\n                                                    </path>\n                                                </g>\n                                            </svg>\n                                        </button>\n                                        <button class=\"font-style-buttons\" (click)=\"toggleStyle('overline')\"\n                                            [ngClass]=\"{'active': props.isOverLine}\">\n                                            <svg preserveAspectRatio=\"xMidYMid meet\" style=\"height: 20px; width: 20px;\"\n                                                version=\"1.0\" viewBox=\"0 0 1024.000000 1024.000000\"\n                                                xmlns=\"http://www.w3.org/2000/svg\" class=\"ng-star-inserted\">\n                                                <g fill=\"#ffffff\" stroke=\"none\"\n                                                    transform=\"translate(0.000000,1024.000000) scale(0.100000,-0.100000)\">\n                                                    <path\n                                                        d=\"M20 9550 l0 -510 5100 0 5100 0 0 510 0 510 -5100 0 -5100 0 0 -510z\">\n                                                    </path>\n                                                    <path\n                                                        d=\"M2772 4266 c-1013 -2235 -1845 -4071 -1848 -4080 -6 -15 44 -16 573 -16 l580 0 563 1275 564 1275 1930 -2 1930 -3 559 -1272 560 -1273 580 0 c527 0 579 1 573 16 -3 9 -835 1845 -1848 4080 l-1841 4064 -517 0 -517 0 -1841 -4064z m3100 1139 l735 -1665 -1477 0 -1477 0 735 1665 c404 916 738 1665 742 1665 4 0 338 -749 742 -1665z\">\n                                                    </path>\n                                                </g>\n                                            </svg>\n                                        </button>\n                                    </div>\n                                </div>\n\n                                <!-- Text Properties (Alignement) -->\n                                <div class=\"single-control-container\" *ngIf=\"selected.type == 'button'\">\n                                    <span class=\"single-control-lable\">Allignment : </span>\n                                    <div>\n                                        <button class=\"font-style-buttons\" (click)=\"toggleAlignment('left')\"\n                                            [ngClass]=\"{'active': props.textAlign == 'left'}\">\n                                            <svg preserveAspectRatio=\"xMidYMid meet\" style=\"height: 20px; width: 20px;\"\n                                                version=\"1.0\" viewBox=\"0 0 1024.000000 1024.000000\"\n                                                xmlns=\"http://www.w3.org/2000/svg\" class=\"ng-star-inserted\">\n                                                <g fill=\"#ffffff\" stroke=\"none\"\n                                                    transform=\"translate(0.000000,1024.000000) scale(0.100000,-0.100000)\">\n                                                    <path\n                                                        d=\"M355 10210 c-234 -47 -392 -298 -331 -525 39 -148 138 -250 287 -296 59 -19 186 -19 4808 -19 4245 0 4753 2 4806 15 162 42 276 168 306 338 39 213 -120 440 -339 486 -63 13 -9472 14 -9537 1z\">\n                                                    </path>\n                                                    <path\n                                                        d=\"M330 8326 c-151 -41 -267 -155 -304 -301 -63 -241 79 -473 322 -524 38 -8 878 -11 3025 -11 3283 0 3032 -5 3146 63 141 84 219 254 193 421 -27 169 -135 298 -291 347 -62 19 -118 19 -3054 18 -2328 0 -3002 -3 -3037 -13z\">\n                                                    </path>\n                                                    <path\n                                                        d=\"M352 6469 c-110 -21 -214 -91 -272 -181 -153 -237 -38 -558 230 -638 64 -20 109 -20 4835 -18 l4770 3 68 32 c278 132 341 485 123 691 -62 59 -135 97 -216 112 -66 12 -9474 12 -9538 -1z\">\n                                                    </path>\n                                                    <path\n                                                        d=\"M320 4584 c-119 -32 -217 -116 -274 -234 -29 -60 -31 -73 -31 -170 0 -97 2 -110 32 -172 58 -123 166 -211 293 -238 41 -8 811 -10 3060 -8 l3005 3 67 32 c88 42 160 110 198 187 118 244 3 519 -248 596 -63 20 -103 20 -3056 19 -2600 0 -2998 -2 -3046 -15z\">\n                                                    </path>\n                                                    <path\n                                                        d=\"M353 2729 c-152 -30 -278 -142 -323 -286 -34 -112 -21 -242 36 -338 38 -65 134 -150 201 -177 l58 -23 4800 0 4800 0 67 32 c270 128 330 477 116 679 -65 61 -115 89 -200 109 -55 13 -648 15 -4788 14 -2599 -1 -4744 -5 -4767 -10z\">\n                                                    </path>\n                                                    <path\n                                                        d=\"M350 859 c-124 -24 -244 -122 -303 -246 -30 -63 -32 -76 -32 -173 0 -97 2 -110 32 -172 44 -94 109 -160 202 -206 l75 -37 3023 -3 3023 -2 62 21 c240 81 351 348 243 587 -51 112 -177 208 -304 232 -68 13 -5956 12 -6021 -1z\">\n                                                    </path>\n                                                </g>\n                                            </svg>\n                                        </button>\n                                        <button class=\"font-style-buttons\" (click)=\"toggleAlignment('center')\"\n                                            [ngClass]=\"{'active': props.textAlign == 'center'}\">\n                                            <svg preserveAspectRatio=\"xMidYMid meet\" style=\"height: 20px; width: 20px;\"\n                                                version=\"1.0\" viewBox=\"0 0 1024.000000 1024.000000\"\n                                                xmlns=\"http://www.w3.org/2000/svg\" class=\"ng-star-inserted\">\n                                                <g fill=\"#ffffff\" stroke=\"none\"\n                                                    transform=\"translate(0.000000,1024.000000) scale(0.100000,-0.100000)\">\n                                                    <path\n                                                        d=\"M320 10224 c-207 -55 -348 -276 -311 -485 24 -141 125 -271 248 -321 l58 -23 4790 -3 c4226 -2 4796 0 4841 13 71 21 166 87 210 146 97 133 110 311 32 463 -29 56 -109 138 -166 169 -113 62 288 57 -4907 56 -4140 0 -4747 -2 -4795 -15z\">\n                                                    </path>\n                                                    <path\n                                                        d=\"M2126 8349 c-249 -37 -413 -303 -337 -548 35 -113 93 -186 194 -245 100 -59 -83 -56 3133 -56 1936 0 2970 3 3005 10 30 6 82 24 116 41 202 98 284 350 185 563 -50 106 -126 175 -240 219 l-57 22 -2970 1 c-1633 1 -2996 -2 -3029 -7z\">\n                                                    </path>\n                                                    <path\n                                                        d=\"M341 6479 c-231 -45 -376 -268 -328 -503 37 -180 173 -310 354 -336 95 -13 9413 -13 9508 0 92 14 163 48 228 109 250 237 141 656 -189 726 -60 13 -696 15 -4799 14 -2606 -1 -4750 -5 -4774 -10z\">\n                                                    </path>\n                                                    <path\n                                                        d=\"M2052 4581 c-160 -55 -266 -195 -279 -366 -14 -181 73 -332 235 -412 l76 -38 3005 -3 c3359 -3 3070 -9 3189 68 102 65 164 163 181 284 30 212 -81 399 -277 465 l-61 21 -3008 0 c-2886 -1 -3010 -1 -3061 -19z\">\n                                                    </path>\n                                                    <path\n                                                        d=\"M350 2729 c-128 -21 -249 -112 -303 -227 -108 -230 -8 -490 223 -585 l55 -22 4765 -3 c3374 -1 4780 1 4817 9 129 26 238 113 296 237 30 62 32 74 32 172 0 86 -5 116 -23 163 -45 110 -127 189 -251 239 l-56 23 -4750 1 c-2759 1 -4773 -2 -4805 -7z\">\n                                                    </path>\n                                                    <path\n                                                        d=\"M2080 844 c-225 -60 -356 -295 -295 -528 35 -135 141 -246 273 -286 67 -20 80 -20 3083 -18 l3015 3 76 38 c168 82 254 252 227 444 -20 142 -110 262 -242 324 l-72 34 -3005 2 c-2622 2 -3012 0 -3060 -13z\">\n                                                    </path>\n                                                </g>\n                                            </svg>\n                                        </button>\n                                        <button class=\"font-style-buttons\" (click)=\"toggleAlignment('right')\"\n                                            [ngClass]=\"{'active': props.textAlign == 'right'}\">\n                                            <svg preserveAspectRatio=\"xMidYMid meet\" style=\"height: 20px; width: 20px;\"\n                                                version=\"1.0\" viewBox=\"0 0 1024.000000 1024.000000\"\n                                                xmlns=\"http://www.w3.org/2000/svg\" class=\"ng-star-inserted\">\n                                                <g fill=\"#ffffff\" stroke=\"none\"\n                                                    transform=\"translate(0.000000,1024.000000) scale(0.100000,-0.100000)\">\n                                                    <path\n                                                        d=\"M340 10204 c-253 -68 -390 -356 -282 -589 54 -114 139 -188 263 -226 59 -19 186 -19 4798 -19 4236 0 4743 2 4796 15 162 42 279 172 307 339 36 215 -122 439 -340 485 -38 8 -1353 11 -4770 10 -4119 0 -4724 -2 -4772 -15z\">\n                                                    </path>\n                                                    <path\n                                                        d=\"M3840 8324 c-158 -42 -275 -178 -301 -349 -35 -222 112 -434 330 -475 80 -15 5952 -14 6023 1 170 36 297 168 329 341 39 212 -101 427 -315 484 -80 21 -5986 19 -6066 -2z\">\n                                                    </path>\n                                                    <path\n                                                        d=\"M362 6469 c-210 -41 -354 -227 -339 -438 13 -184 125 -329 295 -381 63 -20 110 -20 4808 -20 l4745 0 60 20 c79 27 123 56 182 119 122 130 148 320 67 481 -55 109 -174 197 -299 220 -67 12 -9456 12 -9519 -1z\">\n                                                    </path>\n                                                    <path\n                                                        d=\"M3843 4585 c-159 -43 -267 -158 -300 -320 -40 -197 53 -382 235 -468 l67 -32 3030 0 3030 0 55 22 c260 106 349 425 181 648 -41 54 -114 108 -191 141 -44 19 -114 19 -3050 21 -2566 1 -3013 0 -3057 -12z\">\n                                                    </path>\n                                                    <path\n                                                        d=\"M362 2729 c-61 -12 -148 -53 -198 -94 -146 -120 -187 -362 -88 -530 38 -65 134 -150 201 -177 l58 -23 4790 0 4790 0 67 32 c219 103 307 357 199 571 -32 64 -116 149 -179 181 -106 54 223 51 -4882 50 -2593 -1 -4734 -5 -4758 -10z\">\n                                                    </path>\n                                                    <path\n                                                        d=\"M3870 859 c-118 -23 -246 -123 -295 -231 -108 -239 3 -506 243 -587 l61 -21 2995 0 c2954 0 2995 0 3058 20 160 49 267 175 291 343 32 221 -117 429 -341 476 -65 14 -5942 14 -6012 0z\">\n                                                    </path>\n                                                </g>\n                                            </svg>\n                                        </button>\n                                        <button class=\"font-style-buttons\" (click)=\"toggleAlignment('justify')\"\n                                            [ngClass]=\"{'active': props.textAlign == 'justify'}\">\n                                            <svg preserveAspectRatio=\"xMidYMid meet\" style=\"height: 20px; width: 20px;\"\n                                                version=\"1.0\" viewBox=\"0 0 1024.000000 1024.000000\"\n                                                xmlns=\"http://www.w3.org/2000/svg\" class=\"ng-star-inserted\">\n                                                <g fill=\"#ffffff\" stroke=\"none\"\n                                                    transform=\"translate(0.000000,1024.000000) scale(0.100000,-0.100000)\">\n                                                    <path\n                                                        d=\"M355 9703 c-159 -35 -273 -138 -325 -294 -29 -83 -25 -225 8 -309 44 -112 134 -200 249 -243 l58 -22 4730 -3 c3267 -2 4751 1 4799 8 142 22 250 100 313 228 38 76 38 76 38 201 0 122 -1 128 -32 192 -60 122 -155 202 -278 234 -53 13 -558 15 -4800 14 -2607 -1 -4749 -3 -4760 -6z\">\n                                                    </path>\n                                                    <path\n                                                        d=\"M300 6921 c-75 -24 -96 -36 -153 -90 -94 -87 -137 -188 -137 -320 0 -186 89 -327 255 -403 l50 -23 4790 -3 c4703 -2 4791 -2 4847 17 110 37 192 113 245 227 26 55 28 68 28 184 0 114 -2 130 -26 180 -54 113 -146 196 -256 230 -65 20 -80 20 -4827 19 -4525 0 -4764 -1 -4816 -18z\">\n                                                    </path>\n                                                    <path\n                                                        d=\"M315 4166 c-120 -38 -206 -115 -263 -234 -36 -75 -37 -80 -37 -192 0 -95 4 -124 23 -170 44 -111 141 -207 252 -253 l55 -22 4745 -3 c3360 -1 4760 1 4797 9 130 26 247 121 306 246 26 57 32 83 35 161 5 116 -15 198 -67 280 -48 73 -99 117 -181 156 l-65 31 -4780 2 c-3842 1 -4788 -1 -4820 -11z\">\n                                                    </path>\n                                                    <path\n                                                        d=\"M340 1399 c-140 -28 -259 -139 -311 -291 -28 -83 -23 -224 10 -311 43 -110 132 -196 249 -241 l57 -21 4735 -3 c3384 -2 4754 0 4800 8 141 24 245 101 307 228 38 76 38 76 38 201 0 123 -1 128 -34 196 -60 123 -172 211 -300 235 -68 13 -9485 12 -9551 -1z\">\n                                                    </path>\n                                                </g>\n                                            </svg>\n                                        </button>\n                                        <!-- <button class=\"font-style-buttons\" (click)=\"toggleAlignment('justify-left')\"\n                      [ngClass]=\"{'active': props.textAlign == 'justify-left'}\">\n                      <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\" style=\"height: 20px; width: 20px;\">\n                        <path fill=\"#ffffff\"\n                          d=\"M100.69 363.29c10 10 27.31 2.93 27.31-11.31V160c0-14.32-17.33-21.31-27.31-11.31l-96 96a16 16 0 000 22.62zM432 416H16a16 16 0 00-16 16v32a16 16 0 0016 16h416a16 16 0 0016-16v-32a16 16 0 00-16-16zm3.17-128H204.83A12.82 12.82 0 00192 300.83v38.34A12.82 12.82 0 00204.83 352h230.34A12.82 12.82 0 00448 339.17v-38.34A12.82 12.82 0 00435.17 288zm0-128H204.83A12.82 12.82 0 00192 172.83v38.34A12.82 12.82 0 00204.83 224h230.34A12.82 12.82 0 00448 211.17v-38.34A12.82 12.82 0 00435.17 160zM432 32H16A16 16 0 000 48v32a16 16 0 0016 16h416a16 16 0 0016-16V48a16 16 0 00-16-16z\" />\n                      </svg>\n                    </button>\n                    <button class=\"font-style-buttons\" (click)=\"toggleAlignment('justify-right')\"\n                      [ngClass]=\"{'active': props.textAlign == 'justify-right'}\">\n                      <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\" style=\"height: 20px; width: 20px;\">\n                        <path fill=\"#ffffff\"\n                          d=\"M27.31 363.3l96-96a16 16 0 000-22.62l-96-96C17.27 138.66 0 145.78 0 160v192c0 14.31 17.33 21.3 27.31 11.3zM432 416H16a16 16 0 00-16 16v32a16 16 0 0016 16h416a16 16 0 0016-16v-32a16 16 0 00-16-16zm3.17-128H204.83A12.82 12.82 0 00192 300.83v38.34A12.82 12.82 0 00204.83 352h230.34A12.82 12.82 0 00448 339.17v-38.34A12.82 12.82 0 00435.17 288zm0-128H204.83A12.82 12.82 0 00192 172.83v38.34A12.82 12.82 0 00204.83 224h230.34A12.82 12.82 0 00448 211.17v-38.34A12.82 12.82 0 00435.17 160zM432 32H16A16 16 0 000 48v32a16 16 0 0016 16h416a16 16 0 0016-16V48a16 16 0 00-16-16z\" />\n                      </svg>\n                    </button> -->\n                                    </div>\n                                </div>\n\n                                <!-- Button Properties (text opacity)-->\n                                <property-slider timeOut=\"0\" lable=\"Text Opacity\" min=\"0\" max=\"1\" step=\"0.1\"\n                                    [modal]=\"props.textOpacity\"\n                                    (onChange)=\"props.textOpacity = $event; setOpacity(props.textOpacity)\"\n                                    format=\"opacity\" *ngIf=\"selected.type == 'button'\">\n                                </property-slider>\n\n                                <!-- Text Properties (Opacity spacing lineHeight) -->\n                                <property-slider timeOut=\"0\" lable=\"Spacing\" min=\"-200\" max=\"1000\" step=\"1\"\n                                    [modal]=\"props.charSpacing\"\n                                    (onChange)=\"props.charSpacing = $event; setSpacing(props.charSpacing)\"\n                                    *ngIf=\"selected.type == 'button'\">\n                                </property-slider>\n                                <property-slider timeOut=\"0\" lable=\"Line Height\" min=\"0.1\" max=\"10\" step=\"0.1\"\n                                    [modal]=\"props.lineHeight\"\n                                    (onChange)=\"props.lineHeight = $event; setLineHeight(props.lineHeight)\"\n                                    *ngIf=\"selected.type == 'button'\">\n                                </property-slider>\n\n                                <!-- Text Properties (Color) -->\n                                <div class=\"single-control-container\" *ngIf=\"selected.type == 'button'\">\n                                    <span class=\"single-control-lable\">Color : </span>\n                                    <div style=\"display: flex;\">\n                                        <span class=\"color-value-display\"\n                                            (click)=\"copyValue(props.fill)\">{{props.fill}}</span>\n                                        <div class=\"color-picker-button\" [cpPosition]=\"'left-top'\"\n                                            (cpSliderDragEnd)=\"setFill(props.fill)\"\n                                            (cpInputChange)=\"setFill(props.fill)\" [(colorPicker)]=\"props.fill\"\n                                            [style.background]=\"props.fill\">\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <!-- Text Properties (background Color) -->\n                                <div class=\"single-control-container\" *ngIf=\"selected.type == 'button'\">\n                                    <span class=\"single-control-lable\">Background Color : </span>\n                                    <div style=\"display: flex;\">\n                                        <span class=\"color-value-display\"\n                                            (click)=\"copyValue(props.backgroundColor)\">{{props.backgroundColor}}</span>\n                                        <div class=\"color-picker-button\"\n                                            (cpSliderDragEnd)=\"setBackground(props.backgroundColor)\"\n                                            [cpPosition]=\"'left-top'\"\n                                            (cpInputChange)=\"setBackground(props.backgroundColor)\"\n                                            [(colorPicker)]=\"props.backgroundColor\"\n                                            [style.background]=\"props.backgroundColor\">\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <!-- Button Properties -->\n                                <div class=\"shadow-container\">\n                                    <span class=\"group-title\">Color Properties</span>\n                                    <div class=\"button-bg-color-tab-cotnainer\">\n                                        <Button class=\"background-tabs-links tab-button-btn-background\"\n                                            [ngClass]=\"{'active': activeButtonBackgroundTab == 'tab_1'}\"\n                                            (click)=\"openButtonBackgroundTab('tab_1')\">Solid</Button>\n                                        <Button class=\"background-tabs-links tab-button-btn-background\"\n                                            [ngClass]=\"{'active': activeButtonBackgroundTab == 'tab_2'}\"\n                                            (click)=\"openButtonBackgroundTab('tab_2')\">Gradient</Button>\n                                    </div>\n                                    <div class=\"single-control-container\" *ngIf=\"activeButtonBackgroundTab == 'tab_1'\">\n                                        <span class=\"single-control-lable\">Background Color : </span>\n                                        <div style=\"display: flex;\">\n                                            <span class=\"color-value-display\"\n                                                (click)=\"copyValue(props.buttonFill)\">{{props.buttonFill}}</span>\n                                            <div class=\"color-picker-button\" [cpOutputFormat]=\"'rgba'\"\n                                                [cpPosition]=\"'left-top'\"\n                                                (cpSliderDragEnd)=\"setButtonFill(props.buttonFill)\"\n                                                (cpInputChange)=\"setButtonFill(props.buttonFill)\"\n                                                [(colorPicker)]=\"props.buttonFill\"\n                                                [style.background]=\"props.buttonFill\">\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"single-control-container no-margin\" *ngIf=\"activeButtonBackgroundTab == 'tab_2'\">\n                                        <div class=\"color-picker-button\" [cpOutputFormat]=\"'hex'\"\n                                            [cpPosition]=\"'right-bottom'\"\n                                            (cpSliderChange)=\"changeGradientIndexColor(props.activeGradientColorIndex, props.activeGradientColor)\"\n                                            (cpInputChange)=\"changeGradientIndexColor(props.activeGradientColorIndex, props.activeGradientColor)\"\n                                            [(colorPicker)]=\"props.activeGradientColor\"\n                                            [style.background]=\"props.activeGradientColor\"></div>\n                                        <div>\n                                            <button class=\"gradient-type-btn\"\n                                                [ngClass]=\"{'active': props.gradientType == 'linear'}\"\n                                                (click)=\"props.gradientType = 'linear'; setButtonGradient(props.buttonGradientArray)\">\n                                                <div class=\"linear-gradient gradient-icon\"></div>\n                                            </button>\n                                            <button class=\"gradient-type-btn\"\n                                                [ngClass]=\"{'active': props.gradientType == 'radial'}\"\n                                                (click)=\"props.gradientType = 'radial'; setButtonGradient(props.buttonGradientArray)\">\n                                                <div class=\"radial-gradient gradient-icon\"></div>\n                                            </button>\n                                            <div class=\"is-center-checkbox-container\"\n                                                *ngIf=\"props.gradientType == 'radial'\">\n                                                <input type=\"checkbox\" [(ngModel)]=\"props.gradientPositionIsCenter\"\n                                                    id=\"isCenterGradient\" name=\"isCenterGradient\"\n                                                    class=\"is-center-checkbox\"\n                                                    (change)=\"setButtonGradient(props.buttonGradientArray)\">\n                                                <label for=\"isCenterGradient\" class=\"center-gradient-chckbox\">\n                                                    Center</label>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"single-control-container\" *ngIf=\"activeButtonBackgroundTab == 'tab_2'\">\n                                        <div class=\"gradient-control-container\">\n                                            <gradient-picker #button class=\"gradient-color-control\"\n                                                [containerClass]=\"'gradient-picker-class'\"\n                                                (onPickerChange)=\"setButtonGradient($event)\"\n                                                (onColorSliding)=\"setButtonGradient($event)\"\n                                                (onColorControlActivate)=\"setActiveColor($event)\"\n                                                [colorArray]=\"props.buttonGradientArray\" [minColorStop]=\"0\"\n                                                [maxColorStop]=\"1\" [maximumColors]=\"5\" [type]=\"'button'\">\n                                            </gradient-picker>\n                                            <circular-angle-control\n                                                *ngIf=\"props.gradientType != 'radial' || props.gradientPositionIsCenter != true\"\n                                                [radius]=\"25\" [angle]=\"props.buttonGradientAngle\"\n                                                (onAngleChange)=\"props.buttonGradientAngle = $event; setButtonGradient(props.buttonGradientArray)\">\n                                            </circular-angle-control>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"shadow-container\">\n                                    <span class=\"group-title\">Button Properties</span>\n                                    <div class=\"single-control-container\">\n                                        <span class=\"single-control-lable\">Border Color : </span>\n                                        <div style=\"display: flex;\">\n                                            <span class=\"color-value-display\"\n                                                (click)=\"copyValue(props.buttonStrokeColor)\">{{props.buttonStrokeColor}}</span>\n                                            <div class=\"color-picker-button\" [cpOutputFormat]=\"'hex'\"\n                                                [cpPosition]=\"'left-top'\"\n                                                (cpSliderDragEnd)=\"setButtonStrokeColor(props.buttonStrokeColor)\"\n                                                (cpInputChange)=\"setButtonStrokeColor(props.buttonStrokeColor)\"\n                                                [(colorPicker)]=\"props.buttonStrokeColor\"\n                                                [style.background]=\"props.buttonStrokeColor\"></div>\n                                        </div>\n                                    </div>\n                                    <property-slider timeOut=\"0\" lable=\"Button Opacity\" min=\"0\" max=\"1\" step=\"0.1\"\n                                        [modal]=\"props.opacity\"\n                                        (onChange)=\"props.opacity = $event; setOpacity(props.opacity, true)\"\n                                        format=\"opacity\">\n                                    </property-slider>\n                                    <property-slider timeOut=\"0\" lable=\"Border Size\" min=\"0\" max=\"30\" step=\"1\"\n                                        [modal]=\"props.buttonStrokeWidth\"\n                                        (onChange)=\"props.buttonStrokeWidth = $event; setButtonStrokeSize(props.buttonStrokeWidth)\">\n                                    </property-slider>\n                                    <property-slider timeOut=\"0\" lable=\"Corner Radius\" min=\"0\" max=\"100\" step=\"1\"\n                                        [modal]=\"props.buttonRadius\"\n                                        (onChange)=\"props.buttonRadius = $event; setButtonRadius(props.buttonRadius)\">\n                                    </property-slider>\n                                </div>\n\n                                <!-- Text Properties (Shadow) -->\n                                <div class=\"shadow-container\">\n                                    <span class=\"group-title\">Shadow Properties</span>\n                                    <div class=\"single-control-container\">\n                                        <span class=\"single-control-lable\">Shadow Color : </span>\n                                        <div style=\"display: flex;\">\n                                            <span class=\"color-value-display\"\n                                                (click)=\"copyValue(props.shadow.color)\">{{props.shadow.color}}</span>\n                                            <div class=\"color-picker-button\" [cpOutputFormat]=\"'hex'\"\n                                                [cpPosition]=\"'left-top'\" (cpSliderDragEnd)=\"setShadow(props.shadow)\"\n                                                (cpInputChange)=\"setShadow(props.shadow)\"\n                                                [(colorPicker)]=\"props.shadow.color\"\n                                                [style.background]=\"props.shadow.color\"></div>\n                                        </div>\n                                    </div>\n                                    <property-slider timeOut=\"0\" lable=\"Shadow Blur\" min=\"0\" max=\"100\" step=\"1\"\n                                        [modal]=\"props.shadow.blur\"\n                                        (onChange)=\"props.shadow.blur = $event; setShadow(props.shadow)\">\n                                    </property-slider>\n                                    <property-slider timeOut=\"0\" lable=\"Offset X\" min=\"-100\" max=\"100\" step=\"1\"\n                                        [modal]=\"props.shadow.offsetX\"\n                                        (onChange)=\"props.shadow.offsetX = $event; setShadow(props.shadow)\">\n                                    </property-slider>\n                                    <property-slider timeOut=\"0\" lable=\"Offset Y\" min=\"-100\" max=\"100\" step=\"1\"\n                                        [modal]=\"props.shadow.offsetY\"\n                                        (onChange)=\"props.shadow.offsetY = $event; setShadow(props.shadow)\">\n                                    </property-slider>\n                                </div>\n\n                                <!-- Button Properties (button Text Shadow) -->\n                                <div class=\"shadow-container\">\n                                    <span class=\"group-title\">Button Text Shadow</span>\n                                    <div class=\"single-control-container\">\n                                        <span class=\"single-control-lable\">Color : </span>\n                                        <div style=\"display: flex;\">\n                                            <span class=\"color-value-display\"\n                                                (click)=\"copyValue(props.TShadow.color)\">{{props.TShadow.color}}</span>\n                                            <div class=\"color-picker-button\" [cpOutputFormat]=\"'hex'\"\n                                                [cpPosition]=\"'left-top'\"\n                                                (cpSliderDragEnd)=\"setBTextShadow(props.TShadow, true)\"\n                                                (cpInputChange)=\"setBTextShadow(props.TShadow)\"\n                                                [(colorPicker)]=\"props.TShadow.color\"\n                                                [style.background]=\"props.TShadow.color\">\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <property-slider timeOut=\"0\" lable=\"Shadow Blur\" min=\"0\" max=\"100\" step=\"1\"\n                                        [modal]=\"props.TShadow.blur\"\n                                        (onChange)=\"props.TShadow.blur = $event; setBTextShadow(props.TShadow, true)\">\n                                    </property-slider>\n                                    <property-slider timeOut=\"0\" lable=\"Offset X\" min=\"-100\" max=\"100\" step=\"1\"\n                                        [modal]=\"props.TShadow.offsetX\"\n                                        (onChange)=\"props.TShadow.offsetX = $event; setBTextShadow(props.TShadow, true)\">\n                                    </property-slider>\n                                    <property-slider timeOut=\"0\" lable=\"Offset Y\" min=\"-100\" max=\"100\" step=\"1\"\n                                        [modal]=\"props.TShadow.offsetY\"\n                                        (onChange)=\"props.TShadow.offsetY = $event; setBTextShadow(props.TShadow, true)\">\n                                    </property-slider>\n                                </div>\n\n                                <!-- Icon Button Properties -->\n                                <div class=\"shadow-container\">\n                                    <span class=\"group-title\">Button Icon Properties</span>\n                                    <div class=\"single-control-container\">\n                                        <span class=\"single-control-lable\">Colors : </span>\n                                        <div style=\"display: flex;\">\n                                            <div class=\"color-picker-button\" style=\"margin: 0px 5px;\"\n                                                [cpOutputFormat]=\"'hex'\" *ngFor=\"let color of props.buttonIconColors\"\n                                                [cpPosition]=\"'left-top'\"\n                                                (cpSliderDragEnd)=\"setButtonIconFill(props.buttonIconColors)\"\n                                                (cpInputChange)=\"setButtonIconFill(props.buttonIconColors)\"\n                                                [(colorPicker)]=\"color.color\" [style.background]=\"color.color\"></div>\n                                        </div>\n                                    </div>\n                                    <property-slider timeOut=\"0\" lable=\"Icon Size\" min=\"5\" max=\"100\" step=\"1\"\n                                        [modal]=\"props.buttonIconSize\"\n                                        (onChange)=\"props.buttonIconSize = $event; setButtonIconSize(props.buttonIconSize)\">\n                                    </property-slider>\n                                </div>\n\n                            </div>\n                            <app-not-found *ngIf=\"!selected\" title=\"No Object Selected\" class=\"no-data-margin\">\n                            </app-not-found>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"editor-container\">\n            <div class=\"canvas-wrapper\">\n                <div id=\"canvas-container\">\n                    <span class=\"error\">{{error}}</span>\n                    <div class=\"canvas-item-container\">\n                        <canvas id=\"canvas\"></canvas>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/choose-size/choose-size.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/choose-size/choose-size.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"choose-size-container\">\n    <div class=\"sizes-container-inner\">\n        <div class=\"width-100\">\n            <h1 class=\"size-heading\">Select Size</h1>\n            <div class=\"next-button-container\">\n                <button class=\"next-button\" (click)=\"moveToGenerator()\" [ngClass]=\"{'disabled': !isSelected}\"\n                    [disabled]=\"!isSelected\">Next</button>\n                <button class=\"next-button select-all-button\" (click)=\"toggleAllSelection()\">\n                    <span *ngIf=\"isAllSelected\">Deselect All</span>\n                    <span *ngIf=\"!isAllSelected\">Select All</span>\n                </button>\n            </div>\n        </div>\n        <div class=\"size-item\">\n            <div class=\"size-icon-cotnainer custom-size\">\n                <input type=\"number\" class=\"custom-size-input\" placeholder=\"Width\"\n                    (keydown.enter)=\"addSize(customWidth, customHeight)\" [(ngModel)]=\"customWidth\" />\n                <input type=\"number\" class=\"custom-size-input\" placeholder=\"Height\"\n                    (keydown.enter)=\"addSize(customWidth, customHeight)\" [(ngModel)]=\"customHeight\" />\n                <button class=\"add-size-button\" (keydown.enter)=\"addSize(customWidth, customHeight)\">Add Size</button>\n            </div>\n            <div class=\"size-item-title\">Custom Size</div>\n        </div>\n        <div class=\"size-item\" [ngClass]=\"{'selected': size.selected}\" *ngFor=\"let size of sizeList; let i = index\"\n            (click)=\"chooseSize(i)\">\n            <div class=\"size-icon-cotnainer\">\n                <!-- size-icon-container width : 140, height: 120 -->\n                <!-- size icon width : 75%, height : 60% -->\n                <img [src]=\"size.icon\" class=\"size-icon\" *ngIf=\"size.icon\" />\n                <!-- below calculation is to make blank white div of scaled width an height according to css. so used 0.75 and 0.60 and 120 and 140 value of css into calculation -->\n                <div class=\"custom-size-icon\" *ngIf=\"!size.icon\"\n                    [style.height.px]=\"size.height < 120 && size.width < 140 ? size.height : size.width >= size.height ? size.height * (140 / size.width) * 0.75 : size.height * (120 / size.height) * 0.60\"\n                    [style.width.px]=\"size.height < 120 && size.width < 140 ? size.width : size.width >= size.height ? size.width * (140 / size.width) * 0.75 : size.width * (120 / size.height) * 0.60\">\n                </div>\n            </div>\n            <div class=\"size-item-title\">{{size.sizeName}}</div>\n            <span class=\"size-item-size\">{{size.width}} X {{size.height}} PX</span>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/generator-experiment/generator-experiment.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/generator-experiment/generator-experiment.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n  <div class=\"header-style\">\n    <labled-icon-button (onClick)=\"backToSizes()\" lable=\"Back\" color=\"#ffffff\" backgroundColor=\"#00000000\"\n      iconSrc=\"assets/icons/left.svg\" style=\"margin: 0px 10px;float: left;\"></labled-icon-button>\n    <labled-icon-button (onClick)=\"exportJSON()\" lable=\"Export Json\" color=\"#ffffff\" backgroundColor=\"#1E1E1E\"\n      iconSrc=\"assets/icons/exporticon.svg\" style=\"margin: 0px 10px;float: right;\"></labled-icon-button>\n    <labled-icon-button (onClick)=\"download()\" lable=\"Download\" color=\"#ffffff\" backgroundColor=\"#1E1E1E\"\n      iconSrc=\"assets/icons/downloadicon.svg\" style=\"margin: 0px 10px;float: right;\"></labled-icon-button>\n  </div>\n  <div class=\"main-wrapper\">\n    <div class=\"editor-left-sidebar\" [ngClass]=\"{'shown': isLeftShown, 'hidden-left': !isLeftShown}\">\n      <button class=\"toggle-left-sidebar-button\" [ngClass]=\"{'dark-button': !isLeftShown}\" (click)=\"toggleBar('left')\">\n        <img src=\"assets/icons/left.svg\" class=\"toggle-bar-icon\" *ngIf=\"isLeftShown\" />\n        <img src=\"assets/icons/right.svg\" class=\"toggle-bar-icon\" *ngIf=\"!isLeftShown\" />\n      </button>\n      <div class=\"vertical-tab-button-container\">\n        <button class=\"tab-button tablinks\" [disabled]=\"isReplaceMode\" (click)=\"activeLeftTab('tab_1')\"\n          [ngClass]=\"{'active': activeTab == 'tab_1'}\">\n          <img src=\"./assets/icons/heading-white.svg\" class=\"tab-icon\" />\n          <p class=\"tab-title\">Heading</p>\n        </button>\n        <button class=\"tab-button tablinks\" [disabled]=\"isReplaceMode\" (click)=\"activeLeftTab('tab_2')\"\n          [ngClass]=\"{'active': activeTab == 'tab_2'}\">\n          <img src=\"./assets/icons/stockphoto-white.svg\" class=\"tab-icon\" />\n          <p class=\"tab-title\">Image</p>\n        </button>\n        <button class=\"tab-button tablinks\" [disabled]=\"isReplaceMode\" (click)=\"activeLeftTab('tab_3')\"\n          [ngClass]=\"{'active': activeTab == 'tab_3'}\">\n          <img src=\"./assets/icons/shape-white.svg\" class=\"tab-icon\" />\n          <p class=\"tab-title\">Buttons</p>\n        </button>\n        <button class=\"tab-button tablinks\" [disabled]=\"isReplaceMode\" (click)=\"activeLeftTab('tab_4')\"\n          [ngClass]=\"{'active': activeTab == 'tab_4'}\">\n          <img src=\"./assets/icons/color-white.svg\" class=\"tab-icon\" />\n          <p class=\"tab-title\">Background</p>\n        </button>\n      </div>\n      <div class=\"left-wrapper\">\n        <div class=\"inner-left-wrapper\">\n          <div *ngIf=\"activeTab == 'tab_1'\" class=\"tabcontent\">\n            <div class=\"heading-tab-wrapper\">\n              <button (click)=\"addHeading(30)\" class=\"add-heading-class\">\n                <h1>Add Heading</h1>\n              </button>\n              <button (click)=\"addHeading(20)\" class=\"add-heading-class\">\n                <h2>Add Sub Heading</h2>\n              </button>\n              <button (click)=\"addHeading(15)\" class=\"add-heading-class\">\n                <h3>Add Description</h3>\n              </button>\n            </div>\n          </div>\n          <div *ngIf=\"activeTab == 'tab_2'\" class=\"tabcontent\">\n            <div class=\"image-tab-wrapper\">\n              <div class=\"property-panel-back-button-wrapper\" style=\"margin-bottom: 5px;\" *ngIf=\"isReplaceMode\">\n                <button class=\"property-panel-back-button move-right\" (click)=\"exitFromReplaceMode()\">\n                  <span>Ok</span>\n                  <img src=\"assets/icons/right.svg\" class=\"back-button-icon\">\n                </button>\n                <div style=\"clear: both\"></div>\n              </div>\n              <div class=\"single-control-container\">\n                <input type=\"file\" #userUploadImage class=\"file-upload-control\"\n                  (change)=\"isReplaceMode ? replaceImageFromUser($event) : addImgFromUser($event)\" accept=\"image/*\" />\n              </div>\n              <div class=\"image-list-container\" [ngClass]=\"{'replace-mode': isReplaceMode}\">\n                <div class=\"image-item\" *ngFor=\"let image of imageList\"\n                  (click)=\"isReplaceMode ? replaceImage(image) : addImage(image)\">\n                  <img [src]=\"image\" class=\"image-item-image\" />\n                </div>\n              </div>\n            </div>\n          </div>\n          <div *ngIf=\"activeTab == 'tab_3'\" class=\"tabcontent\">\n            <div class=\"background-tab-wrapper\">\n              <div class=\"background-tabs-container\">\n                <button class=\"background-tabs-links\" (click)=\"openButtonTab('tab_1')\"\n                  [ngClass]=\"{'active': activeButtonTab == 'tab_1'}\">\n                  Text Button\n                </button>\n                <button class=\"background-tabs-links\" (click)=\"openButtonTab('tab_2');\"\n                  [ngClass]=\"{'active': activeButtonTab == 'tab_2'}\">\n                  Icon Button\n                </button>\n              </div>\n              <div class=\"shape-list-container\" *ngIf=\"activeButtonTab == 'tab_1'\">\n                <div class=\"image-item button-item\" *ngFor=\"let button of textButtonList;let i = index\"\n                  (click)=\"addButton(button)\">\n                  <img [src]=\"button.previewImage\">\n                </div>\n              </div>\n              <div class=\"shape-list-container four-col\" *ngIf=\"activeButtonTab == 'tab_2'\">\n                <div class=\"image-item button-item\" *ngFor=\"let button of iconButtonList;let i = index\"\n                  (click)=\"addButton(button)\">\n                  <img [src]=\"button.previewImage\">\n                </div>\n              </div>\n            </div>\n\n          </div>\n          <div *ngIf=\"activeTab == 'tab_4'\" class=\"tabcontent\">\n            <div class=\"background-tab-wrapper\">\n              <div class=\"background-tabs-container\">\n                <button class=\"background-tabs-links\" (click)=\"openBackgroundTab('tab_1')\"\n                  [ngClass]=\"{'active': activeBackgroundTab == 'tab_1'}\">\n                  Color\n                </button>\n                <button class=\"background-tabs-links\" (click)=\"getCanvasFill();openBackgroundTab('tab_3');\"\n                  [ngClass]=\"{'active': activeBackgroundTab == 'tab_3'}\">\n                  Gradient\n                </button>\n                <button class=\"background-tabs-links\" (click)=\"openBackgroundTab('tab_2')\"\n                  [ngClass]=\"{'active': activeBackgroundTab == 'tab_2'}\">\n                  Image\n                </button>\n              </div>\n\n              <!-- background color tab -->\n              <div class=\"color-list-container\" *ngIf=\"activeBackgroundTab == 'tab_1'\">\n                <div class=\"color-item\" [style.backgroundColor]=\"props.canvasFill\" [cpPosition]=\"'right-bottom'\"\n                  (cpSliderDragEnd)=\"setCanvasFill(props.canvasFill)\" (cpInputChange)=\"setCanvasFill(props.canvasFill)\"\n                  [(colorPicker)]=\"props.canvasFill\">\n                  <img src=\"assets/icons/add-color.svg\" class=\"svg-ic-add-color\" />\n                </div>\n                <div class=\"color-item\" [style.backgroundColor]='color' *ngFor=\"let color of bgColorList\"\n                  (click)=\"props.canvasFill = color;setCanvasFill(props.canvasFill)\">\n                </div>\n              </div>\n\n              <!-- Background Gradient Tab -->\n              <div class=\"color-list-container\" *ngIf=\"activeBackgroundTab == 'tab_3'\">\n                <div class=\"gradient-control-container\">\n                  <div>\n                    <button class=\"gradient-type-btn\" [ngClass]=\"{'active': props.gradientType == 'linear'}\"\n                      (click)=\"props.gradientType = 'linear'; setCanvasGradient(props.canvasGradientArray)\">\n                      <div class=\"linear-gradient gradient-icon\"></div>\n                    </button>\n                    <button class=\"gradient-type-btn\" [ngClass]=\"{'active': props.gradientType == 'radial'}\"\n                      (click)=\"props.gradientType = 'radial'; setCanvasGradient(props.canvasGradientArray)\">\n                      <div class=\"radial-gradient gradient-icon\"></div>\n                    </button>\n                    <div class=\"is-center-checkbox-container\" *ngIf=\"props.gradientType == 'radial'\">\n                      <input type=\"checkbox\" [(ngModel)]=\"props.gradientPositionIsCenter\" id=\"isCenter\" name=\"isCenter\"\n                        class=\"is-center-checkbox\" (change)=\"setCanvasGradient(props.canvasGradientArray)\">\n                      <label for=\"isCenter\" class=\"center-gradient-chckbox\"> Center</label>\n                    </div>\n                  </div>\n                  <gradient-picker #canvasBg class=\"gradient-color-control\" [containerClass]=\"'gradient-picker-class'\"\n                    (onPickerChange)=\"setCanvasGradient($event)\" [colorArray]=\"props.canvasGradientArray\"\n                    [minColorStop]=\"0\" [maxColorStop]=\"1\" [maximumColors]=\"5\" [type]=\"'canvas'\">\n                  </gradient-picker>\n                  <circular-angle-control\n                    *ngIf=\"props.gradientType != 'radial' || props.gradientPositionIsCenter != true\" [radius]=\"25\"\n                    [angle]=\"props.gradientAngle\"\n                    (onAngleChangeEnd)=\"props.gradientAngle = $event; setCanvasGradient(props.canvasGradientArray)\">\n                  </circular-angle-control>\n                </div>\n                <div class=\"gradient-colors-container color-list-container\">\n                  <div class=\"color-item\" [ngStyle]=\"{'background': color.cssColor}\" *ngFor=\"let color of gradientList\"\n                    (click)=\"setPreGradient(color)\">\n                  </div>\n                </div>\n              </div>\n\n              <!-- background Image tab -->\n              <div class=\"color-list-container\" *ngIf=\"activeBackgroundTab == 'tab_2'\">\n                <div class=\"single-control-container color-list-container\" *ngIf=\"isBackgorundImage\">\n                  <span class=\"single-control-lable\">Setting : </span>\n                  <select class=\"font-selection-box\" style=\"width: 150px;\" [(ngModel)]=\"props.scaleMode\"\n                    (change)=\"changeScaleMode(props.scaleMode)\">\n                    <option [value]=\"scale.value\" *ngFor=\"let scale of scaleOption\">\n                      {{scale.display_value}}\n                    </option>\n                  </select>\n                </div>\n                <div class=\"single-control-container\">\n                  <input type=\"file\" id=\"user-upload\" class=\"file-upload-control\" (change)=\"setImgAsBgFromUser($event)\"\n                    accept=\"image/*\" />\n                </div>\n                <div class=\"color-item custom-image-item\" *ngFor=\"let image of bgImageList\"\n                  (click)=\"props.canvasBackgroundImage = image;setCanvasImage(image)\">\n                  <img [src]=\"image\" class=\"background-image\" />\n                </div>\n              </div>\n            </div>\n          </div>\n          <div @myInsertRemoveTrigger *ngIf=\"propertyPanel == true\" class=\"property-panel\">\n            <div class=\"property-panel-wrapper\">\n              <div class=\"property-panel-back-button-wrapper\">\n                <button class=\"property-panel-back-button move-right\" (click)=\"closePropertyPanel()\">\n                  <span>Back</span>\n                  <img src=\"assets/icons/right.svg\" class=\"back-button-icon\">\n                </button>\n                <div style=\"clear: both\"></div>\n              </div>\n              <div class=\"property-panel-content\">\n\n                <!-- Image Properties -->\n                <div class=\"single-control-container\" style=\"padding-top: 0px;\" *ngIf=\"imageEditor\">\n                  <button class=\"font-style-buttons\" style=\"width: 100%;color: white;height: 40px;\"\n                    (click)=\"enterReplaceMode()\">\n                    Replace Image\n                  </button>\n                </div>\n\n                <!-- position Block -->\n                <div class=\"shadow-container\">\n                  <p class=\"position-title\">Position</p>\n                  <div class=\"position-control-main-wrapper\">\n                    <div class=\"position-size-container\" *ngIf=\"isSingleMode == false\">\n                      <div class=\"position-type-container\">\n                        <span class=\"applyFor-title\">Apply For : </span>\n                        <span class=\"applyFor-value\" *ngIf=\"applyFor == 'all'\">All\n                          Layouts</span>\n                        <span class=\"applyFor-value\" *ngIf=\"applyFor == 'square'\">Rectangle\n                          Layouts</span>\n                        <span class=\"applyFor-value\" *ngIf=\"applyFor == 'portrait'\">Vertical\n                          Layouts</span>\n                        <span class=\"applyFor-value\" *ngIf=\"applyFor == 'landscape'\">Horizontal\n                          Layouts</span>\n                      </div>\n                      <div class=\"position-type-button-container\">\n                        <button class=\"position-type-button\" [ngClass]=\"{'active': applyFor == 'all'}\"\n                          (click)=\"applyFor = 'all'\">\n                          <svg viewBox=\"0 0 18 18\">\n                            <path fill=\"#FFF\"\n                              d=\"M13,0 L18,0 L18,18 L13,18 L13,0 Z M0,13 L11,13 L11,18 L0,18 L0,13 Z M0,0 L11,0 L11,11 L0,11 L0,0 Z\">\n                            </path>\n                          </svg>\n                        </button>\n                        <button class=\"position-type-button\" [ngClass]=\"{'active': applyFor == 'square'}\"\n                          (click)=\"applyFor = 'square'\">\n                          <svg viewBox=\"0 0 18 18\">\n                            <rect width=\"8\" height=\"8\" x=\"5\" y=\"5\" fill=\"#FFF\" stroke=\"#FFF\" stroke-width=\"2\">\n                            </rect>\n                          </svg>\n                        </button>\n                        <button class=\"position-type-button\" [ngClass]=\"{'active': applyFor == 'portrait'}\"\n                          (click)=\"applyFor = 'portrait'\">\n                          <svg viewBox=\"0 0 18 18\">\n                            <rect width=\"4\" height=\"16\" x=\"7\" y=\"1\" fill=\"#FFF\" stroke=\"#FFF\" stroke-width=\"2\">\n                            </rect>\n                          </svg>\n                        </button>\n                        <button class=\"position-type-button\" [ngClass]=\"{'active': applyFor == 'landscape'}\"\n                          (click)=\"applyFor = 'landscape'\">\n                          <svg viewBox=\"0 0 18 18\">\n                            <rect width=\"16\" height=\"4\" x=\"1\" y=\"7\" fill=\"#FFF\" stroke=\"#FFF\" stroke-width=\"2\">\n                            </rect>\n                          </svg>\n                        </button>\n                      </div>\n                    </div>\n                    <div class=\"position-control-container\">\n                      <div class=\"position-type-container custom-margin\">\n                        <span class=\"applyFor-title\">Position : </span>\n                        <span class=\"applyFor-value\" *ngIf=\"objPosition == 'tl'\">Top Left</span>\n                        <span class=\"applyFor-value\" *ngIf=\"objPosition == 'tm'\">Top\n                          Center</span>\n                        <span class=\"applyFor-value\" *ngIf=\"objPosition == 'tr'\">Top\n                          Right</span>\n                        <span class=\"applyFor-value\" *ngIf=\"objPosition == 'ml'\">Middle\n                          Left</span>\n                        <span class=\"applyFor-value\" *ngIf=\"objPosition == 'mm'\">Center</span>\n                        <span class=\"applyFor-value\" *ngIf=\"objPosition == 'mr'\">Middle\n                          Right</span>\n                        <span class=\"applyFor-value\" *ngIf=\"objPosition == 'bl'\">Bottom\n                          Left</span>\n                        <span class=\"applyFor-value\" *ngIf=\"objPosition == 'bm'\">Bottom\n                          Center</span>\n                        <span class=\"applyFor-value\" *ngIf=\"objPosition == 'br'\">Bottom\n                          Right</span>\n                      </div>\n                      <div class=\"position-button-container\">\n                        <button [ngClass]=\"{'active': objPosition == 'tl'}\" class=\"position-button\"\n                          (click)=\"changePosition('tl')\">\n                          <svg class=\"tl\" viewBox=\"0 0 18 18\">\n                            <polygon points=\"9 1 7.59 2.41 13.17 8 1 8 1 10 13.17 10 7.59 15.59 9 17 17 9\">\n                            </polygon>\n                          </svg>\n                        </button>\n                        <button [ngClass]=\"{'active': objPosition == 'tm'}\" class=\"position-button\"\n                          (click)=\"changePosition('tm')\">\n                          <svg class=\"tm\" viewBox=\"0 0 18 18\">\n                            <polygon points=\"9 1 7.59 2.41 13.17 8 1 8 1 10 13.17 10 7.59 15.59 9 17 17 9\">\n                            </polygon>\n                          </svg>\n                        </button>\n                        <button [ngClass]=\"{'active': objPosition == 'tr'}\" class=\"position-button\"\n                          (click)=\"changePosition('tr')\">\n                          <svg class=\"tr\" viewBox=\"0 0 18 18\">\n                            <polygon points=\"9 1 7.59 2.41 13.17 8 1 8 1 10 13.17 10 7.59 15.59 9 17 17 9\">\n                            </polygon>\n                          </svg>\n                        </button>\n                        <button [ngClass]=\"{'active': objPosition == 'ml'}\" class=\"position-button\"\n                          (click)=\"changePosition('ml')\">\n                          <svg class=\"ml\" viewBox=\"0 0 18 18\">\n                            <polygon points=\"9 1 7.59 2.41 13.17 8 1 8 1 10 13.17 10 7.59 15.59 9 17 17 9\">\n                            </polygon>\n                          </svg>\n                        </button>\n                        <button [ngClass]=\"{'active': objPosition == 'mm'}\" class=\"position-button\"\n                          (click)=\"changePosition('mm')\">\n                          <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 640 512\">\n                            <path fill=\"#ffffff\"\n                              d=\"M640 239.87v31.26A15.88 15.88 0 0 1 624.14 287H15.87A15.88 15.88 0 0 1 0 271.13v-31.26A15.88 15.88 0 0 1 15.87 224h608.27A15.88 15.88 0 0 1 640 239.87z\" />\n                          </svg>\n                        </button>\n                        <button [ngClass]=\"{'active': objPosition == 'mr'}\" class=\"position-button\"\n                          (click)=\"changePosition('mr')\">\n                          <svg viewBox=\"0 0 18 18\">\n                            <polygon points=\"9 1 7.59 2.41 13.17 8 1 8 1 10 13.17 10 7.59 15.59 9 17 17 9\">\n                            </polygon>\n                          </svg>\n                        </button>\n                        <button [ngClass]=\"{'active': objPosition == 'bl'}\" class=\"position-button\"\n                          (click)=\"changePosition('bl')\">\n                          <svg class=\"bl\" viewBox=\"0 0 18 18\">\n                            <polygon points=\"9 1 7.59 2.41 13.17 8 1 8 1 10 13.17 10 7.59 15.59 9 17 17 9\">\n                            </polygon>\n                          </svg>\n                        </button>\n                        <button [ngClass]=\"{'active': objPosition == 'bm'}\" class=\"position-button\"\n                          (click)=\"changePosition('bm')\">\n                          <svg class=\"bm\" viewBox=\"0 0 18 18\">\n                            <polygon points=\"9 1 7.59 2.41 13.17 8 1 8 1 10 13.17 10 7.59 15.59 9 17 17 9\">\n                            </polygon>\n                          </svg>\n                        </button>\n                        <button [ngClass]=\"{'active': objPosition == 'br'}\" class=\"position-button\"\n                          (click)=\"changePosition('br')\">\n                          <svg class=\"br\" viewBox=\"0 0 18 18\">\n                            <polygon points=\"9 1 7.59 2.41 13.17 8 1 8 1 10 13.17 10 7.59 15.59 9 17 17 9\">\n                            </polygon>\n                          </svg>\n                        </button>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n\n                <!-- Text Properties (Text value) -->\n                <div class=\"single-control-container\" *ngIf=\"textEditor\">\n                  <span class=\"single-control-lable\">Text : </span>\n                  <textarea class=\"text-value-container\" [(ngModel)]=\"props.text\"\n                    (keyup)=\"setText(props.text)\"></textarea>\n                </div>\n\n                <!-- Text Properties (Text value) -->\n                <div class=\"single-control-container\" *ngIf=\"buttonEditor\">\n                  <span class=\"single-control-lable\">Text : </span>\n                  <textarea class=\"text-value-container\" [(ngModel)]=\"props.text\"\n                    (keyup)=\"setButtonText(props.text, buttonEditor)\" (focus)=\"focusButtonTextArea()\"\n                    (blur)=\"blurButtonTextArea()\"></textarea>\n                </div>\n\n                <!-- Text Properties (Font) -->\n                <div class=\"single-control-container\" *ngIf=\"textEditor || buttonEditor\">\n                  <span class=\"single-control-lable\">Font : </span>\n                  <select class=\"font-selection-box\" [(ngModel)]=\"props.fontFamily\"\n                    (change)=\"changeFontFamily(props.fontFamily, buttonEditor)\">\n                    <option [value]=\"font.fontName\" *ngFor=\"let font of fontList\">\n                      {{font.fontLabel}}\n                    </option>\n                  </select>\n                </div>\n\n                <!-- Text Properties (font Size) -->\n                <div class=\"single-control-container\" *ngIf=\"textEditor || buttonEditor\">\n                  <span class=\"single-control-lable\">Size : </span>\n                  <input type=\"number\" class=\"text-size-value-container\" [(ngModel)]=\"props.fontSize\"\n                    (change)=\"setFontSize(props.fontSize, buttonEditor)\" />\n                </div>\n\n                <!-- Text Properties (Style) -->\n                <div class=\"single-control-container\" *ngIf=\"textEditor || buttonEditor\">\n                  <span class=\"single-control-lable\">Style : </span>\n                  <div>\n                    <button class=\"font-style-buttons\" (click)=\"toggleStyle('bold', buttonEditor)\"\n                      [ngClass]=\"{'active': props.isBold}\">\n                      <svg preserveAspectRatio=\"xMidYMid meet\" style=\"height: 20px; width: 20px;\" version=\"1.0\"\n                        viewBox=\"0 0 1024.000000 1024.000000\" xmlns=\"http://www.w3.org/2000/svg\"\n                        class=\"ng-star-inserted\">\n                        <g fill=\"#ffffff\" stroke=\"none\"\n                          transform=\"translate(0.000000,1024.000000) scale(0.100000,-0.100000)\">\n                          <path\n                            d=\"M1480 5120 l0 -5100 2343 3 c2191 2 2349 4 2447 20 384 65 716 180 1017 352 464 265 850 654 1113 1124 159 282 280 640 335 991 26 159 32 576 11 754 -100 860 -566 1621 -1288 2104 -84 56 -96 67 -85 81 7 9 46 62 89 118 500 666 687 1540 507 2368 -172 788 -678 1481 -1382 1894 -271 158 -574 274 -882 336 -278 56 -218 55 -2302 55 l-1923 0 0 -5100z m3456 3629 c443 -61 820 -439 967 -969 163 -585 8 -1236 -386 -1622 -139 -137 -294 -226 -477 -276 l-95 -26 -637 -4 -638 -3 0 1455 0 1456 594 0 c372 0 624 -4 672 -11z m734 -4381 c239 -59 418 -163 592 -347 391 -411 518 -1086 312 -1663 -40 -112 -138 -295 -208 -389 -76 -100 -216 -238 -304 -298 -94 -63 -235 -128 -347 -158 l-100 -28 -972 -3 -973 -3 0 1456 0 1456 968 -4 c843 -3 975 -5 1032 -19z\">\n                          </path>\n                        </g>\n                      </svg>\n                    </button>\n                    <button class=\"font-style-buttons\" (click)=\"toggleStyle('italic', buttonEditor)\"\n                      [ngClass]=\"{'active': props.isItalic}\">\n                      <svg preserveAspectRatio=\"xMidYMid meet\" style=\"height: 20px; width: 20px;\" version=\"1.0\"\n                        viewBox=\"0 0 1024.000000 1024.000000\" xmlns=\"http://www.w3.org/2000/svg\"\n                        class=\"ng-star-inserted\">\n                        <g fill=\"#ffffff\" stroke=\"none\"\n                          transform=\"translate(0.000000,1024.000000) scale(0.100000,-0.100000)\">\n                          <path\n                            d=\"M4065 10206 c-203 -64 -335 -243 -335 -451 0 -205 133 -385 329 -445 60 -19 95 -20 742 -20 373 0 679 -3 679 -7 -1 -5 -376 -1880 -833 -4168 l-833 -4160 -794 -5 -795 -5 -75 -36 c-133 -65 -220 -164 -255 -292 -24 -88 -17 -230 14 -310 43 -109 148 -214 258 -259 l58 -23 1975 0 1975 0 78 37 c383 183 344 743 -62 868 -60 19 -95 20 -742 20 -373 0 -679 3 -679 8 1 4 376 1879 833 4167 l833 4160 794 5 795 5 75 36 c180 87 270 230 270 428 0 141 -47 249 -147 341 -61 56 -90 73 -171 101 -53 18 -118 19 -2001 18 -1544 0 -1954 -3 -1986 -13z\">\n                          </path>\n                        </g>\n                      </svg>\n                    </button>\n                    <button class=\"font-style-buttons\" (click)=\"toggleStyle('underline', buttonEditor)\"\n                      [ngClass]=\"{'active': props.isUnderLine}\">\n                      <svg preserveAspectRatio=\"xMidYMid meet\" style=\"height:20px; width:20px;\" version=\"1.0\"\n                        viewBox=\"0 0 1024.000000 1024.000000\" xmlns=\"http://www.w3.org/2000/svg\"\n                        class=\"ng-star-inserted\">\n                        <g fill=\"#ffffff\" stroke=\"none\"\n                          transform=\"translate(0.000000,1024.000000) scale(0.100000,-0.100000)\">\n                          <path\n                            d=\"M1953 7533 c3 -2684 3 -2688 24 -2813 48 -279 103 -484 190 -705 240 -609 662 -1129 1212 -1494 398 -263 826 -423 1336 -498 171 -25 639 -25 810 0 289 43 514 101 750 194 820 323 1475 978 1798 1798 87 221 142 426 190 705 21 125 21 129 24 2813 l3 2687 -425 0 -424 0 -4 -2617 c-3 -2364 -4 -2628 -19 -2723 -53 -338 -148 -610 -306 -877 -557 -940 -1681 -1367 -2705 -1029 -824 272 -1429 975 -1571 1826 -34 205 -36 352 -36 2893 l0 2527 -425 0 -425 0 3 -2687z\">\n                          </path>\n                          <path d=\"M1810 445 l0 -425 3310 0 3310 0 0 425 0 425 -3310 0 -3310 0 0 -425z\">\n                          </path>\n                        </g>\n                      </svg>\n                    </button>\n                    <button class=\"font-style-buttons\" (click)=\"toggleStyle('strikethrough', buttonEditor)\"\n                      [ngClass]=\"{'active': props.isStrikeThrough}\">\n                      <svg preserveAspectRatio=\"xMidYMid meet\" style=\"height: 20px; width: 20px;\" version=\"1.0\"\n                        viewBox=\"0 0 1024.000000 1024.000000\" xmlns=\"http://www.w3.org/2000/svg\"\n                        class=\"ng-star-inserted\">\n                        <g fill=\"#ffffff\" stroke=\"none\"\n                          transform=\"translate(0.000000,1024.000000) scale(0.100000,-0.100000)\">\n                          <path\n                            d=\"M4675 9759 c-1307 -110 -2276 -639 -2723 -1489 -107 -204 -190 -463 -228 -715 -27 -178 -25 -540 4 -730 73 -471 247 -833 551 -1147 l96 -98 -1177 0 -1178 0 0 -460 0 -460 2528 0 2527 0 235 -40 c1162 -200 1666 -380 1985 -711 168 -174 258 -361 301 -624 22 -135 21 -370 -1 -500 -127 -750 -840 -1237 -2009 -1372 -203 -24 -735 -24 -943 0 -670 76 -1183 269 -1543 579 -157 136 -303 331 -367 489 -16 38 -32 69 -36 69 -15 0 -842 -302 -851 -311 -13 -12 33 -129 105 -267 384 -740 1188 -1249 2261 -1432 273 -47 442 -61 799 -67 458 -7 760 15 1111 82 1243 240 2101 927 2343 1879 56 220 69 340 69 606 -1 189 -5 263 -22 375 -73 472 -246 833 -551 1147 l-96 98 1178 0 1177 0 0 460 0 460 -2522 0 -2523 0 -265 45 c-701 120 -1122 226 -1444 364 -577 248 -837 625 -838 1216 -1 407 134 724 424 1000 446 424 1267 666 2183 642 809 -21 1449 -219 1886 -584 162 -134 320 -341 386 -504 16 -38 31 -69 35 -69 14 0 843 303 852 311 13 12 -34 129 -105 267 -384 739 -1175 1242 -2254 1431 -292 51 -440 63 -855 66 -217 2 -444 -1 -505 -6z\">\n                          </path>\n                        </g>\n                      </svg>\n                    </button>\n                    <button class=\"font-style-buttons\" (click)=\"toggleStyle('overline', buttonEditor)\"\n                      [ngClass]=\"{'active': props.isOverLine}\">\n                      <svg preserveAspectRatio=\"xMidYMid meet\" style=\"height: 20px; width: 20px;\" version=\"1.0\"\n                        viewBox=\"0 0 1024.000000 1024.000000\" xmlns=\"http://www.w3.org/2000/svg\"\n                        class=\"ng-star-inserted\">\n                        <g fill=\"#ffffff\" stroke=\"none\"\n                          transform=\"translate(0.000000,1024.000000) scale(0.100000,-0.100000)\">\n                          <path d=\"M20 9550 l0 -510 5100 0 5100 0 0 510 0 510 -5100 0 -5100 0 0 -510z\">\n                          </path>\n                          <path\n                            d=\"M2772 4266 c-1013 -2235 -1845 -4071 -1848 -4080 -6 -15 44 -16 573 -16 l580 0 563 1275 564 1275 1930 -2 1930 -3 559 -1272 560 -1273 580 0 c527 0 579 1 573 16 -3 9 -835 1845 -1848 4080 l-1841 4064 -517 0 -517 0 -1841 -4064z m3100 1139 l735 -1665 -1477 0 -1477 0 735 1665 c404 916 738 1665 742 1665 4 0 338 -749 742 -1665z\">\n                          </path>\n                        </g>\n                      </svg>\n                    </button>\n                  </div>\n                </div>\n\n                <!-- Text Properties (Alignement) -->\n                <div class=\"single-control-container\" *ngIf=\"textEditor || buttonEditor\">\n                  <span class=\"single-control-lable\">Allignment : </span>\n                  <div>\n                    <button class=\"font-style-buttons\" (click)=\"toggleAlignment('left', buttonEditor)\"\n                      [ngClass]=\"{'active': props.textAlign == 'left'}\">\n                      <svg preserveAspectRatio=\"xMidYMid meet\" style=\"height: 20px; width: 20px;\" version=\"1.0\"\n                        viewBox=\"0 0 1024.000000 1024.000000\" xmlns=\"http://www.w3.org/2000/svg\"\n                        class=\"ng-star-inserted\">\n                        <g fill=\"#ffffff\" stroke=\"none\"\n                          transform=\"translate(0.000000,1024.000000) scale(0.100000,-0.100000)\">\n                          <path\n                            d=\"M355 10210 c-234 -47 -392 -298 -331 -525 39 -148 138 -250 287 -296 59 -19 186 -19 4808 -19 4245 0 4753 2 4806 15 162 42 276 168 306 338 39 213 -120 440 -339 486 -63 13 -9472 14 -9537 1z\">\n                          </path>\n                          <path\n                            d=\"M330 8326 c-151 -41 -267 -155 -304 -301 -63 -241 79 -473 322 -524 38 -8 878 -11 3025 -11 3283 0 3032 -5 3146 63 141 84 219 254 193 421 -27 169 -135 298 -291 347 -62 19 -118 19 -3054 18 -2328 0 -3002 -3 -3037 -13z\">\n                          </path>\n                          <path\n                            d=\"M352 6469 c-110 -21 -214 -91 -272 -181 -153 -237 -38 -558 230 -638 64 -20 109 -20 4835 -18 l4770 3 68 32 c278 132 341 485 123 691 -62 59 -135 97 -216 112 -66 12 -9474 12 -9538 -1z\">\n                          </path>\n                          <path\n                            d=\"M320 4584 c-119 -32 -217 -116 -274 -234 -29 -60 -31 -73 -31 -170 0 -97 2 -110 32 -172 58 -123 166 -211 293 -238 41 -8 811 -10 3060 -8 l3005 3 67 32 c88 42 160 110 198 187 118 244 3 519 -248 596 -63 20 -103 20 -3056 19 -2600 0 -2998 -2 -3046 -15z\">\n                          </path>\n                          <path\n                            d=\"M353 2729 c-152 -30 -278 -142 -323 -286 -34 -112 -21 -242 36 -338 38 -65 134 -150 201 -177 l58 -23 4800 0 4800 0 67 32 c270 128 330 477 116 679 -65 61 -115 89 -200 109 -55 13 -648 15 -4788 14 -2599 -1 -4744 -5 -4767 -10z\">\n                          </path>\n                          <path\n                            d=\"M350 859 c-124 -24 -244 -122 -303 -246 -30 -63 -32 -76 -32 -173 0 -97 2 -110 32 -172 44 -94 109 -160 202 -206 l75 -37 3023 -3 3023 -2 62 21 c240 81 351 348 243 587 -51 112 -177 208 -304 232 -68 13 -5956 12 -6021 -1z\">\n                          </path>\n                        </g>\n                      </svg>\n                    </button>\n                    <button class=\"font-style-buttons\" (click)=\"toggleAlignment('center', buttonEditor)\"\n                      [ngClass]=\"{'active': props.textAlign == 'center'}\">\n                      <svg preserveAspectRatio=\"xMidYMid meet\" style=\"height: 20px; width: 20px;\" version=\"1.0\"\n                        viewBox=\"0 0 1024.000000 1024.000000\" xmlns=\"http://www.w3.org/2000/svg\"\n                        class=\"ng-star-inserted\">\n                        <g fill=\"#ffffff\" stroke=\"none\"\n                          transform=\"translate(0.000000,1024.000000) scale(0.100000,-0.100000)\">\n                          <path\n                            d=\"M320 10224 c-207 -55 -348 -276 -311 -485 24 -141 125 -271 248 -321 l58 -23 4790 -3 c4226 -2 4796 0 4841 13 71 21 166 87 210 146 97 133 110 311 32 463 -29 56 -109 138 -166 169 -113 62 288 57 -4907 56 -4140 0 -4747 -2 -4795 -15z\">\n                          </path>\n                          <path\n                            d=\"M2126 8349 c-249 -37 -413 -303 -337 -548 35 -113 93 -186 194 -245 100 -59 -83 -56 3133 -56 1936 0 2970 3 3005 10 30 6 82 24 116 41 202 98 284 350 185 563 -50 106 -126 175 -240 219 l-57 22 -2970 1 c-1633 1 -2996 -2 -3029 -7z\">\n                          </path>\n                          <path\n                            d=\"M341 6479 c-231 -45 -376 -268 -328 -503 37 -180 173 -310 354 -336 95 -13 9413 -13 9508 0 92 14 163 48 228 109 250 237 141 656 -189 726 -60 13 -696 15 -4799 14 -2606 -1 -4750 -5 -4774 -10z\">\n                          </path>\n                          <path\n                            d=\"M2052 4581 c-160 -55 -266 -195 -279 -366 -14 -181 73 -332 235 -412 l76 -38 3005 -3 c3359 -3 3070 -9 3189 68 102 65 164 163 181 284 30 212 -81 399 -277 465 l-61 21 -3008 0 c-2886 -1 -3010 -1 -3061 -19z\">\n                          </path>\n                          <path\n                            d=\"M350 2729 c-128 -21 -249 -112 -303 -227 -108 -230 -8 -490 223 -585 l55 -22 4765 -3 c3374 -1 4780 1 4817 9 129 26 238 113 296 237 30 62 32 74 32 172 0 86 -5 116 -23 163 -45 110 -127 189 -251 239 l-56 23 -4750 1 c-2759 1 -4773 -2 -4805 -7z\">\n                          </path>\n                          <path\n                            d=\"M2080 844 c-225 -60 -356 -295 -295 -528 35 -135 141 -246 273 -286 67 -20 80 -20 3083 -18 l3015 3 76 38 c168 82 254 252 227 444 -20 142 -110 262 -242 324 l-72 34 -3005 2 c-2622 2 -3012 0 -3060 -13z\">\n                          </path>\n                        </g>\n                      </svg>\n                    </button>\n                    <button class=\"font-style-buttons\" (click)=\"toggleAlignment('right', buttonEditor)\"\n                      [ngClass]=\"{'active': props.textAlign == 'right'}\">\n                      <svg preserveAspectRatio=\"xMidYMid meet\" style=\"height: 20px; width: 20px;\" version=\"1.0\"\n                        viewBox=\"0 0 1024.000000 1024.000000\" xmlns=\"http://www.w3.org/2000/svg\"\n                        class=\"ng-star-inserted\">\n                        <g fill=\"#ffffff\" stroke=\"none\"\n                          transform=\"translate(0.000000,1024.000000) scale(0.100000,-0.100000)\">\n                          <path\n                            d=\"M340 10204 c-253 -68 -390 -356 -282 -589 54 -114 139 -188 263 -226 59 -19 186 -19 4798 -19 4236 0 4743 2 4796 15 162 42 279 172 307 339 36 215 -122 439 -340 485 -38 8 -1353 11 -4770 10 -4119 0 -4724 -2 -4772 -15z\">\n                          </path>\n                          <path\n                            d=\"M3840 8324 c-158 -42 -275 -178 -301 -349 -35 -222 112 -434 330 -475 80 -15 5952 -14 6023 1 170 36 297 168 329 341 39 212 -101 427 -315 484 -80 21 -5986 19 -6066 -2z\">\n                          </path>\n                          <path\n                            d=\"M362 6469 c-210 -41 -354 -227 -339 -438 13 -184 125 -329 295 -381 63 -20 110 -20 4808 -20 l4745 0 60 20 c79 27 123 56 182 119 122 130 148 320 67 481 -55 109 -174 197 -299 220 -67 12 -9456 12 -9519 -1z\">\n                          </path>\n                          <path\n                            d=\"M3843 4585 c-159 -43 -267 -158 -300 -320 -40 -197 53 -382 235 -468 l67 -32 3030 0 3030 0 55 22 c260 106 349 425 181 648 -41 54 -114 108 -191 141 -44 19 -114 19 -3050 21 -2566 1 -3013 0 -3057 -12z\">\n                          </path>\n                          <path\n                            d=\"M362 2729 c-61 -12 -148 -53 -198 -94 -146 -120 -187 -362 -88 -530 38 -65 134 -150 201 -177 l58 -23 4790 0 4790 0 67 32 c219 103 307 357 199 571 -32 64 -116 149 -179 181 -106 54 223 51 -4882 50 -2593 -1 -4734 -5 -4758 -10z\">\n                          </path>\n                          <path\n                            d=\"M3870 859 c-118 -23 -246 -123 -295 -231 -108 -239 3 -506 243 -587 l61 -21 2995 0 c2954 0 2995 0 3058 20 160 49 267 175 291 343 32 221 -117 429 -341 476 -65 14 -5942 14 -6012 0z\">\n                          </path>\n                        </g>\n                      </svg>\n                    </button>\n                    <button class=\"font-style-buttons\" (click)=\"toggleAlignment('justify', buttonEditor)\"\n                      [ngClass]=\"{'active': props.textAlign == 'justify'}\">\n                      <svg preserveAspectRatio=\"xMidYMid meet\" style=\"height: 20px; width: 20px;\" version=\"1.0\"\n                        viewBox=\"0 0 1024.000000 1024.000000\" xmlns=\"http://www.w3.org/2000/svg\"\n                        class=\"ng-star-inserted\">\n                        <g fill=\"#ffffff\" stroke=\"none\"\n                          transform=\"translate(0.000000,1024.000000) scale(0.100000,-0.100000)\">\n                          <path\n                            d=\"M355 9703 c-159 -35 -273 -138 -325 -294 -29 -83 -25 -225 8 -309 44 -112 134 -200 249 -243 l58 -22 4730 -3 c3267 -2 4751 1 4799 8 142 22 250 100 313 228 38 76 38 76 38 201 0 122 -1 128 -32 192 -60 122 -155 202 -278 234 -53 13 -558 15 -4800 14 -2607 -1 -4749 -3 -4760 -6z\">\n                          </path>\n                          <path\n                            d=\"M300 6921 c-75 -24 -96 -36 -153 -90 -94 -87 -137 -188 -137 -320 0 -186 89 -327 255 -403 l50 -23 4790 -3 c4703 -2 4791 -2 4847 17 110 37 192 113 245 227 26 55 28 68 28 184 0 114 -2 130 -26 180 -54 113 -146 196 -256 230 -65 20 -80 20 -4827 19 -4525 0 -4764 -1 -4816 -18z\">\n                          </path>\n                          <path\n                            d=\"M315 4166 c-120 -38 -206 -115 -263 -234 -36 -75 -37 -80 -37 -192 0 -95 4 -124 23 -170 44 -111 141 -207 252 -253 l55 -22 4745 -3 c3360 -1 4760 1 4797 9 130 26 247 121 306 246 26 57 32 83 35 161 5 116 -15 198 -67 280 -48 73 -99 117 -181 156 l-65 31 -4780 2 c-3842 1 -4788 -1 -4820 -11z\">\n                          </path>\n                          <path\n                            d=\"M340 1399 c-140 -28 -259 -139 -311 -291 -28 -83 -23 -224 10 -311 43 -110 132 -196 249 -241 l57 -21 4735 -3 c3384 -2 4754 0 4800 8 141 24 245 101 307 228 38 76 38 76 38 201 0 123 -1 128 -34 196 -60 123 -172 211 -300 235 -68 13 -9485 12 -9551 -1z\">\n                          </path>\n                        </g>\n                      </svg>\n                    </button>\n                    <!-- <button class=\"font-style-buttons\" (click)=\"toggleAlignment('justify-left')\"\n                      [ngClass]=\"{'active': props.textAlign == 'justify-left'}\">\n                      <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\" style=\"height: 20px; width: 20px;\">\n                        <path fill=\"#ffffff\"\n                          d=\"M100.69 363.29c10 10 27.31 2.93 27.31-11.31V160c0-14.32-17.33-21.31-27.31-11.31l-96 96a16 16 0 000 22.62zM432 416H16a16 16 0 00-16 16v32a16 16 0 0016 16h416a16 16 0 0016-16v-32a16 16 0 00-16-16zm3.17-128H204.83A12.82 12.82 0 00192 300.83v38.34A12.82 12.82 0 00204.83 352h230.34A12.82 12.82 0 00448 339.17v-38.34A12.82 12.82 0 00435.17 288zm0-128H204.83A12.82 12.82 0 00192 172.83v38.34A12.82 12.82 0 00204.83 224h230.34A12.82 12.82 0 00448 211.17v-38.34A12.82 12.82 0 00435.17 160zM432 32H16A16 16 0 000 48v32a16 16 0 0016 16h416a16 16 0 0016-16V48a16 16 0 00-16-16z\" />\n                      </svg>\n                    </button>\n                    <button class=\"font-style-buttons\" (click)=\"toggleAlignment('justify-right')\"\n                      [ngClass]=\"{'active': props.textAlign == 'justify-right'}\">\n                      <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\" style=\"height: 20px; width: 20px;\">\n                        <path fill=\"#ffffff\"\n                          d=\"M27.31 363.3l96-96a16 16 0 000-22.62l-96-96C17.27 138.66 0 145.78 0 160v192c0 14.31 17.33 21.3 27.31 11.3zM432 416H16a16 16 0 00-16 16v32a16 16 0 0016 16h416a16 16 0 0016-16v-32a16 16 0 00-16-16zm3.17-128H204.83A12.82 12.82 0 00192 300.83v38.34A12.82 12.82 0 00204.83 352h230.34A12.82 12.82 0 00448 339.17v-38.34A12.82 12.82 0 00435.17 288zm0-128H204.83A12.82 12.82 0 00192 172.83v38.34A12.82 12.82 0 00204.83 224h230.34A12.82 12.82 0 00448 211.17v-38.34A12.82 12.82 0 00435.17 160zM432 32H16A16 16 0 000 48v32a16 16 0 0016 16h416a16 16 0 0016-16V48a16 16 0 00-16-16z\" />\n                      </svg>\n                    </button> -->\n                  </div>\n                </div>\n\n                <!-- Button Properties (text opacity)-->\n                <property-slider *ngIf=\"buttonEditor\" lable=\"Text Opacity\" min=\"0\" max=\"1\" step=\"0.1\"\n                  [modal]=\"props.textOpacity\"\n                  (onChange)=\"props.textOpacity = $event; setOpacity(props.textOpacity, true)\" format=\"opacity\">\n                </property-slider>\n\n                <!-- Text Properties (Opacity spacing lineHeight) -->\n                <property-slider *ngIf=\"textEditor || imageEditor\" lable=\"Opacity\" min=\"0\" max=\"1\" step=\"0.1\"\n                  [modal]=\"props.opacity\" (onChange)=\"props.opacity = $event; setOpacity(props.opacity)\"\n                  format=\"opacity\">\n                </property-slider>\n                <property-slider *ngIf=\"textEditor || buttonEditor\" lable=\"Spacing\" min=\"-200\" max=\"1000\" step=\"1\"\n                  [modal]=\"props.charSpacing\"\n                  (onChange)=\"props.charSpacing = $event; setSpacing(props.charSpacing, buttonEditor)\">\n                </property-slider>\n                <property-slider *ngIf=\"textEditor || buttonEditor\" lable=\"Line Height\" min=\"0.1\" max=\"10\" step=\"0.1\"\n                  [modal]=\"props.lineHeight\"\n                  (onChange)=\"props.lineHeight = $event; setLineHeight(props.lineHeight, buttonEditor)\">\n                </property-slider>\n\n                <!-- Text Properties (Color) -->\n                <div class=\"single-control-container\" *ngIf=\"textEditor || buttonEditor\">\n                  <span class=\"single-control-lable\">Color : </span>\n                  <div style=\"display: flex;\">\n                    <span class=\"color-value-display\" (click)=\"copyValue(props.fill)\">{{props.fill}}</span>\n                    <div class=\"color-picker-button\" [cpPosition]=\"'left-top'\"\n                      (cpSliderDragEnd)=\"setFill(props.fill, buttonEditor)\"\n                      (cpInputChange)=\"setFill(props.fill, buttonEditor)\" [(colorPicker)]=\"props.fill\"\n                      [style.background]=\"props.fill\">\n                    </div>\n                  </div>\n                </div>\n\n                <!-- Text Properties (background Color) -->\n                <div class=\"single-control-container\" *ngIf=\"textEditor || buttonEditor\">\n                  <span class=\"single-control-lable\">Background Color : </span>\n                  <div style=\"display: flex;\">\n                    <span class=\"color-value-display\"\n                      (click)=\"copyValue(props.backgroundColor)\">{{props.backgroundColor}}</span>\n                    <div class=\"color-picker-button\"\n                      (cpSliderDragEnd)=\"setBackground(props.backgroundColor, buttonEditor)\" [cpPosition]=\"'left-top'\"\n                      (cpInputChange)=\"setBackground(props.backgroundColor, buttonEditor)\"\n                      [(colorPicker)]=\"props.backgroundColor\" [style.background]=\"props.backgroundColor\">\n                    </div>\n                  </div>\n                </div>\n\n                <!-- Button Properties -->\n                <div class=\"shadow-container\" *ngIf=\"buttonEditor || iconButtonEditor\">\n                  <span class=\"group-title\">Color Properties</span>\n                  <div class=\"button-bg-color-tab-cotnainer\">\n                    <Button class=\"background-tabs-links tab-button-btn-background\"\n                      [ngClass]=\"{'active': activeButtonBackgroundTab == 'tab_1'}\"\n                      (click)=\"openButtonBackgroundTab('tab_1')\">Solid</Button>\n                    <Button class=\"background-tabs-links tab-button-btn-background\"\n                      [ngClass]=\"{'active': activeButtonBackgroundTab == 'tab_2'}\"\n                      (click)=\"openButtonBackgroundTab('tab_2')\">Gradient</Button>\n                  </div>\n                  <div class=\"single-control-container\" *ngIf=\"activeButtonBackgroundTab == 'tab_1'\">\n                    <span class=\"single-control-lable\">Background Color : </span>\n                    <div style=\"display: flex;\">\n                      <span class=\"color-value-display\"\n                        (click)=\"copyValue(props.buttonFill)\">{{props.buttonFill}}</span>\n                      <div class=\"color-picker-button\" [cpOutputFormat]=\"'rgba'\" [cpPosition]=\"'left-top'\"\n                        (cpSliderDragEnd)=\"setButtonFill(props.buttonFill)\"\n                        (cpInputChange)=\"setButtonFill(props.buttonFill)\" [(colorPicker)]=\"props.buttonFill\"\n                        [style.background]=\"props.buttonFill\">\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"single-control-container\" *ngIf=\"activeButtonBackgroundTab == 'tab_2'\">\n                    <div class=\"gradient-control-container\">\n                      <div>\n                        <button class=\"gradient-type-btn\" [ngClass]=\"{'active': props.gradientType == 'linear'}\"\n                          (click)=\"props.gradientType = 'linear'; setButtonGradient(props.buttonGradientArray)\">\n                          <div class=\"linear-gradient gradient-icon\"></div>\n                        </button>\n                        <button class=\"gradient-type-btn\" [ngClass]=\"{'active': props.gradientType == 'radial'}\"\n                          (click)=\"props.gradientType = 'radial'; setButtonGradient(props.buttonGradientArray)\">\n                          <div class=\"radial-gradient gradient-icon\"></div>\n                        </button>\n                        <div class=\"is-center-checkbox-container\" *ngIf=\"props.gradientType == 'radial'\">\n                          <input type=\"checkbox\" [(ngModel)]=\"props.gradientPositionIsCenter\" id=\"isCenterGradient\"\n                            name=\"isCenterGradient\" class=\"is-center-checkbox\"\n                            (change)=\"setButtonGradient(props.buttonGradientArray)\">\n                          <label for=\"isCenterGradient\" class=\"center-gradient-chckbox\">\n                            Center</label>\n                        </div>\n                      </div>\n                      <gradient-picker #button class=\"gradient-color-control\" [containerClass]=\"'gradient-picker-class'\"\n                        (onPickerChange)=\"setButtonGradient($event)\" [colorArray]=\"props.buttonGradientArray\"\n                        [minColorStop]=\"0\" [maxColorStop]=\"1\" [maximumColors]=\"5\" [type]=\"'button'\">\n                      </gradient-picker>\n                      <circular-angle-control\n                        *ngIf=\"props.gradientType != 'radial' || props.gradientPositionIsCenter != true\" [radius]=\"25\"\n                        [angle]=\"props.buttonGradientAngle\"\n                        (onAngleChangeEnd)=\"props.buttonGradientAngle = $event; setButtonGradient(props.buttonGradientArray)\">\n                      </circular-angle-control>\n                    </div>\n                  </div>\n                </div>\n\n                <div class=\"shadow-container\" *ngIf=\"buttonEditor || iconButtonEditor\">\n                  <span class=\"group-title\">Button Properties</span>\n                  <div class=\"single-control-container\">\n                    <span class=\"single-control-lable\">Border Color : </span>\n                    <div style=\"display: flex;\">\n                      <span class=\"color-value-display\"\n                        (click)=\"copyValue(props.buttonStrokeColor)\">{{props.buttonStrokeColor}}</span>\n                      <div class=\"color-picker-button\" [cpOutputFormat]=\"'hex'\" [cpPosition]=\"'left-top'\"\n                        (cpSliderDragEnd)=\"setButtonStrokeColor(props.buttonStrokeColor)\"\n                        (cpInputChange)=\"setButtonStrokeColor(props.buttonStrokeColor)\"\n                        [(colorPicker)]=\"props.buttonStrokeColor\" [style.background]=\"props.buttonStrokeColor\"></div>\n                    </div>\n                  </div>\n                  <!-- <div class=\"single-control-container\">\n                                        <span class=\"single-control-lable\">Background Color : </span>\n                                        <div style=\"display: flex;\">\n                                            <span class=\"color-value-display\"\n                                                (click)=\"copyValue(props.buttonFill)\">{{props.buttonFill}}</span>\n                                            <div class=\"color-picker-button\" [cpOutputFormat]=\"'rgba'\"\n                                                [cpPosition]=\"'left-top'\"\n                                                (cpSliderDragEnd)=\"setButtonFill(props.buttonFill)\"\n                                                (cpInputChange)=\"setButtonFill(props.buttonFill)\"\n                                                [(colorPicker)]=\"props.buttonFill\"\n                                                [style.background]=\"props.buttonFill\">\n                                            </div>\n                                        </div>\n                                    </div> -->\n                  <property-slider lable=\"Button Opacity\" min=\"0\" max=\"1\" step=\"0.1\" [modal]=\"props.opacity\"\n                    (onChange)=\"props.opacity = $event; setOpacity(props.opacity)\" format=\"opacity\">\n                  </property-slider>\n                  <property-slider lable=\"Border Size\" min=\"0\" max=\"30\" step=\"1\" [modal]=\"props.buttonStrokeWidth\"\n                    (onChange)=\"props.buttonStrokeWidth = $event; setButtonStrokeSize(props.buttonStrokeWidth)\">\n                  </property-slider>\n                  <property-slider lable=\"Corner Radius\" min=\"0\" max=\"100\" step=\"1\" [modal]=\"props.buttonRadius\"\n                    (onChange)=\"props.buttonRadius = $event; setButtonRadius(props.buttonRadius)\">\n                  </property-slider>\n                </div>\n\n                <!-- Text Properties (Shadow) -->\n                <div class=\"shadow-container\" *ngIf=\"textEditor || buttonEditor || iconButtonEditor\">\n                  <span class=\"group-title\">Shadow Properties</span>\n                  <div class=\"single-control-container\">\n                    <span class=\"single-control-lable\">Shadow Color : </span>\n                    <div style=\"display: flex;\">\n                      <span class=\"color-value-display\"\n                        (click)=\"copyValue(props.shadow.color)\">{{props.shadow.color}}</span>\n                      <div class=\"color-picker-button\" [cpOutputFormat]=\"'hex'\" [cpPosition]=\"'left-top'\"\n                        (cpSliderDragEnd)=\"setShadow(props.shadow, buttonEditor || iconButtonEditor)\"\n                        (cpInputChange)=\"setShadow(props.shadow, buttonEditor || iconButtonEditor)\"\n                        [(colorPicker)]=\"props.shadow.color\" [style.background]=\"props.shadow.color\"></div>\n                    </div>\n                  </div>\n                  <property-slider lable=\"Shadow Blur\" min=\"0\" max=\"100\" step=\"1\" [modal]=\"props.shadow.blur\"\n                    (onChange)=\"props.shadow.blur = $event; setShadow(props.shadow, buttonEditor || iconButtonEditor)\">\n                  </property-slider>\n                  <property-slider lable=\"Offset X\" min=\"-100\" max=\"100\" step=\"1\" [modal]=\"props.shadow.offsetX\"\n                    (onChange)=\"props.shadow.offsetX = $event; setShadow(props.shadow, buttonEditor || iconButtonEditor)\">\n                  </property-slider>\n                  <property-slider lable=\"Offset Y\" min=\"-100\" max=\"100\" step=\"1\" [modal]=\"props.shadow.offsetY\"\n                    (onChange)=\"props.shadow.offsetY = $event; setShadow(props.shadow, buttonEditor || iconButtonEditor)\">\n                  </property-slider>\n                </div>\n\n                <!-- Button Properties (button Text Shadow) -->\n                <div class=\"shadow-container\" *ngIf=\"buttonEditor\">\n                  <span class=\"group-title\">Button Text Shadow</span>\n                  <div class=\"single-control-container\">\n                    <span class=\"single-control-lable\">Color : </span>\n                    <div style=\"display: flex;\">\n                      <span class=\"color-value-display\"\n                        (click)=\"copyValue(props.TShadow.color)\">{{props.TShadow.color}}</span>\n                      <div class=\"color-picker-button\" [cpOutputFormat]=\"'hex'\" [cpPosition]=\"'left-top'\"\n                        (cpSliderDragEnd)=\"setBTextShadow(props.TShadow, true)\"\n                        (cpInputChange)=\"setBTextShadow(props.TShadow)\" [(colorPicker)]=\"props.TShadow.color\"\n                        [style.background]=\"props.TShadow.color\">\n                      </div>\n                    </div>\n                  </div>\n                  <property-slider lable=\"Shadow Blur\" min=\"0\" max=\"100\" step=\"1\" [modal]=\"props.TShadow.blur\"\n                    (onChange)=\"props.TShadow.blur = $event; setBTextShadow(props.TShadow, true)\">\n                  </property-slider>\n                  <property-slider lable=\"Offset X\" min=\"-100\" max=\"100\" step=\"1\" [modal]=\"props.TShadow.offsetX\"\n                    (onChange)=\"props.TShadow.offsetX = $event; setBTextShadow(props.TShadow, true)\">\n                  </property-slider>\n                  <property-slider lable=\"Offset Y\" min=\"-100\" max=\"100\" step=\"1\" [modal]=\"props.TShadow.offsetY\"\n                    (onChange)=\"props.TShadow.offsetY = $event; setBTextShadow(props.TShadow, true)\">\n                  </property-slider>\n                </div>\n\n                <!-- Icon Button Properties -->\n                <div class=\"shadow-container\" *ngIf=\"iconButtonEditor\">\n                  <span class=\"group-title\">Button Icon Properties</span>\n                  <div class=\"single-control-container\">\n                    <span class=\"single-control-lable\">Colors : </span>\n                    <div style=\"display: flex;\">\n                      <div class=\"color-picker-button\" style=\"margin: 0px 5px;\" [cpOutputFormat]=\"'hex'\"\n                        *ngFor=\"let color of props.buttonIconColors\" [cpPosition]=\"'left-top'\"\n                        (cpSliderDragEnd)=\"setButtonIconFill(props.buttonIconColors)\"\n                        (cpInputChange)=\"setButtonIconFill(props.buttonIconColors)\" [(colorPicker)]=\"color.color\"\n                        [style.background]=\"color.color\"></div>\n                    </div>\n                  </div>\n                  <property-slider lable=\"Icon Size\" min=\"5\" max=\"100\" step=\"1\" [modal]=\"props.buttonIconSize\"\n                    (onChange)=\"props.buttonIconSize = $event; setButtonIconSize(props.buttonIconSize)\">\n                  </property-slider>\n                </div>\n\n                <!-- Image Properties -->\n                <div class=\"single-control-container\" *ngIf=\"imageEditor\">\n                  <span class=\"single-control-lable\">Flip : </span>\n                  <div style=\"display: flex;\">\n                    <button class=\"font-style-buttons\" (click)=\"flipImage('horizontal')\">\n                      <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\" style=\"width: 20px; height: 20px\">\n                        <path fill=\"#ffffff\"\n                          d=\"M399.959 170.585c-4.686 4.686-4.686 12.284 0 16.971L451.887 239H60.113l51.928-51.444c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0l-84.485 84c-4.686 4.686-4.686 12.284 0 16.971l84.485 84c4.686 4.686 12.284 4.686 16.97 0l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L60.113 273h391.773l-51.928 51.444c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l84.485-84c4.687-4.686 4.687-12.284 0-16.971l-84.485-84c-4.686-4.686-12.284-4.686-16.97 0l-7.07 7.071z\" />\n                      </svg>\n                    </button>\n                    <button class=\"font-style-buttons\" (click)=\"flipImage('vertical')\">\n                      <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 192 512\" style=\"width: 20px; height: 20px\">\n                        <path fill=\"#ffffff\"\n                          d=\"M181.415 399.959c-4.686-4.686-12.284-4.686-16.971 0L113 451.887V60.113l51.444 51.928c4.686 4.686 12.284 4.686 16.971 0l7.07-7.071c4.686-4.686 4.686-12.284 0-16.97l-84-84.485c-4.686-4.686-12.284-4.686-16.971 0L3.515 88c-4.686 4.686-4.686 12.284 0 16.97l7.07 7.071c4.686 4.686 12.284 4.686 16.971 0L79 60.113v391.773l-51.444-51.928c-4.686-4.686-12.284-4.686-16.971 0l-7.07 7.071c-4.686 4.686-4.686 12.284 0 16.97l84 84.485c4.686 4.687 12.284 4.687 16.971 0l84-84.485c4.686-4.686 4.686-12.284 0-16.97l-7.071-7.07z\" />\n                      </svg>\n                    </button>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"editor-container\"\n      [ngClass]=\"{'shown-left-sidebar': !isLeftShown, 'shown-right-sidebar': !isRightShown}\">\n      <div class=\"canvas-wrapper\">\n        <div id=\"canvas-container\">\n          <div class=\"canvas-item-container\"\n            [ngClass]=\"{'display-block': (isSingleMode == true && canvas.locked == false) || (isSingleMode == false && canvas.locked == true), 'display-none':  (isSingleMode != true || canvas.locked != false) && (isSingleMode != false || canvas.locked != true)}\"\n            *ngFor=\"let canvas of bannerSet; let i=index\">\n            <p class=\"canvasSizeLable\" [ngStyle]=\"{'max-width': canvas.width + 'px'}\" style=\"margin: 10px 0px;\">\n              {{canvas.width}}px X {{canvas.height}}px <br />\n              {{canvas.sizeType}}</p>\n            <canvas id=\"{{'canvas-' + i}}\"></canvas>\n            <div class=\"unlockCanvasButton\" [ngStyle]=\"{'max-width': canvas.width + 'px'}\">\n              <labled-icon-button (onClick)=\"downloadSingleCanvas(i)\" lable=\"Download\" color=\"#ffffff\"\n                backgroundColor=\"#1E1E1E\" iconSrc=\"assets/icons/downloadicon.svg\" style=\"margin: 5px;\">\n              </labled-icon-button>\n              <!-- *ngIf=\"(isSingleMode == true && canvas.locked == false)\" -->\n\n              <labled-icon-button (onClick)=\"exitSingleMode(i)\" lable=\"Exit\" color=\"#ffffff\" backgroundColor=\"#db4d40\"\n                *ngIf=\"(isSingleMode == true && canvas.locked == false)\" style=\"margin: 5px;\">\n              </labled-icon-button>\n\n              <labled-icon-button (onClick)=\"unlockSingleCanvas(i)\" lable=\"Edit\" color=\"#ffffff\"\n                backgroundColor=\"#1E1E1E\" iconSrc=\"assets/icons/edit.svg\"\n                *ngIf=\"(isSingleMode == false && canvas.locked == true)\" style=\"margin: 5px;\">\n              </labled-icon-button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"editor-right-sidebar\" style=\"width: 265px;\"\n      [ngClass]=\"{'shown': isRightShown, 'hidden': !isRightShown}\">\n      <button class=\"toggle-right-sidebar-button\" *ngIf=\"!isSingleMode\" (click)=\"toggleBar('right')\">\n        <img src=\"assets/icons/right.svg\" class=\"toggle-bar-icon\" *ngIf=\"isRightShown\" />\n        <img src=\"assets/icons/left.svg\" class=\"toggle-bar-icon\" *ngIf=\"!isRightShown\" />\n      </button>\n      <div class=\"right-wrapper\">\n        <div class=\"inner-right-wrapper\">\n          <div class=\"layer-cotainer\" *ngIf=\"layers.length > 0\">\n            <p class=\"layer-title\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 341.333 341.333\"\n                style=\"width: 15px;height: 12px;margin: 0px 10px;\">\n                <path\n                  d=\"M128 128h85.333v85.333H128zM0 0h85.333v85.333H0zM128 256h85.333v85.333H128zM0 128h85.333v85.333H0zM0 256h85.333v85.333H0zM256 0h85.333v85.333H256zM128 0h85.333v85.333H128zM256 128h85.333v85.333H256zM256 256h85.333v85.333H256z\"\n                  fill=\"#ffffff\" />\n              </svg>\n              Select Layer\n              <button class=\"deselect-button\" (click)=\"deselectObject()\">\n                <svg preserveAspectRatio=\"xMidYMid meet\" class=\"deselect-icon\" version=\"1.0\"\n                  viewBox=\"0 0 1024.000000 1024.000000\" xmlns=\"http://www.w3.org/2000/svg\">\n                  <g fill=\"#ffffff\" stroke=\"none\" transform=\"translate(0.000000,1024.000000) scale(0.100000,-0.100000)\">\n                    <path\n                      d=\"M1458 10206 c-98 -35 -175 -102 -225 -198 l-28 -53 -3 -4092 -2 -4092 21 -56 c30 -80 119 -173 201 -210 80 -36 202 -41 286 -12 40 14 309 208 1074 773 562 415 1025 753 1029 752 5 -2 420 -640 923 -1418 502 -778 933 -1437 957 -1464 65 -74 149 -110 264 -114 75 -3 100 0 152 20 98 37 1958 1106 2008 1154 105 101 143 280 87 407 -10 23 -404 642 -875 1375 -472 732 -857 1336 -857 1340 0 4 516 151 1148 326 695 192 1171 329 1209 347 70 33 138 103 175 177 20 41 23 62 23 157 0 98 -3 116 -26 166 -15 32 -44 74 -66 95 -48 48 -7159 4591 -7225 4616 -58 22 -194 24 -250 4z m3400 -2911 c1578 -1007 2869 -1831 2868 -1832 -1 -1 -453 -126 -1005 -278 -552 -152 -1022 -285 -1044 -297 -62 -31 -144 -114 -174 -176 -37 -76 -44 -202 -16 -282 12 -34 358 -582 906 -1436 488 -760 887 -1386 887 -1391 0 -5 -269 -163 -597 -351 -469 -269 -600 -339 -609 -329 -6 6 -424 656 -928 1442 -995 1552 -973 1520 -1090 1564 -109 40 -226 36 -320 -11 -21 -11 -424 -304 -895 -652 -471 -348 -862 -636 -868 -640 -10 -6 -13 648 -13 3254 0 2817 2 3260 14 3253 8 -4 1306 -831 2884 -1838z\">\n                    </path>\n                    <path d=\"M6680 9435 l0 -395 1175 0 1175 0 0 395 0 395 -1175 0 -1175 0 0 -395z\">\n                    </path>\n                  </g>\n                </svg>\n                <span class=\"deselect-lable\">Deselect</span>\n              </button>\n            </p>\n            <div class=\"overflow-y-scroll\">\n              <div class=\"layer-item\" [ngClass]=\"{'activated-layer': activatedLayer.id == layer.id }\"\n                *ngFor=\"let layer of layers\" (click)=\"selectLayer(layer);\">\n                <div class=\"layer-title-container\">\n                  <span *ngIf=\"layer.contentType == 5\">(Button) {{layer.text}}</span>\n                  <img [src]=\"layer.src\" *ngIf=\"layer.contentType == 6\" class=\"layer-thumbnail\" />\n                  <span *ngIf=\"layer.contentType == 1\">{{layer.text}}</span>\n                  <img [src]=\"layer.src\" *ngIf=\"layer.contentType == 2\" class=\"layer-thumbnail\" />\n                </div>\n                <button class=\"deselect-button custom-position\" (click)=\"deleteLayer(layer);$event.stopPropagation();\">\n                  <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 448 512\" class=\"deselect-icon\">\n                    <path fill=\"#fff\"\n                      d=\"M432 32H312l-9.4-18.7A24 24 0 00281.1 0H166.8a23.72 23.72 0 00-21.4 13.3L136 32H16A16 16 0 000 48v32a16 16 0 0016 16h416a16 16 0 0016-16V48a16 16 0 00-16-16zM53.2 467a48 48 0 0047.9 45h245.8a48 48 0 0047.9-45L416 128H32z\" />\n                  </svg>\n                  <span class=\"deselect-lable\">Delete</span>\n                </button>\n              </div>\n            </div>\n          </div>\n          <app-not-found *ngIf=\"layers.length <= 0\" title=\"No Layer Found\" class=\"no-data-margin\">\n          </app-not-found>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"loader-overlay\" *ngIf=\"loader\" (click)=\"backdropClick ? dismissLoader() : null\">\n  <img src=\"assets/icons/loader.gif\" style=\"margin: auto;width: 60px;height: 60px;\" />\n</div>\n<div class=\"error-dialog\" [ngClass]=\"{'show': isErrorShow, 'hide': !isErrorShow}\">\n  {{error}}\n  <button class=\"error-action-button\" *ngIf=\"isActionButton\" (click)=\"hideError()\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 512\" class=\"error-action-icon\">\n      <path fill=\"#fff\"\n        d=\"M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z\" />\n    </svg>\n  </button>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/icon-button-generator/icon-button-generator.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/icon-button-generator/icon-button-generator.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n    <div class=\"header-style\">\n        <labled-icon-button (onClick)=\"downloadJson()\" lable=\"Download JSON\" color=\"#ffffff\" backgroundColor=\"#179D5B\"\n            iconSrc=\"assets/icons/downloadicon.svg\" style=\"margin: 0px 10px;float: right;\"></labled-icon-button>\n    </div>\n    <div class=\"main-wrapper\">\n        <div class=\"editor-left-sidebar shown\">\n            <div class=\"vertical-tab-button-container\">\n                <button class=\"tab-button tablinks active\">\n                    <img src=\"./assets/icons/heading-white.svg\" class=\"tab-icon\" />\n                    <p class=\"tab-title\">Properties</p>\n                </button>\n            </div>\n            <div class=\"left-wrapper\">\n                <div class=\"inner-left-wrapper\">\n                    <div class=\"property-panel\">\n                        <div class=\"property-panel-wrapper\">\n                            <div class=\"property-panel-content\" *ngIf=\"selected\">\n\n                                <div class=\"single-control-container\">\n                                    <span class=\"single-control-lable\">Change All Icon Colors : </span>\n                                    <div style=\"display: flex;\">\n                                        <div class=\"color-picker-button\" style=\"margin: 0px 5px;\"\n                                            [cpOutputFormat]=\"'hex'\"\n                                            [cpPosition]=\"'left-bottom'\"\n                                            (cpSliderDragEnd)=\"setButtonIconFillForAll()\"\n                                            (cpInputChange)=\"setButtonIconFillForAll()\"\n                                            [(colorPicker)]=\"props.buttonIconColor\" [style.background]=\"props.buttonIconColor\"></div>\n                                    </div>\n                                </div>\n                                \n                                <!-- Button Size Properties (Size) -->\n                                <div class=\"single-control-container\">\n                                    <span class=\"single-control-lable\">Width : </span>\n                                    <input type=\"number\" class=\"text-size-value-container\" [(ngModel)]=\"props.width\"\n                                        (change)=\"setButtonSize({width: props.width, height: props.height})\" />\n                                </div>\n                                <div class=\"single-control-container\">\n                                    <span class=\"single-control-lable\">Height : </span>\n                                    <input type=\"number\" class=\"text-size-value-container\" [(ngModel)]=\"props.height\"\n                                        (change)=\"setButtonSize({width: props.width, height: props.height})\" />\n                                </div>\n\n\n                                <!-- Button Properties -->\n                                <div class=\"shadow-container\">\n                                    <span class=\"group-title\">Color Properties</span>\n                                    <div class=\"button-bg-color-tab-cotnainer\">\n                                        <Button class=\"background-tabs-links tab-button-btn-background\"\n                                            [ngClass]=\"{'active': activeButtonBackgroundTab == 'tab_1'}\"\n                                            (click)=\"openButtonBackgroundTab('tab_1')\">Solid</Button>\n                                        <Button class=\"background-tabs-links tab-button-btn-background\"\n                                            [ngClass]=\"{'active': activeButtonBackgroundTab == 'tab_2'}\"\n                                            (click)=\"openButtonBackgroundTab('tab_2')\">Gradient</Button>\n                                    </div>\n                                    <div class=\"single-control-container\" *ngIf=\"activeButtonBackgroundTab == 'tab_1'\">\n                                        <span class=\"single-control-lable\">Background Color : </span>\n                                        <div style=\"display: flex;\">\n                                            <span class=\"color-value-display\"\n                                                (click)=\"copyValue(props.buttonFill)\">{{props.buttonFill}}</span>\n                                            <div class=\"color-picker-button\" [cpOutputFormat]=\"'rgba'\"\n                                                [cpPosition]=\"'left-bottom'\"\n                                                (cpSliderDragEnd)=\"setButtonFill(props.buttonFill)\"\n                                                (cpInputChange)=\"setButtonFill(props.buttonFill)\"\n                                                [(colorPicker)]=\"props.buttonFill\"\n                                                [style.background]=\"props.buttonFill\">\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"single-control-container no-margin\" *ngIf=\"activeButtonBackgroundTab == 'tab_2'\">\n                                        <div class=\"color-picker-button\" [cpOutputFormat]=\"'hex'\"\n                                            [cpPosition]=\"'right-bottom'\"\n                                            (cpSliderChange)=\"changeGradientIndexColor(props.activeGradientColorIndex, props.activeGradientColor)\"\n                                            (cpInputChange)=\"changeGradientIndexColor(props.activeGradientColorIndex, props.activeGradientColor)\"\n                                            [(colorPicker)]=\"props.activeGradientColor\"\n                                            [style.background]=\"props.activeGradientColor\"></div>\n                                        <div>\n                                            <button class=\"gradient-type-btn\"\n                                                [ngClass]=\"{'active': props.gradientType == 'linear'}\"\n                                                (click)=\"props.gradientType = 'linear'; setButtonGradient(props.buttonGradientArray)\">\n                                                <div class=\"linear-gradient gradient-icon\"></div>\n                                            </button>\n                                            <button class=\"gradient-type-btn\"\n                                                [ngClass]=\"{'active': props.gradientType == 'radial'}\"\n                                                (click)=\"props.gradientType = 'radial'; setButtonGradient(props.buttonGradientArray)\">\n                                                <div class=\"radial-gradient gradient-icon\"></div>\n                                            </button>\n                                            <div class=\"is-center-checkbox-container\"\n                                                *ngIf=\"props.gradientType == 'radial'\">\n                                                <input type=\"checkbox\" [(ngModel)]=\"props.gradientPositionIsCenter\"\n                                                    id=\"isCenterGradient\" name=\"isCenterGradient\"\n                                                    class=\"is-center-checkbox\"\n                                                    (change)=\"setButtonGradient(props.buttonGradientArray)\">\n                                                <label for=\"isCenterGradient\" class=\"center-gradient-chckbox\">\n                                                    Center</label>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"single-control-container\" *ngIf=\"activeButtonBackgroundTab == 'tab_2'\">\n                                        <div class=\"gradient-control-container\">\n                                            <gradient-picker #button class=\"gradient-color-control\"\n                                                [containerClass]=\"'gradient-picker-class'\"\n                                                (onPickerChange)=\"setButtonGradient($event)\"\n                                                (onColorSliding)=\"setButtonGradient($event)\"\n                                                (onColorControlActivate)=\"setActiveColor($event)\"\n                                                [colorArray]=\"props.buttonGradientArray\" [minColorStop]=\"0\"\n                                                [maxColorStop]=\"1\" [maximumColors]=\"5\" [type]=\"'button'\">\n                                            </gradient-picker>\n                                            <circular-angle-control\n                                                *ngIf=\"props.gradientType != 'radial' || props.gradientPositionIsCenter != true\"\n                                                [radius]=\"25\" [angle]=\"props.buttonGradientAngle\"\n                                                (onAngleChange)=\"props.buttonGradientAngle = $event; setButtonGradient(props.buttonGradientArray)\">\n                                            </circular-angle-control>\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <div class=\"shadow-container\">\n                                    <span class=\"group-title\">Button Properties</span>\n                                    <div class=\"single-control-container\">\n                                        <span class=\"single-control-lable\">Border Color : </span>\n                                        <div style=\"display: flex;\">\n                                            <span class=\"color-value-display\"\n                                                (click)=\"copyValue(props.buttonStrokeColor)\">{{props.buttonStrokeColor}}</span>\n                                            <div class=\"color-picker-button\" [cpOutputFormat]=\"'hex'\"\n                                                [cpPosition]=\"'left-top'\"\n                                                (cpSliderDragEnd)=\"setButtonStrokeColor(props.buttonStrokeColor)\"\n                                                (cpInputChange)=\"setButtonStrokeColor(props.buttonStrokeColor)\"\n                                                [(colorPicker)]=\"props.buttonStrokeColor\"\n                                                [style.background]=\"props.buttonStrokeColor\"></div>\n                                        </div>\n                                    </div>\n                                    <property-slider timeOut=\"0\" lable=\"Button Opacity\" min=\"0\" max=\"1\" step=\"0.1\"\n                                        [modal]=\"props.opacity\"\n                                        (onChange)=\"props.opacity = $event; setOpacity(props.opacity, true)\"\n                                        format=\"opacity\">\n                                    </property-slider>\n                                    <property-slider timeOut=\"0\" lable=\"Border Size\" min=\"0\" max=\"30\" step=\"1\"\n                                        [modal]=\"props.buttonStrokeWidth\"\n                                        (onChange)=\"props.buttonStrokeWidth = $event; setButtonStrokeSize(props.buttonStrokeWidth)\">\n                                    </property-slider>\n                                    <property-slider timeOut=\"0\" lable=\"Corner Radius\" min=\"0\" max=\"100\" step=\"1\"\n                                        [modal]=\"props.buttonRadius\"\n                                        (onChange)=\"props.buttonRadius = $event; setButtonRadius(props.buttonRadius)\">\n                                    </property-slider>\n                                </div>\n\n                                <!-- Text Properties (Shadow) -->\n                                <div class=\"shadow-container\">\n                                    <span class=\"group-title\">Shadow Properties</span>\n                                    <div class=\"single-control-container\">\n                                        <span class=\"single-control-lable\">Shadow Color : </span>\n                                        <div style=\"display: flex;\">\n                                            <span class=\"color-value-display\"\n                                                (click)=\"copyValue(props.shadow.color)\">{{props.shadow.color}}</span>\n                                            <div class=\"color-picker-button\" [cpOutputFormat]=\"'hex'\"\n                                                [cpPosition]=\"'left-top'\" (cpSliderDragEnd)=\"setShadow(props.shadow)\"\n                                                (cpInputChange)=\"setShadow(props.shadow)\"\n                                                [(colorPicker)]=\"props.shadow.color\"\n                                                [style.background]=\"props.shadow.color\"></div>\n                                        </div>\n                                    </div>\n                                    <property-slider timeOut=\"0\" lable=\"Shadow Blur\" min=\"0\" max=\"100\" step=\"1\"\n                                        [modal]=\"props.shadow.blur\"\n                                        (onChange)=\"props.shadow.blur = $event; setShadow(props.shadow)\">\n                                    </property-slider>\n                                    <property-slider timeOut=\"0\" lable=\"Offset X\" min=\"-100\" max=\"100\" step=\"1\"\n                                        [modal]=\"props.shadow.offsetX\"\n                                        (onChange)=\"props.shadow.offsetX = $event; setShadow(props.shadow)\">\n                                    </property-slider>\n                                    <property-slider timeOut=\"0\" lable=\"Offset Y\" min=\"-100\" max=\"100\" step=\"1\"\n                                        [modal]=\"props.shadow.offsetY\"\n                                        (onChange)=\"props.shadow.offsetY = $event; setShadow(props.shadow)\">\n                                    </property-slider>\n                                </div>\n\n                                <!-- Icon Button Properties -->\n                                <div class=\"shadow-container\">\n                                    <span class=\"group-title\">Button Icon Properties</span>\n                                    <div class=\"single-control-container\">\n                                        <span class=\"single-control-lable\">Colors : </span>\n                                        <div style=\"display: flex;\">\n                                            <div class=\"color-picker-button\" style=\"margin: 0px 5px;\"\n                                                [cpOutputFormat]=\"'hex'\" *ngFor=\"let color of props.buttonIconColors\"\n                                                [cpPosition]=\"'left-top'\"\n                                                (cpSliderChange)=\"setButtonIconFill(props.buttonIconColors)\"\n                                                (cpInputChange)=\"setButtonIconFill(props.buttonIconColors)\"\n                                                [(colorPicker)]=\"color.color\" [style.background]=\"color.color\"></div>\n                                        </div>\n                                    </div>\n                                    <property-slider timeOut=\"0\" lable=\"Icon Size\" min=\"5\" max=\"100\" step=\"1\"\n                                        [modal]=\"props.buttonIconSize\"\n                                        (onChange)=\"props.buttonIconSize = $event; setButtonIconSize(props.buttonIconSize)\">\n                                    </property-slider>\n                                </div>\n\n                            </div>\n                            <app-not-found *ngIf=\"!selected\" title=\"No Object Selected\" class=\"no-data-margin\">\n                            </app-not-found>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"editor-container\">\n            <div class=\"canvas-wrapper\">\n                <div id=\"canvas-container\">\n                    <span class=\"error\">{{error}}</span>\n                    <div class=\"canvas-item-container\">\n                        <canvas id=\"canvas\"></canvas>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/not-found/not-found.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/not-found/not-found.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"no-layer-found\">\n    <svg class=\"sdbar-logo\" version=\"1.0\" viewBox=\"0 0 982 156\" xmlns=\"http://www.w3.org/2000/svg\">\n        <g fill=\"#fff\">\n            <path\n                d=\"M759.4 1.4c-.3.9-.4 2.3-.1 3 .4.9-.2 1.7-1.4 2.1-2.1.7-2.4 2.1-.9 6 1 2.7 1 2.7-2.5 2.1l-3.5-.7V19c0 2.7.1 5 .3 5 .1 0 1.7-.4 3.5-.9 1.7-.5 3.2-.8 3.2-.7 0 2.2-2.6 6.5-4.1 6.9-1 .3-1.9 1.2-1.9 2s-1.2 1.8-2.7 2.2c-3.3.8-6.3 3.3-6.3 5.2 0 .8 2 6.3 4.5 12.4 2.5 6 4.3 11.5 3.9 12.1-.4.5 0 1.4.7 1.9 1 .6.6.9-1.3.9-2.1 0-3.1.8-4.4 3.5-2.2 4.6-1.3 6.5 2.9 6.5 3.1 0 3.5.4 4.1 3.1.9 4.7.7 8.7-.9 16.2-1.7 8.2-6.3 18.7-8.1 18.7-1.7 0-1.8 1.2-.3 2.7 1.6 1.6.4 3-5.6 6.4l-5.3 3V140h58.6v-13.9l-5.3-3c-6-3.4-7.2-4.8-5.6-6.4 1.5-1.5 1.4-2.7-.3-2.7-3.8 0-10.5-24.4-8.9-32.8.8-4.4 1-4.7 4.3-5.2 3.8-.5 5.3-3.5 2.8-5.4-.8-.6-1.7-1.9-2.1-2.9-.3-.9-1.7-1.7-2.9-1.7-1.7 0-1.9-.3-.9-.9.7-.5 1.1-1.4.7-1.9-.4-.6 1.4-6.1 3.9-12.1C780 45 782 39.5 782 38.7c0-1.9-3-4.4-6.2-5.2-1.6-.4-2.8-1.4-2.8-2.2 0-.8-.9-1.7-1.9-2-1.1-.3-2.1-1.2-2.4-2.1-.3-1-.8-2.5-1.2-3.4-.6-1.5-.3-1.6 2.7-.8 1.8.6 3.4 1 3.5 1 .2 0 .3-2.3.3-5v-5.1l-3.6.7-3.5.6 1.5-3.6c1.4-3.4 1.4-3.6-.7-4.8-1.3-.8-2.2-2.3-2.2-3.8 0-2-.6-2.6-2.8-2.8-1.8-.2-2.9.2-3.3 1.2zM546 82.5c0 68.2 0 69.5 2 71.5 2.6 2.6 9.1 2.7 12.8.1 1.5-1.1 8.1-5.1 14.7-9 6.6-3.9 14-8.5 16.5-10.4 2.5-1.8 7.8-5.3 11.8-7.7l7.2-4.5V83.4c0-36-.1-39.2-1.7-40.6-1-.8-8.1-5-15.8-9.3-7.7-4.3-16-9.2-18.5-10.8-11.9-8-15.9-9.7-22.6-9.7H546v69.5zm31.1-33.3c1.9.6 5.8 2.6 8.7 4.4L591 57v53.8l-3.7 3.2c-3.7 3.3-9.5 6.2-14.3 7.3l-2.5.6V85c0-41-.5-38.3 6.6-35.8zM508.2 29.4C496 36.7 484.6 44 483 45.5l-3 2.9V121.1l3.2 2.9c3.2 3 13.7 9 15.7 9 .8 0 1.1-5.9 1.1-19.5V94h19v49.6l2.8 2.6c6.6 6.3 16.1 9.1 17.6 5.2.3-.9.6-31.1.6-67.3 0-49.8-.3-66-1.2-66.9-3.2-3.2-7.9-1.3-30.6 12.2zM519 62v13h-19.1l.3-8.7.3-8.7 7.5-4.3c11.3-6.4 11-6.7 11 8.7zM211.2 22.8c-15.6 5.6-26.7 19.8-30.8 39.6-2.1 10.2-1.5 36.1 1 45.1 4.4 15.6 13.3 27.1 25.3 32.8 6.5 3.1 7.3 3.2 18.8 3.2 11.6 0 12.3-.1 18.6-3.2 8.3-4.1 16.9-13 20.9-21.5 5.4-11.7 6.5-17.6 6.5-36.3 0-14.8-.3-18-2.4-25.2-4.2-15-13.3-26.8-25.1-32.6-5.8-2.9-7.4-3.2-17-3.5-8.2-.2-11.7.2-15.8 1.6zm22.4 22.8c4.8 2.3 9.8 8.3 12.5 15 2.1 5.3 2.4 7.4 2.4 21.9 0 14.5-.3 16.6-2.4 21.9-2.7 6.8-8.2 13.3-12.8 15.3-4.8 1.9-12 1.6-17-.8-7.5-3.6-12.4-12.8-14.3-27-2.9-20.7 3.2-40.3 14.2-45.8 5.2-2.5 12.6-2.8 17.4-.5zM390.2 22.8c-15.6 5.6-26.7 19.8-30.8 39.6-2.1 10.2-1.5 36.1 1 45.1 4.4 15.6 13.3 27.1 25.3 32.8 6.5 3.1 7.3 3.2 18.8 3.2 11.6 0 12.3-.1 18.6-3.2 8.3-4.1 16.9-13 20.9-21.5 5.4-11.7 6.5-17.6 6.5-36.3 0-14.8-.3-18-2.4-25.2-4.2-15-13.3-26.8-25.1-32.6-5.8-2.9-7.4-3.2-17-3.5-8.2-.2-11.7.2-15.8 1.6zm22.4 22.8c4.8 2.3 9.8 8.3 12.5 15 2.1 5.3 2.4 7.4 2.4 21.9 0 14.5-.3 16.6-2.4 21.9-2.7 6.8-8.2 13.3-12.8 15.3-4.8 1.9-12 1.6-17-.8-7.5-3.6-12.4-12.8-14.3-27-2.9-20.7 3.2-40.3 14.2-45.8 5.2-2.5 12.6-2.8 17.4-.5zM925.3 22.4c-10.4 3.4-21.1 13.1-26.3 24.1-5.6 11.6-6.5 17.1-6.5 37.5.1 17.6.2 18.9 2.8 26.4 5.3 15 12.8 24.5 23.5 29.8 5.9 2.9 7.8 3.3 16.3 3.6 11.9.5 17.2-1.5 24.5-8.9l4.9-5 1 5.3 1 5.3 7.8.3 7.7.3V77h-42.1l.3 10.7.3 10.8 10.3.3c5.6.1 10.2.6 10.2 1.1 0 2.1-3.1 9.3-5.5 13-6.5 9.7-21.8 10.9-30.8 2.3-7.3-6.8-10.1-17.7-9.5-35.3.7-17.8 4.6-27.4 13.7-33.6 10.2-6.9 25.3-1.4 29.3 10.8l1.5 4.4 11.1.3c12.8.3 12.3.8 9.7-9.3-3.4-12.7-11.3-22.6-22.5-27.9-5.9-2.8-7.6-3.1-17.5-3.3-7.3-.2-12.4.2-15.2 1.1zM0 82.5V141h22v-41h13.6c15.6 0 19.3-.8 26-5.9C70.3 87.5 75 75.9 75 60.9c0-16.1-6.1-28.5-16.9-34.1L52.8 24H0v58.5zM46.3 48c4.1 2 5.8 6.1 5.8 13.6 0 7.2-1.4 10.8-5.3 13.7C44.6 77 42 77.4 33 77.8l-11 .5V45.8l10.8.4c6.1.3 11.9 1 13.5 1.8zM87 82.5V141h22V89h35v52h22V24h-22v43h-35V24H87v58.5zM274.4 25.3c-.2.7-.3 5.8-.2 11.3l.3 9.9 14.3.3 14.2.3V141h22V47.1l14.3-.3 14.2-.3.3-11.3.3-11.2h-39.6c-31.9 0-39.7.3-40.1 1.3zM640 82.5V141h22v-38.7l3.6-4.6c2-2.6 3.9-4.7 4.3-4.7.3 0 6.8 10.8 14.4 24l13.9 24h13.9c7.8 0 13.9-.4 13.9-.9s-9-16-20.1-34.4l-20.1-33.5 19.1-23.3c10.5-12.8 18.7-23.7 18.3-24.1-.5-.5-6.9-.7-14.3-.6l-13.4.3L679 45.9l-16.5 21.4-.3-21.6L662 24h-22v58.5zM801 82.5v58.6l10.3-.3 10.2-.3.5-37.3.5-37.3 17.9 37.6 17.9 37.5H880V23.9l-10.2.3-10.3.3-.5 36.4-.5 36.4-17.2-36.4-17.1-36.4-11.6-.3-11.6-.3v58.6z\" />\n        </g>\n    </svg>\n    <p class=\"no-layer-found-text\">{{title}}</p>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/circular-angle-control/circular-angle-control.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/circular-angle-control/circular-angle-control.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"circular-angle-control-wrapper\"\n    [ngStyle]=\"{'min-width': radius * 2 + 'px', 'min-height': radius * 2 + 'px'}\">\n    <div class=\"parimeter\"\n        [ngStyle]=\"{'border-color': borderColor, 'width': radius * 2 + 'px', 'height': radius * 2 + 'px', 'border-radius': radius + 'px'}\">\n        <div class=\"parimeter-center\" [ngStyle]=\"{'background-color': borderColor}\"></div>\n        <div class=\"drag-control\" #rotationControl (mousedown)=\"onMouseDown($event)\"\n            [ngStyle]=\"{'width': radius * 2 + 'px', 'height': radius * 2 + 'px'}\">\n            <div class=\"drag-control-rotation\" #dragControl [ngStyle]=\"{'background-color': borderColor}\"></div>\n            <div class=\"drag-control-line\" [ngStyle]=\"{'width': radius + 'px', 'background-color': borderColor}\"></div>\n        </div>\n        <span class=\"value-preview\" [ngClass]=\"{'display-block': isRotating}\" #valuePreview>{{angle}}</span>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/gradient-picker/gradient-picker.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/gradient-picker/gradient-picker.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"gradient-picker-wrapper\" [ngClass]=\"containerClass\">\n    <div #removeArea class=\"remove-color-area\" [title]=\"removeColorDragAreaTooltip\"></div>\n    <div class=\"color-preview\" [ngStyle]=\"{ background: cssBackground}\">\n    </div>\n    <div #addArea class=\"color-add-area\" (dblclick)=\"addColor($event, activeColorObject.color)\" [title]=\"addTooltip\">\n        <button type=\"color\" class=\"color-control\" (click)=\"$event.stopPropagation();\" [id]=\" type + '-color-' + i\"\n            *ngFor=\"let color of colorArray; let i=index\"\n            [ngClass]=\"{'active-color': activeColorObject.stop == color.stop }\"\n            [ngStyle]=\"{ 'left': color.stopInPercent + '%', 'background-color': color.color, 'border-color': backgroundColor }\"\n            (mousedown)=\"touchStart($event, color, i)\" (touchstart)=\"touchStart($event, color, i)\"\n            (dblclick)=\"$event.stopPropagation();openColorPicker(type + '-color-control-' + i)\" [title]=\"controlTooltip\">\n            <input type=\"color\" class=\"color-control-color\" (change)=\"changeColor(color.color, i)\"\n                [(ngModel)]=\"color.color\" [id]=\"type + '-color-control-' + i\" />\n        </button>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/labled-icon-button/labled-icon-button.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/labled-icon-button/labled-icon-button.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button class=\"labled-style-buttons\" (click)=\"onButtonClick()\" [style.backgroundColor]=\"backgroundColor\" [style.color]=\"color\" [ngClass]=\"{'padding': !iconSrc}\">\n    <img [src]=\"iconSrc\" *ngIf=\"iconSrc\" class=\"labled-icon\" [style.width.px]=\"iconSize\" [style.height.px]=\"iconSize\" />\n    <span class=\"lable\">{{lable}}</span>\n</button>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/property-slider/property-slider.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/property-slider/property-slider.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"single-control-container\">\n    <span class=\"single-control-lable\">{{lable}} : </span>\n    <div style=\"display: flex;\">\n        <input type=\"range\" (ngModelChange)=\"modal = $event; change($event)\" [min]=\"min\" [max]=\"max\" [step]=\"step\"\n            [(ngModel)]=\"modal\" class=\"slider\">\n        <span class=\"range-value\" *ngIf=\"format == ''\">{{modal}}</span>\n        <span class=\"range-value\" *ngIf=\"format == 'opacity'\">{{modal * 100}} %</span>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _choose_size_choose_size_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./choose-size/choose-size.component */ "./src/app/choose-size/choose-size.component.ts");
/* harmony import */ var _generator_experiment_generator_experiment_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./generator-experiment/generator-experiment.component */ "./src/app/generator-experiment/generator-experiment.component.ts");
/* harmony import */ var _button_generator_button_generator_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./button-generator/button-generator.component */ "./src/app/button-generator/button-generator.component.ts");
/* harmony import */ var _icon_button_generator_icon_button_generator_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icon-button-generator/icon-button-generator.component */ "./src/app/icon-button-generator/icon-button-generator.component.ts");







const routes = [
    {
        path: '',
        component: _choose_size_choose_size_component__WEBPACK_IMPORTED_MODULE_3__["ChooseSizeComponent"]
    },
    {
        path: 'generator',
        component: _generator_experiment_generator_experiment_component__WEBPACK_IMPORTED_MODULE_4__["GeneratorExperimentComponent"]
    },
    {
        path: 'buttonGenerator',
        component: _button_generator_button_generator_component__WEBPACK_IMPORTED_MODULE_5__["ButtonGeneratorComponent"]
    },
    {
        path: 'iconButtonGenerator',
        component: _icon_button_generator_icon_button_generator_component__WEBPACK_IMPORTED_MODULE_6__["IconButtonGeneratorComponent"]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.constants.ts":
/*!**********************************!*\
  !*** ./src/app/app.constants.ts ***!
  \**********************************/
/*! exports provided: designer, canvasConfig, canvasBorderOffset, isObjectSelectable, custom_attribute, defaultFontFamily, defaultGradientArray, gradientList, sizes, fontList, colorList, defaultBannerSet, textButtonList, iconButtonList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "designer", function() { return designer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canvasConfig", function() { return canvasConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canvasBorderOffset", function() { return canvasBorderOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObjectSelectable", function() { return isObjectSelectable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "custom_attribute", function() { return custom_attribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultFontFamily", function() { return defaultFontFamily; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultGradientArray", function() { return defaultGradientArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gradientList", function() { return gradientList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sizes", function() { return sizes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fontList", function() { return fontList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorList", function() { return colorList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultBannerSet", function() { return defaultBannerSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textButtonList", function() { return textButtonList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iconButtonList", function() { return iconButtonList; });
let designer = false;
const canvasConfig = {
    borderColor: "#00c3f9",
    cornerColor: "#00c3f9",
    cornerStrokeColor: "#ffffff",
    cornerStyle: "circle",
    minScaleLimit: 0,
    lockScalingFlip: true,
    selectionDashArray: [5, 0],
    borderDashArray: [5, 5],
    cornerDashArray: [2, 0],
    borderScaleFactor: 1,
    cornerSize: 15,
    transparentCorners: false,
    centeredRotation: true,
    preserveObjectStacking: true,
};
const canvasBorderOffset = 10;
const isObjectSelectable = designer ? true : false;
const custom_attribute = ['id', 'contentType', 'scaleMode', 'fontName', 'fontSrc', 'sizeType', 'text', 'locked', 'gradientAngle', 'isGradientInCenter', 'padding'];
const defaultFontFamily = {
    "fontPath": "fonts/Roboto-Regular.ttf",
    "fontName": "Roboto-Regular",
    "fontLabel": "Roboto-Regular",
    "className": "",
    "image": "",
    "fontSrc": "assets/fonts/Roboto-Regular.ttf",
    "catalogType": "Misc"
};
const defaultGradientArray = [
    { color: '#000', stop: 0, id: 0 },
    { color: '#fff', stop: 1, id: 1 }
];
const gradientList = [
    {
        "cssColor": "linear-gradient(90deg, #B6315D 0%, #F5867B 100%)",
        "colorArray": [
            {
                "color": "#B6315D",
                "stop": 0
            },
            {
                "color": "#F5867B",
                "stop": 1
            }
        ],
        "angle": 0,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(90deg, #FF3E46 0%, #FFAEAE 100%)",
        "colorArray": [
            {
                "color": "#FF3E46",
                "stop": 0
            },
            {
                "color": "#FFAEAE",
                "stop": 1
            }
        ],
        "angle": 0,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(90deg, #FF9B9F 0%, #FACFC3 100%)",
        "colorArray": [
            {
                "color": "#FF9B9F",
                "stop": 0
            },
            {
                "color": "#FACFC3",
                "stop": 1
            }
        ],
        "angle": 0,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(90deg, #ffb6b9 0%, #facfc3 100%)",
        "colorArray": [
            {
                "color": "#ffb6b9",
                "stop": 0
            },
            {
                "color": "#facfc3",
                "stop": 1
            }
        ],
        "angle": 0,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(90deg, #F5576C 0%, #F091F7 100%)",
        "colorArray": [
            {
                "color": "#F5576C",
                "stop": 0
            },
            {
                "color": "#F091F7",
                "stop": 1
            }
        ],
        "angle": 0,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(90deg, #F5576C 0%, #FFA3E3 100%)",
        "colorArray": [
            {
                "color": "#F5576C",
                "stop": 0
            },
            {
                "color": "#FFA3E3",
                "stop": 1
            }
        ],
        "angle": 0,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(90deg, #FFA1DF 0%, #FECFF1 100%)",
        "colorArray": [
            {
                "color": "#FFA1DF",
                "stop": 0
            },
            {
                "color": "#FECFF1",
                "stop": 1
            }
        ],
        "angle": 0,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(90deg, #FDCBF1 0%, #E6DEE9 100%)",
        "colorArray": [
            {
                "color": "#FDCBF1",
                "stop": 0
            },
            {
                "color": "#E6DEE9",
                "stop": 1
            }
        ],
        "angle": 0,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(90deg, #FF6233 0%, #F6D365 100%)",
        "colorArray": [
            {
                "color": "#FF6233",
                "stop": 0
            },
            {
                "color": "#F6D365",
                "stop": 1
            }
        ],
        "angle": 0,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(90deg, #FF8F6C 0%, #FFE080 100%)",
        "colorArray": [
            {
                "color": "#FF8F6C",
                "stop": 0
            },
            {
                "color": "#FFE080",
                "stop": 1
            }
        ],
        "angle": 0,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(90deg, #FFB69F 0%, #FFEBAC 100%)",
        "colorArray": [
            {
                "color": "#FFB69F",
                "stop": 0
            },
            {
                "color": "#FFEBAC",
                "stop": 1
            }
        ],
        "angle": 0,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(90deg, #FFD1C3 0%, #FFF4D4 100%)",
        "colorArray": [
            {
                "color": "#FFD1C3",
                "stop": 0
            },
            {
                "color": "#FFF4D4",
                "stop": 1
            }
        ],
        "angle": 0,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(90deg, #0BA360 0%, #3BBA91 100%)",
        "colorArray": [
            {
                "color": "#0BA360",
                "stop": 0
            },
            {
                "color": "#3BBA91",
                "stop": 1
            }
        ],
        "angle": 0,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(90deg, #01BC43 0%, #47FDA0 100%)",
        "colorArray": [
            {
                "color": "#01BC43",
                "stop": 0
            },
            {
                "color": "#47FDA0",
                "stop": 1
            }
        ],
        "angle": 0,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(90deg, #45FB9D 0%, #C7FFE2 100%)",
        "colorArray": [
            {
                "color": "#45FB9D",
                "stop": 0
            },
            {
                "color": "#C7FFE2",
                "stop": 1
            }
        ],
        "angle": 0,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(90deg, #BEFFDE 0%, #DDFFEE 100%)",
        "colorArray": [
            {
                "color": "#BEFFDE",
                "stop": 0
            },
            {
                "color": "#DDFFEE",
                "stop": 1
            }
        ],
        "angle": 0,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(90deg, #B11D75 0%, #FD5EBD 100%)",
        "colorArray": [
            {
                "color": "#B11D75",
                "stop": 0
            },
            {
                "color": "#FD5EBD",
                "stop": 1
            }
        ],
        "angle": 0,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(90deg, #FF51B9 0%, #FFA0D9 100%)",
        "colorArray": [
            {
                "color": "#FF51B9",
                "stop": 0
            },
            {
                "color": "#FFA0D9",
                "stop": 1
            }
        ],
        "angle": 0,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(90deg, #FF99D6 0%, #FFC9E9 100%)",
        "colorArray": [
            {
                "color": "#FF99D6",
                "stop": 0
            },
            {
                "color": "#FFC9E9",
                "stop": 1
            }
        ],
        "angle": 0,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(90deg, #FFB4E1 0%, #FFE0F2 100%)",
        "colorArray": [
            {
                "color": "#FFB4E1",
                "stop": 0
            },
            {
                "color": "#FFE0F2",
                "stop": 1
            }
        ],
        "angle": 0,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(90deg, #5272DF 0%, #34C3F3 100%)",
        "colorArray": [
            {
                "color": "#5272DF",
                "stop": 0
            },
            {
                "color": "#34C3F3",
                "stop": 1
            }
        ],
        "angle": 0,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(90deg, #6F86D6 0%, #48C5EF 100%)",
        "colorArray": [
            {
                "color": "#6F86D6",
                "stop": 0
            },
            {
                "color": "#48C5EF",
                "stop": 1
            }
        ],
        "angle": 0,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(90deg, #8DA4F2 0%, #78DBFC 100%)",
        "colorArray": [
            {
                "color": "#8DA4F2",
                "stop": 0
            },
            {
                "color": "#78DBFC",
                "stop": 1
            }
        ],
        "angle": 0,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(90deg, #B3C4FF 0%, #B9EDFF 100%)",
        "colorArray": [
            {
                "color": "#B3C4FF",
                "stop": 0
            },
            {
                "color": "#B9EDFF",
                "stop": 1
            }
        ],
        "angle": 0,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(90deg, #871C11 0%, #B14C1C 100%)",
        "colorArray": [
            {
                "color": "#871C11",
                "stop": 0
            },
            {
                "color": "#B14C1C",
                "stop": 1
            }
        ],
        "angle": 0,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(90deg, #AC471B 0%, #D68B66 100%)",
        "colorArray": [
            {
                "color": "#AC471B",
                "stop": 0
            },
            {
                "color": "#D68B66",
                "stop": 1
            }
        ],
        "angle": 0,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(90deg, #CD6D44 0%, #F2B699 100%)",
        "colorArray": [
            {
                "color": "#CD6D44",
                "stop": 0
            },
            {
                "color": "#F2B699",
                "stop": 1
            }
        ],
        "angle": 0,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(90deg, #DE8F6C 0%, #FFDDCC 100%)",
        "colorArray": [
            {
                "color": "#DE8F6C",
                "stop": 0
            },
            {
                "color": "#FFDDCC",
                "stop": 1
            }
        ],
        "angle": 0,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(90deg, #B224EF 0%, #7677FF 100%)",
        "colorArray": [
            {
                "color": "#B224EF",
                "stop": 0
            },
            {
                "color": "#7677FF",
                "stop": 1
            }
        ],
        "angle": 0,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(90deg, #D77BFF 0%, #9E9EFF 100%)",
        "colorArray": [
            {
                "color": "#D77BFF",
                "stop": 0
            },
            {
                "color": "#9E9EFF",
                "stop": 1
            }
        ],
        "angle": 0,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(90deg, #CC63FF 0%, #BBE2FC 100%)",
        "colorArray": [
            {
                "color": "#CC63FF",
                "stop": 0
            },
            {
                "color": "#BBE2FC",
                "stop": 1
            }
        ],
        "angle": 0,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(90deg, #DAABFF 0%, #D5F4FE 100%)",
        "colorArray": [
            {
                "color": "#DAABFF",
                "stop": 0
            },
            {
                "color": "#D5F4FE",
                "stop": 1
            }
        ],
        "angle": 0,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(90deg, #39EB4E 0%, #01B7E6 100%)",
        "colorArray": [
            {
                "color": "#39EB4E",
                "stop": 0
            },
            {
                "color": "#01B7E6",
                "stop": 1
            }
        ],
        "angle": 0,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(90deg, #67FF78 0%, #5ADCFE 100%)",
        "colorArray": [
            {
                "color": "#67FF78",
                "stop": 0
            },
            {
                "color": "#5ADCFE",
                "stop": 1
            }
        ],
        "angle": 0,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(90deg, #A7FFB0 0%, #A9EDFE 100%)",
        "colorArray": [
            {
                "color": "#A7FFB0",
                "stop": 0
            },
            {
                "color": "#A9EDFE",
                "stop": 1
            }
        ],
        "angle": 0,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(90deg, #BDFFC4 0%, #CDF5FE 100%)",
        "colorArray": [
            {
                "color": "#BDFFC4",
                "stop": 0
            },
            {
                "color": "#CDF5FE",
                "stop": 1
            }
        ],
        "angle": 0,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(90deg, #FFC250 0%, #B430D0 100%)",
        "colorArray": [
            {
                "color": "#FFC250",
                "stop": 0
            },
            {
                "color": "#B430D0",
                "stop": 1
            }
        ],
        "angle": 0,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(90deg, #FFCF78 0%, #DA59F5 100%)",
        "colorArray": [
            {
                "color": "#FFCF78",
                "stop": 0
            },
            {
                "color": "#DA59F5",
                "stop": 1
            }
        ],
        "angle": 0,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(90deg, #FFE2AD 0%, #EA86FE 100%)",
        "colorArray": [
            {
                "color": "#FFE2AD",
                "stop": 0
            },
            {
                "color": "#EA86FE",
                "stop": 1
            }
        ],
        "angle": 0,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(90deg, #FFEDCE 0%, #F0A9FF 100%)",
        "colorArray": [
            {
                "color": "#FFEDCE",
                "stop": 0
            },
            {
                "color": "#F0A9FF",
                "stop": 1
            }
        ],
        "angle": 0,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(rgb(255, 255, 255) 0%, rgb(225, 230, 236) 100%)",
        "colorArray": [
            {
                "color": "rgb(255,255,255)",
                "stop": 0
            },
            {
                "color": "rgb(227,226,226)",
                "stop": 1
            }
        ],
        "angle": 270,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(rgb(216, 223, 227) 0%, rgb(174, 184, 189) 100%)",
        "colorArray": [
            {
                "color": "rgb(229,234,236)",
                "stop": 0
            },
            {
                "color": "rgb(175,185,190)",
                "stop": 1
            }
        ],
        "angle": 270,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(rgb(255, 180, 61) 0%, rgb(255, 142, 61) 100%)",
        "colorArray": [
            {
                "color": "rgb(255,180,62)",
                "stop": 0
            },
            {
                "color": "rgb(255,143,61)",
                "stop": 1
            }
        ],
        "angle": 270,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(rgb(255, 230, 93) 0%, rgb(247, 195, 74) 100%)",
        "colorArray": [
            {
                "color": "rgb(255,229,92)",
                "stop": 0
            },
            {
                "color": "rgb(247,195,74)",
                "stop": 1
            }
        ],
        "angle": 270,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(rgb(203, 255, 90) 0%, rgb(129, 213, 69) 100%)",
        "colorArray": [
            {
                "color": "rgb(200,252,88)",
                "stop": 0
            },
            {
                "color": "rgb(133,221,69)",
                "stop": 1
            }
        ],
        "angle": 270,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(rgb(81, 189, 73) 0%, rgb(55, 134, 49) 100%) ",
        "colorArray": [
            {
                "color": "rgb(81, 189, 73)",
                "stop": 0
            },
            {
                "color": "rgb(55,134,49)",
                "stop": 1
            }
        ],
        "angle": 270,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(rgb(115, 229, 220) 0%, rgb(52, 224, 210) 100%) ",
        "colorArray": [
            {
                "color": "rgb(115, 229, 220)",
                "stop": 0
            },
            {
                "color": "rgb(52, 224, 210)",
                "stop": 1
            }
        ],
        "angle": 270,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(rgb(96, 204, 255) 0%, rgb(0, 156, 255) 100%) ",
        "colorArray": [
            {
                "color": "rgb(96,204,255)",
                "stop": 0
            },
            {
                "color": "rgb(0, 156, 255)",
                "stop": 1
            }
        ],
        "angle": 270,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(rgb(0, 132, 255) 0%, rgb(13, 85, 185) 100%) ",
        "colorArray": [
            {
                "color": "rgb(0,132,255)",
                "stop": 0
            },
            {
                "color": "rgb(13, 85, 185)",
                "stop": 1
            }
        ],
        "angle": 315,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(rgb(91, 43, 127) 0%, rgb(45, 20, 64) 100%) ",
        "colorArray": [
            {
                "color": "rgb(91,43,127)",
                "stop": 0
            },
            {
                "color": "rgb(45, 20, 64)",
                "stop": 1
            }
        ],
        "angle": 270,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(rgb(126, 104, 223) 0%, rgb(83, 61, 178) 100%) ",
        "colorArray": [
            {
                "color": "rgb(126,104,223)",
                "stop": 0
            },
            {
                "color": "rgb(83, 61, 178)",
                "stop": 1
            }
        ],
        "angle": 270,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(rgb(243, 234, 255) 0%, rgb(219, 194, 255) 100%) ",
        "colorArray": [
            {
                "color": "rgb(243,234,255)",
                "stop": 0
            },
            {
                "color": "rgb(219,194,255)",
                "stop": 1
            }
        ],
        "angle": 270,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(rgb(255, 125, 164) 0%, rgb(246, 52, 111) 100%) ",
        "colorArray": [
            {
                "color": "rgb(255,125,164)",
                "stop": 0
            },
            {
                "color": "rgb(246, 52, 111)",
                "stop": 1
            }
        ],
        "angle": 270,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(rgb(255, 101, 105) 0%, rgb(239, 58, 63) 100%) ",
        "colorArray": [
            {
                "color": "rgb(255, 101, 105)",
                "stop": 0
            },
            {
                "color": "rgb(239, 58, 63)",
                "stop": 1
            }
        ],
        "angle": 270,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(rgb(246, 74, 34) 0%, rgb(199, 9, 15) 100%) ",
        "colorArray": [
            {
                "color": "rgb(246, 74, 34)",
                "stop": 0
            },
            {
                "color": "rgb(199, 9, 15)",
                "stop": 1
            }
        ],
        "angle": 270,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(rgb(82, 65, 57) 0%, rgb(51, 41, 36) 100%) ",
        "colorArray": [
            {
                "color": "rgb(82, 65, 57)",
                "stop": 0
            },
            {
                "color": "rgb(51, 41, 36)",
                "stop": 1
            }
        ],
        "angle": 270,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(rgb(165, 133, 87) 0%, rgb(128, 104, 70) 100%) ",
        "colorArray": [
            {
                "color": "rgb(165, 133, 87)",
                "stop": 0
            },
            {
                "color": "rgb(128, 104, 70)",
                "stop": 1
            }
        ],
        "angle": 270,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(rgb(229, 186, 125) 0%, rgb(191, 145, 80) 100%) ",
        "colorArray": [
            {
                "color": "rgb(229, 186, 125)",
                "stop": 0
            },
            {
                "color": "rgb(191, 145, 80)",
                "stop": 1
            }
        ],
        "angle": 270,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(rgb(255, 248, 238) 0%, rgb(245, 231, 211) 100%) ",
        "colorArray": [
            {
                "color": "rgb(255, 248, 238)",
                "stop": 0
            },
            {
                "color": "rgb(245, 231, 211)",
                "stop": 1
            }
        ],
        "angle": 270,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(rgb(169, 188, 198) 0%, rgb(108, 123, 131) 100%) ",
        "colorArray": [
            {
                "color": "rgb(169, 188, 198)",
                "stop": 0
            },
            {
                "color": "rgb(108, 123, 131)",
                "stop": 1
            }
        ],
        "angle": 270,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(rgb(4, 187, 198) 0%, rgb(144, 58, 243) 100%) ",
        "colorArray": [
            {
                "color": "rgb(4, 187, 198)",
                "stop": 0
            },
            {
                "color": "rgb(144, 58, 243)",
                "stop": 1
            }
        ],
        "angle": 270,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(rgb(68, 222, 255) 0%, rgb(41, 66, 255) 100%) ",
        "colorArray": [
            {
                "color": "rgb(68, 222, 255)",
                "stop": 0
            },
            {
                "color": "rgb(41, 66, 255)",
                "stop": 1
            }
        ],
        "angle": 270,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(rgb(68, 222, 255) 0%, rgb(33, 255, 126) 100%) ",
        "colorArray": [
            {
                "color": "rgb(68, 222, 255)",
                "stop": 0
            },
            {
                "color": "rgb(33, 255, 126)",
                "stop": 1
            }
        ],
        "angle": 270,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(rgb(245, 231, 211) 0%, rgb(255, 252, 84) 100%) ",
        "colorArray": [
            {
                "color": "rgb(245, 231, 211)",
                "stop": 0
            },
            {
                "color": "rgb(255, 252, 84)",
                "stop": 1
            }
        ],
        "angle": 270,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(rgb(237, 160, 91) 0%, rgb(197, 37, 25) 100%) ",
        "colorArray": [
            {
                "color": "rgb(237, 160, 91)",
                "stop": 0
            },
            {
                "color": "rgb(197, 37, 25)",
                "stop": 1
            }
        ],
        "angle": 270,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(rgb(234, 248, 235) 0%, rgb(139, 251, 249) 100%) ",
        "colorArray": [
            {
                "color": "rgb(234, 248, 235)",
                "stop": 0
            },
            {
                "color": "rgb(139, 251, 249)",
                "stop": 1
            }
        ],
        "angle": 270,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(rgb(226, 241, 251) 0%, rgb(238, 168, 175) 100%) ",
        "colorArray": [
            {
                "color": "rgb(226, 241, 251)",
                "stop": 0
            },
            {
                "color": "rgb(238, 168, 175)",
                "stop": 1
            }
        ],
        "angle": 270,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(rgb(38, 248, 253) 0%, rgb(195, 186, 248) 100%) ",
        "colorArray": [
            {
                "color": "rgb(38, 248, 253)",
                "stop": 0
            },
            {
                "color": "rgb(195, 186, 248)",
                "stop": 1
            }
        ],
        "angle": 270,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(rgb(183, 225, 232) 0%, rgb(255, 214, 245) 100%) ",
        "colorArray": [
            {
                "color": "rgb(183, 225, 232)",
                "stop": 0
            },
            {
                "color": "rgb(255, 214, 245)",
                "stop": 1
            }
        ],
        "angle": 270,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(rgb(81, 102, 199) 0%, rgb(30, 178, 205) 100%) ",
        "colorArray": [
            {
                "color": "rgb(81, 102, 199)",
                "stop": 0
            },
            {
                "color": "rgb(30, 178, 205)",
                "stop": 1
            }
        ],
        "angle": 270,
        "type": "linear"
    },
    {
        "cssColor": "linear-gradient(rgb(238, 243, 245) 0%, rgb(249, 61, 95) 100%) ",
        "colorArray": [
            {
                "color": "rgb(238, 243, 245)",
                "stop": 0
            },
            {
                "color": "rgb(249, 61, 95)",
                "stop": 1
            }
        ],
        "angle": 270,
        "type": "linear"
    },
    {
        "cssColor": "radial-gradient(rgb(216, 223, 227) 0%, rgb(174,184, 189) 100%) ",
        "colorArray": [
            {
                "color": "rgb(216, 223, 227)",
                "stop": 0
            },
            {
                "color": "rgb(174, 184, 189)",
                "stop": 1
            }
        ],
        "angle": 0,
        "gradientPositionIsCenter": true,
        "type": "radial"
    },
    {
        "cssColor": "radial-gradient(rgb(255, 255, 255) 0%, rgb(225, 230, 236) 100%) ",
        "colorArray": [
            {
                "color": "rgb(255, 255, 255)",
                "stop": 0
            },
            {
                "color": "rgb(225, 230, 236)",
                "stop": 1
            }
        ],
        "angle": 0,
        "gradientPositionIsCenter": true,
        "type": "radial"
    },
    {
        "cssColor": "radial-gradient(rgb(216, 223, 227) 0%, rgb(174, 184, 189) 100%) ",
        "colorArray": [
            {
                "color": "rgb(216, 223, 227)",
                "stop": 0
            },
            {
                "color": "rgb(174, 184, 189)",
                "stop": 1
            }
        ],
        "angle": 0,
        "gradientPositionIsCenter": true,
        "type": "radial"
    },
    {
        "cssColor": "radial-gradient(rgb(42, 42, 42) 0%, rgb(0, 0, 0) 100%) ",
        "colorArray": [
            {
                "color": "rgb(42, 42, 42)",
                "stop": 0
            },
            {
                "color": "rgb(0, 0, 0)",
                "stop": 1
            }
        ],
        "angle": 0,
        "gradientPositionIsCenter": true,
        "type": "radial"
    },
    {
        "cssColor": "radial-gradient(rgb(255, 230, 93) 0%, rgb(247, 195, 74) 100%) ",
        "colorArray": [
            {
                "color": "rgb(255, 230, 93)",
                "stop": 0
            },
            {
                "color": "rgb(247, 195, 74)",
                "stop": 1
            }
        ],
        "angle": 0,
        "gradientPositionIsCenter": true,
        "type": "radial"
    },
    {
        "cssColor": "radial-gradient(rgb(203, 255, 90) 0%, rgb(129, 213, 69) 100%) ",
        "colorArray": [
            {
                "color": "rgb(203, 255, 90)",
                "stop": 0
            },
            {
                "color": "rgb(129, 213, 69)",
                "stop": 1
            }
        ],
        "angle": 0,
        "gradientPositionIsCenter": true,
        "type": "radial"
    },
    {
        "cssColor": "radial-gradient(rgb(255, 180, 61) 0%, rgb(255, 142, 61) 100%) ",
        "colorArray": [
            {
                "color": "rgb(255, 180, 61)",
                "stop": 0
            },
            {
                "color": "rgb(255, 142, 61)",
                "stop": 1
            }
        ],
        "angle": 0,
        "gradientPositionIsCenter": true,
        "type": "radial"
    },
    {
        "cssColor": "radial-gradient(rgb(81, 189, 73) 0%, rgb(55, 134, 49) 100%) ",
        "colorArray": [
            {
                "color": "rgb(81, 189, 73)",
                "stop": 0
            },
            {
                "color": "rgb(55, 134, 49)",
                "stop": 1
            }
        ],
        "angle": 0,
        "gradientPositionIsCenter": true,
        "type": "radial"
    },
    {
        "cssColor": "radial-gradient(rgb(115, 229, 220) 0%, rgb(52, 224, 210) 100%) ",
        "colorArray": [
            {
                "color": "rgb(115, 229, 220)",
                "stop": 0
            },
            {
                "color": "rgb(52, 224, 210)",
                "stop": 1
            }
        ],
        "angle": 0,
        "gradientPositionIsCenter": true,
        "type": "radial"
    },
    {
        "cssColor": "radial-gradient(rgb(96, 204, 255) 0%, rgb(0, 156, 255) 100%) ",
        "colorArray": [
            {
                "color": "rgb(96, 204, 255)",
                "stop": 0
            },
            {
                "color": "rgb(0, 156, 255)",
                "stop": 1
            }
        ],
        "angle": 0,
        "gradientPositionIsCenter": true,
        "type": "radial"
    },
    {
        "cssColor": "radial-gradient(rgb(29, 62, 89) 0%, rgb(11, 37, 61) 100%) ",
        "colorArray": [
            {
                "color": "rgb(29, 62, 89)",
                "stop": 0
            },
            {
                "color": "rgb(11, 37, 61)",
                "stop": 1
            }
        ],
        "angle": 0,
        "gradientPositionIsCenter": true,
        "type": "radial"
    },
    {
        "cssColor": "radial-gradient(rgb(0, 132, 255) 0%, rgb(13, 85, 185) 100%) ",
        "colorArray": [
            {
                "color": "rgb(0, 132, 255)",
                "stop": 0
            },
            {
                "color": "rgb(13, 85, 185)",
                "stop": 1
            }
        ],
        "angle": 0,
        "gradientPositionIsCenter": true,
        "type": "radial"
    },
    {
        "cssColor": "radial-gradient(rgb(0, 132, 255) 0%, rgb(13, 85, 185) 100%) ",
        "colorArray": [
            {
                "color": "rgb(0, 132, 255)",
                "stop": 0
            },
            {
                "color": "rgb(13, 85, 185)",
                "stop": 1
            }
        ],
        "angle": 0,
        "gradientPositionIsCenter": true,
        "type": "radial"
    },
    {
        "cssColor": "radial-gradient(rgb(91, 43, 127) 0%, rgb(45, 20, 64) 100%) ",
        "colorArray": [
            {
                "color": "rgb(91, 43, 127)",
                "stop": 0
            },
            {
                "color": "rgb(45, 20, 64)",
                "stop": 1
            }
        ],
        "angle": 0,
        "gradientPositionIsCenter": true,
        "type": "radial"
    },
    {
        "cssColor": "radial-gradient(rgb(126, 104, 223) 0%, rgb(83, 61, 178) 100%) ",
        "colorArray": [
            {
                "color": "rgb(126, 104, 223)",
                "stop": 0
            },
            {
                "color": "rgb(83, 61, 178)",
                "stop": 1
            }
        ],
        "angle": 0,
        "gradientPositionIsCenter": true,
        "type": "radial"
    },
    {
        "cssColor": "radial-gradient(rgb(243, 234, 255) 0%, rgb(219, 194, 255) 100%) ",
        "colorArray": [
            {
                "color": "rgb(243, 234, 255)",
                "stop": 0
            },
            {
                "color": "rgb(219, 194, 255)",
                "stop": 1
            }
        ],
        "angle": 0,
        "gradientPositionIsCenter": true,
        "type": "radial"
    },
    {
        "cssColor": "radial-gradient(rgb(162, 141, 255) 0%, rgb(121, 97, 230) 100%) ",
        "colorArray": [
            {
                "color": "rgb(162, 141, 255)",
                "stop": 0
            },
            {
                "color": "rgb(121, 97, 230)",
                "stop": 1
            }
        ],
        "angle": 0,
        "gradientPositionIsCenter": true,
        "type": "radial"
    },
    {
        "cssColor": "radial-gradient(rgb(255, 125, 164) 0%, rgb(246, 52, 111) 100%) ",
        "colorArray": [
            {
                "color": "rgb(255, 125, 164)",
                "stop": 0
            },
            {
                "color": "rgb(246, 52, 111)",
                "stop": 1
            }
        ],
        "angle": 0,
        "gradientPositionIsCenter": true,
        "type": "radial"
    },
    {
        "cssColor": "radial-gradient(rgb(255, 101, 105) 0%, rgb(239, 58, 63) 100%) ",
        "colorArray": [
            {
                "color": "rgb(255, 101, 105)",
                "stop": 0
            },
            {
                "color": "rgb(239, 58, 63)",
                "stop": 1
            }
        ],
        "angle": 0,
        "gradientPositionIsCenter": true,
        "type": "radial"
    },
    {
        "cssColor": "radial-gradient(rgb(246, 74, 34) 0%, rgb(199, 9, 15) 100%) ",
        "colorArray": [
            {
                "color": "rgb(246, 74, 34)",
                "stop": 0
            },
            {
                "color": "rgb(199, 9, 15)",
                "stop": 1
            }
        ],
        "angle": 0,
        "gradientPositionIsCenter": true,
        "type": "radial"
    },
    {
        "cssColor": "radial-gradient(rgb(229, 186, 125) 0%, rgb(191, 145, 80) 100%) ",
        "colorArray": [
            {
                "color": "rgb(229, 186, 125)",
                "stop": 0
            },
            {
                "color": "rgb(191, 145, 80)",
                "stop": 1
            }
        ],
        "angle": 0,
        "gradientPositionIsCenter": true,
        "type": "radial"
    },
    {
        "cssColor": "radial-gradient(rgb(169, 188, 198) 0%, rgb(108, 123, 131) 100%) ",
        "colorArray": [
            {
                "color": "rgb(169, 188, 198)",
                "stop": 0
            },
            {
                "color": "rgb(108, 123, 131)",
                "stop": 1
            }
        ],
        "angle": 0,
        "gradientPositionIsCenter": true,
        "type": "radial"
    },
    {
        "cssColor": "radial-gradient(rgb(255, 248, 238) 0%, rgb(245, 231, 211) 100%) ",
        "colorArray": [
            {
                "color": "rgb(255, 248, 238)",
                "stop": 0
            },
            {
                "color": "rgb(245, 231, 211)",
                "stop": 1
            }
        ],
        "angle": 0,
        "gradientPositionIsCenter": true,
        "type": "radial"
    },
    {
        "cssColor": "radial-gradient(rgb(165, 133, 87) 0%, rgb(128, 104, 70) 100%) ",
        "colorArray": [
            {
                "color": "rgb(165, 133, 87)",
                "stop": 0
            },
            {
                "color": "rgb(128, 104, 70)",
                "stop": 1
            }
        ],
        "angle": 0,
        "gradientPositionIsCenter": true,
        "type": "radial"
    },
    {
        "cssColor": "radial-gradient(rgb(82, 65, 57) 0%, rgb(51, 41, 36) 100%) ",
        "colorArray": [
            {
                "color": "rgb(82, 65, 57)",
                "stop": 0
            },
            {
                "color": "rgb(51, 41, 36)",
                "stop": 1
            }
        ],
        "angle": 0,
        "gradientPositionIsCenter": true,
        "type": "radial"
    },
    {
        "cssColor": "radial-gradient(rgb(68, 222, 255) 0%, rgb(41, 66, 255) 100%) ",
        "colorArray": [
            {
                "color": "rgb(68, 222, 255)",
                "stop": 0
            },
            {
                "color": "rgb(41, 66, 255)",
                "stop": 1
            }
        ],
        "angle": 0,
        "gradientPositionIsCenter": true,
        "type": "radial"
    },
    {
        "cssColor": "radial-gradient(rgb(4, 187, 198) 0%, rgb(144, 58, 243) 100%) ",
        "colorArray": [
            {
                "color": "rgb(4, 187, 198)",
                "stop": 0
            },
            {
                "color": "rgb(144, 58, 243)",
                "stop": 1
            }
        ],
        "angle": 0,
        "gradientPositionIsCenter": true,
        "type": "radial"
    },
    {
        "cssColor": "radial-gradient(rgb(68, 222, 255) 0%, rgb(33, 255, 126) 100%) ",
        "colorArray": [
            {
                "color": "rgb(68, 222, 255)",
                "stop": 0
            },
            {
                "color": "rgb(33, 255, 126)",
                "stop": 1
            }
        ],
        "angle": 0,
        "gradientPositionIsCenter": true,
        "type": "radial"
    },
    {
        "cssColor": "radial-gradient(rgb(245, 231, 211) 0%, rgb(255, 252, 84) 100%) ",
        "colorArray": [
            {
                "color": "rgb(245, 231, 211)",
                "stop": 0
            },
            {
                "color": "rgb(255, 252, 84)",
                "stop": 1
            }
        ],
        "angle": 0,
        "gradientPositionIsCenter": true,
        "type": "radial"
    },
    {
        "cssColor": "radial-gradient(rgb(237, 160, 91) 0%, rgb(197, 37, 25) 100%) ",
        "colorArray": [
            {
                "color": "rgb(237, 160, 91)",
                "stop": 0
            },
            {
                "color": "rgb(197, 37, 25)",
                "stop": 1
            }
        ],
        "angle": 0,
        "gradientPositionIsCenter": true,
        "type": "radial"
    },
    {
        "cssColor": "radial-gradient(rgb(234, 248, 235) 0%, rgb(139, 251, 249) 100%) ",
        "colorArray": [
            {
                "color": "rgb(234, 248, 235)",
                "stop": 0
            },
            {
                "color": "rgb(139, 251, 249)",
                "stop": 1
            }
        ],
        "angle": 0,
        "gradientPositionIsCenter": true,
        "type": "radial"
    },
    {
        "cssColor": "radial-gradient(rgb(226, 241, 251) 0%, rgb(238, 168, 175) 100%) ",
        "colorArray": [
            {
                "color": "rgb(226, 241, 251)",
                "stop": 0
            },
            {
                "color": "rgb(238, 168, 175)",
                "stop": 1
            }
        ],
        "angle": 0,
        "gradientPositionIsCenter": true,
        "type": "radial"
    },
    {
        "cssColor": "radial-gradient(rgb(38, 248, 253) 0%, rgb(195, 186, 248) 100%) ",
        "colorArray": [
            {
                "color": "rgb(38, 248, 253)",
                "stop": 0
            },
            {
                "color": "rgb(195, 186, 248)",
                "stop": 1
            }
        ],
        "angle": 0,
        "gradientPositionIsCenter": true,
        "type": "radial"
    },
    {
        "cssColor": "radial-gradient(rgb(183, 225, 232) 0%, rgb(255, 214, 245) 100%) ",
        "colorArray": [
            {
                "color": "rgb(183, 225, 232)",
                "stop": 0
            },
            {
                "color": "rgb(255, 214, 245)",
                "stop": 1
            }
        ],
        "angle": 0,
        "gradientPositionIsCenter": true,
        "type": "radial"
    },
    {
        "cssColor": "radial-gradient(rgb(238, 243, 245) 0%, rgb(249, 61, 95) 100%) ",
        "colorArray": [
            {
                "color": "rgb(238, 243, 245)",
                "stop": 0
            },
            {
                "color": "rgb(249, 61, 95)",
                "stop": 1
            }
        ],
        "angle": 0,
        "gradientPositionIsCenter": true,
        "type": "radial"
    },
    {
        "cssColor": "radial-gradient(rgb(81, 102, 199) 0%, rgb(30, 178, 205) 100%) ",
        "colorArray": [
            {
                "color": "rgb(81, 102, 199)",
                "stop": 0
            },
            {
                "color": "rgb(30, 178, 205)",
                "stop": 1
            }
        ],
        "angle": 0,
        "gradientPositionIsCenter": true,
        "type": "radial"
    }
];
const sizes = [
    {
        sizeName: "Medium Rectangle",
        sizeType: "medium-rectangle",
        icon: "assets/icons/svg8.svg",
        width: 300,
        height: 250,
        selected: false
    },
    {
        sizeName: "Large Rectangle",
        sizeType: "large-rectangle",
        icon: "assets/icons/svg9.svg",
        width: 336,
        height: 280,
        selected: false
    },
    {
        sizeName: "Leaderboard",
        sizeType: "leaderboard",
        icon: "assets/icons/svg10.svg",
        width: 728,
        height: 90,
        selected: false
    },
    {
        sizeName: "Mobile",
        sizeType: "mobile",
        icon: "assets/icons/svg11.svg",
        width: 320,
        height: 50,
        selected: false
    },
    {
        sizeName: "Large Mobile",
        sizeType: "large-mobile",
        icon: "assets/icons/svg12.svg",
        width: 320,
        height: 100,
        selected: false
    },
    {
        sizeName: "Half Page",
        sizeType: "half-page",
        icon: "assets/icons/svg13.svg",
        width: 300,
        height: 600,
        selected: false
    },
    {
        sizeName: "Wide Skyscrapper",
        sizeType: "wide-skyscrapper",
        icon: "assets/icons/svg14.svg",
        width: 160,
        height: 600,
        selected: false
    },
    {
        sizeName: "Skyscrapper",
        sizeType: "skyscrapper",
        icon: "assets/icons/svg15.svg",
        width: 120,
        height: 600,
        selected: false
    },
    {
        sizeName: "Square",
        sizeType: "square",
        icon: "assets/icons/svg16.svg",
        width: 250,
        height: 250,
        selected: false
    },
    {
        sizeName: "Small Square",
        sizeType: "small-square",
        icon: "assets/icons/svg17.svg",
        width: 200,
        height: 200,
        selected: false
    },
    {
        sizeName: "Main Banner",
        sizeType: "main-banner",
        icon: "assets/icons/svg18.svg",
        width: 468,
        height: 60,
        selected: false
    },
    {
        sizeName: "Portrait",
        sizeType: "portrait",
        icon: "assets/icons/svg19.svg",
        width: 300,
        height: 1050,
        selected: false
    },
    {
        sizeName: "Billboard",
        sizeType: "billboard",
        icon: "assets/icons/svg20.svg",
        width: 970,
        height: 250,
        selected: false
    },
    {
        sizeName: "Large Leaderboard",
        sizeType: "large-leaderboard",
        icon: "assets/icons/svg21.svg",
        width: 970,
        height: 90,
        selected: false
    },
    {
        sizeName: "Half Banner",
        sizeType: "half-banner",
        icon: "assets/icons/svg22.svg",
        width: 234,
        height: 60,
        selected: false
    },
    {
        sizeName: "Vertical Banner",
        sizeType: "vertical-banner",
        icon: "assets/icons/svg23.svg",
        width: 120,
        height: 240,
        selected: false
    },
    {
        sizeName: "Small Rectangle",
        sizeType: "small-rectangle",
        icon: "assets/icons/svg24.svg",
        width: 180,
        height: 150,
        selected: false
    },
    {
        sizeName: "Facebook Cover",
        sizeType: "facebook-cover",
        icon: "assets/icons/svg25.svg",
        width: 851,
        height: 315,
        selected: false
    },
    {
        sizeName: "Facebook Post",
        sizeType: "facebook-post",
        icon: "assets/icons/svg26.svg",
        width: 1200,
        height: 900,
        selected: false
    },
    {
        sizeName: "FAcebook Ad",
        sizeType: "facebook-ad",
        icon: "assets/icons/svg27.svg",
        width: 1200,
        height: 628,
        selected: false
    },
    {
        sizeName: "Page like Ad",
        sizeType: "page-like-ad",
        icon: "assets/icons/svg28.svg",
        width: 1200,
        height: 444,
        selected: false
    },
    {
        sizeName: "Click To Website Ad",
        sizeType: "click-to-website-ad",
        icon: "assets/icons/svg29.svg",
        width: 600,
        height: 600,
        selected: false
    },
    {
        sizeName: "Twitter Cover",
        sizeType: "twitter-cover",
        icon: "assets/icons/svg30.svg",
        width: 1500,
        height: 500,
        selected: false
    },
    {
        sizeName: "Twitter Post",
        sizeType: "twitter-post",
        icon: "assets/icons/svg31.svg",
        width: 1024,
        height: 512,
        selected: false
    },
    {
        sizeName: "Youtube Channel Cover",
        sizeType: "youtube-channel-cover",
        icon: "assets/icons/svg32.svg",
        width: 2560,
        height: 1040,
        selected: false
    },
    {
        sizeName: "Youtube Video Thumbnail",
        sizeType: "youtube-video-thumbnail",
        icon: "assets/icons/svg33.svg",
        width: 1280,
        height: 720,
        selected: false
    },
    {
        sizeName: "Instagram Post",
        sizeType: "instagram-post",
        icon: "assets/icons/svg34.svg",
        width: 1080,
        height: 1080,
        selected: false
    },
    {
        sizeName: "Profile Picture",
        sizeType: "profile-picture",
        icon: "assets/icons/svg35.svg",
        width: 400,
        height: 400,
        selected: false
    },
    {
        sizeName: "Pinterest Post",
        sizeType: "pinterest-post",
        icon: "assets/icons/svg36.svg",
        width: 600,
        height: 1200,
        selected: false
    },
    {
        sizeName: "LinkedIn Cover",
        sizeType: "linkedin-cover",
        icon: "assets/icons/svg37.svg",
        width: 1584,
        height: 396,
        selected: false
    },
    {
        sizeName: "Story",
        sizeType: "story",
        icon: "assets/icons/svg38.svg",
        width: 1080,
        height: 1920,
        selected: false
    },
    {
        sizeName: "HD SlideShow",
        sizeType: "hd-slideshow",
        icon: "assets/icons/svg39.svg",
        width: 1920,
        height: 1080,
        selected: false
    },
    {
        sizeName: "SlideShow",
        sizeType: "slideshow",
        icon: "assets/icons/svg40.svg",
        width: 960,
        height: 720,
        selected: false
    },
    {
        sizeName: "Esty Cover",
        sizeType: "esty-cover",
        icon: "assets/icons/svg41.svg",
        width: 1200,
        height: 300,
        selected: false
    },
    {
        sizeName: "SoundCloud Cover",
        sizeType: "soundcloud-cover",
        icon: "assets/icons/svg42.svg",
        width: 2480,
        height: 520,
        selected: false
    },
    {
        sizeName: "Twitch Video Player Cover",
        sizeType: "twitch-video-player-cover",
        icon: "assets/icons/svg43.svg",
        width: 1920,
        height: 1080,
        selected: false
    },
    {
        sizeName: "Twitch Channel Cover",
        sizeType: "twitch-channel-cover",
        icon: "assets/icons/svg44.svg",
        width: 1200,
        height: 480,
        selected: false
    },
    {
        sizeName: "Logo",
        sizeType: "logo",
        icon: "assets/icons/svg55.svg",
        width: 800,
        height: 800,
        selected: false
    },
    {
        sizeName: "Presentation",
        sizeType: "presentation",
        icon: "assets/icons/svg57.svg",
        width: 1920,
        height: 1080,
        selected: false
    },
    {
        sizeName: "Album Cover",
        sizeType: "album-cover",
        icon: "assets/icons/svg58.svg",
        width: 1600,
        height: 1600,
        selected: false
    },
    {
        sizeName: "Book Cover",
        sizeType: "book-cover",
        icon: "assets/icons/svg59.svg",
        width: 1600,
        height: 2400,
        selected: false
    },
];
const fontList = [
    {
        "fontPath": "fonts/font22.ttf",
        "fontName": "AdineKirnberg-Script",
        "fontLabel": "AdineKirnberg-Script",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/font22.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/AGENCYB.ttf",
        "fontName": "AgencyFB-Bold",
        "fontLabel": "AgencyFB-Bold",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/AGENCYB.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/AGENCYR.ttf",
        "fontName": "AgencyFB-Reg",
        "fontLabel": "AgencyFB-Reg",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/AGENCYR.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/font38.ttf",
        "fontName": "AlphaEcho",
        "fontLabel": "AlphaEcho",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/font38.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/American Typewriter Condensed.ttf",
        "fontName": "AmericanTypewriter-Condensed",
        "fontLabel": "AmericanTypewriter-Condensed",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/American Typewriter Condensed.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/Andersans.ttf",
        "fontName": "Andersans",
        "fontLabel": "Andersans",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/Andersans.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/anjelika_rose.ttf",
        "fontName": "AnjelikaRose",
        "fontLabel": "AnjelikaRose",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/anjelika_rose.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/style17.ttf",
        "fontName": "Aspire-DemiBold",
        "fontLabel": "Aspire-DemiBold",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/style17.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/Avenir LT Std  Medium.ttf",
        "fontName": "AvenirLTStd-Medium",
        "fontLabel": "AvenirLTStd-Medium",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/Avenir LT Std  Medium.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/Avenir LT Std  Medium.ttf",
        "fontName": "AvenirLTStd-Black",
        "fontLabel": "AvenirLTStd-Black",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/Avenir LT Std  Medium.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/Avenir LT Std Roman.ttf",
        "fontName": "AvenirLTStd-Roman",
        "fontLabel": "AvenirLTStd-Roman",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/Avenir LT Std Roman.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/style10.ttf",
        "fontName": "BacktoBlackDemo",
        "fontLabel": "BacktoBlackDemo",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/style10.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/Baskerville MT Std Semibold.ttf",
        "fontName": "BaskervilleMTStd-SemiBd",
        "fontLabel": "BaskervilleMTStd-SemiBd",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/Baskerville MT Std Semibold.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/BASKVILL.ttf",
        "fontName": "BaskOldFace",
        "fontLabel": "BaskOldFace",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/BASKVILL.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/BeachType.ttf",
        "fontName": "BeachTypeMedium",
        "fontLabel": "BeachTypeMedium",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/BeachType.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/Bell Gothic Std Black.ttf",
        "fontName": "BellGothicStd-Black",
        "fontLabel": "BellGothicStd-Black",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/Bell Gothic Std Black.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/Bell Gothic Std Light.ttf",
        "fontName": "BellGothicStd-Bold",
        "fontLabel": "BellGothicStd-Bold",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/Bell Gothic Std Light.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/BELL.ttf",
        "fontName": "BellMT",
        "fontLabel": "BellMT",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/BELL.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/font14.ttf",
        "fontName": "BlackJackRegular",
        "fontLabel": "BlackJackRegular",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/font14.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/Blackout.ttf",
        "fontName": "Blackout",
        "fontLabel": "Blackout",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/Blackout.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/font14.ttf",
        "fontName": "BlackChancery",
        "fontLabel": "BlackChancery",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/font14.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/Blanch Condensed Inline.ttf",
        "fontName": "Blanch-CondensedInline",
        "fontLabel": "Blanch-CondensedInline",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/Blanch Condensed Inline.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/Britanic.ttf",
        "fontName": "BritannicBold",
        "fontLabel": "BritannicBold",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/Britanic.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/font20.ttf",
        "fontName": "BrockScript",
        "fontLabel": "BrockScript",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/font20.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/cac_champagne.ttf",
        "fontName": "CACChampagne",
        "fontLabel": "CACChampagne",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/cac_champagne.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/CALIFR.ttf",
        "fontName": "CalifornianFB-Reg",
        "fontLabel": "CalifornianFB-Reg",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/CALIFR.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/Chivo-Light.ttf",
        "fontName": "Chivo-Light",
        "fontLabel": "Chivo-Light",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/Chivo-Light.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/CoronetLTStd-Bold.ttf",
        "fontName": "CoronetLTStd-Bold",
        "fontLabel": "CoronetLTStd-Bold",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/CoronetLTStd-Bold.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/daunpenh.ttf",
        "fontName": "DaunPenh",
        "fontLabel": "DaunPenh",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/daunpenh.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/Desiderata Normal.ttf",
        "fontName": "Desiderata-Normal",
        "fontLabel": "Desiderata-Normal",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/Desiderata Normal.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/Exo-Bold.otf",
        "fontName": "Exo-Bold",
        "fontLabel": "Exo-Bold",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/Exo-Bold.otf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/Exo-Light.otf",
        "fontName": "Exo-Light",
        "fontLabel": "Exo-Light",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/Exo-Light.otf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/Exo-Regular.otf",
        "fontName": "Exo-Regular",
        "fontLabel": "Exo-Regular",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/Exo-Regular.otf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/Filxgirl.ttf",
        "fontName": "FiolexGirls-Regular",
        "fontLabel": "FiolexGirls-Regular",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/Filxgirl.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/FromWhereYouAre.ttf",
        "fontName": "FromWhereYouAre",
        "fontLabel": "FromWhereYouAre",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/FromWhereYouAre.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/GrandHotel-Regular_0.otf",
        "fontName": "GrandHotel-Regular",
        "fontLabel": "GrandHotel-Regular",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/GrandHotel-Regular_0.otf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/Hagin Caps Medium.ttf",
        "fontName": "HaginCapsMedium",
        "fontLabel": "HaginCapsMedium",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/Hagin Caps Medium.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/Hagin Caps Thin.ttf",
        "fontName": "HaginCapsThin",
        "fontLabel": "HaginCapsThin",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/Hagin Caps Thin.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/Lovelo Line Bold.ttf",
        "fontName": "LoveloLineBold",
        "fontLabel": "LoveloLineBold",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/Lovelo Line Bold.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/Lovelo Line Light.ttf",
        "fontName": "LoveloLineLight",
        "fontLabel": "LoveloLineLight",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/Lovelo Line Light.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/LFAX.ttf",
        "fontName": "LucidaFax",
        "fontLabel": "LucidaFax",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/LFAX.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/LFAXI.ttf",
        "fontName": "LucidaFax-Italic",
        "fontLabel": "LucidaFax-Italic",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/LFAXI.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/ufonts.com_lydian-cursive-bt.ttf",
        "fontName": "LydianCursiveBT-Regular",
        "fontLabel": "LydianCursiveBT-Regular",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/ufonts.com_lydian-cursive-bt.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/Medusa Gothic.otf",
        "fontName": "MedusaGothic",
        "fontLabel": "MedusaGothic",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/Medusa Gothic.otf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/MinionPro-Regular.otf",
        "fontName": "MinionPro-Regular",
        "fontLabel": "MinionPro-Regular",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/MinionPro-Regular.otf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/Mtcorsva.ttf",
        "fontName": "MonotypeCorsiva",
        "fontLabel": "MonotypeCorsiva",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/Mtcorsva.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/Montserrat-ExtraLight.otf",
        "fontName": "Montserrat-ExtraLight",
        "fontLabel": "Montserrat-ExtraLight",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/Montserrat-ExtraLight.otf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/Montserrat-Light.otf",
        "fontName": "Montserrat-Light",
        "fontLabel": "Montserrat-Light",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/Montserrat-Light.otf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/Montserrat-Medium.otf",
        "fontName": "Montserrat-Medium",
        "fontLabel": "Montserrat-Medium",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/Montserrat-Medium.otf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/Montserrat-Regular.otf",
        "fontName": "Montserrat-Regular",
        "fontLabel": "Montserrat-Regular",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/Montserrat-Regular.otf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/Offerings Regular.otf",
        "fontName": "Offerings",
        "fontLabel": "Offerings",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/Offerings Regular.otf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/OpenSans-Regular.ttf",
        "fontName": "OpenSans",
        "fontLabel": "OpenSans",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/OpenSans-Regular.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/OpenSans-Bold.ttf",
        "fontName": "OpenSans-Bold",
        "fontLabel": "OpenSans-Bold",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/OpenSans-Bold.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/OpenSans-BoldItalic.ttf",
        "fontName": "OpenSans-BoldItalic",
        "fontLabel": "OpenSans-BoldItalic",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/OpenSans-BoldItalic.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/OpenSans-ExtraBold.ttf",
        "fontName": "OpenSans-Extrabold",
        "fontLabel": "OpenSans-Extrabold",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/OpenSans-ExtraBold.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/OpenSans-ExtraBoldItalic.ttf",
        "fontName": "OpenSans-ExtraboldItalic",
        "fontLabel": "OpenSans-ExtraboldItalic",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/OpenSans-ExtraBoldItalic.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/OpenSans-Italic.ttf",
        "fontName": "OpenSans-Italic",
        "fontLabel": "OpenSans-Italic",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/OpenSans-Italic.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/OpenSans-Light.ttf",
        "fontName": "OpenSans-Light",
        "fontLabel": "OpenSans-Light",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/OpenSans-Light.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/OpenSans-Semibold.ttf",
        "fontName": "OpenSans-Semibold",
        "fontLabel": "OpenSans-Semibold",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/OpenSans-Semibold.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/OpenSans-SemiboldItalic.ttf",
        "fontName": "OpenSans-SemiboldItalic",
        "fontLabel": "OpenSans-SemiboldItalic",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/OpenSans-SemiboldItalic.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/OpenSans-LightItalic.ttf",
        "fontName": "OpenSansLight-Italic",
        "fontLabel": "OpenSansLight-Italic",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/OpenSans-LightItalic.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/Ostrich Sans Black.ttf",
        "fontName": "OstrichSans-Black",
        "fontLabel": "OstrichSans-Black",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/Ostrich Sans Black.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/Ostrich Sans.ttf",
        "fontName": "OstrichSans-Bold",
        "fontLabel": "OstrichSans-Bold",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/Ostrich Sans.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/Overlock SC.ttf",
        "fontName": "OverlockSC-Regular",
        "fontLabel": "OverlockSC-Regular",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/Overlock SC.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/PER_____.ttf",
        "fontName": "Perpetua",
        "fontLabel": "Perpetua",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/PER_____.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/PrestigeEliteStd-Bd.otf",
        "fontName": "PrestigeEliteStd-Bd",
        "fontLabel": "PrestigeEliteStd-Bd",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/PrestigeEliteStd-Bd.otf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/Roboto-Bold.ttf",
        "fontName": "Roboto-Bold",
        "fontLabel": "Roboto-Bold",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/Roboto-Bold.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/Roboto-Light.ttf",
        "fontName": "Roboto-Light",
        "fontLabel": "Roboto-Light",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/Roboto-Light.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/Roboto-LightItalic.ttf",
        "fontName": "Roboto-LightItalic",
        "fontLabel": "Roboto-LightItalic",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/Roboto-LightItalic.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/Roboto-Medium.ttf",
        "fontName": "Roboto-Medium",
        "fontLabel": "Roboto-Medium",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/Roboto-Medium.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/Roboto-Regular.ttf",
        "fontName": "Roboto-Regular",
        "fontLabel": "Roboto-Regular",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/Roboto-Regular.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/Roboto-Thin.ttf",
        "fontName": "Roboto-Thin",
        "fontLabel": "Roboto-Thin",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/Roboto-Thin.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/Rockwell.ttf",
        "fontName": "Rockwell",
        "fontLabel": "Rockwell",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/Rockwell.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/Rocc.ttf",
        "fontName": "Rockwell-Condensed",
        "fontLabel": "Rockwell-Condensed",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/Rocc.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/SCRIPTBL.ttf",
        "fontName": "ScriptMTBold",
        "fontLabel": "ScriptMTBold",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/SCRIPTBL.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/Shonar.ttf",
        "fontName": "ShonarBangla",
        "fontLabel": "ShonarBangla",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/Shonar.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/Shonar-Bold.ttf",
        "fontName": "ShonarBangla-Bold",
        "fontLabel": "ShonarBangla-Bold",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/Shonar-Bold.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/TrajanPro3-Bold.otf",
        "fontName": "TrajanPro3-Bold",
        "fontLabel": "TrajanPro3-Bold",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/TrajanPro3-Bold.otf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/TrajanPro3-Regular.otf",
        "fontName": "TrajanPro3-Regular",
        "fontLabel": "TrajanPro3-Regular",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/TrajanPro3-Regular.otf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/VAGRoundedStd-Bold.ttf",
        "fontName": "VAGRoundedStd-Bold",
        "fontLabel": "VAGRoundedStd-Bold",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/VAGRoundedStd-Bold.ttf",
        "catalogType": "Misc"
    },
    {
        "fontPath": "fonts/VAGRoundedStd-Light.ttf",
        "fontName": "VAGRoundedStd-Light",
        "fontLabel": "VAGRoundedStd-Light",
        "className": "",
        "image": "",
        "fontSrc": "assets/fonts/VAGRoundedStd-Light.ttf",
        "catalogType": "Misc"
    }
];
const colorList = ["#0054BB", "#3583E3", "#9FCAFF", "#FF0000", "#FF5A5A", "#FB8A8A", "#FFBDBD", "#FF9600", "#FFAF3D", "#FFBE61", "#FFD190", "#FFDE00", "#FFEA5F", "#FFF38D", "#FFF8C1", "#356335", "#369800", "#83CE5A", "#BEEDA5", "#B11D75", "#E8136F", "#FF69AA", "#FF9FC9", "#44B7FD", "#71CAFF", "#B2E2FF", "#C7EAFF", "#96D500", "#B4EB30", "#CFF27A", "#E1F8A8", "#18DBCB", "#53E6DA", "#90F1E9", "#BDF4EF", "#8B5D5D", "#AA7070", "#C19191", "#F0E9E9", "#84c1ff", "#add6ff", "#d6eaff", "#eaf4ff", "#2e003e", "#3d2352", "#3d1e6d", "#8874a3", "#8d5524", "#c68642", "#e0ac69", "#f1c27d", "#e6b0aa", "#145a32", "#616a6b", "#707b7c", "#d4ac0d", "#f4d03f", "#fae5d3", "#e9f7ef", "#2c3e50", "#935116", "#7f8c8d", "#f2f4f4", "#5f6a6a", "#fcf3cf", "#1abc9c", "#f0f3f4", "#73c6b6", "#2c3e50", "#45b39d", "#e67e22", "#7f8c8d", "#d35400", "#aab7b8", "#a04000", "#d2b4de", "#633974", "#cacfd2", "#784212", "#85929e", "#f8f9f9", "#f6ddcc", "#d68910", "#e74c3c", "#d5dbdb", "#f4f6f7", "#f5b041", "#eaeded", "#a9dfbf", "#797d7f", "#e59866", "#2ecc71", "#0e6655", "#2e4053", "#e5e8e8", "#e8f6f3", "#1abc9c", "#273746", "#d4e6f1", "#d5f5e3", "#c39bd3", "#229954", "#515a5a", "#148f77", "#16a085", "#1d8348", "#1a5276", "#99a3a4", "#a9cce3", "#ba4a00", "#d1f2eb", "#7b7d7d", "#f39c12", "#fdebd0", "#edbb99", "#f9e79f", "#7e5109", "#5b2c6f", "#512e5f", "#52be80", "#8e44ad", "#6e2c00", "#1b4f72", "#fef9e7", "#d7bde2", "#154360", "#1f618d", "#2e86c1", "#fdedec", "#76d7c4", "#138d75", "#a3e4d7", "#ebf5fb", "#bdc3c7", "#f1948a", "#1c2833", "#e8f8f5", "#76448a", "#d6eaf8", "#fdfefe", "#2980b9", "#abebc6", "#fdf2e9", "#c0392b", "#d98880", "#f4f6f6", "#d7dbdd", "#839192", "#d6dbdf", "#fadbd8", "#5dade2", "#4a235a", "#bdc3c7", "#d4efdf", "#a6acaf", "#b2babb", "#f39c12", "#af601a", "#bfc9ca", "#2874a6", "#3498db", "#b9770e", "#7d6608", "#58d68d", "#7b241c", "#3498db", "#943126", "#fef5e7", "#626567", "#808b96", "#95a5a6", "#c0392b", "#eaecee", "#f7f9f9", "#f5eef8", "#e74c3c", "#a93226", "#82e0aa", "#b7950b", "#e5e7e9", "#2471a3", "#aed6f1", "#641e16", "#f0b27a", "#d35400", "#2980b9", "#e8daef", "#239b56", "#bb8fce", "#196f3d", "#212f3c", "#909497", "#884ea0", "#9a7d0a", "#fad7a0", "#7fb3d5", "#f1c40f", "#af7ac5", "#1b2631", "#9b59b6", "#a569bd", "#186a3b", "#9b59b6", "#f4ecf7", "#27ae60", "#17a589", "#34495e", "#aeb6bf", "#5499c7", "#78281f", "#fbeee6", "#117864", "#d5d8dc", "#cb4335", "#f2d7d5", "#fbfcfc", "#4d5656", "#34495e", "#f5cba7", "#d0d3d4", "#95a5a6", "#27ae60", "#7dcea0", "#ecf0f1", "#5d6d7e", "#566573", "#a2d9ce", "#283747", "#16a085", "#eaf2f8", "#cd6155", "#717d7e", "#ebedef", "#21618c", "#ebdef0", "#48c9b0", "#2ecc71", "#0e6251", "#f5b7b1", "#9c640c", "#eb984e", "#8e44ad", "#979a9a", "#f1c40f", "#b3b6b7", "#dc7633", "#ec7063", "#0b5345", "#7d3c98", "#212f3d", "#85c1e9", "#b03a2e", "#28b463", "#6c3483", "#117a65", "#17202a", "#f7dc6f", "#ecf0f1", "#922b21", "#f8c471", "#424949", "#ccd1d1", "#abb2b9", "#f2f3f4", "#d0ece7", "#ca6f1e", "#873600", "#f9ebea", "#1e8449", "#eafaf1"];
const defaultBannerSet = [
    {
        "text_json": [
            {
                "xPos": 138.27,
                "yPos": 10,
                "width": 90.7,
                "color": "#ffffff",
                "text": "Fashion Designer",
                "size": 22,
                "fontName": "BacktoBlackDemo",
                "fontPath": "assets/fonts/style10.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 1.5375918946064515,
                "scaleY": 1.5375918946064515,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            },
            {
                "xPos": 128.98,
                "yPos": 110,
                "width": 166.04,
                "color": "#ffffff",
                "text": "Lorem Ipsum is simply dummy text of the printing.",
                "size": 15,
                "fontName": "OpenSansLight-Italic",
                "fontPath": "assets/fonts/OpenSans-LightItalic.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 1,
                "scaleY": 1,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            }
        ],
        "sticker_json": [
            {
                "xPos": -261,
                "yPos": -75,
                "width": 800,
                "height": 800,
                "scaleX": 0.5,
                "scaleY": 0.5,
                "sticker_image": "assets/images/default_logo.png",
                "angle": 0,
                "is_round": 0
            }
        ],
        "button_json": [
            {
                "text": "Contact Me",
                "xPos": 152,
                "yPos": 188,
                "angle": 0,
                "width": 110,
                "height": 33.599999999999994,
                "scaleX": 1,
                "scaleY": 1,
                "buttonFill": "#ff58a0",
                "buttonStrokeColor": "#000000",
                "buttonStrokeWidth": 0,
                "buttonRx": 4,
                "buttonRy": 4,
                "stroke": "",
                "strokeWidth": 1,
                "fontName": "MonotypeCorsiva",
                "fontPath": "assets/fonts/Mtcorsva.ttf",
                "alignment": 2,
                "fontWeight": "normal",
                "fontStyle": "normal",
                "underline": false,
                "linethrough": false,
                "overline": false,
                "textOpacity": 100,
                "charSpacing": 0,
                "lineHeight": 1.16,
                "textShadow": null,
                "buttonShadow": null,
                "color": "#ffffff",
                "fontSize": 20,
                "paddingOffset": 5,
                "backgroundColor": ""
            }
        ],
        "image_sticker_json": [],
        "frame_json": {
            "frame_image": "",
            "frame_color": ""
        },
        "background_json": {
            "scaleMode": "scaleCrop",
            "background_image": "assets/images/default_background.jpg",
            "background_color": ""
        },
        "sample_image": "",
        "sizeType": "medium-rectangle",
        "height": 250,
        "width": 300
    },
    {
        "text_json": [
            {
                "xPos": 148.21,
                "yPos": 25,
                "width": 105.28,
                "color": "#ffffff",
                "text": "Fashion Designer",
                "size": 22,
                "fontName": "BacktoBlackDemo",
                "fontPath": "assets/fonts/style10.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 1.4208798166256813,
                "scaleY": 1.4208798166256813,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            },
            {
                "xPos": 151,
                "yPos": 118,
                "width": 150,
                "color": "#ffffff",
                "text": "Lorem Ipsum is simply dummy text of the printing.",
                "size": 15,
                "fontName": "OpenSansLight-Italic",
                "fontPath": "assets/fonts/OpenSans-LightItalic.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 1,
                "scaleY": 1,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            }
        ],
        "sticker_json": [
            {
                "xPos": -301,
                "yPos": -86,
                "width": 800,
                "height": 800,
                "scaleX": 0.56,
                "scaleY": 0.56,
                "sticker_image": "assets/images/default_logo.png",
                "angle": 0,
                "is_round": 0
            }
        ],
        "button_json": [
            {
                "text": "Contact Me",
                "xPos": 167,
                "yPos": 203,
                "angle": 0,
                "width": 110,
                "height": 33.599999999999994,
                "scaleX": 1,
                "scaleY": 1,
                "buttonFill": "#ff58a0",
                "buttonStrokeColor": "#000000",
                "buttonStrokeWidth": 0,
                "buttonRx": 4,
                "buttonRy": 4,
                "stroke": "",
                "strokeWidth": 1,
                "fontName": "MonotypeCorsiva",
                "fontPath": "assets/fonts/Mtcorsva.ttf",
                "alignment": 2,
                "fontWeight": "normal",
                "fontStyle": "normal",
                "underline": false,
                "linethrough": false,
                "overline": false,
                "textOpacity": 100,
                "charSpacing": 0,
                "lineHeight": 1.16,
                "textShadow": null,
                "buttonShadow": null,
                "color": "#ffffff",
                "fontSize": 20,
                "paddingOffset": 5,
                "backgroundColor": ""
            }
        ],
        "image_sticker_json": [],
        "frame_json": {
            "frame_image": "",
            "frame_color": ""
        },
        "background_json": {
            "scaleMode": "scaleCrop",
            "background_image": "assets/images/default_background.jpg",
            "background_color": ""
        },
        "sample_image": "",
        "sizeType": "large-rectangle",
        "height": 280,
        "width": 336
    },
    {
        "text_json": [
            {
                "xPos": 134.07,
                "yPos": 10,
                "width": 84.68,
                "color": "#ffffff",
                "text": "Fashion Designer",
                "size": 22,
                "fontName": "BacktoBlackDemo",
                "fontPath": "assets/fonts/style10.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 1.226342697287849,
                "scaleY": 1.226342697287849,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            },
            {
                "xPos": 267,
                "yPos": 30,
                "width": 200.02,
                "color": "#ffffff",
                "text": "Lorem Ipsum is simply dummy text of the printing.",
                "size": 15,
                "fontName": "OpenSansLight-Italic",
                "fontPath": "assets/fonts/OpenSans-LightItalic.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 1,
                "scaleY": 1,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            }
        ],
        "sticker_json": [
            {
                "xPos": -176,
                "yPos": -106,
                "width": 800,
                "height": 800,
                "scaleX": 0.36,
                "scaleY": 0.36,
                "sticker_image": "assets/images/default_logo.png",
                "angle": 0,
                "is_round": 0
            }
        ],
        "button_json": [
            {
                "text": "Contact Me",
                "xPos": 534,
                "yPos": 25,
                "angle": 0,
                "width": 110,
                "height": 33.599999999999994,
                "scaleX": 1,
                "scaleY": 1,
                "buttonFill": "#ff58a0",
                "buttonStrokeColor": "#000000",
                "buttonStrokeWidth": 0,
                "buttonRx": 4,
                "buttonRy": 4,
                "stroke": "",
                "strokeWidth": 1,
                "fontName": "MonotypeCorsiva",
                "fontPath": "assets/fonts/Mtcorsva.ttf",
                "alignment": 2,
                "fontWeight": "normal",
                "fontStyle": "normal",
                "underline": false,
                "linethrough": false,
                "overline": false,
                "textOpacity": 100,
                "charSpacing": 0,
                "lineHeight": 1.16,
                "textShadow": null,
                "buttonShadow": null,
                "color": "#ffffff",
                "fontSize": 20,
                "paddingOffset": 5,
                "backgroundColor": ""
            }
        ],
        "image_sticker_json": [],
        "frame_json": {
            "frame_image": "",
            "frame_color": ""
        },
        "background_json": {
            "scaleMode": "scaleCrop",
            "background_image": "assets/images/default_background.jpg",
            "background_color": ""
        },
        "sample_image": "",
        "sizeType": "leaderboard",
        "height": 90,
        "width": 728
    },
    {
        "text_json": [
            {
                "xPos": 18.56,
                "yPos": 4,
                "width": 103.19,
                "color": "#ffffff",
                "text": "Fashion Designer",
                "size": 22,
                "fontName": "BacktoBlackDemo",
                "fontPath": "assets/fonts/style10.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 0.7449122493370282,
                "scaleY": 0.7449122493370282,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            },
            {
                "xPos": 100.45,
                "yPos": 3.62,
                "width": 162.42,
                "color": "#ffffff",
                "text": "Lorem Ipsum is simply dummy text of the printing.",
                "size": 15,
                "fontName": "OpenSansLight-Italic",
                "fontPath": "assets/fonts/OpenSans-LightItalic.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 0.7929308872992413,
                "scaleY": 0.7929308872992413,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            }
        ],
        "sticker_json": [
            {
                "xPos": -464,
                "yPos": -100,
                "width": 800,
                "height": 800,
                "scaleX": 0.56,
                "scaleY": 0.56,
                "sticker_image": "assets/images/default_logo.png",
                "angle": 0,
                "is_round": 0
            }
        ],
        "button_json": [
            {
                "text": "Contact Me",
                "xPos": 249,
                "yPos": 11,
                "angle": 0,
                "width": 59.43026877661358,
                "height": 24.559999999999995,
                "scaleX": 1,
                "scaleY": 1,
                "buttonFill": "#ff58a0",
                "buttonStrokeColor": "#000000",
                "buttonStrokeWidth": 0,
                "buttonRx": 4,
                "buttonRy": 4,
                "stroke": "",
                "strokeWidth": 1,
                "fontName": "MonotypeCorsiva",
                "fontPath": "assets/fonts/Mtcorsva.ttf",
                "alignment": 2,
                "fontWeight": "normal",
                "fontStyle": "normal",
                "underline": false,
                "linethrough": false,
                "overline": false,
                "textOpacity": 100,
                "charSpacing": 0,
                "lineHeight": 1.16,
                "textShadow": null,
                "buttonShadow": null,
                "color": "#ffffff",
                "fontSize": 12.007204645139414,
                "paddingOffset": 5,
                "backgroundColor": ""
            }
        ],
        "image_sticker_json": [],
        "frame_json": {
            "frame_image": "",
            "frame_color": ""
        },
        "background_json": {
            "scaleMode": "scaleCrop",
            "background_image": "assets/images/default_background.jpg",
            "background_color": ""
        },
        "sample_image": "",
        "sizeType": "mobile",
        "height": 50,
        "width": 320
    },
    {
        "text_json": [
            {
                "xPos": 6.92,
                "yPos": 20.73,
                "width": 86.11,
                "color": "#ffffff",
                "text": "Fashion Designer",
                "size": 22,
                "fontName": "BacktoBlackDemo",
                "fontPath": "assets/fonts/style10.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 1.0464161994221373,
                "scaleY": 1.0464161994221373,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            },
            {
                "xPos": 92.04,
                "yPos": 7.77,
                "width": 115.28,
                "color": "#ffffff",
                "text": "Lorem Ipsum is simply dummy text of the printing.",
                "size": 15,
                "fontName": "OpenSansLight-Italic",
                "fontPath": "assets/fonts/OpenSans-LightItalic.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 1.1139757913703239,
                "scaleY": 1.1139757913703239,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            }
        ],
        "sticker_json": [
            {
                "xPos": -431,
                "yPos": -72,
                "width": 800,
                "height": 800,
                "scaleX": 0.5,
                "scaleY": 0.5,
                "sticker_image": "assets/images/default_logo.png",
                "angle": 0,
                "is_round": 0
            }
        ],
        "button_json": [
            {
                "text": "Contact Me",
                "xPos": 233,
                "yPos": 33,
                "angle": 0,
                "width": 75.6509416479027,
                "height": 26.97224884674291,
                "scaleX": 1,
                "scaleY": 1,
                "buttonFill": "#ff58a0",
                "buttonStrokeColor": "#000000",
                "buttonStrokeWidth": 0,
                "buttonRx": 4,
                "buttonRy": 4,
                "stroke": "",
                "strokeWidth": 1,
                "fontName": "MonotypeCorsiva",
                "fontPath": "assets/fonts/Mtcorsva.ttf",
                "alignment": 2,
                "fontWeight": "normal",
                "fontStyle": "normal",
                "underline": false,
                "linethrough": false,
                "overline": false,
                "textOpacity": 100,
                "charSpacing": 0,
                "lineHeight": 1.16,
                "textShadow": null,
                "buttonShadow": null,
                "color": "#ffffff",
                "fontSize": 15.348436384919557,
                "paddingOffset": 5,
                "backgroundColor": ""
            }
        ],
        "image_sticker_json": [],
        "frame_json": {
            "frame_image": "",
            "frame_color": ""
        },
        "background_json": {
            "scaleMode": "scaleCrop",
            "background_image": "assets/images/default_background.jpg",
            "background_color": ""
        },
        "sample_image": "",
        "sizeType": "large-mobile",
        "height": 100,
        "width": 320
    },
    {
        "text_json": [
            {
                "xPos": 12.45,
                "yPos": 192,
                "width": 136.11,
                "color": "#ffffff",
                "text": "Fashion Designer",
                "size": 22,
                "fontName": "BacktoBlackDemo",
                "fontPath": "assets/fonts/style10.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 1.9623811755078369,
                "scaleY": 1.9623811755078369,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            },
            {
                "xPos": 33.98,
                "yPos": 330.25,
                "width": 130.32,
                "color": "#ffffff",
                "text": "Lorem Ipsum is simply dummy text of the printing.",
                "size": 15,
                "fontName": "OpenSansLight-Italic",
                "fontPath": "assets/fonts/OpenSans-LightItalic.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 1.7594558685810457,
                "scaleY": 1.7594558685810457,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            }
        ],
        "sticker_json": [
            {
                "xPos": -205,
                "yPos": -457,
                "width": 800,
                "height": 800,
                "scaleX": 0.84,
                "scaleY": 0.84,
                "sticker_image": "assets/images/default_logo.png",
                "angle": 0,
                "is_round": 0
            }
        ],
        "button_json": [
            {
                "text": "Contact Me",
                "xPos": 79,
                "yPos": 498,
                "angle": 0,
                "width": 142.27190388241516,
                "height": 43.457599731355906,
                "scaleX": 1,
                "scaleY": 1,
                "buttonFill": "#ff58a0",
                "buttonStrokeColor": "#000000",
                "buttonStrokeWidth": 0,
                "buttonRx": 4,
                "buttonRy": 4,
                "stroke": "",
                "strokeWidth": 1,
                "fontName": "MonotypeCorsiva",
                "fontPath": "assets/fonts/Mtcorsva.ttf",
                "alignment": 2,
                "fontWeight": "normal",
                "fontStyle": "normal",
                "underline": false,
                "linethrough": false,
                "overline": false,
                "textOpacity": 100,
                "charSpacing": 0,
                "lineHeight": 1.16,
                "textShadow": null,
                "buttonShadow": null,
                "color": "#ffffff",
                "fontSize": 25.398053603897644,
                "paddingOffset": 5,
                "backgroundColor": ""
            }
        ],
        "image_sticker_json": [],
        "frame_json": {
            "frame_image": "",
            "frame_color": ""
        },
        "background_json": {
            "scaleMode": "scaleCrop",
            "background_image": "assets/images/default_background.jpg",
            "background_color": ""
        },
        "sample_image": "",
        "sizeType": "half-page",
        "height": 600,
        "width": 300
    },
    {
        "text_json": [
            {
                "xPos": 5.07,
                "yPos": 191,
                "width": 91.73,
                "color": "#ffffff",
                "text": "Fashion Designer",
                "size": 22,
                "fontName": "BacktoBlackDemo",
                "fontPath": "assets/fonts/style10.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 1.5464630311700693,
                "scaleY": 1.5464630311700693,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            },
            {
                "xPos": 6.69,
                "yPos": 346.74,
                "width": 123.7,
                "color": "#ffffff",
                "text": "Lorem Ipsum is simply dummy text of the printing.",
                "size": 15,
                "fontName": "OpenSansLight-Italic",
                "fontPath": "assets/fonts/OpenSans-LightItalic.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 1.1837368347673283,
                "scaleY": 1.1837368347673283,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            }
        ],
        "sticker_json": [
            {
                "xPos": -165,
                "yPos": -261,
                "width": 800,
                "height": 800,
                "scaleX": 0.57,
                "scaleY": 0.57,
                "sticker_image": "assets/images/default_logo.png",
                "angle": 0,
                "is_round": 0
            }
        ],
        "button_json": [
            {
                "text": "Contact Me",
                "xPos": 16,
                "yPos": 506,
                "angle": 0,
                "width": 121.55686892294204,
                "height": 37.13009814373502,
                "scaleX": 1,
                "scaleY": 1,
                "buttonFill": "#ff58a0",
                "buttonStrokeColor": "#000000",
                "buttonStrokeWidth": 0,
                "buttonRx": 4,
                "buttonRy": 4,
                "stroke": "",
                "strokeWidth": 1,
                "fontName": "MonotypeCorsiva",
                "fontPath": "assets/fonts/Mtcorsva.ttf",
                "alignment": 2,
                "fontWeight": "normal",
                "fontStyle": "normal",
                "underline": false,
                "linethrough": false,
                "overline": false,
                "textOpacity": 100,
                "charSpacing": 0,
                "lineHeight": 1.16,
                "textShadow": null,
                "buttonShadow": null,
                "color": "#ffffff",
                "fontSize": 22.220060636196216,
                "paddingOffset": 5,
                "backgroundColor": ""
            }
        ],
        "image_sticker_json": [],
        "frame_json": {
            "frame_image": "",
            "frame_color": ""
        },
        "background_json": {
            "scaleMode": "scaleCrop",
            "background_image": "assets/images/default_background.jpg",
            "background_color": ""
        },
        "sample_image": "",
        "sizeType": "wide-skyscrapper",
        "height": 600,
        "width": 160
    },
    {
        "text_json": [
            {
                "xPos": 7.59,
                "yPos": 120,
                "width": 87.07,
                "color": "#ffffff",
                "text": "Fashion Designer",
                "size": 22,
                "fontName": "BacktoBlackDemo",
                "fontPath": "assets/fonts/style10.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 1.1580299789523376,
                "scaleY": 1.1580299789523376,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            },
            {
                "xPos": 11.34,
                "yPos": 322.08,
                "width": 96.98,
                "color": "#ffffff",
                "text": "Lorem Ipsum is simply dummy text of the printing.",
                "size": 15,
                "fontName": "OpenSansLight-Italic",
                "fontPath": "assets/fonts/OpenSans-LightItalic.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 1.023844421715362,
                "scaleY": 1.023844421715362,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            }
        ],
        "sticker_json": [
            {
                "xPos": -169,
                "yPos": -315,
                "width": 800,
                "height": 800,
                "scaleX": 0.56,
                "scaleY": 0.56,
                "sticker_image": "assets/images/default_logo.png",
                "angle": 0,
                "is_round": 0
            }
        ],
        "button_json": [
            {
                "text": "Contact Me",
                "xPos": 7,
                "yPos": 513,
                "angle": 0,
                "width": 107.4880655367301,
                "height": 38.18366368474174,
                "scaleX": 1,
                "scaleY": 1,
                "buttonFill": "#ff58a0",
                "buttonStrokeColor": "#000000",
                "buttonStrokeWidth": 0,
                "buttonRx": 4,
                "buttonRy": 4,
                "stroke": "",
                "strokeWidth": 1,
                "fontName": "MonotypeCorsiva",
                "fontPath": "assets/fonts/Mtcorsva.ttf",
                "alignment": 2,
                "fontWeight": "normal",
                "fontStyle": "normal",
                "underline": false,
                "linethrough": false,
                "overline": false,
                "textOpacity": 100,
                "charSpacing": 0,
                "lineHeight": 1.16,
                "textShadow": null,
                "buttonShadow": null,
                "color": "#ffffff",
                "fontSize": 20,
                "paddingOffset": 5,
                "backgroundColor": ""
            }
        ],
        "image_sticker_json": [],
        "frame_json": {
            "frame_image": "",
            "frame_color": ""
        },
        "background_json": {
            "scaleMode": "scaleCrop",
            "background_image": "assets/images/default_background.jpg",
            "background_color": ""
        },
        "sample_image": "",
        "sizeType": "skyscrapper",
        "height": 600,
        "width": 120
    },
    {
        "text_json": [
            {
                "xPos": 122.81,
                "yPos": 6,
                "width": 84.38,
                "color": "#ffffff",
                "text": "Fashion Designer",
                "size": 22,
                "fontName": "BacktoBlackDemo",
                "fontPath": "assets/fonts/style10.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 1,
                "scaleY": 1,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            },
            {
                "xPos": 94,
                "yPos": 84,
                "width": 150,
                "color": "#ffffff",
                "text": "Lorem Ipsum is simply dummy text of the printing.",
                "size": 15,
                "fontName": "OpenSansLight-Italic",
                "fontPath": "assets/fonts/OpenSans-LightItalic.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 1,
                "scaleY": 1,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            }
        ],
        "sticker_json": [
            {
                "xPos": -379,
                "yPos": -188,
                "width": 800,
                "height": 800,
                "scaleX": 0.61,
                "scaleY": 0.61,
                "sticker_image": "assets/images/default_logo.png",
                "angle": 0,
                "is_round": 0
            }
        ],
        "button_json": [
            {
                "text": "Contact Me",
                "xPos": 109,
                "yPos": 167,
                "angle": 0,
                "width": 110,
                "height": 33.599999999999994,
                "scaleX": 1,
                "scaleY": 1,
                "buttonFill": "#ff58a0",
                "buttonStrokeColor": "#000000",
                "buttonStrokeWidth": 0,
                "buttonRx": 4,
                "buttonRy": 4,
                "stroke": "",
                "strokeWidth": 1,
                "fontName": "MonotypeCorsiva",
                "fontPath": "assets/fonts/Mtcorsva.ttf",
                "alignment": 2,
                "fontWeight": "normal",
                "fontStyle": "normal",
                "underline": false,
                "linethrough": false,
                "overline": false,
                "textOpacity": 100,
                "charSpacing": 0,
                "lineHeight": 1.16,
                "textShadow": null,
                "buttonShadow": null,
                "color": "#ffffff",
                "fontSize": 20,
                "paddingOffset": 5,
                "backgroundColor": ""
            }
        ],
        "image_sticker_json": [],
        "frame_json": {
            "frame_image": "",
            "frame_color": ""
        },
        "background_json": {
            "scaleMode": "scaleCrop",
            "background_image": "assets/images/default_background.jpg",
            "background_color": ""
        },
        "sample_image": "",
        "sizeType": "square",
        "height": 250,
        "width": 250
    },
    {
        "text_json": [
            {
                "xPos": 69.97,
                "yPos": 9.38,
                "width": 93.84,
                "color": "#ffffff",
                "text": "Fashion Designer",
                "size": 22,
                "fontName": "BacktoBlackDemo",
                "fontPath": "assets/fonts/style10.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 1.1470235057258953,
                "scaleY": 1.1470235057258953,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            },
            {
                "xPos": 62.86,
                "yPos": 86,
                "width": 126.27,
                "color": "#ffffff",
                "text": "Lorem Ipsum is simply dummy text of the printing.",
                "size": 15,
                "fontName": "OpenSansLight-Italic",
                "fontPath": "assets/fonts/OpenSans-LightItalic.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 1,
                "scaleY": 1,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            }
        ],
        "sticker_json": [
            {
                "xPos": -383,
                "yPos": -135,
                "width": 800,
                "height": 800,
                "scaleX": 0.58,
                "scaleY": 0.58,
                "sticker_image": "assets/images/default_logo.png",
                "angle": 0,
                "is_round": 0
            }
        ],
        "button_json": [
            {
                "text": "Contact Me",
                "xPos": 72,
                "yPos": 155,
                "angle": 0,
                "width": 110,
                "height": 33.599999999999994,
                "scaleX": 1,
                "scaleY": 1,
                "buttonFill": "#ff58a0",
                "buttonStrokeColor": "#000000",
                "buttonStrokeWidth": 0,
                "buttonRx": 4,
                "buttonRy": 4,
                "stroke": "",
                "strokeWidth": 1,
                "fontName": "MonotypeCorsiva",
                "fontPath": "assets/fonts/Mtcorsva.ttf",
                "alignment": 2,
                "fontWeight": "normal",
                "fontStyle": "normal",
                "underline": false,
                "linethrough": false,
                "overline": false,
                "textOpacity": 100,
                "charSpacing": 0,
                "lineHeight": 1.16,
                "textShadow": null,
                "buttonShadow": null,
                "color": "#ffffff",
                "fontSize": 20,
                "paddingOffset": 5,
                "backgroundColor": ""
            }
        ],
        "image_sticker_json": [],
        "frame_json": {
            "frame_image": "",
            "frame_color": ""
        },
        "background_json": {
            "scaleMode": "scaleCrop",
            "background_image": "assets/images/default_background.jpg",
            "background_color": ""
        },
        "sample_image": "",
        "sizeType": "small-square",
        "height": 200,
        "width": 200
    },
    {
        "text_json": [
            {
                "xPos": 76.2,
                "yPos": 3.97,
                "width": 83.33,
                "color": "#ffffff",
                "text": "Fashion Designer",
                "size": 22,
                "fontName": "BacktoBlackDemo",
                "fontPath": "assets/fonts/style10.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 0.9303990794063015,
                "scaleY": 0.9303990794063015,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            },
            {
                "xPos": 165,
                "yPos": 1,
                "width": 150,
                "color": "#ffffff",
                "text": "Lorem Ipsum is simply dummy text of the printing.",
                "size": 15,
                "fontName": "OpenSansLight-Italic",
                "fontPath": "assets/fonts/OpenSans-LightItalic.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 1,
                "scaleY": 1,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            }
        ],
        "sticker_json": [
            {
                "xPos": -176,
                "yPos": -104,
                "width": 800,
                "height": 800,
                "scaleX": 0.32,
                "scaleY": 0.32,
                "sticker_image": "assets/images/default_logo.png",
                "angle": 0,
                "is_round": 0
            }
        ],
        "button_json": [
            {
                "text": "Contact Me",
                "xPos": 348,
                "yPos": 10,
                "angle": 0,
                "width": 110,
                "height": 33.599999999999994,
                "scaleX": 1,
                "scaleY": 1,
                "buttonFill": "#ff58a0",
                "buttonStrokeColor": "#000000",
                "buttonStrokeWidth": 0,
                "buttonRx": 4,
                "buttonRy": 4,
                "stroke": "",
                "strokeWidth": 1,
                "fontName": "MonotypeCorsiva",
                "fontPath": "assets/fonts/Mtcorsva.ttf",
                "alignment": 2,
                "fontWeight": "normal",
                "fontStyle": "normal",
                "underline": false,
                "linethrough": false,
                "overline": false,
                "textOpacity": 100,
                "charSpacing": 0,
                "lineHeight": 1.16,
                "textShadow": null,
                "buttonShadow": null,
                "color": "#ffffff",
                "fontSize": 20,
                "paddingOffset": 5,
                "backgroundColor": ""
            }
        ],
        "image_sticker_json": [],
        "frame_json": {
            "frame_image": "",
            "frame_color": ""
        },
        "background_json": {
            "scaleMode": "scaleCrop",
            "background_image": "assets/images/default_background.jpg",
            "background_color": ""
        },
        "sample_image": "",
        "sizeType": "main-banner",
        "height": 60,
        "width": 468
    },
    {
        "text_json": [
            {
                "xPos": 45.51,
                "yPos": 372,
                "width": 84.46,
                "color": "#ffffff",
                "text": "Fashion Designer",
                "size": 22,
                "fontName": "BacktoBlackDemo",
                "fontPath": "assets/fonts/style10.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 2.521678362100674,
                "scaleY": 2.521678362100674,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            },
            {
                "xPos": 31.96,
                "yPos": 579.12,
                "width": 133.81,
                "color": "#ffffff",
                "text": "Lorem Ipsum is simply dummy text of the printing.",
                "size": 15,
                "fontName": "OpenSansLight-Italic",
                "fontPath": "assets/fonts/OpenSans-LightItalic.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 1.7290623973833597,
                "scaleY": 1.7290623973833597,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            }
        ],
        "sticker_json": [
            {
                "xPos": -77,
                "yPos": -77,
                "width": 800,
                "height": 800,
                "scaleX": 0.57,
                "scaleY": 0.57,
                "sticker_image": "assets/images/default_logo.png",
                "angle": 0,
                "is_round": 0
            }
        ],
        "button_json": [
            {
                "text": "Contact Me",
                "xPos": 66,
                "yPos": 883,
                "angle": 0,
                "width": 174.9095035252536,
                "height": 48.89607259509473,
                "scaleX": 1,
                "scaleY": 1,
                "buttonFill": "#ff58a0",
                "buttonStrokeColor": "#000000",
                "buttonStrokeWidth": 0,
                "buttonRx": 4,
                "buttonRy": 4,
                "stroke": "",
                "strokeWidth": 1,
                "fontName": "MonotypeCorsiva",
                "fontPath": "assets/fonts/Mtcorsva.ttf",
                "alignment": 2,
                "fontWeight": "normal",
                "fontStyle": "normal",
                "underline": false,
                "linethrough": false,
                "overline": false,
                "textOpacity": 100,
                "charSpacing": 0,
                "lineHeight": 1.16,
                "textShadow": null,
                "buttonShadow": null,
                "color": "#ffffff",
                "fontSize": 27.71473529757591,
                "paddingOffset": 5,
                "backgroundColor": ""
            }
        ],
        "image_sticker_json": [],
        "frame_json": {
            "frame_image": "",
            "frame_color": ""
        },
        "background_json": {
            "scaleMode": "scaleCrop",
            "background_image": "assets/images/default_background.jpg",
            "background_color": ""
        },
        "sample_image": "",
        "sizeType": "portrait",
        "height": 1050,
        "width": 300
    },
    {
        "text_json": [
            {
                "xPos": 260.46,
                "yPos": 37.35,
                "width": 88.91,
                "color": "#ffffff",
                "text": "Fashion Designer",
                "size": 22,
                "fontName": "BacktoBlackDemo",
                "fontPath": "assets/fonts/style10.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 3.0399442918858144,
                "scaleY": 3.0399442918858144,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            },
            {
                "xPos": 545.44,
                "yPos": 40.42,
                "width": 109.08,
                "color": "#ffffff",
                "text": "Lorem Ipsum is simply dummy text of the printing.",
                "size": 15,
                "fontName": "OpenSansLight-Italic",
                "fontPath": "assets/fonts/OpenSans-LightItalic.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 1.981412140571967,
                "scaleY": 1.981412140571967,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            }
        ],
        "sticker_json": [
            {
                "xPos": -242,
                "yPos": -133,
                "width": 800,
                "height": 800,
                "scaleX": 0.65,
                "scaleY": 0.65,
                "sticker_image": "assets/images/default_logo.png",
                "angle": 0,
                "is_round": 0
            }
        ],
        "button_json": [
            {
                "text": "Contact Me",
                "xPos": 805,
                "yPos": 88,
                "angle": 0,
                "width": 139.14464509995992,
                "height": 54.44662007058136,
                "scaleX": 1,
                "scaleY": 1,
                "buttonFill": "#ff58a0",
                "buttonStrokeColor": "#000000",
                "buttonStrokeWidth": 0,
                "buttonRx": 4,
                "buttonRy": 4,
                "stroke": "",
                "strokeWidth": 1,
                "fontName": "MonotypeCorsiva",
                "fontPath": "assets/fonts/Mtcorsva.ttf",
                "alignment": 2,
                "fontWeight": "normal",
                "fontStyle": "normal",
                "underline": false,
                "linethrough": false,
                "overline": false,
                "textOpacity": 100,
                "charSpacing": 0,
                "lineHeight": 1.16,
                "textShadow": null,
                "buttonShadow": null,
                "color": "#ffffff",
                "fontSize": 25.05402304529735,
                "paddingOffset": 5,
                "backgroundColor": ""
            }
        ],
        "image_sticker_json": [],
        "frame_json": {
            "frame_image": "",
            "frame_color": ""
        },
        "background_json": {
            "scaleMode": "scaleCrop",
            "background_image": "assets/images/default_background.jpg",
            "background_color": ""
        },
        "sample_image": "",
        "sizeType": "billboard",
        "height": 250,
        "width": 970
    },
    {
        "text_json": [
            {
                "xPos": 277.34,
                "yPos": 2,
                "width": 86.47,
                "color": "#ffffff",
                "text": "Fashion Designer",
                "size": 22,
                "fontName": "BacktoBlackDemo",
                "fontPath": "assets/fonts/style10.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 1.4261361603144627,
                "scaleY": 1.4261361603144627,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            },
            {
                "xPos": 445.99,
                "yPos": 16.06,
                "width": 180.26,
                "color": "#ffffff",
                "text": "Lorem Ipsum is simply dummy text of the printing.",
                "size": 15,
                "fontName": "OpenSansLight-Italic",
                "fontPath": "assets/fonts/OpenSans-LightItalic.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 1.5725076313453266,
                "scaleY": 1.5725076313453266,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            }
        ],
        "sticker_json": [
            {
                "xPos": -192,
                "yPos": -192,
                "width": 800,
                "height": 800,
                "scaleX": 0.59,
                "scaleY": 0.59,
                "sticker_image": "assets/images/default_logo.png",
                "angle": 0,
                "is_round": 0
            }
        ],
        "button_json": [
            {
                "text": "Contact Me",
                "xPos": 833,
                "yPos": 25,
                "angle": 0,
                "width": 110,
                "height": 33.599999999999994,
                "scaleX": 1,
                "scaleY": 1,
                "buttonFill": "#ff58a0",
                "buttonStrokeColor": "#000000",
                "buttonStrokeWidth": 0,
                "buttonRx": 4,
                "buttonRy": 4,
                "stroke": "",
                "strokeWidth": 1,
                "fontName": "MonotypeCorsiva",
                "fontPath": "assets/fonts/Mtcorsva.ttf",
                "alignment": 2,
                "fontWeight": "normal",
                "fontStyle": "normal",
                "underline": false,
                "linethrough": false,
                "overline": false,
                "textOpacity": 100,
                "charSpacing": 0,
                "lineHeight": 1.16,
                "textShadow": null,
                "buttonShadow": null,
                "color": "#ffffff",
                "fontSize": 20,
                "paddingOffset": 5,
                "backgroundColor": ""
            }
        ],
        "image_sticker_json": [],
        "frame_json": {
            "frame_image": "",
            "frame_color": ""
        },
        "background_json": {
            "scaleMode": "scaleCrop",
            "background_image": "assets/images/default_background.jpg",
            "background_color": ""
        },
        "sample_image": "",
        "sizeType": "large-leaderboard",
        "height": 90,
        "width": 970
    },
    {
        "text_json": [
            {
                "xPos": 1.84,
                "yPos": 7,
                "width": 84.46,
                "color": "#ffffff",
                "text": "Fashion Designer",
                "size": 22,
                "fontName": "BacktoBlackDemo",
                "fontPath": "assets/fonts/style10.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 0.8088767329862797,
                "scaleY": 0.8088767329862797,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            },
            {
                "xPos": 71.83,
                "yPos": 3.4,
                "width": 104.69,
                "color": "#ffffff",
                "text": "Lorem Ipsum is simply dummy text of the printing.",
                "size": 15,
                "fontName": "OpenSansLight-Italic",
                "fontPath": "assets/fonts/OpenSans-LightItalic.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 0.6559883112595859,
                "scaleY": 0.6559883112595859,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            }
        ],
        "sticker_json": [
            {
                "xPos": -147,
                "yPos": 71,
                "width": 800,
                "height": 800,
                "scaleX": 0.22,
                "scaleY": 0.22,
                "sticker_image": "assets/images/default_logo.png",
                "angle": 0,
                "is_round": 0
            }
        ],
        "button_json": [
            {
                "text": "Contact Me",
                "xPos": 165,
                "yPos": 9,
                "angle": 0,
                "width": 56.41179316193939,
                "height": 39.81839603318927,
                "scaleX": 1,
                "scaleY": 1,
                "buttonFill": "#ff58a0",
                "buttonStrokeColor": "#000000",
                "buttonStrokeWidth": 0,
                "buttonRx": 4,
                "buttonRy": 4,
                "stroke": "",
                "strokeWidth": 1,
                "fontName": "MonotypeCorsiva",
                "fontPath": "assets/fonts/Mtcorsva.ttf",
                "alignment": 2,
                "fontWeight": "normal",
                "fontStyle": "normal",
                "underline": false,
                "linethrough": false,
                "overline": false,
                "textOpacity": 100,
                "charSpacing": 0,
                "lineHeight": 1.16,
                "textShadow": null,
                "buttonShadow": null,
                "color": "#ffffff",
                "fontSize": 12.343172855819269,
                "paddingOffset": 5,
                "backgroundColor": ""
            }
        ],
        "image_sticker_json": [],
        "frame_json": {
            "frame_image": "",
            "frame_color": ""
        },
        "background_json": {
            "scaleMode": "scaleCrop",
            "background_image": "assets/images/default_background.jpg",
            "background_color": ""
        },
        "sample_image": "",
        "sizeType": "half-banner",
        "height": 60,
        "width": 234
    },
    {
        "text_json": [
            {
                "xPos": 21.59,
                "yPos": 68,
                "width": 85.73,
                "color": "#ffffff",
                "text": "Fashion Designer",
                "size": 22,
                "fontName": "BacktoBlackDemo",
                "fontPath": "assets/fonts/style10.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 0.9192652648256074,
                "scaleY": 0.9192652648256074,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            },
            {
                "xPos": 12.7,
                "yPos": 128.38,
                "width": 119.81,
                "color": "#ffffff",
                "text": "Lorem Ipsum is simply dummy text of the printing.",
                "size": 15,
                "fontName": "OpenSansLight-Italic",
                "fontPath": "assets/fonts/OpenSans-LightItalic.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 0.8410207163481499,
                "scaleY": 0.8410207163481499,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            }
        ],
        "sticker_json": [
            {
                "xPos": -204,
                "yPos": -290,
                "width": 800,
                "height": 800,
                "scaleX": 0.47,
                "scaleY": 0.47,
                "sticker_image": "assets/images/default_logo.png",
                "angle": 0,
                "is_round": 0
            }
        ],
        "button_json": [
            {
                "text": "Contact Me",
                "xPos": 6,
                "yPos": 196,
                "angle": 0,
                "width": 110,
                "height": 33.599999999999994,
                "scaleX": 1,
                "scaleY": 1,
                "buttonFill": "#ff58a0",
                "buttonStrokeColor": "#000000",
                "buttonStrokeWidth": 0,
                "buttonRx": 4,
                "buttonRy": 4,
                "stroke": "",
                "strokeWidth": 1,
                "fontName": "MonotypeCorsiva",
                "fontPath": "assets/fonts/Mtcorsva.ttf",
                "alignment": 2,
                "fontWeight": "normal",
                "fontStyle": "normal",
                "underline": false,
                "linethrough": false,
                "overline": false,
                "textOpacity": 100,
                "charSpacing": 0,
                "lineHeight": 1.16,
                "textShadow": null,
                "buttonShadow": null,
                "color": "#ffffff",
                "fontSize": 20,
                "paddingOffset": 5,
                "backgroundColor": ""
            }
        ],
        "image_sticker_json": [],
        "frame_json": {
            "frame_image": "",
            "frame_color": ""
        },
        "background_json": {
            "scaleMode": "scaleCrop",
            "background_image": "assets/images/default_background.jpg",
            "background_color": ""
        },
        "sample_image": "",
        "sizeType": "vertical-banner",
        "height": 240,
        "width": 120
    },
    {
        "text_json": [
            {
                "xPos": 95.44,
                "yPos": 9,
                "width": 99.42,
                "color": "#ffffff",
                "text": "Fashion Designer",
                "size": 22,
                "fontName": "BacktoBlackDemo",
                "fontPath": "assets/fonts/style10.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 0.715421141591159,
                "scaleY": 0.715421141591159,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            },
            {
                "xPos": 15.35,
                "yPos": 65.24,
                "width": 185.13,
                "color": "#ffffff",
                "text": "Lorem Ipsum is simply dummy text of the printing.",
                "size": 15,
                "fontName": "OpenSansLight-Italic",
                "fontPath": "assets/fonts/OpenSans-LightItalic.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 0.8720022387104951,
                "scaleY": 0.8720022387104951,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            }
        ],
        "sticker_json": [
            {
                "xPos": -190,
                "yPos": -202,
                "width": 800,
                "height": 800,
                "scaleX": 0.38,
                "scaleY": 0.38,
                "sticker_image": "assets/images/default_logo.png",
                "angle": 0,
                "is_round": 0
            }
        ],
        "button_json": [
            {
                "text": "Contact Me",
                "xPos": 105,
                "yPos": 111,
                "angle": 0,
                "width": 59.27391302987732,
                "height": 24.039877818432156,
                "scaleX": 1,
                "scaleY": 1,
                "buttonFill": "#ff58a0",
                "buttonStrokeColor": "#000000",
                "buttonStrokeWidth": 0,
                "buttonRx": 4,
                "buttonRy": 4,
                "stroke": "",
                "strokeWidth": 1,
                "fontName": "MonotypeCorsiva",
                "fontPath": "assets/fonts/Mtcorsva.ttf",
                "alignment": 2,
                "fontWeight": "normal",
                "fontStyle": "normal",
                "underline": false,
                "linethrough": false,
                "overline": false,
                "textOpacity": 100,
                "charSpacing": 0,
                "lineHeight": 1.16,
                "textShadow": null,
                "buttonShadow": null,
                "color": "#ffffff",
                "fontSize": 11.193898229188122,
                "paddingOffset": 5,
                "backgroundColor": ""
            }
        ],
        "image_sticker_json": [],
        "frame_json": {
            "frame_image": "",
            "frame_color": ""
        },
        "background_json": {
            "scaleMode": "scaleCrop",
            "background_image": "assets/images/default_background.jpg",
            "background_color": ""
        },
        "sample_image": "",
        "sizeType": "small-rectangle",
        "height": 150,
        "width": 180
    },
    {
        "text_json": [
            {
                "xPos": 201.88,
                "yPos": 79.41,
                "width": 83.51,
                "color": "#ffffff",
                "text": "Fashion Designer",
                "size": 22,
                "fontName": "BacktoBlackDemo",
                "fontPath": "assets/fonts/style10.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 3.016815839840625,
                "scaleY": 3.016815839840625,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            },
            {
                "xPos": 478.04,
                "yPos": 92.99,
                "width": 97.33,
                "color": "#ffffff",
                "text": "Lorem Ipsum is simply dummy text of the printing.",
                "size": 15,
                "fontName": "OpenSansLight-Italic",
                "fontPath": "assets/fonts/OpenSans-LightItalic.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 1.758622150602171,
                "scaleY": 1.758622150602171,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            }
        ],
        "sticker_json": [
            {
                "xPos": -247,
                "yPos": -56,
                "width": 800,
                "height": 800,
                "scaleX": 0.55,
                "scaleY": 0.55,
                "sticker_image": "assets/images/default_logo.png",
                "angle": 0,
                "is_round": 0
            }
        ],
        "button_json": [
            {
                "text": "Contact Me",
                "xPos": 694,
                "yPos": 141,
                "angle": 0,
                "width": 110,
                "height": 33.599999999999994,
                "scaleX": 1,
                "scaleY": 1,
                "buttonFill": "#ff58a0",
                "buttonStrokeColor": "#000000",
                "buttonStrokeWidth": 0,
                "buttonRx": 4,
                "buttonRy": 4,
                "stroke": "",
                "strokeWidth": 1,
                "fontName": "MonotypeCorsiva",
                "fontPath": "assets/fonts/Mtcorsva.ttf",
                "alignment": 2,
                "fontWeight": "normal",
                "fontStyle": "normal",
                "underline": false,
                "linethrough": false,
                "overline": false,
                "textOpacity": 100,
                "charSpacing": 0,
                "lineHeight": 1.16,
                "textShadow": null,
                "buttonShadow": null,
                "color": "#ffffff",
                "fontSize": 20,
                "paddingOffset": 5,
                "backgroundColor": ""
            }
        ],
        "image_sticker_json": [],
        "frame_json": {
            "frame_image": "",
            "frame_color": ""
        },
        "background_json": {
            "scaleMode": "scaleCrop",
            "background_image": "assets/images/default_background.jpg",
            "background_color": ""
        },
        "sample_image": "",
        "sizeType": "facebook-cover",
        "height": 315,
        "width": 851
    },
    {
        "text_json": [
            {
                "xPos": 694.27,
                "yPos": 62,
                "width": 96.61,
                "color": "#ffffff",
                "text": "Fashion Designer",
                "size": 22,
                "fontName": "BacktoBlackDemo",
                "fontPath": "assets/fonts/style10.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 4.010567092988136,
                "scaleY": 4.010567092988136,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            },
            {
                "xPos": 655.27,
                "yPos": 393.99,
                "width": 223.2,
                "color": "#ffffff",
                "text": "Lorem Ipsum is simply dummy text of the printing.",
                "size": 15,
                "fontName": "OpenSansLight-Italic",
                "fontPath": "assets/fonts/OpenSans-LightItalic.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 2.2143654512805253,
                "scaleY": 2.2143654512805253,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            }
        ],
        "sticker_json": [
            {
                "xPos": -122,
                "yPos": -93,
                "width": 800,
                "height": 800,
                "scaleX": 0.9,
                "scaleY": 0.9,
                "sticker_image": "assets/images/default_logo.png",
                "angle": 0,
                "is_round": 0
            }
        ],
        "button_json": [
            {
                "text": "Contact Me",
                "xPos": 782,
                "yPos": 627,
                "angle": 0,
                "width": 234.4912627170775,
                "height": 79.23644198604492,
                "scaleX": 1,
                "scaleY": 1,
                "buttonFill": "#ff58a0",
                "buttonStrokeColor": "#000000",
                "buttonStrokeWidth": 0,
                "buttonRx": 4,
                "buttonRy": 4,
                "stroke": "",
                "strokeWidth": 1,
                "fontName": "MonotypeCorsiva",
                "fontPath": "assets/fonts/Mtcorsva.ttf",
                "alignment": 2,
                "fontWeight": "normal",
                "fontStyle": "normal",
                "underline": false,
                "linethrough": false,
                "overline": false,
                "textOpacity": 100,
                "charSpacing": 0,
                "lineHeight": 1.16,
                "textShadow": null,
                "buttonShadow": null,
                "color": "#ffffff",
                "fontSize": 41.83303397961226,
                "paddingOffset": 5,
                "backgroundColor": ""
            }
        ],
        "image_sticker_json": [],
        "frame_json": {
            "frame_image": "",
            "frame_color": ""
        },
        "background_json": {
            "scaleMode": "scaleCrop",
            "background_image": "assets/images/default_background.jpg",
            "background_color": ""
        },
        "sample_image": "",
        "sizeType": "facebook-post",
        "height": 900,
        "width": 1200
    },
    {
        "text_json": [
            {
                "xPos": 722.83,
                "yPos": 82,
                "width": 100.12,
                "color": "#ffffff",
                "text": "Fashion Designer",
                "size": 22,
                "fontName": "BacktoBlackDemo",
                "fontPath": "assets/fonts/style10.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 3.1594587399599803,
                "scaleY": 3.1594587399599803,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            },
            {
                "xPos": 659.43,
                "yPos": 290.85,
                "width": 223.99,
                "color": "#ffffff",
                "text": "Lorem Ipsum is simply dummy text of the printing.",
                "size": 15,
                "fontName": "OpenSansLight-Italic",
                "fontPath": "assets/fonts/OpenSans-LightItalic.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 2.0096126532007164,
                "scaleY": 2.0096126532007164,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            }
        ],
        "sticker_json": [
            {
                "xPos": -552,
                "yPos": -270,
                "width": 800,
                "height": 800,
                "scaleX": 1.38,
                "scaleY": 1.38,
                "sticker_image": "assets/images/default_logo.png",
                "angle": 0,
                "is_round": 0
            }
        ],
        "button_json": [
            {
                "text": "Contact Me",
                "xPos": 803,
                "yPos": 447,
                "angle": 0,
                "width": 162.4178228166757,
                "height": 57.85010653924912,
                "scaleX": 1,
                "scaleY": 1,
                "buttonFill": "#ff58a0",
                "buttonStrokeColor": "#000000",
                "buttonStrokeWidth": 0,
                "buttonRx": 4,
                "buttonRy": 4,
                "stroke": "",
                "strokeWidth": 1,
                "fontName": "MonotypeCorsiva",
                "fontPath": "assets/fonts/Mtcorsva.ttf",
                "alignment": 2,
                "fontWeight": "normal",
                "fontStyle": "normal",
                "underline": false,
                "linethrough": false,
                "overline": false,
                "textOpacity": 100,
                "charSpacing": 0,
                "lineHeight": 1.16,
                "textShadow": null,
                "buttonShadow": null,
                "color": "#ffffff",
                "fontSize": 29.049702964488343,
                "paddingOffset": 5,
                "backgroundColor": ""
            }
        ],
        "image_sticker_json": [],
        "frame_json": {
            "frame_image": "",
            "frame_color": ""
        },
        "background_json": {
            "scaleMode": "scaleCrop",
            "background_image": "assets/images/default_background.jpg",
            "background_color": ""
        },
        "sample_image": "",
        "sizeType": "facebook-ad",
        "height": 628,
        "width": 1200
    },
    {
        "text_json": [
            {
                "xPos": 740.22,
                "yPos": 30,
                "width": 108.16,
                "color": "#ffffff",
                "text": "Fashion Designer",
                "size": 22,
                "fontName": "BacktoBlackDemo",
                "fontPath": "assets/fonts/style10.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 2.4554119697475603,
                "scaleY": 2.4554119697475603,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            },
            {
                "xPos": 643.67,
                "yPos": 220.61,
                "width": 241.99,
                "color": "#ffffff",
                "text": "Lorem Ipsum is simply dummy text of the printing.",
                "size": 15,
                "fontName": "OpenSansLight-Italic",
                "fontPath": "assets/fonts/OpenSans-LightItalic.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 1.916397276968467,
                "scaleY": 1.916397276968467,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            }
        ],
        "sticker_json": [
            {
                "xPos": -128,
                "yPos": -128,
                "width": 800,
                "height": 800,
                "scaleX": 0.88,
                "scaleY": 0.88,
                "sticker_image": "assets/images/default_logo.png",
                "angle": 0,
                "is_round": 0
            }
        ],
        "button_json": [
            {
                "text": "Contact Me",
                "xPos": 783,
                "yPos": 336,
                "angle": 0,
                "width": 155.99261911388317,
                "height": 51.03577091720273,
                "scaleX": 1,
                "scaleY": 1,
                "buttonFill": "#ff58a0",
                "buttonStrokeColor": "#000000",
                "buttonStrokeWidth": 0,
                "buttonRx": 4,
                "buttonRy": 4,
                "stroke": "",
                "strokeWidth": 1,
                "fontName": "MonotypeCorsiva",
                "fontPath": "assets/fonts/Mtcorsva.ttf",
                "alignment": 2,
                "fontWeight": "normal",
                "fontStyle": "normal",
                "underline": false,
                "linethrough": false,
                "overline": false,
                "textOpacity": 100,
                "charSpacing": 0,
                "lineHeight": 1.16,
                "textShadow": null,
                "buttonShadow": null,
                "color": "#ffffff",
                "fontSize": 30.33949773001315,
                "paddingOffset": 5,
                "backgroundColor": ""
            }
        ],
        "image_sticker_json": [],
        "frame_json": {
            "frame_image": "",
            "frame_color": ""
        },
        "background_json": {
            "scaleMode": "scaleCrop",
            "background_image": "assets/images/default_background.jpg",
            "background_color": ""
        },
        "sample_image": "",
        "sizeType": "page-like-ad",
        "height": 444,
        "width": 1200
    },
    {
        "text_json": [
            {
                "xPos": 295,
                "yPos": 66,
                "width": 83.25,
                "color": "#ffffff",
                "text": "Fashion Designer",
                "size": 22,
                "fontName": "BacktoBlackDemo",
                "fontPath": "assets/fonts/style10.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 3.0538779894419417,
                "scaleY": 3.053877989441942,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            },
            {
                "xPos": 253,
                "yPos": 286,
                "width": 150,
                "color": "#ffffff",
                "text": "Lorem Ipsum is simply dummy text of the printing.",
                "size": 15,
                "fontName": "OpenSansLight-Italic",
                "fontPath": "assets/fonts/OpenSans-LightItalic.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 2.217028709776545,
                "scaleY": 2.217028709776545,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            }
        ],
        "sticker_json": [
            {
                "xPos": -675,
                "yPos": -173,
                "width": 800,
                "height": 800,
                "scaleX": 1.17,
                "scaleY": 1.17,
                "sticker_image": "assets/images/default_logo.png",
                "angle": 0,
                "is_round": 0
            }
        ],
        "button_json": [
            {
                "text": "Contact Me",
                "xPos": 314,
                "yPos": 469,
                "angle": 0,
                "width": 197.99492359421467,
                "height": 58.54769594090961,
                "scaleX": 1,
                "scaleY": 1,
                "buttonFill": "#ff58a0",
                "buttonStrokeColor": "#000000",
                "buttonStrokeWidth": 0,
                "buttonRx": 4,
                "buttonRy": 4,
                "stroke": "",
                "strokeWidth": 1,
                "fontName": "MonotypeCorsiva",
                "fontPath": "assets/fonts/Mtcorsva.ttf",
                "alignment": 2,
                "fontWeight": "normal",
                "fontStyle": "normal",
                "underline": false,
                "linethrough": false,
                "overline": false,
                "textOpacity": 100,
                "charSpacing": 0,
                "lineHeight": 1.16,
                "textShadow": null,
                "buttonShadow": null,
                "color": "#ffffff",
                "fontSize": 32.06617237515115,
                "paddingOffset": 5,
                "backgroundColor": ""
            }
        ],
        "image_sticker_json": [],
        "frame_json": {
            "frame_image": "",
            "frame_color": ""
        },
        "background_json": {
            "scaleMode": "scaleCrop",
            "background_image": "assets/images/default_background.jpg",
            "background_color": ""
        },
        "sample_image": "",
        "sizeType": "click-to-website-ad",
        "height": 600,
        "width": 600
    },
    {
        "text_json": [
            {
                "xPos": 951.79,
                "yPos": 24,
                "width": 96.02,
                "color": "#ffffff",
                "text": "Fashion Designer",
                "size": 22,
                "fontName": "BacktoBlackDemo",
                "fontPath": "assets/fonts/style10.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 2.691347292119479,
                "scaleY": 2.691347292119479,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            },
            {
                "xPos": 832.27,
                "yPos": 228,
                "width": 315.99,
                "color": "#ffffff",
                "text": "Lorem Ipsum is simply dummy text of the printing.",
                "size": 15,
                "fontName": "OpenSansLight-Italic",
                "fontPath": "assets/fonts/OpenSans-LightItalic.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 1.6292731652604682,
                "scaleY": 1.6292731652604682,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            }
        ],
        "sticker_json": [
            {
                "xPos": -177,
                "yPos": -173,
                "width": 800,
                "height": 800,
                "scaleX": 1.08,
                "scaleY": 1.08,
                "sticker_image": "assets/images/default_logo.png",
                "angle": 0,
                "is_round": 0
            }
        ],
        "button_json": [
            {
                "text": "Contact Me",
                "xPos": 981,
                "yPos": 354,
                "angle": 0,
                "width": 182.19037472920124,
                "height": 71.80962527079876,
                "scaleX": 1,
                "scaleY": 1,
                "buttonFill": "#ff58a0",
                "buttonStrokeColor": "#000000",
                "buttonStrokeWidth": 0,
                "buttonRx": 4,
                "buttonRy": 4,
                "stroke": "",
                "strokeWidth": 1,
                "fontName": "MonotypeCorsiva",
                "fontPath": "assets/fonts/Mtcorsva.ttf",
                "alignment": 2,
                "fontWeight": "normal",
                "fontStyle": "normal",
                "underline": false,
                "linethrough": false,
                "overline": false,
                "textOpacity": 100,
                "charSpacing": 0,
                "lineHeight": 1.16,
                "textShadow": null,
                "buttonShadow": null,
                "color": "#ffffff",
                "fontSize": 35.37984843832356,
                "paddingOffset": 5,
                "backgroundColor": ""
            }
        ],
        "image_sticker_json": [],
        "frame_json": {
            "frame_image": "",
            "frame_color": ""
        },
        "background_json": {
            "scaleMode": "scaleCrop",
            "background_image": "assets/images/default_background.jpg",
            "background_color": ""
        },
        "sample_image": "",
        "sizeType": "twitter-cover",
        "height": 500,
        "width": 1500
    },
    {
        "text_json": [
            {
                "xPos": 617.65,
                "yPos": 48,
                "width": 88.05,
                "color": "#ffffff",
                "text": "Fashion Designer",
                "size": 22,
                "fontName": "BacktoBlackDemo",
                "fontPath": "assets/fonts/style10.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 2.506582523344693,
                "scaleY": 2.506582523344693,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            },
            {
                "xPos": 496.74,
                "yPos": 239.54,
                "width": 233.98,
                "color": "#ffffff",
                "text": "Lorem Ipsum is simply dummy text of the printing.",
                "size": 15,
                "fontName": "OpenSansLight-Italic",
                "fontPath": "assets/fonts/OpenSans-LightItalic.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 1.9726989751422013,
                "scaleY": 1.9726989751422013,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            }
        ],
        "sticker_json": [
            {
                "xPos": -362,
                "yPos": -194,
                "width": 800,
                "height": 800,
                "scaleX": 1.02,
                "scaleY": 1.02,
                "sticker_image": "assets/images/default_logo.png",
                "angle": 0,
                "is_round": 0
            }
        ],
        "button_json": [
            {
                "text": "Contact Me",
                "xPos": 628,
                "yPos": 364,
                "angle": 0,
                "width": 198.84962247644114,
                "height": 76.15262627107371,
                "scaleX": 1,
                "scaleY": 1,
                "buttonFill": "#ff58a0",
                "buttonStrokeColor": "#000000",
                "buttonStrokeWidth": 0,
                "buttonRx": 4,
                "buttonRy": 4,
                "stroke": "",
                "strokeWidth": 1,
                "fontName": "MonotypeCorsiva",
                "fontPath": "assets/fonts/Mtcorsva.ttf",
                "alignment": 2,
                "fontWeight": "normal",
                "fontStyle": "normal",
                "underline": false,
                "linethrough": false,
                "overline": false,
                "textOpacity": 100,
                "charSpacing": 0,
                "lineHeight": 1.16,
                "textShadow": null,
                "buttonShadow": null,
                "color": "#ffffff",
                "fontSize": 35.51580659569828,
                "paddingOffset": 5,
                "backgroundColor": ""
            }
        ],
        "image_sticker_json": [],
        "frame_json": {
            "frame_image": "",
            "frame_color": ""
        },
        "background_json": {
            "scaleMode": "scaleCrop",
            "background_image": "assets/images/default_background.jpg",
            "background_color": ""
        },
        "sample_image": "",
        "sizeType": "twitter-post",
        "height": 512,
        "width": 1024
    },
    {
        "text_json": [
            {
                "xPos": 1277.83,
                "yPos": 123,
                "width": 98.14,
                "color": "#ffffff",
                "text": "Fashion Designer",
                "size": 22,
                "fontName": "BacktoBlackDemo",
                "fontPath": "assets/fonts/style10.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 5.709546866962352,
                "scaleY": 5.709546866962352,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            },
            {
                "xPos": 1164.54,
                "yPos": 589.71,
                "width": 324.02,
                "color": "#ffffff",
                "text": "Lorem Ipsum is simply dummy text of the printing.",
                "size": 15,
                "fontName": "OpenSansLight-Italic",
                "fontPath": "assets/fonts/OpenSans-LightItalic.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 2.4426905976727045,
                "scaleY": 2.4426905976727045,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            }
        ],
        "sticker_json": [
            {
                "xPos": -535,
                "yPos": -253,
                "width": 800,
                "height": 800,
                "scaleX": 1.89,
                "scaleY": 1.89,
                "sticker_image": "assets/images/default_logo.png",
                "angle": 0,
                "is_round": 0
            }
        ],
        "button_json": [
            {
                "text": "Contact Me",
                "xPos": 1427,
                "yPos": 812,
                "angle": 0,
                "width": 267.1591478329651,
                "height": 99.37269225123052,
                "scaleX": 1,
                "scaleY": 1,
                "buttonFill": "#ff58a0",
                "buttonStrokeColor": "#000000",
                "buttonStrokeWidth": 0,
                "buttonRx": 4,
                "buttonRy": 4,
                "stroke": "",
                "strokeWidth": 1,
                "fontName": "MonotypeCorsiva",
                "fontPath": "assets/fonts/Mtcorsva.ttf",
                "alignment": 2,
                "fontWeight": "normal",
                "fontStyle": "normal",
                "underline": false,
                "linethrough": false,
                "overline": false,
                "textOpacity": 100,
                "charSpacing": 0,
                "lineHeight": 1.16,
                "textShadow": null,
                "buttonShadow": null,
                "color": "#ffffff",
                "fontSize": 55.980015587025676,
                "paddingOffset": 5,
                "backgroundColor": ""
            }
        ],
        "image_sticker_json": [],
        "frame_json": {
            "frame_image": "",
            "frame_color": ""
        },
        "background_json": {
            "scaleMode": "scaleCrop",
            "background_image": "assets/images/default_background.jpg",
            "background_color": ""
        },
        "sample_image": "",
        "sizeType": "youtube-channel-cover",
        "height": 1040,
        "width": 2560
    },
    {
        "text_json": [
            {
                "xPos": 825.77,
                "yPos": 79,
                "width": 98,
                "color": "#ffffff",
                "text": "Fashion Designer",
                "size": 22,
                "fontName": "BacktoBlackDemo",
                "fontPath": "assets/fonts/style10.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 3.780268781069203,
                "scaleY": 3.780268781069203,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            },
            {
                "xPos": 792.97,
                "yPos": 355.28,
                "width": 213.98,
                "color": "#ffffff",
                "text": "Lorem Ipsum is simply dummy text of the printing.",
                "size": 15,
                "fontName": "OpenSansLight-Italic",
                "fontPath": "assets/fonts/OpenSans-LightItalic.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 1.9864567506718407,
                "scaleY": 1.9864567506718407,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            }
        ],
        "sticker_json": [
            {
                "xPos": -220,
                "yPos": -325,
                "width": 800,
                "height": 800,
                "scaleX": 1.27,
                "scaleY": 1.27,
                "sticker_image": "assets/images/default_logo.png",
                "angle": 0,
                "is_round": 0
            }
        ],
        "button_json": [
            {
                "text": "Contact Me",
                "xPos": 905,
                "yPos": 514,
                "angle": 0,
                "width": 219.3146042282888,
                "height": 71.48901409888539,
                "scaleX": 1,
                "scaleY": 1,
                "buttonFill": "#ff58a0",
                "buttonStrokeColor": "#000000",
                "buttonStrokeWidth": 0,
                "buttonRx": 4,
                "buttonRy": 4,
                "stroke": "",
                "strokeWidth": 1,
                "fontName": "MonotypeCorsiva",
                "fontPath": "assets/fonts/Mtcorsva.ttf",
                "alignment": 2,
                "fontWeight": "normal",
                "fontStyle": "normal",
                "underline": false,
                "linethrough": false,
                "overline": false,
                "textOpacity": 100,
                "charSpacing": 0,
                "lineHeight": 1.16,
                "textShadow": null,
                "buttonShadow": null,
                "color": "#ffffff",
                "fontSize": 34.9947616132127,
                "paddingOffset": 5,
                "backgroundColor": ""
            }
        ],
        "image_sticker_json": [],
        "frame_json": {
            "frame_image": "",
            "frame_color": ""
        },
        "background_json": {
            "scaleMode": "scaleCrop",
            "background_image": "assets/images/default_background.jpg",
            "background_color": ""
        },
        "sample_image": "",
        "sizeType": "youtube-video-thumbnail",
        "height": 720,
        "width": 1280
    },
    {
        "text_json": [
            {
                "xPos": 548.67,
                "yPos": 90.27,
                "width": 94.2,
                "color": "#ffffff",
                "text": "Fashion Designer",
                "size": 22,
                "fontName": "BacktoBlackDemo",
                "fontPath": "assets/fonts/style10.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 4.878464621258283,
                "scaleY": 4.878464621258283,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            },
            {
                "xPos": 593.74,
                "yPos": 415.1,
                "width": 117.7,
                "color": "#ffffff",
                "text": "Lorem Ipsum is simply dummy text of the printing.",
                "size": 15,
                "fontName": "OpenSansLight-Italic",
                "fontPath": "assets/fonts/OpenSans-LightItalic.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 3.315379195538983,
                "scaleY": 3.315379195538983,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            }
        ],
        "sticker_json": [
            {
                "xPos": -516,
                "yPos": -1,
                "width": 800,
                "height": 800,
                "scaleX": 1.3,
                "scaleY": 1.3,
                "sticker_image": "assets/images/default_logo.png",
                "angle": 0,
                "is_round": 0
            }
        ],
        "button_json": [
            {
                "text": "Contact Me",
                "xPos": 689,
                "yPos": 806,
                "angle": 0,
                "width": 199.39620774919814,
                "height": 58.189151945422495,
                "scaleX": 1,
                "scaleY": 1,
                "buttonFill": "#ff58a0",
                "buttonStrokeColor": "#000000",
                "buttonStrokeWidth": 0,
                "buttonRx": 4,
                "buttonRy": 4,
                "stroke": "",
                "strokeWidth": 1,
                "fontName": "MonotypeCorsiva",
                "fontPath": "assets/fonts/Mtcorsva.ttf",
                "alignment": 2,
                "fontWeight": "normal",
                "fontStyle": "normal",
                "underline": false,
                "linethrough": false,
                "overline": false,
                "textOpacity": 100,
                "charSpacing": 0,
                "lineHeight": 1.16,
                "textShadow": null,
                "buttonShadow": null,
                "color": "#ffffff",
                "fontSize": 34.57041032626137,
                "paddingOffset": 5,
                "backgroundColor": ""
            }
        ],
        "image_sticker_json": [],
        "frame_json": {
            "frame_image": "",
            "frame_color": ""
        },
        "background_json": {
            "scaleMode": "scaleCrop",
            "background_image": "assets/images/default_background.jpg",
            "background_color": ""
        },
        "sample_image": "",
        "sizeType": "instagram-post",
        "height": 1080,
        "width": 1080
    },
    {
        "text_json": [
            {
                "xPos": 210.54,
                "yPos": 41.14,
                "width": 83.34,
                "color": "#ffffff",
                "text": "Fashion Designer",
                "size": 22,
                "fontName": "BacktoBlackDemo",
                "fontPath": "assets/fonts/style10.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 1.872448573298046,
                "scaleY": 1.872448573298046,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            },
            {
                "xPos": 212.01,
                "yPos": 176.19,
                "width": 109.9,
                "color": "#ffffff",
                "text": "Lorem Ipsum is simply dummy text of the printing.",
                "size": 15,
                "fontName": "OpenSansLight-Italic",
                "fontPath": "assets/fonts/OpenSans-LightItalic.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 1.4154918208899998,
                "scaleY": 1.4154918208899998,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            }
        ],
        "sticker_json": [
            {
                "xPos": -452,
                "yPos": -131,
                "width": 800,
                "height": 800,
                "scaleX": 0.81,
                "scaleY": 0.81,
                "sticker_image": "assets/images/default_logo.png",
                "angle": 0,
                "is_round": 0
            }
        ],
        "button_json": [
            {
                "text": "Contact Me",
                "xPos": 211,
                "yPos": 308,
                "angle": 0,
                "width": 147.50927157775436,
                "height": 47.04323765362056,
                "scaleX": 1,
                "scaleY": 1,
                "buttonFill": "#ff58a0",
                "buttonStrokeColor": "#000000",
                "buttonStrokeWidth": 0,
                "buttonRx": 4,
                "buttonRy": 4,
                "stroke": "",
                "strokeWidth": 1,
                "fontName": "MonotypeCorsiva",
                "fontPath": "assets/fonts/Mtcorsva.ttf",
                "alignment": 2,
                "fontWeight": "normal",
                "fontStyle": "normal",
                "underline": false,
                "linethrough": false,
                "overline": false,
                "textOpacity": 100,
                "charSpacing": 0,
                "lineHeight": 1.16,
                "textShadow": null,
                "buttonShadow": null,
                "color": "#ffffff",
                "fontSize": 20,
                "paddingOffset": 5,
                "backgroundColor": ""
            }
        ],
        "image_sticker_json": [],
        "frame_json": {
            "frame_image": "",
            "frame_color": ""
        },
        "background_json": {
            "scaleMode": "scaleCrop",
            "background_image": "assets/images/default_background.jpg",
            "background_color": ""
        },
        "sample_image": "",
        "sizeType": "profile-picture",
        "height": 400,
        "width": 400
    },
    {
        "text_json": [
            {
                "xPos": 17,
                "yPos": 572,
                "width": 171.38,
                "color": "#ffffff",
                "text": "Fashion Designer",
                "size": 22,
                "fontName": "BacktoBlackDemo",
                "fontPath": "assets/fonts/style10.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 3.2502755361130906,
                "scaleY": 3.2502755361130906,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            },
            {
                "xPos": 84,
                "yPos": 759,
                "width": 213.97,
                "color": "#ffffff",
                "text": "Lorem Ipsum is simply dummy text of the printing.",
                "size": 15,
                "fontName": "OpenSansLight-Italic",
                "fontPath": "assets/fonts/OpenSans-LightItalic.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 2.073633444791672,
                "scaleY": 2.073633444791672,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            }
        ],
        "sticker_json": [
            {
                "xPos": -185,
                "yPos": -386,
                "width": 800,
                "height": 800,
                "scaleX": 1.13,
                "scaleY": 1.13,
                "sticker_image": "assets/images/default_logo.png",
                "angle": 0,
                "is_round": 0
            }
        ],
        "button_json": [
            {
                "text": "Contact Me",
                "xPos": 193,
                "yPos": 966,
                "angle": 0,
                "width": 235.09870823976306,
                "height": 70.88501062731733,
                "scaleX": 1,
                "scaleY": 1,
                "buttonFill": "#ff58a0",
                "buttonStrokeColor": "#000000",
                "buttonStrokeWidth": 0,
                "buttonRx": 4,
                "buttonRy": 4,
                "stroke": "",
                "strokeWidth": 1,
                "fontName": "MonotypeCorsiva",
                "fontPath": "assets/fonts/Mtcorsva.ttf",
                "alignment": 2,
                "fontWeight": "normal",
                "fontStyle": "normal",
                "underline": false,
                "linethrough": false,
                "overline": false,
                "textOpacity": 100,
                "charSpacing": 0,
                "lineHeight": 1.16,
                "textShadow": null,
                "buttonShadow": null,
                "color": "#ffffff",
                "fontSize": 33.01958211778158,
                "paddingOffset": 5,
                "backgroundColor": ""
            }
        ],
        "image_sticker_json": [],
        "frame_json": {
            "frame_image": "",
            "frame_color": ""
        },
        "background_json": {
            "scaleMode": "scaleCrop",
            "background_image": "assets/images/default_background.jpg",
            "background_color": ""
        },
        "sample_image": "",
        "sizeType": "pinterest-post",
        "height": 1200,
        "width": 600
    },
    {
        "text_json": [
            {
                "xPos": 580.33,
                "yPos": 88.56,
                "width": 86.01,
                "color": "#ffffff",
                "text": "Fashion Designer",
                "size": 22,
                "fontName": "BacktoBlackDemo",
                "fontPath": "assets/fonts/style10.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 4.390236007471399,
                "scaleY": 4.390236007471399,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            },
            {
                "xPos": 1006.89,
                "yPos": 119.38,
                "width": 100.99,
                "color": "#ffffff",
                "text": "Lorem Ipsum is simply dummy text of the printing.",
                "size": 15,
                "fontName": "OpenSansLight-Italic",
                "fontPath": "assets/fonts/OpenSans-LightItalic.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 2.4242371357093724,
                "scaleY": 2.4242371357093724,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            }
        ],
        "sticker_json": [
            {
                "xPos": -171,
                "yPos": -169,
                "width": 800,
                "height": 800,
                "scaleX": 0.95,
                "scaleY": 0.95,
                "sticker_image": "assets/images/default_logo.png",
                "angle": 0,
                "is_round": 0
            }
        ],
        "button_json": [
            {
                "text": "Contact Me",
                "xPos": 1321,
                "yPos": 171,
                "angle": 0,
                "width": 208.81620370099003,
                "height": 73.88757806142708,
                "scaleX": 1,
                "scaleY": 1,
                "buttonFill": "#ff58a0",
                "buttonStrokeColor": "#000000",
                "buttonStrokeWidth": 0,
                "buttonRx": 4,
                "buttonRy": 4,
                "stroke": "",
                "strokeWidth": 1,
                "fontName": "MonotypeCorsiva",
                "fontPath": "assets/fonts/Mtcorsva.ttf",
                "alignment": 2,
                "fontWeight": "normal",
                "fontStyle": "normal",
                "underline": false,
                "linethrough": false,
                "overline": false,
                "textOpacity": 100,
                "charSpacing": 0,
                "lineHeight": 1.16,
                "textShadow": null,
                "buttonShadow": null,
                "color": "#ffffff",
                "fontSize": 35.14408951404844,
                "paddingOffset": 5,
                "backgroundColor": ""
            }
        ],
        "image_sticker_json": [],
        "frame_json": {
            "frame_image": "",
            "frame_color": ""
        },
        "background_json": {
            "scaleMode": "scaleCrop",
            "background_image": "assets/images/default_background.jpg",
            "background_color": ""
        },
        "sample_image": "",
        "sizeType": "linkedin-cover",
        "height": 396,
        "width": 1584
    },
    {
        "text_json": [
            {
                "xPos": 175.29,
                "yPos": 639.38,
                "width": 103.67,
                "color": "#ffffff",
                "text": "Fashion Designer",
                "size": 22,
                "fontName": "BacktoBlackDemo",
                "fontPath": "assets/fonts/style10.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 7.111615519153207,
                "scaleY": 7.111615519153207,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            },
            {
                "xPos": 172.47,
                "yPos": 1170.78,
                "width": 270.14,
                "color": "#ffffff",
                "text": "Lorem Ipsum is simply dummy text of the printing.",
                "size": 15,
                "fontName": "OpenSansLight-Italic",
                "fontPath": "assets/fonts/OpenSans-LightItalic.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 2.8105502528179716,
                "scaleY": 2.8105502528179716,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            }
        ],
        "sticker_json": [
            {
                "xPos": -68,
                "yPos": -602,
                "width": 800,
                "height": 800,
                "scaleX": 1.53,
                "scaleY": 1.53,
                "sticker_image": "assets/images/default_logo.png",
                "angle": 0,
                "is_round": 0
            }
        ],
        "button_json": [
            {
                "text": "Contact Me",
                "xPos": 360,
                "yPos": 1528,
                "angle": 0,
                "width": 357.4304971150111,
                "height": 114.90893917842739,
                "scaleX": 1,
                "scaleY": 1,
                "buttonFill": "#ff58a0",
                "buttonStrokeColor": "#000000",
                "buttonStrokeWidth": 0,
                "buttonRx": 4,
                "buttonRy": 4,
                "stroke": "",
                "strokeWidth": 1,
                "fontName": "MonotypeCorsiva",
                "fontPath": "assets/fonts/Mtcorsva.ttf",
                "alignment": 2,
                "fontWeight": "normal",
                "fontStyle": "normal",
                "underline": false,
                "linethrough": false,
                "overline": false,
                "textOpacity": 100,
                "charSpacing": 0,
                "lineHeight": 1.16,
                "textShadow": null,
                "buttonShadow": null,
                "color": "#ffffff",
                "fontSize": 45.529576059408626,
                "paddingOffset": 5,
                "backgroundColor": ""
            }
        ],
        "image_sticker_json": [],
        "frame_json": {
            "frame_image": "",
            "frame_color": ""
        },
        "background_json": {
            "scaleMode": "scaleCrop",
            "background_image": "assets/images/default_background.jpg",
            "background_color": ""
        },
        "sample_image": "",
        "sizeType": "story",
        "height": 1920,
        "width": 1080
    },
    {
        "text_json": [
            {
                "xPos": 1048.52,
                "yPos": 87.31,
                "width": 94,
                "color": "#ffffff",
                "text": "Fashion Designer",
                "size": 22,
                "fontName": "BacktoBlackDemo",
                "fontPath": "assets/fonts/style10.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 5.720845482405148,
                "scaleY": 5.720845482405147,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            },
            {
                "xPos": 897.55,
                "yPos": 476.7,
                "width": 218.93,
                "color": "#ffffff",
                "text": "Lorem Ipsum is simply dummy text of the printing.",
                "size": 15,
                "fontName": "OpenSansLight-Italic",
                "fontPath": "assets/fonts/OpenSans-LightItalic.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 3.7188873193536285,
                "scaleY": 3.7188873193536285,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            }
        ],
        "sticker_json": [
            {
                "xPos": -297,
                "yPos": -316,
                "width": 800,
                "height": 800,
                "scaleX": 1.37,
                "scaleY": 1.37,
                "sticker_image": "assets/images/default_logo.png",
                "angle": 0,
                "is_round": 0
            }
        ],
        "button_json": [
            {
                "text": "Contact Me",
                "xPos": 1159,
                "yPos": 795,
                "angle": 0,
                "width": 308.12647987046955,
                "height": 71.1726947783868,
                "scaleX": 1,
                "scaleY": 1,
                "buttonFill": "#ff58a0",
                "buttonStrokeColor": "#000000",
                "buttonStrokeWidth": 0,
                "buttonRx": 4,
                "buttonRy": 4,
                "stroke": "",
                "strokeWidth": 1,
                "fontName": "MonotypeCorsiva",
                "fontPath": "assets/fonts/Mtcorsva.ttf",
                "alignment": 2,
                "fontWeight": "normal",
                "fontStyle": "normal",
                "underline": false,
                "linethrough": false,
                "overline": false,
                "textOpacity": 100,
                "charSpacing": 0,
                "lineHeight": 1.16,
                "textShadow": null,
                "buttonShadow": null,
                "color": "#ffffff",
                "fontSize": 44.54443185179423,
                "paddingOffset": 5,
                "backgroundColor": ""
            }
        ],
        "image_sticker_json": [],
        "frame_json": {
            "frame_image": "",
            "frame_color": ""
        },
        "background_json": {
            "scaleMode": "scaleCrop",
            "background_image": "assets/images/default_background.jpg",
            "background_color": ""
        },
        "sample_image": "",
        "sizeType": "hd-slideshow",
        "height": 1080,
        "width": 1920
    },
    {
        "text_json": [
            {
                "xPos": 435.97,
                "yPos": 44.18,
                "width": 100.09,
                "color": "#ffffff",
                "text": "Fashion Designer",
                "size": 22,
                "fontName": "BacktoBlackDemo",
                "fontPath": "assets/fonts/style10.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 4.781305175406774,
                "scaleY": 4.781305175406774,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            },
            {
                "xPos": 512.99,
                "yPos": 375.25,
                "width": 178.59,
                "color": "#ffffff",
                "text": "Lorem Ipsum is simply dummy text of the printing.",
                "size": 15,
                "fontName": "OpenSansLight-Italic",
                "fontPath": "assets/fonts/OpenSans-LightItalic.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 1.9879038517515089,
                "scaleY": 1.9879038517515089,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            }
        ],
        "sticker_json": [
            {
                "xPos": -573,
                "yPos": -132,
                "width": 800,
                "height": 800,
                "scaleX": 1.22,
                "scaleY": 1.22,
                "sticker_image": "assets/images/default_logo.png",
                "angle": 0,
                "is_round": 0
            }
        ],
        "button_json": [
            {
                "text": "Contact Me",
                "xPos": 549,
                "yPos": 546,
                "angle": 0,
                "width": 280.96272951517636,
                "height": 68.34734124920949,
                "scaleX": 1,
                "scaleY": 1,
                "buttonFill": "#ff58a0",
                "buttonStrokeColor": "#000000",
                "buttonStrokeWidth": 0,
                "buttonRx": 4,
                "buttonRy": 4,
                "stroke": "",
                "strokeWidth": 1,
                "fontName": "MonotypeCorsiva",
                "fontPath": "assets/fonts/Mtcorsva.ttf",
                "alignment": 2,
                "fontWeight": "normal",
                "fontStyle": "normal",
                "underline": false,
                "linethrough": false,
                "overline": false,
                "textOpacity": 100,
                "charSpacing": 0,
                "lineHeight": 1.16,
                "textShadow": null,
                "buttonShadow": null,
                "color": "#ffffff",
                "fontSize": 38.33968441765626,
                "paddingOffset": 5,
                "backgroundColor": ""
            }
        ],
        "image_sticker_json": [],
        "frame_json": {
            "frame_image": "",
            "frame_color": ""
        },
        "background_json": {
            "scaleMode": "scaleCrop",
            "background_image": "assets/images/default_background.jpg",
            "background_color": ""
        },
        "sample_image": "",
        "sizeType": "slideshow",
        "height": 720,
        "width": 960
    },
    {
        "text_json": [
            {
                "xPos": 319.54,
                "yPos": 63.51,
                "width": 84.09,
                "color": "#ffffff",
                "text": "Fashion Designer",
                "size": 22,
                "fontName": "BacktoBlackDemo",
                "fontPath": "assets/fonts/style10.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 3.233420593296771,
                "scaleY": 3.233420593296771,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            },
            {
                "xPos": 670.99,
                "yPos": 37.09,
                "width": 91.28,
                "color": "#ffffff",
                "text": "Lorem Ipsum is simply dummy text of the printing.",
                "size": 15,
                "fontName": "OpenSansLight-Italic",
                "fontPath": "assets/fonts/OpenSans-LightItalic.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 2.330146313699932,
                "scaleY": 2.330146313699932,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            }
        ],
        "sticker_json": [
            {
                "xPos": -344,
                "yPos": -185,
                "width": 800,
                "height": 800,
                "scaleX": 0.85,
                "scaleY": 0.85,
                "sticker_image": "assets/images/default_logo.png",
                "angle": 0,
                "is_round": 0
            }
        ],
        "button_json": [
            {
                "text": "Contact Me",
                "xPos": 917,
                "yPos": 107,
                "angle": 0,
                "width": 250.41207461815236,
                "height": 84.22252964727359,
                "scaleX": 1,
                "scaleY": 1,
                "buttonFill": "#ff58a0",
                "buttonStrokeColor": "#000000",
                "buttonStrokeWidth": 0,
                "buttonRx": 4,
                "buttonRy": 4,
                "stroke": "",
                "strokeWidth": 1,
                "fontName": "MonotypeCorsiva",
                "fontPath": "assets/fonts/Mtcorsva.ttf",
                "alignment": 2,
                "fontWeight": "normal",
                "fontStyle": "normal",
                "underline": false,
                "linethrough": false,
                "overline": false,
                "textOpacity": 100,
                "charSpacing": 0,
                "lineHeight": 1.16,
                "textShadow": null,
                "buttonShadow": null,
                "color": "#ffffff",
                "fontSize": 39.68980464391364,
                "paddingOffset": 5,
                "backgroundColor": ""
            }
        ],
        "image_sticker_json": [],
        "frame_json": {
            "frame_image": "",
            "frame_color": ""
        },
        "background_json": {
            "scaleMode": "scaleCrop",
            "background_image": "assets/images/default_background.jpg",
            "background_color": ""
        },
        "sample_image": "",
        "sizeType": "esty-cover",
        "height": 300,
        "width": 1200
    },
    {
        "text_json": [
            {
                "xPos": 509.08,
                "yPos": 87,
                "width": 87.5,
                "color": "#ffffff",
                "text": "Fashion Designer",
                "size": 22,
                "fontName": "BacktoBlackDemo",
                "fontPath": "assets/fonts/style10.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 5.8263961922113845,
                "scaleY": 5.8263961922113845,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            },
            {
                "xPos": 1200.15,
                "yPos": 144.38,
                "width": 138.16,
                "color": "#ffffff",
                "text": "Lorem Ipsum is simply dummy text of the printing.",
                "size": 15,
                "fontName": "OpenSansLight-Italic",
                "fontPath": "assets/fonts/OpenSans-LightItalic.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 4.095392413165596,
                "scaleY": 4.095392413165596,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            }
        ],
        "sticker_json": [
            {
                "xPos": -205,
                "yPos": -86,
                "width": 800,
                "height": 800,
                "scaleX": 0.82,
                "scaleY": 0.82,
                "sticker_image": "assets/images/default_logo.png",
                "angle": 0,
                "is_round": 0
            }
        ],
        "button_json": [
            {
                "text": "Contact Me",
                "xPos": 1951,
                "yPos": 197,
                "angle": 0,
                "width": 314.80038547861346,
                "height": 100.39633950429443,
                "scaleX": 1,
                "scaleY": 1,
                "buttonFill": "#ff58a0",
                "buttonStrokeColor": "#000000",
                "buttonStrokeWidth": 0,
                "buttonRx": 4,
                "buttonRy": 4,
                "stroke": "",
                "strokeWidth": 1,
                "fontName": "MonotypeCorsiva",
                "fontPath": "assets/fonts/Mtcorsva.ttf",
                "alignment": 2,
                "fontWeight": "normal",
                "fontStyle": "normal",
                "underline": false,
                "linethrough": false,
                "overline": false,
                "textOpacity": 100,
                "charSpacing": 0,
                "lineHeight": 1.16,
                "textShadow": null,
                "buttonShadow": null,
                "color": "#ffffff",
                "fontSize": 43.58612726145193,
                "paddingOffset": 5,
                "backgroundColor": ""
            }
        ],
        "image_sticker_json": [],
        "frame_json": {
            "frame_image": "",
            "frame_color": ""
        },
        "background_json": {
            "scaleMode": "scaleCrop",
            "background_image": "assets/images/default_background.jpg",
            "background_color": ""
        },
        "sample_image": "",
        "sizeType": "soundcloud-cover",
        "height": 520,
        "width": 2480
    },
    {
        "text_json": [
            {
                "xPos": 1028.31,
                "yPos": 107.1,
                "width": 94.11,
                "color": "#ffffff",
                "text": "Fashion Designer",
                "size": 22,
                "fontName": "BacktoBlackDemo",
                "fontPath": "assets/fonts/style10.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 6.884851454058049,
                "scaleY": 6.884851454058049,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            },
            {
                "xPos": 1067.01,
                "yPos": 587.49,
                "width": 194.95,
                "color": "#ffffff",
                "text": "Lorem Ipsum is simply dummy text of the printing.",
                "size": 15,
                "fontName": "OpenSansLight-Italic",
                "fontPath": "assets/fonts/OpenSans-LightItalic.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 2.985360030536697,
                "scaleY": 2.985360030536697,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            }
        ],
        "sticker_json": [
            {
                "xPos": -723,
                "yPos": -480,
                "width": 800,
                "height": 800,
                "scaleX": 2.14,
                "scaleY": 2.14,
                "sticker_image": "assets/images/default_logo.png",
                "angle": 0,
                "is_round": 0
            }
        ],
        "button_json": [
            {
                "text": "Contact Me",
                "xPos": 1196,
                "yPos": 813,
                "angle": 0,
                "width": 360.39672271069946,
                "height": 94.73190558687654,
                "scaleX": 1,
                "scaleY": 1,
                "buttonFill": "#ff58a0",
                "buttonStrokeColor": "#000000",
                "buttonStrokeWidth": 0,
                "buttonRx": 4,
                "buttonRy": 4,
                "stroke": "",
                "strokeWidth": 1,
                "fontName": "MonotypeCorsiva",
                "fontPath": "assets/fonts/Mtcorsva.ttf",
                "alignment": 2,
                "fontWeight": "normal",
                "fontStyle": "normal",
                "underline": false,
                "linethrough": false,
                "overline": false,
                "textOpacity": 100,
                "charSpacing": 0,
                "lineHeight": 1.16,
                "textShadow": null,
                "buttonShadow": null,
                "color": "#ffffff",
                "fontSize": 39.34741061757433,
                "paddingOffset": 5,
                "backgroundColor": ""
            }
        ],
        "image_sticker_json": [],
        "frame_json": {
            "frame_image": "",
            "frame_color": ""
        },
        "background_json": {
            "scaleMode": "scaleCrop",
            "background_image": "assets/images/default_background.jpg",
            "background_color": ""
        },
        "sample_image": "",
        "sizeType": "twitch-video-player-cover",
        "height": 1080,
        "width": 1920
    },
    {
        "text_json": [
            {
                "xPos": 223.6,
                "yPos": 118,
                "width": 84.14,
                "color": "#ffffff",
                "text": "Fashion Designer",
                "size": 22,
                "fontName": "BacktoBlackDemo",
                "fontPath": "assets/fonts/style10.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 4.21685478218172,
                "scaleY": 4.21685478218172,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            },
            {
                "xPos": 591.01,
                "yPos": 131.83,
                "width": 104.62,
                "color": "#ffffff",
                "text": "Lorem Ipsum is simply dummy text of the printing.",
                "size": 15,
                "fontName": "OpenSansLight-Italic",
                "fontPath": "assets/fonts/OpenSans-LightItalic.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 2.906562271635121,
                "scaleY": 2.906562271635121,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            }
        ],
        "sticker_json": [
            {
                "xPos": -451,
                "yPos": -109,
                "width": 800,
                "height": 800,
                "scaleX": 0.86,
                "scaleY": 0.86,
                "sticker_image": "assets/images/default_logo.png",
                "angle": 0,
                "is_round": 0
            }
        ],
        "button_json": [
            {
                "text": "Contact Me",
                "xPos": 938,
                "yPos": 197,
                "angle": 0,
                "width": 236.30757912387162,
                "height": 66.36682964902064,
                "scaleX": 1,
                "scaleY": 1,
                "buttonFill": "#ff58a0",
                "buttonStrokeColor": "#000000",
                "buttonStrokeWidth": 0,
                "buttonRx": 4,
                "buttonRy": 4,
                "stroke": "",
                "strokeWidth": 1,
                "fontName": "MonotypeCorsiva",
                "fontPath": "assets/fonts/Mtcorsva.ttf",
                "alignment": 2,
                "fontWeight": "normal",
                "fontStyle": "normal",
                "underline": false,
                "linethrough": false,
                "overline": false,
                "textOpacity": 100,
                "charSpacing": 0,
                "lineHeight": 1.16,
                "textShadow": null,
                "buttonShadow": null,
                "color": "#ffffff",
                "fontSize": 35.561074402058665,
                "paddingOffset": 5,
                "backgroundColor": ""
            }
        ],
        "image_sticker_json": [],
        "frame_json": {
            "frame_image": "",
            "frame_color": ""
        },
        "background_json": {
            "scaleMode": "scaleCrop",
            "background_image": "assets/images/default_background.jpg",
            "background_color": ""
        },
        "sample_image": "",
        "sizeType": "twitch-channel-cover",
        "height": 480,
        "width": 1200
    },
    {
        "text_json": [
            {
                "xPos": 381.61,
                "yPos": 86,
                "width": 86.12,
                "color": "#ffffff",
                "text": "Fashion Designer",
                "size": 22,
                "fontName": "BacktoBlackDemo",
                "fontPath": "assets/fonts/style10.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 4.44472507925584,
                "scaleY": 4.44472507925584,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            },
            {
                "xPos": 352.01,
                "yPos": 430.65,
                "width": 197.25,
                "color": "#ffffff",
                "text": "Lorem Ipsum is simply dummy text of the printing.",
                "size": 15,
                "fontName": "OpenSansLight-Italic",
                "fontPath": "assets/fonts/OpenSans-LightItalic.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 2.073100218942354,
                "scaleY": 2.073100218942354,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            }
        ],
        "sticker_json": [
            {
                "xPos": -538,
                "yPos": -366,
                "width": 800,
                "height": 800,
                "scaleX": 1.18,
                "scaleY": 1.18,
                "sticker_image": "assets/images/default_logo.png",
                "angle": 0,
                "is_round": 0
            }
        ],
        "button_json": [
            {
                "text": "Contact Me",
                "xPos": 435,
                "yPos": 600,
                "angle": 0,
                "width": 259.25005379938636,
                "height": 74.55865848601108,
                "scaleX": 1,
                "scaleY": 1,
                "buttonFill": "#ff58a0",
                "buttonStrokeColor": "#000000",
                "buttonStrokeWidth": 0,
                "buttonRx": 4,
                "buttonRy": 4,
                "stroke": "",
                "strokeWidth": 1,
                "fontName": "MonotypeCorsiva",
                "fontPath": "assets/fonts/Mtcorsva.ttf",
                "alignment": 2,
                "fontWeight": "normal",
                "fontStyle": "normal",
                "underline": false,
                "linethrough": false,
                "overline": false,
                "textOpacity": 100,
                "charSpacing": 0,
                "lineHeight": 1.16,
                "textShadow": null,
                "buttonShadow": null,
                "color": "#ffffff",
                "fontSize": 40.22465435236745,
                "paddingOffset": 5,
                "backgroundColor": ""
            }
        ],
        "image_sticker_json": [],
        "frame_json": {
            "frame_image": "",
            "frame_color": ""
        },
        "background_json": {
            "scaleMode": "scaleCrop",
            "background_image": "assets/images/default_background.jpg",
            "background_color": ""
        },
        "sample_image": "",
        "sizeType": "logo",
        "height": 800,
        "width": 800
    },
    {
        "text_json": [
            {
                "xPos": 1034.41,
                "yPos": 140.93,
                "width": 86.1,
                "color": "#ffffff",
                "text": "Fashion Designer",
                "size": 22,
                "fontName": "BacktoBlackDemo",
                "fontPath": "assets/fonts/style10.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 6.574405980622999,
                "scaleY": 6.574405980622999,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            },
            {
                "xPos": 950.45,
                "yPos": 584.7,
                "width": 187.75,
                "color": "#ffffff",
                "text": "Lorem Ipsum is simply dummy text of the printing.",
                "size": 15,
                "fontName": "OpenSansLight-Italic",
                "fontPath": "assets/fonts/OpenSans-LightItalic.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 3.931690009898369,
                "scaleY": 3.931690009898369,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            }
        ],
        "sticker_json": [
            {
                "xPos": -468,
                "yPos": -286,
                "width": 800,
                "height": 800,
                "scaleX": 1.54,
                "scaleY": 1.54,
                "sticker_image": "assets/images/default_logo.png",
                "angle": 0,
                "is_round": 0
            }
        ],
        "button_json": [
            {
                "text": "Contact Me",
                "xPos": 1170,
                "yPos": 841,
                "angle": 0,
                "width": 292.3413095759341,
                "height": 95.44849038655843,
                "scaleX": 1,
                "scaleY": 1,
                "buttonFill": "#ff58a0",
                "buttonStrokeColor": "#000000",
                "buttonStrokeWidth": 0,
                "buttonRx": 4,
                "buttonRy": 4,
                "stroke": "",
                "strokeWidth": 1,
                "fontName": "MonotypeCorsiva",
                "fontPath": "assets/fonts/Mtcorsva.ttf",
                "alignment": 2,
                "fontWeight": "normal",
                "fontStyle": "normal",
                "underline": false,
                "linethrough": false,
                "overline": false,
                "textOpacity": 100,
                "charSpacing": 0,
                "lineHeight": 1.16,
                "textShadow": null,
                "buttonShadow": null,
                "color": "#ffffff",
                "fontSize": 39.77253492463601,
                "paddingOffset": 5,
                "backgroundColor": ""
            }
        ],
        "image_sticker_json": [],
        "frame_json": {
            "frame_image": "",
            "frame_color": ""
        },
        "background_json": {
            "scaleMode": "scaleCrop",
            "background_image": "assets/images/default_background.jpg",
            "background_color": ""
        },
        "sample_image": "",
        "sizeType": "presentation",
        "height": 1080,
        "width": 1920
    },
    {
        "text_json": [
            {
                "xPos": 821.39,
                "yPos": 415.7,
                "width": 85.56,
                "color": "#ffffff",
                "text": "Fashion Designer",
                "size": 22,
                "fontName": "BacktoBlackDemo",
                "fontPath": "assets/fonts/style10.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 6.749125192477389,
                "scaleY": 6.749125192477389,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            },
            {
                "xPos": 851.01,
                "yPos": 943,
                "width": 147.37,
                "color": "#ffffff",
                "text": "Lorem Ipsum is simply dummy text of the printing.",
                "size": 15,
                "fontName": "OpenSansLight-Italic",
                "fontPath": "assets/fonts/OpenSans-LightItalic.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 3.6191405312232927,
                "scaleY": 3.6191405312232927,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            }
        ],
        "sticker_json": [
            {
                "xPos": -817,
                "yPos": -518,
                "width": 800,
                "height": 800,
                "scaleX": 2.04,
                "scaleY": 2.04,
                "sticker_image": "assets/images/default_logo.png",
                "angle": 0,
                "is_round": 0
            }
        ],
        "button_json": [
            {
                "text": "Contact Me",
                "xPos": 995,
                "yPos": 1334,
                "angle": 0,
                "width": 247.41801768145686,
                "height": 74.89640655205693,
                "scaleX": 1,
                "scaleY": 1,
                "buttonFill": "#ff58a0",
                "buttonStrokeColor": "#000000",
                "buttonStrokeWidth": 0,
                "buttonRx": 4,
                "buttonRy": 4,
                "stroke": "",
                "strokeWidth": 1,
                "fontName": "MonotypeCorsiva",
                "fontPath": "assets/fonts/Mtcorsva.ttf",
                "alignment": 2,
                "fontWeight": "normal",
                "fontStyle": "normal",
                "underline": false,
                "linethrough": false,
                "overline": false,
                "textOpacity": 100,
                "charSpacing": 0,
                "lineHeight": 1.16,
                "textShadow": null,
                "buttonShadow": null,
                "color": "#ffffff",
                "fontSize": 32.01036045749686,
                "paddingOffset": 5,
                "backgroundColor": ""
            }
        ],
        "image_sticker_json": [],
        "frame_json": {
            "frame_image": "",
            "frame_color": ""
        },
        "background_json": {
            "scaleMode": "scaleCrop",
            "background_image": "assets/images/default_background.jpg",
            "background_color": ""
        },
        "sample_image": "",
        "sizeType": "album-cover",
        "height": 1600,
        "width": 1600
    },
    {
        "text_json": [
            {
                "xPos": 514.03,
                "yPos": 1051.64,
                "width": 84.07,
                "color": "#ffffff",
                "text": "Fashion Designer",
                "size": 22,
                "fontName": "BacktoBlackDemo",
                "fontPath": "assets/fonts/style10.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 7.8872323442048025,
                "scaleY": 7.8872323442048025,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            },
            {
                "xPos": 485.01,
                "yPos": 1668.51,
                "width": 192.26,
                "color": "#ffffff",
                "text": "Lorem Ipsum is simply dummy text of the printing.",
                "size": 15,
                "fontName": "OpenSansLight-Italic",
                "fontPath": "assets/fonts/OpenSans-LightItalic.ttf",
                "alignment": 2,
                "bg_image": "",
                "texture_image": "",
                "opacity": 100,
                "angle": 0,
                "scaleX": 3.7823870238243855,
                "scaleY": 3.7823870238243855,
                "shadowColor": "#ff0000",
                "shadowRadius": 0,
                "shadowDistance": 0
            }
        ],
        "sticker_json": [
            {
                "xPos": -278,
                "yPos": -1185,
                "width": 800,
                "height": 800,
                "scaleX": 2.79,
                "scaleY": 2.79,
                "sticker_image": "assets/images/default_logo.png",
                "angle": 0,
                "is_round": 0
            }
        ],
        "button_json": [
            {
                "text": "Contact Me",
                "xPos": 628,
                "yPos": 2034,
                "angle": 0,
                "width": 402.8172370086051,
                "height": 152.93833169152416,
                "scaleX": 1,
                "scaleY": 1,
                "buttonFill": "#ff58a0",
                "buttonStrokeColor": "#000000",
                "buttonStrokeWidth": 0,
                "buttonRx": 4,
                "buttonRy": 4,
                "stroke": "",
                "strokeWidth": 1,
                "fontName": "MonotypeCorsiva",
                "fontPath": "assets/fonts/Mtcorsva.ttf",
                "alignment": 2,
                "fontWeight": "normal",
                "fontStyle": "normal",
                "underline": false,
                "linethrough": false,
                "overline": false,
                "textOpacity": 100,
                "charSpacing": 0,
                "lineHeight": 1.16,
                "textShadow": null,
                "buttonShadow": null,
                "color": "#ffffff",
                "fontSize": 59.452062677515116,
                "paddingOffset": 5,
                "backgroundColor": ""
            }
        ],
        "image_sticker_json": [],
        "frame_json": {
            "frame_image": "",
            "frame_color": ""
        },
        "background_json": {
            "scaleMode": "scaleCrop",
            "background_image": "assets/images/default_background.jpg",
            "background_color": ""
        },
        "sample_image": "",
        "sizeType": "book-cover",
        "height": 2400,
        "width": 1600
    }
];
//   fabric_button js class
// `button list properties : [ 
//         text, buttonFill, buttonStrokeColor, buttonStrokeWidth, width, buttonRx, buttonRy,
//         fill, fontSize, stroke, strokeWidth, fontName, fontSrc, textAlign, isBold, isItalic,
//         isUnderLine, isStrikeThrough, isOverLine, opacity, charSpacing, lineHeight,
//         shadow: { color, blur, offsetX, offsetY, opacity }
// ]`
//   fabric_group_button js class
// `button list properties : [ 
//         text, buttonFill, buttonStrokeColor, buttonStrokeWidth, buttonRx, buttonRy, width, top, left, height,
//         color, fontSize, stroke, strokeWidth, fontName, fontSrc, textAlign, fontWeight, fontStyle,
//         underline, linethrough, overline, textOpacity, charSpacing, lineHeight,
//         shadow: { color, blur, offsetX, offsetY, opacity }, textShadow: { color, blur, offsetX, offsetY, opacity }       
// ]`
const textButtonList = [
    {
        "type": "textButton",
        "width": 150,
        "height": 40,
        "fill": "rgb(0,0,0)",
        "stroke": "#000",
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "text": "Click Me",
        "color": "#ffffff",
        "fontName": "Roboto-Regular",
        "fontSrc": "assets/fonts/Roboto-Regular.ttf",
        "textOpacity": 1,
        "charSpacing": 1,
        "lineHeight": 1,
        "fontSize": 18,
        "textAlign": "center",
        "textShadow": null,
        "underline": false,
        "linethrough": false,
        "fontStyle": "normal",
        "fontWeight": "normal",
        "buttonRx": 20,
        "buttonRy": 20,
        "buttonFill": {
            "type": "linear",
            "coords": {
                "x1": 0,
                "y1": 21.309129869616314,
                "x2": 150,
                "y2": 18.69087013038368
            },
            "colorStops": [
                {
                    "color": "#e59613",
                    "offset": 0
                },
                {
                    "color": "#ea441c",
                    "offset": 1
                }
            ],
            "gradientAngle": 1,
            "id": 793
        },
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "previewImage": 'assets/Buttons/1.png'
    },
    {
        "type": "textButton",
        "width": 150,
        "height": 40,
        "fill": "rgb(0,0,0)",
        "stroke": "#000",
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "text": "Click Me",
        "color": "#ffffff",
        "fontName": "Roboto-Regular",
        "fontSrc": "assets/fonts/Roboto-Regular.ttf",
        "textOpacity": 1,
        "charSpacing": 1,
        "lineHeight": 1,
        "fontSize": 18,
        "textAlign": "center",
        "textShadow": null,
        "underline": false,
        "linethrough": false,
        "fontStyle": "normal",
        "fontWeight": "normal",
        "buttonRx": 10,
        "buttonRy": 10,
        "buttonFill": {
            "type": "linear",
            "coords": {
                "x1": 0,
                "y1": 21.309129869616314,
                "x2": 150,
                "y2": 18.69087013038368
            },
            "colorStops": [
                {
                    "color": "#13d98e",
                    "offset": 0
                },
                {
                    "color": "#0775d7",
                    "offset": 1
                }
            ],
            "gradientAngle": 1,
            "id": 798
        },
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "previewImage": 'assets/Buttons/2.png'
    },
    {
        "type": "textButton",
        "width": 150,
        "height": 40,
        "fill": "rgb(0,0,0)",
        "stroke": "#000",
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "text": "Click Me",
        "color": "#ffffff",
        "fontName": "Roboto-Regular",
        "fontSrc": "assets/fonts/Roboto-Regular.ttf",
        "textOpacity": 1,
        "charSpacing": 1,
        "lineHeight": 1,
        "fontSize": 20,
        "textAlign": "center",
        "textShadow": null,
        "underline": false,
        "linethrough": false,
        "fontStyle": "normal",
        "fontWeight": "normal",
        "buttonRx": 0,
        "buttonRy": 0,
        "buttonFill": {
            "type": "linear",
            "coords": {
                "x1": 0,
                "y1": 24.99999999999999,
                "x2": 200,
                "y2": 25
            },
            "colorStops": [
                {
                    "color": "#ed714b",
                    "offset": 0
                },
                {
                    "color": "#e33556",
                    "offset": 1
                }
            ],
            "gradientAngle": 0,
            "id": 8
        },
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "previewImage": 'assets/Buttons/3.png'
    },
    {
        "type": "textButton",
        "width": 150,
        "height": 40,
        "fill": "rgb(0,0,0)",
        "stroke": "#000",
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "text": "Click Me",
        "color": "#ffffff",
        "fontName": "Roboto-Regular",
        "fontSrc": "assets/fonts/Roboto-Regular.ttf",
        "textOpacity": 1,
        "charSpacing": 1,
        "lineHeight": 1,
        "fontSize": 22,
        "textAlign": "center",
        "textShadow": null,
        "underline": false,
        "linethrough": false,
        "fontStyle": "normal",
        "fontWeight": "normal",
        "buttonRx": 20,
        "buttonRy": 20,
        "buttonFill": {
            "type": "linear",
            "coords": {
                "x1": 0,
                "y1": 19.99999999999999,
                "x2": 150,
                "y2": 20
            },
            "colorStops": [
                {
                    "color": "#e94641",
                    "offset": 0
                },
                {
                    "color": "#b61fea",
                    "offset": 1
                }
            ],
            "gradientAngle": 0,
            "id": 2
        },
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "previewImage": 'assets/Buttons/4.png'
    },
    {
        "type": "textButton",
        "width": 150,
        "height": 40,
        "fill": "rgb(0,0,0)",
        "stroke": "#000",
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "text": "Click Me",
        "color": "#ffffff",
        "fontName": "Roboto-Regular",
        "fontSrc": "assets/fonts/Roboto-Regular.ttf",
        "textOpacity": 1,
        "charSpacing": 1,
        "lineHeight": 1,
        "fontSize": 18,
        "textAlign": "center",
        "textShadow": null,
        "underline": false,
        "linethrough": false,
        "fontStyle": "normal",
        "fontWeight": "normal",
        "buttonRx": 10,
        "buttonRy": 10,
        "buttonFill": {
            "type": "linear",
            "coords": {
                "x1": 0,
                "y1": 21.309129869616314,
                "x2": 150,
                "y2": 18.69087013038368
            },
            "colorStops": [
                {
                    "color": "#fcd323",
                    "offset": 0
                },
                {
                    "color": "#ee961b",
                    "offset": 0.99
                }
            ],
            "gradientAngle": 1,
            "id": 427
        },
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "previewImage": 'assets/Buttons/5.png'
    },
    {
        "type": "textButton",
        "width": 150,
        "height": 40,
        "fill": "rgb(0,0,0)",
        "stroke": "#000",
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "text": "Click Me",
        "color": "#ffffff",
        "fontName": "Roboto-Regular",
        "fontSrc": "assets/fonts/Roboto-Regular.ttf",
        "textOpacity": 1,
        "charSpacing": 1,
        "lineHeight": 1,
        "fontSize": 20,
        "textAlign": "center",
        "textShadow": null,
        "underline": false,
        "linethrough": false,
        "fontStyle": "normal",
        "fontWeight": "normal",
        "buttonRx": 0,
        "buttonRy": 0,
        "buttonFill": {
            "type": "linear",
            "coords": {
                "x1": 0,
                "y1": 19.99999999999999,
                "x2": 150,
                "y2": 20
            },
            "colorStops": [
                {
                    "color": "#4cbdff",
                    "offset": 0
                },
                {
                    "color": "#7d40ff",
                    "offset": 0.3
                },
                {
                    "color": "#c60dca",
                    "offset": 0.99
                }
            ],
            "gradientAngle": 0,
            "id": 26
        },
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "previewImage": 'assets/Buttons/6.png'
    },
    {
        "type": "textButton",
        "width": 150,
        "height": 40,
        "fill": "rgb(0,0,0)",
        "stroke": "#000",
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "text": "Click Me",
        "color": "#ffffff",
        "fontName": "Roboto-Regular",
        "fontSrc": "assets/fonts/Roboto-Regular.ttf",
        "textOpacity": 1,
        "charSpacing": 1,
        "lineHeight": 1,
        "fontSize": 18,
        "textAlign": "center",
        "textShadow": null,
        "underline": false,
        "linethrough": false,
        "fontStyle": "normal",
        "fontWeight": "normal",
        "buttonRx": 20,
        "buttonRy": 20,
        "buttonFill": {
            "type": "linear",
            "coords": {
                "x1": 0,
                "y1": 19.99999999999999,
                "x2": 150,
                "y2": 20
            },
            "colorStops": [
                {
                    "color": "#15cca0",
                    "offset": 0
                },
                {
                    "color": "#0d9044",
                    "offset": 1
                }
            ],
            "gradientAngle": 0,
            "id": 7
        },
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "previewImage": 'assets/Buttons/7.png'
    },
    {
        "type": "textButton",
        "width": 150,
        "height": 40,
        "fill": "rgb(0,0,0)",
        "stroke": "#000",
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "text": "Click Me",
        "color": "#ffffff",
        "fontName": "Roboto-Regular",
        "fontSrc": "assets/fonts/Roboto-Regular.ttf",
        "textOpacity": 1,
        "charSpacing": 1,
        "lineHeight": 1,
        "fontSize": 18,
        "textAlign": "center",
        "textShadow": null,
        "underline": false,
        "linethrough": false,
        "fontStyle": "normal",
        "fontWeight": "normal",
        "buttonRx": 10,
        "buttonRy": 10,
        "buttonFill": {
            "type": "linear",
            "coords": {
                "x1": 0,
                "y1": 21.309129869616314,
                "x2": 150,
                "y2": 18.69087013038368
            },
            "colorStops": [
                {
                    "color": "#ee961b",
                    "offset": 0
                },
                {
                    "color": "#de2e79",
                    "offset": 0.6
                },
                {
                    "color": "#af12c1",
                    "offset": 1
                }
            ],
            "gradientAngle": 1,
            "id": 505
        },
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "previewImage": 'assets/Buttons/8.png'
    },
    {
        "type": "textButton",
        "width": 150,
        "height": 40,
        "fill": "rgb(0,0,0)",
        "stroke": "#000",
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "text": "Click Me",
        "color": "#ffffff",
        "fontName": "Roboto-Regular",
        "fontSrc": "assets/fonts/Roboto-Regular.ttf",
        "textOpacity": 1,
        "charSpacing": 1,
        "lineHeight": 1,
        "fontSize": 18,
        "textAlign": "center",
        "textShadow": null,
        "underline": false,
        "linethrough": false,
        "fontStyle": "normal",
        "fontWeight": "normal",
        "buttonRx": 0,
        "buttonRy": 0,
        "buttonFill": {
            "type": "linear",
            "coords": {
                "x1": 0,
                "y1": 21.309129869616314,
                "x2": 150,
                "y2": 18.69087013038368
            },
            "colorStops": [
                {
                    "color": "#30cc23",
                    "offset": 0
                },
                {
                    "color": "#1fc56f",
                    "offset": 0.47
                },
                {
                    "color": "#10c1b9",
                    "offset": 1
                }
            ],
            "gradientAngle": 1,
            "id": 734
        },
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "previewImage": 'assets/Buttons/9.png'
    },
    {
        "type": "textButton",
        "width": 150,
        "height": 40,
        "fill": "rgb(0,0,0)",
        "stroke": "#000",
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "text": "Click Me",
        "color": "#ffffff",
        "fontName": "Roboto-Regular",
        "fontSrc": "assets/fonts/Roboto-Regular.ttf",
        "textOpacity": 1,
        "charSpacing": 1,
        "lineHeight": 1,
        "fontSize": 18,
        "textAlign": "center",
        "textShadow": null,
        "underline": false,
        "linethrough": false,
        "fontStyle": "normal",
        "fontWeight": "normal",
        "buttonRx": 20,
        "buttonRy": 20,
        "buttonFill": {
            "type": "linear",
            "coords": {
                "x1": 0,
                "y1": 19.99999999999999,
                "x2": 150,
                "y2": 20
            },
            "colorStops": [
                {
                    "color": "#7531ea",
                    "offset": 0
                },
                {
                    "color": "#b011c3",
                    "offset": 0.26
                },
                {
                    "color": "#de2e76",
                    "offset": 0.55
                },
                {
                    "color": "#f1d43a",
                    "offset": 0.99
                }
            ],
            "gradientAngle": 0,
            "id": 57
        },
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "previewImage": 'assets/Buttons/10.png'
    },
    {
        "type": "textButton",
        "width": 150,
        "height": 40,
        "fill": "rgb(0,0,0)",
        "stroke": "#000",
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "text": "Click Me",
        "color": "#ffffff",
        "fontName": "Roboto-Regular",
        "fontSrc": "assets/fonts/Roboto-Regular.ttf",
        "textOpacity": 1,
        "charSpacing": 1,
        "lineHeight": 1,
        "fontSize": 18,
        "textAlign": "center",
        "textShadow": null,
        "underline": false,
        "linethrough": false,
        "fontStyle": "normal",
        "fontWeight": "normal",
        "buttonRx": 10,
        "buttonRy": 10,
        "buttonFill": {
            "type": "linear",
            "coords": {
                "x1": 0,
                "y1": 21.309129869616314,
                "x2": 150,
                "y2": 18.69087013038368
            },
            "colorStops": [
                {
                    "color": "#ec511b",
                    "offset": 0
                },
                {
                    "color": "#e01d47",
                    "offset": 1
                }
            ],
            "gradientAngle": 1,
            "id": 519
        },
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "previewImage": 'assets/Buttons/11.png'
    },
    {
        "type": "textButton",
        "width": 150,
        "height": 40,
        "fill": "rgb(0,0,0)",
        "stroke": "#000",
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "text": "Click Me",
        "color": "#ffffff",
        "fontName": "Roboto-Regular",
        "fontSrc": "assets/fonts/Roboto-Regular.ttf",
        "textOpacity": 1,
        "charSpacing": 1,
        "lineHeight": 1,
        "fontSize": 18,
        "textAlign": "center",
        "textShadow": null,
        "underline": false,
        "linethrough": false,
        "fontStyle": "normal",
        "fontWeight": "normal",
        "buttonRx": 0,
        "buttonRy": 0,
        "buttonFill": {
            "type": "linear",
            "coords": {
                "x1": 0,
                "y1": 21.309129869616314,
                "x2": 150,
                "y2": 18.69087013038368
            },
            "colorStops": [
                {
                    "color": "#ec6569",
                    "offset": 0
                },
                {
                    "color": "#dd3779",
                    "offset": 0.35
                },
                {
                    "color": "#c731ae",
                    "offset": 1
                }
            ],
            "gradientAngle": 1,
            "id": 754
        },
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "previewImage": 'assets/Buttons/12.png'
    },
    {
        "type": "textButton",
        "width": 150,
        "height": 40,
        "fill": "rgb(0,0,0)",
        "stroke": "#000",
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "text": "Click Me",
        "color": "#ffffff",
        "fontName": "Roboto-Regular",
        "fontSrc": "assets/fonts/Roboto-Regular.ttf",
        "textOpacity": 1,
        "charSpacing": 1,
        "lineHeight": 1,
        "fontSize": 18,
        "textAlign": "center",
        "textShadow": null,
        "underline": false,
        "linethrough": false,
        "fontStyle": "normal",
        "fontWeight": "normal",
        "buttonRx": 20,
        "buttonRy": 20,
        "buttonFill": {
            "type": "linear",
            "coords": {
                "x1": 59.374287469865656,
                "y1": 0,
                "x2": 90.62571253013436,
                "y2": 40
            },
            "colorStops": [
                {
                    "color": "#806de1",
                    "offset": 0
                },
                {
                    "color": "#6828e1",
                    "offset": 0.99
                }
            ],
            "gradientAngle": 308,
            "id": 325
        },
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "previewImage": 'assets/Buttons/13.png'
    },
    {
        "type": "textButton",
        "width": 150,
        "height": 40,
        "fill": "rgb(0,0,0)",
        "stroke": "#000",
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "text": "Click Me",
        "color": "#ffffff",
        "fontName": "Roboto-Regular",
        "fontSrc": "assets/fonts/Roboto-Regular.ttf",
        "textOpacity": 1,
        "charSpacing": 1,
        "lineHeight": 1,
        "fontSize": 18,
        "textAlign": "center",
        "textShadow": null,
        "underline": false,
        "linethrough": false,
        "fontStyle": "normal",
        "fontWeight": "normal",
        "buttonRx": 10,
        "buttonRy": 10,
        "buttonFill": {
            "type": "linear",
            "coords": {
                "x1": 0,
                "y1": 21.309129869616314,
                "x2": 150,
                "y2": 18.69087013038368
            },
            "colorStops": [
                {
                    "color": "#37cce4",
                    "offset": 0
                },
                {
                    "color": "#246de0",
                    "offset": 1
                }
            ],
            "gradientAngle": 1,
            "id": 524
        },
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "previewImage": 'assets/Buttons/14.png'
    },
    {
        "type": "textButton",
        "width": 150,
        "height": 40,
        "fill": "rgb(0,0,0)",
        "stroke": "#000",
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "text": "Click Me",
        "color": "#ffffff",
        "fontName": "Roboto-Regular",
        "fontSrc": "assets/fonts/Roboto-Regular.ttf",
        "textOpacity": 1,
        "charSpacing": 1,
        "lineHeight": 1,
        "fontSize": 18,
        "textAlign": "center",
        "textShadow": null,
        "underline": false,
        "linethrough": false,
        "fontStyle": "normal",
        "fontWeight": "normal",
        "buttonRx": 0,
        "buttonRy": 0,
        "buttonFill": {
            "type": "linear",
            "coords": {
                "x1": 0,
                "y1": 21.309129869616314,
                "x2": 150,
                "y2": 18.69087013038368
            },
            "colorStops": [
                {
                    "color": "#b90db9",
                    "offset": 0
                },
                {
                    "color": "#8c1efb",
                    "offset": 0.43
                },
                {
                    "color": "#4ec0ff",
                    "offset": 1
                }
            ],
            "gradientAngle": 1,
            "id": 781
        },
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "previewImage": 'assets/Buttons/15.png'
    },
];
const iconButtonList = [
    {
        "type": "iconButton",
        "src": "assets/ButtonIcons/1.svg",
        "previewImage": "assets/Buttons/iconButton_1.png",
        "width": 60,
        "height": 50,
        "stroke": null,
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "buttonRx": 5,
        "buttonRy": 5,
        "buttonFill": "#536270",
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "iconSize": 20,
        "iconShadow": null,
        "iconColorArray": [
            {
                "color": "#ffffff",
                "indices": [
                    0
                ]
            }
        ]
    },
    {
        "type": "iconButton",
        "src": "assets/ButtonIcons/2.svg",
        "previewImage": "assets/Buttons/iconButton_2.png",
        "width": 60,
        "height": 50,
        "stroke": null,
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "buttonRx": 5,
        "buttonRy": 5,
        "buttonFill": "#536270",
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "iconSize": 20,
        "iconShadow": null,
        "iconColorArray": [
            {
                "color": "#ffffff",
                "indices": [
                    0
                ]
            }
        ]
    },
    {
        "type": "iconButton",
        "src": "assets/ButtonIcons/4.svg",
        "previewImage": "assets/Buttons/iconButton_4.png",
        "width": 60,
        "height": 50,
        "stroke": null,
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "buttonRx": 5,
        "buttonRy": 5,
        "buttonFill": "#536270",
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "iconSize": 20,
        "iconShadow": null,
        "iconColorArray": [
            {
                "color": "#ffffff",
                "indices": [
                    0
                ]
            }
        ]
    },
    {
        "type": "iconButton",
        "src": "assets/ButtonIcons/5.svg",
        "previewImage": "assets/Buttons/iconButton_5.png",
        "width": 60,
        "height": 50,
        "stroke": null,
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "buttonRx": 5,
        "buttonRy": 5,
        "buttonFill": "#536270",
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "iconSize": 20,
        "iconShadow": null,
        "iconColorArray": [
            {
                "color": "#ffffff",
                "indices": [
                    0
                ]
            }
        ]
    },
    {
        "type": "iconButton",
        "src": "assets/ButtonIcons/6.svg",
        "previewImage": "assets/Buttons/iconButton_6.png",
        "width": 60,
        "height": 50,
        "stroke": null,
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "buttonRx": 5,
        "buttonRy": 5,
        "buttonFill": "#536270",
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "iconSize": 20,
        "iconShadow": null,
        "iconColorArray": [
            {
                "color": "#ffffff",
                "indices": [
                    0
                ]
            }
        ]
    },
    {
        "type": "iconButton",
        "src": "assets/ButtonIcons/7.svg",
        "previewImage": "assets/Buttons/iconButton_7.png",
        "width": 60,
        "height": 50,
        "stroke": null,
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "buttonRx": 5,
        "buttonRy": 5,
        "buttonFill": "#536270",
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "iconSize": 20,
        "iconShadow": null,
        "iconColorArray": [
            {
                "color": "#ffffff",
                "indices": [
                    0
                ]
            }
        ]
    },
    {
        "type": "iconButton",
        "src": "assets/ButtonIcons/8.svg",
        "previewImage": "assets/Buttons/iconButton_8.png",
        "width": 60,
        "height": 50,
        "stroke": null,
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "buttonRx": 5,
        "buttonRy": 5,
        "buttonFill": "#536270",
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "iconSize": 20,
        "iconShadow": null,
        "iconColorArray": [
            {
                "color": "#ffffff",
                "indices": [
                    0
                ]
            }
        ]
    },
    {
        "type": "iconButton",
        "src": "assets/ButtonIcons/10.svg",
        "previewImage": "assets/Buttons/iconButton_10.png",
        "width": 60,
        "height": 50,
        "stroke": null,
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "buttonRx": 5,
        "buttonRy": 5,
        "buttonFill": "#536270",
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "iconSize": 20,
        "iconShadow": null,
        "iconColorArray": [
            {
                "color": "#ffffff",
                "indices": [
                    0
                ]
            }
        ]
    },
    {
        "type": "iconButton",
        "src": "assets/ButtonIcons/12.svg",
        "previewImage": "assets/Buttons/iconButton_12.png",
        "width": 60,
        "height": 50,
        "stroke": null,
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "buttonRx": 5,
        "buttonRy": 5,
        "buttonFill": "#536270",
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "iconSize": 20,
        "iconShadow": null,
        "iconColorArray": [
            {
                "color": "#ffffff",
                "indices": [
                    0
                ]
            }
        ]
    },
    {
        "type": "iconButton",
        "src": "assets/ButtonIcons/19.svg",
        "previewImage": "assets/Buttons/iconButton_19.png",
        "width": 60,
        "height": 50,
        "stroke": null,
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "buttonRx": 5,
        "buttonRy": 5,
        "buttonFill": "#536270",
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "iconSize": 20,
        "iconShadow": null,
        "iconColorArray": [
            {
                "color": "#ffffff",
                "indices": [
                    0
                ]
            }
        ]
    },
    {
        "type": "iconButton",
        "src": "assets/ButtonIcons/20.svg",
        "previewImage": "assets/Buttons/iconButton_20.png",
        "width": 60,
        "height": 50,
        "stroke": null,
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "buttonRx": 5,
        "buttonRy": 5,
        "buttonFill": "#536270",
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "iconSize": 20,
        "iconShadow": null,
        "iconColorArray": [
            {
                "color": "#ffffff",
                "indices": [
                    0
                ]
            }
        ]
    },
    {
        "type": "iconButton",
        "src": "assets/ButtonIcons/21.svg",
        "previewImage": "assets/Buttons/iconButton_21.png",
        "width": 60,
        "height": 50,
        "stroke": null,
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "buttonRx": 5,
        "buttonRy": 5,
        "buttonFill": "#536270",
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "iconSize": 20,
        "iconShadow": null,
        "iconColorArray": [
            {
                "color": "#ffffff",
                "indices": [
                    0
                ]
            }
        ]
    },
    {
        "type": "iconButton",
        "src": "assets/ButtonIcons/22.svg",
        "previewImage": "assets/Buttons/iconButton_22.png",
        "width": 60,
        "height": 50,
        "stroke": null,
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "buttonRx": 5,
        "buttonRy": 5,
        "buttonFill": "#536270",
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "iconSize": 20,
        "iconShadow": null,
        "iconColorArray": [
            {
                "color": "#ffffff",
                "indices": [
                    0
                ]
            }
        ]
    },
    {
        "type": "iconButton",
        "src": "assets/ButtonIcons/23.svg",
        "previewImage": "assets/Buttons/iconButton_23.png",
        "width": 60,
        "height": 50,
        "stroke": null,
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "buttonRx": 5,
        "buttonRy": 5,
        "buttonFill": "#536270",
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "iconSize": 20,
        "iconShadow": null,
        "iconColorArray": [
            {
                "color": "#ffffff",
                "indices": [
                    0
                ]
            }
        ]
    },
    {
        "type": "iconButton",
        "src": "assets/ButtonIcons/24.svg",
        "previewImage": "assets/Buttons/iconButton_24.png",
        "width": 60,
        "height": 50,
        "stroke": null,
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "buttonRx": 5,
        "buttonRy": 5,
        "buttonFill": "#536270",
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "iconSize": 20,
        "iconShadow": null,
        "iconColorArray": [
            {
                "color": "#ffffff",
                "indices": [
                    0
                ]
            }
        ]
    },
    {
        "type": "iconButton",
        "src": "assets/ButtonIcons/25.svg",
        "previewImage": "assets/Buttons/iconButton_25.png",
        "width": 60,
        "height": 50,
        "stroke": null,
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "buttonRx": 5,
        "buttonRy": 5,
        "buttonFill": "#536270",
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "iconSize": 20,
        "iconShadow": null,
        "iconColorArray": [
            {
                "color": "#ffffff",
                "indices": [
                    0
                ]
            }
        ]
    },
    {
        "type": "iconButton",
        "src": "assets/ButtonIcons/28.svg",
        "previewImage": "assets/Buttons/iconButton_28.png",
        "width": 60,
        "height": 50,
        "stroke": null,
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "buttonRx": 5,
        "buttonRy": 5,
        "buttonFill": "#536270",
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "iconSize": 20,
        "iconShadow": null,
        "iconColorArray": [
            {
                "color": "#ffffff",
                "indices": [
                    0
                ]
            }
        ]
    },
    {
        "type": "iconButton",
        "src": "assets/ButtonIcons/37.svg",
        "previewImage": "assets/Buttons/iconButton_37.png",
        "width": 60,
        "height": 50,
        "stroke": null,
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "buttonRx": 5,
        "buttonRy": 5,
        "buttonFill": "#536270",
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "iconSize": 20,
        "iconShadow": null,
        "iconColorArray": [
            {
                "color": "#ffffff",
                "indices": [
                    0
                ]
            }
        ]
    },
    {
        "type": "iconButton",
        "src": "assets/ButtonIcons/41.svg",
        "previewImage": "assets/Buttons/iconButton_41.png",
        "width": 60,
        "height": 50,
        "stroke": null,
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "buttonRx": 5,
        "buttonRy": 5,
        "buttonFill": "#536270",
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "iconSize": 20,
        "iconShadow": null,
        "iconColorArray": [
            {
                "color": "#ffffff",
                "indices": [
                    0
                ]
            }
        ]
    },
    {
        "type": "iconButton",
        "src": "assets/ButtonIcons/43.svg",
        "previewImage": "assets/Buttons/iconButton_43.png",
        "width": 60,
        "height": 50,
        "stroke": null,
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "buttonRx": 5,
        "buttonRy": 5,
        "buttonFill": "#536270",
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "iconSize": 20,
        "iconShadow": null,
        "iconColorArray": [
            {
                "color": "#ffffff",
                "indices": [
                    0
                ]
            }
        ]
    },
    {
        "type": "iconButton",
        "src": "assets/ButtonIcons/51.svg",
        "previewImage": "assets/Buttons/iconButton_51.png",
        "width": 60,
        "height": 50,
        "stroke": null,
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "buttonRx": 5,
        "buttonRy": 5,
        "buttonFill": "#536270",
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "iconSize": 20,
        "iconShadow": null,
        "iconColorArray": [
            {
                "color": "#ffffff",
                "indices": [
                    0
                ]
            }
        ]
    },
    {
        "type": "iconButton",
        "src": "assets/ButtonIcons/53.svg",
        "previewImage": "assets/Buttons/iconButton_53.png",
        "width": 60,
        "height": 50,
        "stroke": null,
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "buttonRx": 5,
        "buttonRy": 5,
        "buttonFill": "#536270",
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "iconSize": 20,
        "iconShadow": null,
        "iconColorArray": [
            {
                "color": "#ffffff",
                "indices": [
                    0
                ]
            }
        ]
    },
    {
        "type": "iconButton",
        "src": "assets/ButtonIcons/55.svg",
        "previewImage": "assets/Buttons/iconButton_55.png",
        "width": 60,
        "height": 50,
        "stroke": null,
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "buttonRx": 5,
        "buttonRy": 5,
        "buttonFill": "#536270",
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "iconSize": 20,
        "iconShadow": null,
        "iconColorArray": [
            {
                "color": "#ffffff",
                "indices": [
                    0
                ]
            }
        ]
    },
    {
        "type": "iconButton",
        "src": "assets/ButtonIcons/57.svg",
        "previewImage": "assets/Buttons/iconButton_57.png",
        "width": 60,
        "height": 50,
        "stroke": null,
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "buttonRx": 5,
        "buttonRy": 5,
        "buttonFill": "#536270",
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "iconSize": 20,
        "iconShadow": null,
        "iconColorArray": [
            {
                "color": "#ffffff",
                "indices": [
                    0
                ]
            }
        ]
    },
    {
        "type": "iconButton",
        "src": "assets/ButtonIcons/60.svg",
        "previewImage": "assets/Buttons/iconButton_60.png",
        "width": 60,
        "height": 50,
        "stroke": null,
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "buttonRx": 5,
        "buttonRy": 5,
        "buttonFill": "#536270",
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "iconSize": 20,
        "iconShadow": null,
        "iconColorArray": [
            {
                "color": "#ffffff",
                "indices": [
                    0
                ]
            }
        ]
    },
    {
        "type": "iconButton",
        "src": "assets/ButtonIcons/71.svg",
        "previewImage": "assets/Buttons/iconButton_71.png",
        "width": 60,
        "height": 50,
        "stroke": null,
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "buttonRx": 5,
        "buttonRy": 5,
        "buttonFill": "#536270",
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "iconSize": 20,
        "iconShadow": null,
        "iconColorArray": [
            {
                "color": "#ffffff",
                "indices": [
                    0
                ]
            }
        ]
    },
    {
        "type": "iconButton",
        "src": "assets/ButtonIcons/81.svg",
        "previewImage": "assets/Buttons/iconButton_81.png",
        "width": 60,
        "height": 50,
        "stroke": null,
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "buttonRx": 5,
        "buttonRy": 5,
        "buttonFill": "#536270",
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "iconSize": 20,
        "iconShadow": null,
        "iconColorArray": [
            {
                "color": "#ffffff",
                "indices": [
                    0
                ]
            }
        ]
    },
    {
        "type": "iconButton",
        "src": "assets/ButtonIcons/86.svg",
        "previewImage": "assets/Buttons/iconButton_86.png",
        "width": 60,
        "height": 50,
        "stroke": null,
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "buttonRx": 5,
        "buttonRy": 5,
        "buttonFill": "#536270",
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "iconSize": 20,
        "iconShadow": null,
        "iconColorArray": [
            {
                "color": "#ffffff",
                "indices": [
                    0
                ]
            }
        ]
    },
    {
        "type": "iconButton",
        "src": "assets/ButtonIcons/89.svg",
        "previewImage": "assets/Buttons/iconButton_89.png",
        "width": 60,
        "height": 50,
        "stroke": null,
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "buttonRx": 5,
        "buttonRy": 5,
        "buttonFill": "#536270",
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "iconSize": 20,
        "iconShadow": null,
        "iconColorArray": [
            {
                "color": "#ffffff",
                "indices": [
                    0
                ]
            }
        ]
    },
    {
        "type": "iconButton",
        "src": "assets/ButtonIcons/98.svg",
        "previewImage": "assets/Buttons/iconButton_98.png",
        "width": 60,
        "height": 50,
        "stroke": null,
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "buttonRx": 5,
        "buttonRy": 5,
        "buttonFill": "#536270",
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "iconSize": 20,
        "iconShadow": null,
        "iconColorArray": [
            {
                "color": "#ffffff",
                "indices": [
                    0,
                    1
                ]
            }
        ]
    },
    {
        "type": "iconButton",
        "src": "assets/ButtonIcons/99.svg",
        "previewImage": "assets/Buttons/iconButton_99.png",
        "width": 60,
        "height": 50,
        "stroke": null,
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "buttonRx": 5,
        "buttonRy": 5,
        "buttonFill": "#536270",
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "iconSize": 20,
        "iconShadow": null,
        "iconColorArray": [
            {
                "color": "#ffffff",
                "indices": [
                    0
                ]
            }
        ]
    },
    {
        "type": "iconButton",
        "src": "assets/ButtonIcons/108.svg",
        "previewImage": "assets/Buttons/iconButton_108.png",
        "width": 60,
        "height": 50,
        "stroke": null,
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "buttonRx": 5,
        "buttonRy": 5,
        "buttonFill": "#536270",
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "iconSize": 20,
        "iconShadow": null,
        "iconColorArray": [
            {
                "color": "#ffffff",
                "indices": [
                    0,
                    1
                ]
            }
        ]
    },
    {
        "type": "iconButton",
        "src": "assets/ButtonIcons/109.svg",
        "previewImage": "assets/Buttons/iconButton_109.png",
        "width": 60,
        "height": 50,
        "stroke": null,
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "buttonRx": 5,
        "buttonRy": 5,
        "buttonFill": "#536270",
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "iconSize": 20,
        "iconShadow": null,
        "iconColorArray": [
            {
                "color": "#ffffff",
                "indices": [
                    0
                ]
            }
        ]
    },
    {
        "type": "iconButton",
        "src": "assets/ButtonIcons/120.svg",
        "previewImage": "assets/Buttons/iconButton_120.png",
        "width": 60,
        "height": 50,
        "stroke": null,
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "buttonRx": 5,
        "buttonRy": 5,
        "buttonFill": "#536270",
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "iconSize": 20,
        "iconShadow": null,
        "iconColorArray": [
            {
                "color": "#ffffff",
                "indices": [
                    0
                ]
            }
        ]
    },
    {
        "type": "iconButton",
        "src": "assets/ButtonIcons/132.svg",
        "previewImage": "assets/Buttons/iconButton_132.png",
        "width": 60,
        "height": 50,
        "stroke": null,
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "buttonRx": 5,
        "buttonRy": 5,
        "buttonFill": "#536270",
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "iconSize": 20,
        "iconShadow": null,
        "iconColorArray": [
            {
                "color": "#ffffff",
                "indices": [
                    0,
                    1
                ]
            }
        ]
    },
    {
        "type": "iconButton",
        "src": "assets/ButtonIcons/138.svg",
        "previewImage": "assets/Buttons/iconButton_138.png",
        "width": 60,
        "height": 50,
        "stroke": null,
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "buttonRx": 5,
        "buttonRy": 5,
        "buttonFill": "#536270",
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "iconSize": 20,
        "iconShadow": null,
        "iconColorArray": [
            {
                "color": "#ffffff",
                "indices": [
                    0
                ]
            }
        ]
    },
    {
        "type": "iconButton",
        "src": "assets/ButtonIcons/139.svg",
        "previewImage": "assets/Buttons/iconButton_139.png",
        "width": 60,
        "height": 50,
        "stroke": null,
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "buttonRx": 5,
        "buttonRy": 5,
        "buttonFill": "#536270",
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "iconSize": 20,
        "iconShadow": null,
        "iconColorArray": [
            {
                "color": "#ffffff",
                "indices": [
                    0,
                    1
                ]
            }
        ]
    },
    {
        "type": "iconButton",
        "src": "assets/ButtonIcons/141.svg",
        "previewImage": "assets/Buttons/iconButton_141.png",
        "width": 60,
        "height": 50,
        "stroke": null,
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "buttonRx": 5,
        "buttonRy": 5,
        "buttonFill": "#536270",
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "iconSize": 20,
        "iconShadow": null,
        "iconColorArray": [
            {
                "color": "#ffffff",
                "indices": [
                    0
                ]
            }
        ]
    },
    {
        "type": "iconButton",
        "src": "assets/ButtonIcons/144.svg",
        "previewImage": "assets/Buttons/iconButton_144.png",
        "width": 60,
        "height": 50,
        "stroke": null,
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "buttonRx": 5,
        "buttonRy": 5,
        "buttonFill": "#536270",
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "iconSize": 20,
        "iconShadow": null,
        "iconColorArray": [
            {
                "color": "#ffffff",
                "indices": [
                    0,
                    1
                ]
            }
        ]
    },
    {
        "type": "iconButton",
        "src": "assets/ButtonIcons/151.svg",
        "previewImage": "assets/Buttons/iconButton_151.png",
        "width": 60,
        "height": 50,
        "stroke": null,
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "buttonRx": 5,
        "buttonRy": 5,
        "buttonFill": "#536270",
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "iconSize": 20,
        "iconShadow": null,
        "iconColorArray": [
            {
                "color": "#ffffff",
                "indices": [
                    0
                ]
            }
        ]
    },
    {
        "type": "iconButton",
        "src": "assets/ButtonIcons/164.svg",
        "previewImage": "assets/Buttons/iconButton_164.png",
        "width": 60,
        "height": 50,
        "stroke": null,
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "buttonRx": 5,
        "buttonRy": 5,
        "buttonFill": "#536270",
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "iconSize": 20,
        "iconShadow": null,
        "iconColorArray": [
            {
                "color": "#ffffff",
                "indices": [
                    0
                ]
            }
        ]
    },
    {
        "type": "iconButton",
        "src": "assets/ButtonIcons/174.svg",
        "previewImage": "assets/Buttons/iconButton_174.png",
        "width": 60,
        "height": 50,
        "stroke": null,
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "buttonRx": 5,
        "buttonRy": 5,
        "buttonFill": "#536270",
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "iconSize": 20,
        "iconShadow": null,
        "iconColorArray": [
            {
                "color": "#ffffff",
                "indices": [
                    0,
                    1
                ]
            }
        ]
    },
    {
        "type": "iconButton",
        "src": "assets/ButtonIcons/177.svg",
        "previewImage": "assets/Buttons/iconButton_177.png",
        "width": 60,
        "height": 50,
        "stroke": null,
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "buttonRx": 5,
        "buttonRy": 5,
        "buttonFill": "#536270",
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "iconSize": 20,
        "iconShadow": null,
        "iconColorArray": [
            {
                "color": "#ffffff",
                "indices": [
                    0
                ]
            }
        ]
    },
    {
        "type": "iconButton",
        "src": "assets/ButtonIcons/178.svg",
        "previewImage": "assets/Buttons/iconButton_178.png",
        "width": 60,
        "height": 50,
        "stroke": null,
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "buttonRx": 5,
        "buttonRy": 5,
        "buttonFill": "#536270",
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "iconSize": 20,
        "iconShadow": null,
        "iconColorArray": [
            {
                "color": "#ffffff",
                "indices": [
                    0
                ]
            }
        ]
    },
    {
        "type": "iconButton",
        "src": "assets/ButtonIcons/186.svg",
        "previewImage": "assets/Buttons/iconButton_186.png",
        "width": 60,
        "height": 50,
        "stroke": null,
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "buttonRx": 5,
        "buttonRy": 5,
        "buttonFill": "#536270",
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "iconSize": 20,
        "iconShadow": null,
        "iconColorArray": [
            {
                "color": "#ffffff",
                "indices": [
                    0
                ]
            }
        ]
    },
    {
        "type": "iconButton",
        "src": "assets/ButtonIcons/191.svg",
        "previewImage": "assets/Buttons/iconButton_191.png",
        "width": 60,
        "height": 50,
        "stroke": null,
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "buttonRx": 5,
        "buttonRy": 5,
        "buttonFill": "#536270",
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "iconSize": 20,
        "iconShadow": null,
        "iconColorArray": [
            {
                "color": "#ffffff",
                "indices": [
                    0
                ]
            }
        ]
    },
    {
        "type": "iconButton",
        "src": "assets/ButtonIcons/193.svg",
        "previewImage": "assets/Buttons/iconButton_193.png",
        "width": 60,
        "height": 50,
        "stroke": null,
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "buttonRx": 5,
        "buttonRy": 5,
        "buttonFill": "#536270",
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "iconSize": 20,
        "iconShadow": null,
        "iconColorArray": [
            {
                "color": "#ffffff",
                "indices": [
                    0
                ]
            }
        ]
    },
    {
        "type": "iconButton",
        "src": "assets/ButtonIcons/197.svg",
        "previewImage": "assets/Buttons/iconButton_197.png",
        "width": 60,
        "height": 50,
        "stroke": null,
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "buttonRx": 5,
        "buttonRy": 5,
        "buttonFill": "#536270",
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "iconSize": 20,
        "iconShadow": null,
        "iconColorArray": [
            {
                "color": "#ffffff",
                "indices": [
                    0,
                    1
                ]
            }
        ]
    },
    {
        "type": "iconButton",
        "src": "assets/ButtonIcons/199.svg",
        "previewImage": "assets/Buttons/iconButton_199.png",
        "width": 60,
        "height": 50,
        "stroke": null,
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "buttonRx": 5,
        "buttonRy": 5,
        "buttonFill": "#536270",
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "iconSize": 20,
        "iconShadow": null,
        "iconColorArray": [
            {
                "color": "#ffffff",
                "indices": [
                    0,
                    1
                ]
            }
        ]
    },
    {
        "type": "iconButton",
        "src": "assets/ButtonIcons/204.svg",
        "previewImage": "assets/Buttons/iconButton_204.png",
        "width": 60,
        "height": 50,
        "stroke": null,
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "buttonRx": 5,
        "buttonRy": 5,
        "buttonFill": "#536270",
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "iconSize": 20,
        "iconShadow": null,
        "iconColorArray": [
            {
                "color": "#ffffff",
                "indices": [
                    0
                ]
            }
        ]
    },
    {
        "type": "iconButton",
        "src": "assets/ButtonIcons/211.svg",
        "previewImage": "assets/Buttons/iconButton_211.png",
        "width": 60,
        "height": 50,
        "stroke": null,
        "scaleX": 1,
        "scaleY": 1,
        "opacity": 1,
        "buttonRx": 5,
        "buttonRy": 5,
        "buttonFill": "#536270",
        "buttonStrokeColor": "#000000",
        "buttonStrokeWidth": 0,
        "buttonShadow": null,
        "iconSize": 20,
        "iconShadow": null,
        "iconColorArray": [
            {
                "color": "#ffffff",
                "indices": [
                    0
                ]
            }
        ]
    }
];
/* export const buttonList = [
    {
        type: "textButton",
        text: "Click Me",
        buttonFill: "#0ABCFF",
        width: 110,
        color: '#ffffff',
        fontSize: 20,
    },
    {
        type: "textButton",
        text: "Click Me",
        buttonFill: "#00F2FF",
        width: 110,
        color: '#ffffff',
        fontSize: 20,
    },
    {
        type: "textButton",
        text: "Click Me",
        buttonStrokeColor: "#0ABCFF",
        buttonStrokeWidth: 2,
        width: 110,
        color: '#0ABCFF',
        fontSize: 20,
        fontName: 'Montserrat-Regular',
        fontSrc: 'assets/fonts/Montserrat-Regular.otf'
    },
    {
        type: "textButton",
        text: "Click Me",
        buttonFill: "#0EDC75",
        width: 110,
        color: '#ffffff',
        fontSize: 20,
    },
    {
        type: "textButton",
        text: "Click Me",
        buttonFill: "#BEEC4D",
        width: 110,
        color: '#ffffff',
        fontSize: 20,
    },
    {
        type: "textButton",
        text: "Click Me",
        buttonStrokeColor: "#04D26B",
        buttonStrokeWidth: 2,
        width: 110,
        color: '#04D26B',
        fontSize: 20,
        fontName: 'Montserrat-Regular',
        fontSrc: 'assets/fonts/Montserrat-Regular.otf'
    },
    {
        type: "iconButton",
        src: "assets/icons/left.svg",
        buttonFill: "#0ABCFF",
        width: 100,
        height: 100,
        color: '#ffffff',
        iconSize: 20
    },
    {
        type: "iconButton",
        src: "assets/icons/svg49.svg",
        buttonFill: "#00F2FF",
        width: 100,
        height: 100,
        iconSize: 20,
        paddingOffset: 5
    },
    {
        type: "iconButton",
        src: "assets/icons/svg53.svg",
        buttonFill: "#DA5044",
        buttonRx: 50,
        buttonRy: 50,
        width: 100,
        height: 100,
        iconSize: 60,
        paddingOffset: 5
    },
    {
        type: "iconButton",
        src: "assets/icons/add-color.svg",
        buttonFill: "#DA5044",
        buttonRx: 50,
        buttonRy: 50,
        width: 100,
        height: 100,
        iconSize: 40,
        paddingOffset: 5
    },
] */ 


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-color-picker */ "./node_modules/ngx-color-picker/dist/ngx-color-picker.es5.js");
/* harmony import */ var _choose_size_choose_size_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./choose-size/choose-size.component */ "./src/app/choose-size/choose-size.component.ts");
/* harmony import */ var _shared_labled_icon_button_labled_icon_button_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/labled-icon-button/labled-icon-button.component */ "./src/app/shared/labled-icon-button/labled-icon-button.component.ts");
/* harmony import */ var _shared_property_slider_property_slider_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/property-slider/property-slider.component */ "./src/app/shared/property-slider/property-slider.component.ts");
/* harmony import */ var _generator_experiment_generator_experiment_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./generator-experiment/generator-experiment.component */ "./src/app/generator-experiment/generator-experiment.component.ts");
/* harmony import */ var _shared_gradient_picker_gradient_picker_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/gradient-picker/gradient-picker.component */ "./src/app/shared/gradient-picker/gradient-picker.component.ts");
/* harmony import */ var _shared_circular_angle_control_circular_angle_control_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/circular-angle-control/circular-angle-control.component */ "./src/app/shared/circular-angle-control/circular-angle-control.component.ts");
/* harmony import */ var _button_generator_button_generator_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./button-generator/button-generator.component */ "./src/app/button-generator/button-generator.component.ts");
/* harmony import */ var _icon_button_generator_icon_button_generator_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./icon-button-generator/icon-button-generator.component */ "./src/app/icon-button-generator/icon-button-generator.component.ts");

















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
            _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__["NotFoundComponent"],
            _choose_size_choose_size_component__WEBPACK_IMPORTED_MODULE_9__["ChooseSizeComponent"],
            _shared_labled_icon_button_labled_icon_button_component__WEBPACK_IMPORTED_MODULE_10__["LabledIconButtonComponent"],
            _shared_property_slider_property_slider_component__WEBPACK_IMPORTED_MODULE_11__["PropertySliderComponent"],
            _generator_experiment_generator_experiment_component__WEBPACK_IMPORTED_MODULE_12__["GeneratorExperimentComponent"],
            _shared_gradient_picker_gradient_picker_component__WEBPACK_IMPORTED_MODULE_13__["GradientPickerComponent"],
            _shared_circular_angle_control_circular_angle_control_component__WEBPACK_IMPORTED_MODULE_14__["CircularAngleControlComponent"],
            _button_generator_button_generator_component__WEBPACK_IMPORTED_MODULE_15__["ButtonGeneratorComponent"],
            _icon_button_generator_icon_button_generator_component__WEBPACK_IMPORTED_MODULE_16__["IconButtonGeneratorComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            ngx_color_picker__WEBPACK_IMPORTED_MODULE_8__["ColorPickerModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/button-generator/button-generator.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/button-generator/button-generator.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".no-data-margin {\n  margin: 15px;\n}\n\n.no-margin {\n  margin: 0px !important;\n}\n\n.error {\n  color: red;\n  font-size: 18px;\n  font-family: verdana;\n}\n\n/* tab css */\n\n.vertical-tab-button-container {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  width: 75px;\n  z-index: 10;\n  background-color: var(--dark-black);\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n\n.tab-button {\n  background: transparent;\n  border: 0px solid transparent;\n  color: white;\n  width: 100%;\n  cursor: pointer;\n  padding: 10px 0px;\n  outline: none;\n}\n\n.tab-icon {\n  width: 35px;\n}\n\n.tab-title {\n  margin: 0px;\n  padding: 0px;\n  font-size: 11px;\n}\n\n.tablinks.active {\n  background-color: var(--light-black);\n  position: relative;\n}\n\n.tablinks.active::after {\n  content: \"\";\n  position: absolute;\n  top: -8px;\n  right: -2px;\n  width: 10px;\n  height: 10px;\n  background-image: radial-gradient(circle at top left, #fff0 50%, var(--light-black) 60%);\n}\n\n.tablinks.active::before {\n  content: \"\";\n  position: absolute;\n  bottom: -8px;\n  right: -2px;\n  width: 10px;\n  height: 10px;\n  background-image: radial-gradient(circle at bottom left,\n      #fff0 50%,\n      var(--light-black) 60%);\n}\n\n.tabcontent {\n  height: calc(100% - 10px);\n}\n\n/* tab css over here */\n\n.background-tabs-links.active:hover {\n  background-color: var(--dark-purple);\n}\n\n.background-tabs-links.active {\n  background-color: var(--dark-purple);\n}\n\n.background-tabs-links {\n  background: var(--dark-black);\n  outline: none;\n  border: 0px solid transparent;\n  cursor: pointer;\n  flex: 1;\n  color: white;\n  border-radius: 3px;\n  padding: 10px;\n  margin: 10px;\n  font-size: 15px;\n  transition: 0.5s;\n}\n\n.background-tabs-links:hover {\n  background: rgba(255, 255, 255, 0.05);\n}\n\n.tab-button-btn-background {\n  width: 50%;\n  margin: 0px;\n  margin-bottom: 15px;\n  font-size: 12px;\n  padding: 8px;\n  border-radius: 0px;\n}\n\n/* property panel css */\n\n.property-panel {\n  background-color: var(--light-black);\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  z-index: 8;\n  overflow: hidden;\n}\n\n/* editor tab wrappers */\n\n.heading-tab-wrapper {\n  height: calc(100% - 20px);\n  width: calc(100% - 20px);\n  padding: 10px;\n}\n\n/* sidebar toggle css */\n\n.shown-left-sidebar {\n  left: 75px !important;\n}\n\n.shown-right-sidebar {\n  right: 0px !important;\n}\n\n.shown {\n  width: 350px;\n}\n\n.dark-button {\n  background-color: var(--dark-black) !important;\n}\n\n.header-style {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 10;\n  height: 60px;\n  line-height: 56px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.35);\n  background: linear-gradient(90deg, var(--dark-purple) 0, var(--light-purple) 100%);\n}\n\n.editor-left-sidebar {\n  width: 420px;\n  height: 100%;\n  /* background: var(--light-black); */\n  background: var(--milk-gray);\n  display: inline-block;\n  /* transition: width 0.2s; */\n  transition-property: all;\n  transition-duration: 0.2s;\n  transition-timing-function: ease-in-out;\n  /* position: relative; */\n  position: absolute;\n}\n\n.left-wrapper {\n  left: 75px !important;\n  width: calc(100% - 75px) !important;\n}\n\n.right-wrapper,\n.left-wrapper {\n  width: 100%;\n  height: 100%;\n  background: var(--light-black);\n  overflow: hidden;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 2;\n}\n\n.property-panel-wrapper {\n  min-width: calc(350px - 25px);\n  padding: 10px;\n  height: calc(100% - 20px);\n}\n\n.property-panel-content {\n  width: calc(100% - 20px);\n  height: calc(100% - 65px);\n  margin-top: 15px;\n  overflow-y: auto;\n  overflow-x: hidden;\n  padding: 10px;\n}\n\n.inner-left-wrapper {\n  min-width: calc(350px - 15px);\n  height: 100%;\n  padding: 5px;\n}\n\n.editor-container {\n  position: absolute;\n  left: 420px;\n  right: 0px;\n  /* width: calc(100% - 615px); */\n  display: inline-block;\n  height: 100%;\n  overflow: overlay;\n  background-color: var(--milk-gray);\n  /* position: relative; */\n  z-index: 0;\n  vertical-align: top;\n  transition: 0.2s;\n}\n\n.main-wrapper {\n  position: absolute;\n  top: 60px;\n  height: calc(100% - 60px);\n  width: 100%;\n  bottom: 0;\n}\n\n.single-control-container {\n  display: flex;\n  padding-top: 5px;\n  margin-bottom: 10px;\n  width: 100%;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.font-selection-box {\n  background-color: #1e1e1e;\n  border: transparent;\n  border-radius: 5px;\n  padding: 5px;\n  color: white;\n  outline: none;\n  width: 245px;\n}\n\n.single-control-lable {\n  color: white;\n  font-family: \"Roboto\", Helvetica, Arial, sans-serif;\n  font-size: 13px;\n}\n\n.text-value-container {\n  font-size: 13px;\n  font-weight: 500;\n  width: calc(100% - 85px);\n  height: 85px;\n  border-radius: 0px;\n  border: 2px solid #dfe0e6;\n  color: #2e3246;\n  resize: none;\n  font-family: \"Roboto\", Helvetica, Arial, sans-serif;\n  outline: none;\n  transition: 0.5s;\n}\n\n.text-size-value-container:focus,\n.text-value-container:focus {\n  border-color: var(--dark-purple);\n}\n\n.text-size-value-container {\n  width: 100px;\n  height: 25px;\n  font-size: 14px;\n  font-weight: 500;\n}\n\n.font-style-buttons {\n  background-color: #1e1e1e;\n  border: none;\n  outline: 0 !important;\n  padding: 5px;\n  width: 30px;\n  height: 30px;\n  border-radius: 5px;\n  margin-left: 5px;\n  cursor: pointer;\n}\n\n.font-style-buttons:active {\n  box-shadow: inset 0px 0px 10px var(--light-black);\n}\n\n.font-style-buttons.active {\n  background-color: var(--dark-purple);\n}\n\n.color-value-display {\n  width: initial;\n  cursor: pointer;\n  margin-right: 5px;\n  margin-left: 0px;\n}\n\n.color-value-display {\n  padding: 5px;\n  background-color: #1e1e1e;\n  color: white;\n  font-family: \"Roboto\", Helvetica, Arial, sans-serif;\n  border-radius: 5px;\n  margin-left: 5px;\n  font-size: 10px;\n  min-width: 30px;\n  text-align: center;\n}\n\n.shadow-container {\n  background: #475386;\n  border-radius: 5px;\n  padding: 5px;\n  margin-bottom: 5px;\n}\n\n.color-picker-button {\n  width: 25px;\n  height: 25px;\n  border-radius: 5px;\n}\n\n.canvas-wrapper {\n  height: 100%;\n  display: flex;\n}\n\n#canvas-container {\n  margin: auto;\n  /* display: flex;\n  flex-wrap: wrap; */\n  align-items: center;\n  justify-content: space-around;\n}\n\n#canvas-container .canvas-item-container {\n  margin: 10px !important;\n}\n\n.group-title {\n  color: white;\n  font-weight: 600;\n  font-size: 15px;\n  border-bottom: 1px solid white;\n  display: block;\n  margin-bottom: 10px;\n  padding: 5px 0px 10px 5px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.gradient-control-container {\n  display: flex;\n  width: 100%;\n  align-items: center;\n  justify-content: space-around;\n}\n\n.gradient-type-btn {\n  border: 0px solid transparent;\n  border-radius: 3px;\n  padding: 3px;\n  margin: 0px 2px;\n  background: #00000066;\n  cursor: pointer;\n  outline: none;\n  transition: 0.3s;\n}\n\n.gradient-type-btn.active,\n.gradient-type-btn:hover {\n  background-color: var(--dark-purple);\n}\n\n.gradient-icon {\n  width: 20px;\n  height: 20px;\n  border-radius: 3px;\n}\n\n.radial-gradient {\n  background: radial-gradient(circle at 50% 50%, #000, #fff);\n}\n\n.linear-gradient {\n  background: linear-gradient(to right, #fff, #000);\n}\n\n.center-gradient-chckbox {\n  color: white;\n  font-size: 10px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  cursor: pointer;\n}\n\n.is-center-checkbox {\n  margin: 0px 5px;\n  cursor: pointer;\n}\n\n.is-center-checkbox-container {\n  margin: 5px 0px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnV0dG9uLWdlbmVyYXRvci9idXR0b24tZ2VuZXJhdG9yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsZUFBZTtFQUNmLG9CQUFvQjtBQUN0Qjs7QUFFQSxZQUFZOztBQUNaO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixTQUFTO0VBQ1QsT0FBTztFQUNQLFdBQVc7RUFDWCxXQUFXO0VBQ1gsbUNBQW1DO0VBQ25DLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixXQUFXO0VBQ1gsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1osd0ZBQXdGO0FBQzFGOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1o7OzZCQUUyQjtBQUM3Qjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQSxzQkFBc0I7O0FBRXRCO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsZUFBZTtFQUNmLE9BQU87RUFDUCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixZQUFZO0VBQ1osZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBLHVCQUF1Qjs7QUFDdkI7RUFDRSxvQ0FBb0M7RUFDcEMsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixTQUFTO0VBQ1QsUUFBUTtFQUNSLE9BQU87RUFDUCxVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCOztBQUVBLHdCQUF3Qjs7QUFDeEI7RUFDRSx5QkFBeUI7RUFDekIsd0JBQXdCO0VBQ3hCLGFBQWE7QUFDZjs7QUFFQSx1QkFBdUI7O0FBQ3ZCO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsOENBQThDO0FBQ2hEOztBQUVBO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLHlDQUF5QztFQUN6QyxrRkFBa0Y7QUFDcEY7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLG9DQUFvQztFQUNwQyw0QkFBNEI7RUFDNUIscUJBQXFCO0VBQ3JCLDRCQUE0QjtFQUM1Qix3QkFBd0I7RUFDeEIseUJBQXlCO0VBQ3pCLHVDQUF1QztFQUN2Qyx3QkFBd0I7RUFDeEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLG1DQUFtQztBQUNyQzs7QUFFQTs7RUFFRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLDhCQUE4QjtFQUM5QixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsU0FBUztFQUNULFFBQVE7RUFDUixVQUFVO0FBQ1o7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsYUFBYTtFQUNiLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4Qix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFVBQVU7RUFDViwrQkFBK0I7RUFDL0IscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0NBQWtDO0VBQ2xDLHdCQUF3QjtFQUN4QixVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0VBQ1osYUFBYTtFQUNiLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixtREFBbUQ7RUFDbkQsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsd0JBQXdCO0VBQ3hCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxZQUFZO0VBQ1osbURBQW1EO0VBQ25ELGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7O0FBRUE7O0VBRUUsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaURBQWlEO0FBQ25EOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osbURBQW1EO0VBQ25ELGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1o7b0JBQ2tCO0VBQ2xCLG1CQUFtQjtFQUNuQiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZiw4QkFBOEI7RUFDOUIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIseUJBQWlCO0tBQWpCLHNCQUFpQjtNQUFqQixxQkFBaUI7VUFBakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDBEQUEwRDtBQUM1RDs7QUFFQTtFQUNFLGlEQUFpRDtBQUNuRDs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YseUJBQWlCO0tBQWpCLHNCQUFpQjtNQUFqQixxQkFBaUI7VUFBakIsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL2J1dHRvbi1nZW5lcmF0b3IvYnV0dG9uLWdlbmVyYXRvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vLWRhdGEtbWFyZ2luIHtcbiAgbWFyZ2luOiAxNXB4O1xufVxuXG4ubm8tbWFyZ2luIHtcbiAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmVycm9yIHtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LWZhbWlseTogdmVyZGFuYTtcbn1cblxuLyogdGFiIGNzcyAqL1xuLnZlcnRpY2FsLXRhYi1idXR0b24tY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDc1cHg7XG4gIHotaW5kZXg6IDEwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWJsYWNrKTtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4udGFiLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMTAwJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLnRhYi1pY29uIHtcbiAgd2lkdGg6IDM1cHg7XG59XG5cbi50YWItdGl0bGUge1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xuICBmb250LXNpemU6IDExcHg7XG59XG5cbi50YWJsaW5rcy5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ibGFjayk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnRhYmxpbmtzLmFjdGl2ZTo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLThweDtcbiAgcmlnaHQ6IC0ycHg7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgdG9wIGxlZnQsICNmZmYwIDUwJSwgdmFyKC0tbGlnaHQtYmxhY2spIDYwJSk7XG59XG5cbi50YWJsaW5rcy5hY3RpdmU6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAtOHB4O1xuICByaWdodDogLTJweDtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCBib3R0b20gbGVmdCxcbiAgICAgICNmZmYwIDUwJSxcbiAgICAgIHZhcigtLWxpZ2h0LWJsYWNrKSA2MCUpO1xufVxuXG4udGFiY29udGVudCB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMTBweCk7XG59XG5cbi8qIHRhYiBjc3Mgb3ZlciBoZXJlICovXG5cbi5iYWNrZ3JvdW5kLXRhYnMtbGlua3MuYWN0aXZlOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1wdXJwbGUpO1xufVxuXG4uYmFja2dyb3VuZC10YWJzLWxpbmtzLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstcHVycGxlKTtcbn1cblxuLmJhY2tncm91bmQtdGFicy1saW5rcyB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWRhcmstYmxhY2spO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IDBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmbGV4OiAxO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luOiAxMHB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIHRyYW5zaXRpb246IDAuNXM7XG59XG5cbi5iYWNrZ3JvdW5kLXRhYnMtbGlua3M6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpO1xufVxuXG4udGFiLWJ1dHRvbi1idG4tYmFja2dyb3VuZCB7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbjogMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIHBhZGRpbmc6IDhweDtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xufVxuXG4vKiBwcm9wZXJ0eSBwYW5lbCBjc3MgKi9cbi5wcm9wZXJ0eS1wYW5lbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWJsYWNrKTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi8qIGVkaXRvciB0YWIgd3JhcHBlcnMgKi9cbi5oZWFkaW5nLXRhYi13cmFwcGVyIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAyMHB4KTtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4vKiBzaWRlYmFyIHRvZ2dsZSBjc3MgKi9cbi5zaG93bi1sZWZ0LXNpZGViYXIge1xuICBsZWZ0OiA3NXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5zaG93bi1yaWdodC1zaWRlYmFyIHtcbiAgcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uc2hvd24ge1xuICB3aWR0aDogMzUwcHg7XG59XG5cbi5kYXJrLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYmxhY2spICFpbXBvcnRhbnQ7XG59XG5cbi5oZWFkZXItc3R5bGUge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDEwO1xuICBoZWlnaHQ6IDYwcHg7XG4gIGxpbmUtaGVpZ2h0OiA1NnB4O1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjM1KTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCB2YXIoLS1kYXJrLXB1cnBsZSkgMCwgdmFyKC0tbGlnaHQtcHVycGxlKSAxMDAlKTtcbn1cblxuLmVkaXRvci1sZWZ0LXNpZGViYXIge1xuICB3aWR0aDogNDIwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgLyogYmFja2dyb3VuZDogdmFyKC0tbGlnaHQtYmxhY2spOyAqL1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1taWxrLWdyYXkpO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIC8qIHRyYW5zaXRpb246IHdpZHRoIDAuMnM7ICovXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGFsbDtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICAvKiBwb3NpdGlvbjogcmVsYXRpdmU7ICovXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLmxlZnQtd3JhcHBlciB7XG4gIGxlZnQ6IDc1cHggIWltcG9ydGFudDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDc1cHgpICFpbXBvcnRhbnQ7XG59XG5cbi5yaWdodC13cmFwcGVyLFxuLmxlZnQtd3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHZhcigtLWxpZ2h0LWJsYWNrKTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDI7XG59XG5cbi5wcm9wZXJ0eS1wYW5lbC13cmFwcGVyIHtcbiAgbWluLXdpZHRoOiBjYWxjKDM1MHB4IC0gMjVweCk7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMjBweCk7XG59XG5cbi5wcm9wZXJ0eS1wYW5lbC1jb250ZW50IHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDY1cHgpO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5pbm5lci1sZWZ0LXdyYXBwZXIge1xuICBtaW4td2lkdGg6IGNhbGMoMzUwcHggLSAxNXB4KTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5lZGl0b3ItY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA0MjBweDtcbiAgcmlnaHQ6IDBweDtcbiAgLyogd2lkdGg6IGNhbGMoMTAwJSAtIDYxNXB4KTsgKi9cbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBvdmVybGF5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1taWxrLWdyYXkpO1xuICAvKiBwb3NpdGlvbjogcmVsYXRpdmU7ICovXG4gIHotaW5kZXg6IDA7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIHRyYW5zaXRpb246IDAuMnM7XG59XG5cbi5tYWluLXdyYXBwZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNjBweDtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA2MHB4KTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvdHRvbTogMDtcbn1cblxuLnNpbmdsZS1jb250cm9sLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5mb250LXNlbGVjdGlvbi1ib3gge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWUxZTFlO1xuICBib3JkZXI6IHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgY29sb3I6IHdoaXRlO1xuICBvdXRsaW5lOiBub25lO1xuICB3aWR0aDogMjQ1cHg7XG59XG5cbi5zaW5nbGUtY29udHJvbC1sYWJsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLnRleHQtdmFsdWUtY29udGFpbmVyIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNTAwO1xuICB3aWR0aDogY2FsYygxMDAlIC0gODVweCk7XG4gIGhlaWdodDogODVweDtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjZGZlMGU2O1xuICBjb2xvcjogIzJlMzI0NjtcbiAgcmVzaXplOiBub25lO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgb3V0bGluZTogbm9uZTtcbiAgdHJhbnNpdGlvbjogMC41cztcbn1cblxuLnRleHQtc2l6ZS12YWx1ZS1jb250YWluZXI6Zm9jdXMsXG4udGV4dC12YWx1ZS1jb250YWluZXI6Zm9jdXMge1xuICBib3JkZXItY29sb3I6IHZhcigtLWRhcmstcHVycGxlKTtcbn1cblxuLnRleHQtc2l6ZS12YWx1ZS1jb250YWluZXIge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMjVweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uZm9udC1zdHlsZS1idXR0b25zIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFlMWUxZTtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDVweDtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5mb250LXN0eWxlLWJ1dHRvbnM6YWN0aXZlIHtcbiAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAxMHB4IHZhcigtLWxpZ2h0LWJsYWNrKTtcbn1cblxuLmZvbnQtc3R5bGUtYnV0dG9ucy5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLXB1cnBsZSk7XG59XG5cbi5jb2xvci12YWx1ZS1kaXNwbGF5IHtcbiAgd2lkdGg6IGluaXRpYWw7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG59XG5cbi5jb2xvci12YWx1ZS1kaXNwbGF5IHtcbiAgcGFkZGluZzogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWUxZTFlO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgbWluLXdpZHRoOiAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zaGFkb3ctY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogIzQ3NTM4NjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLmNvbG9yLXBpY2tlci1idXR0b24ge1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5jYW52YXMtd3JhcHBlciB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuI2NhbnZhcy1jb250YWluZXIge1xuICBtYXJnaW46IGF1dG87XG4gIC8qIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDsgKi9cbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5cbiNjYW52YXMtY29udGFpbmVyIC5jYW52YXMtaXRlbS1jb250YWluZXIge1xuICBtYXJnaW46IDEwcHggIWltcG9ydGFudDtcbn1cblxuLmdyb3VwLXRpdGxlIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHBhZGRpbmc6IDVweCAwcHggMTBweCA1cHg7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4uZ3JhZGllbnQtY29udHJvbC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5cbi5ncmFkaWVudC10eXBlLWJ0biB7XG4gIGJvcmRlcjogMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHBhZGRpbmc6IDNweDtcbiAgbWFyZ2luOiAwcHggMnB4O1xuICBiYWNrZ3JvdW5kOiAjMDAwMDAwNjY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3V0bGluZTogbm9uZTtcbiAgdHJhbnNpdGlvbjogMC4zcztcbn1cblxuLmdyYWRpZW50LXR5cGUtYnRuLmFjdGl2ZSxcbi5ncmFkaWVudC10eXBlLWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstcHVycGxlKTtcbn1cblxuLmdyYWRpZW50LWljb24ge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG5cbi5yYWRpYWwtZ3JhZGllbnQge1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDUwJSA1MCUsICMwMDAsICNmZmYpO1xufVxuXG4ubGluZWFyLWdyYWRpZW50IHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmZmLCAjMDAwKTtcbn1cblxuLmNlbnRlci1ncmFkaWVudC1jaGNrYm94IHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEwcHg7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5pcy1jZW50ZXItY2hlY2tib3gge1xuICBtYXJnaW46IDBweCA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmlzLWNlbnRlci1jaGVja2JveC1jb250YWluZXIge1xuICBtYXJnaW46IDVweCAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/button-generator/button-generator.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/button-generator/button-generator.component.ts ***!
  \****************************************************************/
/*! exports provided: ButtonGeneratorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonGeneratorComponent", function() { return ButtonGeneratorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _fabric_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fabric.service */ "./src/app/fabric.service.ts");
/* harmony import */ var _helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helper.service */ "./src/app/helper.service.ts");
/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! fabric */ "./node_modules/fabric/dist/fabric.js");
/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(fabric__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fabric_text_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../fabric_text_button */ "./src/app/fabric_text_button.js");
/* harmony import */ var _fabric_text_button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fabric_text_button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fabric_icon_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../fabric_icon_button */ "./src/app/fabric_icon_button.js");
/* harmony import */ var _fabric_icon_button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fabric_icon_button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../app.constants */ "./src/app/app.constants.ts");








let ButtonGeneratorComponent = class ButtonGeneratorComponent {
    constructor(fabricService, helperService) {
        this.fabricService = fabricService;
        this.helperService = helperService;
        this.isLeftShown = true;
        this.isRightShown = true;
        this.activeButtonBackgroundTab = 'tab_1';
        this.error = '';
        this.fontList = _app_constants__WEBPACK_IMPORTED_MODULE_7__["fontList"];
        this.props = {
            width: 0,
            height: 0,
            activeGradientColor: '#000',
            activeGradientColorIndex: 0,
            gradientPositionIsCenter: true,
            buttonGradientArray: [],
            buttonGradientAngle: 0,
            gradientType: 'linear',
            buttonIconSize: 20,
            buttonIconColors: [],
            buttonStrokeColor: '#000000',
            buttonStrokeWidth: 5,
            buttonFill: '#ffffff',
            buttonRadius: 0,
            font: {},
            fontFamily: _app_constants__WEBPACK_IMPORTED_MODULE_7__["defaultFontFamily"].fontName,
            fontSize: 18,
            fill: '#000000',
            lineHeight: 1.25,
            charSpacing: 0,
            textAlign: 'left',
            opacity: 1,
            textOpacity: 1,
            shadow: {
                color: '#000000',
                blur: 0,
                offsetX: 0,
                offsetY: 0
            },
            TShadow: {
                color: '#000000',
                blur: 0,
                offsetX: 0,
                offsetY: 0
            },
            text: '',
            isBold: false,
            isItalic: false,
            isUnderLine: false,
            isOverLine: false,
            isStrikeThrough: false
        };
    }
    ngOnInit() {
        let that = this;
        this.props.buttonGradientArray = JSON.parse(JSON.stringify(_app_constants__WEBPACK_IMPORTED_MODULE_7__["defaultGradientArray"]));
        this.canvas = new fabric.Canvas('canvas');
        this.canvas.setWidth(1050);
        this.canvas.setHeight(600);
        this.canvas.on({
            'selection:created': (e) => {
                this.selected = e.target;
                this.error = '';
                if (e.target.type == 'button') {
                    console.log('e.target', e.target);
                    this.getAllTextProps();
                    this.getAllButtonProps();
                }
            },
            'selection:cleared': (e) => {
                this.selected = null;
            },
        });
        this.fabricService._loadFont('roboto-regular', '').then((result) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let props = {
                top: 100,
                left: 100,
                buttonFill: "#0ABCFF",
                width: 110,
                color: '#ffffff',
                fontSize: 20,
                hasRotatingPoint: false
            };
            props.fontName = result.fontName;
            props.fontSrc = result.fontSrc;
            var button = new fabric.Button("Click Me", props);
            this.canvas.add(button);
            this.canvas.setActiveObject(button);
            this.canvas.renderAll.bind(this);
        }), err => {
            console.log("font can't load", err);
        }).catch(err => {
            console.log("font can't load", err);
        });
    }
    openButtonBackgroundTab(tabName) {
        this.activeButtonBackgroundTab = tabName;
    }
    getAllTextProps() {
        let activeObject = this.canvas.getActiveObject().toObject();
        var newFontStyle = activeObject.fontStyle;
        newFontStyle == 'italic' ? this.props.isItalic = true : this.props.isItalic = false;
        var newFontWeight = activeObject.fontWeight;
        newFontWeight == 'bold' ? this.props.isBold = true : this.props.isBold = false;
        this.props.isUnderLine = activeObject.underline;
        this.props.isOverLine = activeObject.overline;
        this.props.isStrikeThrough = activeObject.linethrough;
        this.props.fontFamily = activeObject.fontName;
        this._getFontFromFamily(this.props.fontFamily).then(result => {
            this.props.font = result;
        });
        this.props.fontSize = activeObject.fontSize;
        this.props.fill = activeObject.color;
        this.props.backgroundColor = activeObject.backgroundColor || '#ffffff';
        this.props.lineHeight = activeObject.lineHeight;
        this.props.opacity = activeObject.opacity;
        this.props.shadow = activeObject.buttonShadow || {
            color: '#000000',
            blur: 0,
            offsetX: 0,
            offsetY: 0,
            opacity: 0
        };
        this.props.TShadow = this.selected.textShadow || {
            color: '#000000',
            blur: 0,
            offsetX: 0,
            offsetY: 0,
            opacity: 0
        };
        this.props.text = activeObject.text;
        this.props.charSpacing = activeObject.charSpacing;
        this.props.textAlign = activeObject.textAlign;
        this.props.textOpacity = activeObject.textOpacity;
    }
    getAllButtonProps() {
        let activeObject = this.canvas.getActiveObject().toObject();
        this.props.buttonStrokeColor = activeObject.buttonStrokeColor;
        this.props.buttonStrokeWidth = activeObject.buttonStrokeWidth;
        this.props.buttonRadius = activeObject.buttonRx;
        this.props.width = activeObject.width;
        this.props.height = activeObject.height;
        let finalButtonFill = activeObject.buttonFill || '#ffffff';
        if (typeof finalButtonFill == 'string') {
            console.log(finalButtonFill);
            this.props.buttonFill = finalButtonFill;
            this.props.buttonGradientArray = [];
            this.props.buttonGradientAngle = 0;
            this.props.gradientType = 'linear';
            this.props.gradientPositionIsCenter = true;
        }
        else {
            this.props.buttonFill = '#ffffff';
            this.props.buttonGradientArray = this.helperService._convertOffsetIntoStopColorArray(finalButtonFill.colorStops);
            this.props.buttonGradientAngle = finalButtonFill.gradientAngle || 0;
            this.props.gradientType = finalButtonFill.type || 'linear';
            typeof finalButtonFill.isGradientInCenter != "undefined" ? this.props.gradientPositionIsCenter = finalButtonFill.isGradientInCenter : this.props.gradientPositionIsCenter = true;
        }
    }
    setActiveColor(data) {
        this.props.activeGradientColor = data.colorObject.color;
        this.props.activeGradientColorIndex = data.index;
    }
    // setProeprties
    changeFontFamily(fontFamily) {
        this._getFontFromFamily(fontFamily).then(result => {
            this.props.font = result;
            if (result != {}) {
                this.fabricService._loadFont(this.props.font.fontName, this.props.font.fontSrc).then(result => {
                    this.props.fontFamily = this.props.font.fontName;
                    this.selected.setButtonProp({ fontFamily: this.props.fontFamily, fontName: this.props.font.fontName, fontSrc: this.props.font.fontSrc });
                }, err => {
                    console.log("font Can't load", err);
                }).catch(err => {
                    console.log("font Can't load", err);
                });
            }
        });
    }
    _getFontFromFamily(family) {
        return new Promise(resolve => {
            var font = {};
            this.fontList.forEach(element => {
                if (element.fontName == family) {
                    font = element;
                }
            });
            resolve(font || {});
        });
    }
    setButtonSize(prop) {
        this.selected.setButtonProp(prop);
        this.canvas.renderAll();
    }
    setFontSize(fontSize) {
        // math.sign represent that numer is positive or negetive
        if (fontSize && (Math.sign(fontSize) == 1 || Math.sign(fontSize) == 0))
            this.selected.setButtonProp({ fontSize: fontSize });
    }
    toggleStyle(style) {
        switch (style) {
            case 'bold':
                this.props.isBold = !this.props.isBold;
                this.selected.setButtonProp({ fontWeight: this.props.isBold ? 'bold' : 'normal' });
                break;
            case 'italic':
                this.props.isItalic = !this.props.isItalic;
                this.selected.setButtonProp({ fontStyle: this.props.isItalic ? 'italic' : 'normal' });
                break;
            case 'underline':
                this.props.isUnderLine = !this.props.isUnderLine;
                this.selected.setButtonProp({ underline: this.props.isUnderLine });
                break;
            case 'strikethrough':
                this.props.isStrikeThrough = !this.props.isStrikeThrough;
                this.selected.setButtonProp({ linethrough: this.props.isStrikeThrough });
                break;
            case 'overline':
                this.props.isOverLine = !this.props.isOverLine;
                this.selected.setButtonProp({ overline: this.props.isOverLine });
                break;
        }
    }
    toggleAlignment(align) {
        this.props.textAlign = align;
        this.selected.setButtonProp({ textAlign: align });
    }
    setOpacity(opacity, isButtonProperty = false) {
        let property = isButtonProperty == true ? { opacity: opacity } : { textOpacity: opacity };
        this.selected.setButtonProp(property);
    }
    setSpacing(charSpacing) {
        this.selected.setButtonProp({ charSpacing: charSpacing });
    }
    setLineHeight(lineHeight) {
        this.selected.setButtonProp({ lineHeight: lineHeight });
    }
    setFill(fill) {
        this.selected.setButtonProp({ color: fill });
    }
    setBackground(backgroundColor) {
        this.selected.setButtonProp({ backgroundColor: backgroundColor });
    }
    setButtonStrokeColor(color) {
        this.props.buttonStrokeColor = color;
        this.selected.setButtonProp({ buttonStrokeColor: color });
    }
    setButtonStrokeSize(size) {
        this.selected.setButtonProp({ buttonStrokeWidth: size });
    }
    setButtonFill(color) {
        this.props.buttonFill = color;
        this.selected.setButtonProp({ buttonFill: color });
    }
    setButtonGradient(colorArray) {
        colorArray.length <= 0 ? this.props.buttonGradientArray = JSON.parse(JSON.stringify(_app_constants__WEBPACK_IMPORTED_MODULE_7__["defaultGradientArray"])) : this.props.buttonGradientArray = colorArray;
        var colorStop = this.helperService._convertStopIntoOffsetColorArray(this.props.buttonGradientArray);
        this._setGradientToButton(JSON.parse(JSON.stringify(colorStop)));
    }
    _setGradientToButton(colorStop) {
        let invertangle = (this.props.buttonGradientAngle + 180) > 360 ? (this.props.buttonGradientAngle + 180) - 360 : (this.props.buttonGradientAngle + 180);
        let angle = this.props.buttonGradientAngle;
        let x1, y1, x2, y2;
        let button = { top: this.selected.top, left: this.selected.left, width: this.selected.width, height: this.selected.height };
        let p1 = this.helperService.edgeOfView(button, invertangle);
        let p2 = this.helperService.edgeOfView(button, angle);
        x1 = p1.x;
        y1 = p1.y;
        x2 = p2.x;
        y2 = p2.y;
        var grad;
        if (this.props.gradientType == 'radial') {
            if (this.props.gradientPositionIsCenter == true) {
                x2 = this.selected.width / 2;
                y2 = this.selected.height / 2;
            }
            grad = new fabric.Gradient({
                type: "radial",
                coords: {
                    r1: 0,
                    r2: this.selected.height,
                    x1: x2,
                    y1: y2,
                    x2: x2,
                    y2: y2,
                },
                colorStops: colorStop,
                gradientAngle: this.props.buttonGradientAngle || 0,
                isGradientInCenter: this.props.gradientPositionIsCenter
            });
        }
        else {
            grad = new fabric.Gradient({
                type: "linear",
                coords: {
                    x1: x1,
                    y1: y1,
                    x2: x2,
                    y2: y2,
                },
                colorStops: colorStop,
                gradientAngle: this.props.buttonGradientAngle || 0
            });
        }
        if (grad) {
            this.selected.setButtonProp({ buttonFill: grad, gradientAngle: this.props.buttonGradientAngle || 0 });
            this.canvas.renderAll();
        }
    }
    changeGradientIndexColor(index, color) {
        this.props.buttonGradientArray.length <= 0 ? this.props.buttonGradientArray = JSON.parse(JSON.stringify(_app_constants__WEBPACK_IMPORTED_MODULE_7__["defaultGradientArray"])) : null;
        let obj = [...this.props.buttonGradientArray];
        // console.log(index, color, obj, this.props.buttonGradientArray);
        obj[index].color = color;
        this.props.buttonGradientArray = obj;
        this.setButtonGradient(this.props.buttonGradientArray);
    }
    setButtonRadius(radius) {
        this.selected.setButtonProp({ buttonRx: radius, buttonRy: radius });
    }
    setShadow(shadow) {
        this.selected.setButtonProp({ buttonShadow: shadow });
    }
    setBTextShadow(shadow) {
        this.selected.setButtonProp({ textShadow: shadow });
    }
    // Download
    downloadImage() {
        if (this.selected) {
            let width = this.selected.width * this.selected.scaleX, height = this.selected.height * this.selected.scaleY, top = 0, left = 0, that = this, offset = 10;
            if (that.selected.buttonShadow) {
                width += Math.abs(that.selected.buttonShadow.offsetX) + (that.selected.buttonShadow.blur);
                height += Math.abs(that.selected.buttonShadow.offsetY) + (that.selected.buttonShadow.blur);
                if (Math.sign(that.selected.buttonShadow.offsetY) == -1) {
                    top = that.selected.buttonShadow.offsetY - that.selected.buttonShadow.blur;
                }
                else if (that.selected.buttonShadow.offsetY < that.selected.buttonShadow.blur / 2) {
                    top = -that.selected.buttonShadow.blur;
                    height += that.selected.buttonShadow.blur;
                }
                if (Math.sign(that.selected.buttonShadow.offsetX) == -1) {
                    left = that.selected.buttonShadow.offsetX - that.selected.buttonShadow.blur;
                }
                else if (that.selected.buttonShadow.offsetX < that.selected.buttonShadow.blur / 2) {
                    left = -that.selected.buttonShadow.blur;
                    width += that.selected.buttonShadow.blur;
                }
            }
            this.selected.cloneAsImage(function (obj) {
                that.helperService._download("Button.png", obj.toDataURL());
            }, {
                format: 'png',
                top: top - this.selected.buttonStrokeWidth - offset,
                left: left - this.selected.buttonStrokeWidth - offset,
                width: width + this.selected.buttonStrokeWidth * 2 + offset * 2,
                height: height + this.selected.buttonStrokeWidth * 2 + offset * 2,
                withoutShadow: false
            });
        }
        else {
            this.error = "Please Select Object";
        }
    }
    downloadJson() {
        // console.log(this.selected.toJSON());
        if (this.selected) {
            var obj = {}, json = this.selected.toJSON();
            var propertyToInclude = "text buttonFill buttonRx buttonRy buttonShadow buttonStrokeColor buttonStrokeWidth charSpacing color fill fontName fontSize  fontSrc fontStyle fontWeight height lineHeight linethrough opacity scaleX scaleY stroke textAlign textOpacity textShadow underline width".split(' ');
            obj['type'] = 'textButton';
            for (let key in json) {
                if (json.hasOwnProperty(key) && propertyToInclude.indexOf(key) != -1) {
                    obj[key] = json[key];
                }
            }
            var myFile = new Blob([JSON.stringify(obj, null, 2)], { type: 'text/plain' });
            let element = document.createElement('a');
            element.setAttribute('href', URL.createObjectURL(myFile));
            element.setAttribute('download', 'buttonJSON.txt');
            element.style.display = 'none';
            document.body.appendChild(element);
            element.click();
            document.body.removeChild(element);
        }
        else {
            this.error = 'Please Select Object';
        }
    }
};
ButtonGeneratorComponent.ctorParameters = () => [
    { type: _fabric_service__WEBPACK_IMPORTED_MODULE_2__["FabricService"] },
    { type: _helper_service__WEBPACK_IMPORTED_MODULE_3__["HelperService"] }
];
ButtonGeneratorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-button-generator',
        template: __webpack_require__(/*! raw-loader!./button-generator.component.html */ "./node_modules/raw-loader/index.js!./src/app/button-generator/button-generator.component.html"),
        styles: [__webpack_require__(/*! ./button-generator.component.css */ "./src/app/button-generator/button-generator.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_fabric_service__WEBPACK_IMPORTED_MODULE_2__["FabricService"], _helper_service__WEBPACK_IMPORTED_MODULE_3__["HelperService"]])
], ButtonGeneratorComponent);



/***/ }),

/***/ "./src/app/choose-size/choose-size.component.css":
/*!*******************************************************!*\
  !*** ./src/app/choose-size/choose-size.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".choose-size-container {\n  width: 100vw;\n  height: 100vh;\n  overflow-x: hidden;\n  overflow-y: auto;\n  background-color: #fafafc;\n}\n\n.sizes-container-inner {\n  display: flex;\n  border-radius: 5px;\n  flex-wrap: wrap;\n  max-width: 960px;\n  margin: 10px auto;\n  padding: 22px;\n}\n\n.size-item {\n  width: 140px;\n  height: 160px;\n  margin: 10px;\n  text-align: center;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.size-item.selected .size-icon-cotnainer {\n  background: linear-gradient(90deg, var(--dark-purple) 0, var(--light-purple) 100%);\n  box-shadow: 0 10px 20px 0 rgba(82, 110, 222, 0.2);\n}\n\n.size-item.selected .size-icon-cotnainer:hover .custom-size-icon {\n  -webkit-transform: scale(0.8);\n          transform: scale(0.8);\n  box-shadow: none;\n}\n\n.size-item.selected .size-icon-cotnainer:hover .size-icon {\n  -webkit-transform: scale(1);\n          transform: scale(1);\n  box-shadow: none;\n}\n\n.size-icon-cotnainer {\n  background: #dfe0e6;\n  border-radius: 6px;\n  margin-bottom: 10px;\n  text-align: center;\n  min-width: 140px;\n  min-height: 120px;\n  height: 120px;\n  display: flex;\n  cursor: pointer;\n  transition: background 0.15s cubic-bezier(0.165, 0.84, 0.44, 1),\n    -webkit-transform 0.15s cubic-bezier(0.165, 0.84, 0.44, 1);\n  transition: transform 0.15s cubic-bezier(0.165, 0.84, 0.44, 1),\n    background 0.15s cubic-bezier(0.165, 0.84, 0.44, 1);\n  transition: transform 0.15s cubic-bezier(0.165, 0.84, 0.44, 1),\n    background 0.15s cubic-bezier(0.165, 0.84, 0.44, 1),\n    -webkit-transform 0.15s cubic-bezier(0.165, 0.84, 0.44, 1);\n}\n\n.size-icon-cotnainer:hover {\n  background: transparent;\n}\n\n.custom-size {\n  cursor: initial;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.size-icon-cotnainer.custom-size:hover {\n  background: #dfe0e6;\n}\n\n.size-icon-cotnainer:hover .custom-size-icon {\n  -webkit-transform: scale(1);\n          transform: scale(1);\n  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.15);\n}\n\n.size-icon-cotnainer:hover .size-icon {\n  -webkit-transform: scale(1.2);\n          transform: scale(1.2);\n  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.15);\n}\n\n.size-icon {\n  background: white;\n  max-width: 75%;\n  margin: auto;\n  max-height: 60%;\n  -webkit-transform: scale(1);\n          transform: scale(1);\n  transition: background 0.15s ease-out, -webkit-transform 0.15s ease-out;\n  transition: transform 0.15s ease-out, background 0.15s ease-out;\n  transition: transform 0.15s ease-out, background 0.15s ease-out, -webkit-transform 0.15s ease-out;\n}\n\n.size-item-title {\n  color: #2e3246;\n  font-size: 13px;\n  font-weight: bold;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: pre;\n}\n\n.size-item-size {\n  color: rgba(81, 88, 115, 0.4);\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 12px;\n  margin-top: 3px;\n}\n\n.size-heading {\n  display: block;\n  width: 50%;\n  margin: 0px;\n  font-size: 32px;\n  color: #2e3246;\n}\n\n.next-button-container {\n  width: 50%;\n  display: flex;\n  flex-direction: row-reverse;\n  align-items: center;\n}\n\n.next-button {\n  width: 120px;\n  height: 38px;\n  color: white;\n  background: linear-gradient(90deg, var(--dark-purple) 0, var(--light-purple) 100%);\n  border-radius: 5px;\n  font-size: 14px;\n  font-weight: 600;\n  outline: none;\n  border: 0px solid transparent;\n  cursor: pointer;\n  float: right;\n  transition: 0.15s;\n}\n\n.next-button.disabled:hover,\n.next-button.disabled {\n  background: linear-gradient(90deg, var(--dark-purple)2e 0, var(--light-purple)40 100%);\n  box-shadow: none;\n}\n\n.next-button:hover {\n  box-shadow: 0 5px 10px 0 rgba(98, 123, 224, 0.2);\n}\n\n.add-size-button:active,\n.next-button:active {\n  box-shadow: inset 0px 0px 10px #0a2f5d;\n}\n\n.width-100 {\n  width: 100%;\n  margin-bottom: 50px;\n  margin-top: 40px;\n  display: flex;\n}\n\n.custom-size-input {\n  height: 18px;\n  width: 88px;\n  border-radius: 5px;\n  border: 2px solid transparent;\n  padding: 5px;\n  font-size: 13px;\n  font-weight: 600;\n  outline: none;\n  margin-bottom: 5px;\n  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.15);\n  transition: 0.15s;\n}\n\n.custom-size-input:focus {\n  border-color: var(--dark-purple);\n}\n\n.add-size-button {\n  width: 100px;\n  border-radius: 5px;\n  border: 0px solid transparent;\n  height: 30px;\n  outline: none;\n  cursor: pointer;\n  background: #526ede;\n  color: white;\n  font-size: 13px;\n  font-weight: 600;\n}\n\n.custom-size-icon {\n  background: white;\n  margin: auto;\n  -webkit-transform: scale(0.8);\n          transform: scale(0.8);\n  transition: background 0.15s ease-out, -webkit-transform 0.15s ease-out;\n  transition: transform 0.15s ease-out, background 0.15s ease-out;\n  transition: transform 0.15s ease-out, background 0.15s ease-out, -webkit-transform 0.15s ease-out;\n}\n\n.select-all-button {\n  background: transparent !important;\n  color: #526ede !important;\n  box-shadow: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hvb3NlLXNpemUvY2hvb3NlLXNpemUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix5QkFBaUI7S0FBakIsc0JBQWlCO01BQWpCLHFCQUFpQjtVQUFqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrRkFBa0Y7RUFDbEYsaURBQWlEO0FBQ25EOztBQUVBO0VBQ0UsNkJBQXFCO1VBQXJCLHFCQUFxQjtFQUNyQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSwyQkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixhQUFhO0VBQ2IsZUFBZTtFQUNmOzhEQUNxRDtFQURyRDt1REFDcUQ7RUFEckQ7OzhEQUNxRDtBQUN2RDs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLDJCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsNkNBQTZDO0FBQy9DOztBQUVBO0VBQ0UsNkJBQXFCO1VBQXJCLHFCQUFxQjtFQUNyQiw2Q0FBNkM7QUFDL0M7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztFQUNkLFlBQVk7RUFDWixlQUFlO0VBQ2YsMkJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQix1RUFBK0Q7RUFBL0QsK0RBQStEO0VBQS9ELGlHQUErRDtBQUNqRTs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsVUFBVTtFQUNWLFdBQVc7RUFDWCxlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osWUFBWTtFQUNaLGtGQUFrRjtFQUNsRixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLGVBQWU7RUFDZixZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBOztFQUVFLHNGQUFzRjtFQUN0RixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnREFBZ0Q7QUFDbEQ7O0FBRUE7O0VBRUUsc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsNkNBQTZDO0VBQzdDLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixhQUFhO0VBQ2IsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osNkJBQXFCO1VBQXJCLHFCQUFxQjtFQUNyQix1RUFBK0Q7RUFBL0QsK0RBQStEO0VBQS9ELGlHQUErRDtBQUNqRTs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyx5QkFBeUI7RUFDekIsMkJBQTJCO0FBQzdCIiwiZmlsZSI6InNyYy9hcHAvY2hvb3NlLXNpemUvY2hvb3NlLXNpemUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaG9vc2Utc2l6ZS1jb250YWluZXIge1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYztcbn1cblxuLnNpemVzLWNvbnRhaW5lci1pbm5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtYXgtd2lkdGg6IDk2MHB4O1xuICBtYXJnaW46IDEwcHggYXV0bztcbiAgcGFkZGluZzogMjJweDtcbn1cblxuLnNpemUtaXRlbSB7XG4gIHdpZHRoOiAxNDBweDtcbiAgaGVpZ2h0OiAxNjBweDtcbiAgbWFyZ2luOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4uc2l6ZS1pdGVtLnNlbGVjdGVkIC5zaXplLWljb24tY290bmFpbmVyIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCB2YXIoLS1kYXJrLXB1cnBsZSkgMCwgdmFyKC0tbGlnaHQtcHVycGxlKSAxMDAlKTtcbiAgYm94LXNoYWRvdzogMCAxMHB4IDIwcHggMCByZ2JhKDgyLCAxMTAsIDIyMiwgMC4yKTtcbn1cblxuLnNpemUtaXRlbS5zZWxlY3RlZCAuc2l6ZS1pY29uLWNvdG5haW5lcjpob3ZlciAuY3VzdG9tLXNpemUtaWNvbiB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLnNpemUtaXRlbS5zZWxlY3RlZCAuc2l6ZS1pY29uLWNvdG5haW5lcjpob3ZlciAuc2l6ZS1pY29uIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLnNpemUtaWNvbi1jb3RuYWluZXIge1xuICBiYWNrZ3JvdW5kOiAjZGZlMGU2O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWluLXdpZHRoOiAxNDBweDtcbiAgbWluLWhlaWdodDogMTIwcHg7XG4gIGhlaWdodDogMTIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMTVzIGN1YmljLWJlemllcigwLjE2NSwgMC44NCwgMC40NCwgMSksXG4gICAgYmFja2dyb3VuZCAwLjE1cyBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQsIDAuNDQsIDEpO1xufVxuXG4uc2l6ZS1pY29uLWNvdG5haW5lcjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4uY3VzdG9tLXNpemUge1xuICBjdXJzb3I6IGluaXRpYWw7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uc2l6ZS1pY29uLWNvdG5haW5lci5jdXN0b20tc2l6ZTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNkZmUwZTY7XG59XG5cbi5zaXplLWljb24tY290bmFpbmVyOmhvdmVyIC5jdXN0b20tc2l6ZS1pY29uIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgYm94LXNoYWRvdzogMCAxMHB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xufVxuXG4uc2l6ZS1pY29uLWNvdG5haW5lcjpob3ZlciAuc2l6ZS1pY29uIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICBib3gtc2hhZG93OiAwIDEwcHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSk7XG59XG5cbi5zaXplLWljb24ge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgbWF4LXdpZHRoOiA3NSU7XG4gIG1hcmdpbjogYXV0bztcbiAgbWF4LWhlaWdodDogNjAlO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xNXMgZWFzZS1vdXQsIGJhY2tncm91bmQgMC4xNXMgZWFzZS1vdXQ7XG59XG5cbi5zaXplLWl0ZW0tdGl0bGUge1xuICBjb2xvcjogIzJlMzI0NjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHdoaXRlLXNwYWNlOiBwcmU7XG59XG5cbi5zaXplLWl0ZW0tc2l6ZSB7XG4gIGNvbG9yOiByZ2JhKDgxLCA4OCwgMTE1LCAwLjQpO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxMnB4O1xuICBtYXJnaW4tdG9wOiAzcHg7XG59XG5cbi5zaXplLWhlYWRpbmcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luOiAwcHg7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgY29sb3I6ICMyZTMyNDY7XG59XG5cbi5uZXh0LWJ1dHRvbi1jb250YWluZXIge1xuICB3aWR0aDogNTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5uZXh0LWJ1dHRvbiB7XG4gIHdpZHRoOiAxMjBweDtcbiAgaGVpZ2h0OiAzOHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgdmFyKC0tZGFyay1wdXJwbGUpIDAsIHZhcigtLWxpZ2h0LXB1cnBsZSkgMTAwJSk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IDBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmbG9hdDogcmlnaHQ7XG4gIHRyYW5zaXRpb246IDAuMTVzO1xufVxuXG4ubmV4dC1idXR0b24uZGlzYWJsZWQ6aG92ZXIsXG4ubmV4dC1idXR0b24uZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHZhcigtLWRhcmstcHVycGxlKTJlIDAsIHZhcigtLWxpZ2h0LXB1cnBsZSk0MCAxMDAlKTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLm5leHQtYnV0dG9uOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCA1cHggMTBweCAwIHJnYmEoOTgsIDEyMywgMjI0LCAwLjIpO1xufVxuXG4uYWRkLXNpemUtYnV0dG9uOmFjdGl2ZSxcbi5uZXh0LWJ1dHRvbjphY3RpdmUge1xuICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDEwcHggIzBhMmY1ZDtcbn1cblxuLndpZHRoLTEwMCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uY3VzdG9tLXNpemUtaW5wdXQge1xuICBoZWlnaHQ6IDE4cHg7XG4gIHdpZHRoOiA4OHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBwYWRkaW5nOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgb3V0bGluZTogbm9uZTtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBib3gtc2hhZG93OiAwIDEwcHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIHRyYW5zaXRpb246IDAuMTVzO1xufVxuXG4uY3VzdG9tLXNpemUtaW5wdXQ6Zm9jdXMge1xuICBib3JkZXItY29sb3I6IHZhcigtLWRhcmstcHVycGxlKTtcbn1cblxuLmFkZC1zaXplLWJ1dHRvbiB7XG4gIHdpZHRoOiAxMDBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IDBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBvdXRsaW5lOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQ6ICM1MjZlZGU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uY3VzdG9tLXNpemUtaWNvbiB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBtYXJnaW46IGF1dG87XG4gIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMTVzIGVhc2Utb3V0LCBiYWNrZ3JvdW5kIDAuMTVzIGVhc2Utb3V0O1xufVxuXG4uc2VsZWN0LWFsbC1idXR0b24ge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzUyNmVkZSAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/choose-size/choose-size.component.ts":
/*!******************************************************!*\
  !*** ./src/app/choose-size/choose-size.component.ts ***!
  \******************************************************/
/*! exports provided: ChooseSizeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChooseSizeComponent", function() { return ChooseSizeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let ChooseSizeComponent = class ChooseSizeComponent {
    constructor(router) {
        this.router = router;
        this.sizeList = _app_constants__WEBPACK_IMPORTED_MODULE_2__["sizes"];
        this.isSelected = false;
        this.isAllSelected = false;
        this.customSizeNameCounter = 1;
    }
    ngOnInit() {
    }
    chooseSize(index) {
        this.sizeList[index].selected = !this.sizeList[index].selected;
        this.VarifySizeSelected();
    }
    addSize(customWidth, customHeight) {
        /* console.log('cucstom sisze', customWidth, customHeight);
        customWidth >= customHeight ? console.log('width', customWidth * (140 / customWidth) * 0.75) : console.log('width', customWidth * (120 / customHeight) * 0.60)
        customWidth >= customHeight ? console.log('height', customHeight * (140 / customWidth) * 0.75) : console.log('height', customHeight * (120 / customHeight) * 0.60); */
        if (customWidth && customHeight) {
            this.sizeList.unshift({
                sizeName: "Custom Size " + this.customSizeNameCounter++,
                icon: "",
                width: customWidth,
                height: customHeight,
                selected: true
            });
            this.customHeight = null;
            this.customWidth = null;
            this.VarifySizeSelected();
        }
    }
    moveToGenerator() {
        this.VarifySizeSelected().then(result => {
            localStorage.setItem('sizelist', JSON.stringify(result));
            this.router.navigate(['generator']);
        });
    }
    VarifySizeSelected() {
        return new Promise(resolve => {
            var filteredArray = this.sizeList.filter(function (item) {
                return item.selected == true;
            });
            filteredArray.length <= 0 ? this.isSelected = false : this.isSelected = true;
            filteredArray.length == this.sizeList.length ? this.isAllSelected = true : this.isAllSelected = false;
            resolve(filteredArray);
        });
    }
    toggleAllSelection() {
        if (this.isAllSelected) {
            this.sizeList.forEach(element => {
                element.selected = false;
            });
        }
        else {
            this.sizeList.forEach(element => {
                element.selected = true;
            });
        }
        this.VarifySizeSelected();
    }
};
ChooseSizeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ChooseSizeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-choose-size',
        template: __webpack_require__(/*! raw-loader!./choose-size.component.html */ "./node_modules/raw-loader/index.js!./src/app/choose-size/choose-size.component.html"),
        styles: [__webpack_require__(/*! ./choose-size.component.css */ "./src/app/choose-size/choose-size.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], ChooseSizeComponent);



/***/ }),

/***/ "./src/app/fabric.service.ts":
/*!***********************************!*\
  !*** ./src/app/fabric.service.ts ***!
  \***********************************/
/*! exports provided: FabricService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FabricService", function() { return FabricService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fabric */ "./node_modules/fabric/dist/fabric.js");
/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fabric__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var _fabric_text_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fabric_text_button */ "./src/app/fabric_text_button.js");
/* harmony import */ var _fabric_text_button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fabric_text_button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fabric_icon_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fabric_icon_button */ "./src/app/fabric_icon_button.js");
/* harmony import */ var _fabric_icon_button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fabric_icon_button__WEBPACK_IMPORTED_MODULE_5__);






// Animation is worked but due to this animation, text not get scaled while add in canvas, so in comment
/* fabric.Canvas.prototype.add = (function (originalFn) {
  return function (...args) {
    var origninalTop = args[0]['top'];
    args[0]['top'] = args[0]['top'] - 100;
    originalFn.call(this, ...args);
    args[0].animate('top', origninalTop, {
      onChange: this.renderAll.bind(this),
      duration: 1000,
      easing: fabric.util.ease.easeOutElastic,
      onComplete: (function () {
        this.renderAll.bind(this);
      }).bind(this)
    });
    return this
  };
})(fabric.Canvas.prototype.add); */
// Fabric JS dpi
fabric.DPI = 300;
// for get objects by it s attribute value
fabric.Canvas.prototype.getItemByName = function (attr, value) {
    var object = null, objects = this.getObjects();
    for (var i = 0, len = this.size(); i < len; i++) {
        if (objects[i][attr] && objects[i][attr] === value) {
            object = objects[i];
            break;
        }
    }
    return object;
};
// for set custom corner style
fabric.Object.prototype.set({
    borderColor: "#00c3f9",
    cornerColor: "#00c3f9",
    cornerStrokeColor: "#ffffff",
    cornerStyle: "circle",
    minScaleLimit: 0,
    lockScalingFlip: true,
    selectionDashArray: [5, 0],
    borderDashArray: [5, 5],
    cornerDashArray: [2, 0],
    borderScaleFactor: 1,
    cornerSize: 15,
    transparentCorners: false,
    centeredRotation: true,
});
let FabricService = class FabricService {
    // pixelRatio = window.devicePixelRatio || 1;
    constructor() {
        this.isCanvasLoacked = _app_constants__WEBPACK_IMPORTED_MODULE_3__["isObjectSelectable"];
        this.singleEditMode = false;
        // fabric.devicePixelRatio = this.pixelRatio;
    }
    generateRandomNumber() {
        return Math.round(Math.random() * 1000000);
    }
    getAllLayer(canvasArr) {
        return new Promise(resolve => {
            var canvasWithMaxObjects = 0, maxObjectCanvasId;
            canvasArr.forEach((element, index) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                if (canvasWithMaxObjects <= element.toJSON().objects.length) {
                    maxObjectCanvasId = index;
                    canvasWithMaxObjects = element.toJSON().objects.length;
                }
            }));
            resolve(maxObjectCanvasId);
        });
    }
    getObjectByAttr(canvas, attr, value) {
        return new Promise(resolve => {
            resolve(canvas.getItemByName(attr, value));
        });
    }
    isCanvasPortrait(canvas) {
        let canvasHeight = canvas.getHeight(), canvasWidth = canvas.getWidth();
        return canvasHeight > canvasWidth + (canvasHeight / 6);
    }
    isCanvasLandscape(canvas) {
        let canvasHeight = canvas.getHeight(), canvasWidth = canvas.getWidth();
        return canvasWidth > canvasHeight + (canvasWidth / 6);
    }
    isCanvasSquare(canvas) {
        let canvasHeight = canvas.getHeight(), canvasWidth = canvas.getWidth();
        return (canvasWidth <= canvasHeight + (canvasWidth / 6)) && (canvasHeight <= canvasWidth + (canvasHeight / 6));
    }
    // Add Elements Functions
    addDefaultButton(canvas, props) {
        return new Promise((resolve) => {
            if (props.type == 'textButton') {
                this._loadFont(props.fontName, props.fontSrc).then((result) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    props.fontName = result.fontName;
                    props.fontSrc = result.fontSrc;
                    this._addButton(canvas, props).then(result => {
                        resolve(canvas);
                    });
                }), err => {
                    console.log("font can't load", err);
                }).catch(err => {
                    console.log("font can't load", err);
                });
            }
            else if (props.type == 'iconButton') {
                this._addIconButton(canvas, props).then(result => {
                    resolve(canvas);
                });
            }
        });
    }
    _addButton(element, props) {
        return new Promise((resolve) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var positionOffset = _app_constants__WEBPACK_IMPORTED_MODULE_3__["canvasBorderOffset"] - 5;
            var excludedProperty = ['type', 'previewImage'];
            var obj = {
                top: positionOffset,
                left: positionOffset,
                fontName: props.fontName,
            };
            for (let key in props) {
                if (props.hasOwnProperty(key)) {
                    excludedProperty.indexOf(key) == -1 ? obj[key] = props[key] : null;
                }
            }
            var button = new fabric.Button(props.text, obj);
            element.add(button);
            element.renderAll();
            resolve();
        }));
    }
    _addIconButton(element, props) {
        return new Promise((resolve) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var positionOffset = _app_constants__WEBPACK_IMPORTED_MODULE_3__["canvasBorderOffset"] - 5;
            var excludedProperty = ['src', 'type', 'previewImage'];
            var obj = {
                top: positionOffset,
                left: positionOffset,
                fontName: props.fontName,
            };
            for (let key in props) {
                if (props.hasOwnProperty(key)) {
                    excludedProperty.indexOf(key) == -1 ? obj[key] = props[key] : null;
                }
            }
            var button = new fabric.IconButton(props.src, obj);
            element.add(button);
            element.renderAll();
            resolve();
        }));
    }
    addDefaultText(canvas, props) {
        return new Promise((resolve) => {
            // var newId = this.generateRandomNumber();
            // var promises = [];
            this._loadFont(props.fontName, props.fontSrc).then((result) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                /* for (let i = 0; i < canvas.length; i++) {
                  var pro = this._addText(canvas[i], newId, fontSize);
                  await pro.then(result => {
                    canvas[i].renderAll();
                  })
                  promises.push(pro)
                }
                await Promise.all(promises).then(result => {
                  resolve(canvas);
                }) */
                this._addText(canvas, props).then(result => {
                    resolve(canvas);
                });
            }), err => {
                console.log("font can't load", err);
            }).catch(err => {
                console.log("font can't load", err);
            });
        });
    }
    _addText(element, props) {
        return new Promise((resolve) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var positionOffset = _app_constants__WEBPACK_IMPORTED_MODULE_3__["canvasBorderOffset"] - 5;
            var canvasWidth = element.width - positionOffset;
            var canvasHeight = element.height - positionOffset;
            var excludedProperty = ['text'];
            var obj = {
                top: positionOffset,
                left: positionOffset,
                objectCaching: false
            };
            for (let key in props) {
                if (props.hasOwnProperty(key)) {
                    excludedProperty.indexOf(key) == -1 ? obj[key] = props[key] : null;
                }
            }
            var text = new fabric.Textbox(props.text, obj);
            if (text.height >= canvasHeight) {
                text.scaleToHeight(canvasHeight - positionOffset);
            }
            if (text.width >= canvasWidth) {
                text.set({ width: canvasWidth - positionOffset });
                if (text.getScaledWidth() >= canvasWidth - positionOffset)
                    text.scaleToWidth(canvasWidth - positionOffset);
                if (text.getScaledHeight() >= canvasHeight - positionOffset)
                    text.scaleToHeight(canvasHeight - positionOffset);
            }
            element.add(text);
            element.renderAll();
            resolve();
        }));
    }
    _loadFont(fontFamily, fontPath) {
        return new Promise((resolve, reject) => {
            if (fontFamily && fontPath) {
                var junction_font = new FontFace(fontFamily, 'url(' + JSON.stringify(fontPath) + ')');
            }
            else {
                fontPath = _app_constants__WEBPACK_IMPORTED_MODULE_3__["defaultFontFamily"].fontSrc;
                fontFamily = _app_constants__WEBPACK_IMPORTED_MODULE_3__["defaultFontFamily"].fontName;
                var junction_font = new FontFace(fontFamily, 'url(' + JSON.stringify(fontPath) + ')');
            }
            junction_font.load().then(function (loaded_face) {
                document['fonts'].add(loaded_face);
                resolve({ fontName: fontFamily, fontSrc: fontPath });
            }).catch(err => {
                console.log(err);
                fontPath = _app_constants__WEBPACK_IMPORTED_MODULE_3__["defaultFontFamily"].fontSrc;
                fontFamily = _app_constants__WEBPACK_IMPORTED_MODULE_3__["defaultFontFamily"].fontName;
                var default_junction_font = new FontFace(fontFamily, 'url(' + JSON.stringify(fontPath) + ')');
                default_junction_font.load().then(function (loaded_face) {
                    document['fonts'].add(loaded_face);
                    resolve({ fontName: fontFamily, fontSrc: fontPath });
                }).catch(err => {
                    reject(err);
                });
            });
        });
    }
    addDefaultImage(canvas, props) {
        return new Promise((resolve) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this._loadImage(canvas, props).then(result => {
                resolve(canvas);
            });
        }));
    }
    _loadImage(element, props) {
        return new Promise(resolve => {
            var positionOffset = _app_constants__WEBPACK_IMPORTED_MODULE_3__["canvasBorderOffset"] - 5;
            var canvasWidth = element.width - positionOffset;
            var canvasHeight = element.height - positionOffset;
            var excludedProperty = ['src'];
            var obj = {
                top: positionOffset,
                left: positionOffset,
                objectCaching: false
            };
            for (let key in props) {
                if (props.hasOwnProperty(key)) {
                    excludedProperty.indexOf(key) == -1 ? obj[key] = props[key] : null;
                }
            }
            fabric.Image.fromURL(props.src, function (myImg) {
                var img = myImg.set(obj);
                // scale responsive to canvas
                if (img.getScaledHeight() >= canvasHeight) {
                    img.scaleToHeight(canvasHeight - positionOffset);
                }
                if (img.getScaledWidth() >= canvasWidth) {
                    img.scaleToWidth(canvasWidth - positionOffset);
                }
                element.add(img);
                element.renderAll();
                resolve(img);
            });
        });
    }
    getScaleRatio(canvasWidth, canvasHeight, imageWidth, imageHeight, scaleMode) {
        return new Promise(resolve => {
            if (scaleMode) {
                var scaleX = 1, scaleY = 1, offsetX = 0, offsetY = 0;
                switch (scaleMode) {
                    case 'scaleCrop':
                        if (canvasWidth / canvasHeight >= imageWidth / imageHeight) {
                            scaleX = canvasWidth / imageWidth;
                            scaleY = scaleX;
                            offsetY = -(imageHeight * scaleX - canvasHeight) / 2;
                            offsetX = 0;
                        }
                        else {
                            scaleY = canvasHeight / imageHeight;
                            scaleX = scaleY;
                            offsetX = -((imageWidth * scaleY) - canvasWidth) / 2;
                            offsetY = 0;
                        }
                        resolve({
                            scaleX: scaleX,
                            scaleY: scaleY,
                            offsetX: offsetX,
                            offsetY: offsetY,
                            scaleMode: scaleMode,
                            canvasWidth: canvasWidth,
                            canvasHeight: canvasHeight,
                            imageWidth: imageWidth,
                            imageHeight: imageHeight
                        });
                        break;
                    case 'maintainAspect':
                        if (imageWidth <= imageHeight) {
                            scaleY = canvasHeight / imageHeight;
                            scaleX = scaleY;
                            offsetY = 0;
                            offsetX = -(imageWidth * scaleY - canvasWidth) / 2;
                        }
                        else {
                            scaleX = canvasWidth / imageWidth;
                            scaleY = scaleX;
                            offsetX = 0;
                            offsetY = -(imageHeight * scaleX - canvasHeight) / 2;
                        }
                        resolve({
                            scaleX: scaleX,
                            scaleY: scaleY,
                            offsetX: offsetX,
                            offsetY: offsetY,
                            scaleMode: scaleMode,
                            canvasWidth: canvasWidth,
                            canvasHeight: canvasHeight,
                            imageWidth: imageWidth,
                            imageHeight: imageHeight
                        });
                        break;
                    case 'exactFit':
                        scaleX = canvasWidth / imageWidth;
                        scaleY = canvasHeight / imageHeight;
                        resolve({
                            scaleX: scaleX,
                            scaleY: scaleY,
                            offsetX: offsetX,
                            offsetY: offsetY,
                            scaleMode: scaleMode,
                            canvasWidth: canvasWidth,
                            canvasHeight: canvasHeight,
                            imageWidth: imageWidth,
                            imageHeight: imageHeight
                        });
                        break;
                    case 'noScale':
                        scaleX = 1;
                        scaleY = 1;
                        resolve({
                            scaleX: scaleX,
                            scaleY: scaleY,
                            offsetX: offsetX,
                            offsetY: offsetY,
                            scaleMode: scaleMode,
                            canvasWidth: canvasWidth,
                            canvasHeight: canvasHeight,
                            imageWidth: imageWidth,
                            imageHeight: imageHeight
                        });
                        break;
                    default:
                        if (canvasWidth / canvasHeight >= imageWidth / imageHeight) {
                            scaleX = canvasWidth / imageWidth;
                            scaleY = scaleX;
                            offsetY = -(imageHeight * scaleX - canvasHeight) / 2;
                            offsetX = 0;
                        }
                        else {
                            scaleY = canvasHeight / imageHeight;
                            scaleX = scaleY;
                            offsetX = -((imageWidth * scaleY) - canvasWidth) / 2;
                            offsetY = 0;
                        }
                        resolve({
                            scaleX: scaleX,
                            scaleY: scaleY,
                            offsetX: offsetX,
                            offsetY: offsetY,
                            scaleMode: 'scaleCrop',
                            canvasWidth: canvasWidth,
                            canvasHeight: canvasHeight,
                            imageWidth: imageWidth,
                            imageHeight: imageHeight
                        });
                        break;
                }
            }
            else {
                resolve({});
            }
        });
    }
    // render json in canvas
    generateIdList(bannerset) {
        return new Promise(resolve => {
            let objectLayers = [];
            bannerset.forEach(json => {
                if (json.hasOwnProperty('sample_image')) {
                    for (var key in json) {
                        if (json.hasOwnProperty(key)) {
                            switch (key) {
                                case 'text_json':
                                    json[key].forEach(object => {
                                        var tmp = objectLayers.filter(layer => {
                                            return layer.text == object.text && layer.type == 'textbox';
                                        });
                                        if (tmp.length <= 0) {
                                            objectLayers.push({
                                                type: 'textbox',
                                                contentType: 1,
                                                text: object.text,
                                                id: this.generateRandomNumber()
                                            });
                                        }
                                    });
                                    break;
                                case 'button_json':
                                    json[key].forEach(object => {
                                        var tmp = objectLayers.filter(layer => {
                                            return layer.text == object.text && layer.type == 'button';
                                        });
                                        if (tmp.length <= 0) {
                                            objectLayers.push({
                                                type: 'button',
                                                contentType: 5,
                                                text: object.text,
                                                id: this.generateRandomNumber()
                                            });
                                        }
                                    });
                                    break;
                                case 'sticker_json':
                                    json[key].forEach(object => {
                                        var tmp = objectLayers.filter(layer => {
                                            return layer.src == object.sticker_image && layer.type == 'image';
                                        });
                                        if (tmp.length <= 0) {
                                            objectLayers.push({
                                                type: 'image',
                                                contentType: 2,
                                                src: object.sticker_image,
                                                id: this.generateRandomNumber()
                                            });
                                        }
                                    });
                                    break;
                            }
                        }
                    }
                }
            });
            // console.log('objectLayers', objectLayers);
            resolve(objectLayers);
        });
    }
    generateCanvas(canvas) {
        return new Promise(resolve => {
            var fabCanvas = new fabric.Canvas('canvas-' + canvas.index, _app_constants__WEBPACK_IMPORTED_MODULE_3__["canvasConfig"]);
            fabCanvas.setHeight(canvas.height);
            fabCanvas.setWidth(canvas.width);
            fabCanvas.set({
                sizeType: canvas.sizeType,
                id: 'canvas-' + canvas.index,
                locked: true
            });
            //this.scaleCanvas(fabCanvas.lowerCanvasEl, fabCanvas.contextContainer, canvas.width, canvas.height);
            resolve(fabCanvas);
        });
    }
    renderBackground(canvas, backgroundJSON) {
        return new Promise(resolve => {
            let that = this;
            if (backgroundJSON.background_image) {
                fabric.Image.fromURL(backgroundJSON.background_image, function (img) {
                    that.getScaleRatio(canvas.width, canvas.height, img.width, img.height, backgroundJSON.scaleMode || 'scaleCrop').then(result => {
                        canvas.setBackgroundImage(img, () => {
                            canvas.renderAll();
                            resolve(canvas);
                        }, {
                            scaleX: result.scaleX,
                            scaleY: result.scaleY,
                            top: result.offsetY,
                            left: result.offsetX,
                            scaleMode: result.scaleMode
                        });
                    });
                });
            }
            else if (backgroundJSON.background_color) {
                canvas.backgroundImage = null;
                canvas.setBackgroundColor(backgroundJSON.background_color, canvas.renderAll.bind(canvas));
                resolve(canvas);
            }
        });
    }
    renderStickers(canvas, stickerJSON, idList) {
        return new Promise(resolve => {
            var Promises = [];
            stickerJSON.forEach(object => {
                let newId;
                var layer = idList.filter(layer => {
                    return layer.type == "image" && layer.src == object.sticker_image;
                });
                if (layer.length > 0) {
                    newId = layer[0].id;
                    var props = {
                        id: newId,
                        src: object.sticker_image,
                        contentType: 2
                    };
                    var promis = this._loadImage(canvas, props);
                    promis.then(imgObject => {
                        imgObject.set({
                            top: object.yPos,
                            left: object.xPos,
                            width: object.width,
                            height: object.height,
                            scaleX: object.scaleX,
                            scaleY: object.scaleY,
                            angle: object.angle,
                            objectCaching: false,
                            selectable: this.isCanvasLoacked,
                        });
                        canvas.renderAll();
                    });
                    Promises.push(promis);
                }
            });
            Promise.all(Promises).then(result => {
                resolve(canvas);
            });
        });
    }
    renderText(canvas, textJSON, idList) {
        return new Promise(resolve => {
            textJSON.forEach(object => {
                let newId;
                var layer = idList.filter(layer => {
                    return layer.type == "textbox" && layer.text == object.text;
                });
                if (layer.length > 0) {
                    newId = layer[0].id;
                    this._loadFont(object.fontName, object.fontPath).then(font => {
                        var text = new fabric.Textbox(object.text, {
                            top: Math.round(object.yPos),
                            left: Math.round(object.xPos),
                            width: Math.round(object.width),
                            fill: object.color,
                            fontSize: Math.round(object.size),
                            fontName: font.fontName,
                            fontSrc: font.fontSrc,
                            textAlign: object.alignment == 1 ? 'left' : object.alignment == 2 ? 'center' : object.alignment == 3 ? 'right' : object.alignment == 4 ? 'justify' : 'left',
                            fontFamily: font.fontName,
                            opacity: Number(object.opacity) / 100,
                            angle: object.angle,
                            scaleX: Number(object.scaleX).toFixed(2),
                            scaleY: Number(object.scaleY).toFixed(2),
                            shadow: {
                                color: object.shadowColor,
                                blur: object.shadowRadius,
                                offsetX: object.shadowDistance,
                                offsetY: object.shadowDistance,
                                opacity: 1
                            },
                            selectable: this.isCanvasLoacked,
                            objectCaching: false,
                            contentType: 1,
                            id: newId,
                        });
                        text.set({
                            height: Math.round(text.height)
                        });
                        canvas.add(text);
                        canvas.renderAll();
                        resolve(true);
                    }, err => {
                        console.log('font loading error');
                        resolve(false);
                    });
                }
            });
        });
    }
    renderButton(canvas, buttonJSON, idList) {
        return new Promise(resolve => {
            buttonJSON.forEach(object => {
                let newId;
                var layer = idList.filter(layer => {
                    return layer.type == "button" && layer.text == object.text;
                });
                if (layer.length > 0) {
                    newId = layer[0].id;
                    this._loadFont(object.fontName, object.fontPath).then(font => {
                        // fanric button js
                        // var button = new fabric.Button(object.text, {
                        //   top: object.yPos,
                        //   left: object.xPos,
                        //   width: object.width,
                        //   fill: object.fill,
                        //   buttonFill: object.buttonFill,
                        //   buttonStrokeColor: object.buttonStrokeColor,
                        //   buttonStrokeWidth: object.buttonStrokeWidth,
                        //   buttonRx: object.buttonRx,
                        //   buttonRy: object.buttonRy,
                        //   stroke: object.stroke,
                        //   strokeWidth: object.strokeWidth,
                        //   fontSize: object.size,
                        //   fontName: font.fontName,
                        //   fontSrc: font.fontSrc,
                        //   textAlign: object.alignment == 1 ? 'left' : object.alignment == 2 ? 'center' : object.alignment == 3 ? 'right' : object.alignment == 4 ? 'justify' : 'left',
                        //   fontFamily: font.fontName,
                        //   opacity: Number(object.opacity) / 100,
                        //   charSpacing: object.charSpacing,
                        //   lineHeight: object.lineHeight,
                        //   angle: object.angle,
                        //   scaleX: object.scaleX,
                        //   scaleY: object.scaleY,
                        //   shadow: {
                        //     color: object.shadowColor,
                        //     blur: object.shadowRadius,
                        //     offsetX: object.shadowDistance,
                        //     offsetY: object.shadowDistance,
                        //     opacity: 1
                        //   },
                        //   selectable: true,
                        //   contentType: 5,
                        //   id: newId,
                        // })
                        // fabric Group Button js
                        var button = new fabric.Button(object.text, {
                            top: Math.round(object.yPos),
                            left: Math.round(object.xPos),
                            width: Math.round(object.width),
                            height: Math.round(object.height),
                            angle: object.angle,
                            buttonShadow: object.buttonShadow,
                            buttonFill: object.buttonFill,
                            buttonStrokeColor: object.buttonStrokeColor,
                            buttonStrokeWidth: object.buttonStrokeWidth,
                            buttonRx: object.buttonRx,
                            buttonRy: object.buttonRy,
                            fontSize: Math.round(object.fontSize),
                            fontName: font.fontName,
                            fontSrc: font.fontSrc,
                            color: object.color,
                            stroke: object.stroke,
                            strokeWidth: object.strokeWidth,
                            textAlign: object.alignment == 1 ? 'left' : object.alignment == 2 ? 'center' : object.alignment == 3 ? 'right' : object.alignment == 4 ? 'justify' : 'left',
                            textOpacity: Number(object.textOpacity) / 100,
                            charSpacing: object.charSpacing,
                            lineHeight: object.lineHeight,
                            textShadow: object.textShadow,
                            backgroundColor: object.backgroundColor,
                            paddingOffset: object.paddingOffset,
                            underline: object.underline,
                            linethrough: object.linethrough,
                            overline: object.overline,
                            fontStyle: object.fontStyle,
                            fontWeight: object.fontWeight,
                            selectable: this.isCanvasLoacked,
                            objectCaching: false,
                            contentType: 5,
                            id: newId,
                        });
                        canvas.add(button);
                        canvas.renderAll();
                        resolve();
                    }, err => {
                        console.log('font loading error');
                        resolve();
                    });
                }
            });
        });
    }
    // Not In use
    scaleCanvas(canvas, context, width, height) {
        const devicePixelRatio = window.devicePixelRatio || 1;
        // determine the 'backing store ratio' of the canvas context
        const backingStoreRatio = (context.webkitBackingStorePixelRatio ||
            context.mozBackingStorePixelRatio ||
            context.msBackingStorePixelRatio ||
            context.oBackingStorePixelRatio ||
            context.backingStorePixelRatio || 1);
        // determine the actual ratio we want to draw at
        const ratio = devicePixelRatio / backingStoreRatio;
        if (devicePixelRatio !== backingStoreRatio) {
            // set the 'real' canvas size to the higher width/height
            canvas.width = width * ratio;
            canvas.height = height * ratio;
            // ...then scale it back down with CSS
            canvas.style.width = width + 'px';
            canvas.style.height = height + 'px';
        }
        else {
            // this is a normal 1:1 device; just scale it simply
            canvas.width = width;
            canvas.height = height;
            canvas.style.width = '';
            canvas.style.height = '';
        }
        // scale the drawing context so everything will work at the higher ratio
        context.scale(ratio, ratio);
    }
    // Set Object Properties
    setPropertyToObject(canvas, objectId, property, isButtonProperty = false) {
        return new Promise((resolve, reject) => {
            let activeObject = canvas.getActiveObject();
            if (activeObject && activeObject.id == objectId) {
                if (isButtonProperty == true) {
                    canvas.getActiveObject().setButtonProp(property);
                    resolve();
                }
                else {
                    canvas.getActiveObject().set(property);
                    resolve();
                }
                canvas.renderAll();
            }
            else {
                if (isButtonProperty == true) {
                    canvas.getItemByName('id', objectId) ? canvas.getItemByName('id', objectId).setButtonProp(property) : null;
                    resolve();
                }
                else {
                    canvas.getItemByName('id', objectId) ? canvas.getItemByName('id', objectId).set(property) : null;
                    resolve();
                }
                canvas.renderAll();
            }
        });
    }
};
FabricService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FabricService);



/***/ }),

/***/ "./src/app/fabric_icon_button.js":
/*!***************************************!*\
  !*** ./src/app/fabric_icon_button.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (fabric) {
  "use strict";

  fabric.IconButton = fabric.util.createClass(fabric.Group, {
    type: "iconButton",
    stateProperties: fabric.Textbox.prototype.stateProperties.concat(
      "buttonRx",
      "buttonRy",
      "buttonFill",
      "paddingOffset",
      "buttonStrokeWidth",
      "buttonStrokeColor",
      "buttonShadow",
      "iconSrc",
      "iconSize",
      "iconShadow",
      "iconColorArray"
    ),
    top: 0,
    left: 0,
    width: 0,
    height: 0,
    iconObj: null,
    rectObj: null,
    originX: "left",
    originY: "top",
    angle: 0,
    shadow: null,
    lockScalingFlip: true,

    buttonRx: 0,
    buttonRy: 0,
    buttonFill: "#000",
    buttonStrokeColor: "#000000",
    buttonStrokeWidth: 0,
    buttonShadow: null,
    iconData: "",
    iconSrc: "",
    iconSize: 0,
    iconShadow: null,
    iconColorArray: [],
    paddingOffset: 15,

    _flag: 0,
    _width: 0,
    _iconSize: 0,
    _lastGoodLeft: 0,
    _lastGoodTop: 0,
    noScaleCache: true,
    objectCaching: false,
    lockScalingFlip: true,
    cacheProperties: fabric.Text.prototype.cacheProperties.concat(
      "buttonRx",
      "buttonRy",
      "buttonFill",
      "paddingOffset",
      "buttonStrokeWidth",
      "buttonStrokeColor",
      "buttonShadow",
      "iconSrc",
      "iconSize",
      "iconShadow",
      "iconColorArray"
    ),
    initialize: function (src, options) {
      this.set(options);
      this.set({ iconSrc: src });
      this.rectObj = new fabric.Rect({
        top: 0,
        left: 0,
        width: this.width,
        height: this.height,
        fill: this.buttonFill,
        rx: this.buttonRx,
        ry: this.buttonRy,
        stroke: this.buttonStrokeColor,
        strokeWidth: this.buttonStrokeWidth,
        shadow: this.buttonShadow,
        originX: "center",
        originY: "center",
      });

      if (
        typeof this.iconSrc !== "undefined" &&
        this.iconSrc != "" &&
        this.iconSrc.split(".").pop() == "svg"
      ) {
        fabric.loadSVGFromURL(
          this.iconSrc,
          function (objects, options) {
            var icon = fabric.util.groupSVGElements(objects, options);
            icon.set({
              left: 0,
              top: 0,
              shadow: this.iconShadow,
              originX: "center",
              originY: "center",
              objectCaching: false,
              clipTo: function (ctx) {
                try {
                  ctx.rect(
                    -(this.rectObj.width / 2) / icon.scaleX,
                    -(this.rectObj.height / 2) / icon.scaleY,
                    this.rectObj.width / icon.scaleX,
                    this.rectObj.height / icon.scaleY
                  );
                } catch (error) {
                  console.log("error", error);
                }
              }.bind(this),
            });

            // icon.scaleToWidth(Number(this.iconSize));
            if (this._isPortrait(icon.width, icon.height)) {
              icon.scaleToHeight(Number(this.iconSize));
            } else {
              icon.scaleToWidth(Number(this.iconSize));
            }

            this.iconObj = icon;
            this._objects = [this.rectObj, this.iconObj];
            if (this.iconColorArray.length <= 0) {
              this._getAllColorsFromIcon(icon);
            } else {
              this._setAllColorsToIcon(this.iconColorArray);
            }
            this.canvas.renderAll();
          }.bind(this)
        );
      } else {
      }

      this.on("scaled", (e) => {
        this._flag = 0;
      });
      this.on("scaling", (e) => {
        if (e.transform.action == "scale") {
          if (this._flag == 0) {
            // store width of object once while scaling start
            this._width = this.getScaledWidth();
            this._iconSize = this.iconObj.getScaledWidth();
            this._flag = 1;
          }
          // calculate original scale from current width and width that we store at first time.
          let originalScaleX = this.getScaledWidth() / this._width;
          var newWidth = parseInt("" + this._iconSize * originalScaleX, 10);

          // this.iconObj.scaleToHeight(newWidth);
          this.iconObj.scaleToWidth(newWidth);
          /* this.iconObj.set({
            scaleX: (this.iconObj.scaleX).toFixed(2),
            scaleY: (this.iconObj.scaleY).toFixed(2)
          }) */
          this.iconSize = newWidth;
        }

        this._recalcIconPosition(true);
      });
    },
    _isPortrait: function (width, height) {
      return height > width + height / 6;
    },
    _isLandscape: function (width, height) {
      width > height + width / 6;
    },
    _isSquare: function (width, height) {
      return width <= height + width / 6 && height <= width + height / 6;
    },
    _recalcIconPosition: function (isFromScaling = false) {
      var minwidth =
        this.iconObj.getScaledWidth() +
        this.buttonStrokeWidth * 2 +
        this.paddingOffset * 2;
      var minheight =
        this.iconObj.getScaledHeight() +
        this.buttonStrokeWidth * 2 +
        this.paddingOffset * 2;
      var objectHeight = this.getScaledHeight();
      var objectWidth = this.getScaledWidth();

      if (objectWidth <= minwidth) {
        this.width = minwidth + 1;
        this._scaleX = this.scaleX;
        this.scaleX = 1;
        if (isFromScaling) {
          this.left = this._lastGoodLeft;
          this.top = this._lastGoodTop;
        }
      }

      if (objectHeight <= minheight) {
        this.height = minheight + 1;
        this._scaleY = this.scaleY;
        this.scaleY = 1;
        if (isFromScaling) {
          this.left = this._lastGoodLeft;
          this.top = this._lastGoodTop;
        }
      }

      this.width = this.width * this.scaleX;
      this.height = this.height * this.scaleY;
      this._scaleX = this.scaleX;
      this._scaleY = this.scaleY;
      this.scaleY = 1;
      this.scaleX = 1;
      if (isFromScaling) {
        this._lastGoodTop = this.top;
        this._lastGoodLeft = this.left;
      }

      this.rectObj.set({
        width: this.width,
        height: this.height,
        angle: 0,
      });
      this.setCoords();
    },
    transformProperty: function (object) {
      var iconPropsList = "iconSize iconColorArray iconShadow".split(" ");
      var rectPropsList = "width height buttonRx  buttonRy buttonFill  buttonStrokeColor buttonStrokeWidth buttonShadow".split(
        " "
      );

      var objPropsList = "top left width height originX originY angle shadow lockScalingFlip".split(
        " "
      );

      var iconReplaceProps = [{ prop: "iconShadow", replaceProp: "shadow" }];

      var rectReplaceProps = [
        { prop: "buttonFill", replaceProp: "fill" },
        { prop: "buttonRx", replaceProp: "rx" },
        { prop: "buttonRy", replaceProp: "ry" },
        { prop: "buttonStrokeColor", replaceProp: "stroke" },
        { prop: "buttonStrokeWidth", replaceProp: "strokeWidth" },
        { prop: "buttonShadow", replaceProp: "shadow" },
      ];

      var objectProperty = {},
        iconProperty = {},
        rectProperty = {};

      for (var key in object) {
        if (object.hasOwnProperty(key)) {
          if (iconPropsList.indexOf(key) != -1) {
            var replacement = iconReplaceProps.filter((element) => {
              return element.prop == key;
            });
            if (replacement.length > 0) {
              iconProperty[replacement[0].replaceProp] = object[key];
            } else {
              iconProperty[key] = object[key];
            }
          }
          if (rectPropsList.indexOf(key) != -1) {
            var replacement = rectReplaceProps.filter((element) => {
              return element.prop == key;
            });
            if (replacement.length > 0) {
              rectProperty[replacement[0].replaceProp] = object[key];
            } else {
              rectProperty[key] = object[key];
            }
          }
          if (objPropsList.indexOf(key) != -1) {
            objectProperty[key] = object[key];
          }
        }
      }
      return {
        iconProperty: iconProperty,
        rectProperty: rectProperty,
        objectProperty: objectProperty,
      };
    },
    setButtonProp: async function (object) {
      if (typeof object === "object") {
        this.set(object);
        var props = this.transformProperty(object);
        this._setObject(props.objectProperty);
        this.rectObj._setObject(props.rectProperty);
        this._setIconProperties(props.iconProperty);
        this.canvas.renderAll();
        this._recalcIconPosition();
      }
      this.setCoords();
      return this;
    },
    _setIconProperties(properties) {
      for (let key in properties) {
        if (properties.hasOwnProperty(key)) {
          switch (key) {
            case "iconSize":
              // this.iconObj.scaleToWidth(properties[key]);
              if (this._isPortrait(this.iconObj.width, this.iconObj.height)) {
                this.iconObj.scaleToHeight(properties[key]);
              } else {
                this.iconObj.scaleToWidth(properties[key]);
              }
              /* this.iconObj.set({
                scaleX: this.iconObj.scaleX.toFixed(2),
                scaleY: this.iconObj.scaleY.toFixed(2),
              }); */
              this.iconSize = properties[key];
              this._recalcIconPosition();
              break;
            case "iconColorArray":
              this._setAllColorsToIcon(properties[key]);
              break;
            case "shadow":
              console.log("icon shadow set");
              this.iconObj.set({
                [key]: properties[key],
              });
              break;
          }
        }
      }
    },
    _getAllColorsFromIcon(icon) {
      if (icon.type == "group") {
        var colorArray = [];
        var tmparray = [];
        var stringConstructor = "test".constructor; // (check if condition of path.fill) string contructor is used for prevent crash of color picker when gradient color detected.
        icon._objects.forEach((path, pathIndex) => {
          colorArray.forEach((elem, i) => {
            tmparray.push(elem.color);
          });
          if (
            path.fill != "" &&
            path.fill != null &&
            tmparray.indexOf(path.fill) == -1 &&
            path.fill.constructor === stringConstructor
          ) {
            colorArray.push({
              color: path.fill,
              indices: [pathIndex],
            });
          } else if (
            tmparray.indexOf(path.fill) != -1 &&
            path.fill.constructor === stringConstructor
          ) {
            colorArray.forEach((colorElem, index) => {
              if (colorElem.color == path.fill) {
                colorElem.indices.push(pathIndex);
              }
            });
          }
        });
        this.iconColorArray = [];
        this.iconColorArray = colorArray;
      } else if (icon.type == "path") {
        this.iconColorArray = [];
        this.iconColorArray.push({
          color: icon.fill,
          indices: [0],
        });
      }
    },
    _setAllColorsToIcon(colorArray) {
      let icon = this.iconObj;
      if (icon.type == "group") {
        colorArray.forEach((color) => {
          color.indices.forEach((pathIndex) => {
            icon._objects[pathIndex].set({ fill: color.color });
          });
        });
        this.iconColorArray = [];
        this.iconColorArray = colorArray;
      } else if (icon.type == "path") {
        icon.fill = colorArray[0].color;
        this.iconColorArray = [];
        this.iconColorArray = colorArray;
        this.canvas.renderAll();
      }
    },
    toObject: function (propertiesToInclude) {
      // This function is used for serialize this object. (used for create json)
      // not inlclude this.iconObj and this.rectObj into json because when object will load from json, init fucntion of this class is called and it will assign this two object textObj and rectObj again.
      var obj = this.callSuper(
        "toObject",
        [
          "objectCaching",

          "buttonRx",
          "buttonRy",
          "buttonFill",
          "buttonStrokeColor",
          "buttonStrokeWidth",
          "buttonShadow",
          "iconSrc",
          "iconSize",
          "iconShadow",
          "iconData",
          "iconColorArray",
        ].concat(propertiesToInclude)
      );
      // delete objects array from json because then object load from json, Init function will call. which will automatically re-assign object and assign _object array.
      delete obj.objects;
      return obj;
    },
  });

  fabric.IconButton.fromObject = function (object, callback) {
    // This function is used for deserialize json and convert object json into button object again. (called when we call loadFromJson() fucntion on canvas)
    return fabric.Object._fromObject("IconButton", object, callback, "iconSrc");
  };

  fabric.IconButton.async = true;
})(fabric);


/***/ }),

/***/ "./src/app/fabric_text_button.js":
/*!***************************************!*\
  !*** ./src/app/fabric_text_button.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (fabric) {
  "use strict";

  fabric.Button = fabric.util.createClass(fabric.Group, {
    type: "button",
    stateProperties: fabric.Textbox.prototype.stateProperties.concat(
      "text",
      "buttonRx",
      "buttonRy",
      "buttonFill",
      "paddingOffset",
      "buttonStrokeWidth",
      "buttonStrokeColor",
      "buttonShadow"
    ),
    top: 0,
    left: 0,
    width: 0,
    height: 0,
    textObj: null,
    rectObj: null,
    originX: "left",
    originY: "top",
    angle: 0,
    shadow: null,
    lockScalingFlip: true,

    text: "Sample Text",
    color: "#000",
    fontName: "calibri",
    fontSrc: "",
    textOpacity: 1,
    charSpacing: 1,
    lineHeight: 1,
    fontSize: 18,
    textAlign: "center",
    stroke: "#000",
    strokeWidth: 0,
    backgroundColor: "",
    textShadow: null,
    paddingOffset: 5,
    underline: false,
    linethrough: false,
    overline: false,
    fontStyle: "normal",
    fontWeight: "normal",

    buttonRx: 0,
    buttonRy: 0,
    buttonFill: "",
    buttonStrokeColor: "#000000",
    buttonStrokeWidth: 0,
    buttonShadow: null,

    _textTop: 0,
    _textLeft: 0,
    _textAngle: 0,
    _width: 1,
    _flag: 0,
    _fontSize: 18,
    _lastGoodLeft: 0,
    _lastGoodTop: 0,
    _initialWidth: null,
    _initialHeight: null,
    _textLength: null,
    _objectSelectable: true,
    noScaleCache: true,
    objectCaching: false,
    lockScalingFlip: true,
    cacheProperties: fabric.Text.prototype.cacheProperties.concat(
      "buttonRx",
      "buttonRy",
      "buttonFill",
      "paddingOffset",
      "buttonStrokeColor",
      "buttonStrokeWidth",
      "textShadow",
      "buttonShadow"
    ),
    initialize: function (text, options) {
      options.top ? (options.top = Math.round(options.top)) : null;
      options.left ? (options.left = Math.round(options.left)) : null;
      options.width ? (options.width = Math.round(options.width)) : null;
      options.height ? (options.height = Math.round(options.height)) : null;
      options.fontSize
        ? (options.fontSize = Math.round(options.fontSize))
        : null;
      this.set(options);
      this.set({ text: text });
      this.rectObj = new fabric.Rect({
        top: 0,
        left: 0,
        width: this.width,
        height: this.height,
        fill: this.buttonFill,
        rx: this.buttonRx,
        ry: this.buttonRy,
        stroke: this.buttonStrokeColor,
        strokeWidth: this.buttonStrokeWidth,
        shadow: this.buttonShadow,
        originX: "center",
        originY: "center",
      });
      this.textObj = new fabric.IText(this.text, {
        top: 0,
        left: 0,
        fill: this.color,
        fontSize: Math.round(this.fontSize),
        width: Math.round(this.width),
        stroke: this.stroke,
        strokeWidth: this.strokeWidth,
        shadow: this.textShadow,
        textAlign: this.textAlign,
        backgroundColor: this.backgroundColor,
        fontFamily: this.fontName,
        fontName: this.fontName,
        fontSrc: this.fontSrc,
        opacity: this.textOpacity,
        charSpacing: this.charSpacing,
        lineHeight: this.lineHeight,
        underline: this.underline,
        linethrough: this.linethrough,
        overline: this.overline,
        fontStyle: this.fontStyle,
        fontWeight: this.fontWeight,
        originX: "center",
        originY: "center",
        objectCaching: false,
        clipTo: function (ctx) {
          ctx.rect(
            -this.rectObj.width / 2,
            -this.rectObj.height / 2,
            this.rectObj.width,
            this.rectObj.height
          );
        }.bind(this),
      });
      this.on("rotating", (e) => {
        this._recalcTextPosition();
      });
      this.on("added", function () {
        this.textObj.set({
          height: Math.round(this.textObj.height),
          width: Math.round(this.textObj.width),
        });
        this._objects = [this.rectObj, this.textObj];
        this._recalcTextPosition();
        this.setCoords();
      });
      this.on("mousedblclick", (e) => {
        if (this.selectable) {
          var mGroup = this.calcTransformMatrix(true);
          var mObject = this.textObj.calcTransformMatrix(true);
          var mTotal = fabric.util.multiplyTransformMatrices(mGroup, mObject);
          var matrix = fabric.util.transformPoint({ x: 0, y: 0 }, mTotal);
          this._textTop = this.textObj.top;
          this._textLeft = this.textObj.left;
          this._textAngle = this.angle;
          this._initialWidth = this.getScaledWidth();
          this._initialHeight = this.getScaledHeight();
          this._textLength = this.textObj.text.length;
          this._objects.pop();
          this.textObj.set({
            top: Math.round(matrix.y),
            left: Math.round(matrix.x),
            angle: this._textAngle,
          });
          this.canvas.add(this.textObj);
          this.textObj.selectable = true;
          this.textObj.evented = true;
          this.canvas.setActiveObject(this.textObj);
          this.textObj.enterEditing();
          this._objectSelectable = this.selectable;
          this.selectable = false;
        }
      });
      this.textObj.on("changed", async (e) => {
        await this._textChange();
        let buttonBounds = await this.getBoundingRect();
        let x = buttonBounds.left + buttonBounds.width / 2,
          y = buttonBounds.top + buttonBounds.height / 2;
        this.textObj.set({
          left: Math.round(x),
          top: Math.round(y),
        });
        this.set({ text: this.textObj.text });
        this.textObj.setCoords();
      });
      this.textObj.on("editing:exited", () => {
        this.textObj.top = Math.round(this._textTop);
        this.textObj.left = Math.round(this._textLeft);
        this.textObj.angle = 0;
        this._objects.push(this.textObj);
        this.canvas.remove(this.textObj);
        this.textObj.selectable = false;
        this.textObj.evented = false;
        this.selectable = this._objectSelectable;
        this._textLength = null;
        this._initialWidth = null;
        this._initialHeight = null;
        this._recalcTextPosition();
      });
      this.on("scaled", (e) => {
        this._flag = 0;
      });
      this.on("scaling", (e) => {
        if (e.transform.action == "scale") {
          if (this._flag == 0) {
            // store width of object once while scaling start
            this._width = this.getScaledWidth();
            this._fontSize = Math.round(this.textObj.fontSize);
            this._flag = 1;
          }
          // calculate original scale from current width and width that we store at first time.
          let originalScaleX = this.getScaledWidth() / this._width;
          var newFontSize = parseInt("" + this._fontSize * originalScaleX, 10);
          this.textObj.set({
            fontSize: newFontSize,
          });
          this.fontSize = newFontSize;
        }
        this._recalcTextPosition(true);
      });
      this.on("_TextEditingEnter", (e) => {
        this._initialWidth = this.getScaledWidth();
        this._initialHeight = this.getScaledHeight();
        this._textLength = this.textObj.text.length;
      });
      this.on("_TextChange", (e) => {
        this._textChange();
      });
      this.on("_TextEditingExit", (e) => {
        this._textLength = null;
        this._initialWidth = null;
        this._initialHeight = null;
      });
    },
    setButtonProp: async function (object) {
      if (typeof object === "object") {
        this.set(object);
        var props = this.transformProperty(object);
        this._setObject(props.objectProperty);
        this.rectObj._setObject(props.rectProperty);
        this.textObj._setObject(props.textProperty);
        this.canvas.renderAll();
        this._recalcTextPosition();
      }
      this.setCoords();
      return this;
    },
    _recalcTextPosition: async function (isFromScaling = false) {
      // for textbox Object
      // var minwidth =
      //   this.textObj.dynamicMinWidth +
      //   this.buttonStrokeWidth * 2 +
      //   this.paddingOffset * 2;

      // for IText Object
      var minwidth =
        this.textObj.getScaledWidth() +
        this.buttonStrokeWidth * 2 +
        this.paddingOffset * 2;
      var minheight =
        this.textObj.getScaledHeight() +
        this.buttonStrokeWidth * 2 +
        this.paddingOffset * 2;
      var objectHeight = await this.getScaledHeight();
      var objectWidth = await this.getScaledWidth();

      if (objectWidth <= minwidth) {
        this.width = minwidth + 1;
        this.scaleX = 1;
        if (isFromScaling) {
          this.left = this._lastGoodLeft;
          this.top = this._lastGoodTop;
        }
      }

      if (objectHeight <= minheight) {
        this.height = minheight + 1;
        this.scaleY = 1;
        if (isFromScaling) {
          this.left = this._lastGoodLeft;
          this.top = this._lastGoodTop;
        }
      }

      this.width = Math.round(this.width * this.scaleX);
      this.height = Math.round(this.height * this.scaleY);
      this.scaleY = 1;
      this.scaleX = 1;
      if (isFromScaling) {
        this._lastGoodTop = Math.round(this.top);
        this._lastGoodLeft = Math.round(this.left);
      }

      this.rectObj.set({
        width: this.width,
        height: this.height,
        angle: 0,
      });
      // uncomment for use TextBox object
      // var objScaledWidth = this.getScaledWidth();
      // this.textObj.width =
      //   objScaledWidth - this.buttonStrokeWidth * 2 - this.paddingOffset * 2;

      this.setCoords();
    },
    _recalcButton: function () {
      var textWidth =
        this.textObj.getScaledWidth() +
        this.buttonStrokeWidth * 2 +
        this.paddingOffset * 2;
      var textHeight =
        this.textObj.getScaledHeight() +
        this.buttonStrokeWidth * 2 +
        this.paddingOffset * 2;
      var buttonWidth = this.getScaledWidth();
      var buttonHeight = this.getScaledHeight();
      if (textWidth < buttonWidth && buttonWidth > this._initialWidth) {
        this.width = textWidth + this.paddingOffset * 2;
        this._scaleX = this.scaleX;
        this.scaleX = 1;
        this.rectObj.set({
          width: this.width,
          height: this.height,
          angle: 0,
        });
        this.setCoords();
      }
      if (textHeight < buttonHeight) {
        // if (textHeight < buttonHeight && buttonHeight > this._initialHeight) {
        this.height = textHeight + 1;
        this._scaleY = this.scaleY;
        this.scaleY = 1;
        this.rectObj.set({
          width: this.width,
          height: this.height,
          angle: 0,
        });
        this.setCoords();
      }
    },
    _textChange: async function () {
      if (this.textObj.text.length > this._textLength) {
        this._textLength = this.textObj.text.length;
        await this._recalcTextPosition();
      } else {
        this._textLength = this.textObj.text.length;
        this._recalcButton();
        this._recalcTextPosition();
      }
      await this.set({ text: this.textObj.text });
      await this.textObj.setCoords();
    },
    transformProperty: function (object) {
      var textPropsList = "text color textOpacity fontName fontSrc opacity charSpacing lineHeight fontSize textAlign stroke strokeWidth backgroundColor textShadow paddingOffset underline linethrough overline fontStyle fontWeight".split(
        " "
      );
      var rectPropsList = "width height buttonRx  buttonRy buttonFill  buttonStrokeColor buttonStrokeWidth buttonShadow".split(
        " "
      );

      var objPropsList = "top left width height originX originY angle shadow lockScalingFlip".split(
        " "
      );

      var textReplaceProps = [
        { prop: "textOpacity", replaceProp: "opacity" },
        { prop: "color", replaceProp: "fill" },
        { prop: "textShadow", replaceProp: "shadow" },
        { prop: "fontName", replaceProp: "fontFamily" },
      ];

      var rectReplaceProps = [
        { prop: "buttonFill", replaceProp: "fill" },
        { prop: "buttonRx", replaceProp: "rx" },
        { prop: "buttonRy", replaceProp: "ry" },
        { prop: "buttonStrokeColor", replaceProp: "stroke" },
        { prop: "buttonStrokeWidth", replaceProp: "strokeWidth" },
        { prop: "buttonShadow", replaceProp: "shadow" },
      ];

      var objectProperty = {},
        textProperty = {},
        rectProperty = {};

      for (var key in object) {
        if (object.hasOwnProperty(key)) {
          if (textPropsList.indexOf(key) != -1) {
            var replacement = textReplaceProps.filter((element) => {
              return element.prop == key;
            });
            if (replacement.length > 0) {
              textProperty[replacement[0].replaceProp] = object[key];
            } else {
              textProperty[key] = object[key];
            }
          }
          if (rectPropsList.indexOf(key) != -1) {
            var replacement = rectReplaceProps.filter((element) => {
              return element.prop == key;
            });
            if (replacement.length > 0) {
              rectProperty[replacement[0].replaceProp] = object[key];
            } else {
              rectProperty[key] = object[key];
            }
          }
          if (objPropsList.indexOf(key) != -1) {
            objectProperty[key] = object[key];
          }
        }
      }
      return {
        textProperty: textProperty,
        rectProperty: rectProperty,
        objectProperty: objectProperty,
      };
    },
    toObject: function (propertiesToInclude) {
      // This function is used for serialize this object. (used for create json)
      // not inlclude this.textObj and this.rectObj into json because when object will load from json, init fucntion of this class is called and it will assign this two object textObj and rectObj again.
      var obj = this.callSuper(
        "toObject",
        [
          "objectCaching",
          // "textObj",
          // "rectObj",

          "text",
          "color",
          "fontName",
          "fontSrc",
          "textOpacity",
          "charSpacing",
          "lineHeight",
          "fontSize",
          "textAlign",
          "stroke",
          "strokeWidth",
          "backgroundColor",
          "textShadow",
          "paddingOffset",
          "underline",
          "linethrough",
          "overline",
          "fontStyle",
          "fontWeight",

          "buttonRx",
          "buttonRy",
          "buttonFill",
          "buttonStrokeColor",
          "buttonStrokeWidth",
          "buttonShadow",
        ].concat(propertiesToInclude)
      );
      // delete objects array from json because then object load from json, Init function will call. which will automatically re-assign object and assign _object array.
      delete obj.objects;
      return obj;
    },
  });

  fabric.Button.fromObject = function (object, callback) {
    // This function is used for deserialize json and convert object json into button object again. (called when we call loadFromJson() fucntion on canvas)
    return fabric.Object._fromObject("Button", object, callback, "text");
  };

  fabric.Button.async = true;
})(fabric);


/***/ }),

/***/ "./src/app/generator-experiment/generator-experiment.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/generator-experiment/generator-experiment.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".display-none {\n  display: none !important;\n  margin: 0px !important;\n}\n\n.display-block {\n  display: initial !important;\n  margin: initial !important;\n}\n\n.button-item {\n  width: calc(50% - 10px) !important;\n  padding: 0px !important;\n}\n\n.four-col .button-item {\n  width: calc(25% - 10px) !important;\n}\n\n.button-item img {\n  width: 100%;\n}\n\n/* .exit-button {\n  background-color: #db4d40 !important;\n} */\n\n/* tab css */\n\n.vertical-tab-button-container {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  width: 75px;\n  z-index: 10;\n  background-color: var(--dark-black);\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n\n.tab-button {\n  background: transparent;\n  border: 0px solid transparent;\n  color: white;\n  width: 100%;\n  cursor: pointer;\n  padding: 10px 0px;\n  outline: none;\n}\n\n.tab-icon {\n  width: 35px;\n}\n\n.tab-title {\n  margin: 0px;\n  padding: 0px;\n  font-size: 11px;\n}\n\n.tablinks.active {\n  background-color: var(--light-black);\n  position: relative;\n}\n\n.tablinks.active::after {\n  content: \"\";\n  position: absolute;\n  top: -8px;\n  right: -2px;\n  width: 10px;\n  height: 10px;\n  background-image: radial-gradient(circle at top left, #fff0 50%, var(--light-black) 60%);\n}\n\n.tablinks.active::before {\n  content: \"\";\n  position: absolute;\n  bottom: -8px;\n  right: -2px;\n  width: 10px;\n  height: 10px;\n  background-image: radial-gradient(circle at bottom left,\n      #fff0 50%,\n      var(--light-black) 60%);\n}\n\n.tabcontent {\n  height: calc(100% - 10px);\n}\n\n/* tab css over here */\n\n/* background Tabs */\n\n.background-tabs-container {\n  display: flex;\n  flex-wrap: nowrap;\n}\n\n.background-tabs-links.active:hover {\n  background-color: var(--dark-purple);\n}\n\n.background-tabs-links.active {\n  background-color: var(--dark-purple);\n}\n\n.background-tabs-links {\n  background: var(--dark-black);\n  outline: none;\n  border: 0px solid transparent;\n  cursor: pointer;\n  flex: 1;\n  color: white;\n  border-radius: 3px;\n  padding: 10px;\n  margin: 10px;\n  font-size: 15px;\n  transition: 0.5s;\n}\n\n.background-tabs-links:hover {\n  background: rgba(255, 255, 255, 0.05);\n}\n\n.tab-button-btn-background {\n  width: 50%;\n  margin: 0px;\n  margin-bottom: 15px;\n  font-size: 12px;\n  padding: 8px;\n  border-radius: 0px;\n}\n\n/* property panel css */\n\n.property-panel {\n  background-color: var(--light-black);\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  z-index: 8;\n  overflow: hidden;\n}\n\n/* editor tab wrappers */\n\n.background-tab-wrapper,\n.image-tab-wrapper,\n.shape-tab-wrapper,\n.heading-tab-wrapper {\n  height: calc(100% - 20px);\n  width: calc(100% - 20px);\n  padding: 10px;\n}\n\n.add-heading-class {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  padding: 0px;\n  line-height: 1;\n  width: 100%;\n  background-color: transparent;\n  border: 0px solid transparent;\n  outline: none;\n  margin: 5px 0px;\n  cursor: pointer;\n  color: white;\n  border-radius: 3px;\n  transition: 0.2s;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n}\n\n.add-heading-class:hover {\n  background-color: rgba(255, 255, 255, 0.05);\n}\n\n.add-heading-class h1 {\n  margin: 10px;\n  font-size: 30px;\n}\n\n.add-heading-class h2 {\n  margin: 10px;\n  font-size: 20px;\n}\n\n.add-heading-class h3 {\n  margin: 10px;\n  font-size: 18px;\n}\n\n/* sidebar toggle css */\n\n.shown-left-sidebar {\n  left: 75px !important;\n}\n\n.shown-right-sidebar {\n  right: 0px !important;\n}\n\n.shown {\n  width: 350px;\n}\n\n.hidden-left {\n  width: 75px !important;\n}\n\n.hidden-left .left-wrapper {\n  padding: 0px;\n  overflow: hidden;\n}\n\n.hidden {\n  width: 0px !important;\n}\n\n.toggle-right-sidebar-button {\n  left: -15px;\n  border-radius: 20px 0px 0px 20px !important;\n}\n\n.dark-button {\n  background-color: var(--dark-black) !important;\n}\n\n.toggle-left-sidebar-button.dark-button::before {\n  background-image: radial-gradient(circle at bottom right,\n      #fff0 50%,\n      var(--dark-black) 60%);\n}\n\n.toggle-left-sidebar-button.dark-button::after {\n  background-image: radial-gradient(circle at top right,\n      #fff0 50%,\n      var(--dark-black) 60%);\n}\n\n.toggle-right-sidebar-button,\n.toggle-left-sidebar-button {\n  background-color: var(--light-black);\n  border: 0px solid transparent;\n  border-radius: 0px 20px 20px 0px;\n  width: 15px;\n  height: 100px;\n  padding: 0px;\n  position: absolute;\n  right: -14px;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%);\n  z-index: 1;\n  outline: none;\n  cursor: pointer;\n}\n\n.toggle-right-sidebar-button:after {\n  content: \"\";\n  position: absolute;\n  top: -7px;\n  right: -2px;\n  width: 9px;\n  -webkit-transform: rotate(-9deg);\n          transform: rotate(-9deg);\n  height: 10px;\n  background-image: radial-gradient(circle at top left, #fff0 50%, var(--light-black) 60%);\n}\n\n.toggle-right-sidebar-button::before {\n  content: \"\";\n  position: absolute;\n  bottom: -7px;\n  right: -2px;\n  width: 9px;\n  -webkit-transform: rotate(9deg);\n          transform: rotate(9deg);\n  height: 10px;\n  background-image: radial-gradient(circle at bottom left,\n      #fff0 50%,\n      var(--light-black) 60%);\n}\n\n.toggle-left-sidebar-button::after {\n  content: \"\";\n  position: absolute;\n  top: -7px;\n  left: -1px;\n  width: 9px;\n  -webkit-transform: rotate(9deg);\n          transform: rotate(9deg);\n  height: 10px;\n  background-image: radial-gradient(circle at top right,\n      #fff0 50%,\n      var(--light-black) 60%);\n}\n\n.toggle-left-sidebar-button::before {\n  content: \"\";\n  position: absolute;\n  bottom: -7px;\n  left: -1px;\n  width: 9px;\n  -webkit-transform: rotate(-9deg);\n          transform: rotate(-9deg);\n  height: 10px;\n  background-image: radial-gradient(circle at bottom right,\n      #fff0 50%,\n      var(--light-black) 60%);\n}\n\n.toggle-bar-icon {\n  width: 15px;\n  height: 15px;\n}\n\n/* loader css */\n\n.loader-overlay {\n  background-color: #000000e6;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 20;\n  display: flex;\n}\n\n.error-action-button {\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  background: transparent;\n  border: 0px;\n  padding: 0px;\n  cursor: pointer;\n  outline: none;\n}\n\n.error-action-icon {\n  width: 15px;\n  height: 15px;\n}\n\n.error-dialog.show {\n  right: 15px !important;\n  opacity: 1 !important;\n}\n\n.error-dialog.hide {\n  right: -385px;\n  opacity: 0;\n}\n\n.error-dialog {\n  position: absolute;\n  background-color: #db4d40;\n  color: white;\n  padding: 20px;\n  z-index: 15;\n  max-width: 163px;\n  min-width: 285px;\n  border-radius: 5px;\n  top: 30px;\n  right: 15px;\n  box-shadow: 0px 0px 35px 10px #ff000059;\n  font-size: 15px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  transition-property: all;\n  transition-duration: 0.5s;\n  transition-timing-function: cubic-bezier(0.37, 0.53, 0.58, 1);\n  transition-delay: 0s;\n}\n\n/* loader css finish here */\n\n.header-style-left {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 10;\n  height: 60px;\n  line-height: 56px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.35);\n  background: linear-gradient(90deg, var(--dark-purple) 0, var(--light-purple) 100%);\n}\n\n.header-style {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 10;\n  height: 60px;\n  line-height: 56px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.35);\n  background: linear-gradient(90deg, var(--dark-purple) 0, var(--light-purple) 100%);\n}\n\n.editor-left-sidebar {\n  width: 420px;\n  height: 100%;\n  /* background: var(--light-black); */\n  background: var(--milk-gray);\n  display: inline-block;\n  /* transition: width 0.2s; */\n  transition-property: all;\n  transition-duration: 0.2s;\n  transition-timing-function: ease-in-out;\n  /* position: relative; */\n  position: absolute;\n}\n\n.left-wrapper {\n  left: 75px !important;\n  width: calc(100% - 75px) !important;\n}\n\n.right-wrapper,\n.left-wrapper {\n  width: 100%;\n  height: 100%;\n  background: var(--light-black);\n  overflow: hidden;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 2;\n}\n\n.property-panel-wrapper {\n  min-width: calc(350px - 25px);\n  padding: 10px;\n  height: calc(100% - 20px);\n}\n\n.property-panel-back-button:hover {\n  background-color: #1e1e1e42;\n}\n\n.property-panel-back-button {\n  background-color: transparent;\n  border: 0px solid;\n  outline: none;\n  cursor: pointer;\n  padding: 5px;\n  background: transparent;\n  border-radius: 3px;\n  color: white;\n  transition: 0.2s;\n  display: flex;\n}\n\n.back-button-icon {\n  width: 10px;\n  height: 15px;\n  margin: 0px 5px;\n}\n\n.move-right {\n  float: right;\n}\n\n.property-panel-content {\n  width: calc(100% - 20px);\n  height: calc(100% - 65px);\n  margin-top: 15px;\n  overflow-y: auto;\n  overflow-x: hidden;\n  padding: 10px;\n}\n\n.inner-left-wrapper {\n  min-width: calc(350px - 15px);\n  height: 100%;\n  padding: 5px;\n}\n\n.inner-right-wrapper {\n  padding: 5px;\n  width: calc(100% - 10px);\n  min-width: calc(265px - 10px);\n  height: 100%;\n  position: absolute;\n  right: 0;\n}\n\n.editor-right-sidebar {\n  width: 232px;\n  height: 100%;\n  background: var(--light-black);\n  display: inline-block;\n  /* overflow: visible; */\n  /* overflow-y: auto;\n  overflow-x: hidden; */\n  vertical-align: top;\n  transition: width 0.2s;\n  scrollbar-color: #fff #0009;\n  position: absolute;\n  right: 0px;\n}\n\n.editor-container {\n  position: absolute;\n  left: 420px;\n  right: 265px;\n  /* width: calc(100% - 615px); */\n  display: inline-block;\n  height: 100%;\n  overflow: overlay;\n  background-color: var(--milk-gray);\n  /* position: relative; */\n  z-index: 0;\n  vertical-align: top;\n  transition: 0.2s;\n}\n\n.main-wrapper {\n  position: absolute;\n  top: 60px;\n  height: calc(100% - 60px);\n  width: 100%;\n  bottom: 0;\n}\n\n.add-element-heading {\n  font-size: 16px;\n  color: white;\n  font-family: sans-serif;\n  text-align: center;\n  font-weight: lighter;\n  /* border-bottom: 1px solid #0f1934; */\n  background: #1e1e1e;\n  padding: 15px 0px;\n  margin: 0px;\n}\n\n.layer-cotainer {\n  height: 100%;\n}\n\n.layer-title {\n  font-size: 16px;\n  background: #1e1e1e;\n  margin: 0px;\n  padding: 10px;\n  color: white;\n  font-family: \"Roboto\", Helvetica, Arial, sans-serif;\n  min-height: 35px;\n  line-height: 35px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.layer-item {\n  margin: 15px;\n  min-height: 20px;\n  background-color: var(--dark-black);\n  color: white;\n  border-radius: 5px;\n  /* box-shadow: 0 10px 20px 0 rgb(37, 43, 64); */\n  text-align: center;\n  padding: 10px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  cursor: pointer;\n  font-family: \"Roboto\", Helvetica, Arial, sans-serif;\n  position: relative;\n}\n\n.layer-thumbnail {\n  max-width: 125px;\n}\n\n.layer-title-container {\n  overflow: hidden;\n  max-width: calc(100% - 30px);\n}\n\n.layer-title-container span {\n  white-space: nowrap;\n}\n\n.custom-position {\n  position: absolute;\n  top: 5px;\n  right: 5px;\n}\n\n.no-data-margin {\n  margin: 15px;\n}\n\n.overflow-y-scroll {\n  overflow-x: hidden;\n  overflow-y: auto;\n  height: calc(100% - 55px);\n}\n\n.activated-layer {\n  background-color: var(--dark-purple);\n}\n\n.deselect-button {\n  background: var(--light-black);\n  border: 0px;\n  padding: 5px;\n  border-radius: 5px;\n  outline: none;\n  /* box-shadow: 0 10px 20px 0 #000000; */\n  box-shadow:\n    0.9px 1.4px 1.4px rgba(0, 0, 0, 0.042),\n    2.2px 3.5px 3.4px rgba(0, 0, 0, 0.061),\n    4.1px 6.5px 6.4px rgba(0, 0, 0, 0.075),\n    7.4px 11.6px 11.4px rgba(0, 0, 0, 0.089),\n    13.8px 21.7px 21.3px rgba(0, 0, 0, 0.108),\n    33px 52px 51px rgba(0, 0, 0, 0.15);\n  float: right;\n  transition: 0.5s;\n  width: 30px;\n  overflow: hidden;\n  display: flex;\n  flex-wrap: nowrap;\n  cursor: pointer;\n}\n\n.custom-width {\n  width: 110px !important;\n  float: right;\n  margin: 15px;\n}\n\n.deselect-button:hover {\n  width: 90px;\n}\n\n.deselect-lable {\n  color: white;\n  line-height: 18px;\n  white-space: nowrap;\n}\n\n.deselect-icon {\n  width: 20px;\n  height: 20px;\n  vertical-align: text-top;\n  min-width: 20px;\n  min-height: 20px;\n  margin: 0px 5px 0px 0px;\n}\n\n.single-control-container {\n  display: flex;\n  padding-top: 5px;\n  margin-bottom: 10px;\n  width: 100%;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.font-selection-box {\n  background-color: #1e1e1e;\n  border: transparent;\n  border-radius: 5px;\n  padding: 5px;\n  color: white;\n  outline: none;\n  width: 245px;\n}\n\n.single-control-lable {\n  color: white;\n  font-family: \"Roboto\", Helvetica, Arial, sans-serif;\n  font-size: 13px;\n}\n\n.shape-list-container {\n  max-height: calc(100% - 60px);\n  overflow: auto;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.shape-item-image {\n  padding: 5px;\n  border-radius: 5px;\n  background: var(--dark-purple)00;\n  color: white;\n  outline: none;\n  cursor: pointer;\n  border: 0px solid transparent;\n}\n\n.replace-mode {\n  max-height: calc(100% - 90px) !important;\n}\n\n.image-list-container {\n  max-height: calc(100% - 65px);\n  overflow: auto;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.text-editor-container {\n  padding: 15px;\n  max-height: calc(100% - 78px);\n  overflow: auto;\n}\n\n.text-value-container {\n  font-size: 13px;\n  font-weight: 500;\n  width: calc(100% - 85px);\n  height: 85px;\n  border-radius: 0px;\n  border: 2px solid #dfe0e6;\n  color: #2e3246;\n  resize: none;\n  font-family: \"Roboto\", Helvetica, Arial, sans-serif;\n  outline: none;\n  transition: 0.5s;\n}\n\n.text-size-value-container:focus,\n.text-value-container:focus {\n  border-color: var(--dark-purple);\n}\n\n.text-size-value-container {\n  width: 100px;\n  height: 25px;\n  font-size: 14px;\n  font-weight: 500;\n}\n\n.font-style-buttons {\n  background-color: #1e1e1e;\n  border: none;\n  outline: 0 !important;\n  padding: 5px;\n  width: 30px;\n  height: 30px;\n  border-radius: 5px;\n  margin-left: 5px;\n  cursor: pointer;\n}\n\n.position-type-button-container button:active,\n.font-style-buttons:active {\n  box-shadow: inset 0px 0px 10px var(--light-black);\n}\n\n.font-style-buttons.active {\n  background-color: var(--dark-purple);\n}\n\n/* custom css range slider */\n\n.slider {\n  -webkit-appearance: none;\n  width: calc(100% - 10px);\n  height: 20px;\n  border-radius: 20px;\n  padding: 0px 3px;\n  background: #1e1e1e;\n  outline: none;\n  opacity: 0.7;\n  transition: opacity 0.2s;\n}\n\n.slider:hover {\n  opacity: 1;\n}\n\n.slider::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  appearance: none;\n  width: 15px;\n  height: 15px;\n  border-radius: 15px;\n  background: var(--dark-purple);\n  cursor: pointer;\n}\n\n.slider::-moz-range-thumb {\n  width: 15px;\n  height: 15px;\n  border-radius: 15px;\n  background: var(--dark-purple);\n  cursor: pointer;\n}\n\n/* range slider css finish here */\n\n.color-value-display {\n  width: initial;\n  cursor: pointer;\n  margin-right: 5px;\n  margin-left: 0px;\n}\n\n.color-value-display,\n.range-value {\n  padding: 5px;\n  background-color: #1e1e1e;\n  color: white;\n  font-family: \"Roboto\", Helvetica, Arial, sans-serif;\n  border-radius: 5px;\n  margin-left: 5px;\n  font-size: 10px;\n  min-width: 30px;\n  text-align: center;\n}\n\n.shadow-container {\n  background: #475386;\n  border-radius: 5px;\n  padding: 5px;\n  margin-bottom: 5px;\n}\n\n.color-picker-button {\n  width: 25px;\n  height: 25px;\n  border-radius: 5px;\n}\n\n.position-title {\n  color: white;\n  font-family: \"Roboto\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  margin: 0px;\n  padding: 5px 0px 8px;\n  font-weight: 600;\n  border-bottom: 1px solid white;\n  margin-bottom: 8px;\n}\n\n.applyFor-title {\n  color: #ffffff;\n  font-weight: 900;\n  font-family: \"Roboto\", Helvetica, Arial, sans-serif;\n  font-size: 12px;\n  display: block;\n}\n\n.applyFor-value {\n  color: white;\n  font-family: \"Roboto\", Helvetica, Arial, sans-serif;\n  font-size: 10px;\n}\n\n.position-type-button-container {\n  display: flex;\n  width: 60px;\n  align-items: center;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin: 18px auto;\n}\n\n.position-size-container,\n.position-control-container {\n  flex: 1;\n  text-align: center;\n}\n\n.position-button {\n  margin: 2px !important;\n}\n\n.position-button-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  width: 90px;\n  margin: auto;\n}\n\n.position-control-main-wrapper {\n  display: flex;\n  flex-wrap: nowrap;\n  align-items: center;\n  justify-content: space-around;\n  padding: 10px 0px;\n}\n\n.position-type-button,\n.position-button {\n  width: 25px;\n  height: 25px;\n  border: 0px solid transparent;\n  background-color: #1e1e1e;\n  padding: 5px;\n  margin: 2px 2px;\n  border-radius: 5px;\n  outline: none;\n  display: inline-grid;\n  cursor: pointer;\n}\n\n.position-type-button.active,\n.position-button.active {\n  background-color: var(--dark-purple);\n}\n\n.position-button svg {\n  display: none;\n  fill: white;\n  width: 15px;\n  height: 15px;\n}\n\n.position-button:hover svg,\n.position-button.active svg {\n  display: block;\n}\n\n.tl {\n  -webkit-transform: rotate(225deg);\n          transform: rotate(225deg);\n}\n\n.tr {\n  -webkit-transform: rotate(315deg);\n          transform: rotate(315deg);\n}\n\n.tm {\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.ml {\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.bl {\n  -webkit-transform: rotate(135deg);\n          transform: rotate(135deg);\n}\n\n.bm {\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.br {\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n}\n\n.custom-margin {\n  margin: 10px 0px;\n}\n\n.image-item {\n  width: calc(33% - 20px);\n  max-height: 150px;\n  padding: 5px;\n  background-color: #1e1e1e;\n  border-radius: 5px;\n  margin: 5px;\n  text-align: center;\n  cursor: pointer;\n}\n\n.image-item-image {\n  width: 90%;\n  max-height: 100%;\n  margin: auto;\n}\n\n.back-button {\n  position: absolute;\n  left: 8px;\n  top: 12px;\n  background-color: transparent;\n  border: 0px solid transparent;\n  padding: 5px;\n  border-radius: 5px;\n  outline: none;\n  cursor: pointer;\n  width: 25px;\n  height: 25px;\n}\n\n.canvas-wrapper {\n  height: 100%;\n  display: flex;\n}\n\n#canvas-container {\n  margin: auto;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-around;\n}\n\n#canvas-container .canvas-item-container {\n  margin: 10px !important;\n}\n\n.color-list-container {\n  width: calc(100% - 20px);\n  padding: 10px;\n  margin-bottom: 10px;\n  display: flex;\n  overflow-y: auto;\n  overflow-x: hidden;\n  flex-wrap: wrap;\n  max-height: calc(100% - 75px);\n}\n\n.color-item {\n  width: calc(25% - 10px);\n  padding-bottom: calc(25% - 10px) !important;\n  overflow: hidden;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: all 0.3s;\n  display: -ms-grid;\n  display: grid;\n  position: relative;\n  margin: 5px;\n}\n\n.svg-ic-add-color {\n  position: absolute;\n  width: 20px;\n  height: 20px;\n  top: calc(50% - 10px);\n  left: calc(50% - 10px);\n}\n\n.custom-image-item {\n  background-color: #1e1e1e;\n  padding-bottom: 5px !important;\n  width: calc(33% - 20px);\n  max-height: 150px;\n  text-align: center;\n  padding: 5px;\n}\n\n.background-image {\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.file-upload-control {\n  color: transparent;\n  width: calc(100% - 20px);\n  height: 40px;\n  background-color: #1e1e1e;\n  outline: 0 !important;\n  margin: auto;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\n.file-upload-control::-webkit-file-upload-button {\n  visibility: hidden;\n}\n\n.file-upload-control::before {\n  content: \"Choose Image...\";\n  color: white;\n  display: block;\n  border-radius: 3px;\n  padding: 5px 8px;\n  outline: none;\n  height: 40px;\n  white-space: nowrap;\n  cursor: pointer;\n  line-height: 30px;\n  font-weight: 700;\n  font-size: 13px;\n  text-align: center;\n}\n\n.file-upload-control:active {\n  box-shadow: inset 0px 0px 10px var(--light-black);\n}\n\n/* .file-upload-control:active::before {\n    background: -webkit-linear-gradient(top, #e3e3e3, #f9f9f9);\n  } */\n\n.group-title {\n  color: white;\n  font-weight: 600;\n  font-size: 15px;\n  border-bottom: 1px solid white;\n  display: block;\n  margin-bottom: 10px;\n  padding: 5px 0px 10px 5px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.gradient-control-container {\n  display: flex;\n  width: 100%;\n  align-items: center;\n  justify-content: space-around;\n}\n\n.gradient-type-btn {\n  border: 0px solid transparent;\n  border-radius: 3px;\n  padding: 3px;\n  margin: 0px 2px;\n  background: #00000066;\n  cursor: pointer;\n  outline: none;\n  transition: 0.3s;\n}\n\n.gradient-type-btn.active,\n.gradient-type-btn:hover {\n  background-color: var(--dark-purple);\n}\n\n.gradient-icon {\n  width: 20px;\n  height: 20px;\n  border-radius: 3px;\n}\n\n.radial-gradient {\n  background: radial-gradient(circle at 50% 50%, #000, #fff);\n}\n\n.linear-gradient {\n  background: linear-gradient(to right, #fff, #000);\n}\n\n.center-gradient-chckbox {\n  color: white;\n  font-size: 10px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  cursor: pointer;\n}\n\n.is-center-checkbox {\n  margin: 0px 5px;\n  cursor: pointer;\n}\n\n.is-center-checkbox-container {\n  margin: 5px 0px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2VuZXJhdG9yLWV4cGVyaW1lbnQvZ2VuZXJhdG9yLWV4cGVyaW1lbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUF3QjtFQUN4QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTs7R0FFRzs7QUFFSCxZQUFZOztBQUNaO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixTQUFTO0VBQ1QsT0FBTztFQUNQLFdBQVc7RUFDWCxXQUFXO0VBQ1gsbUNBQW1DO0VBQ25DLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixXQUFXO0VBQ1gsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1osd0ZBQXdGO0FBQzFGOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1o7OzZCQUUyQjtBQUM3Qjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQSxzQkFBc0I7O0FBRXRCLG9CQUFvQjs7QUFDcEI7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsZUFBZTtFQUNmLE9BQU87RUFDUCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixZQUFZO0VBQ1osZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBLHVCQUF1Qjs7QUFDdkI7RUFDRSxvQ0FBb0M7RUFDcEMsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixTQUFTO0VBQ1QsUUFBUTtFQUNSLE9BQU87RUFDUCxVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCOztBQUVBLHdCQUF3Qjs7QUFDeEI7Ozs7RUFJRSx5QkFBeUI7RUFDekIsd0JBQXdCO0VBQ3hCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHlCQUFpQjtLQUFqQixzQkFBaUI7TUFBakIscUJBQWlCO1VBQWpCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osY0FBYztFQUNkLFdBQVc7RUFDWCw2QkFBNkI7RUFDN0IsNkJBQTZCO0VBQzdCLGFBQWE7RUFDYixlQUFlO0VBQ2YsZUFBZTtFQUNmLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGlEQUFpRDtBQUNuRDs7QUFFQTtFQUNFLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQSx1QkFBdUI7O0FBQ3ZCO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSw4Q0FBOEM7QUFDaEQ7O0FBRUE7RUFDRTs7NEJBRTBCO0FBQzVCOztBQUVBO0VBQ0U7OzRCQUUwQjtBQUM1Qjs7QUFFQTs7RUFFRSxvQ0FBb0M7RUFDcEMsNkJBQTZCO0VBQzdCLGdDQUFnQztFQUNoQyxXQUFXO0VBQ1gsYUFBYTtFQUNiLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFFBQVE7RUFDUixtQ0FBbUM7RUFDbkMsMkJBQTJCO0VBQzNCLFVBQVU7RUFDVixhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7RUFDWCxVQUFVO0VBQ1YsZ0NBQXdCO1VBQXhCLHdCQUF3QjtFQUN4QixZQUFZO0VBQ1osd0ZBQXdGO0FBQzFGOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztFQUNYLFVBQVU7RUFDViwrQkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWjs7NkJBRTJCO0FBQzdCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLFVBQVU7RUFDViwrQkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWjs7NkJBRTJCO0FBQzdCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osVUFBVTtFQUNWLFVBQVU7RUFDVixnQ0FBd0I7VUFBeEIsd0JBQXdCO0VBQ3hCLFlBQVk7RUFDWjs7NkJBRTJCO0FBQzdCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQSxlQUFlOztBQUNmO0VBQ0UsMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFNBQVM7RUFDVCxRQUFRO0VBQ1IsV0FBVztFQUNYLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsVUFBVTtFQUNWLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixhQUFhO0VBQ2IsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsdUNBQXVDO0VBQ3ZDLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsd0JBQXdCO0VBQ3hCLHlCQUF5QjtFQUN6Qiw2REFBNkQ7RUFDN0Qsb0JBQW9CO0FBQ3RCOztBQUVBLDJCQUEyQjs7QUFFM0I7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIseUNBQXlDO0VBQ3pDLGtGQUFrRjtBQUNwRjs7QUFFQTtFQUNFLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQix5Q0FBeUM7RUFDekMsa0ZBQWtGO0FBQ3BGOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixvQ0FBb0M7RUFDcEMsNEJBQTRCO0VBQzVCLHFCQUFxQjtFQUNyQiw0QkFBNEI7RUFDNUIsd0JBQXdCO0VBQ3hCLHlCQUF5QjtFQUN6Qix1Q0FBdUM7RUFDdkMsd0JBQXdCO0VBQ3hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixtQ0FBbUM7QUFDckM7O0FBRUE7O0VBRUUsV0FBVztFQUNYLFlBQVk7RUFDWiw4QkFBOEI7RUFDOUIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFNBQVM7RUFDVCxRQUFRO0VBQ1IsVUFBVTtBQUNaOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLGFBQWE7RUFDYix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixlQUFlO0VBQ2YsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHdCQUF3QjtFQUN4Qiw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLDhCQUE4QjtFQUM5QixxQkFBcUI7RUFDckIsdUJBQXVCO0VBQ3ZCO3VCQUNxQjtFQUNyQixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osK0JBQStCO0VBQy9CLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtDQUFrQztFQUNsQyx3QkFBd0I7RUFDeEIsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsU0FBUztBQUNYOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixzQ0FBc0M7RUFDdEMsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxhQUFhO0VBQ2IsWUFBWTtFQUNaLG1EQUFtRDtFQUNuRCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHlCQUFpQjtLQUFqQixzQkFBaUI7TUFBakIscUJBQWlCO1VBQWpCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsbUNBQW1DO0VBQ25DLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsK0NBQStDO0VBQy9DLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IseUJBQWlCO0tBQWpCLHNCQUFpQjtNQUFqQixxQkFBaUI7VUFBakIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixtREFBbUQ7RUFDbkQsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHVDQUF1QztFQUN2Qzs7Ozs7O3NDQU1vQztFQUNwQyxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osd0JBQXdCO0VBQ3hCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLG1CQUFtQjtFQUNuQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osbURBQW1EO0VBQ25ELGVBQWU7QUFDakI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsY0FBYztFQUNkLGFBQWE7RUFDYixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixnQ0FBZ0M7RUFDaEMsWUFBWTtFQUNaLGFBQWE7RUFDYixlQUFlO0VBQ2YsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0Usd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLGNBQWM7RUFDZCxhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsd0JBQXdCO0VBQ3hCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxZQUFZO0VBQ1osbURBQW1EO0VBQ25ELGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7O0FBRUE7O0VBRUUsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBOztFQUVFLGlEQUFpRDtBQUNuRDs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQSw0QkFBNEI7O0FBQzVCO0VBQ0Usd0JBQXdCO0VBQ3hCLHdCQUF3QjtFQUN4QixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLFlBQVk7RUFFWix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLGVBQWU7QUFDakI7O0FBRUEsaUNBQWlDOztBQUVqQztFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixtREFBbUQ7RUFDbkQsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1EQUFtRDtFQUNuRCxlQUFlO0VBQ2YsV0FBVztFQUNYLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsOEJBQThCO0VBQzlCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsbURBQW1EO0VBQ25ELGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1EQUFtRDtFQUNuRCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUUsT0FBTztFQUNQLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLGlCQUFpQjtBQUNuQjs7QUFFQTs7RUFFRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLDZCQUE2QjtFQUM3Qix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixlQUFlO0FBQ2pCOztBQUVBOztFQUVFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTs7RUFFRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsaUNBQXlCO1VBQXpCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGlDQUF5QjtVQUF6Qix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxpQ0FBeUI7VUFBekIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsaUNBQXlCO1VBQXpCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGlDQUF5QjtVQUF6Qix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxnQ0FBd0I7VUFBeEIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsZ0NBQXdCO1VBQXhCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFNBQVM7RUFDVCw2QkFBNkI7RUFDN0IsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLDJDQUEyQztFQUMzQyxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qiw4QkFBOEI7RUFDOUIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix3QkFBd0I7RUFDeEIsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLFlBQVk7RUFDWixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaURBQWlEO0FBQ25EOztBQUVBOztLQUVLOztBQUVMO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsOEJBQThCO0VBQzlCLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLHlCQUFpQjtLQUFqQixzQkFBaUI7TUFBakIscUJBQWlCO1VBQWpCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7O0FBRUE7O0VBRUUsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSwwREFBMEQ7QUFDNUQ7O0FBRUE7RUFDRSxpREFBaUQ7QUFDbkQ7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLHlCQUFpQjtLQUFqQixzQkFBaUI7TUFBakIscUJBQWlCO1VBQWpCLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9nZW5lcmF0b3ItZXhwZXJpbWVudC9nZW5lcmF0b3ItZXhwZXJpbWVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpc3BsYXktbm9uZSB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmRpc3BsYXktYmxvY2sge1xuICBkaXNwbGF5OiBpbml0aWFsICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogaW5pdGlhbCAhaW1wb3J0YW50O1xufVxuXG4uYnV0dG9uLWl0ZW0ge1xuICB3aWR0aDogY2FsYyg1MCUgLSAxMHB4KSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmZvdXItY29sIC5idXR0b24taXRlbSB7XG4gIHdpZHRoOiBjYWxjKDI1JSAtIDEwcHgpICFpbXBvcnRhbnQ7XG59XG5cbi5idXR0b24taXRlbSBpbWcge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLyogLmV4aXQtYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RiNGQ0MCAhaW1wb3J0YW50O1xufSAqL1xuXG4vKiB0YWIgY3NzICovXG4udmVydGljYWwtdGFiLWJ1dHRvbi1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogNzVweDtcbiAgei1pbmRleDogMTA7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYmxhY2spO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi50YWItYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBjb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAxMDAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDEwcHggMHB4O1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4udGFiLWljb24ge1xuICB3aWR0aDogMzVweDtcbn1cblxuLnRhYi10aXRsZSB7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn1cblxuLnRhYmxpbmtzLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWJsYWNrKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4udGFibGlua3MuYWN0aXZlOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtOHB4O1xuICByaWdodDogLTJweDtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCB0b3AgbGVmdCwgI2ZmZjAgNTAlLCB2YXIoLS1saWdodC1ibGFjaykgNjAlKTtcbn1cblxuLnRhYmxpbmtzLmFjdGl2ZTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IC04cHg7XG4gIHJpZ2h0OiAtMnB4O1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IGJvdHRvbSBsZWZ0LFxuICAgICAgI2ZmZjAgNTAlLFxuICAgICAgdmFyKC0tbGlnaHQtYmxhY2spIDYwJSk7XG59XG5cbi50YWJjb250ZW50IHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxMHB4KTtcbn1cblxuLyogdGFiIGNzcyBvdmVyIGhlcmUgKi9cblxuLyogYmFja2dyb3VuZCBUYWJzICovXG4uYmFja2dyb3VuZC10YWJzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xufVxuXG4uYmFja2dyb3VuZC10YWJzLWxpbmtzLmFjdGl2ZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstcHVycGxlKTtcbn1cblxuLmJhY2tncm91bmQtdGFicy1saW5rcy5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLXB1cnBsZSk7XG59XG5cbi5iYWNrZ3JvdW5kLXRhYnMtbGlua3Mge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1kYXJrLWJsYWNrKTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiAwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZmxleDogMTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbjogMTBweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuXG4uYmFja2dyb3VuZC10YWJzLWxpbmtzOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KTtcbn1cblxuLnRhYi1idXR0b24tYnRuLWJhY2tncm91bmQge1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW46IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwYWRkaW5nOiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbn1cblxuLyogcHJvcGVydHkgcGFuZWwgY3NzICovXG4ucHJvcGVydHktcGFuZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC1ibGFjayk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiA4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4vKiBlZGl0b3IgdGFiIHdyYXBwZXJzICovXG4uYmFja2dyb3VuZC10YWItd3JhcHBlcixcbi5pbWFnZS10YWItd3JhcHBlcixcbi5zaGFwZS10YWItd3JhcHBlcixcbi5oZWFkaW5nLXRhYi13cmFwcGVyIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAyMHB4KTtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uYWRkLWhlYWRpbmctY2xhc3Mge1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgcGFkZGluZzogMHB4O1xuICBsaW5lLWhlaWdodDogMTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgb3V0bGluZTogbm9uZTtcbiAgbWFyZ2luOiA1cHggMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICB0cmFuc2l0aW9uOiAwLjJzO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xufVxuXG4uYWRkLWhlYWRpbmctY2xhc3M6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpO1xufVxuXG4uYWRkLWhlYWRpbmctY2xhc3MgaDEge1xuICBtYXJnaW46IDEwcHg7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuLmFkZC1oZWFkaW5nLWNsYXNzIGgyIHtcbiAgbWFyZ2luOiAxMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5hZGQtaGVhZGluZy1jbGFzcyBoMyB7XG4gIG1hcmdpbjogMTBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4vKiBzaWRlYmFyIHRvZ2dsZSBjc3MgKi9cbi5zaG93bi1sZWZ0LXNpZGViYXIge1xuICBsZWZ0OiA3NXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5zaG93bi1yaWdodC1zaWRlYmFyIHtcbiAgcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uc2hvd24ge1xuICB3aWR0aDogMzUwcHg7XG59XG5cbi5oaWRkZW4tbGVmdCB7XG4gIHdpZHRoOiA3NXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5oaWRkZW4tbGVmdCAubGVmdC13cmFwcGVyIHtcbiAgcGFkZGluZzogMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uaGlkZGVuIHtcbiAgd2lkdGg6IDBweCAhaW1wb3J0YW50O1xufVxuXG4udG9nZ2xlLXJpZ2h0LXNpZGViYXItYnV0dG9uIHtcbiAgbGVmdDogLTE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHggMHB4IDBweCAyMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5kYXJrLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYmxhY2spICFpbXBvcnRhbnQ7XG59XG5cbi50b2dnbGUtbGVmdC1zaWRlYmFyLWJ1dHRvbi5kYXJrLWJ1dHRvbjo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCBib3R0b20gcmlnaHQsXG4gICAgICAjZmZmMCA1MCUsXG4gICAgICB2YXIoLS1kYXJrLWJsYWNrKSA2MCUpO1xufVxuXG4udG9nZ2xlLWxlZnQtc2lkZWJhci1idXR0b24uZGFyay1idXR0b246OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCB0b3AgcmlnaHQsXG4gICAgICAjZmZmMCA1MCUsXG4gICAgICB2YXIoLS1kYXJrLWJsYWNrKSA2MCUpO1xufVxuXG4udG9nZ2xlLXJpZ2h0LXNpZGViYXItYnV0dG9uLFxuLnRvZ2dsZS1sZWZ0LXNpZGViYXItYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYmxhY2spO1xuICBib3JkZXI6IDBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDIwcHggMjBweCAwcHg7XG4gIHdpZHRoOiAxNXB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IC0xNHB4O1xuICB0b3A6IDUwJTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgei1pbmRleDogMTtcbiAgb3V0bGluZTogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udG9nZ2xlLXJpZ2h0LXNpZGViYXItYnV0dG9uOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC03cHg7XG4gIHJpZ2h0OiAtMnB4O1xuICB3aWR0aDogOXB4O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtOWRlZyk7XG4gIGhlaWdodDogMTBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCB0b3AgbGVmdCwgI2ZmZjAgNTAlLCB2YXIoLS1saWdodC1ibGFjaykgNjAlKTtcbn1cblxuLnRvZ2dsZS1yaWdodC1zaWRlYmFyLWJ1dHRvbjo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IC03cHg7XG4gIHJpZ2h0OiAtMnB4O1xuICB3aWR0aDogOXB4O1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5ZGVnKTtcbiAgaGVpZ2h0OiAxMHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IGJvdHRvbSBsZWZ0LFxuICAgICAgI2ZmZjAgNTAlLFxuICAgICAgdmFyKC0tbGlnaHQtYmxhY2spIDYwJSk7XG59XG5cbi50b2dnbGUtbGVmdC1zaWRlYmFyLWJ1dHRvbjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTdweDtcbiAgbGVmdDogLTFweDtcbiAgd2lkdGg6IDlweDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOWRlZyk7XG4gIGhlaWdodDogMTBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCB0b3AgcmlnaHQsXG4gICAgICAjZmZmMCA1MCUsXG4gICAgICB2YXIoLS1saWdodC1ibGFjaykgNjAlKTtcbn1cblxuLnRvZ2dsZS1sZWZ0LXNpZGViYXItYnV0dG9uOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTdweDtcbiAgbGVmdDogLTFweDtcbiAgd2lkdGg6IDlweDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTlkZWcpO1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgYm90dG9tIHJpZ2h0LFxuICAgICAgI2ZmZjAgNTAlLFxuICAgICAgdmFyKC0tbGlnaHQtYmxhY2spIDYwJSk7XG59XG5cbi50b2dnbGUtYmFyLWljb24ge1xuICB3aWR0aDogMTVweDtcbiAgaGVpZ2h0OiAxNXB4O1xufVxuXG4vKiBsb2FkZXIgY3NzICovXG4ubG9hZGVyLW92ZXJsYXkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwZTY7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiAyMDtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmVycm9yLWFjdGlvbi1idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNXB4O1xuICByaWdodDogNXB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uZXJyb3ItYWN0aW9uLWljb24ge1xuICB3aWR0aDogMTVweDtcbiAgaGVpZ2h0OiAxNXB4O1xufVxuXG4uZXJyb3ItZGlhbG9nLnNob3cge1xuICByaWdodDogMTVweCAhaW1wb3J0YW50O1xuICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG59XG5cbi5lcnJvci1kaWFsb2cuaGlkZSB7XG4gIHJpZ2h0OiAtMzg1cHg7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5lcnJvci1kaWFsb2cge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkYjRkNDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMjBweDtcbiAgei1pbmRleDogMTU7XG4gIG1heC13aWR0aDogMTYzcHg7XG4gIG1pbi13aWR0aDogMjg1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgdG9wOiAzMHB4O1xuICByaWdodDogMTVweDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAzNXB4IDEwcHggI2ZmMDAwMDU5O1xuICBmb250LXNpemU6IDE1cHg7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGFsbDtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC41cztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjM3LCAwLjUzLCAwLjU4LCAxKTtcbiAgdHJhbnNpdGlvbi1kZWxheTogMHM7XG59XG5cbi8qIGxvYWRlciBjc3MgZmluaXNoIGhlcmUgKi9cblxuLmhlYWRlci1zdHlsZS1sZWZ0IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiAxMDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBsaW5lLWhlaWdodDogNTZweDtcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4zNSk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgdmFyKC0tZGFyay1wdXJwbGUpIDAsIHZhcigtLWxpZ2h0LXB1cnBsZSkgMTAwJSk7XG59XG5cbi5oZWFkZXItc3R5bGUge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDEwO1xuICBoZWlnaHQ6IDYwcHg7XG4gIGxpbmUtaGVpZ2h0OiA1NnB4O1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjM1KTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCB2YXIoLS1kYXJrLXB1cnBsZSkgMCwgdmFyKC0tbGlnaHQtcHVycGxlKSAxMDAlKTtcbn1cblxuLmVkaXRvci1sZWZ0LXNpZGViYXIge1xuICB3aWR0aDogNDIwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgLyogYmFja2dyb3VuZDogdmFyKC0tbGlnaHQtYmxhY2spOyAqL1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1taWxrLWdyYXkpO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIC8qIHRyYW5zaXRpb246IHdpZHRoIDAuMnM7ICovXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGFsbDtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICAvKiBwb3NpdGlvbjogcmVsYXRpdmU7ICovXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLmxlZnQtd3JhcHBlciB7XG4gIGxlZnQ6IDc1cHggIWltcG9ydGFudDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDc1cHgpICFpbXBvcnRhbnQ7XG59XG5cbi5yaWdodC13cmFwcGVyLFxuLmxlZnQtd3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHZhcigtLWxpZ2h0LWJsYWNrKTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDI7XG59XG5cbi5wcm9wZXJ0eS1wYW5lbC13cmFwcGVyIHtcbiAgbWluLXdpZHRoOiBjYWxjKDM1MHB4IC0gMjVweCk7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMjBweCk7XG59XG5cbi5wcm9wZXJ0eS1wYW5lbC1iYWNrLWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxZTFlMWU0Mjtcbn1cblxuLnByb3BlcnR5LXBhbmVsLWJhY2stYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMHB4IHNvbGlkO1xuICBvdXRsaW5lOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDVweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgY29sb3I6IHdoaXRlO1xuICB0cmFuc2l0aW9uOiAwLjJzO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uYmFjay1idXR0b24taWNvbiB7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDE1cHg7XG4gIG1hcmdpbjogMHB4IDVweDtcbn1cblxuLm1vdmUtcmlnaHQge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5wcm9wZXJ0eS1wYW5lbC1jb250ZW50IHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDY1cHgpO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5pbm5lci1sZWZ0LXdyYXBwZXIge1xuICBtaW4td2lkdGg6IGNhbGMoMzUwcHggLSAxNXB4KTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5pbm5lci1yaWdodC13cmFwcGVyIHtcbiAgcGFkZGluZzogNXB4O1xuICB3aWR0aDogY2FsYygxMDAlIC0gMTBweCk7XG4gIG1pbi13aWR0aDogY2FsYygyNjVweCAtIDEwcHgpO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG59XG5cbi5lZGl0b3ItcmlnaHQtc2lkZWJhciB7XG4gIHdpZHRoOiAyMzJweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1saWdodC1ibGFjayk7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgLyogb3ZlcmZsb3c6IHZpc2libGU7ICovXG4gIC8qIG92ZXJmbG93LXk6IGF1dG87XG4gIG92ZXJmbG93LXg6IGhpZGRlbjsgKi9cbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgdHJhbnNpdGlvbjogd2lkdGggMC4ycztcbiAgc2Nyb2xsYmFyLWNvbG9yOiAjZmZmICMwMDA5O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwcHg7XG59XG5cbi5lZGl0b3ItY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA0MjBweDtcbiAgcmlnaHQ6IDI2NXB4O1xuICAvKiB3aWR0aDogY2FsYygxMDAlIC0gNjE1cHgpOyAqL1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IG92ZXJsYXk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1pbGstZ3JheSk7XG4gIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cbiAgei1pbmRleDogMDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgdHJhbnNpdGlvbjogMC4ycztcbn1cblxuLm1haW4td3JhcHBlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA2MHB4O1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDYwcHgpO1xuICB3aWR0aDogMTAwJTtcbiAgYm90dG9tOiAwO1xufVxuXG4uYWRkLWVsZW1lbnQtaGVhZGluZyB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgLyogYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwZjE5MzQ7ICovXG4gIGJhY2tncm91bmQ6ICMxZTFlMWU7XG4gIHBhZGRpbmc6IDE1cHggMHB4O1xuICBtYXJnaW46IDBweDtcbn1cblxuLmxheWVyLWNvdGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ubGF5ZXItdGl0bGUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGJhY2tncm91bmQ6ICMxZTFlMWU7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBtaW4taGVpZ2h0OiAzNXB4O1xuICBsaW5lLWhlaWdodDogMzVweDtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5sYXllci1pdGVtIHtcbiAgbWFyZ2luOiAxNXB4O1xuICBtaW4taGVpZ2h0OiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLWJsYWNrKTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIC8qIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IDAgcmdiKDM3LCA0MywgNjQpOyAqL1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5sYXllci10aHVtYm5haWwge1xuICBtYXgtd2lkdGg6IDEyNXB4O1xufVxuXG4ubGF5ZXItdGl0bGUtY29udGFpbmVyIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSAzMHB4KTtcbn1cblxuLmxheWVyLXRpdGxlLWNvbnRhaW5lciBzcGFuIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmN1c3RvbS1wb3NpdGlvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1cHg7XG4gIHJpZ2h0OiA1cHg7XG59XG5cbi5uby1kYXRhLW1hcmdpbiB7XG4gIG1hcmdpbjogMTVweDtcbn1cblxuLm92ZXJmbG93LXktc2Nyb2xsIHtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDU1cHgpO1xufVxuXG4uYWN0aXZhdGVkLWxheWVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1wdXJwbGUpO1xufVxuXG4uZGVzZWxlY3QtYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tbGlnaHQtYmxhY2spO1xuICBib3JkZXI6IDBweDtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIC8qIGJveC1zaGFkb3c6IDAgMTBweCAyMHB4IDAgIzAwMDAwMDsgKi9cbiAgYm94LXNoYWRvdzpcbiAgICAwLjlweCAxLjRweCAxLjRweCByZ2JhKDAsIDAsIDAsIDAuMDQyKSxcbiAgICAyLjJweCAzLjVweCAzLjRweCByZ2JhKDAsIDAsIDAsIDAuMDYxKSxcbiAgICA0LjFweCA2LjVweCA2LjRweCByZ2JhKDAsIDAsIDAsIDAuMDc1KSxcbiAgICA3LjRweCAxMS42cHggMTEuNHB4IHJnYmEoMCwgMCwgMCwgMC4wODkpLFxuICAgIDEzLjhweCAyMS43cHggMjEuM3B4IHJnYmEoMCwgMCwgMCwgMC4xMDgpLFxuICAgIDMzcHggNTJweCA1MXB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIGZsb2F0OiByaWdodDtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgd2lkdGg6IDMwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jdXN0b20td2lkdGgge1xuICB3aWR0aDogMTEwcHggIWltcG9ydGFudDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW46IDE1cHg7XG59XG5cbi5kZXNlbGVjdC1idXR0b246aG92ZXIge1xuICB3aWR0aDogOTBweDtcbn1cblxuLmRlc2VsZWN0LWxhYmxlIHtcbiAgY29sb3I6IHdoaXRlO1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmRlc2VsZWN0LWljb24ge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC10b3A7XG4gIG1pbi13aWR0aDogMjBweDtcbiAgbWluLWhlaWdodDogMjBweDtcbiAgbWFyZ2luOiAwcHggNXB4IDBweCAwcHg7XG59XG5cbi5zaW5nbGUtY29udHJvbC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uZm9udC1zZWxlY3Rpb24tYm94IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFlMWUxZTtcbiAgYm9yZGVyOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgd2lkdGg6IDI0NXB4O1xufVxuXG4uc2luZ2xlLWNvbnRyb2wtbGFibGUge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5zaGFwZS1saXN0LWNvbnRhaW5lciB7XG4gIG1heC1oZWlnaHQ6IGNhbGMoMTAwJSAtIDYwcHgpO1xuICBvdmVyZmxvdzogYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uc2hhcGUtaXRlbS1pbWFnZSB7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1kYXJrLXB1cnBsZSkwMDtcbiAgY29sb3I6IHdoaXRlO1xuICBvdXRsaW5lOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlcjogMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xufVxuXG4ucmVwbGFjZS1tb2RlIHtcbiAgbWF4LWhlaWdodDogY2FsYygxMDAlIC0gOTBweCkgIWltcG9ydGFudDtcbn1cblxuLmltYWdlLWxpc3QtY29udGFpbmVyIHtcbiAgbWF4LWhlaWdodDogY2FsYygxMDAlIC0gNjVweCk7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi50ZXh0LWVkaXRvci1jb250YWluZXIge1xuICBwYWRkaW5nOiAxNXB4O1xuICBtYXgtaGVpZ2h0OiBjYWxjKDEwMCUgLSA3OHB4KTtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi50ZXh0LXZhbHVlLWNvbnRhaW5lciB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDg1cHgpO1xuICBoZWlnaHQ6IDg1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgYm9yZGVyOiAycHggc29saWQgI2RmZTBlNjtcbiAgY29sb3I6ICMyZTMyNDY7XG4gIHJlc2l6ZTogbm9uZTtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHRyYW5zaXRpb246IDAuNXM7XG59XG5cbi50ZXh0LXNpemUtdmFsdWUtY29udGFpbmVyOmZvY3VzLFxuLnRleHQtdmFsdWUtY29udGFpbmVyOmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1kYXJrLXB1cnBsZSk7XG59XG5cbi50ZXh0LXNpemUtdmFsdWUtY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmZvbnQtc3R5bGUtYnV0dG9ucyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxZTFlMWU7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiA1cHg7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucG9zaXRpb24tdHlwZS1idXR0b24tY29udGFpbmVyIGJ1dHRvbjphY3RpdmUsXG4uZm9udC1zdHlsZS1idXR0b25zOmFjdGl2ZSB7XG4gIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggMTBweCB2YXIoLS1saWdodC1ibGFjayk7XG59XG5cbi5mb250LXN0eWxlLWJ1dHRvbnMuYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1wdXJwbGUpO1xufVxuXG4vKiBjdXN0b20gY3NzIHJhbmdlIHNsaWRlciAqL1xuLnNsaWRlciB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwcHgpO1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHBhZGRpbmc6IDBweCAzcHg7XG4gIGJhY2tncm91bmQ6ICMxZTFlMWU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIG9wYWNpdHk6IDAuNztcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjJzO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnM7XG59XG5cbi5zbGlkZXI6aG92ZXIge1xuICBvcGFjaXR5OiAxO1xufVxuXG4uc2xpZGVyOjotd2Via2l0LXNsaWRlci10aHVtYiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgd2lkdGg6IDE1cHg7XG4gIGhlaWdodDogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tZGFyay1wdXJwbGUpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zbGlkZXI6Oi1tb3otcmFuZ2UtdGh1bWIge1xuICB3aWR0aDogMTVweDtcbiAgaGVpZ2h0OiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1kYXJrLXB1cnBsZSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLyogcmFuZ2Ugc2xpZGVyIGNzcyBmaW5pc2ggaGVyZSAqL1xuXG4uY29sb3ItdmFsdWUtZGlzcGxheSB7XG4gIHdpZHRoOiBpbml0aWFsO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBtYXJnaW4tbGVmdDogMHB4O1xufVxuXG4uY29sb3ItdmFsdWUtZGlzcGxheSxcbi5yYW5nZS12YWx1ZSB7XG4gIHBhZGRpbmc6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFlMWUxZTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBmb250LXNpemU6IDEwcHg7XG4gIG1pbi13aWR0aDogMzBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc2hhZG93LWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6ICM0NzUzODY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogNXB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG5cbi5jb2xvci1waWNrZXItYnV0dG9uIHtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4ucG9zaXRpb24tdGl0bGUge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiA1cHggMHB4IDhweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbi5hcHBseUZvci10aXRsZSB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXdlaWdodDogOTAwO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmFwcGx5Rm9yLXZhbHVlIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuXG4ucG9zaXRpb24tdHlwZS1idXR0b24tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDYwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogMThweCBhdXRvO1xufVxuXG4ucG9zaXRpb24tc2l6ZS1jb250YWluZXIsXG4ucG9zaXRpb24tY29udHJvbC1jb250YWluZXIge1xuICBmbGV4OiAxO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5wb3NpdGlvbi1idXR0b24ge1xuICBtYXJnaW46IDJweCAhaW1wb3J0YW50O1xufVxuXG4ucG9zaXRpb24tYnV0dG9uLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIHdpZHRoOiA5MHB4O1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5wb3NpdGlvbi1jb250cm9sLW1haW4td3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgcGFkZGluZzogMTBweCAwcHg7XG59XG5cbi5wb3NpdGlvbi10eXBlLWJ1dHRvbixcbi5wb3NpdGlvbi1idXR0b24ge1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBib3JkZXI6IDBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFlMWUxZTtcbiAgcGFkZGluZzogNXB4O1xuICBtYXJnaW46IDJweCAycHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWdyaWQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnBvc2l0aW9uLXR5cGUtYnV0dG9uLmFjdGl2ZSxcbi5wb3NpdGlvbi1idXR0b24uYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1wdXJwbGUpO1xufVxuXG4ucG9zaXRpb24tYnV0dG9uIHN2ZyB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGZpbGw6IHdoaXRlO1xuICB3aWR0aDogMTVweDtcbiAgaGVpZ2h0OiAxNXB4O1xufVxuXG4ucG9zaXRpb24tYnV0dG9uOmhvdmVyIHN2Zyxcbi5wb3NpdGlvbi1idXR0b24uYWN0aXZlIHN2ZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4udGwge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgyMjVkZWcpO1xufVxuXG4udHIge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgzMTVkZWcpO1xufVxuXG4udG0ge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xufVxuXG4ubWwge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xufVxuXG4uYmwge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xufVxuXG4uYm0ge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG59XG5cbi5iciB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbn1cblxuLmN1c3RvbS1tYXJnaW4ge1xuICBtYXJnaW46IDEwcHggMHB4O1xufVxuXG4uaW1hZ2UtaXRlbSB7XG4gIHdpZHRoOiBjYWxjKDMzJSAtIDIwcHgpO1xuICBtYXgtaGVpZ2h0OiAxNTBweDtcbiAgcGFkZGluZzogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWUxZTFlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbjogNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmltYWdlLWl0ZW0taW1hZ2Uge1xuICB3aWR0aDogOTAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5iYWNrLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogOHB4O1xuICB0b3A6IDEycHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbn1cblxuLmNhbnZhcy13cmFwcGVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4jY2FudmFzLWNvbnRhaW5lciB7XG4gIG1hcmdpbjogYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cblxuI2NhbnZhcy1jb250YWluZXIgLmNhbnZhcy1pdGVtLWNvbnRhaW5lciB7XG4gIG1hcmdpbjogMTBweCAhaW1wb3J0YW50O1xufVxuXG4uY29sb3ItbGlzdC1jb250YWluZXIge1xuICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtYXgtaGVpZ2h0OiBjYWxjKDEwMCUgLSA3NXB4KTtcbn1cblxuLmNvbG9yLWl0ZW0ge1xuICB3aWR0aDogY2FsYygyNSUgLSAxMHB4KTtcbiAgcGFkZGluZy1ib3R0b206IGNhbGMoMjUlIC0gMTBweCkgIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICBkaXNwbGF5OiAtbXMtZ3JpZDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDVweDtcbn1cblxuLnN2Zy1pYy1hZGQtY29sb3Ige1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIHRvcDogY2FsYyg1MCUgLSAxMHB4KTtcbiAgbGVmdDogY2FsYyg1MCUgLSAxMHB4KTtcbn1cblxuLmN1c3RvbS1pbWFnZS1pdGVtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFlMWUxZTtcbiAgcGFkZGluZy1ib3R0b206IDVweCAhaW1wb3J0YW50O1xuICB3aWR0aDogY2FsYygzMyUgLSAyMHB4KTtcbiAgbWF4LWhlaWdodDogMTUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4uYmFja2dyb3VuZC1pbWFnZSB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbn1cblxuLmZpbGUtdXBsb2FkLWNvbnRyb2wge1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcbiAgaGVpZ2h0OiA0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWUxZTFlO1xuICBvdXRsaW5lOiAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5maWxlLXVwbG9hZC1jb250cm9sOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLmZpbGUtdXBsb2FkLWNvbnRyb2w6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiQ2hvb3NlIEltYWdlLi4uXCI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgcGFkZGluZzogNXB4IDhweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmZpbGUtdXBsb2FkLWNvbnRyb2w6YWN0aXZlIHtcbiAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAxMHB4IHZhcigtLWxpZ2h0LWJsYWNrKTtcbn1cblxuLyogLmZpbGUtdXBsb2FkLWNvbnRyb2w6YWN0aXZlOjpiZWZvcmUge1xuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgI2UzZTNlMywgI2Y5ZjlmOSk7XG4gIH0gKi9cblxuLmdyb3VwLXRpdGxlIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHBhZGRpbmc6IDVweCAwcHggMTBweCA1cHg7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4uZ3JhZGllbnQtY29udHJvbC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5cbi5ncmFkaWVudC10eXBlLWJ0biB7XG4gIGJvcmRlcjogMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHBhZGRpbmc6IDNweDtcbiAgbWFyZ2luOiAwcHggMnB4O1xuICBiYWNrZ3JvdW5kOiAjMDAwMDAwNjY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3V0bGluZTogbm9uZTtcbiAgdHJhbnNpdGlvbjogMC4zcztcbn1cblxuLmdyYWRpZW50LXR5cGUtYnRuLmFjdGl2ZSxcbi5ncmFkaWVudC10eXBlLWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstcHVycGxlKTtcbn1cblxuLmdyYWRpZW50LWljb24ge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG5cbi5yYWRpYWwtZ3JhZGllbnQge1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDUwJSA1MCUsICMwMDAsICNmZmYpO1xufVxuXG4ubGluZWFyLWdyYWRpZW50IHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmZmLCAjMDAwKTtcbn1cblxuLmNlbnRlci1ncmFkaWVudC1jaGNrYm94IHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEwcHg7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5pcy1jZW50ZXItY2hlY2tib3gge1xuICBtYXJnaW46IDBweCA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmlzLWNlbnRlci1jaGVja2JveC1jb250YWluZXIge1xuICBtYXJnaW46IDVweCAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/generator-experiment/generator-experiment.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/generator-experiment/generator-experiment.component.ts ***!
  \************************************************************************/
/*! exports provided: GeneratorExperimentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneratorExperimentComponent", function() { return GeneratorExperimentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fabric_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fabric.service */ "./src/app/fabric.service.ts");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.constants */ "./src/app/app.constants.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var changedpi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! changedpi */ "./node_modules/changedpi/dist/index.js");
/* harmony import */ var changedpi__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(changedpi__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _helper_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helper.service */ "./src/app/helper.service.ts");
/* harmony import */ var jszip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jszip */ "./node_modules/jszip/dist/jszip.min.js");
/* harmony import */ var jszip__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(jszip__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! fabric */ "./node_modules/fabric/dist/fabric.js");
/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(fabric__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _fabric_text_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../fabric_text_button */ "./src/app/fabric_text_button.js");
/* harmony import */ var _fabric_text_button__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_fabric_text_button__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _fabric_icon_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../fabric_icon_button */ "./src/app/fabric_icon_button.js");
/* harmony import */ var _fabric_icon_button__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_fabric_icon_button__WEBPACK_IMPORTED_MODULE_13__);














fabric.Object.prototype.toObject = (function (toObject) {
    return function (propertiesToInclude) {
        propertiesToInclude = (propertiesToInclude || []).concat(_app_constants__WEBPACK_IMPORTED_MODULE_4__["custom_attribute"]);
        return toObject.apply(this, [propertiesToInclude]);
    };
})(fabric.Object.prototype.toObject);
let GeneratorExperimentComponent = class GeneratorExperimentComponent {
    // imageView: any = false;
    // buttonView: any = false;
    // bgColorView: any = false;
    // bgImageView: any = false;
    // bgScaleModeView: any = false;
    constructor(fabricService, helperService, router) {
        this.fabricService = fabricService;
        this.helperService = helperService;
        this.router = router;
        this.loader = false;
        this.isErrorShow = false;
        this.isActionButton = false;
        this.error = "";
        this.isLeftShown = true;
        this.isRightShown = true;
        this.isInputFocus = false;
        this.backdropClick = false;
        this.canvas = [];
        this.isSingleMode = false;
        this.unlockedCanvasIndex = null;
        this.bannerSet = [];
        this.layers = [];
        this.maxObjectCanvasId = 0;
        this.activatedLayer = {};
        this.applyFor = 'all';
        this.objPosition = 'tl';
        this.imageList = [
            'assets/images/1.jpeg',
            'assets/images/2.jpeg',
            'assets/images/3.jpeg',
            'assets/images/4.jpeg',
            'assets/images/5.jpeg',
            'assets/images/6.jpeg',
            'assets/images/7.jpeg',
            'assets/images/8.jpeg',
            'assets/images/9.jpeg',
            'assets/images/10.jpeg',
            'assets/images/default_background.jpg',
            'assets/images/default_logo.png',
        ];
        this.textButtonList = _app_constants__WEBPACK_IMPORTED_MODULE_4__["textButtonList"];
        this.iconButtonList = _app_constants__WEBPACK_IMPORTED_MODULE_4__["iconButtonList"];
        this.bgImageList = this.imageList;
        this.bgColorList = _app_constants__WEBPACK_IMPORTED_MODULE_4__["colorList"];
        this.gradientList = _app_constants__WEBPACK_IMPORTED_MODULE_4__["gradientList"];
        this.scaleOption = [{
                value: "exactFit",
                display_value: "Exact Fit"
            }, {
                value: "maintainAspect",
                display_value: "Maintain Aspect"
            }, {
                value: "noScale",
                display_value: "No Scale"
            }, {
                value: "scaleCrop",
                display_value: "Scale Crop"
            }];
        this.isBackgorundImage = false;
        this.isReplaceMode = false;
        this.fontList = _app_constants__WEBPACK_IMPORTED_MODULE_4__["fontList"];
        this.props = {
            canvasGradientArray: [],
            gradientAngle: 0,
            gradientPositionIsCenter: true,
            buttonGradientArray: [],
            buttonGradientAngle: 0,
            gradientType: 'linear',
            buttonIconSize: 20,
            buttonIconColors: [],
            buttonStrokeColor: '#000000',
            buttonStrokeWidth: 5,
            buttonFill: '#ffffff',
            buttonRadius: 0,
            flipX: false,
            flipY: false,
            font: {},
            fontFamily: _app_constants__WEBPACK_IMPORTED_MODULE_4__["defaultFontFamily"].fontName,
            fontSize: 18,
            fill: '#000000',
            canvasFill: '#ffffff',
            canvasBackgroundImage: '',
            // backgroundMode = ['scaleCrop', 'exactFit', 'maintainAspect', 'noScale']
            scaleMode: 'scaleCrop',
            backgroundColor: '#000000',
            lineHeight: 1.25,
            charSpacing: 0,
            textAlign: 'left',
            opacity: 1,
            textOpacity: 1,
            shadow: {
                color: '#000000',
                blur: 0,
                offsetX: 0,
                offsetY: 0
            },
            TShadow: {
                color: '#000000',
                blur: 0,
                offsetX: 0,
                offsetY: 0
            },
            text: '',
            isBold: false,
            isItalic: false,
            isUnderLine: false,
            isOverLine: false,
            isStrikeThrough: false
        };
        // panel show hide variables
        this.activeTab = 'tab_1';
        this.activeBackgroundTab = 'tab_1';
        this.activeButtonTab = 'tab_1';
        this.activeButtonBackgroundTab = 'tab_1';
        this.propertyPanel = false;
        this.textEditor = false;
        this.buttonEditor = false;
        this.iconButtonEditor = false;
        this.imageEditor = false;
        this.showLoader();
        // Initialize readymade gradient for canvas background
        /* var arr = [];
        this.tmpgdArr.forEach(element => {
          var obj = {};
          if (element.TYPE == 'linear') {
            var tmpArr = [];
            element.COLORARRAY.forEach(colorElem => {
              tmpArr.push({ color: colorElem.color, stop: colorElem.offset })
            });
            obj['cssColor'] = element.CSSCOLOR;
            obj['colorArray'] = tmpArr;
            obj['angle'] = this.getDegree(element.COORDS);
            obj['type'] = element.TYPE
            arr.push(obj);
          }
          else if (element.TYPE == 'radial') {
            var tmpArr = [];
            element.COLORARRAY.forEach(colorElem => {
              tmpArr.push({ color: colorElem.color, stop: colorElem.offset })
            });
            obj['cssColor'] = element.CSSCOLOR;
            obj['colorArray'] = tmpArr;
            let degree = this.getDegree(element.COORDS)
            obj['angle'] = degree != null ? degree : 0;
            degree == null ? obj['gradientPositionIsCenter'] = true : obj['gradientPositionIsCenter'] = false
            obj['type'] = element.TYPE
    
            arr.push(obj);
          }
        });
    
        console.log(JSON.stringify(arr)); */
        var list = localStorage.getItem('sizelist');
        if (list) {
            var bannerSetArray = [];
            _app_constants__WEBPACK_IMPORTED_MODULE_4__["defaultBannerSet"].forEach((json, index) => {
                bannerSetArray.push(json.sizeType);
            });
            this.sizes = JSON.parse(list);
            this.sizes.forEach(element => {
                if (bannerSetArray.indexOf(element.sizeType) != -1) {
                    var elem = _app_constants__WEBPACK_IMPORTED_MODULE_4__["defaultBannerSet"][bannerSetArray.indexOf(element.sizeType)];
                    elem['locked'] = true;
                    this.bannerSet.push(elem);
                }
                else {
                    element['locked'] = true;
                    this.bannerSet.push(element);
                }
            });
        }
        else {
            this.router.navigate(['']);
        }
        this.processKeys = function (e) {
            let movementDelta = 5;
            console.log('process key');
            this.checkForInputFocus().then(isInputFocus => {
                if (this.selected) {
                    if ((e.keyCode === 8 || e.keyCode === 46) && isInputFocus != true && !(this.selected.type == 'textbox' && this.selected.isEditing)) {
                        // delete || backspace;
                        e.preventDefault();
                        this.removeSelected();
                    }
                    else if (e.keyCode === 27) {
                        // esc
                        e.preventDefault();
                        this.cleanSelect();
                    }
                    else if (e.keyCode === 38 && isInputFocus != true && !(this.selected.type == 'textbox' && this.selected.isEditing)) {
                        // Up Arrow
                        e.preventDefault();
                        this.selected.top -= movementDelta;
                        this.selected.setCoords();
                        this.canvas[this.unlockedCanvasIndex].renderAll();
                    }
                    else if (e.keyCode === 40 && isInputFocus != true && !(this.selected.type == 'textbox' && this.selected.isEditing)) {
                        // down arrow
                        e.preventDefault();
                        this.selected.top += movementDelta;
                        this.selected.setCoords();
                        this.canvas[this.unlockedCanvasIndex].renderAll();
                    }
                    else if (e.keyCode === 37 && isInputFocus != true && !(this.selected.type == 'textbox' && this.selected.isEditing)) {
                        // Left arrow
                        e.preventDefault();
                        this.selected.left -= movementDelta;
                        this.selected.setCoords();
                        this.canvas[this.unlockedCanvasIndex].renderAll();
                    }
                    else if (e.keyCode === 39 && isInputFocus != true && !(this.selected.type == 'textbox' && this.selected.isEditing)) {
                        // Right Arrow
                        e.preventDefault();
                        this.selected.left += movementDelta;
                        this.selected.setCoords();
                        this.canvas[this.unlockedCanvasIndex].renderAll();
                    }
                }
            });
        };
    }
    /*  getDegree(point) {
       var degree = 0;
       switch (point) {
         case 'tl':
           degree = 315;
           break;
         case 'tm':
           degree = 270;
           break;
         case 'tr':
           degree = 225; break;
         case 'ml':
           degree = 0;
           break;
         case 'mm':
           degree = null;
           break;
         case 'mr':
           degree = 180;
           break;
         case 'bl':
           degree = 45;
           break;
         case 'bm':
           degree = 90;
           break;
         case 'br':
           degree = 135;
           break;
       }
       return degree;
     } */
    ngAfterViewInit() {
        // this.createCanvas().then(canvasResult => {
        //   this.renderStackObjects()
        // });
        this.fabricService.generateIdList(this.bannerSet).then(idList => {
            this.bannerSet.forEach((element, index) => {
                if (_app_constants__WEBPACK_IMPORTED_MODULE_4__["designer"] == true) {
                    this.fabricService.generateCanvas({ width: element.width, height: element.height, sizeType: element.sizeType, index: index }).then(newCanvas => {
                        this.addCanvasListener(newCanvas);
                        this.canvas.push(newCanvas);
                        this.hideLoader();
                    });
                }
                else {
                    if (element.hasOwnProperty('sample_image')) {
                        this.fabricService.generateCanvas({ width: element.width, height: element.height, sizeType: element.sizeType, index: index }).then(newCanvas => {
                            this.addCanvasListener(newCanvas);
                            this.canvas.push(newCanvas);
                            this.fabricService.renderBackground(newCanvas, element.background_json).then(result => {
                                this.getBackgroundType().then(result => {
                                    this.fabricService.renderStickers(newCanvas, element.sticker_json, idList).then(result => {
                                        this.fabricService.renderText(newCanvas, element.text_json, idList).then(result => {
                                            this.fabricService.renderButton(newCanvas, element.button_json, idList).then(result => {
                                                this.renderStackObjects();
                                                this.hideLoader();
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    }
                    else {
                        this.fabricService.generateCanvas({ width: element.width, height: element.height, sizeType: element.sizeType, index: index }).then(newCanvas => {
                            this.addCanvasListener(newCanvas);
                            this.canvas.push(newCanvas);
                            this.hideLoader();
                        });
                    }
                }
            });
        });
    }
    // Utility Functions
    checkForInputFocus() {
        return new Promise(resolve => {
            let isInputFocus = false;
            jquery__WEBPACK_IMPORTED_MODULE_2___default()("textarea,input[type='text']").each(function () {
                var element = jquery__WEBPACK_IMPORTED_MODULE_2___default()(this);
                if (element.is(':focus')) {
                    isInputFocus = true;
                }
            });
            resolve(isInputFocus);
        });
    }
    toggleBar(type) {
        switch (type) {
            case 'left':
                this.isLeftShown = !this.isLeftShown;
                break;
            case 'right':
                this.isRightShown = !this.isRightShown;
                break;
        }
    }
    activeLeftTab(tabName) {
        this.activeTab = tabName;
        if (!this.isLeftShown) {
            this.toggleBar('left');
        }
    }
    openBackgroundTab(tabName) {
        this.activeBackgroundTab = tabName;
    }
    openButtonTab(tabName) {
        this.activeButtonTab = tabName;
    }
    openButtonBackgroundTab(tabName) {
        this.activeButtonBackgroundTab = tabName;
    }
    enterReplaceMode() {
        this.isReplaceMode = true;
        this.propertyPanel = false;
        this.activeLeftTab('tab_2');
    }
    exitFromReplaceMode() {
        this.isReplaceMode = false;
        this.imageEditor = true;
        this.propertyPanel = true;
    }
    showError(message, timeout = 3000, isActionButton = false) {
        this.isErrorShow = false;
        this.error = message;
        this.isActionButton = isActionButton;
        this.isErrorShow = true;
        if (this.errorTimeOut)
            clearTimeout(this.errorTimeOut);
        this.errorTimeOut = setTimeout(() => {
            this.isErrorShow = false;
            setTimeout(() => {
                this.error = "";
            }, 500);
        }, timeout);
    }
    hideError() {
        if (this.errorTimeOut)
            clearTimeout(this.errorTimeOut);
        this.isErrorShow = false;
        this.isActionButton = false;
        setTimeout(() => {
            this.error = "";
        }, 500);
    }
    dismissLoader() {
        this.loader = false;
        this.backdropClick = false;
    }
    showLoader(backdropClick = false) {
        this.loader = true;
        this.backdropClick = backdropClick;
    }
    hideLoader(backdropClick = false) {
        this.loader = false;
        this.backdropClick = backdropClick;
    }
    copyValue(value) {
        const el = document.createElement('textarea');
        el.value = value;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        alert('Copied...');
    }
    unlockSingleCanvas(clickedIndex) {
        this.canvas.forEach((element, index) => {
            if (element.locked == false && clickedIndex != index) {
                this.bannerSet[index].locked = true;
                element.set({
                    locked: true
                });
                element.forEachObject(object => {
                    object.set({
                        selectable: false
                    });
                });
            }
        });
        this.canvas[clickedIndex].set({
            locked: false
        });
        this.canvas[clickedIndex].forEachObject(object => {
            object.set({
                selectable: true
            });
        });
        this.isSingleMode = true;
        this.isRightShown = false;
        this.processKeysRef = this.processKeys.bind(this);
        document.addEventListener("keydown", this.processKeysRef, false);
        this.unlockedCanvasIndex = clickedIndex;
        this.bannerSet[clickedIndex].locked = false;
        this.deselectObject();
        this.getBackgroundType();
    }
    exitSingleMode(clickedIndex) {
        var activeObject = this.canvas[clickedIndex].getActiveObject();
        activeObject && (activeObject.type != "iconButton" || activeObject.toObject().type != "iconButton") && activeObject.exitEditing ? this.canvas[clickedIndex].getActiveObject().exitEditing() : null;
        this.canvas[clickedIndex].set({
            locked: true
        });
        this.canvas[clickedIndex].forEachObject(object => {
            object.set({
                selectable: false,
            });
        });
        this.canvas[clickedIndex].discardActiveObject().renderAll();
        document.removeEventListener("keydown", this.processKeysRef, false);
        this.renderStackObjects();
        this.isSingleMode = false;
        this.isRightShown = true;
        this.unlockedCanvasIndex = null;
        this.bannerSet[clickedIndex].locked = true;
        this.deselectObject();
        this.getBackgroundType();
    }
    addCanvasListener(canvas) {
        canvas.on({
            "selection:created": (e) => {
                this.selected = e.target;
                this.getPropertyPanelValue({ contentType: this.selected.contentType, id: this.selected.id });
            },
            'selection:updated': (e) => {
                this.selected = e.target;
                this.getPropertyPanelValue({ contentType: this.selected.contentType, id: this.selected.id });
            },
            'selection:cleared': (e) => {
                this.selected = null;
                this.deselectObject();
            }
        });
    }
    renderStackObjects() {
        this.fabricService.getAllLayer(this.canvas).then(result => {
            this.maxObjectCanvasId = result;
            var objects = this.canvas[this.maxObjectCanvasId].toJSON().objects;
            this.layers = [];
            objects.forEach(element => {
                switch (element.type) {
                    case 'textbox':
                        this.layers.push({ type: 'Text', contentType: element.contentType, text: element.text, id: element.id });
                        break;
                    case 'image':
                        this.layers.push({ type: 'Image', src: element.src, contentType: element.contentType, id: element.id });
                        break;
                    case 'button':
                        this.layers.push({ type: 'Button', contentType: element.contentType, text: element.text, id: element.id });
                        break;
                    case 'iconButton':
                        this.layers.push({ type: 'IconButton', contentType: element.contentType, src: element.iconSrc, id: element.id });
                        break;
                }
            });
        });
    }
    selectLayer(layer = {}) {
        this.activatedLayer = layer;
        this.getPropertyPanelValue(layer);
    }
    getPropertyPanelValue(layer) {
        this.resetAllEditor();
        switch (layer.contentType) {
            case 1:
                // textbox
                this.propertyPanel = true;
                this.textEditor = true;
                this.getAllTextProperties(layer.id);
                break;
            case 2:
                // image
                this.propertyPanel = true;
                this.imageEditor = true;
                this.getAllImageProperties(layer.id);
                break;
            case 5:
                // Button
                this.propertyPanel = true;
                this.buttonEditor = true;
                this.getAllTextProperties(layer.id, true);
                this.getAllButtonProperties(layer.id);
                this.getAllButtonTextProperties(layer.id);
                break;
            case 6:
                // Button
                this.propertyPanel = true;
                this.iconButtonEditor = true;
                this.getAllButtonProperties(layer.id);
                this.getAllButtonIconProperties(layer.id);
                break;
        }
    }
    getFinalValue(arr) {
        var counts = {};
        var compare = 0;
        var mostFrequent;
        for (var i = 0, len = arr.length; i < len; i++) {
            var word = arr[i];
            if (counts[word] === undefined) {
                counts[word] = 1;
            }
            else {
                counts[word] = counts[word] + 1;
            }
            if (counts[word] > compare) {
                compare = counts[word];
                mostFrequent = arr[i];
            }
        }
        return mostFrequent;
    }
    deselectObject() {
        this.activatedLayer = {};
        this.resetAllEditor();
        this.getCanvasFill();
    }
    deleteLayer(layer) {
        if (layer.id == this.activatedLayer.id) {
            // reset panels if selected layer is delete.
            this.deselectObject();
        }
        if (this.isSingleMode == true) {
            let canvas = this.canvas[this.unlockedCanvasIndex];
            let object = canvas.getActiveObject() || this.canvas[this.unlockedCanvasIndex].getItemByName('id', layer.id);
            canvas.remove(object).renderAll();
        }
        else {
            this.canvas.forEach(element => {
                element.remove(element.getItemByName('id', layer.id)).renderAll();
            });
        }
        this.renderStackObjects();
    }
    removeSelected() {
        let canvas = this.canvas[this.unlockedCanvasIndex];
        let object = canvas.getActiveObject();
        if (object) {
            canvas.remove(canvas.getActiveObject());
        }
    }
    cleanSelect() {
        let canvas = this.canvas[this.unlockedCanvasIndex];
        let activeObject = canvas.getActiveObject();
        activeObject && (activeObject.type != "iconButton" || activeObject.toObject().type != "iconButton") && activeObject.exitEditing ? canvas.getActiveObject().exitEditing() : null;
        canvas.discardActiveObject().renderAll();
    }
    closePropertyPanel() {
        this.propertyPanel = false;
        this.deselectObject();
    }
    resetAllEditor() {
        this.propertyPanel = false;
        this.textEditor = false;
        this.buttonEditor = false;
        this.iconButtonEditor = false;
        this.imageEditor = false;
        this.isReplaceMode = false;
    }
    getLayer(id) {
        return new Promise(resolve => {
            var layer = null;
            for (let i = 0, length = this.layers.length; i < length; i++) {
                if (this.layers[i].id == id) {
                    layer = this.layers[i];
                    i = length;
                }
            }
            resolve(layer);
        });
    }
    // Get Element's Properties
    getAllTextProperties(id, isButton = false) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let defaultShadow = { color: '#000000', blur: 0, offsetX: 0, offsetY: 0, opacity: 0 };
            if (this.isSingleMode == true) {
                let object = this.canvas[this.unlockedCanvasIndex].getActiveObject().toJSON();
                let newFontStyle = object.fontStyle;
                newFontStyle == 'italic' ? this.props.isItalic = true : this.props.isItalic = false;
                var newFontWeight = object.fontWeight;
                newFontWeight == 'bold' ? this.props.isBold = true : this.props.isBold = false;
                this.props.isUnderLine = object.underline;
                this.props.isOverLine = object.overline;
                this.props.isStrikeThrough = object.linethrough;
                this.props.fontSize = object.fontSize;
                this.props.lineHeight = object.lineHeight;
                this.props.opacity = object.opacity;
                this.props.text = object.text;
                this.props.charSpacing = object.charSpacing;
                this.props.textAlign = object.textAlign;
                isButton ? this.props.fontFamily = object.fontName : this.props.fontFamily = object.fontFamily;
                isButton ? this.props.fill = object.color : this.props.fill = object.fill;
                isButton ? this.props.backgroundColor = object.backgroundColor || '#ffffff' : this.props.backgroundColor = object.textBackgroundColor || '#ffffff';
                isButton ? object.buttonShadow || defaultShadow : this.props.shadow = object.shadow || defaultShadow;
                isButton ? this.props.textOpacity = object.textOpacity : null;
            }
            else {
                var textOpacity = [], backgroundColor = [], fontSize = [], fontStyle = [], fontFamily = [], fill = [], lineHeight = [], opacity = [], shadow = [], text = [], textAlign = [], charSpacing = [], fontWeight = [], underline = [], overline = [], strikeThrough = [];
                for (let i = 0; i < this.canvas.length; i++) {
                    const element = this.canvas[i], object = element.getItemByName('id', id);
                    if (object) {
                        fontSize.push(object.fontSize);
                        fontStyle.push(object.fontStyle);
                        fontWeight.push(object.fontWeight);
                        underline.push(object.underline);
                        overline.push(object.overline);
                        strikeThrough.push(object.linethrough);
                        if (isButton) {
                            textOpacity.push(object.textOpacity);
                            fontFamily.push(object.fontName);
                            backgroundColor.push(object.backgroundColor);
                            shadow.push(object.buttonShadow || defaultShadow);
                            fill.push(object.color);
                        }
                        else {
                            fontFamily.push(object.fontFamily);
                            backgroundColor.push(object.textBackgroundColor);
                            shadow.push(object.shadow || defaultShadow);
                            fill.push(object.fill);
                        }
                        this._getFontFromFamily(fontFamily).then(result => {
                            this.props.font = result;
                        });
                        lineHeight.push(object.lineHeight);
                        opacity.push(object.opacity);
                        text.push(object.text);
                        textAlign.push(object.textAlign);
                        charSpacing.push(object.charSpacing);
                    }
                }
                var newFontStyle = this.getFinalValue(fontStyle);
                newFontStyle == 'italic' ? this.props.isItalic = true : this.props.isItalic = false;
                var newFontWeight = this.getFinalValue(fontWeight);
                newFontWeight == 'bold' ? this.props.isBold = true : this.props.isBold = false;
                this.props.isUnderLine = this.getFinalValue(underline);
                this.props.isOverLine = this.getFinalValue(overline);
                this.props.isStrikeThrough = this.getFinalValue(strikeThrough);
                this.props.fontFamily = this.getFinalValue(fontFamily);
                this.props.fontSize = this.getFinalValue(fontSize);
                this.props.fill = this.getFinalValue(fill);
                this.props.backgroundColor = this.getFinalValue(backgroundColor) || '#ffffff';
                this.props.lineHeight = this.getFinalValue(lineHeight);
                this.props.opacity = this.getFinalValue(opacity);
                this.props.shadow = this.getFinalValue(shadow);
                this.props.text = this.getFinalValue(text);
                this.props.charSpacing = this.getFinalValue(charSpacing);
                this.props.textAlign = this.getFinalValue(textAlign);
                isButton ? this.props.textOpacity = this.getFinalValue(textOpacity) : null;
            }
        });
    }
    getAllImageProperties(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.isSingleMode == true) {
                const canvas = this.canvas[this.unlockedCanvasIndex], object = canvas.getActiveObject().toJSON();
                this.props.opacity = object.opacity;
            }
            else {
                var opacity = [];
                for (let i = 0; i < this.canvas.length; i++) {
                    const element = this.canvas[i];
                    const object = element.getItemByName('id', id);
                    if (object) {
                        opacity.push(object.opacity);
                    }
                }
                this.props.opacity = this.getFinalValue(opacity);
            }
        });
    }
    getAllButtonProperties(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let finalButtonFill;
            if (this.isSingleMode == true) {
                const canvas = this.canvas[this.unlockedCanvasIndex], object = canvas.getActiveObject().toJSON();
                this.props.buttonStrokeColor = object.buttonStrokeColor;
                this.props.buttonStrokeWidth = object.buttonStrokeWidth;
                this.props.buttonRadius = object.buttonRx;
                finalButtonFill = object.buttonFill || '#ffffff';
            }
            else {
                var borderColor = [], borderSize = [], buttonFill = [], borderRadius = [];
                for (let i = 0; i < this.canvas.length; i++) {
                    const element = this.canvas[i], object = element.getItemByName('id', id);
                    if (object) {
                        borderColor.push(object.buttonStrokeColor);
                        borderSize.push(object.buttonStrokeWidth);
                        buttonFill.push(object.buttonFill);
                        borderRadius.push(object.buttonRx);
                    }
                }
                this.props.buttonStrokeColor = this.getFinalValue(borderColor);
                this.props.buttonStrokeWidth = this.getFinalValue(borderSize);
                this.props.buttonRadius = this.getFinalValue(borderRadius);
                finalButtonFill = this.getFinalValue(buttonFill) || '#ffffff';
            }
            if (typeof finalButtonFill == 'string') {
                this.props.buttonFill = finalButtonFill;
                this.props.buttonGradientArray = [];
                this.props.buttonGradientAngle = 0;
                this.props.gradientType = 'linear';
                this.props.gradientPositionIsCenter = true;
            }
            else {
                this.props.buttonFill = '#ffffff';
                this.props.buttonGradientArray = this.helperService._convertOffsetIntoStopColorArray(finalButtonFill.colorStops);
                this.props.buttonGradientAngle = finalButtonFill.gradientAngle || 0;
                this.props.gradientType = finalButtonFill.type || 'linear';
                typeof finalButtonFill.isGradientInCenter != "undefined" ? this.props.gradientPositionIsCenter = finalButtonFill.isGradientInCenter : this.props.gradientPositionIsCenter = true;
            }
        });
    }
    getAllButtonTextProperties(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let defaultShadow = { color: '#000000', blur: 0, offsetX: 0, offsetY: 0, opacity: 0 };
            if (this.isSingleMode == true) {
                const canvas = this.canvas[this.unlockedCanvasIndex], object = canvas.getActiveObject().toJSON();
                this.props.TShadow = object.textShadow || defaultShadow;
            }
            else {
                var textShadow = [];
                for (let i = 0; i < this.canvas.length; i++) {
                    const element = this.canvas[i], object = element.getItemByName('id', id);
                    if (object) {
                        textShadow.push(object.textShadow || defaultShadow);
                    }
                }
                this.props.TShadow = this.getFinalValue(textShadow);
            }
        });
    }
    getAllButtonIconProperties(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.isSingleMode == true) {
                const element = this.canvas[this.unlockedCanvasIndex], object = element.getActiveObject().toJSON();
                this.props.buttonIconSize = object.iconSize;
                this.props.buttonIconColors = object.iconColorArray;
            }
            else {
                var iconSize = [], iconColors = [];
                for (let i = 0; i < this.canvas.length; i++) {
                    const element = this.canvas[i], object = element.getItemByName('id', id);
                    if (object) {
                        iconSize.push(object.iconSize);
                        iconColors.push(object.iconColorArray);
                    }
                }
                this.props.buttonIconSize = this.getFinalValue(iconSize);
                this.props.buttonIconColors = this.getFinalValue(iconColors);
            }
        });
    }
    getBackgroundType() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return new Promise(resolve => {
                if (this.isSingleMode == true) {
                    const element = this.canvas[this.unlockedCanvasIndex];
                    element.backgroundImage ? this.isBackgorundImage = true : this.isBackgorundImage = false;
                    resolve();
                }
                else {
                    var background = [];
                    for (let i = 0; i < this.canvas.length; i++) {
                        const element = this.canvas[i];
                        element.backgroundImage ? background.push(true) : background.push(false);
                    }
                    this.isBackgorundImage = this.getFinalValue(background);
                    resolve();
                }
            });
        });
    }
    getCanvasFill() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let finalCanvasFill;
            if (this.isSingleMode == true) {
                console.log(this.canvas[this.unlockedCanvasIndex]);
                finalCanvasFill = this.canvas[this.unlockedCanvasIndex].backgroundColor || '#ffffff';
            }
            else {
                var canvasFill = [];
                for (let i = 0; i < this.canvas.length; i++) {
                    const element = this.canvas[i];
                    canvasFill.push(element.backgroundColor);
                }
                finalCanvasFill = this.getFinalValue(canvasFill) || '#ffffff';
            }
            if (typeof finalCanvasFill == 'string') {
                this.props.canvasFill = finalCanvasFill;
                this.props.canvasGradientArray = [];
                this.props.gradientAngle = 0;
                this.props.gradientType = 'linear';
                this.props.gradientPositionIsCenter = true;
            }
            else {
                this.props.canvasFill = '#ffffff';
                this.props.canvasGradientArray = this.helperService._convertOffsetIntoStopColorArray(finalCanvasFill.colorStops);
                this.props.gradientAngle = finalCanvasFill.gradientAngle || 0;
                this.props.gradientType = finalCanvasFill.type || 'linear';
                typeof finalCanvasFill.isGradientInCenter != "undefined" ? this.props.gradientPositionIsCenter = finalCanvasFill.isGradientInCenter : this.props.gradientPositionIsCenter = true;
            }
        });
    }
    // Add Elements
    addButton(props) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            props.selectable = this.isSingleMode;
            props.id = this.fabricService.generateRandomNumber();
            if (props.type == 'textButton')
                props.contentType = 5;
            else if (props.type == 'iconButton')
                props.contentType = 6;
            if (this.isSingleMode == true) {
                this.fabricService.addDefaultButton(this.canvas[this.unlockedCanvasIndex], props).then(result => {
                    this.renderStackObjects();
                });
            }
            else {
                var promiseList = [];
                this.canvas.forEach(element => {
                    promiseList.push(this.fabricService.addDefaultButton(element, props));
                });
                yield Promise.all(promiseList).then(result => {
                    this.renderStackObjects();
                });
            }
        });
    }
    addHeading(fontSize) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var props = {
                text: "Your headline goes here.",
                fontSize: fontSize,
                width: 150,
                top: 5,
                left: 5,
                fill: '#000000',
                textAlign: "center",
                fontFamily: _app_constants__WEBPACK_IMPORTED_MODULE_4__["defaultFontFamily"].fontName,
                fontName: _app_constants__WEBPACK_IMPORTED_MODULE_4__["defaultFontFamily"].fontName,
                fontSrc: _app_constants__WEBPACK_IMPORTED_MODULE_4__["defaultFontFamily"].fontSrc,
                shadow: {
                    color: '#ff0000',
                    blur: 0,
                    offsetX: 0,
                    offsetY: 0,
                    opacity: 0
                },
                selectable: this.isSingleMode ? this.isSingleMode : _app_constants__WEBPACK_IMPORTED_MODULE_4__["isObjectSelectable"],
                contentType: 1,
                id: this.fabricService.generateRandomNumber()
            };
            if (this.isSingleMode == true) {
                this.fabricService.addDefaultText(this.canvas[this.unlockedCanvasIndex], props).then(result => {
                    this.renderStackObjects();
                });
            }
            else {
                var promiseList = [];
                this.canvas.forEach(element => {
                    promiseList.push(this.fabricService.addDefaultText(element, props));
                });
                yield Promise.all(promiseList).then(result => {
                    this.renderStackObjects();
                });
            }
        });
    }
    addImage(image) {
        return new Promise((resolve) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var props = {
                src: image,
                id: this.fabricService.generateRandomNumber(),
                contentType: 2,
                // selectable: this.isSingleMode
                selectable: this.isSingleMode ? this.isSingleMode : _app_constants__WEBPACK_IMPORTED_MODULE_4__["isObjectSelectable"],
            };
            if (this.isSingleMode == true) {
                if (this.canvas[this.unlockedCanvasIndex].getObjects('image').length >= 1) {
                    this.showError('You are eligible for add only one image in card. You can replace It.', 6000, true);
                    resolve();
                }
                else {
                    this.fabricService.addDefaultImage(this.canvas[this.unlockedCanvasIndex], props).then(result => {
                        this.renderStackObjects();
                        resolve();
                    });
                }
            }
            else {
                let promiseList = [];
                this.canvas.forEach(element => {
                    if (element.getObjects('image').length >= 1) {
                        this.showError('You are eligible for add only one image in card. You can replace It.', 6000, true);
                    }
                    else {
                        promiseList.push(this.fabricService.addDefaultImage(element, props));
                    }
                });
                yield Promise.all(promiseList).then(result => {
                    this.renderStackObjects();
                    resolve();
                });
            }
        }));
    }
    addImgFromUser(e) {
        var file = e.target.files[0];
        var that = this;
        var reader = new FileReader();
        reader.onload = function (f) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                var data = f.target.result;
                that.addImage(data).then(result => {
                    that.stickerImageControl.nativeElement.value = null;
                });
            });
        };
        reader.readAsDataURL(file);
    }
    // Set Element's Properties
    setProperty(canvasArray, objectId, property, isButtonProperty = false) {
        return new Promise((resolve, reject) => {
            var promises = [];
            if (this.isSingleMode == true && this.unlockedCanvasIndex != null) {
                // objectId is  always null or undefined when single mode activated, so we assign it
                objectId = canvasArray[this.unlockedCanvasIndex].getActiveObject().toJSON().id;
                var objectPromise = this.fabricService.setPropertyToObject(canvasArray[this.unlockedCanvasIndex], objectId, property, isButtonProperty);
                promises.push(objectPromise);
            }
            else {
                canvasArray.forEach((canvas, index) => {
                    var objectPromise = this.fabricService.setPropertyToObject(canvas, objectId, property, isButtonProperty);
                    promises.push(objectPromise);
                });
            }
            Promise.all(promises).then(result => {
                resolve(canvasArray);
            });
        });
    }
    replaceImage(image) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.isReplaceMode) {
                if (this.isSingleMode == true) {
                    this.replaceImageSrc(this.canvas[this.unlockedCanvasIndex], image).then(result => {
                        this.renderStackObjects();
                    });
                }
                else {
                    var promises = [];
                    this.canvas.forEach(element => {
                        var pro = this.replaceImageSrc(element, image);
                        promises.push(pro);
                    });
                    yield Promise.all(promises).then(result => {
                        this.renderStackObjects();
                    });
                }
            }
        });
    }
    replaceImageFromUser(e) {
        var file = e.target.files[0];
        var that = this;
        var reader = new FileReader();
        reader.onload = function (f) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                var data = f.target.result;
                if (that.isSingleMode == true) {
                    that.replaceImageSrc(that.canvas[that.unlockedCanvasIndex], data).then(result => {
                        that.renderStackObjects();
                    });
                }
                else {
                    var promises = [];
                    that.canvas.forEach(element => {
                        var pro = that.replaceImageSrc(element, data);
                        promises.push(pro);
                    });
                    yield Promise.all(promises).then(result => {
                        that.renderStackObjects();
                    });
                }
            });
        };
        reader.readAsDataURL(file);
    }
    replaceImageSrc(element, imageSrc) {
        return new Promise(resolve => {
            let object = element.getActiveObject() || element.getItemByName('id', this.activatedLayer.id);
            var scaledWidth = object.getScaledWidth();
            var scaledHeight = object.getScaledHeight();
            object.setSrc(imageSrc, function (img) {
                object.setCoords();
                object.scaleToHeight(scaledHeight);
                object.scaleToWidth(scaledWidth);
                element.renderAll();
                resolve();
            });
        });
    }
    changeFontFamily(fontFamily, isButton = false) {
        this._getFontFromFamily(fontFamily).then(result => {
            this.props.font = result;
            if (result != {}) {
                this.fabricService._loadFont(this.props.font.fontName, this.props.font.fontSrc).then(result => {
                    this.props.fontFamily = this.props.font.fontName;
                    this.setProperty(this.canvas, this.activatedLayer.id, { fontFamily: this.props.fontFamily, fontName: this.props.font.fontName, fontSrc: this.props.font.fontSrc }, isButton);
                }, err => {
                    console.log("font Can't load", err);
                }).catch(err => {
                    console.log("font Can't load", err);
                });
            }
        });
    }
    _getFontFromFamily(family) {
        return new Promise(resolve => {
            var font = {};
            this.fontList.forEach(element => {
                if (element.fontName == family) {
                    font = element;
                }
            });
            resolve(font || {});
        });
    }
    setText(text, isButton = false) {
        this.setProperty(this.canvas, this.activatedLayer.id, { text: text }, isButton);
        this.renderStackObjects();
    }
    setFontSize(fontSize, isButton = false) {
        // math.sign represent that numer is positive or negetive
        if (fontSize && (Math.sign(fontSize) == 1 || Math.sign(fontSize) == 0))
            this.setProperty(this.canvas, this.activatedLayer.id, { fontSize: fontSize }, isButton);
    }
    // Button Text Change Evencts  for resize button Automatic
    focusButtonTextArea() {
        if (this.isSingleMode == true) {
            let singleCanvas = this.canvas[this.unlockedCanvasIndex];
            let id = typeof singleCanvas.getActiveObject() != 'undefined' && singleCanvas.getActiveObject() != null ? singleCanvas.getActiveObject().id : this.activatedLayer.id;
            singleCanvas.getItemByName('id', id).fire('_TextEditingEnter');
        }
        else {
            this.canvas.forEach(element => {
                element.getItemByName('id', this.activatedLayer.id).fire('_TextEditingEnter');
            });
        }
    }
    blurButtonTextArea() {
        if (this.isSingleMode == true) {
            let singleCanvas = this.canvas[this.unlockedCanvasIndex];
            let id = typeof singleCanvas.getActiveObject() != 'undefined' && singleCanvas.getActiveObject() != null ? singleCanvas.getActiveObject().id : this.activatedLayer.id;
            singleCanvas.getItemByName('id', id).fire('_TextEditingExit');
        }
        else {
            this.canvas.forEach(element => {
                element.getItemByName('id', this.activatedLayer.id).fire('_TextEditingExit');
            });
        }
    }
    setButtonText(text, buttonEditor) {
        this.setProperty(this.canvas, this.activatedLayer.id, { text: text }, buttonEditor);
        this.renderStackObjects();
        if (this.isSingleMode == true) {
            let singleCanvas = this.canvas[this.unlockedCanvasIndex];
            let id = typeof singleCanvas.getActiveObject() != 'undefined' && singleCanvas.getActiveObject() != null ? singleCanvas.getActiveObject().id : this.activatedLayer.id;
            let object = singleCanvas.getItemByName('id', id);
            object.fire('_TextChange');
            singleCanvas.renderAll();
        }
        else {
            this.canvas.forEach(element => {
                let object = element.getItemByName('id', this.activatedLayer.id);
                object.fire('_TextChange');
                element.renderAll();
            });
        }
    }
    // Button Text Change Events Finish Here
    setButtonStrokeColor(color) {
        this.props.buttonStrokeColor = color;
        this.setProperty(this.canvas, this.activatedLayer.id, { buttonStrokeColor: color }, true);
        this.renderStackObjects();
    }
    setButtonStrokeSize(size) {
        this.setProperty(this.canvas, this.activatedLayer.id, { buttonStrokeWidth: size }, true);
        this.renderStackObjects();
    }
    setButtonFill(color) {
        this.props.buttonFill = color;
        this.setProperty(this.canvas, this.activatedLayer.id, { buttonFill: color }, true);
        this.renderStackObjects();
    }
    setButtonGradient(colorArray) {
        colorArray.length <= 0 ? this.props.buttonGradientArray = JSON.parse(JSON.stringify(_app_constants__WEBPACK_IMPORTED_MODULE_4__["defaultGradientArray"])) : this.props.buttonGradientArray = colorArray;
        var colorStop = this.helperService._convertStopIntoOffsetColorArray(this.props.buttonGradientArray);
        if (this.isSingleMode == false) {
            this.canvas.forEach(canvas => {
                let obj = canvas.getItemByName('id', this.activatedLayer.id);
                if (obj)
                    this._setGradientToButton(canvas, JSON.parse(JSON.stringify(colorStop)), obj);
            });
        }
        else {
            var canvas = this.canvas[this.unlockedCanvasIndex];
            this._setGradientToButton(canvas, JSON.parse(JSON.stringify(colorStop)), canvas.getActiveObject());
        }
    }
    _setGradientToButton(canvas, colorStop, object) {
        // let object = canvas.getItemByName('id', this.activatedLayer.id);
        let invertangle = (this.props.buttonGradientAngle + 180) > 360 ? (this.props.buttonGradientAngle + 180) - 360 : (this.props.buttonGradientAngle + 180);
        let angle = this.props.buttonGradientAngle;
        let x1, y1, x2, y2;
        let button = { top: object.top, left: object.left, width: object.width, height: object.height };
        let p1 = this.helperService.edgeOfView(button, invertangle);
        let p2 = this.helperService.edgeOfView(button, angle);
        x1 = p1.x;
        y1 = p1.y;
        x2 = p2.x;
        y2 = p2.y;
        var grad;
        if (this.props.gradientType == 'radial') {
            if (this.props.gradientPositionIsCenter == true) {
                x2 = object.width / 2;
                y2 = object.height / 2;
            }
            grad = new fabric.Gradient({
                type: "radial",
                coords: {
                    r1: 0,
                    r2: object.height,
                    x1: x2,
                    y1: y2,
                    x2: x2,
                    y2: y2,
                },
                colorStops: colorStop,
                gradientAngle: this.props.buttonGradientAngle || 0,
                isGradientInCenter: this.props.gradientPositionIsCenter
            });
        }
        else {
            grad = new fabric.Gradient({
                type: "linear",
                coords: {
                    x1: x1,
                    y1: y1,
                    x2: x2,
                    y2: y2,
                },
                colorStops: colorStop,
                gradientAngle: this.props.buttonGradientAngle || 0
            });
        }
        if (grad) {
            this.fabricService.setPropertyToObject(canvas, object.id, { buttonFill: grad, gradientAngle: this.props.buttonGradientAngle || 0 }, true);
            canvas.renderAll();
        }
    }
    setButtonRadius(radius) {
        this.setProperty(this.canvas, this.activatedLayer.id, { buttonRx: radius, buttonRy: radius }, true);
        this.renderStackObjects();
    }
    toggleStyle(style, isButton = false) {
        switch (style) {
            case 'bold':
                this.props.isBold = !this.props.isBold;
                this.setProperty(this.canvas, this.activatedLayer.id, { fontWeight: this.props.isBold ? 'bold' : 'normal' }, isButton);
                break;
            case 'italic':
                this.props.isItalic = !this.props.isItalic;
                this.setProperty(this.canvas, this.activatedLayer.id, { fontStyle: this.props.isItalic ? 'italic' : 'normal' }, isButton);
                break;
            case 'underline':
                this.props.isUnderLine = !this.props.isUnderLine;
                this.setProperty(this.canvas, this.activatedLayer.id, { underline: this.props.isUnderLine }, isButton);
                break;
            case 'strikethrough':
                this.props.isStrikeThrough = !this.props.isStrikeThrough;
                this.setProperty(this.canvas, this.activatedLayer.id, { linethrough: this.props.isStrikeThrough }, isButton);
                break;
            case 'overline':
                this.props.isOverLine = !this.props.isOverLine;
                this.setProperty(this.canvas, this.activatedLayer.id, { overline: this.props.isOverLine }, isButton);
                break;
        }
    }
    toggleAlignment(align, isButton = false) {
        this.props.textAlign = align;
        this.setProperty(this.canvas, this.activatedLayer.id, { textAlign: align }, isButton);
    }
    setOpacity(opacity, isButton = false) {
        var peroperty = isButton == true ? { textOpacity: opacity } : { opacity: opacity };
        this.setProperty(this.canvas, this.activatedLayer.id, peroperty, isButton);
    }
    setSpacing(charSpacing, isButton = false) {
        this.setProperty(this.canvas, this.activatedLayer.id, { charSpacing: charSpacing }, isButton);
    }
    setLineHeight(lineHeight, isButton = false) {
        this.setProperty(this.canvas, this.activatedLayer.id, { lineHeight: lineHeight }, isButton);
    }
    setFill(fill, isButton = false) {
        var property = isButton == true ? { color: fill } : { fill: fill };
        this.setProperty(this.canvas, this.activatedLayer.id, property, isButton);
    }
    setButtonIconFill(colorArray) {
        this.setProperty(this.canvas, this.activatedLayer.id, {
            iconColorArray: colorArray
        }, true);
    }
    setButtonIconSize(buttonIconSize) {
        this.setProperty(this.canvas, this.activatedLayer.id, {
            iconSize: buttonIconSize
        }, true);
    }
    setPreGradient(color) {
        this.props.canvasGradientArray = color.colorArray;
        this.props.gradientAngle = color.angle;
        this.props.gradientPositionIsCenter = color.gradientPositionIsCenter;
        this.props.gradientType = color.type;
        this.setCanvasGradient(this.props.canvasGradientArray);
    }
    setCanvasFill(color) {
        if (this.isSingleMode == true) {
            this.removeBackgroundImage().then(result => {
                let canvas = this.canvas[this.unlockedCanvasIndex];
                canvas.setBackgroundColor(color, canvas.renderAll.bind(canvas));
                this.getBackgroundType();
            });
        }
        else {
            this.removeBackgroundImage().then(result => {
                this.canvas.forEach(element => {
                    element.setBackgroundColor(color, element.renderAll.bind(element));
                });
                this.getBackgroundType();
            });
        }
    }
    setCanvasGradient(colorArray) {
        colorArray.length <= 0 ? this.props.canvasGradientArray = _app_constants__WEBPACK_IMPORTED_MODULE_4__["defaultGradientArray"] : this.props.canvasGradientArray = colorArray;
        var colorStop = this.helperService._convertStopIntoOffsetColorArray(this.props.canvasGradientArray);
        if (this.isSingleMode == false) {
            this.canvas.forEach(canvas => {
                this._setGradientToCanvas(canvas, colorStop);
            });
            this.getBackgroundType();
        }
        else {
            this._setGradientToCanvas(this.canvas[this.unlockedCanvasIndex], colorStop);
            this.getBackgroundType();
        }
    }
    _setGradientToCanvas(canvas, colorStop) {
        let invertangle = (this.props.gradientAngle + 180) > 360 ? (this.props.gradientAngle + 180) - 360 : (this.props.gradientAngle + 180);
        let angle = this.props.gradientAngle;
        let x1, y1, x2, y2;
        let c = { width: canvas.width, height: canvas.height };
        let p1 = this.helperService.edgeOfView(c, invertangle);
        let p2 = this.helperService.edgeOfView(c, angle);
        x1 = p1.x;
        y1 = p1.y;
        x2 = p2.x;
        y2 = p2.y;
        var grad;
        if (this.props.gradientType == 'radial') {
            if (this.props.gradientPositionIsCenter == true) {
                x2 = canvas.width / 2;
                y2 = canvas.height / 2;
            }
            grad = new fabric.Gradient({
                type: "radial",
                coords: {
                    r1: 0,
                    r2: canvas.height,
                    x1: x2,
                    y1: y2,
                    x2: x2,
                    y2: y2,
                },
                colorStops: colorStop,
                gradientAngle: this.props.gradientAngle || 0,
                isGradientInCenter: this.props.gradientPositionIsCenter
            });
        }
        else {
            grad = new fabric.Gradient({
                type: "linear",
                coords: {
                    x1: x1,
                    y1: y1,
                    x2: x2,
                    y2: y2,
                },
                colorStops: colorStop,
                gradientAngle: this.props.gradientAngle || 0
            });
        }
        if (grad) {
            canvas.backgroundColor = grad;
            canvas.backgroundImage = null;
            canvas.renderAll();
        }
    }
    setCanvasImage(image) {
        let that = this;
        // add background image
        if (that.isSingleMode == true) {
            fabric.Image.fromURL(image, (img) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                let element = that.canvas[that.unlockedCanvasIndex];
                that.fabricService.getScaleRatio(element.width, element.height, img.width, img.height, that.props.scaleMode).then(result => {
                    if (result && result.scaleMode) {
                        element.setBackgroundImage(img, () => {
                            element.renderAll();
                            that.getBackgroundType();
                        }, {
                            scaleX: result.scaleX,
                            scaleY: result.scaleY,
                            top: result.offsetY,
                            left: result.offsetX,
                            scaleMode: result.scaleMode
                        });
                    }
                    else {
                        console.log('background not scaled Properly');
                    }
                });
            }));
        }
        else {
            for (let i = 0, length = this.canvas.length; i < length; i++) {
                fabric.Image.fromURL(image, (img) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    const element = this.canvas[i];
                    yield that.fabricService.getScaleRatio(element.width, element.height, img.width, img.height, that.props.scaleMode).then((result) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                        yield that._setBackgroundImage(result, element, img);
                    }));
                }));
            }
        }
    }
    _setBackgroundImage(result, element, img) {
        if (result && result.scaleMode) {
            element.setBackgroundImage(img, () => {
                element.renderAll();
                // this.getBackgroundType();
            }, {
                scaleX: result.scaleX,
                scaleY: result.scaleY,
                top: result.offsetY,
                left: result.offsetX,
                scaleMode: result.scaleMode
            });
        }
        else {
            console.log('background not scaled Properly');
        }
    }
    setImgAsBgFromUser(e) {
        var file = e.target.files[0];
        var that = this;
        var reader = new FileReader();
        reader.onload = function (f) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                var data = f.target.result;
                that.setCanvasImage(data);
            });
        };
        reader.readAsDataURL(file);
    }
    removeBackgroundImage() {
        return new Promise(resolve => {
            this.getBackgroundType();
            if (this.isBackgorundImage) {
                if (this.isSingleMode == true) {
                    this.canvas[this.unlockedCanvasIndex].backgroundImage = null;
                    this.canvas[this.unlockedCanvasIndex].renderAll();
                    resolve();
                }
                else {
                    this.canvas.forEach(element => {
                        element.backgroundImage = null;
                        element.renderAll();
                    });
                    resolve();
                }
            }
            else {
                resolve();
            }
        });
    }
    changeScaleMode(scaleMode) {
        var srcList = [];
        this.canvas.forEach(element => {
            if (element.backgroundImage)
                srcList.push(element.backgroundImage.getElement().src);
        });
        var finalSrc = this.getFinalValue(srcList);
        var imageHeight = 0, imageWidth = 0;
        if (finalSrc) {
            this.helperService.getMeta(finalSrc).then(imgdata => {
                imageHeight = imgdata.height;
                imageWidth = imgdata.width;
                this.canvas.forEach(element => {
                    this.fabricService.getScaleRatio(element.width, element.height, imageWidth, imageHeight, scaleMode).then((result) => {
                        if (result && result.scaleMode && element.backgroundImage) {
                            element.backgroundImage.set({
                                scaleX: result.scaleX,
                                scaleY: result.scaleY,
                                left: result.offsetX,
                                top: result.offsetY
                            });
                            element.renderAll();
                        }
                    });
                });
            });
        }
    }
    setBackground(backgroundColor, isButton = false) {
        var property = isButton == true ? { backgroundColor: backgroundColor } : { textBackgroundColor: backgroundColor };
        this.setProperty(this.canvas, this.activatedLayer.id, property, isButton);
    }
    setShadow(shadow, isButton = false) {
        var property = isButton == true ? { buttonShadow: shadow } : { shadow: shadow };
        this.setProperty(this.canvas, this.activatedLayer.id, property, isButton);
    }
    setBTextShadow(shadow) {
        this.setProperty(this.canvas, this.activatedLayer.id, { textShadow: shadow }, true);
    }
    flipImage(value) {
        if (value == 'horizontal') {
            this.props.flipX = !this.props.flipX;
            this.setProperty(this.canvas, this.activatedLayer.id, { flipX: this.props.flipX });
        }
        else if (value == 'vertical') {
            this.props.flipY = !this.props.flipY;
            this.setProperty(this.canvas, this.activatedLayer.id, { flipY: this.props.flipY });
        }
    }
    changePosition(position) {
        this.objPosition = position;
        this.setPosition(this.objPosition);
    }
    setPosition(position) {
        // position offset used for keep object little-bit far from edge of canvas
        if (this.isSingleMode == true) {
            let canvas = this.canvas[this.unlockedCanvasIndex];
            let object = canvas.getActiveObject() || canvas.getItemByName('id', this.activatedLayer.id);
            this._getNewPosition(position, object, canvas).then(result => {
                if (typeof result != "undefined") {
                    this._setNewPosition(canvas, object, result);
                }
            });
        }
        else {
            this.canvas.forEach(element => {
                let object = element.getItemByName('id', this.activatedLayer.id);
                if (object) {
                    this._getNewPosition(position, object, element).then(result => {
                        if (typeof result != "undefined") {
                            if (this.applyFor == 'all') {
                                this._setNewPosition(element, object, result);
                            }
                            else if (this.applyFor == 'square' && this.fabricService.isCanvasSquare(element)) {
                                this._setNewPosition(element, object, result);
                            }
                            else if (this.applyFor == 'portrait' && this.fabricService.isCanvasPortrait(element)) {
                                this._setNewPosition(element, object, result);
                            }
                            else if (this.applyFor == 'landscape' && this.fabricService.isCanvasLandscape(element)) {
                                this._setNewPosition(element, object, result);
                            }
                        }
                    });
                }
            });
        }
    }
    _getNewPosition(position, object, canvas) {
        let bounds = object.getBoundingRect(), objectCenterTop = bounds.height / 2, objectCenterLeft = bounds.width / 2, objectWidth = bounds.width, objectHeight = bounds.height, positionOffset = _app_constants__WEBPACK_IMPORTED_MODULE_4__["canvasBorderOffset"], canvasHeight = canvas.getHeight(), canvasWidth = canvas.getWidth(), top, left, alignment = 'left';
        return new Promise((resolve, reject) => {
            switch (position) {
                case 'tl':
                    top = 0 + positionOffset + objectCenterTop;
                    left = 0 + positionOffset + objectCenterLeft;
                    alignment = 'left';
                    resolve({ alignment: alignment, top: top, left: left });
                    break;
                case 'tm':
                    left = (canvasWidth / 2);
                    top = 0 + positionOffset + objectCenterTop;
                    alignment = 'center';
                    resolve({ alignment: alignment, top: top, left: left });
                    break;
                case 'tr':
                    left = canvasWidth - (objectWidth / 2) - positionOffset;
                    top = 0 + positionOffset + objectCenterTop;
                    alignment = 'right';
                    resolve({ alignment: alignment, top: top, left: left });
                    break;
                case 'ml':
                    left = 0 + positionOffset + objectCenterLeft;
                    top = (canvasHeight / 2);
                    alignment = 'left';
                    resolve({ alignment: alignment, top: top, left: left });
                    break;
                case 'mm':
                    left = (canvasWidth / 2);
                    top = (canvasHeight / 2);
                    alignment = 'center';
                    resolve({ alignment: alignment, top: top, left: left });
                    break;
                case 'mr':
                    left = canvasWidth - (objectWidth / 2) - positionOffset;
                    top = (canvasHeight / 2);
                    alignment = 'right';
                    resolve({ alignment: alignment, top: top, left: left });
                    break;
                case 'bl':
                    left = 0 + positionOffset + objectCenterLeft;
                    top = canvasHeight - (objectHeight / 2) - positionOffset;
                    alignment = 'left';
                    resolve({ alignment: alignment, top: top, left: left });
                    break;
                case 'bm':
                    left = (canvasWidth / 2);
                    top = canvasHeight - (objectHeight / 2) - positionOffset;
                    alignment = 'center';
                    resolve({ alignment: alignment, top: top, left: left });
                    break;
                case 'br':
                    left = canvasWidth - (objectWidth / 2) - positionOffset;
                    top = canvasHeight - (objectHeight / 2) - positionOffset;
                    alignment = 'right';
                    resolve({ alignment: alignment, top: top, left: left });
                    break;
                default:
                    top = 0 + positionOffset + objectCenterTop;
                    left = 0 + positionOffset + objectCenterLeft;
                    alignment = 'left';
                    resolve({ alignment: alignment, top: top, left: left });
                    break;
            }
        });
    }
    _setNewPosition(element, object, result) {
        if (this.activatedLayer.type == 'Text') {
            this.props.textAlign = result.alignment;
            object.set({
                textAlign: result.alignment
            });
        }
        object.setPositionByOrigin({
            y: result.top,
            x: result.left
        }, 'center', 'center');
        object.setCoords();
        element.renderAll();
    }
    backToSizes() {
        this.router.navigate(['/']);
    }
    // Export Canvases into JSON
    exportJSON() {
        this.showLoader();
        var jsonSet = [];
        this.canvas.forEach(element => {
            var json = this.generateJSON(element);
            jsonSet.push(json);
        });
        console.log('json set', JSON.stringify(jsonSet));
        this.hideLoader();
    }
    generateJSON(element) {
        var json = {
            "text_json": [],
            "sticker_json": [],
            "button_json": [],
            "image_sticker_json": [],
            "frame_json": {
                "frame_image": "",
                "frame_color": ""
            },
            "background_json": {
                "scaleMode": element.backgroundImage ? element.backgroundImage.toJSON().scaleMode : '',
                "background_image": element.backgroundImage ? element.backgroundImage.toJSON().src : '',
                "background_color": element.backgroundColor ? element.backgroundColor : ''
            },
            "sample_image": "",
            "sizeType": element.sizeType || '',
            "height": element.height,
            "width": element.width,
        };
        element.forEachObject(object => {
            switch (object.contentType) {
                case 1:
                    json.text_json.push({
                        "xPos": Number((object.left).toFixed(2)),
                        "yPos": Number((object.top).toFixed(2)),
                        "width": Number((object.width).toFixed(2)),
                        "color": object.fill,
                        "text": object.text,
                        "size": object.fontSize,
                        "fontName": object.fontFamily,
                        "fontPath": object.fontSrc,
                        "alignment": object.textAlign == 'left' ? 1 : object.textAlign == 'center' ? 2 : object.textAlign == 'right' ? 3 : object.textAlign == 'justify' ? 4 : 1,
                        "bg_image": "",
                        "texture_image": "",
                        "opacity": object.opacity * 100,
                        "angle": object.angle,
                        "scaleX": object.scaleX,
                        "scaleY": object.scaleY,
                        "shadowColor": object.shadow.color,
                        "shadowRadius": object.shadow.blur,
                        "shadowDistance": (object.shadow.offsetX + object.shadow.offsetY) / 2
                    });
                    break;
                case 2:
                    json.sticker_json.push({
                        "xPos": Math.round(object.left),
                        "yPos": Math.round(object.top),
                        "width": object.width,
                        "height": object.height,
                        "scaleX": Number((object.scaleX).toFixed(2)),
                        "scaleY": Number((object.scaleY).toFixed(2)),
                        "sticker_image": object.src || object.toJSON().src,
                        "angle": object.angle,
                        "is_round": 0
                    });
                    break;
                case 5:
                    /*  json.button_json.push({
                       "text": object.text,
                       "xPos": Math.round(object.left),
                       "yPos": Math.round(object.top),
                       "angle": object.angle,
                       "width": object.width,
                       "scaleX": Number((object.scaleX).toFixed(2)),
                       "scaleY": Number((object.scaleY).toFixed(2)),
                       "buttonFill": object.buttonFill,
                       "buttonStrokeColor": object.buttonStrokeColor ? object.buttonStrokeColor : '',
                       "buttonStrokeWidth": object.buttonStrokeWidth ? object.buttonStrokeWidth : 0,
                       "buttonRx": object.buttonRx ? object.buttonRx : 0,
                       "buttonRy": object.buttonRy ? object.buttonRy : 0,
                       "stroke": object.stroke ? object.stroke : '',
                       "strokeWidth": object.strokeWidth ? object.strokeWidth : 0,
                       "fontName": object.fontName || '',
                       "fontPath": object.fontSrc || '',
                       "alignment": object.textAlign == 'left' ? 1 : object.textAlign == 'center' ? 2 : object.textAlign == 'right' ? 3 : object.textAlign == 'justify' ? 4 : 1,
                       "isBold": object.isBold,
                       "isItalic": object.isItalic,
                       "isUnderLine": object.isUnderLine,
                       "isStrikeThrough": object.isStrikeThrough,
                       "isOverLine": object.isOverLine,
                       "opacity": object.opacity * 100,
                       "charSpacing": object.charSpacing,
                       "lineHeight": object.lineHeight,
                       "shadowColor": object.shadow ? object.shadow.color : '',
                       "shadowRadius": object.shadow ? object.shadow.blur : 0,
                       "shadowDistance": object.shadow ? (object.shadow.offsetX + object.shadow.offsetY) / 2 : 0,
                       "fill": object.fill,
                       "size": object.fontSize
                     }); */
                    json.button_json.push({
                        "text": object.text,
                        "xPos": Math.round(object.left),
                        "yPos": Math.round(object.top),
                        "angle": object.angle,
                        "width": object.width,
                        "height": object.height,
                        "scaleX": Number((object.scaleX).toFixed(2)),
                        "scaleY": Number((object.scaleY).toFixed(2)),
                        "buttonFill": object.buttonFill,
                        "buttonStrokeColor": object.buttonStrokeColor ? object.buttonStrokeColor : '',
                        "buttonStrokeWidth": object.buttonStrokeWidth ? object.buttonStrokeWidth : 0,
                        "buttonRx": object.buttonRx ? object.buttonRx : 0,
                        "buttonRy": object.buttonRy ? object.buttonRy : 0,
                        "stroke": object.stroke ? object.stroke : '',
                        "strokeWidth": object.strokeWidth ? object.strokeWidth : 0,
                        "fontName": object.fontName || '',
                        "fontPath": object.fontSrc || '',
                        "alignment": object.textAlign == 'left' ? 1 : object.textAlign == 'center' ? 2 : object.textAlign == 'right' ? 3 : object.textAlign == 'justify' ? 4 : 1,
                        "fontWeight": object.fontWeight,
                        "fontStyle": object.fontStyle,
                        "underline": object.underline,
                        "linethrough": object.linethrough,
                        "overline": object.overline,
                        "textOpacity": object.textOpacity * 100,
                        "charSpacing": object.charSpacing,
                        "lineHeight": object.lineHeight,
                        "textShadow": object.textShadow,
                        "buttonShadow": object.buttonShadow,
                        // "shadowColor": object.shadow ? object.shadow.color : '',
                        // "shadowRadius": object.shadow ? object.shadow.blur : 0,
                        // "shadowDistance": object.shadow ? (object.shadow.offsetX + object.shadow.offsetY) / 2 : 0,
                        "color": object.color,
                        "fontSize": object.fontSize,
                        "paddingOffset": object.paddingOffset,
                        "backgroundColor": object.backgroundColor,
                    });
                    break;
            }
        });
        return json;
    }
    download() {
        this.showLoader();
        setTimeout(() => {
            let zip = new jszip__WEBPACK_IMPORTED_MODULE_8___default.a(), that = this;
            this.canvas.forEach(element => {
                // let w = window.open('')
                // w.document.write(element.toSVG())
                // return 'data:image/svg+xml;utf8,' + encodeURIComponent(element.toSVG());
                var daurl300dpi = Object(changedpi__WEBPACK_IMPORTED_MODULE_6__["changeDpiDataUrl"])(element.toDataURL({ format: 'jpeg', quality: 1 }), 300);
                zip.file(element.sizeType + ".jpeg", daurl300dpi.split(',')[1], { base64: true });
            });
            zip.generateAsync({ type: "blob" }).then(function (content) {
                file_saver__WEBPACK_IMPORTED_MODULE_9___default.a.saveAs(content, "Banners.zip");
                that.hideLoader();
            });
        }, 100);
    }
    downloadSingleCanvas(index) {
        // multiplier:  1 / (this.zoom * this.canvas.getRetinaScaling()) * scale_value_for_get_large_image)
        var multiplier = 1 / (1 * this.canvas[index].getRetinaScaling()) * 1;
        console.log('multiplier', multiplier, this.canvas[index].getRetinaScaling());
        this.helperService._download(this.canvas[index].sizeType + ".png", this.canvas[index].toDataURL({ format: 'png', quality: 1, enableRetinaScaling: true, multiplier: multiplier, scaleShadow: true }));
    }
};
GeneratorExperimentComponent.ctorParameters = () => [
    { type: _fabric_service__WEBPACK_IMPORTED_MODULE_3__["FabricService"] },
    { type: _helper_service__WEBPACK_IMPORTED_MODULE_7__["HelperService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('userUploadImage', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], GeneratorExperimentComponent.prototype, "stickerImageControl", void 0);
GeneratorExperimentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-generator-experiment',
        template: __webpack_require__(/*! raw-loader!./generator-experiment.component.html */ "./node_modules/raw-loader/index.js!./src/app/generator-experiment/generator-experiment.component.html"),
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["trigger"])('myInsertRemoveTrigger', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ left: '100%' }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animate"])('500ms cubic-bezier(0.16, 1, 0.3, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ left: '0px' })),
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["transition"])(':leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["animate"])('500ms cubic-bezier(0.16, 1, 0.3, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_10__["style"])({ left: '100%' }))
                ])
            ]),
        ],
        styles: [__webpack_require__(/*! ./generator-experiment.component.css */ "./src/app/generator-experiment/generator-experiment.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_fabric_service__WEBPACK_IMPORTED_MODULE_3__["FabricService"], _helper_service__WEBPACK_IMPORTED_MODULE_7__["HelperService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], GeneratorExperimentComponent);



/***/ }),

/***/ "./src/app/helper.service.ts":
/*!***********************************!*\
  !*** ./src/app/helper.service.ts ***!
  \***********************************/
/*! exports provided: HelperService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelperService", function() { return HelperService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HelperService = class HelperService {
    constructor() { }
    getMeta(src) {
        return new Promise((resolve, reject) => {
            var img = new Image;
            img.crossOrigin = "anonymous",
                img.onload = function (e) {
                    resolve({
                        height: img.height,
                        width: img.width,
                        src: img.src
                    });
                };
            img.onerror = function (e) {
                reject(e);
            };
            img.src = src;
        });
    }
    dataURLtoBlob(dataurl) {
        let parts = dataurl.split(','), mime = parts[0].match(/:(.*?);/)[1];
        if (parts[0].indexOf('base64') !== -1) {
            let bstr = atob(parts[1]), n = bstr.length, u8arr = new Uint8Array(n);
            while (n--) {
                u8arr[n] = bstr.charCodeAt(n);
            }
            return new Blob([u8arr], { type: mime });
        }
        else {
            let raw = decodeURIComponent(parts[1]);
            return new Blob([raw], { type: mime });
        }
    }
    _download(filename, dataUrl) {
        let element = document.createElement('a');
        let dataBlob = this.dataURLtoBlob(dataUrl);
        element.setAttribute('href', URL.createObjectURL(dataBlob));
        element.setAttribute('download', filename);
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    }
    _convertOffsetIntoStopColorArray(colorArray) {
        let cArray = [];
        colorArray.forEach(element => {
            cArray.push({ color: element.color, stop: element.offset });
        });
        return cArray;
    }
    _convertStopIntoOffsetColorArray(colorArray) {
        let cArray = [];
        colorArray.forEach(element => {
            cArray.push({ color: element.color, offset: element.stop });
        });
        return cArray;
    }
    generateCssFromArray(colorstopArray) {
        let tmp = JSON.parse(JSON.stringify(colorstopArray));
        return new Promise((resolve, reject) => {
            if (colorstopArray && colorstopArray.length >= 2) {
                let cssBackground = 'linear-gradient(to right';
                // this.cssColorArray = [];
                this.sortColorArray(tmp, 'stop').then(sortedResult => {
                    sortedResult.forEach((element, index) => {
                        let stop = Number(element.stop);
                        let percent = this.getPercentFromValue(stop);
                        cssBackground += ', ' + element.color + ' ' + percent + '%';
                        element.stopInPercent = percent;
                    });
                    cssBackground += ')';
                    resolve(cssBackground);
                });
            }
        });
    }
    sortColorArray(arr, prop) {
        return new Promise(resolve => {
            arr.sort(this.GetSortOrder(prop));
            resolve(arr);
        });
    }
    GetSortOrder(prop) {
        return function (a, b) {
            if (a[prop] > b[prop]) {
                return 1;
            }
            else if (a[prop] < b[prop]) {
                return -1;
            }
            return 0;
        };
    }
    getPercentFromValue(value) {
        return ((value - 0) / (1 - 0)) * 100;
    }
    edgeOfView(rect, deg) {
        // This function return boundry point at button edge based on angle value from center.
        // Picked From : https://stackoverflow.com/questions/33206498/find-rectangle-boundary-point-at-an-angle-from-point-that-is-not-in-the-middle-o
        var twoPI = Math.PI * 2;
        var theta = deg * Math.PI / 180;
        while (theta < -Math.PI) {
            theta += twoPI;
        }
        while (theta > Math.PI) {
            theta -= twoPI;
        }
        var rectAtan = Math.atan2(rect.height, rect.width);
        var tanTheta = Math.tan(theta);
        var region;
        if ((theta > -rectAtan) && (theta <= rectAtan)) {
            region = 1;
        }
        else if ((theta > rectAtan) && (theta <= (Math.PI - rectAtan))) {
            region = 2;
        }
        else if ((theta > (Math.PI - rectAtan)) || (theta <= -(Math.PI - rectAtan))) {
            region = 3;
        }
        else {
            region = 4;
        }
        var edgePoint = { x: rect.width / 2, y: rect.height / 2 };
        var xFactor = 1;
        var yFactor = 1;
        switch (region) {
            case 1:
                yFactor = -1;
                break;
            case 2:
                yFactor = -1;
                break;
            case 3:
                xFactor = -1;
                break;
            case 4:
                xFactor = -1;
                break;
        }
        if ((region === 1) || (region === 3)) {
            edgePoint.x += xFactor * (rect.width / 2.); // "Z0"
            edgePoint.y += yFactor * (rect.width / 2.) * tanTheta;
        }
        else {
            edgePoint.x += xFactor * (rect.height / (2. * tanTheta)); // "Z1"
            edgePoint.y += yFactor * (rect.height / 2.);
        }
        return edgePoint;
    }
};
HelperService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], HelperService);



/***/ }),

/***/ "./src/app/icon-button-generator/icon-button-generator.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/icon-button-generator/icon-button-generator.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".no-data-margin {\n  margin: 15px;\n}\n\n.no-margin {\n  margin: 0px !important;\n}\n\n.error {\n  color: red;\n  font-size: 18px;\n  font-family: verdana;\n}\n\n/* tab css */\n\n.vertical-tab-button-container {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  width: 75px;\n  z-index: 10;\n  background-color: var(--dark-black);\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n\n.tab-button {\n  background: transparent;\n  border: 0px solid transparent;\n  color: white;\n  width: 100%;\n  cursor: pointer;\n  padding: 10px 0px;\n  outline: none;\n}\n\n.tab-icon {\n  width: 35px;\n}\n\n.tab-title {\n  margin: 0px;\n  padding: 0px;\n  font-size: 11px;\n}\n\n.tablinks.active {\n  background-color: var(--light-black);\n  position: relative;\n}\n\n.tablinks.active::after {\n  content: \"\";\n  position: absolute;\n  top: -8px;\n  right: -2px;\n  width: 10px;\n  height: 10px;\n  background-image: radial-gradient(circle at top left, #fff0 50%, var(--light-black) 60%);\n}\n\n.tablinks.active::before {\n  content: \"\";\n  position: absolute;\n  bottom: -8px;\n  right: -2px;\n  width: 10px;\n  height: 10px;\n  background-image: radial-gradient(circle at bottom left,\n      #fff0 50%,\n      var(--light-black) 60%);\n}\n\n.tabcontent {\n  height: calc(100% - 10px);\n}\n\n/* tab css over here */\n\n.background-tabs-links.active:hover {\n  background-color: var(--dark-purple);\n}\n\n.background-tabs-links.active {\n  background-color: var(--dark-purple);\n}\n\n.background-tabs-links {\n  background: var(--dark-black);\n  outline: none;\n  border: 0px solid transparent;\n  cursor: pointer;\n  flex: 1;\n  color: white;\n  border-radius: 3px;\n  padding: 10px;\n  margin: 10px;\n  font-size: 15px;\n  transition: 0.5s;\n}\n\n.background-tabs-links:hover {\n  background: rgba(255, 255, 255, 0.05);\n}\n\n.tab-button-btn-background {\n  width: 50%;\n  margin: 0px;\n  margin-bottom: 15px;\n  font-size: 12px;\n  padding: 8px;\n  border-radius: 0px;\n}\n\n/* property panel css */\n\n.property-panel {\n  background-color: var(--light-black);\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  z-index: 8;\n  overflow: hidden;\n}\n\n/* editor tab wrappers */\n\n.heading-tab-wrapper {\n  height: calc(100% - 20px);\n  width: calc(100% - 20px);\n  padding: 10px;\n}\n\n/* sidebar toggle css */\n\n.shown-left-sidebar {\n  left: 75px !important;\n}\n\n.shown-right-sidebar {\n  right: 0px !important;\n}\n\n.shown {\n  width: 350px;\n}\n\n.dark-button {\n  background-color: var(--dark-black) !important;\n}\n\n.header-style {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 10;\n  height: 60px;\n  line-height: 56px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.35);\n  background: linear-gradient(90deg, var(--dark-purple) 0, var(--light-purple) 100%);\n}\n\n.editor-left-sidebar {\n  width: 420px;\n  height: 100%;\n  /* background: var(--light-black); */\n  background: var(--milk-gray);\n  display: inline-block;\n  /* transition: width 0.2s; */\n  transition-property: all;\n  transition-duration: 0.2s;\n  transition-timing-function: ease-in-out;\n  /* position: relative; */\n  position: absolute;\n}\n\n.left-wrapper {\n  left: 75px !important;\n  width: calc(100% - 75px) !important;\n}\n\n.right-wrapper,\n.left-wrapper {\n  width: 100%;\n  height: 100%;\n  background: var(--light-black);\n  overflow: hidden;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  z-index: 2;\n}\n\n.property-panel-wrapper {\n  min-width: calc(350px - 25px);\n  padding: 10px;\n  height: calc(100% - 20px);\n}\n\n.property-panel-content {\n  width: calc(100% - 20px);\n  height: calc(100% - 65px);\n  margin-top: 15px;\n  overflow-y: auto;\n  overflow-x: hidden;\n  padding: 10px;\n}\n\n.inner-left-wrapper {\n  min-width: calc(350px - 15px);\n  height: 100%;\n  padding: 5px;\n}\n\n.editor-container {\n  position: absolute;\n  left: 420px;\n  right: 0px;\n  /* width: calc(100% - 615px); */\n  display: inline-block;\n  height: 100%;\n  overflow: overlay;\n  background-color: var(--milk-gray);\n  /* position: relative; */\n  z-index: 0;\n  vertical-align: top;\n  transition: 0.2s;\n}\n\n.main-wrapper {\n  position: absolute;\n  top: 60px;\n  height: calc(100% - 60px);\n  width: 100%;\n  bottom: 0;\n}\n\n.single-control-container {\n  display: flex;\n  padding-top: 5px;\n  margin-bottom: 10px;\n  width: 100%;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.font-selection-box {\n  background-color: #1e1e1e;\n  border: transparent;\n  border-radius: 5px;\n  padding: 5px;\n  color: white;\n  outline: none;\n  width: 245px;\n}\n\n.single-control-lable {\n  color: white;\n  font-family: \"Roboto\", Helvetica, Arial, sans-serif;\n  font-size: 13px;\n}\n\n.text-value-container {\n  font-size: 13px;\n  font-weight: 500;\n  width: calc(100% - 85px);\n  height: 85px;\n  border-radius: 0px;\n  border: 2px solid #dfe0e6;\n  color: #2e3246;\n  resize: none;\n  font-family: \"Roboto\", Helvetica, Arial, sans-serif;\n  outline: none;\n  transition: 0.5s;\n}\n\n.text-size-value-container:focus,\n.text-value-container:focus {\n  border-color: var(--dark-purple);\n}\n\n.text-size-value-container {\n  width: 100px;\n  height: 25px;\n  font-size: 14px;\n  font-weight: 500;\n}\n\n.font-style-buttons {\n  background-color: #1e1e1e;\n  border: none;\n  outline: 0 !important;\n  padding: 5px;\n  width: 30px;\n  height: 30px;\n  border-radius: 5px;\n  margin-left: 5px;\n  cursor: pointer;\n}\n\n.font-style-buttons:active {\n  box-shadow: inset 0px 0px 10px var(--light-black);\n}\n\n.font-style-buttons.active {\n  background-color: var(--dark-purple);\n}\n\n.color-value-display {\n  width: initial;\n  cursor: pointer;\n  margin-right: 5px;\n  margin-left: 0px;\n}\n\n.color-value-display {\n  padding: 5px;\n  background-color: #1e1e1e;\n  color: white;\n  font-family: \"Roboto\", Helvetica, Arial, sans-serif;\n  border-radius: 5px;\n  margin-left: 5px;\n  font-size: 10px;\n  min-width: 30px;\n  text-align: center;\n}\n\n.shadow-container {\n  background: #475386;\n  border-radius: 5px;\n  padding: 5px;\n  margin-bottom: 5px;\n}\n\n.color-picker-button {\n  width: 25px;\n  height: 25px;\n  border-radius: 5px;\n}\n\n.canvas-wrapper {\n  height: 100%;\n  display: flex;\n}\n\n#canvas-container {\n  margin: auto;\n  /* display: flex;\n    flex-wrap: wrap; */\n  align-items: center;\n  justify-content: space-around;\n}\n\n#canvas-container .canvas-item-container {\n  margin: 10px !important;\n}\n\n.group-title {\n  color: white;\n  font-weight: 600;\n  font-size: 15px;\n  border-bottom: 1px solid white;\n  display: block;\n  margin-bottom: 10px;\n  padding: 5px 0px 10px 5px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.gradient-control-container {\n  display: flex;\n  width: 100%;\n  align-items: center;\n  justify-content: space-around;\n}\n\n.gradient-type-btn {\n  border: 0px solid transparent;\n  border-radius: 3px;\n  padding: 3px;\n  margin: 0px 2px;\n  background: #00000066;\n  cursor: pointer;\n  outline: none;\n  transition: 0.3s;\n}\n\n.gradient-type-btn.active,\n.gradient-type-btn:hover {\n  background-color: var(--dark-purple);\n}\n\n.gradient-icon {\n  width: 20px;\n  height: 20px;\n  border-radius: 3px;\n}\n\n.radial-gradient {\n  background: radial-gradient(circle at 50% 50%, #000, #fff);\n}\n\n.linear-gradient {\n  background: linear-gradient(to right, #fff, #000);\n}\n\n.center-gradient-chckbox {\n  color: white;\n  font-size: 10px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  cursor: pointer;\n}\n\n.is-center-checkbox {\n  margin: 0px 5px;\n  cursor: pointer;\n}\n\n.is-center-checkbox-container {\n  margin: 5px 0px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaWNvbi1idXR0b24tZ2VuZXJhdG9yL2ljb24tYnV0dG9uLWdlbmVyYXRvci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGVBQWU7RUFDZixvQkFBb0I7QUFDdEI7O0FBRUEsWUFBWTs7QUFDWjtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sU0FBUztFQUNULE9BQU87RUFDUCxXQUFXO0VBQ1gsV0FBVztFQUNYLG1DQUFtQztFQUNuQyxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osV0FBVztFQUNYLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLHdGQUF3RjtBQUMxRjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaOzs2QkFFMkI7QUFDN0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUEsc0JBQXNCOztBQUV0QjtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLGVBQWU7RUFDZixPQUFPO0VBQ1AsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsWUFBWTtFQUNaLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQSx1QkFBdUI7O0FBQ3ZCO0VBQ0Usb0NBQW9DO0VBQ3BDLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sU0FBUztFQUNULFFBQVE7RUFDUixPQUFPO0VBQ1AsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjs7QUFFQSx3QkFBd0I7O0FBQ3hCO0VBQ0UseUJBQXlCO0VBQ3pCLHdCQUF3QjtFQUN4QixhQUFhO0FBQ2Y7O0FBRUEsdUJBQXVCOztBQUN2QjtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDhDQUE4QztBQUNoRDs7QUFFQTtFQUNFLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQix5Q0FBeUM7RUFDekMsa0ZBQWtGO0FBQ3BGOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixvQ0FBb0M7RUFDcEMsNEJBQTRCO0VBQzVCLHFCQUFxQjtFQUNyQiw0QkFBNEI7RUFDNUIsd0JBQXdCO0VBQ3hCLHlCQUF5QjtFQUN6Qix1Q0FBdUM7RUFDdkMsd0JBQXdCO0VBQ3hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixtQ0FBbUM7QUFDckM7O0FBRUE7O0VBRUUsV0FBVztFQUNYLFlBQVk7RUFDWiw4QkFBOEI7RUFDOUIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFNBQVM7RUFDVCxRQUFRO0VBQ1IsVUFBVTtBQUNaOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLGFBQWE7RUFDYix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxVQUFVO0VBQ1YsK0JBQStCO0VBQy9CLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtDQUFrQztFQUNsQyx3QkFBd0I7RUFDeEIsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLG1CQUFtQjtFQUNuQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osbURBQW1EO0VBQ25ELGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtFQUN4QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsWUFBWTtFQUNaLG1EQUFtRDtFQUNuRCxhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCOztBQUVBOztFQUVFLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlEQUFpRDtBQUNuRDs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLG1EQUFtRDtFQUNuRCxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaO3NCQUNvQjtFQUNwQixtQkFBbUI7RUFDbkIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsOEJBQThCO0VBQzlCLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLHlCQUFpQjtLQUFqQixzQkFBaUI7TUFBakIscUJBQWlCO1VBQWpCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7O0FBRUE7O0VBRUUsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSwwREFBMEQ7QUFDNUQ7O0FBRUE7RUFDRSxpREFBaUQ7QUFDbkQ7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLHlCQUFpQjtLQUFqQixzQkFBaUI7TUFBakIscUJBQWlCO1VBQWpCLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9pY29uLWJ1dHRvbi1nZW5lcmF0b3IvaWNvbi1idXR0b24tZ2VuZXJhdG9yLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm8tZGF0YS1tYXJnaW4ge1xuICBtYXJnaW46IDE1cHg7XG59XG5cbi5uby1tYXJnaW4ge1xuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xufVxuXG4uZXJyb3Ige1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtZmFtaWx5OiB2ZXJkYW5hO1xufVxuXG4vKiB0YWIgY3NzICovXG4udmVydGljYWwtdGFiLWJ1dHRvbi1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogNzVweDtcbiAgei1pbmRleDogMTA7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYmxhY2spO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi50YWItYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBjb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAxMDAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDEwcHggMHB4O1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4udGFiLWljb24ge1xuICB3aWR0aDogMzVweDtcbn1cblxuLnRhYi10aXRsZSB7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn1cblxuLnRhYmxpbmtzLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LWJsYWNrKTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4udGFibGlua3MuYWN0aXZlOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtOHB4O1xuICByaWdodDogLTJweDtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCB0b3AgbGVmdCwgI2ZmZjAgNTAlLCB2YXIoLS1saWdodC1ibGFjaykgNjAlKTtcbn1cblxuLnRhYmxpbmtzLmFjdGl2ZTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IC04cHg7XG4gIHJpZ2h0OiAtMnB4O1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IGJvdHRvbSBsZWZ0LFxuICAgICAgI2ZmZjAgNTAlLFxuICAgICAgdmFyKC0tbGlnaHQtYmxhY2spIDYwJSk7XG59XG5cbi50YWJjb250ZW50IHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxMHB4KTtcbn1cblxuLyogdGFiIGNzcyBvdmVyIGhlcmUgKi9cblxuLmJhY2tncm91bmQtdGFicy1saW5rcy5hY3RpdmU6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLXB1cnBsZSk7XG59XG5cbi5iYWNrZ3JvdW5kLXRhYnMtbGlua3MuYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1wdXJwbGUpO1xufVxuXG4uYmFja2dyb3VuZC10YWJzLWxpbmtzIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tZGFyay1ibGFjayk7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZsZXg6IDE7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW46IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgdHJhbnNpdGlvbjogMC41cztcbn1cblxuLmJhY2tncm91bmQtdGFicy1saW5rczpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSk7XG59XG5cbi50YWItYnV0dG9uLWJ0bi1iYWNrZ3JvdW5kIHtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZzogOHB4O1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG59XG5cbi8qIHByb3BlcnR5IHBhbmVsIGNzcyAqL1xuLnByb3BlcnR5LXBhbmVsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtYmxhY2spO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogODtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLyogZWRpdG9yIHRhYiB3cmFwcGVycyAqL1xuLmhlYWRpbmctdGFiLXdyYXBwZXIge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDIwcHgpO1xuICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi8qIHNpZGViYXIgdG9nZ2xlIGNzcyAqL1xuLnNob3duLWxlZnQtc2lkZWJhciB7XG4gIGxlZnQ6IDc1cHggIWltcG9ydGFudDtcbn1cblxuLnNob3duLXJpZ2h0LXNpZGViYXIge1xuICByaWdodDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5zaG93biB7XG4gIHdpZHRoOiAzNTBweDtcbn1cblxuLmRhcmstYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay1ibGFjaykgIWltcG9ydGFudDtcbn1cblxuLmhlYWRlci1zdHlsZSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgei1pbmRleDogMTA7XG4gIGhlaWdodDogNjBweDtcbiAgbGluZS1oZWlnaHQ6IDU2cHg7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMzUpO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHZhcigtLWRhcmstcHVycGxlKSAwLCB2YXIoLS1saWdodC1wdXJwbGUpIDEwMCUpO1xufVxuXG4uZWRpdG9yLWxlZnQtc2lkZWJhciB7XG4gIHdpZHRoOiA0MjBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICAvKiBiYWNrZ3JvdW5kOiB2YXIoLS1saWdodC1ibGFjayk7ICovXG4gIGJhY2tncm91bmQ6IHZhcigtLW1pbGstZ3JheSk7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgLyogdHJhbnNpdGlvbjogd2lkdGggMC4yczsgKi9cbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYWxsO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ubGVmdC13cmFwcGVyIHtcbiAgbGVmdDogNzVweCAhaW1wb3J0YW50O1xuICB3aWR0aDogY2FsYygxMDAlIC0gNzVweCkgIWltcG9ydGFudDtcbn1cblxuLnJpZ2h0LXdyYXBwZXIsXG4ubGVmdC13cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogdmFyKC0tbGlnaHQtYmxhY2spO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgei1pbmRleDogMjtcbn1cblxuLnByb3BlcnR5LXBhbmVsLXdyYXBwZXIge1xuICBtaW4td2lkdGg6IGNhbGMoMzUwcHggLSAyNXB4KTtcbiAgcGFkZGluZzogMTBweDtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAyMHB4KTtcbn1cblxuLnByb3BlcnR5LXBhbmVsLWNvbnRlbnQge1xuICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gNjVweCk7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmlubmVyLWxlZnQtd3JhcHBlciB7XG4gIG1pbi13aWR0aDogY2FsYygzNTBweCAtIDE1cHgpO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLmVkaXRvci1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDQyMHB4O1xuICByaWdodDogMHB4O1xuICAvKiB3aWR0aDogY2FsYygxMDAlIC0gNjE1cHgpOyAqL1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IG92ZXJsYXk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1pbGstZ3JheSk7XG4gIC8qIHBvc2l0aW9uOiByZWxhdGl2ZTsgKi9cbiAgei1pbmRleDogMDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgdHJhbnNpdGlvbjogMC4ycztcbn1cblxuLm1haW4td3JhcHBlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA2MHB4O1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDYwcHgpO1xuICB3aWR0aDogMTAwJTtcbiAgYm90dG9tOiAwO1xufVxuXG4uc2luZ2xlLWNvbnRyb2wtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmZvbnQtc2VsZWN0aW9uLWJveCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxZTFlMWU7XG4gIGJvcmRlcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogNXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHdpZHRoOiAyNDVweDtcbn1cblxuLnNpbmdsZS1jb250cm9sLWxhYmxlIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG4udGV4dC12YWx1ZS1jb250YWluZXIge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA4NXB4KTtcbiAgaGVpZ2h0OiA4NXB4O1xuICBib3JkZXItcmFkaXVzOiAwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNkZmUwZTY7XG4gIGNvbG9yOiAjMmUzMjQ2O1xuICByZXNpemU6IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBvdXRsaW5lOiBub25lO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuXG4udGV4dC1zaXplLXZhbHVlLWNvbnRhaW5lcjpmb2N1cyxcbi50ZXh0LXZhbHVlLWNvbnRhaW5lcjpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZGFyay1wdXJwbGUpO1xufVxuXG4udGV4dC1zaXplLXZhbHVlLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5mb250LXN0eWxlLWJ1dHRvbnMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWUxZTFlO1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZzogNXB4O1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmZvbnQtc3R5bGUtYnV0dG9uczphY3RpdmUge1xuICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDEwcHggdmFyKC0tbGlnaHQtYmxhY2spO1xufVxuXG4uZm9udC1zdHlsZS1idXR0b25zLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstcHVycGxlKTtcbn1cblxuLmNvbG9yLXZhbHVlLWRpc3BsYXkge1xuICB3aWR0aDogaW5pdGlhbDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbn1cblxuLmNvbG9yLXZhbHVlLWRpc3BsYXkge1xuICBwYWRkaW5nOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxZTFlMWU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBtaW4td2lkdGg6IDMwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNoYWRvdy1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiAjNDc1Mzg2O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4uY29sb3ItcGlja2VyLWJ1dHRvbiB7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmNhbnZhcy13cmFwcGVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4jY2FudmFzLWNvbnRhaW5lciB7XG4gIG1hcmdpbjogYXV0bztcbiAgLyogZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7ICovXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuXG4jY2FudmFzLWNvbnRhaW5lciAuY2FudmFzLWl0ZW0tY29udGFpbmVyIHtcbiAgbWFyZ2luOiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5ncm91cC10aXRsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBwYWRkaW5nOiA1cHggMHB4IDEwcHggNXB4O1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLmdyYWRpZW50LWNvbnRyb2wtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuXG4uZ3JhZGllbnQtdHlwZS1idG4ge1xuICBib3JkZXI6IDBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBwYWRkaW5nOiAzcHg7XG4gIG1hcmdpbjogMHB4IDJweDtcbiAgYmFja2dyb3VuZDogIzAwMDAwMDY2O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG5cbi5ncmFkaWVudC10eXBlLWJ0bi5hY3RpdmUsXG4uZ3JhZGllbnQtdHlwZS1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLXB1cnBsZSk7XG59XG5cbi5ncmFkaWVudC1pY29uIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuXG4ucmFkaWFsLWdyYWRpZW50IHtcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCA1MCUgNTAlLCAjMDAwLCAjZmZmKTtcbn1cblxuLmxpbmVhci1ncmFkaWVudCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmZiwgIzAwMCk7XG59XG5cbi5jZW50ZXItZ3JhZGllbnQtY2hja2JveCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxMHB4O1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaXMtY2VudGVyLWNoZWNrYm94IHtcbiAgbWFyZ2luOiAwcHggNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5pcy1jZW50ZXItY2hlY2tib3gtY29udGFpbmVyIHtcbiAgbWFyZ2luOiA1cHggMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/icon-button-generator/icon-button-generator.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/icon-button-generator/icon-button-generator.component.ts ***!
  \**************************************************************************/
/*! exports provided: IconButtonGeneratorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconButtonGeneratorComponent", function() { return IconButtonGeneratorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _fabric_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fabric.service */ "./src/app/fabric.service.ts");
/* harmony import */ var _helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helper.service */ "./src/app/helper.service.ts");
/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! fabric */ "./node_modules/fabric/dist/fabric.js");
/* harmony import */ var fabric__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(fabric__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fabric_text_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../fabric_text_button */ "./src/app/fabric_text_button.js");
/* harmony import */ var _fabric_text_button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fabric_text_button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fabric_icon_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../fabric_icon_button */ "./src/app/fabric_icon_button.js");
/* harmony import */ var _fabric_icon_button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fabric_icon_button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var jszip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jszip */ "./node_modules/jszip/dist/jszip.min.js");
/* harmony import */ var jszip__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jszip__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../app.constants */ "./src/app/app.constants.ts");










const custom_attribute = ['previewName'];
fabric.Object.prototype.toObject = (function (toObject) {
    return function (propertiesToInclude) {
        propertiesToInclude = (propertiesToInclude || []).concat(custom_attribute);
        return toObject.apply(this, [propertiesToInclude]);
    };
})(fabric.Object.prototype.toObject);
let IconButtonGeneratorComponent = class IconButtonGeneratorComponent {
    constructor(fabricService, helperService) {
        this.fabricService = fabricService;
        this.helperService = helperService;
        this.isLeftShown = true;
        this.isRightShown = true;
        this.activeButtonBackgroundTab = 'tab_1';
        this.error = '';
        this.fontList = _app_constants__WEBPACK_IMPORTED_MODULE_9__["fontList"];
        this.props = {
            width: 0,
            height: 0,
            activeGradientColor: '#000',
            activeGradientColorIndex: 0,
            gradientPositionIsCenter: true,
            buttonGradientArray: [],
            buttonGradientAngle: 0,
            gradientType: 'linear',
            buttonIconSize: 20,
            buttonIconColors: [],
            buttonIconColor: '#000',
            buttonStrokeColor: '#000000',
            buttonStrokeWidth: 5,
            buttonFill: '#ffffff',
            buttonRadius: 0,
            font: {},
            fontFamily: _app_constants__WEBPACK_IMPORTED_MODULE_9__["defaultFontFamily"].fontName,
            fontSize: 18,
            fill: '#000000',
            lineHeight: 1.25,
            charSpacing: 0,
            textAlign: 'left',
            opacity: 1,
            textOpacity: 1,
            shadow: {
                color: '#000000',
                blur: 0,
                offsetX: 0,
                offsetY: 0
            },
            TShadow: {
                color: '#000000',
                blur: 0,
                offsetX: 0,
                offsetY: 0
            },
            text: '',
            isBold: false,
            isItalic: false,
            isUnderLine: false,
            isOverLine: false,
            isStrikeThrough: false
        };
        this.selectedIconsIndex = [1, 2, 4, 5, 6, 7, 8, 10, 12, 19, 20, 21, 22, 23, 24, 25, 28, 37, 41, 43, 51, 53, 55, 57, 60, 71, 81, 86, 89, 98, 99, 108, 109, 120, 132, 138, 139, 141, 144, 151, 164, 174, 177, 178, 186, 191, 193, 197, 199, 204, 211];
    }
    ngOnInit() {
        let that = this;
        this.props.buttonGradientArray = JSON.parse(JSON.stringify(_app_constants__WEBPACK_IMPORTED_MODULE_9__["defaultGradientArray"]));
        console.log(this.props.buttonGradientArray);
        this.canvas = new fabric.Canvas('canvas');
        this.canvas.setWidth(1520);
        this.canvas.setHeight(1520);
        this.canvas.on({
            'selection:created': (e) => {
                console.log('e.target', e.target.toJSON());
                this.selected = e.target;
                this.error = '';
                if (e.target.type == 'iconButton') {
                    this.getAllButtonProps();
                }
            },
            'selection:updated': (e) => {
                this.selected = e.target;
                this.error = '';
                if (e.target.type == 'iconButton') {
                    this.getAllButtonProps();
                }
            },
            'selection:cleared': (e) => {
                this.selected = null;
            },
        });
        var containerWidth = 1500;
        var buttonMargin = 50;
        var itemWidth = 60 + buttonMargin / 2;
        var itemHeight = 60 + buttonMargin / 2;
        var numberOfItemFitIntoRow = Math.floor(containerWidth / itemWidth);
        for (let i = 1; i <= 228; i++) {
            var row = Math.floor(i / numberOfItemFitIntoRow);
            var column = Math.floor(i % numberOfItemFitIntoRow);
            this.generateProps(i, row, column, itemWidth, itemHeight, buttonMargin).then(props => {
                var button = new fabric.IconButton(props.source, props.property);
                this.canvas.add(button);
                this.canvas.renderAll();
            });
        }
    }
    generateProps(i, row, column, itemWidth, itemHeight, buttonMargin) {
        return new Promise(resolve => {
            resolve({
                source: 'assets/ButtonIcons/' + i + '.svg',
                property: {
                    top: row * itemHeight + buttonMargin / 2,
                    left: column * itemWidth + buttonMargin / 2,
                    buttonFill: "#536270",
                    buttonRx: 5,
                    buttonRy: 5,
                    width: 60,
                    height: 50,
                    iconSize: 20,
                    paddingOffset: 5,
                    previewName: i,
                }
            });
        });
    }
    openButtonBackgroundTab(tabName) {
        this.activeButtonBackgroundTab = tabName;
    }
    getAllButtonProps() {
        let activeObject = this.canvas.getActiveObject().toObject();
        this.props.buttonStrokeColor = activeObject.buttonStrokeColor;
        this.props.buttonStrokeWidth = activeObject.buttonStrokeWidth;
        this.props.buttonRadius = activeObject.buttonRx;
        this.props.width = activeObject.width;
        this.props.height = activeObject.height;
        this.props.opacity = activeObject.opacity;
        this.props.buttonIconSize = activeObject.iconSize;
        this.props.buttonIconColors = activeObject.iconColorArray;
        this.props.shadow = activeObject.buttonShadow || {
            color: '#000000',
            blur: 0,
            offsetX: 0,
            offsetY: 0,
            opacity: 0
        };
        let finalButtonFill = activeObject.buttonFill || '#ffffff';
        if (typeof finalButtonFill == 'string') {
            this.props.buttonFill = finalButtonFill;
            this.props.buttonGradientArray = [];
            this.props.buttonGradientAngle = 0;
            this.props.gradientType = 'linear';
            this.props.gradientPositionIsCenter = true;
        }
        else {
            this.props.buttonFill = '#ffffff';
            this.props.buttonGradientArray = this.helperService._convertOffsetIntoStopColorArray(finalButtonFill.colorStops);
            this.props.buttonGradientAngle = finalButtonFill.gradientAngle || 0;
            this.props.gradientType = finalButtonFill.type || 'linear';
            typeof finalButtonFill.isGradientInCenter != "undefined" ? this.props.gradientPositionIsCenter = finalButtonFill.isGradientInCenter : this.props.gradientPositionIsCenter = true;
        }
    }
    setActiveColor(data) {
        this.props.activeGradientColor = data.colorObject.color;
        this.props.activeGradientColorIndex = data.index;
    }
    // setProeprties
    setButtonSize(prop) {
        this.setProperty(prop);
    }
    setOpacity(opacity, isButtonProperty = false) {
        let property = isButtonProperty == true ? { opacity: opacity } : { textOpacity: opacity };
        // this.selected.setButtonProp(property);
        this.setProperty(property);
    }
    setButtonStrokeColor(color) {
        this.props.buttonStrokeColor = color;
        // this.selected.setButtonProp({ buttonStrokeColor: color });
        this.setProperty({ buttonStrokeColor: color });
    }
    setButtonStrokeSize(size) {
        // this.selected.setButtonProp({ buttonStrokeWidth: size });
        this.setProperty({ buttonStrokeWidth: size });
    }
    setButtonFill(color) {
        this.props.buttonFill = color;
        // this.selected.setButtonProp({ buttonFill: color });
        this.setProperty({ buttonFill: color });
    }
    setButtonGradient(colorArray) {
        colorArray.length <= 0 ? this.props.buttonGradientArray = JSON.parse(JSON.stringify(_app_constants__WEBPACK_IMPORTED_MODULE_9__["defaultGradientArray"])) : this.props.buttonGradientArray = colorArray;
        var colorStop = this.helperService._convertStopIntoOffsetColorArray(this.props.buttonGradientArray);
        this._setGradientToButton(JSON.parse(JSON.stringify(colorStop)));
    }
    _setGradientToButton(colorStop) {
        let invertangle = (this.props.buttonGradientAngle + 180) > 360 ? (this.props.buttonGradientAngle + 180) - 360 : (this.props.buttonGradientAngle + 180);
        let angle = this.props.buttonGradientAngle;
        let x1, y1, x2, y2, button;
        if (this.selected.type == "activeSelection") {
            button = { top: this.selected._objects[0].top, left: this.selected._objects[0].left, width: this.selected._objects[0].width, height: this.selected._objects[0].height };
        }
        else {
            button = { top: this.selected.top, left: this.selected.left, width: this.selected.width, height: this.selected.height };
        }
        let p1 = this.helperService.edgeOfView(button, invertangle);
        let p2 = this.helperService.edgeOfView(button, angle);
        x1 = p1.x;
        y1 = p1.y;
        x2 = p2.x;
        y2 = p2.y;
        var grad;
        if (this.props.gradientType == 'radial') {
            if (this.props.gradientPositionIsCenter == true) {
                if (this.selected.type == "activeSelection") {
                    x2 = this.selected._objects[0].width / 2;
                    y2 = this.selected._objects[0].height / 2;
                }
                else {
                    x2 = this.selected.width / 2;
                    y2 = this.selected.height / 2;
                }
            }
            grad = new fabric.Gradient({
                type: "radial",
                coords: {
                    r1: 0,
                    r2: this.selected.type == 'activeSelection' ? this.selected._objects[0].height : this.selected.height,
                    x1: x2,
                    y1: y2,
                    x2: x2,
                    y2: y2,
                },
                colorStops: colorStop,
                gradientAngle: this.props.buttonGradientAngle || 0,
                isGradientInCenter: this.props.gradientPositionIsCenter
            });
        }
        else {
            grad = new fabric.Gradient({
                type: "linear",
                coords: {
                    x1: x1,
                    y1: y1,
                    x2: x2,
                    y2: y2,
                },
                colorStops: colorStop,
                gradientAngle: this.props.buttonGradientAngle || 0
            });
        }
        if (grad) {
            // this.selected.setButtonProp({ buttonFill: grad, gradientAngle: this.props.buttonGradientAngle || 0 });
            this.setProperty({ buttonFill: grad, gradientAngle: this.props.buttonGradientAngle || 0 });
            this.canvas.renderAll();
        }
    }
    changeGradientIndexColor(index, color) {
        this.props.buttonGradientArray.length <= 0 ? this.props.buttonGradientArray = JSON.parse(JSON.stringify(_app_constants__WEBPACK_IMPORTED_MODULE_9__["defaultGradientArray"])) : null;
        let obj = [...this.props.buttonGradientArray];
        // console.log(index, color, obj, this.props.buttonGradientArray);
        obj[index].color = color;
        this.props.buttonGradientArray = obj;
        this.setButtonGradient(this.props.buttonGradientArray);
    }
    setButtonRadius(radius) {
        // this.selected.setButtonProp({ buttonRx: radius, buttonRy: radius });
        this.setProperty({ buttonRx: radius, buttonRy: radius });
    }
    setShadow(shadow) {
        // this.selected.setButtonProp({ buttonShadow: shadow });
        this.setProperty({ buttonShadow: shadow });
    }
    setButtonIconFill(colorArray) {
        // this.selected.setButtonProp({ iconColorArray: colorArray });
        this.setProperty({ iconColorArray: colorArray });
    }
    setButtonIconSize(buttonIconSize) {
        // this.selected.setButtonProp({ iconSize: buttonIconSize });
        this.setProperty({ iconSize: buttonIconSize });
    }
    setButtonIconFillForAll() {
        this.canvas.forEachObject(element => {
            if (element.type == 'iconButton') {
                // console.log(element.iconColorArray);
                var arr = element.iconColorArray;
                arr[0].color = this.props.buttonIconColor;
                element.setButtonProp({
                    iconColorArray: arr
                });
            }
        });
        this.canvas.renderAll();
    }
    setProperty(prop) {
        if (this.selected.type == 'activeSelection') {
            this.selected._objects.forEach(element => {
                element.setButtonProp(prop);
            });
        }
        else {
            this.selected.setButtonProp(prop);
        }
        this.canvas.renderAll();
    }
    // Download
    downloadImage() {
        if (this.selected) {
            let width = this.selected.width * this.selected.scaleX, height = this.selected.height * this.selected.scaleY, top = 0, left = 0, that = this, offset = 10;
            if (that.selected.buttonShadow) {
                width += Math.abs(that.selected.buttonShadow.offsetX) + (that.selected.buttonShadow.blur);
                height += Math.abs(that.selected.buttonShadow.offsetY) + (that.selected.buttonShadow.blur);
                if (Math.sign(that.selected.buttonShadow.offsetY) == -1) {
                    top = that.selected.buttonShadow.offsetY - that.selected.buttonShadow.blur;
                }
                else if (that.selected.buttonShadow.offsetY < that.selected.buttonShadow.blur / 2) {
                    top = -that.selected.buttonShadow.blur;
                    height += that.selected.buttonShadow.blur;
                }
                if (Math.sign(that.selected.buttonShadow.offsetX) == -1) {
                    left = that.selected.buttonShadow.offsetX - that.selected.buttonShadow.blur;
                }
                else if (that.selected.buttonShadow.offsetX < that.selected.buttonShadow.blur / 2) {
                    left = -that.selected.buttonShadow.blur;
                    width += that.selected.buttonShadow.blur;
                }
            }
            this.selected.cloneAsImage(function (obj) {
                that.helperService._download("Button.png", obj.toDataURL());
            }, {
                format: 'png',
                top: top - this.selected.buttonStrokeWidth - offset,
                left: left - this.selected.buttonStrokeWidth - offset,
                width: width + this.selected.buttonStrokeWidth * 2 + offset * 2,
                height: height + this.selected.buttonStrokeWidth * 2 + offset * 2,
                withoutShadow: false
            });
        }
        else {
            this.error = "Please Select Object";
        }
    }
    makeImage(element) {
        return new Promise(resolve => {
            let width = element.width * element.scaleX, height = element.height * element.scaleY, top = 0, left = 0, that = this, offset = 10;
            if (element.buttonShadow) {
                width += Math.abs(element.buttonShadow.offsetX) + (element.buttonShadow.blur);
                height += Math.abs(element.buttonShadow.offsetY) + (element.buttonShadow.blur);
                if (Math.sign(element.buttonShadow.offsetY) == -1) {
                    top = element.buttonShadow.offsetY - element.buttonShadow.blur;
                }
                else if (element.buttonShadow.offsetY < element.buttonShadow.blur / 2) {
                    top = -element.buttonShadow.blur;
                    height += element.buttonShadow.blur;
                }
                if (Math.sign(element.buttonShadow.offsetX) == -1) {
                    left = element.buttonShadow.offsetX - element.buttonShadow.blur;
                }
                else if (element.buttonShadow.offsetX < element.buttonShadow.blur / 2) {
                    left = -element.buttonShadow.blur;
                    width += element.buttonShadow.blur;
                }
            }
            element.cloneAsImage(function (obj) {
                resolve(obj.toDataURL());
            }, {
                format: 'png',
                top: top - element.buttonStrokeWidth - offset,
                left: left - element.buttonStrokeWidth - offset,
                width: width + element.buttonStrokeWidth * 2 + offset * 2,
                height: height + element.buttonStrokeWidth * 2 + offset * 2,
                withoutShadow: false
            });
        });
    }
    downloadJson() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let zip = new jszip__WEBPACK_IMPORTED_MODULE_7___default.a();
            var selectedIconFolder = zip.folder('selected Icons');
            let arr = [], selectedArr = [];
            for (let i = 0, length = this.canvas.toJSON().objects.length; i < length; i++) {
                const object = this.canvas.item(i);
                var obj = {}, json = object.toJSON();
                var propertyToInclude = "buttonFill buttonRx buttonRy buttonShadow buttonStrokeColor buttonStrokeWidth height iconColorArray iconShadow iconSize opacity scaleX scaleY stroke width".split(' ');
                obj['type'] = "iconButton";
                obj['src'] = json['iconSrc'];
                obj['previewImage'] = 'assets/Buttons/iconButton_' + Number(Number(i) + 1) + '.png';
                for (let key in json) {
                    if (json.hasOwnProperty(key) && propertyToInclude.indexOf(key) != -1) {
                        obj[key] = json[key];
                    }
                }
                var folder = zip.folder(json.previewName);
                var jsonObject = new Blob([JSON.stringify(obj, null, 2)], { type: 'text/plain' });
                arr.push(obj);
                folder.file(json.previewName + '.txt', jsonObject);
                yield this.makeImage(object).then((result) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    yield folder.file('iconButton_' + json.previewName + ".png", result.split(',')[1], { base64: true });
                    if (this.selectedIconsIndex.indexOf(i + 1) != -1) {
                        yield selectedIconFolder.file('iconButton_' + json.previewName + ".png", result.split(',')[1], { base64: true });
                    }
                }));
                if (this.selectedIconsIndex.indexOf(i + 1) != -1) {
                    selectedArr.push(obj);
                }
            }
            var mainJson = new Blob([JSON.stringify(arr, null, 2)], { type: 'text/plain' });
            var seelctedJSON = new Blob([JSON.stringify(selectedArr, null, 2)], { type: 'text/plain' });
            zip.file('main.txt', mainJson);
            selectedIconFolder.file('selected.txt', seelctedJSON);
            zip.generateAsync({ type: "blob" }).then(function (content) {
                file_saver__WEBPACK_IMPORTED_MODULE_8___default.a.saveAs(content, "Icon Buttons.zip");
            });
        });
    }
};
IconButtonGeneratorComponent.ctorParameters = () => [
    { type: _fabric_service__WEBPACK_IMPORTED_MODULE_2__["FabricService"] },
    { type: _helper_service__WEBPACK_IMPORTED_MODULE_3__["HelperService"] }
];
IconButtonGeneratorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-icon-button-generator',
        template: __webpack_require__(/*! raw-loader!./icon-button-generator.component.html */ "./node_modules/raw-loader/index.js!./src/app/icon-button-generator/icon-button-generator.component.html"),
        styles: [__webpack_require__(/*! ./icon-button-generator.component.css */ "./src/app/icon-button-generator/icon-button-generator.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_fabric_service__WEBPACK_IMPORTED_MODULE_2__["FabricService"], _helper_service__WEBPACK_IMPORTED_MODULE_3__["HelperService"]])
], IconButtonGeneratorComponent);



/***/ }),

/***/ "./src/app/not-found/not-found.component.css":
/*!***************************************************!*\
  !*** ./src/app/not-found/not-found.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".no-layer-found {\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n  }\n  \n  .no-layer-found-text {\n    text-align: center;\n    color: white;\n    font-size: 14px;\n    margin: 5px;\n    font-family: \"Roboto\", Helvetica, Arial, sans-serif;\n  }\n  \n  .sdbar-logo {\n    margin: auto;\n    max-height: 35px;\n    width: 161px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGVBQWU7SUFDZixXQUFXO0lBQ1gsbURBQW1EO0VBQ3JEOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixZQUFZO0VBQ2QiLCJmaWxlIjoic3JjL2FwcC9ub3QtZm91bmQvbm90LWZvdW5kLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm8tbGF5ZXItZm91bmQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIFxuICAubm8tbGF5ZXItZm91bmQtdGV4dCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbWFyZ2luOiA1cHg7XG4gICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIH1cbiAgXG4gIC5zZGJhci1sb2dvIHtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgbWF4LWhlaWdodDogMzVweDtcbiAgICB3aWR0aDogMTYxcHg7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NotFoundComponent = class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], NotFoundComponent.prototype, "title", void 0);
NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-not-found',
        template: __webpack_require__(/*! raw-loader!./not-found.component.html */ "./node_modules/raw-loader/index.js!./src/app/not-found/not-found.component.html"),
        styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/not-found/not-found.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], NotFoundComponent);



/***/ }),

/***/ "./src/app/shared/circular-angle-control/circular-angle-control.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/shared/circular-angle-control/circular-angle-control.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".parimeter {\n  border-width: 1px;\n  border-style: solid;\n  position: relative;\n}\n\n.parimeter-center {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  margin: auto;\n  width: 4px;\n  height: 4px;\n  border-radius: 10px;\n}\n\n.drag-control {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  margin: auto;\n  cursor: pointer;\n}\n\n.drag-control-rotation {\n  position: absolute;\n  right: calc(0px - 6px);\n  top: calc(50% - 5px);\n  background: red;\n  border-radius: 10px;\n  width: 10px;\n  height: 10px;\n  cursor: pointer;\n}\n\n.drag-control-line {\n  position: absolute;\n  left: 50%;\n  top: calc(50% - 1px);\n  height: 2px;\n}\n\n.value-preview {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  max-width: 18px;\n  margin: auto;\n  text-align: center;\n  line-height: 18px;\n  max-height: 18px;\n  padding: 2px 5px;\n  font-size: 10px;\n  background-color: rgba(0, 0, 0, 0.719);\n  color: white;\n  border-radius: 3px;\n  transition: 0.5s;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  display: none;\n}\n\n.display-block,\n.parimeter:hover .value-preview {\n  display: block;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NpcmN1bGFyLWFuZ2xlLWNvbnRyb2wvY2lyY3VsYXItYW5nbGUtY29udHJvbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxTQUFTO0VBQ1QsUUFBUTtFQUNSLFlBQVk7RUFDWixVQUFVO0VBQ1YsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFNBQVM7RUFDVCxRQUFRO0VBQ1IsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1Qsb0JBQW9CO0VBQ3BCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFNBQVM7RUFDVCxRQUFRO0VBQ1IsZUFBZTtFQUNmLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLHNDQUFzQztFQUN0QyxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQix5QkFBaUI7S0FBakIsc0JBQWlCO01BQWpCLHFCQUFpQjtVQUFqQixpQkFBaUI7RUFDakIsYUFBYTtBQUNmOztBQUVBOztFQUVFLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY2lyY3VsYXItYW5nbGUtY29udHJvbC9jaXJjdWxhci1hbmdsZS1jb250cm9sLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFyaW1ldGVyIHtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnBhcmltZXRlci1jZW50ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgbWFyZ2luOiBhdXRvO1xuICB3aWR0aDogNHB4O1xuICBoZWlnaHQ6IDRweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmRyYWctY29udHJvbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW46IGF1dG87XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmRyYWctY29udHJvbC1yb3RhdGlvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IGNhbGMoMHB4IC0gNnB4KTtcbiAgdG9wOiBjYWxjKDUwJSAtIDVweCk7XG4gIGJhY2tncm91bmQ6IHJlZDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgd2lkdGg6IDEwcHg7XG4gIGhlaWdodDogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZHJhZy1jb250cm9sLWxpbmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiBjYWxjKDUwJSAtIDFweCk7XG4gIGhlaWdodDogMnB4O1xufVxuXG4udmFsdWUtcHJldmlldyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBtYXgtd2lkdGg6IDE4cHg7XG4gIG1hcmdpbjogYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgbWF4LWhlaWdodDogMThweDtcbiAgcGFkZGluZzogMnB4IDVweDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzE5KTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uZGlzcGxheS1ibG9jayxcbi5wYXJpbWV0ZXI6aG92ZXIgLnZhbHVlLXByZXZpZXcge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/shared/circular-angle-control/circular-angle-control.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/shared/circular-angle-control/circular-angle-control.component.ts ***!
  \***********************************************************************************/
/*! exports provided: CircularAngleControlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircularAngleControlComponent", function() { return CircularAngleControlComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CircularAngleControlComponent = class CircularAngleControlComponent {
    constructor(el) {
        this.el = el;
        this.degree = 0;
        this.mouseDown = false;
        this.isRotating = false;
        this.angle = 0;
        this.radius = 50;
        this.borderColor = '#fff';
        this.onAngleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onAngleChangeEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        el.nativeElement.style.display = 'inline-block';
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.initialize();
    }
    ngOnChanges(changes) {
        // this is because when we change array of color dynamically, we need to reflect it in this control
        this.initialize();
    }
    initialize() {
        if (this.rotationControl) {
            this.degree = this.convertAngleToDegree(this.angle);
            this.rotationControl.nativeElement.style.cssText = '-moz-transform: rotate(' + this.degree + 'deg); -webkit-transform: rotate(' + this.degree + 'deg); -o-transform: rotate(' + this.degree + 'deg); -ms-transform: rotate(' + this.degree + 'deg);';
        }
    }
    getPosition(el) {
        if (!el.getClientRects().length) {
            return { top: 0, left: 0 };
        }
        let rect = el.getBoundingClientRect();
        let win = el.ownerDocument.defaultView;
        return ({
            y: rect.top + win.pageYOffset,
            x: rect.left + win.pageXOffset
        });
    }
    onMouseDown($event) {
        let newOffset = this.getPosition(this.el.nativeElement);
        this.offset = {
            left: newOffset.x,
            top: newOffset.y,
        };
        this.mouseDown = true;
        this.isRotating = true;
        this._mouseMoveRef = this.onMouseMove.bind(this);
        this._mouseUpRef = this.onMouseUp.bind(this);
        document.onmousemove = this._mouseMoveRef;
        document.onmouseup = this._mouseUpRef;
    }
    onMouseMove($event) {
        if (this.mouseDown) {
            $event.preventDefault();
            if (this.isRotating) {
                this.rotate($event);
            }
        }
    }
    onMouseUp($event) {
        document.onmousemove = null;
        document.onmouseup = null;
        this.mouseDown = false;
        this.isRotating = false;
        this.angle = this.convertDegreeToAngle(Math.round(this.degree));
        this.onAngleChangeEnd.emit(this.angle);
    }
    rotate(evt) {
        evt.preventDefault();
        if (this.mouseDown == true) {
            var center_x = (this.offset.left) + (this.rotationControl.nativeElement.offsetWidth / 2);
            var center_y = (this.offset.top) + (this.rotationControl.nativeElement.offsetHeight / 2);
            var mouse_x = evt.pageX;
            var mouse_y = evt.pageY;
            var radians = Math.atan2(mouse_x - center_x, mouse_y - center_y);
            this.degree = (radians * (180 / Math.PI) * -1) + 90;
            if (this.degree < 0) {
                this.degree += 360;
            }
            this.angle = this.convertDegreeToAngle(Math.round(this.degree));
            this.rotationControl.nativeElement.style.cssText = '-moz-transform: rotate(' + this.degree + 'deg); -webkit-transform: rotate(' + this.degree + 'deg); -o-transform: rotate(' + this.degree + 'deg); -ms-transform: rotate(' + this.degree + 'deg);';
            this.onAngleChange.emit(this.angle);
            this.valuePreview.nativeElement.innerText = this.angle;
        }
    }
    convertAngleToDegree(angle) {
        return (Math.abs(angle) * -1) + 360;
    }
    convertDegreeToAngle(degree) {
        return Math.abs(degree - 360);
    }
};
CircularAngleControlComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dragControl', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], CircularAngleControlComponent.prototype, "dragControl", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('rotationControl', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], CircularAngleControlComponent.prototype, "rotationControl", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('valuePreview', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], CircularAngleControlComponent.prototype, "valuePreview", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], CircularAngleControlComponent.prototype, "angle", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], CircularAngleControlComponent.prototype, "radius", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CircularAngleControlComponent.prototype, "borderColor", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], CircularAngleControlComponent.prototype, "onAngleChange", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], CircularAngleControlComponent.prototype, "onAngleChangeEnd", void 0);
CircularAngleControlComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'circular-angle-control',
        template: __webpack_require__(/*! raw-loader!./circular-angle-control.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/circular-angle-control/circular-angle-control.component.html"),
        styles: [__webpack_require__(/*! ./circular-angle-control.component.css */ "./src/app/shared/circular-angle-control/circular-angle-control.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], CircularAngleControlComponent);



/***/ }),

/***/ "./src/app/shared/gradient-picker/gradient-picker.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/shared/gradient-picker/gradient-picker.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gradient-picker-wrapper {\n  display: inline-block;\n  width: 150px;\n  position: relative;\n  margin-bottom: 25px;\n}\n\n.color-preview {\n  height: 30px;\n  width: 100%;\n  border-radius: 3px;\n}\n\n.color-add-area {\n  height: 75px;\n  width: 100%;\n  cursor: copy;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n}\n\n.color-control {\n  cursor: pointer;\n  border-radius: 1px;\n  height: 10px;\n  margin-left: -4px;\n  position: absolute;\n  top: 56px;\n  width: 10px;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  border-width: 2px;\n  border-style: solid;\n  outline: none !important;\n  padding: 0px;\n  background: transparent;\n  box-shadow: 0 0 0 2px #dfe0e6;\n}\n\n.color-control-color {\n  -webkit-appearance: none;\n  display: none;\n  padding: 0px;\n  background: transparent;\n}\n\n.color-control-color::-webkit-color-swatch-wrapper {\n  padding: 0;\n}\n\n.color-control-color::-webkit-color-swatch {\n  border: none;\n}\n\n.color-control:hover,\n.active-color {\n  z-index: 8;\n  box-shadow: 0 0 0 2px #2d8bff;\n}\n\n.remove-color-area {\n  height: 15px;\n  width: 100%;\n  border-radius: 3px;\n  margin-bottom: 2px;\n  transition: 0.2s;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2dyYWRpZW50LXBpY2tlci9ncmFkaWVudC1waWNrZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsU0FBUztFQUNULFFBQVE7QUFDVjs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7RUFDWCxnQ0FBd0I7VUFBeEIsd0JBQXdCO0VBQ3hCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsd0JBQXdCO0VBQ3hCLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGFBQWE7RUFDYixZQUFZO0VBQ1osdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUNBO0VBQ0UsWUFBWTtBQUNkOztBQUVBOztFQUVFLFVBQVU7RUFDViw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2dyYWRpZW50LXBpY2tlci9ncmFkaWVudC1waWNrZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmFkaWVudC1waWNrZXItd3JhcHBlciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDE1MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5cbi5jb2xvci1wcmV2aWV3IHtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuXG4uY29sb3ItYWRkLWFyZWEge1xuICBoZWlnaHQ6IDc1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBjdXJzb3I6IGNvcHk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xufVxuXG4uY29sb3ItY29udHJvbCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMXB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAtNHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTZweDtcbiAgd2lkdGg6IDEwcHg7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgYm9yZGVyLXdpZHRoOiAycHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMHB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm94LXNoYWRvdzogMCAwIDAgMnB4ICNkZmUwZTY7XG59XG5cbi5jb2xvci1jb250cm9sLWNvbG9yIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBkaXNwbGF5OiBub25lO1xuICBwYWRkaW5nOiAwcHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG4uY29sb3ItY29udHJvbC1jb2xvcjo6LXdlYmtpdC1jb2xvci1zd2F0Y2gtd3JhcHBlciB7XG4gIHBhZGRpbmc6IDA7XG59XG4uY29sb3ItY29udHJvbC1jb2xvcjo6LXdlYmtpdC1jb2xvci1zd2F0Y2gge1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5jb2xvci1jb250cm9sOmhvdmVyLFxuLmFjdGl2ZS1jb2xvciB7XG4gIHotaW5kZXg6IDg7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDJweCAjMmQ4YmZmO1xufVxuXG4ucmVtb3ZlLWNvbG9yLWFyZWEge1xuICBoZWlnaHQ6IDE1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbiAgdHJhbnNpdGlvbjogMC4ycztcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/shared/gradient-picker/gradient-picker.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shared/gradient-picker/gradient-picker.component.ts ***!
  \*********************************************************************/
/*! exports provided: GradientPickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GradientPickerComponent", function() { return GradientPickerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GradientPickerComponent = class GradientPickerComponent {
    constructor() {
        this._dragControl = false;
        this.type = (Math.floor(Math.random() * 1000000000)).toString();
        this.minimumColors = 2;
        this.maximumColors = 4;
        this.minColorStop = 0;
        this.maxColorStop = 1;
        this.removeAreaBackgroundColor = "rgba(255, 0, 0, 0.424)";
        this.backgroundColor = "var(--light-black)";
        this.removeColorDragAreaTooltip = "Drag color pin here for remove color";
        this.controlTooltip = "Double click to open color picker";
        this.addTooltip = "Double click to add new color";
        this.containerClass = "";
        this.colorArray = [
            { color: '#000', stop: 0, id: 0 },
            { color: '#fff', stop: 1, id: 1 }
        ];
        this.onPickerChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onColorAdd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onColorRemove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onColorSlideStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onColorControlActivate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onColorSliding = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onColorSlideEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.colorArray.forEach((element, index) => {
            element['stopInPercent'] = '0';
            element['id'] = index;
        });
        this.activeColorObject = this.colorArray[0];
    }
    ngAfterViewInit() {
    }
    ngOnInit() {
        this.initializeRamp();
    }
    ngOnChanges(changes) {
        // this is because when we change array of color dynamically, we need to reflect it in this control
        this.initializeRamp();
    }
    initializeRamp() {
        if (this.colorArray.length < 2) {
            this.colorArray = [
                { color: '#000', stop: 0, id: 0 },
                { color: '#fff', stop: 1, id: 1 }
            ];
        }
        this.sortColorArray(this.colorArray, 'stop').then(sortedArray => {
            // this.colorArray = [];
            this.colorArray = sortedArray;
            this.colorArray.forEach((element, index) => {
                let stop = Number(element.stop);
                let percent = this.getPercentFromValue(stop);
                element.stopInPercent = percent;
                element.id = index;
            });
            this.generateCssFromArray(this.colorArray).then((result) => {
                this.cssBackground = result;
                this.activeColorObject = this.colorArray[0];
            });
        });
    }
    getValuefromPercent(percent) {
        return Number(((percent * (this.maxColorStop - this.minColorStop) / 100) + this.minColorStop).toFixed(2));
    }
    getPercentFromValue(value) {
        return ((value - this.minColorStop) / (this.maxColorStop - this.minColorStop)) * 100;
    }
    generateCssFromArray(colorstopArray) {
        let tmp = JSON.parse(JSON.stringify(colorstopArray));
        return new Promise((resolve, reject) => {
            if (colorstopArray && colorstopArray.length >= 2) {
                let cssBackground = 'linear-gradient(to right';
                if (typeof this.minColorStop != "undefined" && typeof this.maxColorStop != "undefined") {
                    // this.cssColorArray = [];
                    this.sortColorArray(tmp, 'stop').then(sortedResult => {
                        sortedResult.forEach((element, index) => {
                            let stop = Number(element.stop);
                            let percent = this.getPercentFromValue(stop);
                            cssBackground += ', ' + element.color + ' ' + percent + '%';
                            element.stopInPercent = percent;
                        });
                        cssBackground += ')';
                        resolve(cssBackground);
                    });
                }
            }
        });
    }
    addColor(event, color) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.colorArray.length >= this.maximumColors) {
                return;
            }
            let newPercent = Number((event.offsetX * 100 / event.target.offsetWidth).toFixed(2));
            let stop = this.getValuefromPercent(newPercent);
            if (newPercent <= this.colorArray[0].stopInPercent) {
                // insert color at first
                this.colorArray.unshift({
                    color: color,
                    stop: stop,
                    stopInPercent: newPercent
                });
                this.generateCssFromArray(this.colorArray).then(result => {
                    this.cssBackground = result;
                    this.activeColorObject = this.colorArray[0];
                    this.refreshAllId();
                    this.onPickerChange.emit(this.colorArray);
                    this.onColorAdd.emit(this.colorArray);
                });
                return;
            }
            else if (newPercent >= this.colorArray[this.colorArray.length - 1].stopInPercent) {
                // insert color at last
                this.colorArray.push({
                    color: color,
                    stop: stop,
                    stopInPercent: newPercent
                });
                this.generateCssFromArray(this.colorArray).then(result => {
                    this.cssBackground = result;
                    this.activeColorObject = this.colorArray[this.colorArray.length - 1];
                    this.refreshAllId();
                    this.onPickerChange.emit(this.colorArray);
                    this.onColorAdd.emit(this.colorArray);
                });
                return;
            }
            else {
                for (let index = 0, arrLength = this.colorArray.length; index < arrLength; index++) {
                    const element = this.colorArray[index];
                    if (element.stopInPercent <= newPercent) {
                    }
                    else {
                        this.colorArray.splice(index, 0, {
                            color: color,
                            stop: stop,
                            stopInPercent: newPercent
                        });
                        yield this.generateCssFromArray(this.colorArray).then(result => {
                            this.cssBackground = result;
                            this.activeColorObject = this.colorArray[index];
                            this.refreshAllId();
                            this.onPickerChange.emit(this.colorArray);
                            this.onColorAdd.emit(this.colorArray);
                            // set index to last element for break loop
                            index = arrLength;
                        });
                    }
                }
            }
        });
    }
    touchStart(e, colorElement, index) {
        this._activeDragControl = index;
        this.activeColorObject = colorElement;
        // this.onColorControlActivate.emit({ index: index, colorObject: colorElement })
        // Toush start
        // width and height of color-control = 10 , so according to pythagoras :
        // (width * width) + (height * height) = karna * karna (cross line between square box)
        // So We need to add (karna / 2) into left position of color control. so I have calculate karna (200 = (10*10) + (10*10))
        // this step is necessary because color-control is rotated as 45deg.
        let offsetLeft = e.target.offsetLeft - 5 + Math.sqrt(200) / 2;
        let offsetTop = e.target.offsetTop - 5 + Math.sqrt(200) / 2;
        this._activeItem = e.target;
        this._dragControl = true;
        e.preventDefault();
        this._oldPosition = Math.round(offsetLeft);
        this._oldPositionVertical = Math.round(offsetTop);
        if (e.type == 'touchstart') {
            this._posX1 = e.touches[0].clientX;
            this._posY1 = e.touches[0].clientY;
        }
        else {
            this._posX1 = e.clientX;
            this._posY1 = e.clientY;
        }
        this._touchEndRef = this.dragEnd.bind(this);
        this._touchMoveRef = this.dragAction.bind(this);
        this.onColorSlideStart.emit(this.colorArray);
        document.onmouseup = this._touchEndRef;
        this._activeItem.onmouseup = this._touchEndRef;
        this.removeArea.nativeElement.onmouseup = this._touchEndRef;
        this.addArea.nativeElement.onmousemove = this._touchMoveRef;
        // remove area highlight
        let that = this;
        /* this.removeArea.nativeElement.onmouseenter = function () {
        };
        this.removeArea.nativeElement.onmouseout = function () {
          that.removeArea.nativeElement.style.backgroundColor = "transparent";
        }; */
        document.addEventListener('touchend', this._touchEndRef);
        this._activeItem.addEventListener('touchend', this._touchEndRef);
        this.addArea.nativeElement.addEventListener('touchmove', this._touchMoveRef);
    }
    dragAction(e) {
        if (this._dragControl) {
            if (e.type == 'touchmove') {
                this._posX2 = this._posX1 - e.touches[0].clientX;
                this._posX1 = e.touches[0].clientX;
                this._posY2 = this._posX1 - e.touches[0].clientY;
                this._posY1 = e.touches[0].clientY;
            }
            else {
                this._posX2 = this._posX1 - e.clientX;
                this._posX1 = e.clientX;
                this._posY2 = this._posY1 - e.clientY;
                this._posY1 = e.clientY;
            }
            let pixel = (this._oldPosition - this._posX2);
            this._oldPosition = pixel;
            let pixelVertrical = (this._oldPositionVertical - this._posY2);
            this._oldPositionVertical = pixelVertrical;
            if (this._oldPositionVertical <= 12 && this._oldPositionVertical >= -3) {
                this.removeArea.nativeElement.style.backgroundColor = this.removeAreaBackgroundColor;
            }
            else {
                this.removeArea.nativeElement.style.backgroundColor = 'transparent';
            }
            if (this._oldPosition >= 0 && this._oldPosition <= this.addArea.nativeElement.offsetWidth) {
                let newPercent = Number((this._oldPosition * 100 / this.addArea.nativeElement.offsetWidth).toFixed(2));
                let stop = this.getValuefromPercent(newPercent);
                this._activeItem.style.left = newPercent + "%";
                this.colorArray[this._activeDragControl].stop = stop;
                this.colorArray[this._activeDragControl].stopInPercent = newPercent;
                this.generateCssFromArray(this.colorArray).then(result => {
                    this.cssBackground = result;
                    this.onColorSliding.emit(this.colorArray);
                });
            }
        }
    }
    dragEnd() {
        this.removeArea.nativeElement.style.backgroundColor = 'transparent';
        document.onmouseup = null;
        this.addArea.nativeElement.onmousemove = null;
        this.removeArea.nativeElement.onmouseenter = null;
        this.removeArea.nativeElement.onmouseout = null;
        document.removeEventListener('touchend', this._touchEndRef);
        this._activeItem.addEventListener('touchend', this._touchEndRef);
        this.addArea.nativeElement.addEventListener('touchmove', this._touchMoveRef);
        this._dragControl = false;
        if (this._oldPositionVertical <= 10) {
            if (this.colorArray.length > this.minimumColors) {
                let index = this.colorArray.findIndex(color => color.id == this.activeColorObject.id);
                this.colorArray.splice(index, 1);
                this.generateCssFromArray(this.colorArray).then(result => {
                    this.cssBackground = result;
                    this.refreshAllId();
                    this.onPickerChange.emit(this.colorArray);
                    this.onColorRemove.emit(this.colorArray);
                });
            }
        }
        else {
            this.sortColorArray(this.colorArray, 'stop').then(result => {
                this.colorArray = result;
                this.onPickerChange.emit(this.colorArray);
                this.onColorSlideEnd.emit(this.colorArray);
                let index = this.colorArray.findIndex(color => color.id == this.activeColorObject.id);
                this.onColorControlActivate.emit({ index: index, colorObject: this.activeColorObject });
            });
        }
    }
    openColorPicker(id) {
        document.getElementById(id).click();
    }
    sortColorArray(arr, prop) {
        return new Promise(resolve => {
            arr.sort(this.GetSortOrder(prop));
            resolve(arr);
        });
    }
    GetSortOrder(prop) {
        return function (a, b) {
            if (a[prop] > b[prop]) {
                return 1;
            }
            else if (a[prop] < b[prop]) {
                return -1;
            }
            return 0;
        };
    }
    changeColor(color, i) {
        this.generateCssFromArray(this.colorArray).then(result => {
            this.cssBackground = result;
            this.onPickerChange.emit(this.colorArray);
        });
    }
    refreshAllId() {
        this.colorArray.forEach((element, index) => {
            element['id'] = index;
        });
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('addArea', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], GradientPickerComponent.prototype, "addArea", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('removeArea', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], GradientPickerComponent.prototype, "removeArea", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], GradientPickerComponent.prototype, "type", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], GradientPickerComponent.prototype, "minimumColors", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], GradientPickerComponent.prototype, "maximumColors", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], GradientPickerComponent.prototype, "minColorStop", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], GradientPickerComponent.prototype, "maxColorStop", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], GradientPickerComponent.prototype, "removeAreaBackgroundColor", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], GradientPickerComponent.prototype, "backgroundColor", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], GradientPickerComponent.prototype, "removeColorDragAreaTooltip", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], GradientPickerComponent.prototype, "controlTooltip", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], GradientPickerComponent.prototype, "addTooltip", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], GradientPickerComponent.prototype, "containerClass", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], GradientPickerComponent.prototype, "colorArray", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], GradientPickerComponent.prototype, "onPickerChange", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], GradientPickerComponent.prototype, "onColorAdd", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], GradientPickerComponent.prototype, "onColorRemove", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], GradientPickerComponent.prototype, "onColorSlideStart", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], GradientPickerComponent.prototype, "onColorControlActivate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], GradientPickerComponent.prototype, "onColorSliding", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], GradientPickerComponent.prototype, "onColorSlideEnd", void 0);
GradientPickerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'gradient-picker',
        template: __webpack_require__(/*! raw-loader!./gradient-picker.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/gradient-picker/gradient-picker.component.html"),
        styles: [__webpack_require__(/*! ./gradient-picker.component.css */ "./src/app/shared/gradient-picker/gradient-picker.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], GradientPickerComponent);



/***/ }),

/***/ "./src/app/shared/labled-icon-button/labled-icon-button.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/shared/labled-icon-button/labled-icon-button.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".labled-style-buttons {\n  background-color: #1e1e1e;\n  border: none;\n  outline: 0 !important;\n  padding: 5px;\n  border-radius: 5px;\n  cursor: pointer;\n  color: white;\n}\n\n.labled-style-buttons:active {\n  box-shadow: inset 0px 0px 10px var(--light-black);\n}\n\n.labled-icon {\n  width: 20px;\n  height: 20px;\n  min-width: 20px;\n  display: inline-block;\n  vertical-align: middle;\n  min-height: 20px;\n  margin: 0px 5px 0px 0px;\n}\n\n.lable {\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.padding {\n  padding: 0px 10px;\n  min-height: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2xhYmxlZC1pY29uLWJ1dHRvbi9sYWJsZWQtaWNvbi1idXR0b24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlEQUFpRDtBQUNuRDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2xhYmxlZC1pY29uLWJ1dHRvbi9sYWJsZWQtaWNvbi1idXR0b24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYWJsZWQtc3R5bGUtYnV0dG9ucyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxZTFlMWU7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5sYWJsZWQtc3R5bGUtYnV0dG9uczphY3RpdmUge1xuICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDEwcHggdmFyKC0tbGlnaHQtYmxhY2spO1xufVxuXG4ubGFibGVkLWljb24ge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBtaW4td2lkdGg6IDIwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgbWluLWhlaWdodDogMjBweDtcbiAgbWFyZ2luOiAwcHggNXB4IDBweCAwcHg7XG59XG5cbi5sYWJsZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLnBhZGRpbmcge1xuICBwYWRkaW5nOiAwcHggMTBweDtcbiAgbWluLWhlaWdodDogMzBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/shared/labled-icon-button/labled-icon-button.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/shared/labled-icon-button/labled-icon-button.component.ts ***!
  \***************************************************************************/
/*! exports provided: LabledIconButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabledIconButtonComponent", function() { return LabledIconButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LabledIconButtonComponent = class LabledIconButtonComponent {
    constructor() {
        this.lable = "Button";
        this.backgroundColor = "#1e1e1e";
        this.color = '#fff';
        this.iconSize = 20;
        this.iconSrc = '';
        this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    onButtonClick() {
        this.onClick.emit();
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], LabledIconButtonComponent.prototype, "lable", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], LabledIconButtonComponent.prototype, "backgroundColor", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], LabledIconButtonComponent.prototype, "color", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], LabledIconButtonComponent.prototype, "iconSize", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], LabledIconButtonComponent.prototype, "iconSrc", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], LabledIconButtonComponent.prototype, "onClick", void 0);
LabledIconButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'labled-icon-button',
        template: __webpack_require__(/*! raw-loader!./labled-icon-button.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/labled-icon-button/labled-icon-button.component.html"),
        styles: [__webpack_require__(/*! ./labled-icon-button.component.css */ "./src/app/shared/labled-icon-button/labled-icon-button.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], LabledIconButtonComponent);



/***/ }),

/***/ "./src/app/shared/property-slider/property-slider.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/shared/property-slider/property-slider.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".single-control-container {\n  display: flex;\n  padding-top: 5px;\n  margin-bottom: 10px;\n  width: 100%;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.single-control-lable {\n  color: white;\n  font-family: \"Roboto\", Helvetica, Arial, sans-serif;\n  font-size: 13px;\n}\n\n/* custom css range slider */\n\n.slider {\n  -webkit-appearance: none;\n  width: calc(100% - 10px);\n  height: 20px;\n  border-radius: 20px;\n  padding: 0px 3px;\n  background: #1e1e1e;\n  outline: none;\n  opacity: 0.7;\n  transition: opacity 0.2s;\n}\n\n.slider:hover {\n  opacity: 1;\n}\n\n.slider::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  appearance: none;\n  width: 15px;\n  height: 15px;\n  border-radius: 15px;\n  background: var(--dark-purple);\n  cursor: pointer;\n}\n\n.slider::-moz-range-thumb {\n  width: 15px;\n  height: 15px;\n  border-radius: 15px;\n  background: var(--dark-purple);\n  cursor: pointer;\n}\n\n/* range slider css finish here */\n\n.range-value {\n  padding: 5px;\n  background-color: #1e1e1e;\n  color: white;\n  font-family: \"Roboto\", Helvetica, Arial, sans-serif;\n  border-radius: 5px;\n  margin-left: 5px;\n  font-size: 10px;\n  min-width: 30px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3Byb3BlcnR5LXNsaWRlci9wcm9wZXJ0eS1zbGlkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1EQUFtRDtFQUNuRCxlQUFlO0FBQ2pCOztBQUVBLDRCQUE0Qjs7QUFDNUI7RUFDRSx3QkFBd0I7RUFDeEIsd0JBQXdCO0VBQ3hCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsWUFBWTtFQUVaLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsZUFBZTtBQUNqQjs7QUFFQSxpQ0FBaUM7O0FBRWpDO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osbURBQW1EO0VBQ25ELGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGVBQWU7RUFDZixrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvcHJvcGVydHktc2xpZGVyL3Byb3BlcnR5LXNsaWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpbmdsZS1jb250cm9sLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5zaW5nbGUtY29udHJvbC1sYWJsZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLyogY3VzdG9tIGNzcyByYW5nZSBzbGlkZXIgKi9cbi5zbGlkZXIge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAxMHB4KTtcbiAgaGVpZ2h0OiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBwYWRkaW5nOiAwcHggM3B4O1xuICBiYWNrZ3JvdW5kOiAjMWUxZTFlO1xuICBvdXRsaW5lOiBub25lO1xuICBvcGFjaXR5OiAwLjc7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC4ycztcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzO1xufVxuXG4uc2xpZGVyOmhvdmVyIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLnNsaWRlcjo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIHdpZHRoOiAxNXB4O1xuICBoZWlnaHQ6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWRhcmstcHVycGxlKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc2xpZGVyOjotbW96LXJhbmdlLXRodW1iIHtcbiAgd2lkdGg6IDE1cHg7XG4gIGhlaWdodDogMTVweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tZGFyay1wdXJwbGUpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qIHJhbmdlIHNsaWRlciBjc3MgZmluaXNoIGhlcmUgKi9cblxuLnJhbmdlLXZhbHVlIHtcbiAgcGFkZGluZzogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWUxZTFlO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgbWluLXdpZHRoOiAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/shared/property-slider/property-slider.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shared/property-slider/property-slider.component.ts ***!
  \*********************************************************************/
/*! exports provided: PropertySliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertySliderComponent", function() { return PropertySliderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PropertySliderComponent = class PropertySliderComponent {
    constructor() {
        this.lable = "Lable";
        this.min = 0;
        this.max = 1;
        this.step = 0.1;
        this.modal = 0;
        this.format = '';
        this.timeOut = 300;
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    change($event) {
        if (this.timeoutCallback)
            clearTimeout(this.timeoutCallback);
        this.timeoutCallback = setTimeout(() => {
            this.onChange.emit($event);
        }, this.timeOut);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], PropertySliderComponent.prototype, "lable", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], PropertySliderComponent.prototype, "min", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], PropertySliderComponent.prototype, "max", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], PropertySliderComponent.prototype, "step", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], PropertySliderComponent.prototype, "modal", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], PropertySliderComponent.prototype, "format", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], PropertySliderComponent.prototype, "timeOut", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], PropertySliderComponent.prototype, "onChange", void 0);
PropertySliderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'property-slider',
        template: __webpack_require__(/*! raw-loader!./property-slider.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/property-slider/property-slider.component.html"),
        styles: [__webpack_require__(/*! ./property-slider.component.css */ "./src/app/shared/property-slider/property-slider.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PropertySliderComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mayurkukadiya/Code/OB/banner-generator/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!***********************!*\
  !*** jsdom (ignored) ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!********************************************************!*\
  !*** jsdom/lib/jsdom/living/generated/utils (ignored) ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!***************************************!*\
  !*** jsdom/lib/jsdom/utils (ignored) ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map