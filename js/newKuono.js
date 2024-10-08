!function (t) {
    var e = {};

    function n(i) {
        if (e[i]) return e[i].exports;
        var s = e[i] = {i: i, l: !1, exports: {}};
        return t[i].call(s.exports, s, s.exports, n), s.l = !0, s.exports
    }

    n.m = t, n.c = e, n.d = function (t, e, i) {
        n.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: i})
    }, n.r = function (t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
    }, n.t = function (t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var i = Object.create(null);
        if (n.r(i), Object.defineProperty(i, "default", {
            enumerable: !0,
            value: t
        }), 2 & e && "string" != typeof t) for (var s in t) n.d(i, s, function (e) {
            return t[e]
        }.bind(null, s));
        return i
    }, n.n = function (t) {
        var e = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "", n(n.s = 153)
}([function (t, e, n) {
    "use strict";
    var i = n(6), s = n(61), r = n(96), o = n(4), a = n(62).f, l = n(102), c = n(15), u = n(34), d = n(23), h = n(11),
        p = function (t) {
            var e = function (n, i, r) {
                if (this instanceof e) {
                    switch (arguments.length) {
                        case 0:
                            return new t;
                        case 1:
                            return new t(n);
                        case 2:
                            return new t(n, i)
                    }
                    return new t(n, i, r)
                }
                return s(t, this, arguments)
            };
            return e.prototype = t.prototype, e
        };
    t.exports = function (t, e) {
        var n, s, f, g, m, v, b, y, w, x = t.target, C = t.global, S = t.stat, T = t.proto,
            E = C ? i : S ? i[x] : (i[x] || {}).prototype, P = C ? c : c[x] || d(c, x, {})[x], M = P.prototype;
        for (g in e) s = !(n = l(C ? g : x + (S ? "." : "#") + g, t.forced)) && E && h(E, g), v = P[g], s && (b = t.dontCallGetSet ? (w = a(E, g)) && w.value : E[g]), m = s && b ? b : e[g], s && typeof v == typeof m || (y = t.bind && s ? u(m, i) : t.wrap && s ? p(m) : T && o(m) ? r(m) : m, (t.sham || m && m.sham || v && v.sham) && d(y, "sham", !0), d(P, g, y), T && (h(c, f = x + "Prototype") || d(c, f, {}), d(c[f], g, m), t.real && M && (n || !M[g]) && d(M, g, m)))
    }
}, function (t, e, n) {
    t.exports = n(163)
}, function (t, e, n) {
    var i = n(6), s = n(40), r = n(11), o = n(80), a = n(39), l = n(100), c = i.Symbol, u = s("wks"),
        d = l ? c.for || c : c && c.withoutSetter || o;
    t.exports = function (t) {
        return r(u, t) || (u[t] = a && r(c, t) ? c[t] : d("Symbol." + t)), u[t]
    }
}, function (t, e, n) {
    var i = n(48), s = Function.prototype, r = s.call, o = i && s.bind.bind(r, r);
    t.exports = i ? o : function (t) {
        return function () {
            return r.apply(t, arguments)
        }
    }
}, function (t, e, n) {
    var i = n(97), s = i.all;
    t.exports = i.IS_HTMLDDA ? function (t) {
        return "function" == typeof t || t === s
    } : function (t) {
        return "function" == typeof t
    }
}, function (t, e) {
    t.exports = function (t) {
        try {
            return !!t()
        } catch (t) {
            return !0
        }
    }
}, function (t, e, n) {
    (function (e) {
        var n = function (t) {
            return t && t.Math == Math && t
        };
        t.exports = n("object" == typeof globalThis && globalThis) || n("object" == typeof window && window) || n("object" == typeof self && self) || n("object" == typeof e && e) || function () {
            return this
        }() || this || Function("return this")()
    }).call(this, n(158))
}, function (t, e, n) {
    var i = n(15), s = n(11), r = n(93), o = n(20).f;
    t.exports = function (t) {
        var e = i.Symbol || (i.Symbol = {});
        s(e, t) || o(e, t, {value: r.f(t)})
    }
}, function (t, e, n) {
    t.exports = n(290)
}, function (t, e, n) {
    var i = n(48), s = Function.prototype.call;
    t.exports = i ? s.bind(s) : function () {
        return s.apply(s, arguments)
    }
}, function (t, e, n) {
    var i = n(3);
    t.exports = i({}.isPrototypeOf)
}, function (t, e, n) {
    var i = n(3), s = n(22), r = i({}.hasOwnProperty);
    t.exports = Object.hasOwn || function (t, e) {
        return r(s(t), e)
    }
}, function (t, e, n) {
    var i = n(5);
    t.exports = !i((function () {
        return 7 != Object.defineProperty({}, 1, {
            get: function () {
                return 7
            }
        })[1]
    }))
}, function (t, e, n) {
    var i = n(4), s = n(97), r = s.all;
    t.exports = s.IS_HTMLDDA ? function (t) {
        return "object" == typeof t ? null !== t : i(t) || t === r
    } : function (t) {
        return "object" == typeof t ? null !== t : i(t)
    }
}, function (t, e, n) {
    var i = n(15), s = n(6), r = n(4), o = function (t) {
        return r(t) ? t : void 0
    };
    t.exports = function (t, e) {
        return arguments.length < 2 ? o(i[t]) || o(s[t]) : i[t] && i[t][e] || s[t] && s[t][e]
    }
}, function (t, e) {
    t.exports = {}
}, function (t, e, n) {
    var i = n(13), s = String, r = TypeError;
    t.exports = function (t) {
        if (i(t)) return t;
        throw r(s(t) + " is not an object")
    }
}, function (t, e, n) {
    var i = n(15);
    t.exports = function (t) {
        return i[t + "Prototype"]
    }
}, function (t, e) {
    t.exports = !0
}, function (t, e, n) {
    var i = n(4), s = n(53), r = TypeError;
    t.exports = function (t) {
        if (i(t)) return t;
        throw r(s(t) + " is not a function")
    }
}, function (t, e, n) {
    var i = n(12), s = n(101), r = n(103), o = n(16), a = n(63), l = TypeError, c = Object.defineProperty,
        u = Object.getOwnPropertyDescriptor;
    e.f = i ? r ? function (t, e, n) {
        if (o(t), e = a(e), o(n), "function" == typeof t && "prototype" === e && "value" in n && "writable" in n && !n.writable) {
            var i = u(t, e);
            i && i.writable && (t[e] = n.value, n = {
                configurable: "configurable" in n ? n.configurable : i.configurable,
                enumerable: "enumerable" in n ? n.enumerable : i.enumerable,
                writable: !1
            })
        }
        return c(t, e, n)
    } : c : function (t, e, n) {
        if (o(t), e = a(e), o(n), s) try {
            return c(t, e, n)
        } catch (t) {
        }
        if ("get" in n || "set" in n) throw l("Accessors not supported");
        return "value" in n && (t[e] = n.value), t
    }
}, function (t, e, n) {
    t.exports = n(210)
}, function (t, e, n) {
    var i = n(49), s = Object;
    t.exports = function (t) {
        return s(i(t))
    }
}, function (t, e, n) {
    var i = n(12), s = n(20), r = n(28);
    t.exports = i ? function (t, e, n) {
        return s.f(t, e, r(1, n))
    } : function (t, e, n) {
        return t[e] = n, t
    }
}, function (t, e, n) {
    var i = n(23);
    t.exports = function (t, e, n, s) {
        return s && s.enumerable ? t[e] = n : i(t, e, n), t
    }
}, function (t, e, n) {
    var i = n(31), s = String;
    t.exports = function (t) {
        if ("Symbol" === i(t)) throw TypeError("Cannot convert a Symbol value to a string");
        return s(t)
    }
}, function (t, e, n) {
    "use strict";
    var i = n(19), s = TypeError, r = function (t) {
        var e, n;
        this.promise = new t((function (t, i) {
            if (void 0 !== e || void 0 !== n) throw s("Bad Promise constructor");
            e = t, n = i
        })), this.resolve = i(e), this.reject = i(n)
    };
    t.exports.f = function (t) {
        return new r(t)
    }
}, function (t, e, n) {
    var i = n(3), s = i({}.toString), r = i("".slice);
    t.exports = function (t) {
        return r(s(t), 8, -1)
    }
}, function (t, e) {
    t.exports = function (t, e) {
        return {enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e}
    }
}, function (t, e, n) {
    var i = n(99), s = n(49);
    t.exports = function (t) {
        return i(s(t))
    }
}, function (t, e, n) {
    var i = n(167);
    t.exports = function (t) {
        return i(t.length)
    }
}, function (t, e, n) {
    var i = n(83), s = n(4), r = n(27), o = n(2)("toStringTag"), a = Object, l = "Arguments" == r(function () {
        return arguments
    }());
    t.exports = i ? r : function (t) {
        var e, n, i;
        return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (n = function (t, e) {
            try {
                return t[e]
            } catch (t) {
            }
        }(e = a(t), o)) ? n : l ? r(e) : "Object" == (i = r(e)) && s(e.callee) ? "Arguments" : i
    }
}, function (t, e, n) {
    t.exports = n(106)
}, function (t, e, n) {
    t.exports = n(170)
}, function (t, e, n) {
    var i = n(96), s = n(19), r = n(48), o = i(i.bind);
    t.exports = function (t, e) {
        return s(t), void 0 === e ? t : r ? o(t, e) : function () {
            return t.apply(e, arguments)
        }
    }
}, function (t, e, n) {
    var i = n(27);
    t.exports = Array.isArray || function (t) {
        return "Array" == i(t)
    }
}, function (t, e, n) {
    n(42);
    var i = n(179), s = n(6), r = n(31), o = n(23), a = n(43), l = n(2)("toStringTag");
    for (var c in i) {
        var u = s[c], d = u && u.prototype;
        d && r(d) !== l && o(d, l, c), a[c] = a.Array
    }
}, function (t, e, n) {
    var i = n(83), s = n(20).f, r = n(23), o = n(11), a = n(176), l = n(2)("toStringTag");
    t.exports = function (t, e, n, c) {
        if (t) {
            var u = n ? t : t.prototype;
            o(u, l) || s(u, l, {configurable: !0, value: e}), c && !i && r(u, "toString", a)
        }
    }
}, function (t, e, n) {
    t.exports = n(295)
}, function (t, e, n) {
    var i = n(64), s = n(5), r = n(6).String;
    t.exports = !!Object.getOwnPropertySymbols && !s((function () {
        var t = Symbol();
        return !r(t) || !(Object(t) instanceof Symbol) || !Symbol.sham && i && i < 41
    }))
}, function (t, e, n) {
    var i = n(18), s = n(79);
    (t.exports = function (t, e) {
        return s[t] || (s[t] = void 0 !== e ? e : {})
    })("versions", []).push({
        version: "3.31.1",
        mode: i ? "pure" : "global",
        copyright: "© 2014-2023 Denis Pushkarev (zloirock.ru)",
        license: "https://github.com/zloirock/core-js/blob/v3.31.1/LICENSE",
        source: "https://github.com/zloirock/core-js"
    })
}, function (t, e, n) {
    var i = n(34), s = n(3), r = n(99), o = n(22), a = n(30), l = n(104), c = s([].push), u = function (t) {
        var e = 1 == t, n = 2 == t, s = 3 == t, u = 4 == t, d = 6 == t, h = 7 == t, p = 5 == t || d;
        return function (f, g, m, v) {
            for (var b, y, w = o(f), x = r(w), C = i(g, m), S = a(x), T = 0, E = v || l, P = e ? E(f, S) : n || h ? E(f, 0) : void 0; S > T; T++) if ((p || T in x) && (y = C(b = x[T], T, w), t)) if (e) P[T] = y; else if (y) switch (t) {
                case 3:
                    return !0;
                case 5:
                    return b;
                case 6:
                    return T;
                case 2:
                    c(P, b)
            } else switch (t) {
                case 4:
                    return !1;
                case 7:
                    c(P, b)
            }
            return d ? -1 : s || u ? u : P
        }
    };
    t.exports = {
        forEach: u(0),
        map: u(1),
        filter: u(2),
        some: u(3),
        every: u(4),
        find: u(5),
        findIndex: u(6),
        filterReject: u(7)
    }
}, function (t, e, n) {
    "use strict";
    var i = n(29), s = n(84), r = n(43), o = n(54), a = n(20).f, l = n(107), c = n(116), u = n(18), d = n(12),
        h = o.set, p = o.getterFor("Array Iterator");
    t.exports = l(Array, "Array", (function (t, e) {
        h(this, {type: "Array Iterator", target: i(t), index: 0, kind: e})
    }), (function () {
        var t = p(this), e = t.target, n = t.kind, i = t.index++;
        return !e || i >= e.length ? (t.target = void 0, c(void 0, !0)) : c("keys" == n ? i : "values" == n ? e[i] : [i, e[i]], !1)
    }), "values");
    var f = r.Arguments = r.Array;
    if (s("keys"), s("values"), s("entries"), !u && d && "values" !== f.name) try {
        a(f, "name", {value: "values"})
    } catch (t) {
    }
}, function (t, e) {
    t.exports = {}
}, function (t, e, n) {
    var i, s = n(16), r = n(110), o = n(86), a = n(69), l = n(114), c = n(81), u = n(68), d = u("IE_PROTO"),
        h = function () {
        }, p = function (t) {
            return "<script>" + t + "<\/script>"
        }, f = function (t) {
            t.write(p("")), t.close();
            var e = t.parentWindow.Object;
            return t = null, e
        }, g = function () {
            try {
                i = new ActiveXObject("htmlfile")
            } catch (t) {
            }
            var t, e;
            g = "undefined" != typeof document ? document.domain && i ? f(i) : ((e = c("iframe")).style.display = "none", l.appendChild(e), e.src = String("javascript:"), (t = e.contentWindow.document).open(), t.write(p("document.F=Object")), t.close(), t.F) : f(i);
            for (var n = o.length; n--;) delete g.prototype[o[n]];
            return g()
        };
    a[d] = !0, t.exports = Object.create || function (t, e) {
        var n;
        return null !== t ? (h.prototype = s(t), n = new h, h.prototype = null, n[d] = t) : n = g(), void 0 === e ? n : r.f(n, e)
    }
}, function (t, e) {
    t.exports = function (t) {
        try {
            return {error: !1, value: t()}
        } catch (t) {
            return {error: !0, value: t}
        }
    }
}, function (t, e, n) {
    var i = n(6);
    t.exports = i.Promise
}, function (t, e, n) {
    t.exports = n(184)
}, function (t, e, n) {
    var i = n(5);
    t.exports = !i((function () {
        var t = function () {
        }.bind();
        return "function" != typeof t || t.hasOwnProperty("prototype")
    }))
}, function (t, e, n) {
    var i = n(50), s = TypeError;
    t.exports = function (t) {
        if (i(t)) throw s("Can't call method on " + t);
        return t
    }
}, function (t, e) {
    t.exports = function (t) {
        return null == t
    }
}, function (t, e, n) {
    var i = n(14), s = n(4), r = n(10), o = n(100), a = Object;
    t.exports = o ? function (t) {
        return "symbol" == typeof t
    } : function (t) {
        var e = i("Symbol");
        return s(e) && r(e.prototype, a(t))
    }
}, function (t, e) {
    t.exports = "undefined" != typeof navigator && String(navigator.userAgent) || ""
}, function (t, e) {
    var n = String;
    t.exports = function (t) {
        try {
            return n(t)
        } catch (t) {
            return "Object"
        }
    }
}, function (t, e, n) {
    var i, s, r, o = n(174), a = n(6), l = n(13), c = n(23), u = n(11), d = n(79), h = n(68), p = n(69),
        f = a.TypeError, g = a.WeakMap;
    if (o || d.state) {
        var m = d.state || (d.state = new g);
        m.get = m.get, m.has = m.has, m.set = m.set, i = function (t, e) {
            if (m.has(t)) throw f("Object already initialized");
            return e.facade = t, m.set(t, e), e
        }, s = function (t) {
            return m.get(t) || {}
        }, r = function (t) {
            return m.has(t)
        }
    } else {
        var v = h("state");
        p[v] = !0, i = function (t, e) {
            if (u(t, v)) throw f("Object already initialized");
            return e.facade = t, c(t, v, e), e
        }, s = function (t) {
            return u(t, v) ? t[v] : {}
        }, r = function (t) {
            return u(t, v)
        }
    }
    t.exports = {
        set: i, get: s, has: r, enforce: function (t) {
            return r(t) ? s(t) : i(t, {})
        }, getterFor: function (t) {
            return function (e) {
                var n;
                if (!l(e) || (n = s(e)).type !== t) throw f("Incompatible receiver, " + t + " required");
                return n
            }
        }
    }
}, function (t, e, n) {
    var i = n(31), s = n(65), r = n(50), o = n(43), a = n(2)("iterator");
    t.exports = function (t) {
        if (!r(t)) return s(t, a) || s(t, "@@iterator") || o[i(t)]
    }
}, function (t, e, n) {
    var i = n(3);
    t.exports = i([].slice)
}, function (t, e, n) {
    var i = n(34), s = n(9), r = n(16), o = n(53), a = n(132), l = n(30), c = n(10), u = n(88), d = n(55), h = n(131),
        p = TypeError, f = function (t, e) {
            this.stopped = t, this.result = e
        }, g = f.prototype;
    t.exports = function (t, e, n) {
        var m, v, b, y, w, x, C, S = n && n.that, T = !(!n || !n.AS_ENTRIES), E = !(!n || !n.IS_RECORD),
            P = !(!n || !n.IS_ITERATOR), M = !(!n || !n.INTERRUPTED), O = i(e, S), L = function (t) {
                return m && h(m, "normal", t), new f(!0, t)
            }, _ = function (t) {
                return T ? (r(t), M ? O(t[0], t[1], L) : O(t[0], t[1])) : M ? O(t, L) : O(t)
            };
        if (E) m = t.iterator; else if (P) m = t; else {
            if (!(v = d(t))) throw p(o(t) + " is not iterable");
            if (a(v)) {
                for (b = 0, y = l(t); y > b; b++) if ((w = _(t[b])) && c(g, w)) return w;
                return new f(!1)
            }
            m = u(t, v)
        }
        for (x = E ? t.next : m.next; !(C = s(x, m)).done;) {
            try {
                w = _(C.value)
            } catch (t) {
                h(m, "throw", t)
            }
            if ("object" == typeof w && w && c(g, w)) return w
        }
        return new f(!1)
    }
}, function (t, e, n) {
    var i = n(6), s = n(46), r = n(4), o = n(102), a = n(105), l = n(2), c = n(336), u = n(143), d = n(18), h = n(64),
        p = s && s.prototype, f = l("species"), g = !1, m = r(i.PromiseRejectionEvent), v = o("Promise", (function () {
            var t = a(s), e = t !== String(s);
            if (!e && 66 === h) return !0;
            if (d && (!p.catch || !p.finally)) return !0;
            if (!h || h < 51 || !/native code/.test(t)) {
                var n = new s((function (t) {
                    t(1)
                })), i = function (t) {
                    t((function () {
                    }), (function () {
                    }))
                };
                if ((n.constructor = {})[f] = i, !(g = n.then((function () {
                })) instanceof i)) return !0
            }
            return !e && (c || u) && !m
        }));
    t.exports = {CONSTRUCTOR: v, REJECTION_EVENT: m, SUBCLASSING: g}
}, function (t, e, n) {
    t.exports = n(155)
}, function (t, e, n) {
    "use strict";
    var i = n(147), s = n.n(i);
    e.a = function () {
        return !!new s.a(window.location.search).size
    }
}, function (t, e, n) {
    var i = n(48), s = Function.prototype, r = s.apply, o = s.call;
    t.exports = "object" == typeof Reflect && Reflect.apply || (i ? o.bind(r) : function () {
        return o.apply(r, arguments)
    })
}, function (t, e, n) {
    var i = n(12), s = n(9), r = n(98), o = n(28), a = n(29), l = n(63), c = n(11), u = n(101),
        d = Object.getOwnPropertyDescriptor;
    e.f = i ? d : function (t, e) {
        if (t = a(t), e = l(e), u) try {
            return d(t, e)
        } catch (t) {
        }
        if (c(t, e)) return o(!s(r.f, t, e), t[e])
    }
}, function (t, e, n) {
    var i = n(159), s = n(51);
    t.exports = function (t) {
        var e = i(t, "string");
        return s(e) ? e : e + ""
    }
}, function (t, e, n) {
    var i, s, r = n(6), o = n(52), a = r.process, l = r.Deno, c = a && a.versions || l && l.version, u = c && c.v8;
    u && (s = (i = u.split("."))[0] > 0 && i[0] < 4 ? 1 : +(i[0] + i[1])), !s && o && (!(i = o.match(/Edge\/(\d+)/)) || i[1] >= 74) && (i = o.match(/Chrome\/(\d+)/)) && (s = +i[1]), t.exports = s
}, function (t, e, n) {
    var i = n(19), s = n(50);
    t.exports = function (t, e) {
        var n = t[e];
        return s(n) ? void 0 : i(n)
    }
}, function (t, e, n) {
    var i = n(3), s = n(5), r = n(4), o = n(31), a = n(14), l = n(105), c = function () {
        }, u = [], d = a("Reflect", "construct"), h = /^\s*(?:class|function)\b/, p = i(h.exec), f = !h.exec(c),
        g = function (t) {
            if (!r(t)) return !1;
            try {
                return d(c, u, t), !0
            } catch (t) {
                return !1
            }
        }, m = function (t) {
            if (!r(t)) return !1;
            switch (o(t)) {
                case"AsyncFunction":
                case"GeneratorFunction":
                case"AsyncGeneratorFunction":
                    return !1
            }
            try {
                return f || !!p(h, l(t))
            } catch (t) {
                return !0
            }
        };
    m.sham = !0, t.exports = !d || s((function () {
        var t;
        return g(g.call) || !g(Object) || !g((function () {
            t = !0
        })) || t
    })) ? m : g
}, function (t, e, n) {
    var i = n(5), s = n(2), r = n(64), o = s("species");
    t.exports = function (t) {
        return r >= 51 || !i((function () {
            var e = [];
            return (e.constructor = {})[o] = function () {
                return {foo: 1}
            }, 1 !== e[t](Boolean).foo
        }))
    }
}, function (t, e, n) {
    var i = n(40), s = n(80), r = i("keys");
    t.exports = function (t) {
        return r[t] || (r[t] = s(t))
    }
}, function (t, e) {
    t.exports = {}
}, function (t, e, n) {
    var i = n(11), s = n(4), r = n(22), o = n(68), a = n(115), l = o("IE_PROTO"), c = Object, u = c.prototype;
    t.exports = a ? c.getPrototypeOf : function (t) {
        var e = r(t);
        if (i(e, l)) return e[l];
        var n = e.constructor;
        return s(n) && e instanceof n ? n.prototype : e instanceof c ? u : null
    }
}, function (t, e, n) {
    var i = n(177), s = n(16), r = n(178);
    t.exports = Object.setPrototypeOf || ("__proto__" in {} ? function () {
        var t, e = !1, n = {};
        try {
            (t = i(Object.prototype, "__proto__", "set"))(n, []), e = n instanceof Array
        } catch (t) {
        }
        return function (n, i) {
            return s(n), r(i), e ? t(n, i) : n.__proto__ = i, n
        }
    }() : void 0)
}, function (t, e, n) {
    "use strict";
    var i = n(63), s = n(20), r = n(28);
    t.exports = function (t, e, n) {
        var o = i(e);
        o in t ? s.f(t, o, r(0, n)) : t[o] = n
    }
}, function (t, e) {
}, function (t, e, n) {
    "use strict";
    var i = n(271).charAt, s = n(25), r = n(54), o = n(107), a = n(116), l = r.set, c = r.getterFor("String Iterator");
    o(String, "String", (function (t) {
        l(this, {type: "String Iterator", string: s(t), index: 0})
    }), (function () {
        var t, e = c(this), n = e.string, s = e.index;
        return s >= n.length ? a(void 0, !0) : (t = i(n, s), e.index += t.length, a(t, !1))
    }))
}, function (t, e, n) {
    (function (e) {
        var i = n(27);
        t.exports = void 0 !== e && "process" == i(e)
    }).call(this, n(329))
}, function (t, e, n) {
    var i = n(46), s = n(133), r = n(58).CONSTRUCTOR;
    t.exports = r || !s((function (t) {
        i.all(t).then(void 0, (function () {
        }))
    }))
}, function (t, e, n) {
    t.exports = n(192)
}, function (t, e) {
    t.exports = jQuery
}, function (t, e, n) {
    var i = n(6), s = n(161), r = i["__core-js_shared__"] || s("__core-js_shared__", {});
    t.exports = r
}, function (t, e, n) {
    var i = n(3), s = 0, r = Math.random(), o = i(1..toString);
    t.exports = function (t) {
        return "Symbol(" + (void 0 === t ? "" : t) + ")_" + o(++s + r, 36)
    }
}, function (t, e, n) {
    var i = n(6), s = n(13), r = i.document, o = s(r) && s(r.createElement);
    t.exports = function (t) {
        return o ? r.createElement(t) : {}
    }
}, function (t, e, n) {
    var i = n(168);
    t.exports = function (t) {
        var e = +t;
        return e != e || 0 === e ? 0 : i(e)
    }
}, function (t, e, n) {
    var i = {};
    i[n(2)("toStringTag")] = "z", t.exports = "[object z]" === String(i)
}, function (t, e) {
    t.exports = function () {
    }
}, function (t, e, n) {
    var i = n(82), s = Math.max, r = Math.min;
    t.exports = function (t, e) {
        var n = i(t);
        return n < 0 ? s(n + e, 0) : r(n, e)
    }
}, function (t, e) {
    t.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
}, function (t, e, n) {
    var i = n(20);
    t.exports = function (t, e, n) {
        return i.f(t, e, n)
    }
}, function (t, e, n) {
    var i = n(9), s = n(19), r = n(16), o = n(53), a = n(55), l = TypeError;
    t.exports = function (t, e) {
        var n = arguments.length < 2 ? a(t) : e;
        if (s(n)) return r(i(n, t));
        throw l(o(t) + " is not iterable")
    }
}, function (t, e) {
    var n = TypeError;
    t.exports = function (t, e) {
        if (t < e) throw n("Not enough arguments");
        return t
    }
}, function (t, e, n) {
    t.exports = n(225)
}, function (t, e, n) {
    var i = n(112), s = n(86).concat("length", "prototype");
    e.f = Object.getOwnPropertyNames || function (t) {
        return i(t, s)
    }
}, function (t, e) {
    e.f = Object.getOwnPropertySymbols
}, function (t, e, n) {
    var i = n(2);
    e.f = i
}, function (t, e, n) {
    var i = n(217), s = n(224), r = n(279), o = n(285);
    t.exports = function (t) {
        return i(t) || s(t) || r(t) || o()
    }, t.exports.__esModule = !0, t.exports.default = t.exports
}, function (t, e, n) {
    var i = n(348)();
    t.exports = i;
    try {
        regeneratorRuntime = i
    } catch (t) {
        "object" == typeof globalThis ? globalThis.regeneratorRuntime = i : Function("r", "regeneratorRuntime = r")(i)
    }
}, function (t, e, n) {
    var i = n(27), s = n(3);
    t.exports = function (t) {
        if ("Function" === i(t)) return s(t)
    }
}, function (t, e) {
    var n = "object" == typeof document && document.all, i = void 0 === n && void 0 !== n;
    t.exports = {all: n, IS_HTMLDDA: i}
}, function (t, e, n) {
    "use strict";
    var i = {}.propertyIsEnumerable, s = Object.getOwnPropertyDescriptor, r = s && !i.call({1: 2}, 1);
    e.f = r ? function (t) {
        var e = s(this, t);
        return !!e && e.enumerable
    } : i
}, function (t, e, n) {
    var i = n(3), s = n(5), r = n(27), o = Object, a = i("".split);
    t.exports = s((function () {
        return !o("z").propertyIsEnumerable(0)
    })) ? function (t) {
        return "String" == r(t) ? a(t, "") : o(t)
    } : o
}, function (t, e, n) {
    var i = n(39);
    t.exports = i && !Symbol.sham && "symbol" == typeof Symbol.iterator
}, function (t, e, n) {
    var i = n(12), s = n(5), r = n(81);
    t.exports = !i && !s((function () {
        return 7 != Object.defineProperty(r("div"), "a", {
            get: function () {
                return 7
            }
        }).a
    }))
}, function (t, e, n) {
    var i = n(5), s = n(4), r = /#|\.prototype\./, o = function (t, e) {
        var n = l[a(t)];
        return n == u || n != c && (s(e) ? i(e) : !!e)
    }, a = o.normalize = function (t) {
        return String(t).replace(r, ".").toLowerCase()
    }, l = o.data = {}, c = o.NATIVE = "N", u = o.POLYFILL = "P";
    t.exports = o
}, function (t, e, n) {
    var i = n(12), s = n(5);
    t.exports = i && s((function () {
        return 42 != Object.defineProperty((function () {
        }), "prototype", {value: 42, writable: !1}).prototype
    }))
}, function (t, e, n) {
    var i = n(169);
    t.exports = function (t, e) {
        return new (i(t))(0 === e ? 0 : e)
    }
}, function (t, e, n) {
    var i = n(3), s = n(4), r = n(79), o = i(Function.toString);
    s(r.inspectSource) || (r.inspectSource = function (t) {
        return o(t)
    }), t.exports = r.inspectSource
}, function (t, e, n) {
    n(36);
    var i = n(31), s = n(11), r = n(10), o = n(180), a = Array.prototype, l = {DOMTokenList: !0, NodeList: !0};
    t.exports = function (t) {
        var e = t.forEach;
        return t === a || r(a, t) && e === a.forEach || s(l, i(t)) ? o : e
    }
}, function (t, e, n) {
    "use strict";
    var i = n(0), s = n(9), r = n(18), o = n(175), a = n(4), l = n(108), c = n(70), u = n(71), d = n(37), h = n(23),
        p = n(24), f = n(2), g = n(43), m = n(109), v = o.PROPER, b = o.CONFIGURABLE, y = m.IteratorPrototype,
        w = m.BUGGY_SAFARI_ITERATORS, x = f("iterator"), C = function () {
            return this
        };
    t.exports = function (t, e, n, o, f, m, S) {
        l(n, e, o);
        var T, E, P, M = function (t) {
                if (t === f && A) return A;
                if (!w && t in _) return _[t];
                switch (t) {
                    case"keys":
                    case"values":
                    case"entries":
                        return function () {
                            return new n(this, t)
                        }
                }
                return function () {
                    return new n(this)
                }
            }, O = e + " Iterator", L = !1, _ = t.prototype, k = _[x] || _["@@iterator"] || f && _[f], A = !w && k || M(f),
            z = "Array" == e && _.entries || k;
        if (z && (T = c(z.call(new t))) !== Object.prototype && T.next && (r || c(T) === y || (u ? u(T, y) : a(T[x]) || p(T, x, C)), d(T, O, !0, !0), r && (g[O] = C)), v && "values" == f && k && "values" !== k.name && (!r && b ? h(_, "name", "values") : (L = !0, A = function () {
            return s(k, this)
        })), f) if (E = {
            values: M("values"),
            keys: m ? A : M("keys"),
            entries: M("entries")
        }, S) for (P in E) (w || L || !(P in _)) && p(_, P, E[P]); else i({target: e, proto: !0, forced: w || L}, E);
        return r && !S || _[x] === A || p(_, x, A, {name: f}), g[e] = A, E
    }
}, function (t, e, n) {
    "use strict";
    var i = n(109).IteratorPrototype, s = n(44), r = n(28), o = n(37), a = n(43), l = function () {
        return this
    };
    t.exports = function (t, e, n, c) {
        var u = e + " Iterator";
        return t.prototype = s(i, {next: r(+!c, n)}), o(t, u, !1, !0), a[u] = l, t
    }
}, function (t, e, n) {
    "use strict";
    var i, s, r, o = n(5), a = n(4), l = n(13), c = n(44), u = n(70), d = n(24), h = n(2), p = n(18), f = h("iterator"),
        g = !1;
    [].keys && ("next" in (r = [].keys()) ? (s = u(u(r))) !== Object.prototype && (i = s) : g = !0), !l(i) || o((function () {
        var t = {};
        return i[f].call(t) !== t
    })) ? i = {} : p && (i = c(i)), a(i[f]) || d(i, f, (function () {
        return this
    })), t.exports = {IteratorPrototype: i, BUGGY_SAFARI_ITERATORS: g}
}, function (t, e, n) {
    var i = n(12), s = n(103), r = n(20), o = n(16), a = n(29), l = n(111);
    e.f = i && !s ? Object.defineProperties : function (t, e) {
        o(t);
        for (var n, i = a(e), s = l(e), c = s.length, u = 0; c > u;) r.f(t, n = s[u++], i[n]);
        return t
    }
}, function (t, e, n) {
    var i = n(112), s = n(86);
    t.exports = Object.keys || function (t) {
        return i(t, s)
    }
}, function (t, e, n) {
    var i = n(3), s = n(11), r = n(29), o = n(113).indexOf, a = n(69), l = i([].push);
    t.exports = function (t, e) {
        var n, i = r(t), c = 0, u = [];
        for (n in i) !s(a, n) && s(i, n) && l(u, n);
        for (; e.length > c;) s(i, n = e[c++]) && (~o(u, n) || l(u, n));
        return u
    }
}, function (t, e, n) {
    var i = n(29), s = n(85), r = n(30), o = function (t) {
        return function (e, n, o) {
            var a, l = i(e), c = r(l), u = s(o, c);
            if (t && n != n) {
                for (; c > u;) if ((a = l[u++]) != a) return !0
            } else for (; c > u; u++) if ((t || u in l) && l[u] === n) return t || u || 0;
            return !t && -1
        }
    };
    t.exports = {includes: o(!0), indexOf: o(!1)}
}, function (t, e, n) {
    var i = n(14);
    t.exports = i("document", "documentElement")
}, function (t, e, n) {
    var i = n(5);
    t.exports = !i((function () {
        function t() {
        }

        return t.prototype.constructor = null, Object.getPrototypeOf(new t) !== t.prototype
    }))
}, function (t, e) {
    t.exports = function (t, e) {
        return {value: t, done: e}
    }
}, function (t, e, n) {
    "use strict";
    var i = n(5);
    t.exports = function (t, e) {
        var n = [][t];
        return !!n && i((function () {
            n.call(null, e || function () {
                return 1
            }, 1)
        }))
    }
}, function (t, e, n) {
    var i = n(13), s = n(27), r = n(2)("match");
    t.exports = function (t) {
        var e;
        return i(t) && (void 0 !== (e = t[r]) ? !!e : "RegExp" == s(t))
    }
}, function (t, e, n) {
    var i = n(10), s = TypeError;
    t.exports = function (t, e) {
        if (i(e, t)) return t;
        throw s("Incorrect invocation")
    }
}, function (t, e, n) {
    var i = n(85), s = n(30), r = n(72), o = Array, a = Math.max;
    t.exports = function (t, e, n) {
        for (var l = s(t), c = i(e, l), u = i(void 0 === n ? l : n, l), d = o(a(u - c, 0)), h = 0; c < u; c++, h++) r(d, h, t[c]);
        return d.length = h, d
    }
}, function (t, e, n) {
    "use strict";
    var i, s = n(6), r = n(61), o = n(4), a = n(213), l = n(52), c = n(56), u = n(89), d = s.Function,
        h = /MSIE .\./.test(l) || a && ((i = s.Bun.version.split(".")).length < 3 || 0 == i[0] && (i[1] < 3 || 3 == i[1] && 0 == i[2]));
    t.exports = function (t, e) {
        var n = e ? 2 : 1;
        return h ? function (i, s) {
            var a = u(arguments.length, 1) > n, l = o(i) ? i : d(i), h = a ? c(arguments, n) : [], p = a ? function () {
                r(l, this, h)
            } : l;
            return e ? t(p, s) : t(p)
        } : t
    }
}, function (t, e) {
    t.exports = function (t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
        return i
    }, t.exports.__esModule = !0, t.exports.default = t.exports
}, function (t, e, n) {
    "use strict";
    var i = n(0), s = n(5), r = n(35), o = n(13), a = n(22), l = n(30), c = n(124), u = n(72), d = n(104), h = n(67),
        p = n(2), f = n(64), g = p("isConcatSpreadable"), m = f >= 51 || !s((function () {
            var t = [];
            return t[g] = !1, t.concat()[0] !== t
        })), v = function (t) {
            if (!o(t)) return !1;
            var e = t[g];
            return void 0 !== e ? !!e : r(t)
        };
    i({target: "Array", proto: !0, arity: 1, forced: !m || !h("concat")}, {
        concat: function (t) {
            var e, n, i, s, r, o = a(this), h = d(o, 0), p = 0;
            for (e = -1, i = arguments.length; e < i; e++) if (v(r = -1 === e ? o : arguments[e])) for (s = l(r), c(p + s), n = 0; n < s; n++, p++) n in r && u(h, p, r[n]); else c(p + 1), u(h, p++, r);
            return h.length = p, h
        }
    })
}, function (t, e) {
    var n = TypeError;
    t.exports = function (t) {
        if (t > 9007199254740991) throw n("Maximum allowed index exceeded");
        return t
    }
}, function (t, e, n) {
    var i = n(9), s = n(14), r = n(2), o = n(24);
    t.exports = function () {
        var t = s("Symbol"), e = t && t.prototype, n = e && e.valueOf, a = r("toPrimitive");
        e && !e[a] && o(e, a, (function (t) {
            return i(n, this)
        }), {arity: 1})
    }
}, function (t, e, n) {
    var i = n(39);
    t.exports = i && !!Symbol.for && !!Symbol.keyFor
}, function (t, e, n) {
    n(7)("iterator")
}, function (t, e, n) {
    var i = n(14), s = n(3), r = i("Symbol"), o = r.keyFor, a = s(r.prototype.valueOf);
    t.exports = r.isRegisteredSymbol || function (t) {
        try {
            return void 0 !== o(a(t))
        } catch (t) {
            return !1
        }
    }
}, function (t, e, n) {
    for (var i = n(40), s = n(14), r = n(3), o = n(51), a = n(2), l = s("Symbol"), c = l.isWellKnownSymbol, u = s("Object", "getOwnPropertyNames"), d = r(l.prototype.valueOf), h = i("wks"), p = 0, f = u(l), g = f.length; p < g; p++) try {
        var m = f[p];
        o(l[m]) && a(m)
    } catch (t) {
    }
    t.exports = function (t) {
        if (c && c(t)) return !0;
        try {
            for (var e = d(t), n = 0, i = u(h), s = i.length; n < s; n++) if (h[i[n]] == e) return !0
        } catch (t) {
        }
        return !1
    }
}, function (t, e, n) {
    t.exports = n(272)
}, function (t, e, n) {
    var i = n(9), s = n(16), r = n(65);
    t.exports = function (t, e, n) {
        var o, a;
        s(t);
        try {
            if (!(o = r(t, "return"))) {
                if ("throw" === e) throw n;
                return n
            }
            o = i(o, t)
        } catch (t) {
            a = !0, o = t
        }
        if ("throw" === e) throw n;
        if (a) throw o;
        return s(o), n
    }
}, function (t, e, n) {
    var i = n(2), s = n(43), r = i("iterator"), o = Array.prototype;
    t.exports = function (t) {
        return void 0 !== t && (s.Array === t || o[r] === t)
    }
}, function (t, e, n) {
    var i = n(2)("iterator"), s = !1;
    try {
        var r = 0, o = {
            next: function () {
                return {done: !!r++}
            }, return: function () {
                s = !0
            }
        };
        o[i] = function () {
            return this
        }, Array.from(o, (function () {
            throw 2
        }))
    } catch (t) {
    }
    t.exports = function (t, e) {
        if (!e && !s) return !1;
        var n = !1;
        try {
            var r = {};
            r[i] = function () {
                return {
                    next: function () {
                        return {done: n = !0}
                    }
                }
            }, t(r)
        } catch (t) {
        }
        return n
    }
}, function (t, e, n) {
    t.exports = n(280)
}, function (t, e, n) {
    var i = n(282);
    t.exports = i
}, function (t, e, n) {
    "use strict";
    var i = n(0), s = n(9), r = n(3), o = n(49), a = n(4), l = n(50), c = n(118), u = n(25), d = n(65), h = n(298),
        p = n(300), f = n(2), g = n(18), m = f("replace"), v = TypeError, b = r("".indexOf), y = r("".replace),
        w = r("".slice), x = Math.max, C = function (t, e, n) {
            return n > t.length ? -1 : "" === e ? n : b(t, e, n)
        };
    i({target: "String", proto: !0}, {
        replaceAll: function (t, e) {
            var n, i, r, f, S, T, E, P, M, O = o(this), L = 0, _ = 0, k = "";
            if (!l(t)) {
                if ((n = c(t)) && (i = u(o(h(t))), !~b(i, "g"))) throw v("`.replaceAll` does not allow non-global regexes");
                if (r = d(t, m)) return s(r, t, O, e);
                if (g && n) return y(u(O), t, e)
            }
            for (f = u(O), S = u(t), (T = a(e)) || (e = u(e)), E = S.length, P = x(1, E), L = C(f, S, 0); -1 !== L;) M = T ? u(e(S, L, f)) : p(S, f, L, [], void 0, e), k += w(f, _, L) + M, _ = L + E, L = C(f, S, L + P);
            return _ < f.length && (k += w(f, _)), k
        }
    })
}, function (t, e, n) {
    t.exports = n(315)
}, function (t, e, n) {
    n(319)
}, function (t, e, n) {
    var i = n(16), s = n(331), r = n(50), o = n(2)("species");
    t.exports = function (t, e) {
        var n, a = i(t).constructor;
        return void 0 === a || r(n = i(a)[o]) ? e : s(n)
    }
}, function (t, e, n) {
    var i, s, r, o, a = n(6), l = n(61), c = n(34), u = n(4), d = n(11), h = n(5), p = n(114), f = n(56), g = n(81),
        m = n(89), v = n(141), b = n(75), y = a.setImmediate, w = a.clearImmediate, x = a.process, C = a.Dispatch,
        S = a.Function, T = a.MessageChannel, E = a.String, P = 0, M = {};
    h((function () {
        i = a.location
    }));
    var O = function (t) {
        if (d(M, t)) {
            var e = M[t];
            delete M[t], e()
        }
    }, L = function (t) {
        return function () {
            O(t)
        }
    }, _ = function (t) {
        O(t.data)
    }, k = function (t) {
        a.postMessage(E(t), i.protocol + "//" + i.host)
    };
    y && w || (y = function (t) {
        m(arguments.length, 1);
        var e = u(t) ? t : S(t), n = f(arguments, 1);
        return M[++P] = function () {
            l(e, void 0, n)
        }, s(P), P
    }, w = function (t) {
        delete M[t]
    }, b ? s = function (t) {
        x.nextTick(L(t))
    } : C && C.now ? s = function (t) {
        C.now(L(t))
    } : T && !v ? (o = (r = new T).port2, r.port1.onmessage = _, s = c(o.postMessage, o)) : a.addEventListener && u(a.postMessage) && !a.importScripts && i && "file:" !== i.protocol && !h(k) ? (s = k, a.addEventListener("message", _, !1)) : s = "onreadystatechange" in g("script") ? function (t) {
        p.appendChild(g("script")).onreadystatechange = function () {
            p.removeChild(this), O(t)
        }
    } : function (t) {
        setTimeout(L(t), 0)
    }), t.exports = {set: y, clear: w}
}, function (t, e, n) {
    var i = n(52);
    t.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(i)
}, function (t, e) {
    var n = function () {
        this.head = null, this.tail = null
    };
    n.prototype = {
        add: function (t) {
            var e = {item: t, next: null}, n = this.tail;
            n ? n.next = e : this.head = e, this.tail = e
        }, get: function () {
            var t = this.head;
            if (t) return null === (this.head = t.next) && (this.tail = null), t.item
        }
    }, t.exports = n
}, function (t, e) {
    t.exports = "object" == typeof Deno && Deno && "object" == typeof Deno.version
}, function (t, e, n) {
    var i = n(16), s = n(13), r = n(26);
    t.exports = function (t, e) {
        if (i(t), s(e) && e.constructor === t) return e;
        var n = r.f(t);
        return (0, n.resolve)(e), n.promise
    }
}, function (t, e, n) {
    "use strict";
    var i = n(0), s = n(9), r = n(19), o = n(26), a = n(45), l = n(57);
    i({target: "Promise", stat: !0, forced: n(76)}, {
        allSettled: function (t) {
            var e = this, n = o.f(e), i = n.resolve, c = n.reject, u = a((function () {
                var n = r(e.resolve), o = [], a = 0, c = 1;
                l(t, (function (t) {
                    var r = a++, l = !1;
                    c++, s(n, e, t).then((function (t) {
                        l || (l = !0, o[r] = {status: "fulfilled", value: t}, --c || i(o))
                    }), (function (t) {
                        l || (l = !0, o[r] = {status: "rejected", reason: t}, --c || i(o))
                    }))
                })), --c || i(o)
            }));
            return u.error && c(u.value), n.promise
        }
    })
}, function (t, e, n) {
    "use strict";
    var i = n(0), s = n(9), r = n(19), o = n(14), a = n(26), l = n(45), c = n(57), u = n(76);
    i({target: "Promise", stat: !0, forced: u}, {
        any: function (t) {
            var e = this, n = o("AggregateError"), i = a.f(e), u = i.resolve, d = i.reject, h = l((function () {
                var i = r(e.resolve), o = [], a = 0, l = 1, h = !1;
                c(t, (function (t) {
                    var r = a++, c = !1;
                    l++, s(i, e, t).then((function (t) {
                        c || h || (h = !0, u(t))
                    }), (function (t) {
                        c || h || (c = !0, o[r] = t, --l || d(new n(o, "No one promise resolved")))
                    }))
                })), --l || d(new n(o, "No one promise resolved"))
            }));
            return h.error && d(h.value), i.promise
        }
    })
}, function (t, e, n) {
    t.exports = n(196)
}, function (t, e, n) {
    t.exports = n(286)
}, function (t, e, n) {
    t.exports = n(307)
}, function (t, e, n) {
    t.exports = n(135)
}, function (t, e, n) {
    var i = n(137);

    function s(t, e, n, s, r, o, a) {
        try {
            var l = t[o](a), c = l.value
        } catch (t) {
            return void n(t)
        }
        l.done ? e(c) : i.resolve(c).then(s, r)
    }

    t.exports = function (t) {
        return function () {
            var e = this, n = arguments;
            return new i((function (i, r) {
                var o = t.apply(e, n);

                function a(t) {
                    s(o, i, r, a, l, "next", t)
                }

                function l(t) {
                    s(o, i, r, a, l, "throw", t)
                }

                a(void 0)
            }))
        }
    }, t.exports.__esModule = !0, t.exports.default = t.exports
}, function (t, e, n) {
    t.exports = n(397)
}, function (t, e, n) {
    /*!*
     * ВНИМАНИЕ! Этот файл генерируется автоматически.
     * Любые изменения этого файла будут потеряны при следующей компиляции.
     * Любое изменение проекта без возможности компиляции ДОЛЬШЕ И ДОРОЖЕ в 2-5 раз.
     */
    n(154), n(206), n(207), n(208), n(209), n(215), n(216), n(293), n(294), n(310), n(311), n(312), n(313), n(314), n(402)
}, function (t, e, n) {
    "use strict";
    n.r(e);
    var i = n(59), s = n.n(i), r = n(1), o = n.n(r), a = n(33), l = n.n(a), c = n(32), u = n.n(c), d = n(47),
        h = n.n(d), p = n(77), f = n.n(p), g = n(60);

    function m(t) {
        var e, n, i, r, a, c = t, d = c.attr("data-title");
        !function () {
            e = c.children("option").length, c.addClass("select-hidden"), c.wrap('<div class="select"></div>'), n = c.parent(), c.after('<div class="select-styled"><span class="select-styled__title">'.concat(d, "</span></div>")), i = c.next("div.select-styled"), r = $("<ul />", {class: "select-options"}).insertAfter(i), s()(c[0].getAttribute("required"), null) && c.parent().append("<div class='select-alert'>обязательное поле</div>");
            for (var t = 0; t < e; t++) $("<li />", {
                text: c.children("option").eq(t).text(),
                rel: c.children("option").eq(t).val(),
                "data-category": c.children("option").eq(t).data("category")
            }).appendTo(r);
            a = r.children("li")
        }(), function () {
            if (i.on("click", (function (t) {
                t.stopPropagation(), o()(n).call(n, ".select-alert").is(":visible") && o()(n).call(n, ".select-alert").hide(), o()(n).call(n, ".select-alert").is(":hidden") && $(this).hasClass("active") && s()(c[0].getAttribute("required"), null) && !c.closest(".select").is(".selected") && o()(n).call(n, ".select-alert").show(), $("div.select-styled.active").not(this).each((function () {
                    n.removeClass("expand")
                })), n.toggleClass("expand").siblings(".select").removeClass("expand")
            })), 0 === c.children("option:selected").length && (c.children("option").eq(0).attr("selected", !0), c.children("option").eq(0).prop("selected", !0)), 0 !== c.children("option:selected").index() && Object(g.a)()) {
                var t = c.children("option:selected").toArray(), e = l()(t).call(t, (function (t) {
                    return $(t).text()
                }));
                u()(e).call(e, (function (t) {
                    o()(n).call(n, ".select-options li:contains(".concat(t, ")")).addClass("active")
                })), n.addClass("selected"), c.siblings(".select-styled").children().text(e.join(", "))
            } else c.children("option").eq(0).attr("selected", !0), c.children("option").eq(0).prop("selected", !0);
            c.attr("multiple") ? function () {
                var t, e;
                t = 0 !== c.children("option:selected").index() ? l()(e = c.children("option:selected").toArray()).call(e, (function (t) {
                    return $(t).text()
                })) : [];
                a.on("click", (function (e) {
                    var n = this;
                    e.stopPropagation();
                    var s = c.children("option:contains(".concat($(this).text(), ")"));
                    h()(t).call(t, $(this).text()) ? (t = f()(t).call(t, (function (t) {
                        return t !== $(n).text()
                    })), $(this).removeClass("active"), s.prop("selected", !1)) : (t.push($(this).text()), $(this).addClass("active"), s.prop("selected", !0)), 0 !== t.length ? (c.closest(".select").addClass("selected"), c.children("option").eq(0).prop("selected", !1)) : (c.closest(".select").removeClass("selected"), c.children("option").eq(0).prop("selected", !0));
                    var r = t.join(", ");
                    o()(i).call(i, ".select-styled__title").text(r || d), c.trigger("change")
                }))
            }() : a.on("click", (function (t) {
                t.stopPropagation(), c.closest(".select").is(".selected") || c.closest(".select").addClass("selected"), o()(i).call(i, ".select-styled__title").text($(this).text()).parent().removeClass("active"), c.val($(this).attr("rel")), r.removeClass("open"), $(this).closest(".select").removeClass("expand"), c.children("option").eq(0).attr("disabled", !1), c.children("option").eq($(this).index()).prop("selected", !0), c.trigger("change")
            })), document.addEventListener("click", (function (t) {
                var e;
                h()(e = t.composedPath()).call(e, n[0]) || n.removeClass("expand")
            }))
        }()
    }

    $("select").length && $("select").each((function () {
        m($(this))
    }))
}, function (t, e, n) {
    var i = n(156);
    t.exports = i
}, function (t, e, n) {
    n(157);
    var i = n(15);
    t.exports = i.Object.is
}, function (t, e, n) {
    n(0)({target: "Object", stat: !0}, {is: n(162)})
}, function (t, e) {
    var n;
    n = function () {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (t) {
        "object" == typeof window && (n = window)
    }
    t.exports = n
}, function (t, e, n) {
    var i = n(9), s = n(13), r = n(51), o = n(65), a = n(160), l = n(2), c = TypeError, u = l("toPrimitive");
    t.exports = function (t, e) {
        if (!s(t) || r(t)) return t;
        var n, l = o(t, u);
        if (l) {
            if (void 0 === e && (e = "default"), n = i(l, t, e), !s(n) || r(n)) return n;
            throw c("Can't convert object to primitive value")
        }
        return void 0 === e && (e = "number"), a(t, e)
    }
}, function (t, e, n) {
    var i = n(9), s = n(4), r = n(13), o = TypeError;
    t.exports = function (t, e) {
        var n, a;
        if ("string" === e && s(n = t.toString) && !r(a = i(n, t))) return a;
        if (s(n = t.valueOf) && !r(a = i(n, t))) return a;
        if ("string" !== e && s(n = t.toString) && !r(a = i(n, t))) return a;
        throw o("Can't convert object to primitive value")
    }
}, function (t, e, n) {
    var i = n(6), s = Object.defineProperty;
    t.exports = function (t, e) {
        try {
            s(i, t, {value: e, configurable: !0, writable: !0})
        } catch (n) {
            i[t] = e
        }
        return e
    }
}, function (t, e) {
    t.exports = Object.is || function (t, e) {
        return t === e ? 0 !== t || 1 / t == 1 / e : t != t && e != e
    }
}, function (t, e, n) {
    var i = n(164);
    t.exports = i
}, function (t, e, n) {
    var i = n(10), s = n(165), r = Array.prototype;
    t.exports = function (t) {
        var e = t.find;
        return t === r || i(r, t) && e === r.find ? s : e
    }
}, function (t, e, n) {
    n(166);
    var i = n(17);
    t.exports = i("Array").find
}, function (t, e, n) {
    "use strict";
    var i = n(0), s = n(41).find, r = n(84), o = !0;
    "find" in [] && Array(1).find((function () {
        o = !1
    })), i({target: "Array", proto: !0, forced: o}, {
        find: function (t) {
            return s(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), r("find")
}, function (t, e, n) {
    var i = n(82), s = Math.min;
    t.exports = function (t) {
        return t > 0 ? s(i(t), 9007199254740991) : 0
    }
}, function (t, e) {
    var n = Math.ceil, i = Math.floor;
    t.exports = Math.trunc || function (t) {
        var e = +t;
        return (e > 0 ? i : n)(e)
    }
}, function (t, e, n) {
    var i = n(35), s = n(66), r = n(13), o = n(2)("species"), a = Array;
    t.exports = function (t) {
        var e;
        return i(t) && (e = t.constructor, (s(e) && (e === a || i(e.prototype)) || r(e) && null === (e = e[o])) && (e = void 0)), void 0 === e ? a : e
    }
}, function (t, e, n) {
    var i = n(171);
    t.exports = i
}, function (t, e, n) {
    var i = n(10), s = n(172), r = Array.prototype;
    t.exports = function (t) {
        var e = t.map;
        return t === r || i(r, t) && e === r.map ? s : e
    }
}, function (t, e, n) {
    n(173);
    var i = n(17);
    t.exports = i("Array").map
}, function (t, e, n) {
    "use strict";
    var i = n(0), s = n(41).map;
    i({target: "Array", proto: !0, forced: !n(67)("map")}, {
        map: function (t) {
            return s(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    })
}, function (t, e, n) {
    var i = n(6), s = n(4), r = i.WeakMap;
    t.exports = s(r) && /native code/.test(String(r))
}, function (t, e, n) {
    var i = n(12), s = n(11), r = Function.prototype, o = i && Object.getOwnPropertyDescriptor, a = s(r, "name"),
        l = a && "something" === function () {
        }.name, c = a && (!i || i && o(r, "name").configurable);
    t.exports = {EXISTS: a, PROPER: l, CONFIGURABLE: c}
}, function (t, e, n) {
    "use strict";
    var i = n(83), s = n(31);
    t.exports = i ? {}.toString : function () {
        return "[object " + s(this) + "]"
    }
}, function (t, e, n) {
    var i = n(3), s = n(19);
    t.exports = function (t, e, n) {
        try {
            return i(s(Object.getOwnPropertyDescriptor(t, e)[n]))
        } catch (t) {
        }
    }
}, function (t, e, n) {
    var i = n(4), s = String, r = TypeError;
    t.exports = function (t) {
        if ("object" == typeof t || i(t)) return t;
        throw r("Can't set " + s(t) + " as a prototype")
    }
}, function (t, e) {
    t.exports = {
        CSSRuleList: 0,
        CSSStyleDeclaration: 0,
        CSSValueList: 0,
        ClientRectList: 0,
        DOMRectList: 0,
        DOMStringList: 0,
        DOMTokenList: 1,
        DataTransferItemList: 0,
        FileList: 0,
        HTMLAllCollection: 0,
        HTMLCollection: 0,
        HTMLFormElement: 0,
        HTMLSelectElement: 0,
        MediaList: 0,
        MimeTypeArray: 0,
        NamedNodeMap: 0,
        NodeList: 1,
        PaintRequestList: 0,
        Plugin: 0,
        PluginArray: 0,
        SVGLengthList: 0,
        SVGNumberList: 0,
        SVGPathSegList: 0,
        SVGPointList: 0,
        SVGStringList: 0,
        SVGTransformList: 0,
        SourceBufferList: 0,
        StyleSheetList: 0,
        TextTrackCueList: 0,
        TextTrackList: 0,
        TouchList: 0
    }
}, function (t, e, n) {
    var i = n(181);
    t.exports = i
}, function (t, e, n) {
    n(182);
    var i = n(17);
    t.exports = i("Array").forEach
}, function (t, e, n) {
    "use strict";
    var i = n(0), s = n(183);
    i({target: "Array", proto: !0, forced: [].forEach != s}, {forEach: s})
}, function (t, e, n) {
    "use strict";
    var i = n(41).forEach, s = n(117)("forEach");
    t.exports = s ? [].forEach : function (t) {
        return i(this, t, arguments.length > 1 ? arguments[1] : void 0)
    }
}, function (t, e, n) {
    var i = n(185);
    t.exports = i
}, function (t, e, n) {
    var i = n(10), s = n(186), r = n(188), o = Array.prototype, a = String.prototype;
    t.exports = function (t) {
        var e = t.includes;
        return t === o || i(o, t) && e === o.includes ? s : "string" == typeof t || t === a || i(a, t) && e === a.includes ? r : e
    }
}, function (t, e, n) {
    n(187);
    var i = n(17);
    t.exports = i("Array").includes
}, function (t, e, n) {
    "use strict";
    var i = n(0), s = n(113).includes, r = n(5), o = n(84);
    i({
        target: "Array", proto: !0, forced: r((function () {
            return !Array(1).includes()
        }))
    }, {
        includes: function (t) {
            return s(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), o("includes")
}, function (t, e, n) {
    n(189);
    var i = n(17);
    t.exports = i("String").includes
}, function (t, e, n) {
    "use strict";
    var i = n(0), s = n(3), r = n(190), o = n(49), a = n(25), l = n(191), c = s("".indexOf);
    i({target: "String", proto: !0, forced: !l("includes")}, {
        includes: function (t) {
            return !!~c(a(o(this)), a(r(t)), arguments.length > 1 ? arguments[1] : void 0)
        }
    })
}, function (t, e, n) {
    var i = n(118), s = TypeError;
    t.exports = function (t) {
        if (i(t)) throw s("The method doesn't accept regular expressions");
        return t
    }
}, function (t, e, n) {
    var i = n(2)("match");
    t.exports = function (t) {
        var e = /./;
        try {
            "/./"[t](e)
        } catch (n) {
            try {
                return e[i] = !1, "/./"[t](e)
            } catch (t) {
            }
        }
        return !1
    }
}, function (t, e, n) {
    var i = n(193);
    t.exports = i
}, function (t, e, n) {
    var i = n(10), s = n(194), r = Array.prototype;
    t.exports = function (t) {
        var e = t.filter;
        return t === r || i(r, t) && e === r.filter ? s : e
    }
}, function (t, e, n) {
    n(195);
    var i = n(17);
    t.exports = i("Array").filter
}, function (t, e, n) {
    "use strict";
    var i = n(0), s = n(41).filter;
    i({target: "Array", proto: !0, forced: !n(67)("filter")}, {
        filter: function (t) {
            return s(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    })
}, function (t, e, n) {
    var i = n(197);
    n(36), t.exports = i
}, function (t, e, n) {
    n(198), n(203), n(204), n(205);
    var i = n(15);
    t.exports = i.URLSearchParams
}, function (t, e, n) {
    n(199)
}, function (t, e, n) {
    "use strict";
    n(42);
    var i = n(0), s = n(6), r = n(9), o = n(3), a = n(12), l = n(200), c = n(24), u = n(87), d = n(201), h = n(37),
        p = n(108), f = n(54), g = n(119), m = n(4), v = n(11), b = n(34), y = n(31), w = n(16), x = n(13), C = n(25),
        S = n(44), T = n(28), E = n(88), P = n(55), M = n(89), O = n(2), L = n(202), _ = O("iterator"), k = f.set,
        A = f.getterFor("URLSearchParams"), z = f.getterFor("URLSearchParamsIterator"),
        I = Object.getOwnPropertyDescriptor, R = function (t) {
            if (!a) return s[t];
            var e = I(s, t);
            return e && e.value
        }, j = R("fetch"), D = R("Request"), $ = R("Headers"), F = D && D.prototype, B = $ && $.prototype, N = s.RegExp,
        H = s.TypeError, V = s.decodeURIComponent, G = s.encodeURIComponent, W = o("".charAt), q = o([].join),
        X = o([].push), Y = o("".replace), U = o([].shift), Z = o([].splice), K = o("".split), J = o("".slice),
        Q = /\+/g, tt = Array(4), et = function (t) {
            return tt[t - 1] || (tt[t - 1] = N("((?:%[\\da-f]{2}){" + t + "})", "gi"))
        }, nt = function (t) {
            try {
                return V(t)
            } catch (e) {
                return t
            }
        }, it = function (t) {
            var e = Y(t, Q, " "), n = 4;
            try {
                return V(e)
            } catch (t) {
                for (; n;) e = Y(e, et(n--), nt);
                return e
            }
        }, st = /[!'()~]|%20/g, rt = {"!": "%21", "'": "%27", "(": "%28", ")": "%29", "~": "%7E", "%20": "+"},
        ot = function (t) {
            return rt[t]
        }, at = function (t) {
            return Y(G(t), st, ot)
        }, lt = p((function (t, e) {
            k(this, {type: "URLSearchParamsIterator", iterator: E(A(t).entries), kind: e})
        }), "Iterator", (function () {
            var t = z(this), e = t.kind, n = t.iterator.next(), i = n.value;
            return n.done || (n.value = "keys" === e ? i.key : "values" === e ? i.value : [i.key, i.value]), n
        }), !0), ct = function (t) {
            this.entries = [], this.url = null, void 0 !== t && (x(t) ? this.parseObject(t) : this.parseQuery("string" == typeof t ? "?" === W(t, 0) ? J(t, 1) : t : C(t)))
        };
    ct.prototype = {
        type: "URLSearchParams", bindURL: function (t) {
            this.url = t, this.update()
        }, parseObject: function (t) {
            var e, n, i, s, o, a, l, c = P(t);
            if (c) for (n = (e = E(t, c)).next; !(i = r(n, e)).done;) {
                if (o = (s = E(w(i.value))).next, (a = r(o, s)).done || (l = r(o, s)).done || !r(o, s).done) throw H("Expected sequence with length 2");
                X(this.entries, {key: C(a.value), value: C(l.value)})
            } else for (var u in t) v(t, u) && X(this.entries, {key: u, value: C(t[u])})
        }, parseQuery: function (t) {
            if (t) for (var e, n, i = K(t, "&"), s = 0; s < i.length;) (e = i[s++]).length && (n = K(e, "="), X(this.entries, {
                key: it(U(n)),
                value: it(q(n, "="))
            }))
        }, serialize: function () {
            for (var t, e = this.entries, n = [], i = 0; i < e.length;) t = e[i++], X(n, at(t.key) + "=" + at(t.value));
            return q(n, "&")
        }, update: function () {
            this.entries.length = 0, this.parseQuery(this.url.query)
        }, updateURL: function () {
            this.url && this.url.update()
        }
    };
    var ut = function () {
        g(this, dt);
        var t = arguments.length > 0 ? arguments[0] : void 0, e = k(this, new ct(t));
        a || (this.size = e.entries.length)
    }, dt = ut.prototype;
    if (d(dt, {
        append: function (t, e) {
            var n = A(this);
            M(arguments.length, 2), X(n.entries, {key: C(t), value: C(e)}), a || this.length++, n.updateURL()
        }, delete: function (t) {
            for (var e = A(this), n = M(arguments.length, 1), i = e.entries, s = C(t), r = n < 2 ? void 0 : arguments[1], o = void 0 === r ? r : C(r), l = 0; l < i.length;) {
                var c = i[l];
                if (c.key !== s || void 0 !== o && c.value !== o) l++; else if (Z(i, l, 1), void 0 !== o) break
            }
            a || (this.size = i.length), e.updateURL()
        }, get: function (t) {
            var e = A(this).entries;
            M(arguments.length, 1);
            for (var n = C(t), i = 0; i < e.length; i++) if (e[i].key === n) return e[i].value;
            return null
        }, getAll: function (t) {
            var e = A(this).entries;
            M(arguments.length, 1);
            for (var n = C(t), i = [], s = 0; s < e.length; s++) e[s].key === n && X(i, e[s].value);
            return i
        }, has: function (t) {
            for (var e = A(this).entries, n = M(arguments.length, 1), i = C(t), s = n < 2 ? void 0 : arguments[1], r = void 0 === s ? s : C(s), o = 0; o < e.length;) {
                var a = e[o++];
                if (a.key === i && (void 0 === r || a.value === r)) return !0
            }
            return !1
        }, set: function (t, e) {
            var n = A(this);
            M(arguments.length, 1);
            for (var i, s = n.entries, r = !1, o = C(t), l = C(e), c = 0; c < s.length; c++) (i = s[c]).key === o && (r ? Z(s, c--, 1) : (r = !0, i.value = l));
            r || X(s, {key: o, value: l}), a || (this.size = s.length), n.updateURL()
        }, sort: function () {
            var t = A(this);
            L(t.entries, (function (t, e) {
                return t.key > e.key ? 1 : -1
            })), t.updateURL()
        }, forEach: function (t) {
            for (var e, n = A(this).entries, i = b(t, arguments.length > 1 ? arguments[1] : void 0), s = 0; s < n.length;) i((e = n[s++]).value, e.key, this)
        }, keys: function () {
            return new lt(this, "keys")
        }, values: function () {
            return new lt(this, "values")
        }, entries: function () {
            return new lt(this, "entries")
        }
    }, {enumerable: !0}), c(dt, _, dt.entries, {name: "entries"}), c(dt, "toString", (function () {
        return A(this).serialize()
    }), {enumerable: !0}), a && u(dt, "size", {
        get: function () {
            return A(this).entries.length
        }, configurable: !0, enumerable: !0
    }), h(ut, "URLSearchParams"), i({global: !0, constructor: !0, forced: !l}, {URLSearchParams: ut}), !l && m($)) {
        var ht = o(B.has), pt = o(B.set), ft = function (t) {
            if (x(t)) {
                var e, n = t.body;
                if ("URLSearchParams" === y(n)) return e = t.headers ? new $(t.headers) : new $, ht(e, "content-type") || pt(e, "content-type", "application/x-www-form-urlencoded;charset=UTF-8"), S(t, {
                    body: T(0, C(n)),
                    headers: T(0, e)
                })
            }
            return t
        };
        if (m(j) && i({global: !0, enumerable: !0, dontCallGetSet: !0, forced: !0}, {
            fetch: function (t) {
                return j(t, arguments.length > 1 ? ft(arguments[1]) : {})
            }
        }), m(D)) {
            var gt = function (t) {
                return g(this, F), new D(t, arguments.length > 1 ? ft(arguments[1]) : {})
            };
            F.constructor = gt, gt.prototype = F, i({
                global: !0,
                constructor: !0,
                dontCallGetSet: !0,
                forced: !0
            }, {Request: gt})
        }
    }
    t.exports = {URLSearchParams: ut, getState: A}
}, function (t, e, n) {
    var i = n(5), s = n(2), r = n(12), o = n(18), a = s("iterator");
    t.exports = !i((function () {
        var t = new URL("b?a=1&b=2&c=3", "http://a"), e = t.searchParams, n = new URLSearchParams("a=1&a=2"), i = "";
        return t.pathname = "c%20d", e.forEach((function (t, n) {
            e.delete("b"), i += n + t
        })), n.delete("a", 2), o && (!t.toJSON || !n.has("a", 1) || n.has("a", 2)) || !e.size && (o || !r) || !e.sort || "http://a/c%20d?a=1&c=3" !== t.href || "3" !== e.get("c") || "a=1" !== String(new URLSearchParams("?a=1")) || !e[a] || "a" !== new URL("https://a@b").username || "b" !== new URLSearchParams(new URLSearchParams("a=b")).get("a") || "xn--e1aybc" !== new URL("http://тест").host || "#%D0%B1" !== new URL("http://a#б").hash || "a1c3" !== i || "x" !== new URL("http://x", void 0).host
    }))
}, function (t, e, n) {
    var i = n(24);
    t.exports = function (t, e, n) {
        for (var s in e) n && n.unsafe && t[s] ? t[s] = e[s] : i(t, s, e[s], n);
        return t
    }
}, function (t, e, n) {
    var i = n(120), s = Math.floor, r = function (t, e) {
        var n = t.length, l = s(n / 2);
        return n < 8 ? o(t, e) : a(t, r(i(t, 0, l), e), r(i(t, l), e), e)
    }, o = function (t, e) {
        for (var n, i, s = t.length, r = 1; r < s;) {
            for (i = r, n = t[r]; i && e(t[i - 1], n) > 0;) t[i] = t[--i];
            i !== r++ && (t[i] = n)
        }
        return t
    }, a = function (t, e, n, i) {
        for (var s = e.length, r = n.length, o = 0, a = 0; o < s || a < r;) t[o + a] = o < s && a < r ? i(e[o], n[a]) <= 0 ? e[o++] : n[a++] : o < s ? e[o++] : n[a++];
        return t
    };
    t.exports = r
}, function (t, e) {
}, function (t, e) {
}, function (t, e) {
}, function (t, e, n) {
    "use strict";
    n.r(e);
    var i = n(1), s = n.n(i);
    $((function () {
        var t;
        s()(t = $(".checkbox")).call(t, "[type='checkbox']").on("change", (function () {
            var t = $(this).closest(".checkbox__wrapper");
            s()(t).call(t, ":checkbox:checked").length > 0 ? t.addClass("checked") : t.removeClass("checked")
        }))
    }))
}, function (t, e, n) {
    "use strict";
    n.r(e);
    var i = n(1), s = n.n(i);
    $(document).on("click", ".dropdown__caption", (function () {
        var t, e;
        if ($(".dropdown").hasClass("active") && !$(this).parent().hasClass("active") && $(".dropdown.active").each((function () {
            var t;
            $(this).removeClass("active"), s()(t = $(this)).call(t, ".dropdown__content").slideUp()
        })), $(this).parent().hasClass("active")) return $(this).parent().removeClass("active"), void s()(e = $(this).parent()).call(e, ".dropdown__content").slideUp();
        $(this).parent().addClass("active"), s()(t = $(this).parent()).call(t, ".dropdown__content").slideDown()
    }))
}, function (t, e, n) {
    "use strict";
    n.r(e);
    var i = n(60);
    $((function () {
        Object(i.a)() && $(".filter__mobile-btn").addClass("active"), $(".filter__mobile-btn").on("click", (function () {
            $("body").addClass("no-scroll"), $(".filter__popup").addClass("open")
        })), $(".filter__close").on("click", (function () {
            $("body").removeClass("no-scroll"), $(".filter__popup").removeClass("open")
        })), $(".filter__form").on("submit", (function () {
            $(".range__input").children("input").each((function () {
                var t = $(this).val().replace(/\s/g, "");
                $(this).val(t)
            }))
        }))
    }))
}, function (t, e, n) {
    "use strict";
    n.r(e);
    var i = n(21), s = n.n(i);
    $((function () {
        function t() {
            $("header").removeClass("header--mobile-menu"), $(".header__menu").slideUp(), $("body").removeClass("no-scroll"), $(".backdrop").length && ($(".backdrop").remove(), s()((function () {
                $(".backdrop").removeClass("active")
            }), 0))
        }

        $(".header__toggle").on("click", (function () {
            $("header").hasClass("header--mobile-menu") ? t() : ($("header").addClass("header--mobile-menu"), $(".header__menu").slideDown(), $("body").addClass("no-scroll"), $(".backdrop").length || ($("body").append("<div class='backdrop'></div>"), s()((function () {
                $(".backdrop").addClass("active")
            }), 0)))
        })), $(window).width() < 1024 && $(".header__menu-list li").on("click", "a", (function () {
            t()
        }))
    }))
}, function (t, e, n) {
    n(211);
    var i = n(15);
    t.exports = i.setTimeout
}, function (t, e, n) {
    n(212), n(214)
}, function (t, e, n) {
    var i = n(0), s = n(6), r = n(121)(s.setInterval, !0);
    i({global: !0, bind: !0, forced: s.setInterval !== r}, {setInterval: r})
}, function (t, e) {
    t.exports = "function" == typeof Bun && Bun && "string" == typeof Bun.version
}, function (t, e, n) {
    var i = n(0), s = n(6), r = n(121)(s.setTimeout, !0);
    i({global: !0, bind: !0, forced: s.setTimeout !== r}, {setTimeout: r})
}, function (t, e, n) {
    "use strict";
    n.r(e);
    var i = n(32), s = n.n(i), r = n(59), o = n.n(r);
    $((function () {
        var t, e, n = document.querySelectorAll(".input__field");
        t = n, e = /[А-я]/, s()(t).call(t, (function (t) {
            t.addEventListener("input", (function () {
                var n = t.value, i = e;
                if (!o()(t.getAttribute("required"), null) || "" === n) return "" === n ? (t.classList.remove("invalid"), void t.classList.remove("valid")) : void (i.test(n) ? (t.classList.remove("invalid"), t.classList.add("valid")) : (t.classList.remove("valid"), t.classList.add("invalid")));
                t.classList.add("valid")
            }))
        }))
    }))
}, function (t, e, n) {
    "use strict";
    n.r(e);
    var i = n(94), s = n.n(i), r = n(21), o = n.n(r), a = n(148), l = n.n(a), c = n(32), u = n.n(c), d = n(1),
        h = n.n(d), p = n(33), f = n.n(p), g = n(8), m = n.n(g), v = n(77), b = n.n(v), y = n(47), w = n.n(y);
    var x = [{
        id: 1,
        lgbs: "Шахунья",
        lgbs_designated: [2, 3],
        specialization: "Социальная",
        filterValue: "58",
        address: "г.о.г. Шахунья, ул. Гагарина, д. 23",
        persons: [{
            imgSrc: "/upload/iblock/6ce/xbehy7rjsa58jmshxs29i658mnv3opv8/%D0%A1%D0%BC%D0%B8%D1%80%D0%BD%D0%BE%D0%B2.jpeg",
            position: "курирующий зам",
            title: "Смирнов Алексей Владимирович",
            desc: "Заместитель главы администрации по муниципальной и информационной политике администрации городского округа город Шахунья"
        }, {imgSrc: "/upload/iblock/79e/lm8kjwt9w2ga27m8qv1s5v961wxuagi6/%D0%A0%D0%B0%D0%B7%D1%83%D0%BC%D0%BE%D0%B2%D0%B0.jpeg", position: "тренер фабрики процессов", title: "Разумова Ирина Александровна", desc: ""}]
    }, {id: 2, lgbs: "Тоншаево", lgbs_designated: [], specialization: "", filterValue: ""}, {
        id: 3,
        lgbs: "Ветлуга",
        lgbs_designated: [],
        specialization: "",
        filterValue: ""
    }, {id: 4, lgbs: "Урень", lgbs_designated: [32, 33], specialization: "Кадры", filterValue: "51",
	address: " 606800 Нижегородская обл., Уренский м. о., г. Урень, ул. Ленина, д. 65",
        persons: [{
            imgSrc: "/upload/iblock/e2f/jla9jc3kborh3dnz8n9sou155y2ug1qo/Смирнов.jpeg",
            position: "курирующий зам",
            title: "Смирнов Алексей Владимирович",
            desc: "Первый заместитель главы администрации Уренского муниципального округа Нижегородской области"
        }, {imgSrc: "", position: "тренер фабрики процессов", title: "Кузнецова Анастасия Александровна", desc: ""}]
	}, {
        id: 5,
        lgbs: "Семенов",
        lgbs_designated: [43, 44],
        specialization: "Народные промыслы",
        filterValue: "55",
	address: " 606650 Россия, Нижегородская область, г. Семенов, ул. 3-х Коммунистов, 15а.",
        persons: [{
            imgSrc: "/upload/iblock/fd5/tk7pr71s9884yi2nfrc8g2r1liaeusfj/Тигина.jpg",
            position: "курирующий зам",
            title: "Тигина Елена Акимовна",
            desc: "Заместитель главы администрации городского округа Семеновский"
        }, {imgSrc: "/upload/iblock/ce9/rd8403eu3xcw27etk1v4iejim0omrt26/Анисова.jpg", position: "тренер фабрики процессов", title: "Анисова Светлана Николаевна", desc: ""},
    {imgSrc: "",position: "тренер фабрики процессов", title: "Храмова Ирина Владимировна", desc: ""}]
    }, {id: 6, lgbs: "Воскресенское", lgbs_designated: [50], specialization: "Туризм", filterValue: "60",
        address:"606730, Нижегородская область, м.о. Воскресенский, р.п. Воскресенское, пл. Ленина, д. 1, 3 этаж",
        persons: [{
            imgSrc: "/upload/iblock/c68/g6n5d9undb05gex5lcpjdst3jxhycot9/Сырцев.jpeg",
            position: "курирующий зам",
            title: "Сырцев Андрей Иванович",
            desc: "Заместитель главы администрации Воскресенского муниципального округа Нижегородской области, начальник управления сельского хозяйства администрации Воскресенского муниципального округа Нижегородской области"
        }, {imgSrc: "/upload/iblock/ce5/mpep2ztjtq7brl49il18aaabtr9sihil/Федотова.jpg", position: "тренер фабрики процессов", title: "Федотова Светлана Леонидовна", desc: ""}]
    }, {
        id: 7,
        lgbs: "Городец",
        lgbs_designated: [28],
        specialization: "Сельское хозяйство и предпринимательство",
        filterValue: "48",
        address:" Нижегородская область, Городецкий район, г. Городец ул. Новая, д.106",
        persons: [{
            imgSrc: "/upload/iblock/efb/dj8gyjzwtj7oc3ngiu3jzd2acoxirq73/%D0%92%D1%8B%D1%82%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2.jpeg",
            position: "курирующий зам",
            title: "Вытников Иван Витальевич",
            desc: "Заместитель главы администрации Городецкого муниципального округа"
        }, {imgSrc: "/upload/iblock/335/u0jk2p7q2ao1slbs6h8ro42u0clcgf1l/%D0%BA%D0%BE%D1%80%D0%BD%D0%B5%D0%B2%D0%B0.jpeg", position: "тренер фабрики процессов", title: "Корнева Татьяна Николаевна", desc: ""}]
    }, {
        id: 8,
        lgbs: "Балахна",
        lgbs_designated: [49],
        specialization: "Муниципальное управление",
        filterValue: "59",
        address:" г.Балахна, пр-кт Дзержинского, дом 36 (2 этаж)",
        persons: [{
            imgSrc: "/upload/iblock/7c1/r1prh7zt5xbdwuu9zbzgbub7vejfhbya/%D0%90%D0%B1%D1%83%D0%B7%D0%BE%D0%B2.jpeg",
            position: "курирующий зам",
            title: "Абусов Михаил Сергеевич",
            desc: "Заместитель главы администрации Балахнинского муниципального округа"
        }, {imgSrc: "/upload/iblock/a65/z1cq1yjxox1m85terkp1f4ej2hf4o0pi/Русина.jpeg", position: "тренер фабрики процессов", title: "Русина Нинель Александровна", desc: ""},
	{imgSrc: "/upload/iblock/83c/k2nweq0hutnmk1124z3s4468vxjrfn59/Ерохина.jpeg", position: "тренер фабрики процессов", title: "Ерохина Елена Николаевна", desc: ""}]
    }, {id: 9, lgbs: "Бор", lgbs_designated: [], specialization: "Предпринимательство", filterValue: "1",
        address:"Бор ул. слободская 1А",
        persons: [{
            imgSrc: "",
            position: "курирующий зам",
            title: "Киричев Сергей Валерьевич",
            desc: "Заместительствам администрации"
        }, {imgSrc: "", position: "тренер фабрики процессов", title: "Титов Антон Александрович", desc: ""}] 
    }, {
        id: 10,
        lgbs: "Лысково",
        lgbs_designated: [38, 39],
        specialization: "Экономика",
        filterValue: "53",
        address:"Нижегородская обл., г. Лысково,ул.Ленина д.23",
        persons: [{
            imgSrc: "/upload/iblock/aa5/72lnd3no7awezrxqhpu51tq1hphnh5hr/Добротворский.jpeg",
            position: "курирующий зам",
            title: "Добротворский Игорь Юрьевич",
            desc: "Заместитель главы администрации Лысковского муниципального округа Нижегородской области по социальным вопросам"
        }, {imgSrc: "/upload/iblock/40d/od45nmv2ui4syz95tunj4afbwl51anyd/Сурьянинова.jpeg", position: "тренер фабрики процессов", title: "Сурьянинова Елена Петровна", desc: ""}]
    }, {id: 11, lgbs: "Княгинино", lgbs_designated: [47, 48], specialization: "Демография", filterValue: "57",
        address:" 606340, Нижегородская область город Княгинино улица Октябрьская 22а",
        persons: [{
            imgSrc: "/upload/iblock/b22/ca5x6itjku0ahkb3nlqxorgyia1hj7hq/Яшин.jpeg",
            position: "курирующий зам",
            title: "Яшин Роман Юрьевич",
            desc: "Заместитель главы администрации Княгининского муниципального округа Нижегородской области"
        }, {imgSrc: "/upload/iblock/dd2/j30lp8ahzpgkt3knhdzxza1wllbivws0/Козлов.jpeg", position: "тренер фабрики процессов", title: "Козлов Сергей Николаевич", desc: ""}]
    }, {
        id: 12,
        lgbs: "Сергач",
        lgbs_designated: [40, 41, 42],
        specialization: "Образование",
        filterValue: "54",
        address:" г. Сергач, ул. Советская, 30",
        persons: [{
            imgSrc: "/upload/iblock/140/34lgt5qtuf0o1ggwgjjdyno6zp7yf547/Курасова.jpeg",
            position: "курирующий зам",
            title: "Курасова Ирина Борисовна",
            desc: "Заместитель главы, начальник управления образования, развития спорта и молодежной политики администрации Сергачского муниципального округа Нижегородской области"
        }, {imgSrc: "/upload/iblock/690/2yfwepevko73t36a7yu305fkrdfcyste/Рейно.jpeg", position: "тренер фабрики процессов", title: "Рейно Мария Дмитриевна", desc: ""}]
    }, {id: 13, lgbs: "Перевоз", lgbs_designated: [45, 46], specialization: "Экология", filterValue: "3",
	address:" г. Перевоз, пр-т Советский дом 8",
        persons: [{
            imgSrc: "/upload/iblock/c88/yqpzz7ugz597b6l77iry0ur8cryye0ga/Шемякина.jpg",
            position: "курирующий зам",
            title: "Шемякина Наталья Федоровна",
            desc: "Начальник организационно-правового управления администрации городского округа Перевозский Нижегородской области"
        }, {imgSrc: "/upload/iblock/335/u1jx6x0e6ous6onzjrso3z16rl6x25eb/Любезнова.jpg", position: "тренер фабрики процессов", title: "Любезнова Татьяна Анатольевна", desc: ""}]
    }, {
        id: 14,
        lgbs: "Б. Болдино",
        lgbs_designated: [34, 35, 36, 37],
        specialization: "Культурное наследие",
        filterValue: "52",
        address:"",
        persons: [{
            imgSrc: "/upload/iblock/310/nthqpt4mi33imig8mf6khmrbxv6trpjg/Колесникова%20О.И..jpg",
            position: "курирующий зам",
            title: "Колесникова Ольга Ивановна",
            desc: "Заместитель главы местного самоуправления"
        }, {imgSrc: "/upload/iblock/12b/ajwmoa1p8s0b0903vnwohjoiovq4ebhw/Мосягин.jpeg", position: "тренер фабрики процессов", title: "Мосягин Алексей Николаевич", desc: ""}]
    }, {
        id: 15,
        lgbs: "Арзамас",
        lgbs_designated: [25, 26, 27],
        specialization: "Муниципальное управление",
        filterValue: "47",
	address:"город Арзамас, ул. советская, 10, зал Вахтерова (кабинет 62)",
        persons: [{
            imgSrc: "/upload/iblock/025/pbsnllb1434vv2xfwi242nnsiu182294/Матвеев.jpeg",
            position: "курирующий зам",
            title: "Матвеев Александр Владимирович",
            desc: "Заместитель главы администрации городского округа город Арзамас"
        }, {imgSrc: "/upload/iblock/752/3kwfptt0inuxwo6ua0o50el05chft6ix/photo_2024-04-24_11-07-00.jpg", position: "тренер фабрики процессов", title: "Перцева Екатерина Владимировна ", desc: ""}]
    }, {
        id: 16,
        lgbs: "Павлово",
        lgbs_designated: [22, 23, 24],
        specialization: "Предпринимательство",
        filterValue: "3",
	address:"",
        persons: [{
            imgSrc: "/upload/iblock/1b3/erycq8a2e2wi7bjqo2t9e3wz1h65va43/8129fc0b-d5fa-4035-84ea-c8cac3dee1df.jpg",
            position: "курирующий зам",
            title: "Лисин Дмитрий Николаевич",
            desc: "Заместитель главы администрации Павловского муниципального округа"
        }, {imgSrc: "/upload/iblock/60b/bi6biyi6getfuocskcaqnj0d7qh6jqxs/d630f001-178a-44ec-8f90-7d731c598f50.jpg", position: "тренер фабрики процессов", title: "Власова Екатерина Сергеевна", desc: ""},
	{imgSrc: "/upload/iblock/993/mxzeqaxa2g1t24943qj4mfatq6lar4gb/d2918b36-ebf5-4d14-b941-55ed582218e9.jpg", position: "тренер фабрики процессов", title: "Бубнова Наталья Николаевна, директор Бизнес инкубатора Павловский", desc: ""}]

    }, {id: 17, lgbs: "Нижний Новгород", lgbs_designated: [], specialization: "", filterValue: ""}, {
        id: 18,
        lgbs: "Дзержинск",
        lgbs_designated: [31],
        specialization: "Финансы",
        filterValue: "50",
	address:" г.Дзержинск, пл.Дзержинского, д.1 каб.15.",
        persons: [{
            imgSrc: "/upload/iblock/924/yabj7jtn6wosc27l0hvkmfdfe9eutyfi/Федоров.jpeg",
            position: "курирующий зам",
            title: "Федоров Сергей Викторович",
            desc: "Заместитель главы администрации городского округа, директор департамента финансов администрации г.Дзержинска"
        }, {imgSrc: "/upload/iblock/5b7/sqz3bz316af804jm2rbp00nzdli8es12/Маненков.jpeg", position: "тренер фабрики процессов", title: "Маненков Евгений Вячеславович", desc: ""}]
    }, {
        id: 19,
        lgbs: "Кстово",
        lgbs_designated: [],
        specialization: "Благоустройство и ЖКХ",
        filterValue: "2",
	address:" г.Кстово, пл.Ленина, 4, второй этаж",
        persons: [{
            imgSrc: "",
            position: "курирующий зам",
            title: "Шарапаева Александра Николаевна",
            desc: "Заместитель главы администрации Кстовского муниципального округа"
        }, {imgSrc: "/upload/iblock/473/wl59sl4o7nfv4ul0vk7ny2898a5cawh4/Бобкова.jpeg", position: "тренер фабрики процессов", title: "Бобкова Анна Олеговна", desc: ""}]
    }, {
        id: 20,
        lgbs: "Выкса",
        lgbs_designated: [29, 21, 30],
        specialization: "Муниципальное управление",
        filterValue: "49",
	address:" Нижегородская обл., г.Выкса, Красная площадь, д.1, каб. 321",
        persons: [{
            imgSrc: "/upload/iblock/b39/1i4wt1pndxim141xhg5ed4gdwtnm9n35/Нажиганов.jpeg",
            position: "курирующий зам",
            title: "Нажиганов Андрей Геннадьевич",
            desc: "Заместитель главы администрации г.о.г.Выкса"
        }, {imgSrc: "/upload/iblock/b60/9xl317q3t5ciprlcjryq2lrzyztfasb4/Абрамова.jpeg", position: "тренер фабрики процессов", title: "Абрамова Светлана Васильевна", desc: ""}]
    }, {id: 21, lgbs: "Вознесенское", lgbs_designated: [], specialization: "", filterValue: ""}, {
        id: 22,
        lgbs: "Богородск",
        lgbs_designated: [],
        specialization: "",
        filterValue: ""
    }, {id: 23, lgbs: "Сосновое", lgbs_designated: [], specialization: "", filterValue: ""}, {
        id: 24,
        lgbs: "Вача",
        lgbs_designated: [],
        specialization: "",
        filterValue: ""
    }, {id: 25, lgbs: "Ардатов", lgbs_designated: [], specialization: "", filterValue: ""}, {
        id: 26,
        lgbs: "Дивеево",
        lgbs_designated: [],
        specialization: "",
        filterValue: ""
    }, {id: 27, lgbs: "Шатки", lgbs_designated: [], specialization: "", filterValue: ""}, {
        id: 28,
        lgbs: "Сокольское",
        lgbs_designated: [],
        specialization: "",
        filterValue: ""
    }, {id: 29, lgbs: "Кулебаки", lgbs_designated: [], specialization: "", filterValue: ""}, {
        id: 30,
        lgbs: "Навашино",
        lgbs_designated: [],
        specialization: "",
        filterValue: ""
    }, {id: 31, lgbs: "Володарск", lgbs_designated: [], specialization: "", filterValue: ""}, {
        id: 32,
        lgbs: "Тонкино",
        lgbs_designated: [],
        specialization: "",
        filterValue: ""
    }, {id: 33, lgbs: "Шаранга", lgbs_designated: [], specialization: "", filterValue: ""}, {
        id: 34,
        lgbs: "Первомайск",
        lgbs_designated: [],
        specialization: "",
        filterValue: ""
    }, {id: 35, lgbs: "Лукоянов", lgbs_designated: [], specialization: "", filterValue: ""}, {
        id: 36,
        lgbs: "Починки",
        lgbs_designated: [],
        specialization: "",
        filterValue: ""
    }, {id: 37, lgbs: "Гагино", lgbs_designated: [], specialization: "", filterValue: ""}, {
        id: 38,
        lgbs: "Спасское",
        lgbs_designated: [],
        specialization: "",
        filterValue: ""
    }, {id: 39, lgbs: "Воротынец", lgbs_designated: [], specialization: "", filterValue: ""}, {
        id: 40,
        lgbs: "Пильна",
        lgbs_designated: [],
        specialization: "",
        filterValue: ""
    }, {id: 41, lgbs: "Сеченово", lgbs_designated: [], specialization: "", filterValue: ""}, {
        id: 42,
        lgbs: "Уразовка",
        lgbs_designated: [],
        specialization: "",
        filterValue: ""
    }, {id: 43, lgbs: "Ковернино", lgbs_designated: [], specialization: "", filterValue: ""}, {
        id: 44,
        lgbs: "Варнавино",
        lgbs_designated: [],
        specialization: "",
        filterValue: ""
    }, {id: 45, lgbs: "Д. Константиново", lgbs_designated: [], specialization: "", filterValue: ""}, {
        id: 46,
        lgbs: "Вад",
        lgbs_designated: [],
        specialization: "",
        filterValue: ""
    }, {id: 47, lgbs: "Б. Мурашкино", lgbs_designated: [], specialization: "", filterValue: ""}, {
        id: 48,
        lgbs: "Бутурлино",
        lgbs_designated: [],
        specialization: "",
        filterValue: ""
    }, {id: 49, lgbs: "Чкаловск", lgbs_designated: [], specialization: "", filterValue: ""}, {
        id: 50,
        lgbs: "Красные Баки",
        lgbs_designated: [],
        specialization: "",
        filterValue: ""
    }];
    $((function () {
        function t() {
            $(".created_line").remove(), $(".main-map__content .active").removeClass("active")
        }

        function e(t) {
            var e, n = t.id, i = t.lgbs, r = t.lgbs_designated, o = t.specialization, a = t.filterValue, l = t.address,
                c = t.persons, u = f()(r).call(r, (function (t) {
                    return h()(x).call(x, (function (e) {
                        return t === e.id
                    })).lgbs
                })), d = m()(e = [i]).call(e, s()(u)).join(", "),
                p = "?arrFilter_pf%5BCOMPANY%5D=".concat(a, "&arrFilter_pf%5BDEVELOPER%5D=&arrFilter_pf%5BYEAR%5D=&arrFilter_pf%5BTYPE%5D=&arrFilter_pf%5BFREE_TIME%5D%5BLEFT%5D=0&arrFilter_pf%5BFREE_TIME%5D%5BRIGHT%5D=1000000&arrFilter_pf%5BECONOMY%5D%5BLEFT%5D=0&arrFilter_pf%5BECONOMY%5D%5BRIGHT%5D=1000000&arrFilter_pf%5BSOCIAL%5D=&arrFilter_pf%5BECOLOGICAL%5D=&arrFilter_pf%5BCULTURAL%5D=&arrFilter_pf%5BEXPENSES%5D%5BLEFT%5D=0&arrFilter_pf%5BEXPENSES%5D%5BRIGHT%5D=1000000&arrFilter_pf%5BSTATUS%5D=&arrFilter_cf%5B8%5D%5BLEFT%5D=0&arrFilter_cf%5B8%5D%5BRIGHT%5D=1000000&arrFilter_cf%5B9%5D%5BLEFT%5D=0&arrFilter_cf%5B9%5D%5BRIGHT%5D=1000000&arrFilter_cf%5B13%5D%5BLEFT%5D=0&arrFilter_cf%5B13%5D%5BRIGHT%5D=1000000&set_filter=Применить+фильтр&set_filter=Y");
            return {
                renderOnMap: function () {
                    var t, e, i, s, r;
                    return m()(t = m()(e = m()(i = m()(s = m()(r = '\n      <div id="'.concat(n, '" class="main-map__item bundle1">\n        <button class="main-map__item-close">\n          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.1379 4.83787C14.4074 4.56841 14.4074 4.13153 14.1379 3.86207C13.8685 3.59261 13.4316 3.59261 13.1622 3.86207L9.00004 8.02417L4.83795 3.86207C4.56847 3.59261 4.13159 3.59261 3.86213 3.86207C3.59267 4.13153 3.59267 4.56841 3.86213 4.83787L8.02423 8.99998L3.86213 13.1621C3.59267 13.4316 3.59267 13.8684 3.86213 14.1379C4.13159 14.4073 4.56847 14.4073 4.83795 14.1379L9.00004 9.97578L13.1622 14.1379C13.4316 14.4073 13.8685 14.4073 14.1379 14.1379C14.4074 13.8684 14.4074 13.4316 14.1379 13.1621L9.97584 8.99998L14.1379 4.83787Z" fill="black"/>\n          </svg>\n        </button>\n        <div class="main-map__title">')).call(r, o, '</div>\n        <div class="main-map__city">\n          <svg width="12" height="17" viewBox="0 0 12 17" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <path d="M5.9978 8.02422C6.2791 8.02422 6.55764 7.9696 6.81753 7.86348C7.07742 7.75736 7.31356 7.60182 7.51247 7.40573C7.71138 7.20965 7.86916 6.97686 7.97681 6.72067C8.08446 6.46447 8.13987 6.18988 8.13987 5.91258C8.13987 5.35254 7.91419 4.81544 7.51247 4.41943C7.11075 4.02342 6.56591 3.80094 5.9978 3.80094C5.42969 3.80094 4.88484 4.02342 4.48312 4.41943C4.08141 4.81544 3.85573 5.35254 3.85573 5.91258C3.85573 6.18988 3.91113 6.46447 4.01878 6.72067C4.12643 6.97686 4.28422 7.20965 4.48312 7.40573C4.88484 7.80174 5.42969 8.02422 5.9978 8.02422ZM5.9978 0C9.30515 0 11.9956 2.64377 11.9956 5.91258C11.9956 10.347 5.9978 16.8931 5.9978 16.8931C5.9978 16.8931 0 10.347 0 5.91258C0 4.34447 0.631909 2.84058 1.75671 1.73175C2.88152 0.622931 4.40708 0 5.9978 0Z" fill="#943434"/>\n          </svg>\n          <span>')).call(s, d, '</span> \n          </div>\n        <div class="main-map__address"><span>адрес:</span><span> ')).call(i, l, "</span></div>\n        ")).call(e, c && f()(c).call(c, (function (t) {
                        var e, n, i;
                        return t && m()(e = m()(n = m()(i = '\n          <div class="main-map__person">\n            '.concat((null == t ? void 0 : t.imgSrc) && '<div class="main-map__person-img"><img src="'.concat(null == t ? void 0 : t.imgSrc, '" /></div>'), "\n            ")).call(i, (null == t ? void 0 : t.position) && '<div class="main-map__person-position">'.concat(null == t ? void 0 : t.position, "</div>"), "\n            ")).call(n, (null == t ? void 0 : t.title) && '<div class="main-map__person-title">'.concat(null == t ? void 0 : t.title, "</div>"), "\n            \n            ")).call(e, (null == t ? void 0 : t.desc) && '<div class="main-map__person-desc">'.concat(null == t ? void 0 : t.desc, "</div>"), "\n            \n          </div>\n          ")
                    })).join(""), '\n        <a href="/projects/')).call(t, p, '" class="link link--red main-map__link">\n          <span>В каталог проектов</span>\n          <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.89008 4.26209C8.13182 4.03545 8.51153 4.0477 8.73817 4.28945L13.2381 9.08945C13.4545 9.32023 13.4545 9.67938 13.2381 9.91018L8.73817 14.7102C8.51153 14.952 8.13182 14.9642 7.89008 14.7375C7.64833 14.5108 7.63608 14.1312 7.86272 13.8895L11.978 9.49981L7.86272 5.11018C7.63608 4.86843 7.64833 4.48872 7.89008 4.26209Z" fill="white"/>\n          </svg>\n        </a>\n      </div>\n    ')
                }, renderOnSideBar: function () {
                    var t, e, i, s, r, a, u, h;
                    return "" === o ? "" : $(window).width() < 768 ? m()(s = m()(r = m()(a = m()(u = m()(h = '\n      <div id="'.concat(n, '" class="main-map__item dropdown">\n        <button class="dropdown__caption">\n          <div class="main-map__title">')).call(h, o, '</div>\n          <svg class="icon-expand" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">\n            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.2379 7.39008C14.4645 7.63182 14.4523 8.01153 14.2105 8.23817L9.4105 12.7381C9.17972 12.9545 8.82057 12.9545 8.58978 12.7381L3.7898 8.23817C3.548 8.01153 3.53576 7.63182 3.76244 7.39008C3.98912 7.14833 4.3688 7.13608 4.61048 7.36272L9.00014 11.478L13.3898 7.36272C13.6315 7.13608 14.0112 7.14833 14.2379 7.39008Z" fill="black"/>\n          </svg>\n          <div class="main-map__city">\n            <svg width="12" height="17" viewBox="0 0 12 17" fill="none" xmlns="http://www.w3.org/2000/svg">\n              <path d="M5.9978 8.02422C6.2791 8.02422 6.55764 7.9696 6.81753 7.86348C7.07742 7.75736 7.31356 7.60182 7.51247 7.40573C7.71138 7.20965 7.86916 6.97686 7.97681 6.72067C8.08446 6.46447 8.13987 6.18988 8.13987 5.91258C8.13987 5.35254 7.91419 4.81544 7.51247 4.41943C7.11075 4.02342 6.56591 3.80094 5.9978 3.80094C5.42969 3.80094 4.88484 4.02342 4.48312 4.41943C4.08141 4.81544 3.85573 5.35254 3.85573 5.91258C3.85573 6.18988 3.91113 6.46447 4.01878 6.72067C4.12643 6.97686 4.28422 7.20965 4.48312 7.40573C4.88484 7.80174 5.42969 8.02422 5.9978 8.02422ZM5.9978 0C9.30515 0 11.9956 2.64377 11.9956 5.91258C11.9956 10.347 5.9978 16.8931 5.9978 16.8931C5.9978 16.8931 0 10.347 0 5.91258C0 4.34447 0.631909 2.84058 1.75671 1.73175C2.88152 0.622931 4.40708 0 5.9978 0Z" fill="#943434"/>\n            </svg>\n            <span>')).call(u, d, '</span> \n          </div>\n        </button>\n        <div class="dropdown__content">\n            <div class="main-map__address"><span>адрес:</span><span> ')).call(a, l, "</span></div>\n            ")).call(r, c && f()(c).call(c, (function (t) {
                        var e, n, i;
                        return t && m()(e = m()(n = m()(i = '\n              <div class="main-map__person">\n                '.concat((null == t ? void 0 : t.imgSrc) && '<div class="main-map__person-img"><img src="'.concat(null == t ? void 0 : t.imgSrc, '" /></div>'), '\n                <div class="main-map__person-position">')).call(i, null == t ? void 0 : t.position, '</div>\n                <div class="main-map__person-title">')).call(n, null == t ? void 0 : t.title, '</div>\n                <div class="main-map__person-desc">')).call(e, null == t ? void 0 : t.desc, "</div>\n              </div>\n              ")
                    })).join(""), '\n            <a href="/projects/')).call(s, p, '" class="link link--red main-map__link">\n              <span>В каталог проектов</span>\n              <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.89008 4.26209C8.13182 4.03545 8.51153 4.0477 8.73817 4.28945L13.2381 9.08945C13.4545 9.32023 13.4545 9.67938 13.2381 9.91018L8.73817 14.7102C8.51153 14.952 8.13182 14.9642 7.89008 14.7375C7.64833 14.5108 7.63608 14.1312 7.86272 13.8895L11.978 9.49981L7.86272 5.11018C7.63608 4.86843 7.64833 4.48872 7.89008 4.26209Z" fill="white"/>\n              </svg>\n            </a>\n          </div>\n        </div>\n        \n            ') : m()(t = m()(e = m()(i = '\n      <a id="'.concat(n, '" href="/projects/')).call(i, p, '" class="main-map__item bundle2">\n        <div class="main-map__title">')).call(e, o, '</div>\n        <div class="main-map__city">\n          <svg width="12" height="17" viewBox="0 0 12 17" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <path d="M5.9978 8.02422C6.2791 8.02422 6.55764 7.9696 6.81753 7.86348C7.07742 7.75736 7.31356 7.60182 7.51247 7.40573C7.71138 7.20965 7.86916 6.97686 7.97681 6.72067C8.08446 6.46447 8.13987 6.18988 8.13987 5.91258C8.13987 5.35254 7.91419 4.81544 7.51247 4.41943C7.11075 4.02342 6.56591 3.80094 5.9978 3.80094C5.42969 3.80094 4.88484 4.02342 4.48312 4.41943C4.08141 4.81544 3.85573 5.35254 3.85573 5.91258C3.85573 6.18988 3.91113 6.46447 4.01878 6.72067C4.12643 6.97686 4.28422 7.20965 4.48312 7.40573C4.88484 7.80174 5.42969 8.02422 5.9978 8.02422ZM5.9978 0C9.30515 0 11.9956 2.64377 11.9956 5.91258C11.9956 10.347 5.9978 16.8931 5.9978 16.8931C5.9978 16.8931 0 10.347 0 5.91258C0 4.34447 0.631909 2.84058 1.75671 1.73175C2.88152 0.622931 4.40708 0 5.9978 0Z" fill="#943434"/>\n          </svg>\n          <span>')).call(t, d, "</span> \n          </div>\n      </a>\n    ")
                }
            }
        }

        function n(n) {
            var o;
            $(".main-map__wrapper").children().remove();
            var a = "";
            u()(o = b()(x).call(x, (function (t) {
                var e, i, r, o = t.specialization, a = t.lgbs, l = t.lgbs_designated;
                if (!n) return !0;
                var c = f()(l).call(l, (function (t) {
                    return h()(x).call(x, (function (e) {
                        return t === e.id
                    })).lgbs
                })), u = m()(e = [a]).call(e, s()(c)).join(", ");
                return w()(i = o.toLowerCase()).call(i, n.toLowerCase()) || w()(r = u.toLowerCase()).call(r, n.toLowerCase())
            }))).call(o, (function (t) {
                return a += e(t).renderOnSideBar()
            })), $(".main-map__wrapper").append(a), $(".main-map__item").on("mouseenter", (function () {
                var t = Number($(this).attr("id"));
                $('g[id="'.concat(t, '"]')).trigger("mouseenter"), i(t)
            })), $(".main-map__item").on("mouseleave", (function () {
                t(), r()
            })), $(".main-map__wrapper").height() < 640 ? $(".main-map__sidebar").addClass("scroll-end") : $(".main-map__sidebar").removeClass("scroll-end")
        }

        function i(t) {
            r();
            var n = e(h()(x).call(x, (function (e) {
                return e.id === t
            }))).renderOnMap();
            $(".main-map__img").append(n);
            var i = $('.main-map__img svg g[id="'.concat(t, '"]')), s = $(".main-map__img .main-map__item"),
                o = $(".main-map__img")[0].getBoundingClientRect(), a = i[0].getBoundingClientRect(),
                l = {top: a.top - o.top + 32, left: a.left - o.left - s.width() - 16};
            s.css(l), s.css("opacity", 1)
        }

        function r() {
            $(".main-map__img .main-map__item").remove()
        }

        var a, c, d, p, g, v, y = (a = n, c = 300, function () {
            var t = this, e = arguments, n = function () {
                p = null, d || a.apply(t, e)
            }, i = d && !p;
            clearTimeout(p), p = o()(n, c), i && a.apply(t, e)
        });
        $(".main-map__search > input").on("input", (function (t) {
            y(t.target.value)
        })), $(window).width() <= 768 && o()((function () {
            $(".main-map__wrapper").on("scroll", (function () {
                var t = $(".main-map__item").last().outerHeight() / 2;
                console.log(this.scrollHeight - t === this.scrollTop + this.clientHeight, this.scrollHeight - t, this.scrollTop + this.clientHeight), this.scrollHeight - t <= this.scrollTop + this.clientHeight ? $(".main-map__sidebar").addClass("scroll-end") : $(".main-map__sidebar").removeClass("scroll-end")
            }))
        }), 0), u()(x).call(x, (function (t) {
            0 === t.lgbs_designated.length && 0 === t.specialization.length || $('.main-map__content g[id="'.concat(t.id, '"]')).css("cursor", "pointer")
        })), $(".main-map__content g[style='cursor: pointer;']").on("click", (function () {
            var e, n = this, s = $(this), r = Number(s.attr("id")), o = h()(x).call(x, (function (t) {
                return t.id === r
            })), a = s[0].getBBox();
            $(this).is(".active") || (t(), $(this).addClass("active"), u()(e = o.lgbs_designated).call(e, (function (t) {
                var e = $('.main-map__content g[id="'.concat(t, '"]')), i = e[0].getBBox(), s = function (t) {
                    var e = t.x1, n = t.y1, i = t.x2, s = t.y2,
                        r = document.createElementNS("http://www.w3.org/2000/svg", "line");
                    return r.classList.add("created_line"), r.setAttribute("x1", e), r.setAttribute("y1", n), r.setAttribute("x2", i), r.setAttribute("y2", s), r.setAttribute("stroke", "#943434"), r.setAttribute("stroke-width", "2"), r
                }({x1: a.x + a.width / 2, y1: a.y + a.height / 2, x2: i.x + i.width / 2, y2: i.y + i.height / 2});
                $(n).closest("svg").prepend(s), e.addClass("active")
            })), i(r))
        })), $(document).on("click", ".main-map__item-close", (function () {
            t(), r()
        })), g = [".main-map__item", ".main-map__content g[style='cursor: pointer;']"], v = function () {
            t(), r()
        }, document.addEventListener("click", (function (t) {
            l()(g).call(g, (function (e) {
                return $(t.target).closest(e).is(e)
            })) || (console.log("close"), v())
        })), $(".main-map__content g[style='cursor: pointer;']").on("mouseleave", (function () {
        })), $(".main-map__content g[style='cursor: pointer;']").on("click", (function () {
        })), $(document).on("click", (function (t) {
            !$(t.target).closest(".main-map__item").is(".main-map__item") || !$(t.target).is(".main-map__item") || $(t.target).closest("g.active").is("g.active") || ($(".main-map__content .active").removeClass("active"), $(".created_line").remove())
        })), n()
    }))
}, function (t, e, n) {
    var i = n(218), s = n(122);
    t.exports = function (t) {
        if (i(t)) return s(t)
    }, t.exports.__esModule = !0, t.exports.default = t.exports
}, function (t, e, n) {
    t.exports = n(219)
}, function (t, e, n) {
    var i = n(220);
    t.exports = i
}, function (t, e, n) {
    var i = n(221);
    t.exports = i
}, function (t, e, n) {
    var i = n(222);
    t.exports = i
}, function (t, e, n) {
    n(223);
    var i = n(15);
    t.exports = i.Array.isArray
}, function (t, e, n) {
    n(0)({target: "Array", stat: !0}, {isArray: n(35)})
}, function (t, e, n) {
    var i = n(90), s = n(266), r = n(130);
    t.exports = function (t) {
        if (void 0 !== i && null != s(t) || null != t["@@iterator"]) return r(t)
    }, t.exports.__esModule = !0, t.exports.default = t.exports
}, function (t, e, n) {
    var i = n(226);
    n(256), n(257), n(258), n(259), n(260), n(261), n(262), n(263), n(264), n(265), t.exports = i
}, function (t, e, n) {
    var i = n(227);
    n(253), n(254), n(255), t.exports = i
}, function (t, e, n) {
    var i = n(228);
    n(36), t.exports = i
}, function (t, e, n) {
    n(123), n(73), n(229), n(237), n(238), n(239), n(240), n(127), n(241), n(242), n(243), n(244), n(245), n(246), n(247), n(248), n(249), n(250), n(251), n(252);
    var i = n(15);
    t.exports = i.Symbol
}, function (t, e, n) {
    n(230), n(232), n(233), n(234), n(236)
}, function (t, e, n) {
    "use strict";
    var i = n(0), s = n(6), r = n(9), o = n(3), a = n(18), l = n(12), c = n(39), u = n(5), d = n(11), h = n(10),
        p = n(16), f = n(29), g = n(63), m = n(25), v = n(28), b = n(44), y = n(111), w = n(91), x = n(231), C = n(92),
        S = n(62), T = n(20), E = n(110), P = n(98), M = n(24), O = n(87), L = n(40), _ = n(68), k = n(69), A = n(80),
        z = n(2), I = n(93), R = n(7), j = n(125), D = n(37), $ = n(54), F = n(41).forEach, B = _("hidden"), N = $.set,
        H = $.getterFor("Symbol"), V = Object.prototype, G = s.Symbol, W = G && G.prototype, q = s.TypeError,
        X = s.QObject, Y = S.f, U = T.f, Z = x.f, K = P.f, J = o([].push), Q = L("symbols"), tt = L("op-symbols"),
        et = L("wks"), nt = !X || !X.prototype || !X.prototype.findChild, it = l && u((function () {
            return 7 != b(U({}, "a", {
                get: function () {
                    return U(this, "a", {value: 7}).a
                }
            })).a
        })) ? function (t, e, n) {
            var i = Y(V, e);
            i && delete V[e], U(t, e, n), i && t !== V && U(V, e, i)
        } : U, st = function (t, e) {
            var n = Q[t] = b(W);
            return N(n, {type: "Symbol", tag: t, description: e}), l || (n.description = e), n
        }, rt = function (t, e, n) {
            t === V && rt(tt, e, n), p(t);
            var i = g(e);
            return p(n), d(Q, i) ? (n.enumerable ? (d(t, B) && t[B][i] && (t[B][i] = !1), n = b(n, {enumerable: v(0, !1)})) : (d(t, B) || U(t, B, v(1, {})), t[B][i] = !0), it(t, i, n)) : U(t, i, n)
        }, ot = function (t, e) {
            p(t);
            var n = f(e), i = y(n).concat(ut(n));
            return F(i, (function (e) {
                l && !r(at, n, e) || rt(t, e, n[e])
            })), t
        }, at = function (t) {
            var e = g(t), n = r(K, this, e);
            return !(this === V && d(Q, e) && !d(tt, e)) && (!(n || !d(this, e) || !d(Q, e) || d(this, B) && this[B][e]) || n)
        }, lt = function (t, e) {
            var n = f(t), i = g(e);
            if (n !== V || !d(Q, i) || d(tt, i)) {
                var s = Y(n, i);
                return !s || !d(Q, i) || d(n, B) && n[B][i] || (s.enumerable = !0), s
            }
        }, ct = function (t) {
            var e = Z(f(t)), n = [];
            return F(e, (function (t) {
                d(Q, t) || d(k, t) || J(n, t)
            })), n
        }, ut = function (t) {
            var e = t === V, n = Z(e ? tt : f(t)), i = [];
            return F(n, (function (t) {
                !d(Q, t) || e && !d(V, t) || J(i, Q[t])
            })), i
        };
    c || (M(W = (G = function () {
        if (h(W, this)) throw q("Symbol is not a constructor");
        var t = arguments.length && void 0 !== arguments[0] ? m(arguments[0]) : void 0, e = A(t), n = function (t) {
            this === V && r(n, tt, t), d(this, B) && d(this[B], e) && (this[B][e] = !1), it(this, e, v(1, t))
        };
        return l && nt && it(V, e, {configurable: !0, set: n}), st(e, t)
    }).prototype, "toString", (function () {
        return H(this).tag
    })), M(G, "withoutSetter", (function (t) {
        return st(A(t), t)
    })), P.f = at, T.f = rt, E.f = ot, S.f = lt, w.f = x.f = ct, C.f = ut, I.f = function (t) {
        return st(z(t), t)
    }, l && (O(W, "description", {
        configurable: !0, get: function () {
            return H(this).description
        }
    }), a || M(V, "propertyIsEnumerable", at, {unsafe: !0}))), i({
        global: !0,
        constructor: !0,
        wrap: !0,
        forced: !c,
        sham: !c
    }, {Symbol: G}), F(y(et), (function (t) {
        R(t)
    })), i({target: "Symbol", stat: !0, forced: !c}, {
        useSetter: function () {
            nt = !0
        }, useSimple: function () {
            nt = !1
        }
    }), i({target: "Object", stat: !0, forced: !c, sham: !l}, {
        create: function (t, e) {
            return void 0 === e ? b(t) : ot(b(t), e)
        }, defineProperty: rt, defineProperties: ot, getOwnPropertyDescriptor: lt
    }), i({target: "Object", stat: !0, forced: !c}, {getOwnPropertyNames: ct}), j(), D(G, "Symbol"), k[B] = !0
}, function (t, e, n) {
    var i = n(27), s = n(29), r = n(91).f, o = n(120),
        a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
    t.exports.f = function (t) {
        return a && "Window" == i(t) ? function (t) {
            try {
                return r(t)
            } catch (t) {
                return o(a)
            }
        }(t) : r(s(t))
    }
}, function (t, e, n) {
    var i = n(0), s = n(14), r = n(11), o = n(25), a = n(40), l = n(126), c = a("string-to-symbol-registry"),
        u = a("symbol-to-string-registry");
    i({target: "Symbol", stat: !0, forced: !l}, {
        for: function (t) {
            var e = o(t);
            if (r(c, e)) return c[e];
            var n = s("Symbol")(e);
            return c[e] = n, u[n] = e, n
        }
    })
}, function (t, e, n) {
    var i = n(0), s = n(11), r = n(51), o = n(53), a = n(40), l = n(126), c = a("symbol-to-string-registry");
    i({target: "Symbol", stat: !0, forced: !l}, {
        keyFor: function (t) {
            if (!r(t)) throw TypeError(o(t) + " is not a symbol");
            if (s(c, t)) return c[t]
        }
    })
}, function (t, e, n) {
    var i = n(0), s = n(14), r = n(61), o = n(9), a = n(3), l = n(5), c = n(4), u = n(51), d = n(56), h = n(235),
        p = n(39), f = String, g = s("JSON", "stringify"), m = a(/./.exec), v = a("".charAt), b = a("".charCodeAt),
        y = a("".replace), w = a(1..toString), x = /[\uD800-\uDFFF]/g, C = /^[\uD800-\uDBFF]$/, S = /^[\uDC00-\uDFFF]$/,
        T = !p || l((function () {
            var t = s("Symbol")();
            return "[null]" != g([t]) || "{}" != g({a: t}) || "{}" != g(Object(t))
        })), E = l((function () {
            return '"\\udf06\\ud834"' !== g("\udf06\ud834") || '"\\udead"' !== g("\udead")
        })), P = function (t, e) {
            var n = d(arguments), i = h(e);
            if (c(i) || void 0 !== t && !u(t)) return n[1] = function (t, e) {
                if (c(i) && (e = o(i, this, f(t), e)), !u(e)) return e
            }, r(g, null, n)
        }, M = function (t, e, n) {
            var i = v(n, e - 1), s = v(n, e + 1);
            return m(C, t) && !m(S, s) || m(S, t) && !m(C, i) ? "\\u" + w(b(t, 0), 16) : t
        };
    g && i({target: "JSON", stat: !0, arity: 3, forced: T || E}, {
        stringify: function (t, e, n) {
            var i = d(arguments), s = r(T ? P : g, null, i);
            return E && "string" == typeof s ? y(s, x, M) : s
        }
    })
}, function (t, e, n) {
    var i = n(3), s = n(35), r = n(4), o = n(27), a = n(25), l = i([].push);
    t.exports = function (t) {
        if (r(t)) return t;
        if (s(t)) {
            for (var e = t.length, n = [], i = 0; i < e; i++) {
                var c = t[i];
                "string" == typeof c ? l(n, c) : "number" != typeof c && "Number" != o(c) && "String" != o(c) || l(n, a(c))
            }
            var u = n.length, d = !0;
            return function (t, e) {
                if (d) return d = !1, e;
                if (s(this)) return e;
                for (var i = 0; i < u; i++) if (n[i] === t) return e
            }
        }
    }
}, function (t, e, n) {
    var i = n(0), s = n(39), r = n(5), o = n(92), a = n(22);
    i({
        target: "Object", stat: !0, forced: !s || r((function () {
            o.f(1)
        }))
    }, {
        getOwnPropertySymbols: function (t) {
            var e = o.f;
            return e ? e(a(t)) : []
        }
    })
}, function (t, e, n) {
    n(7)("asyncIterator")
}, function (t, e) {
}, function (t, e, n) {
    n(7)("hasInstance")
}, function (t, e, n) {
    n(7)("isConcatSpreadable")
}, function (t, e, n) {
    n(7)("match")
}, function (t, e, n) {
    n(7)("matchAll")
}, function (t, e, n) {
    n(7)("replace")
}, function (t, e, n) {
    n(7)("search")
}, function (t, e, n) {
    n(7)("species")
}, function (t, e, n) {
    n(7)("split")
}, function (t, e, n) {
    var i = n(7), s = n(125);
    i("toPrimitive"), s()
}, function (t, e, n) {
    var i = n(14), s = n(7), r = n(37);
    s("toStringTag"), r(i("Symbol"), "Symbol")
}, function (t, e, n) {
    n(7)("unscopables")
}, function (t, e, n) {
    var i = n(6);
    n(37)(i.JSON, "JSON", !0)
}, function (t, e) {
}, function (t, e) {
}, function (t, e, n) {
    var i = n(2), s = n(20).f, r = i("metadata"), o = Function.prototype;
    void 0 === o[r] && s(o, r, {value: null})
}, function (t, e, n) {
    n(7)("dispose")
}, function (t, e, n) {
    n(7)("metadata")
}, function (t, e, n) {
    n(7)("asyncDispose")
}, function (t, e, n) {
    n(0)({target: "Symbol", stat: !0}, {isRegisteredSymbol: n(128)})
}, function (t, e, n) {
    n(0)({target: "Symbol", stat: !0, forced: !0}, {isWellKnownSymbol: n(129)})
}, function (t, e, n) {
    n(7)("matcher")
}, function (t, e, n) {
    n(7)("observable")
}, function (t, e, n) {
    n(0)({target: "Symbol", stat: !0, name: "isRegisteredSymbol"}, {isRegistered: n(128)})
}, function (t, e, n) {
    n(0)({target: "Symbol", stat: !0, name: "isWellKnownSymbol", forced: !0}, {isWellKnown: n(129)})
}, function (t, e, n) {
    n(7)("metadataKey")
}, function (t, e, n) {
    n(7)("patternMatch")
}, function (t, e, n) {
    n(7)("replaceAll")
}, function (t, e, n) {
    t.exports = n(267)
}, function (t, e, n) {
    var i = n(268);
    t.exports = i
}, function (t, e, n) {
    var i = n(269);
    t.exports = i
}, function (t, e, n) {
    var i = n(270);
    n(36), t.exports = i
}, function (t, e, n) {
    n(42), n(74);
    var i = n(55);
    t.exports = i
}, function (t, e, n) {
    var i = n(3), s = n(82), r = n(25), o = n(49), a = i("".charAt), l = i("".charCodeAt), c = i("".slice),
        u = function (t) {
            return function (e, n) {
                var i, u, d = r(o(e)), h = s(n), p = d.length;
                return h < 0 || h >= p ? t ? "" : void 0 : (i = l(d, h)) < 55296 || i > 56319 || h + 1 === p || (u = l(d, h + 1)) < 56320 || u > 57343 ? t ? a(d, h) : i : t ? c(d, h, h + 2) : u - 56320 + (i - 55296 << 10) + 65536
            }
        };
    t.exports = {codeAt: u(!1), charAt: u(!0)}
}, function (t, e, n) {
    var i = n(273);
    t.exports = i
}, function (t, e, n) {
    var i = n(274);
    t.exports = i
}, function (t, e, n) {
    var i = n(275);
    t.exports = i
}, function (t, e, n) {
    n(74), n(276);
    var i = n(15);
    t.exports = i.Array.from
}, function (t, e, n) {
    var i = n(0), s = n(277);
    i({
        target: "Array", stat: !0, forced: !n(133)((function (t) {
            Array.from(t)
        }))
    }, {from: s})
}, function (t, e, n) {
    "use strict";
    var i = n(34), s = n(9), r = n(22), o = n(278), a = n(132), l = n(66), c = n(30), u = n(72), d = n(88), h = n(55),
        p = Array;
    t.exports = function (t) {
        var e = r(t), n = l(this), f = arguments.length, g = f > 1 ? arguments[1] : void 0, m = void 0 !== g;
        m && (g = i(g, f > 2 ? arguments[2] : void 0));
        var v, b, y, w, x, C, S = h(e), T = 0;
        if (!S || this === p && a(S)) for (v = c(e), b = n ? new this(v) : p(v); v > T; T++) C = m ? g(e[T], T) : e[T], u(b, T, C); else for (x = (w = d(e, S)).next, b = n ? new this : []; !(y = s(x, w)).done; T++) C = m ? o(w, g, [y.value, T], !0) : y.value, u(b, T, C);
        return b.length = T, b
    }
}, function (t, e, n) {
    var i = n(16), s = n(131);
    t.exports = function (t, e, n, r) {
        try {
            return r ? e(i(n)[0], n[1]) : e(n)
        } catch (e) {
            s(t, "throw", e)
        }
    }
}, function (t, e, n) {
    var i = n(134), s = n(130), r = n(122);
    t.exports = function (t, e) {
        var n;
        if (t) {
            if ("string" == typeof t) return r(t, e);
            var o = i(n = Object.prototype.toString.call(t)).call(n, 8, -1);
            return "Object" === o && t.constructor && (o = t.constructor.name), "Map" === o || "Set" === o ? s(t) : "Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? r(t, e) : void 0
        }
    }, t.exports.__esModule = !0, t.exports.default = t.exports
}, function (t, e, n) {
    var i = n(281);
    t.exports = i
}, function (t, e, n) {
    var i = n(135);
    t.exports = i
}, function (t, e, n) {
    var i = n(10), s = n(283), r = Array.prototype;
    t.exports = function (t) {
        var e = t.slice;
        return t === r || i(r, t) && e === r.slice ? s : e
    }
}, function (t, e, n) {
    n(284);
    var i = n(17);
    t.exports = i("Array").slice
}, function (t, e, n) {
    "use strict";
    var i = n(0), s = n(35), r = n(66), o = n(13), a = n(85), l = n(30), c = n(29), u = n(72), d = n(2), h = n(67),
        p = n(56), f = h("slice"), g = d("species"), m = Array, v = Math.max;
    i({target: "Array", proto: !0, forced: !f}, {
        slice: function (t, e) {
            var n, i, d, h = c(this), f = l(h), b = a(t, f), y = a(void 0 === e ? f : e, f);
            if (s(h) && (n = h.constructor, (r(n) && (n === m || s(n.prototype)) || o(n) && null === (n = n[g])) && (n = void 0), n === m || void 0 === n)) return p(h, b, y);
            for (i = new (void 0 === n ? m : n)(v(y - b, 0)), d = 0; b < y; b++, d++) b in h && u(i, d, h[b]);
            return i.length = d, i
        }
    })
}, function (t, e) {
    t.exports = function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }, t.exports.__esModule = !0, t.exports.default = t.exports
}, function (t, e, n) {
    var i = n(287);
    t.exports = i
}, function (t, e, n) {
    var i = n(10), s = n(288), r = Array.prototype;
    t.exports = function (t) {
        var e = t.some;
        return t === r || i(r, t) && e === r.some ? s : e
    }
}, function (t, e, n) {
    n(289);
    var i = n(17);
    t.exports = i("Array").some
}, function (t, e, n) {
    "use strict";
    var i = n(0), s = n(41).some;
    i({target: "Array", proto: !0, forced: !n(117)("some")}, {
        some: function (t) {
            return s(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    })
}, function (t, e, n) {
    var i = n(291);
    t.exports = i
}, function (t, e, n) {
    var i = n(10), s = n(292), r = Array.prototype;
    t.exports = function (t) {
        var e = t.concat;
        return t === r || i(r, t) && e === r.concat ? s : e
    }
}, function (t, e, n) {
    n(123);
    var i = n(17);
    t.exports = i("Array").concat
}, function (t, e, n) {
    "use strict";
    n.r(e);
    var i = n(1), s = n.n(i), r = n(78), o = n.n(r);
    o()((function () {
        var t;
        s()(t = o()(".radio")).call(t, "[type='radio']").on("change", (function () {
            var t = o()(this).closest(".radio__wrapper");
            s()(t).call(t, "[type='radio']:checked").length > 0 ? t.addClass("checked") : t.removeClass("checked")
        }))
    }))
}, function (t, e, n) {
    "use strict";
    n.r(e);
    var i = n(38), s = n.n(i), r = n(1), o = n.n(r), a = n(149), l = n.n(a), c = n(150), u = n.n(c);

    function d(t) {
        return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
    }

    function h() {
        $(".range__slider").each((function () {
            var t, e, n, i, r = $(this), a = $(this).parent(), c = $(this).children(".range__input").children("input"),
                h = [+a.attr("data-min"), +a.attr("data-max")], p = +a.attr("data-step"),
                f = [0 == +c.eq(0).attr("value") ? +s()(t = a.attr("data-min")).call(t, " ", "") : +s()(e = c.eq(0).attr("value")).call(e, " ", ""), 0 == +c.eq(1).attr("value") ? +s()(n = a.attr("data-max")).call(n, " ", "") : +s()(i = c.eq(1).attr("value")).call(i, " ", "")];

            function g(t) {
                var e = t.val().length < 1 ? 1.4 : t.val().length;
                t.css("width", e + .4 + "ch")
            }

            o()(a).call(a, ".range__title").length ? a.addClass("range--top") : a.addClass("range--bottom"), r.slider({
                orientation: "horizontal",
                range: !0,
                min: h[0],
                max: h[1],
                values: f,
                step: p,
                slide: function (t, e) {
                    c.each((function (t) {
                        $(this).val(d(l()(e)[t])), g($(this))
                    }))
                }
            }), a.attr("data-min", d(h[0])), a.attr("data-max", d(h[1])), c.each((function (t) {
                $(this).val(d(r.slider("values", t))), g($(this))
            })), c.on("input", (function () {
                var t, e, n = this, i = $(this).index(), o = +s()(t = $(this).siblings("input").val()).call(t, " ", ""),
                    a = +s()(e = $(this).val()).call(e, " ", ""), l = function (t) {
                        $(n).val(d(t)), g($(n)), r.slider("values", $(n).index(), t)
                    };
                console.log(a), l("" !== a ? a < h[0] ? h[0] : a > h[1] ? h[1] : "0" !== a[0] ? 0 === i && a > o || 1 === i && a < o ? o : a : u()(a).call(a, 1) : 0)
            }))
        }))
    }

    $((function () {
        h()
    }))
}, function (t, e, n) {
    t.exports = n(296)
}, function (t, e, n) {
    n(297);
    var i = n(301);
    t.exports = i
}, function (t, e, n) {
    n(136)
}, function (t, e, n) {
    var i = n(9), s = n(11), r = n(10), o = n(299), a = RegExp.prototype;
    t.exports = function (t) {
        var e = t.flags;
        return void 0 !== e || "flags" in a || s(t, "flags") || !r(a, t) ? e : i(o, t)
    }
}, function (t, e, n) {
    "use strict";
    var i = n(16);
    t.exports = function () {
        var t = i(this), e = "";
        return t.hasIndices && (e += "d"), t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.dotAll && (e += "s"), t.unicode && (e += "u"), t.unicodeSets && (e += "v"), t.sticky && (e += "y"), e
    }
}, function (t, e, n) {
    var i = n(3), s = n(22), r = Math.floor, o = i("".charAt), a = i("".replace), l = i("".slice),
        c = /\$([$&'`]|\d{1,2}|<[^>]*>)/g, u = /\$([$&'`]|\d{1,2})/g;
    t.exports = function (t, e, n, i, d, h) {
        var p = n + t.length, f = i.length, g = u;
        return void 0 !== d && (d = s(d), g = c), a(h, g, (function (s, a) {
            var c;
            switch (o(a, 0)) {
                case"$":
                    return "$";
                case"&":
                    return t;
                case"`":
                    return l(e, 0, n);
                case"'":
                    return l(e, p);
                case"<":
                    c = d[l(a, 1, -1)];
                    break;
                default:
                    var u = +a;
                    if (0 === u) return s;
                    if (u > f) {
                        var h = r(u / 10);
                        return 0 === h ? s : h <= f ? void 0 === i[h - 1] ? o(a, 1) : i[h - 1] + o(a, 1) : s
                    }
                    c = i[u - 1]
            }
            return void 0 === c ? "" : c
        }))
    }
}, function (t, e, n) {
    var i = n(302);
    t.exports = i
}, function (t, e, n) {
    var i = n(303);
    t.exports = i
}, function (t, e, n) {
    var i = n(10), s = n(304), r = String.prototype;
    t.exports = function (t) {
        var e = t.replaceAll;
        return "string" == typeof t || t === r || i(r, t) && e === r.replaceAll ? s : e
    }
}, function (t, e, n) {
    n(305), n(306), n(136);
    var i = n(17);
    t.exports = i("String").replaceAll
}, function (t, e) {
}, function (t, e) {
}, function (t, e, n) {
    n(36);
    var i = n(31), s = n(11), r = n(10), o = n(308), a = Array.prototype, l = {DOMTokenList: !0, NodeList: !0};
    t.exports = function (t) {
        var e = t.values;
        return t === a || r(a, t) && e === a.values || s(l, i(t)) ? o : e
    }
}, function (t, e, n) {
    var i = n(309);
    t.exports = i
}, function (t, e, n) {
    n(42), n(73);
    var i = n(17);
    t.exports = i("Array").values
}, function (t, e, n) {
    "use strict";
    n.r(e);
    var i = n(1), s = n.n(i);
    $((function () {
        function t() {
            if ($(this).closest(".project__item-share").is(".project__item-share")) {
                var t, e = s()(t = $(this).closest(".project__item")).call(t, ".project__item-link").attr("href");
                return window.location.origin + e
            }
            return window.location.href
        }

        $("html").hasClass("no-touch") ? ($(".share__btn").on("mouseenter", (function () {
            $(this).parent().addClass("show")
        })), $(".share__btn").on("mouseleave", (function () {
            $(this).parent().removeClass("show")
        })), $(".share__content").on("mouseenter", (function () {
            $(this).parent().addClass("show")
        })), $(".share__content").on("mouseleave", (function () {
            $(this).parent().removeClass("show")
        }))) : ($(".share__btn").on("click", (function () {
            $(this).parent().toggleClass("show")
        })), $(document).on("click", (function (t) {
            $(".share").is(t.target) || 0 !== $(".share").has(t.target).length || $(".share").removeClass("show")
        }))), $(".share__btn--telegram").on("click", (function () {
            window.open("https://telegram.me/share/url?url=".concat(t.call(this))), $(this).closest(".share").removeClass("show")
        })), $(".share__btn--vk").on("click", (function () {
            window.open("https://vkontakte.ru/share.php?url=".concat(t.call(this))), $(this).closest(".share").removeClass("show")
        }))
    }))
}, function (t, e) {
    $((function () {
        $(".sort-by__btn").on("click", (function () {
            $(this).toggleClass("active")
        })), $(document).on("click", (function (t) {
            $(".sort-by").is(t.target) || 0 !== $(".sort-by").has(t.target).length || $(".sort-by__btn").removeClass("active")
        }))
    }))
}, function (t, e) {
    $((function () {
        window.onscroll = function () {
            document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ? $(".up-btn").addClass("show") : $(".up-btn").removeClass("show")
        }, $(".up-btn").on("click", (function () {
            window.scrollTo({top: 0, behavior: "smooth"})
        }))
    }))
}, function (t, e) {
    var n = $(".ymap").children(".loader"), i = !1;

    function s() {
        var t = new ymaps.Map("map-yandex", {
            center: [56.326693927890794, 43.994430985774954],
            zoom: 18,
            controls: ["zoomControl", "fullscreenControl"]
        }), e = new ymaps.Placemark([56.326990486513814, 43.99435320171352], {}, {
            iconLayout: "default#image",
            iconImageHref: "/local/templates/kupno/img/map-marker.svg"
        });
        t.geoObjects.add(e), function (t) {
            return new ymaps.vow.Promise((function (e, n) {
                var i = function (t) {
                    for (var e in t) if (t.hasOwnProperty(e) && (t[e] instanceof ymaps.layer.tileContainer.CanvasContainer || t[e] instanceof ymaps.layer.tileContainer.DomContainer)) return t[e];
                    return null
                }(t), s = !0;
                i.tiles.each((function (t, e) {
                    t.isReady() || (s = !1)
                })), s ? e() : i.events.once("ready", (function () {
                    e()
                }))
            }))
        }(t.layers.get(0).get(0)).then((function () {
            n.removeClass("is-active")
        }))
    }

    var r = function () {
        $(".ymap").on("mouseenter", (function () {
            var t, e, r;
            i || (i = !0, n.addClass("is-active"), t = "https://api-maps.yandex.ru/2.1/?apikey=911b86a2-3271-4421-b669-5ef30956f7ef&lang=ru_RU&amp;loadByRequire=1", e = function () {
                ymaps.load(s)
            }, (r = document.createElement("script")).readyState ? r.onreadystatechange = function () {
                "loaded" != r.readyState && "complete" != r.readyState || (r.onreadystatechange = null, e())
            } : r.onload = function () {
                e()
            }, r.src = t, document.getElementsByTagName("head")[0].appendChild(r))
        }))
    };
    $((function () {
        r()
    }))
}, function (t, e) {
}, function (t, e, n) {
    var i = n(316);
    n(343), n(344), n(345), n(346), n(347), t.exports = i
}, function (t, e, n) {
    var i = n(317);
    t.exports = i
}, function (t, e, n) {
    var i = n(318);
    n(36), t.exports = i
}, function (t, e, n) {
    n(138), n(42), n(73), n(327), n(145), n(146), n(342), n(74);
    var i = n(15);
    t.exports = i.Promise
}, function (t, e, n) {
    "use strict";
    var i = n(0), s = n(10), r = n(70), o = n(71), a = n(320), l = n(44), c = n(23), u = n(28), d = n(322), h = n(323),
        p = n(57), f = n(326), g = n(2)("toStringTag"), m = Error, v = [].push, b = function (t, e) {
            var n, i = s(y, this);
            o ? n = o(m(), i ? r(this) : y) : (n = i ? this : l(y), c(n, g, "Error")), void 0 !== e && c(n, "message", f(e)), h(n, b, n.stack, 1), arguments.length > 2 && d(n, arguments[2]);
            var a = [];
            return p(t, v, {that: a}), c(n, "errors", a), n
        };
    o ? o(b, m) : a(b, m, {name: !0});
    var y = b.prototype = l(m.prototype, {constructor: u(1, b), message: u(1, ""), name: u(1, "AggregateError")});
    i({global: !0, constructor: !0, arity: 2}, {AggregateError: b})
}, function (t, e, n) {
    var i = n(11), s = n(321), r = n(62), o = n(20);
    t.exports = function (t, e, n) {
        for (var a = s(e), l = o.f, c = r.f, u = 0; u < a.length; u++) {
            var d = a[u];
            i(t, d) || n && i(n, d) || l(t, d, c(e, d))
        }
    }
}, function (t, e, n) {
    var i = n(14), s = n(3), r = n(91), o = n(92), a = n(16), l = s([].concat);
    t.exports = i("Reflect", "ownKeys") || function (t) {
        var e = r.f(a(t)), n = o.f;
        return n ? l(e, n(t)) : e
    }
}, function (t, e, n) {
    var i = n(13), s = n(23);
    t.exports = function (t, e) {
        i(e) && "cause" in e && s(t, "cause", e.cause)
    }
}, function (t, e, n) {
    var i = n(23), s = n(324), r = n(325), o = Error.captureStackTrace;
    t.exports = function (t, e, n, a) {
        r && (o ? o(t, e) : i(t, "stack", s(n, a)))
    }
}, function (t, e, n) {
    var i = n(3), s = Error, r = i("".replace), o = String(s("zxcasd").stack), a = /\n\s*at [^:]*:[^\n]*/,
        l = a.test(o);
    t.exports = function (t, e) {
        if (l && "string" == typeof t && !s.prepareStackTrace) for (; e--;) t = r(t, a, "");
        return t
    }
}, function (t, e, n) {
    var i = n(5), s = n(28);
    t.exports = !i((function () {
        var t = Error("a");
        return !("stack" in t) || (Object.defineProperty(t, "stack", s(1, 7)), 7 !== t.stack)
    }))
}, function (t, e, n) {
    var i = n(25);
    t.exports = function (t, e) {
        return void 0 === t ? arguments.length < 2 ? "" : e : i(t)
    }
}, function (t, e, n) {
    n(328), n(337), n(338), n(339), n(340), n(341)
}, function (t, e, n) {
    "use strict";
    var i, s, r, o = n(0), a = n(18), l = n(75), c = n(6), u = n(9), d = n(24), h = n(71), p = n(37), f = n(330),
        g = n(19), m = n(4), v = n(13), b = n(119), y = n(139), w = n(140).set, x = n(332), C = n(335), S = n(45),
        T = n(142), E = n(54), P = n(46), M = n(58), O = n(26), L = M.CONSTRUCTOR, _ = M.REJECTION_EVENT,
        k = M.SUBCLASSING, A = E.getterFor("Promise"), z = E.set, I = P && P.prototype, R = P, j = I, D = c.TypeError,
        $ = c.document, F = c.process, B = O.f, N = B, H = !!($ && $.createEvent && c.dispatchEvent), V = function (t) {
            var e;
            return !(!v(t) || !m(e = t.then)) && e
        }, G = function (t, e) {
            var n, i, s, r = e.value, o = 1 == e.state, a = o ? t.ok : t.fail, l = t.resolve, c = t.reject, d = t.domain;
            try {
                a ? (o || (2 === e.rejection && U(e), e.rejection = 1), !0 === a ? n = r : (d && d.enter(), n = a(r), d && (d.exit(), s = !0)), n === t.promise ? c(D("Promise-chain cycle")) : (i = V(n)) ? u(i, n, l, c) : l(n)) : c(r)
            } catch (t) {
                d && !s && d.exit(), c(t)
            }
        }, W = function (t, e) {
            t.notified || (t.notified = !0, x((function () {
                for (var n, i = t.reactions; n = i.get();) G(n, t);
                t.notified = !1, e && !t.rejection && X(t)
            })))
        }, q = function (t, e, n) {
            var i, s;
            H ? ((i = $.createEvent("Event")).promise = e, i.reason = n, i.initEvent(t, !1, !0), c.dispatchEvent(i)) : i = {
                promise: e,
                reason: n
            }, !_ && (s = c["on" + t]) ? s(i) : "unhandledrejection" === t && C("Unhandled promise rejection", n)
        }, X = function (t) {
            u(w, c, (function () {
                var e, n = t.facade, i = t.value;
                if (Y(t) && (e = S((function () {
                    l ? F.emit("unhandledRejection", i, n) : q("unhandledrejection", n, i)
                })), t.rejection = l || Y(t) ? 2 : 1, e.error)) throw e.value
            }))
        }, Y = function (t) {
            return 1 !== t.rejection && !t.parent
        }, U = function (t) {
            u(w, c, (function () {
                var e = t.facade;
                l ? F.emit("rejectionHandled", e) : q("rejectionhandled", e, t.value)
            }))
        }, Z = function (t, e, n) {
            return function (i) {
                t(e, i, n)
            }
        }, K = function (t, e, n) {
            t.done || (t.done = !0, n && (t = n), t.value = e, t.state = 2, W(t, !0))
        }, J = function (t, e, n) {
            if (!t.done) {
                t.done = !0, n && (t = n);
                try {
                    if (t.facade === e) throw D("Promise can't be resolved itself");
                    var i = V(e);
                    i ? x((function () {
                        var n = {done: !1};
                        try {
                            u(i, e, Z(J, n, t), Z(K, n, t))
                        } catch (e) {
                            K(n, e, t)
                        }
                    })) : (t.value = e, t.state = 1, W(t, !1))
                } catch (e) {
                    K({done: !1}, e, t)
                }
            }
        };
    if (L && (j = (R = function (t) {
        b(this, j), g(t), u(i, this);
        var e = A(this);
        try {
            t(Z(J, e), Z(K, e))
        } catch (t) {
            K(e, t)
        }
    }).prototype, (i = function (t) {
        z(this, {
            type: "Promise",
            done: !1,
            notified: !1,
            parent: !1,
            reactions: new T,
            rejection: !1,
            state: 0,
            value: void 0
        })
    }).prototype = d(j, "then", (function (t, e) {
        var n = A(this), i = B(y(this, R));
        return n.parent = !0, i.ok = !m(t) || t, i.fail = m(e) && e, i.domain = l ? F.domain : void 0, 0 == n.state ? n.reactions.add(i) : x((function () {
            G(i, n)
        })), i.promise
    })), s = function () {
        var t = new i, e = A(t);
        this.promise = t, this.resolve = Z(J, e), this.reject = Z(K, e)
    }, O.f = B = function (t) {
        return t === R || void 0 === t ? new s(t) : N(t)
    }, !a && m(P) && I !== Object.prototype)) {
        r = I.then, k || d(I, "then", (function (t, e) {
            var n = this;
            return new R((function (t, e) {
                u(r, n, t, e)
            })).then(t, e)
        }), {unsafe: !0});
        try {
            delete I.constructor
        } catch (t) {
        }
        h && h(I, j)
    }
    o({global: !0, constructor: !0, wrap: !0, forced: L}, {Promise: R}), p(R, "Promise", !1, !0), f("Promise")
}, function (t, e) {
    var n, i, s = t.exports = {};

    function r() {
        throw new Error("setTimeout has not been defined")
    }

    function o() {
        throw new Error("clearTimeout has not been defined")
    }

    function a(t) {
        if (n === setTimeout) return setTimeout(t, 0);
        if ((n === r || !n) && setTimeout) return n = setTimeout, setTimeout(t, 0);
        try {
            return n(t, 0)
        } catch (e) {
            try {
                return n.call(null, t, 0)
            } catch (e) {
                return n.call(this, t, 0)
            }
        }
    }

    !function () {
        try {
            n = "function" == typeof setTimeout ? setTimeout : r
        } catch (t) {
            n = r
        }
        try {
            i = "function" == typeof clearTimeout ? clearTimeout : o
        } catch (t) {
            i = o
        }
    }();
    var l, c = [], u = !1, d = -1;

    function h() {
        u && l && (u = !1, l.length ? c = l.concat(c) : d = -1, c.length && p())
    }

    function p() {
        if (!u) {
            var t = a(h);
            u = !0;
            for (var e = c.length; e;) {
                for (l = c, c = []; ++d < e;) l && l[d].run();
                d = -1, e = c.length
            }
            l = null, u = !1, function (t) {
                if (i === clearTimeout) return clearTimeout(t);
                if ((i === o || !i) && clearTimeout) return i = clearTimeout, clearTimeout(t);
                try {
                    i(t)
                } catch (e) {
                    try {
                        return i.call(null, t)
                    } catch (e) {
                        return i.call(this, t)
                    }
                }
            }(t)
        }
    }

    function f(t, e) {
        this.fun = t, this.array = e
    }

    function g() {
    }

    s.nextTick = function (t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        c.push(new f(t, e)), 1 !== c.length || u || a(p)
    }, f.prototype.run = function () {
        this.fun.apply(null, this.array)
    }, s.title = "browser", s.browser = !0, s.env = {}, s.argv = [], s.version = "", s.versions = {}, s.on = g, s.addListener = g, s.once = g, s.off = g, s.removeListener = g, s.removeAllListeners = g, s.emit = g, s.prependListener = g, s.prependOnceListener = g, s.listeners = function (t) {
        return []
    }, s.binding = function (t) {
        throw new Error("process.binding is not supported")
    }, s.cwd = function () {
        return "/"
    }, s.chdir = function (t) {
        throw new Error("process.chdir is not supported")
    }, s.umask = function () {
        return 0
    }
}, function (t, e, n) {
    "use strict";
    var i = n(14), s = n(87), r = n(2), o = n(12), a = r("species");
    t.exports = function (t) {
        var e = i(t);
        o && e && !e[a] && s(e, a, {
            configurable: !0, get: function () {
                return this
            }
        })
    }
}, function (t, e, n) {
    var i = n(66), s = n(53), r = TypeError;
    t.exports = function (t) {
        if (i(t)) return t;
        throw r(s(t) + " is not a constructor")
    }
}, function (t, e, n) {
    var i, s, r, o, a, l = n(6), c = n(34), u = n(62).f, d = n(140).set, h = n(142), p = n(141), f = n(333), g = n(334),
        m = n(75), v = l.MutationObserver || l.WebKitMutationObserver, b = l.document, y = l.process, w = l.Promise,
        x = u(l, "queueMicrotask"), C = x && x.value;
    if (!C) {
        var S = new h, T = function () {
            var t, e;
            for (m && (t = y.domain) && t.exit(); e = S.get();) try {
                e()
            } catch (t) {
                throw S.head && i(), t
            }
            t && t.enter()
        };
        p || m || g || !v || !b ? !f && w && w.resolve ? ((o = w.resolve(void 0)).constructor = w, a = c(o.then, o), i = function () {
            a(T)
        }) : m ? i = function () {
            y.nextTick(T)
        } : (d = c(d, l), i = function () {
            d(T)
        }) : (s = !0, r = b.createTextNode(""), new v(T).observe(r, {characterData: !0}), i = function () {
            r.data = s = !s
        }), C = function (t) {
            S.head || i(), S.add(t)
        }
    }
    t.exports = C
}, function (t, e, n) {
    var i = n(52);
    t.exports = /ipad|iphone|ipod/i.test(i) && "undefined" != typeof Pebble
}, function (t, e, n) {
    var i = n(52);
    t.exports = /web0s(?!.*chrome)/i.test(i)
}, function (t, e) {
    t.exports = function (t, e) {
        try {
            1 == arguments.length ? console.error(t) : console.error(t, e)
        } catch (t) {
        }
    }
}, function (t, e, n) {
    var i = n(143), s = n(75);
    t.exports = !i && !s && "object" == typeof window && "object" == typeof document
}, function (t, e, n) {
    "use strict";
    var i = n(0), s = n(9), r = n(19), o = n(26), a = n(45), l = n(57);
    i({target: "Promise", stat: !0, forced: n(76)}, {
        all: function (t) {
            var e = this, n = o.f(e), i = n.resolve, c = n.reject, u = a((function () {
                var n = r(e.resolve), o = [], a = 0, u = 1;
                l(t, (function (t) {
                    var r = a++, l = !1;
                    u++, s(n, e, t).then((function (t) {
                        l || (l = !0, o[r] = t, --u || i(o))
                    }), c)
                })), --u || i(o)
            }));
            return u.error && c(u.value), n.promise
        }
    })
}, function (t, e, n) {
    "use strict";
    var i = n(0), s = n(18), r = n(58).CONSTRUCTOR, o = n(46), a = n(14), l = n(4), c = n(24), u = o && o.prototype;
    if (i({target: "Promise", proto: !0, forced: r, real: !0}, {
        catch: function (t) {
            return this.then(void 0, t)
        }
    }), !s && l(o)) {
        var d = a("Promise").prototype.catch;
        u.catch !== d && c(u, "catch", d, {unsafe: !0})
    }
}, function (t, e, n) {
    "use strict";
    var i = n(0), s = n(9), r = n(19), o = n(26), a = n(45), l = n(57);
    i({target: "Promise", stat: !0, forced: n(76)}, {
        race: function (t) {
            var e = this, n = o.f(e), i = n.reject, c = a((function () {
                var o = r(e.resolve);
                l(t, (function (t) {
                    s(o, e, t).then(n.resolve, i)
                }))
            }));
            return c.error && i(c.value), n.promise
        }
    })
}, function (t, e, n) {
    "use strict";
    var i = n(0), s = n(9), r = n(26);
    i({target: "Promise", stat: !0, forced: n(58).CONSTRUCTOR}, {
        reject: function (t) {
            var e = r.f(this);
            return s(e.reject, void 0, t), e.promise
        }
    })
}, function (t, e, n) {
    "use strict";
    var i = n(0), s = n(14), r = n(18), o = n(46), a = n(58).CONSTRUCTOR, l = n(144), c = s("Promise"), u = r && !a;
    i({target: "Promise", stat: !0, forced: r || a}, {
        resolve: function (t) {
            return l(u && this === c ? o : this, t)
        }
    })
}, function (t, e, n) {
    "use strict";
    var i = n(0), s = n(18), r = n(46), o = n(5), a = n(14), l = n(4), c = n(139), u = n(144), d = n(24),
        h = r && r.prototype;
    if (i({
        target: "Promise", proto: !0, real: !0, forced: !!r && o((function () {
            h.finally.call({
                then: function () {
                }
            }, (function () {
            }))
        }))
    }, {
        finally: function (t) {
            var e = c(this, a("Promise")), n = l(t);
            return this.then(n ? function (n) {
                return u(e, t()).then((function () {
                    return n
                }))
            } : t, n ? function (n) {
                return u(e, t()).then((function () {
                    throw n
                }))
            } : t)
        }
    }), !s && l(r)) {
        var p = a("Promise").prototype.finally;
        h.finally !== p && d(h, "finally", p, {unsafe: !0})
    }
}, function (t, e, n) {
    "use strict";
    var i = n(0), s = n(26);
    i({target: "Promise", stat: !0, forced: !0}, {
        withResolvers: function () {
            var t = s.f(this);
            return {promise: t.promise, resolve: t.resolve, reject: t.reject}
        }
    })
}, function (t, e, n) {
    n(138)
}, function (t, e, n) {
    n(145)
}, function (t, e, n) {
    "use strict";
    var i = n(0), s = n(26), r = n(45);
    i({target: "Promise", stat: !0, forced: !0}, {
        try: function (t) {
            var e = s.f(this), n = r(t);
            return (n.error ? e.reject : e.resolve)(n.value), e.promise
        }
    })
}, function (t, e, n) {
    n(146)
}, function (t, e, n) {
    var i = n(349).default, s = n(355), r = n(90), o = n(361), a = n(367), l = n(373), c = n(376), u = n(384),
        d = n(137), h = n(390), p = n(134);

    function f() {
        "use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
        t.exports = f = function () {
            return e
        }, t.exports.__esModule = !0, t.exports.default = t.exports;
        var e = {}, n = Object.prototype, g = n.hasOwnProperty, m = s || function (t, e, n) {
                t[e] = n.value
            }, v = "function" == typeof r ? r : {}, b = v.iterator || "@@iterator",
            y = v.asyncIterator || "@@asyncIterator", w = v.toStringTag || "@@toStringTag";

        function x(t, e, n) {
            return s(t, e, {value: n, enumerable: !0, configurable: !0, writable: !0}), t[e]
        }

        try {
            x({}, "")
        } catch (t) {
            x = function (t, e, n) {
                return t[e] = n
            }
        }

        function C(t, e, n, i) {
            var s = e && e.prototype instanceof E ? e : E, r = o(s.prototype), a = new D(i || []);
            return m(r, "_invoke", {value: z(t, n, a)}), r
        }

        function S(t, e, n) {
            try {
                return {type: "normal", arg: t.call(e, n)}
            } catch (t) {
                return {type: "throw", arg: t}
            }
        }

        e.wrap = C;
        var T = {};

        function E() {
        }

        function P() {
        }

        function M() {
        }

        var O = {};
        x(O, b, (function () {
            return this
        }));
        var L = a && a(a($([])));
        L && L !== n && g.call(L, b) && (O = L);
        var _ = M.prototype = E.prototype = o(O);

        function k(t) {
            var e;
            l(e = ["next", "throw", "return"]).call(e, (function (e) {
                x(t, e, (function (t) {
                    return this._invoke(e, t)
                }))
            }))
        }

        function A(t, e) {
            var n;
            m(this, "_invoke", {
                value: function (s, r) {
                    function o() {
                        return new e((function (n, o) {
                            !function n(s, r, o, a) {
                                var l = S(t[s], t, r);
                                if ("throw" !== l.type) {
                                    var c = l.arg, u = c.value;
                                    return u && "object" == i(u) && g.call(u, "__await") ? e.resolve(u.__await).then((function (t) {
                                        n("next", t, o, a)
                                    }), (function (t) {
                                        n("throw", t, o, a)
                                    })) : e.resolve(u).then((function (t) {
                                        c.value = t, o(c)
                                    }), (function (t) {
                                        return n("throw", t, o, a)
                                    }))
                                }
                                a(l.arg)
                            }(s, r, n, o)
                        }))
                    }

                    return n = n ? n.then(o, o) : o()
                }
            })
        }

        function z(t, e, n) {
            var i = "suspendedStart";
            return function (s, r) {
                if ("executing" === i) throw new Error("Generator is already running");
                if ("completed" === i) {
                    if ("throw" === s) throw r;
                    return F()
                }
                for (n.method = s, n.arg = r; ;) {
                    var o = n.delegate;
                    if (o) {
                        var a = I(o, n);
                        if (a) {
                            if (a === T) continue;
                            return a
                        }
                    }
                    if ("next" === n.method) n.sent = n._sent = n.arg; else if ("throw" === n.method) {
                        if ("suspendedStart" === i) throw i = "completed", n.arg;
                        n.dispatchException(n.arg)
                    } else "return" === n.method && n.abrupt("return", n.arg);
                    i = "executing";
                    var l = S(t, e, n);
                    if ("normal" === l.type) {
                        if (i = n.done ? "completed" : "suspendedYield", l.arg === T) continue;
                        return {value: l.arg, done: n.done}
                    }
                    "throw" === l.type && (i = "completed", n.method = "throw", n.arg = l.arg)
                }
            }
        }

        function I(t, e) {
            var n = e.method, i = t.iterator[n];
            if (void 0 === i) return e.delegate = null, "throw" === n && t.iterator.return && (e.method = "return", e.arg = void 0, I(t, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), T;
            var s = S(i, t.iterator, e.arg);
            if ("throw" === s.type) return e.method = "throw", e.arg = s.arg, e.delegate = null, T;
            var r = s.arg;
            return r ? r.done ? (e[t.resultName] = r.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, T) : r : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, T)
        }

        function R(t) {
            var e, n = {tryLoc: t[0]};
            1 in t && (n.catchLoc = t[1]), 2 in t && (n.finallyLoc = t[2], n.afterLoc = t[3]), c(e = this.tryEntries).call(e, n)
        }

        function j(t) {
            var e = t.completion || {};
            e.type = "normal", delete e.arg, t.completion = e
        }

        function D(t) {
            this.tryEntries = [{tryLoc: "root"}], l(t).call(t, R, this), this.reset(!0)
        }

        function $(t) {
            if (t) {
                var e = t[b];
                if (e) return e.call(t);
                if ("function" == typeof t.next) return t;
                if (!isNaN(t.length)) {
                    var n = -1, i = function e() {
                        for (; ++n < t.length;) if (g.call(t, n)) return e.value = t[n], e.done = !1, e;
                        return e.value = void 0, e.done = !0, e
                    };
                    return i.next = i
                }
            }
            return {next: F}
        }

        function F() {
            return {value: void 0, done: !0}
        }

        return P.prototype = M, m(_, "constructor", {value: M, configurable: !0}), m(M, "constructor", {
            value: P,
            configurable: !0
        }), P.displayName = x(M, w, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
            var e = "function" == typeof t && t.constructor;
            return !!e && (e === P || "GeneratorFunction" === (e.displayName || e.name))
        }, e.mark = function (t) {
            return u ? u(t, M) : (t.__proto__ = M, x(t, w, "GeneratorFunction")), t.prototype = o(_), t
        }, e.awrap = function (t) {
            return {__await: t}
        }, k(A.prototype), x(A.prototype, y, (function () {
            return this
        })), e.AsyncIterator = A, e.async = function (t, n, i, s, r) {
            void 0 === r && (r = d);
            var o = new A(C(t, n, i, s), r);
            return e.isGeneratorFunction(n) ? o : o.next().then((function (t) {
                return t.done ? t.value : o.next()
            }))
        }, k(_), x(_, w, "Generator"), x(_, b, (function () {
            return this
        })), x(_, "toString", (function () {
            return "[object Generator]"
        })), e.keys = function (t) {
            var e = Object(t), n = [];
            for (var i in e) c(n).call(n, i);
            return h(n).call(n), function t() {
                for (; n.length;) {
                    var i = n.pop();
                    if (i in e) return t.value = i, t.done = !1, t
                }
                return t.done = !0, t
            }
        }, e.values = $, D.prototype = {
            constructor: D, reset: function (t) {
                var e;
                if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, l(e = this.tryEntries).call(e, j), !t) for (var n in this) "t" === n.charAt(0) && g.call(this, n) && !isNaN(+p(n).call(n, 1)) && (this[n] = void 0)
            }, stop: function () {
                this.done = !0;
                var t = this.tryEntries[0].completion;
                if ("throw" === t.type) throw t.arg;
                return this.rval
            }, dispatchException: function (t) {
                if (this.done) throw t;
                var e = this;

                function n(n, i) {
                    return r.type = "throw", r.arg = t, e.next = n, i && (e.method = "next", e.arg = void 0), !!i
                }

                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                    var s = this.tryEntries[i], r = s.completion;
                    if ("root" === s.tryLoc) return n("end");
                    if (s.tryLoc <= this.prev) {
                        var o = g.call(s, "catchLoc"), a = g.call(s, "finallyLoc");
                        if (o && a) {
                            if (this.prev < s.catchLoc) return n(s.catchLoc, !0);
                            if (this.prev < s.finallyLoc) return n(s.finallyLoc)
                        } else if (o) {
                            if (this.prev < s.catchLoc) return n(s.catchLoc, !0)
                        } else {
                            if (!a) throw new Error("try statement without catch or finally");
                            if (this.prev < s.finallyLoc) return n(s.finallyLoc)
                        }
                    }
                }
            }, abrupt: function (t, e) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                    var i = this.tryEntries[n];
                    if (i.tryLoc <= this.prev && g.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                        var s = i;
                        break
                    }
                }
                s && ("break" === t || "continue" === t) && s.tryLoc <= e && e <= s.finallyLoc && (s = null);
                var r = s ? s.completion : {};
                return r.type = t, r.arg = e, s ? (this.method = "next", this.next = s.finallyLoc, T) : this.complete(r)
            }, complete: function (t, e) {
                if ("throw" === t.type) throw t.arg;
                return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), T
            }, finish: function (t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                    var n = this.tryEntries[e];
                    if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), j(n), T
                }
            }, catch: function (t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                    var n = this.tryEntries[e];
                    if (n.tryLoc === t) {
                        var i = n.completion;
                        if ("throw" === i.type) {
                            var s = i.arg;
                            j(n)
                        }
                        return s
                    }
                }
                throw new Error("illegal catch attempt")
            }, delegateYield: function (t, e, n) {
                return this.delegate = {
                    iterator: $(t),
                    resultName: e,
                    nextLoc: n
                }, "next" === this.method && (this.arg = void 0), T
            }
        }, e
    }

    t.exports = f, t.exports.__esModule = !0, t.exports.default = t.exports
}, function (t, e, n) {
    var i = n(90), s = n(350);

    function r(e) {
        return t.exports = r = "function" == typeof i && "symbol" == typeof s ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof i && t.constructor === i && t !== i.prototype ? "symbol" : typeof t
        }, t.exports.__esModule = !0, t.exports.default = t.exports, r(e)
    }

    t.exports = r, t.exports.__esModule = !0, t.exports.default = t.exports
}, function (t, e, n) {
    t.exports = n(351)
}, function (t, e, n) {
    var i = n(352);
    t.exports = i
}, function (t, e, n) {
    var i = n(353);
    t.exports = i
}, function (t, e, n) {
    var i = n(354);
    n(36), t.exports = i
}, function (t, e, n) {
    n(42), n(73), n(74), n(127);
    var i = n(93);
    t.exports = i.f("iterator")
}, function (t, e, n) {
    t.exports = n(356)
}, function (t, e, n) {
    var i = n(357);
    t.exports = i
}, function (t, e, n) {
    var i = n(358);
    t.exports = i
}, function (t, e, n) {
    var i = n(359);
    t.exports = i
}, function (t, e, n) {
    n(360);
    var i = n(15).Object, s = t.exports = function (t, e, n) {
        return i.defineProperty(t, e, n)
    };
    i.defineProperty.sham && (s.sham = !0)
}, function (t, e, n) {
    var i = n(0), s = n(12), r = n(20).f;
    i({target: "Object", stat: !0, forced: Object.defineProperty !== r, sham: !s}, {defineProperty: r})
}, function (t, e, n) {
    t.exports = n(362)
}, function (t, e, n) {
    var i = n(363);
    t.exports = i
}, function (t, e, n) {
    var i = n(364);
    t.exports = i
}, function (t, e, n) {
    var i = n(365);
    t.exports = i
}, function (t, e, n) {
    n(366);
    var i = n(15).Object;
    t.exports = function (t, e) {
        return i.create(t, e)
    }
}, function (t, e, n) {
    n(0)({target: "Object", stat: !0, sham: !n(12)}, {create: n(44)})
}, function (t, e, n) {
    t.exports = n(368)
}, function (t, e, n) {
    var i = n(369);
    t.exports = i
}, function (t, e, n) {
    var i = n(370);
    t.exports = i
}, function (t, e, n) {
    var i = n(371);
    t.exports = i
}, function (t, e, n) {
    n(372);
    var i = n(15);
    t.exports = i.Object.getPrototypeOf
}, function (t, e, n) {
    var i = n(0), s = n(5), r = n(22), o = n(70), a = n(115);
    i({
        target: "Object", stat: !0, forced: s((function () {
            o(1)
        })), sham: !a
    }, {
        getPrototypeOf: function (t) {
            return o(r(t))
        }
    })
}, function (t, e, n) {
    t.exports = n(374)
}, function (t, e, n) {
    var i = n(375);
    t.exports = i
}, function (t, e, n) {
    var i = n(106);
    t.exports = i
}, function (t, e, n) {
    t.exports = n(377)
}, function (t, e, n) {
    var i = n(378);
    t.exports = i
}, function (t, e, n) {
    var i = n(379);
    t.exports = i
}, function (t, e, n) {
    var i = n(380);
    t.exports = i
}, function (t, e, n) {
    var i = n(10), s = n(381), r = Array.prototype;
    t.exports = function (t) {
        var e = t.push;
        return t === r || i(r, t) && e === r.push ? s : e
    }
}, function (t, e, n) {
    n(382);
    var i = n(17);
    t.exports = i("Array").push
}, function (t, e, n) {
    "use strict";
    var i = n(0), s = n(22), r = n(30), o = n(383), a = n(124);
    i({
        target: "Array", proto: !0, arity: 1, forced: n(5)((function () {
            return 4294967297 !== [].push.call({length: 4294967296}, 1)
        })) || !function () {
            try {
                Object.defineProperty([], "length", {writable: !1}).push()
            } catch (t) {
                return t instanceof TypeError
            }
        }()
    }, {
        push: function (t) {
            var e = s(this), n = r(e), i = arguments.length;
            a(n + i);
            for (var l = 0; l < i; l++) e[n] = arguments[l], n++;
            return o(e, n), n
        }
    })
}, function (t, e, n) {
    "use strict";
    var i = n(12), s = n(35), r = TypeError, o = Object.getOwnPropertyDescriptor, a = i && !function () {
        if (void 0 !== this) return !0;
        try {
            Object.defineProperty([], "length", {writable: !1}).length = 1
        } catch (t) {
            return t instanceof TypeError
        }
    }();
    t.exports = a ? function (t, e) {
        if (s(t) && !o(t, "length").writable) throw r("Cannot set read only .length");
        return t.length = e
    } : function (t, e) {
        return t.length = e
    }
}, function (t, e, n) {
    t.exports = n(385)
}, function (t, e, n) {
    var i = n(386);
    t.exports = i
}, function (t, e, n) {
    var i = n(387);
    t.exports = i
}, function (t, e, n) {
    var i = n(388);
    t.exports = i
}, function (t, e, n) {
    n(389);
    var i = n(15);
    t.exports = i.Object.setPrototypeOf
}, function (t, e, n) {
    n(0)({target: "Object", stat: !0}, {setPrototypeOf: n(71)})
}, function (t, e, n) {
    t.exports = n(391)
}, function (t, e, n) {
    var i = n(392);
    t.exports = i
}, function (t, e, n) {
    var i = n(393);
    t.exports = i
}, function (t, e, n) {
    var i = n(394);
    t.exports = i
}, function (t, e, n) {
    var i = n(10), s = n(395), r = Array.prototype;
    t.exports = function (t) {
        var e = t.reverse;
        return t === r || i(r, t) && e === r.reverse ? s : e
    }
}, function (t, e, n) {
    n(396);
    var i = n(17);
    t.exports = i("Array").reverse
}, function (t, e, n) {
    "use strict";
    var i = n(0), s = n(3), r = n(35), o = s([].reverse), a = [1, 2];
    i({target: "Array", proto: !0, forced: String(a) === String(a.reverse())}, {
        reverse: function () {
            return r(this) && (this.length = this.length), o(this)
        }
    })
}, function (t, e, n) {
    var i = n(398);
    t.exports = i
}, function (t, e, n) {
    var i = n(10), s = n(399), r = Function.prototype;
    t.exports = function (t) {
        var e = t.bind;
        return t === r || i(r, t) && e === r.bind ? s : e
    }
}, function (t, e, n) {
    n(400);
    var i = n(17);
    t.exports = i("Function").bind
}, function (t, e, n) {
    var i = n(0), s = n(401);
    i({target: "Function", proto: !0, forced: Function.bind !== s}, {bind: s})
}, function (t, e, n) {
    "use strict";
    var i = n(3), s = n(19), r = n(13), o = n(11), a = n(56), l = n(48), c = Function, u = i([].concat), d = i([].join),
        h = {}, p = function (t, e, n) {
            if (!o(h, e)) {
                for (var i = [], s = 0; s < e; s++) i[s] = "a[" + s + "]";
                h[e] = c("C,a", "return new C(" + d(i, ",") + ")")
            }
            return h[e](t, n)
        };
    t.exports = l ? c.bind : function (t) {
        var e = s(this), n = e.prototype, i = a(arguments, 1), o = function () {
            var n = u(i, a(arguments));
            return this instanceof o ? p(e, n.length, n) : e.apply(t, n)
        };
        return r(n) && (o.prototype = n), o
    }
}, function (t, e, n) {
    "use strict";
    n.r(e);
    var i = n(151), s = n.n(i), r = n(95), o = n.n(r), a = n(152), l = n.n(a), c = n(1), u = n.n(c), d = n(21),
        h = n.n(d);

    function p(t) {
        return null !== t && "object" == typeof t && "constructor" in t && t.constructor === Object
    }

    function f(t = {}, e = {}) {
        Object.keys(e).forEach(n => {
            void 0 === t[n] ? t[n] = e[n] : p(e[n]) && p(t[n]) && Object.keys(e[n]).length > 0 && f(t[n], e[n])
        })
    }

    const g = {
        body: {},
        addEventListener() {
        },
        removeEventListener() {
        },
        activeElement: {
            blur() {
            }, nodeName: ""
        },
        querySelector: () => null,
        querySelectorAll: () => [],
        getElementById: () => null,
        createEvent: () => ({
            initEvent() {
            }
        }),
        createElement: () => ({
            children: [], childNodes: [], style: {}, setAttribute() {
            }, getElementsByTagName: () => []
        }),
        createElementNS: () => ({}),
        importNode: () => null,
        location: {hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: ""}
    };

    function m() {
        const t = "undefined" != typeof document ? document : {};
        return f(t, g), t
    }

    const v = {
        document: g,
        navigator: {userAgent: ""},
        location: {hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: ""},
        history: {
            replaceState() {
            }, pushState() {
            }, go() {
            }, back() {
            }
        },
        CustomEvent: function () {
            return this
        },
        addEventListener() {
        },
        removeEventListener() {
        },
        getComputedStyle: () => ({getPropertyValue: () => ""}),
        Image() {
        },
        Date() {
        },
        screen: {},
        setTimeout() {
        },
        clearTimeout() {
        },
        matchMedia: () => ({}),
        requestAnimationFrame: t => "undefined" == typeof setTimeout ? (t(), null) : setTimeout(t, 0),
        cancelAnimationFrame(t) {
            "undefined" != typeof setTimeout && clearTimeout(t)
        }
    };

    function b() {
        const t = "undefined" != typeof window ? window : {};
        return f(t, v), t
    }

    class y extends Array {
        constructor(t) {
            "number" == typeof t ? super(t) : (super(...t || []), function (t) {
                const e = t.__proto__;
                Object.defineProperty(t, "__proto__", {
                    get: () => e, set(t) {
                        e.__proto__ = t
                    }
                })
            }(this))
        }
    }

    function w(t = []) {
        const e = [];
        return t.forEach(t => {
            Array.isArray(t) ? e.push(...w(t)) : e.push(t)
        }), e
    }

    function x(t, e) {
        return Array.prototype.filter.call(t, e)
    }

    function C(t, e) {
        const n = b(), i = m();
        let s = [];
        if (!e && t instanceof y) return t;
        if (!t) return new y(s);
        if ("string" == typeof t) {
            const n = t.trim();
            if (n.indexOf("<") >= 0 && n.indexOf(">") >= 0) {
                let t = "div";
                0 === n.indexOf("<li") && (t = "ul"), 0 === n.indexOf("<tr") && (t = "tbody"), 0 !== n.indexOf("<td") && 0 !== n.indexOf("<th") || (t = "tr"), 0 === n.indexOf("<tbody") && (t = "table"), 0 === n.indexOf("<option") && (t = "select");
                const e = i.createElement(t);
                e.innerHTML = n;
                for (let t = 0; t < e.childNodes.length; t += 1) s.push(e.childNodes[t])
            } else s = function (t, e) {
                if ("string" != typeof t) return [t];
                const n = [], i = e.querySelectorAll(t);
                for (let t = 0; t < i.length; t += 1) n.push(i[t]);
                return n
            }(t.trim(), e || i)
        } else if (t.nodeType || t === n || t === i) s.push(t); else if (Array.isArray(t)) {
            if (t instanceof y) return t;
            s = t
        }
        return new y(function (t) {
            const e = [];
            for (let n = 0; n < t.length; n += 1) -1 === e.indexOf(t[n]) && e.push(t[n]);
            return e
        }(s))
    }

    C.fn = y.prototype;
    const S = "resize scroll".split(" ");

    function T(t) {
        return function (...e) {
            if (void 0 === e[0]) {
                for (let e = 0; e < this.length; e += 1) S.indexOf(t) < 0 && (t in this[e] ? this[e][t]() : C(this[e]).trigger(t));
                return this
            }
            return this.on(t, ...e)
        }
    }

    T("click"), T("blur"), T("focus"), T("focusin"), T("focusout"), T("keyup"), T("keydown"), T("keypress"), T("submit"), T("change"), T("mousedown"), T("mousemove"), T("mouseup"), T("mouseenter"), T("mouseleave"), T("mouseout"), T("mouseover"), T("touchstart"), T("touchend"), T("touchmove"), T("resize"), T("scroll");
    const E = {
        addClass: function (...t) {
            const e = w(t.map(t => t.split(" ")));
            return this.forEach(t => {
                t.classList.add(...e)
            }), this
        }, removeClass: function (...t) {
            const e = w(t.map(t => t.split(" ")));
            return this.forEach(t => {
                t.classList.remove(...e)
            }), this
        }, hasClass: function (...t) {
            const e = w(t.map(t => t.split(" ")));
            return x(this, t => e.filter(e => t.classList.contains(e)).length > 0).length > 0
        }, toggleClass: function (...t) {
            const e = w(t.map(t => t.split(" ")));
            this.forEach(t => {
                e.forEach(e => {
                    t.classList.toggle(e)
                })
            })
        }, attr: function (t, e) {
            if (1 === arguments.length && "string" == typeof t) return this[0] ? this[0].getAttribute(t) : void 0;
            for (let n = 0; n < this.length; n += 1) if (2 === arguments.length) this[n].setAttribute(t, e); else for (const e in t) this[n][e] = t[e], this[n].setAttribute(e, t[e]);
            return this
        }, removeAttr: function (t) {
            for (let e = 0; e < this.length; e += 1) this[e].removeAttribute(t);
            return this
        }, transform: function (t) {
            for (let e = 0; e < this.length; e += 1) this[e].style.transform = t;
            return this
        }, transition: function (t) {
            for (let e = 0; e < this.length; e += 1) this[e].style.transitionDuration = "string" != typeof t ? t + "ms" : t;
            return this
        }, on: function (...t) {
            let [e, n, i, s] = t;

            function r(t) {
                const e = t.target;
                if (!e) return;
                const s = t.target.dom7EventData || [];
                if (s.indexOf(t) < 0 && s.unshift(t), C(e).is(n)) i.apply(e, s); else {
                    const t = C(e).parents();
                    for (let e = 0; e < t.length; e += 1) C(t[e]).is(n) && i.apply(t[e], s)
                }
            }

            function o(t) {
                const e = t && t.target && t.target.dom7EventData || [];
                e.indexOf(t) < 0 && e.unshift(t), i.apply(this, e)
            }

            "function" == typeof t[1] && ([e, i, s] = t, n = void 0), s || (s = !1);
            const a = e.split(" ");
            let l;
            for (let t = 0; t < this.length; t += 1) {
                const e = this[t];
                if (n) for (l = 0; l < a.length; l += 1) {
                    const t = a[l];
                    e.dom7LiveListeners || (e.dom7LiveListeners = {}), e.dom7LiveListeners[t] || (e.dom7LiveListeners[t] = []), e.dom7LiveListeners[t].push({
                        listener: i,
                        proxyListener: r
                    }), e.addEventListener(t, r, s)
                } else for (l = 0; l < a.length; l += 1) {
                    const t = a[l];
                    e.dom7Listeners || (e.dom7Listeners = {}), e.dom7Listeners[t] || (e.dom7Listeners[t] = []), e.dom7Listeners[t].push({
                        listener: i,
                        proxyListener: o
                    }), e.addEventListener(t, o, s)
                }
            }
            return this
        }, off: function (...t) {
            let [e, n, i, s] = t;
            "function" == typeof t[1] && ([e, i, s] = t, n = void 0), s || (s = !1);
            const r = e.split(" ");
            for (let t = 0; t < r.length; t += 1) {
                const e = r[t];
                for (let t = 0; t < this.length; t += 1) {
                    const r = this[t];
                    let o;
                    if (!n && r.dom7Listeners ? o = r.dom7Listeners[e] : n && r.dom7LiveListeners && (o = r.dom7LiveListeners[e]), o && o.length) for (let t = o.length - 1; t >= 0; t -= 1) {
                        const n = o[t];
                        i && n.listener === i || i && n.listener && n.listener.dom7proxy && n.listener.dom7proxy === i ? (r.removeEventListener(e, n.proxyListener, s), o.splice(t, 1)) : i || (r.removeEventListener(e, n.proxyListener, s), o.splice(t, 1))
                    }
                }
            }
            return this
        }, trigger: function (...t) {
            const e = b(), n = t[0].split(" "), i = t[1];
            for (let s = 0; s < n.length; s += 1) {
                const r = n[s];
                for (let n = 0; n < this.length; n += 1) {
                    const s = this[n];
                    if (e.CustomEvent) {
                        const n = new e.CustomEvent(r, {detail: i, bubbles: !0, cancelable: !0});
                        s.dom7EventData = t.filter((t, e) => e > 0), s.dispatchEvent(n), s.dom7EventData = [], delete s.dom7EventData
                    }
                }
            }
            return this
        }, transitionEnd: function (t) {
            const e = this;
            return t && e.on("transitionend", (function n(i) {
                i.target === this && (t.call(this, i), e.off("transitionend", n))
            })), this
        }, outerWidth: function (t) {
            if (this.length > 0) {
                if (t) {
                    const t = this.styles();
                    return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
                }
                return this[0].offsetWidth
            }
            return null
        }, outerHeight: function (t) {
            if (this.length > 0) {
                if (t) {
                    const t = this.styles();
                    return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
                }
                return this[0].offsetHeight
            }
            return null
        }, styles: function () {
            const t = b();
            return this[0] ? t.getComputedStyle(this[0], null) : {}
        }, offset: function () {
            if (this.length > 0) {
                const t = b(), e = m(), n = this[0], i = n.getBoundingClientRect(), s = e.body,
                    r = n.clientTop || s.clientTop || 0, o = n.clientLeft || s.clientLeft || 0,
                    a = n === t ? t.scrollY : n.scrollTop, l = n === t ? t.scrollX : n.scrollLeft;
                return {top: i.top + a - r, left: i.left + l - o}
            }
            return null
        }, css: function (t, e) {
            const n = b();
            let i;
            if (1 === arguments.length) {
                if ("string" != typeof t) {
                    for (i = 0; i < this.length; i += 1) for (const e in t) this[i].style[e] = t[e];
                    return this
                }
                if (this[0]) return n.getComputedStyle(this[0], null).getPropertyValue(t)
            }
            if (2 === arguments.length && "string" == typeof t) {
                for (i = 0; i < this.length; i += 1) this[i].style[t] = e;
                return this
            }
            return this
        }, each: function (t) {
            return t ? (this.forEach((e, n) => {
                t.apply(e, [e, n])
            }), this) : this
        }, html: function (t) {
            if (void 0 === t) return this[0] ? this[0].innerHTML : null;
            for (let e = 0; e < this.length; e += 1) this[e].innerHTML = t;
            return this
        }, text: function (t) {
            if (void 0 === t) return this[0] ? this[0].textContent.trim() : null;
            for (let e = 0; e < this.length; e += 1) this[e].textContent = t;
            return this
        }, is: function (t) {
            const e = b(), n = m(), i = this[0];
            let s, r;
            if (!i || void 0 === t) return !1;
            if ("string" == typeof t) {
                if (i.matches) return i.matches(t);
                if (i.webkitMatchesSelector) return i.webkitMatchesSelector(t);
                if (i.msMatchesSelector) return i.msMatchesSelector(t);
                for (s = C(t), r = 0; r < s.length; r += 1) if (s[r] === i) return !0;
                return !1
            }
            if (t === n) return i === n;
            if (t === e) return i === e;
            if (t.nodeType || t instanceof y) {
                for (s = t.nodeType ? [t] : t, r = 0; r < s.length; r += 1) if (s[r] === i) return !0;
                return !1
            }
            return !1
        }, index: function () {
            let t, e = this[0];
            if (e) {
                for (t = 0; null !== (e = e.previousSibling);) 1 === e.nodeType && (t += 1);
                return t
            }
        }, eq: function (t) {
            if (void 0 === t) return this;
            const e = this.length;
            if (t > e - 1) return C([]);
            if (t < 0) {
                const n = e + t;
                return C(n < 0 ? [] : [this[n]])
            }
            return C([this[t]])
        }, append: function (...t) {
            let e;
            const n = m();
            for (let i = 0; i < t.length; i += 1) {
                e = t[i];
                for (let t = 0; t < this.length; t += 1) if ("string" == typeof e) {
                    const i = n.createElement("div");
                    for (i.innerHTML = e; i.firstChild;) this[t].appendChild(i.firstChild)
                } else if (e instanceof y) for (let n = 0; n < e.length; n += 1) this[t].appendChild(e[n]); else this[t].appendChild(e)
            }
            return this
        }, prepend: function (t) {
            const e = m();
            let n, i;
            for (n = 0; n < this.length; n += 1) if ("string" == typeof t) {
                const s = e.createElement("div");
                for (s.innerHTML = t, i = s.childNodes.length - 1; i >= 0; i -= 1) this[n].insertBefore(s.childNodes[i], this[n].childNodes[0])
            } else if (t instanceof y) for (i = 0; i < t.length; i += 1) this[n].insertBefore(t[i], this[n].childNodes[0]); else this[n].insertBefore(t, this[n].childNodes[0]);
            return this
        }, next: function (t) {
            return this.length > 0 ? t ? this[0].nextElementSibling && C(this[0].nextElementSibling).is(t) ? C([this[0].nextElementSibling]) : C([]) : this[0].nextElementSibling ? C([this[0].nextElementSibling]) : C([]) : C([])
        }, nextAll: function (t) {
            const e = [];
            let n = this[0];
            if (!n) return C([]);
            for (; n.nextElementSibling;) {
                const i = n.nextElementSibling;
                t ? C(i).is(t) && e.push(i) : e.push(i), n = i
            }
            return C(e)
        }, prev: function (t) {
            if (this.length > 0) {
                const e = this[0];
                return t ? e.previousElementSibling && C(e.previousElementSibling).is(t) ? C([e.previousElementSibling]) : C([]) : e.previousElementSibling ? C([e.previousElementSibling]) : C([])
            }
            return C([])
        }, prevAll: function (t) {
            const e = [];
            let n = this[0];
            if (!n) return C([]);
            for (; n.previousElementSibling;) {
                const i = n.previousElementSibling;
                t ? C(i).is(t) && e.push(i) : e.push(i), n = i
            }
            return C(e)
        }, parent: function (t) {
            const e = [];
            for (let n = 0; n < this.length; n += 1) null !== this[n].parentNode && (t ? C(this[n].parentNode).is(t) && e.push(this[n].parentNode) : e.push(this[n].parentNode));
            return C(e)
        }, parents: function (t) {
            const e = [];
            for (let n = 0; n < this.length; n += 1) {
                let i = this[n].parentNode;
                for (; i;) t ? C(i).is(t) && e.push(i) : e.push(i), i = i.parentNode
            }
            return C(e)
        }, closest: function (t) {
            let e = this;
            return void 0 === t ? C([]) : (e.is(t) || (e = e.parents(t).eq(0)), e)
        }, find: function (t) {
            const e = [];
            for (let n = 0; n < this.length; n += 1) {
                const i = this[n].querySelectorAll(t);
                for (let t = 0; t < i.length; t += 1) e.push(i[t])
            }
            return C(e)
        }, children: function (t) {
            const e = [];
            for (let n = 0; n < this.length; n += 1) {
                const i = this[n].children;
                for (let n = 0; n < i.length; n += 1) t && !C(i[n]).is(t) || e.push(i[n])
            }
            return C(e)
        }, filter: function (t) {
            return C(x(this, t))
        }, remove: function () {
            for (let t = 0; t < this.length; t += 1) this[t].parentNode && this[t].parentNode.removeChild(this[t]);
            return this
        }
    };
    Object.keys(E).forEach(t => {
        Object.defineProperty(C.fn, t, {value: E[t], writable: !0})
    });
    var P = C;

    function M(t, e = 0) {
        return setTimeout(t, e)
    }

    function O() {
        return Date.now()
    }

    function L(t, e = "x") {
        const n = b();
        let i, s, r;
        const o = function (t) {
            const e = b();
            let n;
            return e.getComputedStyle && (n = e.getComputedStyle(t, null)), !n && t.currentStyle && (n = t.currentStyle), n || (n = t.style), n
        }(t);
        return n.WebKitCSSMatrix ? (s = o.transform || o.webkitTransform, s.split(",").length > 6 && (s = s.split(", ").map(t => t.replace(",", ".")).join(", ")), r = new n.WebKitCSSMatrix("none" === s ? "" : s)) : (r = o.MozTransform || o.OTransform || o.MsTransform || o.msTransform || o.transform || o.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), i = r.toString().split(",")), "x" === e && (s = n.WebKitCSSMatrix ? r.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), "y" === e && (s = n.WebKitCSSMatrix ? r.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])), s || 0
    }

    function _(t) {
        return "object" == typeof t && null !== t && t.constructor && "Object" === Object.prototype.toString.call(t).slice(8, -1)
    }

    function k(...t) {
        const e = Object(t[0]), n = ["__proto__", "constructor", "prototype"];
        for (let s = 1; s < t.length; s += 1) {
            const r = t[s];
            if (null != r && (i = r, !("undefined" != typeof window && void 0 !== window.HTMLElement ? i instanceof HTMLElement : i && (1 === i.nodeType || 11 === i.nodeType)))) {
                const t = Object.keys(Object(r)).filter(t => n.indexOf(t) < 0);
                for (let n = 0, i = t.length; n < i; n += 1) {
                    const i = t[n], s = Object.getOwnPropertyDescriptor(r, i);
                    void 0 !== s && s.enumerable && (_(e[i]) && _(r[i]) ? r[i].__swiper__ ? e[i] = r[i] : k(e[i], r[i]) : !_(e[i]) && _(r[i]) ? (e[i] = {}, r[i].__swiper__ ? e[i] = r[i] : k(e[i], r[i])) : e[i] = r[i])
                }
            }
        }
        var i;
        return e
    }

    function A(t, e, n) {
        t.style.setProperty(e, n)
    }

    function z({swiper: t, targetPosition: e, side: n}) {
        const i = b(), s = -t.translate;
        let r, o = null;
        const a = t.params.speed;
        t.wrapperEl.style.scrollSnapType = "none", i.cancelAnimationFrame(t.cssModeFrameID);
        const l = e > s ? "next" : "prev", c = (t, e) => "next" === l && t >= e || "prev" === l && t <= e, u = () => {
            r = (new Date).getTime(), null === o && (o = r);
            const l = Math.max(Math.min((r - o) / a, 1), 0), d = .5 - Math.cos(l * Math.PI) / 2;
            let h = s + d * (e - s);
            if (c(h, e) && (h = e), t.wrapperEl.scrollTo({[n]: h}), c(h, e)) return t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.scrollSnapType = "", setTimeout(() => {
                t.wrapperEl.style.overflow = "", t.wrapperEl.scrollTo({[n]: h})
            }), void i.cancelAnimationFrame(t.cssModeFrameID);
            t.cssModeFrameID = i.requestAnimationFrame(u)
        };
        u()
    }

    let I, R, j;

    function D() {
        return I || (I = function () {
            const t = b(), e = m();
            return {
                smoothScroll: e.documentElement && "scrollBehavior" in e.documentElement.style,
                touch: !!("ontouchstart" in t || t.DocumentTouch && e instanceof t.DocumentTouch),
                passiveListener: function () {
                    let e = !1;
                    try {
                        const n = Object.defineProperty({}, "passive", {
                            get() {
                                e = !0
                            }
                        });
                        t.addEventListener("testPassiveListener", null, n)
                    } catch (t) {
                    }
                    return e
                }(),
                gestures: "ongesturestart" in t
            }
        }()), I
    }

    function F(t = {}) {
        return R || (R = function ({userAgent: t} = {}) {
            const e = D(), n = b(), i = n.navigator.platform, s = t || n.navigator.userAgent,
                r = {ios: !1, android: !1}, o = n.screen.width, a = n.screen.height,
                l = s.match(/(Android);?[\s\/]+([\d.]+)?/);
            let c = s.match(/(iPad).*OS\s([\d_]+)/);
            const u = s.match(/(iPod)(.*OS\s([\d_]+))?/), d = !c && s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                h = "Win32" === i;
            let p = "MacIntel" === i;
            return !c && p && e.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${o}x${a}`) >= 0 && (c = s.match(/(Version)\/([\d.]+)/), c || (c = [0, 1, "13_0_0"]), p = !1), l && !h && (r.os = "android", r.android = !0), (c || d || u) && (r.os = "ios", r.ios = !0), r
        }(t)), R
    }

    function B() {
        return j || (j = function () {
            const t = b();
            return {
                isSafari: function () {
                    const e = t.navigator.userAgent.toLowerCase();
                    return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
                }(), isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)
            }
        }()), j
    }

    function N({swiper: t, runCallbacks: e, direction: n, step: i}) {
        const {activeIndex: s, previousIndex: r} = t;
        let o = n;
        if (o || (o = s > r ? "next" : s < r ? "prev" : "reset"), t.emit("transition" + i), e && s !== r) {
            if ("reset" === o) return void t.emit("slideResetTransition" + i);
            t.emit("slideChangeTransition" + i), "next" === o ? t.emit("slideNextTransition" + i) : t.emit("slidePrevTransition" + i)
        }
    }

    function H(t) {
        const e = this, n = m(), i = b(), s = e.touchEventsData, {params: r, touches: o, enabled: a} = e;
        if (!a) return;
        if (e.animating && r.preventInteractionOnTransition) return;
        !e.animating && r.cssMode && r.loop && e.loopFix();
        let l = t;
        l.originalEvent && (l = l.originalEvent);
        let c = P(l.target);
        if ("wrapper" === r.touchEventsTarget && !c.closest(e.wrapperEl).length) return;
        if (s.isTouchEvent = "touchstart" === l.type, !s.isTouchEvent && "which" in l && 3 === l.which) return;
        if (!s.isTouchEvent && "button" in l && l.button > 0) return;
        if (s.isTouched && s.isMoved) return;
        const u = !!r.noSwipingClass && "" !== r.noSwipingClass, d = t.composedPath ? t.composedPath() : t.path;
        u && l.target && l.target.shadowRoot && d && (c = P(d[0]));
        const h = r.noSwipingSelector ? r.noSwipingSelector : "." + r.noSwipingClass,
            p = !(!l.target || !l.target.shadowRoot);
        if (r.noSwiping && (p ? function (t, e = this) {
            return function e(n) {
                if (!n || n === m() || n === b()) return null;
                n.assignedSlot && (n = n.assignedSlot);
                const i = n.closest(t);
                return i || n.getRootNode ? i || e(n.getRootNode().host) : null
            }(e)
        }(h, c[0]) : c.closest(h)[0])) return void (e.allowClick = !0);
        if (r.swipeHandler && !c.closest(r.swipeHandler)[0]) return;
        o.currentX = "touchstart" === l.type ? l.targetTouches[0].pageX : l.pageX, o.currentY = "touchstart" === l.type ? l.targetTouches[0].pageY : l.pageY;
        const f = o.currentX, g = o.currentY, v = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
            y = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
        if (v && (f <= y || f >= i.innerWidth - y)) {
            if ("prevent" !== v) return;
            t.preventDefault()
        }
        if (Object.assign(s, {
            isTouched: !0,
            isMoved: !1,
            allowTouchCallbacks: !0,
            isScrolling: void 0,
            startMoving: void 0
        }), o.startX = f, o.startY = g, s.touchStartTime = O(), e.allowClick = !0, e.updateSize(), e.swipeDirection = void 0, r.threshold > 0 && (s.allowThresholdMove = !1), "touchstart" !== l.type) {
            let t = !0;
            c.is(s.focusableElements) && (t = !1, "SELECT" === c[0].nodeName && (s.isTouched = !1)), n.activeElement && P(n.activeElement).is(s.focusableElements) && n.activeElement !== c[0] && n.activeElement.blur();
            const i = t && e.allowTouchMove && r.touchStartPreventDefault;
            !r.touchStartForcePreventDefault && !i || c[0].isContentEditable || l.preventDefault()
        }
        e.params.freeMode && e.params.freeMode.enabled && e.freeMode && e.animating && !r.cssMode && e.freeMode.onTouchStart(), e.emit("touchStart", l)
    }

    function V(t) {
        const e = m(), n = this, i = n.touchEventsData, {params: s, touches: r, rtlTranslate: o, enabled: a} = n;
        if (!a) return;
        let l = t;
        if (l.originalEvent && (l = l.originalEvent), !i.isTouched) return void (i.startMoving && i.isScrolling && n.emit("touchMoveOpposite", l));
        if (i.isTouchEvent && "touchmove" !== l.type) return;
        const c = "touchmove" === l.type && l.targetTouches && (l.targetTouches[0] || l.changedTouches[0]),
            u = "touchmove" === l.type ? c.pageX : l.pageX, d = "touchmove" === l.type ? c.pageY : l.pageY;
        if (l.preventedByNestedSwiper) return r.startX = u, void (r.startY = d);
        if (!n.allowTouchMove) return P(l.target).is(i.focusableElements) || (n.allowClick = !1), void (i.isTouched && (Object.assign(r, {
            startX: u,
            startY: d,
            currentX: u,
            currentY: d
        }), i.touchStartTime = O()));
        if (i.isTouchEvent && s.touchReleaseOnEdges && !s.loop) if (n.isVertical()) {
            if (d < r.startY && n.translate <= n.maxTranslate() || d > r.startY && n.translate >= n.minTranslate()) return i.isTouched = !1, void (i.isMoved = !1)
        } else if (u < r.startX && n.translate <= n.maxTranslate() || u > r.startX && n.translate >= n.minTranslate()) return;
        if (i.isTouchEvent && e.activeElement && l.target === e.activeElement && P(l.target).is(i.focusableElements)) return i.isMoved = !0, void (n.allowClick = !1);
        if (i.allowTouchCallbacks && n.emit("touchMove", l), l.targetTouches && l.targetTouches.length > 1) return;
        r.currentX = u, r.currentY = d;
        const h = r.currentX - r.startX, p = r.currentY - r.startY;
        if (n.params.threshold && Math.sqrt(h ** 2 + p ** 2) < n.params.threshold) return;
        if (void 0 === i.isScrolling) {
            let t;
            n.isHorizontal() && r.currentY === r.startY || n.isVertical() && r.currentX === r.startX ? i.isScrolling = !1 : h * h + p * p >= 25 && (t = 180 * Math.atan2(Math.abs(p), Math.abs(h)) / Math.PI, i.isScrolling = n.isHorizontal() ? t > s.touchAngle : 90 - t > s.touchAngle)
        }
        if (i.isScrolling && n.emit("touchMoveOpposite", l), void 0 === i.startMoving && (r.currentX === r.startX && r.currentY === r.startY || (i.startMoving = !0)), i.isScrolling) return void (i.isTouched = !1);
        if (!i.startMoving) return;
        n.allowClick = !1, !s.cssMode && l.cancelable && l.preventDefault(), s.touchMoveStopPropagation && !s.nested && l.stopPropagation(), i.isMoved || (s.loop && !s.cssMode && n.loopFix(), i.startTranslate = n.getTranslate(), n.setTransition(0), n.animating && n.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !s.grabCursor || !0 !== n.allowSlideNext && !0 !== n.allowSlidePrev || n.setGrabCursor(!0), n.emit("sliderFirstMove", l)), n.emit("sliderMove", l), i.isMoved = !0;
        let f = n.isHorizontal() ? h : p;
        r.diff = f, f *= s.touchRatio, o && (f = -f), n.swipeDirection = f > 0 ? "prev" : "next", i.currentTranslate = f + i.startTranslate;
        let g = !0, v = s.resistanceRatio;
        if (s.touchReleaseOnEdges && (v = 0), f > 0 && i.currentTranslate > n.minTranslate() ? (g = !1, s.resistance && (i.currentTranslate = n.minTranslate() - 1 + (-n.minTranslate() + i.startTranslate + f) ** v)) : f < 0 && i.currentTranslate < n.maxTranslate() && (g = !1, s.resistance && (i.currentTranslate = n.maxTranslate() + 1 - (n.maxTranslate() - i.startTranslate - f) ** v)), g && (l.preventedByNestedSwiper = !0), !n.allowSlideNext && "next" === n.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !n.allowSlidePrev && "prev" === n.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), n.allowSlidePrev || n.allowSlideNext || (i.currentTranslate = i.startTranslate), s.threshold > 0) {
            if (!(Math.abs(f) > s.threshold || i.allowThresholdMove)) return void (i.currentTranslate = i.startTranslate);
            if (!i.allowThresholdMove) return i.allowThresholdMove = !0, r.startX = r.currentX, r.startY = r.currentY, i.currentTranslate = i.startTranslate, void (r.diff = n.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY)
        }
        s.followFinger && !s.cssMode && ((s.freeMode && s.freeMode.enabled && n.freeMode || s.watchSlidesProgress) && (n.updateActiveIndex(), n.updateSlidesClasses()), n.params.freeMode && s.freeMode.enabled && n.freeMode && n.freeMode.onTouchMove(), n.updateProgress(i.currentTranslate), n.setTranslate(i.currentTranslate))
    }

    function G(t) {
        const e = this, n = e.touchEventsData, {params: i, touches: s, rtlTranslate: r, slidesGrid: o, enabled: a} = e;
        if (!a) return;
        let l = t;
        if (l.originalEvent && (l = l.originalEvent), n.allowTouchCallbacks && e.emit("touchEnd", l), n.allowTouchCallbacks = !1, !n.isTouched) return n.isMoved && i.grabCursor && e.setGrabCursor(!1), n.isMoved = !1, void (n.startMoving = !1);
        i.grabCursor && n.isMoved && n.isTouched && (!0 === e.allowSlideNext || !0 === e.allowSlidePrev) && e.setGrabCursor(!1);
        const c = O(), u = c - n.touchStartTime;
        if (e.allowClick) {
            const t = l.path || l.composedPath && l.composedPath();
            e.updateClickedSlide(t && t[0] || l.target), e.emit("tap click", l), u < 300 && c - n.lastClickTime < 300 && e.emit("doubleTap doubleClick", l)
        }
        if (n.lastClickTime = O(), M(() => {
            e.destroyed || (e.allowClick = !0)
        }), !n.isTouched || !n.isMoved || !e.swipeDirection || 0 === s.diff || n.currentTranslate === n.startTranslate) return n.isTouched = !1, n.isMoved = !1, void (n.startMoving = !1);
        let d;
        if (n.isTouched = !1, n.isMoved = !1, n.startMoving = !1, d = i.followFinger ? r ? e.translate : -e.translate : -n.currentTranslate, i.cssMode) return;
        if (e.params.freeMode && i.freeMode.enabled) return void e.freeMode.onTouchEnd({currentPos: d});
        let h = 0, p = e.slidesSizesGrid[0];
        for (let t = 0; t < o.length; t += t < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup) {
            const e = t < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
            void 0 !== o[t + e] ? d >= o[t] && d < o[t + e] && (h = t, p = o[t + e] - o[t]) : d >= o[t] && (h = t, p = o[o.length - 1] - o[o.length - 2])
        }
        let f = null, g = null;
        i.rewind && (e.isBeginning ? g = e.params.virtual && e.params.virtual.enabled && e.virtual ? e.virtual.slides.length - 1 : e.slides.length - 1 : e.isEnd && (f = 0));
        const m = (d - o[h]) / p, v = h < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
        if (u > i.longSwipesMs) {
            if (!i.longSwipes) return void e.slideTo(e.activeIndex);
            "next" === e.swipeDirection && (m >= i.longSwipesRatio ? e.slideTo(i.rewind && e.isEnd ? f : h + v) : e.slideTo(h)), "prev" === e.swipeDirection && (m > 1 - i.longSwipesRatio ? e.slideTo(h + v) : null !== g && m < 0 && Math.abs(m) > i.longSwipesRatio ? e.slideTo(g) : e.slideTo(h))
        } else {
            if (!i.shortSwipes) return void e.slideTo(e.activeIndex);
            e.navigation && (l.target === e.navigation.nextEl || l.target === e.navigation.prevEl) ? l.target === e.navigation.nextEl ? e.slideTo(h + v) : e.slideTo(h) : ("next" === e.swipeDirection && e.slideTo(null !== f ? f : h + v), "prev" === e.swipeDirection && e.slideTo(null !== g ? g : h))
        }
    }

    function W() {
        const t = this, {params: e, el: n} = t;
        if (n && 0 === n.offsetWidth) return;
        e.breakpoints && t.setBreakpoint();
        const {allowSlideNext: i, allowSlidePrev: s, snapGrid: r} = t;
        t.allowSlideNext = !0, t.allowSlidePrev = !0, t.updateSize(), t.updateSlides(), t.updateSlidesClasses(), ("auto" === e.slidesPerView || e.slidesPerView > 1) && t.isEnd && !t.isBeginning && !t.params.centeredSlides ? t.slideTo(t.slides.length - 1, 0, !1, !0) : t.slideTo(t.activeIndex, 0, !1, !0), t.autoplay && t.autoplay.running && t.autoplay.paused && t.autoplay.run(), t.allowSlidePrev = s, t.allowSlideNext = i, t.params.watchOverflow && r !== t.snapGrid && t.checkOverflow()
    }

    function q(t) {
        const e = this;
        e.enabled && (e.allowClick || (e.params.preventClicks && t.preventDefault(), e.params.preventClicksPropagation && e.animating && (t.stopPropagation(), t.stopImmediatePropagation())))
    }

    function X() {
        const t = this, {wrapperEl: e, rtlTranslate: n, enabled: i} = t;
        if (!i) return;
        let s;
        t.previousTranslate = t.translate, t.isHorizontal() ? t.translate = -e.scrollLeft : t.translate = -e.scrollTop, 0 === t.translate && (t.translate = 0), t.updateActiveIndex(), t.updateSlidesClasses();
        const r = t.maxTranslate() - t.minTranslate();
        s = 0 === r ? 0 : (t.translate - t.minTranslate()) / r, s !== t.progress && t.updateProgress(n ? -t.translate : t.translate), t.emit("setTranslate", t.translate, !1)
    }

    let Y = !1;

    function U() {
    }

    const Z = (t, e) => {
        const n = m(), {params: i, touchEvents: s, el: r, wrapperEl: o, device: a, support: l} = t, c = !!i.nested,
            u = "on" === e ? "addEventListener" : "removeEventListener", d = e;
        if (l.touch) {
            const e = !("touchstart" !== s.start || !l.passiveListener || !i.passiveListeners) && {
                passive: !0,
                capture: !1
            };
            r[u](s.start, t.onTouchStart, e), r[u](s.move, t.onTouchMove, l.passiveListener ? {
                passive: !1,
                capture: c
            } : c), r[u](s.end, t.onTouchEnd, e), s.cancel && r[u](s.cancel, t.onTouchEnd, e)
        } else r[u](s.start, t.onTouchStart, !1), n[u](s.move, t.onTouchMove, c), n[u](s.end, t.onTouchEnd, !1);
        (i.preventClicks || i.preventClicksPropagation) && r[u]("click", t.onClick, !0), i.cssMode && o[u]("scroll", t.onScroll), i.updateOnWindowResize ? t[d](a.ios || a.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", W, !0) : t[d]("observerUpdate", W, !0)
    };
    const K = (t, e) => t.grid && e.grid && e.grid.rows > 1;
    var J = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        enabled: !0,
        focusableElements: "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: .5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: .85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopedSlidesLimit: !0,
        loopFillGroupWithBlank: !1,
        loopPreventsSlide: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        maxBackfaceHiddenSlides: 10,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0,
        _emitClasses: !1
    };

    function Q(t, e) {
        return function (n = {}) {
            const i = Object.keys(n)[0], s = n[i];
            "object" == typeof s && null !== s ? (["navigation", "pagination", "scrollbar"].indexOf(i) >= 0 && !0 === t[i] && (t[i] = {auto: !0}), i in t && "enabled" in s ? (!0 === t[i] && (t[i] = {enabled: !0}), "object" != typeof t[i] || "enabled" in t[i] || (t[i].enabled = !0), t[i] || (t[i] = {enabled: !1}), k(e, n)) : k(e, n)) : k(e, n)
        }
    }

    const tt = {
        eventsEmitter: {
            on(t, e, n) {
                const i = this;
                if (!i.eventsListeners || i.destroyed) return i;
                if ("function" != typeof e) return i;
                const s = n ? "unshift" : "push";
                return t.split(" ").forEach(t => {
                    i.eventsListeners[t] || (i.eventsListeners[t] = []), i.eventsListeners[t][s](e)
                }), i
            }, once(t, e, n) {
                const i = this;
                if (!i.eventsListeners || i.destroyed) return i;
                if ("function" != typeof e) return i;

                function s(...n) {
                    i.off(t, s), s.__emitterProxy && delete s.__emitterProxy, e.apply(i, n)
                }

                return s.__emitterProxy = e, i.on(t, s, n)
            }, onAny(t, e) {
                const n = this;
                if (!n.eventsListeners || n.destroyed) return n;
                if ("function" != typeof t) return n;
                const i = e ? "unshift" : "push";
                return n.eventsAnyListeners.indexOf(t) < 0 && n.eventsAnyListeners[i](t), n
            }, offAny(t) {
                const e = this;
                if (!e.eventsListeners || e.destroyed) return e;
                if (!e.eventsAnyListeners) return e;
                const n = e.eventsAnyListeners.indexOf(t);
                return n >= 0 && e.eventsAnyListeners.splice(n, 1), e
            }, off(t, e) {
                const n = this;
                return !n.eventsListeners || n.destroyed ? n : n.eventsListeners ? (t.split(" ").forEach(t => {
                    void 0 === e ? n.eventsListeners[t] = [] : n.eventsListeners[t] && n.eventsListeners[t].forEach((i, s) => {
                        (i === e || i.__emitterProxy && i.__emitterProxy === e) && n.eventsListeners[t].splice(s, 1)
                    })
                }), n) : n
            }, emit(...t) {
                const e = this;
                if (!e.eventsListeners || e.destroyed) return e;
                if (!e.eventsListeners) return e;
                let n, i, s;
                "string" == typeof t[0] || Array.isArray(t[0]) ? (n = t[0], i = t.slice(1, t.length), s = e) : (n = t[0].events, i = t[0].data, s = t[0].context || e), i.unshift(s);
                return (Array.isArray(n) ? n : n.split(" ")).forEach(t => {
                    e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach(e => {
                        e.apply(s, [t, ...i])
                    }), e.eventsListeners && e.eventsListeners[t] && e.eventsListeners[t].forEach(t => {
                        t.apply(s, i)
                    })
                }), e
            }
        }, update: {
            updateSize: function () {
                const t = this;
                let e, n;
                const i = t.$el;
                e = void 0 !== t.params.width && null !== t.params.width ? t.params.width : i[0].clientWidth, n = void 0 !== t.params.height && null !== t.params.height ? t.params.height : i[0].clientHeight, 0 === e && t.isHorizontal() || 0 === n && t.isVertical() || (e = e - parseInt(i.css("padding-left") || 0, 10) - parseInt(i.css("padding-right") || 0, 10), n = n - parseInt(i.css("padding-top") || 0, 10) - parseInt(i.css("padding-bottom") || 0, 10), Number.isNaN(e) && (e = 0), Number.isNaN(n) && (n = 0), Object.assign(t, {
                    width: e,
                    height: n,
                    size: t.isHorizontal() ? e : n
                }))
            }, updateSlides: function () {
                const t = this;

                function e(e) {
                    return t.isHorizontal() ? e : {
                        width: "height",
                        "margin-top": "margin-left",
                        "margin-bottom ": "margin-right",
                        "margin-left": "margin-top",
                        "margin-right": "margin-bottom",
                        "padding-left": "padding-top",
                        "padding-right": "padding-bottom",
                        marginRight: "marginBottom"
                    }[e]
                }

                function n(t, n) {
                    return parseFloat(t.getPropertyValue(e(n)) || 0)
                }

                const i = t.params, {$wrapperEl: s, size: r, rtlTranslate: o, wrongRTL: a} = t,
                    l = t.virtual && i.virtual.enabled, c = l ? t.virtual.slides.length : t.slides.length,
                    u = s.children("." + t.params.slideClass), d = l ? t.virtual.slides.length : u.length;
                let h = [];
                const p = [], f = [];
                let g = i.slidesOffsetBefore;
                "function" == typeof g && (g = i.slidesOffsetBefore.call(t));
                let m = i.slidesOffsetAfter;
                "function" == typeof m && (m = i.slidesOffsetAfter.call(t));
                const v = t.snapGrid.length, b = t.slidesGrid.length;
                let y = i.spaceBetween, w = -g, x = 0, C = 0;
                if (void 0 === r) return;
                "string" == typeof y && y.indexOf("%") >= 0 && (y = parseFloat(y.replace("%", "")) / 100 * r), t.virtualSize = -y, o ? u.css({
                    marginLeft: "",
                    marginBottom: "",
                    marginTop: ""
                }) : u.css({
                    marginRight: "",
                    marginBottom: "",
                    marginTop: ""
                }), i.centeredSlides && i.cssMode && (A(t.wrapperEl, "--swiper-centered-offset-before", ""), A(t.wrapperEl, "--swiper-centered-offset-after", ""));
                const S = i.grid && i.grid.rows > 1 && t.grid;
                let T;
                S && t.grid.initSlides(d);
                const E = "auto" === i.slidesPerView && i.breakpoints && Object.keys(i.breakpoints).filter(t => void 0 !== i.breakpoints[t].slidesPerView).length > 0;
                for (let s = 0; s < d; s += 1) {
                    T = 0;
                    const o = u.eq(s);
                    if (S && t.grid.updateSlide(s, o, d, e), "none" !== o.css("display")) {
                        if ("auto" === i.slidesPerView) {
                            E && (u[s].style[e("width")] = "");
                            const r = getComputedStyle(o[0]), a = o[0].style.transform, l = o[0].style.webkitTransform;
                            if (a && (o[0].style.transform = "none"), l && (o[0].style.webkitTransform = "none"), i.roundLengths) T = t.isHorizontal() ? o.outerWidth(!0) : o.outerHeight(!0); else {
                                const t = n(r, "width"), e = n(r, "padding-left"), i = n(r, "padding-right"),
                                    s = n(r, "margin-left"), a = n(r, "margin-right"),
                                    l = r.getPropertyValue("box-sizing");
                                if (l && "border-box" === l) T = t + s + a; else {
                                    const {clientWidth: n, offsetWidth: r} = o[0];
                                    T = t + e + i + s + a + (r - n)
                                }
                            }
                            a && (o[0].style.transform = a), l && (o[0].style.webkitTransform = l), i.roundLengths && (T = Math.floor(T))
                        } else T = (r - (i.slidesPerView - 1) * y) / i.slidesPerView, i.roundLengths && (T = Math.floor(T)), u[s] && (u[s].style[e("width")] = T + "px");
                        u[s] && (u[s].swiperSlideSize = T), f.push(T), i.centeredSlides ? (w = w + T / 2 + x / 2 + y, 0 === x && 0 !== s && (w = w - r / 2 - y), 0 === s && (w = w - r / 2 - y), Math.abs(w) < .001 && (w = 0), i.roundLengths && (w = Math.floor(w)), C % i.slidesPerGroup == 0 && h.push(w), p.push(w)) : (i.roundLengths && (w = Math.floor(w)), (C - Math.min(t.params.slidesPerGroupSkip, C)) % t.params.slidesPerGroup == 0 && h.push(w), p.push(w), w = w + T + y), t.virtualSize += T + y, x = T, C += 1
                    }
                }
                if (t.virtualSize = Math.max(t.virtualSize, r) + m, o && a && ("slide" === i.effect || "coverflow" === i.effect) && s.css({width: t.virtualSize + i.spaceBetween + "px"}), i.setWrapperSize && s.css({[e("width")]: t.virtualSize + i.spaceBetween + "px"}), S && t.grid.updateWrapperSize(T, h, e), !i.centeredSlides) {
                    const e = [];
                    for (let n = 0; n < h.length; n += 1) {
                        let s = h[n];
                        i.roundLengths && (s = Math.floor(s)), h[n] <= t.virtualSize - r && e.push(s)
                    }
                    h = e, Math.floor(t.virtualSize - r) - Math.floor(h[h.length - 1]) > 1 && h.push(t.virtualSize - r)
                }
                if (0 === h.length && (h = [0]), 0 !== i.spaceBetween) {
                    const n = t.isHorizontal() && o ? "marginLeft" : e("marginRight");
                    u.filter((t, e) => !i.cssMode || e !== u.length - 1).css({[n]: y + "px"})
                }
                if (i.centeredSlides && i.centeredSlidesBounds) {
                    let t = 0;
                    f.forEach(e => {
                        t += e + (i.spaceBetween ? i.spaceBetween : 0)
                    }), t -= i.spaceBetween;
                    const e = t - r;
                    h = h.map(t => t < 0 ? -g : t > e ? e + m : t)
                }
                if (i.centerInsufficientSlides) {
                    let t = 0;
                    if (f.forEach(e => {
                        t += e + (i.spaceBetween ? i.spaceBetween : 0)
                    }), t -= i.spaceBetween, t < r) {
                        const e = (r - t) / 2;
                        h.forEach((t, n) => {
                            h[n] = t - e
                        }), p.forEach((t, n) => {
                            p[n] = t + e
                        })
                    }
                }
                if (Object.assign(t, {
                    slides: u,
                    snapGrid: h,
                    slidesGrid: p,
                    slidesSizesGrid: f
                }), i.centeredSlides && i.cssMode && !i.centeredSlidesBounds) {
                    A(t.wrapperEl, "--swiper-centered-offset-before", -h[0] + "px"), A(t.wrapperEl, "--swiper-centered-offset-after", t.size / 2 - f[f.length - 1] / 2 + "px");
                    const e = -t.snapGrid[0], n = -t.slidesGrid[0];
                    t.snapGrid = t.snapGrid.map(t => t + e), t.slidesGrid = t.slidesGrid.map(t => t + n)
                }
                if (d !== c && t.emit("slidesLengthChange"), h.length !== v && (t.params.watchOverflow && t.checkOverflow(), t.emit("snapGridLengthChange")), p.length !== b && t.emit("slidesGridLengthChange"), i.watchSlidesProgress && t.updateSlidesOffset(), !(l || i.cssMode || "slide" !== i.effect && "fade" !== i.effect)) {
                    const e = i.containerModifierClass + "backface-hidden", n = t.$el.hasClass(e);
                    d <= i.maxBackfaceHiddenSlides ? n || t.$el.addClass(e) : n && t.$el.removeClass(e)
                }
            }, updateAutoHeight: function (t) {
                const e = this, n = [], i = e.virtual && e.params.virtual.enabled;
                let s, r = 0;
                "number" == typeof t ? e.setTransition(t) : !0 === t && e.setTransition(e.params.speed);
                const o = t => i ? e.slides.filter(e => parseInt(e.getAttribute("data-swiper-slide-index"), 10) === t)[0] : e.slides.eq(t)[0];
                if ("auto" !== e.params.slidesPerView && e.params.slidesPerView > 1) if (e.params.centeredSlides) (e.visibleSlides || P([])).each(t => {
                    n.push(t)
                }); else for (s = 0; s < Math.ceil(e.params.slidesPerView); s += 1) {
                    const t = e.activeIndex + s;
                    if (t > e.slides.length && !i) break;
                    n.push(o(t))
                } else n.push(o(e.activeIndex));
                for (s = 0; s < n.length; s += 1) if (void 0 !== n[s]) {
                    const t = n[s].offsetHeight;
                    r = t > r ? t : r
                }
                (r || 0 === r) && e.$wrapperEl.css("height", r + "px")
            }, updateSlidesOffset: function () {
                const t = this, e = t.slides;
                for (let n = 0; n < e.length; n += 1) e[n].swiperSlideOffset = t.isHorizontal() ? e[n].offsetLeft : e[n].offsetTop
            }, updateSlidesProgress: function (t = this && this.translate || 0) {
                const e = this, n = e.params, {slides: i, rtlTranslate: s, snapGrid: r} = e;
                if (0 === i.length) return;
                void 0 === i[0].swiperSlideOffset && e.updateSlidesOffset();
                let o = -t;
                s && (o = t), i.removeClass(n.slideVisibleClass), e.visibleSlidesIndexes = [], e.visibleSlides = [];
                for (let t = 0; t < i.length; t += 1) {
                    const a = i[t];
                    let l = a.swiperSlideOffset;
                    n.cssMode && n.centeredSlides && (l -= i[0].swiperSlideOffset);
                    const c = (o + (n.centeredSlides ? e.minTranslate() : 0) - l) / (a.swiperSlideSize + n.spaceBetween),
                        u = (o - r[0] + (n.centeredSlides ? e.minTranslate() : 0) - l) / (a.swiperSlideSize + n.spaceBetween),
                        d = -(o - l), h = d + e.slidesSizesGrid[t];
                    (d >= 0 && d < e.size - 1 || h > 1 && h <= e.size || d <= 0 && h >= e.size) && (e.visibleSlides.push(a), e.visibleSlidesIndexes.push(t), i.eq(t).addClass(n.slideVisibleClass)), a.progress = s ? -c : c, a.originalProgress = s ? -u : u
                }
                e.visibleSlides = P(e.visibleSlides)
            }, updateProgress: function (t) {
                const e = this;
                if (void 0 === t) {
                    const n = e.rtlTranslate ? -1 : 1;
                    t = e && e.translate && e.translate * n || 0
                }
                const n = e.params, i = e.maxTranslate() - e.minTranslate();
                let {progress: s, isBeginning: r, isEnd: o} = e;
                const a = r, l = o;
                0 === i ? (s = 0, r = !0, o = !0) : (s = (t - e.minTranslate()) / i, r = s <= 0, o = s >= 1), Object.assign(e, {
                    progress: s,
                    isBeginning: r,
                    isEnd: o
                }), (n.watchSlidesProgress || n.centeredSlides && n.autoHeight) && e.updateSlidesProgress(t), r && !a && e.emit("reachBeginning toEdge"), o && !l && e.emit("reachEnd toEdge"), (a && !r || l && !o) && e.emit("fromEdge"), e.emit("progress", s)
            }, updateSlidesClasses: function () {
                const t = this, {slides: e, params: n, $wrapperEl: i, activeIndex: s, realIndex: r} = t,
                    o = t.virtual && n.virtual.enabled;
                let a;
                e.removeClass(`${n.slideActiveClass} ${n.slideNextClass} ${n.slidePrevClass} ${n.slideDuplicateActiveClass} ${n.slideDuplicateNextClass} ${n.slideDuplicatePrevClass}`), a = o ? t.$wrapperEl.find(`.${n.slideClass}[data-swiper-slide-index="${s}"]`) : e.eq(s), a.addClass(n.slideActiveClass), n.loop && (a.hasClass(n.slideDuplicateClass) ? i.children(`.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${r}"]`).addClass(n.slideDuplicateActiveClass) : i.children(`.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${r}"]`).addClass(n.slideDuplicateActiveClass));
                let l = a.nextAll("." + n.slideClass).eq(0).addClass(n.slideNextClass);
                n.loop && 0 === l.length && (l = e.eq(0), l.addClass(n.slideNextClass));
                let c = a.prevAll("." + n.slideClass).eq(0).addClass(n.slidePrevClass);
                n.loop && 0 === c.length && (c = e.eq(-1), c.addClass(n.slidePrevClass)), n.loop && (l.hasClass(n.slideDuplicateClass) ? i.children(`.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicateNextClass) : i.children(`.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicateNextClass), c.hasClass(n.slideDuplicateClass) ? i.children(`.${n.slideClass}:not(.${n.slideDuplicateClass})[data-swiper-slide-index="${c.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicatePrevClass) : i.children(`.${n.slideClass}.${n.slideDuplicateClass}[data-swiper-slide-index="${c.attr("data-swiper-slide-index")}"]`).addClass(n.slideDuplicatePrevClass)), t.emitSlidesClasses()
            }, updateActiveIndex: function (t) {
                const e = this, n = e.rtlTranslate ? e.translate : -e.translate, {
                    slidesGrid: i,
                    snapGrid: s,
                    params: r,
                    activeIndex: o,
                    realIndex: a,
                    snapIndex: l
                } = e;
                let c, u = t;
                if (void 0 === u) {
                    for (let t = 0; t < i.length; t += 1) void 0 !== i[t + 1] ? n >= i[t] && n < i[t + 1] - (i[t + 1] - i[t]) / 2 ? u = t : n >= i[t] && n < i[t + 1] && (u = t + 1) : n >= i[t] && (u = t);
                    r.normalizeSlideIndex && (u < 0 || void 0 === u) && (u = 0)
                }
                if (s.indexOf(n) >= 0) c = s.indexOf(n); else {
                    const t = Math.min(r.slidesPerGroupSkip, u);
                    c = t + Math.floor((u - t) / r.slidesPerGroup)
                }
                if (c >= s.length && (c = s.length - 1), u === o) return void (c !== l && (e.snapIndex = c, e.emit("snapIndexChange")));
                const d = parseInt(e.slides.eq(u).attr("data-swiper-slide-index") || u, 10);
                Object.assign(e, {
                    snapIndex: c,
                    realIndex: d,
                    previousIndex: o,
                    activeIndex: u
                }), e.emit("activeIndexChange"), e.emit("snapIndexChange"), a !== d && e.emit("realIndexChange"), (e.initialized || e.params.runCallbacksOnInit) && e.emit("slideChange")
            }, updateClickedSlide: function (t) {
                const e = this, n = e.params, i = P(t).closest("." + n.slideClass)[0];
                let s, r = !1;
                if (i) for (let t = 0; t < e.slides.length; t += 1) if (e.slides[t] === i) {
                    r = !0, s = t;
                    break
                }
                if (!i || !r) return e.clickedSlide = void 0, void (e.clickedIndex = void 0);
                e.clickedSlide = i, e.virtual && e.params.virtual.enabled ? e.clickedIndex = parseInt(P(i).attr("data-swiper-slide-index"), 10) : e.clickedIndex = s, n.slideToClickedSlide && void 0 !== e.clickedIndex && e.clickedIndex !== e.activeIndex && e.slideToClickedSlide()
            }
        }, translate: {
            getTranslate: function (t = (this.isHorizontal() ? "x" : "y")) {
                const {params: e, rtlTranslate: n, translate: i, $wrapperEl: s} = this;
                if (e.virtualTranslate) return n ? -i : i;
                if (e.cssMode) return i;
                let r = L(s[0], t);
                return n && (r = -r), r || 0
            }, setTranslate: function (t, e) {
                const n = this, {rtlTranslate: i, params: s, $wrapperEl: r, wrapperEl: o, progress: a} = n;
                let l, c = 0, u = 0;
                n.isHorizontal() ? c = i ? -t : t : u = t, s.roundLengths && (c = Math.floor(c), u = Math.floor(u)), s.cssMode ? o[n.isHorizontal() ? "scrollLeft" : "scrollTop"] = n.isHorizontal() ? -c : -u : s.virtualTranslate || r.transform(`translate3d(${c}px, ${u}px, 0px)`), n.previousTranslate = n.translate, n.translate = n.isHorizontal() ? c : u;
                const d = n.maxTranslate() - n.minTranslate();
                l = 0 === d ? 0 : (t - n.minTranslate()) / d, l !== a && n.updateProgress(t), n.emit("setTranslate", n.translate, e)
            }, minTranslate: function () {
                return -this.snapGrid[0]
            }, maxTranslate: function () {
                return -this.snapGrid[this.snapGrid.length - 1]
            }, translateTo: function (t = 0, e = this.params.speed, n = !0, i = !0, s) {
                const r = this, {params: o, wrapperEl: a} = r;
                if (r.animating && o.preventInteractionOnTransition) return !1;
                const l = r.minTranslate(), c = r.maxTranslate();
                let u;
                if (u = i && t > l ? l : i && t < c ? c : t, r.updateProgress(u), o.cssMode) {
                    const t = r.isHorizontal();
                    if (0 === e) a[t ? "scrollLeft" : "scrollTop"] = -u; else {
                        if (!r.support.smoothScroll) return z({
                            swiper: r,
                            targetPosition: -u,
                            side: t ? "left" : "top"
                        }), !0;
                        a.scrollTo({[t ? "left" : "top"]: -u, behavior: "smooth"})
                    }
                    return !0
                }
                return 0 === e ? (r.setTransition(0), r.setTranslate(u), n && (r.emit("beforeTransitionStart", e, s), r.emit("transitionEnd"))) : (r.setTransition(e), r.setTranslate(u), n && (r.emit("beforeTransitionStart", e, s), r.emit("transitionStart")), r.animating || (r.animating = !0, r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function (t) {
                    r && !r.destroyed && t.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd), r.onTranslateToWrapperTransitionEnd = null, delete r.onTranslateToWrapperTransitionEnd, n && r.emit("transitionEnd"))
                }), r.$wrapperEl[0].addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd))), !0
            }
        }, transition: {
            setTransition: function (t, e) {
                const n = this;
                n.params.cssMode || n.$wrapperEl.transition(t), n.emit("setTransition", t, e)
            }, transitionStart: function (t = !0, e) {
                const n = this, {params: i} = n;
                i.cssMode || (i.autoHeight && n.updateAutoHeight(), N({
                    swiper: n,
                    runCallbacks: t,
                    direction: e,
                    step: "Start"
                }))
            }, transitionEnd: function (t = !0, e) {
                const {params: n} = this;
                this.animating = !1, n.cssMode || (this.setTransition(0), N({
                    swiper: this,
                    runCallbacks: t,
                    direction: e,
                    step: "End"
                }))
            }
        }, slide: {
            slideTo: function (t = 0, e = this.params.speed, n = !0, i, s) {
                if ("number" != typeof t && "string" != typeof t) throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof t}] given.`);
                if ("string" == typeof t) {
                    const e = parseInt(t, 10);
                    if (!isFinite(e)) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${t}] given.`);
                    t = e
                }
                const r = this;
                let o = t;
                o < 0 && (o = 0);
                const {
                    params: a,
                    snapGrid: l,
                    slidesGrid: c,
                    previousIndex: u,
                    activeIndex: d,
                    rtlTranslate: h,
                    wrapperEl: p,
                    enabled: f
                } = r;
                if (r.animating && a.preventInteractionOnTransition || !f && !i && !s) return !1;
                const g = Math.min(r.params.slidesPerGroupSkip, o);
                let m = g + Math.floor((o - g) / r.params.slidesPerGroup);
                m >= l.length && (m = l.length - 1);
                const v = -l[m];
                if (a.normalizeSlideIndex) for (let t = 0; t < c.length; t += 1) {
                    const e = -Math.floor(100 * v), n = Math.floor(100 * c[t]), i = Math.floor(100 * c[t + 1]);
                    void 0 !== c[t + 1] ? e >= n && e < i - (i - n) / 2 ? o = t : e >= n && e < i && (o = t + 1) : e >= n && (o = t)
                }
                if (r.initialized && o !== d) {
                    if (!r.allowSlideNext && v < r.translate && v < r.minTranslate()) return !1;
                    if (!r.allowSlidePrev && v > r.translate && v > r.maxTranslate() && (d || 0) !== o) return !1
                }
                let b;
                if (o !== (u || 0) && n && r.emit("beforeSlideChangeStart"), r.updateProgress(v), b = o > d ? "next" : o < d ? "prev" : "reset", h && -v === r.translate || !h && v === r.translate) return r.updateActiveIndex(o), a.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), "slide" !== a.effect && r.setTranslate(v), "reset" !== b && (r.transitionStart(n, b), r.transitionEnd(n, b)), !1;
                if (a.cssMode) {
                    const t = r.isHorizontal(), n = h ? v : -v;
                    if (0 === e) {
                        const e = r.virtual && r.params.virtual.enabled;
                        e && (r.wrapperEl.style.scrollSnapType = "none", r._immediateVirtual = !0), p[t ? "scrollLeft" : "scrollTop"] = n, e && requestAnimationFrame(() => {
                            r.wrapperEl.style.scrollSnapType = "", r._swiperImmediateVirtual = !1
                        })
                    } else {
                        if (!r.support.smoothScroll) return z({
                            swiper: r,
                            targetPosition: n,
                            side: t ? "left" : "top"
                        }), !0;
                        p.scrollTo({[t ? "left" : "top"]: n, behavior: "smooth"})
                    }
                    return !0
                }
                return r.setTransition(e), r.setTranslate(v), r.updateActiveIndex(o), r.updateSlidesClasses(), r.emit("beforeTransitionStart", e, i), r.transitionStart(n, b), 0 === e ? r.transitionEnd(n, b) : r.animating || (r.animating = !0, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function (t) {
                    r && !r.destroyed && t.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd), r.onSlideToWrapperTransitionEnd = null, delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(n, b))
                }), r.$wrapperEl[0].addEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd)), !0
            }, slideToLoop: function (t = 0, e = this.params.speed, n = !0, i) {
                if ("string" == typeof t) {
                    const e = parseInt(t, 10);
                    if (!isFinite(e)) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${t}] given.`);
                    t = e
                }
                const s = this;
                let r = t;
                return s.params.loop && (r += s.loopedSlides), s.slideTo(r, e, n, i)
            }, slideNext: function (t = this.params.speed, e = !0, n) {
                const i = this, {animating: s, enabled: r, params: o} = i;
                if (!r) return i;
                let a = o.slidesPerGroup;
                "auto" === o.slidesPerView && 1 === o.slidesPerGroup && o.slidesPerGroupAuto && (a = Math.max(i.slidesPerViewDynamic("current", !0), 1));
                const l = i.activeIndex < o.slidesPerGroupSkip ? 1 : a;
                if (o.loop) {
                    if (s && o.loopPreventsSlide) return !1;
                    i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft
                }
                return o.rewind && i.isEnd ? i.slideTo(0, t, e, n) : i.slideTo(i.activeIndex + l, t, e, n)
            }, slidePrev: function (t = this.params.speed, e = !0, n) {
                const i = this, {params: s, animating: r, snapGrid: o, slidesGrid: a, rtlTranslate: l, enabled: c} = i;
                if (!c) return i;
                if (s.loop) {
                    if (r && s.loopPreventsSlide) return !1;
                    i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft
                }

                function u(t) {
                    return t < 0 ? -Math.floor(Math.abs(t)) : Math.floor(t)
                }

                const d = u(l ? i.translate : -i.translate), h = o.map(t => u(t));
                let p = o[h.indexOf(d) - 1];
                if (void 0 === p && s.cssMode) {
                    let t;
                    o.forEach((e, n) => {
                        d >= e && (t = n)
                    }), void 0 !== t && (p = o[t > 0 ? t - 1 : t])
                }
                let f = 0;
                if (void 0 !== p && (f = a.indexOf(p), f < 0 && (f = i.activeIndex - 1), "auto" === s.slidesPerView && 1 === s.slidesPerGroup && s.slidesPerGroupAuto && (f = f - i.slidesPerViewDynamic("previous", !0) + 1, f = Math.max(f, 0))), s.rewind && i.isBeginning) {
                    const s = i.params.virtual && i.params.virtual.enabled && i.virtual ? i.virtual.slides.length - 1 : i.slides.length - 1;
                    return i.slideTo(s, t, e, n)
                }
                return i.slideTo(f, t, e, n)
            }, slideReset: function (t = this.params.speed, e = !0, n) {
                return this.slideTo(this.activeIndex, t, e, n)
            }, slideToClosest: function (t = this.params.speed, e = !0, n, i = .5) {
                const s = this;
                let r = s.activeIndex;
                const o = Math.min(s.params.slidesPerGroupSkip, r),
                    a = o + Math.floor((r - o) / s.params.slidesPerGroup),
                    l = s.rtlTranslate ? s.translate : -s.translate;
                if (l >= s.snapGrid[a]) {
                    const t = s.snapGrid[a];
                    l - t > (s.snapGrid[a + 1] - t) * i && (r += s.params.slidesPerGroup)
                } else {
                    const t = s.snapGrid[a - 1];
                    l - t <= (s.snapGrid[a] - t) * i && (r -= s.params.slidesPerGroup)
                }
                return r = Math.max(r, 0), r = Math.min(r, s.slidesGrid.length - 1), s.slideTo(r, t, e, n)
            }, slideToClickedSlide: function () {
                const t = this, {params: e, $wrapperEl: n} = t,
                    i = "auto" === e.slidesPerView ? t.slidesPerViewDynamic() : e.slidesPerView;
                let s, r = t.clickedIndex;
                if (e.loop) {
                    if (t.animating) return;
                    s = parseInt(P(t.clickedSlide).attr("data-swiper-slide-index"), 10), e.centeredSlides ? r < t.loopedSlides - i / 2 || r > t.slides.length - t.loopedSlides + i / 2 ? (t.loopFix(), r = n.children(`.${e.slideClass}[data-swiper-slide-index="${s}"]:not(.${e.slideDuplicateClass})`).eq(0).index(), M(() => {
                        t.slideTo(r)
                    })) : t.slideTo(r) : r > t.slides.length - i ? (t.loopFix(), r = n.children(`.${e.slideClass}[data-swiper-slide-index="${s}"]:not(.${e.slideDuplicateClass})`).eq(0).index(), M(() => {
                        t.slideTo(r)
                    })) : t.slideTo(r)
                } else t.slideTo(r)
            }
        }, loop: {
            loopCreate: function () {
                const t = this, e = m(), {params: n, $wrapperEl: i} = t,
                    s = i.children().length > 0 ? P(i.children()[0].parentNode) : i;
                s.children(`.${n.slideClass}.${n.slideDuplicateClass}`).remove();
                let r = s.children("." + n.slideClass);
                if (n.loopFillGroupWithBlank) {
                    const t = n.slidesPerGroup - r.length % n.slidesPerGroup;
                    if (t !== n.slidesPerGroup) {
                        for (let i = 0; i < t; i += 1) {
                            const t = P(e.createElement("div")).addClass(`${n.slideClass} ${n.slideBlankClass}`);
                            s.append(t)
                        }
                        r = s.children("." + n.slideClass)
                    }
                }
                "auto" !== n.slidesPerView || n.loopedSlides || (n.loopedSlides = r.length), t.loopedSlides = Math.ceil(parseFloat(n.loopedSlides || n.slidesPerView, 10)), t.loopedSlides += n.loopAdditionalSlides, t.loopedSlides > r.length && t.params.loopedSlidesLimit && (t.loopedSlides = r.length);
                const o = [], a = [];
                r.each((t, e) => {
                    P(t).attr("data-swiper-slide-index", e)
                });
                for (let e = 0; e < t.loopedSlides; e += 1) {
                    const t = e - Math.floor(e / r.length) * r.length;
                    a.push(r.eq(t)[0]), o.unshift(r.eq(r.length - t - 1)[0])
                }
                for (let t = 0; t < a.length; t += 1) s.append(P(a[t].cloneNode(!0)).addClass(n.slideDuplicateClass));
                for (let t = o.length - 1; t >= 0; t -= 1) s.prepend(P(o[t].cloneNode(!0)).addClass(n.slideDuplicateClass))
            }, loopFix: function () {
                const t = this;
                t.emit("beforeLoopFix");
                const {
                    activeIndex: e,
                    slides: n,
                    loopedSlides: i,
                    allowSlidePrev: s,
                    allowSlideNext: r,
                    snapGrid: o,
                    rtlTranslate: a
                } = t;
                let l;
                t.allowSlidePrev = !0, t.allowSlideNext = !0;
                const c = -o[e] - t.getTranslate();
                if (e < i) {
                    l = n.length - 3 * i + e, l += i;
                    t.slideTo(l, 0, !1, !0) && 0 !== c && t.setTranslate((a ? -t.translate : t.translate) - c)
                } else if (e >= n.length - i) {
                    l = -n.length + e + i, l += i;
                    t.slideTo(l, 0, !1, !0) && 0 !== c && t.setTranslate((a ? -t.translate : t.translate) - c)
                }
                t.allowSlidePrev = s, t.allowSlideNext = r, t.emit("loopFix")
            }, loopDestroy: function () {
                const {$wrapperEl: t, params: e, slides: n} = this;
                t.children(`.${e.slideClass}.${e.slideDuplicateClass},.${e.slideClass}.${e.slideBlankClass}`).remove(), n.removeAttr("data-swiper-slide-index")
            }
        }, grabCursor: {
            setGrabCursor: function (t) {
                if (this.support.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked || this.params.cssMode) return;
                const e = "container" === this.params.touchEventsTarget ? this.el : this.wrapperEl;
                e.style.cursor = "move", e.style.cursor = t ? "grabbing" : "grab"
            }, unsetGrabCursor: function () {
                this.support.touch || this.params.watchOverflow && this.isLocked || this.params.cssMode || (this["container" === this.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "")
            }
        }, events: {
            attachEvents: function () {
                const t = this, e = m(), {params: n, support: i} = t;
                t.onTouchStart = H.bind(t), t.onTouchMove = V.bind(t), t.onTouchEnd = G.bind(t), n.cssMode && (t.onScroll = X.bind(t)), t.onClick = q.bind(t), i.touch && !Y && (e.addEventListener("touchstart", U), Y = !0), Z(t, "on")
            }, detachEvents: function () {
                Z(this, "off")
            }
        }, breakpoints: {
            setBreakpoint: function () {
                const t = this, {activeIndex: e, initialized: n, loopedSlides: i = 0, params: s, $el: r} = t,
                    o = s.breakpoints;
                if (!o || o && 0 === Object.keys(o).length) return;
                const a = t.getBreakpoint(o, t.params.breakpointsBase, t.el);
                if (!a || t.currentBreakpoint === a) return;
                const l = (a in o ? o[a] : void 0) || t.originalParams, c = K(t, s), u = K(t, l), d = s.enabled;
                c && !u ? (r.removeClass(`${s.containerModifierClass}grid ${s.containerModifierClass}grid-column`), t.emitContainerClasses()) : !c && u && (r.addClass(s.containerModifierClass + "grid"), (l.grid.fill && "column" === l.grid.fill || !l.grid.fill && "column" === s.grid.fill) && r.addClass(s.containerModifierClass + "grid-column"), t.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach(e => {
                    const n = s[e] && s[e].enabled, i = l[e] && l[e].enabled;
                    n && !i && t[e].disable(), !n && i && t[e].enable()
                });
                const h = l.direction && l.direction !== s.direction,
                    p = s.loop && (l.slidesPerView !== s.slidesPerView || h);
                h && n && t.changeDirection(), k(t.params, l);
                const f = t.params.enabled;
                Object.assign(t, {
                    allowTouchMove: t.params.allowTouchMove,
                    allowSlideNext: t.params.allowSlideNext,
                    allowSlidePrev: t.params.allowSlidePrev
                }), d && !f ? t.disable() : !d && f && t.enable(), t.currentBreakpoint = a, t.emit("_beforeBreakpoint", l), p && n && (t.loopDestroy(), t.loopCreate(), t.updateSlides(), t.slideTo(e - i + t.loopedSlides, 0, !1)), t.emit("breakpoint", l)
            }, getBreakpoint: function (t, e = "window", n) {
                if (!t || "container" === e && !n) return;
                let i = !1;
                const s = b(), r = "window" === e ? s.innerHeight : n.clientHeight, o = Object.keys(t).map(t => {
                    if ("string" == typeof t && 0 === t.indexOf("@")) {
                        const e = parseFloat(t.substr(1));
                        return {value: r * e, point: t}
                    }
                    return {value: t, point: t}
                });
                o.sort((t, e) => parseInt(t.value, 10) - parseInt(e.value, 10));
                for (let t = 0; t < o.length; t += 1) {
                    const {point: r, value: a} = o[t];
                    "window" === e ? s.matchMedia(`(min-width: ${a}px)`).matches && (i = r) : a <= n.clientWidth && (i = r)
                }
                return i || "max"
            }
        }, checkOverflow: {
            checkOverflow: function () {
                const t = this, {isLocked: e, params: n} = t, {slidesOffsetBefore: i} = n;
                if (i) {
                    const e = t.slides.length - 1, n = t.slidesGrid[e] + t.slidesSizesGrid[e] + 2 * i;
                    t.isLocked = t.size > n
                } else t.isLocked = 1 === t.snapGrid.length;
                !0 === n.allowSlideNext && (t.allowSlideNext = !t.isLocked), !0 === n.allowSlidePrev && (t.allowSlidePrev = !t.isLocked), e && e !== t.isLocked && (t.isEnd = !1), e !== t.isLocked && t.emit(t.isLocked ? "lock" : "unlock")
            }
        }, classes: {
            addClasses: function () {
                const {classNames: t, params: e, rtl: n, $el: i, device: s, support: r} = this, o = function (t, e) {
                    const n = [];
                    return t.forEach(t => {
                        "object" == typeof t ? Object.keys(t).forEach(i => {
                            t[i] && n.push(e + i)
                        }) : "string" == typeof t && n.push(e + t)
                    }), n
                }(["initialized", e.direction, {"pointer-events": !r.touch}, {"free-mode": this.params.freeMode && e.freeMode.enabled}, {autoheight: e.autoHeight}, {rtl: n}, {grid: e.grid && e.grid.rows > 1}, {"grid-column": e.grid && e.grid.rows > 1 && "column" === e.grid.fill}, {android: s.android}, {ios: s.ios}, {"css-mode": e.cssMode}, {centered: e.cssMode && e.centeredSlides}, {"watch-progress": e.watchSlidesProgress}], e.containerModifierClass);
                t.push(...o), i.addClass([...t].join(" ")), this.emitContainerClasses()
            }, removeClasses: function () {
                const {$el: t, classNames: e} = this;
                t.removeClass(e.join(" ")), this.emitContainerClasses()
            }
        }, images: {
            loadImage: function (t, e, n, i, s, r) {
                const o = b();
                let a;

                function l() {
                    r && r()
                }

                P(t).parent("picture")[0] || t.complete && s ? l() : e ? (a = new o.Image, a.onload = l, a.onerror = l, i && (a.sizes = i), n && (a.srcset = n), e && (a.src = e)) : l()
            }, preloadImages: function () {
                const t = this;

                function e() {
                    null != t && t && !t.destroyed && (void 0 !== t.imagesLoaded && (t.imagesLoaded += 1), t.imagesLoaded === t.imagesToLoad.length && (t.params.updateOnImagesReady && t.update(), t.emit("imagesReady")))
                }

                t.imagesToLoad = t.$el.find("img");
                for (let n = 0; n < t.imagesToLoad.length; n += 1) {
                    const i = t.imagesToLoad[n];
                    t.loadImage(i, i.currentSrc || i.getAttribute("src"), i.srcset || i.getAttribute("srcset"), i.sizes || i.getAttribute("sizes"), !0, e)
                }
            }
        }
    }, et = {};

    class nt {
        constructor(...t) {
            let e, n;
            if (1 === t.length && t[0].constructor && "Object" === Object.prototype.toString.call(t[0]).slice(8, -1) ? n = t[0] : [e, n] = t, n || (n = {}), n = k({}, n), e && !n.el && (n.el = e), n.el && P(n.el).length > 1) {
                const t = [];
                return P(n.el).each(e => {
                    const i = k({}, n, {el: e});
                    t.push(new nt(i))
                }), t
            }
            const i = this;
            i.__swiper__ = !0, i.support = D(), i.device = F({userAgent: n.userAgent}), i.browser = B(), i.eventsListeners = {}, i.eventsAnyListeners = [], i.modules = [...i.__modules__], n.modules && Array.isArray(n.modules) && i.modules.push(...n.modules);
            const s = {};
            i.modules.forEach(t => {
                t({
                    swiper: i,
                    extendParams: Q(n, s),
                    on: i.on.bind(i),
                    once: i.once.bind(i),
                    off: i.off.bind(i),
                    emit: i.emit.bind(i)
                })
            });
            const r = k({}, J, s);
            return i.params = k({}, r, et, n), i.originalParams = k({}, i.params), i.passedParams = k({}, n), i.params && i.params.on && Object.keys(i.params.on).forEach(t => {
                i.on(t, i.params.on[t])
            }), i.params && i.params.onAny && i.onAny(i.params.onAny), i.$ = P, Object.assign(i, {
                enabled: i.params.enabled,
                el: e,
                classNames: [],
                slides: P(),
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],
                isHorizontal: () => "horizontal" === i.params.direction,
                isVertical: () => "vertical" === i.params.direction,
                activeIndex: 0,
                realIndex: 0,
                isBeginning: !0,
                isEnd: !1,
                translate: 0,
                previousTranslate: 0,
                progress: 0,
                velocity: 0,
                animating: !1,
                allowSlideNext: i.params.allowSlideNext,
                allowSlidePrev: i.params.allowSlidePrev,
                touchEvents: function () {
                    const t = ["touchstart", "touchmove", "touchend", "touchcancel"],
                        e = ["pointerdown", "pointermove", "pointerup"];
                    return i.touchEventsTouch = {
                        start: t[0],
                        move: t[1],
                        end: t[2],
                        cancel: t[3]
                    }, i.touchEventsDesktop = {
                        start: e[0],
                        move: e[1],
                        end: e[2]
                    }, i.support.touch || !i.params.simulateTouch ? i.touchEventsTouch : i.touchEventsDesktop
                }(),
                touchEventsData: {
                    isTouched: void 0,
                    isMoved: void 0,
                    allowTouchCallbacks: void 0,
                    touchStartTime: void 0,
                    isScrolling: void 0,
                    currentTranslate: void 0,
                    startTranslate: void 0,
                    allowThresholdMove: void 0,
                    focusableElements: i.params.focusableElements,
                    lastClickTime: O(),
                    clickTimeout: void 0,
                    velocities: [],
                    allowMomentumBounce: void 0,
                    isTouchEvent: void 0,
                    startMoving: void 0
                },
                allowClick: !0,
                allowTouchMove: i.params.allowTouchMove,
                touches: {startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0},
                imagesToLoad: [],
                imagesLoaded: 0
            }), i.emit("_swiper"), i.params.init && i.init(), i
        }

        enable() {
            const t = this;
            t.enabled || (t.enabled = !0, t.params.grabCursor && t.setGrabCursor(), t.emit("enable"))
        }

        disable() {
            const t = this;
            t.enabled && (t.enabled = !1, t.params.grabCursor && t.unsetGrabCursor(), t.emit("disable"))
        }

        setProgress(t, e) {
            t = Math.min(Math.max(t, 0), 1);
            const n = this.minTranslate(), i = (this.maxTranslate() - n) * t + n;
            this.translateTo(i, void 0 === e ? 0 : e), this.updateActiveIndex(), this.updateSlidesClasses()
        }

        emitContainerClasses() {
            const t = this;
            if (!t.params._emitClasses || !t.el) return;
            const e = t.el.className.split(" ").filter(e => 0 === e.indexOf("swiper") || 0 === e.indexOf(t.params.containerModifierClass));
            t.emit("_containerClasses", e.join(" "))
        }

        getSlideClasses(t) {
            const e = this;
            return e.destroyed ? "" : t.className.split(" ").filter(t => 0 === t.indexOf("swiper-slide") || 0 === t.indexOf(e.params.slideClass)).join(" ")
        }

        emitSlidesClasses() {
            const t = this;
            if (!t.params._emitClasses || !t.el) return;
            const e = [];
            t.slides.each(n => {
                const i = t.getSlideClasses(n);
                e.push({slideEl: n, classNames: i}), t.emit("_slideClass", n, i)
            }), t.emit("_slideClasses", e)
        }

        slidesPerViewDynamic(t = "current", e = !1) {
            const {params: n, slides: i, slidesGrid: s, slidesSizesGrid: r, size: o, activeIndex: a} = this;
            let l = 1;
            if (n.centeredSlides) {
                let t, e = i[a].swiperSlideSize;
                for (let n = a + 1; n < i.length; n += 1) i[n] && !t && (e += i[n].swiperSlideSize, l += 1, e > o && (t = !0));
                for (let n = a - 1; n >= 0; n -= 1) i[n] && !t && (e += i[n].swiperSlideSize, l += 1, e > o && (t = !0))
            } else if ("current" === t) for (let t = a + 1; t < i.length; t += 1) {
                (e ? s[t] + r[t] - s[a] < o : s[t] - s[a] < o) && (l += 1)
            } else for (let t = a - 1; t >= 0; t -= 1) {
                s[a] - s[t] < o && (l += 1)
            }
            return l
        }

        update() {
            const t = this;
            if (!t || t.destroyed) return;
            const {snapGrid: e, params: n} = t;

            function i() {
                const e = t.rtlTranslate ? -1 * t.translate : t.translate,
                    n = Math.min(Math.max(e, t.maxTranslate()), t.minTranslate());
                t.setTranslate(n), t.updateActiveIndex(), t.updateSlidesClasses()
            }

            let s;
            n.breakpoints && t.setBreakpoint(), t.updateSize(), t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.params.freeMode && t.params.freeMode.enabled ? (i(), t.params.autoHeight && t.updateAutoHeight()) : (s = ("auto" === t.params.slidesPerView || t.params.slidesPerView > 1) && t.isEnd && !t.params.centeredSlides ? t.slideTo(t.slides.length - 1, 0, !1, !0) : t.slideTo(t.activeIndex, 0, !1, !0), s || i()), n.watchOverflow && e !== t.snapGrid && t.checkOverflow(), t.emit("update")
        }

        changeDirection(t, e = !0) {
            const n = this, i = n.params.direction;
            return t || (t = "horizontal" === i ? "vertical" : "horizontal"), t === i || "horizontal" !== t && "vertical" !== t || (n.$el.removeClass(`${n.params.containerModifierClass}${i}`).addClass(`${n.params.containerModifierClass}${t}`), n.emitContainerClasses(), n.params.direction = t, n.slides.each(e => {
                "vertical" === t ? e.style.width = "" : e.style.height = ""
            }), n.emit("changeDirection"), e && n.update()), n
        }

        changeLanguageDirection(t) {
            const e = this;
            e.rtl && "rtl" === t || !e.rtl && "ltr" === t || (e.rtl = "rtl" === t, e.rtlTranslate = "horizontal" === e.params.direction && e.rtl, e.rtl ? (e.$el.addClass(e.params.containerModifierClass + "rtl"), e.el.dir = "rtl") : (e.$el.removeClass(e.params.containerModifierClass + "rtl"), e.el.dir = "ltr"), e.update())
        }

        mount(t) {
            const e = this;
            if (e.mounted) return !0;
            const n = P(t || e.params.el);
            if (!(t = n[0])) return !1;
            t.swiper = e;
            const i = () => "." + (e.params.wrapperClass || "").trim().split(" ").join(".");
            let s = (() => {
                if (t && t.shadowRoot && t.shadowRoot.querySelector) {
                    const e = P(t.shadowRoot.querySelector(i()));
                    return e.children = t => n.children(t), e
                }
                return n.children ? n.children(i()) : P(n).children(i())
            })();
            if (0 === s.length && e.params.createElements) {
                const t = m().createElement("div");
                s = P(t), t.className = e.params.wrapperClass, n.append(t), n.children("." + e.params.slideClass).each(t => {
                    s.append(t)
                })
            }
            return Object.assign(e, {
                $el: n,
                el: t,
                $wrapperEl: s,
                wrapperEl: s[0],
                mounted: !0,
                rtl: "rtl" === t.dir.toLowerCase() || "rtl" === n.css("direction"),
                rtlTranslate: "horizontal" === e.params.direction && ("rtl" === t.dir.toLowerCase() || "rtl" === n.css("direction")),
                wrongRTL: "-webkit-box" === s.css("display")
            }), !0
        }

        init(t) {
            const e = this;
            if (e.initialized) return e;
            return !1 === e.mount(t) || (e.emit("beforeInit"), e.params.breakpoints && e.setBreakpoint(), e.addClasses(), e.params.loop && e.loopCreate(), e.updateSize(), e.updateSlides(), e.params.watchOverflow && e.checkOverflow(), e.params.grabCursor && e.enabled && e.setGrabCursor(), e.params.preloadImages && e.preloadImages(), e.params.loop ? e.slideTo(e.params.initialSlide + e.loopedSlides, 0, e.params.runCallbacksOnInit, !1, !0) : e.slideTo(e.params.initialSlide, 0, e.params.runCallbacksOnInit, !1, !0), e.attachEvents(), e.initialized = !0, e.emit("init"), e.emit("afterInit")), e
        }

        destroy(t = !0, e = !0) {
            const n = this, {params: i, $el: s, $wrapperEl: r, slides: o} = n;
            return void 0 === n.params || n.destroyed || (n.emit("beforeDestroy"), n.initialized = !1, n.detachEvents(), i.loop && n.loopDestroy(), e && (n.removeClasses(), s.removeAttr("style"), r.removeAttr("style"), o && o.length && o.removeClass([i.slideVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), n.emit("destroy"), Object.keys(n.eventsListeners).forEach(t => {
                n.off(t)
            }), !1 !== t && (n.$el[0].swiper = null, function (t) {
                const e = t;
                Object.keys(e).forEach(t => {
                    try {
                        e[t] = null
                    } catch (t) {
                    }
                    try {
                        delete e[t]
                    } catch (t) {
                    }
                })
            }(n)), n.destroyed = !0), null
        }

        static extendDefaults(t) {
            k(et, t)
        }

        static get extendedDefaults() {
            return et
        }

        static get defaults() {
            return J
        }

        static installModule(t) {
            nt.prototype.__modules__ || (nt.prototype.__modules__ = []);
            const e = nt.prototype.__modules__;
            "function" == typeof t && e.indexOf(t) < 0 && e.push(t)
        }

        static use(t) {
            return Array.isArray(t) ? (t.forEach(t => nt.installModule(t)), nt) : (nt.installModule(t), nt)
        }
    }

    Object.keys(tt).forEach(t => {
        Object.keys(tt[t]).forEach(e => {
            nt.prototype[e] = tt[t][e]
        })
    }), nt.use([function ({swiper: t, on: e, emit: n}) {
        const i = b();
        let s = null, r = null;
        const o = () => {
            t && !t.destroyed && t.initialized && (n("beforeResize"), n("resize"))
        }, a = () => {
            t && !t.destroyed && t.initialized && n("orientationchange")
        };
        e("init", () => {
            t.params.resizeObserver && void 0 !== i.ResizeObserver ? t && !t.destroyed && t.initialized && (s = new ResizeObserver(e => {
                r = i.requestAnimationFrame(() => {
                    const {width: n, height: i} = t;
                    let s = n, r = i;
                    e.forEach(({contentBoxSize: e, contentRect: n, target: i}) => {
                        i && i !== t.el || (s = n ? n.width : (e[0] || e).inlineSize, r = n ? n.height : (e[0] || e).blockSize)
                    }), s === n && r === i || o()
                })
            }), s.observe(t.el)) : (i.addEventListener("resize", o), i.addEventListener("orientationchange", a))
        }), e("destroy", () => {
            r && i.cancelAnimationFrame(r), s && s.unobserve && t.el && (s.unobserve(t.el), s = null), i.removeEventListener("resize", o), i.removeEventListener("orientationchange", a)
        })
    }, function ({swiper: t, extendParams: e, on: n, emit: i}) {
        const s = [], r = b(), o = (t, e = {}) => {
            const n = new (r.MutationObserver || r.WebkitMutationObserver)(t => {
                if (1 === t.length) return void i("observerUpdate", t[0]);
                const e = function () {
                    i("observerUpdate", t[0])
                };
                r.requestAnimationFrame ? r.requestAnimationFrame(e) : r.setTimeout(e, 0)
            });
            n.observe(t, {
                attributes: void 0 === e.attributes || e.attributes,
                childList: void 0 === e.childList || e.childList,
                characterData: void 0 === e.characterData || e.characterData
            }), s.push(n)
        };
        e({observer: !1, observeParents: !1, observeSlideChildren: !1}), n("init", () => {
            if (t.params.observer) {
                if (t.params.observeParents) {
                    const e = t.$el.parents();
                    for (let t = 0; t < e.length; t += 1) o(e[t])
                }
                o(t.$el[0], {childList: t.params.observeSlideChildren}), o(t.$wrapperEl[0], {attributes: !1})
            }
        }), n("destroy", () => {
            s.forEach(t => {
                t.disconnect()
            }), s.splice(0, s.length)
        })
    }]);
    var it = nt;

    function st(t, e, n, i) {
        const s = m();
        return t.params.createElements && Object.keys(i).forEach(r => {
            if (!n[r] && !0 === n.auto) {
                let o = t.$el.children("." + i[r])[0];
                o || (o = s.createElement("div"), o.className = i[r], t.$el.append(o)), n[r] = o, e[r] = o
            }
        }), n
    }

    function rt(t = "") {
        return "." + t.trim().replace(/([\.:!\/])/g, "\\$1").replace(/ /g, ".")
    }

    function ot({swiper: t, extendParams: e, on: n, emit: i}) {
        const s = "swiper-pagination";
        let r;
        e({
            pagination: {
                el: null,
                bulletElement: "span",
                clickable: !1,
                hideOnClick: !1,
                renderBullet: null,
                renderProgressbar: null,
                renderFraction: null,
                renderCustom: null,
                progressbarOpposite: !1,
                type: "bullets",
                dynamicBullets: !1,
                dynamicMainBullets: 1,
                formatFractionCurrent: t => t,
                formatFractionTotal: t => t,
                bulletClass: s + "-bullet",
                bulletActiveClass: s + "-bullet-active",
                modifierClass: s + "-",
                currentClass: s + "-current",
                totalClass: s + "-total",
                hiddenClass: s + "-hidden",
                progressbarFillClass: s + "-progressbar-fill",
                progressbarOppositeClass: s + "-progressbar-opposite",
                clickableClass: s + "-clickable",
                lockClass: s + "-lock",
                horizontalClass: s + "-horizontal",
                verticalClass: s + "-vertical",
                paginationDisabledClass: s + "-disabled"
            }
        }), t.pagination = {el: null, $el: null, bullets: []};
        let o = 0;

        function a() {
            return !t.params.pagination.el || !t.pagination.el || !t.pagination.$el || 0 === t.pagination.$el.length
        }

        function l(e, n) {
            const {bulletActiveClass: i} = t.params.pagination;
            e[n]().addClass(`${i}-${n}`)[n]().addClass(`${i}-${n}-${n}`)
        }

        function c() {
            const e = t.rtl, n = t.params.pagination;
            if (a()) return;
            const s = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
                c = t.pagination.$el;
            let u;
            const d = t.params.loop ? Math.ceil((s - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length;
            if (t.params.loop ? (u = Math.ceil((t.activeIndex - t.loopedSlides) / t.params.slidesPerGroup), u > s - 1 - 2 * t.loopedSlides && (u -= s - 2 * t.loopedSlides), u > d - 1 && (u -= d), u < 0 && "bullets" !== t.params.paginationType && (u = d + u)) : u = void 0 !== t.snapIndex ? t.snapIndex : t.activeIndex || 0, "bullets" === n.type && t.pagination.bullets && t.pagination.bullets.length > 0) {
                const i = t.pagination.bullets;
                let s, a, d;
                if (n.dynamicBullets && (r = i.eq(0)[t.isHorizontal() ? "outerWidth" : "outerHeight"](!0), c.css(t.isHorizontal() ? "width" : "height", r * (n.dynamicMainBullets + 4) + "px"), n.dynamicMainBullets > 1 && void 0 !== t.previousIndex && (o += u - (t.previousIndex - t.loopedSlides || 0), o > n.dynamicMainBullets - 1 ? o = n.dynamicMainBullets - 1 : o < 0 && (o = 0)), s = Math.max(u - o, 0), a = s + (Math.min(i.length, n.dynamicMainBullets) - 1), d = (a + s) / 2), i.removeClass(["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(t => `${n.bulletActiveClass}${t}`).join(" ")), c.length > 1) i.each(t => {
                    const e = P(t), i = e.index();
                    i === u && e.addClass(n.bulletActiveClass), n.dynamicBullets && (i >= s && i <= a && e.addClass(n.bulletActiveClass + "-main"), i === s && l(e, "prev"), i === a && l(e, "next"))
                }); else {
                    const e = i.eq(u), r = e.index();
                    if (e.addClass(n.bulletActiveClass), n.dynamicBullets) {
                        const e = i.eq(s), o = i.eq(a);
                        for (let t = s; t <= a; t += 1) i.eq(t).addClass(n.bulletActiveClass + "-main");
                        if (t.params.loop) if (r >= i.length) {
                            for (let t = n.dynamicMainBullets; t >= 0; t -= 1) i.eq(i.length - t).addClass(n.bulletActiveClass + "-main");
                            i.eq(i.length - n.dynamicMainBullets - 1).addClass(n.bulletActiveClass + "-prev")
                        } else l(e, "prev"), l(o, "next"); else l(e, "prev"), l(o, "next")
                    }
                }
                if (n.dynamicBullets) {
                    const s = Math.min(i.length, n.dynamicMainBullets + 4), o = (r * s - r) / 2 - d * r,
                        a = e ? "right" : "left";
                    i.css(t.isHorizontal() ? a : "top", o + "px")
                }
            }
            if ("fraction" === n.type && (c.find(rt(n.currentClass)).text(n.formatFractionCurrent(u + 1)), c.find(rt(n.totalClass)).text(n.formatFractionTotal(d))), "progressbar" === n.type) {
                let e;
                e = n.progressbarOpposite ? t.isHorizontal() ? "vertical" : "horizontal" : t.isHorizontal() ? "horizontal" : "vertical";
                const i = (u + 1) / d;
                let s = 1, r = 1;
                "horizontal" === e ? s = i : r = i, c.find(rt(n.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${s}) scaleY(${r})`).transition(t.params.speed)
            }
            "custom" === n.type && n.renderCustom ? (c.html(n.renderCustom(t, u + 1, d)), i("paginationRender", c[0])) : i("paginationUpdate", c[0]), t.params.watchOverflow && t.enabled && c[t.isLocked ? "addClass" : "removeClass"](n.lockClass)
        }

        function u() {
            const e = t.params.pagination;
            if (a()) return;
            const n = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
                s = t.pagination.$el;
            let r = "";
            if ("bullets" === e.type) {
                let i = t.params.loop ? Math.ceil((n - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length;
                t.params.freeMode && t.params.freeMode.enabled && !t.params.loop && i > n && (i = n);
                for (let n = 0; n < i; n += 1) e.renderBullet ? r += e.renderBullet.call(t, n, e.bulletClass) : r += `<${e.bulletElement} class="${e.bulletClass}"></${e.bulletElement}>`;
                s.html(r), t.pagination.bullets = s.find(rt(e.bulletClass))
            }
            "fraction" === e.type && (r = e.renderFraction ? e.renderFraction.call(t, e.currentClass, e.totalClass) : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`, s.html(r)), "progressbar" === e.type && (r = e.renderProgressbar ? e.renderProgressbar.call(t, e.progressbarFillClass) : `<span class="${e.progressbarFillClass}"></span>`, s.html(r)), "custom" !== e.type && i("paginationRender", t.pagination.$el[0])
        }

        function d() {
            t.params.pagination = st(t, t.originalParams.pagination, t.params.pagination, {el: "swiper-pagination"});
            const e = t.params.pagination;
            if (!e.el) return;
            let n = P(e.el);
            0 !== n.length && (t.params.uniqueNavElements && "string" == typeof e.el && n.length > 1 && (n = t.$el.find(e.el), n.length > 1 && (n = n.filter(e => P(e).parents(".swiper")[0] === t.el))), "bullets" === e.type && e.clickable && n.addClass(e.clickableClass), n.addClass(e.modifierClass + e.type), n.addClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass), "bullets" === e.type && e.dynamicBullets && (n.addClass(`${e.modifierClass}${e.type}-dynamic`), o = 0, e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)), "progressbar" === e.type && e.progressbarOpposite && n.addClass(e.progressbarOppositeClass), e.clickable && n.on("click", rt(e.bulletClass), (function (e) {
                e.preventDefault();
                let n = P(this).index() * t.params.slidesPerGroup;
                t.params.loop && (n += t.loopedSlides), t.slideTo(n)
            })), Object.assign(t.pagination, {$el: n, el: n[0]}), t.enabled || n.addClass(e.lockClass))
        }

        function h() {
            const e = t.params.pagination;
            if (a()) return;
            const n = t.pagination.$el;
            n.removeClass(e.hiddenClass), n.removeClass(e.modifierClass + e.type), n.removeClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass), t.pagination.bullets && t.pagination.bullets.removeClass && t.pagination.bullets.removeClass(e.bulletActiveClass), e.clickable && n.off("click", rt(e.bulletClass))
        }

        n("init", () => {
            !1 === t.params.pagination.enabled ? p() : (d(), u(), c())
        }), n("activeIndexChange", () => {
            (t.params.loop || void 0 === t.snapIndex) && c()
        }), n("snapIndexChange", () => {
            t.params.loop || c()
        }), n("slidesLengthChange", () => {
            t.params.loop && (u(), c())
        }), n("snapGridLengthChange", () => {
            t.params.loop || (u(), c())
        }), n("destroy", () => {
            h()
        }), n("enable disable", () => {
            const {$el: e} = t.pagination;
            e && e[t.enabled ? "removeClass" : "addClass"](t.params.pagination.lockClass)
        }), n("lock unlock", () => {
            c()
        }), n("click", (e, n) => {
            const s = n.target, {$el: r} = t.pagination;
            if (t.params.pagination.el && t.params.pagination.hideOnClick && r && r.length > 0 && !P(s).hasClass(t.params.pagination.bulletClass)) {
                if (t.navigation && (t.navigation.nextEl && s === t.navigation.nextEl || t.navigation.prevEl && s === t.navigation.prevEl)) return;
                const e = r.hasClass(t.params.pagination.hiddenClass);
                i(!0 === e ? "paginationShow" : "paginationHide"), r.toggleClass(t.params.pagination.hiddenClass)
            }
        });
        const p = () => {
            t.$el.addClass(t.params.pagination.paginationDisabledClass), t.pagination.$el && t.pagination.$el.addClass(t.params.pagination.paginationDisabledClass), h()
        };
        Object.assign(t.pagination, {
            enable: () => {
                t.$el.removeClass(t.params.pagination.paginationDisabledClass), t.pagination.$el && t.pagination.$el.removeClass(t.params.pagination.paginationDisabledClass), d(), u(), c()
            }, disable: p, render: u, update: c, init: d, destroy: h
        })
    }

    const at = (t, e = 1e4) => (t = parseFloat(t + "") || 0, Math.round((t + Number.EPSILON) * e) / e),
        lt = function (t) {
            if (!(t && t instanceof Element && t.offsetParent)) return !1;
            const e = t.scrollHeight > t.clientHeight, n = window.getComputedStyle(t).overflowY,
                i = -1 !== n.indexOf("hidden"), s = -1 !== n.indexOf("visible");
            return e && !i && !s
        }, ct = function (t, e) {
            return !(!t || t === document.body || e && t === e) && (lt(t) ? t : ct(t.parentElement, e))
        }, ut = function (t) {
            var e = (new DOMParser).parseFromString(t, "text/html").body;
            if (e.childElementCount > 1) {
                for (var n = document.createElement("div"); e.firstChild;) n.appendChild(e.firstChild);
                return n
            }
            return e.firstChild
        }, dt = t => ("" + (t || "")).split(" ").filter(t => !!t), ht = (t, e, n) => {
            dt(e).forEach(e => {
                t && t.classList.toggle(e, n || !1)
            })
        };

    class pt {
        constructor(t) {
            Object.defineProperty(this, "pageX", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0
            }), Object.defineProperty(this, "pageY", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0
            }), Object.defineProperty(this, "clientX", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0
            }), Object.defineProperty(this, "clientY", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0
            }), Object.defineProperty(this, "id", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0
            }), Object.defineProperty(this, "time", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0
            }), Object.defineProperty(this, "nativePointer", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0
            }), this.nativePointer = t, this.pageX = t.pageX, this.pageY = t.pageY, this.clientX = t.clientX, this.clientY = t.clientY, this.id = self.Touch && t instanceof Touch ? t.identifier : -1, this.time = Date.now()
        }
    }

    const ft = {passive: !1};

    class gt {
        constructor(t, {
            start: e = (() => !0), move: n = (() => {
            }), end: i = (() => {
            })
        }) {
            Object.defineProperty(this, "element", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0
            }), Object.defineProperty(this, "startCallback", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0
            }), Object.defineProperty(this, "moveCallback", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0
            }), Object.defineProperty(this, "endCallback", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0
            }), Object.defineProperty(this, "currentPointers", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: []
            }), Object.defineProperty(this, "startPointers", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: []
            }), this.element = t, this.startCallback = e, this.moveCallback = n, this.endCallback = i;
            for (const t of ["onPointerStart", "onTouchStart", "onMove", "onTouchEnd", "onPointerEnd", "onWindowBlur"]) this[t] = this[t].bind(this);
            this.element.addEventListener("mousedown", this.onPointerStart, ft), this.element.addEventListener("touchstart", this.onTouchStart, ft), this.element.addEventListener("touchmove", this.onMove, ft), this.element.addEventListener("touchend", this.onTouchEnd), this.element.addEventListener("touchcancel", this.onTouchEnd)
        }

        onPointerStart(t) {
            if (!t.buttons || 0 !== t.button) return;
            const e = new pt(t);
            this.currentPointers.some(t => t.id === e.id) || this.triggerPointerStart(e, t) && (window.addEventListener("mousemove", this.onMove), window.addEventListener("mouseup", this.onPointerEnd), window.addEventListener("blur", this.onWindowBlur))
        }

        onTouchStart(t) {
            for (const e of Array.from(t.changedTouches || [])) this.triggerPointerStart(new pt(e), t);
            window.addEventListener("blur", this.onWindowBlur)
        }

        onMove(t) {
            const e = this.currentPointers.slice(),
                n = "changedTouches" in t ? Array.from(t.changedTouches || []).map(t => new pt(t)) : [new pt(t)],
                i = [];
            for (const t of n) {
                const e = this.currentPointers.findIndex(e => e.id === t.id);
                e < 0 || (i.push(t), this.currentPointers[e] = t)
            }
            i.length && this.moveCallback(t, this.currentPointers.slice(), e)
        }

        onPointerEnd(t) {
            t.buttons > 0 && 0 !== t.button || (this.triggerPointerEnd(t, new pt(t)), window.removeEventListener("mousemove", this.onMove), window.removeEventListener("mouseup", this.onPointerEnd), window.removeEventListener("blur", this.onWindowBlur))
        }

        onTouchEnd(t) {
            for (const e of Array.from(t.changedTouches || [])) this.triggerPointerEnd(t, new pt(e))
        }

        triggerPointerStart(t, e) {
            return !!this.startCallback(e, t, this.currentPointers.slice()) && (this.currentPointers.push(t), this.startPointers.push(t), !0)
        }

        triggerPointerEnd(t, e) {
            const n = this.currentPointers.findIndex(t => t.id === e.id);
            n < 0 || (this.currentPointers.splice(n, 1), this.startPointers.splice(n, 1), this.endCallback(t, e, this.currentPointers.slice()))
        }

        onWindowBlur() {
            this.clear()
        }

        clear() {
            for (; this.currentPointers.length;) {
                const t = this.currentPointers[this.currentPointers.length - 1];
                this.currentPointers.splice(this.currentPointers.length - 1, 1), this.startPointers.splice(this.currentPointers.length - 1, 1), this.endCallback(new Event("touchend", {
                    bubbles: !0,
                    cancelable: !0,
                    clientX: t.clientX,
                    clientY: t.clientY
                }), t, this.currentPointers.slice())
            }
        }

        stop() {
            this.element.removeEventListener("mousedown", this.onPointerStart, ft), this.element.removeEventListener("touchstart", this.onTouchStart, ft), this.element.removeEventListener("touchmove", this.onMove, ft), this.element.removeEventListener("touchend", this.onTouchEnd), this.element.removeEventListener("touchcancel", this.onTouchEnd), window.removeEventListener("mousemove", this.onMove), window.removeEventListener("mouseup", this.onPointerEnd), window.removeEventListener("blur", this.onWindowBlur)
        }
    }

    function mt(t, e) {
        return e ? Math.sqrt(Math.pow(e.clientX - t.clientX, 2) + Math.pow(e.clientY - t.clientY, 2)) : 0
    }

    function vt(t, e) {
        return e ? {clientX: (t.clientX + e.clientX) / 2, clientY: (t.clientY + e.clientY) / 2} : t
    }

    const bt = t => "object" == typeof t && null !== t && t.constructor === Object && "[object Object]" === Object.prototype.toString.call(t),
        yt = (t, ...e) => {
            const n = e.length;
            for (let i = 0; i < n; i++) {
                const n = e[i] || {};
                Object.entries(n).forEach(([e, n]) => {
                    const i = Array.isArray(n) ? [] : {};
                    t[e] || Object.assign(t, {[e]: i}), bt(n) ? Object.assign(t[e], yt(i, n)) : Array.isArray(n) ? Object.assign(t, {[e]: [...n]}) : Object.assign(t, {[e]: n})
                })
            }
            return t
        }, wt = function (t, e) {
            return t.split(".").reduce((t, e) => "object" == typeof t ? t[e] : void 0, e)
        };

    class xt {
        constructor(t = {}) {
            Object.defineProperty(this, "options", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: t
            }), Object.defineProperty(this, "events", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: new Map
            }), this.setOptions(t);
            for (const t of Object.getOwnPropertyNames(Object.getPrototypeOf(this))) t.startsWith("on") && "function" == typeof this[t] && (this[t] = this[t].bind(this))
        }

        setOptions(t) {
            this.options = t ? yt({}, this.constructor.defaults, t) : {};
            for (const [t, e] of Object.entries(this.option("on") || {})) this.on(t, e)
        }

        option(t, ...e) {
            let n = wt(t, this.options);
            return n && "function" == typeof n && (n = n.call(this, this, ...e)), n
        }

        optionFor(t, e, n, ...i) {
            let s = wt(e, t);
            var r;
            "string" != typeof (r = s) || isNaN(r) || isNaN(parseFloat(r)) || (s = parseFloat(s)), "true" === s && (s = !0), "false" === s && (s = !1), s && "function" == typeof s && (s = s.call(this, this, t, ...i));
            let o = wt(e, this.options);
            return o && "function" == typeof o ? s = o.call(this, this, t, ...i, s) : void 0 === s && (s = o), void 0 === s ? n : s
        }

        cn(t) {
            const e = this.options.classes;
            return e && e[t] || ""
        }

        localize(t, e = []) {
            t = String(t).replace(/\{\{(\w+).?(\w+)?\}\}/g, (t, e, n) => {
                let i = "";
                return n ? i = this.option(`${e[0] + e.toLowerCase().substring(1)}.l10n.${n}`) : e && (i = this.option("l10n." + e)), i || (i = t), i
            });
            for (let n = 0; n < e.length; n++) t = t.split(e[n][0]).join(e[n][1]);
            return t.replace(/\{\{(.*?)\}\}/g, (t, e) => e)
        }

        on(t, e) {
            let n = [];
            "string" == typeof t ? n = t.split(" ") : Array.isArray(t) && (n = t), this.events || (this.events = new Map), n.forEach(t => {
                let n = this.events.get(t);
                n || (this.events.set(t, []), n = []), n.includes(e) || n.push(e), this.events.set(t, n)
            })
        }

        off(t, e) {
            let n = [];
            "string" == typeof t ? n = t.split(" ") : Array.isArray(t) && (n = t), n.forEach(t => {
                const n = this.events.get(t);
                if (Array.isArray(n)) {
                    const t = n.indexOf(e);
                    t > -1 && n.splice(t, 1)
                }
            })
        }

        emit(t, ...e) {
            [...this.events.get(t) || []].forEach(t => t(this, ...e)), "*" !== t && this.emit("*", t, ...e)
        }
    }

    Object.defineProperty(xt, "version", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "5.0.24"
    }), Object.defineProperty(xt, "defaults", {enumerable: !0, configurable: !0, writable: !0, value: {}});

    class Ct extends xt {
        constructor(t = {}) {
            super(t), Object.defineProperty(this, "plugins", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: {}
            })
        }

        attachPlugins(t = {}) {
            const e = new Map;
            for (const [n, i] of Object.entries(t)) {
                const t = this.option(n), s = this.plugins[n];
                s || !1 === t ? s && !1 === t && (s.detach(), delete this.plugins[n]) : e.set(n, new i(this, t || {}))
            }
            for (const [t, n] of e) this.plugins[t] = n, n.attach()
        }

        detachPlugins(t) {
            t = t || Object.keys(this.plugins);
            for (const e of t) {
                const t = this.plugins[e];
                t && t.detach(), delete this.plugins[e]
            }
            return this.emit("detachPlugins"), this
        }
    }

    var St, Tt;
    (Tt = St || (St = {}))[Tt.Init = 0] = "Init", Tt[Tt.Error = 1] = "Error", Tt[Tt.Ready = 2] = "Ready", Tt[Tt.Panning = 3] = "Panning", Tt[Tt.Mousemove = 4] = "Mousemove", Tt[Tt.Destroy = 5] = "Destroy";
    const Et = ["a", "b", "c", "d", "e", "f"], Pt = {
            PANUP: "Move up",
            PANDOWN: "Move down",
            PANLEFT: "Move left",
            PANRIGHT: "Move right",
            ZOOMIN: "Zoom in",
            ZOOMOUT: "Zoom out",
            TOGGLEZOOM: "Toggle zoom level",
            TOGGLE1TO1: "Toggle zoom level",
            ITERATEZOOM: "Toggle zoom level",
            ROTATECCW: "Rotate counterclockwise",
            ROTATECW: "Rotate clockwise",
            FLIPX: "Flip horizontally",
            FLIPY: "Flip vertically",
            FITX: "Fit horizontally",
            FITY: "Fit vertically",
            RESET: "Reset",
            TOGGLEFS: "Toggle fullscreen"
        }, Mt = {
            content: null,
            width: "auto",
            height: "auto",
            panMode: "drag",
            touch: !0,
            dragMinThreshold: 3,
            lockAxis: !1,
            mouseMoveFactor: 1,
            mouseMoveFriction: .12,
            zoom: !0,
            pinchToZoom: !0,
            panOnlyZoomed: "auto",
            minScale: 1,
            maxScale: 2,
            friction: .25,
            dragFriction: .35,
            decelFriction: .05,
            click: "toggleZoom",
            dblClick: !1,
            wheel: "zoom",
            wheelLimit: 7,
            spinner: !0,
            bounds: "auto",
            infinite: !1,
            rubberband: !0,
            bounce: !0,
            maxVelocity: 75,
            transformParent: !1,
            classes: {
                content: "f-panzoom__content",
                isLoading: "is-loading",
                canZoomIn: "can-zoom_in",
                canZoomOut: "can-zoom_out",
                isDraggable: "is-draggable",
                isDragging: "is-dragging",
                inFullscreen: "in-fullscreen",
                htmlHasFullscreen: "with-panzoom-in-fullscreen"
            },
            l10n: Pt
        },
        Ot = '<div class="f-spinner"><svg viewBox="0 0 50 50"><circle cx="25" cy="25" r="20"></circle><circle cx="25" cy="25" r="20"></circle></svg></div>',
        Lt = t => t && null !== t && t instanceof Element && "nodeType" in t, _t = (t, e) => {
            t && dt(e).forEach(e => {
                t.classList.remove(e)
            })
        }, kt = (t, e) => {
            t && dt(e).forEach(e => {
                t.classList.add(e)
            })
        }, At = {a: 1, b: 0, c: 0, d: 1, e: 0, f: 0}, zt = 1e3, It = "mousemove", Rt = "drag", jt = "content";
    let Dt = null, $t = null;

    class Ft extends Ct {
        get isTouchDevice() {
            return null === $t && ($t = window.matchMedia("(hover: none)").matches), $t
        }

        get isMobile() {
            return null === Dt && (Dt = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)), Dt
        }

        get panMode() {
            return this.options.panMode !== It || this.isTouchDevice ? Rt : It
        }

        get panOnlyZoomed() {
            const t = this.options.panOnlyZoomed;
            return "auto" === t ? this.isTouchDevice : t
        }

        get isInfinite() {
            return this.option("infinite")
        }

        get angle() {
            return 180 * Math.atan2(this.current.b, this.current.a) / Math.PI || 0
        }

        get targetAngle() {
            return 180 * Math.atan2(this.target.b, this.target.a) / Math.PI || 0
        }

        get scale() {
            const {a: t, b: e} = this.current;
            return Math.sqrt(t * t + e * e) || 1
        }

        get targetScale() {
            const {a: t, b: e} = this.target;
            return Math.sqrt(t * t + e * e) || 1
        }

        get minScale() {
            return this.option("minScale") || 1
        }

        get fullScale() {
            const {contentRect: t} = this;
            return t.fullWidth / t.fitWidth || 1
        }

        get maxScale() {
            return this.fullScale * (this.option("maxScale") || 1) || 1
        }

        get coverScale() {
            const {containerRect: t, contentRect: e} = this,
                n = Math.max(t.height / e.fitHeight, t.width / e.fitWidth) || 1;
            return Math.min(this.fullScale, n)
        }

        get isScaling() {
            return Math.abs(this.targetScale - this.scale) > 1e-5 && !this.isResting
        }

        get isContentLoading() {
            const t = this.content;
            return !!(t && t instanceof HTMLImageElement) && !t.complete
        }

        get isResting() {
            if (this.isBouncingX || this.isBouncingY) return !1;
            for (const t of Et) {
                const e = "e" == t || "f" === t ? .001 : 1e-5;
                if (Math.abs(this.target[t] - this.current[t]) > e) return !1
            }
            return !(!this.ignoreBounds && !this.checkBounds().inBounds)
        }

        constructor(t, e = {}, n = {}) {
            var i;
            if (super(e), Object.defineProperty(this, "pointerTracker", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: null
            }), Object.defineProperty(this, "resizeObserver", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: null
            }), Object.defineProperty(this, "updateTimer", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: null
            }), Object.defineProperty(this, "clickTimer", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: null
            }), Object.defineProperty(this, "rAF", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: null
            }), Object.defineProperty(this, "isTicking", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: !1
            }), Object.defineProperty(this, "friction", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: 0
            }), Object.defineProperty(this, "ignoreBounds", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: !1
            }), Object.defineProperty(this, "isBouncingX", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: !1
            }), Object.defineProperty(this, "isBouncingY", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: !1
            }), Object.defineProperty(this, "clicks", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: 0
            }), Object.defineProperty(this, "trackingPoints", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: []
            }), Object.defineProperty(this, "pwt", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: 0
            }), Object.defineProperty(this, "cwd", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: 0
            }), Object.defineProperty(this, "pmme", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0
            }), Object.defineProperty(this, "state", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: St.Init
            }), Object.defineProperty(this, "isDragging", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: !1
            }), Object.defineProperty(this, "container", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0
            }), Object.defineProperty(this, "content", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0
            }), Object.defineProperty(this, "spinner", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: null
            }), Object.defineProperty(this, "containerRect", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: {width: 0, height: 0, innerWidth: 0, innerHeight: 0}
            }), Object.defineProperty(this, "contentRect", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    fullWidth: 0,
                    fullHeight: 0,
                    fitWidth: 0,
                    fitHeight: 0,
                    width: 0,
                    height: 0
                }
            }), Object.defineProperty(this, "dragStart", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: {x: 0, y: 0, top: 0, left: 0, time: 0}
            }), Object.defineProperty(this, "dragOffset", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: {x: 0, y: 0, time: 0}
            }), Object.defineProperty(this, "current", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: Object.assign({}, At)
            }), Object.defineProperty(this, "target", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: Object.assign({}, At)
            }), Object.defineProperty(this, "velocity", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: {a: 0, b: 0, c: 0, d: 0, e: 0, f: 0}
            }), Object.defineProperty(this, "lockedAxis", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: !1
            }), !t) throw new Error("Container Element Not Found");
            this.container = t, this.initContent(), this.attachPlugins(Object.assign(Object.assign({}, Ft.Plugins), n)), this.emit("attachPlugins"), this.emit("init");
            const s = this.content;
            if (s.addEventListener("load", this.onLoad), s.addEventListener("error", this.onError), this.isContentLoading) {
                if (this.option("spinner")) {
                    t.classList.add(this.cn("isLoading"));
                    const e = ut(Ot);
                    !t.contains(s) || s.parentElement instanceof HTMLPictureElement ? this.spinner = t.appendChild(e) : this.spinner = (null === (i = s.parentElement) || void 0 === i ? void 0 : i.insertBefore(e, s)) || null
                }
                this.emit("beforeLoad")
            } else queueMicrotask(() => {
                this.enable()
            })
        }

        initContent() {
            const {container: t} = this, e = this.cn(jt);
            let n = this.option(jt) || t.querySelector("." + e);
            if (n || (n = t.querySelector("img,picture") || t.firstElementChild, n && kt(n, e)), n instanceof HTMLPictureElement && (n = n.querySelector("img")), !n) throw new Error("No content found");
            this.content = n
        }

        onLoad() {
            const {spinner: t, container: e, state: n} = this;
            t && (t.remove(), this.spinner = null), this.option("spinner") && e.classList.remove(this.cn("isLoading")), this.emit("afterLoad"), n === St.Init ? this.enable() : this.updateMetrics()
        }

        onError() {
            this.state !== St.Destroy && (this.spinner && (this.spinner.remove(), this.spinner = null), this.stop(), this.detachEvents(), this.state = St.Error, this.emit("error"))
        }

        attachObserver() {
            var t;
            const e = () => {
                const {container: t, containerRect: e} = this;
                return Math.abs(e.width - t.getBoundingClientRect().width) > .1 || Math.abs(e.height - t.getBoundingClientRect().height) > .1
            };
            this.resizeObserver || void 0 === window.ResizeObserver || (this.resizeObserver = new ResizeObserver(() => {
                this.updateTimer || (e() ? (this.onResize(), this.isMobile && (this.updateTimer = setTimeout(() => {
                    e() && this.onResize(), this.updateTimer = null
                }, 500))) : this.updateTimer && (clearTimeout(this.updateTimer), this.updateTimer = null))
            })), null === (t = this.resizeObserver) || void 0 === t || t.observe(this.container)
        }

        detachObserver() {
            var t;
            null === (t = this.resizeObserver) || void 0 === t || t.disconnect()
        }

        attachEvents() {
            const {container: t} = this;
            t.addEventListener("click", this.onClick, {
                passive: !1,
                capture: !1
            }), t.addEventListener("wheel", this.onWheel, {passive: !1}), this.pointerTracker = new gt(t, {
                start: this.onPointerDown,
                move: this.onPointerMove,
                end: this.onPointerUp
            }), document.addEventListener(It, this.onMouseMove)
        }

        detachEvents() {
            var t;
            const {container: e} = this;
            e.removeEventListener("click", this.onClick, {
                passive: !1,
                capture: !1
            }), e.removeEventListener("wheel", this.onWheel, {passive: !1}), null === (t = this.pointerTracker) || void 0 === t || t.stop(), this.pointerTracker = null, document.removeEventListener(It, this.onMouseMove), document.removeEventListener("keydown", this.onKeydown, !0), this.clickTimer && (clearTimeout(this.clickTimer), this.clickTimer = null), this.updateTimer && (clearTimeout(this.updateTimer), this.updateTimer = null)
        }

        animate() {
            const t = this.friction;
            this.setTargetForce();
            const e = this.option("maxVelocity");
            for (const n of Et) t ? (this.velocity[n] *= 1 - t, e && !this.isScaling && (this.velocity[n] = Math.max(Math.min(this.velocity[n], e), -1 * e)), this.current[n] += this.velocity[n]) : this.current[n] = this.target[n];
            this.setTransform(), this.setEdgeForce(), !this.isResting || this.isDragging ? this.rAF = requestAnimationFrame(() => this.animate()) : this.stop("current")
        }

        setTargetForce() {
            for (const t of Et) "e" === t && this.isBouncingX || "f" === t && this.isBouncingY || (this.velocity[t] = (1 / (1 - this.friction) - 1) * (this.target[t] - this.current[t]))
        }

        checkBounds(t = 0, e = 0) {
            const {current: n} = this, i = n.e + t, s = n.f + e, r = this.getBounds(), {x: o, y: a} = r, l = o.min,
                c = o.max, u = a.min, d = a.max;
            let h = 0, p = 0;
            return l !== 1 / 0 && i < l ? h = l - i : c !== 1 / 0 && i > c && (h = c - i), u !== 1 / 0 && s < u ? p = u - s : d !== 1 / 0 && s > d && (p = d - s), Math.abs(h) < .001 && (h = 0), Math.abs(p) < .001 && (p = 0), Object.assign(Object.assign({}, r), {
                xDiff: h,
                yDiff: p,
                inBounds: !h && !p
            })
        }

        clampTargetBounds() {
            const {target: t} = this, {x: e, y: n} = this.getBounds();
            e.min !== 1 / 0 && (t.e = Math.max(t.e, e.min)), e.max !== 1 / 0 && (t.e = Math.min(t.e, e.max)), n.min !== 1 / 0 && (t.f = Math.max(t.f, n.min)), n.max !== 1 / 0 && (t.f = Math.min(t.f, n.max))
        }

        calculateContentDim(t = this.current) {
            const {content: e, contentRect: n} = this, {fitWidth: i, fitHeight: s, fullWidth: r, fullHeight: o} = n;
            let a = r, l = o;
            if (this.option("zoom") || 0 !== this.angle) {
                const n = !(e instanceof HTMLImageElement || "none" !== window.getComputedStyle(e).maxWidth && "none" !== window.getComputedStyle(e).maxHeight),
                    c = n ? r : i, u = n ? o : s, d = this.getMatrix(t), h = new DOMPoint(0, 0).matrixTransform(d),
                    p = new DOMPoint(0 + c, 0).matrixTransform(d), f = new DOMPoint(0 + c, 0 + u).matrixTransform(d),
                    g = new DOMPoint(0, 0 + u).matrixTransform(d), m = Math.abs(f.x - h.x), v = Math.abs(f.y - h.y),
                    b = Math.abs(g.x - p.x), y = Math.abs(g.y - p.y);
                a = Math.max(m, b), l = Math.max(v, y)
            }
            return {contentWidth: a, contentHeight: l}
        }

        setEdgeForce() {
            if (this.ignoreBounds || this.isDragging || this.panMode === It || this.targetScale < this.scale) return this.isBouncingX = !1, void (this.isBouncingY = !1);
            const {target: t} = this, {x: e, y: n, xDiff: i, yDiff: s} = this.checkBounds(),
                r = this.option("maxVelocity");
            let o = this.velocity.e, a = this.velocity.f;
            0 !== i ? (this.isBouncingX = !0, i * o <= 0 ? o += .14 * i : (o = .14 * i, e.min !== 1 / 0 && (this.target.e = Math.max(t.e, e.min)), e.max !== 1 / 0 && (this.target.e = Math.min(t.e, e.max))), r && (o = Math.max(Math.min(o, r), -1 * r))) : this.isBouncingX = !1, 0 !== s ? (this.isBouncingY = !0, s * a <= 0 ? a += .14 * s : (a = .14 * s, n.min !== 1 / 0 && (this.target.f = Math.max(t.f, n.min)), n.max !== 1 / 0 && (this.target.f = Math.min(t.f, n.max))), r && (a = Math.max(Math.min(a, r), -1 * r))) : this.isBouncingY = !1, this.isBouncingX && (this.velocity.e = o), this.isBouncingY && (this.velocity.f = a)
        }

        enable() {
            const {content: t} = this, e = new DOMMatrixReadOnly(window.getComputedStyle(t).transform);
            for (const t of Et) this.current[t] = this.target[t] = e[t];
            this.updateMetrics(), this.attachObserver(), this.attachEvents(), this.state = St.Ready, this.emit("ready")
        }

        onClick(t) {
            var e;
            this.isDragging && (null === (e = this.pointerTracker) || void 0 === e || e.clear(), this.trackingPoints = [], this.startDecelAnim());
            const n = t.target;
            if (!n || t.defaultPrevented) return;
            if (n.hasAttribute("disabled")) return t.preventDefault(), void t.stopPropagation();
            if ((() => {
                const t = window.getSelection();
                return t && "Range" === t.type
            })() && !n.closest("button")) return;
            const i = n.closest("[data-panzoom-action]"), s = n.closest("[data-panzoom-change]"), r = i || s,
                o = r && Lt(r) ? r.dataset : null;
            if (o) {
                const e = o.panzoomChange, n = o.panzoomAction;
                if ((e || n) && t.preventDefault(), e) {
                    let n = {};
                    try {
                        n = JSON.parse(e)
                    } catch (t) {
                        console && console.warn("The given data was not valid JSON")
                    }
                    return void this.applyChange(n)
                }
                if (n) return void (this[n] && this[n]())
            }
            if (Math.abs(this.dragOffset.x) > 3 || Math.abs(this.dragOffset.y) > 3) return t.preventDefault(), void t.stopPropagation();
            if (n.closest("[data-fancybox]")) return;
            const a = this.content.getBoundingClientRect(), l = this.dragStart;
            if (l.time && !this.canZoomOut() && (Math.abs(a.x - l.x) > 2 || Math.abs(a.y - l.y) > 2)) return;
            this.dragStart.time = 0;
            const c = e => {
                this.option("zoom", t) && e && "string" == typeof e && /(iterateZoom)|(toggle(Zoom|Full|Cover|Max)|(zoomTo(Fit|Cover|Max)))/.test(e) && "function" == typeof this[e] && (t.preventDefault(), this[e]({event: t}))
            }, u = this.option("click", t), d = this.option("dblClick", t);
            d ? (this.clicks++, 1 == this.clicks && (this.clickTimer = setTimeout(() => {
                1 === this.clicks ? (this.emit("click", t), !t.defaultPrevented && u && c(u)) : (this.emit("dblClick", t), t.defaultPrevented || c(d)), this.clicks = 0, this.clickTimer = null
            }, 350))) : (this.emit("click", t), !t.defaultPrevented && u && c(u))
        }

        addTrackingPoint(t) {
            const e = this.trackingPoints.filter(t => t.time > Date.now() - 100);
            e.push(t), this.trackingPoints = e
        }

        onPointerDown(t, e, n) {
            var i;
            if (!1 === this.option("touch", t)) return !1;
            this.pwt = 0, this.dragOffset = {x: 0, y: 0, time: 0}, this.trackingPoints = [];
            const s = this.content.getBoundingClientRect();
            if (this.dragStart = {
                x: s.x,
                y: s.y,
                top: s.top,
                left: s.left,
                time: Date.now()
            }, this.clickTimer) return !1;
            if (this.panMode === It && this.targetScale > 1) return t.preventDefault(), t.stopPropagation(), !1;
            const r = t.composedPath()[0];
            if (!n.length) {
                if (["TEXTAREA", "OPTION", "INPUT", "SELECT", "VIDEO", "IFRAME"].includes(r.nodeName) || r.closest("[contenteditable],[data-selectable],[data-draggable],[data-clickable],[data-panzoom-change],[data-panzoom-action]")) return !1;
                null === (i = window.getSelection()) || void 0 === i || i.removeAllRanges()
            }
            if ("mousedown" === t.type) ["A", "BUTTON"].includes(r.nodeName) || t.preventDefault(); else if (Math.abs(this.velocity.a) > .3) return !1;
            return this.target.e = this.current.e, this.target.f = this.current.f, this.stop(), this.isDragging || (this.isDragging = !0, this.addTrackingPoint(e), this.emit("touchStart", t)), !0
        }

        onPointerMove(t, e, n) {
            if (!1 === this.option("touch", t)) return;
            if (!this.isDragging) return;
            if (e.length < 2 && this.panOnlyZoomed && at(this.targetScale) <= at(this.minScale)) return;
            if (this.emit("touchMove", t), t.defaultPrevented) return;
            this.addTrackingPoint(e[0]);
            const {content: i} = this, s = vt(n[0], n[1]), r = vt(e[0], e[1]);
            let o = 0, a = 0;
            if (e.length > 1) {
                const t = i.getBoundingClientRect();
                o = s.clientX - t.left - .5 * t.width, a = s.clientY - t.top - .5 * t.height
            }
            const l = mt(n[0], n[1]), c = mt(e[0], e[1]);
            let u = l ? c / l : 1, d = r.clientX - s.clientX, h = r.clientY - s.clientY;
            this.dragOffset.x += d, this.dragOffset.y += h, this.dragOffset.time = Date.now() - this.dragStart.time;
            let p = at(this.targetScale) === at(this.minScale) && this.option("lockAxis");
            if (p && !this.lockedAxis) if ("xy" === p || "y" === p || "touchmove" === t.type) {
                if (Math.abs(this.dragOffset.x) < 6 && Math.abs(this.dragOffset.y) < 6) return void t.preventDefault();
                const e = Math.abs(180 * Math.atan2(this.dragOffset.y, this.dragOffset.x) / Math.PI);
                this.lockedAxis = e > 45 && e < 135 ? "y" : "x", this.dragOffset.x = 0, this.dragOffset.y = 0, d = 0, h = 0
            } else this.lockedAxis = p;
            if (ct(t.target, this.content) && (p = "x", this.dragOffset.y = 0), p && "xy" !== p && this.lockedAxis !== p && at(this.targetScale) === at(this.minScale)) return;
            t.cancelable && t.preventDefault(), this.container.classList.add(this.cn("isDragging"));
            const f = this.checkBounds(d, h);
            this.option("rubberband") ? ("x" !== this.isInfinite && (f.xDiff > 0 && d < 0 || f.xDiff < 0 && d > 0) && (d *= Math.max(0, .5 - Math.abs(.75 / this.contentRect.fitWidth * f.xDiff))), "y" !== this.isInfinite && (f.yDiff > 0 && h < 0 || f.yDiff < 0 && h > 0) && (h *= Math.max(0, .5 - Math.abs(.75 / this.contentRect.fitHeight * f.yDiff)))) : (f.xDiff && (d = 0), f.yDiff && (h = 0));
            const g = this.targetScale, m = this.minScale, v = this.maxScale;
            g < .5 * m && (u = Math.max(u, m)), g > 1.5 * v && (u = Math.min(u, v)), "y" === this.lockedAxis && at(g) === at(m) && (d = 0), "x" === this.lockedAxis && at(g) === at(m) && (h = 0), this.applyChange({
                originX: o,
                originY: a,
                panX: d,
                panY: h,
                scale: u,
                friction: this.option("dragFriction"),
                ignoreBounds: !0
            })
        }

        onPointerUp(t, e, n) {
            if (n.length) return this.dragOffset.x = 0, this.dragOffset.y = 0, void (this.trackingPoints = []);
            this.container.classList.remove(this.cn("isDragging")), this.isDragging && (this.addTrackingPoint(e), this.panOnlyZoomed && this.contentRect.width - this.contentRect.fitWidth < 1 && this.contentRect.height - this.contentRect.fitHeight < 1 && (this.trackingPoints = []), ct(t.target, this.content) && "y" === this.lockedAxis && (this.trackingPoints = []), this.emit("touchEnd", t), this.isDragging = !1, this.lockedAxis = !1, this.state !== St.Destroy && (t.defaultPrevented || this.startDecelAnim()))
        }

        startDecelAnim() {
            var t;
            const e = this.isScaling;
            this.rAF && (cancelAnimationFrame(this.rAF), this.rAF = null), this.isBouncingX = !1, this.isBouncingY = !1;
            for (const t of Et) this.velocity[t] = 0;
            this.target.e = this.current.e, this.target.f = this.current.f, _t(this.container, "is-scaling"), _t(this.container, "is-animating"), this.isTicking = !1;
            const {trackingPoints: n} = this, i = n[0], s = n[n.length - 1];
            let r = 0, o = 0, a = 0;
            s && i && (r = s.clientX - i.clientX, o = s.clientY - i.clientY, a = s.time - i.time);
            const l = (null === (t = window.visualViewport) || void 0 === t ? void 0 : t.scale) || 1;
            1 !== l && (r *= l, o *= l);
            let c = 0, u = 0, d = 0, h = 0, p = this.option("decelFriction");
            const f = this.targetScale;
            if (a > 0) {
                d = Math.abs(r) > 3 ? r / (a / 30) : 0, h = Math.abs(o) > 3 ? o / (a / 30) : 0;
                const t = this.option("maxVelocity");
                t && (d = Math.max(Math.min(d, t), -1 * t), h = Math.max(Math.min(h, t), -1 * t))
            }
            d && (c = d / (1 / (1 - p) - 1)), h && (u = h / (1 / (1 - p) - 1)), ("y" === this.option("lockAxis") || "xy" === this.option("lockAxis") && "y" === this.lockedAxis && at(f) === this.minScale) && (c = d = 0), ("x" === this.option("lockAxis") || "xy" === this.option("lockAxis") && "x" === this.lockedAxis && at(f) === this.minScale) && (u = h = 0);
            const g = this.dragOffset.x, m = this.dragOffset.y, v = this.option("dragMinThreshold") || 0;
            Math.abs(g) < v && Math.abs(m) < v && (c = u = 0, d = h = 0), (f < this.minScale - 1e-5 || f > this.maxScale + 1e-5 || e && !c && !u) && (p = .35), this.applyChange({
                panX: c,
                panY: u,
                friction: p
            }), this.emit("decel", d, h, g, m)
        }

        onWheel(t) {
            var e = [-t.deltaX || 0, -t.deltaY || 0, -t.detail || 0].reduce((function (t, e) {
                return Math.abs(e) > Math.abs(t) ? e : t
            }));
            const n = Math.max(-1, Math.min(1, e));
            if (this.emit("wheel", t, n), this.panMode === It) return;
            if (t.defaultPrevented) return;
            const i = this.option("wheel");
            "pan" === i ? (t.preventDefault(), this.panOnlyZoomed && !this.canZoomOut() || this.applyChange({
                panX: 2 * -t.deltaX,
                panY: 2 * -t.deltaY,
                bounce: !1
            })) : "zoom" === i && !1 !== this.option("zoom") && this.zoomWithWheel(t)
        }

        onMouseMove(t) {
            this.panWithMouse(t)
        }

        onKeydown(t) {
            "Escape" === t.key && this.toggleFS()
        }

        onResize() {
            this.updateMetrics(), this.checkBounds().inBounds || this.requestTick()
        }

        setTransform() {
            this.emit("beforeTransform");
            const {current: t, target: e, content: n, contentRect: i} = this, s = Object.assign({}, At);
            for (const n of Et) {
                const i = "e" == n || "f" === n ? zt : 1e5;
                s[n] = at(t[n], i), Math.abs(e[n] - t[n]) < ("e" == n || "f" === n ? .51 : .001) && (t[n] = e[n])
            }
            let {a: r, b: o, c: a, d: l, e: c, f: u} = s, d = `matrix(${r}, ${o}, ${a}, ${l}, ${c}, ${u})`,
                h = n.parentElement instanceof HTMLPictureElement ? n.parentElement : n;
            if (this.option("transformParent") && (h = h.parentElement || h), h.style.transform === d) return;
            h.style.transform = d;
            const {contentWidth: p, contentHeight: f} = this.calculateContentDim();
            i.width = p, i.height = f, this.emit("afterTransform")
        }

        updateMetrics(t = !1) {
            var e;
            if (!this || this.state === St.Destroy) return;
            if (this.isContentLoading) return;
            const n = Math.max(1, (null === (e = window.visualViewport) || void 0 === e ? void 0 : e.scale) || 1), {
                    container: i,
                    content: s
                } = this, r = s instanceof HTMLImageElement, o = i.getBoundingClientRect(),
                a = getComputedStyle(this.container);
            let l = o.width * n, c = o.height * n;
            const u = parseFloat(a.paddingTop) + parseFloat(a.paddingBottom),
                d = l - (parseFloat(a.paddingLeft) + parseFloat(a.paddingRight)), h = c - u;
            this.containerRect = {width: l, height: c, innerWidth: d, innerHeight: h};
            let p = this.option("width") || "auto", f = this.option("height") || "auto";
            "auto" === p && (p = parseFloat(s.dataset.width || "") || (t => {
                let e = 0;
                return e = t instanceof HTMLImageElement ? t.naturalWidth : t instanceof SVGElement ? t.width.baseVal.value : Math.max(t.offsetWidth, t.scrollWidth), e || 0
            })(s)), "auto" === f && (f = parseFloat(s.dataset.height || "") || (t => {
                let e = 0;
                return e = t instanceof HTMLImageElement ? t.naturalHeight : t instanceof SVGElement ? t.height.baseVal.value : Math.max(t.offsetHeight, t.scrollHeight), e || 0
            })(s));
            let g = s.parentElement instanceof HTMLPictureElement ? s.parentElement : s;
            this.option("transformParent") && (g = g.parentElement || g);
            const m = g.getAttribute("style") || "";
            g.style.setProperty("transform", "none", "important"), r && (g.style.width = "", g.style.height = ""), g.offsetHeight;
            const v = s.getBoundingClientRect();
            let b = v.width * n, y = v.height * n, w = 0, x = 0;
            r && (Math.abs(p - b) > 1 || Math.abs(f - y) > 1) && ({
                width: b,
                height: y,
                top: w,
                left: x
            } = ((t, e, n, i) => {
                const s = n / i;
                return s > t / e ? (n = t, i = t / s) : (n = e * s, i = e), {
                    width: n,
                    height: i,
                    top: .5 * (e - i),
                    left: .5 * (t - n)
                }
            })(b, y, p, f)), this.contentRect = Object.assign(Object.assign({}, this.contentRect), {
                top: v.top - o.top + w,
                bottom: o.bottom - v.bottom + w,
                left: v.left - o.left + x,
                right: o.right - v.right + x,
                fitWidth: b,
                fitHeight: y,
                width: b,
                height: y,
                fullWidth: p,
                fullHeight: f
            }), g.style.cssText = m, r && (g.style.width = b + "px", g.style.height = y + "px"), this.setTransform(), !0 !== t && this.emit("refresh"), this.ignoreBounds || (at(this.targetScale) < at(this.minScale) ? this.zoomTo(this.minScale, {friction: 0}) : this.targetScale > this.maxScale ? this.zoomTo(this.maxScale, {friction: 0}) : this.state === St.Init || this.checkBounds().inBounds || this.requestTick()), this.updateControls()
        }

        getBounds() {
            const t = this.option("bounds");
            if ("auto" !== t) return t;
            const {contentWidth: e, contentHeight: n} = this.calculateContentDim(this.target);
            let i = 0, s = 0, r = 0, o = 0;
            const a = this.option("infinite");
            if (!0 === a || this.lockedAxis && a === this.lockedAxis) i = -1 / 0, r = 1 / 0, s = -1 / 0, o = 1 / 0; else {
                let {containerRect: t, contentRect: a} = this, l = at(this.contentRect.fitWidth * this.targetScale, zt),
                    c = at(this.contentRect.fitHeight * this.targetScale, zt), {innerWidth: u, innerHeight: d} = t;
                if (this.containerRect.width === l && (u = t.width), this.containerRect.width === c && (d = t.height), e > u) {
                    r = .5 * (e - u), i = -1 * r;
                    let t = .5 * (a.right - a.left);
                    i += t, r += t
                }
                if (this.contentRect.fitWidth > u && e < u && (i -= .5 * (this.contentRect.fitWidth - u), r -= .5 * (this.contentRect.fitWidth - u)), n > d) {
                    o = .5 * (n - d), s = -1 * o;
                    let t = .5 * (a.bottom - a.top);
                    s += t, o += t
                }
                this.contentRect.fitHeight > d && n < d && (i -= .5 * (this.contentRect.fitHeight - d), r -= .5 * (this.contentRect.fitHeight - d))
            }
            return {x: {min: i, max: r}, y: {min: s, max: o}}
        }

        updateControls() {
            const t = this, e = t.container, {
                panMode: n,
                contentRect: i,
                fullScale: s,
                targetScale: r,
                coverScale: o,
                maxScale: a,
                minScale: l
            } = t;
            let c = {
                    toggleMax: r - l < .5 * (a - l) ? a : l,
                    toggleCover: r - l < .5 * (o - l) ? o : l,
                    toggleZoom: r - l < .5 * (s - l) ? s : l
                }[t.option("click") || ""] || l, u = t.canZoomIn(), d = t.canZoomOut(),
                h = n === Rt && !!this.option("touch"), p = d && h;
            if (h && (at(r) < at(l) && !this.panOnlyZoomed && (p = !0), (at(i.width, 1) > at(i.fitWidth, 1) || at(i.height, 1) > at(i.fitHeight, 1)) && (p = !0)), at(i.width * r, 1) < at(i.fitWidth, 1) && (p = !1), n === It && (p = !1), ht(e, this.cn("isDraggable"), p), !this.option("zoom")) return;
            let f = u && at(c) > at(r), g = !f && !p && d && at(c) < at(r);
            ht(e, this.cn("canZoomIn"), f), ht(e, this.cn("canZoomOut"), g);
            for (const t of e.querySelectorAll('[data-panzoom-action="zoomIn"]')) u ? (t.removeAttribute("disabled"), t.removeAttribute("tabindex")) : (t.setAttribute("disabled", ""), t.setAttribute("tabindex", "-1"));
            for (const t of e.querySelectorAll('[data-panzoom-action="zoomOut"]')) d ? (t.removeAttribute("disabled"), t.removeAttribute("tabindex")) : (t.setAttribute("disabled", ""), t.setAttribute("tabindex", "-1"));
            for (const t of e.querySelectorAll('[data-panzoom-action="toggleZoom"],[data-panzoom-action="iterateZoom"]')) {
                u || d ? (t.removeAttribute("disabled"), t.removeAttribute("tabindex")) : (t.setAttribute("disabled", ""), t.setAttribute("tabindex", "-1"));
                const e = t.querySelector("g");
                e && (e.style.display = u ? "" : "none")
            }
        }

        panTo({
                  x: t = this.target.e,
                  y: e = this.target.f,
                  scale: n = this.targetScale,
                  friction: i = this.option("friction"),
                  angle: s = 0,
                  originX: r = 0,
                  originY: o = 0,
                  flipX: a = !1,
                  flipY: l = !1,
                  ignoreBounds: c = !1
              }) {
            this.state !== St.Destroy && this.applyChange({
                panX: t - this.target.e,
                panY: e - this.target.f,
                scale: n / this.targetScale,
                angle: s,
                originX: r,
                originY: o,
                friction: i,
                flipX: a,
                flipY: l,
                ignoreBounds: c
            })
        }

        applyChange({
                        panX: t = 0,
                        panY: e = 0,
                        scale: n = 1,
                        angle: i = 0,
                        originX: s = -this.current.e,
                        originY: r = -this.current.f,
                        friction: o = this.option("friction"),
                        flipX: a = !1,
                        flipY: l = !1,
                        ignoreBounds: c = !1,
                        bounce: u = this.option("bounce")
                    }) {
            const d = this.state;
            if (d === St.Destroy) return;
            this.rAF && (cancelAnimationFrame(this.rAF), this.rAF = null), this.friction = o || 0, this.ignoreBounds = c;
            const {current: h} = this, p = h.e, f = h.f, g = this.getMatrix(this.target);
            let m = (new DOMMatrix).translate(p, f).translate(s, r).translate(t, e);
            if (this.option("zoom")) {
                if (!c) {
                    const t = this.targetScale, e = this.minScale, i = this.maxScale;
                    t * n < e && (n = e / t), t * n > i && (n = i / t)
                }
                m = m.scale(n)
            }
            m = m.translate(-s, -r).translate(-p, -f).multiply(g), i && (m = m.rotate(i)), a && (m = m.scale(-1, 1)), l && (m = m.scale(1, -1));
            for (const t of Et) "e" !== t && "f" !== t && (m[t] > this.minScale + 1e-5 || m[t] < this.minScale - 1e-5) ? this.target[t] = m[t] : this.target[t] = at(m[t], zt);
            (this.targetScale < this.scale || Math.abs(n - 1) > .1 || this.panMode === It || !1 === u) && !c && this.clampTargetBounds(), d === St.Init ? this.animate() : this.isResting || (this.state = St.Panning, this.requestTick())
        }

        stop(t = !1) {
            if (this.state === St.Init || this.state === St.Destroy) return;
            const e = this.isTicking;
            this.rAF && (cancelAnimationFrame(this.rAF), this.rAF = null), this.isBouncingX = !1, this.isBouncingY = !1;
            for (const e of Et) this.velocity[e] = 0, "current" === t ? this.current[e] = this.target[e] : "target" === t && (this.target[e] = this.current[e]);
            this.setTransform(), _t(this.container, "is-scaling"), _t(this.container, "is-animating"), this.isTicking = !1, this.state = St.Ready, e && (this.emit("endAnimation"), this.updateControls())
        }

        requestTick() {
            this.isTicking || (this.emit("startAnimation"), this.updateControls(), kt(this.container, "is-animating"), this.isScaling && kt(this.container, "is-scaling")), this.isTicking = !0, this.rAF || (this.rAF = requestAnimationFrame(() => this.animate()))
        }

        panWithMouse(t, e = this.option("mouseMoveFriction")) {
            if (this.pmme = t, this.panMode !== It || !t) return;
            if (at(this.targetScale) <= at(this.minScale)) return;
            this.emit("mouseMove", t);
            const {container: n, containerRect: i, contentRect: s} = this, r = i.width, o = i.height,
                a = n.getBoundingClientRect(), l = (t.clientX || 0) - a.left, c = (t.clientY || 0) - a.top;
            let {contentWidth: u, contentHeight: d} = this.calculateContentDim(this.target);
            const h = this.option("mouseMoveFactor");
            h > 1 && (u !== r && (u *= h), d !== o && (d *= h));
            let p = .5 * (u - r) - l / r * 100 / 100 * (u - r);
            p += .5 * (s.right - s.left);
            let f = .5 * (d - o) - c / o * 100 / 100 * (d - o);
            f += .5 * (s.bottom - s.top), this.applyChange({
                panX: p - this.target.e,
                panY: f - this.target.f,
                friction: e
            })
        }

        zoomWithWheel(t) {
            if (this.state === St.Destroy || this.state === St.Init) return;
            const e = Date.now();
            if (e - this.pwt < 45) return void t.preventDefault();
            this.pwt = e;
            var n = [-t.deltaX || 0, -t.deltaY || 0, -t.detail || 0].reduce((function (t, e) {
                return Math.abs(e) > Math.abs(t) ? e : t
            }));
            const i = Math.max(-1, Math.min(1, n)), {targetScale: s, maxScale: r, minScale: o} = this;
            let a = s * (100 + 45 * i) / 100;
            at(a) < at(o) && at(s) <= at(o) ? (this.cwd += Math.abs(i), a = o) : at(a) > at(r) && at(s) >= at(r) ? (this.cwd += Math.abs(i), a = r) : (this.cwd = 0, a = Math.max(Math.min(a, r), o)), this.cwd > this.option("wheelLimit") || (t.preventDefault(), at(a) !== at(s) && this.zoomTo(a, {event: t}))
        }

        canZoomIn() {
            return this.option("zoom") && (at(this.contentRect.width, 1) < at(this.contentRect.fitWidth, 1) || at(this.targetScale) < at(this.maxScale))
        }

        canZoomOut() {
            return this.option("zoom") && at(this.targetScale) > at(this.minScale)
        }

        zoomIn(t = 1.25, e) {
            this.zoomTo(this.targetScale * t, e)
        }

        zoomOut(t = .8, e) {
            this.zoomTo(this.targetScale * t, e)
        }

        zoomToFit(t) {
            this.zoomTo("fit", t)
        }

        zoomToCover(t) {
            this.zoomTo("cover", t)
        }

        zoomToFull(t) {
            this.zoomTo("full", t)
        }

        zoomToMax(t) {
            this.zoomTo("max", t)
        }

        toggleZoom(t) {
            this.zoomTo(this.targetScale - this.minScale < .5 * (this.fullScale - this.minScale) ? "full" : "fit", t)
        }

        toggleMax(t) {
            this.zoomTo(this.targetScale - this.minScale < .5 * (this.maxScale - this.minScale) ? "max" : "fit", t)
        }

        toggleCover(t) {
            this.zoomTo(this.targetScale - this.minScale < .5 * (this.coverScale - this.minScale) ? "cover" : "fit", t)
        }

        iterateZoom(t) {
            this.zoomTo("next", t)
        }

        zoomTo(t = 1, {friction: e = "auto", originX: n = "auto", originY: i = "auto", event: s} = {}) {
            if (this.isContentLoading || this.state === St.Destroy) return;
            const {targetScale: r} = this;
            this.stop();
            let o = 1;
            if (this.panMode === It && (s = this.pmme || s), s || "auto" === n || "auto" === i) {
                const t = this.content.getBoundingClientRect(), e = this.container.getBoundingClientRect(),
                    r = s ? s.clientX : e.left + .5 * e.width, o = s ? s.clientY : e.top + .5 * e.height;
                n = r - t.left - .5 * t.width, i = o - t.top - .5 * t.height
            }
            const a = this.fullScale, l = this.maxScale;
            let c = this.coverScale;
            "number" == typeof t ? o = t / r : ("next" === t && (a - c < .2 && (c = a), t = r < a - 1e-5 ? "full" : r < l - 1e-5 ? "max" : "fit"), o = "full" === t ? a / r || 1 : "cover" === t ? c / r || 1 : "max" === t ? l / r || 1 : 1 / r || 1), e = "auto" === e ? o > 1 ? .15 : .25 : e, this.applyChange({
                scale: o,
                originX: n,
                originY: i,
                friction: e
            }), s && this.panMode === It && this.panWithMouse(s, e)
        }

        rotateCCW() {
            this.applyChange({angle: -90})
        }

        rotateCW() {
            this.applyChange({angle: 90})
        }

        flipX() {
            this.applyChange({flipX: !0})
        }

        flipY() {
            this.applyChange({flipY: !0})
        }

        fitX() {
            this.stop("target");
            const {containerRect: t, contentRect: e, target: n} = this;
            this.applyChange({
                panX: .5 * t.width - (e.left + .5 * e.fitWidth) - n.e,
                panY: .5 * t.height - (e.top + .5 * e.fitHeight) - n.f,
                scale: t.width / e.fitWidth / this.targetScale,
                originX: 0,
                originY: 0,
                ignoreBounds: !0
            })
        }

        fitY() {
            this.stop("target");
            const {containerRect: t, contentRect: e, target: n} = this;
            this.applyChange({
                panX: .5 * t.width - (e.left + .5 * e.fitWidth) - n.e,
                panY: .5 * t.innerHeight - (e.top + .5 * e.fitHeight) - n.f,
                scale: t.height / e.fitHeight / this.targetScale,
                originX: 0,
                originY: 0,
                ignoreBounds: !0
            })
        }

        toggleFS() {
            const {container: t} = this, e = this.cn("inFullscreen"), n = this.cn("htmlHasFullscreen");
            t.classList.toggle(e);
            const i = t.classList.contains(e);
            i ? (document.documentElement.classList.add(n), document.addEventListener("keydown", this.onKeydown, !0)) : (document.documentElement.classList.remove(n), document.removeEventListener("keydown", this.onKeydown, !0)), this.updateMetrics(), this.emit(i ? "enterFS" : "exitFS")
        }

        getMatrix(t = this.current) {
            const {a: e, b: n, c: i, d: s, e: r, f: o} = t;
            return new DOMMatrix([e, n, i, s, r, o])
        }

        reset(t) {
            if (this.state !== St.Init && this.state !== St.Destroy) {
                this.stop("current");
                for (const t of Et) this.target[t] = At[t];
                this.target.a = this.minScale, this.target.d = this.minScale, this.clampTargetBounds(), this.isResting || (this.friction = void 0 === t ? this.option("friction") : t, this.state = St.Panning, this.requestTick())
            }
        }

        destroy() {
            this.stop(), this.state = St.Destroy, this.detachEvents(), this.detachObserver();
            const {container: t, content: e} = this, n = this.option("classes") || {};
            for (const e of Object.values(n)) t.classList.remove(e + "");
            e && (e.removeEventListener("load", this.onLoad), e.removeEventListener("error", this.onError)), this.detachPlugins()
        }
    }

    Object.defineProperty(Ft, "defaults", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: Mt
    }), Object.defineProperty(Ft, "Plugins", {enumerable: !0, configurable: !0, writable: !0, value: {}});
    const Bt = function (t, e) {
        let n = !0;
        return (...i) => {
            n && (n = !1, t(...i), setTimeout(() => {
                n = !0
            }, e))
        }
    }, Nt = (t, e) => {
        let n = [];
        return t.childNodes.forEach(t => {
            t.nodeType !== Node.ELEMENT_NODE || e && !t.matches(e) || n.push(t)
        }), n
    };
    var Ht;
    !function (t) {
        t[t.Init = 0] = "Init", t[t.Ready = 1] = "Ready", t[t.Destroy = 2] = "Destroy"
    }(Ht || (Ht = {}));
    const Vt = t => {
        if ("string" == typeof t || t instanceof HTMLElement) t = {html: t}; else {
            const e = t.thumb;
            void 0 !== e && ("string" == typeof e && (t.thumbSrc = e), e instanceof HTMLImageElement && (t.thumbEl = e, t.thumbElSrc = e.src, t.thumbSrc = e.src), delete t.thumb)
        }
        return Object.assign({
            html: "",
            el: null,
            isDom: !1,
            class: "",
            customClass: "",
            index: -1,
            dim: 0,
            gap: 0,
            pos: 0,
            transition: !1
        }, t)
    }, Gt = (t = {}) => Object.assign({index: -1, slides: [], dim: 0, pos: -1}, t);

    class Wt extends xt {
        constructor(t, e) {
            super(e), Object.defineProperty(this, "instance", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: t
            })
        }

        attach() {
        }

        detach() {
        }
    }

    class qt extends Wt {
        constructor() {
            super(...arguments), Object.defineProperty(this, "isDynamic", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: !1
            }), Object.defineProperty(this, "list", {enumerable: !0, configurable: !0, writable: !0, value: null})
        }

        onRefresh() {
            this.refresh()
        }

        build() {
            let t = this.list;
            return t || (t = document.createElement("ul"), kt(t, this.cn("list")), t.setAttribute("role", "tablist"), this.instance.container.appendChild(t), kt(this.instance.container, this.cn("hasDots")), this.list = t), t
        }

        refresh() {
            var t;
            const e = this.instance.pages.length, n = Math.min(2, this.option("minCount")),
                i = Math.max(2e3, this.option("maxCount")), s = this.option("dynamicFrom");
            if (e < n || e > i) return void this.cleanup();
            const r = "number" == typeof s && e > 5 && e >= s,
                o = !this.list || this.isDynamic !== r || this.list.children.length !== e;
            o && this.cleanup();
            const a = this.build();
            if (ht(a, this.cn("isDynamic"), !!r), o) for (let t = 0; t < e; t++) a.append(this.createItem(t));
            let l, c = 0;
            for (const e of [...a.children]) {
                const n = c === this.instance.page;
                n && (l = e), ht(e, this.cn("isCurrent"), n), null === (t = e.children[0]) || void 0 === t || t.setAttribute("aria-selected", n ? "true" : "false");
                for (const t of ["isBeforePrev", "isPrev", "isNext", "isAfterNext"]) _t(e, this.cn(t));
                c++
            }
            if (l = l || a.firstChild, r && l) {
                const t = l.previousElementSibling, e = t && t.previousElementSibling;
                kt(t, this.cn("isPrev")), kt(e, this.cn("isBeforePrev"));
                const n = l.nextElementSibling, i = n && n.nextElementSibling;
                kt(n, this.cn("isNext")), kt(i, this.cn("isAfterNext"))
            }
            this.isDynamic = r
        }

        createItem(t = 0) {
            var e;
            const n = document.createElement("li");
            n.setAttribute("role", "presentation");
            const i = ut(this.instance.localize(this.option("dotTpl"), [["%d", t + 1]]).replace(/\%i/g, t + ""));
            return n.appendChild(i), null === (e = n.children[0]) || void 0 === e || e.setAttribute("role", "tab"), n
        }

        cleanup() {
            this.list && (this.list.remove(), this.list = null), this.isDynamic = !1, _t(this.instance.container, this.cn("hasDots"))
        }

        attach() {
            this.instance.on(["refresh", "change"], this.onRefresh)
        }

        detach() {
            this.instance.off(["refresh", "change"], this.onRefresh), this.cleanup()
        }
    }

    Object.defineProperty(qt, "defaults", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: {
            classes: {
                list: "f-carousel__dots",
                isDynamic: "is-dynamic",
                hasDots: "has-dots",
                dot: "f-carousel__dot",
                isBeforePrev: "is-before-prev",
                isPrev: "is-prev",
                isCurrent: "is-current",
                isNext: "is-next",
                isAfterNext: "is-after-next"
            },
            dotTpl: '<button type="button" data-carousel-page="%i" aria-label="{{GOTO}}"><span class="f-carousel__dot" aria-hidden="true"></span></button>',
            dynamicFrom: 11,
            maxCount: 1 / 0,
            minCount: 2
        }
    });
    const Xt = "disabled", Yt = "prev";

    class Ut extends Wt {
        constructor() {
            super(...arguments), Object.defineProperty(this, "container", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: null
            }), Object.defineProperty(this, "prev", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: null
            }), Object.defineProperty(this, "next", {enumerable: !0, configurable: !0, writable: !0, value: null})
        }

        onRefresh() {
            const t = this.instance, e = t.pages.length, n = t.page;
            if (e < 2) return void this.cleanup();
            this.build();
            let i = this.prev, s = this.next;
            i && s && (i.removeAttribute(Xt), s.removeAttribute(Xt), t.isInfinite || (n <= 0 && i.setAttribute(Xt, ""), n >= e - 1 && s.setAttribute(Xt, "")))
        }

        createButton(t) {
            const e = this.instance, n = document.createElement("button");
            n.setAttribute("tabindex", "0"), n.setAttribute("title", e.localize(`{{${t.toUpperCase()}}}`)), kt(n, this.cn("button") + " " + this.cn("next" === t ? "isNext" : "isPrev"));
            const i = e.isRTL ? "next" === t ? Yt : "next" : t;
            var s;
            return n.innerHTML = e.localize(this.option(i + "Tpl")), n.dataset["carousel" + (s = t, s ? s.match("^[a-z]") ? s.charAt(0).toUpperCase() + s.substring(1) : s : "")] = "true", n
        }

        build() {
            let t = this.container;
            t || (this.container = t = document.createElement("div"), kt(t, this.cn("container")), this.instance.container.appendChild(t)), this.next || (this.next = t.appendChild(this.createButton("next"))), this.prev || (this.prev = t.appendChild(this.createButton(Yt)))
        }

        cleanup() {
            this.prev && this.prev.remove(), this.next && this.next.remove(), this.container && this.container.remove(), this.prev = null, this.next = null, this.container = null
        }

        attach() {
            this.instance.on(["refresh", "change"], this.onRefresh)
        }

        detach() {
            this.instance.off(["refresh", "change"], this.onRefresh), this.cleanup()
        }
    }

    Object.defineProperty(Ut, "defaults", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: {
            classes: {container: "f-carousel__nav", button: "f-button", isNext: "is-next", isPrev: "is-prev"},
            nextTpl: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M9 3l9 9-9 9"/></svg>',
            prevTpl: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M15 3l-9 9 9 9"/></svg>'
        }
    });

    class Zt extends Wt {
        constructor() {
            super(...arguments), Object.defineProperty(this, "selectedIndex", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: null
            }), Object.defineProperty(this, "target", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: null
            }), Object.defineProperty(this, "nav", {enumerable: !0, configurable: !0, writable: !0, value: null})
        }

        addAsTargetFor(t) {
            this.target = this.instance, this.nav = t, this.attachEvents()
        }

        addAsNavFor(t) {
            this.nav = this.instance, this.target = t, this.attachEvents()
        }

        attachEvents() {
            this.nav && this.target && (this.nav.options.initialSlide = this.target.options.initialPage, this.nav.state === Ht.Ready ? this.onNavReady(this.nav) : this.nav.on("ready", this.onNavReady), this.target.state === Ht.Ready ? this.onTargetReady(this.target) : this.target.on("ready", this.onTargetReady))
        }

        onNavReady(t) {
            t.on("createSlide", this.onNavCreateSlide), t.on("Panzoom.click", this.onNavClick), t.on("Panzoom.touchEnd", this.onNavTouch), this.onTargetChange()
        }

        onTargetReady(t) {
            t.on("change", this.onTargetChange), t.on("Panzoom.refresh", this.onTargetChange), this.onTargetChange()
        }

        onNavClick(t, e, n) {
            this.onNavTouch(t, t.panzoom, n)
        }

        onNavTouch(t, e, n) {
            var i, s;
            if (Math.abs(e.dragOffset.x) > 3 || Math.abs(e.dragOffset.y) > 3) return;
            const r = n.target, {nav: o, target: a} = this;
            if (!o || !a || !r) return;
            const l = r.closest("[data-index]");
            if (n.stopPropagation(), n.preventDefault(), !l) return;
            const c = parseInt(l.dataset.index || "", 10) || 0, u = a.getPageForSlide(c), d = o.getPageForSlide(c);
            o.slideTo(d), a.slideTo(u, {friction: (null === (s = null === (i = this.nav) || void 0 === i ? void 0 : i.plugins) || void 0 === s ? void 0 : s.Sync.option("friction")) || 0}), this.markSelectedSlide(c)
        }

        onNavCreateSlide(t, e) {
            e.index === this.selectedIndex && this.markSelectedSlide(e.index)
        }

        onTargetChange() {
            const {target: t, nav: e} = this;
            if (!t || !e) return;
            if (e.state !== Ht.Ready || t.state !== Ht.Ready) return;
            const n = t.pages[t.page].slides[0].index, i = e.getPageForSlide(n);
            this.markSelectedSlide(n), e.slideTo(i, null === e.prevPage ? {friction: 0} : void 0)
        }

        markSelectedSlide(t) {
            const e = this.nav;
            e && e.state === Ht.Ready && (this.selectedIndex = t, [...e.slides].map(e => {
                e.el && e.el.classList[e.index === t ? "add" : "remove"]("is-nav-selected")
            }))
        }

        attach() {
            const t = this;
            let e = t.options.target, n = t.options.nav;
            e ? t.addAsNavFor(e) : n && t.addAsTargetFor(n)
        }

        detach() {
            const t = this, e = t.nav, n = t.target;
            e && (e.off("ready", t.onNavReady), e.off("createSlide", t.onNavCreateSlide), e.off("Panzoom.click", t.onNavClick), e.off("Panzoom.touchEnd", t.onNavTouch)), t.nav = null, n && (n.off("ready", t.onTargetReady), n.off("refresh", t.onTargetChange), n.off("change", t.onTargetChange)), t.target = null
        }
    }

    Object.defineProperty(Zt, "defaults", {enumerable: !0, configurable: !0, writable: !0, value: {friction: .35}});
    const Kt = {Navigation: Ut, Dots: qt, Sync: Zt};

    class Jt extends Ct {
        get axis() {
            return this.isHorizontal ? "e" : "f"
        }

        get isEnabled() {
            return this.state === Ht.Ready
        }

        get isInfinite() {
            let t = !1;
            const {contentDim: e, viewportDim: n, pages: i, slides: s} = this;
            return i.length >= 2 && e + s[0].dim >= n && (t = this.option("infinite")), t
        }

        get isRTL() {
            return "rtl" === this.option("direction")
        }

        get isHorizontal() {
            return "x" === this.option("axis")
        }

        constructor(t, e = {}, n = {}) {
            if (super(), Object.defineProperty(this, "bp", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: ""
            }), Object.defineProperty(this, "lp", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: 0
            }), Object.defineProperty(this, "userOptions", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: {}
            }), Object.defineProperty(this, "userPlugins", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: {}
            }), Object.defineProperty(this, "state", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: Ht.Init
            }), Object.defineProperty(this, "page", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: 0
            }), Object.defineProperty(this, "prevPage", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: null
            }), Object.defineProperty(this, "container", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0
            }), Object.defineProperty(this, "viewport", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: null
            }), Object.defineProperty(this, "track", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: null
            }), Object.defineProperty(this, "slides", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: []
            }), Object.defineProperty(this, "pages", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: []
            }), Object.defineProperty(this, "panzoom", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: null
            }), Object.defineProperty(this, "inTransition", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: new Set
            }), Object.defineProperty(this, "contentDim", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: 0
            }), Object.defineProperty(this, "viewportDim", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: 0
            }), "string" == typeof t && (t = document.querySelector(t)), !t || !Lt(t)) throw new Error("No Element found");
            this.container = t, this.slideNext = Bt(this.slideNext.bind(this), 150), this.slidePrev = Bt(this.slidePrev.bind(this), 150), this.userOptions = e, this.userPlugins = n, queueMicrotask(() => {
                this.processOptions()
            })
        }

        processOptions() {
            const t = yt({}, Jt.defaults, this.userOptions);
            let e = "";
            const n = t.breakpoints;
            if (n && bt(n)) for (const [i, s] of Object.entries(n)) window.matchMedia(i).matches && bt(s) && (e += i, yt(t, s));
            e === this.bp && this.state !== Ht.Init || (this.bp = e, this.state === Ht.Ready && (t.initialSlide = this.pages[this.page].slides[0].index), this.state !== Ht.Init && this.destroy(), super.setOptions(t), !1 === this.option("enabled") ? this.attachEvents() : setTimeout(() => {
                this.init()
            }, 0))
        }

        init() {
            this.state = Ht.Init, this.emit("init"), this.attachPlugins(Object.assign(Object.assign({}, Jt.Plugins), this.userPlugins)), this.emit("attachPlugins"), this.initLayout(), this.initSlides(), this.updateMetrics(), this.setInitialPosition(), this.initPanzoom(), this.attachEvents(), this.state = Ht.Ready, this.emit("ready")
        }

        initLayout() {
            const {container: t} = this, e = this.option("classes");
            kt(t, this.cn("container")), ht(t, e.isLTR, !this.isRTL), ht(t, e.isRTL, this.isRTL), ht(t, e.isVertical, !this.isHorizontal), ht(t, e.isHorizontal, this.isHorizontal);
            let n = this.option("viewport") || t.querySelector("." + e.viewport);
            n || (n = document.createElement("div"), kt(n, e.viewport), n.append(...Nt(t, "." + e.slide)), t.prepend(n));
            let i = this.option("track") || t.querySelector("." + e.track);
            i || (i = document.createElement("div"), kt(i, e.track), i.append(...Array.from(n.childNodes))), i.setAttribute("aria-live", "polite"), n.contains(i) || n.prepend(i), this.viewport = n, this.track = i, this.emit("initLayout")
        }

        initSlides() {
            const {track: t} = this;
            if (t) {
                this.slides = [], [...Nt(t, "." + this.cn("slide"))].forEach(t => {
                    if (Lt(t)) {
                        const e = Vt({el: t, isDom: !0, index: this.slides.length});
                        this.slides.push(e), this.emit("initSlide", e, this.slides.length)
                    }
                });
                for (let t of this.option("slides", [])) {
                    const e = Vt(t);
                    e.index = this.slides.length, this.slides.push(e), this.emit("initSlide", e, this.slides.length)
                }
                this.emit("initSlides")
            }
        }

        setInitialPage() {
            let t = 0;
            const e = this.option("initialSlide");
            t = "number" == typeof e ? this.getPageForSlide(e) : parseInt(this.option("initialPage", 0) + "", 10) || 0, this.page = t
        }

        setInitialPosition() {
            if (!this.track || !this.pages.length) return;
            const t = this.isHorizontal;
            let e = this.page;
            this.pages[e] || (this.page = e = 0);
            const n = this.pages[e].pos * (this.isRTL && t ? 1 : -1), i = t ? n + "px" : "0", s = t ? "0" : n + "px";
            this.track.style.transform = `translate3d(${i}, ${s}, 0) scale(1)`, this.option("adaptiveHeight") && this.setViewportHeight()
        }

        initPanzoom() {
            this.panzoom && (this.panzoom.destroy(), this.panzoom = null);
            const t = this.option("Panzoom") || {};
            this.panzoom = new Ft(this.viewport, yt({}, {
                content: this.track,
                zoom: !1,
                panOnlyZoomed: !1,
                lockAxis: this.isHorizontal ? "x" : "y",
                infinite: this.isInfinite,
                click: !1,
                dblClick: !1,
                touch: t => !(this.pages.length < 2 && !t.options.infinite),
                bounds: () => this.getBounds(),
                maxVelocity: t => Math.abs(t.target[this.axis] - t.current[this.axis]) < 2 * this.viewportDim ? 100 : 0
            }, t)), this.panzoom.on("*", (t, e, ...n) => {
                this.emit("Panzoom." + e, t, ...n)
            }), this.panzoom.on("decel", this.onDecel), this.panzoom.on("refresh", this.onRefresh), this.panzoom.on("beforeTransform", this.onBeforeTransform), this.panzoom.on("endAnimation", this.onEndAnimation)
        }

        attachEvents() {
            const t = this.container;
            t && (t.addEventListener("click", this.onClick, {
                passive: !1,
                capture: !1
            }), t.addEventListener("slideTo", this.onSlideTo)), window.addEventListener("resize", this.onResize)
        }

        createPages() {
            let t = [];
            const {contentDim: e, viewportDim: n} = this;
            let i = this.option("slidesPerPage");
            ("number" != typeof i || e <= n) && (i = 1 / 0);
            let s = 0, r = 0, o = 0;
            for (const e of this.slides) (!t.length || r + e.dim - n > .05 || o === i) && (t.push(Gt()), s = t.length - 1, r = 0, o = 0), t[s].slides.push(e), r += e.dim + e.gap, o++;
            return t
        }

        processPages() {
            const t = this.pages, {contentDim: e, viewportDim: n} = this, i = this.option("center"),
                s = this.option("fill"), r = s && i && e > n && !this.isInfinite;
            if (t.forEach((t, s) => {
                t.index = s, t.pos = t.slides[0].pos, t.dim = 0;
                for (const [e, n] of t.slides.entries()) t.dim += n.dim, e < t.slides.length - 1 && (t.dim += n.gap);
                r && t.pos + .5 * t.dim < .5 * n ? t.pos = 0 : r && t.pos + .5 * t.dim >= e - .5 * n ? t.pos = e - n : i && (t.pos += -.5 * (n - t.dim))
            }), t.forEach((t, i) => {
                s && !this.isInfinite && e > n && (t.pos = Math.max(t.pos, 0), t.pos = Math.min(t.pos, e - n)), t.pos = at(t.pos, 1e3), t.dim = at(t.dim, 1e3), Math.abs(t.pos) <= .1 && (t.pos = 0)
            }), this.isInfinite) return t;
            const o = [];
            let a;
            return t.forEach(t => {
                const e = Object.assign({}, t);
                a && e.pos === a.pos ? (a.dim += e.dim, a.slides = [...a.slides, ...e.slides]) : (e.index = o.length, a = e, o.push(e))
            }), o
        }

        getPageFromIndex(t = 0) {
            const e = this.pages.length;
            let n;
            return t = parseInt((t || 0).toString()) || 0, n = this.isInfinite ? (t % e + e) % e : Math.max(Math.min(t, e - 1), 0), n
        }

        getSlideMetrics(t) {
            var e, n;
            const i = this.isHorizontal ? "width" : "height";
            let s = 0, r = 0, o = t.el;
            const a = o && !o.parentNode;
            if (o ? s = parseFloat(o.dataset[i] || "") || 0 : (o = document.createElement("div"), o.style.visibility = "hidden", (this.track || document.body).prepend(o)), kt(o, this.cn("slide") + " " + t.class + " " + t.customClass), s) o.style[i] = s + "px", o.style["width" === i ? "height" : "width"] = ""; else {
                a && (this.track || document.body).prepend(o);
                const t = Math.max(1, (null === (e = window.visualViewport) || void 0 === e ? void 0 : e.scale) || 1);
                s = o.getBoundingClientRect()[i] * t
            }
            const l = getComputedStyle(o);
            return "content-box" === l.boxSizing && (this.isHorizontal ? (s += parseFloat(l.paddingLeft) || 0, s += parseFloat(l.paddingRight) || 0) : (s += parseFloat(l.paddingTop) || 0, s += parseFloat(l.paddingBottom) || 0)), r = parseFloat(l[this.isHorizontal ? "marginRight" : "marginBottom"]) || 0, a ? null === (n = o.parentElement) || void 0 === n || n.removeChild(o) : t.el || o.remove(), {
                dim: at(s, 1e3),
                gap: at(r, 1e3)
            }
        }

        getBounds() {
            const {isInfinite: t, isRTL: e, isHorizontal: n, pages: i} = this;
            let s = {min: 0, max: 0};
            if (t) s = {min: -1 / 0, max: 1 / 0}; else if (i.length) {
                const t = i[0].pos, r = i[i.length - 1].pos;
                s = e && n ? {min: t, max: r} : {min: -1 * r, max: -1 * t}
            }
            return {x: n ? s : {min: 0, max: 0}, y: n ? {min: 0, max: 0} : s}
        }

        repositionSlides() {
            let t, {
                isHorizontal: e,
                isRTL: n,
                isInfinite: i,
                viewport: s,
                viewportDim: r,
                contentDim: o,
                page: a,
                pages: l,
                slides: c,
                panzoom: u
            } = this, d = 0, h = 0, p = 0, f = 0;
            u ? f = -1 * u.current[this.axis] : l[a] && (f = l[a].pos || 0), t = e ? n ? "right" : "left" : "top", n && e && (f *= -1);
            for (const e of c) e.el ? ("top" === t ? (e.el.style.right = "", e.el.style.left = "") : e.el.style.top = "", e.index !== d ? e.el.style[t] = 0 === h ? "" : at(h, 1e3) + "px" : e.el.style[t] = "", p += e.dim + e.gap, d++) : h += e.dim + e.gap;
            if (i && p && s) {
                let n = getComputedStyle(s), i = "padding", a = e ? "Right" : "Bottom",
                    l = parseFloat(n[i + (e ? "Left" : "Top")]);
                f -= l, r += l, r += parseFloat(n[i + a]);
                for (const e of c) e.el && (at(e.pos) < at(r) && at(e.pos + e.dim + e.gap) < at(f) && at(f) > at(o - r) && (e.el.style[t] = at(h + p, 1e3) + "px"), at(e.pos + e.gap) >= at(o - r) && at(e.pos) > at(f + r) && at(f) < at(r) && (e.el.style[t] = `-${at(p, 1e3)}px`))
            }
            let g, m, v = [...this.inTransition];
            if (v.length > 1 && (g = l[v[0]], m = l[v[1]]), g && m) {
                let e = 0;
                for (const n of c) n.el ? this.inTransition.has(n.index) && g.slides.indexOf(n) < 0 && (n.el.style[t] = at(e + (g.pos - m.pos), 1e3) + "px") : e += n.dim + n.gap
            }
        }

        createSlideEl(t) {
            const {track: e, slides: n} = this;
            if (!e || !t) return;
            if (t.el && t.el.parentNode) return;
            const i = t.el || document.createElement("div");
            kt(i, this.cn("slide")), kt(i, t.class), kt(i, t.customClass);
            const s = t.html;
            s && (s instanceof HTMLElement ? i.appendChild(s) : i.innerHTML = t.html + "");
            const r = [];
            n.forEach((t, e) => {
                t.el && r.push(e)
            });
            const o = t.index;
            let a = null;
            r.length && (a = n[r.reduce((t, e) => Math.abs(e - o) < Math.abs(t - o) ? e : t)]);
            const l = a && a.el && a.el.parentNode ? a.index < t.index ? a.el.nextSibling : a.el : null;
            e.insertBefore(i, e.contains(l) ? l : null), t.el = i, this.emit("createSlide", t)
        }

        removeSlideEl(t, e = !1) {
            const n = t.el;
            if (!n || !n.parentNode) return;
            const i = this.cn("isSelected");
            if (n.classList.contains(i) && (_t(n, i), this.emit("unselectSlide", t)), t.isDom && !e) return n.removeAttribute("aria-hidden"), n.removeAttribute("data-index"), void (n.style.left = "");
            this.emit("removeSlide", t);
            const s = new CustomEvent("animationend");
            n.dispatchEvent(s), t.el && (t.el.remove(), t.el = null)
        }

        transitionTo(t = 0, e = this.option("transition")) {
            if (!e) return !1;
            const {pages: n, panzoom: i} = this;
            t = parseInt((t || 0).toString()) || 0;
            const s = this.getPageFromIndex(t);
            if (!i || !n[s] || n.length < 2 || Math.abs(n[this.page].slides[0].dim - this.viewportDim) > 1) return !1;
            const r = t > this.page ? 1 : -1, o = this.pages[s].pos * (this.isRTL ? 1 : -1);
            if (this.page === s && Math.abs(o - i.target[this.axis]) < 1) return !1;
            this.clearTransitions();
            const a = i.isResting;
            kt(this.container, this.cn("inTransition"));
            const l = this.pages[this.page].slides[0], c = this.pages[s].slides[0];
            this.inTransition.add(c.index), this.createSlideEl(c);
            let u = l.el, d = c.el;
            a || "slide" === e || (e = "fadeFast", u = null);
            const h = this.isRTL ? "next" : "prev", p = this.isRTL ? "prev" : "next";
            return u && (this.inTransition.add(l.index), l.transition = e, u.addEventListener("animationend", this.onAnimationEnd), u.classList.add(`f-${e}Out`, "to-" + (r > 0 ? p : h))), d && (c.transition = e, d.addEventListener("animationend", this.onAnimationEnd), d.classList.add(`f-${e}In`, "from-" + (r > 0 ? h : p))), i.panTo({
                x: this.isHorizontal ? o : 0,
                y: this.isHorizontal ? 0 : o,
                friction: 0
            }), this.onChange(s), !0
        }

        manageSlideVisiblity() {
            const t = new Set, e = new Set, n = this.getVisibleSlides(parseFloat(this.option("preload", 0) + "") || 0);
            for (const i of this.slides) n.has(i) ? t.add(i) : e.add(i);
            for (const e of this.inTransition) t.add(this.slides[e]);
            for (const e of t) this.createSlideEl(e), this.lazyLoadSlide(e);
            for (const n of e) t.has(n) || this.removeSlideEl(n);
            this.markSelectedSlides(), this.repositionSlides()
        }

        markSelectedSlides() {
            if (!this.pages[this.page] || !this.pages[this.page].slides) return;
            const t = "aria-hidden";
            let e = this.cn("isSelected");
            if (e) for (const n of this.slides) {
                const i = n.el;
                i && (i.dataset.index = "" + n.index, this.pages[this.page].slides.includes(n) ? (i.classList.contains(e) || (kt(i, e), this.emit("selectSlide", n)), i.removeAttribute(t)) : (i.classList.contains(e) && (_t(i, e), this.emit("unselectSlide", n)), i.setAttribute(t, "true")))
            }
        }

        flipInfiniteTrack() {
            const t = this.panzoom;
            if (!t || !this.isInfinite) return;
            const e = "x" === this.option("axis") ? "e" : "f", {viewportDim: n, contentDim: i} = this;
            let s = t.current[e], r = t.target[e] - s, o = 0, a = .5 * n, l = i;
            this.isRTL && this.isHorizontal ? (s < -a && (o = -1, s += l), s > l - a && (o = 1, s -= l)) : (s > a && (o = 1, s -= l), s < -l + a && (o = -1, s += l)), o && (t.current[e] = s, t.target[e] = s + r)
        }

        lazyLoadSlide(t) {
            const e = this, n = t && t.el;
            if (!n) return;
            const i = new Set, s = "f-fadeIn";
            n.querySelectorAll("[data-lazy-srcset]").forEach(t => {
                t instanceof HTMLImageElement && i.add(t)
            });
            let r = Array.from(n.querySelectorAll("[data-lazy-src]"));
            n.dataset.lazySrc && r.push(n), r.map(t => {
                t instanceof HTMLImageElement ? i.add(t) : Lt(t) && (t.style.backgroundImage = `url('${t.dataset.lazySrc || ""}')`, delete t.dataset.lazySrc)
            });
            const o = (t, n, i) => {
                i && (i.remove(), i = null), n.complete && (n.classList.add(s), setTimeout(() => {
                    n.classList.remove(s)
                }, 350), n.style.visibility = ""), this.option("adaptiveHeight") && t.el && this.pages[this.page].slides.indexOf(t) > -1 && (e.updateMetrics(), e.setViewportHeight()), this.emit("load", t)
            };
            for (const e of i) {
                let n = null;
                e.src = e.dataset.lazySrcset || e.dataset.lazySrc || "", delete e.dataset.lazySrc, delete e.dataset.lazySrcset, e.style.visibility = "hidden", e.addEventListener("error", () => {
                    o(t, e, n)
                }), e.addEventListener("load", () => {
                    o(t, e, n)
                }), setTimeout(() => {
                    e.parentNode && t.el && (e.complete ? o(t, e, n) : (n = ut(Ot), e.parentNode.insertBefore(n, e)))
                }, 300)
            }
        }

        onAnimationEnd(t) {
            var e;
            const n = t.target, i = n ? parseInt(n.dataset.index || "", 10) || 0 : -1, s = this.slides[i],
                r = t.animationName;
            if (!n || !s || !r) return;
            const o = !!this.inTransition.has(i) && s.transition;
            o && r.substring(0, o.length + 2) === "f-" + o && this.inTransition.delete(i), this.inTransition.size || this.clearTransitions(), i === this.page && (null === (e = this.panzoom) || void 0 === e ? void 0 : e.isResting) && this.emit("settle")
        }

        onDecel(t, e = 0, n = 0, i = 0, s = 0) {
            const {isRTL: r, isHorizontal: o, axis: a, pages: l} = this, c = l.length,
                u = Math.abs(Math.atan2(n, e) / (Math.PI / 180));
            let d = 0;
            if (d = u > 45 && u < 135 ? o ? 0 : n : o ? e : 0, !c) return;
            const h = this.option("dragFree");
            let p = this.page, f = r && o ? 1 : -1;
            const g = t.target[a] * f, m = t.current[a] * f;
            let {pageIndex: v} = this.getPageFromPosition(g), {pageIndex: b} = this.getPageFromPosition(m);
            h ? this.onChange(v) : (Math.abs(d) > 5 ? (l[p].dim < document.documentElement["client" + (this.isHorizontal ? "Width" : "Height")] - 1 && (p = b), p = r && o ? d < 0 ? p - 1 : p + 1 : d < 0 ? p + 1 : p - 1) : p = 0 === i && 0 === s ? p : b, this.slideTo(p, {
                transition: !1,
                friction: t.option("decelFriction")
            }))
        }

        onClick(t) {
            const e = t.target, n = e && Lt(e) ? e.dataset : null;
            let i, s;
            n && (void 0 !== n.carouselPage ? (s = "slideTo", i = n.carouselPage) : void 0 !== n.carouselNext ? s = "slideNext" : void 0 !== n.carouselPrev && (s = "slidePrev")), s ? (t.preventDefault(), t.stopPropagation(), e && !e.hasAttribute("disabled") && this[s](i)) : this.emit("click", t)
        }

        onSlideTo(t) {
            const e = t.detail || 0;
            this.slideTo(this.getPageForSlide(e), {friction: 0})
        }

        onChange(t, e = 0) {
            const n = this.page;
            this.prevPage = n, this.page = t, this.option("adaptiveHeight") && this.setViewportHeight(), t !== n && (this.markSelectedSlides(), this.emit("change", t, n, e))
        }

        onRefresh() {
            let t = this.contentDim, e = this.viewportDim;
            this.updateMetrics(), this.contentDim === t && this.viewportDim === e || this.slideTo(this.page, {
                friction: 0,
                transition: !1
            })
        }

        onResize() {
            this.option("breakpoints") && this.processOptions()
        }

        onBeforeTransform(t) {
            this.lp !== t.current[this.axis] && (this.flipInfiniteTrack(), this.manageSlideVisiblity()), this.lp = t.current.e
        }

        onEndAnimation() {
            this.inTransition.size || this.emit("settle")
        }

        reInit(t = null, e = null) {
            this.destroy(), this.state = Ht.Init, this.userOptions = t || this.userOptions, this.userPlugins = e || this.userPlugins, this.processOptions()
        }

        slideTo(t = 0, {friction: e = this.option("friction"), transition: n = this.option("transition")} = {}) {
            if (this.state === Ht.Destroy) return;
            t = parseInt((t || 0).toString()) || 0;
            const i = this.getPageFromIndex(t);
            if (this.page !== i) {
                const e = new Event("beforeChange", {bubbles: !0, cancelable: !0});
                if (this.emit("beforeChange", e, t), e.defaultPrevented) return
            }
            const {axis: s, isHorizontal: r, isRTL: o, pages: a, panzoom: l} = this, c = a.length, u = o && r ? 1 : -1;
            if (!l || !c) return;
            if (this.transitionTo(t, n)) return;
            let d = a[i].pos;
            if (this.isInfinite) {
                const e = this.contentDim, n = l.target[s] * u;
                if (2 === c) d += e * Math.floor(parseFloat(t + "") / 2); else {
                    const t = n;
                    d = [d, d - e, d + e].reduce((function (e, n) {
                        return Math.abs(n - t) < Math.abs(e - t) ? n : e
                    }))
                }
            }
            d *= u, Math.abs(l.target[s] - d) < .1 || (l.panTo({
                x: r ? d : 0,
                y: r ? 0 : d,
                friction: e
            }), this.onChange(i))
        }

        slideToClosest(t) {
            if (this.panzoom) {
                const {pageIndex: e} = this.getPageFromPosition(this.panzoom.current[this.isHorizontal ? "e" : "f"]);
                this.slideTo(e, t)
            }
        }

        slideNext() {
            this.slideTo(this.page + 1)
        }

        slidePrev() {
            this.slideTo(this.page - 1)
        }

        clearTransitions() {
            this.inTransition.clear(), _t(this.container, this.cn("inTransition"));
            const t = ["to-prev", "to-next", "from-prev", "from-next"];
            for (const e of this.slides) {
                const n = e.el;
                if (n) {
                    n.removeEventListener("animationend", this.onAnimationEnd), n.classList.remove(...t);
                    const i = e.transition;
                    i && n.classList.remove(`f-${i}Out`, `f-${i}In`)
                }
            }
            this.manageSlideVisiblity()
        }

        prependSlide(t) {
            var e, n;
            let i = Array.isArray(t) ? t : [t];
            for (const t of i.reverse()) this.slides.unshift(Vt(t));
            for (let t = 0; t < this.slides.length; t++) this.slides[t].index = t;
            const s = (null === (e = this.pages[this.page]) || void 0 === e ? void 0 : e.pos) || 0;
            this.page += i.length, this.updateMetrics();
            const r = (null === (n = this.pages[this.page]) || void 0 === n ? void 0 : n.pos) || 0;
            if (this.panzoom) {
                const t = this.isRTL ? s - r : r - s;
                this.panzoom.target.e -= t, this.panzoom.current.e -= t, this.panzoom.requestTick()
            }
        }

        appendSlide(t) {
            let e = Array.isArray(t) ? t : [t];
            for (const t of e) {
                const e = Vt(t);
                e.index = this.slides.length, this.slides.push(e), this.emit("initSlide", e, this.slides.length)
            }
            this.updateMetrics()
        }

        removeSlide(t) {
            const e = this.slides.length;
            t = (t % e + e) % e, this.removeSlideEl(this.slides[t], !0), this.slides.splice(t, 1);
            for (let t = 0; t < this.slides.length; t++) this.slides[t].index = t;
            this.updateMetrics(), this.slideTo(this.page, {friction: 0, transition: !1})
        }

        updateMetrics() {
            const {panzoom: t, viewport: e, track: n, isHorizontal: i} = this;
            if (!n) return;
            const s = i ? "width" : "height", r = i ? "offsetWidth" : "offsetHeight";
            if (e) {
                let t = Math.max(e[r], at(e.getBoundingClientRect()[s], 1e3)), n = getComputedStyle(e), o = "padding",
                    a = i ? "Right" : "Bottom";
                t -= parseFloat(n[o + (i ? "Left" : "Top")]) + parseFloat(n[o + a]), this.viewportDim = t
            }
            let o, a = this.pages.length, l = 0;
            for (const [t, e] of this.slides.entries()) {
                let n = 0, i = 0;
                !e.el && o ? (n = o.dim, i = o.gap) : (({
                    dim: n,
                    gap: i
                } = this.getSlideMetrics(e)), o = e), n = at(n, 1e3), i = at(i, 1e3), e.dim = n, e.gap = i, e.pos = l, l += n, (this.isInfinite || t < this.slides.length - 1) && (l += i)
            }
            const c = this.contentDim;
            l = at(l, 1e3), this.contentDim = l, t && (t.contentRect[s] = l, t.contentRect["e" === this.axis ? "fullWidth" : "fullHeight"] = l), this.pages = this.createPages(), this.pages = this.processPages(), this.state === Ht.Init && this.setInitialPage(), this.page = Math.max(0, Math.min(this.page, this.pages.length - 1)), t && a === this.pages.length && Math.abs(l - c) > .5 && (t.target[this.axis] = -1 * this.pages[this.page].pos, t.current[this.axis] = -1 * this.pages[this.page].pos, t.stop()), this.manageSlideVisiblity(), this.emit("refresh")
        }

        getProgress(t, e = !1) {
            void 0 === t && (t = this.page);
            const n = this, i = n.panzoom, s = n.pages[t] || 0;
            if (!s || !i) return 0;
            let r = -1 * i.current.e, o = n.contentDim;
            var a = [at((r - s.pos) / (1 * s.dim), 1e3), at((r + o - s.pos) / (1 * s.dim), 1e3), at((r - o - s.pos) / (1 * s.dim), 1e3)].reduce((function (t, e) {
                return Math.abs(e) < Math.abs(t) ? e : t
            }));
            return e ? a : Math.max(-1, Math.min(1, a))
        }

        setViewportHeight() {
            const {page: t, pages: e, viewport: n, isHorizontal: i} = this;
            if (!n || !e[t]) return;
            let s = 0;
            i && this.track && (this.track.style.height = "auto", e[t].slides.forEach(t => {
                t.el && (s = Math.max(s, t.el.offsetHeight))
            })), n.style.height = s ? s + "px" : ""
        }

        getPageForSlide(t) {
            for (const e of this.pages) for (const n of e.slides) if (n.index === t) return e.index;
            return -1
        }

        getVisibleSlides(t = 0) {
            var e;
            const n = new Set;
            let {contentDim: i, viewportDim: s, pages: r, page: o} = this;
            i = i + (null === (e = this.slides[this.slides.length - 1]) || void 0 === e ? void 0 : e.gap) || 0;
            let a = 0;
            a = this.panzoom ? -1 * this.panzoom.current[this.axis] : r[o] && r[o].pos || 0, this.isInfinite && (a -= Math.floor(a / i) * i), this.isRTL && this.isHorizontal && (a *= -1);
            const l = a - s * t, c = a + s * (t + 1), u = this.isInfinite ? [-1, 0, 1] : [0];
            for (const t of this.slides) for (const e of u) {
                const s = t.pos + e * i, r = t.pos + t.dim + t.gap + e * i;
                s < c && r > l && n.add(t)
            }
            return n
        }

        getPageFromPosition(t) {
            const {viewportDim: e, contentDim: n} = this, i = this.pages.length, s = this.slides.length,
                r = this.slides[s - 1];
            let o = 0, a = 0, l = 0;
            const c = this.option("center");
            c && (t += .5 * e), this.isInfinite || (t = Math.max(this.slides[0].pos, Math.min(t, r.pos)));
            const u = n + r.gap;
            l = Math.floor(t / u) || 0, t -= l * u;
            let d = r, h = this.slides.find(e => {
                const n = t + (d && !c ? .5 * d.dim : 0);
                return d = e, e.pos <= n && e.pos + e.dim + e.gap > n
            });
            return h || (h = r), a = this.getPageForSlide(h.index), o = a + l * i, {page: o, pageIndex: a}
        }

        destroy() {
            if ([Ht.Destroy].includes(this.state)) return;
            this.state = Ht.Destroy;
            const {container: t, viewport: e, track: n, slides: i, panzoom: s} = this, r = this.option("classes");
            t.removeEventListener("click", this.onClick, {
                passive: !1,
                capture: !1
            }), t.removeEventListener("slideTo", this.onSlideTo), window.removeEventListener("resize", this.onResize), s && (s.destroy(), this.panzoom = null), i && i.forEach(t => {
                this.removeSlideEl(t)
            }), this.detachPlugins(), e && e.offsetParent && n && n.offsetParent && e.replaceWith(...n.childNodes);
            for (const [e, n] of Object.entries(r)) "container" !== e && n && t.classList.remove(n);
            this.track = null, this.viewport = null, this.page = 0, this.slides = [];
            const o = this.events.get("ready");
            this.events = new Map, o && this.events.set("ready", o)
        }
    }

    Object.defineProperty(Jt, "Panzoom", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: Ft
    }), Object.defineProperty(Jt, "defaults", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: {
            viewport: null,
            track: null,
            enabled: !0,
            slides: [],
            axis: "x",
            transition: "fade",
            preload: 1,
            slidesPerPage: "auto",
            initialPage: 0,
            friction: .12,
            Panzoom: {decelFriction: .12},
            center: !0,
            infinite: !0,
            fill: !0,
            dragFree: !1,
            adaptiveHeight: !1,
            direction: "ltr",
            classes: {
                container: "f-carousel",
                viewport: "f-carousel__viewport",
                track: "f-carousel__track",
                slide: "f-carousel__slide",
                isLTR: "is-ltr",
                isRTL: "is-rtl",
                isHorizontal: "is-horizontal",
                isVertical: "is-vertical",
                inTransition: "in-transition",
                isSelected: "is-selected"
            },
            l10n: {NEXT: "Next slide", PREV: "Previous slide", GOTO: "Go to slide #%d"}
        }
    }), Object.defineProperty(Jt, "Plugins", {enumerable: !0, configurable: !0, writable: !0, value: Kt});
    const Qt = function (t) {
        const e = window.pageYOffset, n = window.pageYOffset + window.innerHeight;
        if (!Lt(t)) return 0;
        const i = t.getBoundingClientRect(), s = i.y + window.pageYOffset, r = i.y + i.height + window.pageYOffset;
        if (e > r || n < s) return 0;
        if (e < s && n > r) return 100;
        if (s < e && r > n) return 100;
        let o = i.height;
        s < e && (o -= window.pageYOffset - s), r > n && (o -= r - n);
        const a = o / window.innerHeight * 100;
        return Math.round(a)
    }, te = !("undefined" == typeof window || !window.document || !window.document.createElement);
    let ee;
    const ne = ["a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden]):not(.fancybox-focus-guard)", "iframe", "object", "embed", "video", "audio", "[contenteditable]", '[tabindex]:not([tabindex^="-"]):not([disabled]):not([aria-hidden])'].join(","),
        ie = t => {
            if (t && te) {
                void 0 === ee && document.createElement("div").focus({
                    get preventScroll() {
                        return ee = !0, !1
                    }
                });
                try {
                    if (ee) t.focus({preventScroll: !0}); else {
                        const e = window.pageXOffset || document.body.scrollTop,
                            n = window.pageYOffset || document.body.scrollLeft;
                        t.focus(), document.body.scrollTo({top: e, left: n, behavior: "auto"})
                    }
                } catch (t) {
                }
            }
        }, se = {
            dragToClose: !0,
            hideScrollbar: !0,
            Carousel: {
                classes: {
                    container: "fancybox__carousel",
                    viewport: "fancybox__viewport",
                    track: "fancybox__track",
                    slide: "fancybox__slide"
                }
            },
            contentClick: "toggleZoom",
            contentDblClick: !1,
            backdropClick: "close",
            animated: !0,
            idle: 3500,
            showClass: "f-zoomInUp",
            hideClass: "f-fadeOut",
            commonCaption: !1,
            parentEl: null,
            startIndex: 0,
            l10n: Object.assign(Object.assign({}, Pt), {
                CLOSE: "Close",
                NEXT: "Next",
                PREV: "Previous",
                MODAL: "You can close this modal content with the ESC key",
                ERROR: "Something Went Wrong, Please Try Again Later",
                IMAGE_ERROR: "Image Not Found",
                ELEMENT_NOT_FOUND: "HTML Element Not Found",
                AJAX_NOT_FOUND: "Error Loading AJAX : Not Found",
                AJAX_FORBIDDEN: "Error Loading AJAX : Forbidden",
                IFRAME_ERROR: "Error Loading Page",
                TOGGLE_ZOOM: "Toggle zoom level",
                TOGGLE_THUMBS: "Toggle thumbnails",
                TOGGLE_SLIDESHOW: "Toggle slideshow",
                TOGGLE_FULLSCREEN: "Toggle full-screen mode",
                DOWNLOAD: "Download"
            }),
            tpl: {
                closeButton: '<button data-fancybox-close class="f-button is-close-btn" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M20 20L4 4m16 0L4 20"/></svg></button>',
                main: '<div class="fancybox__container" role="dialog" aria-modal="true" aria-label="{{MODAL}}" tabindex="-1">\n    <div class="fancybox__backdrop"></div>\n    <div class="fancybox__carousel"></div>\n    <div class="fancybox__footer"></div>\n  </div>'
            },
            groupAll: !1,
            groupAttr: "data-fancybox",
            defaultType: "image",
            defaultDisplay: "block",
            autoFocus: !0,
            trapFocus: !0,
            placeFocusBack: !0,
            closeButton: "auto",
            keyboard: {
                Escape: "close",
                Delete: "close",
                Backspace: "close",
                PageUp: "next",
                PageDown: "prev",
                ArrowUp: "prev",
                ArrowDown: "next",
                ArrowRight: "next",
                ArrowLeft: "prev"
            },
            Fullscreen: {autoStart: !1},
            compact: () => window.matchMedia("(max-width: 578px), (max-height: 578px)").matches,
            wheel: "zoom"
        };
    var re, oe;
    !function (t) {
        t[t.Init = 0] = "Init", t[t.Ready = 1] = "Ready", t[t.Closing = 2] = "Closing", t[t.CustomClosing = 3] = "CustomClosing", t[t.Destroy = 4] = "Destroy"
    }(re || (re = {})), function (t) {
        t[t.Loading = 0] = "Loading", t[t.Opening = 1] = "Opening", t[t.Ready = 2] = "Ready", t[t.Closing = 3] = "Closing"
    }(oe || (oe = {}));
    const ae = () => {
        queueMicrotask(() => {
            (() => {
                const {slug: t, index: e} = le.parseURL(), n = Je.getInstance();
                if (n && !1 !== n.option("Hash")) {
                    const i = n.carousel;
                    if (t && i) {
                        for (let e of i.slides) if (e.slug && e.slug === t) return i.slideTo(e.index);
                        if (t === n.option("slug")) return i.slideTo(e - 1);
                        const s = n.getSlide(), r = s && s.triggerEl && s.triggerEl.dataset;
                        if (r && r.fancybox === t) return i.slideTo(e - 1)
                    }
                    le.hasSilentClose = !0, n.close()
                }
                le.startFromUrl()
            })()
        })
    };

    class le extends Wt {
        constructor() {
            super(...arguments), Object.defineProperty(this, "origHash", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: ""
            }), Object.defineProperty(this, "timer", {enumerable: !0, configurable: !0, writable: !0, value: null})
        }

        onChange() {
            const t = this.instance, e = t.carousel;
            this.timer && clearTimeout(this.timer);
            const n = t.getSlide();
            if (!e || !n) return;
            const i = t.isOpeningSlide(n), s = new URL(document.URL).hash;
            let r, o = n.slug || void 0, a = n.triggerEl || void 0;
            r = o || this.instance.option("slug"), !r && a && a.dataset && (r = a.dataset.fancybox);
            let l = "";
            r && "true" !== r && (l = "#" + r + (!o && e.slides.length > 1 ? "-" + (n.index + 1) : "")), i && (this.origHash = s !== l ? s : ""), l && s !== l && (this.timer = setTimeout(() => {
                try {
                    t.state === re.Ready && window.history[i ? "pushState" : "replaceState"]({}, document.title, window.location.pathname + window.location.search + l)
                } catch (t) {
                }
            }, 300))
        }

        onClose() {
            if (this.timer && clearTimeout(this.timer), !0 !== le.hasSilentClose) try {
                window.history.replaceState({}, document.title, window.location.pathname + window.location.search + (this.origHash || ""))
            } catch (t) {
            }
        }

        attach() {
            const t = this.instance;
            t.on("Carousel.ready", this.onChange), t.on("Carousel.change", this.onChange), t.on("close", this.onClose)
        }

        detach() {
            const t = this.instance;
            t.off("Carousel.ready", this.onChange), t.off("Carousel.change", this.onChange), t.off("close", this.onClose)
        }

        static parseURL() {
            const t = window.location.hash.slice(1), e = t.split("-"), n = e[e.length - 1],
                i = n && /^\+?\d+$/.test(n) && parseInt(e.pop() || "1", 10) || 1;
            return {hash: t, slug: e.join("-"), index: i}
        }

        static startFromUrl() {
            if (le.hasSilentClose = !1, Je.getInstance() || !1 === Je.defaults.Hash) return;
            const {hash: t, slug: e, index: n} = le.parseURL();
            if (!e) return;
            let i = document.querySelector(`[data-slug="${t}"]`);
            if (i && i.dispatchEvent(new CustomEvent("click", {bubbles: !0, cancelable: !0})), Je.getInstance()) return;
            const s = document.querySelectorAll(`[data-fancybox="${e}"]`);
            s.length && (i = s[n - 1], i && i.dispatchEvent(new CustomEvent("click", {bubbles: !0, cancelable: !0})))
        }

        static destroy() {
            window.removeEventListener("hashchange", ae, !1)
        }
    }

    function ce() {
        window.addEventListener("hashchange", ae, !1), setTimeout(() => {
            le.startFromUrl()
        }, 500)
    }

    Object.defineProperty(le, "defaults", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: {}
    }), Object.defineProperty(le, "hasSilentClose", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: !1
    }), te && (/complete|interactive|loaded/.test(document.readyState) ? ce() : document.addEventListener("DOMContentLoaded", ce));

    class ue extends Wt {
        onCreateSlide(t, e, n) {
            const i = this.instance.optionFor(n, "src") || "";
            n.el && "image" === n.type && "string" == typeof i && this.setImage(n, i)
        }

        onRemoveSlide(t, e, n) {
            n.panzoom && n.panzoom.destroy(), n.panzoom = void 0, n.imageEl = void 0
        }

        onChange(t, e, n, i) {
            for (const t of e.slides) {
                const e = t.panzoom;
                e && t.index !== n && e.reset(.35)
            }
        }

        onClose() {
            var t;
            const e = this.instance, n = e.container, i = e.getSlide();
            if (!n || !n.parentElement || !i) return;
            const {el: s, contentEl: r, panzoom: o} = i, a = i.thumbElSrc;
            if (!s || !a || !r || !o || o.isContentLoading || o.state === St.Init || o.state === St.Destroy) return;
            o.updateMetrics();
            let l = this.getZoomInfo(i);
            if (!l) return;
            this.instance.state = re.CustomClosing, n.classList.remove("is-zooming-in"), n.classList.add("is-zooming-out"), r.style.backgroundImage = `url('${a}')`;
            const c = n.getBoundingClientRect();
            1 === ((null === (t = window.visualViewport) || void 0 === t ? void 0 : t.scale) || 1) && Object.assign(n.style, {
                position: "absolute",
                top: window.pageYOffset + "px",
                left: window.pageXOffset + "px",
                bottom: "auto",
                right: "auto",
                width: c.width + "px",
                height: c.height + "px",
                overflow: "hidden"
            });
            const {x: u, y: d, scale: h, opacity: p} = l;
            if (p) {
                const t = ((t, e, n, i) => {
                    const s = e - t;
                    return e => 1 + ((e - t) / s * -1 || 0)
                })(o.scale, h);
                o.on("afterTransform", () => {
                    r.style.opacity = t(o.scale) + ""
                })
            }
            o.on("endAnimation", () => {
                e.destroy()
            }), o.target.a = h, o.target.b = 0, o.target.c = 0, o.target.d = h, o.panTo({
                x: u,
                y: d,
                scale: h,
                friction: p ? .2 : .33,
                ignoreBounds: !0
            }), o.isResting && e.destroy()
        }

        setImage(t, e) {
            const n = this.instance;
            t.src = e, this.process(t, e).then(e => {
                var i;
                const s = t.contentEl, r = t.imageEl, o = t.thumbElSrc;
                if (n.isClosing() || !s || !r) return;
                s.offsetHeight;
                const a = !!n.isOpeningSlide(t) && this.getZoomInfo(t);
                if (this.option("protected")) {
                    null === (i = t.el) || void 0 === i || i.addEventListener("contextmenu", t => {
                        t.preventDefault()
                    });
                    const e = document.createElement("div");
                    kt(e, "fancybox-protected"), s.appendChild(e)
                }
                if (o && a) {
                    const i = e.contentRect, r = Math.max(i.fullWidth, i.fullHeight);
                    let c = null;
                    !a.opacity && r > 1200 && (c = document.createElement("img"), kt(c, "fancybox-ghost"), c.src = o, s.appendChild(c));
                    const u = () => {
                        c && (kt(c, "f-fadeFastOut"), setTimeout(() => {
                            c && (c.remove(), c = null)
                        }, 200))
                    };
                    (l = o, new Promise((t, e) => {
                        const n = new Image;
                        n.onload = t, n.onerror = e, n.src = l
                    })).then(() => {
                        n.hideLoading(t), t.state = oe.Opening, this.instance.emit("reveal", t), this.zoomIn(t).then(() => {
                            u(), this.instance.done(t)
                        }, () => {
                        }), c && setTimeout(() => {
                            u()
                        }, r > 2500 ? 800 : 200)
                    }, () => {
                        n.hideLoading(t), n.revealContent(t)
                    })
                } else {
                    const i = this.optionFor(t, "initialSize"), s = this.optionFor(t, "zoom"),
                        r = {event: n.prevMouseMoveEvent || n.options.event, friction: s ? .12 : 0};
                    let o = n.optionFor(t, "showClass") || void 0, a = !0;
                    n.isOpeningSlide(t) && ("full" === i ? e.zoomToFull(r) : "cover" === i ? e.zoomToCover(r) : "max" === i ? e.zoomToMax(r) : a = !1, e.stop("current")), a && o && (o = e.isDragging ? "f-fadeIn" : ""), n.hideLoading(t), n.revealContent(t, o)
                }
                var l
            }, () => {
                n.setError(t, "{{IMAGE_ERROR}}")
            })
        }

        process(t, e) {
            return new Promise((n, i) => {
                var s;
                const r = this.instance, o = t.el;
                r.clearContent(t), r.showLoading(t);
                let a = this.optionFor(t, "content");
                if ("string" == typeof a && (a = ut(a)), !a || !Lt(a)) {
                    if (a = document.createElement("img"), a instanceof HTMLImageElement) {
                        let n = "", i = t.caption;
                        n = "string" == typeof i && i ? i.replace(/<[^>]+>/gi, "").substring(0, 1e3) : `Image ${t.index + 1} of ${null === (s = r.carousel) || void 0 === s ? void 0 : s.pages.length}`, a.src = e || "", a.alt = n, a.draggable = !1, t.srcset && a.setAttribute("srcset", t.srcset)
                    }
                    t.sizes && a.setAttribute("sizes", t.sizes)
                }
                a.classList.add("fancybox-image"), t.imageEl = a, r.setContent(t, a, !1), t.panzoom = new Ft(o, yt({transformParent: !0}, this.option("Panzoom") || {}, {
                    content: a,
                    width: r.optionFor(t, "width", "auto"),
                    height: r.optionFor(t, "height", "auto"),
                    wheel: () => {
                        const t = r.option("wheel");
                        return ("zoom" === t || "pan" == t) && t
                    },
                    click: (e, n) => {
                        var i, s;
                        if (r.isCompact || r.isClosing()) return !1;
                        if (t.index !== (null === (i = r.getSlide()) || void 0 === i ? void 0 : i.index)) return !1;
                        if (n) {
                            const t = n.composedPath()[0];
                            if (["A", "BUTTON", "TEXTAREA", "OPTION", "INPUT", "SELECT", "VIDEO"].includes(t.nodeName)) return !1
                        }
                        let o = !n || n.target && (null === (s = t.contentEl) || void 0 === s ? void 0 : s.contains(n.target));
                        return r.option(o ? "contentClick" : "backdropClick") || !1
                    },
                    dblClick: () => r.isCompact ? "toggleZoom" : r.option("contentDblClick") || !1,
                    spinner: !1,
                    panOnlyZoomed: !0,
                    wheelLimit: 1 / 0,
                    on: {
                        ready: t => {
                            n(t)
                        }, error: () => {
                            i()
                        }, destroy: () => {
                            i()
                        }
                    }
                }))
            })
        }

        zoomIn(t) {
            return new Promise((e, n) => {
                const i = this.instance, s = i.container, {panzoom: r, contentEl: o, el: a} = t;
                r && r.updateMetrics();
                const l = this.getZoomInfo(t);
                if (!(l && a && o && r && s)) return void n();
                const {x: c, y: u, scale: d, opacity: h} = l, p = () => {
                    t.state !== oe.Closing && (h && (o.style.opacity = Math.max(Math.min(1, 1 - (1 - r.scale) / (1 - d)), 0) + ""), r.scale >= 1 && r.scale > r.targetScale - .1 && e(r))
                }, f = t => {
                    _t(s, "is-zooming-in"), t.scale < .99 || t.scale > 1.01 || (o.style.opacity = "", t.off("endAnimation", f), t.off("touchStart", f), t.off("afterTransform", p), e(t))
                };
                r.on("endAnimation", f), r.on("touchStart", f), r.on("afterTransform", p), r.on(["error", "destroy"], () => {
                    n()
                }), r.panTo({x: c, y: u, scale: d, friction: 0, ignoreBounds: !0}), r.stop("current");
                const g = {event: "mousemove" === r.panMode ? i.prevMouseMoveEvent || i.options.event : void 0},
                    m = this.optionFor(t, "initialSize");
                kt(s, "is-zooming-in"), i.hideLoading(t), "full" === m ? r.zoomToFull(g) : "cover" === m ? r.zoomToCover(g) : "max" === m ? r.zoomToMax(g) : r.reset(.172)
            })
        }

        getZoomInfo(t) {
            var e;
            const {el: n, imageEl: i, thumbEl: s, panzoom: r} = t;
            if (!n || !i || !s || !r || Qt(s) < 3 || !this.optionFor(t, "zoom") || this.instance.state === re.Destroy) return !1;
            if (1 !== ((null === (e = window.visualViewport) || void 0 === e ? void 0 : e.scale) || 1)) return !1;
            let {top: o, left: a, width: l, height: c} = s.getBoundingClientRect(), {
                top: u,
                left: d,
                fitWidth: h,
                fitHeight: p
            } = r.contentRect;
            if (!(l && c && h && p)) return !1;
            const f = r.container.getBoundingClientRect();
            d += f.left, u += f.top;
            const g = -1 * (d + .5 * h - (a + .5 * l)), m = -1 * (u + .5 * p - (o + .5 * c)), v = l / h;
            let b = this.option("zoomOpacity") || !1;
            return "auto" === b && (b = Math.abs(l / c - h / p) > .1), {x: g, y: m, scale: v, opacity: b}
        }

        attach() {
            const t = this, e = t.instance;
            e.on("Carousel.change", t.onChange), e.on("Carousel.createSlide", t.onCreateSlide), e.on("Carousel.removeSlide", t.onRemoveSlide), e.on("close", t.onClose)
        }

        detach() {
            const t = this, e = t.instance;
            e.off("Carousel.change", t.onChange), e.off("Carousel.createSlide", t.onCreateSlide), e.off("Carousel.removeSlide", t.onRemoveSlide), e.off("close", t.onClose)
        }
    }

    Object.defineProperty(ue, "defaults", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: {initialSize: "fit", Panzoom: {maxScale: 1}, protected: !1, zoom: !0, zoomOpacity: "auto"}
    }), "function" == typeof SuppressedError && SuppressedError;
    const de = "html", he = "youtube", pe = "vimeo", fe = "html5video", ge = (t, e = {}) => {
        const n = new URL(t), i = new URLSearchParams(n.search), s = new URLSearchParams;
        for (const [t, n] of [...i, ...Object.entries(e)]) {
            let e = n.toString();
            "t" === t ? s.set("start", parseInt(e).toString()) : s.set(t, e)
        }
        let r = s.toString(), o = t.match(/#t=((.*)?\d+s)/);
        return o && (r += "#t=" + o[1]), r
    }, me = ["image", "html", "ajax", "inline", "clone", "iframe", "map", "pdf", "html5video", "youtube", "vimeo"];

    class ve extends Wt {
        onInitSlide(t, e, n) {
            this.processType(n)
        }

        onCreateSlide(t, e, n) {
            this.setContent(n)
        }

        onClearContent(t, e) {
            e.xhr && (e.xhr.abort(), e.xhr = null);
            const n = e.iframeEl;
            n && (n.onload = n.onerror = null, n.src = "//about:blank", e.iframeEl = null);
            const i = e.contentEl, s = e.placeholderEl;
            if ("inline" === e.type && i && s) i.classList.remove("fancybox__content"), "none" !== i.style.display && (i.style.display = "none"), s.parentNode && s.parentNode.insertBefore(i, s), s.remove(), e.contentEl = void 0, e.placeholderEl = void 0; else for (; e.el && e.el.firstChild;) e.el.removeChild(e.el.firstChild)
        }

        onSelectSlide(t, e, n) {
            n.state === oe.Ready && this.playVideo()
        }

        onUnselectSlide(t, e, n) {
            var i, s;
            if (n.type === fe) {
                try {
                    null === (s = null === (i = n.el) || void 0 === i ? void 0 : i.querySelector("video")) || void 0 === s || s.pause()
                } catch (t) {
                }
                return
            }
            let r;
            n.type === pe ? r = {method: "pause", value: "true"} : n.type === he && (r = {
                event: "command",
                func: "pauseVideo"
            }), r && n.iframeEl && n.iframeEl.contentWindow && n.iframeEl.contentWindow.postMessage(JSON.stringify(r), "*"), n.poller && clearTimeout(n.poller)
        }

        onDone(t, e) {
            t.isCurrentSlide(e) && !t.isClosing() && this.playVideo()
        }

        onRefresh(t, e) {
            e.slides.forEach(t => {
                t.el && (this.resizeIframe(t), this.setAspectRatio(t))
            })
        }

        onMessage(t) {
            try {
                let e = JSON.parse(t.data);
                if ("https://player.vimeo.com" === t.origin) {
                    if ("ready" === e.event) for (let e of Array.from(document.getElementsByClassName("fancybox__iframe"))) e instanceof HTMLIFrameElement && e.contentWindow === t.source && (e.dataset.ready = "true")
                } else if (t.origin.match(/^https:\/\/(www.)?youtube(-nocookie)?.com$/) && "onReady" === e.event) {
                    const t = document.getElementById(e.id);
                    t && (t.dataset.ready = "true")
                }
            } catch (t) {
            }
        }

        loadAjaxContent(t) {
            const e = this.instance.optionFor(t, "src") || "";
            this.instance.showLoading(t);
            const n = this.instance, i = new XMLHttpRequest;
            n.showLoading(t), i.onreadystatechange = function () {
                i.readyState === XMLHttpRequest.DONE && n.state === re.Ready && (n.hideLoading(t), 200 === i.status ? n.setContent(t, i.responseText) : n.setError(t, 404 === i.status ? "{{AJAX_NOT_FOUND}}" : "{{AJAX_FORBIDDEN}}"))
            };
            const s = t.ajax || null;
            i.open(s ? "POST" : "GET", e + ""), i.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), i.setRequestHeader("X-Requested-With", "XMLHttpRequest"), i.send(s), t.xhr = i
        }

        setInlineContent(t) {
            let e = null;
            if (Lt(t.src)) e = t.src; else if ("string" == typeof t.src) {
                const n = t.src.split("#", 2).pop();
                e = n ? document.getElementById(n) : null
            }
            if (e) {
                if ("clone" === t.type || e.closest(".fancybox__slide")) {
                    e = e.cloneNode(!0);
                    const n = e.dataset.animationName;
                    n && (e.classList.remove(n), delete e.dataset.animationName);
                    let i = e.getAttribute("id");
                    i = i ? i + "--clone" : `clone-${this.instance.id}-${t.index}`, e.setAttribute("id", i)
                } else if (e.parentNode) {
                    const n = document.createElement("div");
                    n.classList.add("fancybox-placeholder"), e.parentNode.insertBefore(n, e), t.placeholderEl = n
                }
                this.instance.setContent(t, e)
            } else this.instance.setError(t, "{{ELEMENT_NOT_FOUND}}")
        }

        setIframeContent(t) {
            const {src: e, el: n} = t;
            if (!e || "string" != typeof e || !n) return;
            n.classList.add("is-loading");
            const i = this.instance, s = document.createElement("iframe");
            s.className = "fancybox__iframe", s.setAttribute("id", `fancybox__iframe_${i.id}_${t.index}`);
            for (const [e, n] of Object.entries(this.optionFor(t, "iframeAttr") || {})) s.setAttribute(e, n);
            s.onerror = () => {
                i.setError(t, "{{IFRAME_ERROR}}")
            }, t.iframeEl = s;
            const r = this.optionFor(t, "preload");
            if ("iframe" !== t.type || !1 === r) return s.setAttribute("src", t.src + ""), i.setContent(t, s, !1), this.resizeIframe(t), void i.revealContent(t);
            i.showLoading(t), s.onload = () => {
                if (!s.src.length) return;
                const e = "true" !== s.dataset.ready;
                s.dataset.ready = "true", this.resizeIframe(t), e ? i.revealContent(t) : i.hideLoading(t)
            }, s.setAttribute("src", e), i.setContent(t, s, !1)
        }

        resizeIframe(t) {
            const {type: e, iframeEl: n} = t;
            if (e === he || e === pe) return;
            const i = null == n ? void 0 : n.parentElement;
            if (!n || !i) return;
            let s = !1 !== t.autoSize, r = t.width || 0, o = t.height || 0;
            r && o && (s = !1);
            const a = i && i.style;
            if (!1 !== t.preload && !1 !== s && a) try {
                const t = window.getComputedStyle(i), e = parseFloat(t.paddingLeft) + parseFloat(t.paddingRight),
                    s = parseFloat(t.paddingTop) + parseFloat(t.paddingBottom), l = n.contentWindow;
                if (l) {
                    const t = l.document, n = t.getElementsByTagName(de)[0], i = t.body;
                    a.width = "", i.style.overflow = "hidden", r = r || n.scrollWidth + e, a.width = r + "px", i.style.overflow = "", a.flex = "0 0 auto", a.height = i.scrollHeight + "px", o = n.scrollHeight + s
                }
            } catch (t) {
            }
            if (r || o) {
                const t = {flex: "0 1 auto", width: "", height: ""};
                r && "auto" !== r && (t.width = r + "px"), o && "auto" !== o && (t.height = o + "px"), Object.assign(a, t)
            }
        }

        playVideo() {
            const t = this.instance.getSlide();
            if (!t) return;
            const {el: e} = t;
            if (!e || !e.offsetParent) return;
            if (!this.optionFor(t, "videoAutoplay")) return;
            if (t.type === fe) try {
                const t = e.querySelector("video");
                if (t) {
                    const e = t.play();
                    void 0 !== e && e.then(() => {
                    }).catch(e => {
                        t.muted = !0, t.play()
                    })
                }
            } catch (t) {
            }
            if (t.type !== he && t.type !== pe) return;
            const n = () => {
                if (t.iframeEl && t.iframeEl.contentWindow) {
                    let e;
                    if ("true" === t.iframeEl.dataset.ready) return e = t.type === he ? {
                        event: "command",
                        func: "playVideo"
                    } : {
                        method: "play",
                        value: "true"
                    }, e && t.iframeEl.contentWindow.postMessage(JSON.stringify(e), "*"), void (t.poller = void 0);
                    t.type === he && (e = {
                        event: "listening",
                        id: t.iframeEl.getAttribute("id")
                    }, t.iframeEl.contentWindow.postMessage(JSON.stringify(e), "*"))
                }
                t.poller = setTimeout(n, 250)
            };
            n()
        }

        processType(t) {
            if (t.html) return t.type = de, t.src = t.html, void (t.html = "");
            const e = this.instance.optionFor(t, "src", "");
            if (!e || "string" != typeof e) return;
            let n = t.type, i = null;
            if (i = e.match(/(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(?:watch\?(?:.*&)?v=|v\/|u\/|shorts\/|embed\/?)?(videoseries\?list=(?:.*)|[\w-]{11}|\?listType=(?:.*)&list=(?:.*))(?:.*)/i)) {
                const s = this.optionFor(t, he), {nocookie: r} = s, o = function (t, e) {
                        var n = {};
                        for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && e.indexOf(i) < 0 && (n[i] = t[i]);
                        if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
                            var s = 0;
                            for (i = Object.getOwnPropertySymbols(t); s < i.length; s++) e.indexOf(i[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, i[s]) && (n[i[s]] = t[i[s]])
                        }
                        return n
                    }(s, ["nocookie"]), a = `www.youtube${r ? "-nocookie" : ""}.com`, l = ge(e, o),
                    c = encodeURIComponent(i[2]);
                t.videoId = c, t.src = `https://${a}/embed/${c}?${l}`, t.thumbSrc = t.thumbSrc || `https://i.ytimg.com/vi/${c}/mqdefault.jpg`, n = he
            } else if (i = e.match(/^.+vimeo.com\/(?:\/)?([\d]+)((\/|\?h=)([a-z0-9]+))?(.*)?/)) {
                const s = ge(e, this.optionFor(t, pe)), r = encodeURIComponent(i[1]), o = i[4] || "";
                t.videoId = r, t.src = `https://player.vimeo.com/video/${r}?${o ? `h=${o}${s ? "&" : ""}` : ""}${s}`, n = pe
            }
            if (!n && t.triggerEl) {
                const e = t.triggerEl.dataset.type;
                me.includes(e) && (n = e)
            }
            n || "string" == typeof e && ("#" === e.charAt(0) ? n = "inline" : (i = e.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i)) ? (n = fe, t.videoFormat = t.videoFormat || "video/" + ("ogv" === i[1] ? "ogg" : i[1])) : e.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? n = "image" : e.match(/\.(pdf)((\?|#).*)?$/i) ? n = "pdf" : (i = e.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:(?:(?:maps\/(?:place\/(?:.*)\/)?\@(.*),(\d+.?\d+?)z))|(?:\?ll=))(.*)?/i)) ? (t.src = `https://maps.google.${i[1]}/?ll=${(i[2] ? i[2] + "&z=" + Math.floor(parseFloat(i[3])) + (i[4] ? i[4].replace(/^\//, "&") : "") : i[4] + "").replace(/\?/, "&")}&output=${i[4] && i[4].indexOf("layer=c") > 0 ? "svembed" : "embed"}`, n = "map") : (i = e.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:maps\/search\/)(.*)/i)) && (t.src = `https://maps.google.${i[1]}/maps?q=${i[2].replace("query=", "q=").replace("api=1", "")}&output=embed`, n = "map")), n = n || this.instance.option("defaultType"), t.type = n, "image" === n && (t.thumbSrc = t.thumbSrc || t.src)
        }

        setContent(t) {
            const e = this.instance.optionFor(t, "src") || "";
            if (t && t.type && e) {
                switch (t.type) {
                    case de:
                        this.instance.setContent(t, e);
                        break;
                    case fe:
                        const n = this.option("videoTpl");
                        n && this.instance.setContent(t, n.replace(/\{\{src\}\}/gi, e + "").replace(/\{\{format\}\}/gi, this.optionFor(t, "videoFormat") || "").replace(/\{\{poster\}\}/gi, t.poster || t.thumbSrc || ""));
                        break;
                    case"inline":
                    case"clone":
                        this.setInlineContent(t);
                        break;
                    case"ajax":
                        this.loadAjaxContent(t);
                        break;
                    case"pdf":
                    case"map":
                    case he:
                    case pe:
                        t.preload = !1;
                    case"iframe":
                        this.setIframeContent(t)
                }
                this.setAspectRatio(t)
            }
        }

        setAspectRatio(t) {
            const e = t.contentEl;
            if (!(t.el && e && t.type && [he, pe, fe].includes(t.type))) return;
            let n, i = t.width || "auto", s = t.height || "auto";
            if ("auto" === i || "auto" === s) {
                n = this.optionFor(t, "videoRatio");
                const e = (n + "").match(/(\d+)\s*\/\s?(\d+)/);
                n = e && e.length > 2 ? parseFloat(e[1]) / parseFloat(e[2]) : parseFloat(n + "")
            } else i && s && (n = i / s);
            if (!n) return;
            e.style.aspectRatio = "", e.style.width = "", e.style.height = "", e.offsetHeight;
            const r = e.getBoundingClientRect(), o = r.width || 1, a = r.height || 1;
            e.style.aspectRatio = n + "", n < o / a ? (s = "auto" === s ? a : Math.min(a, s), e.style.width = "auto", e.style.height = s + "px") : (i = "auto" === i ? o : Math.min(o, i), e.style.width = i + "px", e.style.height = "auto")
        }

        attach() {
            const t = this, e = t.instance;
            e.on("Carousel.initSlide", t.onInitSlide), e.on("Carousel.createSlide", t.onCreateSlide), e.on("Carousel.selectSlide", t.onSelectSlide), e.on("Carousel.unselectSlide", t.onUnselectSlide), e.on("Carousel.Panzoom.refresh", t.onRefresh), e.on("done", t.onDone), e.on("clearContent", t.onClearContent), window.addEventListener("message", t.onMessage)
        }

        detach() {
            const t = this, e = t.instance;
            e.off("Carousel.initSlide", t.onInitSlide), e.off("Carousel.createSlide", t.onCreateSlide), e.off("Carousel.selectSlide", t.onSelectSlide), e.off("Carousel.unselectSlide", t.onUnselectSlide), e.off("Carousel.Panzoom.refresh", t.onRefresh), e.off("done", t.onDone), e.off("clearContent", t.onClearContent), window.removeEventListener("message", t.onMessage)
        }
    }

    Object.defineProperty(ve, "defaults", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: {
            ajax: null,
            autoSize: !0,
            iframeAttr: {allow: "autoplay; fullscreen", scrolling: "auto"},
            preload: !0,
            videoAutoplay: !0,
            videoRatio: 16 / 9,
            videoTpl: '<video class="fancybox__html5video" playsinline controls controlsList="nodownload" poster="{{poster}}">\n  <source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos.</video>',
            videoFormat: "",
            vimeo: {byline: 1, color: "00adef", controls: 1, dnt: 1, muted: 0},
            youtube: {controls: 1, enablejsapi: 1, nocookie: 1, rel: 0, fs: 1}
        }
    });
    const be = "play", ye = "pause", we = "ready";

    class xe extends Wt {
        constructor() {
            super(...arguments), Object.defineProperty(this, "state", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: we
            }), Object.defineProperty(this, "inHover", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: !1
            }), Object.defineProperty(this, "timer", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: null
            }), Object.defineProperty(this, "progressBar", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: null
            })
        }

        get isActive() {
            return this.state !== we
        }

        onReady(t) {
            this.option("autoStart") && (t.isInfinite || t.page < t.pages.length - 1) && this.start()
        }

        onChange() {
            var t;
            (null === (t = this.instance.panzoom) || void 0 === t ? void 0 : t.isResting) || (this.removeProgressBar(), this.pause())
        }

        onSettle() {
            this.resume()
        }

        onVisibilityChange() {
            "visible" === document.visibilityState ? this.resume() : this.pause()
        }

        onMouseEnter() {
            this.inHover = !0, this.pause()
        }

        onMouseLeave() {
            var t;
            this.inHover = !1, (null === (t = this.instance.panzoom) || void 0 === t ? void 0 : t.isResting) && this.resume()
        }

        onTimerEnd() {
            const t = this.instance;
            "play" === this.state && (t.isInfinite || t.page !== t.pages.length - 1 ? t.slideNext() : t.slideTo(0))
        }

        removeProgressBar() {
            this.progressBar && (this.progressBar.remove(), this.progressBar = null)
        }

        createProgressBar() {
            var t;
            if (!this.option("showProgress")) return null;
            this.removeProgressBar();
            const e = this.instance, n = (null === (t = e.pages[e.page]) || void 0 === t ? void 0 : t.slides) || [];
            let i = this.option("progressParentEl");
            if (i || (i = (1 === n.length ? n[0].el : null) || e.viewport), !i) return null;
            const s = document.createElement("div");
            return kt(s, "f-progress"), i.prepend(s), this.progressBar = s, s.offsetHeight, s
        }

        set() {
            const t = this, e = t.instance;
            if (e.pages.length < 2) return;
            if (t.timer) return;
            const n = t.option("timeout");
            t.state = be, kt(e.container, "has-autoplay");
            let i = t.createProgressBar();
            i && (i.style.transitionDuration = n + "ms", i.style.transform = "scaleX(1)"), t.timer = setTimeout(() => {
                t.timer = null, t.inHover || t.onTimerEnd()
            }, n), t.emit("set")
        }

        clear() {
            const t = this;
            t.timer && (clearTimeout(t.timer), t.timer = null), t.removeProgressBar()
        }

        start() {
            const t = this;
            if (t.set(), t.state !== we) {
                if (t.option("pauseOnHover")) {
                    const e = t.instance.container;
                    e.addEventListener("mouseenter", t.onMouseEnter, !1), e.addEventListener("mouseleave", t.onMouseLeave, !1)
                }
                document.addEventListener("visibilitychange", t.onVisibilityChange, !1), t.emit("start")
            }
        }

        stop() {
            const t = this, e = t.state, n = t.instance.container;
            t.clear(), t.state = we, n.removeEventListener("mouseenter", t.onMouseEnter, !1), n.removeEventListener("mouseleave", t.onMouseLeave, !1), document.removeEventListener("visibilitychange", t.onVisibilityChange, !1), _t(n, "has-autoplay"), e !== we && t.emit("stop")
        }

        pause() {
            const t = this;
            t.state === be && (t.state = ye, t.clear(), t.emit(ye))
        }

        resume() {
            const t = this, e = t.instance;
            if (e.isInfinite || e.page !== e.pages.length - 1) if (t.state !== be) {
                if (t.state === ye && !t.inHover) {
                    const e = new Event("resume", {bubbles: !0, cancelable: !0});
                    t.emit("resume", e), e.defaultPrevented || t.set()
                }
            } else t.set(); else t.stop()
        }

        toggle() {
            this.state === be || this.state === ye ? this.stop() : this.start()
        }

        attach() {
            const t = this, e = t.instance;
            e.on("ready", t.onReady), e.on("Panzoom.startAnimation", t.onChange), e.on("Panzoom.endAnimation", t.onSettle), e.on("Panzoom.touchMove", t.onChange)
        }

        detach() {
            const t = this, e = t.instance;
            e.off("ready", t.onReady), e.off("Panzoom.startAnimation", t.onChange), e.off("Panzoom.endAnimation", t.onSettle), e.off("Panzoom.touchMove", t.onChange), t.stop()
        }
    }

    Object.defineProperty(xe, "defaults", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: {autoStart: !0, pauseOnHover: !0, progressParentEl: null, showProgress: !0, timeout: 3e3}
    });

    class Ce extends Wt {
        constructor() {
            super(...arguments), Object.defineProperty(this, "ref", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: null
            })
        }

        onPrepare(t) {
            const e = t.carousel;
            if (!e) return;
            const n = t.container;
            n && (e.options.Autoplay = yt({autoStart: !1}, this.option("Autoplay") || {}, {
                pauseOnHover: !1,
                timeout: this.option("timeout"),
                progressParentEl: () => this.option("progressParentEl") || null,
                on: {
                    start: () => {
                        t.emit("startSlideshow")
                    }, set: e => {
                        var i;
                        n.classList.add("has-slideshow"), (null === (i = t.getSlide()) || void 0 === i ? void 0 : i.state) !== oe.Ready && e.pause()
                    }, stop: () => {
                        n.classList.remove("has-slideshow"), t.isCompact || t.endIdle(), t.emit("endSlideshow")
                    }, resume: (e, n) => {
                        var i, s, r;
                        !n || !n.cancelable || (null === (i = t.getSlide()) || void 0 === i ? void 0 : i.state) === oe.Ready && (null === (r = null === (s = t.carousel) || void 0 === s ? void 0 : s.panzoom) || void 0 === r ? void 0 : r.isResting) || n.preventDefault()
                    }
                }
            }), e.attachPlugins({Autoplay: xe}), this.ref = e.plugins.Autoplay)
        }

        onReady(t) {
            const e = t.carousel, n = this.ref;
            n && e && this.option("playOnStart") && (e.isInfinite || e.page < e.pages.length - 1) && n.start()
        }

        onDone(t, e) {
            const n = this.ref, i = t.carousel;
            if (!n || !i) return;
            const s = e.panzoom;
            s && s.on("startAnimation", () => {
                t.isCurrentSlide(e) && n.stop()
            }), t.isCurrentSlide(e) && n.resume()
        }

        onKeydown(t, e) {
            var n;
            const i = this.ref;
            i && e === this.option("key") && "BUTTON" !== (null === (n = document.activeElement) || void 0 === n ? void 0 : n.nodeName) && i.toggle()
        }

        attach() {
            const t = this, e = t.instance;
            e.on("Carousel.init", t.onPrepare), e.on("Carousel.ready", t.onReady), e.on("done", t.onDone), e.on("keydown", t.onKeydown)
        }

        detach() {
            const t = this, e = t.instance;
            e.off("Carousel.init", t.onPrepare), e.off("Carousel.ready", t.onReady), e.off("done", t.onDone), e.off("keydown", t.onKeydown)
        }
    }

    Object.defineProperty(Ce, "defaults", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: {
            key: " ", playOnStart: !1, progressParentEl: t => {
                var e;
                return (null === (e = t.instance.container) || void 0 === e ? void 0 : e.querySelector(".fancybox__toolbar [data-fancybox-toggle-slideshow]")) || t.instance.container
            }, timeout: 3e3
        }
    });
    const Se = {
        classes: {
            container: "f-thumbs f-carousel__thumbs",
            viewport: "f-thumbs__viewport",
            track: "f-thumbs__track",
            slide: "f-thumbs__slide",
            isResting: "is-resting",
            isSelected: "is-selected",
            isLoading: "is-loading",
            hasThumbs: "has-thumbs"
        },
        minCount: 2,
        parentEl: null,
        thumbTpl: '<button class="f-thumbs__slide__button" tabindex="0" type="button" aria-label="{{GOTO}}" data-carousel-index="%i"><img class="f-thumbs__slide__img" data-lazy-src="{{%s}}" alt="" /></button>',
        type: "modern"
    };
    var Te;
    !function (t) {
        t[t.Init = 0] = "Init", t[t.Ready = 1] = "Ready", t[t.Hidden = 2] = "Hidden"
    }(Te || (Te = {}));
    let Ee = class extends Wt {
        constructor() {
            super(...arguments), Object.defineProperty(this, "type", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: "modern"
            }), Object.defineProperty(this, "container", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: null
            }), Object.defineProperty(this, "track", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: null
            }), Object.defineProperty(this, "carousel", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: null
            }), Object.defineProperty(this, "panzoom", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: null
            }), Object.defineProperty(this, "thumbWidth", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: 0
            }), Object.defineProperty(this, "thumbClipWidth", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: 0
            }), Object.defineProperty(this, "thumbHeight", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: 0
            }), Object.defineProperty(this, "thumbGap", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: 0
            }), Object.defineProperty(this, "thumbExtraGap", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: 0
            }), Object.defineProperty(this, "shouldCenter", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: !0
            }), Object.defineProperty(this, "state", {enumerable: !0, configurable: !0, writable: !0, value: Te.Init})
        }

        formatThumb(t, e) {
            return this.instance.localize(e, [["%i", t.index], ["%d", t.index + 1], ["%s", t.thumbSrc || "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"]])
        }

        getSlides() {
            const t = [], e = this.option("thumbTpl") || "";
            if (e) for (const n of this.instance.slides || []) {
                let i = "";
                n.type && (i = "for-" + n.type, n.type && ["video", "youtube", "vimeo", "html5video"].includes(n.type) && (i += " for-video")), t.push({
                    html: this.formatThumb(n, e),
                    customClass: i
                })
            }
            return t
        }

        onInitSlide(t, e) {
            const n = e.el;
            n && (e.thumbSrc = n.dataset.thumbSrc || e.thumbSrc || "", e.thumbClipWidth = parseFloat(n.dataset.thumbClipWidth || "") || e.thumbClipWidth || 0, e.thumbHeight = parseFloat(n.dataset.thumbHeight || "") || e.thumbHeight || 0)
        }

        onInitSlides() {
            this.build()
        }

        onRefreshM() {
            this.refreshModern()
        }

        onChangeM() {
            "modern" === this.type && (this.shouldCenter = !0, this.centerModern())
        }

        onClickModern(t) {
            t.preventDefault(), t.stopPropagation();
            const e = this.instance, n = e.page, i = t => {
                if (t) {
                    const e = t.closest("[data-carousel-index]");
                    if (e) return parseInt(e.dataset.carouselIndex || "", 10) || 0
                }
                return -1
            }, s = (t, e) => {
                const n = document.elementFromPoint(t, e);
                return n ? i(n) : -1
            };
            let r = i(t.target);
            r < 0 && (r = s(t.clientX + this.thumbGap, t.clientY), r === n && (r = n - 1)), r < 0 && (r = s(t.clientX - this.thumbGap, t.clientY), r === n && (r = n + 1)), r < 0 && (r = (e => {
                let i = s(t.clientX - e, t.clientY), o = s(t.clientX + e, t.clientY);
                return r < 0 && i === n && (r = n + 1), r < 0 && o === n && (r = n - 1), r
            })(this.thumbExtraGap)), r === n ? this.centerModern() : r > -1 && r < e.pages.length && e.slideTo(r)
        }

        onTransformM() {
            if ("modern" !== this.type) return;
            const {instance: t, container: e, track: n} = this, i = t.panzoom;
            if (!(e && n && i && this.panzoom)) return;
            ht(e, this.cn("isResting"), i.state !== St.Init && i.isResting);
            const s = this.thumbGap, r = this.thumbExtraGap, o = this.thumbClipWidth;
            let a = 0, l = 0, c = 0;
            for (const e of t.slides) {
                let n = e.index, i = e.thumbSlideEl;
                if (!i) continue;
                ht(i, this.cn("isSelected"), n === t.page), l = 1 - Math.abs(t.getProgress(n)), i.style.setProperty("--progress", l ? l + "" : "");
                const u = .5 * ((e.thumbWidth || 0) - o);
                a += s, a += u, l && (a -= l * (u + r)), i.style.setProperty("--shift", a - s + ""), a += u, l && (a -= l * (u + r)), a -= s, 0 === n && (c = r * l)
            }
            n && (n.style.setProperty("--left", c + ""), n.style.setProperty("--width", a + c + s + r * l + "")), this.shouldCenter && this.centerModern()
        }

        buildClassic() {
            const {container: t, track: e} = this, n = this.getSlides();
            if (!t || !e || !n) return;
            const i = new this.instance.constructor(t, yt({
                track: e,
                infinite: !1,
                center: !0,
                fill: !0,
                dragFree: !0,
                slidesPerPage: 1,
                transition: !1,
                Dots: !1,
                Navigation: !1,
                classes: {
                    container: "f-thumbs",
                    viewport: "f-thumbs__viewport",
                    track: "f-thumbs__track",
                    slide: "f-thumbs__slide"
                }
            }, this.option("Carousel") || {}, {Sync: {target: this.instance}, slides: n}));
            this.carousel = i, this.track = e, i.on("ready", () => {
                this.emit("ready")
            }), i.on("createSlide", (t, e) => {
                this.emit("createSlide", e, e.el)
            })
        }

        buildModern() {
            if ("modern" !== this.type) return;
            const {container: t, track: e, instance: n} = this, i = this.option("thumbTpl") || "";
            if (!t || !e || !i) return;
            t.addEventListener("keydown", () => {
                _t(t, "is-using-mouse")
            }), kt(t, "is-horizontal"), this.updateModern();
            for (const t of n.slides || []) {
                const n = document.createElement("div");
                if (kt(n, this.cn("slide")), t.type) {
                    let e = "for-" + t.type;
                    ["video", "youtube", "vimeo", "html5video"].includes(t.type) && (e += " for-video"), kt(n, e)
                }
                n.appendChild(ut(this.formatThumb(t, i))), this.emit("createSlide", t, n), t.thumbSlideEl = n, e.appendChild(n), this.resizeModernSlide(t)
            }
            const s = new n.constructor.Panzoom(t, {
                content: e,
                lockAxis: "x",
                zoom: !1,
                panOnlyZoomed: !1,
                bounds: () => {
                    let t = 0, e = 0, i = n.slides[0], s = n.slides[n.slides.length - 1], r = n.slides[n.page];
                    return i && s && r && (e = -1 * this.getModernThumbPos(0), 0 !== n.page && (e += .5 * (i.thumbWidth || 0)), t = -1 * this.getModernThumbPos(n.slides.length - 1), n.page !== n.slides.length - 1 && (t += (s.thumbWidth || 0) - (r.thumbWidth || 0) - .5 * (s.thumbWidth || 0))), {
                        x: {
                            min: t,
                            max: e
                        }, y: {min: 0, max: 0}
                    }
                }
            });
            s.on("touchStart", (t, e) => {
                this.shouldCenter = !1, kt(this.container, "is-using-mouse")
            }), s.on("click", (t, e) => this.onClickModern(e)), s.on("ready", () => {
                this.centerModern(), this.emit("ready")
            }), s.on(["afterTransform", "refresh"], t => {
                this.lazyLoadModern()
            }), this.panzoom = s, this.refreshModern()
        }

        updateModern() {
            if ("modern" !== this.type) return;
            const {container: t} = this;
            t && (this.thumbGap = parseFloat(getComputedStyle(t).getPropertyValue("--f-thumb-gap")) || 0, this.thumbExtraGap = parseFloat(getComputedStyle(t).getPropertyValue("--f-thumb-extra-gap")) || 0, this.thumbWidth = parseFloat(getComputedStyle(t).getPropertyValue("--f-thumb-width")) || 40, this.thumbClipWidth = parseFloat(getComputedStyle(t).getPropertyValue("--f-thumb-clip-width")) || 40, this.thumbHeight = parseFloat(getComputedStyle(t).getPropertyValue("--f-thumb-height")) || 40)
        }

        refreshModern() {
            var t;
            if ("modern" === this.type) {
                this.updateModern();
                for (const t of this.instance.slides || []) this.resizeModernSlide(t);
                this.onTransformM(), null === (t = this.panzoom) || void 0 === t || t.updateMetrics(!0), this.centerModern(0)
            }
        }

        centerModern(t) {
            const e = this.instance, {container: n, panzoom: i} = this;
            if (!n || !i || i.state === St.Init) return;
            const s = e.page;
            let r = this.getModernThumbPos(s), o = r;
            for (let t = e.page - 3; t < e.page + 3; t++) {
                if (t < 0 || t > e.pages.length - 1 || t === e.page) continue;
                const n = 1 - Math.abs(e.getProgress(t));
                n > 0 && n < 1 && (o += n * (this.getModernThumbPos(t) - r))
            }
            let a = 100;
            void 0 === t && (t = .2, e.inTransition.size > 0 && (t = .12), Math.abs(-1 * i.current.e - o) > i.containerRect.width && (t = .5, a = 0)), i.options.maxVelocity = a, i.applyChange({
                panX: at(-1 * o - i.target.e, 1e3),
                friction: null === e.prevPage ? 0 : t
            })
        }

        lazyLoadModern() {
            const {instance: t, panzoom: e} = this;
            if (!e) return;
            const n = -1 * e.current.e || 0;
            let i = this.getModernThumbPos(t.page);
            if (e.state !== St.Init || 0 === i) for (const i of t.slides || []) {
                const t = i.thumbSlideEl;
                if (!t) continue;
                const s = t.querySelector("img[data-lazy-src]"), r = i.index, o = this.getModernThumbPos(r),
                    a = n - .5 * e.containerRect.innerWidth, l = a + e.containerRect.innerWidth;
                if (!s || o < a || o > l) continue;
                let c = s.dataset.lazySrc;
                if (!c || !c.length) continue;
                if (delete s.dataset.lazySrc, s.src = c, s.complete) continue;
                kt(t, this.cn("isLoading"));
                const u = ut(Ot);
                t.appendChild(u), s.addEventListener("load", () => {
                    t.offsetParent && (t.classList.remove(this.cn("isLoading")), u.remove())
                }, !1)
            }
        }

        resizeModernSlide(t) {
            if ("modern" !== this.type) return;
            if (!t.thumbSlideEl) return;
            const e = t.thumbClipWidth && t.thumbHeight ? Math.round(this.thumbHeight * (t.thumbClipWidth / t.thumbHeight)) : this.thumbWidth;
            t.thumbWidth = e
        }

        getModernThumbPos(t) {
            const e = this.instance.slides[t], n = this.panzoom;
            if (!n || !n.contentRect.fitWidth) return 0;
            let i = n.containerRect.innerWidth, s = n.contentRect.width;
            2 === this.instance.slides.length && (t -= 1, s = 2 * this.thumbClipWidth);
            let r = t * (this.thumbClipWidth + this.thumbGap) + this.thumbExtraGap + .5 * (e.thumbWidth || 0);
            return r -= s > i ? .5 * i : .5 * s, at(r || 0, 1)
        }

        isDisabled() {
            const t = this.option("minCount") || 0;
            if (t) {
                const e = this.instance;
                let n = 0;
                for (const t of e.slides || []) t.thumbSrc && n++;
                if (n < t) return !0
            }
            const e = this.option("type");
            return ["modern", "classic"].indexOf(e) < 0
        }

        build() {
            if (this.state !== Te.Init) return;
            if (this.isDisabled()) return;
            const t = this.instance.container, e = this.option("type");
            this.type = e;
            const n = document.createElement("div");
            kt(n, this.cn("container")), kt(n, "is-" + e);
            const i = this.option("parentEl");
            i ? i.appendChild(n) : t.after(n), this.container = n, kt(t, this.cn("hasThumbs"));
            const s = document.createElement("div");
            kt(s, this.cn("track")), n.appendChild(s), this.track = s, "classic" === e ? this.buildClassic() : this.buildModern(), this.state = Te.Ready
        }

        cleanup() {
            this.carousel && this.carousel.destroy(), this.carousel = null, this.panzoom && this.panzoom.destroy(), this.panzoom = null, this.container && this.container.remove(), this.container = null, this.track = null, this.state = Te.Init, _t(this.instance.container, this.cn("hasThumbs"))
        }

        attach() {
            const t = this, e = t.instance;
            e.on("initSlide", t.onInitSlide), e.state === Ht.Init ? e.on("initSlides", t.onInitSlides) : t.onInitSlides(), e.on("Panzoom.afterTransform", t.onTransformM), e.on("Panzoom.refresh", t.onRefreshM), e.on("change", t.onChangeM)
        }

        detach() {
            const t = this, e = t.instance;
            e.off("initSlide", t.onInitSlide), e.off("initSlides", t.onInitSlides), e.off("Panzoom.afterTransform", t.onTransformM), e.off("Panzoom.refresh", t.onRefreshM), e.off("change", t.onChangeM), t.cleanup()
        }
    };
    Object.defineProperty(Ee, "defaults", {enumerable: !0, configurable: !0, writable: !0, value: Se});
    const Pe = Object.assign(Object.assign({}, Se), {key: "t", showOnStart: !0, parentEl: null}), Me = "is-masked",
        Oe = "aria-hidden";

    class Le extends Wt {
        constructor() {
            super(...arguments), Object.defineProperty(this, "ref", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: null
            }), Object.defineProperty(this, "hidden", {enumerable: !0, configurable: !0, writable: !0, value: !1})
        }

        get isEnabled() {
            const t = this.ref;
            return t && !t.isDisabled()
        }

        get isHidden() {
            return this.hidden
        }

        onInit() {
            var t;
            const e = this, n = e.instance, i = n.carousel;
            if (e.ref || !i) return;
            const s = e.option("parentEl") || n.footer || n.container;
            if (!s) return;
            const r = yt({}, e.options, {
                parentEl: s,
                classes: {container: "f-thumbs fancybox__thumbs"},
                Carousel: {Sync: {friction: n.option("Carousel.friction") || 0}},
                on: {
                    ready: t => {
                        const n = t.container;
                        n && this.hidden && (e.refresh(), n.style.transition = "none", e.hide(), n.offsetHeight, queueMicrotask(() => {
                            n.style.transition = "", e.show()
                        }))
                    }
                }
            });
            r.Carousel = r.Carousel || {}, r.Carousel.on = yt((null === (t = e.options.Carousel) || void 0 === t ? void 0 : t.on) || {}, {
                click: (t, e) => {
                    e.stopPropagation()
                }
            }), i.options.Thumbs = r, i.attachPlugins({Thumbs: Ee}), e.ref = i.plugins.Thumbs, e.option("showOnStart") || (e.ref.state = Te.Hidden, e.hidden = !0)
        }

        onResize() {
            var t;
            const e = null === (t = this.ref) || void 0 === t ? void 0 : t.container;
            e && (e.style.maxHeight = "")
        }

        onKeydown(t, e) {
            const n = this.option("key");
            n && n === e && this.toggle()
        }

        toggle() {
            const t = this.ref;
            if (t && !t.isDisabled()) return t.state === Te.Hidden ? (t.state = Te.Init, void t.build()) : void (this.hidden ? this.show() : this.hide())
        }

        show() {
            const t = this.ref;
            if (!t || t.isDisabled()) return;
            const e = t.container;
            e && (this.refresh(), e.offsetHeight, e.removeAttribute(Oe), e.classList.remove(Me), this.hidden = !1)
        }

        hide() {
            const t = this.ref, e = t && t.container;
            e && (this.refresh(), e.offsetHeight, e.classList.add(Me), e.setAttribute(Oe, "true")), this.hidden = !0
        }

        refresh() {
            const t = this.ref;
            if (!t || !t.state) return;
            const e = t.container, n = (null == e ? void 0 : e.firstChild) || null;
            e && n && n.childNodes.length && (e.style.maxHeight = n.getBoundingClientRect().height + "px")
        }

        attach() {
            const t = this, e = t.instance;
            e.state === re.Init ? e.on("Carousel.init", t.onInit) : t.onInit(), e.on("resize", t.onResize), e.on("keydown", t.onKeydown)
        }

        detach() {
            var t;
            const e = this, n = e.instance;
            n.off("Carousel.init", e.onInit), n.off("resize", e.onResize), n.off("keydown", e.onKeydown), null === (t = n.carousel) || void 0 === t || t.detachPlugins(["Thumbs"]), e.ref = null
        }
    }

    Object.defineProperty(Le, "defaults", {enumerable: !0, configurable: !0, writable: !0, value: Pe});
    const _e = {
        panLeft: {icon: '<svg><path d="M5 12h14M5 12l6 6M5 12l6-6"/></svg>', change: {panX: -100}},
        panRight: {icon: '<svg><path d="M5 12h14M13 18l6-6M13 6l6 6"/></svg>', change: {panX: 100}},
        panUp: {icon: '<svg><path d="M12 5v14M18 11l-6-6M6 11l6-6"/></svg>', change: {panY: -100}},
        panDown: {icon: '<svg><path d="M12 5v14M18 13l-6 6M6 13l6 6"/></svg>', change: {panY: 100}},
        zoomIn: {
            icon: '<svg><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M11 8v6M8 11h6"/></svg>',
            action: "zoomIn"
        },
        zoomOut: {
            icon: '<svg><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>',
            action: "zoomOut"
        },
        toggle1to1: {
            icon: '<svg><path d="M3.51 3.07c5.74.02 11.48-.02 17.22.02 1.37.1 2.34 1.64 2.18 3.13 0 4.08.02 8.16 0 12.23-.1 1.54-1.47 2.64-2.79 2.46-5.61-.01-11.24.02-16.86-.01-1.36-.12-2.33-1.65-2.17-3.14 0-4.07-.02-8.16 0-12.23.1-1.36 1.22-2.48 2.42-2.46Z"/><path d="M5.65 8.54h1.49v6.92m8.94-6.92h1.49v6.92M11.5 9.4v.02m0 5.18v0"/></svg>',
            action: "toggleZoom"
        },
        toggleZoom: {
            icon: '<svg><g><line x1="11" y1="8" x2="11" y2="14"></line></g><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>',
            action: "toggleZoom"
        },
        iterateZoom: {
            icon: '<svg><g><line x1="11" y1="8" x2="11" y2="14"></line></g><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>',
            action: "iterateZoom"
        },
        rotateCCW: {
            icon: '<svg><path d="M15 4.55a8 8 0 0 0-6 14.9M9 15v5H4M18.37 7.16v.01M13 19.94v.01M16.84 18.37v.01M19.37 15.1v.01M19.94 11v.01"/></svg>',
            action: "rotateCCW"
        },
        rotateCW: {
            icon: '<svg><path d="M9 4.55a8 8 0 0 1 6 14.9M15 15v5h5M5.63 7.16v.01M4.06 11v.01M4.63 15.1v.01M7.16 18.37v.01M11 19.94v.01"/></svg>',
            action: "rotateCW"
        },
        flipX: {
            icon: '<svg style="stroke-width: 1.3"><path d="M12 3v18M16 7v10h5L16 7M8 7v10H3L8 7"/></svg>',
            action: "flipX"
        },
        flipY: {
            icon: '<svg style="stroke-width: 1.3"><path d="M3 12h18M7 16h10L7 21v-5M7 8h10L7 3v5"/></svg>',
            action: "flipY"
        },
        fitX: {
            icon: '<svg><path d="M4 12V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6M10 18H3M21 18h-7M6 15l-3 3 3 3M18 15l3 3-3 3"/></svg>',
            action: "fitX"
        },
        fitY: {
            icon: '<svg><path d="M12 20H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6M18 14v7M18 3v7M15 18l3 3 3-3M15 6l3-3 3 3"/></svg>',
            action: "fitY"
        },
        reset: {
            icon: '<svg><path d="M20 11A8.1 8.1 0 0 0 4.5 9M4 5v4h4M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"/></svg>',
            action: "reset"
        },
        toggleFS: {
            icon: '<svg><g><path d="M14.5 9.5 21 3m0 0h-6m6 0v6M3 21l6.5-6.5M3 21v-6m0 6h6"/></g><g><path d="m14 10 7-7m-7 7h6m-6 0V4M3 21l7-7m0 0v6m0-6H4"/></g></svg>',
            action: "toggleFS"
        }
    };
    var ke;
    !function (t) {
        t[t.Init = 0] = "Init", t[t.Ready = 1] = "Ready", t[t.Disabled = 2] = "Disabled"
    }(ke || (ke = {}));
    const Ae = {tabindex: "-1", width: "24", height: "24", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg"};

    class ze extends Wt {
        constructor() {
            super(...arguments), Object.defineProperty(this, "state", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: ke.Init
            }), Object.defineProperty(this, "container", {enumerable: !0, configurable: !0, writable: !0, value: null})
        }

        onReady(t) {
            var e;
            if (!t.carousel) return;
            let n = this.option("display"), i = this.option("absolute"), s = this.option("enabled");
            if ("auto" === s) {
                const t = this.instance.carousel;
                let e = 0;
                if (t) for (const n of t.slides) (n.panzoom || "image" === n.type) && e++;
                e || (s = !1)
            }
            s || (n = void 0);
            let r = 0;
            const o = {left: [], middle: [], right: []};
            if (n) for (const t of ["left", "middle", "right"]) for (const i of n[t]) {
                const n = this.createEl(i);
                n && (null === (e = o[t]) || void 0 === e || e.push(n), r++)
            }
            let a = null;
            if (r && (a = this.createContainer()), a) {
                for (const [t, e] of Object.entries(o)) {
                    const n = document.createElement("div");
                    kt(n, "fancybox__toolbar__column is-" + t);
                    for (const t of e) n.appendChild(t);
                    "auto" !== i || "middle" !== t || e.length || (i = !0), a.appendChild(n)
                }
                !0 === i && kt(a, "is-absolute"), this.state = ke.Ready, this.onRefresh()
            } else this.state = ke.Disabled
        }

        onClick(t) {
            var e, n;
            const i = this.instance, s = i.getSlide(), r = null == s ? void 0 : s.panzoom, o = t.target,
                a = o && Lt(o) ? o.dataset : null;
            if (!a) return;
            if (void 0 !== a.fancyboxToggleThumbs) return t.preventDefault(), t.stopPropagation(), void (null === (e = i.plugins.Thumbs) || void 0 === e || e.toggle());
            if (void 0 !== a.fancyboxToggleFullscreen) return t.preventDefault(), t.stopPropagation(), void this.instance.toggleFullscreen();
            if (void 0 !== a.fancyboxToggleSlideshow) {
                t.preventDefault(), t.stopPropagation();
                const e = null === (n = i.carousel) || void 0 === n ? void 0 : n.plugins.Autoplay;
                let s = e.isActive;
                return r && "mousemove" === r.panMode && !s && r.reset(), void (s ? e.stop() : e.start())
            }
            const l = a.panzoomAction, c = a.panzoomChange;
            if ((c || l) && (t.preventDefault(), t.stopPropagation()), c) {
                let e = {};
                try {
                    e = JSON.parse(c)
                } catch (t) {
                }
                r && r.applyChange(e)
            } else l && r && r[l] && r[l]()
        }

        onChange() {
            this.onRefresh()
        }

        onRefresh() {
            if (this.instance.isClosing()) return;
            const t = this.container;
            if (!t) return;
            const e = this.instance.getSlide();
            if (!e || e.state !== oe.Ready) return;
            const n = e && !e.error && e.panzoom;
            for (const e of t.querySelectorAll("[data-panzoom-action]")) n ? (e.removeAttribute("disabled"), e.removeAttribute("tabindex")) : (e.setAttribute("disabled", ""), e.setAttribute("tabindex", "-1"));
            let i = n && n.canZoomIn(), s = n && n.canZoomOut();
            for (const e of t.querySelectorAll('[data-panzoom-action="zoomIn"]')) i ? (e.removeAttribute("disabled"), e.removeAttribute("tabindex")) : (e.setAttribute("disabled", ""), e.setAttribute("tabindex", "-1"));
            for (const e of t.querySelectorAll('[data-panzoom-action="zoomOut"]')) s ? (e.removeAttribute("disabled"), e.removeAttribute("tabindex")) : (e.setAttribute("disabled", ""), e.setAttribute("tabindex", "-1"));
            for (const e of t.querySelectorAll('[data-panzoom-action="toggleZoom"],[data-panzoom-action="iterateZoom"]')) {
                s || i ? (e.removeAttribute("disabled"), e.removeAttribute("tabindex")) : (e.setAttribute("disabled", ""), e.setAttribute("tabindex", "-1"));
                const t = e.querySelector("g");
                t && (t.style.display = i ? "" : "none")
            }
        }

        onDone(t, e) {
            var n;
            null === (n = e.panzoom) || void 0 === n || n.on("afterTransform", () => {
                this.instance.isCurrentSlide(e) && this.onRefresh()
            }), this.instance.isCurrentSlide(e) && this.onRefresh()
        }

        createContainer() {
            const t = this.instance.container;
            if (!t) return null;
            const e = this.option("parentEl") || t, n = document.createElement("div");
            return kt(n, "fancybox__toolbar"), e.prepend(n), n.addEventListener("click", this.onClick, {
                passive: !1,
                capture: !0
            }), t && kt(t, "has-toolbar"), this.container = n, n
        }

        createEl(t) {
            const e = this.instance, n = e.carousel;
            if (!n) return null;
            if ("toggleFS" === t) return null;
            if ("fullscreen" === t && !e.fsAPI) return null;
            let i = null;
            const s = n.slides.length || 0;
            let r = 0, o = 0;
            for (const t of n.slides) (t.panzoom || "image" === t.type) && r++, ("image" === t.type || t.downloadSrc) && o++;
            if (s < 2 && ["infobar", "prev", "next"].includes(t)) return i;
            if (void 0 !== _e[t] && !r) return null;
            if ("download" === t && !o) return null;
            if ("thumbs" === t) {
                const t = e.plugins.Thumbs;
                if (!t || !t.isEnabled) return null
            }
            if ("slideshow" === t && (!n.plugins.Autoplay || s < 2)) return null;
            if (void 0 !== _e[t]) {
                const e = _e[t];
                i = document.createElement("button"), i.setAttribute("title", this.instance.localize(`{{${t.toUpperCase()}}}`)), kt(i, "f-button"), e.action && (i.dataset.panzoomAction = e.action), e.change && (i.dataset.panzoomChange = JSON.stringify(e.change)), i.appendChild(ut(this.instance.localize(e.icon)))
            } else {
                const e = (this.option("items") || [])[t];
                e && (i = ut(this.instance.localize(e.tpl)), "function" == typeof e.click && i.addEventListener("click", t => {
                    t.preventDefault(), t.stopPropagation(), "function" == typeof e.click && e.click.call(this, this, t)
                }))
            }
            const a = null == i ? void 0 : i.querySelector("svg");
            if (a) for (const [t, e] of Object.entries(Ae)) a.getAttribute(t) || a.setAttribute(t, String(e));
            return i
        }

        removeContainer() {
            const t = this.container;
            t && t.remove(), this.container = null, this.state = ke.Disabled;
            const e = this.instance.container;
            e && _t(e, "has-toolbar")
        }

        attach() {
            const t = this, e = t.instance;
            e.on("Carousel.initSlides", t.onReady), e.on("done", t.onDone), e.on("reveal", t.onChange), e.on("Carousel.change", t.onChange), t.onReady(t.instance)
        }

        detach() {
            const t = this, e = t.instance;
            e.off("Carousel.initSlides", t.onReady), e.off("done", t.onDone), e.off("reveal", t.onChange), e.off("Carousel.change", t.onChange), t.removeContainer()
        }
    }

    Object.defineProperty(ze, "defaults", {
        enumerable: !0, configurable: !0, writable: !0, value: {
            absolute: "auto",
            display: {
                left: ["infobar"],
                middle: [],
                right: ["iterateZoom", "slideshow", "fullscreen", "thumbs", "close"]
            },
            enabled: "auto",
            items: {
                infobar: {tpl: '<div class="fancybox__infobar" tabindex="-1"><span data-fancybox-current-index></span>/<span data-fancybox-count></span></div>'},
                download: {tpl: '<a class="f-button" title="{{DOWNLOAD}}" data-fancybox-download href="javasript:;"><svg><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M7 11l5 5 5-5M12 4v12"/></svg></a>'},
                prev: {tpl: '<button class="f-button" title="{{PREV}}" data-fancybox-prev><svg><path d="m15 6-6 6 6 6"/></svg></button>'},
                next: {tpl: '<button class="f-button" title="{{NEXT}}" data-fancybox-next><svg><path d="m9 6 6 6-6 6"/></svg></button>'},
                slideshow: {tpl: '<button class="f-button" title="{{TOGGLE_SLIDESHOW}}" data-fancybox-toggle-slideshow><svg><g><path d="M8 4v16l13 -8z"></path></g><g><path d="M8 4v15M17 4v15"/></g></svg></button>'},
                fullscreen: {tpl: '<button class="f-button" title="{{TOGGLE_FULLSCREEN}}" data-fancybox-toggle-fullscreen><svg><g><path d="M4 8V6a2 2 0 0 1 2-2h2M4 16v2a2 2 0 0 0 2 2h2M16 4h2a2 2 0 0 1 2 2v2M16 20h2a2 2 0 0 0 2-2v-2"/></g><g><path d="M15 19v-2a2 2 0 0 1 2-2h2M15 5v2a2 2 0 0 0 2 2h2M5 15h2a2 2 0 0 1 2 2v2M5 9h2a2 2 0 0 0 2-2V5"/></g></svg></button>'},
                thumbs: {tpl: '<button class="f-button" title="{{TOGGLE_THUMBS}}" data-fancybox-toggle-thumbs><svg><circle cx="5.5" cy="5.5" r="1"/><circle cx="12" cy="5.5" r="1"/><circle cx="18.5" cy="5.5" r="1"/><circle cx="5.5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="18.5" cy="12" r="1"/><circle cx="5.5" cy="18.5" r="1"/><circle cx="12" cy="18.5" r="1"/><circle cx="18.5" cy="18.5" r="1"/></svg></button>'},
                close: {tpl: '<button class="f-button" title="{{CLOSE}}" data-fancybox-close><svg><path d="m19.5 4.5-15 15M4.5 4.5l15 15"/></svg></button>'}
            },
            parentEl: null
        }
    });
    const Ie = {Hash: le, Html: ve, Images: ue, Slideshow: Ce, Thumbs: Le, Toolbar: ze}, Re = "with-fancybox",
        je = "hide-scrollbar", De = "--fancybox-scrollbar-compensate", $e = "--fancybox-body-margin",
        Fe = "is-animated", Be = "is-compact", Ne = "is-loading", He = "disabled", Ve = "tabindex", Ge = "download",
        We = "href", qe = "src", Xe = function () {
            var t = window.getSelection();
            return t && "Range" === t.type
        };
    let Ye = null, Ue = null;
    const Ze = new Map;
    let Ke = 0;

    class Je extends Ct {
        get isIdle() {
            return this.idle
        }

        get isCompact() {
            return this.option("compact")
        }

        constructor(t = [], e = {}, n = {}) {
            super(e), Object.defineProperty(this, "userSlides", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: []
            }), Object.defineProperty(this, "userPlugins", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: {}
            }), Object.defineProperty(this, "idle", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: !1
            }), Object.defineProperty(this, "idleTimer", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: null
            }), Object.defineProperty(this, "clickTimer", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: null
            }), Object.defineProperty(this, "pwt", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: 0
            }), Object.defineProperty(this, "ignoreFocusChange", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: !1
            }), Object.defineProperty(this, "state", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: re.Init
            }), Object.defineProperty(this, "id", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: 0
            }), Object.defineProperty(this, "container", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: null
            }), Object.defineProperty(this, "footer", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: null
            }), Object.defineProperty(this, "caption", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: null
            }), Object.defineProperty(this, "carousel", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: null
            }), Object.defineProperty(this, "lastFocus", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: null
            }), Object.defineProperty(this, "prevMouseMoveEvent", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0
            }), Object.defineProperty(this, "fsAPI", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: void 0
            }), this.fsAPI = (() => {
                let t, e = "", n = "", i = "";
                return document.fullscreenEnabled ? (e = "requestFullscreen", n = "exitFullscreen", i = "fullscreenElement") : document.webkitFullscreenEnabled && (e = "webkitRequestFullscreen", n = "webkitExitFullscreen", i = "webkitFullscreenElement"), e && (t = {
                    request: function (t) {
                        return "webkitRequestFullscreen" === e ? t[e](Element.ALLOW_KEYBOARD_INPUT) : t[e]()
                    }, exit: function () {
                        return document[i] && document[n]()
                    }, isFullscreen: function () {
                        return document[i]
                    }
                }), t
            })(), this.id = e.id || ++Ke, Ze.set(this.id, this), this.userSlides = t, this.userPlugins = n, queueMicrotask(() => {
                this.init()
            })
        }

        init() {
            if (this.state === re.Destroy) return;
            this.state = re.Init, this.attachPlugins(Object.assign(Object.assign({}, Je.Plugins), this.userPlugins)), this.emit("init"), this.emit("attachPlugins"), !0 === this.option("hideScrollbar") && (() => {
                if (!te) return;
                const t = document.body;
                if (t.classList.contains(je)) return;
                let e = window.innerWidth - document.documentElement.getBoundingClientRect().width;
                e < 0 && (e = 0);
                const n = t.currentStyle || window.getComputedStyle(t), i = parseFloat(n.marginRight);
                document.documentElement.style.setProperty(De, e + "px"), i && t.style.setProperty($e, i + "px"), t.classList.add(je)
            })(), this.initLayout(), this.scale();
            const t = () => {
                this.initCarousel(this.userSlides), this.state = re.Ready, this.attachEvents(), this.emit("ready"), setTimeout(() => {
                    this.container && this.container.setAttribute("aria-hidden", "false")
                }, 16)
            }, e = this.fsAPI;
            this.option("Fullscreen.autoStart") && e && !e.isFullscreen() ? e.request(this.container).then(() => t()).catch(() => t()) : t()
        }

        initLayout() {
            var t, e;
            const n = this.option("parentEl") || document.body, i = ut(this.localize(this.option("tpl.main") || ""));
            i && (i.setAttribute("id", "fancybox-" + this.id), i.setAttribute("aria-label", this.localize("{{MODAL}}")), i.classList.toggle(Be, this.isCompact), kt(i, this.option("mainClass") || ""), this.container = i, this.footer = i.querySelector(".fancybox__footer"), n.appendChild(i), kt(document.documentElement, Re), Ye && Ue || (Ye = document.createElement("span"), kt(Ye, "fancybox-focus-guard"), Ye.setAttribute(Ve, "0"), Ye.setAttribute("aria-hidden", "true"), Ye.setAttribute("aria-label", "Focus guard"), Ue = Ye.cloneNode(), null === (t = i.parentElement) || void 0 === t || t.insertBefore(Ye, i), null === (e = i.parentElement) || void 0 === e || e.append(Ue)), this.option("animated") && (kt(i, Fe), setTimeout(() => {
                this.isClosing() || _t(i, Fe)
            }, 350)), this.emit("initLayout"))
        }

        initCarousel(t) {
            const e = this.container;
            if (!e) return;
            const n = e.querySelector(".fancybox__carousel");
            if (!n) return;
            const i = this.carousel = new Jt(n, yt({}, {
                slides: t,
                transition: "fade",
                Panzoom: {
                    lockAxis: this.option("dragToClose") ? "xy" : "x",
                    infinite: !!this.option("dragToClose") && "y"
                },
                Dots: !1,
                Navigation: {
                    classes: {
                        container: "fancybox__nav",
                        button: "f-button",
                        isNext: "is-next",
                        isPrev: "is-prev"
                    }
                },
                initialPage: this.option("startIndex"),
                l10n: this.option("l10n")
            }, this.option("Carousel") || {}));
            i.on("*", (t, e, ...n) => {
                this.emit("Carousel." + e, t, ...n)
            }), i.on(["ready", "change"], () => {
                this.manageCaption()
            }), this.on("Carousel.removeSlide", (t, e, n) => {
                this.clearContent(n), n.state = void 0
            }), i.on("Panzoom.touchStart", () => {
                var t, e;
                this.isCompact || this.endIdle(), (null === (t = document.activeElement) || void 0 === t ? void 0 : t.closest(".f-thumbs")) && (null === (e = this.container) || void 0 === e || e.focus())
            }), i.on("settle", () => {
                this.idleTimer || this.isCompact || !this.option("idle") || this.setIdle(), this.option("autoFocus") && !this.isClosing && this.checkFocus()
            }), this.option("dragToClose") && (i.on("Panzoom.afterTransform", (t, e) => {
                const n = this.getSlide();
                if (n && lt(n.el)) return;
                const i = this.container;
                if (i) {
                    const t = Math.abs(e.current.f),
                        n = t < 1 ? "" : Math.max(.5, Math.min(1, 1 - t / e.contentRect.fitHeight * 1.5));
                    i.style.setProperty("--fancybox-ts", n ? "0s" : ""), i.style.setProperty("--fancybox-opacity", n + "")
                }
            }), i.on("Panzoom.touchEnd", (t, e, n) => {
                var i;
                const s = this.getSlide();
                if (s && lt(s.el)) return;
                if (e.isMobile && document.activeElement && -1 !== ["TEXTAREA", "INPUT"].indexOf(null === (i = document.activeElement) || void 0 === i ? void 0 : i.nodeName)) return;
                const r = Math.abs(e.dragOffset.y);
                "y" === e.lockedAxis && (r >= 200 || r >= 50 && e.dragOffset.time < 300) && (n && n.cancelable && n.preventDefault(), this.close(n, "f-throwOut" + (e.current.f < 0 ? "Up" : "Down")))
            })), i.on("change", t => {
                var e;
                let n = null === (e = this.getSlide()) || void 0 === e ? void 0 : e.triggerEl;
                if (n) {
                    const e = new CustomEvent("slideTo", {bubbles: !0, cancelable: !0, detail: t.page});
                    n.dispatchEvent(e)
                }
            }), i.on(["refresh", "change"], t => {
                const e = this.container;
                if (!e) return;
                for (const n of e.querySelectorAll("[data-fancybox-current-index]")) n.innerHTML = t.page + 1;
                for (const n of e.querySelectorAll("[data-fancybox-count]")) n.innerHTML = t.pages.length;
                if (!t.isInfinite) {
                    for (const n of e.querySelectorAll("[data-fancybox-next]")) t.page < t.pages.length - 1 ? (n.removeAttribute(He), n.removeAttribute(Ve)) : (n.setAttribute(He, ""), n.setAttribute(Ve, "-1"));
                    for (const n of e.querySelectorAll("[data-fancybox-prev]")) t.page > 0 ? (n.removeAttribute(He), n.removeAttribute(Ve)) : (n.setAttribute(He, ""), n.setAttribute(Ve, "-1"))
                }
                const n = this.getSlide();
                if (!n) return;
                let i = n.downloadSrc || "";
                i || "image" !== n.type || n.error || "string" != typeof n.src || (i = n.src);
                for (const t of e.querySelectorAll("[data-fancybox-download]")) {
                    const e = n.downloadFilename;
                    i ? (t.removeAttribute(He), t.removeAttribute(Ve), t.setAttribute(We, i), t.setAttribute(Ge, e || i), t.setAttribute("target", "_blank")) : (t.setAttribute(He, ""), t.setAttribute(Ve, "-1"), t.removeAttribute(We), t.removeAttribute(Ge))
                }
            }), this.emit("initCarousel")
        }

        attachEvents() {
            const t = this, e = t.container;
            if (!e) return;
            e.addEventListener("click", t.onClick, {
                passive: !1,
                capture: !1
            }), e.addEventListener("wheel", t.onWheel, {
                passive: !1,
                capture: !1
            }), document.addEventListener("keydown", t.onKeydown, {
                passive: !1,
                capture: !0
            }), document.addEventListener("visibilitychange", t.onVisibilityChange, !1), document.addEventListener("mousemove", t.onMousemove), t.option("trapFocus") && document.addEventListener("focus", t.onFocus, !0), window.addEventListener("resize", t.onResize);
            const n = window.visualViewport;
            n && (n.addEventListener("scroll", t.onResize), n.addEventListener("resize", t.onResize))
        }

        detachEvents() {
            const t = this, e = t.container;
            if (!e) return;
            document.removeEventListener("keydown", t.onKeydown, {
                passive: !1,
                capture: !0
            }), e.removeEventListener("wheel", t.onWheel, {
                passive: !1,
                capture: !1
            }), e.removeEventListener("click", t.onClick, {
                passive: !1,
                capture: !1
            }), document.removeEventListener("mousemove", t.onMousemove), window.removeEventListener("resize", t.onResize);
            const n = window.visualViewport;
            n && (n.removeEventListener("resize", t.onResize), n.removeEventListener("scroll", t.onResize)), document.removeEventListener("visibilitychange", t.onVisibilityChange, !1), document.removeEventListener("focus", t.onFocus, !0)
        }

        scale() {
            const t = this.container;
            if (!t) return;
            const e = window.visualViewport, n = Math.max(1, (null == e ? void 0 : e.scale) || 1);
            let i = "", s = "", r = "";
            if (e && n > 1) {
                let t = e.offsetLeft + "px", o = e.offsetTop + "px";
                i = e.width * n + "px", s = e.height * n + "px", r = `translate3d(${t}, ${o}, 0) scale(${1 / n})`
            }
            t.style.transform = r, t.style.width = i, t.style.height = s
        }

        onClick(t) {
            var e, n;
            const {container: i, isCompact: s} = this;
            if (!i || this.isClosing()) return;
            !s && this.option("idle") && this.resetIdle();
            const r = t.composedPath()[0];
            if (r.closest(".f-spinner") || r.closest("[data-fancybox-close]")) return t.preventDefault(), void this.close(t);
            if (r.closest("[data-fancybox-prev]")) return t.preventDefault(), void this.prev();
            if (r.closest("[data-fancybox-next]")) return t.preventDefault(), void this.next();
            const o = document.activeElement;
            if (Xe() && o && i.contains(o)) return;
            if (r === (null === (e = this.carousel) || void 0 === e ? void 0 : e.container)) return;
            if (s && "image" === (null === (n = this.getSlide()) || void 0 === n ? void 0 : n.type)) return void (this.clickTimer ? (clearTimeout(this.clickTimer), this.clickTimer = null) : this.clickTimer = setTimeout(() => {
                this.toggleIdle(), this.clickTimer = null
            }, 350));
            if (this.emit("click", t), t.defaultPrevented) return;
            let a = !1;
            if (r.closest(".fancybox__content")) {
                if (o) {
                    if (o.closest("[contenteditable]")) return;
                    r.matches(ne) || o.blur()
                }
                if (Xe()) return;
                a = this.option("contentClick")
            } else r.closest(".fancybox__carousel") && !r.matches(ne) && (a = this.option("backdropClick"));
            "close" === a ? (t.preventDefault(), this.close(t)) : "next" === a ? (t.preventDefault(), this.next()) : "prev" === a && (t.preventDefault(), this.prev())
        }

        onWheel(t) {
            var e;
            let n = this.option("wheel", t);
            (null === (e = t.target) || void 0 === e ? void 0 : e.closest(".fancybox__thumbs")) && (n = "slide");
            const i = "slide" === n, s = [-t.deltaX || 0, -t.deltaY || 0, -t.detail || 0].reduce((function (t, e) {
                return Math.abs(e) > Math.abs(t) ? e : t
            })), r = Math.max(-1, Math.min(1, s)), o = Date.now();
            this.pwt && o - this.pwt < 300 ? i && t.preventDefault() : (this.pwt = o, this.emit("wheel", t), t.defaultPrevented || ("close" === n ? (t.preventDefault(), this.close(t)) : "slide" === n && (t.preventDefault(), this[r > 0 ? "prev" : "next"]())))
        }

        onKeydown(t) {
            if (!this.isTopmost()) return;
            this.isCompact || !this.option("idle") || this.isClosing() || this.resetIdle();
            const e = t.key, n = this.option("keyboard");
            if (!n || t.ctrlKey || t.altKey || t.shiftKey) return;
            const i = t.composedPath()[0], s = document.activeElement && document.activeElement.classList,
                r = s && s.contains("f-button") || i.dataset.carouselPage || i.dataset.carouselIndex;
            if ("Escape" !== e && !r && Lt(i) && (i.isContentEditable || -1 !== ["TEXTAREA", "OPTION", "INPUT", "SELECT", "VIDEO"].indexOf(i.nodeName))) return;
            this.emit("keydown", e, t);
            const o = n[e];
            "function" == typeof this[o] && (t.preventDefault(), this[o]())
        }

        onResize() {
            const t = this.container;
            if (!t) return;
            const e = this.isCompact;
            t.classList.toggle("is-compact", e), this.manageCaption(this.getSlide()), this.isCompact ? this.clearIdle() : this.endIdle(), this.scale(), this.emit("resize")
        }

        onFocus(t) {
            this.isTopmost() && this.checkFocus(t)
        }

        onMousemove(t) {
            this.prevMouseMoveEvent = t, !this.isCompact && this.option("idle") && this.resetIdle()
        }

        onVisibilityChange() {
            "visible" === document.visibilityState ? this.checkFocus() : this.endIdle()
        }

        manageCloseBtn(t) {
            const e = this.optionFor(t, "closeButton") || !1;
            if ("auto" === e) {
                const t = this.plugins.Toolbar;
                if (t && t.state === ke.Ready) return
            }
            if (!e) return;
            if (!t.contentEl || t.closeBtnEl) return;
            const n = this.option("tpl.closeButton");
            if (n) {
                const e = ut(this.localize(n));
                t.closeBtnEl = t.contentEl.appendChild(e), t.el && kt(t.el, "has-close-btn")
            }
        }

        manageCaption(t) {
            var e, n;
            const i = "fancybox__caption", s = "has-caption", r = this.container;
            if (!r) return;
            _t(r, s);
            const o = this.isCompact || this.option("commonCaption"), a = !o;
            if (this.caption && this.stop(this.caption), a && this.caption && (this.caption.remove(), this.caption = null), o && !this.caption) for (const t of (null === (e = this.carousel) || void 0 === e ? void 0 : e.slides) || []) t.captionEl && (t.captionEl.remove(), t.captionEl = void 0, _t(t.el, s), null === (n = t.el) || void 0 === n || n.removeAttribute("aria-labelledby"));
            if (t || (t = this.getSlide()), !t || o && !this.isCurrentSlide(t)) return;
            const l = t.el;
            let c = this.optionFor(t, "caption", "");
            if (!c) return void (o && this.caption && this.animate(this.caption, "f-fadeOut", () => {
                this.caption && (this.caption.innerHTML = "")
            }));
            let u = null;
            if (a) {
                if (u = t.captionEl || null, l && !u) {
                    const e = `fancybox__caption_${this.id}_${t.index}`;
                    u = document.createElement("div"), kt(u, i), u.setAttribute("id", e), t.captionEl = l.appendChild(u), kt(l, s), l.setAttribute("aria-labelledby", e)
                }
            } else u = this.caption, u || (u = r.querySelector("." + i)), u || (u = document.createElement("div"), u.dataset.fancyboxCaption = "", kt(u, i), (this.footer || r).prepend(u)), kt(r, s), this.caption = u;
            u && (u.innerHTML = "", "string" == typeof c || "number" == typeof c ? u.innerHTML = c + "" : c instanceof HTMLElement && u.appendChild(c))
        }

        checkFocus(t) {
            var e;
            const n = document.activeElement || null;
            n && (null === (e = this.container) || void 0 === e ? void 0 : e.contains(n)) || this.focus(t)
        }

        focus(t) {
            var e;
            if (this.ignoreFocusChange) return;
            const n = document.activeElement || null, i = (null == t ? void 0 : t.target) || null, s = this.container,
                r = this.getSlide();
            if (!s || !(null === (e = this.carousel) || void 0 === e ? void 0 : e.viewport)) return;
            if (!t && n && s.contains(n)) return;
            const o = r && r.state === oe.Ready ? r.el : null;
            if (!o || o.contains(n) || s === n) return;
            t && t.cancelable && t.preventDefault(), this.ignoreFocusChange = !0;
            const a = Array.from(s.querySelectorAll(ne));
            let l = [], c = null;
            for (let t of a) {
                const e = !t.offsetParent || t.closest('[aria-hidden="true"]'), n = o && o.contains(t),
                    i = !this.carousel.viewport.contains(t);
                if (t === s || (n || i) && !e) {
                    l.push(t);
                    const e = t.dataset.origTabindex;
                    void 0 !== e && e && (t.tabIndex = parseFloat(e)), t.removeAttribute("data-orig-tabindex"), !t.hasAttribute("autoFocus") && c || (c = t)
                } else {
                    const e = void 0 === t.dataset.origTabindex ? t.getAttribute("tabindex") || "" : t.dataset.origTabindex;
                    e && (t.dataset.origTabindex = e), t.tabIndex = -1
                }
            }
            let u = null;
            t ? (!i || l.indexOf(i) < 0) && (u = c || s, l.length && (n === Ue ? u = l[0] : this.lastFocus !== s && n !== Ye || (u = l[l.length - 1]))) : u = r && "image" === r.type ? s : c || s, u && ie(u), this.lastFocus = document.activeElement, this.ignoreFocusChange = !1
        }

        next() {
            const t = this.carousel;
            t && t.pages.length > 1 && t.slideNext()
        }

        prev() {
            const t = this.carousel;
            t && t.pages.length > 1 && t.slidePrev()
        }

        jumpTo(...t) {
            this.carousel && this.carousel.slideTo(...t)
        }

        isTopmost() {
            var t;
            return (null === (t = Je.getInstance()) || void 0 === t ? void 0 : t.id) == this.id
        }

        animate(t = null, e = "", n) {
            if (!t || !e) return void (n && n());
            this.stop(t);
            const i = s => {
                s.target === t && t.dataset.animationName && (t.removeEventListener("animationend", i), delete t.dataset.animationName, n && n(), _t(t, e))
            };
            t.dataset.animationName = e, t.addEventListener("animationend", i), kt(t, e)
        }

        stop(t) {
            t && t.dispatchEvent(new CustomEvent("animationend", {bubbles: !1, cancelable: !0, currentTarget: t}))
        }

        setContent(t, e = "", n = !0) {
            if (this.isClosing()) return;
            const i = t.el;
            if (!i) return;
            let s = null;
            if (Lt(e) ? s = e : (s = ut(e + ""), Lt(s) || (s = document.createElement("div"), s.innerHTML = e + "")), ["img", "picture", "iframe", "video", "audio"].includes(s.nodeName.toLowerCase())) {
                const t = document.createElement("div");
                t.appendChild(s), s = t
            }
            Lt(s) && t.filter && !t.error && (s = s.querySelector(t.filter)), s && Lt(s) ? (kt(s, "fancybox__content"), t.id && s.setAttribute("id", t.id), "none" !== s.style.display && "none" !== getComputedStyle(s).getPropertyValue("display") || (s.style.display = t.display || this.option("defaultDisplay") || "flex"), i.classList.add("has-" + (t.error ? "error" : t.type || "unknown")), i.prepend(s), t.contentEl = s, n && this.revealContent(t), this.manageCloseBtn(t), this.manageCaption(t)) : this.setError(t, "{{ELEMENT_NOT_FOUND}}")
        }

        revealContent(t, e) {
            const n = t.el, i = t.contentEl;
            n && i && (this.emit("reveal", t), this.hideLoading(t), t.state = oe.Opening, (e = this.isOpeningSlide(t) ? void 0 === e ? this.optionFor(t, "showClass") : e : "f-fadeIn") ? this.animate(i, e, () => {
                this.done(t)
            }) : this.done(t))
        }

        done(t) {
            this.isClosing() || (t.state = oe.Ready, this.emit("done", t), kt(t.el, "is-done"), this.isCurrentSlide(t) && this.option("autoFocus") && queueMicrotask(() => {
                var e;
                null === (e = t.panzoom) || void 0 === e || e.updateControls(), this.option("autoFocus") && (this.option("autoFocus") ? this.focus() : this.checkFocus())
            }), this.isOpeningSlide(t) && !this.isCompact && this.option("idle") && this.setIdle())
        }

        isCurrentSlide(t) {
            const e = this.getSlide();
            return !(!t || !e) && e.index === t.index
        }

        isOpeningSlide(t) {
            var e, n;
            return null === (null === (e = this.carousel) || void 0 === e ? void 0 : e.prevPage) && t.index === (null === (n = this.getSlide()) || void 0 === n ? void 0 : n.index)
        }

        showLoading(t) {
            t.state = oe.Loading;
            const e = t.el;
            e && (kt(e, Ne), this.emit("loading", t), t.spinnerEl || setTimeout(() => {
                if (!this.isClosing() && !t.spinnerEl && t.state === oe.Loading) {
                    let n = ut(Ot);
                    t.spinnerEl = n, e.prepend(n), this.animate(n, "f-fadeIn")
                }
            }, 250))
        }

        hideLoading(t) {
            const e = t.el;
            if (!e) return;
            const n = t.spinnerEl;
            this.isClosing() ? null == n || n.remove() : (_t(e, Ne), n && this.animate(n, "f-fadeOut", () => {
                n.remove()
            }), t.state === oe.Loading && (this.emit("loaded", t), t.state = oe.Ready))
        }

        setError(t, e) {
            if (this.isClosing()) return;
            const n = new Event("error", {bubbles: !0, cancelable: !0});
            if (this.emit("error", n, t), n.defaultPrevented) return;
            t.error = e, this.hideLoading(t), this.clearContent(t);
            const i = document.createElement("div");
            i.classList.add("fancybox-error"), i.innerHTML = this.localize(e || "<p>{{ERROR}}</p>"), this.setContent(t, i)
        }

        clearContent(t) {
            if (void 0 === t.state) return;
            this.emit("clearContent", t), t.contentEl && (t.contentEl.remove(), t.contentEl = void 0);
            const e = t.el;
            e && (_t(e, "has-error"), _t(e, "has-unknown"), _t(e, "has-" + (t.type || "unknown"))), t.closeBtnEl && t.closeBtnEl.remove(), t.closeBtnEl = void 0, t.captionEl && t.captionEl.remove(), t.captionEl = void 0, t.spinnerEl && t.spinnerEl.remove(), t.spinnerEl = void 0
        }

        getSlide() {
            var t;
            const e = this.carousel;
            return (null === (t = null == e ? void 0 : e.pages[null == e ? void 0 : e.page]) || void 0 === t ? void 0 : t.slides[0]) || void 0
        }

        close(t, e) {
            if (this.isClosing()) return;
            const n = new Event("shouldClose", {bubbles: !0, cancelable: !0});
            if (this.emit("shouldClose", n, t), n.defaultPrevented) return;
            t && t.cancelable && (t.preventDefault(), t.stopPropagation());
            const i = this.fsAPI, s = () => {
                this.proceedClose(t, e)
            };
            i && i.isFullscreen() === this.container ? Promise.resolve(i.exit()).then(() => s()) : s()
        }

        clearIdle() {
            this.idleTimer && clearTimeout(this.idleTimer), this.idleTimer = null
        }

        setIdle(t = !1) {
            const e = () => {
                this.clearIdle(), this.idle = !0, kt(this.container, "is-idle"), this.emit("setIdle")
            };
            if (this.clearIdle(), !this.isClosing()) if (t) e(); else {
                const t = this.option("idle");
                t && (this.idleTimer = setTimeout(e, t))
            }
        }

        endIdle() {
            this.clearIdle(), this.idle && !this.isClosing() && (this.idle = !1, _t(this.container, "is-idle"), this.emit("endIdle"))
        }

        resetIdle() {
            this.endIdle(), this.setIdle()
        }

        toggleIdle() {
            this.idle ? this.endIdle() : this.setIdle(!0)
        }

        toggleFullscreen() {
            const t = this.fsAPI;
            t && (t.isFullscreen() ? t.exit() : this.container && t.request(this.container))
        }

        isClosing() {
            return [re.Closing, re.CustomClosing, re.Destroy].includes(this.state)
        }

        proceedClose(t, e) {
            var n, i;
            this.state = re.Closing, this.clearIdle(), this.detachEvents();
            const s = this.container, r = this.carousel, o = this.getSlide(),
                a = o && this.option("placeFocusBack") ? o.triggerEl || this.option("triggerEl") : null;
            if (a && (Qt(a) ? ie(a) : a.focus()), s && (kt(s, "is-closing"), s.setAttribute("aria-hidden", "true"), this.option("animated") && kt(s, Fe), s.style.pointerEvents = "none"), r) {
                r.clearTransitions(), null === (n = r.panzoom) || void 0 === n || n.destroy(), null === (i = r.plugins.Navigation) || void 0 === i || i.detach();
                for (const t of r.slides) {
                    t.state = oe.Closing, this.hideLoading(t);
                    const e = t.contentEl;
                    e && this.stop(e);
                    const n = null == t ? void 0 : t.panzoom;
                    n && (n.stop(), n.detachEvents(), n.detachObserver()), this.isCurrentSlide(t) || r.emit("removeSlide", t)
                }
            }
            this.emit("close", t), this.state !== re.CustomClosing ? (void 0 === e && o && (e = this.optionFor(o, "hideClass")), e && o ? (this.animate(o.contentEl, e, () => {
                r && r.emit("removeSlide", o)
            }), setTimeout(() => {
                this.destroy()
            }, 500)) : this.destroy()) : setTimeout(() => {
                this.destroy()
            }, 500)
        }

        destroy() {
            var t;
            if (this.state === re.Destroy) return;
            this.state = re.Destroy, null === (t = this.carousel) || void 0 === t || t.destroy();
            const e = this.container;
            e && e.remove(), Ze.delete(this.id);
            const n = Je.getInstance();
            n ? n.focus() : (Ye && (Ye.remove(), Ye = null), Ue && (Ue.remove(), Ue = null), _t(document.documentElement, Re), (() => {
                if (!te) return;
                const t = document, e = t.body;
                e.classList.remove(je), e.style.setProperty($e, ""), t.documentElement.style.setProperty(De, "")
            })(), this.emit("destroy"))
        }

        static bind(t, e, n) {
            if (!te) return;
            let i, s = "", r = {};
            if (void 0 === t ? i = document.body : "string" == typeof t ? (i = document.body, s = t, "object" == typeof e && (r = e || {})) : (i = t, "string" == typeof e && (s = e), "object" == typeof n && (r = n || {})), !i || !Lt(i)) return;
            s = s || "[data-fancybox]";
            const o = Je.openers.get(i) || new Map;
            o.set(s, r), Je.openers.set(i, o), 1 === o.size && i.addEventListener("click", Je.fromEvent)
        }

        static unbind(t, e) {
            let n, i = "";
            if ("string" == typeof t ? (n = document.body, i = t) : (n = t, "string" == typeof e && (i = e)), !n) return;
            const s = Je.openers.get(n);
            s && i && s.delete(i), i && s || (Je.openers.delete(n), n.removeEventListener("click", Je.fromEvent))
        }

        static destroy() {
            let t;
            for (; t = Je.getInstance();) t.destroy();
            for (const t of Je.openers.keys()) t.removeEventListener("click", Je.fromEvent);
            Je.openers = new Map
        }

        static fromEvent(t) {
            if (t.defaultPrevented) return;
            if (t.button && 0 !== t.button) return;
            if (t.ctrlKey || t.metaKey || t.shiftKey) return;
            let e = t.composedPath()[0];
            const n = e.closest("[data-fancybox-trigger]");
            if (n) {
                const t = n.dataset.fancyboxTrigger || "", i = document.querySelectorAll(`[data-fancybox="${t}"]`),
                    s = parseInt(n.dataset.fancyboxIndex || "", 10) || 0;
                e = i[s] || e
            }
            if (!(e && e instanceof Element)) return;
            let i, s, r, o;
            if ([...Je.openers].reverse().find(([t, n]) => !(!t.contains(e) || ![...n].reverse().find(([n, a]) => {
                let l = e.closest(n);
                return !!l && (i = t, s = n, r = l, o = a, !0)
            }))), !i || !s || !r) return;
            o = o || {}, t.preventDefault(), e = r;
            let a = [], l = yt({}, se, o);
            l.event = t, l.triggerEl = e, l.delegate = n;
            const c = l.groupAll, u = l.groupAttr, d = u && e ? e.getAttribute("" + u) : "";
            if ((!e || d || c) && (a = [].slice.call(i.querySelectorAll(s))), e && !c && (a = d ? a.filter(t => t.getAttribute("" + u) === d) : [e]), !a.length) return;
            const h = Je.getInstance();
            return h && h.options.triggerEl && a.indexOf(h.options.triggerEl) > -1 ? void 0 : (e && (l.startIndex = a.indexOf(e)), Je.fromNodes(a, l))
        }

        static fromSelector(t, e) {
            let n = null, i = "";
            if ("string" == typeof t ? (n = document.body, i = t) : t instanceof HTMLElement && "string" == typeof e && (n = t, i = e), !n || !i) return !1;
            const s = Je.openers.get(n);
            if (!s) return !1;
            const r = s.get(i);
            return !!r && Je.fromNodes(Array.from(n.querySelectorAll(i)), r)
        }

        static fromNodes(t, e) {
            e = yt({}, se, e || {});
            const n = [];
            for (const i of t) {
                const t = i.dataset || {},
                    s = t.src || i.getAttribute(We) || i.getAttribute("currentSrc") || i.getAttribute(qe) || void 0;
                let r;
                const o = e.delegate;
                let a;
                o && n.length === e.startIndex && (r = o instanceof HTMLImageElement ? o : o.querySelector("img:not([aria-hidden])")), r || (r = i instanceof HTMLImageElement ? i : i.querySelector("img:not([aria-hidden])")), r && (a = r.currentSrc || r.src || void 0, !a && r.dataset && (a = r.dataset.lazySrc || r.dataset.src || void 0));
                const l = {src: s, triggerEl: i, thumbEl: r, thumbElSrc: a, thumbSrc: a};
                for (const e in t) l[e] = t[e] + "";
                n.push(l)
            }
            return new Je(n, e)
        }

        static getInstance(t) {
            return t ? Ze.get(t) : Array.from(Ze.values()).reverse().find(t => !t.isClosing() && t) || null
        }

        static getSlide() {
            var t;
            return (null === (t = Je.getInstance()) || void 0 === t ? void 0 : t.getSlide()) || null
        }

        static show(t = [], e = {}) {
            return new Je(t, e)
        }

        static next() {
            const t = Je.getInstance();
            t && t.next()
        }

        static prev() {
            const t = Je.getInstance();
            t && t.prev()
        }

        static close(t = !0, ...e) {
            if (t) for (const t of Ze.values()) t.close(...e); else {
                const t = Je.getInstance();
                t && t.close(...e)
            }
        }
    }

    Object.defineProperty(Je, "version", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "5.0.24"
    }), Object.defineProperty(Je, "defaults", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: se
    }), Object.defineProperty(Je, "Plugins", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: Ie
    }), Object.defineProperty(Je, "openers", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: new Map
    }), $((function () {
        new it(".master__slider", {
            spaceBetween: 10,
            slidesPerView: 1,
            modules: [ot],
            pagination: {el: ".swiper-pagination", type: "bullets"}
        }), new it(".project__gallery", {
            spaceBetween: 10,
            slidesPerView: 3,
            modules: [ot],
            pagination: {el: ".swiper-pagination", type: "bullets"}
        });

        function t(t) {
            return e.apply(this, arguments)
        }

        function e() {
            return (e = s()(o.a.mark((function t(e) {
                var n = this;
                return o.a.wrap((function (t) {
                    for (; ;) switch (t.prev = t.next) {
                        case 0:
                            return t.prev = 0, console.log($(this), e), t.next = 4, navigator.clipboard.writeText(e);
                        case 4:
                            $(this).addClass("success"), h()((function () {
                                $(n).removeClass("success")
                            }), 1e3), t.next = 11;
                            break;
                        case 8:
                            t.prev = 8, t.t0 = t.catch(0), console.warn("Ошибка при копировании", t.t0);
                        case 11:
                        case"end":
                            return t.stop()
                    }
                }), t, this, [[0, 8]])
            })))).apply(this, arguments)
        }

        if (l()(Je).call(Je, '[data-fancybox="gallery"]'), $(".favourite-btn").on("click", (function () {
            $(this).toggleClass("active")
        })), $(".copy-btn").on("click", (function () {
            if ($(this).is(".project__item-share")) {
                var e, n = u()(e = $(this).closest(".project__item")).call(e, ".project__item-link").attr("href");
                t.call(this, n)
            } else t.call(this, window.location.href)
        })), $(".project__detail-btns").length) {
            var n = $(".project__detail-btns");
            0 === u()(n).call(n, ".dropdown__content > ul").children().length && u()(n).call(n, ".dropdown").addClass("disabled")
        }
        $(".project_load__success").length && $(".project_load__success-close").on("click", (function () {
            $(".project_load__success").removeClass("show"), $("body").removeClass("no-scroll"), $(".backdrop").length && ($(".backdrop").remove(), h()((function () {
                $(".backdrop").removeClass("active")
            }), 0))
        })), $(".master__popup--open").on("click", (function () {
            $("body").addClass("no-scroll"), $(".master__popup").addClass("open"), $(".backdrop").length || ($("body").append("<div class='backdrop'></div>"), h()((function () {
                $(".backdrop").addClass("active")
            }), 0))
        })), $(".master-contact__close").on("click", (function () {
            $("body").removeClass("no-scroll"), $(".master__popup").removeClass("open"), $(".backdrop").length && ($(".backdrop").remove(), h()((function () {
                $(".backdrop").removeClass("active")
            }), 0))
        }))
    }))
}]);

const sortSwitch=document.querySelectorAll('.sort-by__Contbtn');
const catalogContent=document.querySelector('.catalog__content');
for(let i=0;i<sortSwitch.length;i++){
  sortSwitch[i].addEventListener('click',function(){
    if(i===0){
      catalogContent.classList.add('catalog__content--listActive');
    }else{
     catalogContent.classList.remove('catalog__content--listActive');

    }
for(let sort of sortSwitch){
  sort.classList.remove('sort-by--active')
}
    this.classList.toggle('sort-by--active');
  })
}
$(function(){

const sideBarItem=document.querySelectorAll('.bundle2');
const mainMapDot=document.getElementById('Ð¢Ð¾Ñ‡ÐºÐ¸');
if($('#Ð¢Ð¾Ñ‡ÐºÐ¸').length){


const mainMapDotchildren=mainMapDot.childNodes;
//console.log(mainMapDot);
//console.log(mainMapDotchildren);

for (let i = 0; i < sideBarItem.length; i++) {
  sideBarItem[i].addEventListener('mouseenter', function () {
     for (let item of sideBarItem) {
       item.classList.remove('active1')
     }

   
    this.classList.toggle('active1');

for(let j=0;j<mainMapDotchildren.length;j++){


if(i==0 && j==1){
 mainMapDotchildren[1].classList.toggle('ada')
}else
if(i==1 && j==7){
 mainMapDotchildren[7].classList.toggle('ada')
}
else
if(i==2 && j==9){
 mainMapDotchildren[9].classList.toggle('ada')

}
else
if(i==3 && j==11){
 mainMapDotchildren[11].classList.toggle('ada')

}
else
if(i==4 && j==13){
 mainMapDotchildren[13].classList.toggle('ada')

}else
if(i==5 && j==15){
 mainMapDotchildren[15].classList.toggle('ada')

}
else
if(i==6 && j==17){
 mainMapDotchildren[17].classList.toggle('ada')

}
else
if(i==7 && j==19){
 mainMapDotchildren[19].classList.toggle('ada')

}
else
if(i==8 && j==21){
 mainMapDotchildren[21].classList.toggle('ada')
}
else
if(i==9 && j==23){
 mainMapDotchildren[23].classList.toggle('ada')
}
else
if(i==10 && j==25){
 mainMapDotchildren[25].classList.toggle('ada')
}
else
if(i==11 && j==27){
 mainMapDotchildren[27].classList.toggle('ada')
}
else
if(i==12 && j==29){
 mainMapDotchildren[29].classList.toggle('ada')
}
else
if(i==13 && j==31){
 mainMapDotchildren[31].classList.toggle('ada')
}
else
if(i==14 && j==35){
 mainMapDotchildren[35].classList.toggle('ada')
}
else
if(i==15 && j==37){
 mainMapDotchildren[37].classList.toggle('ada')
}
else
if(i==16 && j==39){
 mainMapDotchildren[39].classList.toggle('ada')
}
}
  });
}



for (i = 0; i < sideBarItem.length; i++) {
  sideBarItem[i].addEventListener('mouseleave', function () {
     for (let item of sideBarItem) {
       item.classList.remove('active1')
     }
    
    this.classList.remove('active1');

for(let j=0;j<mainMapDotchildren.length;j++){

 mainMapDotchildren[1].classList.remove('ada')
mainMapDotchildren[7].classList.remove('ada')
 mainMapDotchildren[9].classList.remove('ada')
 mainMapDotchildren[11].classList.remove('ada')
 mainMapDotchildren[13].classList.remove('ada')
 mainMapDotchildren[15].classList.remove('ada')
 mainMapDotchildren[17].classList.remove('ada')
 mainMapDotchildren[19].classList.remove('ada')
 mainMapDotchildren[21].classList.remove('ada')
 mainMapDotchildren[23].classList.remove('ada')
 mainMapDotchildren[25].classList.remove('ada')
 mainMapDotchildren[27].classList.remove('ada')
 mainMapDotchildren[29].classList.remove('ada')
 mainMapDotchildren[31].classList.remove('ada')
 mainMapDotchildren[35].classList.remove('ada')
 mainMapDotchildren[37].classList.remove('ada')
 mainMapDotchildren[39].classList.remove('ada')
}
  });
}
}
})





<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
/** @var array $arParams */
/** @var array $arResult */
/** @global CMain $APPLICATION */
/** @global CUser $USER */
/** @global CDatabase $DB */
/** @var CBitrixComponentTemplate $this */
/** @var string $templateName */
/** @var string $templateFile */
/** @var string $templateFolder */
/** @var string $componentPath */
/** @var CBitrixComponent $component */
$this->setFrameMode(true);
?>


<div class="main-map">
      <div class="main-map__inner">
        <div class="main-map__sidebar">
          <div class="main-map__logo"><img src="<?= SITE_TEMPLATE_PATH ?>/img/main-map__logo.svg" alt="" /></div>
          <div class="main-map__search"><svg width="26" height="26" viewbox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M17.3333 11.2666C17.3333 14.6171 14.6172 17.3332 11.2667 17.3332C7.91614 17.3332 5.20001 14.6171 5.20001 11.2666C5.20001 7.91602 7.91614 5.19989 11.2667 5.19989C14.6172 5.19989 17.3333 7.91602 17.3333 11.2666ZM16.1353 17.3608C14.801 18.4283 13.1084 19.0666 11.2667 19.0666C6.95886 19.0666 3.46667 15.5744 3.46667 11.2666C3.46667 6.95873 6.95886 3.46655 11.2667 3.46655C15.5745 3.46655 19.0667 6.95873 19.0667 11.2666C19.0667 13.1082 18.4285 14.8008 17.3609 16.1352L22.2796 21.0536C22.6179 21.3922 22.6179 21.9409 22.2796 22.2795C21.9411 22.6178 21.3923 22.6178 21.0538 22.2795L16.1353 17.3608Z" fill="#BDBDBD"></path>
            </svg><input type="text" placeholder="Поиск" /></div>
          <div class="main-map__wrapper"></div>
        </div>
        <div class="main-map__content">
          <div class="main-map__img"><img src="<?= SITE_TEMPLATE_PATH ?>/img/main-map.png" alt="" />            <svg width="984" height="1035" viewBox="0 0 984 1035" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Map ">
            <g id="&#208;&#162;&#208;&#190;&#209;&#135;&#208;&#186;&#208;&#184;">
            <g id="1">
            <g id="Ellipse 5" filter="url(#filter0_d_238_31959)">
            <circle cx="763" cy="140" r="16" fill="#943434"/>
            <circle cx="763" cy="140" r="14" stroke="white" stroke-width="4"/>
            </g>
            </g>
            <g id="2">
            <g id="Ellipse 5_2" filter="url(#filter1_d_238_31959)">
            <circle cx="880" cy="133" r="12" fill="#943434"/>
            <circle cx="880" cy="133" r="10" stroke="white" stroke-width="4"/>
            </g>
            </g>
            <g id="3">
            <g id="Ellipse 5_3" filter="url(#filter2_d_238_31959)">
            <circle cx="563" cy="77" r="12" fill="#943434"/>
            <circle cx="563" cy="77" r="10" stroke="white" stroke-width="4"/>
            </g>
            </g>
            <g id="4">
            <g id="Ellipse 5_4" filter="url(#filter3_d_238_31959)">
            <circle cx="658" cy="198" r="16" fill="#983337"/>
            <circle cx="658" cy="198" r="14" stroke="white" stroke-width="4"/>
            </g>
            </g>
            <g id="5">
            <g id="Ellipse 5_5" filter="url(#filter4_d_238_31959)">
            <circle cx="469" cy="366" r="16" fill="#943434"/>
            <circle cx="469" cy="366" r="14" stroke="white" stroke-width="4"/>
            </g>
            </g>
            <g id="6">
            <g id="Ellipse 5_6" filter="url(#filter5_d_238_31959)">
            <circle cx="610" cy="378" r="16" fill="#943434"/>
            <circle cx="610" cy="378" r="14" stroke="white" stroke-width="4"/>
            </g>
            </g>
            <g id="7">
            <g id="Ellipse 5_7" filter="url(#filter6_d_238_31959)">
            <circle cx="306" cy="410" r="16" fill="#943434"/>
            <circle cx="306" cy="410" r="14" stroke="white" stroke-width="4"/>
            </g>
            </g>
            <g id="8">
            <g id="Ellipse 5_8" filter="url(#filter7_d_238_31959)">
            <circle cx="272" cy="478" r="16" fill="#943434"/>
            <circle cx="272" cy="478" r="14" stroke="white" stroke-width="4"/>
            </g>
            </g>
            <g id="9">
            <g id="Ellipse 5_9" filter="url(#filter8_d_238_31959)">
            <circle cx="447" cy="503" r="16" fill="#943434"/>
            <circle cx="447" cy="503" r="14" stroke="white" stroke-width="4"/>
            </g>
            </g>
            <g id="10">
            <g id="Ellipse 6" filter="url(#filter9_d_238_31959)">
            <circle cx="562" cy="554" r="16" fill="#943434"/>
            <circle cx="562" cy="554" r="14" stroke="white" stroke-width="4"/>
            </g>
            </g>
            <g id="11">
            <g id="Ellipse 5_10" filter="url(#filter10_d_238_31959)">
            <circle cx="557" cy="663" r="16" fill="#943434"/>
            <circle cx="557" cy="663" r="14" stroke="white" stroke-width="4"/>
            </g>
            </g>
            <g id="12">
            <g id="Ellipse 5_11" filter="url(#filter11_d_238_31959)">
            <circle cx="603" cy="689" r="16" fill="#943434"/>
            <circle cx="603" cy="689" r="14" stroke="white" stroke-width="4"/>
            </g>
            </g>
            <g id="13">
            <g id="Ellipse 5_12" filter="url(#filter12_d_238_31959)">
            <circle cx="453" cy="729" r="16" fill="#943434"/>
            <circle cx="453" cy="729" r="14" stroke="white" stroke-width="4"/>
            </g>
            </g>
            <g id="14">
            <g id="Ellipse 5_13" filter="url(#filter13_d_238_31959)">
            <circle cx="570" cy="853" r="16" fill="#943434"/>
            <circle cx="570" cy="853" r="14" stroke="white" stroke-width="4"/>
            </g>
            </g>
            <g id="15">
            <g id="Ellipse 5_14" filter="url(#filter14_d_238_31959)">
            <circle cx="327" cy="766" r="16" fill="#943434"/>
            <circle cx="327" cy="766" r="14" stroke="white" stroke-width="4"/>
            </g>
            </g>
            <g id="16">
            <g id="Ellipse 5_15" filter="url(#filter15_d_238_31959)">
            <circle cx="224" cy="599" r="16" fill="#943434"/>
            <circle cx="224" cy="599" r="14" stroke="white" stroke-width="4"/>
            </g>
            </g>
            <g id="17">
            <g id="Ellipse 5_16" filter="url(#filter16_d_238_31959)">
            <circle cx="338" cy="510" r="16" fill="#943434"/>
            <circle cx="338" cy="510" r="14" stroke="white" stroke-width="4"/>
            </g>
            </g>
            <g id="18">
            <g id="Ellipse 5_17" filter="url(#filter17_d_238_31959)">
            <circle cx="283" cy="535" r="16" fill="#943434"/>
            <circle cx="283" cy="535" r="14" stroke="white" stroke-width="4"/>
            </g>
            </g>
            <g id="19">
            <g id="Ellipse 6_2" filter="url(#filter18_d_238_31959)">
            <circle cx="423" cy="606" r="16" fill="#943434"/>
            <circle cx="423" cy="606" r="14" stroke="white" stroke-width="4"/>
            </g>
            </g>
            <g id="20">
            <g id="Ellipse 5_18" filter="url(#filter19_d_238_31959)">
            <circle cx="133" cy="841" r="20" fill="#943434"/>
            <circle cx="133" cy="841" r="18" stroke="white" stroke-width="4"/>
            </g>
            </g>
            <g id="21">
            <g id="Ellipse 5_19" filter="url(#filter20_d_238_31959)">
            <circle cx="186" cy="915" r="12" fill="#943434"/>
            <circle cx="186" cy="915" r="10" stroke="white" stroke-width="4"/>
            </g>
            </g>
            <g id="22">
            <g id="Ellipse 5_20" filter="url(#filter21_d_238_31959)">
            <circle cx="309" cy="601" r="12" fill="#943434"/>
            <circle cx="309" cy="601" r="10" stroke="white" stroke-width="4"/>
            </g>
            </g>
            <g id="23">
            <g id="Ellipse 5_21" filter="url(#filter22_d_238_31959)">
            <circle cx="245" cy="682" r="12" fill="#943434"/>
            <circle cx="245" cy="682" r="10" stroke="white" stroke-width="4"/>
            </g>
            </g>
            <g id="24">
            <g id="Ellipse 5_22" filter="url(#filter23_d_238_31959)">
            <circle cx="156" cy="670" r="12" fill="#943434"/>
            <circle cx="156" cy="670" r="10" stroke="white" stroke-width="4"/>
            </g>
            </g>
            <g id="25">
            <g id="Ellipse 5_23" filter="url(#filter24_d_238_31959)">
            <circle cx="234" cy="801" r="12" fill="#943434"/>
            <circle cx="234" cy="801" r="10" stroke="white" stroke-width="4"/>
            </g>
            </g>
            <g id="26">
            <g id="Ellipse 5_24" filter="url(#filter25_d_238_31959)">
            <circle cx="266" cy="869" r="12" fill="#943434"/>
            <circle cx="266" cy="869" r="10" stroke="white" stroke-width="4"/>
            </g>
            </g>
            <g id="27">
            <g id="Ellipse 5_25" filter="url(#filter26_d_238_31959)">
            <circle cx="405" cy="827" r="12" fill="#943434"/>
            <circle cx="405" cy="827" r="10" stroke="white" stroke-width="4"/>
            </g>
            </g>
            <g id="28">
            <g id="Ellipse 5_26" filter="url(#filter27_d_238_31959)">
            <circle cx="269" cy="262" r="12" fill="#943434"/>
            <circle cx="269" cy="262" r="10" stroke="white" stroke-width="4"/>
            </g>
            </g>
            <g id="29">
            <g id="Ellipse 5_27" filter="url(#filter28_d_238_31959)">
            <circle cx="159" cy="775" r="12" fill="#943434"/>
            <circle cx="159" cy="775" r="10" stroke="white" stroke-width="4"/>
            </g>
            </g>
            <g id="30">
            <g id="Ellipse 5_28" filter="url(#filter29_d_238_31959)">
            <circle cx="113" cy="725" r="12" fill="#943434"/>
            <circle cx="113" cy="725" r="10" stroke="white" stroke-width="4"/>
            </g>
            </g>
            <g id="31">
            <g id="Ellipse 5_29" filter="url(#filter30_d_238_31959)">
            <circle cx="201" cy="517" r="12" fill="#943434"/>
            <circle cx="201" cy="517" r="10" stroke="white" stroke-width="4"/>
            </g>
            </g>
            <g id="32">
            <g id="Ellipse 5_30" filter="url(#filter31_d_238_31959)">
            <circle cx="767" cy="219" r="12" fill="#943434"/>
            <circle cx="767" cy="219" r="10" stroke="white" stroke-width="4"/>
            </g>
            </g>
            <g id="33">
            <g id="Ellipse 5_31" filter="url(#filter32_d_238_31959)">
            <circle cx="754" cy="300" r="12" fill="#943434"/>
            <circle cx="754" cy="300" r="10" stroke="white" stroke-width="4"/>
            </g>
            </g>
            <g id="34">
            <g id="Ellipse 5_32" filter="url(#filter33_d_238_31959)">
            <circle cx="346" cy="903" r="12" fill="#943434"/>
            <circle cx="346" cy="903" r="10" stroke="white" stroke-width="4"/>
            </g>
            </g>
            <g id="35">
            <g id="Ellipse 5_33" filter="url(#filter34_d_238_31959)">
            <circle cx="453" cy="898" r="12" fill="#943434"/>
            <circle cx="453" cy="898" r="10" stroke="white" stroke-width="4"/>
            </g>
            </g>
            <g id="36">
            <g id="Ellipse 5_34" filter="url(#filter35_d_238_31959)">
            <circle cx="480" cy="973" r="12" fill="#943434"/>
            <circle cx="480" cy="973" r="10" stroke="white" stroke-width="4"/>
            </g>
            </g>
            <g id="37">
            <g id="Ellipse 5_35" filter="url(#filter36_d_238_31959)">
            <circle cx="531" cy="822" r="12" fill="#943434"/>
            <circle cx="531" cy="822" r="10" stroke="white" stroke-width="4"/>
            </g>
            </g>
            <g id="38">
            <g id="Ellipse 5_36" filter="url(#filter37_d_238_31959)">
            <circle cx="629" cy="645" r="12" fill="#943434"/>
            <circle cx="629" cy="645" r="10" stroke="white" stroke-width="4"/>
            </g>
            </g>
            <g id="39">
            <g id="Ellipse 5_37" filter="url(#filter38_d_238_31959)">
            <circle cx="641" cy="517" r="12" fill="#943434"/>
            <circle cx="641" cy="517" r="10" stroke="white" stroke-width="4"/>
            </g>
            </g>
            <g id="40">
            <g id="Ellipse 5_38" filter="url(#filter39_d_238_31959)">
            <circle cx="685" cy="748" r="12" fill="#943434"/>
            <circle cx="685" cy="748" r="10" stroke="white" stroke-width="4"/>
            </g>
            </g>
            <g id="41">
            <g id="Ellipse 5_39" filter="url(#filter40_d_238_31959)">
            <circle cx="679" cy="821" r="12" fill="#943434"/>
            <circle cx="679" cy="821" r="10" stroke="white" stroke-width="4"/>
            </g>
            </g>
            <g id="42">
            <g id="Ellipse 5_40" filter="url(#filter41_d_238_31959)">
            <circle cx="615" cy="801" r="12" fill="#943434"/>
            <circle cx="615" cy="801" r="10" stroke="white" stroke-width="4"/>
            </g>
            </g>
            <g id="43">
            <g id="Ellipse 5_41" filter="url(#filter42_d_238_31959)">
            <circle cx="379" cy="258" r="12" fill="#943434"/>
            <circle cx="379" cy="258" r="10" stroke="white" stroke-width="4"/>
            </g>
            </g>
            <g id="44">
            <g id="Ellipse 5_42" filter="url(#filter43_d_238_31959)">
            <circle cx="513" cy="192" r="12" fill="#943434"/>
            <circle cx="513" cy="192" r="10" stroke="white" stroke-width="4"/>
            </g>
            </g>
            <g id="45">
            <g id="Ellipse 5_43" filter="url(#filter44_d_238_31959)">
            <circle cx="382" cy="661" r="12" fill="#943434"/>
            <circle cx="382" cy="661" r="10" stroke="white" stroke-width="4"/>
            </g>
            </g>
            <g id="46">
            <g id="Ellipse 5_44" filter="url(#filter45_d_238_31959)">
            <circle cx="400" cy="749" r="12" fill="#943434"/>
            <circle cx="400" cy="749" r="10" stroke="white" stroke-width="4"/>
            </g>
            </g>
            <g id="47">
            <g id="Ellipse 5_45" filter="url(#filter46_d_238_31959)">
            <circle cx="489" cy="671" r="12" fill="#943434"/>
            <circle cx="489" cy="671" r="10" stroke="white" stroke-width="4"/>
            </g>
            </g>
            <g id="48">
            <g id="Ellipse 5_46" filter="url(#filter47_d_238_31959)">
            <circle cx="518" cy="743" r="12" fill="#943434"/>
            <circle cx="518" cy="743" r="10" stroke="white" stroke-width="4"/>
            </g>
            </g>
            <g id="49">
            <g id="Ellipse 5_47" filter="url(#filter48_d_238_31959)">
            <circle cx="215" cy="419" r="12" fill="#943434"/>
            <circle cx="215" cy="419" r="10" stroke="white" stroke-width="4"/>
            </g>
            </g>
            <g id="50">
            <g id="Ellipse 5_48" filter="url(#filter49_d_238_31959)">
            <circle cx="559" cy="282" r="12" fill="#943434"/>
            <circle cx="559" cy="282" r="10" stroke="white" stroke-width="4"/>
            </g>
            </g>
            </g>
            </g>
            <defs>
            <filter id="filter0_d_238_31959" x="743" y="120" width="40" height="40" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="2"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_238_31959"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_238_31959" result="shape"/>
            </filter>
            <filter id="filter1_d_238_31959" x="864" y="117" width="32" height="32" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="2"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_238_31959"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_238_31959" result="shape"/>
            </filter>
            <filter id="filter2_d_238_31959" x="547" y="61" width="32" height="32" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="2"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_238_31959"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_238_31959" result="shape"/>
            </filter>
            <filter id="filter3_d_238_31959" x="638" y="178" width="40" height="40" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="2"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_238_31959"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_238_31959" result="shape"/>
            </filter>
            <filter id="filter4_d_238_31959" x="449" y="346" width="40" height="40" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="2"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_238_31959"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_238_31959" result="shape"/>
            </filter>
            <filter id="filter5_d_238_31959" x="590" y="358" width="40" height="40" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="2"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_238_31959"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_238_31959" result="shape"/>
            </filter>
            <filter id="filter6_d_238_31959" x="286" y="390" width="40" height="40" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="2"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_238_31959"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_238_31959" result="shape"/>
            </filter>
            <filter id="filter7_d_238_31959" x="252" y="458" width="40" height="40" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="2"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_238_31959"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_238_31959" result="shape"/>
            </filter>
            <filter id="filter8_d_238_31959" x="427" y="483" width="40" height="40" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="2"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_238_31959"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_238_31959" result="shape"/>
            </filter>
            <filter id="filter9_d_238_31959" x="542" y="534" width="40" height="40" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="2"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_238_31959"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_238_31959" result="shape"/>
            </filter>
            <filter id="filter10_d_238_31959" x="537" y="643" width="40" height="40" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="2"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_238_31959"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_238_31959" result="shape"/>
            </filter>
            <filter id="filter11_d_238_31959" x="583" y="669" width="40" height="40" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="2"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_238_31959"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_238_31959" result="shape"/>
            </filter>
            <filter id="filter12_d_238_31959" x="433" y="709" width="40" height="40" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="2"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_238_31959"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_238_31959" result="shape"/>
            </filter>
            <filter id="filter13_d_238_31959" x="550" y="833" width="40" height="40" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="2"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_238_31959"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_238_31959" result="shape"/>
            </filter>
            <filter id="filter14_d_238_31959" x="307" y="746" width="40" height="40" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="2"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_238_31959"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_238_31959" result="shape"/>
            </filter>
            <filter id="filter15_d_238_31959" x="204" y="579" width="40" height="40" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="2"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_238_31959"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_238_31959" result="shape"/>
            </filter>
            <filter id="filter16_d_238_31959" x="318" y="490" width="40" height="40" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="2"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_238_31959"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_238_31959" result="shape"/>
            </filter>
            <filter id="filter17_d_238_31959" x="263" y="515" width="40" height="40" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="2"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_238_31959"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_238_31959" result="shape"/>
            </filter>
            <filter id="filter18_d_238_31959" x="403" y="586" width="40" height="40" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="2"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_238_31959"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_238_31959" result="shape"/>
            </filter>
            <filter id="filter19_d_238_31959" x="109" y="817" width="48" height="48" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="2"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_238_31959"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_238_31959" result="shape"/>
            </filter>
            <filter id="filter20_d_238_31959" x="170" y="899" width="32" height="32" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="2"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_238_31959"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_238_31959" result="shape"/>
            </filter>
            <filter id="filter21_d_238_31959" x="293" y="585" width="32" height="32" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="2"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_238_31959"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_238_31959" result="shape"/>
            </filter>
            <filter id="filter22_d_238_31959" x="229" y="666" width="32" height="32" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="2"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_238_31959"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_238_31959" result="shape"/>
            </filter>
            <filter id="filter23_d_238_31959" x="140" y="654" width="32" height="32" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="2"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_238_31959"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_238_31959" result="shape"/>
            </filter>
            <filter id="filter24_d_238_31959" x="218" y="785" width="32" height="32" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="2"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_238_31959"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_238_31959" result="shape"/>
            </filter>
            <filter id="filter25_d_238_31959" x="250" y="853" width="32" height="32" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="2"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_238_31959"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_238_31959" result="shape"/>
            </filter>
            <filter id="filter26_d_238_31959" x="389" y="811" width="32" height="32" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="2"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_238_31959"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_238_31959" result="shape"/>
            </filter>
            <filter id="filter27_d_238_31959" x="253" y="246" width="32" height="32" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="2"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_238_31959"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_238_31959" result="shape"/>
            </filter>
            <filter id="filter28_d_238_31959" x="143" y="759" width="32" height="32" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="2"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_238_31959"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_238_31959" result="shape"/>
            </filter>
            <filter id="filter29_d_238_31959" x="97" y="709" width="32" height="32" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="2"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_238_31959"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_238_31959" result="shape"/>
            </filter>
            <filter id="filter30_d_238_31959" x="185" y="501" width="32" height="32" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="2"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_238_31959"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_238_31959" result="shape"/>
            </filter>
            <filter id="filter31_d_238_31959" x="751" y="203" width="32" height="32" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="2"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_238_31959"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_238_31959" result="shape"/>
            </filter>
            <filter id="filter32_d_238_31959" x="738" y="284" width="32" height="32" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="2"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_238_31959"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_238_31959" result="shape"/>
            </filter>
            <filter id="filter33_d_238_31959" x="330" y="887" width="32" height="32" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="2"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_238_31959"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_238_31959" result="shape"/>
            </filter>
            <filter id="filter34_d_238_31959" x="437" y="882" width="32" height="32" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="2"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_238_31959"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_238_31959" result="shape"/>
            </filter>
            <filter id="filter35_d_238_31959" x="464" y="957" width="32" height="32" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="2"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_238_31959"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_238_31959" result="shape"/>
            </filter>
            <filter id="filter36_d_238_31959" x="515" y="806" width="32" height="32" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="2"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_238_31959"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_238_31959" result="shape"/>
            </filter>
            <filter id="filter37_d_238_31959" x="613" y="629" width="32" height="32" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="2"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_238_31959"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_238_31959" result="shape"/>
            </filter>
            <filter id="filter38_d_238_31959" x="625" y="501" width="32" height="32" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="2"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_238_31959"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_238_31959" result="shape"/>
            </filter>
            <filter id="filter39_d_238_31959" x="669" y="732" width="32" height="32" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="2"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_238_31959"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_238_31959" result="shape"/>
            </filter>
            <filter id="filter40_d_238_31959" x="663" y="805" width="32" height="32" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="2"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_238_31959"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_238_31959" result="shape"/>
            </filter>
            <filter id="filter41_d_238_31959" x="599" y="785" width="32" height="32" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="2"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_238_31959"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_238_31959" result="shape"/>
            </filter>
            <filter id="filter42_d_238_31959" x="363" y="242" width="32" height="32" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="2"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_238_31959"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_238_31959" result="shape"/>
            </filter>
            <filter id="filter43_d_238_31959" x="497" y="176" width="32" height="32" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="2"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_238_31959"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_238_31959" result="shape"/>
            </filter>
            <filter id="filter44_d_238_31959" x="366" y="645" width="32" height="32" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="2"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_238_31959"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_238_31959" result="shape"/>
            </filter>
            <filter id="filter45_d_238_31959" x="384" y="733" width="32" height="32" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="2"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_238_31959"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_238_31959" result="shape"/>
            </filter>
            <filter id="filter46_d_238_31959" x="473" y="655" width="32" height="32" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="2"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_238_31959"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_238_31959" result="shape"/>
            </filter>
            <filter id="filter47_d_238_31959" x="502" y="727" width="32" height="32" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="2"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_238_31959"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_238_31959" result="shape"/>
            </filter>
            <filter id="filter48_d_238_31959" x="199" y="403" width="32" height="32" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="2"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_238_31959"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_238_31959" result="shape"/>
            </filter>
            <filter id="filter49_d_238_31959" x="543" y="266" width="32" height="32" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="2"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_238_31959"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_238_31959" result="shape"/>
            </filter>
            </defs>
            </svg>
</div>
        </div>
      </div>
    </div>


<script>

function debounce(func, wait, immediate) {
  let timeout;
  return function executedFunction() {
    const context = this;
    const args = arguments;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}    

const dataMap = [
        <?foreach($arResult["ITEMS"] as $arItem):?>
            {
                id: <?=$arItem['PROPERTIES']['ID_CITY']['VALUE']?>,
                lgbs: "<?=$arItem['NAME']?>",
                lgbs_designated: [<?=$arItem['PROPERTIES']['RELATED_CITY']['VALUE']?>],
                specialization: "<?=$arItem['PROPERTIES']['SPECIALIZATION']['VALUE']?>",
                filterValue: "<?=$arItem['PROPERTIES']['FILTER_VALUE']['VALUE']?>",
                address: "<?=$arItem['PROPERTIES']['ADRESS']['VALUE']?>",
                persons: [
                {
                    imgSrc: "<?
                        $URL = CFile::GetPath($arItem['PROPERTIES']['PHOTO_1']['VALUE']);
                        echo $URL;    
                    ?>",
                    position: "курирующий зам",
                    title: "<?=$arItem['PROPERTIES']['MAIN']['VALUE']?>",
                    desc: "<?=$arItem['PROPERTIES']['MAIN_DESCRIPTION']['VALUE']?>",
                },
                <?$i = 0?>
                <?foreach($arItem['PROPERTIES']['TRAINER']['VALUE'] as $trainer):?>
                  {
                      imgSrc: "<?
                        $URL = CFile::GetPath($arItem['PROPERTIES']['PHOTO_2']['VALUE'][$i]);
                        $i = $i + 1;
                        echo $URL;    
                    ?>",
                      position: "тренер фабрики процессов",
                      title: "<?=$trainer?>",
                      desc: "",
                  },
                <?endforeach;?>
                ],
            },
        <?endforeach;?>    
    ];

function onClickOutsideElem(arrElem, callback) {
  document.addEventListener("click", (e) => {
    const withinBoundaries = arrElem.some(
      (elem) =>
        $(e.target).closest(elem).is(elem)
    );
    if (!withinBoundaries) {
      callback();
    }
  });
}

$(function () {
  function createSVGLine({ x1, y1, x2, y2 }) {
    const newLine = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "line"
    );
    newLine.classList.add("created_line");
    newLine.setAttribute("x1", x1);
    newLine.setAttribute("y1", y1);
    newLine.setAttribute("x2", x2);
    newLine.setAttribute("y2", y2);
    newLine.setAttribute("stroke", "#943434");
    newLine.setAttribute("stroke-width", "2");
    return newLine;
  }
  function createEventsOnMap() {
    dataMap.forEach((mapItem) => {
      if (
        mapItem.lgbs_designated.length === 0 &&
        mapItem.specialization.length === 0
      ) {
        return;
      }
      $(`.main-map__content g[id="${mapItem.id}"]`).css("cursor", "pointer");
    });
    $(".main-map__content g[style='cursor: pointer;']").on(
      "mouseenter click",
      function () {
        const currentElem = $(this);
        const elemId = Number(currentElem.attr("id"));
        const mapItem = dataMap.find((item) => item.id === elemId);
        const currentCoords = currentElem[0].getBBox();

        if ($(this).is(".active")) {
          return;
        }
        clearMapContent();
        $(this).addClass("active");
        mapItem.lgbs_designated.forEach((id) => {
          const childElem = $(`.main-map__content g[id="${id}"]`);
          const childCoords = childElem[0].getBBox();
          const attrs = {
            x1: currentCoords.x + currentCoords.width / 2,
            y1: currentCoords.y + currentCoords.height / 2,
            x2: childCoords.x + childCoords.width / 2,
            y2: childCoords.y + childCoords.height / 2,
          };
          const newLine = createSVGLine(attrs);
          $(this).closest("svg").prepend(newLine);
          childElem.addClass("active");
        });
        renderPopupOnMap(elemId);
      }
    );
    $(document).on("click", ".main-map__item-close", function () {
      clearMapContent();
      removePopupOnMap();
    });
    onClickOutsideElem(
      [".main-map__item", ".main-map__content g[style='cursor: pointer;']"],
      () => {
        clearMapContent();
        removePopupOnMap();
      }
    );
    $(".main-map__content g[style='cursor: pointer;']").on(
      "mouseleave",
      function () {
        // clearMapContent();
        // removePopupOnMap();
      }
    );
    $(".main-map__content g[style='cursor: pointer;']").on(
      "click",
      function () {
        // const currentElem = $(this);
        // const elemId = Number(currentElem.attr("id"));
        // const elemHref = $(`.main-map__item[id='${elemId}']`).attr("href");
        // window.location.href = elemHref;
      }
    );

    $(document).on("click", function (e) {
      //main-map__item
      const isClickMapListItem =
        !$(e.target).closest(".main-map__item").is(".main-map__item") ||
        !$(e.target).is(".main-map__item");
      if (isClickMapListItem) {
        return;
      }
      if (!$(e.target).closest("g.active").is("g.active")) {
        $(".main-map__content .active").removeClass("active");
        $(".created_line").remove();
      }
    });
  }
  function clearMapContent() {
    $(".created_line").remove();
    $(".main-map__content .active").removeClass("active");
  }
  function mapListItem({
    id,
    lgbs,
    lgbs_designated,
    specialization,
    filterValue,
    address,
    persons,
  }) {
    const lgbsDesignated = lgbs_designated.map(
      (id) => dataMap.find((item) => id === item.id).lgbs
    );
    const city = [lgbs, ...lgbsDesignated].join(", ");
    const filterQuery = `?arrFilter_pf%5BCOMPANY%5D=${filterValue}&arrFilter_pf%5BDEVELOPER%5D=&arrFilter_pf%5BYEAR%5D=&arrFilter_pf%5BTYPE%5D=&arrFilter_pf%5BFREE_TIME%5D%5BLEFT%5D=0&arrFilter_pf%5BFREE_TIME%5D%5BRIGHT%5D=1000000&arrFilter_pf%5BECONOMY%5D%5BLEFT%5D=0&arrFilter_pf%5BECONOMY%5D%5BRIGHT%5D=1000000&arrFilter_pf%5BSOCIAL%5D=&arrFilter_pf%5BECOLOGICAL%5D=&arrFilter_pf%5BCULTURAL%5D=&arrFilter_pf%5BEXPENSES%5D%5BLEFT%5D=0&arrFilter_pf%5BEXPENSES%5D%5BRIGHT%5D=1000000&arrFilter_pf%5BSTATUS%5D=&arrFilter_cf%5B8%5D%5BLEFT%5D=0&arrFilter_cf%5B8%5D%5BRIGHT%5D=1000000&arrFilter_cf%5B9%5D%5BLEFT%5D=0&arrFilter_cf%5B9%5D%5BRIGHT%5D=1000000&arrFilter_cf%5B13%5D%5BLEFT%5D=0&arrFilter_cf%5B13%5D%5BRIGHT%5D=1000000&set_filter=Применить+фильтр&set_filter=Y`;
    return {
      renderOnMap: () => {
        return `
      <div id="${id}" class="main-map__item">
        <button class="main-map__item-close">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.1379 4.83787C14.4074 4.56841 14.4074 4.13153 14.1379 3.86207C13.8685 3.59261 13.4316 3.59261 13.1622 3.86207L9.00004 8.02417L4.83795 3.86207C4.56847 3.59261 4.13159 3.59261 3.86213 3.86207C3.59267 4.13153 3.59267 4.56841 3.86213 4.83787L8.02423 8.99998L3.86213 13.1621C3.59267 13.4316 3.59267 13.8684 3.86213 14.1379C4.13159 14.4073 4.56847 14.4073 4.83795 14.1379L9.00004 9.97578L13.1622 14.1379C13.4316 14.4073 13.8685 14.4073 14.1379 14.1379C14.4074 13.8684 14.4074 13.4316 14.1379 13.1621L9.97584 8.99998L14.1379 4.83787Z" fill="black"/>
          </svg>
        </button>
        <div class="main-map__title">${specialization}</div>
        <div class="main-map__city">
          <svg width="12" height="17" viewBox="0 0 12 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.9978 8.02422C6.2791 8.02422 6.55764 7.9696 6.81753 7.86348C7.07742 7.75736 7.31356 7.60182 7.51247 7.40573C7.71138 7.20965 7.86916 6.97686 7.97681 6.72067C8.08446 6.46447 8.13987 6.18988 8.13987 5.91258C8.13987 5.35254 7.91419 4.81544 7.51247 4.41943C7.11075 4.02342 6.56591 3.80094 5.9978 3.80094C5.42969 3.80094 4.88484 4.02342 4.48312 4.41943C4.08141 4.81544 3.85573 5.35254 3.85573 5.91258C3.85573 6.18988 3.91113 6.46447 4.01878 6.72067C4.12643 6.97686 4.28422 7.20965 4.48312 7.40573C4.88484 7.80174 5.42969 8.02422 5.9978 8.02422ZM5.9978 0C9.30515 0 11.9956 2.64377 11.9956 5.91258C11.9956 10.347 5.9978 16.8931 5.9978 16.8931C5.9978 16.8931 0 10.347 0 5.91258C0 4.34447 0.631909 2.84058 1.75671 1.73175C2.88152 0.622931 4.40708 0 5.9978 0Z" fill="#943434"/>
          </svg>
          <span>${city}</span> 
          </div>
        <div class="main-map__address"><span>адрес:</span><span> ${address}</span></div>
        ${
          persons &&
          persons
            .map(
              (person) =>
                person &&
                `
          <div class="main-map__person">
            ${
              person?.imgSrc &&
              `<div class="main-map__person-img"><img src="${person?.imgSrc}" /></div>`
            }
            ${
              person?.position &&
              `<div class="main-map__person-position">${person?.position}</div>`
            }
            ${
              person?.title &&
              `<div class="main-map__person-title">${person?.title}</div>`
            }
            
            ${
              person?.desc &&
              `<div class="main-map__person-desc">${person?.desc}</div>`
            }
            
          </div>
          `
            )
            .join("")
        }
        <a href="/projects/${filterQuery}" class="link link--red main-map__link">
          <span>В каталог проектов</span>
          <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.89008 4.26209C8.13182 4.03545 8.51153 4.0477 8.73817 4.28945L13.2381 9.08945C13.4545 9.32023 13.4545 9.67938 13.2381 9.91018L8.73817 14.7102C8.51153 14.952 8.13182 14.9642 7.89008 14.7375C7.64833 14.5108 7.63608 14.1312 7.86272 13.8895L11.978 9.49981L7.86272 5.11018C7.63608 4.86843 7.64833 4.48872 7.89008 4.26209Z" fill="white"/>
          </svg>
        </a>
      </div>
    `;
      },
      renderOnSideBar: () => {
        if (specialization === "") {
          return "";
        }
        if ($(window).width() < 768) {
          return `
      <div id="${id}" class="main-map__item dropdown">
        <button class="dropdown__caption">
          <div class="main-map__title">${specialization}</div>
          <svg class="icon-expand" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.2379 7.39008C14.4645 7.63182 14.4523 8.01153 14.2105 8.23817L9.4105 12.7381C9.17972 12.9545 8.82057 12.9545 8.58978 12.7381L3.7898 8.23817C3.548 8.01153 3.53576 7.63182 3.76244 7.39008C3.98912 7.14833 4.3688 7.13608 4.61048 7.36272L9.00014 11.478L13.3898 7.36272C13.6315 7.13608 14.0112 7.14833 14.2379 7.39008Z" fill="black"/>
          </svg>
          <div class="main-map__city">
            <svg width="12" height="17" viewBox="0 0 12 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.9978 8.02422C6.2791 8.02422 6.55764 7.9696 6.81753 7.86348C7.07742 7.75736 7.31356 7.60182 7.51247 7.40573C7.71138 7.20965 7.86916 6.97686 7.97681 6.72067C8.08446 6.46447 8.13987 6.18988 8.13987 5.91258C8.13987 5.35254 7.91419 4.81544 7.51247 4.41943C7.11075 4.02342 6.56591 3.80094 5.9978 3.80094C5.42969 3.80094 4.88484 4.02342 4.48312 4.41943C4.08141 4.81544 3.85573 5.35254 3.85573 5.91258C3.85573 6.18988 3.91113 6.46447 4.01878 6.72067C4.12643 6.97686 4.28422 7.20965 4.48312 7.40573C4.88484 7.80174 5.42969 8.02422 5.9978 8.02422ZM5.9978 0C9.30515 0 11.9956 2.64377 11.9956 5.91258C11.9956 10.347 5.9978 16.8931 5.9978 16.8931C5.9978 16.8931 0 10.347 0 5.91258C0 4.34447 0.631909 2.84058 1.75671 1.73175C2.88152 0.622931 4.40708 0 5.9978 0Z" fill="#943434"/>
            </svg>
            <span>${city}</span> 
          </div>
        </button>
        <div class="dropdown__content">
            <div class="main-map__address"><span>адрес:</span><span> ${address}</span></div>
            ${
              persons &&
              persons
                .map(
                  (person) =>
                    person &&
                    `
              <div class="main-map__person">
                ${
                  person?.imgSrc &&
                  `<div class="main-map__person-img"><img src="${person?.imgSrc}" /></div>`
                }
                <div class="main-map__person-position">${person?.position}</div>
                <div class="main-map__person-title">${person?.title}</div>
                <div class="main-map__person-desc">${person?.desc}</div>
              </div>
              `
                )
                .join("")
            }
            <a href="/projects/${filterQuery}" class="link link--red main-map__link">
              <span>В каталог проектов</span>
              <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.89008 4.26209C8.13182 4.03545 8.51153 4.0477 8.73817 4.28945L13.2381 9.08945C13.4545 9.32023 13.4545 9.67938 13.2381 9.91018L8.73817 14.7102C8.51153 14.952 8.13182 14.9642 7.89008 14.7375C7.64833 14.5108 7.63608 14.1312 7.86272 13.8895L11.978 9.49981L7.86272 5.11018C7.63608 4.86843 7.64833 4.48872 7.89008 4.26209Z" fill="white"/>
              </svg>
            </a>
          </div>
        </div>
        
            `;
        }
        return `
      <a id="${id}" href="/projects/${filterQuery}" class="main-map__item">
        <div class="main-map__title">${specialization}</div>
        <div class="main-map__city">
          <svg width="12" height="17" viewBox="0 0 12 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.9978 8.02422C6.2791 8.02422 6.55764 7.9696 6.81753 7.86348C7.07742 7.75736 7.31356 7.60182 7.51247 7.40573C7.71138 7.20965 7.86916 6.97686 7.97681 6.72067C8.08446 6.46447 8.13987 6.18988 8.13987 5.91258C8.13987 5.35254 7.91419 4.81544 7.51247 4.41943C7.11075 4.02342 6.56591 3.80094 5.9978 3.80094C5.42969 3.80094 4.88484 4.02342 4.48312 4.41943C4.08141 4.81544 3.85573 5.35254 3.85573 5.91258C3.85573 6.18988 3.91113 6.46447 4.01878 6.72067C4.12643 6.97686 4.28422 7.20965 4.48312 7.40573C4.88484 7.80174 5.42969 8.02422 5.9978 8.02422ZM5.9978 0C9.30515 0 11.9956 2.64377 11.9956 5.91258C11.9956 10.347 5.9978 16.8931 5.9978 16.8931C5.9978 16.8931 0 10.347 0 5.91258C0 4.34447 0.631909 2.84058 1.75671 1.73175C2.88152 0.622931 4.40708 0 5.9978 0Z" fill="#943434"/>
          </svg>
          <span>${city}</span> 
          </div>
      </a>
    `;
      },
    };
  }

  function renderMapList(searchValue) {
    cleanMapList();
    let mapList = "";

    dataMap
      .filter(({ specialization, lgbs, lgbs_designated }) => {
        if (!searchValue) {
          return true;
        }
        const lgbsDesignated = lgbs_designated.map(
          (id) => dataMap.find((item) => id === item.id).lgbs
        );
        const cites = [lgbs, ...lgbsDesignated].join(", ");
        return (
          specialization.toLowerCase().includes(searchValue.toLowerCase()) ||
          cites.toLowerCase().includes(searchValue.toLowerCase())
        );
      })
      .forEach((item) => (mapList += mapListItem(item).renderOnSideBar()));
    $(".main-map__wrapper").append(mapList);
    onHoverMapListItem();
    if ($(".main-map__wrapper").height() < 640) {
      $(".main-map__sidebar").addClass("scroll-end");
    } else {
      $(".main-map__sidebar").removeClass("scroll-end");
    }
  }
  function cleanMapList() {
    $(".main-map__wrapper").children().remove();
  }
  function onHoverMapListItem() {
    $(".main-map__item").on("mouseenter", function () {
      const id = Number($(this).attr("id"));
      $(`g[id="${id}"]`).trigger("mouseenter");
      renderPopupOnMap(id);
    });
    $(".main-map__item").on("mouseleave", function () {
      // const id = Number($(this).attr("id"));
      // $(`g[id="${id}"]`).trigger("mouseleave");
      clearMapContent();
      removePopupOnMap();
    });
  }
  function renderPopupOnMap(itemId) {
    removePopupOnMap();
    const dataPopup = dataMap.find(({ id }) => id === itemId);
    const popupHtml = mapListItem(dataPopup).renderOnMap();
    $(".main-map__img").append(popupHtml);
    const dotOnMap = $(`.main-map__img svg g[id="${itemId}"]`);
    const popup = $(".main-map__img .main-map__item");
    const parentPos = $(`.main-map__img`)[0].getBoundingClientRect();
    const popupPos = dotOnMap[0].getBoundingClientRect();
    const coords = {
      top: popupPos.top - parentPos.top + 32,
      left: popupPos.left - parentPos.left - popup.width() - 16,
    };

    popup.css(coords);
    popup.css("opacity", 1);
  }
  function removePopupOnMap() {
    $(".main-map__img .main-map__item").remove();
  }
  const debounceRenderMapList = debounce(renderMapList, 300);
  $(".main-map__search > input").on("input", function (e) {
    debounceRenderMapList(e.target.value);
  });

  function sidebarScrollFade() {
    $(".main-map__wrapper").on("scroll", function () {
      const lastItemHeight = $(".main-map__item").last().outerHeight() / 2;
      console.log(
        this.scrollHeight - lastItemHeight ===
          this.scrollTop + this.clientHeight,
        this.scrollHeight - lastItemHeight,
        this.scrollTop + this.clientHeight
      );
      const scrollEnd =
        this.scrollHeight - lastItemHeight <=
        this.scrollTop + this.clientHeight;
      if (scrollEnd) {
        $(".main-map__sidebar").addClass("scroll-end");
      } else {
        $(".main-map__sidebar").removeClass("scroll-end");
      }
    });
  }
  if ($(window).width() <= 768) {
    setTimeout(() => {
      sidebarScrollFade();
    }, 0);
  }

  createEventsOnMap();
  renderMapList();
});


</script>