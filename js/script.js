!function(e) {
    var t = {};
    function n(r) {
        if (t[r])
            return t[r].exports;
        var a = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(a.exports, a, a.exports, n), a.l = !0, a.exports
    }
    n.m = e,
    n.c = t,
    n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    },
    n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    },
    n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e)
            for (var a in e)
                n.d(r, a, function(t) {
                    return e[t]
                }.bind(null, a));
        return r
    },
    n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    },
    n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    },
    n.p = "",
    n(n.s = 30)
}([function(e, t, n) {
    var r,
        a;
    !function(o) {
        "use strict";
        function i(e) {
            return new RegExp("(^|\\s+)" + e + "(\\s+|$)")
        }
        var l,
            s,
            c;
        function u(e, t) {
            (l(e, t) ? c : s)(e, t)
        }
        "classList" in document.documentElement ? (l = function(e, t) {
            return e.classList.contains(t)
        }, s = function(e, t) {
            e.classList.add(t)
        }, c = function(e, t) {
            e.classList.remove(t)
        }) : (l = function(e, t) {
            return i(t).test(e.className)
        }, s = function(e, t) {
            l(e, t) || (e.className = e.className + " " + t)
        }, c = function(e, t) {
            e.className = e.className.replace(i(t), " ")
        }),
        void 0 === (a = "function" == typeof (r = {
            hasClass: l,
            addClass: s,
            removeClass: c,
            toggleClass: u,
            has: l,
            add: s,
            remove: c,
            toggle: u
        }) ? r.call(t, n, t, e) : r) || (e.exports = a)
    }(window)
}, function(e, t, n) {
    e.exports = function(e) {
        e.use(n(5)),
        e.installColorSpace("HSL", ["hue", "saturation", "lightness", "alpha"], {
            hsv: function() {
                var t,
                    n = 2 * this._lightness,
                    r = this._saturation * (n <= 1 ? n : 2 - n);
                return t = n + r < 1e-9 ? 0 : 2 * r / (n + r), new e.HSV(this._hue, t, (n + r) / 2, this._alpha)
            },
            rgb: function() {
                return this.hsv().rgb()
            },
            fromRgb: function() {
                return this.hsv().hsl()
            }
        })
    }
}, function(e, t, n) {
    e.exports = function() {
        "use strict";
        for (var e = function(e, t, n) {
                return void 0 === t && (t = 0), void 0 === n && (n = 1), e < t ? t : e > n ? n : e
            }, t = {}, n = 0, r = ["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Undefined", "Null"]; n < r.length; n += 1) {
            var a = r[n];
            t["[object " + a + "]"] = a.toLowerCase()
        }
        var o = function(e) {
                return t[Object.prototype.toString.call(e)] || "object"
            },
            i = Math.PI,
            l = {
                clip_rgb: function(t) {
                    t._clipped = !1,
                    t._unclipped = t.slice(0);
                    for (var n = 0; n <= 3; n++)
                        n < 3 ? ((t[n] < 0 || t[n] > 255) && (t._clipped = !0), t[n] = e(t[n], 0, 255)) : 3 === n && (t[n] = e(t[n], 0, 1));
                    return t
                },
                limit: e,
                type: o,
                unpack: function(e, t) {
                    return void 0 === t && (t = null), e.length >= 3 ? Array.prototype.slice.call(e) : "object" == o(e[0]) && t ? t.split("").filter((function(t) {
                        return void 0 !== e[0][t]
                    })).map((function(t) {
                        return e[0][t]
                    })) : e[0]
                },
                last: function(e) {
                    if (e.length < 2)
                        return null;
                    var t = e.length - 1;
                    return "string" == o(e[t]) ? e[t].toLowerCase() : null
                },
                PI: i,
                TWOPI: 2 * i,
                PITHIRD: i / 3,
                DEG2RAD: i / 180,
                RAD2DEG: 180 / i
            },
            s = {
                format: {},
                autodetect: []
            },
            c = l.last,
            u = l.clip_rgb,
            f = l.type,
            d = function() {
                for (var e = [], t = arguments.length; t--;)
                    e[t] = arguments[t];
                var n = this;
                if ("object" === f(e[0]) && e[0].constructor && e[0].constructor === this.constructor)
                    return e[0];
                var r = c(e),
                    a = !1;
                if (!r) {
                    a = !0,
                    s.sorted || (s.autodetect = s.autodetect.sort((function(e, t) {
                        return t.p - e.p
                    })), s.sorted = !0);
                    for (var o = 0, i = s.autodetect; o < i.length; o += 1) {
                        var l = i[o];
                        if (r = l.test.apply(l, e))
                            break
                    }
                }
                if (!s.format[r])
                    throw new Error("unknown format: " + e);
                var d = s.format[r].apply(null, a ? e : e.slice(0, -1));
                n._rgb = u(d),
                3 === n._rgb.length && n._rgb.push(1)
            };
        d.prototype.toString = function() {
            return "function" == f(this.hex) ? this.hex() : "[" + this._rgb.join(",") + "]"
        };
        var h = d,
            g = function() {
                for (var e = [], t = arguments.length; t--;)
                    e[t] = arguments[t];
                return new (Function.prototype.bind.apply(g.Color, [null].concat(e)))
            };
        g.Color = h,
        g.version = "2.1.0";
        var p = g,
            b = l.unpack,
            m = Math.max,
            v = function() {
                for (var e = [], t = arguments.length; t--;)
                    e[t] = arguments[t];
                var n = b(e, "rgb"),
                    r = n[0],
                    a = n[1],
                    o = n[2],
                    i = 1 - m(r /= 255, m(a /= 255, o /= 255)),
                    l = i < 1 ? 1 / (1 - i) : 0,
                    s = (1 - r - i) * l,
                    c = (1 - a - i) * l,
                    u = (1 - o - i) * l;
                return [s, c, u, i]
            },
            y = l.unpack,
            w = function() {
                for (var e = [], t = arguments.length; t--;)
                    e[t] = arguments[t];
                var n = (e = y(e, "cmyk"))[0],
                    r = e[1],
                    a = e[2],
                    o = e[3],
                    i = e.length > 4 ? e[4] : 1;
                return 1 === o ? [0, 0, 0, i] : [n >= 1 ? 0 : 255 * (1 - n) * (1 - o), r >= 1 ? 0 : 255 * (1 - r) * (1 - o), a >= 1 ? 0 : 255 * (1 - a) * (1 - o), i]
            },
            _ = l.unpack,
            x = l.type;
        h.prototype.cmyk = function() {
            return v(this._rgb)
        },
        p.cmyk = function() {
            for (var e = [], t = arguments.length; t--;)
                e[t] = arguments[t];
            return new (Function.prototype.bind.apply(h, [null].concat(e, ["cmyk"])))
        },
        s.format.cmyk = w,
        s.autodetect.push({
            p: 2,
            test: function() {
                for (var e = [], t = arguments.length; t--;)
                    e[t] = arguments[t];
                if (e = _(e, "cmyk"), "array" === x(e) && 4 === e.length)
                    return "cmyk"
            }
        });
        var k = l.unpack,
            M = l.last,
            N = function(e) {
                return Math.round(100 * e) / 100
            },
            E = function() {
                for (var e = [], t = arguments.length; t--;)
                    e[t] = arguments[t];
                var n = k(e, "hsla"),
                    r = M(e) || "lsa";
                return n[0] = N(n[0] || 0), n[1] = N(100 * n[1]) + "%", n[2] = N(100 * n[2]) + "%", "hsla" === r || n.length > 3 && n[3] < 1 ? (n[3] = n.length > 3 ? n[3] : 1, r = "hsla") : n.length = 3, r + "(" + n.join(",") + ")"
            },
            S = l.unpack,
            C = function() {
                for (var e = [], t = arguments.length; t--;)
                    e[t] = arguments[t];
                var n = (e = S(e, "rgba"))[0],
                    r = e[1],
                    a = e[2];
                n /= 255,
                r /= 255,
                a /= 255;
                var o,
                    i,
                    l = Math.min(n, r, a),
                    s = Math.max(n, r, a),
                    c = (s + l) / 2;
                return s === l ? (o = 0, i = Number.NaN) : o = c < .5 ? (s - l) / (s + l) : (s - l) / (2 - s - l), n == s ? i = (r - a) / (s - l) : r == s ? i = 2 + (a - n) / (s - l) : a == s && (i = 4 + (n - r) / (s - l)), (i *= 60) < 0 && (i += 360), e.length > 3 && void 0 !== e[3] ? [i, o, c, e[3]] : [i, o, c]
            },
            O = l.unpack,
            L = l.last,
            A = Math.round,
            T = function() {
                for (var e = [], t = arguments.length; t--;)
                    e[t] = arguments[t];
                var n = O(e, "rgba"),
                    r = L(e) || "rgb";
                return "hsl" == r.substr(0, 3) ? E(C(n), r) : (n[0] = A(n[0]), n[1] = A(n[1]), n[2] = A(n[2]), ("rgba" === r || n.length > 3 && n[3] < 1) && (n[3] = n.length > 3 ? n[3] : 1, r = "rgba"), r + "(" + n.slice(0, "rgb" === r ? 3 : 4).join(",") + ")")
            },
            R = l.unpack,
            j = Math.round,
            I = function() {
                for (var e, t = [], n = arguments.length; n--;)
                    t[n] = arguments[n];
                var r,
                    a,
                    o,
                    i = (t = R(t, "hsl"))[0],
                    l = t[1],
                    s = t[2];
                if (0 === l)
                    r = a = o = 255 * s;
                else {
                    var c = [0, 0, 0],
                        u = [0, 0, 0],
                        f = s < .5 ? s * (1 + l) : s + l - s * l,
                        d = 2 * s - f,
                        h = i / 360;
                    c[0] = h + 1 / 3,
                    c[1] = h,
                    c[2] = h - 1 / 3;
                    for (var g = 0; g < 3; g++)
                        c[g] < 0 && (c[g] += 1),
                        c[g] > 1 && (c[g] -= 1),
                        6 * c[g] < 1 ? u[g] = d + 6 * (f - d) * c[g] : 2 * c[g] < 1 ? u[g] = f : 3 * c[g] < 2 ? u[g] = d + (f - d) * (2 / 3 - c[g]) * 6 : u[g] = d;
                    r = (e = [j(255 * u[0]), j(255 * u[1]), j(255 * u[2])])[0],
                    a = e[1],
                    o = e[2]
                }
                return t.length > 3 ? [r, a, o, t[3]] : [r, a, o, 1]
            },
            B = /^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/,
            H = /^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/,
            P = /^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,
            q = /^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,
            z = /^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/,
            D = /^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/,
            F = Math.round,
            G = function(e) {
                var t;
                if (e = e.toLowerCase().trim(), s.format.named)
                    try {
                        return s.format.named(e)
                    } catch (e) {}
                if (t = e.match(B)) {
                    for (var n = t.slice(1, 4), r = 0; r < 3; r++)
                        n[r] = +n[r];
                    return n[3] = 1, n
                }
                if (t = e.match(H)) {
                    for (var a = t.slice(1, 5), o = 0; o < 4; o++)
                        a[o] = +a[o];
                    return a
                }
                if (t = e.match(P)) {
                    for (var i = t.slice(1, 4), l = 0; l < 3; l++)
                        i[l] = F(2.55 * i[l]);
                    return i[3] = 1, i
                }
                if (t = e.match(q)) {
                    for (var c = t.slice(1, 5), u = 0; u < 3; u++)
                        c[u] = F(2.55 * c[u]);
                    return c[3] = +c[3], c
                }
                if (t = e.match(z)) {
                    var f = t.slice(1, 4);
                    f[1] *= .01,
                    f[2] *= .01;
                    var d = I(f);
                    return d[3] = 1, d
                }
                if (t = e.match(D)) {
                    var h = t.slice(1, 4);
                    h[1] *= .01,
                    h[2] *= .01;
                    var g = I(h);
                    return g[3] = +t[4], g
                }
            };
        G.test = function(e) {
            return B.test(e) || H.test(e) || P.test(e) || q.test(e) || z.test(e) || D.test(e)
        };
        var $ = G,
            Y = l.type;
        h.prototype.css = function(e) {
            return T(this._rgb, e)
        },
        p.css = function() {
            for (var e = [], t = arguments.length; t--;)
                e[t] = arguments[t];
            return new (Function.prototype.bind.apply(h, [null].concat(e, ["css"])))
        },
        s.format.css = $,
        s.autodetect.push({
            p: 5,
            test: function(e) {
                for (var t = [], n = arguments.length - 1; n-- > 0;)
                    t[n] = arguments[n + 1];
                if (!t.length && "string" === Y(e) && $.test(e))
                    return "css"
            }
        });
        var U = l.unpack;
        s.format.gl = function() {
            for (var e = [], t = arguments.length; t--;)
                e[t] = arguments[t];
            var n = U(e, "rgba");
            return n[0] *= 255, n[1] *= 255, n[2] *= 255, n
        },
        p.gl = function() {
            for (var e = [], t = arguments.length; t--;)
                e[t] = arguments[t];
            return new (Function.prototype.bind.apply(h, [null].concat(e, ["gl"])))
        },
        h.prototype.gl = function() {
            var e = this._rgb;
            return [e[0] / 255, e[1] / 255, e[2] / 255, e[3]]
        };
        var J = l.unpack,
            K = function() {
                for (var e = [], t = arguments.length; t--;)
                    e[t] = arguments[t];
                var n,
                    r = J(e, "rgb"),
                    a = r[0],
                    o = r[1],
                    i = r[2],
                    l = Math.min(a, o, i),
                    s = Math.max(a, o, i),
                    c = s - l,
                    u = 100 * c / 255,
                    f = l / (255 - c) * 100;
                return 0 === c ? n = Number.NaN : (a === s && (n = (o - i) / c), o === s && (n = 2 + (i - a) / c), i === s && (n = 4 + (a - o) / c), (n *= 60) < 0 && (n += 360)), [n, u, f]
            },
            W = l.unpack,
            X = Math.floor,
            Z = function() {
                for (var e, t, n, r, a, o, i = [], l = arguments.length; l--;)
                    i[l] = arguments[l];
                var s,
                    c,
                    u,
                    f = (i = W(i, "hcg"))[0],
                    d = i[1],
                    h = i[2];
                h *= 255;
                var g = 255 * d;
                if (0 === d)
                    s = c = u = h;
                else {
                    360 === f && (f = 0),
                    f > 360 && (f -= 360),
                    f < 0 && (f += 360);
                    var p = X(f /= 60),
                        b = f - p,
                        m = h * (1 - d),
                        v = m + g * (1 - b),
                        y = m + g * b,
                        w = m + g;
                    switch (p) {
                    case 0:
                        s = (e = [w, y, m])[0],
                        c = e[1],
                        u = e[2];
                        break;
                    case 1:
                        s = (t = [v, w, m])[0],
                        c = t[1],
                        u = t[2];
                        break;
                    case 2:
                        s = (n = [m, w, y])[0],
                        c = n[1],
                        u = n[2];
                        break;
                    case 3:
                        s = (r = [m, v, w])[0],
                        c = r[1],
                        u = r[2];
                        break;
                    case 4:
                        s = (a = [y, m, w])[0],
                        c = a[1],
                        u = a[2];
                        break;
                    case 5:
                        s = (o = [w, m, v])[0],
                        c = o[1],
                        u = o[2]
                    }
                }
                return [s, c, u, i.length > 3 ? i[3] : 1]
            },
            V = l.unpack,
            Q = l.type;
        h.prototype.hcg = function() {
            return K(this._rgb)
        },
        p.hcg = function() {
            for (var e = [], t = arguments.length; t--;)
                e[t] = arguments[t];
            return new (Function.prototype.bind.apply(h, [null].concat(e, ["hcg"])))
        },
        s.format.hcg = Z,
        s.autodetect.push({
            p: 1,
            test: function() {
                for (var e = [], t = arguments.length; t--;)
                    e[t] = arguments[t];
                if (e = V(e, "hcg"), "array" === Q(e) && 3 === e.length)
                    return "hcg"
            }
        });
        var ee = l.unpack,
            te = l.last,
            ne = Math.round,
            re = function() {
                for (var e = [], t = arguments.length; t--;)
                    e[t] = arguments[t];
                var n = ee(e, "rgba"),
                    r = n[0],
                    a = n[1],
                    o = n[2],
                    i = n[3],
                    l = te(e) || "auto";
                void 0 === i && (i = 1),
                "auto" === l && (l = i < 1 ? "rgba" : "rgb");
                var s = (r = ne(r)) << 16 | (a = ne(a)) << 8 | (o = ne(o)),
                    c = "000000" + s.toString(16);
                c = c.substr(c.length - 6);
                var u = "0" + ne(255 * i).toString(16);
                switch (u = u.substr(u.length - 2), l.toLowerCase()) {
                case "rgba":
                    return "#" + c + u;
                case "argb":
                    return "#" + u + c;
                default:
                    return "#" + c
                }
            },
            ae = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,
            oe = /^#?([A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/,
            ie = function(e) {
                if (e.match(ae)) {
                    4 !== e.length && 7 !== e.length || (e = e.substr(1)),
                    3 === e.length && (e = (e = e.split(""))[0] + e[0] + e[1] + e[1] + e[2] + e[2]);
                    var t = parseInt(e, 16);
                    return [t >> 16, t >> 8 & 255, 255 & t, 1]
                }
                if (e.match(oe)) {
                    5 !== e.length && 9 !== e.length || (e = e.substr(1)),
                    4 === e.length && (e = (e = e.split(""))[0] + e[0] + e[1] + e[1] + e[2] + e[2] + e[3] + e[3]);
                    var n = parseInt(e, 16);
                    return [n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, Math.round((255 & n) / 255 * 100) / 100]
                }
                throw new Error("unknown hex color: " + e)
            },
            le = l.type;
        h.prototype.hex = function(e) {
            return re(this._rgb, e)
        },
        p.hex = function() {
            for (var e = [], t = arguments.length; t--;)
                e[t] = arguments[t];
            return new (Function.prototype.bind.apply(h, [null].concat(e, ["hex"])))
        },
        s.format.hex = ie,
        s.autodetect.push({
            p: 4,
            test: function(e) {
                for (var t = [], n = arguments.length - 1; n-- > 0;)
                    t[n] = arguments[n + 1];
                if (!t.length && "string" === le(e) && [3, 4, 5, 6, 7, 8, 9].indexOf(e.length) >= 0)
                    return "hex"
            }
        });
        var se = l.unpack,
            ce = l.TWOPI,
            ue = Math.min,
            fe = Math.sqrt,
            de = Math.acos,
            he = function() {
                for (var e = [], t = arguments.length; t--;)
                    e[t] = arguments[t];
                var n,
                    r = se(e, "rgb"),
                    a = r[0],
                    o = r[1],
                    i = r[2],
                    l = ue(a /= 255, o /= 255, i /= 255),
                    s = (a + o + i) / 3,
                    c = s > 0 ? 1 - l / s : 0;
                return 0 === c ? n = NaN : (n = (a - o + (a - i)) / 2, n /= fe((a - o) * (a - o) + (a - i) * (o - i)), n = de(n), i > o && (n = ce - n), n /= ce), [360 * n, c, s]
            },
            ge = l.unpack,
            pe = l.limit,
            be = l.TWOPI,
            me = l.PITHIRD,
            ve = Math.cos,
            ye = function() {
                for (var e = [], t = arguments.length; t--;)
                    e[t] = arguments[t];
                var n,
                    r,
                    a,
                    o = (e = ge(e, "hsi"))[0],
                    i = e[1],
                    l = e[2];
                return isNaN(o) && (o = 0), isNaN(i) && (i = 0), o > 360 && (o -= 360), o < 0 && (o += 360), (o /= 360) < 1 / 3 ? r = 1 - ((a = (1 - i) / 3) + (n = (1 + i * ve(be * o) / ve(me - be * o)) / 3)) : o < 2 / 3 ? a = 1 - ((n = (1 - i) / 3) + (r = (1 + i * ve(be * (o -= 1 / 3)) / ve(me - be * o)) / 3)) : n = 1 - ((r = (1 - i) / 3) + (a = (1 + i * ve(be * (o -= 2 / 3)) / ve(me - be * o)) / 3)), [255 * (n = pe(l * n * 3)), 255 * (r = pe(l * r * 3)), 255 * (a = pe(l * a * 3)), e.length > 3 ? e[3] : 1]
            },
            we = l.unpack,
            _e = l.type;
        h.prototype.hsi = function() {
            return he(this._rgb)
        },
        p.hsi = function() {
            for (var e = [], t = arguments.length; t--;)
                e[t] = arguments[t];
            return new (Function.prototype.bind.apply(h, [null].concat(e, ["hsi"])))
        },
        s.format.hsi = ye,
        s.autodetect.push({
            p: 2,
            test: function() {
                for (var e = [], t = arguments.length; t--;)
                    e[t] = arguments[t];
                if (e = we(e, "hsi"), "array" === _e(e) && 3 === e.length)
                    return "hsi"
            }
        });
        var xe = l.unpack,
            ke = l.type;
        h.prototype.hsl = function() {
            return C(this._rgb)
        },
        p.hsl = function() {
            for (var e = [], t = arguments.length; t--;)
                e[t] = arguments[t];
            return new (Function.prototype.bind.apply(h, [null].concat(e, ["hsl"])))
        },
        s.format.hsl = I,
        s.autodetect.push({
            p: 2,
            test: function() {
                for (var e = [], t = arguments.length; t--;)
                    e[t] = arguments[t];
                if (e = xe(e, "hsl"), "array" === ke(e) && 3 === e.length)
                    return "hsl"
            }
        });
        var Me = l.unpack,
            Ne = Math.min,
            Ee = Math.max,
            Se = function() {
                for (var e = [], t = arguments.length; t--;)
                    e[t] = arguments[t];
                var n,
                    r,
                    a,
                    o = (e = Me(e, "rgb"))[0],
                    i = e[1],
                    l = e[2],
                    s = Ne(o, i, l),
                    c = Ee(o, i, l),
                    u = c - s;
                return a = c / 255, 0 === c ? (n = Number.NaN, r = 0) : (r = u / c, o === c && (n = (i - l) / u), i === c && (n = 2 + (l - o) / u), l === c && (n = 4 + (o - i) / u), (n *= 60) < 0 && (n += 360)), [n, r, a]
            },
            Ce = l.unpack,
            Oe = Math.floor,
            Le = function() {
                for (var e, t, n, r, a, o, i = [], l = arguments.length; l--;)
                    i[l] = arguments[l];
                var s,
                    c,
                    u,
                    f = (i = Ce(i, "hsv"))[0],
                    d = i[1],
                    h = i[2];
                if (h *= 255, 0 === d)
                    s = c = u = h;
                else {
                    360 === f && (f = 0),
                    f > 360 && (f -= 360),
                    f < 0 && (f += 360);
                    var g = Oe(f /= 60),
                        p = f - g,
                        b = h * (1 - d),
                        m = h * (1 - d * p),
                        v = h * (1 - d * (1 - p));
                    switch (g) {
                    case 0:
                        s = (e = [h, v, b])[0],
                        c = e[1],
                        u = e[2];
                        break;
                    case 1:
                        s = (t = [m, h, b])[0],
                        c = t[1],
                        u = t[2];
                        break;
                    case 2:
                        s = (n = [b, h, v])[0],
                        c = n[1],
                        u = n[2];
                        break;
                    case 3:
                        s = (r = [b, m, h])[0],
                        c = r[1],
                        u = r[2];
                        break;
                    case 4:
                        s = (a = [v, b, h])[0],
                        c = a[1],
                        u = a[2];
                        break;
                    case 5:
                        s = (o = [h, b, m])[0],
                        c = o[1],
                        u = o[2]
                    }
                }
                return [s, c, u, i.length > 3 ? i[3] : 1]
            },
            Ae = l.unpack,
            Te = l.type;
        h.prototype.hsv = function() {
            return Se(this._rgb)
        },
        p.hsv = function() {
            for (var e = [], t = arguments.length; t--;)
                e[t] = arguments[t];
            return new (Function.prototype.bind.apply(h, [null].concat(e, ["hsv"])))
        },
        s.format.hsv = Le,
        s.autodetect.push({
            p: 2,
            test: function() {
                for (var e = [], t = arguments.length; t--;)
                    e[t] = arguments[t];
                if (e = Ae(e, "hsv"), "array" === Te(e) && 3 === e.length)
                    return "hsv"
            }
        });
        var Re = 18,
            je = .95047,
            Ie = 1,
            Be = 1.08883,
            He = .137931034,
            Pe = .206896552,
            qe = .12841855,
            ze = .008856452,
            De = l.unpack,
            Fe = Math.pow,
            Ge = function(e) {
                return (e /= 255) <= .04045 ? e / 12.92 : Fe((e + .055) / 1.055, 2.4)
            },
            $e = function(e) {
                return e > ze ? Fe(e, 1 / 3) : e / qe + He
            },
            Ye = function(e, t, n) {
                return e = Ge(e), t = Ge(t), n = Ge(n), [$e((.4124564 * e + .3575761 * t + .1804375 * n) / je), $e((.2126729 * e + .7151522 * t + .072175 * n) / Ie), $e((.0193339 * e + .119192 * t + .9503041 * n) / Be)]
            },
            Ue = function() {
                for (var e = [], t = arguments.length; t--;)
                    e[t] = arguments[t];
                var n = De(e, "rgb"),
                    r = n[0],
                    a = n[1],
                    o = n[2],
                    i = Ye(r, a, o),
                    l = i[0],
                    s = i[1],
                    c = i[2],
                    u = 116 * s - 16;
                return [u < 0 ? 0 : u, 500 * (l - s), 200 * (s - c)]
            },
            Je = l.unpack,
            Ke = Math.pow,
            We = function(e) {
                return 255 * (e <= .00304 ? 12.92 * e : 1.055 * Ke(e, 1 / 2.4) - .055)
            },
            Xe = function(e) {
                return e > Pe ? e * e * e : qe * (e - He)
            },
            Ze = function() {
                for (var e = [], t = arguments.length; t--;)
                    e[t] = arguments[t];
                var n,
                    r,
                    a,
                    o = (e = Je(e, "lab"))[0],
                    i = e[1],
                    l = e[2];
                return r = (o + 16) / 116, n = isNaN(i) ? r : r + i / 500, a = isNaN(l) ? r : r - l / 200, r = Ie * Xe(r), n = je * Xe(n), a = Be * Xe(a), [We(3.2404542 * n - 1.5371385 * r - .4985314 * a), We(-.969266 * n + 1.8760108 * r + .041556 * a), We(.0556434 * n - .2040259 * r + 1.0572252 * a), e.length > 3 ? e[3] : 1]
            },
            Ve = l.unpack,
            Qe = l.type;
        h.prototype.lab = function() {
            return Ue(this._rgb)
        },
        p.lab = function() {
            for (var e = [], t = arguments.length; t--;)
                e[t] = arguments[t];
            return new (Function.prototype.bind.apply(h, [null].concat(e, ["lab"])))
        },
        s.format.lab = Ze,
        s.autodetect.push({
            p: 2,
            test: function() {
                for (var e = [], t = arguments.length; t--;)
                    e[t] = arguments[t];
                if (e = Ve(e, "lab"), "array" === Qe(e) && 3 === e.length)
                    return "lab"
            }
        });
        var et = l.unpack,
            tt = l.RAD2DEG,
            nt = Math.sqrt,
            rt = Math.atan2,
            at = Math.round,
            ot = function() {
                for (var e = [], t = arguments.length; t--;)
                    e[t] = arguments[t];
                var n = et(e, "lab"),
                    r = n[0],
                    a = n[1],
                    o = n[2],
                    i = nt(a * a + o * o),
                    l = (rt(o, a) * tt + 360) % 360;
                return 0 === at(1e4 * i) && (l = Number.NaN), [r, i, l]
            },
            it = l.unpack,
            lt = function() {
                for (var e = [], t = arguments.length; t--;)
                    e[t] = arguments[t];
                var n = it(e, "rgb"),
                    r = n[0],
                    a = n[1],
                    o = n[2],
                    i = Ue(r, a, o),
                    l = i[0],
                    s = i[1],
                    c = i[2];
                return ot(l, s, c)
            },
            st = l.unpack,
            ct = l.DEG2RAD,
            ut = Math.sin,
            ft = Math.cos,
            dt = function() {
                for (var e = [], t = arguments.length; t--;)
                    e[t] = arguments[t];
                var n = st(e, "lch"),
                    r = n[0],
                    a = n[1],
                    o = n[2];
                return isNaN(o) && (o = 0), [r, ft(o *= ct) * a, ut(o) * a]
            },
            ht = l.unpack,
            gt = function() {
                for (var e = [], t = arguments.length; t--;)
                    e[t] = arguments[t];
                var n = (e = ht(e, "lch"))[0],
                    r = e[1],
                    a = e[2],
                    o = dt(n, r, a),
                    i = o[0],
                    l = o[1],
                    s = o[2],
                    c = Ze(i, l, s),
                    u = c[0],
                    f = c[1],
                    d = c[2];
                return [u, f, d, e.length > 3 ? e[3] : 1]
            },
            pt = l.unpack,
            bt = function() {
                for (var e = [], t = arguments.length; t--;)
                    e[t] = arguments[t];
                var n = pt(e, "hcl").reverse();
                return gt.apply(void 0, n)
            },
            mt = l.unpack,
            vt = l.type;
        h.prototype.lch = function() {
            return lt(this._rgb)
        },
        h.prototype.hcl = function() {
            return lt(this._rgb).reverse()
        },
        p.lch = function() {
            for (var e = [], t = arguments.length; t--;)
                e[t] = arguments[t];
            return new (Function.prototype.bind.apply(h, [null].concat(e, ["lch"])))
        },
        p.hcl = function() {
            for (var e = [], t = arguments.length; t--;)
                e[t] = arguments[t];
            return new (Function.prototype.bind.apply(h, [null].concat(e, ["hcl"])))
        },
        s.format.lch = gt,
        s.format.hcl = bt,
        ["lch", "hcl"].forEach((function(e) {
            return s.autodetect.push({
                p: 2,
                test: function() {
                    for (var t = [], n = arguments.length; n--;)
                        t[n] = arguments[n];
                    if (t = mt(t, e), "array" === vt(t) && 3 === t.length)
                        return e
                }
            })
        }));
        var yt = {
                aliceblue: "#f0f8ff",
                antiquewhite: "#faebd7",
                aqua: "#00ffff",
                aquamarine: "#7fffd4",
                azure: "#f0ffff",
                beige: "#f5f5dc",
                bisque: "#ffe4c4",
                black: "#000000",
                blanchedalmond: "#ffebcd",
                blue: "#0000ff",
                blueviolet: "#8a2be2",
                brown: "#a52a2a",
                burlywood: "#deb887",
                cadetblue: "#5f9ea0",
                chartreuse: "#7fff00",
                chocolate: "#d2691e",
                coral: "#ff7f50",
                cornflower: "#6495ed",
                cornflowerblue: "#6495ed",
                cornsilk: "#fff8dc",
                crimson: "#dc143c",
                cyan: "#00ffff",
                darkblue: "#00008b",
                darkcyan: "#008b8b",
                darkgoldenrod: "#b8860b",
                darkgray: "#a9a9a9",
                darkgreen: "#006400",
                darkgrey: "#a9a9a9",
                darkkhaki: "#bdb76b",
                darkmagenta: "#8b008b",
                darkolivegreen: "#556b2f",
                darkorange: "#ff8c00",
                darkorchid: "#9932cc",
                darkred: "#8b0000",
                darksalmon: "#e9967a",
                darkseagreen: "#8fbc8f",
                darkslateblue: "#483d8b",
                darkslategray: "#2f4f4f",
                darkslategrey: "#2f4f4f",
                darkturquoise: "#00ced1",
                darkviolet: "#9400d3",
                deeppink: "#ff1493",
                deepskyblue: "#00bfff",
                dimgray: "#696969",
                dimgrey: "#696969",
                dodgerblue: "#1e90ff",
                firebrick: "#b22222",
                floralwhite: "#fffaf0",
                forestgreen: "#228b22",
                fuchsia: "#ff00ff",
                gainsboro: "#dcdcdc",
                ghostwhite: "#f8f8ff",
                gold: "#ffd700",
                goldenrod: "#daa520",
                gray: "#808080",
                green: "#008000",
                greenyellow: "#adff2f",
                grey: "#808080",
                honeydew: "#f0fff0",
                hotpink: "#ff69b4",
                indianred: "#cd5c5c",
                indigo: "#4b0082",
                ivory: "#fffff0",
                khaki: "#f0e68c",
                laserlemon: "#ffff54",
                lavender: "#e6e6fa",
                lavenderblush: "#fff0f5",
                lawngreen: "#7cfc00",
                lemonchiffon: "#fffacd",
                lightblue: "#add8e6",
                lightcoral: "#f08080",
                lightcyan: "#e0ffff",
                lightgoldenrod: "#fafad2",
                lightgoldenrodyellow: "#fafad2",
                lightgray: "#d3d3d3",
                lightgreen: "#90ee90",
                lightgrey: "#d3d3d3",
                lightpink: "#ffb6c1",
                lightsalmon: "#ffa07a",
                lightseagreen: "#20b2aa",
                lightskyblue: "#87cefa",
                lightslategray: "#778899",
                lightslategrey: "#778899",
                lightsteelblue: "#b0c4de",
                lightyellow: "#ffffe0",
                lime: "#00ff00",
                limegreen: "#32cd32",
                linen: "#faf0e6",
                magenta: "#ff00ff",
                maroon: "#800000",
                maroon2: "#7f0000",
                maroon3: "#b03060",
                mediumaquamarine: "#66cdaa",
                mediumblue: "#0000cd",
                mediumorchid: "#ba55d3",
                mediumpurple: "#9370db",
                mediumseagreen: "#3cb371",
                mediumslateblue: "#7b68ee",
                mediumspringgreen: "#00fa9a",
                mediumturquoise: "#48d1cc",
                mediumvioletred: "#c71585",
                midnightblue: "#191970",
                mintcream: "#f5fffa",
                mistyrose: "#ffe4e1",
                moccasin: "#ffe4b5",
                navajowhite: "#ffdead",
                navy: "#000080",
                oldlace: "#fdf5e6",
                olive: "#808000",
                olivedrab: "#6b8e23",
                orange: "#ffa500",
                orangered: "#ff4500",
                orchid: "#da70d6",
                palegoldenrod: "#eee8aa",
                palegreen: "#98fb98",
                paleturquoise: "#afeeee",
                palevioletred: "#db7093",
                papayawhip: "#ffefd5",
                peachpuff: "#ffdab9",
                peru: "#cd853f",
                pink: "#ffc0cb",
                plum: "#dda0dd",
                powderblue: "#b0e0e6",
                purple: "#800080",
                purple2: "#7f007f",
                purple3: "#a020f0",
                rebeccapurple: "#663399",
                red: "#ff0000",
                rosybrown: "#bc8f8f",
                royalblue: "#4169e1",
                saddlebrown: "#8b4513",
                salmon: "#fa8072",
                sandybrown: "#f4a460",
                seagreen: "#2e8b57",
                seashell: "#fff5ee",
                sienna: "#a0522d",
                silver: "#c0c0c0",
                skyblue: "#87ceeb",
                slateblue: "#6a5acd",
                slategray: "#708090",
                slategrey: "#708090",
                snow: "#fffafa",
                springgreen: "#00ff7f",
                steelblue: "#4682b4",
                tan: "#d2b48c",
                teal: "#008080",
                thistle: "#d8bfd8",
                tomato: "#ff6347",
                turquoise: "#40e0d0",
                violet: "#ee82ee",
                wheat: "#f5deb3",
                white: "#ffffff",
                whitesmoke: "#f5f5f5",
                yellow: "#ffff00",
                yellowgreen: "#9acd32"
            },
            wt = l.type;
        h.prototype.name = function() {
            for (var e = re(this._rgb, "rgb"), t = 0, n = Object.keys(yt); t < n.length; t += 1) {
                var r = n[t];
                if (yt[r] === e)
                    return r.toLowerCase()
            }
            return e
        },
        s.format.named = function(e) {
            if (e = e.toLowerCase(), yt[e])
                return ie(yt[e]);
            throw new Error("unknown color name: " + e)
        },
        s.autodetect.push({
            p: 5,
            test: function(e) {
                for (var t = [], n = arguments.length - 1; n-- > 0;)
                    t[n] = arguments[n + 1];
                if (!t.length && "string" === wt(e) && yt[e.toLowerCase()])
                    return "named"
            }
        });
        var _t = l.unpack,
            xt = function() {
                for (var e = [], t = arguments.length; t--;)
                    e[t] = arguments[t];
                var n = _t(e, "rgb"),
                    r = n[0],
                    a = n[1],
                    o = n[2];
                return (r << 16) + (a << 8) + o
            },
            kt = l.type,
            Mt = function(e) {
                if ("number" == kt(e) && e >= 0 && e <= 16777215)
                    return [e >> 16, e >> 8 & 255, 255 & e, 1];
                throw new Error("unknown num color: " + e)
            },
            Nt = l.type;
        h.prototype.num = function() {
            return xt(this._rgb)
        },
        p.num = function() {
            for (var e = [], t = arguments.length; t--;)
                e[t] = arguments[t];
            return new (Function.prototype.bind.apply(h, [null].concat(e, ["num"])))
        },
        s.format.num = Mt,
        s.autodetect.push({
            p: 5,
            test: function() {
                for (var e = [], t = arguments.length; t--;)
                    e[t] = arguments[t];
                if (1 === e.length && "number" === Nt(e[0]) && e[0] >= 0 && e[0] <= 16777215)
                    return "num"
            }
        });
        var Et = l.unpack,
            St = l.type,
            Ct = Math.round;
        h.prototype.rgb = function(e) {
            return void 0 === e && (e = !0), !1 === e ? this._rgb.slice(0, 3) : this._rgb.slice(0, 3).map(Ct)
        },
        h.prototype.rgba = function(e) {
            return void 0 === e && (e = !0), this._rgb.slice(0, 4).map((function(t, n) {
                return n < 3 ? !1 === e ? t : Ct(t) : t
            }))
        },
        p.rgb = function() {
            for (var e = [], t = arguments.length; t--;)
                e[t] = arguments[t];
            return new (Function.prototype.bind.apply(h, [null].concat(e, ["rgb"])))
        },
        s.format.rgb = function() {
            for (var e = [], t = arguments.length; t--;)
                e[t] = arguments[t];
            var n = Et(e, "rgba");
            return void 0 === n[3] && (n[3] = 1), n
        },
        s.autodetect.push({
            p: 3,
            test: function() {
                for (var e = [], t = arguments.length; t--;)
                    e[t] = arguments[t];
                if (e = Et(e, "rgba"), "array" === St(e) && (3 === e.length || 4 === e.length && "number" == St(e[3]) && e[3] >= 0 && e[3] <= 1))
                    return "rgb"
            }
        });
        var Ot = Math.log,
            Lt = function(e) {
                var t,
                    n,
                    r,
                    a = e / 100;
                return a < 66 ? (t = 255, n = -155.25485562709179 - .44596950469579133 * (n = a - 2) + 104.49216199393888 * Ot(n), r = a < 20 ? 0 : .8274096064007395 * (r = a - 10) - 254.76935184120902 + 115.67994401066147 * Ot(r)) : (t = 351.97690566805693 + .114206453784165 * (t = a - 55) - 40.25366309332127 * Ot(t), n = 325.4494125711974 + .07943456536662342 * (n = a - 50) - 28.0852963507957 * Ot(n), r = 255), [t, n, r, 1]
            },
            At = l.unpack,
            Tt = Math.round,
            Rt = function() {
                for (var e = [], t = arguments.length; t--;)
                    e[t] = arguments[t];
                for (var n, r = At(e, "rgb"), a = r[0], o = r[2], i = 1e3, l = 4e4, s = .4; l - i > s;) {
                    var c = Lt(n = .5 * (l + i));
                    c[2] / c[0] >= o / a ? l = n : i = n
                }
                return Tt(n)
            };
        h.prototype.temp = h.prototype.kelvin = h.prototype.temperature = function() {
            return Rt(this._rgb)
        },
        p.temp = p.kelvin = p.temperature = function() {
            for (var e = [], t = arguments.length; t--;)
                e[t] = arguments[t];
            return new (Function.prototype.bind.apply(h, [null].concat(e, ["temp"])))
        },
        s.format.temp = s.format.kelvin = s.format.temperature = Lt;
        var jt = l.type;
        h.prototype.alpha = function(e, t) {
            return void 0 === t && (t = !1), void 0 !== e && "number" === jt(e) ? t ? (this._rgb[3] = e, this) : new h([this._rgb[0], this._rgb[1], this._rgb[2], e], "rgb") : this._rgb[3]
        },
        h.prototype.clipped = function() {
            return this._rgb._clipped || !1
        },
        h.prototype.darken = function(e) {
            void 0 === e && (e = 1);
            var t = this.lab();
            return t[0] -= Re * e, new h(t, "lab").alpha(this.alpha(), !0)
        },
        h.prototype.brighten = function(e) {
            return void 0 === e && (e = 1), this.darken(-e)
        },
        h.prototype.darker = h.prototype.darken,
        h.prototype.brighter = h.prototype.brighten,
        h.prototype.get = function(e) {
            var t = e.split("."),
                n = t[0],
                r = t[1],
                a = this[n]();
            if (r) {
                var o = n.indexOf(r);
                if (o > -1)
                    return a[o];
                throw new Error("unknown channel " + r + " in mode " + n)
            }
            return a
        };
        var It = l.type,
            Bt = Math.pow;
        h.prototype.luminance = function(e) {
            if (void 0 !== e && "number" === It(e)) {
                if (0 === e)
                    return new h([0, 0, 0, this._rgb[3]], "rgb");
                if (1 === e)
                    return new h([255, 255, 255, this._rgb[3]], "rgb");
                var t = this.luminance(),
                    n = 20,
                    r = function(t, a) {
                        var o = t.interpolate(a, .5, "rgb"),
                            i = o.luminance();
                        return Math.abs(e - i) < 1e-7 || !n-- ? o : i > e ? r(t, o) : r(o, a)
                    },
                    a = (t > e ? r(new h([0, 0, 0]), this) : r(this, new h([255, 255, 255]))).rgb();
                return new h(a.concat([this._rgb[3]]))
            }
            return Ht.apply(void 0, this._rgb.slice(0, 3))
        };
        var Ht = function(e, t, n) {
                return .2126 * (e = Pt(e)) + .7152 * (t = Pt(t)) + .0722 * (n = Pt(n))
            },
            Pt = function(e) {
                return (e /= 255) <= .03928 ? e / 12.92 : Bt((e + .055) / 1.055, 2.4)
            },
            qt = {},
            zt = l.type,
            Dt = function(e, t, n) {
                void 0 === n && (n = .5);
                for (var r = [], a = arguments.length - 3; a-- > 0;)
                    r[a] = arguments[a + 3];
                var o = r[0] || "lrgb";
                if (qt[o] || r.length || (o = Object.keys(qt)[0]), !qt[o])
                    throw new Error("interpolation mode " + o + " is not defined");
                return "object" !== zt(e) && (e = new h(e)), "object" !== zt(t) && (t = new h(t)), qt[o](e, t, n).alpha(e.alpha() + n * (t.alpha() - e.alpha()))
            };
        h.prototype.mix = h.prototype.interpolate = function(e, t) {
            void 0 === t && (t = .5);
            for (var n = [], r = arguments.length - 2; r-- > 0;)
                n[r] = arguments[r + 2];
            return Dt.apply(void 0, [this, e, t].concat(n))
        },
        h.prototype.premultiply = function(e) {
            void 0 === e && (e = !1);
            var t = this._rgb,
                n = t[3];
            return e ? (this._rgb = [t[0] * n, t[1] * n, t[2] * n, n], this) : new h([t[0] * n, t[1] * n, t[2] * n, n], "rgb")
        },
        h.prototype.saturate = function(e) {
            void 0 === e && (e = 1);
            var t = this.lch();
            return t[1] += Re * e, t[1] < 0 && (t[1] = 0), new h(t, "lch").alpha(this.alpha(), !0)
        },
        h.prototype.desaturate = function(e) {
            return void 0 === e && (e = 1), this.saturate(-e)
        };
        var Ft = l.type;
        h.prototype.set = function(e, t, n) {
            void 0 === n && (n = !1);
            var r = e.split("."),
                a = r[0],
                o = r[1],
                i = this[a]();
            if (o) {
                var l = a.indexOf(o);
                if (l > -1) {
                    if ("string" == Ft(t))
                        switch (t.charAt(0)) {
                        case "+":
                        case "-":
                            i[l] += +t;
                            break;
                        case "*":
                            i[l] *= +t.substr(1);
                            break;
                        case "/":
                            i[l] /= +t.substr(1);
                            break;
                        default:
                            i[l] = +t
                        }
                    else {
                        if ("number" !== Ft(t))
                            throw new Error("unsupported value for Color.set");
                        i[l] = t
                    }
                    var s = new h(i, a);
                    return n ? (this._rgb = s._rgb, this) : s
                }
                throw new Error("unknown channel " + o + " in mode " + a)
            }
            return i
        },
        qt.rgb = function(e, t, n) {
            var r = e._rgb,
                a = t._rgb;
            return new h(r[0] + n * (a[0] - r[0]), r[1] + n * (a[1] - r[1]), r[2] + n * (a[2] - r[2]), "rgb")
        };
        var Gt = Math.sqrt,
            $t = Math.pow;
        qt.lrgb = function(e, t, n) {
            var r = e._rgb,
                a = r[0],
                o = r[1],
                i = r[2],
                l = t._rgb,
                s = l[0],
                c = l[1],
                u = l[2];
            return new h(Gt($t(a, 2) * (1 - n) + $t(s, 2) * n), Gt($t(o, 2) * (1 - n) + $t(c, 2) * n), Gt($t(i, 2) * (1 - n) + $t(u, 2) * n), "rgb")
        },
        qt.lab = function(e, t, n) {
            var r = e.lab(),
                a = t.lab();
            return new h(r[0] + n * (a[0] - r[0]), r[1] + n * (a[1] - r[1]), r[2] + n * (a[2] - r[2]), "lab")
        };
        var Yt = function(e, t, n, r) {
                var a,
                    o,
                    i,
                    l,
                    s,
                    c,
                    u,
                    f,
                    d,
                    g,
                    p,
                    b;
                return "hsl" === r ? (i = e.hsl(), l = t.hsl()) : "hsv" === r ? (i = e.hsv(), l = t.hsv()) : "hcg" === r ? (i = e.hcg(), l = t.hcg()) : "hsi" === r ? (i = e.hsi(), l = t.hsi()) : "lch" !== r && "hcl" !== r || (r = "hcl", i = e.hcl(), l = t.hcl()), "h" === r.substr(0, 1) && (s = (a = i)[0], u = a[1], d = a[2], c = (o = l)[0], f = o[1], g = o[2]), isNaN(s) || isNaN(c) ? isNaN(s) ? isNaN(c) ? b = Number.NaN : (b = c, 1 != d && 0 != d || "hsv" == r || (p = f)) : (b = s, 1 != g && 0 != g || "hsv" == r || (p = u)) : b = s + n * (c > s && c - s > 180 ? c - (s + 360) : c < s && s - c > 180 ? c + 360 - s : c - s), void 0 === p && (p = u + n * (f - u)), new h([b, p, d + n * (g - d)], r)
            },
            Ut = function(e, t, n) {
                return Yt(e, t, n, "lch")
            };
        qt.lch = Ut,
        qt.hcl = Ut,
        qt.num = function(e, t, n) {
            var r = e.num(),
                a = t.num();
            return new h(r + n * (a - r), "num")
        },
        qt.hcg = function(e, t, n) {
            return Yt(e, t, n, "hcg")
        },
        qt.hsi = function(e, t, n) {
            return Yt(e, t, n, "hsi")
        },
        qt.hsl = function(e, t, n) {
            return Yt(e, t, n, "hsl")
        },
        qt.hsv = function(e, t, n) {
            return Yt(e, t, n, "hsv")
        };
        var Jt = l.clip_rgb,
            Kt = Math.pow,
            Wt = Math.sqrt,
            Xt = Math.PI,
            Zt = Math.cos,
            Vt = Math.sin,
            Qt = Math.atan2,
            en = function(e, t) {
                for (var n = e.length, r = [0, 0, 0, 0], a = 0; a < e.length; a++) {
                    var o = e[a],
                        i = t[a] / n,
                        l = o._rgb;
                    r[0] += Kt(l[0], 2) * i,
                    r[1] += Kt(l[1], 2) * i,
                    r[2] += Kt(l[2], 2) * i,
                    r[3] += l[3] * i
                }
                return r[0] = Wt(r[0]), r[1] = Wt(r[1]), r[2] = Wt(r[2]), r[3] > .9999999 && (r[3] = 1), new h(Jt(r))
            },
            tn = l.type,
            nn = Math.pow,
            rn = function(e) {
                var t = "rgb",
                    n = p("#ccc"),
                    r = 0,
                    a = [0, 1],
                    o = [],
                    i = [0, 0],
                    l = !1,
                    s = [],
                    c = !1,
                    u = 0,
                    f = 1,
                    d = !1,
                    h = {},
                    g = !0,
                    b = 1,
                    m = function(e) {
                        if ((e = e || ["#fff", "#000"]) && "string" === tn(e) && p.brewer && p.brewer[e.toLowerCase()] && (e = p.brewer[e.toLowerCase()]), "array" === tn(e)) {
                            1 === e.length && (e = [e[0], e[0]]),
                            e = e.slice(0);
                            for (var t = 0; t < e.length; t++)
                                e[t] = p(e[t]);
                            o.length = 0;
                            for (var n = 0; n < e.length; n++)
                                o.push(n / (e.length - 1))
                        }
                        return _(), s = e
                    },
                    v = function(e) {
                        return e
                    },
                    y = function(e) {
                        return e
                    },
                    w = function(e, r) {
                        var a,
                            c;
                        if (null == r && (r = !1), isNaN(e) || null === e)
                            return n;
                        c = r ? e : l && l.length > 2 ? function(e) {
                            if (null != l) {
                                for (var t = l.length - 1, n = 0; n < t && e >= l[n];)
                                    n++;
                                return n - 1
                            }
                            return 0
                        }(e) / (l.length - 2) : f !== u ? (e - u) / (f - u) : 1,
                        c = y(c),
                        r || (c = v(c)),
                        1 !== b && (c = nn(c, b)),
                        c = i[0] + c * (1 - i[0] - i[1]),
                        c = Math.min(1, Math.max(0, c));
                        var d = Math.floor(1e4 * c);
                        if (g && h[d])
                            a = h[d];
                        else {
                            if ("array" === tn(s))
                                for (var m = 0; m < o.length; m++) {
                                    var w = o[m];
                                    if (c <= w) {
                                        a = s[m];
                                        break
                                    }
                                    if (c >= w && m === o.length - 1) {
                                        a = s[m];
                                        break
                                    }
                                    if (c > w && c < o[m + 1]) {
                                        c = (c - w) / (o[m + 1] - w),
                                        a = p.interpolate(s[m], s[m + 1], c, t);
                                        break
                                    }
                                }
                            else
                                "function" === tn(s) && (a = s(c));
                            g && (h[d] = a)
                        }
                        return a
                    },
                    _ = function() {
                        return h = {}
                    };
                m(e);
                var x = function(e) {
                    var t = p(w(e));
                    return c && t[c] ? t[c]() : t
                };
                return x.classes = function(e) {
                    if (null != e) {
                        if ("array" === tn(e))
                            l = e,
                            a = [e[0], e[e.length - 1]];
                        else {
                            var t = p.analyze(a);
                            l = 0 === e ? [t.min, t.max] : p.limits(t, "e", e)
                        }
                        return x
                    }
                    return l
                }, x.domain = function(e) {
                    if (!arguments.length)
                        return a;
                    u = e[0],
                    f = e[e.length - 1],
                    o = [];
                    var t = s.length;
                    if (e.length === t && u !== f)
                        for (var n = 0, r = Array.from(e); n < r.length; n += 1) {
                            var i = r[n];
                            o.push((i - u) / (f - u))
                        }
                    else {
                        for (var l = 0; l < t; l++)
                            o.push(l / (t - 1));
                        if (e.length > 2) {
                            var c = e.map((function(t, n) {
                                    return n / (e.length - 1)
                                })),
                                d = e.map((function(e) {
                                    return (e - u) / (f - u)
                                }));
                            d.every((function(e, t) {
                                return c[t] === e
                            })) || (y = function(e) {
                                if (e <= 0 || e >= 1)
                                    return e;
                                for (var t = 0; e >= d[t + 1];)
                                    t++;
                                var n = (e - d[t]) / (d[t + 1] - d[t]);
                                return c[t] + n * (c[t + 1] - c[t])
                            })
                        }
                    }
                    return a = [u, f], x
                }, x.mode = function(e) {
                    return arguments.length ? (t = e, _(), x) : t
                }, x.range = function(e, t) {
                    return m(e), x
                }, x.out = function(e) {
                    return c = e, x
                }, x.spread = function(e) {
                    return arguments.length ? (r = e, x) : r
                }, x.correctLightness = function(e) {
                    return null == e && (e = !0), d = e, _(), v = d ? function(e) {
                        for (var t = w(0, !0).lab()[0], n = w(1, !0).lab()[0], r = t > n, a = w(e, !0).lab()[0], o = t + (n - t) * e, i = a - o, l = 0, s = 1, c = 20; Math.abs(i) > .01 && c-- > 0;)
                            r && (i *= -1),
                            i < 0 ? (l = e, e += .5 * (s - e)) : (s = e, e += .5 * (l - e)),
                            a = w(e, !0).lab()[0],
                            i = a - o;
                        return e
                    } : function(e) {
                        return e
                    }, x
                }, x.padding = function(e) {
                    return null != e ? ("number" === tn(e) && (e = [e, e]), i = e, x) : i
                }, x.colors = function(t, n) {
                    arguments.length < 2 && (n = "hex");
                    var r = [];
                    if (0 === arguments.length)
                        r = s.slice(0);
                    else if (1 === t)
                        r = [x(.5)];
                    else if (t > 1) {
                        var o = a[0],
                            i = a[1] - o;
                        r = an(0, t, !1).map((function(e) {
                            return x(o + e / (t - 1) * i)
                        }))
                    } else {
                        e = [];
                        var c = [];
                        if (l && l.length > 2)
                            for (var u = 1, f = l.length, d = 1 <= f; d ? u < f : u > f; d ? u++ : u--)
                                c.push(.5 * (l[u - 1] + l[u]));
                        else
                            c = a;
                        r = c.map((function(e) {
                            return x(e)
                        }))
                    }
                    return p[n] && (r = r.map((function(e) {
                        return e[n]()
                    }))), r
                }, x.cache = function(e) {
                    return null != e ? (g = e, x) : g
                }, x.gamma = function(e) {
                    return null != e ? (b = e, x) : b
                }, x.nodata = function(e) {
                    return null != e ? (n = p(e), x) : n
                }, x
            };
        function an(e, t, n) {
            for (var r = [], a = e < t, o = n ? a ? t + 1 : t - 1 : t, i = e; a ? i < o : i > o; a ? i++ : i--)
                r.push(i);
            return r
        }
        var on = function(e) {
                var t,
                    n,
                    r,
                    a,
                    o,
                    i,
                    l;
                if (2 === (e = e.map((function(e) {
                    return new h(e)
                }))).length)
                    t = e.map((function(e) {
                        return e.lab()
                    })),
                    o = t[0],
                    i = t[1],
                    a = function(e) {
                        var t = [0, 1, 2].map((function(t) {
                            return o[t] + e * (i[t] - o[t])
                        }));
                        return new h(t, "lab")
                    };
                else if (3 === e.length)
                    n = e.map((function(e) {
                        return e.lab()
                    })),
                    o = n[0],
                    i = n[1],
                    l = n[2],
                    a = function(e) {
                        var t = [0, 1, 2].map((function(t) {
                            return (1 - e) * (1 - e) * o[t] + 2 * (1 - e) * e * i[t] + e * e * l[t]
                        }));
                        return new h(t, "lab")
                    };
                else if (4 === e.length) {
                    var s;
                    r = e.map((function(e) {
                        return e.lab()
                    })),
                    o = r[0],
                    i = r[1],
                    l = r[2],
                    s = r[3],
                    a = function(e) {
                        var t = [0, 1, 2].map((function(t) {
                            return (1 - e) * (1 - e) * (1 - e) * o[t] + 3 * (1 - e) * (1 - e) * e * i[t] + 3 * (1 - e) * e * e * l[t] + e * e * e * s[t]
                        }));
                        return new h(t, "lab")
                    }
                } else if (5 === e.length) {
                    var c = on(e.slice(0, 3)),
                        u = on(e.slice(2, 5));
                    a = function(e) {
                        return e < .5 ? c(2 * e) : u(2 * (e - .5))
                    }
                }
                return a
            },
            ln = function(e, t, n) {
                if (!ln[n])
                    throw new Error("unknown blend mode " + n);
                return ln[n](e, t)
            },
            sn = function(e) {
                return function(t, n) {
                    var r = p(n).rgb(),
                        a = p(t).rgb();
                    return p.rgb(e(r, a))
                }
            },
            cn = function(e) {
                return function(t, n) {
                    var r = [];
                    return r[0] = e(t[0], n[0]), r[1] = e(t[1], n[1]), r[2] = e(t[2], n[2]), r
                }
            };
        ln.normal = sn(cn((function(e) {
            return e
        }))),
        ln.multiply = sn(cn((function(e, t) {
            return e * t / 255
        }))),
        ln.screen = sn(cn((function(e, t) {
            return 255 * (1 - (1 - e / 255) * (1 - t / 255))
        }))),
        ln.overlay = sn(cn((function(e, t) {
            return t < 128 ? 2 * e * t / 255 : 255 * (1 - 2 * (1 - e / 255) * (1 - t / 255))
        }))),
        ln.darken = sn(cn((function(e, t) {
            return e > t ? t : e
        }))),
        ln.lighten = sn(cn((function(e, t) {
            return e > t ? e : t
        }))),
        ln.dodge = sn(cn((function(e, t) {
            return 255 === e || (e = t / 255 * 255 / (1 - e / 255)) > 255 ? 255 : e
        }))),
        ln.burn = sn(cn((function(e, t) {
            return 255 * (1 - (1 - t / 255) / (e / 255))
        })));
        for (var un = ln, fn = l.type, dn = l.clip_rgb, hn = l.TWOPI, gn = Math.pow, pn = Math.sin, bn = Math.cos, mn = Math.floor, vn = Math.random, yn = Math.log, wn = Math.pow, _n = Math.floor, xn = Math.abs, kn = function(e, t) {
                void 0 === t && (t = null);
                var n = {
                    min: Number.MAX_VALUE,
                    max: -1 * Number.MAX_VALUE,
                    sum: 0,
                    values: [],
                    count: 0
                };
                return "object" === o(e) && (e = Object.values(e)), e.forEach((function(e) {
                    t && "object" === o(e) && (e = e[t]),
                    null == e || isNaN(e) || (n.values.push(e), n.sum += e, e < n.min && (n.min = e), e > n.max && (n.max = e), n.count += 1)
                })), n.domain = [n.min, n.max], n.limits = function(e, t) {
                    return Mn(n, e, t)
                }, n
            }, Mn = function(e, t, n) {
                void 0 === t && (t = "equal"),
                void 0 === n && (n = 7),
                "array" == o(e) && (e = kn(e));
                var r = e.min,
                    a = e.max,
                    i = e.values.sort((function(e, t) {
                        return e - t
                    }));
                if (1 === n)
                    return [r, a];
                var l = [];
                if ("c" === t.substr(0, 1) && (l.push(r), l.push(a)), "e" === t.substr(0, 1)) {
                    l.push(r);
                    for (var s = 1; s < n; s++)
                        l.push(r + s / n * (a - r));
                    l.push(a)
                } else if ("l" === t.substr(0, 1)) {
                    if (r <= 0)
                        throw new Error("Logarithmic scales are only possible for values > 0");
                    var c = Math.LOG10E * yn(r),
                        u = Math.LOG10E * yn(a);
                    l.push(r);
                    for (var f = 1; f < n; f++)
                        l.push(wn(10, c + f / n * (u - c)));
                    l.push(a)
                } else if ("q" === t.substr(0, 1)) {
                    l.push(r);
                    for (var d = 1; d < n; d++) {
                        var h = (i.length - 1) * d / n,
                            g = _n(h);
                        if (g === h)
                            l.push(i[g]);
                        else {
                            var p = h - g;
                            l.push(i[g] * (1 - p) + i[g + 1] * p)
                        }
                    }
                    l.push(a)
                } else if ("k" === t.substr(0, 1)) {
                    var b,
                        m = i.length,
                        v = new Array(m),
                        y = new Array(n),
                        w = !0,
                        _ = 0,
                        x = null;
                    (x = []).push(r);
                    for (var k = 1; k < n; k++)
                        x.push(r + k / n * (a - r));
                    for (x.push(a); w;) {
                        for (var M = 0; M < n; M++)
                            y[M] = 0;
                        for (var N = 0; N < m; N++)
                            for (var E = i[N], S = Number.MAX_VALUE, C = void 0, O = 0; O < n; O++) {
                                var L = xn(x[O] - E);
                                L < S && (S = L, C = O),
                                y[C]++,
                                v[N] = C
                            }
                        for (var A = new Array(n), T = 0; T < n; T++)
                            A[T] = null;
                        for (var R = 0; R < m; R++)
                            null === A[b = v[R]] ? A[b] = i[R] : A[b] += i[R];
                        for (var j = 0; j < n; j++)
                            A[j] *= 1 / y[j];
                        w = !1;
                        for (var I = 0; I < n; I++)
                            if (A[I] !== x[I]) {
                                w = !0;
                                break
                            }
                        x = A,
                        ++_ > 200 && (w = !1)
                    }
                    for (var B = {}, H = 0; H < n; H++)
                        B[H] = [];
                    for (var P = 0; P < m; P++)
                        B[b = v[P]].push(i[P]);
                    for (var q = [], z = 0; z < n; z++)
                        q.push(B[z][0]),
                        q.push(B[z][B[z].length - 1]);
                    q = q.sort((function(e, t) {
                        return e - t
                    })),
                    l.push(q[0]);
                    for (var D = 1; D < q.length; D += 2) {
                        var F = q[D];
                        isNaN(F) || -1 !== l.indexOf(F) || l.push(F)
                    }
                }
                return l
            }, Nn = {
                analyze: kn,
                limits: Mn
            }, En = Math.sqrt, Sn = Math.atan2, Cn = Math.abs, On = Math.cos, Ln = Math.PI, An = {
                cool: function() {
                    return rn([p.hsl(180, 1, .9), p.hsl(250, .7, .4)])
                },
                hot: function() {
                    return rn(["#000", "#f00", "#ff0", "#fff"]).mode("rgb")
                }
            }, Tn = {
                OrRd: ["#fff7ec", "#fee8c8", "#fdd49e", "#fdbb84", "#fc8d59", "#ef6548", "#d7301f", "#b30000", "#7f0000"],
                PuBu: ["#fff7fb", "#ece7f2", "#d0d1e6", "#a6bddb", "#74a9cf", "#3690c0", "#0570b0", "#045a8d", "#023858"],
                BuPu: ["#f7fcfd", "#e0ecf4", "#bfd3e6", "#9ebcda", "#8c96c6", "#8c6bb1", "#88419d", "#810f7c", "#4d004b"],
                Oranges: ["#fff5eb", "#fee6ce", "#fdd0a2", "#fdae6b", "#fd8d3c", "#f16913", "#d94801", "#a63603", "#7f2704"],
                BuGn: ["#f7fcfd", "#e5f5f9", "#ccece6", "#99d8c9", "#66c2a4", "#41ae76", "#238b45", "#006d2c", "#00441b"],
                YlOrBr: ["#ffffe5", "#fff7bc", "#fee391", "#fec44f", "#fe9929", "#ec7014", "#cc4c02", "#993404", "#662506"],
                YlGn: ["#ffffe5", "#f7fcb9", "#d9f0a3", "#addd8e", "#78c679", "#41ab5d", "#238443", "#006837", "#004529"],
                Reds: ["#fff5f0", "#fee0d2", "#fcbba1", "#fc9272", "#fb6a4a", "#ef3b2c", "#cb181d", "#a50f15", "#67000d"],
                RdPu: ["#fff7f3", "#fde0dd", "#fcc5c0", "#fa9fb5", "#f768a1", "#dd3497", "#ae017e", "#7a0177", "#49006a"],
                Greens: ["#f7fcf5", "#e5f5e0", "#c7e9c0", "#a1d99b", "#74c476", "#41ab5d", "#238b45", "#006d2c", "#00441b"],
                YlGnBu: ["#ffffd9", "#edf8b1", "#c7e9b4", "#7fcdbb", "#41b6c4", "#1d91c0", "#225ea8", "#253494", "#081d58"],
                Purples: ["#fcfbfd", "#efedf5", "#dadaeb", "#bcbddc", "#9e9ac8", "#807dba", "#6a51a3", "#54278f", "#3f007d"],
                GnBu: ["#f7fcf0", "#e0f3db", "#ccebc5", "#a8ddb5", "#7bccc4", "#4eb3d3", "#2b8cbe", "#0868ac", "#084081"],
                Greys: ["#ffffff", "#f0f0f0", "#d9d9d9", "#bdbdbd", "#969696", "#737373", "#525252", "#252525", "#000000"],
                YlOrRd: ["#ffffcc", "#ffeda0", "#fed976", "#feb24c", "#fd8d3c", "#fc4e2a", "#e31a1c", "#bd0026", "#800026"],
                PuRd: ["#f7f4f9", "#e7e1ef", "#d4b9da", "#c994c7", "#df65b0", "#e7298a", "#ce1256", "#980043", "#67001f"],
                Blues: ["#f7fbff", "#deebf7", "#c6dbef", "#9ecae1", "#6baed6", "#4292c6", "#2171b5", "#08519c", "#08306b"],
                PuBuGn: ["#fff7fb", "#ece2f0", "#d0d1e6", "#a6bddb", "#67a9cf", "#3690c0", "#02818a", "#016c59", "#014636"],
                Viridis: ["#440154", "#482777", "#3f4a8a", "#31678e", "#26838f", "#1f9d8a", "#6cce5a", "#b6de2b", "#fee825"],
                Spectral: ["#9e0142", "#d53e4f", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#e6f598", "#abdda4", "#66c2a5", "#3288bd", "#5e4fa2"],
                RdYlGn: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee08b", "#ffffbf", "#d9ef8b", "#a6d96a", "#66bd63", "#1a9850", "#006837"],
                RdBu: ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#f7f7f7", "#d1e5f0", "#92c5de", "#4393c3", "#2166ac", "#053061"],
                PiYG: ["#8e0152", "#c51b7d", "#de77ae", "#f1b6da", "#fde0ef", "#f7f7f7", "#e6f5d0", "#b8e186", "#7fbc41", "#4d9221", "#276419"],
                PRGn: ["#40004b", "#762a83", "#9970ab", "#c2a5cf", "#e7d4e8", "#f7f7f7", "#d9f0d3", "#a6dba0", "#5aae61", "#1b7837", "#00441b"],
                RdYlBu: ["#a50026", "#d73027", "#f46d43", "#fdae61", "#fee090", "#ffffbf", "#e0f3f8", "#abd9e9", "#74add1", "#4575b4", "#313695"],
                BrBG: ["#543005", "#8c510a", "#bf812d", "#dfc27d", "#f6e8c3", "#f5f5f5", "#c7eae5", "#80cdc1", "#35978f", "#01665e", "#003c30"],
                RdGy: ["#67001f", "#b2182b", "#d6604d", "#f4a582", "#fddbc7", "#ffffff", "#e0e0e0", "#bababa", "#878787", "#4d4d4d", "#1a1a1a"],
                PuOr: ["#7f3b08", "#b35806", "#e08214", "#fdb863", "#fee0b6", "#f7f7f7", "#d8daeb", "#b2abd2", "#8073ac", "#542788", "#2d004b"],
                Set2: ["#66c2a5", "#fc8d62", "#8da0cb", "#e78ac3", "#a6d854", "#ffd92f", "#e5c494", "#b3b3b3"],
                Accent: ["#7fc97f", "#beaed4", "#fdc086", "#ffff99", "#386cb0", "#f0027f", "#bf5b17", "#666666"],
                Set1: ["#e41a1c", "#377eb8", "#4daf4a", "#984ea3", "#ff7f00", "#ffff33", "#a65628", "#f781bf", "#999999"],
                Set3: ["#8dd3c7", "#ffffb3", "#bebada", "#fb8072", "#80b1d3", "#fdb462", "#b3de69", "#fccde5", "#d9d9d9", "#bc80bd", "#ccebc5", "#ffed6f"],
                Dark2: ["#1b9e77", "#d95f02", "#7570b3", "#e7298a", "#66a61e", "#e6ab02", "#a6761d", "#666666"],
                Paired: ["#a6cee3", "#1f78b4", "#b2df8a", "#33a02c", "#fb9a99", "#e31a1c", "#fdbf6f", "#ff7f00", "#cab2d6", "#6a3d9a", "#ffff99", "#b15928"],
                Pastel2: ["#b3e2cd", "#fdcdac", "#cbd5e8", "#f4cae4", "#e6f5c9", "#fff2ae", "#f1e2cc", "#cccccc"],
                Pastel1: ["#fbb4ae", "#b3cde3", "#ccebc5", "#decbe4", "#fed9a6", "#ffffcc", "#e5d8bd", "#fddaec", "#f2f2f2"]
            }, Rn = 0, jn = Object.keys(Tn); Rn < jn.length; Rn += 1) {
            var In = jn[Rn];
            Tn[In.toLowerCase()] = Tn[In]
        }
        var Bn = Tn;
        return p.average = function(e, t, n) {
            void 0 === t && (t = "lrgb"),
            void 0 === n && (n = null);
            var r = e.length;
            n || (n = Array.from(new Array(r)).map((function() {
                return 1
            })));
            var a = r / n.reduce((function(e, t) {
                return e + t
            }));
            if (n.forEach((function(e, t) {
                n[t] *= a
            })), e = e.map((function(e) {
                return new h(e)
            })), "lrgb" === t)
                return en(e, n);
            for (var o = e.shift(), i = o.get(t), l = [], s = 0, c = 0, u = 0; u < i.length; u++)
                if (i[u] = (i[u] || 0) * n[0], l.push(isNaN(i[u]) ? 0 : n[0]), "h" === t.charAt(u) && !isNaN(i[u])) {
                    var f = i[u] / 180 * Xt;
                    s += Zt(f) * n[0],
                    c += Vt(f) * n[0]
                }
            var d = o.alpha() * n[0];
            e.forEach((function(e, r) {
                var a = e.get(t);
                d += e.alpha() * n[r + 1];
                for (var o = 0; o < i.length; o++)
                    if (!isNaN(a[o]))
                        if (l[o] += n[r + 1], "h" === t.charAt(o)) {
                            var u = a[o] / 180 * Xt;
                            s += Zt(u) * n[r + 1],
                            c += Vt(u) * n[r + 1]
                        } else
                            i[o] += a[o] * n[r + 1]
            }));
            for (var g = 0; g < i.length; g++)
                if ("h" === t.charAt(g)) {
                    for (var p = Qt(c / l[g], s / l[g]) / Xt * 180; p < 0;)
                        p += 360;
                    for (; p >= 360;)
                        p -= 360;
                    i[g] = p
                } else
                    i[g] = i[g] / l[g];
            return d /= r, new h(i, t).alpha(d > .99999 ? 1 : d, !0)
        }, p.bezier = function(e) {
            var t = on(e);
            return t.scale = function() {
                return rn(t)
            }, t
        }, p.blend = un, p.cubehelix = function(e, t, n, r, a) {
            void 0 === e && (e = 300),
            void 0 === t && (t = -1.5),
            void 0 === n && (n = 1),
            void 0 === r && (r = 1),
            void 0 === a && (a = [0, 1]);
            var o,
                i = 0;
            "array" === fn(a) ? o = a[1] - a[0] : (o = 0, a = [a, a]);
            var l = function(l) {
                var s = hn * ((e + 120) / 360 + t * l),
                    c = gn(a[0] + o * l, r),
                    u = (0 !== i ? n[0] + l * i : n) * c * (1 - c) / 2,
                    f = bn(s),
                    d = pn(s);
                return p(dn([255 * (c + u * (-.14861 * f + 1.78277 * d)), 255 * (c + u * (-.29227 * f - .90649 * d)), 255 * (c + u * (1.97294 * f)), 1]))
            };
            return l.start = function(t) {
                return null == t ? e : (e = t, l)
            }, l.rotations = function(e) {
                return null == e ? t : (t = e, l)
            }, l.gamma = function(e) {
                return null == e ? r : (r = e, l)
            }, l.hue = function(e) {
                return null == e ? n : ("array" === fn(n = e) ? 0 == (i = n[1] - n[0]) && (n = n[1]) : i = 0, l)
            }, l.lightness = function(e) {
                return null == e ? a : ("array" === fn(e) ? (a = e, o = e[1] - e[0]) : (a = [e, e], o = 0), l)
            }, l.scale = function() {
                return p.scale(l)
            }, l.hue(n), l
        }, p.mix = p.interpolate = Dt, p.random = function() {
            for (var e = "#", t = 0; t < 6; t++)
                e += "0123456789abcdef".charAt(mn(16 * vn()));
            return new h(e, "hex")
        }, p.scale = rn, p.analyze = Nn.analyze, p.contrast = function(e, t) {
            e = new h(e),
            t = new h(t);
            var n = e.luminance(),
                r = t.luminance();
            return n > r ? (n + .05) / (r + .05) : (r + .05) / (n + .05)
        }, p.deltaE = function(e, t, n, r) {
            void 0 === n && (n = 1),
            void 0 === r && (r = 1),
            e = new h(e),
            t = new h(t);
            for (var a = Array.from(e.lab()), o = a[0], i = a[1], l = a[2], s = Array.from(t.lab()), c = s[0], u = s[1], f = s[2], d = En(i * i + l * l), g = En(u * u + f * f), p = o < 16 ? .511 : .040975 * o / (1 + .01765 * o), b = .0638 * d / (1 + .0131 * d) + .638, m = d < 1e-6 ? 0 : 180 * Sn(l, i) / Ln; m < 0;)
                m += 360;
            for (; m >= 360;)
                m -= 360;
            var v = m >= 164 && m <= 345 ? .56 + Cn(.2 * On(Ln * (m + 168) / 180)) : .36 + Cn(.4 * On(Ln * (m + 35) / 180)),
                y = d * d * d * d,
                w = En(y / (y + 1900)),
                _ = b * (w * v + 1 - w),
                x = d - g,
                k = i - u,
                M = l - f,
                N = (o - c) / (n * p),
                E = x / (r * b);
            return En(N * N + E * E + (k * k + M * M - x * x) / (_ * _))
        }, p.distance = function(e, t, n) {
            void 0 === n && (n = "lab"),
            e = new h(e),
            t = new h(t);
            var r = e.get(n),
                a = t.get(n),
                o = 0;
            for (var i in r) {
                var l = (r[i] || 0) - (a[i] || 0);
                o += l * l
            }
            return Math.sqrt(o)
        }, p.limits = Nn.limits, p.valid = function() {
            for (var e = [], t = arguments.length; t--;)
                e[t] = arguments[t];
            try {
                return new (Function.prototype.bind.apply(h, [null].concat(e))), !0
            } catch (e) {
                return !1
            }
        }, p.scales = An, p.colors = yt, p.brewer = Bn, p
    }()
}, function(e, t, n) {
    e.exports = n(11).use(n(4)).use(n(12)).use(n(5)).use(n(1)).use(n(13)).use(n(14)).use(n(15)).use(n(16)).use(n(17)).use(n(18)).use(n(19)).use(n(7)).use(n(20)).use(n(21)).use(n(6)).use(n(22)).use(n(23)).use(n(24)).use(n(25)).use(n(26)).use(n(27))
}, function(e, t) {
    e.exports = function(e) {
        e.installColorSpace("XYZ", ["x", "y", "z", "alpha"], {
            fromRgb: function() {
                var t = function(e) {
                        return e > .04045 ? Math.pow((e + .055) / 1.055, 2.4) : e / 12.92
                    },
                    n = t(this._red),
                    r = t(this._green),
                    a = t(this._blue);
                return new e.XYZ(.4124564 * n + .3575761 * r + .1804375 * a, .2126729 * n + .7151522 * r + .072175 * a, .0193339 * n + .119192 * r + .9503041 * a, this._alpha)
            },
            rgb: function() {
                var t = this._x,
                    n = this._y,
                    r = this._z,
                    a = function(e) {
                        return e > .0031308 ? 1.055 * Math.pow(e, 1 / 2.4) - .055 : 12.92 * e
                    };
                return new e.RGB(a(3.2404542 * t + -1.5371385 * n + -.4985314 * r), a(-.969266 * t + 1.8760108 * n + .041556 * r), a(.0556434 * t + -.2040259 * n + 1.0572252 * r), this._alpha)
            },
            lab: function() {
                var t = function(e) {
                        return e > .008856 ? Math.pow(e, 1 / 3) : 7.787037 * e + 4 / 29
                    },
                    n = t(this._x / 95.047),
                    r = t(this._y / 100),
                    a = t(this._z / 108.883);
                return new e.LAB(116 * r - 16, 500 * (n - r), 200 * (r - a), this._alpha)
            }
        })
    }
}, function(e, t) {
    e.exports = function(e) {
        e.installColorSpace("HSV", ["hue", "saturation", "value", "alpha"], {
            rgb: function() {
                var t,
                    n,
                    r,
                    a = this._hue,
                    o = this._saturation,
                    i = this._value,
                    l = Math.min(5, Math.floor(6 * a)),
                    s = 6 * a - l,
                    c = i * (1 - o),
                    u = i * (1 - s * o),
                    f = i * (1 - (1 - s) * o);
                switch (l) {
                case 0:
                    t = i,
                    n = f,
                    r = c;
                    break;
                case 1:
                    t = u,
                    n = i,
                    r = c;
                    break;
                case 2:
                    t = c,
                    n = i,
                    r = f;
                    break;
                case 3:
                    t = c,
                    n = u,
                    r = i;
                    break;
                case 4:
                    t = f,
                    n = c,
                    r = i;
                    break;
                case 5:
                    t = i,
                    n = c,
                    r = u
                }
                return new e.RGB(t, n, r, this._alpha)
            },
            hsl: function() {
                var t,
                    n = (2 - this._saturation) * this._value,
                    r = this._saturation * this._value,
                    a = n <= 1 ? n : 2 - n;
                return t = a < 1e-9 ? 0 : r / a, new e.HSL(this._hue, t, n / 2, this._alpha)
            },
            fromRgb: function() {
                var t,
                    n = this._red,
                    r = this._green,
                    a = this._blue,
                    o = Math.max(n, r, a),
                    i = o - Math.min(n, r, a),
                    l = 0 === o ? 0 : i / o,
                    s = o;
                if (0 === i)
                    t = 0;
                else
                    switch (o) {
                    case n:
                        t = (r - a) / i / 6 + (r < a ? 1 : 0);
                        break;
                    case r:
                        t = (a - n) / i / 6 + 1 / 3;
                        break;
                    case a:
                        t = (n - r) / i / 6 + 2 / 3
                    }
                return new e.HSV(t, l, s, this._alpha)
            }
        })
    }
}, function(e, t) {
    e.exports = function(e) {
        function t(e) {
            return e <= .03928 ? e / 12.92 : Math.pow((e + .055) / 1.055, 2.4)
        }
        e.installMethod("luminance", (function() {
            var e = this.rgb();
            return .2126 * t(e._red) + .7152 * t(e._green) + .0722 * t(e._blue)
        }))
    }
}, function(e, t) {
    e.exports = function(e) {
        e.installMethod("isDark", (function() {
            var e = this.rgb();
            return (255 * e._red * 299 + 255 * e._green * 587 + 255 * e._blue * 114) / 1e3 < 128
        }))
    }
}, function(e, t, n) {
    var r = function() {
        "use strict";
        function e(t) {
            Object.freeze(t);
            var n = "function" == typeof t;
            return Object.getOwnPropertyNames(t).forEach((function(r) {
                !Object.hasOwnProperty.call(t, r) || null === t[r] || "object" != typeof t[r] && "function" != typeof t[r] || n && ("caller" === r || "callee" === r || "arguments" === r) || Object.isFrozen(t[r]) || e(t[r])
            })), t
        }
        class t {
            constructor(e)
            {
                void 0 === e.data && (e.data = {}),
                this.data = e.data
            }
            ignoreMatch()
            {
                this.ignore = !0
            }
        }
        function n(e) {
            return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
        }
        function a(e, ...t) {
            var n = {};
            for (const t in e)
                n[t] = e[t];
            return t.forEach((function(e) {
                for (const t in e)
                    n[t] = e[t]
            })), n
        }
        function o(e) {
            return e.nodeName.toLowerCase()
        }
        var i = Object.freeze({
            __proto__: null,
            escapeHTML: n,
            inherit: a,
            nodeStream: function(e) {
                var t = [];
                return function e(n, r) {
                    for (var a = n.firstChild; a; a = a.nextSibling)
                        3 === a.nodeType ? r += a.nodeValue.length : 1 === a.nodeType && (t.push({
                            event: "start",
                            offset: r,
                            node: a
                        }), r = e(a, r), o(a).match(/br|hr|img|input/) || t.push({
                            event: "stop",
                            offset: r,
                            node: a
                        }));
                    return r
                }(e, 0), t
            },
            mergeStreams: function(e, t, r) {
                var a = 0,
                    i = "",
                    l = [];
                function s() {
                    return e.length && t.length ? e[0].offset !== t[0].offset ? e[0].offset < t[0].offset ? e : t : "start" === t[0].event ? e : t : e.length ? e : t
                }
                function c(e) {
                    i += "<" + o(e) + [].map.call(e.attributes, (function(e) {
                        return " " + e.nodeName + '="' + n(e.value) + '"'
                    })).join("") + ">"
                }
                function u(e) {
                    i += "</" + o(e) + ">"
                }
                function f(e) {
                    ("start" === e.event ? c : u)(e.node)
                }
                for (; e.length || t.length;) {
                    var d = s();
                    if (i += n(r.substring(a, d[0].offset)), a = d[0].offset, d === e) {
                        l.reverse().forEach(u);
                        do {
                            f(d.splice(0, 1)[0]),
                            d = s()
                        } while (d === e && d.length && d[0].offset === a);
                        l.reverse().forEach(c)
                    } else
                        "start" === d[0].event ? l.push(d[0].node) : l.pop(),
                        f(d.splice(0, 1)[0])
                }
                return i + n(r.substr(a))
            }
        });
        const l = e => !!e.kind;
        class s {
            constructor(e, t)
            {
                this.buffer = "",
                this.classPrefix = t.classPrefix,
                e.walk(this)
            }
            addText(e)
            {
                this.buffer += n(e)
            }
            openNode(e)
            {
                if (!l(e))
                    return;
                let t = e.kind;
                e.sublanguage || (t = `${this.classPrefix}${t}`),
                this.span(t)
            }
            closeNode(e)
            {
                l(e) && (this.buffer += "</span>")
            }
            value()
            {
                return this.buffer
            }
            span(e)
            {
                this.buffer += `<span class="${e}">`
            }
        }
        class c {
            constructor()
            {
                this.rootNode = {
                    children: []
                },
                this.stack = [this.rootNode]
            }
            get top()
            {
                return this.stack[this.stack.length - 1]
            }
            get root()
            {
                return this.rootNode
            }
            add(e)
            {
                this.top.children.push(e)
            }
            openNode(e)
            {
                const t = {
                    kind: e,
                    children: []
                };
                this.add(t),
                this.stack.push(t)
            }
            closeNode()
            {
                if (this.stack.length > 1)
                    return this.stack.pop()
            }
            closeAllNodes()
            {
                for (; this.closeNode();)
                    ;
            }
            toJSON()
            {
                return JSON.stringify(this.rootNode, null, 4)
            }
            walk(e)
            {
                return this.constructor._walk(e, this.rootNode)
            }
            static _walk(e, t)
            {
                return "string" == typeof t ? e.addText(t) : t.children && (e.openNode(t), t.children.forEach(t => this._walk(e, t)), e.closeNode(t)), e
            }
            static _collapse(e)
            {
                "string" != typeof e && e.children && (e.children.every(e => "string" == typeof e) ? e.children = [e.children.join("")] : e.children.forEach(e => {
                    c._collapse(e)
                }))
            }
        }
        class u extends c {
            constructor(e)
            {
                super(),
                this.options = e
            }
            addKeyword(e, t)
            {
                "" !== e && (this.openNode(t), this.addText(e), this.closeNode())
            }
            addText(e)
            {
                "" !== e && this.add(e)
            }
            addSublanguage(e, t)
            {
                const n = e.root;
                n.kind = t,
                n.sublanguage = !0,
                this.add(n)
            }
            toHTML()
            {
                return new s(this, this.options).value()
            }
            finalize()
            {
                return !0
            }
        }
        function f(e) {
            return e ? "string" == typeof e ? e : e.source : null
        }
        const d = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",
            h = {
                begin: "\\\\[\\s\\S]",
                relevance: 0
            },
            g = {
                className: "string",
                begin: "'",
                end: "'",
                illegal: "\\n",
                contains: [h]
            },
            p = {
                className: "string",
                begin: '"',
                end: '"',
                illegal: "\\n",
                contains: [h]
            },
            b = {
                begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
            },
            m = function(e, t, n={}) {
                var r = a({
                    className: "comment",
                    begin: e,
                    end: t,
                    contains: []
                }, n);
                return r.contains.push(b), r.contains.push({
                    className: "doctag",
                    begin: "(?:TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):",
                    relevance: 0
                }), r
            },
            v = m("//", "$"),
            y = m("/\\*", "\\*/"),
            w = m("#", "$");
        var _ = Object.freeze({
                __proto__: null,
                IDENT_RE: "[a-zA-Z]\\w*",
                UNDERSCORE_IDENT_RE: "[a-zA-Z_]\\w*",
                NUMBER_RE: "\\b\\d+(\\.\\d+)?",
                C_NUMBER_RE: d,
                BINARY_NUMBER_RE: "\\b(0b[01]+)",
                RE_STARTERS_RE: "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",
                SHEBANG: (e={}) => {
                    const t = /^#![ ]*\//;
                    return e.binary && (e.begin = function(...e) {
                        return e.map(e => f(e)).join("")
                    }(t, /.*\b/, e.binary, /\b.*/)), a({
                        className: "meta",
                        begin: t,
                        end: /$/,
                        relevance: 0,
                        "on:begin": (e, t) => {
                            0 !== e.index && t.ignoreMatch()
                        }
                    }, e)
                },
                BACKSLASH_ESCAPE: h,
                APOS_STRING_MODE: g,
                QUOTE_STRING_MODE: p,
                PHRASAL_WORDS_MODE: b,
                COMMENT: m,
                C_LINE_COMMENT_MODE: v,
                C_BLOCK_COMMENT_MODE: y,
                HASH_COMMENT_MODE: w,
                NUMBER_MODE: {
                    className: "number",
                    begin: "\\b\\d+(\\.\\d+)?",
                    relevance: 0
                },
                C_NUMBER_MODE: {
                    className: "number",
                    begin: d,
                    relevance: 0
                },
                BINARY_NUMBER_MODE: {
                    className: "number",
                    begin: "\\b(0b[01]+)",
                    relevance: 0
                },
                CSS_NUMBER_MODE: {
                    className: "number",
                    begin: "\\b\\d+(\\.\\d+)?(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
                    relevance: 0
                },
                REGEXP_MODE: {
                    begin: /(?=\/[^/\n]*\/)/,
                    contains: [{
                        className: "regexp",
                        begin: /\//,
                        end: /\/[gimuy]*/,
                        illegal: /\n/,
                        contains: [h, {
                            begin: /\[/,
                            end: /\]/,
                            relevance: 0,
                            contains: [h]
                        }]
                    }]
                },
                TITLE_MODE: {
                    className: "title",
                    begin: "[a-zA-Z]\\w*",
                    relevance: 0
                },
                UNDERSCORE_TITLE_MODE: {
                    className: "title",
                    begin: "[a-zA-Z_]\\w*",
                    relevance: 0
                },
                METHOD_GUARD: {
                    begin: "\\.\\s*[a-zA-Z_]\\w*",
                    relevance: 0
                },
                END_SAME_AS_BEGIN: function(e) {
                    return Object.assign(e, {
                        "on:begin": (e, t) => {
                            t.data._beginMatch = e[1]
                        },
                        "on:end": (e, t) => {
                            t.data._beginMatch !== e[1] && t.ignoreMatch()
                        }
                    })
                }
            }),
            x = "of and for in not or if then".split(" ");
        function k(e, t) {
            return t ? +t : function(e) {
                return x.includes(e.toLowerCase())
            }(e) ? 0 : 1
        }
        const M = {
                props: ["language", "code", "autodetect"],
                data: function() {
                    return {
                        detectedLanguage: "",
                        unknownLanguage: !1
                    }
                },
                computed: {
                    className() {
                        return this.unknownLanguage ? "" : "hljs " + this.detectedLanguage
                    },
                    highlighted() {
                        if (!this.autoDetect && !r.getLanguage(this.language))
                            return console.warn(`The language "${this.language}" you specified could not be found.`), this.unknownLanguage = !0, n(this.code);
                        let e;
                        return this.autoDetect ? (e = r.highlightAuto(this.code), this.detectedLanguage = e.language) : (e = r.highlight(this.language, this.code, this.ignoreIllegals), this.detectectLanguage = this.language), e.value
                    },
                    autoDetect() {
                        return !(this.language && (e = this.autodetect, !e && "" !== e));
                        var e
                    },
                    ignoreIllegals: () => !0
                },
                render(e) {
                    return e("pre", {}, [e("code", {
                        class: this.className,
                        domProps: {
                            innerHTML: this.highlighted
                        }
                    })])
                }
            },
            N = {
                install(e) {
                    e.component("highlightjs", M)
                }
            },
            E = n,
            S = a,
            {nodeStream: C, mergeStreams: O} = i,
            L = Symbol("nomatch");
        return function(n) {
            var r = [],
                o = Object.create(null),
                i = Object.create(null),
                l = [],
                s = !0,
                c = /(^(<[^>]+>|\t|)+|\n)/gm,
                d = "Could not find the language '{}', did you forget to load/include a language module?";
            const h = {
                disableAutodetect: !0,
                name: "Plain text",
                contains: []
            };
            var g = {
                noHighlightRe: /^(no-?highlight)$/i,
                languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
                classPrefix: "hljs-",
                tabReplace: null,
                useBR: !1,
                languages: null,
                __emitter: u
            };
            function p(e) {
                return g.noHighlightRe.test(e)
            }
            function b(e, t, n, r) {
                var a = {
                    code: t,
                    language: e
                };
                R("before:highlight", a);
                var o = a.result ? a.result : m(a.language, a.code, n, r);
                return o.code = a.code, R("after:highlight", o), o
            }
            function m(e, n, r, i) {
                var l = n;
                function c(e, t) {
                    var n = w.case_insensitive ? t[0].toLowerCase() : t[0];
                    return Object.prototype.hasOwnProperty.call(e.keywords, n) && e.keywords[n]
                }
                function u() {
                    null != N.subLanguage ? function() {
                        if ("" !== O) {
                            var e = null;
                            if ("string" == typeof N.subLanguage) {
                                if (!o[N.subLanguage])
                                    return void C.addText(O);
                                e = m(N.subLanguage, O, !0, S[N.subLanguage]),
                                S[N.subLanguage] = e.top
                            } else
                                e = v(O, N.subLanguage.length ? N.subLanguage : null);
                            N.relevance > 0 && (A += e.relevance),
                            C.addSublanguage(e.emitter, e.language)
                        }
                    }() : function() {
                        if (!N.keywords)
                            return void C.addText(O);
                        let e = 0;
                        N.keywordPatternRe.lastIndex = 0;
                        let t = N.keywordPatternRe.exec(O),
                            n = "";
                        for (; t;) {
                            n += O.substring(e, t.index);
                            const r = c(N, t);
                            if (r) {
                                const [e, a] = r;
                                C.addText(n),
                                n = "",
                                A += a,
                                C.addKeyword(t[0], e)
                            } else
                                n += t[0];
                            e = N.keywordPatternRe.lastIndex,
                            t = N.keywordPatternRe.exec(O)
                        }
                        n += O.substr(e),
                        C.addText(n)
                    }(),
                    O = ""
                }
                function h(e) {
                    return e.className && C.openNode(e.className), N = Object.create(e, {
                        parent: {
                            value: N
                        }
                    })
                }
                function p(e) {
                    return 0 === N.matcher.regexIndex ? (O += e[0], 1) : (j = !0, 0)
                }
                var b = {};
                function y(n, a) {
                    var o = a && a[0];
                    if (O += n, null == o)
                        return u(), 0;
                    if ("begin" === b.type && "end" === a.type && b.index === a.index && "" === o) {
                        if (O += l.slice(a.index, a.index + 1), !s) {
                            const t = Error("0 width match regex");
                            throw t.languageName = e, t.badRule = b.rule, t
                        }
                        return 1
                    }
                    if (b = a, "begin" === a.type)
                        return function(e) {
                            var n = e[0],
                                r = e.rule;
                            const a = new t(r),
                                o = [r.__beforeBegin, r["on:begin"]];
                            for (const t of o)
                                if (t && (t(e, a), a.ignore))
                                    return p(n);
                            return r && r.endSameAsBegin && (r.endRe = RegExp(n.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&"), "m")), r.skip ? O += n : (r.excludeBegin && (O += n), u(), r.returnBegin || r.excludeBegin || (O = n)), h(r), r.returnBegin ? 0 : n.length
                        }(a);
                    if ("illegal" === a.type && !r) {
                        const e = Error('Illegal lexeme "' + o + '" for mode "' + (N.className || "<unnamed>") + '"');
                        throw e.mode = N, e
                    }
                    if ("end" === a.type) {
                        var i = function(e) {
                            var n = e[0],
                                r = l.substr(e.index),
                                a = function e(n, r, a) {
                                    let o = function(e, t) {
                                        var n = e && e.exec(t);
                                        return n && 0 === n.index
                                    }(n.endRe, a);
                                    if (o) {
                                        if (n["on:end"]) {
                                            const e = new t(n);
                                            n["on:end"](r, e),
                                            e.ignore && (o = !1)
                                        }
                                        if (o) {
                                            for (; n.endsParent && n.parent;)
                                                n = n.parent;
                                            return n
                                        }
                                    }
                                    if (n.endsWithParent)
                                        return e(n.parent, r, a)
                                }(N, e, r);
                            if (!a)
                                return L;
                            var o = N;
                            o.skip ? O += n : (o.returnEnd || o.excludeEnd || (O += n), u(), o.excludeEnd && (O = n));
                            do {
                                N.className && C.closeNode(),
                                N.skip || N.subLanguage || (A += N.relevance),
                                N = N.parent
                            } while (N !== a.parent);
                            return a.starts && (a.endSameAsBegin && (a.starts.endRe = a.endRe), h(a.starts)), o.returnEnd ? 0 : n.length
                        }(a);
                        if (i !== L)
                            return i
                    }
                    if ("illegal" === a.type && "" === o)
                        return 1;
                    if (R > 1e5 && R > 3 * a.index)
                        throw Error("potential infinite loop, way more iterations than matches");
                    return O += o, o.length
                }
                var w = M(e);
                if (!w)
                    throw console.error(d.replace("{}", e)), Error('Unknown language: "' + e + '"');
                var _ = function(e) {
                        function t(t, n) {
                            return RegExp(f(t), "m" + (e.case_insensitive ? "i" : "") + (n ? "g" : ""))
                        }
                        class n {
                            constructor()
                            {
                                this.matchIndexes = {},
                                this.regexes = [],
                                this.matchAt = 1,
                                this.position = 0
                            }
                            addRule(e, t)
                            {
                                t.position = this.position++,
                                this.matchIndexes[this.matchAt] = t,
                                this.regexes.push([t, e]),
                                this.matchAt += function(e) {
                                    return RegExp(e.toString() + "|").exec("").length - 1
                                }(e) + 1
                            }
                            compile()
                            {
                                0 === this.regexes.length && (this.exec = () => null);
                                const e = this.regexes.map(e => e[1]);
                                this.matcherRe = t(function(e, t="|") {
                                    for (var n = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./, r = 0, a = "", o = 0; o < e.length; o++) {
                                        var i = r += 1,
                                            l = f(e[o]);
                                        for (o > 0 && (a += t), a += "("; l.length > 0;) {
                                            var s = n.exec(l);
                                            if (null == s) {
                                                a += l;
                                                break
                                            }
                                            a += l.substring(0, s.index),
                                            l = l.substring(s.index + s[0].length),
                                            "\\" === s[0][0] && s[1] ? a += "\\" + (+s[1] + i) : (a += s[0], "(" === s[0] && r++)
                                        }
                                        a += ")"
                                    }
                                    return a
                                }(e), !0),
                                this.lastIndex = 0
                            }
                            exec(e)
                            {
                                this.matcherRe.lastIndex = this.lastIndex;
                                const t = this.matcherRe.exec(e);
                                if (!t)
                                    return null;
                                const n = t.findIndex((e, t) => t > 0 && void 0 !== e),
                                    r = this.matchIndexes[n];
                                return t.splice(0, n), Object.assign(t, r)
                            }
                        }
                        class r {
                            constructor()
                            {
                                this.rules = [],
                                this.multiRegexes = [],
                                this.count = 0,
                                this.lastIndex = 0,
                                this.regexIndex = 0
                            }
                            getMatcher(e)
                            {
                                if (this.multiRegexes[e])
                                    return this.multiRegexes[e];
                                const t = new n;
                                return this.rules.slice(e).forEach(([e, n]) => t.addRule(e, n)), t.compile(), this.multiRegexes[e] = t, t
                            }
                            resumingScanAtSamePosition()
                            {
                                return 0 != this.regexIndex
                            }
                            considerAll()
                            {
                                this.regexIndex = 0
                            }
                            addRule(e, t)
                            {
                                this.rules.push([e, t]),
                                "begin" === t.type && this.count++
                            }
                            exec(e)
                            {
                                const t = this.getMatcher(this.regexIndex);
                                t.lastIndex = this.lastIndex;
                                const n = t.exec(e);
                                return n && (this.regexIndex += n.position + 1, this.regexIndex === this.count && (this.regexIndex = 0)), n
                            }
                        }
                        function o(e, t) {
                            const n = e.input[e.index - 1],
                                r = e.input[e.index + e[0].length];
                            "." !== n && "." !== r || t.ignoreMatch()
                        }
                        if (e.contains && e.contains.includes("self"))
                            throw Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
                        return function n(i, l) {
                            const s = i;
                            if (i.compiled)
                                return s;
                            i.compiled = !0,
                            i.__beforeBegin = null,
                            i.keywords = i.keywords || i.beginKeywords;
                            let c = null;
                            if ("object" == typeof i.keywords && (c = i.keywords.$pattern, delete i.keywords.$pattern), i.keywords && (i.keywords = function(e, t) {
                                var n = {};
                                return "string" == typeof e ? r("keyword", e) : Object.keys(e).forEach((function(t) {
                                    r(t, e[t])
                                })), n;
                                function r(e, r) {
                                    t && (r = r.toLowerCase()),
                                    r.split(" ").forEach((function(t) {
                                        var r = t.split("|");
                                        n[r[0]] = [e, k(r[0], r[1])]
                                    }))
                                }
                            }(i.keywords, e.case_insensitive)), i.lexemes && c)
                                throw Error("ERR: Prefer `keywords.$pattern` to `mode.lexemes`, BOTH are not allowed. (see mode reference) ");
                            return s.keywordPatternRe = t(i.lexemes || c || /\w+/, !0), l && (i.beginKeywords && (i.begin = "\\b(" + i.beginKeywords.split(" ").join("|") + ")(?=\\b|\\s)", i.__beforeBegin = o), i.begin || (i.begin = /\B|\b/), s.beginRe = t(i.begin), i.endSameAsBegin && (i.end = i.begin), i.end || i.endsWithParent || (i.end = /\B|\b/), i.end && (s.endRe = t(i.end)), s.terminator_end = f(i.end) || "", i.endsWithParent && l.terminator_end && (s.terminator_end += (i.end ? "|" : "") + l.terminator_end)), i.illegal && (s.illegalRe = t(i.illegal)), void 0 === i.relevance && (i.relevance = 1), i.contains || (i.contains = []), i.contains = [].concat(...i.contains.map((function(e) {
                                return function(e) {
                                    return e.variants && !e.cached_variants && (e.cached_variants = e.variants.map((function(t) {
                                        return a(e, {
                                            variants: null
                                        }, t)
                                    }))), e.cached_variants ? e.cached_variants : function e(t) {
                                        return !!t && (t.endsWithParent || e(t.starts))
                                    }(e) ? a(e, {
                                        starts: e.starts ? a(e.starts) : null
                                    }) : Object.isFrozen(e) ? a(e) : e
                                }("self" === e ? i : e)
                            }))), i.contains.forEach((function(e) {
                                n(e, s)
                            })), i.starts && n(i.starts, l), s.matcher = function(e) {
                                const t = new r;
                                return e.contains.forEach(e => t.addRule(e.begin, {
                                    rule: e,
                                    type: "begin"
                                })), e.terminator_end && t.addRule(e.terminator_end, {
                                    type: "end"
                                }), e.illegal && t.addRule(e.illegal, {
                                    type: "illegal"
                                }), t
                            }(s), s
                        }(e)
                    }(w),
                    x = "",
                    N = i || _,
                    S = {},
                    C = new g.__emitter(g);
                !function() {
                    for (var e = [], t = N; t !== w; t = t.parent)
                        t.className && e.unshift(t.className);
                    e.forEach(e => C.openNode(e))
                }();
                var O = "",
                    A = 0,
                    T = 0,
                    R = 0,
                    j = !1;
                try {
                    for (N.matcher.considerAll();;) {
                        R++,
                        j ? j = !1 : (N.matcher.lastIndex = T, N.matcher.considerAll());
                        const e = N.matcher.exec(l);
                        if (!e && N.matcher.resumingScanAtSamePosition()) {
                            O += l[T],
                            T += 1;
                            continue
                        }
                        if (!e)
                            break;
                        const t = y(l.substring(T, e.index), e);
                        T = e.index + t
                    }
                    return y(l.substr(T)), C.closeAllNodes(), C.finalize(), x = C.toHTML(), {
                        relevance: A,
                        value: x,
                        language: e,
                        illegal: !1,
                        emitter: C,
                        top: N
                    }
                } catch (t) {
                    if (t.message && t.message.includes("Illegal"))
                        return {
                            illegal: !0,
                            illegalBy: {
                                msg: t.message,
                                context: l.slice(T - 100, T + 100),
                                mode: t.mode
                            },
                            sofar: x,
                            relevance: 0,
                            value: E(l),
                            emitter: C
                        };
                    if (s)
                        return {
                            illegal: !1,
                            relevance: 0,
                            value: E(l),
                            emitter: C,
                            language: e,
                            top: N,
                            errorRaised: t
                        };
                    throw t
                }
            }
            function v(e, t) {
                t = t || g.languages || Object.keys(o);
                var n = function(e) {
                        const t = {
                            relevance: 0,
                            emitter: new g.__emitter(g),
                            value: E(e),
                            illegal: !1,
                            top: h
                        };
                        return t.emitter.addText(e), t
                    }(e),
                    r = n;
                return t.filter(M).filter(T).forEach((function(t) {
                    var a = m(t, e, !1);
                    a.language = t,
                    a.relevance > r.relevance && (r = a),
                    a.relevance > n.relevance && (r = n, n = a)
                })), r.language && (n.second_best = r), n
            }
            function y(e) {
                return g.tabReplace || g.useBR ? e.replace(c, e => "\n" === e ? g.useBR ? "<br>" : e : g.tabReplace ? e.replace(/\t/g, g.tabReplace) : e) : e
            }
            function w(e) {
                let t = null;
                const n = function(e) {
                    var t = e.className + " ";
                    t += e.parentNode ? e.parentNode.className : "";
                    const n = g.languageDetectRe.exec(t);
                    if (n) {
                        var r = M(n[1]);
                        return r || (console.warn(d.replace("{}", n[1])), console.warn("Falling back to no-highlight mode for this block.", e)), r ? n[1] : "no-highlight"
                    }
                    return t.split(/\s+/).find(e => p(e) || M(e))
                }(e);
                if (p(n))
                    return;
                R("before:highlightBlock", {
                    block: e,
                    language: n
                }),
                g.useBR ? (t = document.createElement("div")).innerHTML = e.innerHTML.replace(/\n/g, "").replace(/<br[ /]*>/g, "\n") : t = e;
                const r = t.textContent,
                    a = n ? b(n, r, !0) : v(r),
                    o = C(t);
                if (o.length) {
                    const e = document.createElement("div");
                    e.innerHTML = a.value,
                    a.value = O(o, C(e), r)
                }
                a.value = y(a.value),
                R("after:highlightBlock", {
                    block: e,
                    result: a
                }),
                e.innerHTML = a.value,
                e.className = function(e, t, n) {
                    var r = t ? i[t] : n,
                        a = [e.trim()];
                    return e.match(/\bhljs\b/) || a.push("hljs"), e.includes(r) || a.push(r), a.join(" ").trim()
                }(e.className, n, a.language),
                e.result = {
                    language: a.language,
                    re: a.relevance,
                    relavance: a.relevance
                },
                a.second_best && (e.second_best = {
                    language: a.second_best.language,
                    re: a.second_best.relevance,
                    relavance: a.second_best.relevance
                })
            }
            const x = () => {
                if (!x.called) {
                    x.called = !0;
                    var e = document.querySelectorAll("pre code");
                    r.forEach.call(e, w)
                }
            };
            function M(e) {
                return e = (e || "").toLowerCase(), o[e] || o[i[e]]
            }
            function A(e, {languageName: t}) {
                "string" == typeof e && (e = [e]),
                e.forEach(e => {
                    i[e] = t
                })
            }
            function T(e) {
                var t = M(e);
                return t && !t.disableAutodetect
            }
            function R(e, t) {
                var n = e;
                l.forEach((function(e) {
                    e[n] && e[n](t)
                }))
            }
            Object.assign(n, {
                highlight: b,
                highlightAuto: v,
                fixMarkup: function(e) {
                    return console.warn("fixMarkup is deprecated and will be removed entirely in v11.0"), console.warn("Please see https://github.com/highlightjs/highlight.js/issues/2534"), y(e)
                },
                highlightBlock: w,
                configure: function(e) {
                    g = S(g, e)
                },
                initHighlighting: x,
                initHighlightingOnLoad: function() {
                    window.addEventListener("DOMContentLoaded", x, !1)
                },
                registerLanguage: function(e, t) {
                    var r = null;
                    try {
                        r = t(n)
                    } catch (t) {
                        if (console.error("Language definition for '{}' could not be registered.".replace("{}", e)), !s)
                            throw t;
                        console.error(t),
                        r = h
                    }
                    r.name || (r.name = e),
                    o[e] = r,
                    r.rawDefinition = t.bind(null, n),
                    r.aliases && A(r.aliases, {
                        languageName: e
                    })
                },
                listLanguages: function() {
                    return Object.keys(o)
                },
                getLanguage: M,
                registerAliases: A,
                requireLanguage: function(e) {
                    var t = M(e);
                    if (t)
                        return t;
                    throw Error("The '{}' language is required, but not loaded.".replace("{}", e))
                },
                autoDetection: T,
                inherit: S,
                addPlugin: function(e) {
                    l.push(e)
                },
                vuePlugin: N
            }),
            n.debugMode = function() {
                s = !1
            },
            n.safeMode = function() {
                s = !0
            },
            n.versionString = "10.2.0";
            for (const t in _)
                "object" == typeof _[t] && e(_[t]);
            return Object.assign(n, _), n
        }({})
    }();
    e.exports = r,
    r.registerLanguage("xml", function() {
        "use strict";
        return function(e) {
            var t = {
                    className: "symbol",
                    begin: "&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;"
                },
                n = {
                    begin: "\\s",
                    contains: [{
                        className: "meta-keyword",
                        begin: "#?[a-z_][a-z1-9_-]+",
                        illegal: "\\n"
                    }]
                },
                r = e.inherit(n, {
                    begin: "\\(",
                    end: "\\)"
                }),
                a = e.inherit(e.APOS_STRING_MODE, {
                    className: "meta-string"
                }),
                o = e.inherit(e.QUOTE_STRING_MODE, {
                    className: "meta-string"
                }),
                i = {
                    endsWithParent: !0,
                    illegal: /</,
                    relevance: 0,
                    contains: [{
                        className: "attr",
                        begin: "[A-Za-z0-9\\._:-]+",
                        relevance: 0
                    }, {
                        begin: /=\s*/,
                        relevance: 0,
                        contains: [{
                            className: "string",
                            endsParent: !0,
                            variants: [{
                                begin: /"/,
                                end: /"/,
                                contains: [t]
                            }, {
                                begin: /'/,
                                end: /'/,
                                contains: [t]
                            }, {
                                begin: /[^\s"'=<>`]+/
                            }]
                        }]
                    }]
                };
            return {
                name: "HTML, XML",
                aliases: ["html", "xhtml", "rss", "atom", "xjb", "xsd", "xsl", "plist", "wsf", "svg"],
                case_insensitive: !0,
                contains: [{
                    className: "meta",
                    begin: "<![a-z]",
                    end: ">",
                    relevance: 10,
                    contains: [n, o, a, r, {
                        begin: "\\[",
                        end: "\\]",
                        contains: [{
                            className: "meta",
                            begin: "<![a-z]",
                            end: ">",
                            contains: [n, r, o, a]
                        }]
                    }]
                }, e.COMMENT("\x3c!--", "--\x3e", {
                    relevance: 10
                }), {
                    begin: "<\\!\\[CDATA\\[",
                    end: "\\]\\]>",
                    relevance: 10
                }, t, {
                    className: "meta",
                    begin: /<\?xml/,
                    end: /\?>/,
                    relevance: 10
                }, {
                    className: "tag",
                    begin: "<style(?=\\s|>)",
                    end: ">",
                    keywords: {
                        name: "style"
                    },
                    contains: [i],
                    starts: {
                        end: "</style>",
                        returnEnd: !0,
                        subLanguage: ["css", "xml"]
                    }
                }, {
                    className: "tag",
                    begin: "<script(?=\\s|>)",
                    end: ">",
                    keywords: {
                        name: "script"
                    },
                    contains: [i],
                    starts: {
                        end: "<\/script>",
                        returnEnd: !0,
                        subLanguage: ["javascript", "handlebars", "xml"]
                    }
                }, {
                    className: "tag",
                    begin: "</?",
                    end: "/?>",
                    contains: [{
                        className: "name",
                        begin: /[^\/><\s]+/,
                        relevance: 0
                    }, i]
                }]
            }
        }
    }()),
    r.registerLanguage("scss", function() {
        "use strict";
        return function(e) {
            var t = {
                    className: "variable",
                    begin: "(\\$[a-zA-Z-][a-zA-Z0-9_-]*)\\b"
                },
                n = {
                    className: "number",
                    begin: "#[0-9A-Fa-f]+"
                };
            return e.CSS_NUMBER_MODE, e.QUOTE_STRING_MODE, e.APOS_STRING_MODE, e.C_BLOCK_COMMENT_MODE, {
                name: "SCSS",
                case_insensitive: !0,
                illegal: "[=/|']",
                contains: [e.C_LINE_COMMENT_MODE, e.C_BLOCK_COMMENT_MODE, {
                    className: "selector-id",
                    begin: "\\#[A-Za-z0-9_-]+",
                    relevance: 0
                }, {
                    className: "selector-class",
                    begin: "\\.[A-Za-z0-9_-]+",
                    relevance: 0
                }, {
                    className: "selector-attr",
                    begin: "\\[",
                    end: "\\]",
                    illegal: "$"
                }, {
                    className: "selector-tag",
                    begin: "\\b(a|abbr|acronym|address|area|article|aside|audio|b|base|big|blockquote|body|br|button|canvas|caption|cite|code|col|colgroup|command|datalist|dd|del|details|dfn|div|dl|dt|em|embed|fieldset|figcaption|figure|footer|form|frame|frameset|(h[1-6])|head|header|hgroup|hr|html|i|iframe|img|input|ins|kbd|keygen|label|legend|li|link|map|mark|meta|meter|nav|noframes|noscript|object|ol|optgroup|option|output|p|param|pre|progress|q|rp|rt|ruby|samp|script|section|select|small|span|strike|strong|style|sub|sup|table|tbody|td|textarea|tfoot|th|thead|time|title|tr|tt|ul|var|video)\\b",
                    relevance: 0
                }, {
                    className: "selector-pseudo",
                    begin: ":(visited|valid|root|right|required|read-write|read-only|out-range|optional|only-of-type|only-child|nth-of-type|nth-last-of-type|nth-last-child|nth-child|not|link|left|last-of-type|last-child|lang|invalid|indeterminate|in-range|hover|focus|first-of-type|first-line|first-letter|first-child|first|enabled|empty|disabled|default|checked|before|after|active)"
                }, {
                    className: "selector-pseudo",
                    begin: "::(after|before|choices|first-letter|first-line|repeat-index|repeat-item|selection|value)"
                }, t, {
                    className: "attribute",
                    begin: "\\b(src|z-index|word-wrap|word-spacing|word-break|width|widows|white-space|visibility|vertical-align|unicode-bidi|transition-timing-function|transition-property|transition-duration|transition-delay|transition|transform-style|transform-origin|transform|top|text-underline-position|text-transform|text-shadow|text-rendering|text-overflow|text-indent|text-decoration-style|text-decoration-line|text-decoration-color|text-decoration|text-align-last|text-align|tab-size|table-layout|right|resize|quotes|position|pointer-events|perspective-origin|perspective|page-break-inside|page-break-before|page-break-after|padding-top|padding-right|padding-left|padding-bottom|padding|overflow-y|overflow-x|overflow-wrap|overflow|outline-width|outline-style|outline-offset|outline-color|outline|orphans|order|opacity|object-position|object-fit|normal|none|nav-up|nav-right|nav-left|nav-index|nav-down|min-width|min-height|max-width|max-height|mask|marks|margin-top|margin-right|margin-left|margin-bottom|margin|list-style-type|list-style-position|list-style-image|list-style|line-height|letter-spacing|left|justify-content|initial|inherit|ime-mode|image-orientation|image-resolution|image-rendering|icon|hyphens|height|font-weight|font-variant-ligatures|font-variant|font-style|font-stretch|font-size-adjust|font-size|font-language-override|font-kerning|font-feature-settings|font-family|font|float|flex-wrap|flex-shrink|flex-grow|flex-flow|flex-direction|flex-basis|flex|filter|empty-cells|display|direction|cursor|counter-reset|counter-increment|content|column-width|column-span|column-rule-width|column-rule-style|column-rule-color|column-rule|column-gap|column-fill|column-count|columns|color|clip-path|clip|clear|caption-side|break-inside|break-before|break-after|box-sizing|box-shadow|box-decoration-break|bottom|border-width|border-top-width|border-top-style|border-top-right-radius|border-top-left-radius|border-top-color|border-top|border-style|border-spacing|border-right-width|border-right-style|border-right-color|border-right|border-radius|border-left-width|border-left-style|border-left-color|border-left|border-image-width|border-image-source|border-image-slice|border-image-repeat|border-image-outset|border-image|border-color|border-collapse|border-bottom-width|border-bottom-style|border-bottom-right-radius|border-bottom-left-radius|border-bottom-color|border-bottom|border|background-size|background-repeat|background-position|background-origin|background-image|background-color|background-clip|background-attachment|background-blend-mode|background|backface-visibility|auto|animation-timing-function|animation-play-state|animation-name|animation-iteration-count|animation-fill-mode|animation-duration|animation-direction|animation-delay|animation|align-self|align-items|align-content)\\b",
                    illegal: "[^\\s]"
                }, {
                    begin: "\\b(whitespace|wait|w-resize|visible|vertical-text|vertical-ideographic|uppercase|upper-roman|upper-alpha|underline|transparent|top|thin|thick|text|text-top|text-bottom|tb-rl|table-header-group|table-footer-group|sw-resize|super|strict|static|square|solid|small-caps|separate|se-resize|scroll|s-resize|rtl|row-resize|ridge|right|repeat|repeat-y|repeat-x|relative|progress|pointer|overline|outside|outset|oblique|nowrap|not-allowed|normal|none|nw-resize|no-repeat|no-drop|newspaper|ne-resize|n-resize|move|middle|medium|ltr|lr-tb|lowercase|lower-roman|lower-alpha|loose|list-item|line|line-through|line-edge|lighter|left|keep-all|justify|italic|inter-word|inter-ideograph|inside|inset|inline|inline-block|inherit|inactive|ideograph-space|ideograph-parenthesis|ideograph-numeric|ideograph-alpha|horizontal|hidden|help|hand|groove|fixed|ellipsis|e-resize|double|dotted|distribute|distribute-space|distribute-letter|distribute-all-lines|disc|disabled|default|decimal|dashed|crosshair|collapse|col-resize|circle|char|center|capitalize|break-word|break-all|bottom|both|bolder|bold|block|bidi-override|below|baseline|auto|always|all-scroll|absolute|table|table-cell)\\b"
                }, {
                    begin: ":",
                    end: ";",
                    contains: [t, n, e.CSS_NUMBER_MODE, e.QUOTE_STRING_MODE, e.APOS_STRING_MODE, {
                        className: "meta",
                        begin: "!important"
                    }]
                }, {
                    begin: "@(page|font-face)",
                    lexemes: "@[a-z-]+",
                    keywords: "@page @font-face"
                }, {
                    begin: "@",
                    end: "[{;]",
                    returnBegin: !0,
                    keywords: "and or not only",
                    contains: [{
                        begin: "@[a-z-]+",
                        className: "keyword"
                    }, t, e.QUOTE_STRING_MODE, e.APOS_STRING_MODE, n, e.CSS_NUMBER_MODE]
                }]
            }
        }
    }()),
    r.registerLanguage("css", function() {
        "use strict";
        return function(e) {
            var t = {
                begin: /(?:[A-Z\_\.\-]+|--[a-zA-Z0-9_-]+)\s*:/,
                returnBegin: !0,
                end: ";",
                endsWithParent: !0,
                contains: [{
                    className: "attribute",
                    begin: /\S/,
                    end: ":",
                    excludeEnd: !0,
                    starts: {
                        endsWithParent: !0,
                        excludeEnd: !0,
                        contains: [{
                            begin: /[\w-]+\(/,
                            returnBegin: !0,
                            contains: [{
                                className: "built_in",
                                begin: /[\w-]+/
                            }, {
                                begin: /\(/,
                                end: /\)/,
                                contains: [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, e.CSS_NUMBER_MODE]
                            }]
                        }, e.CSS_NUMBER_MODE, e.QUOTE_STRING_MODE, e.APOS_STRING_MODE, e.C_BLOCK_COMMENT_MODE, {
                            className: "number",
                            begin: "#[0-9A-Fa-f]+"
                        }, {
                            className: "meta",
                            begin: "!important"
                        }]
                    }
                }]
            };
            return {
                name: "CSS",
                case_insensitive: !0,
                illegal: /[=\/|'\$]/,
                contains: [e.C_BLOCK_COMMENT_MODE, {
                    className: "selector-id",
                    begin: /#[A-Za-z0-9_-]+/
                }, {
                    className: "selector-class",
                    begin: /\.[A-Za-z0-9_-]+/
                }, {
                    className: "selector-attr",
                    begin: /\[/,
                    end: /\]/,
                    illegal: "$",
                    contains: [e.APOS_STRING_MODE, e.QUOTE_STRING_MODE]
                }, {
                    className: "selector-pseudo",
                    begin: /:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/
                }, {
                    begin: "@(page|font-face)",
                    lexemes: "@[a-z-]+",
                    keywords: "@page @font-face"
                }, {
                    begin: "@",
                    end: "[{;]",
                    illegal: /:/,
                    returnBegin: !0,
                    contains: [{
                        className: "keyword",
                        begin: /@\-?\w[\w]*(\-\w+)*/
                    }, {
                        begin: /\s/,
                        endsWithParent: !0,
                        excludeEnd: !0,
                        relevance: 0,
                        keywords: "and or not only",
                        contains: [{
                            begin: /[a-z-]+:/,
                            className: "attribute"
                        }, e.APOS_STRING_MODE, e.QUOTE_STRING_MODE, e.CSS_NUMBER_MODE]
                    }]
                }, {
                    className: "selector-tag",
                    begin: "[a-zA-Z-][a-zA-Z0-9_-]*",
                    relevance: 0
                }, {
                    begin: "{",
                    end: "}",
                    illegal: /\S/,
                    contains: [e.C_BLOCK_COMMENT_MODE, t]
                }]
            }
        }
    }())
}, function(e, t, n) {
    e.exports = function(e) {
        /*! colorjoe - v0.9.8 - Juho Vepsalainen <bebraw@gmail.com> - MIT
          https://bebraw.github.com/colorjoe - 2015-01-09 */
        /*! dragjs - v0.4.0 - Juho Vepsalainen <bebraw@gmail.com> - MIT
          https://bebraw.github.com/dragjs - 2013-07-17 */
        var t = function() {
                function e(e, t) {
                    e ? void 0 !== window.ontouchstart ? r(e, t, "touchstart", "touchmove", "touchend") : r(e, t, "mousedown", "mousemove", "mouseup") : console.warn("drag is missing elem!")
                }
                return e.xyslider = function(r) {
                    var a = n(r.class || "", r.parent),
                        o = n("pointer", a);
                    return n("shape shape1", o), n("shape shape2", o), n("bg bg1", a), n("bg bg2", a), e(a, t(r.cbs, o)), {
                        background: a,
                        pointer: o
                    }
                }, e.slider = function(r) {
                    var a = n(r.class, r.parent),
                        o = n("pointer", a);
                    return n("shape", o), n("bg", a), e(a, t(r.cbs, o)), {
                        background: a,
                        pointer: o
                    }
                }, e;
                function t(e, t) {
                    var n = {};
                    for (var r in e)
                        n[r] = a(e[r]);
                    function a(e) {
                        return function(n) {
                            n.pointer = t,
                            e(n)
                        }
                    }
                    return n
                }
                function n(e, t) {
                    return function(e, t, n) {
                        var r = document.createElement(e);
                        return t && (r.className = t), n.appendChild(r), r
                    }("div", e, t)
                }
                function r(e, t, n, r, c) {
                    var u = (t = function(e) {
                            var t,
                                n;
                            return e ? {
                                begin: e.begin || l,
                                change: e.change || l,
                                end: e.end || l
                            } : {
                                begin: function(e) {
                                    t = {
                                        x: e.elem.offsetLeft,
                                        y: e.elem.offsetTop
                                    },
                                    n = e.cursor
                                },
                                change: function(e) {
                                    i(e.elem, "left", t.x + e.cursor.x - n.x + "px"),
                                    i(e.elem, "top", t.y + e.cursor.y - n.y + "px")
                                },
                                end: l
                            }
                        }(t)).begin,
                        f = t.change,
                        d = t.end;
                    a(e, n, (function(t) {
                        var n = function(e) {
                            var t = Array.prototype.slice,
                                n = t.apply(arguments, [1]);
                            return function() {
                                return e.apply(null, n.concat(t.apply(arguments)))
                            }
                        }(s, f, e);
                        a(document, r, n),
                        a(document, c, (function a() {
                            o(document, r, n),
                            o(document, c, a),
                            s(d, e, t)
                        })),
                        s(u, e, t)
                    }))
                }
                function a(e, t, n) {
                    e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent && e.attachEvent("on" + t, n)
                }
                function o(e, t, n) {
                    e.removeEventListener ? e.removeEventListener(t, n, !1) : e.detachEvent && e.detachEvent("on" + t, n)
                }
                function i(e, t, n) {
                    e.style[t] = n
                }
                function l() {}
                function s(e, t, n) {
                    n.preventDefault();
                    var r = function(e) {
                            var t = 0,
                                n = 0;
                            if (e.offsetParent)
                                do {
                                    t += e.offsetLeft,
                                    n += e.offsetTop
                                } while (e = e.offsetParent);
                            return {
                                x: t,
                                y: n
                            }
                        }(t),
                        a = t.clientWidth,
                        o = t.clientHeight,
                        i = {
                            x: c(t, n),
                            y: u(t, n)
                        },
                        l = (i.x - r.x) / a,
                        s = (i.y - r.y) / o;
                    e({
                        x: isNaN(l) ? 0 : l,
                        y: isNaN(s) ? 0 : s,
                        cursor: i,
                        elem: t,
                        e: n
                    })
                }
                function c(e, t) {
                    if (d(e)) {
                        var n = parseInt(h(document.body, "marginLeft"), 10) - f(e, "scrollLeft") + window.pageXOffset + e.style.marginLeft;
                        return t.clientX - n
                    }
                    return t.pageX ? t.pageX : t.clientX ? t.clientX + document.body.scrollLeft : void 0
                }
                function u(e, t) {
                    if (d(e)) {
                        var n = parseInt(h(document.body, "marginTop"), 10) - f(e, "scrollTop") + window.pageYOffset + e.style.marginTop;
                        return t.clientY - n
                    }
                    return t.pageY ? t.pageY : t.clientY ? t.clientY + document.body.scrollTop : void 0
                }
                function f(e, t) {
                    for (var n = 0; "HTML" != e.nodeName;)
                        n += e[t],
                        e = e.parentNode;
                    return n
                }
                function d(e) {
                    for (; "HTML" != e.nodeName && "fixed" != g(e, "position");)
                        e = e.parentNode;
                    return "HTML" != e.nodeName
                }
                function h(e, t) {
                    return e.currentStyle ? e.currentStyle[t] : document.defaultView && document.defaultView.getComputedStyle ? document.defaultView.getComputedStyle(e, "")[t] : e.style[t]
                }
                function g(e, t) {
                    return (window.getComputedStyle ? window.getComputedStyle(e, null) : e.currentStyle)[t]
                }
            }(),
            n = a(r, "div");
        function r(e, t, n) {
            var r = document.createElement(e);
            return r.className = t, n.appendChild(r), r
        }
        function a(e) {
            var t = Array.prototype.slice,
                n = t.apply(arguments, [1]);
            return function() {
                return e.apply(null, n.concat(t.apply(arguments)))
            }
        }
        function o(e, t, n) {
            return Math.min(Math.max(e, t), n)
        }
        var i = {
                clamp: o,
                e: r,
                div: n,
                partial: a,
                labelInput: function(e, t, a, o) {
                    var i = n(e, a);
                    return {
                        label: function(e, t) {
                            var n = r("label", "", t);
                            return n.innerHTML = e, n
                        }(t, i),
                        input: function(e, t, n) {
                            var a = r("input", "", t);
                            return a.type = e, n && (a.maxLength = n), a
                        }("text", i, o)
                    }
                },
                X: function(e, t) {
                    e.style.left = o(100 * t, 0, 100) + "%"
                },
                Y: function(e, t) {
                    e.style.top = o(100 * t, 0, 100) + "%"
                },
                BG: function(e, t) {
                    e.style.background = t
                }
            },
            l = {
                currentColor: function(e) {
                    var t = i.div("currentColorContainer", e),
                        n = i.div("currentColor", t);
                    return {
                        change: function(e) {
                            i.BG(n, e.cssa())
                        }
                    }
                },
                fields: function(e, t, n) {
                    var r = n.space,
                        a = n.limit || 255,
                        o = n.fix >= 0 ? n.fix : 0,
                        l = d(a) ? ("" + a).length + o : "3";
                    l = o ? l + 1 : l;
                    var s = r.split(""),
                        c = "A" == r[r.length - 1];
                    if (r = c ? r.slice(0, -1) : r, ["RGB", "HSL", "HSV", "CMYK"].indexOf(r) < 0)
                        return console.warn("Invalid field names", r);
                    var u = i.div("colorFields", e),
                        f = s.map((function(e, t) {
                            e = e.toLowerCase();
                            var n = i.labelInput("color " + e, e, u, l);
                            return n.input.onblur = h, n.input.onkeydown = g, n.input.onkeyup = p, {
                                name: e,
                                e: n
                            }
                        }));
                    function h() {
                        t.done()
                    }
                    function g(e) {
                        e.ctrlKey || e.altKey || !/^[a-zA-Z]$/.test(e.key) || e.preventDefault()
                    }
                    function p() {
                        var e = [r];
                        f.forEach((function(t, n) {
                            a instanceof Array ? e.push(t.e.input.value / a[n]) : e.push(t.e.input.value / a)
                        })),
                        c || e.push(t.getAlpha()),
                        t.set(e)
                    }
                    return {
                        change: function(e) {
                            f.forEach((function(t, n) {
                                a instanceof Array ? "l" === t.name ? t.e.input.value = (e.lightness() * a[n]).toFixed(o) : t.e.input.value = (e[t.name]() * a[n]).toFixed(o) : "y" === t.name ? t.e.input.value = (e.yellow() * a).toFixed(o) : t.e.input.value = (e[t.name]() * a).toFixed(o)
                            }))
                        }
                    }
                },
                hex: function(e, t, n) {
                    var r = i.labelInput("hex", n.label || "#", e, 7);
                    return r.input.value = "#", r.input.onkeyup = function(e) {
                        var n = e.keyCode || e.which,
                            r = e.target.value;
                        r = function(e, t, n) {
                            for (var r = e, a = e.length; a < t; a++)
                                r += n;
                            return r
                        }(r = "#" == r[0] ? r : "#" + r, 7, "0"),
                        13 == n && t.set(r)
                    }, r.input.onblur = function(e) {
                        t.set(e.target.value),
                        t.done()
                    }, {
                        change: function(e) {
                            r.input.value = (r.input.value[0], ""),
                            r.input.value += e.hex().slice(1)
                        }
                    }
                },
                alpha: function(e, n) {
                    var r = t.slider({
                        parent: e,
                        class: "oned alpha",
                        cbs: {
                            begin: a,
                            change: a,
                            end: function() {
                                n.done()
                            }
                        }
                    });
                    function a(e) {
                        var t = i.clamp(e.y, 0, 1);
                        i.Y(e.pointer, t),
                        n.setAlpha(1 - t)
                    }
                    return {
                        change: function(e) {
                            i.Y(r.pointer, 1 - e.alpha())
                        }
                    }
                },
                close: function(e, t, n) {
                    var r = i.e("a", n.class || "close", e);
                    r.href = "#",
                    r.innerHTML = n.label || "Close",
                    r.onclick = function(e) {
                        e.preventDefault(),
                        t.hide()
                    }
                }
            },
            s = function(e) {
                return n = g, (r = [e.init, e.xy, e.z]).map(n).filter(p).length != r.length ? console.warn("colorjoe: missing cb") : function(n, r, a) {
                    return function(e) {
                        if (!e.e)
                            return console.warn("colorjoe: missing element");
                        var n = function(e) {
                            return "string" == typeof e
                        }(e.e) ? document.getElementById(e.e) : e.e;
                        n.className = "colorPicker";
                        var r = e.cbs,
                            a = t.xyslider({
                                parent: n,
                                class: "twod",
                                cbs: {
                                    begin: o,
                                    change: o,
                                    end: b
                                }
                            });
                        function o(e) {
                            h = r.xy(h, {
                                x: i.clamp(e.x, 0, 1),
                                y: i.clamp(e.y, 0, 1)
                            }, a, l),
                            p()
                        }
                        var l = t.slider({
                            parent: n,
                            class: "oned",
                            cbs: {
                                begin: c,
                                change: c,
                                end: b
                            }
                        });
                        function c(e) {
                            h = r.z(h, i.clamp(e.y, 0, 1), a, l),
                            p()
                        }
                        var u = f(e.color),
                            h = r.init(u, a, l),
                            g = {
                                change: [],
                                done: []
                            };
                        function p(e) {
                            e = d(e) ? e : [];
                            for (var t, n = g.change, r = 0, a = n.length; r < a; r++)
                                t = n[r],
                                -1 == e.indexOf(t.name) && t.fn(h)
                        }
                        function b() {
                            if (!u.equals(h)) {
                                for (var e = 0, t = g.done.length; e < t; e++)
                                    g.done[e].fn(h);
                                u = h
                            }
                        }
                        var m = {
                            e: n,
                            done: function() {
                                return b(), this
                            },
                            update: function(e) {
                                return p(e), this
                            },
                            hide: function() {
                                return n.style.display = "none", this
                            },
                            show: function() {
                                return n.style.display = "", this
                            },
                            get: function() {
                                return h
                            },
                            set: function(e) {
                                var t = this.get();
                                return h = r.init(f(e), a, l), t.equals(h) || this.update(), this
                            },
                            getAlpha: function() {
                                return h.alpha()
                            },
                            setAlpha: function(e) {
                                return h = h.alpha(e), this.update(), this
                            },
                            on: function(e, t, n) {
                                return "change" == e || "done" == e ? g[e].push({
                                    name: n,
                                    fn: t
                                }) : console.warn('Passed invalid evt name "' + e + '" to colorjoe.on'), this
                            },
                            removeAllListeners: function(e) {
                                if (e)
                                    delete g[e];
                                else
                                    for (var t in g)
                                        delete g[t];
                                return this
                            }
                        };
                        return function(e, t, n) {
                            if (n) {
                                var r,
                                    a,
                                    o,
                                    l = i.div("extras", e);
                                n.forEach((function(e, n) {
                                    if (d(e) ? (a = e[0], o = e.length > 1 ? e[1] : {}) : (a = e, o = {}), extra = a in s._extras ? s._extras[a] : null, extra)
                                        for (var i in r = extra(l, function(e, t) {
                                            var n = function(e) {
                                                var t = {};
                                                for (var n in e)
                                                    t[n] = e[n];
                                                return t
                                            }(e);
                                            return n.update = function() {
                                                e.update([t])
                                            }, n
                                        }(t, a + n), o))
                                            t.on(i, r[i], a)
                                }))
                            }
                        }(n, m, e.extras), p(), m
                    }({
                        e: n,
                        color: r,
                        cbs: e,
                        extras: a
                    })
                };
                var n,
                    r
            };
        for (var c in s.rgb = s({
            init: function(t, n, r) {
                var a = e(t).hsv();
                return this.xy(a, {
                    x: a.saturation(),
                    y: 1 - a.value()
                }, n, r), this.z(a, a.hue(), n, r), a
            },
            xy: function(e, t, n, r) {
                return i.X(n.pointer, t.x), i.Y(n.pointer, t.y), e.saturation(t.x).value(1 - t.y)
            },
            z: function(e, t, n, r) {
                return i.Y(r.pointer, t), u(n.background, t), e.hue(t)
            }
        }), s.hsl = s({
            init: function(t, n, r) {
                var a = e(t).hsl();
                return this.xy(a, {
                    x: a.hue(),
                    y: 1 - a.saturation()
                }, n, r), this.z(a, 1 - a.lightness(), n, r), a
            },
            xy: function(e, t, n, r) {
                return i.X(n.pointer, t.x), i.Y(n.pointer, t.y), u(r.background, t.x), e.hue(t.x).saturation(1 - t.y)
            },
            z: function(e, t, n, r) {
                return i.Y(r.pointer, t), e.lightness(1 - t)
            }
        }), s._extras = {}, s.registerExtra = function(e, t) {
            e in s._extras && console.warn('Extra "' + e + '"has been registered already!'),
            s._extras[e] = t
        }, l)
            s.registerExtra(c, l[c]);
        function u(t, n) {
            i.BG(t, new e.HSV(n, 1, 1).cssa())
        }
        function f(t) {
            if (!h(t))
                return e("#000");
            if (t.isColor)
                return t;
            var n = e(t);
            return n || (h(t) && console.warn("Passed invalid color to colorjoe, using black instead"), e("#000"))
        }
        function d(e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        }
        function h(e) {
            return void 0 !== e
        }
        function g(e) {
            return "function" == typeof e
        }
        function p(e) {
            return e
        }
        return s
    }(n(3))
}, function(e, t, n) {
    "use strict";
    var r = n(28),
        a = function() {
            var e = {
                    complementary: [0, 180],
                    splitComplementary: [0, 150, 320],
                    splitComplementaryCW: [0, 150, 300],
                    splitComplementaryCCW: [0, 60, 210],
                    triadic: [0, 120, 240],
                    clash: [0, 90, 270],
                    tetradic: [0, 90, 180, 270],
                    fourToneCW: [0, 60, 180, 240],
                    fourToneCCW: [0, 120, 180, 300],
                    fiveToneA: [0, 115, 155, 205, 245],
                    fiveToneB: [0, 40, 90, 130, 245],
                    fiveToneC: [0, 50, 90, 205, 320],
                    fiveToneD: [0, 40, 155, 270, 310],
                    fiveToneE: [0, 115, 230, 270, 320],
                    sixToneCW: [0, 30, 120, 150, 240, 270],
                    sixToneCCW: [0, 90, 120, 210, 240, 330],
                    neutral: [0, 15, 30, 45, 60, 75],
                    analogous: [0, 30, 60, 90, 120, 150]
                },
                t = function(e) {
                    var t = r(e);
                    return t || (t = r("#000000")), t
                },
                n = function(e, t) {
                    var n,
                        a,
                        o,
                        i,
                        l,
                        s,
                        c,
                        u = [];
                    for (a = (n = e.hsl())._hue, o = n._saturation, i = n._lightness, l = n._alpha, s = 0; s < t.length; s++)
                        c = t[s],
                        isFinite(c) && "number" == typeof c && u.push(new r.HSL((a + 1 / 360 * c) % 1, o, i, l).hex());
                    return u
                },
                a = function(e, t, n) {
                    var a,
                        o,
                        i,
                        l,
                        s,
                        c,
                        u,
                        f,
                        d = [];
                    for (isFinite(t) && "number" == typeof t || (t = 10), o = e.red(), i = e.green(), l = e.blue(), s = e.alpha(), c = (n - o) / t, u = (n - i) / t, f = (n - l) / t, a = 0; a < t; a++)
                        d.push(new r.RGB(o, i, l, s).hex()),
                        o += c,
                        i += u,
                        l += f;
                    return d
                };
            return this.add = function(t, n) {
                Array.isArray(n) && (e[t] = n)
            }, this.harmonizeAll = function(r) {
                var a = {},
                    o = t(r);
                for (var i in e)
                    e.hasOwnProperty(i) && (a[i] = n(o, e[i]));
                return a
            }, this.harmonize = function(r, a) {
                var o = t(r);
                return e.hasOwnProperty(a) && (a = e[a]), Array.isArray(a) ? n(o, a) : []
            }, this.shades = function(e, n) {
                return a(t(e), n, 0)
            }, this.tints = function(e, n) {
                return a(t(e), n, 1)
            }, this.tones = function(e, n) {
                return a(t(e), n, .5)
            }, this
        };
    t.Harmonizer = function() {
        return new a
    }
}, function(e, t) {
    var n = [],
        r = function(e) {
            return void 0 === e
        },
        a = /\s*(\.\d+|\d+(?:\.\d+)?)(%)?\s*/,
        o = /\s*(\.\d+|100|\d?\d(?:\.\d+)?)%\s*/,
        i = new RegExp("^(rgb|hsl|hsv)a?\\(" + a.source + "," + a.source + "," + a.source + "(?:," + /\s*(\.\d+|\d+(?:\.\d+)?)\s*/.source + ")?\\)$", "i");
    function l(e) {
        if (Array.isArray(e)) {
            if ("string" == typeof e[0] && "function" == typeof l[e[0]])
                return new l[e[0]](e.slice(1, e.length));
            if (4 === e.length)
                return new l.RGB(e[0] / 255, e[1] / 255, e[2] / 255, e[3] / 255)
        } else if ("string" == typeof e) {
            var t = e.toLowerCase();
            l.namedColors[t] && (e = "#" + l.namedColors[t]),
            "transparent" === t && (e = "rgba(0,0,0,0)");
            var n = e.match(i);
            if (n) {
                var a = n[1].toUpperCase(),
                    s = r(n[8]) ? n[8] : parseFloat(n[8]),
                    c = "H" === a[0],
                    u = n[3] ? 100 : c ? 360 : 255,
                    f = n[5] || c ? 100 : 255,
                    d = n[7] || c ? 100 : 255;
                if (r(l[a]))
                    throw new Error("color." + a + " is not installed.");
                return new l[a](parseFloat(n[2]) / u, parseFloat(n[4]) / f, parseFloat(n[6]) / d, s)
            }
            e.length < 6 && (e = e.replace(/^#?([0-9a-f])([0-9a-f])([0-9a-f])$/i, "$1$1$2$2$3$3"));
            var h = e.match(/^#?([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])$/i);
            if (h)
                return new l.RGB(parseInt(h[1], 16) / 255, parseInt(h[2], 16) / 255, parseInt(h[3], 16) / 255);
            if (l.CMYK) {
                var g = e.match(new RegExp("^cmyk\\(" + o.source + "," + o.source + "," + o.source + "," + o.source + "\\)$", "i"));
                if (g)
                    return new l.CMYK(parseFloat(g[1]) / 100, parseFloat(g[2]) / 100, parseFloat(g[3]) / 100, parseFloat(g[4]) / 100)
            }
        } else if ("object" == typeof e && e.isColor)
            return e;
        return !1
    }
    l.namedColors = {},
    l.installColorSpace = function(e, t, a) {
        l[e] = function(n) {
            var r = Array.isArray(n) ? n : arguments;
            t.forEach((function(n, a) {
                var o = r[a];
                if ("alpha" === n)
                    this._alpha = isNaN(o) || o > 1 ? 1 : o < 0 ? 0 : o;
                else {
                    if (isNaN(o))
                        throw new Error("[" + e + "]: Invalid color: (" + t.join(",") + ")");
                    "hue" === n ? this._hue = o < 0 ? o - Math.floor(o) : o % 1 : this["_" + n] = o < 0 ? 0 : o > 1 ? 1 : o
                }
            }), this)
        },
        l[e].propertyNames = t;
        var o = l[e].prototype;
        for (var i in ["valueOf", "hex", "hexa", "css", "cssa"].forEach((function(t) {
            o[t] = o[t] || ("RGB" === e ? o.hex : function() {
                return this.rgb()[t]()
            })
        })), o.isColor = !0, o.equals = function(n, a) {
            r(a) && (a = 1e-10),
            n = n[e.toLowerCase()]();
            for (var o = 0; o < t.length; o += 1)
                if (Math.abs(this["_" + t[o]] - n["_" + t[o]]) > a)
                    return !1;
            return !0
        }, o.toJSON = function() {
            return [e].concat(t.map((function(e) {
                return this["_" + e]
            }), this))
        }, a)
            if (a.hasOwnProperty(i)) {
                var s = i.match(/^from(.*)$/);
                s ? l[s[1].toUpperCase()].prototype[e.toLowerCase()] = a[i] : o[i] = a[i]
            }
        function c(e, t) {
            var n = {};
            for (var r in n[t.toLowerCase()] = function() {
                return this.rgb()[t.toLowerCase()]()
            }, l[t].propertyNames.forEach((function(e) {
                var r = "black" === e ? "k" : e.charAt(0);
                n[e] = n[r] = function(n, r) {
                    return this[t.toLowerCase()]()[e](n, r)
                }
            })), n)
                n.hasOwnProperty(r) && void 0 === l[e].prototype[r] && (l[e].prototype[r] = n[r])
        }
        return o[e.toLowerCase()] = function() {
            return this
        }, o.toString = function() {
            return "[" + e + " " + t.map((function(e) {
                return this["_" + e]
            }), this).join(", ") + "]"
        }, t.forEach((function(e) {
            var n = "black" === e ? "k" : e.charAt(0);
            o[e] = o[n] = function(n, r) {
                return void 0 === n ? this["_" + e] : r ? new this.constructor(t.map((function(t) {
                    return this["_" + t] + (e === t ? n : 0)
                }), this)) : new this.constructor(t.map((function(t) {
                    return e === t ? n : this["_" + t]
                }), this))
            }
        })), n.forEach((function(t) {
            c(e, t),
            c(t, e)
        })), n.push(e), l
    },
    l.pluginList = [],
    l.use = function(e) {
        return -1 === l.pluginList.indexOf(e) && (this.pluginList.push(e), e(l)), l
    },
    l.installMethod = function(e, t) {
        return n.forEach((function(n) {
            l[n].prototype[e] = t
        })), this
    },
    l.installColorSpace("RGB", ["red", "green", "blue", "alpha"], {
        hex: function() {
            var e = (65536 * Math.round(255 * this._red) + 256 * Math.round(255 * this._green) + Math.round(255 * this._blue)).toString(16);
            return "#" + "00000".substr(0, 6 - e.length) + e
        },
        hexa: function() {
            var e = Math.round(255 * this._alpha).toString(16);
            return "#" + "00".substr(0, 2 - e.length) + e + this.hex().substr(1, 6)
        },
        css: function() {
            return "rgb(" + Math.round(255 * this._red) + "," + Math.round(255 * this._green) + "," + Math.round(255 * this._blue) + ")"
        },
        cssa: function() {
            return "rgba(" + Math.round(255 * this._red) + "," + Math.round(255 * this._green) + "," + Math.round(255 * this._blue) + "," + this._alpha + ")"
        }
    }),
    e.exports = l
}, function(e, t, n) {
    e.exports = function(e) {
        e.use(n(4)),
        e.installColorSpace("LAB", ["l", "a", "b", "alpha"], {
            fromRgb: function() {
                return this.xyz().lab()
            },
            rgb: function() {
                return this.xyz().rgb()
            },
            xyz: function() {
                var t = function(e) {
                        var t = Math.pow(e, 3);
                        return t > .008856 ? t : (e - 16 / 116) / 7.87
                    },
                    n = (this._l + 16) / 116,
                    r = this._a / 500 + n,
                    a = n - this._b / 200;
                return new e.XYZ(95.047 * t(r), 100 * t(n), 108.883 * t(a), this._alpha)
            }
        })
    }
}, function(e, t) {
    e.exports = function(e) {
        e.installColorSpace("CMYK", ["cyan", "magenta", "yellow", "black", "alpha"], {
            rgb: function() {
                return new e.RGB(1 - this._cyan * (1 - this._black) - this._black, 1 - this._magenta * (1 - this._black) - this._black, 1 - this._yellow * (1 - this._black) - this._black, this._alpha)
            },
            fromRgb: function() {
                var t = this._red,
                    n = this._green,
                    r = this._blue,
                    a = 1 - t,
                    o = 1 - n,
                    i = 1 - r,
                    l = 1;
                return t || n || r ? (a = (a - (l = Math.min(a, Math.min(o, i)))) / (1 - l), o = (o - l) / (1 - l), i = (i - l) / (1 - l)) : l = 1, new e.CMYK(a, o, i, l, this._alpha)
            }
        })
    }
}, function(e, t) {
    e.exports = function(e) {
        e.namedColors = {
            aliceblue: "f0f8ff",
            antiquewhite: "faebd7",
            aqua: "0ff",
            aquamarine: "7fffd4",
            azure: "f0ffff",
            beige: "f5f5dc",
            bisque: "ffe4c4",
            black: "000",
            blanchedalmond: "ffebcd",
            blue: "00f",
            blueviolet: "8a2be2",
            brown: "a52a2a",
            burlywood: "deb887",
            cadetblue: "5f9ea0",
            chartreuse: "7fff00",
            chocolate: "d2691e",
            coral: "ff7f50",
            cornflowerblue: "6495ed",
            cornsilk: "fff8dc",
            crimson: "dc143c",
            cyan: "0ff",
            darkblue: "00008b",
            darkcyan: "008b8b",
            darkgoldenrod: "b8860b",
            darkgray: "a9a9a9",
            darkgrey: "a9a9a9",
            darkgreen: "006400",
            darkkhaki: "bdb76b",
            darkmagenta: "8b008b",
            darkolivegreen: "556b2f",
            darkorange: "ff8c00",
            darkorchid: "9932cc",
            darkred: "8b0000",
            darksalmon: "e9967a",
            darkseagreen: "8fbc8f",
            darkslateblue: "483d8b",
            darkslategray: "2f4f4f",
            darkslategrey: "2f4f4f",
            darkturquoise: "00ced1",
            darkviolet: "9400d3",
            deeppink: "ff1493",
            deepskyblue: "00bfff",
            dimgray: "696969",
            dimgrey: "696969",
            dodgerblue: "1e90ff",
            firebrick: "b22222",
            floralwhite: "fffaf0",
            forestgreen: "228b22",
            fuchsia: "f0f",
            gainsboro: "dcdcdc",
            ghostwhite: "f8f8ff",
            gold: "ffd700",
            goldenrod: "daa520",
            gray: "808080",
            grey: "808080",
            green: "008000",
            greenyellow: "adff2f",
            honeydew: "f0fff0",
            hotpink: "ff69b4",
            indianred: "cd5c5c",
            indigo: "4b0082",
            ivory: "fffff0",
            khaki: "f0e68c",
            lavender: "e6e6fa",
            lavenderblush: "fff0f5",
            lawngreen: "7cfc00",
            lemonchiffon: "fffacd",
            lightblue: "add8e6",
            lightcoral: "f08080",
            lightcyan: "e0ffff",
            lightgoldenrodyellow: "fafad2",
            lightgray: "d3d3d3",
            lightgrey: "d3d3d3",
            lightgreen: "90ee90",
            lightpink: "ffb6c1",
            lightsalmon: "ffa07a",
            lightseagreen: "20b2aa",
            lightskyblue: "87cefa",
            lightslategray: "789",
            lightslategrey: "789",
            lightsteelblue: "b0c4de",
            lightyellow: "ffffe0",
            lime: "0f0",
            limegreen: "32cd32",
            linen: "faf0e6",
            magenta: "f0f",
            maroon: "800000",
            mediumaquamarine: "66cdaa",
            mediumblue: "0000cd",
            mediumorchid: "ba55d3",
            mediumpurple: "9370d8",
            mediumseagreen: "3cb371",
            mediumslateblue: "7b68ee",
            mediumspringgreen: "00fa9a",
            mediumturquoise: "48d1cc",
            mediumvioletred: "c71585",
            midnightblue: "191970",
            mintcream: "f5fffa",
            mistyrose: "ffe4e1",
            moccasin: "ffe4b5",
            navajowhite: "ffdead",
            navy: "000080",
            oldlace: "fdf5e6",
            olive: "808000",
            olivedrab: "6b8e23",
            orange: "ffa500",
            orangered: "ff4500",
            orchid: "da70d6",
            palegoldenrod: "eee8aa",
            palegreen: "98fb98",
            paleturquoise: "afeeee",
            palevioletred: "d87093",
            papayawhip: "ffefd5",
            peachpuff: "ffdab9",
            peru: "cd853f",
            pink: "ffc0cb",
            plum: "dda0dd",
            powderblue: "b0e0e6",
            purple: "800080",
            rebeccapurple: "639",
            red: "f00",
            rosybrown: "bc8f8f",
            royalblue: "4169e1",
            saddlebrown: "8b4513",
            salmon: "fa8072",
            sandybrown: "f4a460",
            seagreen: "2e8b57",
            seashell: "fff5ee",
            sienna: "a0522d",
            silver: "c0c0c0",
            skyblue: "87ceeb",
            slateblue: "6a5acd",
            slategray: "708090",
            slategrey: "708090",
            snow: "fffafa",
            springgreen: "00ff7f",
            steelblue: "4682b4",
            tan: "d2b48c",
            teal: "008080",
            thistle: "d8bfd8",
            tomato: "ff6347",
            turquoise: "40e0d0",
            violet: "ee82ee",
            wheat: "f5deb3",
            white: "fff",
            whitesmoke: "f5f5f5",
            yellow: "ff0",
            yellowgreen: "9acd32"
        }
    }
}, function(e, t) {
    e.exports = function(e) {
        e.installMethod("clearer", (function(e) {
            return this.alpha(isNaN(e) ? -.1 : -e, !0)
        }))
    }
}, function(e, t, n) {
    e.exports = function(e) {
        e.use(n(6)),
        e.installMethod("contrast", (function(e) {
            var t = this.luminance(),
                n = e.luminance();
            return t > n ? (t + .05) / (n + .05) : (n + .05) / (t + .05)
        }))
    }
}, function(e, t, n) {
    e.exports = function(e) {
        e.use(n(1)),
        e.installMethod("darken", (function(e) {
            return this.lightness(isNaN(e) ? -.1 : -e, !0)
        }))
    }
}, function(e, t, n) {
    e.exports = function(e) {
        e.use(n(1)),
        e.installMethod("desaturate", (function(e) {
            return this.saturation(isNaN(e) ? -.1 : -e, !0)
        }))
    }
}, function(e, t) {
    e.exports = function(e) {
        function t() {
            var t = this.rgb(),
                n = .3 * t._red + .59 * t._green + .11 * t._blue;
            return new e.RGB(n, n, n, t._alpha)
        }
        e.installMethod("greyscale", t).installMethod("grayscale", t)
    }
}, function(e, t, n) {
    e.exports = function(e) {
        e.use(n(7)),
        e.installMethod("isLight", (function() {
            return !this.isDark()
        }))
    }
}, function(e, t, n) {
    e.exports = function(e) {
        e.use(n(1)),
        e.installMethod("lighten", (function(e) {
            return this.lightness(isNaN(e) ? .1 : e, !0)
        }))
    }
}, function(e, t) {
    e.exports = function(e) {
        e.installMethod("mix", (function(t, n) {
            t = e(t).rgb();
            var r = 2 * (n = 1 - (isNaN(n) ? .5 : n)) - 1,
                a = this._alpha - t._alpha,
                o = ((r * a == -1 ? r : (r + a) / (1 + r * a)) + 1) / 2,
                i = 1 - o,
                l = this.rgb();
            return new e.RGB(l._red * o + t._red * i, l._green * o + t._green * i, l._blue * o + t._blue * i, l._alpha * n + t._alpha * (1 - n))
        }))
    }
}, function(e, t) {
    e.exports = function(e) {
        e.installMethod("negate", (function() {
            var t = this.rgb();
            return new e.RGB(1 - t._red, 1 - t._green, 1 - t._blue, this._alpha)
        }))
    }
}, function(e, t) {
    e.exports = function(e) {
        e.installMethod("opaquer", (function(e) {
            return this.alpha(isNaN(e) ? .1 : e, !0)
        }))
    }
}, function(e, t, n) {
    e.exports = function(e) {
        e.use(n(1)),
        e.installMethod("rotate", (function(e) {
            return this.hue((e || 0) / 360, !0)
        }))
    }
}, function(e, t, n) {
    e.exports = function(e) {
        e.use(n(1)),
        e.installMethod("saturate", (function(e) {
            return this.saturation(isNaN(e) ? .1 : e, !0)
        }))
    }
}, function(e, t) {
    e.exports = function(e) {
        e.installMethod("toAlpha", (function(e) {
            var t = this.rgb(),
                n = e(e).rgb(),
                r = new e.RGB(0, 0, 0, t._alpha),
                a = ["_red", "_green", "_blue"];
            return a.forEach((function(e) {
                t[e] < 1e-10 ? r[e] = t[e] : t[e] > n[e] ? r[e] = (t[e] - n[e]) / (1 - n[e]) : t[e] > n[e] ? r[e] = (n[e] - t[e]) / n[e] : r[e] = 0
            })), r._red > r._green ? r._red > r._blue ? t._alpha = r._red : t._alpha = r._blue : r._green > r._blue ? t._alpha = r._green : t._alpha = r._blue, t._alpha < 1e-10 || (a.forEach((function(e) {
                t[e] = (t[e] - n[e]) / t._alpha + n[e]
            })), t._alpha *= r._alpha), t
        }))
    }
}, function(e, t, n) {
    var r,
        a = [],
        o = {},
        i = function(e) {
            return void 0 === e
        },
        l = /\s*(\.\d+|\d+(?:\.\d+)?)(%)?\s*/,
        s = /\s*(\.\d+|100|\d?\d(?:\.\d+)?)%\s*/,
        c = new RegExp("^(rgb|hsl|hsv)a?\\(" + l.source + "," + l.source + "," + l.source + "(?:," + /\s*(\.\d+|\d+(?:\.\d+)?)\s*/.source + ")?\\)$", "i");
    function u(e) {
        if ("[object Array]" === Object.prototype.toString.apply(e)) {
            if ("string" == typeof e[0] && "function" == typeof u[e[0]])
                return new u[e[0]](e.slice(1, e.length));
            if (4 === e.length)
                return new u.RGB(e[0] / 255, e[1] / 255, e[2] / 255, e[3] / 255)
        } else if ("string" == typeof e) {
            var t = e.toLowerCase();
            o[t] && (e = "#" + o[t]),
            "transparent" === t && (e = "rgba(0,0,0,0)");
            var n = e.match(c);
            if (n) {
                var r = n[1].toUpperCase(),
                    a = i(n[8]) ? n[8] : parseFloat(n[8]),
                    l = "H" === r[0],
                    f = n[3] ? 100 : l ? 360 : 255,
                    d = n[5] || l ? 100 : 255,
                    h = n[7] || l ? 100 : 255;
                if (i(u[r]))
                    throw new Error("one.color." + r + " is not installed.");
                return new u[r](parseFloat(n[2]) / f, parseFloat(n[4]) / d, parseFloat(n[6]) / h, a)
            }
            e.length < 6 && (e = e.replace(/^#?([0-9a-f])([0-9a-f])([0-9a-f])$/i, "$1$1$2$2$3$3"));
            var g = e.match(/^#?([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])$/i);
            if (g)
                return new u.RGB(parseInt(g[1], 16) / 255, parseInt(g[2], 16) / 255, parseInt(g[3], 16) / 255);
            if (u.CMYK) {
                var p = e.match(new RegExp("^cmyk\\(" + s.source + "," + s.source + "," + s.source + "," + s.source + "\\)$", "i"));
                if (p)
                    return new u.CMYK(parseFloat(p[1]) / 100, parseFloat(p[2]) / 100, parseFloat(p[3]) / 100, parseFloat(p[4]) / 100)
            }
        } else if ("object" == typeof e && e.isColor)
            return e;
        return !1
    }
    function f(e, t, n) {
        u[e] = new Function(t.join(","), "if (Object.prototype.toString.apply(" + t[0] + ") === '[object Array]') {" + t.map((function(e, n) {
            return e + "=" + t[0] + "[" + n + "];"
        })).reverse().join("") + "}if (" + t.filter((function(e) {
            return "alpha" !== e
        })).map((function(e) {
            return "isNaN(" + e + ")"
        })).join("||") + '){throw new Error("[' + e + ']: Invalid color: ("+' + t.join('+","+') + '+")");}' + t.map((function(e) {
            return "hue" === e ? "this._hue=hue<0?hue-Math.floor(hue):hue%1" : "alpha" === e ? "this._alpha=(isNaN(alpha)||alpha>1)?1:(alpha<0?0:alpha);" : "this._" + e + "=" + e + "<0?0:(" + e + ">1?1:" + e + ")"
        })).join(";") + ";"),
        u[e].propertyNames = t;
        var r = u[e].prototype;
        for (var o in ["valueOf", "hex", "hexa", "css", "cssa"].forEach((function(t) {
            r[t] = r[t] || ("RGB" === e ? r.hex : new Function("return this.rgb()." + t + "();"))
        })), r.isColor = !0, r.equals = function(n, r) {
            i(r) && (r = 1e-10),
            n = n[e.toLowerCase()]();
            for (var a = 0; a < t.length; a += 1)
                if (Math.abs(this["_" + t[a]] - n["_" + t[a]]) > r)
                    return !1;
            return !0
        }, r.toJSON = new Function("return ['" + e + "', " + t.map((function(e) {
            return "this._" + e
        }), this).join(", ") + "];"), n)
            if (n.hasOwnProperty(o)) {
                var l = o.match(/^from(.*)$/);
                l ? u[l[1].toUpperCase()].prototype[e.toLowerCase()] = n[o] : r[o] = n[o]
            }
        function s(e, t) {
            var n = {};
            for (var r in n[t.toLowerCase()] = new Function("return this.rgb()." + t.toLowerCase() + "();"), u[t].propertyNames.forEach((function(e, r) {
                n[e] = n["black" === e ? "k" : e[0]] = new Function("value", "isDelta", "return this." + t.toLowerCase() + "()." + e + "(value, isDelta);")
            })), n)
                n.hasOwnProperty(r) && void 0 === u[e].prototype[r] && (u[e].prototype[r] = n[r])
        }
        r[e.toLowerCase()] = function() {
            return this
        },
        r.toString = new Function('return "[one.color.' + e + ':"+' + t.map((function(e, n) {
            return '" ' + t[n] + '="+this._' + e
        })).join("+") + '+"]";'),
        t.forEach((function(e, n) {
            r[e] = r["black" === e ? "k" : e[0]] = new Function("value", "isDelta", "if (typeof value === 'undefined') {return this._" + e + ";}if (isDelta) {return new this.constructor(" + t.map((function(t, n) {
                return "this._" + t + (e === t ? "+value" : "")
            })).join(", ") + ");}return new this.constructor(" + t.map((function(t, n) {
                return e === t ? "value" : "this._" + t
            })).join(", ") + ");")
        })),
        a.forEach((function(t) {
            s(e, t),
            s(t, e)
        })),
        a.push(e)
    }
    function d() {
        var e = this.rgb(),
            t = .3 * e._red + .59 * e._green + .11 * e._blue;
        return new u.RGB(t, t, t, this._alpha)
    }
    u.installMethod = function(e, t) {
        a.forEach((function(n) {
            u[n].prototype[e] = t
        }))
    },
    f("RGB", ["red", "green", "blue", "alpha"], {
        hex: function() {
            var e = (65536 * Math.round(255 * this._red) + 256 * Math.round(255 * this._green) + Math.round(255 * this._blue)).toString(16);
            return "#" + "00000".substr(0, 6 - e.length) + e
        },
        hexa: function() {
            var e = Math.round(255 * this._alpha).toString(16);
            return "#" + "00".substr(0, 2 - e.length) + e + this.hex().substr(1, 6)
        },
        css: function() {
            return "rgb(" + Math.round(255 * this._red) + "," + Math.round(255 * this._green) + "," + Math.round(255 * this._blue) + ")"
        },
        cssa: function() {
            return "rgba(" + Math.round(255 * this._red) + "," + Math.round(255 * this._green) + "," + Math.round(255 * this._blue) + "," + this._alpha + ")"
        }
    }),
    i(n(29)) ? e.exports = u : void 0 === (r = function() {
        return u
    }.call(t, n, t, e)) || (e.exports = r),
    "undefined" != typeof jQuery && i(jQuery.color) && (jQuery.color = u),
    o = {
        aliceblue: "f0f8ff",
        antiquewhite: "faebd7",
        aqua: "0ff",
        aquamarine: "7fffd4",
        azure: "f0ffff",
        beige: "f5f5dc",
        bisque: "ffe4c4",
        black: "000",
        blanchedalmond: "ffebcd",
        blue: "00f",
        blueviolet: "8a2be2",
        brown: "a52a2a",
        burlywood: "deb887",
        cadetblue: "5f9ea0",
        chartreuse: "7fff00",
        chocolate: "d2691e",
        coral: "ff7f50",
        cornflowerblue: "6495ed",
        cornsilk: "fff8dc",
        crimson: "dc143c",
        cyan: "0ff",
        darkblue: "00008b",
        darkcyan: "008b8b",
        darkgoldenrod: "b8860b",
        darkgray: "a9a9a9",
        darkgrey: "a9a9a9",
        darkgreen: "006400",
        darkkhaki: "bdb76b",
        darkmagenta: "8b008b",
        darkolivegreen: "556b2f",
        darkorange: "ff8c00",
        darkorchid: "9932cc",
        darkred: "8b0000",
        darksalmon: "e9967a",
        darkseagreen: "8fbc8f",
        darkslateblue: "483d8b",
        darkslategray: "2f4f4f",
        darkslategrey: "2f4f4f",
        darkturquoise: "00ced1",
        darkviolet: "9400d3",
        deeppink: "ff1493",
        deepskyblue: "00bfff",
        dimgray: "696969",
        dimgrey: "696969",
        dodgerblue: "1e90ff",
        firebrick: "b22222",
        floralwhite: "fffaf0",
        forestgreen: "228b22",
        fuchsia: "f0f",
        gainsboro: "dcdcdc",
        ghostwhite: "f8f8ff",
        gold: "ffd700",
        goldenrod: "daa520",
        gray: "808080",
        grey: "808080",
        green: "008000",
        greenyellow: "adff2f",
        honeydew: "f0fff0",
        hotpink: "ff69b4",
        indianred: "cd5c5c",
        indigo: "4b0082",
        ivory: "fffff0",
        khaki: "f0e68c",
        lavender: "e6e6fa",
        lavenderblush: "fff0f5",
        lawngreen: "7cfc00",
        lemonchiffon: "fffacd",
        lightblue: "add8e6",
        lightcoral: "f08080",
        lightcyan: "e0ffff",
        lightgoldenrodyellow: "fafad2",
        lightgray: "d3d3d3",
        lightgrey: "d3d3d3",
        lightgreen: "90ee90",
        lightpink: "ffb6c1",
        lightsalmon: "ffa07a",
        lightseagreen: "20b2aa",
        lightskyblue: "87cefa",
        lightslategray: "789",
        lightslategrey: "789",
        lightsteelblue: "b0c4de",
        lightyellow: "ffffe0",
        lime: "0f0",
        limegreen: "32cd32",
        linen: "faf0e6",
        magenta: "f0f",
        maroon: "800000",
        mediumaquamarine: "66cdaa",
        mediumblue: "0000cd",
        mediumorchid: "ba55d3",
        mediumpurple: "9370d8",
        mediumseagreen: "3cb371",
        mediumslateblue: "7b68ee",
        mediumspringgreen: "00fa9a",
        mediumturquoise: "48d1cc",
        mediumvioletred: "c71585",
        midnightblue: "191970",
        mintcream: "f5fffa",
        mistyrose: "ffe4e1",
        moccasin: "ffe4b5",
        navajowhite: "ffdead",
        navy: "000080",
        oldlace: "fdf5e6",
        olive: "808000",
        olivedrab: "6b8e23",
        orange: "ffa500",
        orangered: "ff4500",
        orchid: "da70d6",
        palegoldenrod: "eee8aa",
        palegreen: "98fb98",
        paleturquoise: "afeeee",
        palevioletred: "d87093",
        papayawhip: "ffefd5",
        peachpuff: "ffdab9",
        peru: "cd853f",
        pink: "ffc0cb",
        plum: "dda0dd",
        powderblue: "b0e0e6",
        purple: "800080",
        rebeccapurple: "639",
        red: "f00",
        rosybrown: "bc8f8f",
        royalblue: "4169e1",
        saddlebrown: "8b4513",
        salmon: "fa8072",
        sandybrown: "f4a460",
        seagreen: "2e8b57",
        seashell: "fff5ee",
        sienna: "a0522d",
        silver: "c0c0c0",
        skyblue: "87ceeb",
        slateblue: "6a5acd",
        slategray: "708090",
        slategrey: "708090",
        snow: "fffafa",
        springgreen: "00ff7f",
        steelblue: "4682b4",
        tan: "d2b48c",
        teal: "008080",
        thistle: "d8bfd8",
        tomato: "ff6347",
        turquoise: "40e0d0",
        violet: "ee82ee",
        wheat: "f5deb3",
        white: "fff",
        whitesmoke: "f5f5f5",
        yellow: "ff0",
        yellowgreen: "9acd32"
    },
    f("XYZ", ["x", "y", "z", "alpha"], {
        fromRgb: function() {
            var e = function(e) {
                    return e > .04045 ? Math.pow((e + .055) / 1.055, 2.4) : e / 12.92
                },
                t = e(this._red),
                n = e(this._green),
                r = e(this._blue);
            return new u.XYZ(.4124564 * t + .3575761 * n + .1804375 * r, .2126729 * t + .7151522 * n + .072175 * r, .0193339 * t + .119192 * n + .9503041 * r, this._alpha)
        },
        rgb: function() {
            var e = this._x,
                t = this._y,
                n = this._z,
                r = function(e) {
                    return e > .0031308 ? 1.055 * Math.pow(e, 1 / 2.4) - .055 : 12.92 * e
                };
            return new u.RGB(r(3.2404542 * e + -1.5371385 * t + -.4985314 * n), r(-.969266 * e + 1.8760108 * t + .041556 * n), r(.0556434 * e + -.2040259 * t + 1.0572252 * n), this._alpha)
        },
        lab: function() {
            var e = function(e) {
                    return e > .008856 ? Math.pow(e, 1 / 3) : 7.787037 * e + 4 / 29
                },
                t = e(this._x / 95.047),
                n = e(this._y / 100),
                r = e(this._z / 108.883);
            return new u.LAB(116 * n - 16, 500 * (t - n), 200 * (n - r), this._alpha)
        }
    }),
    f("LAB", ["l", "a", "b", "alpha"], {
        fromRgb: function() {
            return this.xyz().lab()
        },
        rgb: function() {
            return this.xyz().rgb()
        },
        xyz: function() {
            var e = function(e) {
                    var t = Math.pow(e, 3);
                    return t > .008856 ? t : (e - 16 / 116) / 7.87
                },
                t = (this._l + 16) / 116,
                n = this._a / 500 + t,
                r = t - this._b / 200;
            return new u.XYZ(95.047 * e(n), 100 * e(t), 108.883 * e(r), this._alpha)
        }
    }),
    f("HSV", ["hue", "saturation", "value", "alpha"], {
        rgb: function() {
            var e,
                t,
                n,
                r = this._hue,
                a = this._saturation,
                o = this._value,
                i = Math.min(5, Math.floor(6 * r)),
                l = 6 * r - i,
                s = o * (1 - a),
                c = o * (1 - l * a),
                f = o * (1 - (1 - l) * a);
            switch (i) {
            case 0:
                e = o,
                t = f,
                n = s;
                break;
            case 1:
                e = c,
                t = o,
                n = s;
                break;
            case 2:
                e = s,
                t = o,
                n = f;
                break;
            case 3:
                e = s,
                t = c,
                n = o;
                break;
            case 4:
                e = f,
                t = s,
                n = o;
                break;
            case 5:
                e = o,
                t = s,
                n = c
            }
            return new u.RGB(e, t, n, this._alpha)
        },
        hsl: function() {
            var e,
                t = (2 - this._saturation) * this._value,
                n = this._saturation * this._value,
                r = t <= 1 ? t : 2 - t;
            return e = r < 1e-9 ? 0 : n / r, new u.HSL(this._hue, e, t / 2, this._alpha)
        },
        fromRgb: function() {
            var e,
                t = this._red,
                n = this._green,
                r = this._blue,
                a = Math.max(t, n, r),
                o = a - Math.min(t, n, r),
                i = 0 === a ? 0 : o / a,
                l = a;
            if (0 === o)
                e = 0;
            else
                switch (a) {
                case t:
                    e = (n - r) / o / 6 + (n < r ? 1 : 0);
                    break;
                case n:
                    e = (r - t) / o / 6 + 1 / 3;
                    break;
                case r:
                    e = (t - n) / o / 6 + 2 / 3
                }
            return new u.HSV(e, i, l, this._alpha)
        }
    }),
    f("HSL", ["hue", "saturation", "lightness", "alpha"], {
        hsv: function() {
            var e,
                t = 2 * this._lightness,
                n = this._saturation * (t <= 1 ? t : 2 - t);
            return e = t + n < 1e-9 ? 0 : 2 * n / (t + n), new u.HSV(this._hue, e, (t + n) / 2, this._alpha)
        },
        rgb: function() {
            return this.hsv().rgb()
        },
        fromRgb: function() {
            return this.hsv().hsl()
        }
    }),
    f("CMYK", ["cyan", "magenta", "yellow", "black", "alpha"], {
        rgb: function() {
            return new u.RGB(1 - this._cyan * (1 - this._black) - this._black, 1 - this._magenta * (1 - this._black) - this._black, 1 - this._yellow * (1 - this._black) - this._black, this._alpha)
        },
        fromRgb: function() {
            var e = this._red,
                t = this._green,
                n = this._blue,
                r = 1 - e,
                a = 1 - t,
                o = 1 - n,
                i = 1;
            return e || t || n ? (r = (r - (i = Math.min(r, Math.min(a, o)))) / (1 - i), a = (a - i) / (1 - i), o = (o - i) / (1 - i)) : i = 1, new u.CMYK(r, a, o, i, this._alpha)
        }
    }),
    u.installMethod("clearer", (function(e) {
        return this.alpha(isNaN(e) ? -.1 : -e, !0)
    })),
    u.installMethod("darken", (function(e) {
        return this.lightness(isNaN(e) ? -.1 : -e, !0)
    })),
    u.installMethod("desaturate", (function(e) {
        return this.saturation(isNaN(e) ? -.1 : -e, !0)
    })),
    u.installMethod("greyscale", d),
    u.installMethod("grayscale", d),
    u.installMethod("lighten", (function(e) {
        return this.lightness(isNaN(e) ? .1 : e, !0)
    })),
    u.installMethod("mix", (function(e, t) {
        e = u(e).rgb();
        var n = 2 * (t = 1 - (isNaN(t) ? .5 : t)) - 1,
            r = this._alpha - e._alpha,
            a = ((n * r == -1 ? n : (n + r) / (1 + n * r)) + 1) / 2,
            o = 1 - a,
            i = this.rgb();
        return new u.RGB(i._red * a + e._red * o, i._green * a + e._green * o, i._blue * a + e._blue * o, i._alpha * t + e._alpha * (1 - t))
    })),
    u.installMethod("negate", (function() {
        var e = this.rgb();
        return new u.RGB(1 - e._red, 1 - e._green, 1 - e._blue, this._alpha)
    })),
    u.installMethod("opaquer", (function(e) {
        return this.alpha(isNaN(e) ? .1 : e, !0)
    })),
    u.installMethod("rotate", (function(e) {
        return this.hue((e || 0) / 360, !0)
    })),
    u.installMethod("saturate", (function(e) {
        return this.saturation(isNaN(e) ? .1 : e, !0)
    })),
    u.installMethod("toAlpha", (function(e) {
        var t = this.rgb(),
            n = u(e).rgb(),
            r = new u.RGB(0, 0, 0, t._alpha),
            a = ["_red", "_green", "_blue"];
        return a.forEach((function(e) {
            t[e] < 1e-10 ? r[e] = t[e] : t[e] > n[e] ? r[e] = (t[e] - n[e]) / (1 - n[e]) : t[e] > n[e] ? r[e] = (n[e] - t[e]) / n[e] : r[e] = 0
        })), r._red > r._green ? r._red > r._blue ? t._alpha = r._red : t._alpha = r._blue : r._green > r._blue ? t._alpha = r._green : t._alpha = r._blue, t._alpha < 1e-10 || (a.forEach((function(e) {
            t[e] = (t[e] - n[e]) / t._alpha + n[e]
        })), t._alpha *= r._alpha), t
    }))
}, function(e, t) {
    (function(t) {
        e.exports = t
    }).call(this, {})
}, function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n(8),
        a = n.n(r),
        o = n(0),
        i = n.n(o);
    var l = !1;
    if ("undefined" != typeof window) {
        var s = {
            get passive() {
                l = !0
            }
        };
        window.addEventListener("testPassive", null, s),
        window.removeEventListener("testPassive", null, s)
    }
    var c = "undefined" != typeof window && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || "MacIntel" === window.navigator.platform && window.navigator.maxTouchPoints > 1),
        u = [],
        f = !1,
        d = -1,
        h = void 0,
        g = void 0,
        p = function(e) {
            return u.some((function(t) {
                return !(!t.options.allowTouchMove || !t.options.allowTouchMove(e))
            }))
        },
        b = function(e) {
            var t = e || window.event;
            return !!p(t.target) || (t.touches.length > 1 || (t.preventDefault && t.preventDefault(), !1))
        },
        m = function() {
            void 0 !== g && (document.body.style.paddingRight = g, g = void 0),
            void 0 !== h && (document.body.style.overflow = h, h = void 0)
        },
        v = function(e, t) {
            if (e) {
                if (!u.some((function(t) {
                    return t.targetElement === e
                }))) {
                    var n = {
                        targetElement: e,
                        options: t || {}
                    };
                    u = [].concat(function(e) {
                        if (Array.isArray(e)) {
                            for (var t = 0, n = Array(e.length); t < e.length; t++)
                                n[t] = e[t];
                            return n
                        }
                        return Array.from(e)
                    }(u), [n]),
                    c ? (e.ontouchstart = function(e) {
                        1 === e.targetTouches.length && (d = e.targetTouches[0].clientY)
                    }, e.ontouchmove = function(t) {
                        1 === t.targetTouches.length && function(e, t) {
                            var n = e.targetTouches[0].clientY - d;
                            !p(e.target) && (t && 0 === t.scrollTop && n > 0 || function(e) {
                                return !!e && e.scrollHeight - e.scrollTop <= e.clientHeight
                            }(t) && n < 0 ? b(e) : e.stopPropagation())
                        }(t, e)
                    }, f || (document.addEventListener("touchmove", b, l ? {
                        passive: !1
                    } : void 0), f = !0)) : function(e) {
                        if (void 0 === g) {
                            var t = !!e && !0 === e.reserveScrollBarGap,
                                n = window.innerWidth - document.documentElement.clientWidth;
                            t && n > 0 && (g = document.body.style.paddingRight, document.body.style.paddingRight = n + "px")
                        }
                        void 0 === h && (h = document.body.style.overflow, document.body.style.overflow = "hidden")
                    }(t)
                }
            } else
                console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.")
        };
    const y = {
        isOpen: !1,
        toggle: e => {
            let t = document.querySelector(".js-menu-mobile");
            var n;
            y.isOpen ? (document.body.classList.remove("menu-is-open"), (n = t) ? (u = u.filter((function(e) {
                return e.targetElement !== n
            })), c ? (n.ontouchstart = null, n.ontouchmove = null, f && 0 === u.length && (document.removeEventListener("touchmove", b, l ? {
                passive: !1
            } : void 0), f = !1)) : u.length || m()) : console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.")) : (document.body.classList.add("menu-is-open"), v(t)),
            y.isOpen = !y.isOpen
        },
        init: () => {
            document.addEventListener("click", e => {
                e.target && e.target.classList.contains("js-menu-button") && y.toggle(e)
            })
        }
    };
    var w = y;
    function _() {
        var e = document.querySelector(".js-header"),
            t = document.querySelector(".js-content"),
            n = document.querySelector(".js-social"),
            r = document.querySelector(".js-footer"),
            a = t.offsetTop + e.offsetHeight,
            o = document.body.offsetHeight - r.offsetHeight - 720;
        if (document.querySelector(".color-nav"))
            var l = document.querySelector(".color-nav");
        if (document.querySelector(".js-sidebar"))
            document.querySelector(".js-sidebar");
        window.addEventListener("scroll", (function() {
            var e = window.pageYOffset;
            e >= a && e < o ? (i.a.add(n, "fixed"), l && (i.a.add(l, "fixed"), i.a.add(t, "fixed"))) : (i.a.remove(n, "fixed"), l && (i.a.remove(l, "fixed"), i.a.remove(t, "fixed")))
        }), !1)
    }
    function x(e) {
        var t = e.target,
            n = t.getAttribute("data-hex"),
            r = t.getAttribute("data-rgb"),
            a = t.getAttribute("data-hsl"),
            o = {
                hex: n,
                rgb: r,
                hsl: a
            };
        S(".js-swatch", n),
        S(".js-hex", n),
        S(".js-rgb", r),
        S(".js-hsl", a),
        localStorage.setItem("currentColor", JSON.stringify(o)),
        i.a.has(t.parentNode.parentNode, "js-palette") || k(o)
    }
    function k(e) {
        var t = JSON.parse(localStorage.getItem("currentColors")),
            n = JSON.parse(localStorage.getItem("lockedColors"));
        if (null === t && null === n)
            M(e);
        else {
            if (t && n)
                var r = t.concat(n);
            else if (t)
                r = t;
            else
                r = n;
            for (var a = !1, o = r.length - 1; o >= 0; o--)
                if (-1 !== e.hex.indexOf(r[o].hex)) {
                    a = !0;
                    break
                }
            a || M(e)
        }
    }
    function M(e) {
        var t = JSON.parse(localStorage.getItem("currentColors")),
            n = JSON.parse(localStorage.getItem("lockedColors"));
        if ((null === t || t.length < 1) && (null === n || n.length < 6)) {
            var r = [];
            r.push(e),
            localStorage.setItem("currentColors", JSON.stringify(r)),
            C(e, "prepend", "unlocked")
        } else if (t && (null === n || n.length < 1))
            t.length < 6 ? (t.unshift(e), localStorage.setItem("currentColors", JSON.stringify(t)), C(e, "prepend", "unlocked")) : (t.pop(), t.unshift(e), localStorage.setItem("currentColors", JSON.stringify(t)), O(".js-palette"), O(".js-mobile-palette"), C(e, "prepend", "unlocked"));
        else {
            var a = t.length + n.length;
            a < 6 && t.length > 0 ? (t.unshift(e), localStorage.setItem("currentColors", JSON.stringify(t)), C(e, "prepend", "unlocked")) : a >= 6 && t.length > 0 && (t.pop(), t.unshift(e), localStorage.setItem("currentColors", JSON.stringify(t)), O(".js-palette"), O(".js-mobile-palette"), C(e, "prepend", "unlocked"))
        }
        L()
    }
    function N(e, t) {
        for (var n = e.target.getAttribute("data-hex"), r = JSON.parse(localStorage.getItem("currentColors")), a = JSON.parse(localStorage.getItem("lockedColors")), o = "locked" === t ? a : r, i = "locked" === t ? "lockedColors" : "currentColors", l = "locked" === t ? r : a, s = "locked" === t ? "currentColors" : "lockedColors", c = l.length - 1; c >= 0; c--)
            if (-1 !== n.indexOf(l[c].hex)) {
                if (null === o) {
                    var u = [];
                    u.unshift(l[c]),
                    localStorage.setItem(i, JSON.stringify(u))
                } else
                    o.length <= 5 && (o.unshift(l[c]), localStorage.setItem(i, JSON.stringify(o)));
                l.splice(c, 1)
            }
        localStorage.setItem(s, JSON.stringify(l));
        var f = document.querySelectorAll('span[data-hex="' + n + '"]');
        for (c = 0; c < f.length; c++)
            E(f[c], t, !0);
        var d = document.querySelectorAll('div[data-update="' + n + '"]');
        for (c = 0; c < d.length; c++)
            E(d[c], t, !1);
        E(document.querySelector('span[data-update="' + n + '"]'), t, !1)
    }
    function E(e, t, n) {
        var r = "locked" === t ? "unlocked" : "locked";
        n ? (e.removeEventListener("click", (function(e) {
            N(e, t)
        }), !1), e.addEventListener("click", (function(e) {
            N(e, r)
        }), !1), i.a.remove(e.parentNode, r), i.a.add(e.parentNode, t)) : (i.a.remove(e, r), i.a.add(e, t))
    }
    function S(e, t) {
        for (var n = document.querySelectorAll(e), r = 0; r < n.length; r++)
            ".js-swatch" == e ? n[r].style.backgroundColor = t : n[r].innerHTML = t
    }
    function C(e, t, n) {
        for (var r = document.querySelectorAll(".js-palette"), a = 0; a < r.length; a++) {
            var o = document.createElement("div"),
                i = document.createElement("div"),
                l = document.createElement("span"),
                s = document.createElement("h4");
            i.style.backgroundColor = e.hex,
            i.setAttribute("class", "js-palette-color"),
            i.setAttribute("data-hex", e.hex),
            i.setAttribute("data-rgb", e.rgb),
            i.setAttribute("data-hsl", e.hsl),
            i.addEventListener("click", (function(e) {
                x(e)
            }), !1),
            l.setAttribute("data-hex", e.hex),
            s.innerHTML = e.hex,
            "locked" === n ? (o.setAttribute("class", "locked"), l.setAttribute("class", "color-lock js-lock"), l.addEventListener("click", (function(e) {
                N(e, "unlocked")
            }), !1)) : (o.setAttribute("class", "unlocked"), l.setAttribute("class", "color-lock js-lock"), l.addEventListener("click", (function(e) {
                N(e, "locked")
            }), !1)),
            o.appendChild(i),
            o.appendChild(l),
            o.appendChild(s),
            "prepend" == t ? r[a].insertBefore(o, r[a].firstChild) : r[a].appendChild(o, r[a].firstChild)
        }
        var c = document.querySelectorAll(".js-mobile-palette");
        for (a = 0; a < c.length; a++) {
            (i = document.createElement("div")).style.backgroundColor = e.hex,
            i.setAttribute("data-update", e.hex),
            i.setAttribute("class", n),
            "prepend" == t ? c[a].insertBefore(i, c[a].firstChild) : c[a].appendChild(i, c[a].firstChild)
        }
        if (document.querySelector(".js-color-codes")) {
            var u = document.querySelector(".js-color-codes"),
                f = A(null === localStorage.getItem("currentCode") ? "css" : localStorage.getItem("currentCode"), e, n);
            "prepend" == t ? u.insertBefore(f, u.firstChild) : u.appendChild(f, u.firstChild)
        }
    }
    function O(e) {
        for (var t = document.querySelectorAll(e), n = 0; n < t.length; n++) {
            for (var r = t[n].childNodes, a = r.length - 1; a >= 0; a--)
                if (i.a.has(r[a], "unlocked")) {
                    var o = r[a];
                    break
                }
            t[n].removeChild(o)
        }
    }
    function L() {
        for (var e = document.querySelector(".js-color-codes"); e.firstChild;)
            e.removeChild(e.firstChild);
        var t = null === localStorage.getItem("currentCode") ? "css" : localStorage.getItem("currentCode"),
            n = JSON.parse(localStorage.getItem("currentColors")),
            r = JSON.parse(localStorage.getItem("lockedColors"));
        if (n && r)
            var a = n.concat(r);
        else if (n)
            a = n;
        else if (r)
            a = r;
        for (var o = 0; o < a.length; o++) {
            var i = A(t, o + 1, a[o]);
            e.appendChild(i)
        }
    }
    function A(e, t, n) {
        var r = document.createElement("span");
        return "hex" === e ? r.innerHTML = n.hex : "rgb" === e ? r.innerHTML = "rgb(" + n.rgb + ")" : "html" === e ? r.innerHTML = 'style="color:' + n.hex + ';"' : "css" === e ? r.innerHTML = ".color-" + t + " { color:" + n.hex + "; }" : "scss" === e && (r.innerHTML = "$color-" + t + ": " + n.hex + ";"), r
    }
    function T(e, t) {
        if ("palette" === e) {
            var n = JSON.parse(localStorage.getItem("currentColors")),
                r = JSON.parse(localStorage.getItem("lockedColors"));
            if (n && r)
                var a = n.concat(r);
            else if (n)
                a = n;
            else if (r)
                a = r;
            else
                a = null;
            R(a, e, t)
        } else if ("harmony" === e) {
            var o = JSON.parse(localStorage.getItem("harmonyColors"));
            if (o)
                a = o;
            else
                a = null;
            R(a, e, t)
        } else
            "wechat" === e && function(e, t) {
                for (; modal.firstChild;)
                    modal.removeChild(modal.firstChild);
                var n = document.createElement("div");
                n.setAttribute("class", "modal-content");
                var r = document.createElement("h5");
                r.innerHTML = "分享",
                n.appendChild(r);
                var a = document.createElement("span");
                a.setAttribute("id", "modal-close"),
                a.innerHTML = "&times;",
                n.appendChild(a);
                var o = document.createElement("h2");
                o.innerHTML = "微信分享我们的链接",
                n.appendChild(o);
                var i = document.createElement("h2");
                i.setAttribute("class", "no-caps"),
                i.innerHTML = "https://htmlcolorcodes.com/zh/",
                n.appendChild(i),
                modal.appendChild(n)
            }()
    }
    function R(e, t, n) {
        var r = null === localStorage.getItem("currentHarmony") ? "analogous" : localStorage.getItem("currentHarmony");
        if ("modal" === n)
            var a = document.getElementById("modal");
        else if ("page" === n)
            a = document.getElementById("export");
        for (; a.firstChild;)
            a.removeChild(a.firstChild);
        var o = document.createElement("div");
        o.setAttribute("class", "modal-content");
        var i = document.createElement("h5");
        i.innerHTML = "Export",
        o.appendChild(i);
        var l = document.createElement("h2");
        if ("palette" === t ? l.innerHTML = "Current palette" : r.match(/^(shades|tints|tones)$/) ? l.innerHTML = "Color " + r : l.innerHTML = r + " colors", o.appendChild(l), "modal" === n) {
            var s = document.createElement("span");
            s.setAttribute("id", "modal-close"),
            s.innerHTML = "&times;",
            o.appendChild(s)
        }
        var c = document.createElement("div");
        c.setAttribute("class", "modal-swatches row");
        for (var u = 0; u < e.length; u++) {
            var f = document.createElement("div"),
                d = document.createElement("div");
            f.style.width = 100 / e.length + "%",
            d.style.backgroundColor = e[u].hex,
            f.appendChild(d),
            c.appendChild(f)
        }
        o.appendChild(c);
        for (var h = ["hex", "rgb", "html", "css", "scss"], g = 0; g < h.length; g++) {
            var p = document.createElement("div"),
                b = document.createElement("div"),
                m = document.createElement("h5");
            p.setAttribute("class", "modal-code"),
            m.innerHTML = h[g],
            b.appendChild(m);
            for (var v = 0; v < e.length; v++) {
                var y = document.createElement("span");
                "hex" === h[g] ? y.innerHTML = e[v].hex : "rgb" === h[g] ? y.innerHTML = "rgb(" + e[v].rgb + ")" : "html" === h[g] ? y.innerHTML = 'style="color:' + e[v].hex + ';"' : "css" === h[g] ? y.innerHTML = ".color-" + (v + 1) + " {color: " + e[v].hex + ";}" : "scss" === h[g] && (y.innerHTML = "$color-" + (v + 1) + ": " + e[v].hex + ";"),
                b.appendChild(y)
            }
            p.appendChild(b),
            o.appendChild(p)
        }
        a.appendChild(o)
    }
    var j = n(3),
        I = n.n(j),
        B = n(9),
        H = n.n(B),
        P = n(10);
    function q() {
        var e = JSON.parse(localStorage.getItem("currentColor")),
            t = null === e ? "#FF5733" : e.hex;
        H.a.rgb("js-picker", t, ["currentColor", "hex", ["fields", {
            space: "RGB",
            limit: 255
        }], ["fields", {
            space: "HSL",
            limit: [360, 100, 100]
        }], ["fields", {
            space: "CMYK",
            limit: 100
        }]]).on("change", (function(e) {
            var t = 255 * e.red(),
                n = 255 * e.green(),
                r = 255 * e.blue(),
                a = t.toFixed(0) + ", " + n.toFixed(0) + ", " + r.toFixed(0),
                o = 360 * e.hue(),
                i = 100 * e.saturation(),
                l = 100 * e.lightness(),
                s = o.toFixed(0) + ", " + i.toFixed(0) + "%, " + l.toFixed(0) + "%";
            S(".js-swatch", e.css()),
            S(".js-hex", e.hex()),
            S(".js-rgb", a),
            S(".js-hsl", s);
            var c = {
                hex: e.hex(),
                rgb: a,
                hsl: s
            };
            localStorage.setItem("currentColor", JSON.stringify(c)),
            localStorage.setItem("pickerColor", JSON.stringify(c)),
            document.getElementById("harmonies") && z(o, e.hex())
        })).update(),
        document.querySelector(".currentColor").addEventListener("click", (function() {
            var e = localStorage.getItem("pickerColor");
            k(JSON.parse(e))
        }), !1)
    }
    function z(e, t) {
        !function(e, t) {
            for (var n = document.querySelectorAll(".js-harmony"), r = 0; r < n.length; r++)
                n[r].addEventListener("click", (function(n) {
                    var r = n.target.id;
                    localStorage.setItem("currentHarmony", r),
                    z(e, t)
                }), !1)
        }(e, t);
        var n = localStorage.getItem("currentHarmony"),
            r = null === n ? "analogous" : n,
            a = document.getElementById(r).innerHTML,
            o = new P.Harmonizer;
        if ("shades" === r)
            var i = o.shades(t, 8);
        else if ("tints" === r)
            i = o.tints(t, 8);
        else if ("tones" === r)
            i = o.tones(t, 8);
        else
            i = o.harmonize(t, r);
        !function(e) {
            var t = document.getElementById("harmony"),
                n = document.createElement("span");
            n.setAttribute("class", "triangle gray"),
            t.innerHTML = e,
            t.appendChild(n)
        }(a);
        for (var l = document.getElementById("harmonies"), s = []; l.firstChild;)
            l.removeChild(l.firstChild);
        for (var c = 0; c < i.length; c++) {
            var u = I()(i[c]),
                f = 255 * u.red(),
                d = 255 * u.green(),
                h = 255 * u.blue(),
                g = f.toFixed(0) + ", " + d.toFixed(0) + ", " + h.toFixed(0),
                p = 360 * u.hue(),
                b = 100 * u.saturation(),
                m = 100 * u.lightness(),
                v = p.toFixed(0) + ", " + b.toFixed(0) + "%, " + m.toFixed(0) + "%",
                y = {
                    hex: u.hex(),
                    rgb: g,
                    hsl: v
                };
            s.push(y);
            var w = document.createElement("div");
            w.setAttribute("class", "color-card");
            var x = document.createElement("div");
            x.setAttribute("class", "color-swatch");
            var k = document.createElement("div");
            k.style.backgroundColor = u.hex(),
            k.setAttribute("class", "js-color"),
            k.setAttribute("data-hex", u.hex()),
            k.setAttribute("data-rgb", g),
            k.setAttribute("data-hsl", v),
            x.appendChild(k),
            w.appendChild(x);
            var M = document.createElement("div");
            M.setAttribute("class", "color-data"),
            (t = document.createElement("h4")).setAttribute("class", "selectable"),
            t.innerHTML = u.hex(),
            M.appendChild(t);
            var N = document.createElement("h4");
            N.setAttribute("class", "selectable"),
            N.innerHTML = g,
            M.appendChild(N),
            w.appendChild(M),
            l.appendChild(w)
        }
        localStorage.setItem("harmonyColors", JSON.stringify(s)),
        D(".js-color"),
        _()
    }
    function D(e) {
        for (var t = document.querySelectorAll(e), n = 0; n < t.length; n++)
            t[n].removeEventListener("click", (function(e) {
                x(e)
            }), !1),
            t[n].addEventListener("click", (function(e) {
                x(e)
            }), !1)
    }
    function F() {
        var e = document.querySelector(".twod").offsetWidth,
            t = document.querySelector(".twod");
        document.querySelector(".oned").style.height = .86 * e + "px",
        t.style.height = .86 * e + "px"
    }
    var G = n(2),
        $ = n.n(G);
    const Y = {
        delegate: e => {
            if (e.get("r") && e.get("g") && e.get("b")) {
                let t = $()(`rgb(${e.get("r")},${e.get("g")},${e.get("b")})`).hex();
                Y.convert(t),
                Y.updateInputs(e)
            } else if (e.get("hex")) {
                let t = "#" + e.get("hex");
                Y.convert(t),
                Y.updateInputs(e)
            }
        },
        convert: e => {
            const t = {
                hex: {
                    css: e.toUpperCase(),
                    value: e.replace("#", "").toUpperCase()
                },
                rgb: {
                    css: Y.hexToRGBToCSS(e),
                    value: Y.hexToRGB(e)
                },
                hsl: {
                    css: Y.hexToHSLToCSS(e),
                    value: Y.hexToHSL(e)
                },
                hsv: {
                    value: Y.hexToHSV(e)
                },
                cmyk: {
                    value: Y.hexToCMYK(e)
                }
            };
            Y.display(t)
        },
        display: e => {
            let t = document.querySelectorAll(".js-converter-output");
            for (const n in e)
                for (const r in e[n])
                    t.forEach(t => {
                        t.dataset.code == n && t.dataset.type == r && (t.innerHTML = e[n][r])
                    })
        },
        hexToRGB: e => {
            let t = $()(e).rgb();
            return `${t[0]}, ${t[1]}, ${t[2]}`
        },
        hexToRGBToCSS: e => `rgb(${Y.hexToRGB(e)})`,
        hexToHSL: e => {
            let t = $()(e).hsl(!0),
                n = Math.round(t[0]),
                r = Math.round(100 * t[1]),
                a = Math.round(100 * t[2]);
            return isNaN(n) && (n = 0), `${n}°, ${r}%, ${a}%`
        },
        hexToHSLToCSS: e => `hsl(${Y.hexToHSL(e).replace("°", "")})`,
        hexToHSV: e => {
            let t = $()(e).hsv(!0),
                n = Math.round(t[0]),
                r = Math.round(100 * t[1]),
                a = Math.round(100 * t[2]);
            return isNaN(n) && (n = 0), `${n}°, ${r}%, ${a}%`
        },
        hexToCMYK: e => {
            let t = $()(e).cmyk(!0);
            return `${Math.round(100 * t[0])}, ${Math.round(100 * t[1])}, ${Math.round(100 * t[2])}, ${Math.round(100 * t[3])}`
        },
        resetInputs: () => {
            document.querySelectorAll(".js-converter-input").forEach(e => {
                e.value = ""
            })
        },
        cleanInput: e => {
            let t = e.target.value.replace(/\W/g, "");
            e.target.value = t
        },
        updateInputs: e => {
            for (var t of e.entries()) {
                document.getElementsByName(t[0])[0].value = t[1]
            }
        },
        updateSubmitState: () => {
            let e = document.querySelectorAll(".js-converter-input"),
                t = !0,
                n = document.querySelector(".js-converter-submit");
            e.forEach(e => {
                if ("" == e.value)
                    return t = !1, !1
            }),
            t ? n.classList.remove("is-disabled") : n.classList.add("is-disabled")
        },
        init: () => {
            if (document.querySelector(".js-converter")) {
                let e = new URLSearchParams(window.location.search.substring(1));
                e && (Y.delegate(e), Y.updateSubmitState())
            }
            document.addEventListener("click", e => {
                e.target && e.target.classList.contains("js-converter-reset") && (Y.resetInputs(), Y.updateSubmitState())
            }),
            document.addEventListener("input", e => {
                e.target && e.target.classList.contains("js-converter-input") && (Y.cleanInput(e), Y.updateSubmitState())
            })
        }
    };
    var U = Y;
    function J(e) {
        var t = self.pageYOffset ? self.pageYOffset : document.documentElement && document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop ? document.body.scrollTop : 0,
            n = function(e) {
                for (var t = document.getElementById(e), n = t.offsetTop, r = t; r.offsetParent && r.offsetParent != document.body;)
                    n += (r = r.offsetParent).offsetTop;
                return n
            }(e) - 100;
        console.log(t),
        console.log(n);
        var r = n > t ? n - t : t - n;
        if (r < 100)
            scrollTo(0, n);
        else {
            var a = Math.round(r / 100);
            a >= 20 && (a = 20);
            var o = Math.round(r / 25),
                i = n > t ? t + o : t - o,
                l = 0;
            if (!(n > t)) {
                for (s = t; s > n; s -= o)
                    setTimeout("window.scrollTo(0, " + i + ")", l * a),
                    (i -= o) < n && (i = n),
                    l++;
                return !1
            }
            for (var s = t; s < n; s += o)
                setTimeout("window.scrollTo(0, " + i + ")", l * a),
                (i += o) > n && (i = n),
                l++
        }
    }
    w.init(),
    U.init(),
    window.onresize = function() {
        document.getElementById("home") || document.getElementById("picker") ? (F(), _()) : _()
    },
    a.a.initHighlightingOnLoad(),
    _(),
    function() {
        for (var e = document.querySelectorAll(".js-export"), t = document.getElementById("modal"), n = !1, r = 0; r < e.length; r++)
            e[r].addEventListener("click", (function(e) {
                var t = e.target.getAttribute("data-export");
                console.log(e.target),
                T(t, "modal"),
                i.a.add(document.body, "modal-active"),
                n = !0
            }));
        t.addEventListener("click", (function(e) {
            e.stopPropagation();
            var r = e.target,
                a = document.getElementById("modal-close");
            (n && r === t || r === a) && (i.a.remove(document.body, "modal-active"), n = !1)
        }))
    }(),
    function() {
        var e = JSON.parse(localStorage.getItem("currentColors")),
            t = JSON.parse(localStorage.getItem("lockedColors"));
        if (null === e && null === t) {
            var n = [{
                hex: "#DAF7A6",
                rgb: "218, 247, 166",
                hsl: "81, 33%, 81%"
            }, {
                hex: "#FFC300",
                rgb: "255, 195, 0",
                hsl: "46, 100%, 50%"
            }, {
                hex: "#FF5733",
                rgb: "255, 87, 51",
                hsl: "11, 80%, 60%"
            }, {
                hex: "#C70039",
                rgb: "199, 0, 57",
                hsl: "343, 100%, 39%"
            }, {
                hex: "#900C3F",
                rgb: "144, 12, 63",
                hsl: "337, 92%, 31%"
            }, {
                hex: "#581845",
                rgb: "88, 24, 69",
                hsl: "318, 73%, 22%"
            }];
            localStorage.setItem("currentColors", JSON.stringify(n)),
            e = n
        }
        if (e)
            for (var r = 0; r < e.length; r++)
                C(e[r], "append", "unlocked");
        if (t)
            for (r = 0; r < t.length; r++)
                C(t[r], "append", "locked");
        let a = JSON.parse(localStorage.getItem("currentColor"));
        a && (S(".js-swatch", a.hex), S(".js-hex", a.hex), S(".js-rgb", a.rgb), S(".js-hsl", a.hsl))
    }(),
    function() {
        for (var e = document.querySelectorAll(".js-mobile-palette"), t = 0; t < e.length; t++)
            e[t].addEventListener("click", (function(e) {
                i.a.toggle(e.target.parentNode.parentNode, "open")
            }), !1)
    }(),
    document.getElementById("home") ? (q(), F(), D(".js-color")) : document.getElementById("picker") ? (q(), F()) : D(".js-color"),
    document.getElementById("export") && T(location.search.split("=")[1], "page"),
    function() {
        for (var e = document.querySelectorAll(".scrollable"), t = 0; t < e.length; t++)
            e[t].addEventListener("click", (function(e) {
                J(e.target.getAttribute("data-scroll"))
            }), !1)
    }();
    for (var K = document.querySelectorAll(".selectable"), W = 0; W < K.length; W++)
        K[W].addEventListener("click", (function(e) {
            var t,
                n,
                r,
                a,
                o = e.target;
            r = document,
            a = o,
            r.body.createTextRange ? ((t = r.body.createTextRange()).moveToElementText(a), t.select()) : window.getSelection && (n = window.getSelection(), (t = r.createRange()).selectNodeContents(a), n.removeAllRanges(), n.addRange(t))
        }), !1);
    var X = document.querySelectorAll(".js-button");
    for (W = 0; W < X.length; W++)
        X[W].addEventListener("click", (function(e) {
            var t = e.target;
            console.log(t),
            Z = i.a.has(t, "js-button-leader") ? t.parentNode : t.parentNode.parentNode.parentNode,
            i.a.toggle(Z, "open")
        }), !1);
    var Z = document.querySelectorAll(".js-list");
    for (W = 0; W < Z.length; W++)
        Z[W].addEventListener("mouseleave", (function(e) {
            i.a.has(this.parentNode, "open") && i.a.remove(this.parentNode, "open")
        }), !1);
    var V = document.querySelectorAll(".popup");
    for (W = 0; W < V.length; W++)
        V[W].addEventListener("click", (function(e) {
            if (e.preventDefault(), console.log(e.target), e.target.id)
                var t = e.target;
            else if (i.a.has(e.target, "fill"))
                t = e.target.parentNode.parentNode;
            else
                t = e.target.parentNode;
            var n = t.id,
                r = (window.innerWidth - 840) / 2,
                a = (window.innerHeight - 480) / 2,
                o = t.href,
                l = "status=1,width=840,height=480,top=" + a + ",left=" + r;
            return window.open(o, n, l), !1
        }), !1)
}]);