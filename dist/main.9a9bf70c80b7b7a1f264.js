/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/menu.js":
/*!************************!*\
  !*** ./src/js/menu.js ***!
  \************************/
/***/ (function() {

var header = document.querySelector('.header');
var button = document.querySelector('.header__burger');
var menu = document.querySelector('.menu');
var contact = document.querySelector('.contact_block');
button.addEventListener('click', function (e) {
  e.preventDefault();
  header.classList.toggle('header_active');

  if (header.classList.contains('header_active') && window.screen.width <= 500) {
    menu.style = 'display: flex';
    contact.style = 'display: flex';
  } else if (header.classList.contains('header_active')) {
    menu.style = 'display: flex';
  } else if (window.screen.width <= 500) {
    contact.style = '';
    menu.style = '';
  } else {
    menu.style = '';
  }
});

/***/ }),

/***/ "./src/js/more_cards.js":
/*!******************************!*\
  !*** ./src/js/more_cards.js ***!
  \******************************/
/***/ (function() {

var cards = document.querySelector('.cards__body');
var button = document.querySelector('.more_button');

function getRandomInt(max) {
  return Math.floor(Math.random() * max) + 1;
}

button.addEventListener('click', function (e) {
  e.preventDefault();

  for (var i = 0; i < 6; i++) {
    fetch("https://jsonplaceholder.typicode.com/posts/".concat(getRandomInt(100))).then(function (response) {
      return response.json();
    }).then(function (json) {
      var el = document.createElement('div');
      el.className = 'cards__card card';
      el.innerHTML = "\n                    <img src=\"./assets/card".concat(getRandomInt(10), ".jpg\" alt=\"card\">\n                    <div class=\"card__body\">\n                        <div class=\"card__title\">bridge</div>\n                        <div class=\"card__subtitle\">").concat(json.title, "</div>\n                        <div class=\"card__text\">").concat(json.body, "</div>\n                        <div class=\"card__info\">Posted by <span>Eugenia</span>, on July  24, 2019</div>\n                        <button class=\"card__button\">Continue reading</button>\n                    </div>\n                ");
      cards.append(el);
    });
  }
});

/***/ }),

/***/ "./src/js/popup.js":
/*!*************************!*\
  !*** ./src/js/popup.js ***!
  \*************************/
/***/ (function() {

var buttons = document.querySelectorAll('.popup_button');
buttons.forEach(function (item) {
  item.addEventListener('click', function (e) {
    e.preventDefault();
    var el = document.createElement('div');
    el.className = 'popup';
    el.innerHTML = "\n            <div class=\"popup__body\">\n                <img src=\"./assets/moon.png\" alt=\"moon\">\n                <form action=\"\" class=\"popup__form form\">\n                    <div class=\"form__title title\"><h1>\u041E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u0437\u0430\u044F\u0432\u043A\u0443</h1></div>\n                    <div class=\"form__text\">\u041E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u0437\u0430\u044F\u0432\u043A\u0443 \u0438 \u043D\u0430\u0448 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 \u0441\u0432\u044F\u0436\u0435\u0442\u0441\u044F \u0441 \u0432\u0430\u043C\u0438<br>\n                        \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 10-15 \u043C\u0438\u043D\u0443\u0442</div>\n                    <input type=\"text\" placeholder=\"\u0412\u0430\u0448\u0435 \u0438\u043C\u044F*\">\n                    <input type=\"text\" placeholder=\"MAGWAI@info.ru\">\n                    <input type=\"text\" placeholder=\"+7(___)\">\n                    <input type=\"text\" placeholder=\"\u0412\u0430\u0448 \u0432\u043E\u043F\u0440\u043E\u0441*\">\n                    <div class=\"form__send send\">\n                        <div class=\"send__skew skew\">\n                            <button class=\"skew__button\"><span>\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443</span></button>\n                            <div class=\"skew__line\"></div>\n                        </div>\n                        <div class=\"send__text\">\u041D\u0430\u0436\u0438\u043C\u0430\u044F \u043D\u0430 \u043A\u043D\u043E\u043F\u043A\u0443 \u201C\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443\u201D \u0432\u044B<br>\u0441\u043E\u0433\u043B\u0430\u0448\u0430\u0435\u0442\u0435\u0441\u044C<br><u>\u0441 \u201C\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u043C \u0441\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435\u043C\u201D</u></div>\n                    </div>\n                    <button class=\"form__close\">\n                        <img src=\"./assets/close.svg\" alt=\"close\">\n                    </button>\n                </form>\n            </div>\n        ";
    document.body.append(el);
    var close = document.querySelector('.form__close');
    close.addEventListener('click', function (e) {
      e.preventDefault();
      el.remove();
    });
  });
});

/***/ }),

/***/ "./src/js/tabs.js":
/*!************************!*\
  !*** ./src/js/tabs.js ***!
  \************************/
/***/ (function() {

var tabs = document.querySelectorAll('.tabs__element');
var start = document.querySelector('.start');
var title = document.querySelector('.info__title');
var text = document.querySelector('.info__text');
start.style.background = "linear-gradient(to bottom, rgba(19, 19, 19, 0) 40%, #131313 100%), url(./assets/background_earth.jpg) bottom";
tabs.forEach(function (item, i) {
  item.addEventListener('click', function (e) {
    e.preventDefault();
    tabs.forEach(function (item) {
      item.classList.remove('active_tab');
    });
    tabs[i].classList.add('active_tab');

    if (i === 0) {
      title.innerHTML = '<h1>Полет Илона Маска<br>и Dogie coin</h1>';
      text.innerHTML = 'В прошлый четверг все офигели от полета <span>Dogie coin</span> на марс';
      start.style = 'background: linear-gradient(to bottom, rgba(19, 19, 19, 0) 40%, #131313 100%), url(./assets/background_earth.jpg) bottom';
    } else if (i === 1) {
      title.innerHTML = '<h1>Dogie coin<br>упал</h1>';
      text.innerHTML = 'Все в шоке, я потерял все деньги';
      start.style = 'background: linear-gradient(to bottom, rgba(19, 19, 19, 0) 40%, #131313 100%), url(./assets/background_car.jpg) bottom';
    } else if (i === 2) {
      title.innerHTML = '<h1>Эпическое возвращения<br>на хаи</h1>';
      text.innerHTML = 'Все в шоке, я снова богат';
      start.style = 'background: linear-gradient(to bottom, rgba(19, 19, 19, 0) 40%, #131313 100%), url(./assets/background_money.jpg) bottom';
    }
  });
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss ***!
  \**********************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Montserrat-Bold.ttf */ "./src/fonts/Montserrat-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Montserrat-Regular.ttf */ "./src/fonts/Montserrat-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Montserrat-SemiBold.ttf */ "./src/fonts/Montserrat-SemiBold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Mulish-Bold.ttf */ "./src/fonts/Mulish-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Mulish-Regular.ttf */ "./src/fonts/Mulish-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Mulish-SemiBold.ttf */ "./src/fonts/Mulish-SemiBold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Lucida-Grande-Bold.ttf */ "./src/fonts/Lucida-Grande-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  padding: 0;\n  margin: 0;\n  border: 0;\n}\n\n*, *:before, *:after {\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\na {\n  text-decoration: none;\n  color: inherit;\n}\n\n:focus, :active {\n  outline: none;\n}\n\na:focus, a:active {\n  outline: none;\n  color: inherit;\n}\n\nnav, footer, header, aside {\n  display: block;\n}\n\nhtml, body {\n  height: 100%;\n  width: 100%;\n  font-size: 100%;\n  line-height: 1;\n  -ms-text-size-adjust: 100%;\n  -moz-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n  background-color: #131313;\n  color: #FFFFFF;\n  font-family: MontserratBold;\n  font-size: 14px;\n}\n\ninput, button, textarea {\n  font-family: inherit;\n}\n\ninput::-ms-clear {\n  display: none;\n}\n\nbutton {\n  cursor: pointer;\n}\n\nbutton::-moz-focus-inner {\n  padding: 0;\n  border: 0;\n}\n\na, a:visited {\n  text-decoration: none;\n}\n\na:hover {\n  text-decoration: none;\n}\n\nul, ol, li {\n  list-style: none;\n}\n\nimg {\n  vertical-align: top;\n}\n\nh1, h2, h3, h4, h5, h6 {\n  font-size: inherit;\n}\n\nbutton {\n  background-color: inherit;\n  color: #FFFFFF;\n}\n\n@font-face {\n  font-family: MontserratBold;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\");\n}\n@font-face {\n  font-family: MontserratRegular;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"truetype\");\n}\n@font-face {\n  font-family: MontserratSemiBold;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"truetype\");\n}\n@font-face {\n  font-family: MulishBold;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"truetype\");\n}\n@font-face {\n  font-family: MulishRegular;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"truetype\");\n}\n@font-face {\n  font-family: MulishSemiBold;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format(\"truetype\");\n}\n@font-face {\n  font-family: LucidaGrandeBold;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") format(\"truetype\");\n}\n.header {\n  z-index: 50;\n  position: fixed;\n  display: inline-block;\n  background-color: #131313;\n}\n.header__body {\n  max-height: 120px;\n  width: 100vw;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 28px 0px;\n}\n.header__burger {\n  display: none;\n}\n.header__logo {\n  margin-right: 4vw;\n}\n\n.menu {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  gap: 2.1vw;\n  margin-right: 13.5vw;\n}\n.menu__element {\n  white-space: nowrap;\n  text-transform: uppercase;\n  line-height: 150%;\n  font-size: 14px;\n  -webkit-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n.menu__element:hover {\n  color: #C2AB81;\n}\n\n.contact {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.contact__phone {\n  padding: 14px 19px;\n  margin-right: 1.5vw;\n  border: 1px solid #727272;\n  -webkit-transform: skewX(-15deg);\n          transform: skewX(-15deg);\n  -webkit-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n.contact__phone img {\n  -webkit-transform: skewX(15deg);\n          transform: skewX(15deg);\n}\n.contact__phone:hover {\n  background-color: #C2AB81;\n  border: 1px solid #FFFFFF;\n}\n\n.skew {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n.skew__button {\n  white-space: nowrap;\n  margin-right: 5px;\n  padding: 21px 3.5vw;\n  background-color: #C2AB81;\n  -webkit-transform: skewX(-15deg);\n          transform: skewX(-15deg);\n  text-transform: uppercase;\n  font-size: 12px;\n  line-height: 150%;\n  -webkit-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n.skew__button span {\n  display: block;\n  -webkit-transform: skewX(15deg);\n          transform: skewX(15deg);\n}\n.skew__button:hover {\n  background-color: #FFFFFF;\n  color: #C2AB81;\n}\n.skew__button:hover + .skew__line {\n  -webkit-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n  background-color: #C2AB81;\n}\n.skew__line {\n  padding: 29px 4px;\n  background-color: #FFFFFF;\n  -webkit-transform: skewX(-15deg);\n          transform: skewX(-15deg);\n}\n\n.menu_active {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.header_active {\n  height: 100vh;\n}\n\n@media (max-width: 1600px) {\n  .header__logo {\n    margin-right: 2vw;\n  }\n  .menu {\n    margin-right: 2vw;\n  }\n}\n@media (max-width: 1300px) {\n  .contact_block {\n    display: none;\n  }\n}\n@media (max-width: 1023px) {\n  .menu {\n    display: none;\n    position: absolute;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-align: start;\n        -ms-flex-align: start;\n            align-items: flex-start;\n    gap: 15px;\n    top: 164px;\n    margin-left: 30px;\n  }\n  .menu__element {\n    font-size: 36px;\n  }\n  .header__body {\n    gap: 1vw;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    padding: 28px 15px;\n  }\n  .header__burger {\n    display: block;\n  }\n  .contact_block {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n  }\n}\n@media (max-width: 500px) {\n  .header__body {\n    padding: 5px 15px;\n  }\n  .menu {\n    top: 70px;\n    margin-left: 5px;\n  }\n  .menu__element {\n    font-size: 20px;\n  }\n  .skew_full {\n    width: 100%;\n  }\n  .line_del {\n    display: none;\n  }\n  .contact {\n    gap: 10px;\n  }\n  .contact__phone {\n    width: 100%;\n    margin-right: none;\n  }\n  .contact_block {\n    display: none;\n    position: absolute;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    top: 480px;\n    -webkit-transform: translate(0%, -50%);\n            transform: translate(0%, -50%);\n    right: 5%;\n    width: 90vw;\n  }\n}\n.start {\n  z-index: 10;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  min-height: 100vh;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 16vh 5vw;\n}\n.start > img {\n  display: none;\n}\n\n.info {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  gap: 40px;\n  max-width: 686px;\n}\n.info__text {\n  font-family: MontserratRegular;\n  font-size: 16px;\n  line-height: 150%;\n  opacity: 0.79;\n}\n.info__text span {\n  text-transform: uppercase;\n}\n\n.tabs {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n  gap: 15px;\n}\n.tabs__element {\n  font-family: MontserratRegular;\n  text-transform: uppercase;\n  line-height: 150%;\n  opacity: 0.6;\n  -webkit-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n.tabs__element:hover {\n  opacity: 1;\n}\n\n.title {\n  text-transform: uppercase;\n  font-size: 42px;\n  line-height: 122%;\n}\n\n.active_page {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.active_tab {\n  font-family: MontserratBold;\n  opacity: 1;\n}\n\n@media (max-width: 750px) {\n  .start {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    gap: 10vh;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n  }\n  .info {\n    margin-top: 10vh;\n  }\n  .info__contact {\n    margin: 0 auto;\n  }\n  .tabs {\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n  }\n  .title {\n    text-align: center;\n  }\n}\n@media (max-width: 400px) {\n  .start {\n    padding-bottom: 5vh;\n  }\n  .info {\n    margin-top: 3vh;\n  }\n  .title {\n    font-size: 30px;\n  }\n}\n.cards {\n  margin: 53px 100px 0px 100px;\n  padding-bottom: 20vh;\n}\n.cards__title {\n  margin-bottom: 53px;\n}\n.cards__body {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  margin: 0px 15px;\n  gap: 30px;\n}\n.cards__skew {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin-top: 60px;\n}\n\n.card {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background-color: #FFFFFF;\n  min-height: 650px;\n  max-width: 320px;\n  -webkit-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n.card:hover {\n  -webkit-box-shadow: 0 0 20px #C2AB81;\n          box-shadow: 0 0 20px #C2AB81;\n}\n.card__body {\n  margin: 25px 23px 30px 23px;\n  font-family: MontserratRegular;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  gap: 20px;\n}\n.card__title {\n  text-transform: uppercase;\n  font-family: MulishBold;\n  font-size: 14px;\n  line-height: 185%;\n  letter-spacing: 1.5px;\n  color: #171717;\n}\n.card__subtitle {\n  font-family: MontserratRegular;\n  font-size: 16px;\n  line-height: 26px;\n  color: #171717;\n}\n.card__text {\n  font-family: MontserratRegular;\n  font-size: 14px;\n  line-height: 24px;\n  color: #666666;\n}\n.card__info {\n  font-size: 12px;\n  line-height: 24px;\n  color: #666666;\n}\n.card__info span {\n  font-family: MontserratBold;\n}\n.card__button {\n  font-family: MulishSemiBold;\n  background-color: #171717;\n  display: block;\n  padding: 16px 0px;\n  -webkit-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n.card__button:hover {\n  background-color: #C2AB81;\n}\n\n@media (max-width: 1023px) {\n  .cards {\n    margin: 53px 0px 0px 0px;\n  }\n  .cards__title {\n    text-align: center;\n  }\n}\n@media (max-width: 699px) {\n  .card {\n    min-height: 450px;\n    max-width: 200px;\n  }\n  .card img {\n    max-width: 200px;\n  }\n  .card__text {\n    display: none;\n  }\n}\n@media (max-width: 459px) {\n  .card {\n    max-width: 90vw;\n    min-height: none;\n  }\n  .card__title {\n    text-align: center;\n    font-size: 20px;\n  }\n  .card__subtitle {\n    text-align: center;\n  }\n  .card__info {\n    text-align: center;\n  }\n  .card img {\n    min-width: 90vw;\n  }\n}\n.popup {\n  background-color: #131313;\n  z-index: 100;\n  position: fixed;\n  top: 15%;\n  right: 5%;\n  -webkit-transform: translate(0%, -50%);\n          transform: translate(0%, -50%);\n  width: 90vw;\n  height: 80vh;\n  -webkit-transform: skewX(-3deg);\n          transform: skewX(-3deg);\n}\n.popup__body {\n  -webkit-transform: skewX(3deg);\n          transform: skewX(3deg);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  margin: 20px;\n}\n.popup__body img {\n  max-height: 70vh;\n}\n\n.form {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  gap: 20px;\n}\n.form__text {\n  font-family: MontserratRegular;\n  font-size: 14px;\n  line-height: 150%;\n  color: #808080;\n  margin-bottom: 30px;\n}\n.form__close {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  width: 100px;\n  height: 70px;\n  border: 1px solid #727272;\n  -webkit-transform: skewX(-15deg);\n          transform: skewX(-15deg);\n}\n.form__close img {\n  width: 40px;\n  height: 40px;\n  -webkit-transform: skewX(15deg);\n          transform: skewX(15deg);\n}\n.form__close:hover {\n  background-color: #C2AB81;\n  border: 1px solid #FFFFFF;\n}\n.form input {\n  padding-left: 36px;\n  background-color: inherit;\n  height: 3.5vw;\n  border: 1px solid #2B2B2B;\n  font-size: 16px;\n  line-height: 20px;\n  color: inherit;\n}\n.form input:focus {\n  border: 1px solid #666666;\n}\n.form input::-webkit-input-placeholder {\n  color: #666666;\n}\n.form input::-moz-placeholder {\n  color: #666666;\n}\n.form input:-ms-input-placeholder {\n  color: #666666;\n}\n.form input::-ms-input-placeholder {\n  color: #666666;\n}\n.form input::placeholder {\n  color: #666666;\n}\n\n.send {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  gap: 1.5vw;\n}\n.send__text {\n  font-family: MontserratRegular;\n  font-size: 14px;\n  line-height: 150%;\n  color: #808080;\n}\n.send__text > u {\n  cursor: pointer;\n  -webkit-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n}\n.send__text > u:hover {\n  color: #FFFFFF;\n}\n\n@media (max-width: 1620px) {\n  .form {\n    margin-right: 150px;\n  }\n  .send {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n  }\n  .send__skew {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n  }\n  .send__text {\n    margin: 0 auto;\n  }\n}\n@media (max-width: 1280px) {\n  .popup__body {\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n  }\n  .popup__body > img {\n    display: none;\n  }\n  .form {\n    padding-top: 80px;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    margin: 0 0;\n  }\n}\n@media (max-width: 500px) {\n  .form input {\n    height: 20px;\n  }\n}\n@media (max-height: 1000px) {\n  .form {\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n  }\n}\n@media (max-height: 750px) {\n  .form__text {\n    display: none;\n  }\n}", "",{"version":3,"sources":["webpack://./src/styles/_null.scss","webpack://./src/styles/index.scss","webpack://./src/styles/_fonts.scss","webpack://./src/styles/_header.scss","webpack://./src/styles/_start.scss","webpack://./src/styles/_cards.scss","webpack://./src/styles/_popup.scss"],"names":[],"mappings":"AAMA;EACI,UAAA;EACA,SAAA;EACA,SAAA;ACLJ;;ADOA;EAEI,8BAAA;EACA,sBAAA;ACJJ;;ADMA;EAAG,qBAAA;EAAsB,cAAA;ACDzB;;ADEA;EAAgB,aAAA;ACEhB;;ADDA;EAAkB,aAAA;EAAe,cAAA;ACMjC;;ADLA;EAA2B,cAAA;ACS3B;;ADRA;EACI,YAAA;EACA,WAAA;EACA,eAAA;EACA,cAAA;EACA,0BAAA;EACA,2BAAA;EACA,8BAAA;EACA,yBAAA;EACA,cA7BI;EA8BJ,2BAAA;EACA,eAAA;ACWJ;;ADTA;EAAwB,oBAAA;ACaxB;;ADZA;EAAiB,aAAA;ACgBjB;;ADfA;EAAO,eAAA;ACmBP;;ADlBA;EAA0B,UAAA;EAAY,SAAA;ACuBtC;;ADtBA;EAAa,qBAAA;AC0Bb;;ADzBA;EAAQ,qBAAA;AC6BR;;AD5BA;EAAW,gBAAA;ACgCX;;AD/BA;EAAI,mBAAA;ACmCJ;;ADlCA;EAAkB,kBAAA;ACsClB;;ADrCA;EACI,yBAAA;EACA,cA5CI;ACoFR;;ACpFA;EACI,2BAAA;EACA,+DAAA;ADuFJ;ACpFA;EACI,8BAAA;EACA,+DAAA;ADsFJ;ACnFA;EACI,+BAAA;EACA,+DAAA;ADqFJ;AClFA;EACI,uBAAA;EACA,+DAAA;ADoFJ;ACjFA;EACI,0BAAA;EACA,+DAAA;ADmFJ;AChFA;EACI,2BAAA;EACA,+DAAA;ADkFJ;AC/EA;EACI,6BAAA;EACA,+DAAA;ADiFJ;AE3GA;EACI,WAAA;EACA,eAAA;EACA,qBAAA;EACA,yBAAA;AF6GJ;AE3GI;EACI,iBAAA;EACA,YAAA;EACA,oBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,wBAAA;MAAA,qBAAA;UAAA,uBAAA;EACA,yBAAA;MAAA,sBAAA;UAAA,mBAAA;EACA,iBAAA;AF6GR;AE1GI;EACI,aAAA;AF4GR;AEzGI;EACI,iBAAA;AF2GR;;AExGA;EACI,oBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,wBAAA;MAAA,qBAAA;UAAA,uBAAA;EACA,yBAAA;MAAA,sBAAA;UAAA,mBAAA;EACA,UAAA;EACA,oBAAA;AF2GJ;AEzGI;EACI,mBAAA;EACA,yBAAA;EACA,iBAAA;EACA,eAAA;EACA,iCAAA;EAAA,yBAAA;AF2GR;AE1GQ;EACI,cAvCH;AFmJT;;AExGA;EACI,oBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,wBAAA;MAAA,qBAAA;UAAA,uBAAA;EACA,yBAAA;MAAA,sBAAA;UAAA,mBAAA;AF2GJ;AEzGI;EACI,kBAAA;EACA,mBAAA;EACA,yBAAA;EACA,gCAAA;UAAA,wBAAA;EACA,iCAAA;EAAA,yBAAA;AF2GR;AE1GQ;EACI,+BAAA;UAAA,uBAAA;AF4GZ;AE1GQ;EACI,yBA1DH;EA2DG,yBAAA;AF4GZ;;AEvGA;EACI,oBAAA;EAAA,oBAAA;EAAA,aAAA;AF0GJ;AExGI;EACI,mBAAA;EACA,iBAAA;EACA,mBAAA;EACA,yBAvEC;EAwED,gCAAA;UAAA,wBAAA;EACA,yBAAA;EACA,eAAA;EACA,iBAAA;EACA,iCAAA;EAAA,yBAAA;AF0GR;AEzGQ;EACI,cAAA;EACA,+BAAA;UAAA,uBAAA;AF2GZ;AExGQ;EACI,yBAvFJ;EAwFI,cApFH;AF8LT;AEvGQ;EACI,iCAAA;EAAA,yBAAA;EACA,yBAzFH;AFkMT;AErGI;EACI,iBAAA;EACA,yBAnGA;EAoGA,gCAAA;UAAA,wBAAA;AFuGR;;AEpGA;EACI,oBAAA;EAAA,oBAAA;EAAA,aAAA;AFuGJ;;AErGA;EACI,aAAA;AFwGJ;;AErGA;EAIQ;IACI,iBAAA;EFqGV;EEjGE;IACI,iBAAA;EFmGN;AACF;AEhGA;EAEI;IACI,aAAA;EFiGN;AACF;AE9FA;EAEI;IACI,aAAA;IACA,kBAAA;IACA,4BAAA;IAAA,6BAAA;QAAA,0BAAA;YAAA,sBAAA;IACA,wBAAA;QAAA,qBAAA;YAAA,uBAAA;IACA,SAAA;IACA,UAAA;IACA,iBAAA;EF+FN;EE7FM;IACI,eAAA;EF+FV;EEzFM;IACI,QAAA;IACA,yBAAA;QAAA,sBAAA;YAAA,8BAAA;IACA,kBAAA;EF2FV;EExFM;IACI,cAAA;EF0FV;EEtFE;IACI,oBAAA;IAAA,oBAAA;IAAA,aAAA;EFwFN;AACF;AEpFA;EAIQ;IACI,iBAAA;EFmFV;EE/EE;IACI,SAAA;IACA,gBAAA;EFiFN;EE/EM;IACI,eAAA;EFiFV;EE7EE;IACI,WAAA;EF+EN;EE5EE;IACI,aAAA;EF8EN;EE3EE;IACI,SAAA;EF6EN;EE3EM;IACI,WAAA;IACA,kBAAA;EF6EV;EEzEE;IACI,aAAA;IACA,kBAAA;IACA,4BAAA;IAAA,6BAAA;QAAA,0BAAA;YAAA,sBAAA;IACA,UAAA;IACA,sCAAA;YAAA,8BAAA;IACA,SAAA;IACA,WAAA;EF2EN;AACF;AGtRA;EACI,WAAA;EACA,oBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,iBAAA;EACA,4BAAA;EACA,sBAAA;EACA,2BAAA;EACA,sBAAA;MAAA,mBAAA;UAAA,qBAAA;EACA,yBAAA;MAAA,sBAAA;UAAA,8BAAA;EACA,iBAAA;AHwRJ;AGvRI;EACI,aAAA;AHyRR;;AGtRA;EACI,oBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,4BAAA;EAAA,6BAAA;MAAA,0BAAA;UAAA,sBAAA;EACA,wBAAA;MAAA,qBAAA;UAAA,uBAAA;EACA,SAAA;EACA,gBAAA;AHyRJ;AGvRI;EACI,8BAAA;EACA,eAAA;EACA,iBAAA;EACA,aAAA;AHyRR;AGxRQ;EACI,yBAAA;AH0RZ;;AGtRA;EACI,oBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,4BAAA;EAAA,6BAAA;MAAA,0BAAA;UAAA,sBAAA;EACA,sBAAA;MAAA,mBAAA;UAAA,qBAAA;EACA,SAAA;AHyRJ;AGvRI;EACI,8BAAA;EACA,yBAAA;EACA,iBAAA;EACA,YAAA;EACA,iCAAA;EAAA,yBAAA;AHyRR;AGxRQ;EACI,UAAA;AH0RZ;;AGrRA;EACI,yBAAA;EACA,eAAA;EACA,iBAAA;AHwRJ;;AGrRA;EACI,oBAAA;EAAA,oBAAA;EAAA,aAAA;AHwRJ;;AGrRA;EACI,2BAAA;EACA,UAAA;AHwRJ;;AGrRA;EAEI;IACI,4BAAA;IAAA,6BAAA;QAAA,0BAAA;YAAA,sBAAA;IACA,SAAA;IACA,yBAAA;QAAA,sBAAA;YAAA,mBAAA;EHuRN;EGpRE;IACI,gBAAA;EHsRN;EGpRM;IACI,cAAA;EHsRV;EGlRE;IACI,yBAAA;QAAA,sBAAA;YAAA,mBAAA;EHoRN;EGjRE;IACI,kBAAA;EHmRN;AACF;AGhRA;EACI;IACI,mBAAA;EHkRN;EG/QE;IACI,eAAA;EHiRN;EG9QE;IACI,eAAA;EHgRN;AACF;AIpXA;EACI,4BAAA;EACA,oBAAA;AJsXJ;AIpXI;EACI,mBAAA;AJsXR;AInXI;EACI,oBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,wBAAA;MAAA,qBAAA;UAAA,uBAAA;EACA,yBAAA;MAAA,sBAAA;UAAA,mBAAA;EACA,mBAAA;MAAA,eAAA;EACA,gBAAA;EACA,SAAA;AJqXR;AIlXI;EACI,oBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,wBAAA;MAAA,qBAAA;UAAA,uBAAA;EACA,yBAAA;MAAA,sBAAA;UAAA,mBAAA;EACA,gBAAA;AJoXR;;AIjXA;EACI,oBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,4BAAA;EAAA,6BAAA;MAAA,0BAAA;UAAA,sBAAA;EACA,yBAAA;MAAA,sBAAA;UAAA,mBAAA;EACA,yBAlCI;EAmCJ,iBAAA;EACA,gBAAA;EACA,iCAAA;EAAA,yBAAA;AJoXJ;AInXI;EACI,oCAAA;UAAA,4BAAA;AJqXR;AIlXI;EACI,2BAAA;EACA,8BAAA;EACA,oBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,4BAAA;EAAA,6BAAA;MAAA,0BAAA;UAAA,sBAAA;EACA,wBAAA;MAAA,qBAAA;UAAA,uBAAA;EACA,SAAA;AJoXR;AIjXI;EACI,yBAAA;EACA,uBAAA;EACA,eAAA;EACA,iBAAA;EACA,qBAAA;EACA,cAvDG;AJ0aX;AIhXI;EACI,8BAAA;EACA,eAAA;EACA,iBAAA;EACA,cA9DG;AJgbX;AI/WI;EACI,8BAAA;EACA,eAAA;EACA,iBAAA;EACA,cAtED;AJubP;AI9WI;EACI,eAAA;EACA,iBAAA;EACA,cA5ED;AJ4bP;AI/WQ;EACI,2BAAA;AJiXZ;AI7WI;EACI,2BAAA;EACA,yBAnFG;EAoFH,cAAA;EACA,iBAAA;EACA,iCAAA;EAAA,yBAAA;AJ+WR;AI9WQ;EACI,yBAtFH;AJscT;;AI3WA;EACI;IACI,wBAAA;EJ8WN;EI7WM;IACI,kBAAA;EJ+WV;AACF;AI3WA;EACI;IACI,iBAAA;IACA,gBAAA;EJ6WN;EI5WM;IACI,gBAAA;EJ8WV;EI3WM;IACI,aAAA;EJ6WV;AACF;AIzWA;EACI;IACI,eAAA;IACA,gBAAA;EJ2WN;EIzWM;IACI,kBAAA;IACA,eAAA;EJ2WV;EIxWM;IACI,kBAAA;EJ0WV;EIvWM;IACI,kBAAA;EJyWV;EItWM;IACI,eAAA;EJwWV;AACF;AK5eA;EACI,yBAAA;EACA,YAAA;EACA,eAAA;EACA,QAAA;EACA,SAAA;EACA,sCAAA;UAAA,8BAAA;EACA,WAAA;EACA,YAAA;EACA,+BAAA;UAAA,uBAAA;AL8eJ;AK5eI;EACI,8BAAA;UAAA,sBAAA;EACA,oBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,yBAAA;MAAA,sBAAA;UAAA,8BAAA;EACA,YAAA;AL8eR;AK7eQ;EACI,gBAAA;AL+eZ;;AK3eA;EACI,oBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,4BAAA;EAAA,6BAAA;MAAA,0BAAA;UAAA,sBAAA;EACA,wBAAA;MAAA,qBAAA;UAAA,uBAAA;EACA,SAAA;AL8eJ;AK5eI;EACI,8BAAA;EACA,eAAA;EACA,iBAAA;EACA,cAlCI;EAmCJ,mBAAA;AL8eR;AK3eI;EACI,kBAAA;EACA,QAAA;EACA,UAAA;EACA,YAAA;EACA,YAAA;EACA,yBAAA;EACA,gCAAA;UAAA,wBAAA;AL6eR;AK5eQ;EACI,WAAA;EACA,YAAA;EACA,+BAAA;UAAA,uBAAA;AL8eZ;AK5eQ;EACI,yBAnDH;EAoDG,yBAAA;AL8eZ;AK1eI;EACI,kBAAA;EACA,yBAAA;EACA,aAAA;EACA,yBAAA;EACA,eAAA;EACA,iBAAA;EACA,cAAA;AL4eR;AKzeI;EACI,yBAAA;AL2eR;AKxeI;EACI,cA1ED;ALojBP;AK3eI;EACI,cA1ED;ALojBP;AK3eI;EACI,cA1ED;ALojBP;AK3eI;EACI,cA1ED;ALojBP;AK3eI;EACI,cA1ED;ALojBP;;AKveA;EACI,oBAAA;EAAA,oBAAA;EAAA,aAAA;EACA,UAAA;AL0eJ;AKxeI;EACI,8BAAA;EACA,eAAA;EACA,iBAAA;EACA,cAnFI;AL6jBZ;AKzeQ;EACI,eAAA;EACA,iCAAA;EAAA,yBAAA;AL2eZ;AK1eY;EACI,cA3FR;ALukBR;;AKteA;EACI;IACI,mBAAA;ELyeN;EKveE;IACI,4BAAA;IAAA,6BAAA;QAAA,0BAAA;YAAA,sBAAA;ELyeN;EKveM;IACI,oBAAA;IAAA,oBAAA;IAAA,aAAA;IACA,wBAAA;QAAA,qBAAA;YAAA,uBAAA;IACA,yBAAA;QAAA,sBAAA;YAAA,mBAAA;ELyeV;EKteM;IACI,cAAA;ELweV;AACF;AKpeA;EAGQ;IACI,wBAAA;QAAA,qBAAA;YAAA,uBAAA;IACA,yBAAA;QAAA,sBAAA;YAAA,mBAAA;ELoeV;EKneU;IACI,aAAA;ELqed;EKheE;IACI,iBAAA;IACA,wBAAA;QAAA,qBAAA;YAAA,uBAAA;IACA,yBAAA;QAAA,sBAAA;YAAA,mBAAA;IACA,WAAA;ELkeN;AACF;AK9dA;EAEQ;IACI,YAAA;EL+dV;AACF;AK3dA;EACI;IACI,qBAAA;QAAA,kBAAA;YAAA,yBAAA;EL6dN;AACF;AKzdA;EAEQ;IACI,aAAA;EL0dV;AACF","sourcesContent":["$white: #FFFFFF;\r\n$grey: #666666;\r\n$darkGrey: #171717;\r\n$lightGrey: #808080;\r\n$yellow: #C2AB81;\r\n\r\n* {\r\n    padding: 0;\r\n    margin: 0;\r\n    border: 0;\r\n}\r\n*, *:before, *:after{\r\n    -moz-box-sizing: border-box;\r\n    -webkit-box-sizing:border-box;\r\n    box-sizing: border-box;\r\n}\r\na {text-decoration:none; color:inherit}\r\n:focus, :active{outline: none}\r\na:focus, a:active{outline: none; color:inherit}\r\nnav, footer, header, aside{display:block}\r\nhtml, body{\r\n    height: 100%;\r\n    width: 100%;\r\n    font-size: 100%;\r\n    line-height: 1;\r\n    -ms-text-size-adjust: 100%;\r\n    -moz-text-size-adjust: 100%;\r\n    -webkit-text-size-adjust: 100%;\r\n    background-color: #131313;\r\n    color: $white;\r\n    font-family: MontserratBold;\r\n    font-size: 14px;\r\n}\r\ninput, button, textarea{font-family:inherit;}\r\ninput::-ms-clear{display:none;}\r\nbutton{cursor: pointer;}\r\nbutton::-moz-focus-inner {padding: 0; border: 0;}\r\na, a:visited{text-decoration:none;}\r\na:hover{text-decoration:none;}\r\nul, ol, li{list-style: none;}\r\nimg{vertical-align: top;}\r\nh1,h2,h3,h4,h5,h6{font-size: inherit;}\r\nbutton {\r\n    background-color: inherit;\r\n    color: $white;\r\n}","* {\n  padding: 0;\n  margin: 0;\n  border: 0;\n}\n\n*, *:before, *:after {\n  -moz-box-sizing: border-box;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n}\n\na {\n  text-decoration: none;\n  color: inherit;\n}\n\n:focus, :active {\n  outline: none;\n}\n\na:focus, a:active {\n  outline: none;\n  color: inherit;\n}\n\nnav, footer, header, aside {\n  display: block;\n}\n\nhtml, body {\n  height: 100%;\n  width: 100%;\n  font-size: 100%;\n  line-height: 1;\n  -ms-text-size-adjust: 100%;\n  -moz-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n  background-color: #131313;\n  color: #FFFFFF;\n  font-family: MontserratBold;\n  font-size: 14px;\n}\n\ninput, button, textarea {\n  font-family: inherit;\n}\n\ninput::-ms-clear {\n  display: none;\n}\n\nbutton {\n  cursor: pointer;\n}\n\nbutton::-moz-focus-inner {\n  padding: 0;\n  border: 0;\n}\n\na, a:visited {\n  text-decoration: none;\n}\n\na:hover {\n  text-decoration: none;\n}\n\nul, ol, li {\n  list-style: none;\n}\n\nimg {\n  vertical-align: top;\n}\n\nh1, h2, h3, h4, h5, h6 {\n  font-size: inherit;\n}\n\nbutton {\n  background-color: inherit;\n  color: #FFFFFF;\n}\n\n@font-face {\n  font-family: MontserratBold;\n  src: url(\"../fonts/Montserrat-Bold.ttf\") format(\"truetype\");\n}\n@font-face {\n  font-family: MontserratRegular;\n  src: url(\"../fonts/Montserrat-Regular.ttf\") format(\"truetype\");\n}\n@font-face {\n  font-family: MontserratSemiBold;\n  src: url(\"../fonts/Montserrat-SemiBold.ttf\") format(\"truetype\");\n}\n@font-face {\n  font-family: MulishBold;\n  src: url(\"../fonts/Mulish-Bold.ttf\") format(\"truetype\");\n}\n@font-face {\n  font-family: MulishRegular;\n  src: url(\"../fonts/Mulish-Regular.ttf\") format(\"truetype\");\n}\n@font-face {\n  font-family: MulishSemiBold;\n  src: url(\"../fonts/Mulish-SemiBold.ttf\") format(\"truetype\");\n}\n@font-face {\n  font-family: LucidaGrandeBold;\n  src: url(\"../fonts/Lucida-Grande-Bold.ttf\") format(\"truetype\");\n}\n.header {\n  z-index: 50;\n  position: fixed;\n  display: inline-block;\n  background-color: #131313;\n}\n.header__body {\n  max-height: 120px;\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 28px 0px;\n}\n.header__burger {\n  display: none;\n}\n.header__logo {\n  margin-right: 4vw;\n}\n\n.menu {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 2.1vw;\n  margin-right: 13.5vw;\n}\n.menu__element {\n  white-space: nowrap;\n  text-transform: uppercase;\n  line-height: 150%;\n  font-size: 14px;\n  transition: all 0.3s ease;\n}\n.menu__element:hover {\n  color: #C2AB81;\n}\n\n.contact {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.contact__phone {\n  padding: 14px 19px;\n  margin-right: 1.5vw;\n  border: 1px solid #727272;\n  transform: skewX(-15deg);\n  transition: all 0.3s ease;\n}\n.contact__phone img {\n  transform: skewX(15deg);\n}\n.contact__phone:hover {\n  background-color: #C2AB81;\n  border: 1px solid #FFFFFF;\n}\n\n.skew {\n  display: flex;\n}\n.skew__button {\n  white-space: nowrap;\n  margin-right: 5px;\n  padding: 21px 3.5vw;\n  background-color: #C2AB81;\n  transform: skewX(-15deg);\n  text-transform: uppercase;\n  font-size: 12px;\n  line-height: 150%;\n  transition: all 0.3s ease;\n}\n.skew__button span {\n  display: block;\n  transform: skewX(15deg);\n}\n.skew__button:hover {\n  background-color: #FFFFFF;\n  color: #C2AB81;\n}\n.skew__button:hover + .skew__line {\n  transition: all 0.3s ease;\n  background-color: #C2AB81;\n}\n.skew__line {\n  padding: 29px 4px;\n  background-color: #FFFFFF;\n  transform: skewX(-15deg);\n}\n\n.menu_active {\n  display: flex;\n}\n\n.header_active {\n  height: 100vh;\n}\n\n@media (max-width: 1600px) {\n  .header__logo {\n    margin-right: 2vw;\n  }\n  .menu {\n    margin-right: 2vw;\n  }\n}\n@media (max-width: 1300px) {\n  .contact_block {\n    display: none;\n  }\n}\n@media (max-width: 1023px) {\n  .menu {\n    display: none;\n    position: absolute;\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 15px;\n    top: 164px;\n    margin-left: 30px;\n  }\n  .menu__element {\n    font-size: 36px;\n  }\n  .header__body {\n    gap: 1vw;\n    justify-content: space-between;\n    padding: 28px 15px;\n  }\n  .header__burger {\n    display: block;\n  }\n  .contact_block {\n    display: flex;\n  }\n}\n@media (max-width: 500px) {\n  .header__body {\n    padding: 5px 15px;\n  }\n  .menu {\n    top: 70px;\n    margin-left: 5px;\n  }\n  .menu__element {\n    font-size: 20px;\n  }\n  .skew_full {\n    width: 100%;\n  }\n  .line_del {\n    display: none;\n  }\n  .contact {\n    gap: 10px;\n  }\n  .contact__phone {\n    width: 100%;\n    margin-right: none;\n  }\n  .contact_block {\n    display: none;\n    position: absolute;\n    flex-direction: column;\n    top: 480px;\n    transform: translate(0%, -50%);\n    right: 5%;\n    width: 90vw;\n  }\n}\n.start {\n  z-index: 10;\n  display: flex;\n  min-height: 100vh;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  align-items: flex-end;\n  justify-content: space-between;\n  padding: 16vh 5vw;\n}\n.start > img {\n  display: none;\n}\n\n.info {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 40px;\n  max-width: 686px;\n}\n.info__text {\n  font-family: MontserratRegular;\n  font-size: 16px;\n  line-height: 150%;\n  opacity: 0.79;\n}\n.info__text span {\n  text-transform: uppercase;\n}\n\n.tabs {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 15px;\n}\n.tabs__element {\n  font-family: MontserratRegular;\n  text-transform: uppercase;\n  line-height: 150%;\n  opacity: 0.6;\n  transition: all 0.3s ease;\n}\n.tabs__element:hover {\n  opacity: 1;\n}\n\n.title {\n  text-transform: uppercase;\n  font-size: 42px;\n  line-height: 122%;\n}\n\n.active_page {\n  display: flex;\n}\n\n.active_tab {\n  font-family: MontserratBold;\n  opacity: 1;\n}\n\n@media (max-width: 750px) {\n  .start {\n    flex-direction: column;\n    gap: 10vh;\n    align-items: center;\n  }\n  .info {\n    margin-top: 10vh;\n  }\n  .info__contact {\n    margin: 0 auto;\n  }\n  .tabs {\n    align-items: center;\n  }\n  .title {\n    text-align: center;\n  }\n}\n@media (max-width: 400px) {\n  .start {\n    padding-bottom: 5vh;\n  }\n  .info {\n    margin-top: 3vh;\n  }\n  .title {\n    font-size: 30px;\n  }\n}\n.cards {\n  margin: 53px 100px 0px 100px;\n  padding-bottom: 20vh;\n}\n.cards__title {\n  margin-bottom: 53px;\n}\n.cards__body {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  margin: 0px 15px;\n  gap: 30px;\n}\n.cards__skew {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 60px;\n}\n\n.card {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: #FFFFFF;\n  min-height: 650px;\n  max-width: 320px;\n  transition: all 0.3s ease;\n}\n.card:hover {\n  box-shadow: 0 0 20px #C2AB81;\n}\n.card__body {\n  margin: 25px 23px 30px 23px;\n  font-family: MontserratRegular;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 20px;\n}\n.card__title {\n  text-transform: uppercase;\n  font-family: MulishBold;\n  font-size: 14px;\n  line-height: 185%;\n  letter-spacing: 1.5px;\n  color: #171717;\n}\n.card__subtitle {\n  font-family: MontserratRegular;\n  font-size: 16px;\n  line-height: 26px;\n  color: #171717;\n}\n.card__text {\n  font-family: MontserratRegular;\n  font-size: 14px;\n  line-height: 24px;\n  color: #666666;\n}\n.card__info {\n  font-size: 12px;\n  line-height: 24px;\n  color: #666666;\n}\n.card__info span {\n  font-family: MontserratBold;\n}\n.card__button {\n  font-family: MulishSemiBold;\n  background-color: #171717;\n  display: block;\n  padding: 16px 0px;\n  transition: all 0.3s ease;\n}\n.card__button:hover {\n  background-color: #C2AB81;\n}\n\n@media (max-width: 1023px) {\n  .cards {\n    margin: 53px 0px 0px 0px;\n  }\n  .cards__title {\n    text-align: center;\n  }\n}\n@media (max-width: 699px) {\n  .card {\n    min-height: 450px;\n    max-width: 200px;\n  }\n  .card img {\n    max-width: 200px;\n  }\n  .card__text {\n    display: none;\n  }\n}\n@media (max-width: 459px) {\n  .card {\n    max-width: 90vw;\n    min-height: none;\n  }\n  .card__title {\n    text-align: center;\n    font-size: 20px;\n  }\n  .card__subtitle {\n    text-align: center;\n  }\n  .card__info {\n    text-align: center;\n  }\n  .card img {\n    min-width: 90vw;\n  }\n}\n.popup {\n  background-color: #131313;\n  z-index: 100;\n  position: fixed;\n  top: 15%;\n  right: 5%;\n  transform: translate(0%, -50%);\n  width: 90vw;\n  height: 80vh;\n  transform: skewX(-3deg);\n}\n.popup__body {\n  transform: skewX(3deg);\n  display: flex;\n  justify-content: space-between;\n  margin: 20px;\n}\n.popup__body img {\n  max-height: 70vh;\n}\n\n.form {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 20px;\n}\n.form__text {\n  font-family: MontserratRegular;\n  font-size: 14px;\n  line-height: 150%;\n  color: #808080;\n  margin-bottom: 30px;\n}\n.form__close {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  width: 100px;\n  height: 70px;\n  border: 1px solid #727272;\n  transform: skewX(-15deg);\n}\n.form__close img {\n  width: 40px;\n  height: 40px;\n  transform: skewX(15deg);\n}\n.form__close:hover {\n  background-color: #C2AB81;\n  border: 1px solid #FFFFFF;\n}\n.form input {\n  padding-left: 36px;\n  background-color: inherit;\n  height: 3.5vw;\n  border: 1px solid #2B2B2B;\n  font-size: 16px;\n  line-height: 20px;\n  color: inherit;\n}\n.form input:focus {\n  border: 1px solid #666666;\n}\n.form input::placeholder {\n  color: #666666;\n}\n\n.send {\n  display: flex;\n  gap: 1.5vw;\n}\n.send__text {\n  font-family: MontserratRegular;\n  font-size: 14px;\n  line-height: 150%;\n  color: #808080;\n}\n.send__text > u {\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.send__text > u:hover {\n  color: #FFFFFF;\n}\n\n@media (max-width: 1620px) {\n  .form {\n    margin-right: 150px;\n  }\n  .send {\n    flex-direction: column;\n  }\n  .send__skew {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  .send__text {\n    margin: 0 auto;\n  }\n}\n@media (max-width: 1280px) {\n  .popup__body {\n    justify-content: center;\n    align-items: center;\n  }\n  .popup__body > img {\n    display: none;\n  }\n  .form {\n    padding-top: 80px;\n    justify-content: center;\n    align-items: center;\n    margin: 0 0;\n  }\n}\n@media (max-width: 500px) {\n  .form input {\n    height: 20px;\n  }\n}\n@media (max-height: 1000px) {\n  .form {\n    justify-content: flex-end;\n  }\n}\n@media (max-height: 750px) {\n  .form__text {\n    display: none;\n  }\n}","@font-face {\r\n    font-family: MontserratBold;\r\n    src: url(\"../fonts/Montserrat-Bold.ttf\") format(\"truetype\");\r\n}\r\n\r\n@font-face {\r\n    font-family: MontserratRegular;\r\n    src: url(\"../fonts/Montserrat-Regular.ttf\") format(\"truetype\");\r\n}\r\n\r\n@font-face {\r\n    font-family: MontserratSemiBold;\r\n    src: url(\"../fonts/Montserrat-SemiBold.ttf\") format(\"truetype\");\r\n}\r\n\r\n@font-face {\r\n    font-family: MulishBold;\r\n    src: url(\"../fonts/Mulish-Bold.ttf\") format(\"truetype\");\r\n}\r\n\r\n@font-face {\r\n    font-family: MulishRegular;\r\n    src: url(\"../fonts/Mulish-Regular.ttf\") format(\"truetype\");\r\n}\r\n\r\n@font-face {\r\n    font-family: MulishSemiBold;\r\n    src: url(\"../fonts/Mulish-SemiBold.ttf\") format(\"truetype\");\r\n}\r\n\r\n@font-face {\r\n    font-family: LucidaGrandeBold;\r\n    src: url(\"../fonts/Lucida-Grande-Bold.ttf\") format(\"truetype\");\r\n}","$white: #FFFFFF;\r\n$grey: #666666;\r\n$darkGrey: #171717;\r\n$lightGrey: #808080;\r\n$yellow: #C2AB81;\r\n\r\n.header {\r\n    z-index: 50;\r\n    position: fixed;\r\n    display: inline-block;\r\n    background-color: #131313;\r\n\r\n    &__body {\r\n        max-height: 120px;\r\n        width: 100vw;\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        padding: 28px 0px;\r\n    }\r\n\r\n    &__burger {\r\n        display: none;\r\n    }\r\n\r\n    &__logo {\r\n        margin-right: 4vw;\r\n    }\r\n}\r\n.menu {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 2.1vw;\r\n    margin-right: 13.5vw;\r\n\r\n    &__element {\r\n        white-space: nowrap;\r\n        text-transform: uppercase;\r\n        line-height: 150%;\r\n        font-size: 14px;\r\n        transition: all 0.3s ease;\r\n        &:hover {\r\n            color: $yellow;\r\n        }\r\n    }\r\n}\r\n.contact {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n    &__phone {\r\n        padding: 14px 19px;\r\n        margin-right: 1.5vw;\r\n        border: 1px solid #727272;\r\n        transform: skewX(-15deg);\r\n        transition: all 0.3s ease;\r\n        img {\r\n            transform: skewX(15deg);\r\n        }\r\n        &:hover {\r\n            background-color: $yellow;\r\n            border: 1px solid $white;\r\n        }\r\n    }\r\n}\r\n\r\n.skew {\r\n    display: flex;\r\n\r\n    &__button {\r\n        white-space: nowrap;\r\n        margin-right: 5px;\r\n        padding: 21px 3.5vw;\r\n        background-color: $yellow;\r\n        transform: skewX(-15deg);\r\n        text-transform: uppercase;\r\n        font-size: 12px;\r\n        line-height: 150%;\r\n        transition: all 0.3s ease;\r\n        span {\r\n            display: block;\r\n            transform: skewX(15deg);\r\n        }\r\n\r\n        &:hover {\r\n            background-color: $white;\r\n            color: $yellow;\r\n        }\r\n\r\n        &:hover + .skew__line {\r\n            transition: all 0.3s ease;\r\n            background-color: $yellow;\r\n        }\r\n    }\r\n\r\n    &__line {\r\n        padding: 29px 4px;\r\n        background-color: $white;\r\n        transform: skewX(-15deg);\r\n    }\r\n}\r\n.menu_active {\r\n    display: flex;\r\n}\r\n.header_active {\r\n    height: 100vh;\r\n}\r\n\r\n@media (max-width: 1600px) {\r\n\r\n    .header { \r\n\r\n        &__logo {\r\n            margin-right: 2vw;\r\n        }\r\n    }\r\n\r\n    .menu {\r\n        margin-right: 2vw;\r\n    }\r\n}\r\n\r\n@media (max-width: 1300px) {\r\n\r\n    .contact_block {\r\n        display: none;\r\n    }\r\n}\r\n\r\n@media (max-width: 1023px) {\r\n\r\n    .menu {\r\n        display: none;\r\n        position: absolute;\r\n        flex-direction: column;\r\n        align-items: flex-start;\r\n        gap: 15px;\r\n        top: 164px;\r\n        margin-left: 30px;\r\n\r\n        &__element {\r\n            font-size: 36px;\r\n        }\r\n    }\r\n\r\n    .header {\r\n\r\n        &__body {\r\n            gap: 1vw;\r\n            justify-content: space-between;\r\n            padding: 28px 15px;\r\n        }\r\n    \r\n        &__burger {\r\n            display: block;\r\n        }\r\n    }\r\n\r\n    .contact_block {\r\n        display: flex;\r\n    }\r\n\r\n}\r\n\r\n@media (max-width: 500px) {\r\n\r\n    .header {\r\n    \r\n        &__body {\r\n            padding: 5px 15px;\r\n        }\r\n    }\r\n\r\n    .menu {\r\n        top: 70px;\r\n        margin-left: 5px;\r\n        \r\n        &__element {\r\n            font-size: 20px;\r\n        }\r\n    }\r\n\r\n    .skew_full {\r\n        width: 100%;\r\n    }\r\n\r\n    .line_del {\r\n        display: none;\r\n    }\r\n\r\n    .contact {\r\n        gap: 10px;\r\n\r\n        &__phone {\r\n            width: 100%;\r\n            margin-right: none;\r\n        }\r\n    }\r\n\r\n    .contact_block {\r\n        display: none;\r\n        position: absolute;\r\n        flex-direction: column;\r\n        top: 480px;\r\n        transform: translate(-0%, -50%);\r\n        right: 5%;\r\n        width: 90vw;\r\n    }\r\n\r\n}","$white: #FFFFFF;\r\n$grey: #666666;\r\n$darkGrey: #171717;\r\n$lightGrey: #808080;\r\n$yellow: #C2AB81;\r\n\r\n.start {\r\n    z-index: 10;\r\n    display: flex;\r\n    min-height: 100vh;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    background-position: center;\r\n    align-items: flex-end;\r\n    justify-content: space-between;\r\n    padding: 16vh 5vw;\r\n    >img {\r\n        display: none;\r\n    }\r\n}\r\n.info {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    gap: 40px;\r\n    max-width: 686px;\r\n\r\n    &__text {\r\n        font-family: MontserratRegular;\r\n        font-size: 16px;\r\n        line-height: 150%;\r\n        opacity: 0.79;\r\n        span {\r\n            text-transform: uppercase;\r\n        }\r\n    }\r\n}\r\n.tabs {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-end;\r\n    gap: 15px;\r\n\r\n    &__element {\r\n        font-family: MontserratRegular;\r\n        text-transform: uppercase;\r\n        line-height: 150%;\r\n        opacity: 0.6;\r\n        transition: all 0.3s ease;\r\n        &:hover {\r\n            opacity: 1;\r\n        }\r\n    }\r\n}\r\n\r\n.title {\r\n    text-transform: uppercase;\r\n    font-size: 42px;\r\n    line-height: 122%;\r\n}\r\n\r\n.active_page {\r\n    display: flex;\r\n}\r\n\r\n.active_tab {\r\n    font-family: MontserratBold;\r\n    opacity: 1;\r\n}\r\n\r\n@media (max-width: 750px) {\r\n\r\n    .start {\r\n        flex-direction: column;\r\n        gap: 10vh;\r\n        align-items: center;\r\n    }\r\n\r\n    .info {\r\n        margin-top: 10vh;\r\n\r\n        &__contact {\r\n            margin: 0 auto;\r\n        }\r\n    }\r\n\r\n    .tabs {\r\n        align-items: center;\r\n    }\r\n\r\n    .title {\r\n        text-align: center;\r\n    }\r\n}\r\n\r\n@media (max-width: 400px) {\r\n    .start {\r\n        padding-bottom: 5vh;\r\n    }\r\n\r\n    .info {\r\n        margin-top: 3vh;\r\n    }\r\n\r\n    .title {\r\n        font-size: 30px;\r\n    }\r\n}","$white: #FFFFFF;\r\n$grey: #666666;\r\n$darkGrey: #171717;\r\n$lightGrey: #808080;\r\n$yellow: #C2AB81;\r\n\r\n.cards {\r\n    margin: 53px 100px 0px 100px;\r\n    padding-bottom: 20vh;\r\n\r\n    &__title {\r\n        margin-bottom: 53px;\r\n    }\r\n\r\n    &__body {\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        flex-wrap: wrap;\r\n        margin: 0px 15px;   \r\n        gap: 30px;\r\n    }\r\n\r\n    &__skew {\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        margin-top: 60px;\r\n    }\r\n}\r\n.card {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    background-color: $white;\r\n    min-height: 650px;\r\n    max-width: 320px;\r\n    transition: all 0.3s ease;\r\n    &:hover {\r\n        box-shadow: 0 0 20px $yellow;\r\n    }\r\n\r\n    &__body{\r\n        margin: 25px 23px 30px 23px;\r\n        font-family: MontserratRegular;\r\n        display: flex;\r\n        flex-direction: column;\r\n        justify-content: center;\r\n        gap: 20px;\r\n    }\r\n\r\n    &__title {\r\n        text-transform: uppercase;\r\n        font-family: MulishBold;\r\n        font-size: 14px;\r\n        line-height: 185%;\r\n        letter-spacing: 1.5px;\r\n        color: $darkGrey;\r\n    }\r\n\r\n    &__subtitle {\r\n        font-family: MontserratRegular;\r\n        font-size: 16px;\r\n        line-height: 26px;\r\n        color: $darkGrey;\r\n    }\r\n\r\n    &__text {\r\n        font-family: MontserratRegular;\r\n        font-size: 14px;\r\n        line-height: 24px;\r\n        color: $grey;\r\n    }\r\n\r\n    &__info {\r\n        font-size: 12px;\r\n        line-height: 24px;\r\n        color: $grey;\r\n        span {\r\n            font-family: MontserratBold;\r\n        }\r\n    }\r\n\r\n    &__button {\r\n        font-family: MulishSemiBold;\r\n        background-color: $darkGrey;\r\n        display: block;\r\n        padding: 16px 0px;\r\n        transition: all 0.3s ease;\r\n        &:hover {\r\n            background-color: $yellow;\r\n        }\r\n    }\r\n}\r\n\r\n@media (max-width: 1023px) {\r\n    .cards {\r\n        margin: 53px 0px 0px 0px;\r\n        &__title {\r\n            text-align: center;\r\n        }\r\n    }\r\n}\r\n\r\n@media (max-width: 699px) {\r\n    .card {\r\n        min-height: 450px;\r\n        max-width: 200px;\r\n        img {\r\n            max-width: 200px;\r\n        }\r\n\r\n        &__text {\r\n            display: none;\r\n        }\r\n    }\r\n}\r\n\r\n@media (max-width: 459px) {\r\n    .card {\r\n        max-width: 90vw;\r\n        min-height: none;\r\n\r\n        &__title {\r\n            text-align: center;\r\n            font-size: 20px;\r\n        }\r\n\r\n        &__subtitle {\r\n            text-align: center;\r\n        }\r\n\r\n        &__info {\r\n            text-align: center;\r\n        }\r\n\r\n        img {\r\n            min-width: 90vw;\r\n        }\r\n    }\r\n}","$white: #FFFFFF;\r\n$grey: #666666;\r\n$darkGrey: #171717;\r\n$lightGrey: #808080;\r\n$yellow: #C2AB81;\r\n\r\n.popup {\r\n    background-color: #131313;\r\n    z-index: 100;\r\n    position: fixed;\r\n    top: 15%;\r\n    right: 5%;\r\n    transform: translate(-0%, -50%);\r\n    width: 90vw;\r\n    height: 80vh;\r\n    transform: skewX(-3deg);\r\n\r\n    &__body {\r\n        transform: skewX(3deg);\r\n        display: flex;\r\n        justify-content: space-between;\r\n        margin: 20px;\r\n        img {\r\n            max-height: 70vh;\r\n        }\r\n    }\r\n}\r\n.form {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    gap: 20px;\r\n\r\n    &__text {\r\n        font-family: MontserratRegular;\r\n        font-size: 14px;\r\n        line-height: 150%;\r\n        color: $lightGrey;\r\n        margin-bottom: 30px;\r\n    }\r\n\r\n    &__close {\r\n        position: absolute;\r\n        top: 0px;\r\n        right: 0px;\r\n        width: 100px;\r\n        height: 70px;\r\n        border: 1px solid #727272;\r\n        transform: skewX(-15deg);\r\n        img {\r\n            width: 40px;\r\n            height: 40px;\r\n            transform: skewX(15deg);\r\n        }\r\n        &:hover {\r\n            background-color: $yellow;\r\n            border: 1px solid $white;\r\n        } \r\n    }\r\n\r\n    input {\r\n        padding-left: 36px;\r\n        background-color: inherit;\r\n        height: 3.5vw;\r\n        border: 1px solid #2B2B2B;\r\n        font-size: 16px;\r\n        line-height: 20px;\r\n        color: inherit;\r\n    }\r\n\r\n    input:focus {\r\n        border: 1px solid $grey;\r\n    }\r\n\r\n    input::placeholder {\r\n        color: $grey;\r\n    }\r\n}\r\n.send {\r\n    display: flex;\r\n    gap: 1.5vw;\r\n\r\n    &__text {\r\n        font-family: MontserratRegular;\r\n        font-size: 14px;\r\n        line-height: 150%;\r\n        color: $lightGrey;\r\n        >u {\r\n            cursor: pointer;\r\n            transition: all 0.3s ease;\r\n            &:hover {\r\n                color: $white;\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n@media (max-width: 1620px) {\r\n    .form {\r\n        margin-right: 150px;\r\n    }\r\n    .send {\r\n        flex-direction: column;\r\n        \r\n        &__skew {\r\n            display: flex;\r\n            justify-content: center;\r\n            align-items: center;\r\n        }\r\n\r\n        &__text {\r\n            margin: 0 auto;\r\n        }\r\n    }\r\n}\r\n\r\n@media (max-width: 1280px) {\r\n    .popup {\r\n\r\n        &__body {\r\n            justify-content: center;\r\n            align-items: center;\r\n            >img{\r\n                display: none;\r\n            }\r\n        }\r\n    }\r\n\r\n    .form {\r\n        padding-top: 80px;\r\n        justify-content: center;\r\n        align-items: center;\r\n        margin: 0 0;\r\n\r\n    }\r\n}\r\n\r\n@media (max-width: 500px) {\r\n    .form {\r\n        input {\r\n            height: 20px;\r\n        }\r\n    }\r\n}\r\n\r\n@media (max-height: 1000px) {\r\n    .form {\r\n        justify-content: flex-end;\r\n    }\r\n}\r\n\r\n\r\n@media (max-height: 750px) {\r\n    .form {\r\n        &__text {\r\n            display: none;\r\n        }\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ (function(module) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ (function(module) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ (function(module) {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ (function(module) {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ (function(module) {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
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
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ (function(module) {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ (function(module) {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ (function(module) {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/fonts/Lucida-Grande-Bold.ttf":
/*!******************************************!*\
  !*** ./src/fonts/Lucida-Grande-Bold.ttf ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/Lucida-Grande-Bold.ttf";

/***/ }),

/***/ "./src/fonts/Montserrat-Bold.ttf":
/*!***************************************!*\
  !*** ./src/fonts/Montserrat-Bold.ttf ***!
  \***************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/Montserrat-Bold.ttf";

/***/ }),

/***/ "./src/fonts/Montserrat-Regular.ttf":
/*!******************************************!*\
  !*** ./src/fonts/Montserrat-Regular.ttf ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/Montserrat-Regular.ttf";

/***/ }),

/***/ "./src/fonts/Montserrat-SemiBold.ttf":
/*!*******************************************!*\
  !*** ./src/fonts/Montserrat-SemiBold.ttf ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/Montserrat-SemiBold.ttf";

/***/ }),

/***/ "./src/fonts/Mulish-Bold.ttf":
/*!***********************************!*\
  !*** ./src/fonts/Mulish-Bold.ttf ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/Mulish-Bold.ttf";

/***/ }),

/***/ "./src/fonts/Mulish-Regular.ttf":
/*!**************************************!*\
  !*** ./src/fonts/Mulish-Regular.ttf ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/Mulish-Regular.ttf";

/***/ }),

/***/ "./src/fonts/Mulish-SemiBold.ttf":
/*!***************************************!*\
  !*** ./src/fonts/Mulish-SemiBold.ttf ***!
  \***************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
module.exports = __webpack_require__.p + "assets/Mulish-SemiBold.ttf";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	!function() {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _js_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/menu */ "./src/js/menu.js");
/* harmony import */ var _js_menu__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_menu__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _js_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/tabs */ "./src/js/tabs.js");
/* harmony import */ var _js_tabs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_tabs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _js_popup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/popup */ "./src/js/popup.js");
/* harmony import */ var _js_popup__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_popup__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _js_more_cards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/more_cards */ "./src/js/more_cards.js");
/* harmony import */ var _js_more_cards__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_js_more_cards__WEBPACK_IMPORTED_MODULE_4__);





}();
/******/ })()
;
//# sourceMappingURL=main.9a9bf70c80b7b7a1f264.js.map