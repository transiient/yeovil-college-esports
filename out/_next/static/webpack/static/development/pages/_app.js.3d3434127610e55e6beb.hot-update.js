webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/App.scss":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-6-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./src/App.scss ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, "html {\n  scrollbar-width: thin;\n  scrollbar-color: #21447c #191919; }\n  @media only screen and (min-width: 640px) {\n    html::-webkit-scrollbar {\n      width: 11px; }\n    html::-webkit-scrollbar-track {\n      background-color: #191919; }\n    html::-webkit-scrollbar-thumb {\n      background-color: #21447c;\n      border-radius: 4px;\n      border: 2px solid #191919; } }\n\nbody {\n  overflow-x: hidden;\n  font-family: \"Nunito\", \"Roboto\", \"Open Sans\", sans-serif;\n  font-size: 16px;\n  background-color: #fafafa; }\n\n* {\n  -webkit-touch-callout: none;\n  /* iOS Safari */\n  -webkit-user-select: none;\n  /* Safari */\n  /* Internet Explorer/Edge */\n  user-select: none;\n  /* Chrome, Opera, Firefox */ }\n\np,\ni:not(.material-icons),\nb,\nli:not(.noselect) {\n  -webkit-touch-callout: default;\n  -webkit-user-select: text;\n  user-select: text; }\n\na {\n  display: inline-block;\n  color: #191919;\n  text-decoration: none;\n  transition: 0.14s; }\n  a.inlineLink:hover {\n    color: #21447c; }\n\nh1 {\n  font-family: \"Fugaz One\", \"Roboto\", \"Open Sans\", sans-serif;\n  font-size: 3em;\n  text-transform: uppercase; }\n\nh2 {\n  font-family: \"Fugaz One\", \"Roboto\", \"Open Sans\", sans-serif;\n  font-size: 2.4em;\n  text-transform: uppercase;\n  color: #21447c; }\n  h2.white {\n    color: white; }\n\nh3 {\n  font-size: 1.2em;\n  line-height: 1.4em;\n  text-transform: uppercase;\n  color: #747588; }\n\nh4 {\n  font-family: \"Fugaz One\", \"Roboto\", \"Open Sans\", sans-serif;\n  font-size: 1.2em;\n  text-transform: uppercase; }\n\np {\n  max-width: 80ch;\n  margin: 0 auto;\n  line-height: 1.2em; }\n  p.extraLineSpacing {\n    line-height: 1.4em; }\n  p.grey {\n    color: #cfcfcf; }\n  p.white {\n    color: white; }\n\nb {\n  font-weight: bold; }\n\n.blue {\n  color: #21447c; }\n\n.teal {\n  color: #27c9a2; }\n", "",{"version":3,"sources":["App.scss","Variables.scss"],"names":[],"mappings":"AAEA;EAmBI,qBAAqB;EACrB,gCClBiB,EAAA;EDGjB;IALJ;MAOY,WAAW,EAAA;IAPvB;MAUY,yBCRS,EAAA;IDFrB;MAaY,yBCRU;MDSV,kBAAkB;MAClB,yBCbS,EAAA,EDcZ;;AAOT;EACI,kBAAkB;EAElB,wDCPoD;EDQpD,eAAe;EAEf,yBC5BiB,EAAA;;AD+BrB;EACI,2BAA2B;EAAE,eAAA;EAC7B,yBAAyB;EAAE,WAAA;EACJ,2BAAA;EACvB,iBAAiB;EAAE,2BAAA,EAA4B;;AAEnD;;;;EAII,8BAA8B;EAC9B,yBAAyB;EAEzB,iBAAiB,EAAA;;AAGrB;EACI,qBAAqB;EACrB,cCpDsB;EDqDtB,qBAAqB;EAErB,iBCtCwB,EAAA;EDiC5B;IASY,cCpDU,EAAA;;ADyDtB;EACI,2DC7C0D;ED8C1D,cAAc;EAEd,yBAAyB,EAAA;;AAG7B;EACI,2DCpD0D;EDqD1D,gBAAgB;EAEhB,yBAAyB;EAEzB,cCtEkB,EAAA;EDgEtB;IASQ,YAAY,EAAA;;AAIpB;EACI,gBAAgB;EAEhB,kBAAkB;EAElB,yBAAyB;EAEzB,cCrFgC,EAAA;;ADwFpC;EACI,2DC3E0D;ED4E1D,gBAAgB;EAEhB,yBAAyB,EAAA;;AAG7B;EACI,eAAe;EACf,cAAc;EAEd,kBAAkB,EAAA;EAJtB;IAOQ,kBAAkB,EAAA;EAP1B;IAUQ,cAAyB,EAAA;EAVjC;IAaQ,YAAY,EAAA;;AAIpB;EACI,iBAAiB,EAAA;;AAErB;EACI,cCnHkB,EAAA;;ADqHtB;EACI,cCpHgB,EAAA","file":"App.scss","sourcesContent":["@import \"./Variables.scss\";\r\n\r\nhtml {\r\n    // Scrollbar Styles\r\n    //  Custom page scrollbar only displayed on devices above\r\n    //  $media_screen_max_width, otherwise the bar takes up\r\n    //  space on the page, and it feels cluttered.\r\n    @media only screen and (min-width: $media_screen_max_width) {\r\n        &::-webkit-scrollbar {\r\n            width: 11px;\r\n        }\r\n        &::-webkit-scrollbar-track {\r\n            background-color: $color_black;\r\n        }\r\n        &::-webkit-scrollbar-thumb {\r\n            background-color: $color_ycblue;\r\n            border-radius: 4px;\r\n            border: 2px solid $color_black;\r\n        }\r\n    }\r\n    // Applies to nested scrollbars\r\n    scrollbar-width: thin;\r\n    scrollbar-color: $color_ycblue $color_black;\r\n}\r\n\r\nbody {\r\n    overflow-x: hidden; //! remove X-axis scrollbar, idk why it's there anyway\r\n\r\n    font-family: $fonts_body;\r\n    font-size: 16px;\r\n\r\n    background-color: $color_white;\r\n}\r\n\r\n* {\r\n    -webkit-touch-callout: none; /* iOS Safari */\r\n    -webkit-user-select: none; /* Safari */\r\n    -ms-user-select: none; /* Internet Explorer/Edge */\r\n    user-select: none; /* Chrome, Opera, Firefox */\r\n}\r\np,\r\ni:not(.material-icons),\r\nb,\r\nli:not(.noselect) {\r\n    -webkit-touch-callout: default;\r\n    -webkit-user-select: text;\r\n    -ms-user-select: text;\r\n    user-select: text;\r\n}\r\n\r\na {\r\n    display: inline-block;\r\n    color: $color_foreground;\r\n    text-decoration: none;\r\n\r\n    transition: $transition_time_link;\r\n\r\n    &.inlineLink {\r\n        &:hover {\r\n            color: $color_ycblue;\r\n        }\r\n    }\r\n}\r\n\r\nh1 {\r\n    font-family: $fonts_heading;\r\n    font-size: 3em;\r\n\r\n    text-transform: uppercase;\r\n}\r\n\r\nh2 {\r\n    font-family: $fonts_heading;\r\n    font-size: 2.4em;\r\n\r\n    text-transform: uppercase;\r\n\r\n    color: $color_ycblue;\r\n\r\n    &.white {\r\n        color: white;\r\n    }\r\n}\r\n\r\nh3 {\r\n    font-size: 1.2em;\r\n\r\n    line-height: 1.4em;\r\n\r\n    text-transform: uppercase;\r\n\r\n    color: $color_grey_dark;\r\n}\r\n\r\nh4 {\r\n    font-family: $fonts_heading;\r\n    font-size: 1.2em;\r\n\r\n    text-transform: uppercase;\r\n}\r\n\r\np {\r\n    max-width: 80ch;\r\n    margin: 0 auto; //todo: this might need modifying as it could break appearance of some text content\r\n\r\n    line-height: 1.2em;\r\n\r\n    &.extraLineSpacing {\r\n        line-height: 1.4em;\r\n    }\r\n    &.grey {\r\n        color: darken(white, 19%);\r\n    }\r\n    &.white {\r\n        color: white;\r\n    }\r\n}\r\n\r\nb {\r\n    font-weight: bold;\r\n}\r\n.blue {\r\n    color: $color_ycblue;\r\n}\r\n.teal {\r\n    color: $color_teal;\r\n}\r\n","$color_foreground: #191919;\r\n$color_background: #fafafa;\r\n\r\n$color_white: #fafafa;\r\n$color_black: #191919;\r\n$color_grey: #dadada;\r\n$color_grey_dark: rgb(116, 117, 136);\r\n$color_ycblue: #21447c;\r\n$color_purple: #736eab;\r\n$color_teal: #27c9a2;\r\n\r\n$color_green: #56d763;\r\n$color_lilac: #a952d1;\r\n$color_orange: #ec712c;\r\n$color_blue: #5f6deb;\r\n$color_brown: #be4e1e;\r\n\r\n$transition_time_link: 0.14s;\r\n$transition_time_movement: 0.19s;\r\n\r\n$fonts_heading: \"Fugaz One\", \"Roboto\", \"Open Sans\", sans-serif;\r\n$fonts_body: \"Nunito\", \"Roboto\", \"Open Sans\", sans-serif;\r\n\r\n$box_shadow_light: 0 4px 8px rgba(0, 0, 0, 0.2);\r\n\r\n$media_screen_max_width: 640px;\r\n"]}]);


/***/ }),

/***/ "./src/App.scss":
/*!**********************!*\
  !*** ./src/App.scss ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./App.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/App.scss");

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

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./App.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/App.scss",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./App.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/App.scss");

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

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-responsive-carousel/lib/styles/carousel.min.css */ "./node_modules/react-responsive-carousel/lib/styles/carousel.min.css");
/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../App.scss */ "./src/App.scss");
/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_App_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_ImageCarousel_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ImageCarousel.scss */ "./src/components/ImageCarousel.scss");
/* harmony import */ var _components_ImageCarousel_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_ImageCarousel_scss__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\offic\\Documents\\Dev\\_Web\\15_2-yc-esports\\src\\pages\\_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
// -- Package CSS --
 // -- Custom CSS --



function App({
  Component,
  pageProps
}) {
  return __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 12
    }
  }));
}

/***/ })

})
//# sourceMappingURL=_app.js.3d3434127610e55e6beb.hot-update.js.map