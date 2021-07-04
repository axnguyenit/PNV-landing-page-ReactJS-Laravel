(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_milestones_Form_jsx"],{

/***/ "./resources/js/components/milestones/Form.jsx":
/*!*****************************************************!*\
  !*** ./resources/js/components/milestones/Form.jsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var Form = function Form() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    title: 'milestones',
    desc: 'hhhhhhhhhhhhhh',
    card: [{
      img: 'https://i.pinimg.com/736x/d4/f8/35/d4f8354476b043248cc37da9afd0c06f.jpg',
      title: 'h1',
      desc: 'hhhhh',
      year: '2020',
      month: '203333'
    }, {
      img: 'https://tse2.mm.bing.net/th?id=OIP.dIPaBx4O2nxqgPCZ5pnpCAHaE8&pid=Api&P=0&w=299&h=200',
      title: 'h2',
      desc: 'hhhhhddAGTYURUD',
      year: '2020464',
      month: '203333'
    }, {
      img: 'https://tse2.mm.bing.net/th?id=OIP.dIPaBx4O2nxqgPCZ5pnpCAHaE8&pid=Api&P=0&w=299&h=200',
      title: 'h2',
      desc: 'hhhhhddAGTYURUD',
      year: '2020464',
      month: '203333'
    }, {
      img: 'https://tse2.mm.bing.net/th?id=OIP.dIPaBx4O2nxqgPCZ5pnpCAHaE8&pid=Api&P=0&w=299&h=200',
      title: 'h2',
      desc: 'hhhhhddAGTYURUD',
      year: '2020464',
      month: '203333'
    }, {
      img: 'https://tse2.mm.bing.net/th?id=OIP.dIPaBx4O2nxqgPCZ5pnpCAHaE8&pid=Api&P=0&w=299&h=200',
      title: 'h2',
      desc: 'hhhhhddAGTYURUD',
      year: '2020464',
      month: '203333'
    }, {
      img: 'https://tse2.mm.bing.net/th?id=OIP.dIPaBx4O2nxqgPCZ5pnpCAHaE8&pid=Api&P=0&w=299&h=200',
      title: 'h2',
      desc: 'hhhhhddAGTYURUD',
      year: '2020464',
      month: '203333'
    }]
  }),
      _useState2 = _slicedToArray(_useState, 2),
      values = _useState2[0],
      setValues = _useState2[1];

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    console.log(values);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    localStorage.setItem('values', JSON.stringify(values));
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("form", {
      action: "",
      onSubmit: handleSubmit,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
        type: "submit",
        value: "submit"
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Form);

/***/ })

}]);