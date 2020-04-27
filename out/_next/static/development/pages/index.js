(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static\\development\\pages\\index.js"],{

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/LinkButton.module.scss":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./src/components/LinkButton.module.scss ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".LinkButton_container__bu5cc {\n  display: inline-block; }\n  .LinkButton_container__bu5cc a {\n    display: inline-block;\n    box-sizing: border-box;\n    padding: 16px;\n    background-color: #21447c;\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n    text-align: center;\n    color: #fafafa;\n    text-transform: uppercase;\n    transition: 0.14s; }\n    .LinkButton_container__bu5cc a:hover {\n      background-color: #2a569c;\n      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4); }\n  .LinkButton_container__bu5cc.LinkButton_colourWhite__29w7i a {\n    background-color: #fafafa;\n    color: #21447c; }\n    .LinkButton_container__bu5cc.LinkButton_colourWhite__29w7i a:hover {\n      background-color: #fafafa; }\n", "",{"version":3,"sources":["LinkButton.module.scss","../Variables.scss"],"names":[],"mappings":"AAEA;EACI,qBAAqB,EAAA;EADzB;IAIQ,qBAAqB;IACrB,sBAAsB;IACtB,aAAa;IAEb,yBCHc;IDId,wCAAqC;IAErC,kBAAkB;IAClB,cCXa;IDYb,yBAAyB;IAEzB,iBCAoB,EAAA;IDf5B;MAkBY,yBAA4C;MAC5C,wCAAqC,EAAA;EAnBjD;IAwBQ,yBCvBa;IDyBb,cCrBc,EAAA;IDLtB;MA6BY,yBC5BS,EAAA","file":"LinkButton.module.scss","sourcesContent":["@import '../Variables.scss';\r\n\r\n.container {\r\n    display: inline-block;\r\n\r\n    a {\r\n        display: inline-block;\r\n        box-sizing: border-box;\r\n        padding: 16px;\r\n\r\n        background-color: $color_ycblue;\r\n        box-shadow: 0 4px 8px rgba(0,0,0,0.2);\r\n\r\n        text-align: center;\r\n        color: $color_white;\r\n        text-transform: uppercase;\r\n\r\n        transition: $transition_time_link;\r\n\r\n        &:hover {\r\n            background-color: lighten($color_ycblue, 8%);\r\n            box-shadow: 0 4px 8px rgba(0,0,0,0.4);\r\n        }\r\n    }\r\n\r\n    &.colourWhite a {\r\n        background-color: $color_white;\r\n    \r\n        color: $color_ycblue;\r\n    \r\n        &:hover {\r\n            background-color: $color_white;\r\n        }\r\n    }\r\n}","$color_foreground: #191919;\r\n$color_background: #fafafa;\r\n\r\n$color_white: #fafafa;\r\n$color_black: #191919;\r\n$color_grey: #dadada;\r\n$color_grey_dark: rgb(116, 117, 136);\r\n$color_ycblue: #21447c;\r\n$color_purple: #736eab;\r\n$color_teal: #27c9a2;\r\n\r\n$color_green: #56d763;\r\n$color_lilac: #a952d1;\r\n$color_orange: #ec712c;\r\n$color_blue: #5f6deb;\r\n$color_brown: #be4e1e;\r\n\r\n$transition_time_link: 0.14s;\r\n$transition_time_movement: 0.19s;\r\n\r\n$fonts_heading: \"Fugaz One\", \"Roboto\", \"Open Sans\", sans-serif;\r\n$fonts_body: \"Nunito\", \"Roboto\", \"Open Sans\", sans-serif;\r\n\r\n$box_shadow_light: 0 4px 8px rgba(0, 0, 0, 0.2);\r\n\r\n$media_screen_max_width: 640px;\r\n"]}]);
// Exports
exports.locals = {
	"container": "LinkButton_container__bu5cc",
	"colourWhite": "LinkButton_colourWhite__29w7i"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/pages/index.module.scss":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./src/pages/index.module.scss ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Imports
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_PURE_IMPORT_0___ = __webpack_require__(/*! ../assets/images/emmanuel-WcrqKjgMPfI-unsplash.jpg */ "./src/assets/images/emmanuel-WcrqKjgMPfI-unsplash.jpg");
var ___CSS_LOADER_URL_PURE_IMPORT_1___ = __webpack_require__(/*! ../assets/images/constant-loubier-7lzIyp2Ork4-unsplash.jpg */ "./src/assets/images/constant-loubier-7lzIyp2Ork4-unsplash.jpg");
var ___CSS_LOADER_URL_PURE_IMPORT_2___ = __webpack_require__(/*! ../assets/images/jodyhongfilms-sI1mbxJFFpU-unsplash.jpg */ "./src/assets/images/jodyhongfilms-sI1mbxJFFpU-unsplash.jpg");
var ___CSS_LOADER_URL_IMPORT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_0___);
var ___CSS_LOADER_URL_IMPORT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_1___);
var ___CSS_LOADER_URL_IMPORT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_PURE_IMPORT_2___);
// Module
exports.push([module.i, ".index_IMGbg1__2cFeu {\n  background-image: url(" + ___CSS_LOADER_URL_IMPORT_0___ + ");\n  background-size: cover; }\n\n.index_IMGbg2__1BM9I {\n  background-image: url(" + ___CSS_LOADER_URL_IMPORT_1___ + ");\n  background-size: cover; }\n\n.index_IMGbg3__27Iiw {\n  background-image: url(" + ___CSS_LOADER_URL_IMPORT_2___ + ");\n  background-size: cover;\n  background-position: center; }\n\n.index_bgOverlayBlack__3urbV {\n  background-color: rgba(0, 0, 0, 0.8); }\n\n.index_bgOverlayBlue__2uBOg {\n  background-color: rgba(33, 68, 124, 0.8); }\n\n@keyframes index_scrollIndicatorAnim__1jvhM {\n  0% {\n    padding: 16px;\n    opacity: 0.2; }\n  50% {\n    padding: 24px 16px 8px 16px;\n    opacity: 1; }\n  100% {\n    padding: 16px;\n    opacity: 0.2; } }\n\n.index_sectionHeader__3XZxS {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 32px 16px;\n  text-align: center; }\n  .index_sectionHeader__3XZxS h2 {\n    margin-bottom: 32px; }\n  .index_sectionHeader__3XZxS p {\n    max-width: 44ch; }\n\n.index_scrollIndicator__WCQZL {\n  position: absolute;\n  bottom: 32px;\n  cursor: pointer;\n  transition: 0.14s; }\n  .index_scrollIndicator__WCQZL i {\n    padding: 16px;\n    color: #fafafa;\n    animation: index_scrollIndicatorAnim__1jvhM 2s ease-in-out infinite; }\n  .index_scrollIndicator__WCQZL.index_hidden__1gJJX {\n    opacity: 0; }\n\n.index_contentWrapper__1a-is {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  margin: 64px 0; }\n  .index_contentWrapper__1a-is.index_noTopMargin__QLNdo {\n    margin: 0 0 64px 0; }\n  .index_contentWrapper__1a-is p {\n    margin: 0 0 32px 0;\n    padding: 0 32px;\n    text-align: center; }\n  .index_contentWrapper__1a-is .index_imageContainer__3CFkO {\n    width: 100%; }\n    .index_contentWrapper__1a-is .index_imageContainer__3CFkO img {\n      display: inline-block;\n      width: 100%;\n      max-height: 320px;\n      object-fit: cover; }\n  .index_contentWrapper__1a-is .index_buttonContainer__3mKfc .index_linkButton__yEmdO {\n    margin: 16px; }\n\n.index_landingWrapper__3LQDQ {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  max-width: 100%;\n  padding: 0 0 120px 0;\n  min-height: 100vh; }\n  .index_landingWrapper__3LQDQ .index_landingContent__3bI_0 {\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    padding: 32px; }\n    .index_landingWrapper__3LQDQ .index_landingContent__3bI_0 h1 {\n      margin: 0 0 16px 0;\n      text-align: center;\n      color: #fafafa; }\n    .index_landingWrapper__3LQDQ .index_landingContent__3bI_0 h3 {\n      margin: 0 0 32px 0;\n      text-align: center; }\n\n.index_heroWrapper__1tlrg {\n  width: 100%; }\n  .index_heroWrapper__1tlrg .index_heroContainer__38A0D {\n    display: grid;\n    grid-template-columns: minmax(0, 1fr) 1fr;\n    grid-template-rows: repeat(2, auto-fit);\n    box-sizing: border-box;\n    max-width: 1280px;\n    margin: 0 auto;\n    padding: 0 16px 64px 16px; }\n    .index_heroWrapper__1tlrg .index_heroContainer__38A0D.index_noBottomPadding__1KJ6n {\n      padding: 0 16px; }\n  .index_heroWrapper__1tlrg.index_heroImageLeft__2Xzva .index_heroImageWrapper__12ILz {\n    grid-area: 1 / 1 / 2 / 2; }\n  .index_heroWrapper__1tlrg.index_heroImageLeft__2Xzva .index_sectionHeader__3XZxS {\n    grid-area: 1 / 2 / 2 / 3; }\n  .index_heroWrapper__1tlrg.index_heroImageLeft__2Xzva .index_contentWrapper__1a-is {\n    grid-area: 2 / 1 / 3 / 3; }\n  .index_heroWrapper__1tlrg.index_heroImageRight__fP7Ok .index_heroImageWrapper__12ILz {\n    grid-area: 1 / 2 / 2 / 3; }\n  .index_heroWrapper__1tlrg.index_heroImageRight__fP7Ok .index_sectionHeader__3XZxS {\n    grid-area: 1 / 1 / 2 / 2; }\n  .index_heroWrapper__1tlrg.index_heroImageRight__fP7Ok .index_contentWrapper__1a-is {\n    grid-area: 2 / 1 / 3 / 3; }\n  .index_heroWrapper__1tlrg.index_heroNoImage__1skMr .index_sectionHeader__3XZxS {\n    grid-area: 1 / 1 / 2 / 3; }\n  .index_heroWrapper__1tlrg.index_heroNoImage__1skMr .index_contentWrapper__1a-is {\n    grid-area: 2 / 1 / 3 / 3; }\n  .index_heroWrapper__1tlrg.index_heroDark__1IdfV {\n    background-color: #191919; }\n    .index_heroWrapper__1tlrg.index_heroDark__1IdfV h1,\n    .index_heroWrapper__1tlrg.index_heroDark__1IdfV h2,\n    .index_heroWrapper__1tlrg.index_heroDark__1IdfV h3 {\n      color: #6993d7; }\n    .index_heroWrapper__1tlrg.index_heroDark__1IdfV p {\n      color: #fafafa; }\n  .index_heroWrapper__1tlrg .index_heroImageWrapper__12ILz {\n    display: flex;\n    flex-direction: column;\n    align-items: stretch;\n    justify-content: flex-start;\n    max-height: 320px;\n    width: 100%;\n    margin: -64px 0 0 0;\n    box-shadow: 0 0 16px rgba(0, 0, 0, 0.4);\n    transition: 0.19s; }\n    .index_heroWrapper__1tlrg .index_heroImageWrapper__12ILz .index_linkButton__yEmdO a {\n      width: 100%;\n      box-shadow: none; }\n      .index_heroWrapper__1tlrg .index_heroImageWrapper__12ILz .index_linkButton__yEmdO a:hover {\n        box-shadow: none; }\n    .index_heroWrapper__1tlrg .index_heroImageWrapper__12ILz img {\n      object-fit: cover;\n      min-height: 240px;\n      height: 100%;\n      max-width: 100%; }\n\n.index_sectionWrapper__2MDpR {\n  width: 100%; }\n  .index_sectionWrapper__2MDpR .index_sectionContainer__3Jgai {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: repeat(2, max-content);\n    box-sizing: border-box;\n    max-width: 1280px;\n    margin: 0 auto;\n    padding: 0 16px 0 16px; }\n    .index_sectionWrapper__2MDpR .index_sectionContainer__3Jgai .index_contentWrapper__1a-is p {\n      margin: 32px 0; }\n\n/* Other element styles */\nul.index_listGrid__c23yB {\n  display: grid;\n  grid-template-columns: repeat(2, max-content);\n  grid-template-rows: repeat(auto-fit 1fr);\n  max-width: max-content;\n  margin: 0 auto; }\n  ul.index_listGrid__c23yB li {\n    box-sizing: border-box;\n    padding: 8px 24px 8px 8px;\n    border-bottom: 2px solid #dadada;\n    font-weight: bold; }\n    ul.index_listGrid__c23yB li:nth-last-child(-n + 2) {\n      border-bottom: none; }\n\nul.index_flexRelevantUnits__1xHYo {\n  display: flex;\n  justify-content: center;\n  align-items: stretch;\n  flex-wrap: wrap; }\n  ul.index_flexRelevantUnits__1xHYo .index_subjectTile__aonpK {\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 32px 16px;\n    margin: 8px;\n    max-width: 320px;\n    text-align: center;\n    color: white; }\n    ul.index_flexRelevantUnits__1xHYo .index_subjectTile__aonpK.index_fruGreen__1Dimd {\n      background-color: #56d763; }\n    ul.index_flexRelevantUnits__1xHYo .index_subjectTile__aonpK.index_fruLilac__3t6nT {\n      background-color: #a952d1; }\n    ul.index_flexRelevantUnits__1xHYo .index_subjectTile__aonpK.index_fruOrange__3ZwwY {\n      background-color: #ec712c; }\n    ul.index_flexRelevantUnits__1xHYo .index_subjectTile__aonpK.index_fruBlue__sjFrw {\n      background-color: #5f6deb; }\n    ul.index_flexRelevantUnits__1xHYo .index_subjectTile__aonpK.index_fruBrown__1tHoA {\n      background-color: #be4e1e; }\n    ul.index_flexRelevantUnits__1xHYo .index_subjectTile__aonpK h4 {\n      margin-bottom: 16px; }\n    ul.index_flexRelevantUnits__1xHYo .index_subjectTile__aonpK p {\n      padding: 0 16px 0 16px;\n      margin: 0; }\n    ul.index_flexRelevantUnits__1xHYo .index_subjectTile__aonpK .index_fruContainer__2x8VK .index_fruInterest__1TxfE {\n      position: relative;\n      transition: 0.14s; }\n    ul.index_flexRelevantUnits__1xHYo .index_subjectTile__aonpK .index_fruContainer__2x8VK .index_fruUnits__17_bS {\n      position: absolute;\n      top: 0;\n      left: 0;\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n      width: 100%;\n      height: 100%;\n      opacity: 0;\n      transform: scale(0.9);\n      transition: 0.14s; }\n    ul.index_flexRelevantUnits__1xHYo .index_subjectTile__aonpK .index_fruContainer__2x8VK:hover .index_fruInterest__1TxfE {\n      opacity: 0;\n      transform: scale(1.1); }\n    ul.index_flexRelevantUnits__1xHYo .index_subjectTile__aonpK .index_fruContainer__2x8VK:hover .index_fruUnits__17_bS {\n      opacity: 1;\n      transform: scale(1); }\n\n.index_imageCarousel__3aNtQ {\n  height: auto;\n  width: calc(100vw - 32px);\n  max-height: 480px;\n  max-width: 720px;\n  margin: auto;\n  overflow: hidden; }\n\n@media only screen and (max-width: 640px) {\n  .index_contentWrapper__1a-is {\n    margin: 0 0 32px 0; }\n    .index_contentWrapper__1a-is:before {\n      display: inline-block;\n      background-color: #747588;\n      height: 2px;\n      width: 32px;\n      margin: 0 auto; }\n  .index_heroWrapper__1tlrg.index_heroImageLeft__2Xzva .index_heroImageWrapper__12ILz, .index_heroWrapper__1tlrg.index_heroImageRight__fP7Ok .index_heroImageWrapper__12ILz {\n    grid-area: 1 / 1 / 2 / 2; }\n  .index_heroWrapper__1tlrg.index_heroImageLeft__2Xzva .index_sectionHeader__3XZxS, .index_heroWrapper__1tlrg.index_heroImageRight__fP7Ok .index_sectionHeader__3XZxS {\n    grid-area: 2 / 1 / 3 / 2; }\n  .index_heroWrapper__1tlrg.index_heroImageLeft__2Xzva .index_contentWrapper__1a-is, .index_heroWrapper__1tlrg.index_heroImageRight__fP7Ok .index_contentWrapper__1a-is {\n    grid-area: 3 / 1 / 4 / 2; }\n  .index_heroWrapper__1tlrg .index_heroContainer__38A0D {\n    grid-template-columns: 1fr;\n    grid-template-rows: repeat(3, auto-fit); }\n  .index_heroWrapper__1tlrg ul.index_listGrid__c23yB {\n    grid-template-columns: 1fr; }\n    .index_heroWrapper__1tlrg ul.index_listGrid__c23yB li {\n      border-bottom: none;\n      border-left: 2px solid #dadada; } }\n", "",{"version":3,"sources":["index.module.scss","../Variables.scss"],"names":[],"mappings":"AAEA;EACI,oDAA2E;EAC3E,sBAAsB,EAAA;;AAG1B;EACI,oDAAmF;EACnF,sBAAsB,EAAA;;AAG1B;EACI,oDAAgF;EAChF,sBAAsB;EACtB,2BAA2B,EAAA;;AAG/B;EACI,oCAAoC,EAAA;;AAGxC;EACI,wCAAqE,EAAA;;AAGzE;EACI;IACI,aAAa;IACb,YAAY,EAAA;EAGhB;IACI,2BAA2B;IAC3B,UAAU,EAAA;EAGd;IACI,aAAa;IACb,YAAY,EAAA,EAAA;;AAIpB;EACI,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EAEvB,kBAAkB;EAElB,kBAAkB,EAAA;EARtB;IAWQ,mBAAmB,EAAA;EAX3B;IAeQ,eAAe,EAAA;;AAIvB;EACI,kBAAkB;EAClB,YAAY;EAEZ,eAAe;EAEf,iBCnDwB,EAAA;ED6C5B;IASQ,aAAa;IACb,cCrEa;IDsEb,mEAAsD,EAAA;EAX9D;IAeQ,UAAU,EAAA;;AAKlB;EACI,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,2BAA2B;EAE3B,cAAc,EAAA;EANlB;IASQ,kBAAkB,EAAA;EAT1B;IAaQ,kBAAkB;IAClB,eAAe;IAEf,kBAAkB,EAAA;EAhB1B;IAoBQ,WAAW,EAAA;IApBnB;MAuBY,qBAAqB;MAErB,WAAW;MACX,iBAAiB;MACjB,iBAAiB,EAAA;EA3B7B;IAiCY,YAAY,EAAA;;AAMxB;EACI,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EAEvB,eAAe;EAEf,oBAAoB;EACpB,iBAAiB,EAAA;EATrB;IAYQ,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IAEvB,aAAa,EAAA;IAlBrB;MAqBY,kBAAkB;MAElB,kBAAkB;MAElB,cC/IS,EAAA;IDsHrB;MA6BY,kBAAkB;MAClB,kBAAkB,EAAA;;AAM9B;EACI,WAAW,EAAA;EADf;IAKQ,aAAa;IACb,yCAAyC;IACzC,uCAAuC;IACvC,sBAAsB;IAEtB,iBAAiB;IACjB,cAAc;IACd,yBAAyB,EAAA;IAZjC;MAeY,eAAe,EAAA;EAf3B;IAsBY,wBAAwB,EAAA;EAtBpC;IA0BY,wBAAwB,EAAA;EA1BpC;IA8BY,wBAAwB,EAAA;EA9BpC;IAoCY,wBAAwB,EAAA;EApCpC;IAwCY,wBAAwB,EAAA;EAxCpC;IA4CY,wBAAwB,EAAA;EA5CpC;IAkDY,wBAAwB,EAAA;EAlDpC;IAsDY,wBAAwB,EAAA;EAtDpC;IA6DQ,yBCtNa,EAAA;IDyJrB;;;MAkEY,cAAkC,EAAA;IAlE9C;MAqEY,cC/NS,EAAA;ED0JrB;IA2EQ,aAAa;IACb,sBAAsB;IACtB,oBAAoB;IACpB,2BAA2B;IAE3B,iBAAiB;IACjB,WAAW;IACX,mBAAmB;IAEnB,uCAAuC;IAEvC,iBCjOwB,EAAA;ID2IhC;MAyFY,WAAW;MAEX,gBAAgB,EAAA;MA3F5B;QA8FgB,gBAAgB,EAAA;IA9FhC;MAmGY,iBAAiB;MACjB,iBAAiB;MACjB,YAAY;MACZ,eAAe,EAAA;;AAM3B;EACI,WAAW,EAAA;EADf;IAKQ,aAAa;IACb,0BAA0B;IAC1B,0CAA0C;IAC1C,sBAAsB;IAEtB,iBAAiB;IACjB,cAAc;IACd,sBAAsB,EAAA;IAZ9B;MAeY,cAAc,EAAA;;AAK1B,yBAAA;AACA;EACI,aAAa;EACb,6CAA6C;EAC7C,wCAAwC;EAExC,sBAAsB;EACtB,cAAc,EAAA;EANlB;IASQ,sBAAsB;IAEtB,yBAAyB;IACzB,gCCrSY;IDsSZ,iBAAiB,EAAA;IAbzB;MAgBY,mBAAmB,EAAA;;AAK/B;EACI,aAAa;EACb,uBAAuB;EACvB,oBAAoB;EACpB,eAAe,EAAA;EAJnB;IAOQ,kBAAkB;IAElB,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IAEnB,kBAAkB;IAClB,WAAW;IACX,gBAAgB;IAEhB,kBAAkB;IAElB,YAAY,EAAA;IApBpB;MAuBY,yBC/TS,EAAA;IDwSrB;MA2BY,yBClUS,EAAA;IDuSrB;MA+BY,yBCrUU,EAAA;IDsStB;MAmCY,yBCxUQ,EAAA;IDqSpB;MAuCY,yBC3US,EAAA;IDoSrB;MA2CY,mBAAmB,EAAA;IA3C/B;MA+CY,sBAAsB;MACtB,SAAS,EAAA;IAhDrB;MAqDgB,kBAAkB;MAElB,iBCzVY,EAAA;IDkS5B;MA2DgB,kBAAkB;MAClB,MAAM;MACN,OAAO;MACP,aAAa;MACb,sBAAsB;MACtB,uBAAuB;MACvB,mBAAmB;MAEnB,WAAW;MACX,YAAY;MAEZ,UAAU;MACV,qBAAqB;MAErB,iBC3WY,EAAA;IDkS5B;MA8EoB,UAAU;MACV,qBAAqB,EAAA;IA/EzC;MAkFoB,UAAU;MACV,mBAAmB,EAAA;;AAOvC;EACI,YAAY;EACZ,yBAAyB;EACzB,iBAAiB;EACjB,gBAAgB;EAEhB,YAAY;EACZ,gBAAgB,EAAA;;AAGpB;EACI;IACI,kBAAkB,EAAA;IADtB;MAIQ,qBAAqB;MAErB,yBCxZwB;MD0ZxB,WAAW;MACX,WAAW;MAEX,cAAc,EAAA;EAGtB;IAIY,wBAAwB,EAAA;EAJpC;IAQY,wBAAwB,EAAA;EARpC;IAYY,wBAAwB,EAAA;EAZpC;IAiBQ,0BAA0B;IAC1B,uCAAuC,EAAA;EAlB/C;IAsBQ,0BAA0B,EAAA;IAtBlC;MAyBY,mBAAmB;MACnB,8BC3bI,EAAA,ED4bP","file":"index.module.scss","sourcesContent":["@import \"../Variables.scss\";\r\n\r\n.IMGbg1 {\r\n    background-image: url(\"../assets/images/emmanuel-WcrqKjgMPfI-unsplash.jpg\");\r\n    background-size: cover;\r\n}\r\n\r\n.IMGbg2 {\r\n    background-image: url(\"../assets/images/constant-loubier-7lzIyp2Ork4-unsplash.jpg\");\r\n    background-size: cover;\r\n}\r\n\r\n.IMGbg3 {\r\n    background-image: url(\"../assets/images/jodyhongfilms-sI1mbxJFFpU-unsplash.jpg\");\r\n    background-size: cover;\r\n    background-position: center;\r\n}\r\n\r\n.bgOverlayBlack {\r\n    background-color: rgba(0, 0, 0, 0.8);\r\n}\r\n\r\n.bgOverlayBlue {\r\n    background-color: transparentize($color: $color_ycblue, $amount: 0.2);\r\n}\r\n\r\n@keyframes scrollIndicatorAnim {\r\n    0% {\r\n        padding: 16px;\r\n        opacity: 0.2;\r\n    }\r\n\r\n    50% {\r\n        padding: 24px 16px 8px 16px;\r\n        opacity: 1;\r\n    }\r\n\r\n    100% {\r\n        padding: 16px;\r\n        opacity: 0.2;\r\n    }\r\n}\r\n\r\n.sectionHeader {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n\r\n    padding: 32px 16px;\r\n\r\n    text-align: center;\r\n\r\n    h2 {\r\n        margin-bottom: 32px;\r\n    }\r\n\r\n    p {\r\n        max-width: 44ch;\r\n    }\r\n}\r\n\r\n.scrollIndicator {\r\n    position: absolute;\r\n    bottom: 32px;\r\n\r\n    cursor: pointer;\r\n\r\n    transition: $transition_time_link;\r\n\r\n    i {\r\n        padding: 16px;\r\n        color: $color_white;\r\n        animation: scrollIndicatorAnim 2s ease-in-out infinite;\r\n    }\r\n\r\n    &.hidden {\r\n        opacity: 0;\r\n    }\r\n}\r\n\r\n// Content wrapper for content inside elements\r\n.contentWrapper {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: flex-start;\r\n\r\n    margin: 64px 0;\r\n\r\n    &.noTopMargin {\r\n        margin: 0 0 64px 0;\r\n    }\r\n\r\n    p {\r\n        margin: 0 0 32px 0;\r\n        padding: 0 32px;\r\n\r\n        text-align: center;\r\n    }\r\n\r\n    .imageContainer {\r\n        width: 100%;\r\n\r\n        img {\r\n            display: inline-block;\r\n\r\n            width: 100%;\r\n            max-height: 320px;\r\n            object-fit: cover;\r\n        }\r\n    }\r\n\r\n    .buttonContainer {\r\n        .linkButton {\r\n            margin: 16px;\r\n        }\r\n    }\r\n}\r\n\r\n// Wrapper for landing element\r\n.landingWrapper {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n\r\n    max-width: 100%;\r\n\r\n    padding: 0 0 120px 0;\r\n    min-height: 100vh;\r\n\r\n    .landingContent {\r\n        position: relative;\r\n        display: flex;\r\n        flex-direction: column;\r\n        align-items: center;\r\n        justify-content: center;\r\n\r\n        padding: 32px;\r\n\r\n        h1 {\r\n            margin: 0 0 16px 0;\r\n\r\n            text-align: center;\r\n\r\n            color: $color_white;\r\n        }\r\n\r\n        h3 {\r\n            margin: 0 0 32px 0;\r\n            text-align: center;\r\n        }\r\n    }\r\n}\r\n\r\n// Wrapper for hero element\r\n.heroWrapper {\r\n    width: 100%;\r\n\r\n    // Inner content container for the hero\r\n    .heroContainer {\r\n        display: grid;\r\n        grid-template-columns: minmax(0, 1fr) 1fr;\r\n        grid-template-rows: repeat(2, auto-fit);\r\n        box-sizing: border-box;\r\n\r\n        max-width: 1280px; // todo: consider increasing on 4K displays\r\n        margin: 0 auto; // center the hero container\r\n        padding: 0 16px 64px 16px; // 64px to cater for next hero image overlap\r\n\r\n        &.noBottomPadding {\r\n            padding: 0 16px;\r\n        }\r\n    }\r\n\r\n    // -- Image alignments\r\n    &.heroImageLeft {\r\n        .heroImageWrapper {\r\n            grid-area: 1 / 1 / 2 / 2;\r\n        }\r\n\r\n        .sectionHeader {\r\n            grid-area: 1 / 2 / 2 / 3;\r\n        }\r\n\r\n        .contentWrapper {\r\n            grid-area: 2 / 1 / 3 / 3;\r\n        }\r\n    }\r\n\r\n    &.heroImageRight {\r\n        .heroImageWrapper {\r\n            grid-area: 1 / 2 / 2 / 3;\r\n        }\r\n\r\n        .sectionHeader {\r\n            grid-area: 1 / 1 / 2 / 2;\r\n        }\r\n\r\n        .contentWrapper {\r\n            grid-area: 2 / 1 / 3 / 3;\r\n        }\r\n    }\r\n\r\n    &.heroNoImage {\r\n        .sectionHeader {\r\n            grid-area: 1 / 1 / 2 / 3;\r\n        }\r\n\r\n        .contentWrapper {\r\n            grid-area: 2 / 1 / 3 / 3;\r\n        }\r\n    }\r\n    // -- End of image alignments\r\n\r\n    // Dark style\r\n    &.heroDark {\r\n        background-color: $color_black;\r\n\r\n        h1,\r\n        h2,\r\n        h3 {\r\n            color: lighten($color_ycblue, 32%);\r\n        }\r\n        p {\r\n            color: $color_white;\r\n        }\r\n    }\r\n\r\n    // Hero image container\r\n    .heroImageWrapper {\r\n        display: flex;\r\n        flex-direction: column;\r\n        align-items: stretch;\r\n        justify-content: flex-start;\r\n\r\n        max-height: 320px;\r\n        width: 100%;\r\n        margin: -64px 0 0 0; // margin: 0; pins element edges to parent edges\r\n\r\n        box-shadow: 0 0 16px rgba(0, 0, 0, 0.4);\r\n\r\n        transition: $transition_time_movement;\r\n\r\n        .linkButton a {\r\n            width: 100%;\r\n\r\n            box-shadow: none;\r\n\r\n            &:hover {\r\n                box-shadow: none;\r\n            }\r\n        }\r\n\r\n        img {\r\n            object-fit: cover;\r\n            min-height: 240px;\r\n            height: 100%;\r\n            max-width: 100%;\r\n        }\r\n    }\r\n}\r\n\r\n// Outer wrapper for the section\r\n.sectionWrapper {\r\n    width: 100%;\r\n\r\n    // Inner content container\r\n    .sectionContainer {\r\n        display: grid;\r\n        grid-template-columns: 1fr;\r\n        grid-template-rows: repeat(2, max-content);\r\n        box-sizing: border-box;\r\n\r\n        max-width: 1280px; // todo: consider increasing on 4K displays\r\n        margin: 0 auto; // center the hero container\r\n        padding: 0 16px 0 16px;\r\n\r\n        .contentWrapper p {\r\n            margin: 32px 0;\r\n        }\r\n    }\r\n}\r\n\r\n/* Other element styles */\r\nul.listGrid {\r\n    display: grid;\r\n    grid-template-columns: repeat(2, max-content);\r\n    grid-template-rows: repeat(auto-fit 1fr);\r\n\r\n    max-width: max-content; // shouldn't have to do this, but alas, I must.\r\n    margin: 0 auto;\r\n\r\n    li {\r\n        box-sizing: border-box;\r\n\r\n        padding: 8px 24px 8px 8px;\r\n        border-bottom: 2px solid $color_grey;\r\n        font-weight: bold;\r\n\r\n        &:nth-last-child(-n + 2) {\r\n            border-bottom: none; //![last row border] if @media query is updated, this should be double-checked\r\n        }\r\n    }\r\n}\r\n\r\nul.flexRelevantUnits {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: stretch;\r\n    flex-wrap: wrap;\r\n\r\n    .subjectTile {\r\n        position: relative;\r\n\r\n        display: flex;\r\n        flex-direction: column;\r\n        justify-content: center;\r\n        align-items: center;\r\n\r\n        padding: 32px 16px;\r\n        margin: 8px;\r\n        max-width: 320px;\r\n\r\n        text-align: center;\r\n\r\n        color: white;\r\n\r\n        &.fruGreen {\r\n            background-color: $color_green;\r\n        }\r\n\r\n        &.fruLilac {\r\n            background-color: $color_lilac;\r\n        }\r\n\r\n        &.fruOrange {\r\n            background-color: $color_orange;\r\n        }\r\n\r\n        &.fruBlue {\r\n            background-color: $color_blue;\r\n        }\r\n\r\n        &.fruBrown {\r\n            background-color: $color_brown;\r\n        }\r\n\r\n        h4 {\r\n            margin-bottom: 16px;\r\n        }\r\n\r\n        p {\r\n            padding: 0 16px 0 16px;\r\n            margin: 0;\r\n        }\r\n\r\n        .fruContainer {\r\n            .fruInterest {\r\n                position: relative;\r\n\r\n                transition: $transition_time_link;\r\n            }\r\n\r\n            .fruUnits {\r\n                position: absolute;\r\n                top: 0;\r\n                left: 0;\r\n                display: flex;\r\n                flex-direction: column;\r\n                justify-content: center;\r\n                align-items: center;\r\n\r\n                width: 100%;\r\n                height: 100%;\r\n\r\n                opacity: 0;\r\n                transform: scale(0.9);\r\n\r\n                transition: $transition_time_link;\r\n            }\r\n\r\n            &:hover {\r\n                .fruInterest {\r\n                    opacity: 0;\r\n                    transform: scale(1.1);\r\n                }\r\n                .fruUnits {\r\n                    opacity: 1;\r\n                    transform: scale(1);\r\n                }\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n.imageCarousel {\r\n    height: auto;\r\n    width: calc(100vw - 32px);\r\n    max-height: 480px;\r\n    max-width: 720px;\r\n\r\n    margin: auto;\r\n    overflow: hidden;\r\n}\r\n\r\n@media only screen and (max-width: $media_screen_max_width) {\r\n    .contentWrapper {\r\n        margin: 0 0 32px 0;\r\n\r\n        &:before {\r\n            display: inline-block;\r\n\r\n            background-color: $color_grey_dark;\r\n\r\n            height: 2px;\r\n            width: 32px;\r\n\r\n            margin: 0 auto;\r\n        }\r\n    }\r\n    .heroWrapper {\r\n        &.heroImageLeft,\r\n        &.heroImageRight {\r\n            .heroImageWrapper {\r\n                grid-area: 1 / 1 / 2 / 2;\r\n            }\r\n\r\n            .sectionHeader {\r\n                grid-area: 2 / 1 / 3 / 2;\r\n            }\r\n\r\n            .contentWrapper {\r\n                grid-area: 3 / 1 / 4 / 2;\r\n            }\r\n        }\r\n\r\n        .heroContainer {\r\n            grid-template-columns: 1fr;\r\n            grid-template-rows: repeat(3, auto-fit);\r\n        }\r\n\r\n        ul.listGrid {\r\n            grid-template-columns: 1fr;\r\n\r\n            li {\r\n                border-bottom: none;\r\n                border-left: 2px solid $color_grey;\r\n            }\r\n        }\r\n    }\r\n}\r\n","$color_foreground: #191919;\r\n$color_background: #fafafa;\r\n\r\n$color_white: #fafafa;\r\n$color_black: #191919;\r\n$color_grey: #dadada;\r\n$color_grey_dark: rgb(116, 117, 136);\r\n$color_ycblue: #21447c;\r\n$color_purple: #736eab;\r\n$color_teal: #27c9a2;\r\n\r\n$color_green: #56d763;\r\n$color_lilac: #a952d1;\r\n$color_orange: #ec712c;\r\n$color_blue: #5f6deb;\r\n$color_brown: #be4e1e;\r\n\r\n$transition_time_link: 0.14s;\r\n$transition_time_movement: 0.19s;\r\n\r\n$fonts_heading: \"Fugaz One\", \"Roboto\", \"Open Sans\", sans-serif;\r\n$fonts_body: \"Nunito\", \"Roboto\", \"Open Sans\", sans-serif;\r\n\r\n$box_shadow_light: 0 4px 8px rgba(0, 0, 0, 0.2);\r\n\r\n$media_screen_max_width: 640px;\r\n"]}]);
// Exports
exports.locals = {
	"IMGbg1": "index_IMGbg1__2cFeu",
	"IMGbg2": "index_IMGbg2__1BM9I",
	"IMGbg3": "index_IMGbg3__27Iiw",
	"bgOverlayBlack": "index_bgOverlayBlack__3urbV",
	"bgOverlayBlue": "index_bgOverlayBlue__2uBOg",
	"sectionHeader": "index_sectionHeader__3XZxS",
	"scrollIndicator": "index_scrollIndicator__WCQZL",
	"scrollIndicatorAnim": "index_scrollIndicatorAnim__1jvhM",
	"hidden": "index_hidden__1gJJX",
	"contentWrapper": "index_contentWrapper__1a-is",
	"noTopMargin": "index_noTopMargin__QLNdo",
	"imageContainer": "index_imageContainer__3CFkO",
	"buttonContainer": "index_buttonContainer__3mKfc",
	"linkButton": "index_linkButton__yEmdO",
	"landingWrapper": "index_landingWrapper__3LQDQ",
	"landingContent": "index_landingContent__3bI_0",
	"heroWrapper": "index_heroWrapper__1tlrg",
	"heroContainer": "index_heroContainer__38A0D",
	"noBottomPadding": "index_noBottomPadding__1KJ6n",
	"heroImageLeft": "index_heroImageLeft__2Xzva",
	"heroImageWrapper": "index_heroImageWrapper__12ILz",
	"heroImageRight": "index_heroImageRight__fP7Ok",
	"heroNoImage": "index_heroNoImage__1skMr",
	"heroDark": "index_heroDark__1IdfV",
	"sectionWrapper": "index_sectionWrapper__2MDpR",
	"sectionContainer": "index_sectionContainer__3Jgai",
	"listGrid": "index_listGrid__c23yB",
	"flexRelevantUnits": "index_flexRelevantUnits__1xHYo",
	"subjectTile": "index_subjectTile__aonpK",
	"fruGreen": "index_fruGreen__1Dimd",
	"fruLilac": "index_fruLilac__3t6nT",
	"fruOrange": "index_fruOrange__3ZwwY",
	"fruBlue": "index_fruBlue__sjFrw",
	"fruBrown": "index_fruBrown__1tHoA",
	"fruContainer": "index_fruContainer__2x8VK",
	"fruInterest": "index_fruInterest__1TxfE",
	"fruUnits": "index_fruUnits__17_bS",
	"imageCarousel": "index_imageCarousel__3aNtQ"
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/lodash.throttle/index.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash.throttle/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = throttle;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/object-assign.js":
/*!***********************************************************************************************************************!*\
  !*** delegated ./node_modules/next/dist/build/polyfills/object-assign.js from dll-reference dll_ef0ff7c60362f24a921f ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_ef0ff7c60362f24a921f */ "dll-reference dll_ef0ff7c60362f24a921f"))("./node_modules/next/dist/build/polyfills/object-assign.js");

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5CUsers%5Coffic%5CDocuments%5CDev%5C_Web%5C15_2-yc-esports%5Csrc%5Cpages%5Cindex.js!./":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5CUsers%5Coffic%5CDocuments%5CDev%5C_Web%5C15_2-yc-esports%5Csrc%5Cpages%5Cindex.js ***!
  \*****************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/", function() {
      var mod = __webpack_require__(/*! ./src/pages/index.js */ "./src/pages/index.js")
      if(true) {
        module.hot.accept(/*! ./src/pages/index.js */ "./src/pages/index.js", function() {
          if(!next.router.components["/"]) return
          var updatedPage = __webpack_require__(/*! ./src/pages/index.js */ "./src/pages/index.js")
          next.router.update("/", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!*********************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/checkPropTypes.js from dll-reference dll_ef0ff7c60362f24a921f ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_ef0ff7c60362f24a921f */ "dll-reference dll_ef0ff7c60362f24a921f"))("./node_modules/prop-types/checkPropTypes.js");

/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*******************************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/lib/ReactPropTypesSecret.js from dll-reference dll_ef0ff7c60362f24a921f ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_ef0ff7c60362f24a921f */ "dll-reference dll_ef0ff7c60362f24a921f"))("./node_modules/prop-types/lib/ReactPropTypesSecret.js");

/***/ }),

/***/ "./node_modules/react-dom/index.js":
/*!***********************************************************************************************!*\
  !*** delegated ./node_modules/react-dom/index.js from dll-reference dll_ef0ff7c60362f24a921f ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_ef0ff7c60362f24a921f */ "dll-reference dll_ef0ff7c60362f24a921f"))("./node_modules/react-dom/index.js");

/***/ }),

/***/ "./node_modules/react-easy-swipe/lib/index.js":
/*!****************************************************!*\
  !*** ./node_modules/react-easy-swipe/lib/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./react-swipe */ "./node_modules/react-easy-swipe/lib/react-swipe.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (exports, _reactSwipe) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _reactSwipe2 = _interopRequireDefault(_reactSwipe);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.default = _reactSwipe2.default;
});

/***/ }),

/***/ "./node_modules/react-easy-swipe/lib/react-swipe.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-easy-swipe/lib/react-swipe.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! react */ "./node_modules/react/index.js"), __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (exports, _react, _propTypes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.setHasSupportToCaptureOption = setHasSupportToCaptureOption;

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var supportsCaptureOption = false;
  function setHasSupportToCaptureOption(hasSupport) {
    supportsCaptureOption = hasSupport;
  }

  try {
    addEventListener("test", null, Object.defineProperty({}, 'capture', { get: function get() {
        setHasSupportToCaptureOption(true);
      } }));
  } catch (e) {}

  function getSafeEventHandlerOpts() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { capture: true };

    return supportsCaptureOption ? options : options.capture;
  }

  /**
   * [getPosition returns a position element that works for mouse or touch events]
   * @param  {[Event]} event [the received event]
   * @return {[Object]}      [x and y coords]
   */
  function getPosition(event) {
    if ('touches' in event) {
      var _event$touches$ = event.touches[0],
          pageX = _event$touches$.pageX,
          pageY = _event$touches$.pageY;

      return { x: pageX, y: pageY };
    }

    var screenX = event.screenX,
        screenY = event.screenY;

    return { x: screenX, y: screenY };
  }

  var ReactSwipe = function (_Component) {
    _inherits(ReactSwipe, _Component);

    function ReactSwipe() {
      var _ref;

      _classCallCheck(this, ReactSwipe);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var _this = _possibleConstructorReturn(this, (_ref = ReactSwipe.__proto__ || Object.getPrototypeOf(ReactSwipe)).call.apply(_ref, [this].concat(args)));

      _this._handleSwipeStart = _this._handleSwipeStart.bind(_this);
      _this._handleSwipeMove = _this._handleSwipeMove.bind(_this);
      _this._handleSwipeEnd = _this._handleSwipeEnd.bind(_this);

      _this._onMouseDown = _this._onMouseDown.bind(_this);
      _this._onMouseMove = _this._onMouseMove.bind(_this);
      _this._onMouseUp = _this._onMouseUp.bind(_this);
      return _this;
    }

    _createClass(ReactSwipe, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        if (this.swiper) {
          this.swiper.addEventListener('touchmove', this._handleSwipeMove, getSafeEventHandlerOpts({
            capture: true,
            passive: false
          }));
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        if (this.swiper) {
          this.swiper.removeEventListener('touchmove', this._handleSwipeMove, getSafeEventHandlerOpts({
            capture: true,
            passive: false
          }));
        }
      }
    }, {
      key: '_onMouseDown',
      value: function _onMouseDown(event) {
        if (!this.props.allowMouseEvents) {
          return;
        }

        this.mouseDown = true;

        document.addEventListener('mouseup', this._onMouseUp);
        document.addEventListener('mousemove', this._onMouseMove);

        this._handleSwipeStart(event);
      }
    }, {
      key: '_onMouseMove',
      value: function _onMouseMove(event) {
        if (!this.mouseDown) {
          return;
        }

        this._handleSwipeMove(event);
      }
    }, {
      key: '_onMouseUp',
      value: function _onMouseUp(event) {
        this.mouseDown = false;

        document.removeEventListener('mouseup', this._onMouseUp);
        document.removeEventListener('mousemove', this._onMouseMove);

        this._handleSwipeEnd(event);
      }
    }, {
      key: '_handleSwipeStart',
      value: function _handleSwipeStart(event) {
        var _getPosition = getPosition(event),
            x = _getPosition.x,
            y = _getPosition.y;

        this.moveStart = { x: x, y: y };
        this.props.onSwipeStart(event);
      }
    }, {
      key: '_handleSwipeMove',
      value: function _handleSwipeMove(event) {
        if (!this.moveStart) {
          return;
        }

        var _getPosition2 = getPosition(event),
            x = _getPosition2.x,
            y = _getPosition2.y;

        var deltaX = x - this.moveStart.x;
        var deltaY = y - this.moveStart.y;
        this.moving = true;

        // handling the responsability of cancelling the scroll to
        // the component handling the event
        var shouldPreventDefault = this.props.onSwipeMove({
          x: deltaX,
          y: deltaY
        }, event);

        if (shouldPreventDefault) {
          event.preventDefault();
        }

        this.movePosition = { deltaX: deltaX, deltaY: deltaY };
      }
    }, {
      key: '_handleSwipeEnd',
      value: function _handleSwipeEnd(event) {
        this.props.onSwipeEnd(event);

        var tolerance = this.props.tolerance;


        if (this.moving && this.movePosition) {
          if (this.movePosition.deltaX < -tolerance) {
            this.props.onSwipeLeft(1, event);
          } else if (this.movePosition.deltaX > tolerance) {
            this.props.onSwipeRight(1, event);
          }
          if (this.movePosition.deltaY < -tolerance) {
            this.props.onSwipeUp(1, event);
          } else if (this.movePosition.deltaY > tolerance) {
            this.props.onSwipeDown(1, event);
          }
        }

        this.moveStart = null;
        this.moving = false;
        this.movePosition = null;
      }
    }, {
      key: 'render',
      value: function render() {
        var _this2 = this;

        return _react2.default.createElement(
          this.props.tagName,
          {
            ref: function ref(node) {
              return _this2.swiper = node;
            },
            onMouseDown: this._onMouseDown,
            onTouchStart: this._handleSwipeStart,
            onTouchEnd: this._handleSwipeEnd,
            className: this.props.className,
            style: this.props.style
          },
          this.props.children
        );
      }
    }]);

    return ReactSwipe;
  }(_react.Component);

  ReactSwipe.displayName = 'ReactSwipe';
  ReactSwipe.propTypes = {
    tagName: _propTypes2.default.string,
    className: _propTypes2.default.string,
    style: _propTypes2.default.object,
    children: _propTypes2.default.node,
    allowMouseEvents: _propTypes2.default.bool,
    onSwipeUp: _propTypes2.default.func,
    onSwipeDown: _propTypes2.default.func,
    onSwipeLeft: _propTypes2.default.func,
    onSwipeRight: _propTypes2.default.func,
    onSwipeStart: _propTypes2.default.func,
    onSwipeMove: _propTypes2.default.func,
    onSwipeEnd: _propTypes2.default.func,
    tolerance: _propTypes2.default.number.isRequired
  };
  ReactSwipe.defaultProps = {
    tagName: 'div',
    allowMouseEvents: false,
    onSwipeUp: function onSwipeUp() {},
    onSwipeDown: function onSwipeDown() {},
    onSwipeLeft: function onSwipeLeft() {},
    onSwipeRight: function onSwipeRight() {},
    onSwipeStart: function onSwipeStart() {},
    onSwipeMove: function onSwipeMove() {},
    onSwipeEnd: function onSwipeEnd() {},

    tolerance: 0
  };
  exports.default = ReactSwipe;
});

/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.12.0
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */
var lowPriorityWarningWithoutStack = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });

    if (typeof console !== 'undefined') {
      console.warn(message);
    }

    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarningWithoutStack = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarningWithoutStack(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(void 0, [format].concat(args));
    }
  };
}

var lowPriorityWarningWithoutStack$1 = lowPriorityWarningWithoutStack;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarningWithoutStack$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-responsive-carousel/lib/CSSTranslate.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-responsive-carousel/lib/CSSTranslate.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (position, axis) {
    var positionCss = axis === 'horizontal' ? [position, 0, 0] : [0, position, 0];
    var transitionProp = 'translate3d';

    var translatedPosition = '(' + positionCss.join(',') + ')';

    return transitionProp + translatedPosition;
};

/***/ }),

/***/ "./node_modules/react-responsive-carousel/lib/components/Carousel.js":
/*!***************************************************************************!*\
  !*** ./node_modules/react-responsive-carousel/lib/components/Carousel.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _cssClasses = __webpack_require__(/*! ../cssClasses */ "./node_modules/react-responsive-carousel/lib/cssClasses.js");

var _cssClasses2 = _interopRequireDefault(_cssClasses);

var _CSSTranslate = __webpack_require__(/*! ../CSSTranslate */ "./node_modules/react-responsive-carousel/lib/CSSTranslate.js");

var _CSSTranslate2 = _interopRequireDefault(_CSSTranslate);

var _reactEasySwipe = __webpack_require__(/*! react-easy-swipe */ "./node_modules/react-easy-swipe/lib/index.js");

var _reactEasySwipe2 = _interopRequireDefault(_reactEasySwipe);

var _Thumbs = __webpack_require__(/*! ./Thumbs */ "./node_modules/react-responsive-carousel/lib/components/Thumbs.js");

var _Thumbs2 = _interopRequireDefault(_Thumbs);

var _customPropTypes = __webpack_require__(/*! ../customPropTypes */ "./node_modules/react-responsive-carousel/lib/customPropTypes.js");

var customPropTypes = _interopRequireWildcard(_customPropTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var noop = function noop() {};

var defaultStatusFormatter = function defaultStatusFormatter(current, total) {
    return current + ' of ' + total;
};

var Carousel = function (_Component) {
    _inherits(Carousel, _Component);

    function Carousel(props) {
        _classCallCheck(this, Carousel);

        var _this = _possibleConstructorReturn(this, (Carousel.__proto__ || Object.getPrototypeOf(Carousel)).call(this, props));

        _this.setThumbsRef = function (node) {
            _this.thumbsRef = node;
        };

        _this.setCarouselWrapperRef = function (node) {
            _this.carouselWrapperRef = node;
        };

        _this.setListRef = function (node) {
            _this.listRef = node;
        };

        _this.setItemsWrapperRef = function (node) {
            _this.itemsWrapperRef = node;
        };

        _this.setItemsRef = function (node, index) {
            if (!_this.itemsRef) {
                _this.itemsRef = [];
            }
            _this.itemsRef[index] = node;
        };

        _this.autoPlay = function () {
            if (!_this.state.autoPlay || _react.Children.count(_this.props.children) <= 1) {
                return;
            }

            clearTimeout(_this.timer);
            _this.timer = setTimeout(function () {
                _this.increment();
            }, _this.props.interval);
        };

        _this.clearAutoPlay = function () {
            if (!_this.state.autoPlay) {
                return;
            }

            clearTimeout(_this.timer);
        };

        _this.resetAutoPlay = function () {
            _this.clearAutoPlay();
            _this.autoPlay();
        };

        _this.stopOnHover = function () {
            _this.setState({ isMouseEntered: true });
            _this.clearAutoPlay();
        };

        _this.startOnLeave = function () {
            _this.setState({ isMouseEntered: false });
            _this.autoPlay();
        };

        _this.navigateWithKeyboard = function (e) {
            var axis = _this.props.axis;

            var isHorizontal = axis === 'horizontal';
            var keyNames = {
                ArrowUp: 38,
                ArrowRight: 39,
                ArrowDown: 40,
                ArrowLeft: 37
            };

            var nextKey = isHorizontal ? keyNames.ArrowRight : keyNames.ArrowDown;
            var prevKey = isHorizontal ? keyNames.ArrowLeft : keyNames.ArrowUp;

            if (nextKey === e.keyCode) {
                _this.increment();
            } else if (prevKey === e.keyCode) {
                _this.decrement();
            }
        };

        _this.updateSizes = function () {
            if (!_this.state.initialized) {
                return;
            }

            var isHorizontal = _this.props.axis === 'horizontal';
            var firstItem = _this.itemsRef[0];
            var itemSize = isHorizontal ? firstItem.clientWidth : firstItem.clientHeight;

            _this.setState(function (_state, props) {
                return {
                    itemSize: itemSize
                };
            });

            if (_this.thumbsRef) {
                _this.thumbsRef.updateSizes();
            }
        };

        _this.setMountState = function () {
            _this.setState({ hasMount: true });
            _this.updateSizes();
        };

        _this.handleClickItem = function (index, item) {
            if (_react.Children.count(_this.props.children) === 0) {
                return;
            }

            if (_this.state.cancelClick) {
                _this.setState({
                    cancelClick: false
                });

                return;
            }

            _this.props.onClickItem(index, item);

            if (index !== _this.state.selectedItem) {
                _this.setState({
                    selectedItem: index
                });
            }
        };

        _this.handleOnChange = function (index, item) {
            if (_react.Children.count(_this.props.children) <= 1) {
                return;
            }

            _this.props.onChange(index, item);
        };

        _this.handleClickThumb = function (index, item) {
            _this.props.onClickThumb(index, item);

            _this.selectItem({
                selectedItem: index
            });
        };

        _this.onSwipeStart = function (event) {
            _this.setState({
                swiping: true
            });
            _this.props.onSwipeStart(event);
            _this.clearAutoPlay();
        };

        _this.onSwipeEnd = function (event) {
            _this.setState({
                swiping: false,
                cancelClick: false
            });
            _this.props.onSwipeEnd(event);
            _this.autoPlay();
        };

        _this.onSwipeMove = function (delta, event) {
            _this.props.onSwipeMove(event);
            var isHorizontal = _this.props.axis === 'horizontal';
            var childrenLength = _react.Children.count(_this.props.children);

            var initialBoundry = 0;

            var currentPosition = _this.getPosition(_this.state.selectedItem);
            var finalBoundry = _this.props.infiniteLoop ? _this.getPosition(childrenLength - 1) - 100 : _this.getPosition(childrenLength - 1);

            var axisDelta = isHorizontal ? delta.x : delta.y;
            var handledDelta = axisDelta;

            // prevent user from swiping left out of boundaries
            if (currentPosition === initialBoundry && axisDelta > 0) {
                handledDelta = 0;
            }

            // prevent user from swiping right out of boundaries
            if (currentPosition === finalBoundry && axisDelta < 0) {
                handledDelta = 0;
            }

            var position = currentPosition + 100 / (_this.state.itemSize / handledDelta);
            if (_this.props.infiniteLoop) {
                // When allowing infinite loop, if we slide left from position 0 we reveal the cloned last slide that appears before it
                // if we slide even further we need to jump to other side so it can continue - and vice versa for the last slide
                if (_this.state.selectedItem === 0 && position > -100) {
                    position -= childrenLength * 100;
                } else if (_this.state.selectedItem === childrenLength - 1 && position < -childrenLength * 100) {
                    position += childrenLength * 100;
                }
            }
            position += '%';
            _this.setPosition(position);

            // allows scroll if the swipe was within the tolerance
            var hasMoved = Math.abs(axisDelta) > _this.props.swipeScrollTolerance;

            if (hasMoved && !_this.state.cancelClick) {
                _this.setState({
                    cancelClick: true
                });
            }

            return hasMoved;
        };

        _this.setPosition = function (position, forceReflow) {
            var list = _reactDom2.default.findDOMNode(_this.listRef);
            ['WebkitTransform', 'MozTransform', 'MsTransform', 'OTransform', 'transform', 'msTransform'].forEach(function (prop) {
                list.style[prop] = (0, _CSSTranslate2.default)(position, _this.props.axis);
            });
            if (forceReflow) {
                list.offsetLeft;
            }
        };

        _this.resetPosition = function () {
            var currentPosition = _this.getPosition(_this.state.selectedItem) + '%';
            _this.setPosition(currentPosition);
        };

        _this.decrement = function () {
            var positions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
            var fromSwipe = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            _this.moveTo(_this.state.selectedItem - (typeof positions === 'number' ? positions : 1), fromSwipe);
        };

        _this.increment = function () {
            var positions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
            var fromSwipe = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            _this.moveTo(_this.state.selectedItem + (typeof positions === 'number' ? positions : 1), fromSwipe);
        };

        _this.moveTo = function (position, fromSwipe) {
            var lastPosition = _react.Children.count(_this.props.children) - 1;
            var needClonedSlide = _this.props.infiniteLoop && !fromSwipe && (position < 0 || position > lastPosition);
            var oldPosition = position;

            if (position < 0) {
                position = _this.props.infiniteLoop ? lastPosition : 0;
            }

            if (position > lastPosition) {
                position = _this.props.infiniteLoop ? 0 : lastPosition;
            }

            if (needClonedSlide) {
                // set swiping true would disable transition time, then we set slider to cloned position and force a reflow
                // this is only needed for non-swiping situation
                _this.setState({
                    swiping: true
                }, function () {
                    if (oldPosition < 0) {
                        if (_this.props.centerMode && _this.props.axis === 'horizontal') {
                            _this.setPosition('-' + ((lastPosition + 2) * _this.props.centerSlidePercentage - (100 - _this.props.centerSlidePercentage) / 2) + '%', true);
                        } else {
                            _this.setPosition('-' + (lastPosition + 2) * 100 + '%', true);
                        }
                    } else if (oldPosition > lastPosition) {
                        _this.setPosition(0, true);
                    }

                    _this.selectItem({
                        selectedItem: position,
                        swiping: false
                    });
                });
            } else {
                _this.selectItem({
                    // if it's not a slider, we don't need to set position here
                    selectedItem: position
                });
            }

            // don't reset auto play when stop on hover is enabled, doing so will trigger a call to auto play more than once
            // and will result in the interval function not being cleared correctly.
            if (_this.state.autoPlay && _this.state.isMouseEntered === false) {
                _this.resetAutoPlay();
            }
        };

        _this.onClickNext = function () {
            _this.increment(1, false);
        };

        _this.onClickPrev = function () {
            _this.decrement(1, false);
        };

        _this.onSwipeForward = function () {
            _this.increment(1, true);
        };

        _this.onSwipeBackwards = function () {
            _this.decrement(1, true);
        };

        _this.changeItem = function (e) {
            if (!e.key || e.key === 'Enter') {
                var newIndex = e.target.value;

                _this.selectItem({
                    selectedItem: newIndex
                });
            }
        };

        _this.selectItem = function (state, cb) {
            _this.setState(state, cb);
            _this.handleOnChange(state.selectedItem, _react.Children.toArray(_this.props.children)[state.selectedItem]);
        };

        _this.getInitialImage = function () {
            var selectedItem = _this.props.selectedItem;
            var item = _this.itemsRef && _this.itemsRef[selectedItem];
            var images = item && item.getElementsByTagName('img');
            return images && images[selectedItem];
        };

        _this.getVariableImageHeight = function (position) {
            var item = _this.itemsRef && _this.itemsRef[position];
            var images = item && item.getElementsByTagName('img');
            if (_this.state.hasMount && images.length > 0) {
                var image = images[0];

                if (!image.complete) {
                    // if the image is still loading, the size won't be available so we trigger a new render after it's done
                    var onImageLoad = function onImageLoad() {
                        _this.forceUpdate();
                        image.removeEventListener('load', onImageLoad);
                    };

                    image.addEventListener('load', onImageLoad);
                }

                var height = image.clientHeight;
                return height > 0 ? height : null;
            }

            return null;
        };

        _this.state = {
            initialized: false,
            selectedItem: props.selectedItem,
            hasMount: false,
            isMouseEntered: false,
            autoPlay: props.autoPlay
        };
        return _this;
    }

    _createClass(Carousel, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (!this.props.children) {
                return;
            }

            this.setupCarousel();
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var _this2 = this;

            if (nextProps.selectedItem !== this.state.selectedItem) {
                this.updateSizes();
                this.moveTo(nextProps.selectedItem);
            }

            if (nextProps.autoPlay !== this.state.autoPlay) {
                this.setState({
                    autoPlay: nextProps.autoPlay
                }, function () {
                    if (_this2.state.autoPlay) {
                        _this2.setupAutoPlay();
                    } else {
                        _this2.destroyAutoPlay();
                    }
                });
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            if (!prevProps.children && this.props.children && !this.state.initialized) {
                this.setupCarousel();
            }
            if (prevState.swiping && !this.state.swiping) {
                // We stopped swiping, ensure we are heading to the new/current slide and not stuck
                this.resetPosition();
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.destroyCarousel();
        }
    }, {
        key: 'setupCarousel',
        value: function setupCarousel() {
            this.bindEvents();

            if (this.state.autoPlay && _react.Children.count(this.props.children) > 1) {
                this.setupAutoPlay();
            }

            this.setState({
                initialized: true
            });

            var initialImage = this.getInitialImage();
            if (initialImage) {
                // if it's a carousel of images, we set the mount state after the first image is loaded
                initialImage.addEventListener('load', this.setMountState);
            } else {
                this.setMountState();
            }
        }
    }, {
        key: 'destroyCarousel',
        value: function destroyCarousel() {
            if (this.state.initialized) {
                this.unbindEvents();
                this.destroyAutoPlay();
            }
        }
    }, {
        key: 'setupAutoPlay',
        value: function setupAutoPlay() {
            this.autoPlay();
            var carouselWrapper = this.carouselWrapperRef;

            if (this.props.stopOnHover && carouselWrapper) {
                carouselWrapper.addEventListener('mouseenter', this.stopOnHover);
                carouselWrapper.addEventListener('mouseleave', this.startOnLeave);
            }
        }
    }, {
        key: 'destroyAutoPlay',
        value: function destroyAutoPlay() {
            this.clearAutoPlay();
            var carouselWrapper = this.carouselWrapperRef;

            if (this.props.stopOnHover && carouselWrapper) {
                carouselWrapper.removeEventListener('mouseenter', this.stopOnHover);
                carouselWrapper.removeEventListener('mouseleave', this.startOnLeave);
            }
        }
    }, {
        key: 'bindEvents',
        value: function bindEvents() {
            // as the widths are calculated, we need to resize
            // the carousel when the window is resized
            window.addEventListener("resize", this.updateSizes);
            // issue #2 - image loading smaller
            window.addEventListener("DOMContentLoaded", this.updateSizes);

            if (this.props.useKeyboardArrows) {
                document.addEventListener("keydown", this.navigateWithKeyboard);
            }
        }
    }, {
        key: 'unbindEvents',
        value: function unbindEvents() {
            // removing listeners
            window.removeEventListener("resize", this.updateSizes);
            window.removeEventListener("DOMContentLoaded", this.updateSizes);

            var initialImage = this.getInitialImage();
            if (initialImage) {
                initialImage.removeEventListener("load", this.setMountState);
            }

            if (this.props.useKeyboardArrows) {
                document.removeEventListener("keydown", this.navigateWithKeyboard);
            }
        }
    }, {
        key: 'getPosition',
        value: function getPosition(index) {
            if (this.props.infiniteLoop) {
                // index has to be added by 1 because of the first cloned slide
                ++index;
            }
            var childrenLength = _react.Children.count(this.props.children);
            if (this.props.centerMode && this.props.axis === 'horizontal') {
                var currentPosition = -index * this.props.centerSlidePercentage;
                var lastPosition = childrenLength - 1;

                if (index && (index !== lastPosition || this.props.infiniteLoop)) {
                    currentPosition += (100 - this.props.centerSlidePercentage) / 2;
                } else if (index === lastPosition) {
                    currentPosition += 100 - this.props.centerSlidePercentage;
                }

                return currentPosition;
            }

            return -index * 100;
        }
    }, {
        key: 'renderItems',
        value: function renderItems(isClone) {
            var _this3 = this;

            return _react.Children.map(this.props.children, function (item, index) {
                var slideProps = {
                    ref: function ref(e) {
                        return _this3.setItemsRef(e, index);
                    },
                    key: 'itemKey' + index + (isClone ? 'clone' : ''),
                    className: _cssClasses2.default.ITEM(true, index === _this3.state.selectedItem),
                    onClick: _this3.handleClickItem.bind(_this3, index, item)
                };

                if (_this3.props.centerMode && _this3.props.axis === 'horizontal') {
                    slideProps.style = {
                        minWidth: _this3.props.centerSlidePercentage + '%'
                    };
                }

                return _react2.default.createElement(
                    'li',
                    slideProps,
                    item
                );
            });
        }
    }, {
        key: 'renderControls',
        value: function renderControls() {
            var _this4 = this;

            if (!this.props.showIndicators) {
                return null;
            }

            return _react2.default.createElement(
                'ul',
                { className: 'control-dots' },
                _react.Children.map(this.props.children, function (item, index) {
                    return _react2.default.createElement('li', { className: _cssClasses2.default.DOT(index === _this4.state.selectedItem), onClick: _this4.changeItem, onKeyDown: _this4.changeItem, value: index, key: index, role: 'button', tabIndex: 0, 'aria-label': _this4.props.labels.item + ' ' + (index + 1) });
                })
            );
        }
    }, {
        key: 'renderStatus',
        value: function renderStatus() {
            if (!this.props.showStatus) {
                return null;
            }

            return _react2.default.createElement(
                'p',
                { className: 'carousel-status' },
                this.props.statusFormatter(this.state.selectedItem + 1, _react.Children.count(this.props.children))
            );
        }
    }, {
        key: 'renderThumbs',
        value: function renderThumbs() {
            if (!this.props.showThumbs || _react.Children.count(this.props.children) === 0) {
                return null;
            }

            return _react2.default.createElement(
                _Thumbs2.default,
                { ref: this.setThumbsRef, onSelectItem: this.handleClickThumb, selectedItem: this.state.selectedItem, transitionTime: this.props.transitionTime, thumbWidth: this.props.thumbWidth, labels: this.props.labels },
                this.props.children
            );
        }
    }, {
        key: 'render',
        value: function render() {
            if (!this.props.children || _react.Children.count(this.props.children) === 0) {
                return null;
            }

            var isHorizontal = this.props.axis === 'horizontal';

            var canShowArrows = this.props.showArrows && _react.Children.count(this.props.children) > 1;

            // show left arrow?
            var hasPrev = canShowArrows && (this.state.selectedItem > 0 || this.props.infiniteLoop);
            // show right arrow
            var hasNext = canShowArrows && (this.state.selectedItem < _react.Children.count(this.props.children) - 1 || this.props.infiniteLoop);
            // obj to hold the transformations and styles
            var itemListStyles = {};

            var currentPosition = this.getPosition(this.state.selectedItem);

            // if 3d is available, let's take advantage of the performance of transform
            var transformProp = (0, _CSSTranslate2.default)(currentPosition + '%', this.props.axis);

            var transitionTime = this.props.transitionTime + 'ms';

            itemListStyles = {
                'WebkitTransform': transformProp,
                'MozTransform': transformProp,
                'MsTransform': transformProp,
                'OTransform': transformProp,
                'transform': transformProp,
                'msTransform': transformProp
            };

            if (!this.state.swiping) {
                itemListStyles = _extends({}, itemListStyles, {
                    'WebkitTransitionDuration': transitionTime,
                    'MozTransitionDuration': transitionTime,
                    'MsTransitionDuration': transitionTime,
                    'OTransitionDuration': transitionTime,
                    'transitionDuration': transitionTime,
                    'msTransitionDuration': transitionTime
                });
            }

            var itemsClone = this.renderItems(true);
            var firstClone = itemsClone.shift();
            var lastClone = itemsClone.pop();

            var swiperProps = {
                selectedItem: this.state.selectedItem,
                className: _cssClasses2.default.SLIDER(true, this.state.swiping),
                onSwipeMove: this.onSwipeMove,
                onSwipeStart: this.onSwipeStart,
                onSwipeEnd: this.onSwipeEnd,
                style: itemListStyles,
                tolerance: this.props.swipeScrollTolerance
            };

            var containerStyles = {};

            if (isHorizontal) {
                swiperProps.onSwipeLeft = this.onSwipeForward;
                swiperProps.onSwipeRight = this.onSwipeBackwards;

                if (this.props.dynamicHeight) {
                    var itemHeight = this.getVariableImageHeight(this.state.selectedItem);
                    swiperProps.style.height = itemHeight || 'auto';
                    containerStyles.height = itemHeight || 'auto';
                }
            } else {
                swiperProps.onSwipeUp = this.props.verticalSwipe === 'natural' ? this.onSwipeBackwards : this.onSwipeForward;
                swiperProps.onSwipeDown = this.props.verticalSwipe === 'natural' ? this.onSwipeForward : this.onSwipeBackwards;
                swiperProps.style.height = this.state.itemSize;
                containerStyles.height = this.state.itemSize;
            }
            return _react2.default.createElement(
                'div',
                { className: this.props.className, ref: this.setCarouselWrapperRef },
                _react2.default.createElement(
                    'div',
                    { className: _cssClasses2.default.CAROUSEL(true), style: { width: this.props.width } },
                    _react2.default.createElement('button', { type: 'button', 'aria-label': this.props.labels.leftArrow, className: _cssClasses2.default.ARROW_PREV(!hasPrev), onClick: this.onClickPrev }),
                    _react2.default.createElement(
                        'div',
                        { className: _cssClasses2.default.WRAPPER(true, this.props.axis), style: containerStyles, ref: this.setItemsWrapperRef },
                        this.props.swipeable ? _react2.default.createElement(
                            _reactEasySwipe2.default,
                            _extends({
                                tagName: 'ul',
                                ref: this.setListRef
                            }, swiperProps, {
                                allowMouseEvents: this.props.emulateTouch }),
                            this.props.infiniteLoop && lastClone,
                            this.renderItems(),
                            this.props.infiniteLoop && firstClone
                        ) : _react2.default.createElement(
                            'ul',
                            {
                                className: _cssClasses2.default.SLIDER(true, this.state.swiping),
                                ref: this.setListRef,
                                style: itemListStyles },
                            this.props.infiniteLoop && lastClone,
                            this.renderItems(),
                            this.props.infiniteLoop && firstClone
                        )
                    ),
                    _react2.default.createElement('button', { type: 'button', 'aria-label': this.props.labels.rightArrow, className: _cssClasses2.default.ARROW_NEXT(!hasNext), onClick: this.onClickNext }),
                    this.renderControls(),
                    this.renderStatus()
                ),
                this.renderThumbs()
            );
        }
    }]);

    return Carousel;
}(_react.Component);

Carousel.displayName = 'Carousel';
Carousel.propTypes = {
    className: _propTypes2.default.string,
    children: _propTypes2.default.node,
    showArrows: _propTypes2.default.bool,
    showStatus: _propTypes2.default.bool,
    showIndicators: _propTypes2.default.bool,
    infiniteLoop: _propTypes2.default.bool,
    showThumbs: _propTypes2.default.bool,
    thumbWidth: _propTypes2.default.number,
    selectedItem: _propTypes2.default.number,
    onClickItem: _propTypes2.default.func.isRequired,
    onClickThumb: _propTypes2.default.func.isRequired,
    onChange: _propTypes2.default.func.isRequired,
    axis: _propTypes2.default.oneOf(['horizontal', 'vertical']),
    verticalSwipe: _propTypes2.default.oneOf(['natural', 'standard']),
    width: customPropTypes.unit,
    useKeyboardArrows: _propTypes2.default.bool,
    autoPlay: _propTypes2.default.bool,
    stopOnHover: _propTypes2.default.bool,
    interval: _propTypes2.default.number,
    transitionTime: _propTypes2.default.number,
    swipeScrollTolerance: _propTypes2.default.number,
    swipeable: _propTypes2.default.bool,
    dynamicHeight: _propTypes2.default.bool,
    emulateTouch: _propTypes2.default.bool,
    statusFormatter: _propTypes2.default.func.isRequired,
    centerMode: _propTypes2.default.bool,
    centerSlidePercentage: _propTypes2.default.number,
    labels: _propTypes2.default.shape({
        leftArrow: _propTypes2.default.string,
        rightArrow: _propTypes2.default.string,
        item: _propTypes2.default.string
    }),
    onSwipeStart: _propTypes2.default.func,
    onSwipeEnd: _propTypes2.default.func,
    onSwipeMove: _propTypes2.default.func
};
Carousel.defaultProps = {
    showIndicators: true,
    showArrows: true,
    showStatus: true,
    showThumbs: true,
    infiniteLoop: false,
    selectedItem: 0,
    axis: 'horizontal',
    verticalSwipe: 'standard',
    width: '100%',
    useKeyboardArrows: false,
    autoPlay: false,
    stopOnHover: true,
    interval: 3000,
    transitionTime: 350,
    swipeScrollTolerance: 5,
    swipeable: true,
    dynamicHeight: false,
    emulateTouch: false,
    onClickItem: noop,
    onClickThumb: noop,
    onChange: noop,
    statusFormatter: defaultStatusFormatter,
    centerMode: false,
    centerSlidePercentage: 80,
    labels: {
        leftArrow: 'previous slide / item',
        rightArrow: 'next slide / item',
        item: 'slide item'
    },
    onSwipeStart: function onSwipeStart() {},
    onSwipeEnd: function onSwipeEnd() {},
    onSwipeMove: function onSwipeMove() {}
};
exports.default = Carousel;

/***/ }),

/***/ "./node_modules/react-responsive-carousel/lib/components/Thumbs.js":
/*!*************************************************************************!*\
  !*** ./node_modules/react-responsive-carousel/lib/components/Thumbs.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _cssClasses = __webpack_require__(/*! ../cssClasses */ "./node_modules/react-responsive-carousel/lib/cssClasses.js");

var _cssClasses2 = _interopRequireDefault(_cssClasses);

var _dimensions = __webpack_require__(/*! ../dimensions */ "./node_modules/react-responsive-carousel/lib/dimensions.js");

var _CSSTranslate = __webpack_require__(/*! ../CSSTranslate */ "./node_modules/react-responsive-carousel/lib/CSSTranslate.js");

var _CSSTranslate2 = _interopRequireDefault(_CSSTranslate);

var _reactEasySwipe = __webpack_require__(/*! react-easy-swipe */ "./node_modules/react-easy-swipe/lib/index.js");

var _reactEasySwipe2 = _interopRequireDefault(_reactEasySwipe);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Thumbs = function (_Component) {
    _inherits(Thumbs, _Component);

    function Thumbs(props) {
        _classCallCheck(this, Thumbs);

        var _this = _possibleConstructorReturn(this, (Thumbs.__proto__ || Object.getPrototypeOf(Thumbs)).call(this, props));

        _initialiseProps.call(_this);

        _this.state = {
            selectedItem: props.selectedItem,
            hasMount: false,
            firstItem: 0,
            itemSize: null,
            visibleItems: 0,
            lastPosition: 0,
            showArrows: false,
            images: _this.getImages()
        };
        return _this;
    }

    _createClass(Thumbs, [{
        key: 'componentDidMount',
        value: function componentDidMount(nextProps) {
            this.setupThumbs();
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(props, state) {
            if (props.selectedItem !== this.state.selectedItem) {
                this.setState({
                    selectedItem: props.selectedItem,
                    firstItem: this.getFirstItem(props.selectedItem)
                });
            }
            if (props.children !== this.props.children) {
                this.setState({
                    images: this.getImages()
                });
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            if (this.props.children === prevProps.children) {
                return;
            }

            // This will capture any size changes for arrow adjustments etc.
            // usually in the same render cycle so we don't see any flickers
            this.updateSizes();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            this.destroyThumbs();
        }
    }, {
        key: 'setupThumbs',
        value: function setupThumbs() {
            // as the widths are calculated, we need to resize
            // the carousel when the window is resized
            window.addEventListener("resize", this.updateSizes);
            // issue #2 - image loading smaller
            window.addEventListener("DOMContentLoaded", this.updateSizes);

            // when the component is rendered we need to calculate
            // the container size to adjust the responsive behaviour
            this.updateSizes();
        }
    }, {
        key: 'destroyThumbs',
        value: function destroyThumbs() {
            // removing listeners
            window.removeEventListener("resize", this.updateSizes);
            window.removeEventListener("DOMContentLoaded", this.updateSizes);
        }
    }, {
        key: 'getImages',
        value: function getImages() {
            var images = _react.Children.map(this.props.children, function (item, index) {
                var img = item;

                // if the item is not an image, try to find the first image in the item's children.
                if (item.type !== "img") {
                    img = _react.Children.toArray(item.props.children).filter(function (children) {
                        return children.type === "img";
                    })[0];
                }

                if (!img || img.length === 0) {
                    return null;
                }

                return img;
            });

            if (images.filter(function (image) {
                return image !== null;
            }).length === 0) {
                console.warn('No images found! Can\'t build the thumb list without images. If you don\'t need thumbs, set showThumbs={false} in the Carousel. Note that it\'s not possible to get images rendered inside custom components. More info at https://github.com/leandrowd/react-responsive-carousel/blob/master/TROUBLESHOOTING.md');

                return null;
            }

            return images;
        }
    }, {
        key: 'getFirstItem',
        value: function getFirstItem(selectedItem) {
            var firstItem = selectedItem;

            if (selectedItem >= this.state.lastPosition) {
                firstItem = this.state.lastPosition;
            }

            if (selectedItem < this.state.firstItem + this.state.visibleItems) {
                firstItem = this.state.firstItem;
            }

            if (selectedItem < this.state.firstItem) {
                firstItem = selectedItem;
            }

            return firstItem;
        }
    }, {
        key: 'renderItems',
        value: function renderItems() {
            var _this2 = this;

            return this.state.images.map(function (img, index) {
                var itemClass = _cssClasses2.default.ITEM(false, index === _this2.state.selectedItem && _this2.state.hasMount);

                var thumbProps = {
                    key: index,
                    ref: function ref(e) {
                        return _this2.setThumbsRef(e, index);
                    },
                    className: itemClass,
                    onClick: _this2.handleClickItem.bind(_this2, index, _this2.props.children[index]),
                    onKeyDown: _this2.handleClickItem.bind(_this2, index, _this2.props.children[index]),
                    'aria-label': _this2.props.labels.item + ' ' + (index + 1)
                };

                if (index === 0) {
                    img = _react2.default.cloneElement(img, {
                        onLoad: _this2.setMountState
                    });
                }

                return _react2.default.createElement(
                    'li',
                    _extends({}, thumbProps, { role: 'button', tabIndex: 0 }),
                    img
                );
            });
        }
    }, {
        key: 'render',
        value: function render() {
            if (!this.props.children) {
                return null;
            }

            // show left arrow?
            var hasPrev = this.state.showArrows && this.state.firstItem > 0;
            // show right arrow
            var hasNext = this.state.showArrows && this.state.firstItem < this.state.lastPosition;
            // obj to hold the transformations and styles
            var itemListStyles = {};

            var currentPosition = -this.state.firstItem * this.state.itemSize + 'px';

            var transformProp = (0, _CSSTranslate2.default)(currentPosition, this.props.axis);

            var transitionTime = this.props.transitionTime + 'ms';

            itemListStyles = {
                'WebkitTransform': transformProp,
                'MozTransform': transformProp,
                'MsTransform': transformProp,
                'OTransform': transformProp,
                'transform': transformProp,
                'msTransform': transformProp,
                'WebkitTransitionDuration': transitionTime,
                'MozTransitionDuration': transitionTime,
                'MsTransitionDuration': transitionTime,
                'OTransitionDuration': transitionTime,
                'transitionDuration': transitionTime,
                'msTransitionDuration': transitionTime
            };

            return _react2.default.createElement(
                'div',
                { className: _cssClasses2.default.CAROUSEL(false) },
                _react2.default.createElement(
                    'div',
                    { className: _cssClasses2.default.WRAPPER(false), ref: this.setItemsWrapperRef },
                    _react2.default.createElement('button', { type: 'button', className: _cssClasses2.default.ARROW_PREV(!hasPrev), onClick: this.slideRight, 'aria-label': this.props.labels.leftArrow }),
                    _react2.default.createElement(
                        _reactEasySwipe2.default,
                        { tagName: 'ul',
                            selectedItem: this.state.selectedItem,
                            className: _cssClasses2.default.SLIDER(false, this.state.swiping),
                            onSwipeLeft: this.slideLeft,
                            onSwipeRight: this.slideRight,
                            onSwipeMove: this.onSwipeMove,
                            onSwipeStart: this.onSwipeStart,
                            onSwipeEnd: this.onSwipeEnd,
                            style: itemListStyles,
                            ref: this.setItemsListRef },
                        this.renderItems()
                    ),
                    _react2.default.createElement('button', { type: 'button', className: _cssClasses2.default.ARROW_NEXT(!hasNext), onClick: this.slideLeft, 'aria-label': this.props.labels.rightArrow })
                )
            );
        }
    }]);

    return Thumbs;
}(_react.Component);

Thumbs.displayName = 'Thumbs';
Thumbs.propsTypes = {
    children: _propTypes2.default.element.isRequired,
    transitionTime: _propTypes2.default.number,
    selectedItem: _propTypes2.default.number,
    thumbWidth: _propTypes2.default.number,
    labels: _propTypes2.default.shape({
        leftArrow: _propTypes2.default.string,
        rightArrow: _propTypes2.default.string,
        item: _propTypes2.default.string
    })
};
Thumbs.defaultProps = {
    selectedItem: 0,
    transitionTime: 350,
    axis: 'horizontal'
};

var _initialiseProps = function _initialiseProps() {
    var _this3 = this;

    this.setItemsWrapperRef = function (node) {
        _this3.itemsWrapperRef = node;
    };

    this.setItemsListRef = function (node) {
        _this3.itemsListRef = node;
    };

    this.setThumbsRef = function (node, index) {
        if (!_this3.thumbsRef) {
            _this3.thumbsRef = [];
        }
        _this3.thumbsRef[index] = node;
    };

    this.updateSizes = function () {
        if (!_this3.props.children || !_this3.itemsWrapperRef) {
            return;
        }

        var total = _this3.props.children.length;
        var wrapperSize = _this3.itemsWrapperRef.clientWidth;
        var itemSize = _this3.props.thumbWidth ? _this3.props.thumbWidth : (0, _dimensions.outerWidth)(_this3.thumbsRef[0]);
        var visibleItems = Math.floor(wrapperSize / itemSize);
        var lastPosition = total - visibleItems;
        var showArrows = visibleItems < total;
        _this3.setState(function (_state, props) {
            return {
                itemSize: itemSize,
                visibleItems: visibleItems,
                firstItem: showArrows ? _this3.getFirstItem(props.selectedItem) : 0,
                lastPosition: lastPosition,
                showArrows: showArrows
            };
        });
    };

    this.setMountState = function () {
        _this3.setState({ hasMount: true });
        _this3.updateSizes();
    };

    this.handleClickItem = function (index, item, e) {
        if (!e.keyCode || e.key === 'Enter') {
            var handler = _this3.props.onSelectItem;

            if (typeof handler === 'function') {
                handler(index, item);
            }
        }
    };

    this.onSwipeStart = function () {
        _this3.setState({
            swiping: true
        });
    };

    this.onSwipeEnd = function () {
        _this3.setState({
            swiping: false
        });
    };

    this.onSwipeMove = function (deltaX) {
        var leftBoundary = 0;

        var currentPosition = -_this3.state.firstItem * _this3.state.itemSize;
        var lastLeftBoundary = -_this3.state.visibleItems * _this3.state.itemSize;

        // prevent user from swiping left out of boundaries
        if (currentPosition === leftBoundary && deltaX > 0) {
            deltaX = 0;
        }

        // prevent user from swiping right out of boundaries
        if (currentPosition === lastLeftBoundary && deltaX < 0) {
            deltaX = 0;
        }

        var wrapperSize = _this3.itemsWrapperRef.clientWidth;
        var position = currentPosition + 100 / (wrapperSize / deltaX) + '%';

        // if 3d isn't available we will use left to move
        if (_this3.itemsListRef) {
            ['WebkitTransform', 'MozTransform', 'MsTransform', 'OTransform', 'transform', 'msTransform'].forEach(function (prop) {
                _this3.itemsListRef.style[prop] = (0, _CSSTranslate2.default)(position, _this3.props.axis);
            });
        }
    };

    this.slideRight = function (positions) {
        _this3.moveTo(_this3.state.firstItem - (typeof positions === 'number' ? positions : 1));
    };

    this.slideLeft = function (positions) {
        _this3.moveTo(_this3.state.firstItem + (typeof positions === 'number' ? positions : 1));
    };

    this.moveTo = function (position) {
        // position can't be lower than 0
        position = position < 0 ? 0 : position;
        // position can't be higher than last postion
        position = position >= _this3.lastPosition ? _this3.lastPosition : position;

        _this3.setState({
            firstItem: position
        });
    };
};

exports.default = Thumbs;

/***/ }),

/***/ "./node_modules/react-responsive-carousel/lib/cssClasses.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-responsive-carousel/lib/cssClasses.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classnames = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    CAROUSEL: function CAROUSEL(isSlider) {
        return (0, _classnames2.default)({
            "carousel": true,
            "carousel-slider": isSlider
        });
    },

    WRAPPER: function WRAPPER(isSlider, axis) {
        return (0, _classnames2.default)({
            "thumbs-wrapper": !isSlider,
            "slider-wrapper": isSlider,
            "axis-horizontal": axis === "horizontal",
            "axis-vertical": axis !== "horizontal"
        });
    },

    SLIDER: function SLIDER(isSlider, isSwiping) {
        return (0, _classnames2.default)({
            "thumbs": !isSlider,
            "slider": isSlider,
            "animated": !isSwiping
        });
    },

    ITEM: function ITEM(isSlider, selected) {
        return (0, _classnames2.default)({
            "thumb": !isSlider,
            "slide": isSlider,
            "selected": selected
        });
    },

    ARROW_PREV: function ARROW_PREV(disabled) {
        return (0, _classnames2.default)({
            "control-arrow control-prev": true,
            "control-disabled": disabled
        });
    },

    ARROW_NEXT: function ARROW_NEXT(disabled) {
        return (0, _classnames2.default)({
            "control-arrow control-next": true,
            "control-disabled": disabled
        });
    },

    DOT: function DOT(selected) {
        return (0, _classnames2.default)({
            "dot": true,
            'selected': selected
        });
    }
};

/***/ }),

/***/ "./node_modules/react-responsive-carousel/lib/customPropTypes.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-responsive-carousel/lib/customPropTypes.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var unit = exports.unit = function unit(props, propName, componentName) {
    if (!/(pt|px|em|rem|vw|vh|%)$/.test(props[propName])) {
        return new Error('Invalid prop `' + propName + '` supplied to' + ' `' + componentName + '`. Validation failed. It needs to be a size unit like pt, px, em, rem, vw, %');
    }
};

/***/ }),

/***/ "./node_modules/react-responsive-carousel/lib/dimensions.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-responsive-carousel/lib/dimensions.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var outerWidth = exports.outerWidth = function outerWidth(el) {
	var width = el.offsetWidth;
	var style = getComputedStyle(el);

	width += parseInt(style.marginLeft) + parseInt(style.marginRight);
	return width;
};

/***/ }),

/***/ "./node_modules/react-responsive-carousel/lib/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-responsive-carousel/lib/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Thumbs = exports.Carousel = undefined;

var _Carousel = __webpack_require__(/*! ./components/Carousel */ "./node_modules/react-responsive-carousel/lib/components/Carousel.js");

var _Carousel2 = _interopRequireDefault(_Carousel);

var _Thumbs = __webpack_require__(/*! ./components/Thumbs */ "./node_modules/react-responsive-carousel/lib/components/Thumbs.js");

var _Thumbs2 = _interopRequireDefault(_Thumbs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Carousel = _Carousel2.default;
exports.Thumbs = _Thumbs2.default;

/***/ }),

/***/ "./node_modules/react-scroll/modules/components/Button.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-scroll/modules/components/Button.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _scrollLink = __webpack_require__(/*! ../mixins/scroll-link */ "./node_modules/react-scroll/modules/mixins/scroll-link.js");

var _scrollLink2 = _interopRequireDefault(_scrollLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ButtonElement = function (_React$Component) {
  _inherits(ButtonElement, _React$Component);

  function ButtonElement() {
    _classCallCheck(this, ButtonElement);

    return _possibleConstructorReturn(this, (ButtonElement.__proto__ || Object.getPrototypeOf(ButtonElement)).apply(this, arguments));
  }

  _createClass(ButtonElement, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'input',
        this.props,
        this.props.children
      );
    }
  }]);

  return ButtonElement;
}(_react2.default.Component);

;

exports.default = (0, _scrollLink2.default)(ButtonElement);

/***/ }),

/***/ "./node_modules/react-scroll/modules/components/Element.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-scroll/modules/components/Element.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _scrollElement = __webpack_require__(/*! ../mixins/scroll-element */ "./node_modules/react-scroll/modules/mixins/scroll-element.js");

var _scrollElement2 = _interopRequireDefault(_scrollElement);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ElementWrapper = function (_React$Component) {
  _inherits(ElementWrapper, _React$Component);

  function ElementWrapper() {
    _classCallCheck(this, ElementWrapper);

    return _possibleConstructorReturn(this, (ElementWrapper.__proto__ || Object.getPrototypeOf(ElementWrapper)).apply(this, arguments));
  }

  _createClass(ElementWrapper, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      // Remove `parentBindings` from props
      var newProps = _extends({}, this.props);
      if (newProps.parentBindings) {
        delete newProps.parentBindings;
      }

      return _react2.default.createElement(
        'div',
        _extends({}, newProps, { ref: function ref(el) {
            _this2.props.parentBindings.domNode = el;
          } }),
        this.props.children
      );
    }
  }]);

  return ElementWrapper;
}(_react2.default.Component);

;

ElementWrapper.propTypes = {
  name: _propTypes2.default.string,
  id: _propTypes2.default.string
};

exports.default = (0, _scrollElement2.default)(ElementWrapper);

/***/ }),

/***/ "./node_modules/react-scroll/modules/components/Link.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-scroll/modules/components/Link.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _scrollLink = __webpack_require__(/*! ../mixins/scroll-link */ "./node_modules/react-scroll/modules/mixins/scroll-link.js");

var _scrollLink2 = _interopRequireDefault(_scrollLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LinkElement = function (_React$Component) {
  _inherits(LinkElement, _React$Component);

  function LinkElement() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, LinkElement);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = LinkElement.__proto__ || Object.getPrototypeOf(LinkElement)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {
      return _react2.default.createElement(
        'a',
        _this.props,
        _this.props.children
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return LinkElement;
}(_react2.default.Component);

;

exports.default = (0, _scrollLink2.default)(LinkElement);

/***/ }),

/***/ "./node_modules/react-scroll/modules/index.js":
/*!****************************************************!*\
  !*** ./node_modules/react-scroll/modules/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Helpers = exports.ScrollElement = exports.ScrollLink = exports.animateScroll = exports.scrollSpy = exports.Events = exports.scroller = exports.Element = exports.Button = exports.Link = undefined;

var _Link = __webpack_require__(/*! ./components/Link.js */ "./node_modules/react-scroll/modules/components/Link.js");

var _Link2 = _interopRequireDefault(_Link);

var _Button = __webpack_require__(/*! ./components/Button.js */ "./node_modules/react-scroll/modules/components/Button.js");

var _Button2 = _interopRequireDefault(_Button);

var _Element = __webpack_require__(/*! ./components/Element.js */ "./node_modules/react-scroll/modules/components/Element.js");

var _Element2 = _interopRequireDefault(_Element);

var _scroller = __webpack_require__(/*! ./mixins/scroller.js */ "./node_modules/react-scroll/modules/mixins/scroller.js");

var _scroller2 = _interopRequireDefault(_scroller);

var _scrollEvents = __webpack_require__(/*! ./mixins/scroll-events.js */ "./node_modules/react-scroll/modules/mixins/scroll-events.js");

var _scrollEvents2 = _interopRequireDefault(_scrollEvents);

var _scrollSpy = __webpack_require__(/*! ./mixins/scroll-spy.js */ "./node_modules/react-scroll/modules/mixins/scroll-spy.js");

var _scrollSpy2 = _interopRequireDefault(_scrollSpy);

var _animateScroll = __webpack_require__(/*! ./mixins/animate-scroll.js */ "./node_modules/react-scroll/modules/mixins/animate-scroll.js");

var _animateScroll2 = _interopRequireDefault(_animateScroll);

var _scrollLink = __webpack_require__(/*! ./mixins/scroll-link.js */ "./node_modules/react-scroll/modules/mixins/scroll-link.js");

var _scrollLink2 = _interopRequireDefault(_scrollLink);

var _scrollElement = __webpack_require__(/*! ./mixins/scroll-element.js */ "./node_modules/react-scroll/modules/mixins/scroll-element.js");

var _scrollElement2 = _interopRequireDefault(_scrollElement);

var _Helpers = __webpack_require__(/*! ./mixins/Helpers.js */ "./node_modules/react-scroll/modules/mixins/Helpers.js");

var _Helpers2 = _interopRequireDefault(_Helpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Link = _Link2.default;
exports.Button = _Button2.default;
exports.Element = _Element2.default;
exports.scroller = _scroller2.default;
exports.Events = _scrollEvents2.default;
exports.scrollSpy = _scrollSpy2.default;
exports.animateScroll = _animateScroll2.default;
exports.ScrollLink = _scrollLink2.default;
exports.ScrollElement = _scrollElement2.default;
exports.Helpers = _Helpers2.default;
exports.default = { Link: _Link2.default, Button: _Button2.default, Element: _Element2.default, scroller: _scroller2.default, Events: _scrollEvents2.default, scrollSpy: _scrollSpy2.default, animateScroll: _animateScroll2.default, ScrollLink: _scrollLink2.default, ScrollElement: _scrollElement2.default, Helpers: _Helpers2.default };

/***/ }),

/***/ "./node_modules/react-scroll/modules/mixins/Helpers.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-scroll/modules/mixins/Helpers.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* DEPRECATED */

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var ReactDOM = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var utils = __webpack_require__(/*! ./utils */ "./node_modules/react-scroll/modules/mixins/utils.js");
var scrollSpy = __webpack_require__(/*! ./scroll-spy */ "./node_modules/react-scroll/modules/mixins/scroll-spy.js");
var defaultScroller = __webpack_require__(/*! ./scroller */ "./node_modules/react-scroll/modules/mixins/scroller.js");
var PropTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
var scrollHash = __webpack_require__(/*! ./scroll-hash */ "./node_modules/react-scroll/modules/mixins/scroll-hash.js");

var protoTypes = {
  to: PropTypes.string.isRequired,
  containerId: PropTypes.string,
  container: PropTypes.object,
  activeClass: PropTypes.string,
  spy: PropTypes.bool,
  smooth: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  offset: PropTypes.number,
  delay: PropTypes.number,
  isDynamic: PropTypes.bool,
  onClick: PropTypes.func,
  duration: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
  absolute: PropTypes.bool,
  onSetActive: PropTypes.func,
  onSetInactive: PropTypes.func,
  ignoreCancelEvents: PropTypes.bool,
  hashSpy: PropTypes.bool
};

var Helpers = {
  Scroll: function Scroll(Component, customScroller) {

    console.warn("Helpers.Scroll is deprecated since v1.7.0");

    var scroller = customScroller || defaultScroller;

    var Scroll = function (_React$Component) {
      _inherits(Scroll, _React$Component);

      function Scroll(props) {
        _classCallCheck(this, Scroll);

        var _this = _possibleConstructorReturn(this, (Scroll.__proto__ || Object.getPrototypeOf(Scroll)).call(this, props));

        _initialiseProps.call(_this);

        _this.state = {
          active: false
        };
        return _this;
      }

      _createClass(Scroll, [{
        key: 'getScrollSpyContainer',
        value: function getScrollSpyContainer() {
          var containerId = this.props.containerId;
          var container = this.props.container;

          if (containerId) {
            return document.getElementById(containerId);
          }

          if (container && container.nodeType) {
            return container;
          }

          return document;
        }
      }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
          if (this.props.spy || this.props.hashSpy) {
            var scrollSpyContainer = this.getScrollSpyContainer();

            if (!scrollSpy.isMounted(scrollSpyContainer)) {
              scrollSpy.mount(scrollSpyContainer);
            }

            if (this.props.hashSpy) {
              if (!scrollHash.isMounted()) {
                scrollHash.mount(scroller);
              }
              scrollHash.mapContainer(this.props.to, scrollSpyContainer);
            }

            if (this.props.spy) {
              scrollSpy.addStateHandler(this.stateHandler);
            }

            scrollSpy.addSpyHandler(this.spyHandler, scrollSpyContainer);

            this.setState({
              container: scrollSpyContainer
            });
          }
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          scrollSpy.unmount(this.stateHandler, this.spyHandler);
        }
      }, {
        key: 'render',
        value: function render() {
          var className = "";

          if (this.state && this.state.active) {
            className = ((this.props.className || "") + " " + (this.props.activeClass || "active")).trim();
          } else {
            className = this.props.className;
          }

          var props = _extends({}, this.props);

          for (var prop in protoTypes) {
            if (props.hasOwnProperty(prop)) {
              delete props[prop];
            }
          }

          props.className = className;
          props.onClick = this.handleClick;

          return React.createElement(Component, props);
        }
      }]);

      return Scroll;
    }(React.Component);

    var _initialiseProps = function _initialiseProps() {
      var _this2 = this;

      this.scrollTo = function (to, props) {
        scroller.scrollTo(to, _extends({}, _this2.state, props));
      };

      this.handleClick = function (event) {

        /*
         * give the posibility to override onClick
         */

        if (_this2.props.onClick) {
          _this2.props.onClick(event);
        }

        /*
         * dont bubble the navigation
         */

        if (event.stopPropagation) event.stopPropagation();
        if (event.preventDefault) event.preventDefault();

        /*
         * do the magic!
         */
        _this2.scrollTo(_this2.props.to, _this2.props);
      };

      this.stateHandler = function () {
        if (scroller.getActiveLink() !== _this2.props.to) {
          if (_this2.state !== null && _this2.state.active && _this2.props.onSetInactive) {
            _this2.props.onSetInactive();
          }
          _this2.setState({ active: false });
        }
      };

      this.spyHandler = function (y) {

        var scrollSpyContainer = _this2.getScrollSpyContainer();

        if (scrollHash.isMounted() && !scrollHash.isInitialized()) {
          return;
        }

        var to = _this2.props.to;
        var element = null;
        var elemTopBound = 0;
        var elemBottomBound = 0;
        var containerTop = 0;

        if (scrollSpyContainer.getBoundingClientRect) {
          var containerCords = scrollSpyContainer.getBoundingClientRect();
          containerTop = containerCords.top;
        }

        if (!element || _this2.props.isDynamic) {
          element = scroller.get(to);
          if (!element) {
            return;
          }

          var cords = element.getBoundingClientRect();
          elemTopBound = cords.top - containerTop + y;
          elemBottomBound = elemTopBound + cords.height;
        }

        var offsetY = y - _this2.props.offset;
        var isInside = offsetY >= Math.floor(elemTopBound) && offsetY < Math.floor(elemBottomBound);
        var isOutside = offsetY < Math.floor(elemTopBound) || offsetY >= Math.floor(elemBottomBound);
        var activeLink = scroller.getActiveLink();

        if (isOutside) {
          if (to === activeLink) {
            scroller.setActiveLink(void 0);
          }

          if (_this2.props.hashSpy && scrollHash.getHash() === to) {
            scrollHash.changeHash();
          }

          if (_this2.props.spy && _this2.state.active) {
            _this2.setState({ active: false });
            _this2.props.onSetInactive && _this2.props.onSetInactive();
          }

          return scrollSpy.updateStates();
        }

        if (isInside && activeLink !== to) {
          scroller.setActiveLink(to);

          _this2.props.hashSpy && scrollHash.changeHash(to);

          if (_this2.props.spy) {
            _this2.setState({ active: true });
            _this2.props.onSetActive && _this2.props.onSetActive(to);
          }
          return scrollSpy.updateStates();
        }
      };
    };

    ;

    Scroll.propTypes = protoTypes;

    Scroll.defaultProps = { offset: 0 };

    return Scroll;
  },
  Element: function Element(Component) {

    console.warn("Helpers.Element is deprecated since v1.7.0");

    var Element = function (_React$Component2) {
      _inherits(Element, _React$Component2);

      function Element(props) {
        _classCallCheck(this, Element);

        var _this3 = _possibleConstructorReturn(this, (Element.__proto__ || Object.getPrototypeOf(Element)).call(this, props));

        _this3.childBindings = {
          domNode: null
        };
        return _this3;
      }

      _createClass(Element, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
          if (typeof window === 'undefined') {
            return false;
          }
          this.registerElems(this.props.name);
        }
      }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
          if (this.props.name !== prevProps.name) {
            this.registerElems(this.props.name);
          }
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          if (typeof window === 'undefined') {
            return false;
          }
          defaultScroller.unregister(this.props.name);
        }
      }, {
        key: 'registerElems',
        value: function registerElems(name) {
          defaultScroller.register(name, this.childBindings.domNode);
        }
      }, {
        key: 'render',
        value: function render() {
          return React.createElement(Component, _extends({}, this.props, { parentBindings: this.childBindings }));
        }
      }]);

      return Element;
    }(React.Component);

    ;

    Element.propTypes = {
      name: PropTypes.string,
      id: PropTypes.string
    };

    return Element;
  }
};

module.exports = Helpers;

/***/ }),

/***/ "./node_modules/react-scroll/modules/mixins/animate-scroll.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-scroll/modules/mixins/animate-scroll.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/react-scroll/modules/mixins/utils.js");

var _utils2 = _interopRequireDefault(_utils);

var _smooth = __webpack_require__(/*! ./smooth */ "./node_modules/react-scroll/modules/mixins/smooth.js");

var _smooth2 = _interopRequireDefault(_smooth);

var _cancelEvents = __webpack_require__(/*! ./cancel-events */ "./node_modules/react-scroll/modules/mixins/cancel-events.js");

var _cancelEvents2 = _interopRequireDefault(_cancelEvents);

var _scrollEvents = __webpack_require__(/*! ./scroll-events */ "./node_modules/react-scroll/modules/mixins/scroll-events.js");

var _scrollEvents2 = _interopRequireDefault(_scrollEvents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Gets the easing type from the smooth prop within options.
 */
var getAnimationType = function getAnimationType(options) {
  return _smooth2.default[options.smooth] || _smooth2.default.defaultEasing;
};
/*
 * Function helper
 */
var functionWrapper = function functionWrapper(value) {
  return typeof value === 'function' ? value : function () {
    return value;
  };
};
/*
 * Wraps window properties to allow server side rendering
 */
var currentWindowProperties = function currentWindowProperties() {
  if (typeof window !== 'undefined') {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame;
  }
};

/*
 * Helper function to never extend 60fps on the webpage.
 */
var requestAnimationFrameHelper = function () {
  return currentWindowProperties() || function (callback, element, delay) {
    window.setTimeout(callback, delay || 1000 / 60, new Date().getTime());
  };
}();

var makeData = function makeData() {
  return {
    currentPositionY: 0,
    startPositionY: 0,
    targetPositionY: 0,
    progress: 0,
    duration: 0,
    cancel: false,

    target: null,
    containerElement: null,
    to: null,
    start: null,
    deltaTop: null,
    percent: null,
    delayTimeout: null
  };
};

var currentPositionY = function currentPositionY(options) {
  var containerElement = options.data.containerElement;
  if (containerElement && containerElement !== document && containerElement !== document.body) {
    return containerElement.scrollTop;
  } else {
    var supportPageOffset = window.pageXOffset !== undefined;
    var isCSS1Compat = (document.compatMode || "") === "CSS1Compat";
    return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
  }
};

var scrollContainerHeight = function scrollContainerHeight(options) {
  var containerElement = options.data.containerElement;
  if (containerElement && containerElement !== document && containerElement !== document.body) {
    return containerElement.scrollHeight - containerElement.offsetHeight;
  } else {
    var body = document.body;
    var html = document.documentElement;

    return Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
  }
};

var animateScroll = function animateScroll(easing, options, timestamp) {
  var data = options.data;

  // Cancel on specific events
  if (!options.ignoreCancelEvents && data.cancel) {
    if (_scrollEvents2.default.registered['end']) {
      _scrollEvents2.default.registered['end'](data.to, data.target, data.currentPositionY);
    }
    return;
  };

  data.deltaTop = Math.round(data.targetPositionY - data.startPositionY);

  if (data.start === null) {
    data.start = timestamp;
  }

  data.progress = timestamp - data.start;

  data.percent = data.progress >= data.duration ? 1 : easing(data.progress / data.duration);

  data.currentPositionY = data.startPositionY + Math.ceil(data.deltaTop * data.percent);

  if (data.containerElement && data.containerElement !== document && data.containerElement !== document.body) {
    data.containerElement.scrollTop = data.currentPositionY;
  } else {
    window.scrollTo(0, data.currentPositionY);
  }

  if (data.percent < 1) {
    var easedAnimate = animateScroll.bind(null, easing, options);
    requestAnimationFrameHelper.call(window, easedAnimate);
    return;
  }

  if (_scrollEvents2.default.registered['end']) {
    _scrollEvents2.default.registered['end'](data.to, data.target, data.currentPositionY);
  }
};

var setContainer = function setContainer(options) {
  options.data.containerElement = !options ? null : options.containerId ? document.getElementById(options.containerId) : options.container && options.container.nodeType ? options.container : document;
};

var animateTopScroll = function animateTopScroll(y, options, to, target) {
  options.data = options.data || makeData();

  window.clearTimeout(options.data.delayTimeout);

  _cancelEvents2.default.subscribe(function () {
    options.data.cancel = true;
  });

  setContainer(options);

  options.data.start = null;
  options.data.cancel = false;
  options.data.startPositionY = currentPositionY(options);
  options.data.targetPositionY = options.absolute ? y : y + options.data.startPositionY;

  if (options.data.startPositionY === options.data.targetPositionY) {
    if (_scrollEvents2.default.registered['end']) {
      _scrollEvents2.default.registered['end'](options.data.to, options.data.target, options.data.currentPositionY);
    }
    return;
  }

  options.data.deltaTop = Math.round(options.data.targetPositionY - options.data.startPositionY);

  options.data.duration = functionWrapper(options.duration)(options.data.deltaTop);
  options.data.duration = isNaN(parseFloat(options.data.duration)) ? 1000 : parseFloat(options.data.duration);
  options.data.to = to;
  options.data.target = target;

  var easing = getAnimationType(options);
  var easedAnimate = animateScroll.bind(null, easing, options);

  if (options && options.delay > 0) {
    options.data.delayTimeout = window.setTimeout(function () {
      if (_scrollEvents2.default.registered['begin']) {
        _scrollEvents2.default.registered['begin'](options.data.to, options.data.target);
      }
      requestAnimationFrameHelper.call(window, easedAnimate);
    }, options.delay);
    return;
  }

  if (_scrollEvents2.default.registered['begin']) {
    _scrollEvents2.default.registered['begin'](options.data.to, options.data.target);
  }
  requestAnimationFrameHelper.call(window, easedAnimate);
};

var proceedOptions = function proceedOptions(options) {
  options = _extends({}, options);
  options.data = options.data || makeData();
  options.absolute = true;
  return options;
};

var scrollToTop = function scrollToTop(options) {
  animateTopScroll(0, proceedOptions(options));
};

var scrollTo = function scrollTo(toY, options) {
  animateTopScroll(toY, proceedOptions(options));
};

var scrollToBottom = function scrollToBottom(options) {
  options = proceedOptions(options);
  setContainer(options);
  animateTopScroll(scrollContainerHeight(options), options);
};

var scrollMore = function scrollMore(toY, options) {
  options = proceedOptions(options);
  setContainer(options);
  animateTopScroll(currentPositionY(options) + toY, options);
};

exports.default = {
  animateTopScroll: animateTopScroll,
  getAnimationType: getAnimationType,
  scrollToTop: scrollToTop,
  scrollToBottom: scrollToBottom,
  scrollTo: scrollTo,
  scrollMore: scrollMore
};

/***/ }),

/***/ "./node_modules/react-scroll/modules/mixins/cancel-events.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-scroll/modules/mixins/cancel-events.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _passiveEventListeners = __webpack_require__(/*! ./passive-event-listeners */ "./node_modules/react-scroll/modules/mixins/passive-event-listeners.js");

var events = ['mousedown', 'mousewheel', 'touchmove', 'keydown'];

exports.default = {
  subscribe: function subscribe(cancelEvent) {
    return typeof document !== 'undefined' && events.forEach(function (event) {
      return (0, _passiveEventListeners.addPassiveEventListener)(document, event, cancelEvent);
    });
  }
};

/***/ }),

/***/ "./node_modules/react-scroll/modules/mixins/passive-event-listeners.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/react-scroll/modules/mixins/passive-event-listeners.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
 * Tell the browser that the event listener won't prevent a scroll.
 * Allowing the browser to continue scrolling without having to
 * to wait for the listener to return.
 */
var addPassiveEventListener = exports.addPassiveEventListener = function addPassiveEventListener(target, eventName, listener) {
  var supportsPassiveOption = function () {
    var supportsPassiveOption = false;
    try {
      var opts = Object.defineProperty({}, 'passive', {
        get: function get() {
          supportsPassiveOption = true;
        }
      });
      window.addEventListener('test', null, opts);
    } catch (e) {}
    return supportsPassiveOption;
  }();
  target.addEventListener(eventName, listener, supportsPassiveOption ? { passive: true } : false);
};

var removePassiveEventListener = exports.removePassiveEventListener = function removePassiveEventListener(target, eventName, listener) {
  target.removeEventListener(eventName, listener);
};

/***/ }),

/***/ "./node_modules/react-scroll/modules/mixins/scroll-element.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-scroll/modules/mixins/scroll-element.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _scroller = __webpack_require__(/*! ./scroller */ "./node_modules/react-scroll/modules/mixins/scroller.js");

var _scroller2 = _interopRequireDefault(_scroller);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (Component) {
  var Element = function (_React$Component) {
    _inherits(Element, _React$Component);

    function Element(props) {
      _classCallCheck(this, Element);

      var _this = _possibleConstructorReturn(this, (Element.__proto__ || Object.getPrototypeOf(Element)).call(this, props));

      _this.childBindings = {
        domNode: null
      };
      return _this;
    }

    _createClass(Element, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        if (typeof window === 'undefined') {
          return false;
        }
        this.registerElems(this.props.name);
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        if (this.props.name !== prevProps.name) {
          this.registerElems(this.props.name);
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        if (typeof window === 'undefined') {
          return false;
        }
        _scroller2.default.unregister(this.props.name);
      }
    }, {
      key: 'registerElems',
      value: function registerElems(name) {
        _scroller2.default.register(name, this.childBindings.domNode);
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(Component, _extends({}, this.props, { parentBindings: this.childBindings }));
      }
    }]);

    return Element;
  }(_react2.default.Component);

  ;

  Element.propTypes = {
    name: _propTypes2.default.string,
    id: _propTypes2.default.string
  };

  return Element;
};

/***/ }),

/***/ "./node_modules/react-scroll/modules/mixins/scroll-events.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-scroll/modules/mixins/scroll-events.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var Events = {
	registered: {},
	scrollEvent: {
		register: function register(evtName, callback) {
			Events.registered[evtName] = callback;
		},
		remove: function remove(evtName) {
			Events.registered[evtName] = null;
		}
	}
};

exports.default = Events;

/***/ }),

/***/ "./node_modules/react-scroll/modules/mixins/scroll-hash.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-scroll/modules/mixins/scroll-hash.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _passiveEventListeners = __webpack_require__(/*! ./passive-event-listeners */ "./node_modules/react-scroll/modules/mixins/passive-event-listeners.js");

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/react-scroll/modules/mixins/utils.js");

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var scrollHash = {
  mountFlag: false,
  initialized: false,
  scroller: null,
  containers: {},

  mount: function mount(scroller) {
    this.scroller = scroller;

    this.handleHashChange = this.handleHashChange.bind(this);
    window.addEventListener('hashchange', this.handleHashChange);

    this.initStateFromHash();
    this.mountFlag = true;
  },
  mapContainer: function mapContainer(to, container) {
    this.containers[to] = container;
  },
  isMounted: function isMounted() {
    return this.mountFlag;
  },
  isInitialized: function isInitialized() {
    return this.initialized;
  },
  initStateFromHash: function initStateFromHash() {
    var _this = this;

    var hash = this.getHash();
    if (hash) {
      window.setTimeout(function () {
        _this.scrollTo(hash, true);
        _this.initialized = true;
      }, 10);
    } else {
      this.initialized = true;
    }
  },
  scrollTo: function scrollTo(to, isInit) {
    var scroller = this.scroller;
    var element = scroller.get(to);
    if (element && (isInit || to !== scroller.getActiveLink())) {
      var container = this.containers[to] || document;
      scroller.scrollTo(to, { container: container });
    }
  },
  getHash: function getHash() {
    return _utils2.default.getHash();
  },
  changeHash: function changeHash(to) {
    if (this.isInitialized() && _utils2.default.getHash() !== to) {
      _utils2.default.pushHash(to);
    }
  },
  handleHashChange: function handleHashChange() {
    this.scrollTo(this.getHash());
  },
  unmount: function unmount() {
    this.scroller = null;
    this.containers = null;
    window.removeEventListener('hashchange', this.handleHashChange);
  }
};

exports.default = scrollHash;

/***/ }),

/***/ "./node_modules/react-scroll/modules/mixins/scroll-link.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-scroll/modules/mixins/scroll-link.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _scrollSpy = __webpack_require__(/*! ./scroll-spy */ "./node_modules/react-scroll/modules/mixins/scroll-spy.js");

var _scrollSpy2 = _interopRequireDefault(_scrollSpy);

var _scroller = __webpack_require__(/*! ./scroller */ "./node_modules/react-scroll/modules/mixins/scroller.js");

var _scroller2 = _interopRequireDefault(_scroller);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _scrollHash = __webpack_require__(/*! ./scroll-hash */ "./node_modules/react-scroll/modules/mixins/scroll-hash.js");

var _scrollHash2 = _interopRequireDefault(_scrollHash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var protoTypes = {
  to: _propTypes2.default.string.isRequired,
  containerId: _propTypes2.default.string,
  container: _propTypes2.default.object,
  activeClass: _propTypes2.default.string,
  spy: _propTypes2.default.bool,
  smooth: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string]),
  offset: _propTypes2.default.number,
  delay: _propTypes2.default.number,
  isDynamic: _propTypes2.default.bool,
  onClick: _propTypes2.default.func,
  duration: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.func]),
  absolute: _propTypes2.default.bool,
  onSetActive: _propTypes2.default.func,
  onSetInactive: _propTypes2.default.func,
  ignoreCancelEvents: _propTypes2.default.bool,
  hashSpy: _propTypes2.default.bool
};

exports.default = function (Component, customScroller) {

  var scroller = customScroller || _scroller2.default;

  var Link = function (_React$PureComponent) {
    _inherits(Link, _React$PureComponent);

    function Link(props) {
      _classCallCheck(this, Link);

      var _this = _possibleConstructorReturn(this, (Link.__proto__ || Object.getPrototypeOf(Link)).call(this, props));

      _initialiseProps.call(_this);

      _this.state = {
        active: false
      };
      return _this;
    }

    _createClass(Link, [{
      key: 'getScrollSpyContainer',
      value: function getScrollSpyContainer() {
        var containerId = this.props.containerId;
        var container = this.props.container;

        if (containerId && !container) {
          return document.getElementById(containerId);
        }

        if (container && container.nodeType) {
          return container;
        }

        return document;
      }
    }, {
      key: 'componentDidMount',
      value: function componentDidMount() {
        if (this.props.spy || this.props.hashSpy) {
          var scrollSpyContainer = this.getScrollSpyContainer();

          if (!_scrollSpy2.default.isMounted(scrollSpyContainer)) {
            _scrollSpy2.default.mount(scrollSpyContainer);
          }

          if (this.props.hashSpy) {
            if (!_scrollHash2.default.isMounted()) {
              _scrollHash2.default.mount(scroller);
            }
            _scrollHash2.default.mapContainer(this.props.to, scrollSpyContainer);
          }

          _scrollSpy2.default.addSpyHandler(this.spyHandler, scrollSpyContainer);

          this.setState({
            container: scrollSpyContainer
          });
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        _scrollSpy2.default.unmount(this.stateHandler, this.spyHandler);
      }
    }, {
      key: 'render',
      value: function render() {
        var className = "";

        if (this.state && this.state.active) {
          className = ((this.props.className || "") + " " + (this.props.activeClass || "active")).trim();
        } else {
          className = this.props.className;
        }

        var props = _extends({}, this.props);

        for (var prop in protoTypes) {
          if (props.hasOwnProperty(prop)) {
            delete props[prop];
          }
        }

        props.className = className;
        props.onClick = this.handleClick;

        return _react2.default.createElement(Component, props);
      }
    }]);

    return Link;
  }(_react2.default.PureComponent);

  var _initialiseProps = function _initialiseProps() {
    var _this2 = this;

    this.scrollTo = function (to, props) {
      scroller.scrollTo(to, _extends({}, _this2.state, props));
    };

    this.handleClick = function (event) {

      /*
       * give the posibility to override onClick
       */

      if (_this2.props.onClick) {
        _this2.props.onClick(event);
      }

      /*
       * dont bubble the navigation
       */

      if (event.stopPropagation) event.stopPropagation();
      if (event.preventDefault) event.preventDefault();

      /*
       * do the magic!
       */
      _this2.scrollTo(_this2.props.to, _this2.props);
    };

    this.spyHandler = function (y) {

      var scrollSpyContainer = _this2.getScrollSpyContainer();

      if (_scrollHash2.default.isMounted() && !_scrollHash2.default.isInitialized()) {
        return;
      }

      var to = _this2.props.to;
      var element = null;
      var elemTopBound = 0;
      var elemBottomBound = 0;
      var containerTop = 0;

      if (scrollSpyContainer.getBoundingClientRect) {
        var containerCords = scrollSpyContainer.getBoundingClientRect();
        containerTop = containerCords.top;
      }

      if (!element || _this2.props.isDynamic) {
        element = scroller.get(to);
        if (!element) {
          return;
        }

        var cords = element.getBoundingClientRect();
        elemTopBound = cords.top - containerTop + y;
        elemBottomBound = elemTopBound + cords.height;
      }

      var offsetY = y - _this2.props.offset;
      var isInside = offsetY >= Math.floor(elemTopBound) && offsetY < Math.floor(elemBottomBound);
      var isOutside = offsetY < Math.floor(elemTopBound) || offsetY >= Math.floor(elemBottomBound);
      var activeLink = scroller.getActiveLink();

      if (isOutside) {
        if (to === activeLink) {
          scroller.setActiveLink(void 0);
        }

        if (_this2.props.hashSpy && _scrollHash2.default.getHash() === to) {
          _scrollHash2.default.changeHash();
        }

        if (_this2.props.spy && _this2.state.active) {
          _this2.setState({ active: false });
          _this2.props.onSetInactive && _this2.props.onSetInactive(to, element);
        }
      }

      if (isInside && (activeLink !== to || _this2.state.active === false)) {
        scroller.setActiveLink(to);

        _this2.props.hashSpy && _scrollHash2.default.changeHash(to);

        if (_this2.props.spy) {
          _this2.setState({ active: true });
          _this2.props.onSetActive && _this2.props.onSetActive(to, element);
        }
      }
    };
  };

  ;

  Link.propTypes = protoTypes;

  Link.defaultProps = { offset: 0 };

  return Link;
};

/***/ }),

/***/ "./node_modules/react-scroll/modules/mixins/scroll-spy.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-scroll/modules/mixins/scroll-spy.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = __webpack_require__(/*! lodash.throttle */ "./node_modules/lodash.throttle/index.js");

var _lodash2 = _interopRequireDefault(_lodash);

var _passiveEventListeners = __webpack_require__(/*! ./passive-event-listeners */ "./node_modules/react-scroll/modules/mixins/passive-event-listeners.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// The eventHandler will execute at a rate of 15fps
var eventThrottler = function eventThrottler(eventHandler) {
  return (0, _lodash2.default)(eventHandler, 66);
};

var scrollSpy = {

  spyCallbacks: [],
  spySetState: [],
  scrollSpyContainers: [],

  mount: function mount(scrollSpyContainer) {
    if (scrollSpyContainer) {
      var eventHandler = eventThrottler(function (event) {
        scrollSpy.scrollHandler(scrollSpyContainer);
      });
      scrollSpy.scrollSpyContainers.push(scrollSpyContainer);
      (0, _passiveEventListeners.addPassiveEventListener)(scrollSpyContainer, 'scroll', eventHandler);
    }
  },
  isMounted: function isMounted(scrollSpyContainer) {
    return scrollSpy.scrollSpyContainers.indexOf(scrollSpyContainer) !== -1;
  },
  currentPositionY: function currentPositionY(scrollSpyContainer) {
    if (scrollSpyContainer === document) {
      var supportPageOffset = window.pageXOffset !== undefined;
      var isCSS1Compat = (document.compatMode || "") === "CSS1Compat";
      return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
    } else {
      return scrollSpyContainer.scrollTop;
    }
  },
  scrollHandler: function scrollHandler(scrollSpyContainer) {
    var callbacks = scrollSpy.scrollSpyContainers[scrollSpy.scrollSpyContainers.indexOf(scrollSpyContainer)].spyCallbacks || [];
    callbacks.forEach(function (c) {
      return c(scrollSpy.currentPositionY(scrollSpyContainer));
    });
  },
  addStateHandler: function addStateHandler(handler) {
    scrollSpy.spySetState.push(handler);
  },
  addSpyHandler: function addSpyHandler(handler, scrollSpyContainer) {
    var container = scrollSpy.scrollSpyContainers[scrollSpy.scrollSpyContainers.indexOf(scrollSpyContainer)];

    if (!container.spyCallbacks) {
      container.spyCallbacks = [];
    }

    container.spyCallbacks.push(handler);

    handler(scrollSpy.currentPositionY(scrollSpyContainer));
  },
  updateStates: function updateStates() {
    scrollSpy.spySetState.forEach(function (s) {
      return s();
    });
  },
  unmount: function unmount(stateHandler, spyHandler) {
    scrollSpy.scrollSpyContainers.forEach(function (c) {
      return c.spyCallbacks && c.spyCallbacks.length && c.spyCallbacks.splice(c.spyCallbacks.indexOf(spyHandler), 1);
    });

    if (scrollSpy.spySetState && scrollSpy.spySetState.length) {
      scrollSpy.spySetState.splice(scrollSpy.spySetState.indexOf(stateHandler), 1);
    }

    document.removeEventListener('scroll', scrollSpy.scrollHandler);
  },


  update: function update() {
    return scrollSpy.scrollSpyContainers.forEach(function (c) {
      return scrollSpy.scrollHandler(c);
    });
  }
};

exports.default = scrollSpy;

/***/ }),

/***/ "./node_modules/react-scroll/modules/mixins/scroller.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-scroll/modules/mixins/scroller.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/react-scroll/modules/mixins/utils.js");

var _utils2 = _interopRequireDefault(_utils);

var _animateScroll = __webpack_require__(/*! ./animate-scroll */ "./node_modules/react-scroll/modules/mixins/animate-scroll.js");

var _animateScroll2 = _interopRequireDefault(_animateScroll);

var _scrollEvents = __webpack_require__(/*! ./scroll-events */ "./node_modules/react-scroll/modules/mixins/scroll-events.js");

var _scrollEvents2 = _interopRequireDefault(_scrollEvents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __mapped = {};
var __activeLink = void 0;

exports.default = {

  unmount: function unmount() {
    __mapped = {};
  },

  register: function register(name, element) {
    __mapped[name] = element;
  },

  unregister: function unregister(name) {
    delete __mapped[name];
  },

  get: function get(name) {
    return __mapped[name] || document.getElementById(name) || document.getElementsByName(name)[0] || document.getElementsByClassName(name)[0];
  },

  setActiveLink: function setActiveLink(link) {
    return __activeLink = link;
  },

  getActiveLink: function getActiveLink() {
    return __activeLink;
  },

  scrollTo: function scrollTo(to, props) {

    var target = this.get(to);

    if (!target) {
      console.warn("target Element not found");
      return;
    }

    props = _extends({}, props, { absolute: false });

    var containerId = props.containerId;
    var container = props.container;

    var containerElement = void 0;
    if (containerId) {
      containerElement = document.getElementById(containerId);
    } else if (container && container.nodeType) {
      containerElement = container;
    } else {
      containerElement = document;
    }

    props.absolute = true;

    var scrollOffset = _utils2.default.scrollOffset(containerElement, target) + (props.offset || 0);

    /*
     * if animate is not provided just scroll into the view
     */
    if (!props.smooth) {
      if (_scrollEvents2.default.registered['begin']) {
        _scrollEvents2.default.registered['begin'](to, target);
      }

      if (containerElement === document) {
        window.scrollTo(0, scrollOffset);
      } else {
        containerElement.scrollTop = scrollOffset;
      }

      if (_scrollEvents2.default.registered['end']) {
        _scrollEvents2.default.registered['end'](to, target);
      }

      return;
    }

    /*
     * Animate scrolling
     */

    _animateScroll2.default.animateTopScroll(scrollOffset, props, to, target);
  }
};

/***/ }),

/***/ "./node_modules/react-scroll/modules/mixins/smooth.js":
/*!************************************************************!*\
  !*** ./node_modules/react-scroll/modules/mixins/smooth.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  /*
   * https://github.com/oblador/angular-scroll (duScrollDefaultEasing)
   */
  defaultEasing: function defaultEasing(x) {
    if (x < 0.5) {
      return Math.pow(x * 2, 2) / 2;
    }
    return 1 - Math.pow((1 - x) * 2, 2) / 2;
  },
  /*
   * https://gist.github.com/gre/1650294
   */
  // no easing, no acceleration
  linear: function linear(x) {
    return x;
  },
  // accelerating from zero velocity
  easeInQuad: function easeInQuad(x) {
    return x * x;
  },
  // decelerating to zero velocity
  easeOutQuad: function easeOutQuad(x) {
    return x * (2 - x);
  },
  // acceleration until halfway, then deceleration
  easeInOutQuad: function easeInOutQuad(x) {
    return x < .5 ? 2 * x * x : -1 + (4 - 2 * x) * x;
  },
  // accelerating from zero velocity 
  easeInCubic: function easeInCubic(x) {
    return x * x * x;
  },
  // decelerating to zero velocity π
  easeOutCubic: function easeOutCubic(x) {
    return --x * x * x + 1;
  },
  // acceleration until halfway, then deceleration 
  easeInOutCubic: function easeInOutCubic(x) {
    return x < .5 ? 4 * x * x * x : (x - 1) * (2 * x - 2) * (2 * x - 2) + 1;
  },
  // accelerating from zero velocity 
  easeInQuart: function easeInQuart(x) {
    return x * x * x * x;
  },
  // decelerating to zero velocity 
  easeOutQuart: function easeOutQuart(x) {
    return 1 - --x * x * x * x;
  },
  // acceleration until halfway, then deceleration
  easeInOutQuart: function easeInOutQuart(x) {
    return x < .5 ? 8 * x * x * x * x : 1 - 8 * --x * x * x * x;
  },
  // accelerating from zero velocity
  easeInQuint: function easeInQuint(x) {
    return x * x * x * x * x;
  },
  // decelerating to zero velocity
  easeOutQuint: function easeOutQuint(x) {
    return 1 + --x * x * x * x * x;
  },
  // acceleration until halfway, then deceleration 
  easeInOutQuint: function easeInOutQuint(x) {
    return x < .5 ? 16 * x * x * x * x * x : 1 + 16 * --x * x * x * x * x;
  }
};

/***/ }),

/***/ "./node_modules/react-scroll/modules/mixins/utils.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-scroll/modules/mixins/utils.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var pushHash = function pushHash(hash) {
  hash = hash ? hash.indexOf("#") === 0 ? hash : "#" + hash : "";

  if (history.pushState) {
    var loc = window.location;
    history.pushState(null, null, hash ? loc.pathname + loc.search + hash : // remove hash
    loc.pathname + loc.search);
  } else {
    location.hash = hash;
  }
};

var getHash = function getHash() {
  return window.location.hash.replace(/^#/, "");
};

var filterElementInContainer = function filterElementInContainer(container) {
  return function (element) {
    return container.contains ? container != element && container.contains(element) : !!(container.compareDocumentPosition(element) & 16);
  };
};

var scrollOffset = function scrollOffset(c, t) {
  return c === document ? t.getBoundingClientRect().top + (window.scrollY || window.pageYOffset) : getComputedStyle(c).position !== "static" ? t.offsetTop : t.offsetTop - c.offsetTop;
};
exports.default = {
  pushHash: pushHash,
  getHash: getHash,
  filterElementInContainer: filterElementInContainer,
  scrollOffset: scrollOffset
};

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_ef0ff7c60362f24a921f ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_ef0ff7c60362f24a921f */ "dll-reference dll_ef0ff7c60362f24a921f"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/assets/images/OCT-10-YCOLL-114-1024x683.jpg":
/*!*********************************************************!*\
  !*** ./src/assets/images/OCT-10-YCOLL-114-1024x683.jpg ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/OCT-10-YCOLL-114-1024x683-ff03dc97ce8bcb49fcd71e8cef39167a.jpg";

/***/ }),

/***/ "./src/assets/images/constant-loubier-7lzIyp2Ork4-unsplash.jpg":
/*!*********************************************************************!*\
  !*** ./src/assets/images/constant-loubier-7lzIyp2Ork4-unsplash.jpg ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/constant-loubier-7lzIyp2Ork4-unsplash.9ff3b1c74da068c6fae1b37f55781eea.jpg";

/***/ }),

/***/ "./src/assets/images/emmanuel-WcrqKjgMPfI-unsplash.jpg":
/*!*************************************************************!*\
  !*** ./src/assets/images/emmanuel-WcrqKjgMPfI-unsplash.jpg ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/emmanuel-WcrqKjgMPfI-unsplash.f1d082c627c907a7b9eae7928b0999de.jpg";

/***/ }),

/***/ "./src/assets/images/florian-olivo-Mf23RF8xArY-unsplash.jpg":
/*!******************************************************************!*\
  !*** ./src/assets/images/florian-olivo-Mf23RF8xArY-unsplash.jpg ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/florian-olivo-Mf23RF8xArY-unsplash-15cd4360a3b3cf957cd378bbea7e8286.jpg";

/***/ }),

/***/ "./src/assets/images/jefferson-santos-9SoCnyQmkzI-unsplash.jpg":
/*!*********************************************************************!*\
  !*** ./src/assets/images/jefferson-santos-9SoCnyQmkzI-unsplash.jpg ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/jefferson-santos-9SoCnyQmkzI-unsplash-24330bea0436ab19a85560a55657467b.jpg";

/***/ }),

/***/ "./src/assets/images/jodyhongfilms-sI1mbxJFFpU-unsplash.jpg":
/*!******************************************************************!*\
  !*** ./src/assets/images/jodyhongfilms-sI1mbxJFFpU-unsplash.jpg ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/jodyhongfilms-sI1mbxJFFpU-unsplash.3f249f4d87f53a1aa543e5fbbea81c13.jpg";

/***/ }),

/***/ "./src/assets/images/two-white-hyperx-ram-stick-2582928.jpg":
/*!******************************************************************!*\
  !*** ./src/assets/images/two-white-hyperx-ram-stick-2582928.jpg ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/two-white-hyperx-ram-stick-2582928-6a31dd31abd7084a68d01d8cc0bddc13.jpg";

/***/ }),

/***/ "./src/components/ImageCarousel.js":
/*!*****************************************!*\
  !*** ./src/components/ImageCarousel.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-responsive-carousel */ "./node_modules/react-responsive-carousel/lib/index.js");
/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\offic\\Documents\\Dev\\_Web\\15_2-yc-esports\\src\\components\\ImageCarousel.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





function ImageCarousel(props) {
  const settings = {
    showArrows: true,
    showStatus: false,
    infiniteLoop: true,
    showThumbs: false,
    autoPlay: true,
    interval: 3000,
    transitionTime: 400,
    emulateTouch: true,
    dynamicHeight: false,
    statusFormatter: (c, t) => {
      return "Image ".concat(c, " of ").concat(t);
    }
  };
  return __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(props.classNames || ''),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, __jsx(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_4__["Carousel"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "carousel"
  }, settings, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }), props.images.map(image => __jsx("div", {
    key: image.altText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: image.source,
    alt: image.altText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 25
    }
  })))));
}

ImageCarousel.propTypes = {
  images: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired,
  classNames: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (ImageCarousel);

/***/ }),

/***/ "./src/components/LinkButton.js":
/*!**************************************!*\
  !*** ./src/components/LinkButton.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _LinkButton_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LinkButton.module.scss */ "./src/components/LinkButton.module.scss");
/* harmony import */ var _LinkButton_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_LinkButton_module_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\offic\\Documents\\Dev\\_Web\\15_2-yc-esports\\src\\components\\LinkButton.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function LinkButton(props) {
  let _colourClass;

  switch (props.colour) {
    case "white":
      _colourClass = _LinkButton_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.colourWhite;
      break;

    default:
      _colourClass = _LinkButton_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.colourBlue;
  }

  return __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_LinkButton_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.container, _colourClass, props.classNames),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: props.href,
    rel: "noopener noreferrer",
    target: props.newtab ? "_blank" : "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, props.children));
}

LinkButton.propTypes = {
  href: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  colour: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  classNames: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  newtab: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any
};
/* harmony default export */ __webpack_exports__["default"] = (LinkButton);

/***/ }),

/***/ "./src/components/LinkButton.module.scss":
/*!***********************************************!*\
  !*** ./src/components/LinkButton.module.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./LinkButton.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/LinkButton.module.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./LinkButton.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/LinkButton.module.scss",
      function () {
        var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./LinkButton.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/LinkButton.module.scss");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/data/subjectUnits.json":
/*!************************************!*\
  !*** ./src/data/subjectUnits.json ***!
  \************************************/
/*! exports provided: 0, 1, 2, 3, 4, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"colour\":\"green\",\"heading\":\"Strategy\",\"description\":\"Various gaming and coaching strategies will take your team to the finals, securing your victory\",\"relevantUnits\":[\"Short name\",\"Longer unit name\"]},{\"colour\":\"lilac\",\"heading\":\"Tactics\",\"description\":\"Great leadership and support skills will pin your team to the top of the leaderboard and make you undefeatable\",\"relevantUnits\":[\"Short name\",\"Longer unit name\"]},{\"colour\":\"orange\",\"heading\":\"Considerations\",\"description\":\"Learning what game designers consider when creating games can encourage you to think out-of-the-box during play\",\"relevantUnits\":[\"Short name\",\"Longer unit name\"]},{\"colour\":\"blue\",\"heading\":\"Production\",\"description\":\"Video production, livestreaming, and other media production skills will enable you to stand out in the modern world\",\"relevantUnits\":[\"Short name\",\"Longer unit name\"]},{\"colour\":\"brown\",\"heading\":\"Business\",\"description\":\"Your business and entrepreneurship skills will allow you to create a profitable business out of your team\",\"relevantUnits\":[\"Short name\",\"Longer unit name\"]}]");

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_LinkButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/LinkButton */ "./src/components/LinkButton.js");
/* harmony import */ var _components_ImageCarousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/ImageCarousel */ "./src/components/ImageCarousel.js");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index.module.scss */ "./src/pages/index.module.scss");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _data_subjectUnits_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../data/subjectUnits.json */ "./src/data/subjectUnits.json");
var _data_subjectUnits_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/subjectUnits.json */ "./src/data/subjectUnits.json", 1);
/* harmony import */ var _assets_images_jefferson_santos_9SoCnyQmkzI_unsplash_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/images/jefferson-santos-9SoCnyQmkzI-unsplash.jpg */ "./src/assets/images/jefferson-santos-9SoCnyQmkzI-unsplash.jpg");
/* harmony import */ var _assets_images_jefferson_santos_9SoCnyQmkzI_unsplash_jpg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_images_jefferson_santos_9SoCnyQmkzI_unsplash_jpg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _assets_images_florian_olivo_Mf23RF8xArY_unsplash_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/images/florian-olivo-Mf23RF8xArY-unsplash.jpg */ "./src/assets/images/florian-olivo-Mf23RF8xArY-unsplash.jpg");
/* harmony import */ var _assets_images_florian_olivo_Mf23RF8xArY_unsplash_jpg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_images_florian_olivo_Mf23RF8xArY_unsplash_jpg__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _assets_images_OCT_10_YCOLL_114_1024x683_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../assets/images/OCT-10-YCOLL-114-1024x683.jpg */ "./src/assets/images/OCT-10-YCOLL-114-1024x683.jpg");
/* harmony import */ var _assets_images_OCT_10_YCOLL_114_1024x683_jpg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_assets_images_OCT_10_YCOLL_114_1024x683_jpg__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _assets_images_two_white_hyperx_ram_stick_2582928_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../assets/images/two-white-hyperx-ram-stick-2582928.jpg */ "./src/assets/images/two-white-hyperx-ram-stick-2582928.jpg");
/* harmony import */ var _assets_images_two_white_hyperx_ram_stick_2582928_jpg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_assets_images_two_white_hyperx_ram_stick_2582928_jpg__WEBPACK_IMPORTED_MODULE_12__);

var _jsxFileName = "C:\\Users\\offic\\Documents\\Dev\\_Web\\15_2-yc-esports\\src\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






 // Data

 // Images



 // -- Deck








function elementEntryEdge(el) {
  var rect = el.getBoundingClientRect();
  console.log(rect.top, rect.right, rect.bottom, rect.left);
  if (rect.top >= 0 && rect.top < rect.bottom) return "top";else if (rect.top >= 0 && rect.top > rect.bottom) return "bottom";else return false;
}

function ScrollIndicator() {
  return __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.scrollIndicator,
    id: "scroll-indicator",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: "section-course",
    spy: true,
    smooth: true,
    offset: -128,
    duration: 600,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, __jsx("i", {
    className: "material-icons",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  }, "arrow_downward")));
} // todo: separate file


function SubjectTile(props) {
  const propTypes = {
    colour: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
    heading: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
    description: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
    relevantUnits: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string)
  };

  const getColour = colourProp => {
    //? The weird regex just capitalizes the first letter of colourProp
    return _index_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a["fru" + colourProp.replace(/^\w/, c => c.toUpperCase())];
  };

  return __jsx("li", {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_index_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.subjectTile, getColour(props.colour)),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.fruContainer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 77
    }
  }, __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.fruInterest,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }
  }, __jsx("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 17
    }
  }, props.heading), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 17
    }
  }, props.description)), __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.fruUnits,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }
  }, __jsx("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 17
    }
  }, "Relevant Units"), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 17
    }
  }, props.relevantUnits.map(unitName => __jsx("li", {
    key: unitName,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 61
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 80
    }
  }, unitName)))))));
}

function Home() {
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    function toPx(n) {
      return "".concat(n, "px");
    }

    function handleScrollIndicator(e) {
      if (window.scrollY > 64) {
        document.getElementById('scroll-indicator').classList.add(_index_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.hidden);
      } else {
        document.getElementById('scroll-indicator').classList.remove(_index_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.hidden);
      }
    } // function handleScrollDeltaAnimation(e) {
    //     const els = Array.from(document.getElementsByClassName(cn.heroImageWrapper));
    //     els.forEach(el => {
    //         const st = el.offsetTop - window.scrollY;
    //         const c = 64;
    //         const d = -40;
    //         //? ignore "style does not exist". It does exist.
    //         if (st > 0) {
    //             el.style.marginTop = toPx(-(c / st) * d);
    //             el.style.marginBottom = toPx((c / st) * d);
    //         }
    //     });
    // }


    function handleScroll(e) {
      handleScrollIndicator(e); // handleScrollDeltaAnimation(e);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // [] = run once on load

  return __jsx("div", {
    className: "page pageHome",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 9
    }
  }, __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_3__["Element"], {
    id: "section-home",
    name: "section-home",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.IMGbg1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_index_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.landingWrapper, _index_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.bgOverlayBlack),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 44
    }
  }, __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.landingContent,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 21
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 25
    }
  }, "Esports at Yeovil College"), __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 25
    }
  }, "Enrol Now to Study from September 2020"), __jsx(_components_LinkButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
    classNames: _index_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.linkButton,
    newtab: true,
    href: "http://yeovil.ac.uk/our-courses/?coursess=esports",
    colour: "blue",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 25
    }
  }, "Enrol Now")), __jsx(ScrollIndicator, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 21
    }
  })))), __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_3__["Element"], {
    id: "section-course",
    name: "section-course",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_index_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.heroWrapper, _index_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.heroImageLeft),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.heroContainer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 79
    }
  }, __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.heroImageWrapper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: _assets_images_jefferson_santos_9SoCnyQmkzI_unsplash_jpg__WEBPACK_IMPORTED_MODULE_9___default.a,
    alt: "People looking cheerful while examining work on a desk",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 25
    }
  }), __jsx(_components_LinkButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
    classNames: _index_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.linkButton,
    newtab: true,
    href: "http://yeovil.ac.uk/our-courses/?coursess=esports",
    colour: "blue",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 25
    }
  }, "Enrol - Save your place")), __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.sectionHeader,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 21
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 25
    }
  }, "The Course"), __jsx("p", {
    className: "extraLineSpacing",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 25
    }
  }, "Explore coaching, health and psychology, video production, and live broadcasting in the Esports BTEC National at ", __jsx("b", {
    className: "blue",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 142
    }
  }, "Yeovil\xA0College"), ". ")), __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.contentWrapper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 21
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 25
    }
  }, "The course includes a wide range of Esports units, spanning from enterprise and entrepreneurship, to video production and games design. Here\u2019s some of the units you could explore on this course."), __jsx("ul", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.listGrid,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 25
    }
  }, __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 29
    }
  }, "Video production"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 29
    }
  }, "Livestreaming and broadcasting"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 29
    }
  }, "Skills, strategies and analytics"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 29
    }
  }, "Esports coaching"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 29
    }
  }, "Esports enterprise and entrepreneurship"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 29
    }
  }, "Health and wellbeing"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 29
    }
  }, "Games design"), __jsx("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 29
    }
  }, "Computer networking")))))), __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_3__["Element"], {
    id: "section-subject",
    name: "section-subject",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_index_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.heroWrapper, _index_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.heroImageRight, _index_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.heroDark),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_index_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.heroContainer, _index_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.noBottomPadding),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 93
    }
  }, __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.heroImageWrapper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: _assets_images_florian_olivo_Mf23RF8xArY_unsplash_jpg__WEBPACK_IMPORTED_MODULE_10___default.a,
    alt: "People looking cheerful while examining work on a desk",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.sectionHeader,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 21
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 25
    }
  }, "The Subject"), __jsx("p", {
    className: "extraLineSpacing",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 25
    }
  }, "Esports isn't just about gaming - it's the passion and work behind the teams. The business and technological skills empowering those behind the keyboard.")), __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.contentWrapper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 21
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 25
    }
  }, "See what's involved in Esports below. Hover or tap to see relevant course units."), __jsx("ul", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.flexRelevantUnits,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 25
    }
  }, _data_subjectUnits_json__WEBPACK_IMPORTED_MODULE_8__.map(unit => __jsx(SubjectTile, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    key: unit.heading
  }, unit, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 55
    }
  })))))))), __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_3__["Element"], {
    id: "section-deck",
    name: "section-deck",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.IMGbg2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_index_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.sectionWrapper, _index_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.bgOverlayBlack),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 44
    }
  }, __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.sectionContainer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 110
    }
  }, __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.sectionHeader,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 21
    }
  }, __jsx("h2", {
    className: "teal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 25
    }
  }, "The Deck"), __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 25
    }
  }, "A state-of-the-art computer suite for students")), __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_index_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.contentWrapper, _index_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.noTopMargin),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.imageContainer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 25
    }
  }, __jsx(_components_ImageCarousel__WEBPACK_IMPORTED_MODULE_6__["default"], {
    classNames: _index_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.imageCarousel,
    images: [{
      source: _assets_images_two_white_hyperx_ram_stick_2582928_jpg__WEBPACK_IMPORTED_MODULE_12___default.a,
      altText: "a"
    }, {
      source: _assets_images_two_white_hyperx_ram_stick_2582928_jpg__WEBPACK_IMPORTED_MODULE_12___default.a,
      altText: "b"
    }, {
      source: _assets_images_two_white_hyperx_ram_stick_2582928_jpg__WEBPACK_IMPORTED_MODULE_12___default.a,
      altText: "c"
    }, {
      source: _assets_images_two_white_hyperx_ram_stick_2582928_jpg__WEBPACK_IMPORTED_MODULE_12___default.a,
      altText: "d"
    }, {
      source: _assets_images_two_white_hyperx_ram_stick_2582928_jpg__WEBPACK_IMPORTED_MODULE_12___default.a,
      altText: "e"
    }, {
      source: _assets_images_two_white_hyperx_ram_stick_2582928_jpg__WEBPACK_IMPORTED_MODULE_12___default.a,
      altText: "f"
    }],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 29
    }
  })), __jsx("p", {
    className: "white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 25
    }
  }, "Our brand-new computer lab, ", __jsx("b", {
    className: "teal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 57
    }
  }, "The Deck"), ", is host to 12 state-of-the-art computer systems, specifically built for developing and playing games"), __jsx(_components_LinkButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
    classNames: _index_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.linkButton,
    newtab: true,
    href: "https://www.yeovil.ac.uk/student-life/your-space/",
    colour: "blue",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 25
    }
  }, "Explore our Campus")))))), __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_3__["Element"], {
    id: "section-college",
    name: "section-college",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_index_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.sectionWrapper),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.sectionContainer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 64
    }
  }, __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.sectionHeader,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 21
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 25
    }
  }, "The College"), __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 25
    }
  }, "Helping young people achieve their potential")), __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_index_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.contentWrapper, _index_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.noTopMargin),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.imageContainer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272,
      columnNumber: 25
    }
  }, __jsx("img", {
    src: _assets_images_OCT_10_YCOLL_114_1024x683_jpg__WEBPACK_IMPORTED_MODULE_11___default.a,
    alt: "Yeovil College main reception",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 29
    }
  })), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276,
      columnNumber: 25
    }
  }, "We offer a ", __jsx("b", {
    className: "blue",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277,
      columnNumber: 40
    }
  }, "digital-first approach"), " to learning, making our college the best option for the BTEC National in Esports. An advanced computer lab, various campus facilities, and opportunities for extra-curricular learning allow all students to achieve their potential and succeed in their future career."), __jsx(_components_LinkButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
    classNames: _index_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.linkButton,
    newtab: true,
    href: "https://www.yeovil.ac.uk/student-life/your-space/",
    colour: "blue",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 25
    }
  }, "Why Yeovil College?"))))), __jsx(react_scroll__WEBPACK_IMPORTED_MODULE_3__["Element"], {
    id: "section-enrol",
    name: "section-enrol",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.IMGbg3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_index_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.sectionWrapper, _index_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.bgOverlayBlue),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 44
    }
  }, __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.sectionContainer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286,
      columnNumber: 109
    }
  }, __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.sectionHeader,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 21
    }
  }, __jsx("h2", {
    className: "white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288,
      columnNumber: 25
    }
  }, "Ready?"), __jsx("p", {
    className: "grey extraLineSpacing",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 25
    }
  }, "Think you\u2019ve got what it takes? We\u2019d love to have you.")), __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_index_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.contentWrapper, _index_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.noTopMargin),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 21
    }
  }, __jsx("p", {
    className: "white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 25
    }
  }, "Become a coach or wellbeing specialist and guide a team to victory, or shape a team into a business with your analysis and entrepreneurship skills. Find out more about the course or enrol now."), __jsx("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.buttonContainer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 25
    }
  }, __jsx(_components_LinkButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
    classNames: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_index_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.linkButton, "colourWhite"),
    newtab: true,
    href: "https://www.yeovil.ac.uk/student-life/your-space/",
    colour: "white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 29
    }
  }, "Enrol Now"), __jsx(_components_LinkButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
    classNames: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_index_module_scss__WEBPACK_IMPORTED_MODULE_7___default.a.linkButton, "colourWhite"),
    newtab: true,
    href: "https://www.yeovil.ac.uk/student-life/your-space/",
    colour: "white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305,
      columnNumber: 29
    }
  }, "More Info"))))))));
}

/***/ }),

/***/ "./src/pages/index.module.scss":
/*!*************************************!*\
  !*** ./src/pages/index.module.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./index.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/pages/index.module.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./index.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/pages/index.module.scss",
      function () {
        var newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./index.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/pages/index.module.scss");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ 1:
/*!*********************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F&absolutePagePath=C%3A%5CUsers%5Coffic%5CDocuments%5CDev%5C_Web%5C15_2-yc-esports%5Csrc%5Cpages%5Cindex.js ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F&absolutePagePath=C%3A%5CUsers%5Coffic%5CDocuments%5CDev%5C_Web%5C15_2-yc-esports%5Csrc%5Cpages%5Cindex.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5CUsers%5Coffic%5CDocuments%5CDev%5C_Web%5C15_2-yc-esports%5Csrc%5Cpages%5Cindex.js!./");


/***/ }),

/***/ "dll-reference dll_ef0ff7c60362f24a921f":
/*!*******************************************!*\
  !*** external "dll_ef0ff7c60362f24a921f" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_ef0ff7c60362f24a921f;

/***/ })

},[[1,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=index.js.map