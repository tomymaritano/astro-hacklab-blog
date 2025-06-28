import { j as i } from './jsx-runtime.D_zvdyIk.js';
import { R as g, r as a, a as X } from './index.DQLiH3RP.js';
import { c as y, A as T, m as b } from './proxy.BfBJbiZp.js';
import './index.D__klQuC.js';
import './index.CKz0Jdri.js';
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Q = [
    ['path', { d: 'M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z', key: '1rqfz7' }],
    ['path', { d: 'M14 2v4a2 2 0 0 0 2 2h4', key: 'tnqrlb' }],
    ['path', { d: 'M10 9H8', key: 'b1mrlr' }],
    ['path', { d: 'M16 13H8', key: 't4e002' }],
    ['path', { d: 'M16 17H8', key: 'z1uh3a' }],
  ],
  J = y('file-text', Q);
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ee = [
    ['path', { d: 'M4 12h16', key: '1lakjw' }],
    ['path', { d: 'M4 18h16', key: '19g7jn' }],
    ['path', { d: 'M4 6h16', key: '1o0s65' }],
  ],
  te = y('menu', ee);
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const re = [['path', { d: 'M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z', key: 'a7tn18' }]],
  E = y('moon', re);
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ne = [
    ['path', { d: 'm21 21-4.34-4.34', key: '14j7rj' }],
    ['circle', { cx: '11', cy: '11', r: '8', key: '4ej97u' }],
  ],
  oe = y('search', ne);
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ie = [
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
  P = y('sun', ie);
/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const se = [
    ['path', { d: 'M18 6 6 18', key: '1bl5f8' }],
    ['path', { d: 'm6 6 12 12', key: 'd8bk6v' }],
  ],
  ae = y('x', se);
var A = { color: void 0, size: void 0, className: void 0, style: void 0, attr: void 0 },
  O = g.createContext && g.createContext(A),
  ce = ['attr', 'size', 'title'];
function le(e, r) {
  if (e == null) return {};
  var t = ue(e, r),
    n,
    o;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (o = 0; o < s.length; o++)
      ((n = s[o]),
        !(r.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (t[n] = e[n]));
  }
  return t;
}
function ue(e, r) {
  if (e == null) return {};
  var t = {};
  for (var n in e)
    if (Object.prototype.hasOwnProperty.call(e, n)) {
      if (r.indexOf(n) >= 0) continue;
      t[n] = e[n];
    }
  return t;
}
function S() {
  return (
    (S = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var r = 1; r < arguments.length; r++) {
            var t = arguments[r];
            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          }
          return e;
        }),
    S.apply(this, arguments)
  );
}
function _(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    (r &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      t.push.apply(t, n));
  }
  return t;
}
function z(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2
      ? _(Object(t), !0).forEach(function (n) {
          de(e, n, t[n]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
        : _(Object(t)).forEach(function (n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
          });
  }
  return e;
}
function de(e, r, t) {
  return (
    (r = fe(r)),
    r in e
      ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 })
      : (e[r] = t),
    e
  );
}
function fe(e) {
  var r = pe(e, 'string');
  return typeof r == 'symbol' ? r : r + '';
}
function pe(e, r) {
  if (typeof e != 'object' || !e) return e;
  var t = e[Symbol.toPrimitive];
  if (t !== void 0) {
    var n = t.call(e, r);
    if (typeof n != 'object') return n;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (r === 'string' ? String : Number)(e);
}
function B(e) {
  return e && e.map((r, t) => g.createElement(r.tag, z({ key: t }, r.attr), B(r.child)));
}
function he(e) {
  return r => g.createElement(me, S({ attr: z({}, e.attr) }, r), B(e.child));
}
function me(e) {
  var r = t => {
    var { attr: n, size: o, title: s } = e,
      d = le(e, ce),
      c = o || t.size || '1em',
      f;
    return (
      t.className && (f = t.className),
      e.className && (f = (f ? f + ' ' : '') + e.className),
      g.createElement(
        'svg',
        S({ stroke: 'currentColor', fill: 'currentColor', strokeWidth: '0' }, t.attr, n, d, {
          className: f,
          style: z(z({ color: e.color || t.color }, t.style), e.style),
          height: c,
          width: c,
          xmlns: 'http://www.w3.org/2000/svg',
        }),
        s && g.createElement('title', null, s),
        e.children
      )
    );
  };
  return O !== void 0 ? g.createElement(O.Consumer, null, t => r(t)) : r(A);
}
function R(e) {
  return he({
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
function M({ posts: e }) {
  const [r, t] = a.useState(!1),
    [n, o] = a.useState(''),
    [s, d] = a.useState(e || []),
    [c, f] = a.useState(-1),
    l = a.useRef(null);
  return (
    a.useEffect(() => {
      if (!e || !Array.isArray(e)) {
        d([]);
        return;
      }
      (d(e.filter(u => u && u.title && u.title.toLowerCase().includes(n.toLowerCase()))), f(-1));
    }, [n, e]),
    a.useEffect(() => {
      const u = p => {
        (p.metaKey || p.ctrlKey) && p.key === 'k'
          ? (p.preventDefault(), t(h => !h), setTimeout(() => l.current?.focus(), 50))
          : p.key === 'Escape'
            ? t(!1)
            : r &&
              (p.key === 'ArrowDown' && f(h => (h + 1) % s.length),
              p.key === 'ArrowUp' && f(h => (h - 1 + s.length) % s.length),
              p.key === 'Enter' &&
                c >= 0 &&
                s[c] &&
                (window.location.href = `/posts/${s[c].slug}`));
      };
      return (
        document.addEventListener('keydown', u),
        () => document.removeEventListener('keydown', u)
      );
    }, [r, s, c]),
    i.jsxs(i.Fragment, {
      children: [
        i.jsx('button', {
          className:
            'inline-flex items-center space-x-2 text-black dark:text-white hover:text-indigo-500 transition',
          onClick: () => {
            (t(!0), setTimeout(() => l.current?.focus(), 50));
          },
          'aria-label': 'Search posts',
          title: 'Cmd + K',
          children: i.jsx(oe, { size: 24 }),
        }),
        i.jsx(T, {
          children:
            r &&
            i.jsx(b.div, {
              className:
                'fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md',
              onClick: () => t(!1),
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              children: i.jsxs(b.div, {
                role: 'dialog',
                'aria-modal': 'true',
                className:
                  'bg-zinc-900 text-white border border-zinc-800 rounded-2xl p-6 w-full max-w-2xl shadow-2xl mt-60',
                onClick: u => u.stopPropagation(),
                initial: { scale: 0.9, opacity: 0 },
                animate: { scale: 1, opacity: 1 },
                exit: { scale: 0.9, opacity: 0 },
                children: [
                  i.jsx('h2', {
                    className: 'text-sm font-medium mb-4',
                    children: 'Search posts (Cmd+K)',
                  }),
                  i.jsx('input', {
                    ref: l,
                    value: n,
                    onChange: u => o(u.target.value),
                    placeholder: 'Type to search posts...',
                    className:
                      'w-full px-4 py-2 rounded-md bg-zinc-800 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm mb-4',
                  }),
                  i.jsx('ul', {
                    className: 'max-h-64 overflow-y-auto divide-y divide-zinc-800 text-sm',
                    children:
                      s.length === 0
                        ? i.jsx('li', {
                            className: 'py-2 text-center text-zinc-500',
                            children: 'No results',
                          })
                        : s.map((u, p) =>
                            i.jsxs(
                              'li',
                              {
                                className: `p-2 cursor-pointer flex items-center gap-2 transition ${p === c ? 'bg-zinc-800' : ''}`,
                                onClick: () => (window.location.href = `/posts/${u.slug}`),
                                children: [
                                  i.jsx(J, { size: 14, className: 'text-zinc-500' }),
                                  u.title,
                                ],
                              },
                              u.slug
                            )
                          ),
                  }),
                ],
              }),
            }),
        }),
      ],
    })
  );
}
function xe(e, r, { checkForDefaultPrevented: t = !0 } = {}) {
  return function (o) {
    if ((e?.(o), t === !1 || !o.defaultPrevented)) return r?.(o);
  };
}
function L(e, r) {
  if (typeof e == 'function') return e(r);
  e != null && (e.current = r);
}
function H(...e) {
  return r => {
    let t = !1;
    const n = e.map(o => {
      const s = L(o, r);
      return (!t && typeof s == 'function' && (t = !0), s);
    });
    if (t)
      return () => {
        for (let o = 0; o < n.length; o++) {
          const s = n[o];
          typeof s == 'function' ? s() : L(e[o], null);
        }
      };
  };
}
function D(...e) {
  return a.useCallback(H(...e), e);
}
function be(e, r = []) {
  let t = [];
  function n(s, d) {
    const c = a.createContext(d),
      f = t.length;
    t = [...t, d];
    const l = p => {
      const { scope: h, children: m, ...x } = p,
        v = h?.[e]?.[f] || c,
        w = a.useMemo(() => x, Object.values(x));
      return i.jsx(v.Provider, { value: w, children: m });
    };
    l.displayName = s + 'Provider';
    function u(p, h) {
      const m = h?.[e]?.[f] || c,
        x = a.useContext(m);
      if (x) return x;
      if (d !== void 0) return d;
      throw new Error(`\`${p}\` must be used within \`${s}\``);
    }
    return [l, u];
  }
  const o = () => {
    const s = t.map(d => a.createContext(d));
    return function (c) {
      const f = c?.[e] || s;
      return a.useMemo(() => ({ [`__scope${e}`]: { ...c, [e]: f } }), [c, f]);
    };
  };
  return ((o.scopeName = e), [n, ge(o, ...r)]);
}
function ge(...e) {
  const r = e[0];
  if (e.length === 1) return r;
  const t = () => {
    const n = e.map(o => ({ useScope: o(), scopeName: o.scopeName }));
    return function (s) {
      const d = n.reduce((c, { useScope: f, scopeName: l }) => {
        const p = f(s)[`__scope${l}`];
        return { ...c, ...p };
      }, {});
      return a.useMemo(() => ({ [`__scope${r.scopeName}`]: d }), [d]);
    };
  };
  return ((t.scopeName = r.scopeName), t);
}
var W = globalThis?.document ? a.useLayoutEffect : () => {},
  ye = X[' useInsertionEffect '.trim().toString()] || W;
function ve({ prop: e, defaultProp: r, onChange: t = () => {}, caller: n }) {
  const [o, s, d] = we({ defaultProp: r, onChange: t }),
    c = e !== void 0,
    f = c ? e : o;
  {
    const u = a.useRef(e !== void 0);
    a.useEffect(() => {
      const p = u.current;
      (p !== c &&
        console.warn(
          `${n} is changing from ${p ? 'controlled' : 'uncontrolled'} to ${c ? 'controlled' : 'uncontrolled'}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
        ),
        (u.current = c));
    }, [c, n]);
  }
  const l = a.useCallback(
    u => {
      if (c) {
        const p = je(u) ? u(e) : u;
        p !== e && d.current?.(p);
      } else s(u);
    },
    [c, e, s, d]
  );
  return [f, l];
}
function we({ defaultProp: e, onChange: r }) {
  const [t, n] = a.useState(e),
    o = a.useRef(t),
    s = a.useRef(r);
  return (
    ye(() => {
      s.current = r;
    }, [r]),
    a.useEffect(() => {
      o.current !== t && (s.current?.(t), (o.current = t));
    }, [t, o]),
    [t, n, s]
  );
}
function je(e) {
  return typeof e == 'function';
}
function ke(e) {
  const r = a.useRef({ value: e, previous: e });
  return a.useMemo(
    () => (
      r.current.value !== e && ((r.current.previous = r.current.value), (r.current.value = e)),
      r.current.previous
    ),
    [e]
  );
}
function Se(e) {
  const [r, t] = a.useState(void 0);
  return (
    W(() => {
      if (e) {
        t({ width: e.offsetWidth, height: e.offsetHeight });
        const n = new ResizeObserver(o => {
          if (!Array.isArray(o) || !o.length) return;
          const s = o[0];
          let d, c;
          if ('borderBoxSize' in s) {
            const f = s.borderBoxSize,
              l = Array.isArray(f) ? f[0] : f;
            ((d = l.inlineSize), (c = l.blockSize));
          } else ((d = e.offsetWidth), (c = e.offsetHeight));
          t({ width: d, height: c });
        });
        return (n.observe(e, { box: 'border-box' }), () => n.unobserve(e));
      } else t(void 0);
    }, [e]),
    r
  );
}
function ze(e) {
  const r = Ce(e),
    t = a.forwardRef((n, o) => {
      const { children: s, ...d } = n,
        c = a.Children.toArray(s),
        f = c.find(Ee);
      if (f) {
        const l = f.props.children,
          u = c.map(p =>
            p === f
              ? a.Children.count(l) > 1
                ? a.Children.only(null)
                : a.isValidElement(l)
                  ? l.props.children
                  : null
              : p
          );
        return i.jsx(r, {
          ...d,
          ref: o,
          children: a.isValidElement(l) ? a.cloneElement(l, void 0, u) : null,
        });
      }
      return i.jsx(r, { ...d, ref: o, children: s });
    });
  return ((t.displayName = `${e}.Slot`), t);
}
function Ce(e) {
  const r = a.forwardRef((t, n) => {
    const { children: o, ...s } = t;
    if (a.isValidElement(o)) {
      const d = Oe(o),
        c = Pe(s, o.props);
      return (o.type !== a.Fragment && (c.ref = n ? H(n, d) : d), a.cloneElement(o, c));
    }
    return a.Children.count(o) > 1 ? a.Children.only(null) : null;
  });
  return ((r.displayName = `${e}.SlotClone`), r);
}
var Ne = Symbol('radix.slottable');
function Ee(e) {
  return (
    a.isValidElement(e) &&
    typeof e.type == 'function' &&
    '__radixId' in e.type &&
    e.type.__radixId === Ne
  );
}
function Pe(e, r) {
  const t = { ...r };
  for (const n in r) {
    const o = e[n],
      s = r[n];
    /^on[A-Z]/.test(n)
      ? o && s
        ? (t[n] = (...c) => {
            const f = s(...c);
            return (o(...c), f);
          })
        : o && (t[n] = o)
      : n === 'style'
        ? (t[n] = { ...o, ...s })
        : n === 'className' && (t[n] = [o, s].filter(Boolean).join(' '));
  }
  return { ...e, ...t };
}
function Oe(e) {
  let r = Object.getOwnPropertyDescriptor(e.props, 'ref')?.get,
    t = r && 'isReactWarning' in r && r.isReactWarning;
  return t
    ? e.ref
    : ((r = Object.getOwnPropertyDescriptor(e, 'ref')?.get),
      (t = r && 'isReactWarning' in r && r.isReactWarning),
      t ? e.props.ref : e.props.ref || e.ref);
}
var _e = [
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
  F = _e.reduce((e, r) => {
    const t = ze(`Primitive.${r}`),
      n = a.forwardRef((o, s) => {
        const { asChild: d, ...c } = o,
          f = d ? t : r;
        return (
          typeof window < 'u' && (window[Symbol.for('radix-ui')] = !0),
          i.jsx(f, { ...c, ref: s })
        );
      });
    return ((n.displayName = `Primitive.${r}`), { ...e, [r]: n });
  }, {}),
  C = 'Switch',
  [Re, Ke] = be(C),
  [Me, Le] = Re(C),
  U = a.forwardRef((e, r) => {
    const {
        __scopeSwitch: t,
        name: n,
        checked: o,
        defaultChecked: s,
        required: d,
        disabled: c,
        value: f = 'on',
        onCheckedChange: l,
        form: u,
        ...p
      } = e,
      [h, m] = a.useState(null),
      x = D(r, k => m(k)),
      v = a.useRef(!1),
      w = h ? u || !!h.closest('form') : !0,
      [j, Y] = ve({ prop: o, defaultProp: s ?? !1, onChange: l, caller: C });
    return i.jsxs(Me, {
      scope: t,
      checked: j,
      disabled: c,
      children: [
        i.jsx(F.button, {
          type: 'button',
          role: 'switch',
          'aria-checked': j,
          'aria-required': d,
          'data-state': G(j),
          'data-disabled': c ? '' : void 0,
          disabled: c,
          value: f,
          ...p,
          ref: x,
          onClick: xe(e.onClick, k => {
            (Y(Z => !Z),
              w && ((v.current = k.isPropagationStopped()), v.current || k.stopPropagation()));
          }),
        }),
        w &&
          i.jsx(K, {
            control: h,
            bubbles: !v.current,
            name: n,
            value: f,
            checked: j,
            required: d,
            disabled: c,
            form: u,
            style: { transform: 'translateX(-100%)' },
          }),
      ],
    });
  });
U.displayName = C;
var V = 'SwitchThumb',
  q = a.forwardRef((e, r) => {
    const { __scopeSwitch: t, ...n } = e,
      o = Le(V, t);
    return i.jsx(F.span, {
      'data-state': G(o.checked),
      'data-disabled': o.disabled ? '' : void 0,
      ...n,
      ref: r,
    });
  });
q.displayName = V;
var $e = 'SwitchBubbleInput',
  K = a.forwardRef(({ __scopeSwitch: e, control: r, checked: t, bubbles: n = !0, ...o }, s) => {
    const d = a.useRef(null),
      c = D(d, s),
      f = ke(t),
      l = Se(r);
    return (
      a.useEffect(() => {
        const u = d.current;
        if (!u) return;
        const p = window.HTMLInputElement.prototype,
          m = Object.getOwnPropertyDescriptor(p, 'checked').set;
        if (f !== t && m) {
          const x = new Event('click', { bubbles: n });
          (m.call(u, t), u.dispatchEvent(x));
        }
      }, [f, t, n]),
      i.jsx('input', {
        type: 'checkbox',
        'aria-hidden': !0,
        defaultChecked: t,
        ...o,
        tabIndex: -1,
        ref: c,
        style: {
          ...o.style,
          ...l,
          position: 'absolute',
          pointerEvents: 'none',
          opacity: 0,
          margin: 0,
        },
      })
    );
  });
K.displayName = $e;
function G(e) {
  return e ? 'checked' : 'unchecked';
}
var Ie = U,
  Te = q;
function $() {
  const [e, r] = a.useState(!1);
  a.useEffect(() => {
    const n = localStorage.getItem('theme'),
      o = window.matchMedia('(prefers-color-scheme: dark)').matches,
      s = n === 'dark' || (!n && o);
    (r(s), document.documentElement.classList.toggle('dark', s));
  }, []);
  const t = n => {
    (r(n),
      document.documentElement.classList.toggle('dark', n),
      localStorage.setItem('theme', n ? 'dark' : 'light'));
  };
  return i.jsxs(Ie, {
    checked: e,
    onCheckedChange: t,
    className:
      'relative w-20 h-10 flex items-center rounded-full bg-white/20 dark:bg-white/10 border border-black/20 dark:border-black/20 backdrop-blur-md shadow-inner cursor-pointer',
    children: [
      i.jsx(P, {
        className: `absolute left-3 top-1/2 -translate-y-1/2 transition-colors duration-300 ${e ? 'opacity-30 text-yellow-200' : 'opacity-100 text-orange-400'}`,
        size: 16,
      }),
      i.jsx(E, {
        className: `absolute right-3 top-1/2 -translate-y-1/2 transition-colors duration-300 ${e ? 'opacity-100 text-yellow-200' : 'opacity-30 text-zinc-900'}`,
        size: 16,
      }),
      i.jsx(Te, {
        asChild: !0,
        children: i.jsx(b.div, {
          className: `absolute w-8 h-8 rounded-full flex items-center justify-center shadow-lg border border-white/20 transition-colors duration-500 ${e ? 'bg-gray-950' : 'bg-indigo-600'}`,
          layout: !0,
          whileTap: { scale: 0.9 },
          transition: { type: 'spring', stiffness: 250, damping: 20 },
          animate: { x: e ? 42 : 2, rotate: e ? 360 : 0 },
          children: i.jsx(
            b.div,
            {
              initial: { scale: 0 },
              animate: { scale: 1 },
              exit: { scale: 0 },
              children: e
                ? i.jsx(E, { size: 16, className: 'text-white' })
                : i.jsx(P, { size: 16, className: 'text-white' }),
            },
            e ? 'moon' : 'sun'
          ),
        }),
      }),
    ],
  });
}
function Ae() {
  return i.jsx(b.a, {
    href: '/',
    className: 'text-lg font-bold text-black dark:text-white',
    whileHover: { scale: 1.1, rotate: 5 },
    transition: { type: 'spring', stiffness: 200, damping: 10 },
    style: { fontFamily: "'M PLUS Rounded 1c', sans-serif" },
    children: 'Tomy Maritano',
  });
}
const N = { en: 'English', es: 'Español' },
  Be = 'en';
function He(e, r) {
  const t = e.split('/').filter(Boolean);
  return (t[0] && t[0] in N && t.shift(), r !== Be && t.unshift(r), '/' + t.join('/'));
}
function De({ currentLang: e, currentPath: r }) {
  return i.jsxs('div', {
    className: 'relative group',
    children: [
      i.jsxs('button', {
        className:
          'flex items-center space-x-2 px-3 py-2 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors',
        children: [
          i.jsx('span', {
            className: 'text-sm font-medium text-zinc-700 dark:text-zinc-300',
            children: N[e],
          }),
          i.jsx('svg', {
            className:
              'w-4 h-4 text-zinc-500 group-hover:text-zinc-700 dark:group-hover:text-zinc-300 transition-colors',
            fill: 'none',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            strokeWidth: '2',
            viewBox: '0 0 24 24',
            stroke: 'currentColor',
            children: i.jsx('path', { d: 'M19 9l-7 7-7-7' }),
          }),
        ],
      }),
      i.jsx('div', {
        className:
          'absolute right-0 mt-2 w-40 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50',
        children: i.jsx('div', {
          className: 'py-1',
          children: Object.entries(N).map(([t, n]) =>
            i.jsx(
              'a',
              {
                href: He(r, t),
                className: `block px-4 py-2 text-sm hover:bg-zinc-50 dark:hover:bg-zinc-700 transition-colors ${e === t ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20' : 'text-zinc-700 dark:text-zinc-300'}`,
                children: i.jsxs('div', {
                  className: 'flex items-center justify-between',
                  children: [
                    i.jsx('span', { children: n }),
                    e === t &&
                      i.jsx('svg', {
                        className: 'w-4 h-4',
                        fill: 'currentColor',
                        viewBox: '0 0 20 20',
                        children: i.jsx('path', {
                          fillRule: 'evenodd',
                          d: 'M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z',
                          clipRule: 'evenodd',
                        }),
                      }),
                  ],
                }),
              },
              t
            )
          ),
        }),
      }),
    ],
  });
}
const I = [{ href: '/', label: '' }];
function Ge({ posts: e, currentLang: r = 'en', currentPath: t = '/' }) {
  const [n, o] = a.useState(!1),
    [s, d] = a.useState(!1),
    [c, f] = a.useState(0);
  return (
    a.useEffect(() => {
      const l = () => {
        const u = window.scrollY;
        (d(u > c && u > 100), f(u));
      };
      return (
        window.addEventListener('scroll', l, { passive: !0 }),
        () => window.removeEventListener('scroll', l)
      );
    }, [c]),
    a.useEffect(() => {
      const l = () => {
        window.innerWidth >= 768 && o(!1);
      };
      return (window.addEventListener('resize', l), () => window.removeEventListener('resize', l));
    }, []),
    i.jsxs(i.Fragment, {
      children: [
        i.jsx(b.header, {
          className:
            'fixed top-0 left-0 right-0 z-50 h-16 backdrop-blur-xl bg-white/20 dark:bg-black/20 border-b border-white/10 dark:border-white/10',
          animate: { y: s ? '-100%' : '0%' },
          transition: { type: 'spring', stiffness: 200, damping: 20 },
          children: i.jsxs('div', {
            className: 'max-w-3xl mx-auto h-full px-4 sm:px-6 flex justify-between items-center',
            children: [
              i.jsx(Ae, {}),
              i.jsx('nav', {
                className: 'hidden md:flex flex-1 justify-center space-x-8 text-md font-medium',
                children: I.map(({ href: l, label: u }) =>
                  i.jsxs(
                    'a',
                    {
                      href: l,
                      className: 'relative text-black dark:text-white group transition',
                      children: [
                        u,
                        i.jsx('span', {
                          className:
                            'absolute left-0 -bottom-1 h-[2px] w-0 bg-indigo-500 transition-all duration-200 group-hover:w-full',
                        }),
                      ],
                    },
                    l
                  )
                ),
              }),
              i.jsxs('div', {
                className: 'hidden md:flex items-center space-x-4',
                children: [
                  i.jsx('a', {
                    href: 'https://github.com/tu-usuario',
                    target: '_blank',
                    rel: 'noopener noreferrer',
                    className: 'p-2 text-black dark:text-white hover:text-indigo-500 transition',
                    'aria-label': 'GitHub',
                    children: i.jsx(R, { size: 24 }),
                  }),
                  i.jsx(M, { posts: e.map(l => ({ title: l.data.title, slug: l.slug })) }),
                  i.jsx(De, { currentLang: r, currentPath: t }),
                  i.jsx($, {}),
                ],
              }),
              i.jsx('button', {
                className: 'md:hidden p-2 text-black dark:text-white',
                onClick: () => o(!n),
                'aria-label': n ? 'Close menu' : 'Open menu',
                children: n ? i.jsx(ae, { size: 24 }) : i.jsx(te, { size: 24 }),
              }),
            ],
          }),
        }),
        i.jsx(T, {
          children:
            n &&
            i.jsx(b.div, {
              className:
                'fixed inset-0 z-40 bg-black/70 dark:bg-black/80 backdrop-blur-xl flex items-center justify-center p-6',
              onClick: () => o(!1),
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0 },
              children: i.jsxs(b.nav, {
                className: 'flex flex-col items-center space-y-8',
                onClick: l => l.stopPropagation(),
                initial: { y: 40, opacity: 0 },
                animate: { y: 0, opacity: 1 },
                exit: { y: 40, opacity: 0 },
                transition: { type: 'spring', stiffness: 250, damping: 24 },
                children: [
                  I.map(({ href: l, label: u }) =>
                    i.jsx(
                      'a',
                      {
                        href: l,
                        className:
                          'text-2xl font-medium text-white hover:text-indigo-500 relative after:block after:h-[2px] after:w-0 after:bg-indigo-500 after:transition-all hover:after:w-full',
                        onClick: () => o(!1),
                        children: u,
                      },
                      l
                    )
                  ),
                  i.jsx('div', { className: 'w-24 border-t border-white/20' }),
                  i.jsxs('div', {
                    className: 'flex flex-col items-center space-y-6 mt-6',
                    children: [
                      i.jsx('a', {
                        href: 'https://github.com/tu-usuario',
                        target: '_blank',
                        rel: 'noopener noreferrer',
                        className:
                          'p-2 text-black dark:text-white hover:text-indigo-500 transition',
                        'aria-label': 'GitHub',
                        children: i.jsx(R, { size: 24 }),
                      }),
                      i.jsx(M, { posts: e.map(l => ({ title: l.data.title, slug: l.slug })) }),
                      i.jsx($, {}),
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
export { Ge as default };
