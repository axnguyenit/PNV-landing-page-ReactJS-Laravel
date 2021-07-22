(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_donate_index_jsx"],{

/***/ "./resources/js/components/donate/index.jsx":
/*!**************************************************!*\
  !*** ./resources/js/components/donate/index.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _paypal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paypal */ "./resources/js/components/donate/paypal.js");
/* harmony import */ var _paypal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_paypal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


 // const ACCESS_TOKEN = 'A21AAJr_1wcicP6jj-A8b3NFf1cYO6ySQEoHDoPRQU2OzmZIFU9WQ4d_bJpKwCNVQ6uSWpfRrSIaZlGAqMtIIdyogCgvHIu6w';




var Donate = function Donate() {
  // const paypal = async() => {
  // const res = await fetch('https://api-m.sandbox.paypal.com/v1/payments/payment', {
  //   const res1 = await axios.get('https://api-m.sandbox.paypal.com/v1/payments/payment', {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Authorization': `Bearer ${ACCESS_TOKEN}`
  //     }
  //   });
  // console.log(res1);
  // const res = await fetch('https://api-m.sandbox.paypal.com/v1/payments/payment', {
  //     method: 'GET',
  //     headers: {
  //         'Content-Type': 'application/json',
  //         'Authorization': `Bearer ${ACCESS_TOKEN}`
  //     }
  // });
  // const data = await res.json();
  // console.log(res);
  // console.log(data);
  // }
  // useEffect(() => {
  //   paypal();
  // }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("section", {
    id: "donate",
    className: "parallax overlay overlay-5",
    style: {
      backgroundImage: 'url(./assets/images/bg/helping-hands.jpg)'
    },
    "data-aos": "zoom-in-up",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "container",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "row",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "col-lg-6 col-md-8 col-sm-10 col-xs-12 offset-lg-6 offset-md-4  offset-sm-1",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "diffuse-shadow p-45px sm-p-25px donate-form-wrap opacity-5",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
              children: "Make a Donation Now"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "divider-dashed m-25px-b"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("form", {
              className: "m-30px-t",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "form-group",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("label", {
                  htmlFor: "donateFor",
                  children: "I Want to Donate"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("select", {
                  id: "donateFor",
                  className: "form-control",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("option", {
                    selected: true,
                    value: "org",
                    children: "For organization"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("option", {
                    value: "ITnuoiIT",
                    children: "For ITnuoiIT"
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "form-group",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("label", {
                  htmlFor: "donateCurrency",
                  children: "Currency"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("select", {
                  id: "donateCurrency",
                  className: "form-control",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("option", {
                    selected: true,
                    value: "VND",
                    children: "VND - Viet Nam Dong"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("option", {
                    value: "USD",
                    children: "USD - US Dollar"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("option", {
                    value: "CAD",
                    children: "CAD - Canadian Dollar"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("option", {
                    value: "AUD",
                    children: "AUD - Australian Dollar"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("option", {
                    value: "EUR",
                    children: "EUR - Australian Dollar"
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "form-group",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("label", {
                  htmlFor: "donateAmount",
                  children: "How much do you want to donate?"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("input", {
                  type: "number",
                  className: "form-control",
                  id: "donateAmount",
                  placeholder: "Enter amount"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "form-group",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("form", {
                  action: "https://www.sandbox.paypal.com/donate",
                  method: "post",
                  target: "_top",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("input", {
                    type: "hidden",
                    name: "hosted_button_id",
                    value: "BPUVMLWMPNBUL"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("input", {
                    type: "submit",
                    className: "btn btn-default",
                    value: "Donate now"
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                  id: "paypal-button"
                })]
              })]
            })]
          })
        })
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Donate);

/***/ }),

/***/ "./resources/js/components/donate/paypal.js":
/*!**************************************************!*\
  !*** ./resources/js/components/donate/paypal.js ***!
  \**************************************************/
/***/ (() => {

paypal.Button.render({
  // Configure environment
  env: 'sandbox',
  client: {
    sandbox: 'ARG0sBLBiJAg84DswFdtgTRN8K7jJdEw9mb90WzktoMZ4Ogx2JjfgAAiKGzNNRacf7MhVeMxeWKI2M8A',
    production: 'demo_production_client_id'
  },
  // Customize button (optional)
  locale: 'en_US',
  style: {
    size: 'large',
    color: 'blue',
    shape: 'pill',
    label: 'checkout',
    tagline: 'true'
  },
  // Enable Pay Now checkout flow (optional)
  commit: true,
  // Set up a payment
  payment: function payment(data, actions) {
    console.log(data);
    console.log(actions);
    return actions.payment.create({
      transactions: [{
        amount: {
          total: '11',
          currency: 'USD'
        }
      }]
    });
  },
  // Execute the payment
  onAuthorize: function onAuthorize(data, actions) {
    return actions.order.capture().then(function (details) {
      console.log(details); // Show a confirmation message to the buyer

      window.alert('Thank you for your purchase!');
      var donation = {
        transaction_id: details.id,
        created_at: details.create_time,
        email: details.payer.email_address,
        name: details.purchase_units[0].shipping.name.full_name,
        phone: details.payer.phone.phone_number.national_number,
        address: details.purchase_units[0].shipping.address.address_line_1 + ', ' + details.purchase_units[0].shipping.address.country_code,
        amount: details.purchase_units[0].amount.value,
        currency_code: details.purchase_units[0].amount.currency_code
      };
      console.log(donation);
    }); // return actions.payment.execute().then(function() {
    //     // Show a confirmation message to the buyer
    //     window.alert('Thank you for your purchase!');
    // });
  }
}, '#paypal-button');

/***/ })

}]);