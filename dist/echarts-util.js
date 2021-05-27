/*!
 * @license :echarts-util - V1.0.0 - 27/05/2021
 * https://github.com/wangzl1163/webstorer
 * Copyright (c) 2021 @wangzl1163; Licensed MIT
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("echarts-util", [], factory);
	else if(typeof exports === 'object')
		exports["echarts-util"] = factory();
	else
		root["echarts-util"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 22);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(27)))

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(23);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(1);

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var toObject = __webpack_require__(14);

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function hasOwn(it, key) {
  return hasOwnProperty.call(toObject(it), key);
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(50);

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(0);
var getOwnPropertyDescriptor = __webpack_require__(28).f;
var isForced = __webpack_require__(32);
var path = __webpack_require__(5);
var bind = __webpack_require__(16);
var createNonEnumerableProperty = __webpack_require__(17);
var has = __webpack_require__(6);

var wrapConstructor = function (NativeConstructor) {
  var Wrapper = function (a, b, c) {
    if (this instanceof NativeConstructor) {
      switch (arguments.length) {
        case 0: return new NativeConstructor();
        case 1: return new NativeConstructor(a);
        case 2: return new NativeConstructor(a, b);
      } return new NativeConstructor(a, b, c);
    } return NativeConstructor.apply(this, arguments);
  };
  Wrapper.prototype = NativeConstructor.prototype;
  return Wrapper;
};

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var PROTO = options.proto;

  var nativeSource = GLOBAL ? global : STATIC ? global[TARGET] : (global[TARGET] || {}).prototype;

  var target = GLOBAL ? path : path[TARGET] || (path[TARGET] = {});
  var targetPrototype = target.prototype;

  var FORCED, USE_NATIVE, VIRTUAL_PROTOTYPE;
  var key, sourceProperty, targetProperty, nativeProperty, resultProperty, descriptor;

  for (key in source) {
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contains in native
    USE_NATIVE = !FORCED && nativeSource && has(nativeSource, key);

    targetProperty = target[key];

    if (USE_NATIVE) if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(nativeSource, key);
      nativeProperty = descriptor && descriptor.value;
    } else nativeProperty = nativeSource[key];

    // export native or implementation
    sourceProperty = (USE_NATIVE && nativeProperty) ? nativeProperty : source[key];

    if (USE_NATIVE && typeof targetProperty === typeof sourceProperty) continue;

    // bind timers to global for call from export context
    if (options.bind && USE_NATIVE) resultProperty = bind(sourceProperty, global);
    // wrap global constructors for prevent changs in this version
    else if (options.wrap && USE_NATIVE) resultProperty = wrapConstructor(sourceProperty);
    // make static versions for prototype methods
    else if (PROTO && typeof sourceProperty == 'function') resultProperty = bind(Function.call, sourceProperty);
    // default case
    else resultProperty = sourceProperty;

    // add a flag to not completely full polyfills
    if (options.sham || (sourceProperty && sourceProperty.sham) || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(resultProperty, 'sham', true);
    }

    target[key] = resultProperty;

    if (PROTO) {
      VIRTUAL_PROTOTYPE = TARGET + 'Prototype';
      if (!has(path, VIRTUAL_PROTOTYPE)) {
        createNonEnumerableProperty(path, VIRTUAL_PROTOTYPE, {});
      }
      // export virtual prototype methods
      path[VIRTUAL_PROTOTYPE][key] = sourceProperty;
      // export real prototype methods
      if (options.real && targetPrototype && !targetPrototype[key]) {
        createNonEnumerableProperty(targetPrototype, key, sourceProperty);
      }
    }
  }
};


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(1);
var classof = __webpack_require__(11);

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),
/* 11 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 12 */
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4);

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__(12);

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(3);
var fails = __webpack_require__(1);
var createElement = __webpack_require__(31);

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- requied for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__(33);

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(3);
var definePropertyModule = __webpack_require__(34);
var createPropertyDescriptor = __webpack_require__(9);

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(11);

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var shared = __webpack_require__(40);
var has = __webpack_require__(6);
var uid = __webpack_require__(44);
var NATIVE_SYMBOL = __webpack_require__(20);
var USE_SYMBOL_AS_UID = __webpack_require__(47);

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    if (NATIVE_SYMBOL && has(Symbol, name)) {
      WellKnownSymbolsStore[name] = Symbol[name];
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
    }
  } return WellKnownSymbolsStore[name];
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__(21);
var fails = __webpack_require__(1);

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  return !String(Symbol()) ||
    // Chrome 38 Symbol has incorrect toString conversion
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var userAgent = __webpack_require__(45);

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] < 4 ? 1 : match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createOption", function() { return createOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPieOption", function() { return createPieOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createLineOption", function() { return createLineOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBarOption", function() { return createBarOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRadarOption", function() { return createRadarOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMultiOption", function() { return createMultiOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMultiLineOption", function() { return createMultiLineOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMultiBarOption", function() { return createMultiBarOption; });
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_array_is_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_corejs3_core_js_stable_array_is_array__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs3_core_js_stable_array_is_array__WEBPACK_IMPORTED_MODULE_1__);



const formatTitle = title => typeof title === 'string' ? {
  text: title
} : title;

const axisLine = {
  lineStyle: {
    color: '#CCCCCC'
  }
};
const splitLine = {
  lineStyle: {
    color: '#CCCCCC'
  }
}; // 默认配置

const defaultConfig = {
  config: {
    color: ['#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de', '#3ba272', '#fc8452', '#9a60b4', '#ea7ccc'],
    title: {
      left: 40,
      textStyle: {
        fontFamily: 'Microsoft YaHei',
        fontSize: 14,
        fontWeight: 400
      }
    },
    textStyle: {
      color: '#333333'
    }
  },
  seriesItemConfig: {
    label: {
      show: false
    },
    hoverAnimation: false
  }
};
/**
 * 创建Echarts的options
 * @param {SingleSeries} singleSeriesOption 单个series的配置
 */

const createOption = singleSeriesOptions => {
  const {
    title = '',
    type = '',
    data = [],
    colors = [],
    extraConfig = {
      config: {},
      seriesItemConfig: {}
    }
  } = singleSeriesOptions;
  const formattedTitle = formatTitle(title);
  const config = { ...extraConfig.config,
    color: colors.length ? colors : defaultConfig.config.color,
    xAxis: {
      type: 'category',
      ...extraConfig.config.xAxis
    },
    yAxis: {
      type: 'value',
      ...extraConfig.config.yAxis
    },
    title: { ...defaultConfig.config.title,
      ...formattedTitle
    },
    textStyle: { ...defaultConfig.config.textStyle,
      ...(extraConfig.config.textStyle || {})
    },
    series: [{
      type: type,
      data: data,
      ...defaultConfig.seriesItemConfig,
      ...extraConfig.seriesItemConfig
    }]
  };
  return config;
};
/**
 * 创建Echarts饼状图options，默认为环状饼图
 * @param {SingleSeriesPieType} pieOptions 饼图的配置
 */

const createPieOption = pieOptions => {
  const {
    title = '',
    data = [],
    colors = [],
    radius = ['75%', '100%'],
    extraConfig = {
      config: {},
      seriesItemConfig: {}
    }
  } = pieOptions;
  const seriesItemConfig = {
    radius,
    ...extraConfig.seriesItemConfig
  }; // 图例

  const legend = {
    icon: 'react',
    itemWidth: 8,
    itemHeight: 8,
    top: 0,
    right: 0,
    textStyle: {
      color: '#666666'
    },
    ...(extraConfig.config.legend || {})
  };
  return createOption({
    type: 'pie',
    title: title,
    data: data,
    colors: colors,
    extraConfig: {
      config: { ...extraConfig.config,
        legend
      },
      seriesItemConfig
    }
  });
};
/**
 * 创建Echarts折线图options，默认为不带阴影面积的折线图
 * @param {SingleSeriesLineType} lineOptions 折线图的配置
 */

const createLineOption = lineOptions => {
  const {
    title = '',
    data = [],
    colors = [],
    extraConfig = {
      config: {},
      seriesItemConfig: {}
    }
  } = lineOptions;
  const config = { ...extraConfig.config,
    tooltip: {
      show: true,
      trigger: 'axis',
      formatter: function (params) {
        const timeStr = params[0].value[0];

        const valueStr = _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default()(params).call(params, param => param.marker + param.seriesName + '：' + param.value[1]).join('<br/>');

        return `${timeStr}<br/>${valueStr}`;
      },
      ...extraConfig.config.tooltip
    },
    grid: {
      top: 50,
      left: 0,
      right: 25,
      bottom: 0,
      containLabel: true,
      ...(extraConfig.config.grid || {})
    },
    xAxis: {
      type: 'time',
      boundaryGap: false,
      axisLine,
      splitLine: {
        show: false,
        lineStyle: {
          type: 'dashed',
          ...splitLine.lineStyle
        }
      },
      ...(extraConfig.config.xAxis || {})
    },
    yAxis: {
      type: 'value',
      axisLine: {
        show: false,
        ...axisLine
      },
      splitLine,
      ...(extraConfig.config.yAxis || {})
    }
  };
  return createOption({
    type: 'line',
    title: title,
    data: data,
    colors: colors,
    extraConfig: {
      config,
      seriesItemConfig: {
        symbol: 'none',
        ...extraConfig.seriesItemConfig
      }
    }
  });
};
/**
 * 创建Echarts柱状图options
 * @param {SingleSeriesBarType} barOptions 柱状图的配置
 */

const createBarOption = barOptions => {
  const {
    title = '',
    data = [],
    colors = [],
    extraConfig = {
      config: {},
      seriesItemConfig: {}
    }
  } = barOptions;
  const axisLine = {
    lineStyle: {
      color: '#979797'
    }
  };
  const splitLine = {
    lineStyle: {
      color: '#EDEDED',
      type: 'dashed'
    }
  };
  const config = { ...extraConfig.config,
    grid: {
      top: 28,
      left: 0,
      right: 0,
      bottom: 0,
      containLabel: true,
      ...(extraConfig.config.grid || {})
    },
    xAxis: {
      type: 'category',
      axisLine,
      splitLine: {
        show: false,
        ...splitLine
      },
      ...(extraConfig.config.xAxis || {})
    },
    yAxis: {
      type: 'value',
      boundaryGap: false,
      axisLine: {
        show: true,
        ...axisLine
      },
      splitLine,
      ...(extraConfig.config.yAxis || {})
    }
  };
  return createOption({
    type: 'bar',
    title: title,
    data: data,
    colors: colors,
    extraConfig: {
      config,
      seriesItemConfig: extraConfig.seriesItemConfig
    }
  });
};
/**
 * 创建Echarts雷达图options
 * @param radarOptions 雷达图的配置
 */

const createRadarOption = radarOptions => {
  const {
    title = '',
    legend = [],
    indicator = [],
    data = [],
    colors = [],
    extraConfig = {
      config: {},
      seriesItemConfig: {}
    }
  } = radarOptions;
  const config = { ...extraConfig.config,
    legend: {
      data: legend,
      ...(extraConfig.config.legend || {})
    },
    radar: {
      axisLine: {
        lineStyle: {
          type: 'dashed',
          ...axisLine.lineStyle
        }
      },
      splitLine,
      indicator
    }
  };
  return createOption({
    type: 'radar',
    title: title,
    data: data,
    colors: colors,
    extraConfig: {
      config,
      seriesItemConfig: extraConfig.seriesItemConfig
    }
  });
};
/**
 * 创建Echarts图中具有多个series的options
 * @param multiSeriesOption 多个series的配置
 */

const createMultiOption = multiSeriesOption => {
  var _context, _context2;

  const {
    title = '',
    type = '',
    data = [],
    colors = [],
    extraConfig = {
      config: {},
      seriesItemConfig: {}
    }
  } = multiSeriesOption;
  const formattedTitle = formatTitle(title);
  const xAxis = {
    axisLine,
    splitLine: {
      show: false,
      lineStyle: {
        type: 'dashed',
        ...splitLine.lineStyle
      }
    }
  };
  const yAxis = {
    boundaryGap: false,
    axisLine: {
      show: true,
      ...axisLine
    },
    splitLine
  };
  const config = { ...extraConfig.config,
    title: { ...defaultConfig.config.title,
      ...formattedTitle
    },
    textStyle: { ...defaultConfig.config.textStyle,
      ...(extraConfig.config.textStyle || {})
    },
    tooltip: {
      show: true,
      trigger: 'axis',
      formatter: function (params) {
        const timeStr = params[0].value[0];

        const valueStr = _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default()(params).call(params, param => param.marker + param.seriesName + '：' + param.value[1]).join('<br/>');

        return `${timeStr}<br/>${valueStr}`;
      },
      ...(extraConfig.config.tooltip || {})
    },
    legend: {
      icon: 'react',
      itemWidth: 8,
      itemHeight: 8,
      top: 0,
      right: 0,
      textStyle: {
        color: '#666666'
      },
      ...(extraConfig.config.legend || {})
    },
    xAxis: _babel_runtime_corejs3_core_js_stable_array_is_array__WEBPACK_IMPORTED_MODULE_1___default()(extraConfig.config.xAxis) ? _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default()(_context = extraConfig.config.xAxis).call(_context, item => ({ ...xAxis,
      ...item
    })) : {
      type: 'category',
      ...xAxis,
      ...(extraConfig.config.xAxis || {})
    },
    yAxis: _babel_runtime_corejs3_core_js_stable_array_is_array__WEBPACK_IMPORTED_MODULE_1___default()(extraConfig.config.yAxis) ? _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default()(_context2 = extraConfig.config.yAxis).call(_context2, item => ({ ...yAxis,
      ...item
    })) : {
      type: 'value',
      ...yAxis,
      ...(extraConfig.config.yAxis || {})
    },
    grid: {
      top: 28,
      left: 0,
      right: 0,
      bottom: 0,
      containLabel: true,
      ...(extraConfig.config.grid || {})
    }
  };

  const handledSeries = _babel_runtime_corejs3_core_js_stable_instance_map__WEBPACK_IMPORTED_MODULE_0___default()(data).call(data, item => {
    const itemConfig = typeof extraConfig.seriesItemConfig === 'function' ? extraConfig.seriesItemConfig(item) : extraConfig.seriesItemConfig;
    return {
      name: item.name,
      type: item.type || type,
      label: {
        show: false
      },
      hoverAnimation: false,
      data: item.data,
      ...itemConfig
    };
  });

  return { ...config,
    color: colors.length ? colors : defaultConfig.config.color,
    series: handledSeries
  };
};
/**
 * 创建具有多个series的折线图的options
 * @param multiLineOption 多条折线的配置
 */

const createMultiLineOption = multiLineOption => {
  const {
    title = '',
    data = [],
    colors = [],
    extraConfig = {
      config: {},
      seriesItemConfig: {}
    }
  } = multiLineOption;
  return createMultiOption({
    type: 'line',
    title: title,
    data: data,
    colors: colors,
    extraConfig: {
      config: extraConfig.config,
      seriesItemConfig: {
        symbol: 'none',
        ...extraConfig.seriesItemConfig
      }
    }
  });
};
/**
 * 创建具有多个series的柱状图的options
 * @param multiBarOptions 多个柱状图的配置
 */

const createMultiBarOption = multiBarOptions => {
  const {
    title = '',
    data = [],
    colors = [],
    extraConfig = {
      config: {},
      seriesItemConfig: {}
    }
  } = multiBarOptions;
  return createMultiOption({
    type: 'bar',
    title: title,
    data: data,
    colors: colors,
    extraConfig: {
      config: extraConfig.config,
      seriesItemConfig: {
        symbol: 'none',
        ...extraConfig.seriesItemConfig
      }
    }
  });
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(24);

module.exports = parent;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var map = __webpack_require__(25);

var ArrayPrototype = Array.prototype;

module.exports = function (it) {
  var own = it.map;
  return it === ArrayPrototype || (it instanceof Array && own === ArrayPrototype.map) ? map : own;
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(26);
var entryVirtual = __webpack_require__(49);

module.exports = entryVirtual('Array').map;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(8);
var $map = __webpack_require__(36).map;
var arrayMethodHasSpeciesSupport = __webpack_require__(48);

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');

// `Array.prototype.map` method
// https://tc39.es/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 27 */
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
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(3);
var propertyIsEnumerableModule = __webpack_require__(29);
var createPropertyDescriptor = __webpack_require__(9);
var toIndexedObject = __webpack_require__(30);
var toPrimitive = __webpack_require__(13);
var has = __webpack_require__(6);
var IE8_DOM_DEFINE = __webpack_require__(15);

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(10);
var requireObjectCoercible = __webpack_require__(12);

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var isObject = __webpack_require__(4);

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(1);

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(3);
var IE8_DOM_DEFINE = __webpack_require__(15);
var anObject = __webpack_require__(35);
var toPrimitive = __webpack_require__(13);

// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4);

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__(16);
var IndexedObject = __webpack_require__(10);
var toObject = __webpack_require__(14);
var toLength = __webpack_require__(37);
var arraySpeciesCreate = __webpack_require__(39);

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterOut }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var IS_FILTER_OUT = TYPE == 7;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_OUT ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else switch (TYPE) {
          case 4: return false;             // every
          case 7: push.call(target, value); // filterOut
        }
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6),
  // `Array.prototype.filterOut` method
  // https://github.com/tc39/proposal-array-filtering
  filterOut: createMethod(7)
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(38);

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),
/* 38 */
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.es/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4);
var isArray = __webpack_require__(18);
var wellKnownSymbol = __webpack_require__(19);

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.es/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__(41);
var store = __webpack_require__(42);

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.12.1',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var setGlobal = __webpack_require__(43);

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var createNonEnumerableProperty = __webpack_require__(17);

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),
/* 44 */
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(46);

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(5);
var global = __webpack_require__(0);

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__(20);

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(1);
var wellKnownSymbol = __webpack_require__(19);
var V8_VERSION = __webpack_require__(21);

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__(5);

module.exports = function (CONSTRUCTOR) {
  return path[CONSTRUCTOR + 'Prototype'];
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var parent = __webpack_require__(51);

module.exports = parent;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(52);
var path = __webpack_require__(5);

module.exports = path.Array.isArray;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(8);
var isArray = __webpack_require__(18);

// `Array.isArray` method
// https://tc39.es/ecma262/#sec-array.isarray
$({ target: 'Array', stat: true }, {
  isArray: isArray
});


/***/ })
/******/ ]);
});
//# sourceMappingURL=echarts-util.map