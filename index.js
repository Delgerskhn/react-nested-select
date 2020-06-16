"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Category;

var _react = _interopRequireWildcard(require("react"));

require("./src/Category.css");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function Category(props) {
  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      cats = _useState2[0],
      setCat = _useState2[1];

  var _useState3 = (0, _react.useState)({
    P: null,
    N: props.placeholder
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      selected = _useState4[0],
      setSelected = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      handleMenu = _useState6[0],
      setHandleMenu = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      searchResult = _useState8[0],
      setResult = _useState8[1];

  (0, _react.useEffect)(function () {
    _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.t0 = setCat;
              _context.next = 3;
              return props.options;

            case 3:
              _context.t1 = _context.sent;
              (0, _context.t0)(_context.t1);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }, [props.options]);
  (0, _react.useEffect)(function () {
    props.onSelect(selected);
  }, [selected]);

  var inputHandle = function inputHandle(e) {
    var matches = [];
    var name = e.target.value;

    if (!name.length) {
      setResult(false);
      return 0;
    }

    var catsRecursion = function catsRecursion(cats) {
      if (cats && cats.length) {
        cats.forEach(function (cat) {
          //name gedeg huvisagch ni input iin utga bolno
          var condition = (cat.N.toUpperCase().includes(name.toUpperCase()) || cat.A && cat.A.toUpperCase().includes(name.toUpperCase())) && !(cat.H && cat.H.length);

          if (condition) {
            matches.push(cat);
          }

          if (cat.H && cat.H.length) {
            var sub = cat.H.slice(0);
            catsRecursion(sub.map(function (sub, i) {
              return {
                P: sub.P,
                N: sub.N,
                H: sub.H,
                A: (cat.A ? cat.A : cat.N) + (sub.H ? "/" + sub.N : "")
              };
            }));
          }
        });
      }
    };

    catsRecursion(cats);
    setResult(matches.length ? matches.map(function (a) {
      return {
        P: a.P,
        N: a.N,
        H: [],
        A: a.A
      };
    }) : [{
      N: "Илэрц байхгүй"
    }]);
  };

  (0, _react.useEffect)(function () {
    var popoverFunction = function popoverFunction() {
      setHandleMenu(false);
    };

    document.addEventListener("click", popoverFunction);
    return function cleanup() {
      document.removeEventListener("click", popoverFunction);
    };
  }, []);
  (0, _react.useEffect)(function () {
    if (handleMenu) document.querySelector("#category-select .search").focus();
  }, [handleMenu]);
  return /*#__PURE__*/_react["default"].createElement("div", {
    id: "category-select",
    style: {
      width: "".concat(props.width, "px")
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "selected apparent selbox hover",
    onClick: function onClick(e) {
      e.nativeEvent.stopImmediatePropagation();
      setHandleMenu(!handleMenu);
    }
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: "own"
  }, selected.N), selected.A ? /*#__PURE__*/_react["default"].createElement("p", {
    className: "ancestor"
  }, selected.A) : "", /*#__PURE__*/_react["default"].createElement("div", {
    className: "arrow",
    style: {
      right: "21px",
      top: "18px"
    }
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: "/Icons_flat/arrow-down.svg",
    style: {
      transform: !handleMenu ? "rotate(90deg)" : ""
    },
    height: "10px",
    alt: ""
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "options selbox",
    style: {
      display: handleMenu ? "flex" : "none",
      width: "".concat(props.width - 10, "px")
    },
    onClick: function onClick(e) {
      return e.nativeEvent.stopImmediatePropagation();
    }
  }, /*#__PURE__*/_react["default"].createElement("input", {
    placeholder: "Категориос хайх",
    className: "search ",
    type: "text",
    onChange: function onChange(e) {
      return inputHandle(e);
    }
  }), /*#__PURE__*/_react["default"].createElement(Options, {
    realOptions: searchResult || cats.slice(0),
    options: searchResult || cats.slice(0).map(function (opt) {
      return {
        N: opt.N,
        P: opt.P,
        H: [],
        A: opt.N
      };
    }),
    padding: 12,
    search: searchResult ? true : false,
    setSelected: setSelected,
    setHandleMenu: setHandleMenu,
    setResult: setResult
  })));
}

function Options(props) {
  var _useState9 = (0, _react.useState)([]),
      _useState10 = _slicedToArray(_useState9, 2),
      options = _useState10[0],
      setOptions = _useState10[1];

  (0, _react.useEffect)(function () {
    if (props.options) setOptions(props.options);
  }, [props.options]);

  var handleOptions = function handleOptions(i) {
    if (options[i].N != "Илэрц байхгүй") {
      var arr = options.slice(0);
      if (arr[i].H.length) arr[i].H = [];else if (props.realOptions[i].H && props.realOptions[i].H.length) arr[i].H = props.realOptions[i].H.map(function (opt) {
        return {
          N: opt.N,
          P: opt.P,
          H: [],
          A: arr[i].A + (opt.H ? "/" + opt.N : "")
        };
      });else {
        props.setSelected(arr[i]);
        props.setHandleMenu(0);
        props.setResult(false);
        document.querySelector("#category-select .search").value = "";
      }
      setOptions(arr);
    }
  };

  return /*#__PURE__*/_react["default"].createElement("div", null, options.map(function (item, i) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "option",
      key: i
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "text  hover",
      onClick: function onClick() {
        return handleOptions(i);
      },
      style: {
        paddingLeft: "".concat(props.padding, "px")
      }
    }, item.N, props.search ? /*#__PURE__*/_react["default"].createElement("p", {
      className: "ancestor"
    }, item.A) : "", props.realOptions[i] && props.realOptions[i].H && !props.search ? /*#__PURE__*/_react["default"].createElement("div", {
      className: "arrow"
    }, /*#__PURE__*/_react["default"].createElement("img", {
      src: "/Icons_flat/arrow-down.svg",
      style: {
        transform: item.H && !item.H.length ? "rotate(90deg)" : ""
      },
      height: "10px",
      alt: "",
      srsSet: ""
    })) : ""), /*#__PURE__*/_react["default"].createElement(Options, {
      setSelected: props.setSelected,
      options: item.H,
      realOptions: props.realOptions[i] ? props.realOptions[i].H : [],
      padding: props.padding + 10,
      setHandleMenu: props.setHandleMenu,
      setResult: props.setResult
    }));
  }));
}
