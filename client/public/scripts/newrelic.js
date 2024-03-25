window.NREUM || (NREUM = {});
NREUM.init = {
  distributed_tracing: { enabled: true },
  privacy: { cookies_enabled: true },
  ajax: { deny_list: ["bam.nr-data.net"] },
};

NREUM.loader_config = {
  accountID: "3886024",
  trustKey: "3886024",
  agentID: "594404476",
  licenseKey: "NRJS-524e7afba4c0885d23d",
  applicationID: "594404476",
};
NREUM.info = {
  beacon: "bam.nr-data.net",
  errorBeacon: "bam.nr-data.net",
  licenseKey: "NRJS-524e7afba4c0885d23d",
  applicationID: "594404476",
  sa: 1,
};
(() => {
  var e,
    t,
    r = {
      9071: (e, t, r) => {
        "use strict";
        r.d(t, { I: () => n });
        var n = 0,
          i = navigator.userAgent.match(/Firefox[\/\s](\d+\.\d+)/);
        i && (n = +i[1]);
      },
      6562: (e, t, r) => {
        "use strict";
        r.d(t, {
          P_: () => p,
          Mt: () => v,
          C5: () => f,
          DL: () => y,
          OP: () => R,
          lF: () => L,
          Yu: () => E,
          Dg: () => g,
          CX: () => d,
          GE: () => w,
          sU: () => k,
        });
        var n = {};
        r.r(n), r.d(n, { agent: () => T, match: () => S, version: () => A });
        var i = r(6797),
          o = r(909),
          a = r(8610);
        class s {
          constructor(e, t) {
            try {
              if (!e || "object" != typeof e)
                return (0, a.Z)(
                  "New setting a Configurable requires an object as input"
                );
              if (!t || "object" != typeof t)
                return (0, a.Z)(
                  "Setting a Configurable requires a model to set its initial properties"
                );
              Object.assign(this, t),
                Object.entries(e).forEach((e) => {
                  let [t, r] = e;
                  const n = (0, o.q)(t);
                  n.length &&
                    r &&
                    "object" == typeof r &&
                    n.forEach((e) => {
                      e in r &&
                        ((0, a.Z)(
                          '"'
                            .concat(
                              e,
                              '" is a protected attribute and can not be changed in feature '
                            )
                            .concat(t, ".  It will have no effect.")
                        ),
                        delete r[e]);
                    }),
                    (this[t] = r);
                });
            } catch (e) {
              (0, a.Z)("An error occured while setting a Configurable", e);
            }
          }
        }
        const c = {
            beacon: i.ce.beacon,
            errorBeacon: i.ce.errorBeacon,
            licenseKey: void 0,
            applicationID: void 0,
            sa: void 0,
            queueTime: void 0,
            applicationTime: void 0,
            ttGuid: void 0,
            user: void 0,
            account: void 0,
            product: void 0,
            extra: void 0,
            jsAttributes: {},
            userAttributes: void 0,
            atts: void 0,
            transactionName: void 0,
            tNamePlain: void 0,
          },
          u = {};
        function f(e) {
          if (!e)
            throw new Error("All info objects require an agent identifier!");
          if (!u[e]) throw new Error("Info for ".concat(e, " was never set"));
          return u[e];
        }
        function d(e, t) {
          if (!e)
            throw new Error("All info objects require an agent identifier!");
          (u[e] = new s(t, c)), (0, i.Qy)(e, u[e], "info");
        }
        const l = {
            allow_bfcache: !0,
            privacy: { cookies_enabled: !0 },
            ajax: { deny_list: void 0, enabled: !0, harvestTimeSeconds: 10 },
            distributed_tracing: {
              enabled: void 0,
              exclude_newrelic_header: void 0,
              cors_use_newrelic_header: void 0,
              cors_use_tracecontext_headers: void 0,
              allowed_origins: void 0,
            },
            ssl: void 0,
            obfuscate: void 0,
            jserrors: { enabled: !0, harvestTimeSeconds: 10 },
            metrics: { enabled: !0 },
            page_action: { enabled: !0, harvestTimeSeconds: 30 },
            page_view_event: { enabled: !0 },
            page_view_timing: {
              enabled: !0,
              harvestTimeSeconds: 30,
              long_task: !1,
            },
            session_trace: { enabled: !0, harvestTimeSeconds: 10 },
            spa: { enabled: !0, harvestTimeSeconds: 10 },
          },
          h = {};
        function p(e) {
          if (!e)
            throw new Error(
              "All configuration objects require an agent identifier!"
            );
          if (!h[e])
            throw new Error("Configuration for ".concat(e, " was never set"));
          return h[e];
        }
        function g(e, t) {
          if (!e)
            throw new Error(
              "All configuration objects require an agent identifier!"
            );
          (h[e] = new s(t, l)), (0, i.Qy)(e, h[e], "config");
        }
        function v(e, t) {
          if (!e)
            throw new Error(
              "All configuration objects require an agent identifier!"
            );
          var r = p(e);
          if (r) {
            for (var n = t.split("."), i = 0; i < n.length - 1; i++)
              if ("object" != typeof (r = r[n[i]])) return;
            r = r[n[n.length - 1]];
          }
          return r;
        }
        const m = {
            accountID: void 0,
            trustKey: void 0,
            agentID: void 0,
            licenseKey: void 0,
            applicationID: void 0,
            xpid: void 0,
          },
          b = {};
        function y(e) {
          if (!e)
            throw new Error(
              "All loader-config objects require an agent identifier!"
            );
          if (!b[e])
            throw new Error("LoaderConfig for ".concat(e, " was never set"));
          return b[e];
        }
        function w(e, t) {
          if (!e)
            throw new Error(
              "All loader-config objects require an agent identifier!"
            );
          (b[e] = new s(t, m)), (0, i.Qy)(e, b[e], "loader_config");
        }
        const E = (0, i.mF)().o;
        var T = null,
          A = null;
        if (navigator.userAgent) {
          var x = navigator.userAgent,
            _ = x.match(/Version\/(\S+)\s+Safari/);
          _ &&
            -1 === x.indexOf("Chrome") &&
            -1 === x.indexOf("Chromium") &&
            ((T = "Safari"), (A = _[1]));
        }
        function S(e, t) {
          if (!T) return !1;
          if (e !== T) return !1;
          if (!t) return !0;
          if (!A) return !1;
          for (var r = A.split("."), n = t.split("."), i = 0; i < n.length; i++)
            if (n[i] !== r[i]) return !1;
          return !0;
        }
        var O = r(5526),
          P = r(2374);
        const j = "NRBA_SESSION_ID";
        function D() {
          if (!P.il) return null;
          try {
            let e;
            return (
              null === (e = window.sessionStorage.getItem(j)) &&
                ((e = (0, O.ky)(16)), window.sessionStorage.setItem(j, e)),
              e
            );
          } catch (e) {
            return null;
          }
        }
        var N = r(8226);
        const C = (e) => ({
            customTransaction: void 0,
            disabled: !1,
            isolatedBacklog: !1,
            loaderType: void 0,
            maxBytes: 3e4,
            offset: Math.floor(
              P._A?.performance?.timeOrigin ||
                P._A?.performance?.timing?.navigationStart ||
                Date.now()
            ),
            onerror: void 0,
            origin: "" + P._A.location,
            ptid: void 0,
            releaseIds: {},
            sessionId: 1 == v(e, "privacy.cookies_enabled") ? D() : null,
            xhrWrappable:
              "function" ==
              typeof P._A.XMLHttpRequest?.prototype?.addEventListener,
            userAgent: n,
            version: N.q,
          }),
          I = {};
        function R(e) {
          if (!e)
            throw new Error("All runtime objects require an agent identifier!");
          if (!I[e])
            throw new Error("Runtime for ".concat(e, " was never set"));
          return I[e];
        }
        function k(e, t) {
          if (!e)
            throw new Error("All runtime objects require an agent identifier!");
          (I[e] = new s(t, C(e))), (0, i.Qy)(e, I[e], "runtime");
        }
        function L(e) {
          return (function (e) {
            try {
              const t = f(e);
              return !!t.licenseKey && !!t.errorBeacon && !!t.applicationID;
            } catch (e) {
              return !1;
            }
          })(e);
        }
      },
      8226: (e, t, r) => {
        "use strict";
        r.d(t, { q: () => n });
        const n = "1228.PROD";
      },
      9557: (e, t, r) => {
        "use strict";
        r.d(t, { w: () => o });
        var n = r(8610);
        const i = { agentIdentifier: "" };
        class o {
          constructor(e) {
            try {
              if ("object" != typeof e)
                return (0, n.Z)("shared context requires an object as input");
              (this.sharedContext = {}),
                Object.assign(this.sharedContext, i),
                Object.entries(e).forEach((e) => {
                  let [t, r] = e;
                  Object.keys(i).includes(t) && (this.sharedContext[t] = r);
                });
            } catch (e) {
              (0, n.Z)("An error occured while setting SharedContext", e);
            }
          }
        }
      },
      4329: (e, t, r) => {
        "use strict";
        r.d(t, { L: () => f, R: () => c });
        var n = r(3752),
          i = r(7022),
          o = r(4045),
          a = r(2325);
        const s = {};
        function c(e, t) {
          const r = { staged: !1, priority: a.p[t] || 0 };
          u(e), s[e].get(t) || s[e].set(t, r);
        }
        function u(e) {
          e && (s[e] || (s[e] = new Map()));
        }
        function f() {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "",
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "feature";
          if ((u(e), !e || !s[e].get(t))) return a(t);
          s[e].get(t).staged = !0;
          const r = Array.from(s[e]);
          function a(t) {
            const r = e ? n.ee.get(e) : n.ee,
              a = o.X.handlers;
            if (r.backlog && a) {
              var s = r.backlog[t],
                c = a[t];
              if (c) {
                for (var u = 0; s && u < s.length; ++u) d(s[u], c);
                (0, i.D)(c, function (e, t) {
                  (0, i.D)(t, function (t, r) {
                    r[0].on(e, r[1]);
                  });
                });
              }
              delete a[t], (r.backlog[t] = null), r.emit("drain-" + t, []);
            }
          }
          r.every((e) => {
            let [t, r] = e;
            return r.staged;
          }) &&
            (r.sort((e, t) => e[1].priority - t[1].priority),
            r.forEach((e) => {
              let [t] = e;
              a(t);
            }));
        }
        function d(e, t) {
          var r = e[1];
          (0, i.D)(t[r], function (t, r) {
            var n = e[0];
            if (r[0] === n) {
              var i = r[1],
                o = e[3],
                a = e[2];
              i.apply(o, a);
            }
          });
        }
      },
      3752: (e, t, r) => {
        "use strict";
        r.d(t, { c: () => d, ee: () => u });
        var n = r(6797),
          i = r(3916),
          o = r(7022),
          a = r(6562),
          s = "nr@context";
        let c = (0, n.fP)();
        var u;
        function f() {}
        function d(e) {
          return (0, i.X)(e, s, l);
        }
        function l() {
          return new f();
        }
        function h() {
          (u.aborted = !0), (u.backlog = {});
        }
        c.ee
          ? (u = c.ee)
          : ((u = (function e(t, r) {
              var n = {},
                c = {},
                d = {},
                p = !1;
              try {
                p = 16 === r.length && (0, a.OP)(r).isolatedBacklog;
              } catch (e) {}
              var g = {
                on: b,
                addEventListener: b,
                removeEventListener: y,
                emit: m,
                get: E,
                listeners: w,
                context: v,
                buffer: T,
                abort: h,
                aborted: !1,
                isBuffering: A,
                debugId: r,
                backlog: p
                  ? {}
                  : t && "object" == typeof t.backlog
                  ? t.backlog
                  : {},
              };
              return g;
              function v(e) {
                return e && e instanceof f ? e : e ? (0, i.X)(e, s, l) : l();
              }
              function m(e, r, n, i, o) {
                if ((!1 !== o && (o = !0), !u.aborted || i)) {
                  t && o && t.emit(e, r, n);
                  for (var a = v(n), s = w(e), f = s.length, d = 0; d < f; d++)
                    s[d].apply(a, r);
                  var l = x()[c[e]];
                  return l && l.push([g, e, r, a]), a;
                }
              }
              function b(e, t) {
                n[e] = w(e).concat(t);
              }
              function y(e, t) {
                var r = n[e];
                if (r)
                  for (var i = 0; i < r.length; i++)
                    r[i] === t && r.splice(i, 1);
              }
              function w(e) {
                return n[e] || [];
              }
              function E(t) {
                return (d[t] = d[t] || e(g, t));
              }
              function T(e, t) {
                var r = x();
                g.aborted ||
                  (0, o.D)(e, function (e, n) {
                    (t = t || "feature"), (c[n] = t), t in r || (r[t] = []);
                  });
              }
              function A(e) {
                return !!x()[c[e]];
              }
              function x() {
                return g.backlog;
              }
            })(void 0, "globalEE")),
            (c.ee = u));
      },
      9252: (e, t, r) => {
        "use strict";
        r.d(t, { E: () => n, p: () => i });
        var n = r(3752).ee.get("handle");
        function i(e, t, r, i, o) {
          o
            ? (o.buffer([e], i), o.emit(e, t, r))
            : (n.buffer([e], i), n.emit(e, t, r));
        }
      },
      4045: (e, t, r) => {
        "use strict";
        r.d(t, { X: () => o });
        var n = r(9252);
        o.on = a;
        var i = (o.handlers = {});
        function o(e, t, r, o) {
          a(o || n.E, i, e, t, r);
        }
        function a(e, t, r, i, o) {
          o || (o = "feature"), e || (e = n.E);
          var a = (t[o] = t[o] || {});
          (a[r] = a[r] || []).push([e, i]);
        }
      },
      8544: (e, t, r) => {
        "use strict";
        r.d(t, { bP: () => s, iz: () => c, m$: () => a });
        var n = r(2374);
        let i = !1,
          o = !1;
        try {
          const e = {
            get passive() {
              return (i = !0), !1;
            },
            get signal() {
              return (o = !0), !1;
            },
          };
          n._A.addEventListener("test", null, e),
            n._A.removeEventListener("test", null, e);
        } catch (e) {}
        function a(e, t) {
          return i || o ? { capture: !!e, passive: i, signal: t } : !!e;
        }
        function s(e, t) {
          let r =
            arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          window.addEventListener(e, t, a(r));
        }
        function c(e, t) {
          let r =
            arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          document.addEventListener(e, t, a(r));
        }
      },
      5526: (e, t, r) => {
        "use strict";
        r.d(t, { Ht: () => a, M: () => o, Rl: () => i, ky: () => s });
        var n = r(2374);
        function i() {
          var e = null,
            t = 0,
            r = n._A?.crypto || n._A?.msCrypto;
          function i() {
            return e ? 15 & e[t++] : (16 * Math.random()) | 0;
          }
          r && r.getRandomValues && (e = r.getRandomValues(new Uint8Array(31)));
          for (
            var o, a = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx", s = "", c = 0;
            c < a.length;
            c++
          )
            s +=
              "x" === (o = a[c])
                ? i().toString(16)
                : "y" === o
                ? (o = (3 & i()) | 8).toString(16)
                : o;
          return s;
        }
        function o() {
          return s(16);
        }
        function a() {
          return s(32);
        }
        function s(e) {
          var t = null,
            r = 0,
            n = self.crypto || self.msCrypto;
          n &&
            n.getRandomValues &&
            Uint8Array &&
            (t = n.getRandomValues(new Uint8Array(31)));
          for (var i = [], o = 0; o < e; o++) i.push(a().toString(16));
          return i.join("");
          function a() {
            return t ? 15 & t[r++] : (16 * Math.random()) | 0;
          }
        }
      },
      2053: (e, t, r) => {
        "use strict";
        r.d(t, { B: () => n, z: () => i });
        const n = new Date().getTime();
        function i() {
          return Math.round(performance.now());
        }
      },
      8283: (e, t, r) => {
        "use strict";
        r.d(t, { B: () => a, L: () => s });
        var n = r(6562),
          i = r(2053),
          o = {};
        function a(e, t, r) {
          void 0 === r && (r = (0, i.z)() + (0, n.OP)(e).offset),
            (o[e] = o[e] || {}),
            (o[e][t] = r);
        }
        function s(e, t, r, n) {
          const i = e.sharedContext.agentIdentifier;
          var a = o[i]?.[r],
            s = o[i]?.[n];
          void 0 !== a &&
            void 0 !== s &&
            e.store("measures", t, { value: s - a });
        }
      },
      2545: (e, t, r) => {
        "use strict";
        r.d(t, { L: () => c });
        var n = r(9071),
          i = r(8544),
          o = r(8305),
          a = r(2374),
          s = r(6998);
        if (a.v6) {
          a._A.cleanupTasks = [];
          const e = a._A.close;
          a._A.close = () => {
            for (let e of a._A.cleanupTasks) e();
            e();
          };
        }
        function c(e, t) {
          if (a.il)
            if (t) (0, s.N)(e, !0), (0, i.bP)("pagehide", e);
            else {
              var r = (0, o.Z)(e);
              !n.I || navigator.sendBeacon
                ? (0, i.bP)("pagehide", r)
                : (0, i.bP)("beforeunload", r),
                (0, i.bP)("unload", r);
            }
          else a.v6 && a._A.cleanupTasks.push(e);
        }
      },
      6368: (e, t, r) => {
        "use strict";
        r.d(t, { e: () => o });
        var n = r(2374),
          i = {};
        function o(e) {
          if (e in i) return i[e];
          if (0 === (e || "").indexOf("data:")) return { protocol: "data" };
          let t;
          var r = n._A?.location,
            o = {};
          if (n.il) (t = document.createElement("a")), (t.href = e);
          else
            try {
              t = new URL(e, r.href);
            } catch (e) {
              return o;
            }
          o.port = t.port;
          var a = t.href.split("://");
          !o.port &&
            a[1] &&
            (o.port = a[1].split("/")[0].split("@").pop().split(":")[1]),
            (o.port && "0" !== o.port) ||
              (o.port = "https" === a[0] ? "443" : "80"),
            (o.hostname = t.hostname || r.hostname),
            (o.pathname = t.pathname),
            (o.protocol = a[0]),
            "/" !== o.pathname.charAt(0) && (o.pathname = "/" + o.pathname);
          var s =
              !t.protocol || ":" === t.protocol || t.protocol === r.protocol,
            c = t.hostname === r.hostname && t.port === r.port;
          return (
            (o.sameOrigin = s && (!t.hostname || c)),
            "/" === o.pathname && (i[e] = o),
            o
          );
        }
      },
      8610: (e, t, r) => {
        "use strict";
        function n(e, t) {
          console &&
            console.warn &&
            "function" == typeof console.warn &&
            (console.warn("New Relic: ".concat(e)), t && console.warn(t));
        }
        r.d(t, { Z: () => n });
      },
      3916: (e, t, r) => {
        "use strict";
        r.d(t, { X: () => i });
        var n = Object.prototype.hasOwnProperty;
        function i(e, t, r) {
          if (n.call(e, t)) return e[t];
          var i = r();
          if (Object.defineProperty && Object.keys)
            try {
              return (
                Object.defineProperty(e, t, {
                  value: i,
                  writable: !0,
                  enumerable: !1,
                }),
                i
              );
            } catch (e) {}
          return (e[t] = i), i;
        }
      },
      2374: (e, t, r) => {
        "use strict";
        r.d(t, { _A: () => o, il: () => n, lW: () => a, v6: () => i });
        const n = Boolean("undefined" != typeof window && window.document),
          i = Boolean(
            "undefined" != typeof WorkerGlobalScope &&
              self.navigator instanceof WorkerNavigator
          );
        let o = (() => {
          if (n) return window;
          if (i) {
            if (
              "undefined" != typeof globalThis &&
              globalThis instanceof WorkerGlobalScope
            )
              return globalThis;
            if (self instanceof WorkerGlobalScope) return self;
          }
          throw new Error(
            'New Relic browser agent shutting down due to error: Unable to locate global scope. This is possibly due to code redefining browser global variables like "self" and "window".'
          );
        })();
        function a() {
          return o;
        }
      },
      7022: (e, t, r) => {
        "use strict";
        r.d(t, { D: () => i });
        var n = Object.prototype.hasOwnProperty;
        function i(e, t) {
          var r = [],
            i = "",
            o = 0;
          for (i in e) n.call(e, i) && ((r[o] = t(i, e[i])), (o += 1));
          return r;
        }
      },
      8305: (e, t, r) => {
        "use strict";
        r.d(t, { Z: () => o });
        var n = r(8683),
          i = r.n(n);
        function o(e) {
          var t,
            r = !1;
          return function () {
            return r ? t : ((r = !0), (t = e.apply(this, i()(arguments))));
          };
        }
      },
      2438: (e, t, r) => {
        "use strict";
        r.d(t, { P: () => o });
        var n = r(3752);
        const i = () => {
          const e = new WeakSet();
          return (t, r) => {
            if ("object" == typeof r && null !== r) {
              if (e.has(r)) return;
              e.add(r);
            }
            return r;
          };
        };
        function o(e) {
          try {
            return JSON.stringify(e, i());
          } catch (e) {
            try {
              n.ee.emit("internal-error", [e]);
            } catch (e) {}
          }
        }
      },
      2650: (e, t, r) => {
        "use strict";
        r.d(t, { K: () => a, b: () => o });
        var n = r(8544);
        function i() {
          return (
            "undefined" == typeof document || "complete" === document.readyState
          );
        }
        function o(e, t) {
          if (i()) return e();
          (0, n.bP)("load", e, t);
        }
        function a(e) {
          if (i()) return e();
          (0, n.iz)("DOMContentLoaded", e);
        }
      },
      6797: (e, t, r) => {
        "use strict";
        r.d(t, {
          EZ: () => u,
          Qy: () => c,
          ce: () => o,
          fP: () => a,
          gG: () => f,
          mF: () => s,
        });
        var n = r(2053),
          i = r(2374);
        const o = { beacon: "bam.nr-data.net", errorBeacon: "bam.nr-data.net" };
        function a() {
          return (
            i._A.NREUM || (i._A.NREUM = {}),
            void 0 === i._A.newrelic && (i._A.newrelic = i._A.NREUM),
            i._A.NREUM
          );
        }
        function s() {
          let e = a();
          return (
            e.o ||
              (e.o = {
                ST: i._A.setTimeout,
                SI: i._A.setImmediate,
                CT: i._A.clearTimeout,
                XHR: i._A.XMLHttpRequest,
                REQ: i._A.Request,
                EV: i._A.Event,
                PR: i._A.Promise,
                MO: i._A.MutationObserver,
                FETCH: i._A.fetch,
              }),
            e
          );
        }
        function c(e, t, r) {
          let i = a();
          const o = i.initializedAgents || {},
            s = o[e] || {};
          return (
            Object.keys(s).length ||
              (s.initializedAt = { ms: (0, n.z)(), date: new Date() }),
            (i.initializedAgents = { ...o, [e]: { ...s, [r]: t } }),
            i
          );
        }
        function u(e, t) {
          a()[e] = t;
        }
        function f() {
          return (
            (function () {
              let e = a();
              const t = e.info || {};
              e.info = { beacon: o.beacon, errorBeacon: o.errorBeacon, ...t };
            })(),
            (function () {
              let e = a();
              const t = e.init || {};
              e.init = { ...t };
            })(),
            s(),
            (function () {
              let e = a();
              const t = e.loader_config || {};
              e.loader_config = { ...t };
            })(),
            a()
          );
        }
      },
      6998: (e, t, r) => {
        "use strict";
        r.d(t, { N: () => i, e: () => o });
        var n = r(8544);
        function i(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return void (0, n.iz)("visibilitychange", function () {
            if (t) {
              if ("hidden" != document.visibilityState) return;
              e();
            }
            e(document.visibilityState);
          });
        }
        function o() {
          return "hidden" === document.visibilityState ? -1 : 1 / 0;
        }
      },
      6408: (e, t, r) => {
        "use strict";
        r.d(t, { W: () => i });
        var n = r(2374);
        function i() {
          return "function" == typeof n._A?.PerformanceObserver;
        }
      },
      8675: (e, t, r) => {
        "use strict";
        r.d(t, { t: () => n });
        const n = r(2325).D.ajax;
      },
      8322: (e, t, r) => {
        "use strict";
        r.d(t, { A: () => i, t: () => n });
        const n = r(2325).D.jserrors,
          i = "nr@seenError";
      },
      6034: (e, t, r) => {
        "use strict";
        r.d(t, {
          gF: () => o,
          mY: () => i,
          t9: () => n,
          vz: () => s,
          xS: () => a,
        });
        const n = r(2325).D.metrics,
          i = "sm",
          o = "cm",
          a = "storeSupportabilityMetrics",
          s = "storeEventMetrics";
      },
      6486: (e, t, r) => {
        "use strict";
        r.d(t, { t: () => n });
        const n = r(2325).D.pageAction;
      },
      2484: (e, t, r) => {
        "use strict";
        r.d(t, { t: () => n });
        const n = r(2325).D.pageViewEvent;
      },
      6382: (e, t, r) => {
        "use strict";
        r.d(t, { t: () => n });
        const n = r(2325).D.pageViewTiming;
      },
      2628: (e, t, r) => {
        "use strict";
        r.r(t),
          r.d(t, {
            ADD_EVENT_LISTENER: () => g,
            BST_RESOURCE: () => a,
            BST_TIMER: () => l,
            END: () => u,
            FEATURE_NAME: () => i,
            FN_END: () => d,
            FN_START: () => f,
            ORIG_EVENT: () => p,
            PUSH_STATE: () => h,
            RESOURCE: () => s,
            RESOURCE_TIMING_BUFFER_FULL: () => o,
            START: () => c,
          });
        var n = r(6562);
        const i = r(2325).D.sessionTrace,
          o = "resourcetimingbufferfull",
          a = "bstResource",
          s = "resource",
          c = "-start",
          u = "-end",
          f = "fn" + c,
          d = "fn" + u,
          l = "bstTimer",
          h = "pushState",
          p = n.Yu.EV,
          g = "addEventListener";
      },
      755: (e, t, r) => {
        "use strict";
        r.r(t),
          r.d(t, {
            BODY: () => T,
            CB_END: () => A,
            CB_START: () => u,
            END: () => E,
            FEATURE_NAME: () => i,
            FETCH: () => _,
            FETCH_BODY: () => m,
            FETCH_DONE: () => v,
            FETCH_START: () => g,
            FN_END: () => c,
            FN_START: () => s,
            INTERACTION: () => l,
            INTERACTION_API: () => f,
            INTERACTION_EVENTS: () => o,
            JSONP_END: () => b,
            JSONP_NODE: () => p,
            JS_TIME: () => x,
            MAX_TIMER_BUDGET: () => a,
            REMAINING: () => d,
            SPA_NODE: () => h,
            START: () => w,
            originalSetTimeout: () => y,
          });
        var n = r(6562);
        r(2374);
        const i = r(2325).D.spa,
          o = ["click", "submit", "keypress", "keydown", "keyup", "change"],
          a = 999,
          s = "fn-start",
          c = "fn-end",
          u = "cb-start",
          f = "api-ixn-",
          d = "remaining",
          l = "interaction",
          h = "spaNode",
          p = "jsonpNode",
          g = "fetch-start",
          v = "fetch-done",
          m = "fetch-body-",
          b = "jsonp-end",
          y = n.Yu.ST,
          w = "-start",
          E = "-end",
          T = "-body",
          A = "cb" + E,
          x = "jsTime",
          _ = "fetch";
      },
      1509: (e, t, r) => {
        "use strict";
        r.d(t, { W: () => s });
        var n = r(6562),
          i = r(3752),
          o = r(2384),
          a = r(6797);
        class s {
          constructor(e, t, r) {
            (this.agentIdentifier = e),
              (this.aggregator = t),
              (this.ee = i.ee.get(
                e,
                (0, n.OP)(this.agentIdentifier).isolatedBacklog
              )),
              (this.featureName = r),
              (this.blocked = !1),
              this.checkConfiguration();
          }
          checkConfiguration() {
            if (!(0, n.lF)(this.agentIdentifier)) {
              let e = { ...(0, a.gG)().info?.jsAttributes };
              try {
                e = { ...e, ...(0, n.C5)(this.agentIdentifier)?.jsAttributes };
              } catch (e) {}
              (0, o.j)(this.agentIdentifier, {
                ...(0, a.gG)(),
                info: { ...(0, a.gG)().info, jsAttributes: e },
              });
            }
          }
        }
      },
      2384: (e, t, r) => {
        "use strict";
        r.d(t, { j: () => w });
        var n = r(8683),
          i = r.n(n),
          o = r(2325),
          a = r(6562),
          s = r(9252),
          c = r(7022),
          u = r(3752),
          f = r(2053),
          d = r(4329),
          l = r(2650),
          h = r(2374),
          p = r(8610),
          g = r(6034);
        function v(e) {
          [
            "setErrorHandler",
            "finished",
            "addToTrace",
            "inlineHit",
            "addRelease",
            "addPageAction",
            "setCurrentRouteName",
            "setPageViewName",
            "setCustomAttribute",
            "interaction",
            "noticeError",
          ].forEach((t) => {
            e[t] = function () {
              for (
                var r = arguments.length, n = new Array(r), i = 0;
                i < r;
                i++
              )
                n[i] = arguments[i];
              return (function (t) {
                for (
                  var r = arguments.length,
                    n = new Array(r > 1 ? r - 1 : 0),
                    i = 1;
                  i < r;
                  i++
                )
                  n[i - 1] = arguments[i];
                Object.values(e.initializedAgents).forEach((e) => {
                  e.exposed && e.api[t] && e.api[t](...n);
                });
              })(t, ...n);
            };
          });
        }
        var m = r(6797);
        const b = {
          stn: [o.D.sessionTrace],
          err: [o.D.jserrors, o.D.metrics],
          ins: [o.D.pageAction],
          spa: [o.D.spa],
        };
        const y = {};
        function w(e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n = arguments.length > 2 ? arguments[2] : void 0,
            w = arguments.length > 3 ? arguments[3] : void 0,
            {
              init: E,
              info: T,
              loader_config: A,
              runtime: x = { loaderType: n },
              exposed: _ = !0,
            } = t;
          const S = (0, m.gG)();
          let O = {};
          return (
            T || ((E = S.init), (T = S.info), (A = S.loader_config), (O = S)),
            h.v6 && (T.jsAttributes = { ...T.jsAttributes, isWorker: !0 }),
            (0, a.CX)(e, T),
            (0, a.Dg)(e, E || {}),
            (0, a.GE)(e, A || {}),
            (0, a.sU)(e, x),
            (function (e, t, n) {
              n || (0, d.R)(e, "api"), v(t);
              var m = u.ee.get(e),
                b = m.get("tracer"),
                y = "api-",
                w = y + "ixn-";
              function E() {}
              (0, c.D)(
                [
                  "setErrorHandler",
                  "finished",
                  "addToTrace",
                  "inlineHit",
                  "addRelease",
                ],
                function (e, r) {
                  t[r] = A(y, r, !0, "api");
                }
              ),
                (t.addPageAction = A(y, "addPageAction", !0, o.D.pageAction)),
                (t.setCurrentRouteName = A(y, "routeName", !0, o.D.spa)),
                (t.setPageViewName = function (t, r) {
                  if ("string" == typeof t)
                    return (
                      "/" !== t.charAt(0) && (t = "/" + t),
                      ((0, a.OP)(e).customTransaction =
                        (r || "http://custom.transaction") + t),
                      A(y, "setPageViewName", !0, "api")()
                    );
                }),
                (t.setCustomAttribute = function (t, r) {
                  const n = (0, a.C5)(e);
                  return (
                    (0, a.CX)(e, {
                      ...n,
                      jsAttributes: { ...n.jsAttributes, [t]: r },
                    }),
                    A(y, "setCustomAttribute", !0, "api")()
                  );
                }),
                (t.interaction = function () {
                  return new E().get();
                });
              var T = (E.prototype = {
                createTracer: function (e, t) {
                  var r = {},
                    n = this,
                    i = "function" == typeof t;
                  return (
                    (0, s.p)(w + "tracer", [(0, f.z)(), e, r], n, o.D.spa, m),
                    function () {
                      if (
                        (b.emit(
                          (i ? "" : "no-") + "fn-start",
                          [(0, f.z)(), n, i],
                          r
                        ),
                        i)
                      )
                        try {
                          return t.apply(this, arguments);
                        } catch (e) {
                          throw (
                            (b.emit(
                              "fn-err",
                              [
                                arguments,
                                this,
                                "string" == typeof e ? new Error(e) : e,
                              ],
                              r
                            ),
                            e)
                          );
                        } finally {
                          b.emit("fn-end", [(0, f.z)()], r);
                        }
                    }
                  );
                },
              });
              function A(e, t, r, n) {
                return function () {
                  return (
                    (0, s.p)(
                      g.xS,
                      ["API/" + t + "/called"],
                      void 0,
                      o.D.metrics,
                      m
                    ),
                    (0, s.p)(
                      e + t,
                      [(0, f.z)()].concat(i()(arguments)),
                      r ? null : this,
                      n,
                      m
                    ),
                    r ? void 0 : this
                  );
                };
              }
              function x() {
                r.e(439)
                  .then(r.bind(r, 5692))
                  .then((t) => {
                    let { setAPI: r } = t;
                    r(e), (0, d.L)(e, "api");
                  })
                  .catch(() => (0, p.Z)("Downloading runtime APIs failed..."));
              }
              (0, c.D)(
                "actionText,setName,setAttribute,save,ignore,onEnd,getContext,end,get".split(
                  ","
                ),
                function (e, t) {
                  T[t] = A(w, t, void 0, o.D.spa);
                }
              ),
                (t.noticeError = function (e, t) {
                  "string" == typeof e && (e = new Error(e)),
                    (0, s.p)(
                      g.xS,
                      ["API/noticeError/called"],
                      void 0,
                      o.D.metrics,
                      m
                    ),
                    (0, s.p)(
                      "err",
                      [e, (0, f.z)(), !1, t],
                      void 0,
                      o.D.jserrors,
                      m
                    );
                }),
                h.v6 ? x() : (0, l.b)(() => x(), !0);
            })(e, O, w),
            (0, m.Qy)(e, S, "api"),
            (0, m.Qy)(e, _, "exposed"),
            (0, m.EZ)("activatedFeatures", y),
            (0, m.EZ)("setToken", (t) =>
              (function (e, t) {
                var r = u.ee.get(t);
                e &&
                  "object" == typeof e &&
                  ((0, c.D)(e, function (e, t) {
                    if (!t)
                      return (b[e] || []).forEach((t) => {
                        (0, s.p)("block-" + e, [], void 0, t, r);
                      });
                    y[e] ||
                      ((0, s.p)("feat-" + e, [], void 0, b[e], r), (y[e] = !0));
                  }),
                  (0, d.L)(t, o.D.pageViewEvent));
              })(t, e)
            ),
            O
          );
        }
      },
      909: (e, t, r) => {
        "use strict";
        r.d(t, { Z: () => i, q: () => o });
        var n = r(2325);
        function i(e) {
          switch (e) {
            case n.D.ajax:
              return [n.D.jserrors];
            case n.D.sessionTrace:
              return [n.D.ajax, n.D.pageViewEvent];
            case n.D.pageViewTiming:
              return [n.D.pageViewEvent];
            default:
              return [];
          }
        }
        function o(e) {
          return e === n.D.jserrors ? [] : ["auto"];
        }
      },
      2325: (e, t, r) => {
        "use strict";
        r.d(t, { D: () => n, p: () => i });
        const n = {
            ajax: "ajax",
            jserrors: "jserrors",
            metrics: "metrics",
            pageAction: "page_action",
            pageViewEvent: "page_view_event",
            pageViewTiming: "page_view_timing",
            sessionTrace: "session_trace",
            spa: "spa",
          },
          i = {
            [n.pageViewEvent]: 1,
            [n.pageViewTiming]: 2,
            [n.metrics]: 3,
            [n.jserrors]: 4,
            [n.ajax]: 5,
            [n.sessionTrace]: 6,
            [n.pageAction]: 7,
            [n.spa]: 8,
          };
      },
      8683: (e) => {
        e.exports = function (e, t, r) {
          t || (t = 0), void 0 === r && (r = e ? e.length : 0);
          for (var n = -1, i = r - t || 0, o = Array(i < 0 ? 0 : i); ++n < i; )
            o[n] = e[t + n];
          return o;
        };
      },
    },
    n = {};
  function i(e) {
    var t = n[e];
    if (void 0 !== t) return t.exports;
    var o = (n[e] = { exports: {} });
    return r[e](o, o.exports, i), o.exports;
  }
  (i.m = r),
    (i.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return i.d(t, { a: t }), t;
    }),
    (i.d = (e, t) => {
      for (var r in t)
        i.o(t, r) &&
          !i.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (i.f = {}),
    (i.e = (e) =>
      Promise.all(Object.keys(i.f).reduce((t, r) => (i.f[r](e, t), t), []))),
    (i.u = (e) =>
      (({
        78: "page_action-aggregate",
        147: "metrics-aggregate",
        193: "session_trace-aggregate",
        317: "jserrors-aggregate",
        348: "page_view_timing-aggregate",
        439: "async-api",
        729: "lazy-loader",
        786: "page_view_event-aggregate",
        873: "spa-aggregate",
        898: "ajax-aggregate",
      }[e] || e) +
      "." +
      {
        78: "1ef08094",
        147: "56d9a464",
        193: "ada8b15b",
        317: "64f61365",
        348: "ced8c919",
        439: "61caf4d9",
        729: "37550b27",
        786: "46b69e61",
        862: "e74e95d2",
        873: "7222cbb6",
        898: "e6085a9a",
      }[e] +
      "-1228.min.js")),
    (i.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (e = {}),
    (t = "NRBA:"),
    (i.l = (r, n, o, a) => {
      if (e[r]) e[r].push(n);
      else {
        var s, c;
        if (void 0 !== o)
          for (
            var u = document.getElementsByTagName("script"), f = 0;
            f < u.length;
            f++
          ) {
            var d = u[f];
            if (
              d.getAttribute("src") == r ||
              d.getAttribute("data-webpack") == t + o
            ) {
              s = d;
              break;
            }
          }
        s ||
          ((c = !0),
          ((s = document.createElement("script")).charset = "utf-8"),
          (s.timeout = 120),
          i.nc && s.setAttribute("nonce", i.nc),
          s.setAttribute("data-webpack", t + o),
          (s.src = r)),
          (e[r] = [n]);
        var l = (t, n) => {
            (s.onerror = s.onload = null), clearTimeout(h);
            var i = e[r];
            if (
              (delete e[r],
              s.parentNode && s.parentNode.removeChild(s),
              i && i.forEach((e) => e(n)),
              t)
            )
              return t(n);
          },
          h = setTimeout(
            l.bind(null, void 0, { type: "timeout", target: s }),
            12e4
          );
        (s.onerror = l.bind(null, s.onerror)),
          (s.onload = l.bind(null, s.onload)),
          c && document.head.appendChild(s);
      }
    }),
    (i.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (i.p = "https://js-agent.newrelic.com/"),
    (() => {
      var e = { 771: 0, 338: 0 };
      i.f.j = (t, r) => {
        var n = i.o(e, t) ? e[t] : void 0;
        if (0 !== n)
          if (n) r.push(n[2]);
          else {
            var o = new Promise((r, i) => (n = e[t] = [r, i]));
            r.push((n[2] = o));
            var a = i.p + i.u(t),
              s = new Error();
            i.l(
              a,
              (r) => {
                if (i.o(e, t) && (0 !== (n = e[t]) && (e[t] = void 0), n)) {
                  var o = r && ("load" === r.type ? "missing" : r.type),
                    a = r && r.target && r.target.src;
                  (s.message =
                    "Loading chunk " + t + " failed.\n(" + o + ": " + a + ")"),
                    (s.name = "ChunkLoadError"),
                    (s.type = o),
                    (s.request = a),
                    n[1](s);
                }
              },
              "chunk-" + t,
              t
            );
          }
      };
      var t = (t, r) => {
          var n,
            o,
            [a, s, c] = r,
            u = 0;
          if (a.some((t) => 0 !== e[t])) {
            for (n in s) i.o(s, n) && (i.m[n] = s[n]);
            if (c) c(i);
          }
          for (t && t(r); u < a.length; u++)
            (o = a[u]), i.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
        },
        r = (window.webpackChunkNRBA = window.webpackChunkNRBA || []);
      r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
    })();
  var o = {};
  (() => {
    "use strict";
    i.r(o);
    var e = i(2325),
      t = i(6562);
    const r = Object.values(e.D);
    function n(e) {
      const n = {};
      return (
        r.forEach((r) => {
          n[r] = (function (e, r) {
            return !1 !== (0, t.Mt)(r, "".concat(e, ".enabled"));
          })(r, e);
        }),
        n
      );
    }
    var a = i(2384),
      s = i(909),
      c = i(9252),
      u = i(2053),
      f = i(8283),
      d = i(4329),
      l = i(1509),
      h = i(2650),
      p = i(2374),
      g = i(8610);
    class v extends l.W {
      constructor(e, t, r) {
        let n =
          !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
        super(e, t, r),
          (this.hasAggregator = !1),
          (this.auto = n),
          this.abortHandler,
          n && (0, d.R)(e, r);
      }
      importAggregator() {
        if (this.hasAggregator || !this.auto) return;
        this.hasAggregator = !0;
        const e = async () => {
          try {
            const { lazyLoader: e } = await i.e(729).then(i.bind(i, 8110)),
              { Aggregate: t } = await e(this.featureName, "aggregate");
            new t(this.agentIdentifier, this.aggregator);
          } catch (e) {
            (0, g.Z)("Downloading ".concat(this.featureName, " failed...")),
              this.abortHandler?.();
          }
        };
        p.v6 ? e() : (0, h.b)(() => e(), !0);
      }
    }
    var m,
      b,
      y,
      w = i(2484);
    class E extends v {
      constructor(e, r) {
        let n =
          !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        super(e, r, w.t, n),
          (0, f.B)(e, "starttime", (0, t.OP)(e).offset),
          (0, f.B)(e, "firstbyte", u.B),
          (0, h.K)(() => this.measureDomContentLoaded()),
          (0, h.b)(() => this.measureWindowLoaded(), !0),
          this.importAggregator();
      }
      measureWindowLoaded() {
        var r = (0, u.z)();
        (0, f.B)(
          this.agentIdentifier,
          "onload",
          r + (0, t.OP)(this.agentIdentifier).offset
        ),
          (0, c.p)("timing", ["load", r], void 0, e.D.pageViewTiming, this.ee);
      }
      measureDomContentLoaded() {
        (0, f.B)(
          this.agentIdentifier,
          "domContent",
          (0, u.z)() + (0, t.OP)(this.agentIdentifier).offset
        );
      }
    }
    (m = E),
      (b = "featureName"),
      (y = w.t),
      (b = (function (e) {
        var t = (function (e, t) {
          if ("object" != typeof e || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == typeof t ? t : String(t);
      })(b)) in m
        ? Object.defineProperty(m, b, {
            value: y,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (m[b] = y);
    var T = i(9557),
      A = i(7022);
    class x extends T.w {
      constructor(e) {
        super(e), (this.aggregatedData = {});
      }
      store(e, t, r, n, i) {
        var o = this.getBucket(e, t, r, i);
        return (
          (o.metrics = (function (e, t) {
            t || (t = { count: 0 });
            return (
              (t.count += 1),
              (0, A.D)(e, function (e, r) {
                t[e] = _(r, t[e]);
              }),
              t
            );
          })(n, o.metrics)),
          o
        );
      }
      merge(e, t, r, n, i) {
        var o = this.getBucket(e, t, n, i);
        if (o.metrics) {
          var a = o.metrics;
          (a.count += r.count),
            (0, A.D)(r, function (e, t) {
              if ("count" !== e) {
                var n = a[e],
                  i = r[e];
                i && !i.c
                  ? (a[e] = _(i.t, n))
                  : (a[e] = (function (e, t) {
                      if (!t) return e;
                      t.c || (t = S(t.t));
                      return (
                        (t.min = Math.min(e.min, t.min)),
                        (t.max = Math.max(e.max, t.max)),
                        (t.t += e.t),
                        (t.sos += e.sos),
                        (t.c += e.c),
                        t
                      );
                    })(i, a[e]));
              }
            });
        } else o.metrics = r;
      }
      storeMetric(e, t, r, n) {
        var i = this.getBucket(e, t, r);
        return (i.stats = _(n, i.stats)), i;
      }
      getBucket(e, t, r, n) {
        this.aggregatedData[e] || (this.aggregatedData[e] = {});
        var i = this.aggregatedData[e][t];
        return (
          i ||
            ((i = this.aggregatedData[e][t] = { params: r || {} }),
            n && (i.custom = n)),
          i
        );
      }
      get(e, t) {
        return t
          ? this.aggregatedData[e] && this.aggregatedData[e][t]
          : this.aggregatedData[e];
      }
      take(e) {
        for (var t = {}, r = "", n = !1, i = 0; i < e.length; i++)
          (t[(r = e[i])] = O(this.aggregatedData[r])),
            t[r].length && (n = !0),
            delete this.aggregatedData[r];
        return n ? t : null;
      }
    }
    function _(e, t) {
      return null == e
        ? (function (e) {
            e ? e.c++ : (e = { c: 1 });
            return e;
          })(t)
        : t
        ? (t.c || (t = S(t.t)),
          (t.c += 1),
          (t.t += e),
          (t.sos += e * e),
          e > t.max && (t.max = e),
          e < t.min && (t.min = e),
          t)
        : { t: e };
    }
    function S(e) {
      return { t: e, min: e, max: e, sos: e * e, c: 1 };
    }
    function O(e) {
      return "object" != typeof e ? [] : (0, A.D)(e, P);
    }
    function P(e, t) {
      return t;
    }
    var j = i(6797),
      D = i(5526),
      N = i(2438);
    var C,
      I = i(6998),
      R = i(8544),
      k = i(6382),
      L = -1,
      H = function (e) {
        addEventListener(
          "pageshow",
          function (t) {
            t.persisted && ((L = t.timeStamp), e(t));
          },
          !0
        );
      },
      z = function () {
        return (
          window.performance &&
          performance.getEntriesByType &&
          performance.getEntriesByType("navigation")[0]
        );
      },
      M = function () {
        var e = z();
        return (e && e.activationStart) || 0;
      },
      B = function (e, t) {
        var r = z(),
          n = "navigate";
        return (
          L >= 0
            ? (n = "back-forward-cache")
            : r &&
              (n =
                document.prerendering || M() > 0
                  ? "prerender"
                  : document.wasDiscarded
                  ? "restore"
                  : r.type.replace(/_/g, "-")),
          {
            name: e,
            value: void 0 === t ? -1 : t,
            rating: "good",
            delta: 0,
            entries: [],
            id: "v3-"
              .concat(Date.now(), "-")
              .concat(Math.floor(8999999999999 * Math.random()) + 1e12),
            navigationType: n,
          }
        );
      },
      F = function (e, t, r) {
        try {
          if (PerformanceObserver.supportedEntryTypes.includes(e)) {
            var n = new PerformanceObserver(function (e) {
              Promise.resolve().then(function () {
                t(e.getEntries());
              });
            });
            return (
              n.observe(Object.assign({ type: e, buffered: !0 }, r || {})), n
            );
          }
        } catch (e) {}
      },
      U = function (e, t, r, n) {
        var i, o;
        return function (a) {
          t.value >= 0 &&
            (a || n) &&
            ((o = t.value - (i || 0)) || void 0 === i) &&
            ((i = t.value),
            (t.delta = o),
            (t.rating = (function (e, t) {
              return e > t[1]
                ? "poor"
                : e > t[0]
                ? "needs-improvement"
                : "good";
            })(t.value, r)),
            e(t));
        };
      },
      V = function (e) {
        var t = function (t) {
          ("pagehide" !== t.type && "hidden" !== document.visibilityState) ||
            e(t);
        };
        addEventListener("visibilitychange", t, !0),
          addEventListener("pagehide", t, !0);
      },
      W = function (e) {
        document.prerendering
          ? addEventListener(
              "prerenderingchange",
              function () {
                return e();
              },
              !0
            )
          : e();
      },
      q = (new Date(), 0),
      G = 1 / 0,
      X = 0,
      $ = function (e) {
        e.forEach(function (e) {
          e.interactionId &&
            ((G = Math.min(G, e.interactionId)),
            (X = Math.max(X, e.interactionId)),
            (q = X ? (X - G) / 7 + 1 : 0));
        });
      },
      Z = function () {
        return C ? q : performance.interactionCount || 0;
      },
      Y = function () {
        "interactionCount" in performance ||
          C ||
          (C = F("event", $, {
            type: "event",
            buffered: !0,
            durationThreshold: 0,
          }));
      },
      Q = [200, 500],
      K = 0,
      J = function () {
        return Z() - K;
      },
      ee = [],
      te = {},
      re = function (e) {
        var t = ee[ee.length - 1],
          r = te[e.interactionId];
        if (r || ee.length < 10 || e.duration > t.latency) {
          if (r)
            r.entries.push(e), (r.latency = Math.max(r.latency, e.duration));
          else {
            var n = { id: e.interactionId, latency: e.duration, entries: [e] };
            (te[n.id] = n), ee.push(n);
          }
          ee.sort(function (e, t) {
            return t.latency - e.latency;
          }),
            ee.splice(10).forEach(function (e) {
              delete te[e.id];
            });
        }
      },
      ne = i(2545);
    class ie extends v {
      constructor(r, n) {
        var i;
        let o =
          !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        if ((super(r, n, k.t, o), (i = this), p.il)) {
          if (
            ((this.pageHiddenTime = (0, I.e)()),
            this.performanceObserver,
            this.lcpPerformanceObserver,
            this.clsPerformanceObserver,
            (this.fiRecorded = !1),
            "PerformanceObserver" in window &&
              "function" == typeof window.PerformanceObserver)
          ) {
            this.performanceObserver = new PerformanceObserver(function () {
              return i.perfObserver(...arguments);
            });
            try {
              this.performanceObserver.observe({ entryTypes: ["paint"] });
            } catch (e) {}
            this.lcpPerformanceObserver = new PerformanceObserver(function () {
              return i.lcpObserver(...arguments);
            });
            try {
              this.lcpPerformanceObserver.observe({
                entryTypes: ["largest-contentful-paint"],
              });
            } catch (e) {}
            this.clsPerformanceObserver = new PerformanceObserver(function () {
              return i.clsObserver(...arguments);
            });
            try {
              this.clsPerformanceObserver.observe({
                type: "layout-shift",
                buffered: !0,
              });
            } catch (e) {}
          }
          this.fiRecorded = !1;
          [
            "click",
            "keydown",
            "mousedown",
            "pointerdown",
            "touchstart",
          ].forEach((e) => {
            (0, R.iz)(e, function () {
              return i.captureInteraction(...arguments);
            });
          }),
            (function (e, t) {
              (t = t || {}),
                W(function () {
                  Y();
                  var r,
                    n = B("INP"),
                    i = function (e) {
                      e.forEach(function (e) {
                        e.interactionId && re(e),
                          "first-input" === e.entryType &&
                            !ee.some(function (t) {
                              return t.entries.some(function (t) {
                                return (
                                  e.duration === t.duration &&
                                  e.startTime === t.startTime
                                );
                              });
                            }) &&
                            re(e);
                      });
                      var t,
                        i =
                          ((t = Math.min(ee.length - 1, Math.floor(J() / 50))),
                          ee[t]);
                      i &&
                        i.latency !== n.value &&
                        ((n.value = i.latency), (n.entries = i.entries), r());
                    },
                    o = F("event", i, {
                      durationThreshold: t.durationThreshold || 40,
                    });
                  (r = U(e, n, Q, t.reportAllChanges)),
                    o &&
                      (o.observe({ type: "first-input", buffered: !0 }),
                      V(function () {
                        i(o.takeRecords()),
                          n.value < 0 &&
                            J() > 0 &&
                            ((n.value = 0), (n.entries = [])),
                          r(!0);
                      }),
                      H(function () {
                        (ee = []),
                          (K = Z()),
                          (n = B("INP")),
                          (r = U(e, n, Q, t.reportAllChanges));
                      }));
                });
            })((t) => {
              let { name: r, value: n, id: i } = t;
              (0, c.p)(
                "timing",
                [r.toLowerCase(), n, { metricId: i }],
                void 0,
                e.D.pageViewTiming,
                this.ee
              );
            }),
            !0 ===
              (0, t.Mt)(this.agentIdentifier, "page_view_timing.long_task") &&
              ((e) => {
                const t = (t) => {
                  t.forEach((t) => {
                    const r = {
                      name: "LT",
                      value: t.duration,
                      info: {
                        ltFrame: t.name,
                        ltStart: t.startTime,
                        ltCtr: t.attribution[0].containerType,
                      },
                    };
                    "window" !== r.info.ltCtr &&
                      Object.assign(r.info, {
                        ltCtrSrc: t.attribution[0].containerSrc,
                        ltCtrId: t.attribution[0].containerId,
                        ltCtrName: t.attribution[0].containerName,
                      }),
                      e(r);
                  });
                };
                let r;
                try {
                  PerformanceObserver.supportedEntryTypes.includes(
                    "longtask"
                  ) &&
                    ((r = new PerformanceObserver((e) => {
                      Promise.resolve().then(() => {
                        t(e.getEntries());
                      });
                    })),
                    r.observe({ type: "longtask", buffered: !0 }));
                } catch (e) {}
                r &&
                  (0, ne.L)(() => {
                    t(r.takeRecords());
                  }, !0);
              })((t) => {
                let { name: r, value: n, info: i } = t;
                (0, c.p)(
                  "timing",
                  [r.toLowerCase(), n, i],
                  void 0,
                  e.D.pageViewTiming,
                  this.ee
                );
              }),
            (0, I.N)(() => {
              (this.pageHiddenTime = (0, u.z)()),
                (0, c.p)(
                  "docHidden",
                  [this.pageHiddenTime],
                  void 0,
                  e.D.pageViewTiming,
                  this.ee
                );
            }, !0),
            (0, R.bP)("pagehide", () =>
              (0, c.p)(
                "winPagehide",
                [(0, u.z)()],
                void 0,
                e.D.pageViewTiming,
                this.ee
              )
            ),
            this.importAggregator();
        }
      }
      perfObserver(t, r) {
        t.getEntries().forEach((t) => {
          "first-paint" === t.name
            ? (0, c.p)(
                "timing",
                ["fp", Math.floor(t.startTime)],
                void 0,
                e.D.pageViewTiming,
                this.ee
              )
            : "first-contentful-paint" === t.name &&
              (0, c.p)(
                "timing",
                ["fcp", Math.floor(t.startTime)],
                void 0,
                e.D.pageViewTiming,
                this.ee
              );
        });
      }
      lcpObserver(t, r) {
        var n = t.getEntries();
        if (n.length > 0) {
          var i = n[n.length - 1];
          if (this.pageHiddenTime < i.startTime) return;
          var o = [i],
            a = this.addConnectionAttributes({});
          a && o.push(a),
            (0, c.p)("lcp", o, void 0, e.D.pageViewTiming, this.ee);
        }
      }
      clsObserver(t) {
        t.getEntries().forEach((t) => {
          t.hadRecentInput ||
            (0, c.p)("cls", [t], void 0, e.D.pageViewTiming, this.ee);
        });
      }
      addConnectionAttributes(e) {
        var t =
          navigator.connection ||
          navigator.mozConnection ||
          navigator.webkitConnection;
        if (t)
          return (
            t.type && (e["net-type"] = t.type),
            t.effectiveType && (e["net-etype"] = t.effectiveType),
            t.rtt && (e["net-rtt"] = t.rtt),
            t.downlink && (e["net-dlink"] = t.downlink),
            e
          );
      }
      captureInteraction(r) {
        if (r instanceof t.Yu.EV && !this.fiRecorded) {
          var n = Math.round(r.timeStamp),
            i = { type: r.type };
          this.addConnectionAttributes(i);
          const o = (0, t.OP)(this.agentIdentifier).offset;
          n <= (0, u.z)()
            ? (i.fid = (0, u.z)() - n)
            : n > o && n <= Date.now()
            ? ((n -= o), (i.fid = (0, u.z)() - n))
            : (n = (0, u.z)()),
            (this.fiRecorded = !0),
            (0, c.p)(
              "timing",
              ["fi", n, i],
              void 0,
              e.D.pageViewTiming,
              this.ee
            );
        }
      }
    }
    !(function (e, t, r) {
      (t = (function (e) {
        var t = (function (e, t) {
          if ("object" != typeof e || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == typeof t ? t : String(t);
      })(t)) in e
        ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = r);
    })(ie, "featureName", k.t);
    const oe = {
      dedicated: Boolean(p._A?.Worker),
      shared: Boolean(p._A?.SharedWorker),
      service: Boolean(p._A?.navigator?.serviceWorker),
    };
    let ae, se, ce;
    var ue = i(6034);
    class fe extends v {
      constructor(t, r) {
        let n =
          !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        super(t, r, ue.t9, n),
          (function (e) {
            if (!ae) {
              if (oe.dedicated) {
                ae = Worker;
                try {
                  p._A.Worker = r(ae, "Dedicated");
                } catch (e) {
                  o(e, "Dedicated");
                }
                if (oe.shared) {
                  se = SharedWorker;
                  try {
                    p._A.SharedWorker = r(se, "Shared");
                  } catch (e) {
                    o(e, "Shared");
                  }
                } else n("Shared");
                if (oe.service) {
                  ce = navigator.serviceWorker.register;
                  try {
                    p._A.navigator.serviceWorker.register =
                      ((t = ce),
                      function () {
                        for (
                          var e = arguments.length, r = new Array(e), n = 0;
                          n < e;
                          n++
                        )
                          r[n] = arguments[n];
                        return (
                          i("Service", r[1]?.type),
                          t.apply(navigator.serviceWorker, r)
                        );
                      });
                  } catch (e) {
                    o(e, "Service");
                  }
                } else n("Service");
                var t;
                return;
              }
              n("All");
            }
            function r(e, t) {
              return "undefined" == typeof Proxy
                ? e
                : new Proxy(e, {
                    construct: (e, r) => (i(t, r[1]?.type), new e(...r)),
                  });
            }
            function n(t) {
              p.v6 || e("Workers/".concat(t, "/Unavailable"));
            }
            function i(t, r) {
              e("Workers/".concat(t, "module" === r ? "/Module" : "/Classic"));
            }
            function o(t, r) {
              e("Workers/".concat(r, "/SM/Unsupported")),
                (0, g.Z)(
                  "NR Agent: Unable to capture ".concat(r, " workers."),
                  t
                );
            }
          })((t) => (0, c.p)(ue.xS, [t], void 0, e.D.metrics, this.ee)),
          this.importAggregator();
      }
    }
    !(function (e, t, r) {
      (t = (function (e) {
        var t = (function (e, t) {
          if ("object" != typeof e || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == typeof t ? t : String(t);
      })(t)) in e
        ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = r);
    })(fe, "featureName", ue.t9);
    var de = i(3916),
      le = i(3752),
      he = i(8683),
      pe = i.n(he);
    const ge = "nr@original";
    var ve = Object.prototype.hasOwnProperty,
      me = !1;
    function be(e, t) {
      return (
        e || (e = le.ee),
        (r.inPlace = function (e, t, n, i, o) {
          n || (n = "");
          var a,
            s,
            c,
            u = "-" === n.charAt(0);
          for (c = 0; c < t.length; c++)
            Ee((a = e[(s = t[c])])) || (e[s] = r(a, u ? s + n : n, i, s, o));
        }),
        (r.flag = ge),
        r
      );
      function r(t, r, i, o, a) {
        return Ee(t)
          ? t
          : (r || (r = ""),
            (nrWrapper[ge] = t),
            we(t, nrWrapper, e),
            nrWrapper);
        function nrWrapper() {
          var s, c, u, f;
          try {
            (c = this),
              (s = pe()(arguments)),
              (u = "function" == typeof i ? i(s, c) : i || {});
          } catch (t) {
            ye([t, "", [s, c, o], u], e);
          }
          n(r + "start", [s, c, o], u, a);
          try {
            return (f = t.apply(c, s));
          } catch (e) {
            throw (n(r + "err", [s, c, e], u, a), e);
          } finally {
            n(r + "end", [s, c, f], u, a);
          }
        }
      }
      function n(r, n, i, o) {
        if (!me || t) {
          var a = me;
          me = !0;
          try {
            e.emit(r, n, i, t, o);
          } catch (t) {
            ye([t, r, n, i], e);
          }
          me = a;
        }
      }
    }
    function ye(e, t) {
      t || (t = le.ee);
      try {
        t.emit("internal-error", e);
      } catch (e) {}
    }
    function we(e, t, r) {
      if (Object.defineProperty && Object.keys)
        try {
          return (
            Object.keys(e).forEach(function (r) {
              Object.defineProperty(t, r, {
                get: function () {
                  return e[r];
                },
                set: function (t) {
                  return (e[r] = t), t;
                },
              });
            }),
            t
          );
        } catch (e) {
          ye([e], r);
        }
      for (var n in e) ve.call(e, n) && (t[n] = e[n]);
      return t;
    }
    function Ee(e) {
      return !(e && e instanceof Function && e.apply && !e[ge]);
    }
    var Te = "fetch-",
      Ae = Te + "body-",
      xe = ["arrayBuffer", "blob", "json", "text", "formData"],
      _e = p._A.Request,
      Se = p._A.Response,
      Oe = "prototype",
      Pe = "nr@context";
    const je = {};
    function De(e) {
      const t = (function (e) {
        return (e || le.ee).get("fetch");
      })(e);
      if (!(_e && Se && p._A.fetch)) return t;
      if (je[t.debugId]++) return t;
      function r(e, r, n) {
        var i = e[r];
        "function" == typeof i &&
          ((e[r] = function () {
            var e,
              r = pe()(arguments),
              o = {};
            t.emit(n + "before-start", [r], o),
              o[Pe] && o[Pe].dt && (e = o[Pe].dt);
            var a = i.apply(this, r);
            return (
              t.emit(n + "start", [r, e], a),
              a.then(
                function (e) {
                  return t.emit(n + "end", [null, e], a), e;
                },
                function (e) {
                  throw (t.emit(n + "end", [e], a), e);
                }
              )
            );
          }),
          (e[r][ge] = i));
      }
      return (
        (je[t.debugId] = 1),
        xe.forEach((e) => {
          r(_e[Oe], e, Ae), r(Se[Oe], e, Ae);
        }),
        r(p._A, "fetch", Te),
        t.on(Te + "end", function (e, r) {
          var n = this;
          if (r) {
            var i = r.headers.get("content-length");
            null !== i && (n.rxSize = i), t.emit(Te + "done", [null, r], n);
          } else t.emit(Te + "done", [e], n);
        }),
        t
      );
    }
    const Ne = {},
      Ce = "setTimeout",
      Ie = "setInterval",
      Re = "clearTimeout",
      ke = "-start",
      Le = "-",
      He = [Ce, "setImmediate", Ie, Re, "clearImmediate"];
    function ze(e) {
      const t = (function (e) {
        return (e || le.ee).get("timer");
      })(e);
      if (Ne[t.debugId]++) return t;
      Ne[t.debugId] = 1;
      var r = be(t);
      return (
        r.inPlace(p._A, He.slice(0, 2), Ce + Le),
        r.inPlace(p._A, He.slice(2, 3), Ie + Le),
        r.inPlace(p._A, He.slice(3), Re + Le),
        t.on(Ie + ke, function (e, t, n) {
          e[0] = r(e[0], "fn-", null, n);
        }),
        t.on(Ce + ke, function (e, t, n) {
          (this.method = n),
            (this.timerDuration = isNaN(e[1]) ? 0 : +e[1]),
            (e[0] = r(e[0], "fn-", this, n));
        }),
        t
      );
    }
    const Me = {},
      Be = "requestAnimationFrame";
    function Fe(e) {
      const t = (function (e) {
        return (e || le.ee).get("raf");
      })(e);
      if (!p.il || Me[t.debugId]++) return t;
      Me[t.debugId] = 1;
      var r = be(t);
      return (
        r.inPlace(window, [Be], "raf-"),
        t.on("raf-start", function (e) {
          e[0] = r(e[0], "fn-");
        }),
        t
      );
    }
    const Ue = {},
      Ve = ["pushState", "replaceState"];
    function We(e) {
      const t = (function (e) {
        return (e || le.ee).get("history");
      })(e);
      return (
        !p.il ||
          Ue[t.debugId]++ ||
          ((Ue[t.debugId] = 1), be(t).inPlace(window.history, Ve, "-")),
        t
      );
    }
    const qe = {},
      Ge = ["appendChild", "insertBefore", "replaceChild"];
    function Xe(e) {
      const t = (function (e) {
        return (e || le.ee).get("jsonp");
      })(e);
      if (!p.il || qe[t.debugId]) return t;
      qe[t.debugId] = !0;
      var r = be(t),
        n = /[?&](?:callback|cb)=([^&#]+)/,
        i = /(.*)\.([^.]+)/,
        o = /^(\w+)(\.|$)(.*)$/;
      function a(e, t) {
        var r = e.match(o),
          n = r[1],
          i = r[3];
        return i ? a(i, t[n]) : t[n];
      }
      return (
        r.inPlace(Node.prototype, Ge, "dom-"),
        t.on("dom-start", function (e) {
          !(function (e) {
            if (
              !e ||
              "string" != typeof e.nodeName ||
              "script" !== e.nodeName.toLowerCase()
            )
              return;
            if ("function" != typeof e.addEventListener) return;
            var o = ((s = e.src), (c = s.match(n)), c ? c[1] : null);
            var s, c;
            if (!o) return;
            var u = (function (e) {
              var t = e.match(i);
              if (t && t.length >= 3)
                return { key: t[2], parent: a(t[1], window) };
              return { key: e, parent: window };
            })(o);
            if ("function" != typeof u.parent[u.key]) return;
            var f = {};
            function d() {
              t.emit("jsonp-end", [], f),
                e.removeEventListener("load", d, (0, R.m$)(!1)),
                e.removeEventListener("error", l, (0, R.m$)(!1));
            }
            function l() {
              t.emit("jsonp-error", [], f),
                t.emit("jsonp-end", [], f),
                e.removeEventListener("load", d, (0, R.m$)(!1)),
                e.removeEventListener("error", l, (0, R.m$)(!1));
            }
            r.inPlace(u.parent, [u.key], "cb-", f),
              e.addEventListener("load", d, (0, R.m$)(!1)),
              e.addEventListener("error", l, (0, R.m$)(!1)),
              t.emit("new-jsonp", [e.src], f);
          })(e[0]);
        }),
        t
      );
    }
    const $e = {};
    function Ze(e) {
      const r = (function (e) {
        return (e || le.ee).get("mutation");
      })(e);
      if (!p.il || $e[r.debugId]) return r;
      $e[r.debugId] = !0;
      var n = be(r),
        i = t.Yu.MO;
      return (
        i &&
          ((window.MutationObserver = function (e) {
            return this instanceof i
              ? new i(n(e, "fn-"))
              : i.apply(this, arguments);
          }),
          (MutationObserver.prototype = i.prototype)),
        r
      );
    }
    const Ye = {};
    function Qe(e) {
      const r = (function (e) {
        return (e || le.ee).get("promise");
      })(e);
      if (Ye[r.debugId]) return r;
      Ye[r.debugId] = !0;
      var n = le.c,
        i = be(r),
        o = t.Yu.PR;
      return (
        o &&
          (function () {
            function e(t) {
              var n = r.context(),
                a = i(t, "executor-", n, null, !1);
              const s = Reflect.construct(o, [a], e);
              return (
                (r.context(s).getCtx = function () {
                  return n;
                }),
                s
              );
            }
            (p._A.Promise = e),
              Object.defineProperty(e, "name", { value: "Promise" }),
              (e.toString = function () {
                return o.toString();
              }),
              Object.setPrototypeOf(e, o),
              ["all", "race"].forEach(function (t) {
                const n = o[t];
                e[t] = function (e) {
                  let i = !1;
                  e?.forEach((e) => {
                    this.resolve(e).then(a("all" === t), a(!1));
                  });
                  const o = n.apply(this, arguments);
                  return o;
                  function a(e) {
                    return function () {
                      r.emit("propagate", [null, !i], o, !1, !1), (i = i || !e);
                    };
                  }
                };
              }),
              ["resolve", "reject"].forEach(function (t) {
                const n = o[t];
                e[t] = function (e) {
                  const t = n.apply(this, arguments);
                  return e !== t && r.emit("propagate", [e, !0], t, !1, !1), t;
                };
              }),
              (e.prototype = o.prototype);
            const t = o.prototype.then;
            (o.prototype.then = function () {
              var e = this,
                o = n(e);
              o.promise = e;
              for (
                var a = arguments.length, s = new Array(a), c = 0;
                c < a;
                c++
              )
                s[c] = arguments[c];
              (s[0] = i(s[0], "cb-", o, null, !1)),
                (s[1] = i(s[1], "cb-", o, null, !1));
              const u = t.apply(this, s);
              return (
                (o.nextPromise = u), r.emit("propagate", [e, !0], u, !1, !1), u
              );
            }),
              (o.prototype.then[ge] = t),
              r.on("executor-start", function (e) {
                (e[0] = i(e[0], "resolve-", this, null, !1)),
                  (e[1] = i(e[1], "resolve-", this, null, !1));
              }),
              r.on("executor-err", function (e, t, r) {
                e[1](r);
              }),
              r.on("cb-end", function (e, t, n) {
                r.emit("propagate", [n, !0], this.nextPromise, !1, !1);
              }),
              r.on("propagate", function (e, t, n) {
                (this.getCtx && !t) ||
                  (this.getCtx = function () {
                    if (e instanceof Promise) var t = r.context(e);
                    return t && t.getCtx ? t.getCtx() : this;
                  });
              });
          })(),
        r
      );
    }
    const Ke = {},
      Je = XMLHttpRequest,
      et = "addEventListener",
      tt = "removeEventListener";
    function rt(e) {
      var t = (function (e) {
        return (e || le.ee).get("events");
      })(e);
      if (Ke[t.debugId]++) return t;
      Ke[t.debugId] = 1;
      var r = be(t, !0);
      function n(e) {
        r.inPlace(e, [et, tt], "-", i);
      }
      function i(e, t) {
        return e[1];
      }
      return (
        "getPrototypeOf" in Object &&
          (p.il && nt(document, n), nt(p._A, n), nt(Je.prototype, n)),
        t.on(et + "-start", function (e, t) {
          var n = e[1];
          if (null !== n && ("function" == typeof n || "object" == typeof n)) {
            var i = (0, de.X)(n, "nr@wrapped", function () {
              var e = {
                object: function () {
                  if ("function" != typeof n.handleEvent) return;
                  return n.handleEvent.apply(n, arguments);
                },
                function: n,
              }[typeof n];
              return e ? r(e, "fn-", null, e.name || "anonymous") : n;
            });
            this.wrapped = e[1] = i;
          }
        }),
        t.on(tt + "-start", function (e) {
          e[1] = this.wrapped || e[1];
        }),
        t
      );
    }
    function nt(e, t) {
      let r = e;
      for (
        ;
        "object" == typeof r && !Object.prototype.hasOwnProperty.call(r, et);

      )
        r = Object.getPrototypeOf(r);
      for (
        var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), o = 2;
        o < n;
        o++
      )
        i[o - 2] = arguments[o];
      r && t(r, ...i);
    }
    const it = {},
      ot = ["open", "send"];
    function at(e) {
      var r = e || le.ee;
      const n = (function (e) {
        return (e || le.ee).get("xhr");
      })(r);
      if (it[n.debugId]++) return n;
      (it[n.debugId] = 1), rt(r);
      var i = be(n),
        o = t.Yu.XHR,
        a = t.Yu.MO,
        s = t.Yu.PR,
        c = t.Yu.SI,
        u = "readystatechange",
        f = [
          "onload",
          "onerror",
          "onabort",
          "onloadstart",
          "onloadend",
          "onprogress",
          "ontimeout",
        ],
        d = [],
        l = p._A.XMLHttpRequest.listeners,
        h = (p._A.XMLHttpRequest = function (e) {
          var t = new o(e);
          function r() {
            try {
              n.emit("new-xhr", [t], t),
                t.addEventListener(u, m, (0, R.m$)(!1));
            } catch (e) {
              (0, g.Z)("An error occured while intercepting XHR", e);
              try {
                n.emit("internal-error", [e]);
              } catch (e) {}
            }
          }
          return (
            (this.listeners = l ? [...l, r] : [r]),
            this.listeners.forEach((e) => e()),
            t
          );
        });
      function v(e, t) {
        i.inPlace(t, ["onreadystatechange"], "fn-", T);
      }
      function m() {
        var e = this,
          t = n.context(e);
        e.readyState > 3 &&
          !t.resolved &&
          ((t.resolved = !0), n.emit("xhr-resolved", [], e)),
          i.inPlace(e, f, "fn-", T);
      }
      if (
        ((function (e, t) {
          for (var r in e) t[r] = e[r];
        })(o, h),
        (h.prototype = o.prototype),
        i.inPlace(h.prototype, ot, "-xhr-", T),
        n.on("send-xhr-start", function (e, t) {
          v(e, t),
            (function (e) {
              d.push(e),
                a && (b ? b.then(E) : c ? c(E) : ((y = -y), (w.data = y)));
            })(t);
        }),
        n.on("open-xhr-start", v),
        a)
      ) {
        var b = s && s.resolve();
        if (!c && !s) {
          var y = 1,
            w = document.createTextNode(y);
          new a(E).observe(w, { characterData: !0 });
        }
      } else
        r.on("fn-end", function (e) {
          (e[0] && e[0].type === u) || E();
        });
      function E() {
        for (var e = 0; e < d.length; e++) v(0, d[e]);
        d.length && (d = []);
      }
      function T(e, t) {
        return t;
      }
      return n;
    }
    var st,
      ct = {};
    try {
      (st = localStorage.getItem("__nr_flags").split(",")),
        console &&
          "function" == typeof console.log &&
          ((ct.console = !0),
          -1 !== st.indexOf("dev") && (ct.dev = !0),
          -1 !== st.indexOf("nr_dev") && (ct.nrDev = !0));
    } catch (e) {}
    function ut(e) {
      try {
        ct.console && ut(e);
      } catch (e) {}
    }
    ct.nrDev &&
      le.ee.on("internal-error", function (e) {
        ut(e.stack);
      }),
      ct.dev &&
        le.ee.on("fn-err", function (e, t, r) {
          ut(r.stack);
        }),
      ct.dev &&
        (ut("NR AGENT IN DEVELOPMENT MODE"),
        ut(
          "flags: " +
            (0, A.D)(ct, function (e, t) {
              return e;
            }).join(", ")
        ));
    var ft = i(8322);
    function dt(e, t) {
      !(function (e, t) {
        if (t.has(e))
          throw new TypeError(
            "Cannot initialize the same private elements twice on an object"
          );
      })(e, t),
        t.add(e);
    }
    var lt = new WeakSet();
    class ht extends v {
      constructor(r, n) {
        var i;
        let o =
          !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        super(r, n, ft.t, o),
          (i = this),
          dt(this, lt),
          (this.skipNext = 0),
          (this.origOnerror = p._A.onerror);
        try {
          this.removeOnAbort = new AbortController();
        } catch (e) {}
        const a = this;
        a.ee.on("fn-start", function (e, t, r) {
          a.abortHandler && (a.skipNext += 1);
        }),
          a.ee.on("fn-err", function (e, t, r) {
            a.abortHandler &&
              !r[ft.A] &&
              ((0, de.X)(r, ft.A, function () {
                return !0;
              }),
              (this.thrown = !0),
              vt(r, void 0, a.ee));
          }),
          a.ee.on("fn-end", function () {
            a.abortHandler &&
              !this.thrown &&
              a.skipNext > 0 &&
              (a.skipNext -= 1);
          }),
          a.ee.on("internal-error", function (t) {
            (0, c.p)("ierr", [t, (0, u.z)(), !0], void 0, e.D.jserrors, a.ee);
          }),
          (p._A.onerror = function () {
            return (
              i.origOnerror && i.origOnerror(...arguments),
              i.onerrorHandler(...arguments),
              !1
            );
          }),
          p._A.addEventListener(
            "unhandledrejection",
            (t) => {
              const r = (function (e) {
                let t = "Unhandled Promise Rejection: ";
                if (e instanceof Error)
                  try {
                    return (e.message = t + e.message), e;
                  } catch (t) {
                    return e;
                  }
                if (void 0 === e) return new Error(t);
                try {
                  return new Error(t + (0, N.P)(e));
                } catch (e) {
                  return new Error(t);
                }
              })(t.reason);
              (0, c.p)(
                "err",
                [r, (0, u.z)(), !1, { unhandledPromiseRejection: 1 }],
                void 0,
                e.D.jserrors,
                this.ee
              );
            },
            (0, R.m$)(!1, this.removeOnAbort?.signal)
          ),
          Fe(this.ee),
          ze(this.ee),
          rt(this.ee),
          (0, t.OP)(r).xhrWrappable && at(this.ee),
          (this.abortHandler = (function (e, t, r) {
            if (!t.has(e))
              throw new TypeError(
                "attempted to get private field on non-instance"
              );
            return r;
          })(this, lt, pt)),
          this.importAggregator();
      }
      onerrorHandler(t, r, n, i, o) {
        try {
          this.skipNext
            ? (this.skipNext -= 1)
            : vt(o || new gt(t, r, n), !0, this.ee);
        } catch (t) {
          try {
            (0, c.p)(
              "ierr",
              [t, (0, u.z)(), !0],
              void 0,
              e.D.jserrors,
              this.ee
            );
          } catch (e) {}
        }
        return (
          "function" == typeof this.origOnerror &&
          this.origOnerror.apply(this, pe()(arguments))
        );
      }
    }
    function pt() {
      this.removeOnAbort?.abort(), (this.abortHandler = void 0);
    }
    function gt(e, t, r) {
      (this.message = e || "Uncaught error with no additional information"),
        (this.sourceURL = t),
        (this.line = r);
    }
    function vt(t, r, n) {
      var i = r ? null : (0, u.z)();
      (0, c.p)("err", [t, i], void 0, e.D.jserrors, n);
    }
    !(function (e, t, r) {
      (t = (function (e) {
        var t = (function (e, t) {
          if ("object" != typeof e || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == typeof t ? t : String(t);
      })(t)) in e
        ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = r);
    })(ht, "featureName", ft.t);
    var mt = 1,
      bt = "nr@id";
    function yt(e) {
      var t = typeof e;
      return !e || ("object" !== t && "function" !== t)
        ? -1
        : e === p._A
        ? 0
        : (0, de.X)(e, bt, function () {
            return mt++;
          });
    }
    var wt = i(9071);
    function Et(e) {
      if ("string" == typeof e && e.length) return e.length;
      if ("object" == typeof e) {
        if (
          "undefined" != typeof ArrayBuffer &&
          e instanceof ArrayBuffer &&
          e.byteLength
        )
          return e.byteLength;
        if ("undefined" != typeof Blob && e instanceof Blob && e.size)
          return e.size;
        if (!("undefined" != typeof FormData && e instanceof FormData))
          try {
            return (0, N.P)(e).length;
          } catch (e) {
            return;
          }
      }
    }
    var Tt = i(6368);
    class At {
      constructor(e) {
        (this.agentIdentifier = e),
          (this.generateTracePayload = this.generateTracePayload.bind(this)),
          (this.shouldGenerateTrace = this.shouldGenerateTrace.bind(this));
      }
      generateTracePayload(e) {
        if (!this.shouldGenerateTrace(e)) return null;
        var r = (0, t.DL)(this.agentIdentifier);
        if (!r) return null;
        var n = (r.accountID || "").toString() || null,
          i = (r.agentID || "").toString() || null,
          o = (r.trustKey || "").toString() || null;
        if (!n || !i) return null;
        var a = (0, D.M)(),
          s = (0, D.Ht)(),
          c = Date.now(),
          u = { spanId: a, traceId: s, timestamp: c };
        return (
          (e.sameOrigin ||
            (this.isAllowedOrigin(e) &&
              this.useTraceContextHeadersForCors())) &&
            ((u.traceContextParentHeader =
              this.generateTraceContextParentHeader(a, s)),
            (u.traceContextStateHeader = this.generateTraceContextStateHeader(
              a,
              c,
              n,
              i,
              o
            ))),
          ((e.sameOrigin && !this.excludeNewrelicHeader()) ||
            (!e.sameOrigin &&
              this.isAllowedOrigin(e) &&
              this.useNewrelicHeaderForCors())) &&
            (u.newrelicHeader = this.generateTraceHeader(a, s, c, n, i, o)),
          u
        );
      }
      generateTraceContextParentHeader(e, t) {
        return "00-" + t + "-" + e + "-01";
      }
      generateTraceContextStateHeader(e, t, r, n, i) {
        return i + "@nr=0-1-" + r + "-" + n + "-" + e + "----" + t;
      }
      generateTraceHeader(e, t, r, n, i, o) {
        if (!("function" == typeof p._A?.btoa)) return null;
        var a = {
          v: [0, 1],
          d: { ty: "Browser", ac: n, ap: i, id: e, tr: t, ti: r },
        };
        return o && n !== o && (a.d.tk = o), btoa((0, N.P)(a));
      }
      shouldGenerateTrace(e) {
        return this.isDtEnabled() && this.isAllowedOrigin(e);
      }
      isAllowedOrigin(e) {
        var r = !1,
          n = {};
        if (
          ((0, t.Mt)(this.agentIdentifier, "distributed_tracing") &&
            (n = (0, t.P_)(this.agentIdentifier).distributed_tracing),
          e.sameOrigin)
        )
          r = !0;
        else if (n.allowed_origins instanceof Array)
          for (var i = 0; i < n.allowed_origins.length; i++) {
            var o = (0, Tt.e)(n.allowed_origins[i]);
            if (
              e.hostname === o.hostname &&
              e.protocol === o.protocol &&
              e.port === o.port
            ) {
              r = !0;
              break;
            }
          }
        return r;
      }
      isDtEnabled() {
        var e = (0, t.Mt)(this.agentIdentifier, "distributed_tracing");
        return !!e && !!e.enabled;
      }
      excludeNewrelicHeader() {
        var e = (0, t.Mt)(this.agentIdentifier, "distributed_tracing");
        return !!e && !!e.exclude_newrelic_header;
      }
      useNewrelicHeaderForCors() {
        var e = (0, t.Mt)(this.agentIdentifier, "distributed_tracing");
        return !!e && !1 !== e.cors_use_newrelic_header;
      }
      useTraceContextHeadersForCors() {
        var e = (0, t.Mt)(this.agentIdentifier, "distributed_tracing");
        return !!e && !!e.cors_use_tracecontext_headers;
      }
    }
    var xt = i(8675);
    var _t = ["load", "error", "abort", "timeout"],
      St = _t.length,
      Ot = t.Yu.REQ,
      Pt = p._A.XMLHttpRequest;
    class jt extends v {
      constructor(r, n) {
        let i =
          !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        super(r, n, xt.t, i),
          (0, t.OP)(r).xhrWrappable &&
            ((this.dt = new At(r)),
            (this.handler = (e, t, r, n) => (0, c.p)(e, t, r, n, this.ee)),
            De(this.ee),
            at(this.ee),
            (function (r, n, i, o) {
              function a(e) {
                var t = this;
                (t.totalCbs = 0),
                  (t.called = 0),
                  (t.cbTime = 0),
                  (t.end = A),
                  (t.ended = !1),
                  (t.xhrGuids = {}),
                  (t.lastSize = null),
                  (t.loadCaptureCalled = !1),
                  (t.params = this.params || {}),
                  (t.metrics = this.metrics || {}),
                  e.addEventListener(
                    "load",
                    function (r) {
                      _(t, e);
                    },
                    (0, R.m$)(!1)
                  ),
                  wt.I ||
                    e.addEventListener(
                      "progress",
                      function (e) {
                        t.lastSize = e.loaded;
                      },
                      (0, R.m$)(!1)
                    );
              }
              function s(e) {
                (this.params = { method: e[0] }),
                  x(this, e[1]),
                  (this.metrics = {});
              }
              function c(e, n) {
                var i = (0, t.DL)(r);
                "xpid" in i &&
                  this.sameOrigin &&
                  n.setRequestHeader("X-NewRelic-ID", i.xpid);
                var a = o.generateTracePayload(this.parsedOrigin);
                if (a) {
                  var s = !1;
                  a.newrelicHeader &&
                    (n.setRequestHeader("newrelic", a.newrelicHeader),
                    (s = !0)),
                    a.traceContextParentHeader &&
                      (n.setRequestHeader(
                        "traceparent",
                        a.traceContextParentHeader
                      ),
                      a.traceContextStateHeader &&
                        n.setRequestHeader(
                          "tracestate",
                          a.traceContextStateHeader
                        ),
                      (s = !0)),
                    s && (this.dt = a);
                }
              }
              function f(e, t) {
                var r = this.metrics,
                  i = e[0],
                  o = this;
                if (r && i) {
                  var a = Et(i);
                  a && (r.txSize = a);
                }
                (this.startTime = (0, u.z)()),
                  (this.listener = function (e) {
                    try {
                      "abort" !== e.type ||
                        o.loadCaptureCalled ||
                        (o.params.aborted = !0),
                        ("load" !== e.type ||
                          (o.called === o.totalCbs &&
                            (o.onloadCalled || "function" != typeof t.onload) &&
                            "function" == typeof o.end)) &&
                          o.end(t);
                    } catch (e) {
                      try {
                        n.emit("internal-error", [e]);
                      } catch (e) {}
                    }
                  });
                for (var s = 0; s < St; s++)
                  t.addEventListener(_t[s], this.listener, (0, R.m$)(!1));
              }
              function d(e, t, r) {
                (this.cbTime += e),
                  t ? (this.onloadCalled = !0) : (this.called += 1),
                  this.called !== this.totalCbs ||
                    (!this.onloadCalled && "function" == typeof r.onload) ||
                    "function" != typeof this.end ||
                    this.end(r);
              }
              function l(e, t) {
                var r = "" + yt(e) + !!t;
                this.xhrGuids &&
                  !this.xhrGuids[r] &&
                  ((this.xhrGuids[r] = !0), (this.totalCbs += 1));
              }
              function h(e, t) {
                var r = "" + yt(e) + !!t;
                this.xhrGuids &&
                  this.xhrGuids[r] &&
                  (delete this.xhrGuids[r], (this.totalCbs -= 1));
              }
              function g() {
                this.endTime = (0, u.z)();
              }
              function v(e, t) {
                t instanceof Pt &&
                  "load" === e[0] &&
                  n.emit("xhr-load-added", [e[1], e[2]], t);
              }
              function m(e, t) {
                t instanceof Pt &&
                  "load" === e[0] &&
                  n.emit("xhr-load-removed", [e[1], e[2]], t);
              }
              function b(e, t, r) {
                t instanceof Pt &&
                  ("onload" === r && (this.onload = !0),
                  ("load" === (e[0] && e[0].type) || this.onload) &&
                    (this.xhrCbStart = (0, u.z)()));
              }
              function y(e, t) {
                this.xhrCbStart &&
                  n.emit(
                    "xhr-cb-time",
                    [(0, u.z)() - this.xhrCbStart, this.onload, t],
                    t
                  );
              }
              function w(e) {
                var t,
                  r = e[1] || {};
                "string" == typeof e[0]
                  ? (t = e[0])
                  : e[0] && e[0].url
                  ? (t = e[0].url)
                  : p._A?.URL && e[0] && e[0] instanceof URL && (t = e[0].href),
                  t &&
                    ((this.parsedOrigin = (0, Tt.e)(t)),
                    (this.sameOrigin = this.parsedOrigin.sameOrigin));
                var n = o.generateTracePayload(this.parsedOrigin);
                if (n && (n.newrelicHeader || n.traceContextParentHeader))
                  if (
                    "string" == typeof e[0] ||
                    (p._A?.URL && e[0] && e[0] instanceof URL)
                  ) {
                    var i = {};
                    for (var a in r) i[a] = r[a];
                    (i.headers = new Headers(r.headers || {})),
                      s(i.headers, n) && (this.dt = n),
                      e.length > 1 ? (e[1] = i) : e.push(i);
                  } else
                    e[0] && e[0].headers && s(e[0].headers, n) && (this.dt = n);
                function s(e, t) {
                  var r = !1;
                  return (
                    t.newrelicHeader &&
                      (e.set("newrelic", t.newrelicHeader), (r = !0)),
                    t.traceContextParentHeader &&
                      (e.set("traceparent", t.traceContextParentHeader),
                      t.traceContextStateHeader &&
                        e.set("tracestate", t.traceContextStateHeader),
                      (r = !0)),
                    r
                  );
                }
              }
              function E(e, t) {
                (this.params = {}),
                  (this.metrics = {}),
                  (this.startTime = (0, u.z)()),
                  (this.dt = t),
                  e.length >= 1 && (this.target = e[0]),
                  e.length >= 2 && (this.opts = e[1]);
                var r,
                  n = this.opts || {},
                  i = this.target;
                "string" == typeof i
                  ? (r = i)
                  : "object" == typeof i && i instanceof Ot
                  ? (r = i.url)
                  : p._A?.URL &&
                    "object" == typeof i &&
                    i instanceof URL &&
                    (r = i.href),
                  x(this, r);
                var o = (
                  "" + ((i && i instanceof Ot && i.method) || n.method || "GET")
                ).toUpperCase();
                (this.params.method = o), (this.txSize = Et(n.body) || 0);
              }
              function T(t, r) {
                var n;
                (this.endTime = (0, u.z)()),
                  this.params || (this.params = {}),
                  (this.params.status = r ? r.status : 0),
                  "string" == typeof this.rxSize &&
                    this.rxSize.length > 0 &&
                    (n = +this.rxSize);
                var o = {
                  txSize: this.txSize,
                  rxSize: n,
                  duration: (0, u.z)() - this.startTime,
                };
                i(
                  "xhr",
                  [this.params, o, this.startTime, this.endTime, "fetch"],
                  this,
                  e.D.ajax
                );
              }
              function A(t) {
                var r = this.params,
                  n = this.metrics;
                if (!this.ended) {
                  this.ended = !0;
                  for (var o = 0; o < St; o++)
                    t.removeEventListener(_t[o], this.listener, !1);
                  r.aborted ||
                    ((n.duration = (0, u.z)() - this.startTime),
                    this.loadCaptureCalled || 4 !== t.readyState
                      ? null == r.status && (r.status = 0)
                      : _(this, t),
                    (n.cbTime = this.cbTime),
                    i(
                      "xhr",
                      [r, n, this.startTime, this.endTime, "xhr"],
                      this,
                      e.D.ajax
                    ));
                }
              }
              function x(e, t) {
                var r = (0, Tt.e)(t),
                  n = e.params;
                (n.hostname = r.hostname),
                  (n.port = r.port),
                  (n.protocol = r.protocol),
                  (n.host = r.hostname + ":" + r.port),
                  (n.pathname = r.pathname),
                  (e.parsedOrigin = r),
                  (e.sameOrigin = r.sameOrigin);
              }
              function _(e, t) {
                e.params.status = t.status;
                var r = (function (e, t) {
                  var r = e.responseType;
                  return "json" === r && null !== t
                    ? t
                    : "arraybuffer" === r || "blob" === r || "json" === r
                    ? Et(e.response)
                    : "text" === r || "" === r || void 0 === r
                    ? Et(e.responseText)
                    : void 0;
                })(t, e.lastSize);
                if ((r && (e.metrics.rxSize = r), e.sameOrigin)) {
                  var n = t.getResponseHeader("X-NewRelic-App-Data");
                  n && (e.params.cat = n.split(", ").pop());
                }
                e.loadCaptureCalled = !0;
              }
              n.on("new-xhr", a),
                n.on("open-xhr-start", s),
                n.on("open-xhr-end", c),
                n.on("send-xhr-start", f),
                n.on("xhr-cb-time", d),
                n.on("xhr-load-added", l),
                n.on("xhr-load-removed", h),
                n.on("xhr-resolved", g),
                n.on("addEventListener-end", v),
                n.on("removeEventListener-end", m),
                n.on("fn-end", y),
                n.on("fetch-before-start", w),
                n.on("fetch-start", E),
                n.on("fn-start", b),
                n.on("fetch-done", T);
            })(r, this.ee, this.handler, this.dt),
            this.importAggregator());
      }
    }
    !(function (e, t, r) {
      (t = (function (e) {
        var t = (function (e, t) {
          if ("object" != typeof e || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == typeof t ? t : String(t);
      })(t)) in e
        ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = r);
    })(jt, "featureName", xt.t);
    var Dt = i(6408),
      Nt = i(2628);
    function Ct(e, t) {
      !(function (e, t) {
        if (t.has(e))
          throw new TypeError(
            "Cannot initialize the same private elements twice on an object"
          );
      })(e, t),
        t.add(e);
    }
    const {
        BST_RESOURCE: It,
        BST_TIMER: Rt,
        END: kt,
        FEATURE_NAME: Lt,
        FN_END: Ht,
        FN_START: zt,
        ADD_EVENT_LISTENER: Mt,
        PUSH_STATE: Bt,
        RESOURCE: Ft,
        RESOURCE_TIMING_BUFFER_FULL: Ut,
        START: Vt,
        ORIG_EVENT: Wt,
      } = Nt,
      qt = "clearResourceTimings";
    var Gt = new WeakSet();
    class Xt extends v {
      constructor(t, r) {
        if (
          (super(
            t,
            r,
            Lt,
            !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2]
          ),
          Ct(this, Gt),
          !p.il)
        )
          return;
        const n = this.ee;
        (this.timerEE = ze(n)),
          (this.rafEE = Fe(n)),
          We(n),
          rt(n),
          n.on(zt, function (e, t) {
            e[0] instanceof Wt && (this.bstStart = (0, u.z)());
          }),
          n.on(Ht, function (t, r) {
            var i = t[0];
            i instanceof Wt &&
              (0, c.p)(
                "bst",
                [i, r, this.bstStart, (0, u.z)()],
                void 0,
                e.D.sessionTrace,
                n
              );
          }),
          this.timerEE.on(zt, function (e, t, r) {
            (this.bstStart = (0, u.z)()), (this.bstType = r);
          }),
          this.timerEE.on(Ht, function (t, r) {
            (0,
            c.p)(Rt, [r, this.bstStart, (0, u.z)(), this.bstType], void 0, e.D.sessionTrace, n);
          }),
          this.rafEE.on(zt, function () {
            this.bstStart = (0, u.z)();
          }),
          this.rafEE.on(Ht, function (t, r) {
            (0,
            c.p)(Rt, [r, this.bstStart, (0, u.z)(), "requestAnimationFrame"], void 0, e.D.sessionTrace, n);
          }),
          n.on(Bt + Vt, function (e) {
            (this.time = (0, u.z)()),
              (this.startPath = location.pathname + location.hash);
          }),
          n.on(Bt + kt, function (t) {
            (0,
            c.p)("bstHist", [location.pathname + location.hash, this.startPath, this.time], void 0, e.D.sessionTrace, n);
          }),
          (0, Dt.W)()
            ? ((0, c.p)(
                It,
                [window.performance.getEntriesByType("resource")],
                void 0,
                e.D.sessionTrace,
                n
              ),
              (function () {
                var t = new PerformanceObserver((t, r) => {
                  var i = t.getEntries();
                  (0, c.p)(It, [i], void 0, e.D.sessionTrace, n);
                });
                try {
                  t.observe({ entryTypes: ["resource"] });
                } catch (e) {}
              })())
            : window.performance[qt] &&
              window.performance[Mt] &&
              window.performance.addEventListener(
                Ut,
                this.onResourceTimingBufferFull,
                (0, R.m$)(!1)
              ),
          document.addEventListener("scroll", this.noOp, (0, R.m$)(!1)),
          document.addEventListener("keypress", this.noOp, (0, R.m$)(!1)),
          document.addEventListener("click", this.noOp, (0, R.m$)(!1)),
          (this.abortHandler = (function (e, t, r) {
            if (!t.has(e))
              throw new TypeError(
                "attempted to get private field on non-instance"
              );
            return r;
          })(this, Gt, $t)),
          this.importAggregator();
      }
      noOp(e) {}
      onResourceTimingBufferFull(t) {
        if (
          ((0, c.p)(
            It,
            [window.performance.getEntriesByType(Ft)],
            void 0,
            e.D.sessionTrace,
            this.ee
          ),
          window.performance[qt])
        )
          try {
            window.performance.removeEventListener(
              Ut,
              this.onResourceTimingBufferFull,
              !1
            );
          } catch (e) {}
      }
    }
    function $t() {
      window.performance.removeEventListener(
        Ut,
        this.onResourceTimingBufferFull,
        !1
      ),
        (this.abortHandler = void 0);
    }
    !(function (e, t, r) {
      (t = (function (e) {
        var t = (function (e, t) {
          if ("object" != typeof e || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == typeof t ? t : String(t);
      })(t)) in e
        ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = r);
    })(Xt, "featureName", Lt);
    var Zt = i(755);
    function Yt(e, t) {
      !(function (e, t) {
        if (t.has(e))
          throw new TypeError(
            "Cannot initialize the same private elements twice on an object"
          );
      })(e, t),
        t.add(e);
    }
    const {
      FEATURE_NAME: Qt,
      START: Kt,
      END: Jt,
      BODY: er,
      CB_END: tr,
      JS_TIME: rr,
      FETCH: nr,
      FN_START: ir,
      CB_START: or,
      FN_END: ar,
    } = Zt;
    var sr = new WeakSet();
    class cr extends v {
      constructor(e, r) {
        if (
          (super(
            e,
            r,
            Qt,
            !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2]
          ),
          Yt(this, sr),
          !p.il)
        )
          return;
        if (!(0, t.OP)(e).xhrWrappable) return;
        try {
          this.removeOnAbort = new AbortController();
        } catch (e) {}
        let n,
          i = 0;
        const o = this.ee.get("tracer"),
          a = Xe(this.ee),
          s = Qe(this.ee),
          c = ze(this.ee),
          f = at(this.ee),
          d = this.ee.get("events"),
          l = De(this.ee),
          h = We(this.ee),
          g = Ze(this.ee);
        function v(e, t) {
          h.emit("newURL", ["" + window.location, t]);
        }
        function m() {
          i++, (n = window.location.hash), (this[ir] = (0, u.z)());
        }
        function b() {
          i--, window.location.hash !== n && v(0, !0);
          var e = (0, u.z)();
          (this[rr] = ~~this[rr] + e - this[ir]), (this[ar] = e);
        }
        function y(e, t) {
          e.on(t, function () {
            this[t] = (0, u.z)();
          });
        }
        this.ee.on(ir, m),
          s.on(or, m),
          a.on(or, m),
          this.ee.on(ar, b),
          s.on(tr, b),
          a.on(tr, b),
          this.ee.buffer([ir, ar, "xhr-resolved"], this.featureName),
          d.buffer([ir], this.featureName),
          c.buffer(
            ["setTimeout" + Jt, "clearTimeout" + Kt, ir],
            this.featureName
          ),
          f.buffer([ir, "new-xhr", "send-xhr" + Kt], this.featureName),
          l.buffer(
            [nr + Kt, nr + "-done", nr + er + Kt, nr + er + Jt],
            this.featureName
          ),
          h.buffer(["newURL"], this.featureName),
          g.buffer([ir], this.featureName),
          s.buffer(
            ["propagate", or, tr, "executor-err", "resolve" + Kt],
            this.featureName
          ),
          o.buffer([ir, "no-" + ir], this.featureName),
          a.buffer(
            ["new-jsonp", "cb-start", "jsonp-error", "jsonp-end"],
            this.featureName
          ),
          y(l, nr + Kt),
          y(l, nr + "-done"),
          y(a, "new-jsonp"),
          y(a, "jsonp-end"),
          y(a, "cb-start"),
          h.on("pushState-end", v),
          h.on("replaceState-end", v),
          window.addEventListener(
            "hashchange",
            v,
            (0, R.m$)(!0, this.removeOnAbort?.signal)
          ),
          window.addEventListener(
            "load",
            v,
            (0, R.m$)(!0, this.removeOnAbort?.signal)
          ),
          window.addEventListener(
            "popstate",
            function () {
              v(0, i > 1);
            },
            (0, R.m$)(!0, this.removeOnAbort?.signal)
          ),
          (this.abortHandler = (function (e, t, r) {
            if (!t.has(e))
              throw new TypeError(
                "attempted to get private field on non-instance"
              );
            return r;
          })(this, sr, ur)),
          this.importAggregator();
      }
    }
    function ur() {
      this.removeOnAbort?.abort(), (this.abortHandler = void 0);
    }
    !(function (e, t, r) {
      (t = (function (e) {
        var t = (function (e, t) {
          if ("object" != typeof e || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == typeof t ? t : String(t);
      })(t)) in e
        ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = r);
    })(cr, "featureName", Qt);
    var fr = i(6486);
    class dr extends v {
      constructor(e, t) {
        let r =
          !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
        super(e, t, fr.t, r), this.importAggregator();
      }
    }
    !(function (e, t, r) {
      (t = (function (e) {
        var t = (function (e, t) {
          if ("object" != typeof e || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" == typeof t ? t : String(t);
      })(t)) in e
        ? Object.defineProperty(e, t, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = r);
    })(dr, "featureName", fr.t),
      new (class {
        constructor(e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : (0, D.ky)(16);
          (this.agentIdentifier = t),
            (this.sharedAggregator = new x({
              agentIdentifier: this.agentIdentifier,
            })),
            (this.features = {}),
            (this.desiredFeatures = new Set(e.features || [])),
            this.desiredFeatures.add(E),
            Object.assign(
              this,
              (0, a.j)(this.agentIdentifier, e, e.loaderType || "agent")
            ),
            this.start();
        }
        get config() {
          return {
            info: (0, t.C5)(this.agentIdentifier),
            init: (0, t.P_)(this.agentIdentifier),
            loader_config: (0, t.DL)(this.agentIdentifier),
            runtime: (0, t.OP)(this.agentIdentifier),
          };
        }
        start() {
          const t = "features";
          try {
            const r = n(this.agentIdentifier),
              i = Array.from(this.desiredFeatures);
            i.sort((t, r) => e.p[t.featureName] - e.p[r.featureName]),
              i.forEach((t) => {
                if (r[t.featureName] || t.featureName === e.D.pageViewEvent) {
                  const e = (0, s.Z)(t.featureName),
                    n = e.every((e) => r[e]);
                  n ||
                    (0, g.Z)(
                      ""
                        .concat(
                          t.featureName,
                          " is enabled but one or more dependent features has been disabled ("
                        )
                        .concat(
                          (0, N.P)(e),
                          "). This may cause unintended consequences or missing data..."
                        )
                    ),
                    (this.features[t.featureName] = new t(
                      this.agentIdentifier,
                      this.sharedAggregator
                    ));
                }
              }),
              (0, j.Qy)(this.agentIdentifier, this.features, t);
          } catch (e) {
            (0, g.Z)(
              "Failed to initialize all enabled instrument classes (agent aborted) -",
              e
            );
            for (const e in this.features) this.features[e].abortHandler?.();
            const r = (0, j.fP)();
            return (
              delete r.initializedAgents[this.agentIdentifier]?.api,
              delete r.initializedAgents[this.agentIdentifier]?.[t],
              delete this.sharedAggregator,
              r.ee?.abort(),
              delete r.ee?.get(this.agentIdentifier),
              !1
            );
          }
        }
      })({ features: [jt, E, ie, Xt, fe, dr, ht, cr], loaderType: "spa" });
  })(),
    (window.NRBA = o);
})();
