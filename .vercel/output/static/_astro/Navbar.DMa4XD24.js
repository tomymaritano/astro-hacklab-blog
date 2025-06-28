import { j as o } from './jsx-runtime.D_zvdyIk.js';
import { R as j, r as l, a as ne } from './index.DQLiH3RP.js';
import { c as k, A as F, m as S } from './proxy.BfBJbiZp.js';
import './index.D__klQuC.js';
import './index.CKz0Jdri.js';
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const se = [
    ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
    ['polyline', { points: '12 6 12 12 16 14', key: '68esgv' }],
  ],
  oe = k('clock', se);
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ie = [
    ['path', { d: 'M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z', key: '1rqfz7' }],
    ['path', { d: 'M14 2v4a2 2 0 0 0 2 2h4', key: 'tnqrlb' }],
    ['path', { d: 'M10 9H8', key: 'b1mrlr' }],
    ['path', { d: 'M16 13H8', key: 't4e002' }],
    ['path', { d: 'M16 17H8', key: 'z1uh3a' }],
  ],
  ae = k('file-text', ie);
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ce = [
    ['path', { d: 'M4 12h16', key: '1lakjw' }],
    ['path', { d: 'M4 18h16', key: '19g7jn' }],
    ['path', { d: 'M4 6h16', key: '1o0s65' }],
  ],
  le = k('menu', ce);
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ue = [['path', { d: 'M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z', key: 'a7tn18' }]],
  P = k('moon', ue);
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const de = [
    ['path', { d: 'm21 21-4.34-4.34', key: '14j7rj' }],
    ['circle', { cx: '11', cy: '11', r: '8', key: '4ej97u' }],
  ],
  fe = k('search', de);
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const he = [
    ['circle', { cx: '12', cy: '12', r: '4', key: '4exip2' }],
    ['path', { d: 'M12 2v2', key: 'tus03m' }],
    ['path', { d: 'M12 20v2', key: '1lh1kg' }],
    ['path', { d: 'm4.93 4.93 1.41 1.41', key: '149t6j' }],
    ['path', { d: 'm17.66 17.66 1.41 1.41', key: 'ptbguv' }],
    ['path', { d: 'M2 12h2', key: '1t8f8n' }],
    ['path', { d: 'M20 12h2', key: '1q8mjw' }],
    ['path', { d: 'm6.34 17.66-1.41 1.41', key: '1m8zz5' }],
    ['path', { d: 'm19.07 4.93-1.41 1.41', key: '1shlcs' }],
  ],
  _ = k('sun', he);
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const me = [
    ['path', { d: 'M18 6 6 18', key: '1bl5f8' }],
    ['path', { d: 'm6 6 12 12', key: 'd8bk6v' }],
  ],
  U = k('x', me);
var K = { color: void 0, size: void 0, className: void 0, style: void 0, attr: void 0 },
  I = j.createContext && j.createContext(K),
  pe = ['attr', 'size', 'title'];
function xe(e, r) {
  if (e == null) return {};
  var t = be(e, r),
    n,
    s;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (s = 0; s < i.length; s++)
      ((n = i[s]),
        !(r.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (t[n] = e[n]));
  }
  return t;
}
function be(e, r) {
  if (e == null) return {};
  var t = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (r.indexOf(n) >= 0) continue;
      t[n] = e[n];
    }
  return t;
}
function z() {
  return (
    (z = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var r = 1; r < arguments.length; r++) {
            var t = arguments[r];
            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          }
          return e;
        }),
    z.apply(this, arguments)
  );
}
function M(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (r &&
      (n = n.filter(function (s) {
        return Object.getOwnPropertyDescriptor(e, s).enumerable;
      })),
      t.push.apply(t, n));
  }
  return t;
}
function E(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2
      ? M(Object(t), !0).forEach(function (n) {
          ge(e, n, t[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
        : M(Object(t)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
          });
  }
  return e;
}
function ge(e, r, t) {
  return (
    (r = ve(r)),
    r in e
      ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 })
      : (e[r] = t),
    e
  );
}
function ve(e) {
  var r = ye(e, 'string');
  return typeof r == 'symbol' ? r : r + '';
}
function ye(e, r) {
  if (typeof e != 'object' || !e) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var n = t.call(e, r);
    if (typeof n != 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (r === 'string' ? String : Number)(e);
}
function Q(e) {
  return e && e.map((r, t) => j.createElement(r.tag, E({ key: t }, r.attr), Q(r.child)));
}
function we(e) {
  return r => j.createElement(je, z({ attr: E({}, e.attr) }, r), Q(e.child));
}
function je(e) {
  var r = t => {
    var { attr: n, size: s, title: i } = e,
      u = xe(e, pe),
      a = s || t.size || '1em',
      d;
    return (
      t.className && (d = t.className),
      e.className && (d = (d ? d + ' ' : '') + e.className),
      j.createElement(
        'svg',
        z({ stroke: 'currentColor', fill: 'currentColor', strokeWidth: '0' }, t.attr, n, u, {
          className: d,
          style: E(E({ color: e.color || t.color }, t.style), e.style),
          height: a,
          width: a,
          xmlns: 'http://www.w3.org/2000/svg',
        }),
        i && j.createElement('title', null, i),
        e.children
      )
    );
  };
  return I !== void 0 ? j.createElement(I.Consumer, null, t => r(t)) : r(K);
}
function $(e) {
  return we({
    attr: { viewBox: '0 0 496 512' },
    child: [
      {
        tag: 'path',
        attr: {
          d: 'M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z',
        },
        child: [],
      },
    ],
  })(e);
}
const L = e => {
    let r;
    const t = new Set(),
      n = (c, f) => {
        const x = typeof c == 'function' ? c(r) : c;
        if (!Object.is(x, r)) {
          const g = r;
          ((r = (f ?? (typeof x != 'object' || x === null)) ? x : Object.assign({}, r, x)),
            t.forEach(b => b(r, g)));
        }
      },
      s = () => r,
      a = {
        setState: n,
        getState: s,
        getInitialState: () => d,
        subscribe: c => (t.add(c), () => t.delete(c)),
      },
      d = (r = e(n, s, a));
    return a;
  },
  Se = e => (e ? L(e) : L),
  ke = e => e;
function Ne(e, r = ke) {
  const t = j.useSyncExternalStore(
    e.subscribe,
    () => r(e.getState()),
    () => r(e.getInitialState())
  );
  return (j.useDebugValue(t), t);
}
const Ce = e => {
    const r = Se(e),
      t = n => Ne(r, n);
    return (Object.assign(t, r), t);
  },
  ze = e => Ce;
function Ee(e, r) {
  let t;
  try {
    t = e();
  } catch {
    return;
  }
  return {
    getItem: s => {
      var i;
      const u = d => (d === null ? null : JSON.parse(d, void 0)),
        a = (i = t.getItem(s)) != null ? i : null;
      return a instanceof Promise ? a.then(u) : u(a);
    },
    setItem: (s, i) => t.setItem(s, JSON.stringify(i, void 0)),
    removeItem: s => t.removeItem(s),
  };
}
const R = e => r => {
    try {
      const t = e(r);
      return t instanceof Promise
        ? t
        : {
            then(n) {
              return R(n)(t);
            },
            catch(n) {
              return this;
            },
          };
    } catch (t) {
      return {
        then(n) {
          return this;
        },
        catch(n) {
          return R(n)(t);
        },
      };
    }
  },
  Oe = (e, r) => (t, n, s) => {
    let i = {
        storage: Ee(() => localStorage),
        partialize: m => m,
        version: 0,
        merge: (m, w) => ({ ...w, ...m }),
        ...r,
      },
      u = !1;
    const a = new Set(),
      d = new Set();
    let c = i.storage;
    if (!c)
      return e(
        (...m) => {
          (console.warn(
            `[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`
          ),
            t(...m));
        },
        n,
        s
      );
    const f = () => {
        const m = i.partialize({ ...n() });
        return c.setItem(i.name, { state: m, version: i.version });
      },
      x = s.setState;
    s.setState = (m, w) => {
      (x(m, w), f());
    };
    const g = e(
      (...m) => {
        (t(...m), f());
      },
      n,
      s
    );
    s.getInitialState = () => g;
    let b;
    const v = () => {
      var m, w;
      if (!c) return;
      ((u = !1),
        a.forEach(h => {
          var y;
          return h((y = n()) != null ? y : g);
        }));
      const p =
        ((w = i.onRehydrateStorage) == null ? void 0 : w.call(i, (m = n()) != null ? m : g)) ||
        void 0;
      return R(c.getItem.bind(c))(i.name)
        .then(h => {
          if (h)
            if (typeof h.version == 'number' && h.version !== i.version) {
              if (i.migrate) {
                const y = i.migrate(h.state, h.version);
                return y instanceof Promise ? y.then(N => [!0, N]) : [!0, y];
              }
              console.error(
                "State loaded from storage couldn't be migrated since no migrate function was provided"
              );
            } else return [!1, h.state];
          return [!1, void 0];
        })
        .then(h => {
          var y;
          const [N, re] = h;
          if (((b = i.merge(re, (y = n()) != null ? y : g)), t(b, !0), N)) return f();
        })
        .then(() => {
          (p?.(b, void 0), (b = n()), (u = !0), d.forEach(h => h(b)));
        })
        .catch(h => {
          p?.(void 0, h);
        });
    };
    return (
      (s.persist = {
        setOptions: m => {
          ((i = { ...i, ...m }), m.storage && (c = m.storage));
        },
        clearStorage: () => {
          c?.removeItem(i.name);
        },
        getOptions: () => i,
        rehydrate: () => v(),
        hasHydrated: () => u,
        onHydrate: m => (
          a.add(m),
          () => {
            a.delete(m);
          }
        ),
        onFinishHydration: m => (
          d.add(m),
          () => {
            d.delete(m);
          }
        ),
      }),
      i.skipHydration || v(),
      b || g
    );
  },
  Re = Oe,
  Pe = ze()(
    Re(
      (e, r) => ({
        isSearchOpen: !1,
        searchQuery: '',
        searchResults: [],
        recentSearches: [],
        openSearch: () => e({ isSearchOpen: !0 }),
        closeSearch: () => e({ isSearchOpen: !1, searchQuery: '', searchResults: [] }),
        setSearchQuery: t => e({ searchQuery: t }),
        setSearchResults: t => e({ searchResults: t }),
        addRecentSearch: t => {
          const { recentSearches: n } = r(),
            s = t.trim();
          if (s && !n.includes(s)) {
            const i = [s, ...n.slice(0, 4)];
            e({ recentSearches: i });
          }
        },
        clearRecentSearches: () => e({ recentSearches: [] }),
      }),
      { name: 'search-storage', partialize: e => ({ recentSearches: e.recentSearches }) }
    )
  );
function T({ posts: e, isMobile: r = !1 }) {
  const {
      isSearchOpen: t,
      searchQuery: n,
      searchResults: s,
      recentSearches: i,
      openSearch: u,
      closeSearch: a,
      setSearchQuery: d,
      setSearchResults: c,
      addRecentSearch: f,
      clearRecentSearches: x,
    } = Pe(),
    g = l.useRef(null),
    b = l.useRef(-1),
    v = l.useMemo(() => (n.trim() ? s : []), [n, s]),
    m = l.useCallback(
      p => {
        (n.trim() && f(n), a(), (window.location.href = `/posts/${p.slug}`));
      },
      [n, f, a]
    ),
    w = l.useCallback(
      p => {
        (d(p), setTimeout(() => g.current?.focus(), 50));
      },
      [d]
    );
  return (
    l.useEffect(() => {
      if (!e || !Array.isArray(e)) {
        c([]);
        return;
      }
      if (!n.trim()) {
        c([]);
        return;
      }
      const p = e.filter(h => h && h.title && h.title.toLowerCase().includes(n.toLowerCase()));
      (c(p), (b.current = -1));
    }, [n, e, c]),
    l.useEffect(() => {
      const p = h => {
        if ((h.metaKey || h.ctrlKey) && h.key === 'k')
          (h.preventDefault(), t ? a() : (u(), setTimeout(() => g.current?.focus(), 50)));
        else if (h.key === 'Escape') a();
        else if (t) {
          if (h.key === 'ArrowDown')
            (h.preventDefault(), (b.current = Math.min(b.current + 1, v.length - 1)));
          else if (h.key === 'ArrowUp')
            (h.preventDefault(), (b.current = Math.max(b.current - 1, -1)));
          else if (h.key === 'Enter') {
            h.preventDefault();
            const y = v[b.current];
            b.current >= 0 && y && m(y);
          }
        }
      };
      return (
        document.addEventListener('keydown', p),
        () => document.removeEventListener('keydown', p)
      );
    }, [t, v, u, a, m]),
    l.useEffect(() => {
      t && setTimeout(() => g.current?.focus(), 50);
    }, [t]),
    o.jsxs(o.Fragment, {
      children: [
        o.jsx('button', {
          className: `inline-flex items-center space-x-2 transition ${r ? 'text-white hover:text-indigo-400' : 'text-black dark:text-white hover:text-indigo-500'}`,
          onClick: () => {
            (u(), setTimeout(() => g.current?.focus(), 50));
          },
          'aria-label': 'Search posts',
          title: 'Cmd + K',
          children: o.jsx(fe, { size: 24 }),
        }),
        o.jsx(F, {
          children:
            t &&
            o.jsx(S.div, {
              className:
                'fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md',
              onClick: a,
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              children: o.jsxs(S.div, {
                role: 'dialog',
                'aria-modal': 'true',
                className:
                  'bg-zinc-900 text-white border border-zinc-800 rounded-2xl p-6 w-full max-w-2xl shadow-2xl mt-60',
                onClick: p => p.stopPropagation(),
                initial: { scale: 0.9, opacity: 0 },
                animate: { scale: 1, opacity: 1 },
                exit: { scale: 0.9, opacity: 0 },
                children: [
                  o.jsxs('div', {
                    className: 'flex items-center justify-between mb-4',
                    children: [
                      o.jsx('h2', { className: 'text-sm font-medium', children: 'Search posts' }),
                      o.jsxs('div', {
                        className: 'flex items-center space-x-2 text-xs text-zinc-400',
                        children: [
                          o.jsx('kbd', {
                            className: 'px-2 py-1 bg-zinc-800 rounded',
                            children: 'Cmd+K',
                          }),
                          o.jsx('span', { children: 'to toggle' }),
                        ],
                      }),
                    ],
                  }),
                  o.jsxs('div', {
                    className: 'relative mb-4',
                    children: [
                      o.jsx('input', {
                        ref: g,
                        value: n,
                        onChange: p => d(p.target.value),
                        placeholder: 'Type to search posts...',
                        className:
                          'w-full px-4 py-2 rounded-md bg-zinc-800 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm',
                      }),
                      n &&
                        o.jsx('button', {
                          onClick: () => d(''),
                          className: 'absolute right-3 top-2.5 text-zinc-400 hover:text-white',
                          children: o.jsx(U, { size: 16 }),
                        }),
                    ],
                  }),
                  !n.trim() &&
                    i.length > 0 &&
                    o.jsxs('div', {
                      className: 'mb-4',
                      children: [
                        o.jsxs('div', {
                          className: 'flex items-center justify-between mb-2',
                          children: [
                            o.jsx('h3', {
                              className: 'text-xs font-medium text-zinc-400',
                              children: 'Recent searches',
                            }),
                            o.jsx('button', {
                              onClick: x,
                              className: 'text-xs text-zinc-400 hover:text-white',
                              children: 'Clear',
                            }),
                          ],
                        }),
                        o.jsx('div', {
                          className: 'flex flex-wrap gap-2',
                          children: i.map((p, h) =>
                            o.jsxs(
                              'button',
                              {
                                onClick: () => w(p),
                                className:
                                  'flex items-center space-x-1 px-2 py-1 bg-zinc-800 hover:bg-zinc-700 rounded text-xs transition',
                                children: [
                                  o.jsx(oe, { size: 12, className: 'text-zinc-500' }),
                                  o.jsx('span', { children: p }),
                                ],
                              },
                              h
                            )
                          ),
                        }),
                      ],
                    }),
                  o.jsxs('div', {
                    className: 'max-h-64 overflow-y-auto',
                    children: [
                      n.trim() &&
                        o.jsxs('div', {
                          className: 'text-xs text-zinc-400 mb-2',
                          children: [v.length, ' result', v.length !== 1 ? 's' : ''],
                        }),
                      o.jsx('ul', {
                        className: 'divide-y divide-zinc-800 text-sm',
                        children:
                          n.trim() && v.length === 0
                            ? o.jsxs('li', {
                                className: 'py-4 text-center text-zinc-500',
                                children: ['No posts found for "', n, '"'],
                              })
                            : v.map((p, h) =>
                                o.jsxs(
                                  'button',
                                  {
                                    className: `w-full p-3 cursor-pointer flex items-center gap-3 transition hover:bg-zinc-800 text-left ${h === b.current ? 'bg-zinc-800' : ''}`,
                                    onClick: () => m(p),
                                    children: [
                                      o.jsx(ae, {
                                        size: 16,
                                        className: 'text-zinc-500 flex-shrink-0',
                                      }),
                                      o.jsx('span', { className: 'flex-1', children: p.title }),
                                    ],
                                  },
                                  p.slug
                                )
                              ),
                      }),
                    ],
                  }),
                ],
              }),
            }),
        }),
      ],
    })
  );
}
function _e(e, r, { checkForDefaultPrevented: t = !0 } = {}) {
  return function (s) {
    if ((e?.(s), t === !1 || !s.defaultPrevented)) return r?.(s);
  };
}
function H(e, r) {
  if (typeof e == 'function') return e(r);
  e != null && (e.current = r);
}
function G(...e) {
  return r => {
    let t = !1;
    const n = e.map(s => {
      const i = H(s, r);
      return (!t && typeof i == 'function' && (t = !0), i);
    });
    if (t)
      return () => {
        for (let s = 0; s < n.length; s++) {
          const i = n[s];
          typeof i == 'function' ? i() : H(e[s], null);
        }
      };
  };
}
function q(...e) {
  return l.useCallback(G(...e), e);
}
function Ie(e, r = []) {
  let t = [];
  function n(i, u) {
    const a = l.createContext(u),
      d = t.length;
    t = [...t, u];
    const c = x => {
      const { scope: g, children: b, ...v } = x,
        m = g?.[e]?.[d] || a,
        w = l.useMemo(() => v, Object.values(v));
      return o.jsx(m.Provider, { value: w, children: b });
    };
    c.displayName = i + 'Provider';
    function f(x, g) {
      const b = g?.[e]?.[d] || a,
        v = l.useContext(b);
      if (v) return v;
      if (u !== void 0) return u;
      throw new Error(`\`${x}\` must be used within \`${i}\``);
    }
    return [c, f];
  }
  const s = () => {
    const i = t.map(u => l.createContext(u));
    return function (a) {
      const d = a?.[e] || i;
      return l.useMemo(() => ({ [`__scope${e}`]: { ...a, [e]: d } }), [a, d]);
    };
  };
  return ((s.scopeName = e), [n, Me(s, ...r)]);
}
function Me(...e) {
  const r = e[0];
  if (e.length === 1) return r;
  const t = () => {
    const n = e.map(s => ({ useScope: s(), scopeName: s.scopeName }));
    return function (i) {
      const u = n.reduce((a, { useScope: d, scopeName: c }) => {
        const x = d(i)[`__scope${c}`];
        return { ...a, ...x };
      }, {});
      return l.useMemo(() => ({ [`__scope${r.scopeName}`]: u }), [u]);
    };
  };
  return ((t.scopeName = r.scopeName), t);
}
var V = globalThis?.document ? l.useLayoutEffect : () => {},
  $e = ne[' useInsertionEffect '.trim().toString()] || V;
function Le({ prop: e, defaultProp: r, onChange: t = () => {}, caller: n }) {
  const [s, i, u] = Te({ defaultProp: r, onChange: t }),
    a = e !== void 0,
    d = a ? e : s;
  {
    const f = l.useRef(e !== void 0);
    l.useEffect(() => {
      const x = f.current;
      (x !== a &&
        console.warn(
          `${n} is changing from ${x ? 'controlled' : 'uncontrolled'} to ${a ? 'controlled' : 'uncontrolled'}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
        ),
        (f.current = a));
    }, [a, n]);
  }
  const c = l.useCallback(
    f => {
      if (a) {
        const x = He(f) ? f(e) : f;
        x !== e && u.current?.(x);
      } else i(f);
    },
    [a, e, i, u]
  );
  return [d, c];
}
function Te({ defaultProp: e, onChange: r }) {
  const [t, n] = l.useState(e),
    s = l.useRef(t),
    i = l.useRef(r);
  return (
    $e(() => {
      i.current = r;
    }, [r]),
    l.useEffect(() => {
      s.current !== t && (i.current?.(t), (s.current = t));
    }, [t, s]),
    [t, n, i]
  );
}
function He(e) {
  return typeof e == 'function';
}
function De(e) {
  const r = l.useRef({ value: e, previous: e });
  return l.useMemo(
    () => (
      r.current.value !== e && ((r.current.previous = r.current.value), (r.current.value = e)),
      r.current.previous
    ),
    [e]
  );
}
function Be(e) {
  const [r, t] = l.useState(void 0);
  return (
    V(() => {
      if (e) {
        t({ width: e.offsetWidth, height: e.offsetHeight });
        const n = new ResizeObserver(s => {
          if (!Array.isArray(s) || !s.length) return;
          const i = s[0];
          let u, a;
          if ('borderBoxSize' in i) {
            const d = i.borderBoxSize,
              c = Array.isArray(d) ? d[0] : d;
            ((u = c.inlineSize), (a = c.blockSize));
          } else ((u = e.offsetWidth), (a = e.offsetHeight));
          t({ width: u, height: a });
        });
        return (n.observe(e, { box: 'border-box' }), () => n.unobserve(e));
      } else t(void 0);
    }, [e]),
    r
  );
}
function Ae(e) {
  const r = We(e),
    t = l.forwardRef((n, s) => {
      const { children: i, ...u } = n,
        a = l.Children.toArray(i),
        d = a.find(Ue);
      if (d) {
        const c = d.props.children,
          f = a.map(x =>
            x === d
              ? l.Children.count(c) > 1
                ? l.Children.only(null)
                : l.isValidElement(c)
                  ? c.props.children
                  : null
              : x
          );
        return o.jsx(r, {
          ...u,
          ref: s,
          children: l.isValidElement(c) ? l.cloneElement(c, void 0, f) : null,
        });
      }
      return o.jsx(r, { ...u, ref: s, children: i });
    });
  return ((t.displayName = `${e}.Slot`), t);
}
function We(e) {
  const r = l.forwardRef((t, n) => {
    const { children: s, ...i } = t;
    if (l.isValidElement(s)) {
      const u = Qe(s),
        a = Ke(i, s.props);
      return (s.type !== l.Fragment && (a.ref = n ? G(n, u) : u), l.cloneElement(s, a));
    }
    return l.Children.count(s) > 1 ? l.Children.only(null) : null;
  });
  return ((r.displayName = `${e}.SlotClone`), r);
}
var Fe = Symbol('radix.slottable');
function Ue(e) {
  return (
    l.isValidElement(e) &&
    typeof e.type == 'function' &&
    '__radixId' in e.type &&
    e.type.__radixId === Fe
  );
}
function Ke(e, r) {
  const t = { ...r };
  for (const n in r) {
    const s = e[n],
      i = r[n];
    /^on[A-Z]/.test(n)
      ? s && i
        ? (t[n] = (...a) => {
            const d = i(...a);
            return (s(...a), d);
          })
        : s && (t[n] = s)
      : n === 'style'
        ? (t[n] = { ...s, ...i })
        : n === 'className' && (t[n] = [s, i].filter(Boolean).join(' '));
  }
  return { ...e, ...t };
}
function Qe(e) {
  let r = Object.getOwnPropertyDescriptor(e.props, 'ref')?.get,
    t = r && 'isReactWarning' in r && r.isReactWarning;
  return t
    ? e.ref
    : ((r = Object.getOwnPropertyDescriptor(e, 'ref')?.get),
      (t = r && 'isReactWarning' in r && r.isReactWarning),
      t ? e.props.ref : e.props.ref || e.ref);
}
var Ge = [
    'a',
    'button',
    'div',
    'form',
    'h2',
    'h3',
    'img',
    'input',
    'label',
    'li',
    'nav',
    'ol',
    'p',
    'select',
    'span',
    'svg',
    'ul',
  ],
  Y = Ge.reduce((e, r) => {
    const t = Ae(`Primitive.${r}`),
      n = l.forwardRef((s, i) => {
        const { asChild: u, ...a } = s,
          d = u ? t : r;
        return (
          typeof window < 'u' && (window[Symbol.for('radix-ui')] = !0),
          o.jsx(d, { ...a, ref: i })
        );
      });
    return ((n.displayName = `Primitive.${r}`), { ...e, [r]: n });
  }, {}),
  O = 'Switch',
  [qe, at] = Ie(O),
  [Ve, Ye] = qe(O),
  J = l.forwardRef((e, r) => {
    const {
        __scopeSwitch: t,
        name: n,
        checked: s,
        defaultChecked: i,
        required: u,
        disabled: a,
        value: d = 'on',
        onCheckedChange: c,
        form: f,
        ...x
      } = e,
      [g, b] = l.useState(null),
      v = q(r, y => b(y)),
      m = l.useRef(!1),
      w = g ? f || !!g.closest('form') : !0,
      [p, h] = Le({ prop: s, defaultProp: i ?? !1, onChange: c, caller: O });
    return o.jsxs(Ve, {
      scope: t,
      checked: p,
      disabled: a,
      children: [
        o.jsx(Y.button, {
          type: 'button',
          role: 'switch',
          'aria-checked': p,
          'aria-required': u,
          'data-state': te(p),
          'data-disabled': a ? '' : void 0,
          disabled: a,
          value: d,
          ...x,
          ref: v,
          onClick: _e(e.onClick, y => {
            (h(N => !N),
              w && ((m.current = y.isPropagationStopped()), m.current || y.stopPropagation()));
          }),
        }),
        w &&
          o.jsx(ee, {
            control: g,
            bubbles: !m.current,
            name: n,
            value: d,
            checked: p,
            required: u,
            disabled: a,
            form: f,
            style: { transform: 'translateX(-100%)' },
          }),
      ],
    });
  });
J.displayName = O;
var Z = 'SwitchThumb',
  X = l.forwardRef((e, r) => {
    const { __scopeSwitch: t, ...n } = e,
      s = Ye(Z, t);
    return o.jsx(Y.span, {
      'data-state': te(s.checked),
      'data-disabled': s.disabled ? '' : void 0,
      ...n,
      ref: r,
    });
  });
X.displayName = Z;
var Je = 'SwitchBubbleInput',
  ee = l.forwardRef(({ __scopeSwitch: e, control: r, checked: t, bubbles: n = !0, ...s }, i) => {
    const u = l.useRef(null),
      a = q(u, i),
      d = De(t),
      c = Be(r);
    return (
      l.useEffect(() => {
        const f = u.current;
        if (!f) return;
        const x = window.HTMLInputElement.prototype,
          b = Object.getOwnPropertyDescriptor(x, 'checked').set;
        if (d !== t && b) {
          const v = new Event('click', { bubbles: n });
          (b.call(f, t), f.dispatchEvent(v));
        }
      }, [d, t, n]),
      o.jsx('input', {
        type: 'checkbox',
        'aria-hidden': !0,
        defaultChecked: t,
        ...s,
        tabIndex: -1,
        ref: a,
        style: {
          ...s.style,
          ...c,
          position: 'absolute',
          pointerEvents: 'none',
          opacity: 0,
          margin: 0,
        },
      })
    );
  });
ee.displayName = Je;
function te(e) {
  return e ? 'checked' : 'unchecked';
}
var Ze = J,
  Xe = X;
function D() {
  const [e, r] = l.useState(!1);
  l.useEffect(() => {
    const n = localStorage.getItem('theme'),
      s = window.matchMedia('(prefers-color-scheme: dark)').matches,
      i = n === 'dark' || (!n && s);
    (r(i), document.documentElement.classList.toggle('dark', i));
  }, []);
  const t = n => {
    (r(n),
      document.documentElement.classList.toggle('dark', n),
      localStorage.setItem('theme', n ? 'dark' : 'light'));
  };
  return o.jsxs(Ze, {
    checked: e,
    onCheckedChange: t,
    className:
      'relative w-20 h-10 flex items-center rounded-full bg-white/20 dark:bg-white/10 border border-black/20 dark:border-black/20 backdrop-blur-md shadow-inner cursor-pointer',
    children: [
      o.jsx(_, {
        className: `absolute left-3 top-1/2 -translate-y-1/2 transition-colors duration-300 ${e ? 'opacity-30 text-yellow-200' : 'opacity-100 text-orange-400'}`,
        size: 16,
      }),
      o.jsx(P, {
        className: `absolute right-3 top-1/2 -translate-y-1/2 transition-colors duration-300 ${e ? 'opacity-100 text-yellow-200' : 'opacity-30 text-zinc-900'}`,
        size: 16,
      }),
      o.jsx(Xe, {
        asChild: !0,
        children: o.jsx(S.div, {
          className: `absolute w-8 h-8 rounded-full flex items-center justify-center shadow-lg border border-white/20 transition-colors duration-500 ${e ? 'bg-gray-950' : 'bg-indigo-600'}`,
          layout: !0,
          whileTap: { scale: 0.9 },
          transition: { type: 'spring', stiffness: 250, damping: 20 },
          animate: { x: e ? 42 : 2, rotate: e ? 360 : 0 },
          children: o.jsx(
            S.div,
            {
              initial: { scale: 0 },
              animate: { scale: 1 },
              exit: { scale: 0 },
              children: e
                ? o.jsx(P, { size: 16, className: 'text-white' })
                : o.jsx(_, { size: 16, className: 'text-white' }),
            },
            e ? 'moon' : 'sun'
          ),
        }),
      }),
    ],
  });
}
function et() {
  return o.jsx(S.a, {
    href: '/',
    className: 'text-lg font-bold text-black dark:text-white',
    whileHover: { scale: 1.1, rotate: 5 },
    transition: { type: 'spring', stiffness: 200, damping: 10 },
    style: { fontFamily: "'M PLUS Rounded 1c', sans-serif" },
    children: 'Tomy Maritano',
  });
}
const C = { en: 'English', es: 'Español' },
  tt = 'en';
function B(e, r) {
  const t = e.split('/').filter(Boolean),
    n = e.endsWith('/') && e !== '/';
  (t[0] && t[0] in C && t.shift(), r !== tt && t.unshift(r));
  let s = '/' + t.join('/');
  return (n && s !== '/' && (s += '/'), s);
}
function A({ currentLang: e, currentPath: r, isMobile: t = !1 }) {
  const [n, s] = l.useState(!1);
  return t
    ? o.jsxs('div', {
        className: 'flex flex-col items-center space-y-3',
        children: [
          o.jsx('span', {
            className: 'text-sm font-medium text-white/70 uppercase tracking-wider',
            children: 'Idioma / Language',
          }),
          o.jsx('div', {
            className: 'flex space-x-4',
            children: Object.entries(C).map(([i, u]) =>
              o.jsx(
                'a',
                {
                  href: B(r, i),
                  className: `px-4 py-2 rounded-lg text-sm font-medium transition-all ${e === i ? 'bg-indigo-500 text-white shadow-lg' : 'bg-white/10 text-white hover:bg-white/20'}`,
                  children: u,
                },
                i
              )
            ),
          }),
        ],
      })
    : o.jsxs('div', {
        className: 'relative',
        children: [
          o.jsxs('button', {
            onClick: () => s(!n),
            className:
              'flex items-center space-x-2 px-3 py-2 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors',
            children: [
              o.jsx('span', {
                className: 'text-sm font-medium text-zinc-700 dark:text-zinc-300',
                children: C[e],
              }),
              o.jsx('svg', {
                className: `w-4 h-4 text-zinc-500 transition-transform ${n ? 'rotate-180' : ''}`,
                fill: 'none',
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                strokeWidth: '2',
                viewBox: '0 0 24 24',
                stroke: 'currentColor',
                children: o.jsx('path', { d: 'M19 9l-7 7-7-7' }),
              }),
            ],
          }),
          n &&
            o.jsxs(o.Fragment, {
              children: [
                o.jsx('div', {
                  className: 'fixed inset-0 z-10',
                  onClick: () => s(!1),
                  role: 'button',
                  tabIndex: 0,
                  onKeyDown: i => {
                    i.key === 'Escape' && s(!1);
                  },
                  'aria-label': 'Close language menu',
                }),
                o.jsx('div', {
                  className:
                    'absolute right-0 mt-2 w-40 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg shadow-lg z-50',
                  children: o.jsx('div', {
                    className: 'py-1',
                    children: Object.entries(C).map(([i, u]) =>
                      o.jsx(
                        'a',
                        {
                          href: B(r, i),
                          className: `block px-4 py-2 text-sm hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors ${e === i ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20' : 'text-zinc-700 dark:text-zinc-300'}`,
                          onClick: () => s(!1),
                          children: o.jsxs('div', {
                            className: 'flex items-center justify-between',
                            children: [
                              o.jsx('span', { children: u }),
                              e === i &&
                                o.jsx('svg', {
                                  className: 'w-4 h-4',
                                  fill: 'currentColor',
                                  viewBox: '0 0 20 20',
                                  children: o.jsx('path', {
                                    fillRule: 'evenodd',
                                    d: 'M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z',
                                    clipRule: 'evenodd',
                                  }),
                                }),
                            ],
                          }),
                        },
                        i
                      )
                    ),
                  }),
                }),
              ],
            }),
        ],
      });
}
const W = [{ href: '/', label: '' }];
function ct({ posts: e, currentLang: r = 'en', currentPath: t = '/' }) {
  const [n, s] = l.useState(!1),
    [i, u] = l.useState(!1),
    [a, d] = l.useState(0);
  return (
    l.useEffect(() => {
      const c = () => {
        const f = window.scrollY;
        (u(f > a && f > 100), d(f));
      };
      return (
        window.addEventListener('scroll', c, { passive: !0 }),
        () => window.removeEventListener('scroll', c)
      );
    }, [a]),
    l.useEffect(() => {
      const c = () => {
        window.innerWidth >= 768 && s(!1);
      };
      return (window.addEventListener('resize', c), () => window.removeEventListener('resize', c));
    }, []),
    o.jsxs(o.Fragment, {
      children: [
        o.jsx(S.header, {
          className:
            'fixed top-0 left-0 right-0 z-50 h-16 backdrop-blur-xl bg-white/20 dark:bg-black/20 border-b border-white/10 dark:border-white/10',
          animate: { y: i ? '-100%' : '0%' },
          transition: { type: 'spring', stiffness: 200, damping: 20 },
          children: o.jsxs('div', {
            className: 'max-w-3xl mx-auto h-full px-4 sm:px-6 flex justify-between items-center',
            children: [
              o.jsx(et, {}),
              o.jsx('nav', {
                className: 'hidden md:flex flex-1 justify-center space-x-8 text-md font-medium',
                children: W.map(({ href: c, label: f }) =>
                  o.jsxs(
                    'a',
                    {
                      href: c,
                      className: 'relative text-black dark:text-white group transition',
                      children: [
                        f,
                        o.jsx('span', {
                          className:
                            'absolute left-0 -bottom-1 h-[2px] w-0 bg-indigo-500 transition-all duration-200 group-hover:w-full',
                        }),
                      ],
                    },
                    c
                  )
                ),
              }),
              o.jsxs('div', {
                className: 'hidden md:flex items-center space-x-4',
                children: [
                  o.jsx('a', {
                    href: 'https://github.com/tu-usuario',
                    target: '_blank',
                    rel: 'noopener noreferrer',
                    className: 'p-2 text-black dark:text-white hover:text-indigo-500 transition',
                    'aria-label': 'GitHub',
                    children: o.jsx($, { size: 24 }),
                  }),
                  o.jsx(T, { posts: e.map(c => ({ title: c.data.title, slug: c.slug })) }),
                  o.jsx(A, { currentLang: r, currentPath: t }),
                  o.jsx(D, {}),
                ],
              }),
              o.jsx('button', {
                className: 'md:hidden p-2 text-black dark:text-white',
                onClick: () => s(!n),
                'aria-label': n ? 'Close menu' : 'Open menu',
                children: n ? o.jsx(U, { size: 24 }) : o.jsx(le, { size: 24 }),
              }),
            ],
          }),
        }),
        o.jsx(F, {
          children:
            n &&
            o.jsx(S.div, {
              className:
                'fixed inset-0 z-40 bg-black/70 dark:bg-black/80 backdrop-blur-xl flex items-center justify-center p-6',
              onClick: () => s(!1),
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              children: o.jsxs(S.nav, {
                className: 'flex flex-col items-center space-y-8',
                onClick: c => c.stopPropagation(),
                initial: { y: 40, opacity: 0 },
                animate: { y: 0, opacity: 1 },
                exit: { y: 40, opacity: 0 },
                transition: { type: 'spring', stiffness: 250, damping: 24 },
                children: [
                  W.map(({ href: c, label: f }) =>
                    o.jsx(
                      'a',
                      {
                        href: c,
                        className:
                          'text-2xl font-medium text-white hover:text-indigo-500 relative after:block after:h-[2px] after:w-0 after:bg-indigo-500 after:transition-all hover:after:w-full',
                        onClick: () => s(!1),
                        children: f,
                      },
                      c
                    )
                  ),
                  o.jsx('div', { className: 'w-24 border-t border-white/20' }),
                  o.jsxs('div', {
                    className: 'flex flex-col items-center space-y-6 mt-6',
                    children: [
                      o.jsx('a', {
                        href: 'https://github.com/tu-usuario',
                        target: '_blank',
                        rel: 'noopener noreferrer',
                        className: 'p-2 text-white hover:text-indigo-400 transition',
                        'aria-label': 'GitHub',
                        children: o.jsx($, { size: 24 }),
                      }),
                      o.jsx(T, {
                        posts: e.map(c => ({ title: c.data.title, slug: c.slug })),
                        isMobile: !0,
                      }),
                      o.jsx(A, { currentLang: r, currentPath: t, isMobile: !0 }),
                      o.jsx(D, {}),
                    ],
                  }),
                ],
              }),
            }),
        }),
      ],
    })
  );
}
export { ct as default };
