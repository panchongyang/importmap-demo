var r = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var y = Symbol.for("react.element"), P = Symbol.for("react.portal"), T = Symbol.for("react.fragment"), D = Symbol.for("react.strict_mode"), V = Symbol.for("react.profiler"), L = Symbol.for("react.provider"), F = Symbol.for("react.context"), U = Symbol.for("react.forward_ref"), A = Symbol.for("react.suspense"), N = Symbol.for("react.memo"), M = Symbol.for("react.lazy"), C = Symbol.iterator;
function q(e) {
  return e === null || typeof e != "object" ? null : (e = C && e[C] || e["@@iterator"], typeof e == "function" ? e : null);
}
var b = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, $ = Object.assign, O = {};
function p(e, t, n) {
  this.props = e, this.context = t, this.refs = O, this.updater = n || b;
}
p.prototype.isReactComponent = {};
p.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
p.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function I() {
}
I.prototype = p.prototype;
function h(e, t, n) {
  this.props = e, this.context = t, this.refs = O, this.updater = n || b;
}
var S = h.prototype = new I();
S.constructor = h;
$(S, p.prototype);
S.isPureReactComponent = !0;
var k = Array.isArray, j = Object.prototype.hasOwnProperty, E = { current: null }, x = { key: !0, ref: !0, __self: !0, __source: !0 };
function g(e, t, n) {
  var o, u = {}, i = null, a = null;
  if (t != null)
    for (o in t.ref !== void 0 && (a = t.ref), t.key !== void 0 && (i = "" + t.key), t)
      j.call(t, o) && !x.hasOwnProperty(o) && (u[o] = t[o]);
  var s = arguments.length - 2;
  if (s === 1)
    u.children = n;
  else if (1 < s) {
    for (var c = Array(s), l = 0; l < s; l++)
      c[l] = arguments[l + 2];
    u.children = c;
  }
  if (e && e.defaultProps)
    for (o in s = e.defaultProps, s)
      u[o] === void 0 && (u[o] = s[o]);
  return { $$typeof: y, type: e, key: i, ref: a, props: u, _owner: E.current };
}
function z(e, t) {
  return { $$typeof: y, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function R(e) {
  return typeof e == "object" && e !== null && e.$$typeof === y;
}
function B(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var w = /\/+/g;
function m(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? B("" + e.key) : t.toString(36);
}
function d(e, t, n, o, u) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var a = !1;
  if (e === null)
    a = !0;
  else
    switch (i) {
      case "string":
      case "number":
        a = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case y:
          case P:
            a = !0;
        }
    }
  if (a)
    return a = e, u = u(a), e = o === "" ? "." + m(a, 0) : o, k(u) ? (n = "", e != null && (n = e.replace(w, "$&/") + "/"), d(u, t, n, "", function(l) {
      return l;
    })) : u != null && (R(u) && (u = z(u, n + (!u.key || a && a.key === u.key ? "" : ("" + u.key).replace(w, "$&/") + "/") + e)), t.push(u)), 1;
  if (a = 0, o = o === "" ? "." : o + ":", k(e))
    for (var s = 0; s < e.length; s++) {
      i = e[s];
      var c = o + m(i, s);
      a += d(i, t, n, c, u);
    }
  else if (c = q(e), typeof c == "function")
    for (e = c.call(e), s = 0; !(i = e.next()).done; )
      i = i.value, c = o + m(i, s++), a += d(i, t, n, c, u);
  else if (i === "object")
    throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return a;
}
function v(e, t, n) {
  if (e == null)
    return e;
  var o = [], u = 0;
  return d(e, o, "", "", function(i) {
    return t.call(n, i, u++);
  }), o;
}
function H(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n);
    }, function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n);
    }), e._status === -1 && (e._status = 0, e._result = t);
  }
  if (e._status === 1)
    return e._result.default;
  throw e._result;
}
var f = { current: null }, _ = { transition: null }, W = { ReactCurrentDispatcher: f, ReactCurrentBatchConfig: _, ReactCurrentOwner: E }, Y = r.Children = { map: v, forEach: function(e, t, n) {
  v(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return v(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return v(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!R(e))
    throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} }, G = r.Component = p, J = r.Fragment = T, K = r.Profiler = V, Q = r.PureComponent = h, X = r.StrictMode = D, Z = r.Suspense = A, ee = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W, te = r.cloneElement = function(e, t, n) {
  if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var o = $({}, e.props), u = e.key, i = e.ref, a = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, a = E.current), t.key !== void 0 && (u = "" + t.key), e.type && e.type.defaultProps)
      var s = e.type.defaultProps;
    for (c in t)
      j.call(t, c) && !x.hasOwnProperty(c) && (o[c] = t[c] === void 0 && s !== void 0 ? s[c] : t[c]);
  }
  var c = arguments.length - 2;
  if (c === 1)
    o.children = n;
  else if (1 < c) {
    s = Array(c);
    for (var l = 0; l < c; l++)
      s[l] = arguments[l + 2];
    o.children = s;
  }
  return { $$typeof: y, type: e.type, key: u, ref: i, props: o, _owner: a };
}, re = r.createContext = function(e) {
  return e = { $$typeof: F, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: L, _context: e }, e.Consumer = e;
}, ne = r.createElement = g, ue = r.createFactory = function(e) {
  var t = g.bind(null, e);
  return t.type = e, t;
}, oe = r.createRef = function() {
  return { current: null };
}, ce = r.forwardRef = function(e) {
  return { $$typeof: U, render: e };
}, ie = r.isValidElement = R, se = r.lazy = function(e) {
  return { $$typeof: M, _payload: { _status: -1, _result: e }, _init: H };
}, ae = r.memo = function(e, t) {
  return { $$typeof: N, type: e, compare: t === void 0 ? null : t };
}, fe = r.startTransition = function(e) {
  var t = _.transition;
  _.transition = {};
  try {
    e();
  } finally {
    _.transition = t;
  }
}, le = r.unstable_act = function() {
  throw Error("act(...) is not supported in production builds of React.");
}, pe = r.useCallback = function(e, t) {
  return f.current.useCallback(e, t);
}, ye = r.useContext = function(e) {
  return f.current.useContext(e);
}, ve = r.useDebugValue = function() {
}, de = r.useDeferredValue = function(e) {
  return f.current.useDeferredValue(e);
}, _e = r.useEffect = function(e, t) {
  return f.current.useEffect(e, t);
}, me = r.useId = function() {
  return f.current.useId();
}, he = r.useImperativeHandle = function(e, t, n) {
  return f.current.useImperativeHandle(e, t, n);
}, Se = r.useInsertionEffect = function(e, t) {
  return f.current.useInsertionEffect(e, t);
}, Ee = r.useLayoutEffect = function(e, t) {
  return f.current.useLayoutEffect(e, t);
}, Re = r.useMemo = function(e, t) {
  return f.current.useMemo(e, t);
}, Ce = r.useReducer = function(e, t, n) {
  return f.current.useReducer(e, t, n);
}, ke = r.useRef = function(e) {
  return f.current.useRef(e);
}, we = r.useState = function(e) {
  return f.current.useState(e);
}, be = r.useSyncExternalStore = function(e, t, n) {
  return f.current.useSyncExternalStore(e, t, n);
}, $e = r.useTransition = function() {
  return f.current.useTransition();
}, Oe = r.version = "18.2.0";
export {
  Y as Children,
  G as Component,
  J as Fragment,
  K as Profiler,
  Q as PureComponent,
  X as StrictMode,
  Z as Suspense,
  ee as __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  te as cloneElement,
  re as createContext,
  ne as createElement,
  ue as createFactory,
  oe as createRef,
  r as default,
  ce as forwardRef,
  ie as isValidElement,
  se as lazy,
  ae as memo,
  fe as startTransition,
  le as unstable_act,
  pe as useCallback,
  ye as useContext,
  ve as useDebugValue,
  de as useDeferredValue,
  _e as useEffect,
  me as useId,
  he as useImperativeHandle,
  Se as useInsertionEffect,
  Ee as useLayoutEffect,
  Re as useMemo,
  Ce as useReducer,
  ke as useRef,
  we as useState,
  be as useSyncExternalStore,
  $e as useTransition,
  Oe as version
};
