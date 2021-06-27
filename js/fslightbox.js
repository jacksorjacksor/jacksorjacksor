!(function (e, t) {
  if ('object' == typeof exports && 'object' == typeof module)
    module.exports = t();
  else if ('function' == typeof define && define.amd) define([], t);
  else {
    var n = t();
    for (var o in n) ('object' == typeof exports ? exports : e)[o] = n[o];
  }
})(window, function () {
  return (function (e) {
    var t = {};
    function n(o) {
      if (t[o]) return t[o].exports;
      var r = (t[o] = { i: o, l: !1, exports: {} });
      return e[o].call(r.exports, r, r.exports, n), (r.l = !0), r.exports;
    }
    return (
      (n.m = e),
      (n.c = t),
      (n.d = function (e, t, o) {
        n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o });
      }),
      (n.r = function (e) {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 });
      }),
      (n.t = function (e, t) {
        if ((1 & t && (e = n(e)), 8 & t)) return e;
        if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
        var o = Object.create(null);
        if (
          (n.r(o),
          Object.defineProperty(o, 'default', { enumerable: !0, value: e }),
          2 & t && 'string' != typeof e)
        )
          for (var r in e)
            n.d(
              o,
              r,
              function (t) {
                return e[t];
              }.bind(null, r)
            );
        return o;
      }),
      (n.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return n.d(t, 'a', t), t;
      }),
      (n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (n.p = ''),
      n((n.s = 0))
    );
  })([
    function (e, t, n) {
      'use strict';
      n.r(t);
      var o,
        r = 'fslightbox-',
        i = ''.concat(r, 'styles'),
        s = ''.concat(r, 'full-dimension'),
        a = ''.concat(r, 'cursor-grabbing'),
        c = ''.concat(r, 'flex-centered'),
        u = ''.concat(r, 'open'),
        l = ''.concat(r, 'transform-transition'),
        d = ''.concat(r, 'absoluted'),
        p = ''.concat(r, 'slide-btn'),
        h = ''.concat(p, '-container'),
        m = ''.concat(r, 'fade-in'),
        f = ''.concat(r, 'fade-out'),
        g = m + '-strong',
        b = f + '-strong',
        v = ''.concat(r, 'caption'),
        x = v + '-inner',
        w = v + '-active',
        y = ''.concat(r, 'opacity-'),
        T = ''.concat(y, '0'),
        S = ''.concat(y, '1'),
        C = ''.concat(r, 'source'),
        A = ''.concat(C, '-wrappers-container'),
        L = ''.concat(A, '-pinching'),
        I = ''.concat(r, 'thumb'),
        W = I + 's',
        z = ''.concat(W, '-loader'),
        E = ''.concat(W, '-cursorer'),
        F = ''.concat(W, '-inner'),
        M = I + 's-active',
        P = I + '-wrapper',
        N = P + '-darkener',
        B = I + '-invalid',
        k = I + '-active';
      function H(e) {
        return (H =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  'function' == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      'object' ===
        ('undefined' == typeof document ? 'undefined' : H(document)) &&
        (((o = document.createElement('style')).className = i),
        o.appendChild(
          document.createTextNode(
            '.fslightbox-fade-in{animation:fslightbox-fade-in .3s cubic-bezier(0,0,.7,1)}.fslightbox-fade-out{animation:fslightbox-fade-out .3s ease}.fslightbox-fade-in-strong{animation:fslightbox-fade-in-strong forwards .3s cubic-bezier(0,0,.7,1)}.fslightbox-fade-out-strong{animation:fslightbox-fade-out-strong .3s ease}@keyframes fslightbox-fade-in{from{opacity:.65}to{opacity:1}}@keyframes fslightbox-fade-out{from{opacity:.35}to{opacity:0}}@keyframes fslightbox-fade-in-strong{from{opacity:.3}to{opacity:1}}@keyframes fslightbox-fade-out-strong{from{opacity:1}to{opacity:0}}.fslightbox-absoluted{position:absolute;top:0;left:0}.fslightbox-cursor-grabbing{cursor:grabbing!important}.fslightbox-full-dimension{width:100%;height:100%}.fslightbox-open{overflow:hidden;height:100%}.fslightbox-flex-centered{display:flex;justify-content:center;align-items:center}.fslightbox-opacity-0{opacity:0!important}.fslightbox-opacity-1{opacity:1!important}.fslightbox-scrollbarfix{padding-right:17px}.fslightbox-transform-transition{transition:transform .3s!important}.fslightbox-container{font-family:Arial,sans-serif;position:fixed;top:0;left:0;background:linear-gradient(rgba(30,30,30,.9),#000 1810%);touch-action:none;z-index:1000000000;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.fslightbox-container *{box-sizing:border-box}.fslightbox-svg-path{transition:fill .15s ease;fill:#d1d2d2}.fslightbox-loader{display:block;margin:auto;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:67px;height:67px}.fslightbox-loader div{box-sizing:border-box;display:block;position:absolute;width:54px;height:54px;margin:6px;border:5px solid;border-color:#999 transparent transparent transparent;border-radius:50%;animation:fslightbox-loader 1.2s cubic-bezier(.5,0,.5,1) infinite}.fslightbox-loader div:nth-child(1){animation-delay:-.45s}.fslightbox-loader div:nth-child(2){animation-delay:-.3s}.fslightbox-loader div:nth-child(3){animation-delay:-.15s}@keyframes fslightbox-loader{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.fslightbox-thumbs-loader{width:54px!important;height:54px!important}.fslightbox-thumbs-loader div{border-width:4px!important;width:44px!important;height:44px!important}.fslightbox-nav{height:45px;width:100%;transition:opacity .3s}.fslightbox-slide-number-container{display:flex;justify-content:center;align-items:center;position:relative;height:100%;font-size:15px;color:#d7d7d7;z-index:0;max-width:55px;text-align:left}.fslightbox-slide-number-container .fslightbox-flex-centered{height:100%}.fslightbox-slash{display:block;margin:0 5px;width:1px;height:12px;transform:rotate(15deg);background:#fff}.fslightbox-toolbar{position:absolute;z-index:3;right:0;top:0;height:45px;display:flex;background:rgba(35,35,35,.65)}.fslightbox-toolbar-button{height:100%;width:45px;cursor:pointer}.fslightbox-toolbar-button:hover .fslightbox-svg-path{fill:#fff}.fslightbox-slide-btn-container{display:flex;align-items:center;padding:12px 12px 12px 6px;position:absolute;top:50%;cursor:pointer;z-index:3;transform:translateY(-50%);transition:opacity .3s}@media (min-width:476px){.fslightbox-slide-btn-container{padding:22px 22px 22px 6px}}@media (min-width:768px){.fslightbox-slide-btn-container{padding:30px 30px 30px 6px}}.fslightbox-slide-btn-container:hover .fslightbox-svg-path{fill:#f1f1f1}.fslightbox-slide-btn{padding:9px;font-size:26px;background:rgba(35,35,35,.65)}@media (min-width:768px){.fslightbox-slide-btn{padding:10px}}@media (min-width:1600px){.fslightbox-slide-btn{padding:11px}}.fslightbox-slide-btn-container-previous{left:0}@media (max-width:475.99px){.fslightbox-slide-btn-container-previous{padding-left:3px}}.fslightbox-slide-btn-container-next{right:0;padding-left:12px;padding-right:3px}@media (min-width:476px){.fslightbox-slide-btn-container-next{padding-left:22px}}@media (min-width:768px){.fslightbox-slide-btn-container-next{padding-left:30px}}@media (min-width:476px){.fslightbox-slide-btn-container-next{padding-right:6px}}.fslightbox-down-event-detector{position:absolute;z-index:1}.fslightbox-slide-swiping-hoverer{z-index:4}.fslightbox-slideshow-bar{width:0;height:2px;z-index:4;opacity:0;background:#fff}.fslightbox-invalid-file-wrapper{font-size:24px;color:#eaebeb;margin:auto}.fslightbox-video{object-fit:cover}.fslightbox-youtube-iframe{border:0}.fslightbox-source{position:relative;z-index:2;display:block;opacity:0;margin:auto;cursor:zoom-in}.fslightbox-source-wrappers-container{transition:transform .2s linear;z-index:2}.fslightbox-source-wrappers-container-pinching{transition:none!important}.fslightbox-thumbs{position:absolute;bottom:0;left:0;width:100%;z-index:-1;background:linear-gradient(180deg,rgba(0,0,0,0),#1e1e1e 100%);opacity:0;transition:opacity .2s;padding:0 5px 12px 5px;height:114px}@media (min-width:992px){.fslightbox-thumbs{padding-bottom:13px;height:120px}}@media (min-width:1600px){.fslightbox-thumbs{padding-bottom:14px;height:126px}}.fslightbox-thumbs-active{opacity:1;z-index:3}.fslightbox-thumbs-inner{display:inline-flex;justify-content:flex-start;align-items:center;height:100%}.fslightbox-thumb-wrapper{position:relative;height:100%;margin:0 4px;opacity:0;transition:opacity .3s}.fslightbox-thumb-wrapper svg{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);cursor:pointer;z-index:1}.fslightbox-thumb-wrapper path{fill:#fff}.fslightbox-thumb-wrapper-darkener{position:absolute;top:2px;left:2px;width:calc(100% - 4px);height:calc(100% - 4px);background:rgba(0,0,0,.4);cursor:pointer}.fslightbox-thumb{cursor:pointer;border-radius:1px;height:100%;width:auto!important;border:2px solid transparent;max-width:unset;max-height:unset}.fslightbox-thumb-active{border:2px solid #fff!important}.fslightbox-thumb-invalid{background:linear-gradient(to bottom,#0f0f0f,rgba(15,15,15,.5));display:inline-block;min-width:155px}.fslightbox-thumbs-cursorer{z-index:4;cursor:grabbing}.fslightbox-caption{position:absolute;bottom:0;left:50%;width:100%;background:linear-gradient(180deg,rgba(0,0,0,0),#1e1e1e 100%);transform:translateX(-50%);opacity:0;transition:opacity .2s;z-index:-1}.fslightbox-caption-inner{padding:25px;max-width:1200px;color:#eee;text-align:center;font-size:14px}@media (min-width:768px){.fslightbox-caption-inner{padding:30px 25px}}.fslightbox-caption-active{opacity:1;z-index:3}'
          )
        ),
        document.head.appendChild(o));
      function O(e) {
        var t,
          n = e.props,
          o = 0,
          r = {};
        (this.getSourceTypeFromLocalStorageByUrl = function (e) {
          return t[e] ? t[e] : i(e);
        }),
          (this.handleReceivedSourceTypeForUrl = function (e, n) {
            !1 === r[n] &&
              (o--,
              'invalid' !== e ? (r[n] = e) : delete r[n],
              0 === o &&
                (!(function (e, t) {
                  for (var n in t) e[n] = t[n];
                })(t, r),
                localStorage.setItem('fslightbox-types', JSON.stringify(t))));
          });
        var i = function (e) {
          o++, (r[e] = !1);
        };
        n.disableLocalStorage
          ? ((this.getSourceTypeFromLocalStorageByUrl = function () {}),
            (this.handleReceivedSourceTypeForUrl = function () {}))
          : (t = JSON.parse(localStorage.getItem('fslightbox-types'))) ||
            ((t = {}), (this.getSourceTypeFromLocalStorageByUrl = i));
      }
      function D(e, t, n, o) {
        var r = e.data,
          i = e.elements.sources,
          s = n / o,
          a = 0;
        this.adjustSize = function () {
          if ((a = r.maxSourceWidth / s) < r.maxSourceHeight)
            return n < r.maxSourceWidth && (a = o), c();
          (a = o > r.maxSourceHeight ? r.maxSourceHeight : o), c();
        };
        var c = function () {
          var e = i[t].style;
          (e.width = a * s + 'px'), (e.height = a + 'px');
        };
      }
      function R(e, t) {
        var n = this,
          o = e.collections.sourceSizers,
          r = e.core.sourceEnhancementWrappersTransformer,
          i = e.elements,
          s = i.sourceAnimationWrappers,
          a = i.sourceMainWrappers,
          c = i.sources,
          u = e.resolve;
        function l(e, n) {
          (o[t] = u(D, [t, e, n])), o[t].adjustSize();
        }
        this.runActions = function (e, o) {
          c[t].classList.add(S),
            s[t].classList.add(g),
            a[t].removeChild(a[t].firstChild),
            r.ifSourceIsLoadedTransformEnhancementWrapperAtIndex(t),
            l(e, o),
            (n.runActions = l);
        };
      }
      function X(e, t) {
        var n,
          o = this,
          r = e.elements.sources,
          i = e.props,
          s = (0, e.resolve)(R, [t]);
        (this.handleImageLoad = function (e) {
          var t = e.target,
            n = t.naturalWidth,
            o = t.naturalHeight;
          s.runActions(n, o);
        }),
          (this.handleVideoLoad = function (e) {
            var t = e.target,
              o = t.videoWidth,
              r = t.videoHeight;
            (n = !0), s.runActions(o, r);
          }),
          (this.handleNotMetaDatedVideoLoad = function () {
            n || o.handleYoutubeLoad();
          }),
          (this.handleYoutubeLoad = function () {
            var e = 1920,
              t = 1080;
            i.maxYoutubeDimensions &&
              ((e = i.maxYoutubeDimensions.width),
              (t = i.maxYoutubeDimensions.height)),
              s.runActions(e, t);
          }),
          (this.handleCustomLoad = function () {
            setTimeout(function () {
              var e = r[t];
              s.runActions(e.offsetWidth, e.offsetHeight);
            });
          });
      }
      function Y(e, t, n) {
        var o = e.elements.sources,
          r = e.props.customClasses,
          i = r[t] ? r[t] : '';
        o[t].className = n + ' ' + i;
      }
      function j(e, t) {
        var n = e.elements.sources,
          o = e.props.customAttributes;
        for (var r in o[t]) n[t].setAttribute(r, o[t][r]);
      }
      function U(e, t) {
        var n = e.collections.sourceLoadHandlers,
          o = e.elements,
          r = o.sources,
          i = o.sourceAnimationWrappers,
          s = e.props.sources;
        (r[t] = document.createElement('img')),
          Y(e, t, C),
          (r[t].src = s[t]),
          (r[t].onload = n[t].handleImageLoad),
          j(e, t),
          i[t].appendChild(r[t]);
      }
      function Z(e, t) {
        var n = e.collections.sourceLoadHandlers,
          o = e.elements,
          r = o.sources,
          i = o.sourceAnimationWrappers,
          s = e.props,
          a = s.sources,
          c = s.videosPosters;
        (r[t] = document.createElement('video')),
          Y(e, t, C),
          (r[t].src = a[t]),
          (r[t].onloadedmetadata = function (e) {
            n[t].handleVideoLoad(e);
          }),
          (r[t].controls = !0),
          j(e, t),
          c[t] && (r[t].poster = c[t]);
        var u = document.createElement('source');
        (u.src = a[t]),
          r[t].appendChild(u),
          setTimeout(n[t].handleNotMetaDatedVideoLoad, 3e3),
          i[t].appendChild(r[t]);
      }
      function V(e, t) {
        var n = e.collections.sourceLoadHandlers,
          o = e.elements,
          i = o.sources,
          s = o.sourceAnimationWrappers,
          a = e.props.sources;
        (i[t] = document.createElement('iframe')),
          Y(e, t, ''.concat(C, ' ').concat(r, 'youtube-iframe')),
          (i[t].src = 'https://www.youtube.com/embed/'.concat(
            a[t].match(
              /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/
            )[2],
            '?enablejsapi=1'
          )),
          (i[t].allowFullscreen = !0),
          j(e, t),
          s[t].appendChild(i[t]),
          n[t].handleYoutubeLoad();
      }
      function q(e, t) {
        var n = e.collections.sourceLoadHandlers,
          o = e.elements,
          r = o.sources,
          i = o.sourceAnimationWrappers,
          s = e.props.sources;
        (r[t] = s[t]),
          Y(e, t, ''.concat(r[t].className, ' ').concat(C)),
          i[t].appendChild(r[t]),
          n[t].handleCustomLoad();
      }
      function _(e, t) {
        var n = e.elements,
          o = n.sources,
          i = n.sourceAnimationWrappers,
          s = n.sourceMainWrappers;
        e.props.sources;
        (o[t] = document.createElement('div')),
          (o[t].className = ''
            .concat(r, 'invalid-file-wrapper ')
            .concat(c, ' ')
            .concat(g)),
          (o[t].innerHTML = 'Invalid source'),
          i[t].appendChild(o[t]),
          s[t].removeChild(s[t].firstChild);
      }
      function J(e, t, n) {
        var o = e.props.thumbsIcons;
        if (o[n]) {
          t.appendChild(o[n]);
          var r = document.createElement('div');
          (r.className = N), t.appendChild(r);
        }
      }
      function $(e, t, n) {
        var o = e.elements,
          r = o.thumbsWrappers,
          i = o.thumbsInner;
        (r[t] = document.createElement('div')),
          (r[t].className = P),
          J(e, r[t], t),
          (function (e, t, n, o) {
            var r = e.core.thumbLoadHandler.handleLoad,
              i = e.elements.thumbs,
              s = e.stageIndexes.current;
            (i[n] = document.createElement('img')), (i[n].src = o);
            var a = I;
            s === n && (a += ' '.concat(k)),
              (i[n].className = a),
              (i[n].onload = r),
              t.appendChild(i[n]);
          })(e, r[t], t, n),
          i.appendChild(r[t]);
      }
      function G(e, t, n, o, i) {
        var s = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        s.setAttributeNS(null, 'width', t),
          s.setAttributeNS(null, 'height', t),
          s.setAttributeNS(null, 'viewBox', o);
        var a = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        return (
          a.setAttributeNS(null, 'class', ''.concat(r, 'svg-path')),
          a.setAttributeNS(null, 'd', i),
          s.appendChild(a),
          e.appendChild(s),
          s
        );
      }
      function K(e, t) {
        var n = e.elements,
          o = n.thumbsWrappers,
          r = n.thumbsInner;
        (o[t] = document.createElement('div')),
          (o[t].className = ''.concat(B, ' ').concat(P)),
          J(e, o[t], t),
          (function (e, t, n) {
            var o = e.core.thumbLoadHandler.handleLoad,
              r = e.elements.thumbs,
              i = e.stageIndexes.current;
            r[n] = document.createElement('div');
            var s = ''.concat(I, ' ').concat(c);
            i === n && (s += ' '.concat(k)),
              (r[n].className = s),
              G(
                r[n],
                '22px',
                0,
                '0 0 30 30',
                'M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M16.212,8l-0.2,9h-2.024l-0.2-9 H16.212z M15.003,22.189c-0.828,0-1.323-0.441-1.323-1.182c0-0.755,0.494-1.196,1.323-1.196c0.822,0,1.316,0.441,1.316,1.196 C16.319,21.748,15.825,22.189,15.003,22.189z'
              ),
              t.appendChild(r[n]),
              setTimeout(o);
          })(e, o[t], t),
          r.appendChild(o[t]);
      }
      function Q(e) {
        var t = e.core.thumbsRenderDispatcher,
          n = e.data,
          o = e.props,
          r = o.showThumbsOnMount,
          i = o.sources,
          s = o.thumbs;
        this.buildThumbForTypeAndIndex = function (o, a) {
          var c;
          (c = s[a]
            ? function () {
                return $(e, a, s[a]);
              }
            : 'image' === o
            ? function () {
                return $(e, a, i[a]);
              }
            : function () {
                return K(e, a);
              }),
            t.addFunctionToToBeRenderedAtIndex(c, a),
            (r || n.isThumbing) && t.renderThumbsIfNotYetAndAllTypesDetected();
        };
      }
      function ee(e) {
        var t,
          n = e.collections,
          o = n.sourceLoadHandlers,
          r = n.sourcesRenderFunctions,
          i = e.core.sourceDisplayFacade,
          s = e.props.disableThumbs,
          a = e.resolve;
        s || (t = a(Q)),
          (this.runActionsForSourceTypeAndIndex = function (n, c) {
            var u;
            switch (('invalid' !== n && (o[c] = a(X, [c])), n)) {
              case 'image':
                u = U;
                break;
              case 'video':
                u = Z;
                break;
              case 'youtube':
                u = V;
                break;
              case 'custom':
                u = q;
                break;
              default:
                u = _;
            }
            (r[c] = function () {
              return u(e, c);
            }),
              i.displaySourcesWhichShouldBeDisplayed(),
              s || t.buildThumbForTypeAndIndex(n, c);
          });
      }
      function te() {
        var e,
          t,
          n,
          o = {
            isUrlYoutubeOne: function (e) {
              var t = document.createElement('a');
              return (t.href = e), 'www.youtube.com' === t.hostname;
            },
            getTypeFromResponseContentType: function (e) {
              return e.slice(0, e.indexOf('/'));
            },
          };
        function r() {
          if (4 !== n.readyState) {
            if (2 === n.readyState) {
              var e;
              switch (
                o.getTypeFromResponseContentType(
                  n.getResponseHeader('content-type')
                )
              ) {
                case 'image':
                  e = 'image';
                  break;
                case 'video':
                  e = 'video';
                  break;
                default:
                  e = 'invalid';
              }
              (n.onreadystatechange = null), n.abort(), t(e);
            }
          } else t('invalid');
        }
        (this.setUrlToCheck = function (t) {
          e = t;
        }),
          (this.getSourceType = function (i) {
            if (o.isUrlYoutubeOne(e)) return i('youtube');
            (t = i),
              ((n = new XMLHttpRequest()).onreadystatechange = r),
              n.open('GET', e, !0),
              n.send();
          });
      }
      function ne(e, t, n) {
        var o = e.props,
          r = o.types,
          i = o.type,
          s = o.sources,
          a = e.resolve;
        (this.getTypeSetByClientForIndex = function (e) {
          var t;
          return r && r[e] ? (t = r[e]) : i && (t = i), t;
        }),
          (this.retrieveTypeWithXhrForIndex = function (e) {
            var o = a(te);
            o.setUrlToCheck(s[e]),
              o.getSourceType(function (o) {
                t.handleReceivedSourceTypeForUrl(o, s[e]),
                  n.runActionsForSourceTypeAndIndex(o, e);
              });
          });
      }
      function oe(e, t) {
        var n = e.elements,
          o = n.sourceMainWrappers,
          r = n.sourceEnhancementWrappers;
        (r[t] = document.createElement('div')),
          (r[t].className = l),
          o[t].appendChild(r[t]),
          (function (e, t) {
            var n = e.elements,
              o = n.sourceAnimationWrappers,
              r = n.sourceEnhancementWrappers;
            (o[t] = document.createElement('div')), r[t].appendChild(o[t]);
          })(e, t);
      }
      function re(e, t) {
        var n = e.elements,
          o = n.sourceWrappersContainer,
          r = n.sourceMainWrappers;
        (r[t] = document.createElement('div')),
          (r[t].className = ''.concat(d, ' ').concat(s, ' ').concat(c)),
          (r[t].innerHTML =
            '<div class="fslightbox-loader"><div></div><div></div><div></div><div></div></div>'),
          o.appendChild(r[t]),
          oe(e, t);
      }
      function ie(e, t) {
        var n = e.sourcePointerProps;
        n.pointers[t.pointerId] = { screenX: t.screenX, screenY: t.screenY };
        var o = Object.keys(n.pointers).length;
        return (n.pointersCount = o), o <= 2;
      }
      function se(e, t) {
        var n = document.createElement('div');
        return (
          (n.className = ''.concat(r, 'toolbar-button ').concat(c)),
          (n.title = t),
          e.appendChild(n),
          n
        );
      }
      function ae(e, t, n) {
        var o = se(e, t.title);
        (o.onclick = n), G(o, t.width, t.height, t.viewBox, t.d);
      }
      function ce(e, t) {
        var n = e.core,
          o = n.clickZoomer,
          i = o.zoomIn,
          s = o.zoomOut,
          a = n.lightboxCloser.close,
          c = n.thumbsToggler,
          u = e.props,
          l = u.customToolbarButtons,
          d = u.disableThumbs,
          p = u.toolbarButtons,
          h = document.createElement('div');
        (h.className = ''.concat(r, 'toolbar')), t.appendChild(h);
        for (
          var m = function (t) {
              ae(h, l[t], function () {
                return l[t].onClick(e);
              });
            },
            f = 0;
          f < l.length;
          f++
        )
          m(f);
        d || ae(h, p.thumbs, c.toggleThumbs),
          ae(h, p.zoomIn, i),
          ae(h, p.zoomOut, s),
          (function (e, t) {
            var n = e.core.slideshowManager.toggleSlideshow,
              o = e.componentsServices,
              r = e.props.toolbarButtons.slideshow,
              i = r.start,
              s = r.pause,
              a = se(t, i.title);
            a.onclick = n;
            var c = G(a, i.width, i.height, i.viewBox, i.d);
            function u(e) {
              (a.title = e.title),
                c.setAttributeNS(null, 'width', e.width),
                c.setAttributeNS(null, 'height', e.height),
                c.setAttributeNS(null, 'viewBox', e.viewBox),
                c.firstChild.setAttributeNS(null, 'd', e.d);
            }
            (o.startSlideshow = function () {
              u(s);
            }),
              (o.stopSlideshow = function () {
                u(i);
              });
          })(e, h),
          (function (e, t) {
            var n = e.core.fullscreenToggler,
              o = e.componentsServices,
              r = e.data,
              i = e.props.toolbarButtons.fullscreen,
              s = i.enter,
              a = i.exit,
              c = se(t, s.title),
              u = G(c, s.width, s.height, s.viewBox, s.d);
            function l(e) {
              (c.title = e.title),
                u.setAttributeNS(null, 'width', e.width),
                u.setAttributeNS(null, 'height', e.height),
                u.setAttributeNS(null, 'viewBox', e.viewBox),
                u.firstChild.setAttributeNS(null, 'd', e.d);
            }
            (o.enterFullscreen = function () {
              (r.isFullscreenOpen = !0), l(a);
            }),
              (o.exitFullscreen = function () {
                (r.isFullscreenOpen = !1), l(s);
              }),
              (c.onclick = function () {
                r.isFullscreenOpen ? n.exitFullscreen() : n.enterFullscreen();
              });
          })(e, h),
          ae(h, p.close, a);
      }
      function ue(e) {
        var t = e.props.sources,
          n = e.elements;
        (n.nav = document.createElement('div')),
          (n.nav.className = ''.concat(r, 'nav')),
          n.container.appendChild(n.nav),
          ce(e, n.nav),
          t.length > 1 &&
            (function (e, t) {
              var n = e.componentsServices,
                o = e.props.sources,
                i = (e.stageIndexes, document.createElement('div'));
              i.className = ''.concat(r, 'slide-number-container');
              var s = document.createElement('div');
              s.className = c;
              var a = document.createElement('span');
              n.setSlideNumber = function (e) {
                return (a.innerHTML = e);
              };
              var u = document.createElement('span');
              u.className = ''.concat(r, 'slash');
              var l = document.createElement('div');
              (l.innerHTML = o.length),
                i.appendChild(s),
                s.appendChild(a),
                s.appendChild(u),
                s.appendChild(l),
                t.appendChild(i),
                setTimeout(function () {
                  s.offsetWidth > 55 && (i.style.justifyContent = 'flex-start');
                });
            })(e, n.nav);
      }
      function le(e, t) {
        var n = this,
          o = e.elements.sourceMainWrappers,
          r = e.props,
          i = 0,
          s = 0,
          a = 0;
        (this.translate = function (e, t) {
          return (s = e), void 0 !== t && (a = t), n;
        }),
          (this.getTranslateX = function () {
            return i;
          }),
          (this.getTranslateY = function () {
            return a;
          }),
          (this.negative = function () {
            c(-(1 + r.slideDistance) * innerWidth);
          }),
          (this.zero = function () {
            c(0);
          }),
          (this.positive = function () {
            c((1 + r.slideDistance) * innerWidth);
          });
        var c = function (e) {
            (i = e + s), u(), (s = 0);
          },
          u = function () {
            o[t].style.transform = 'translate('
              .concat(i, 'px, ')
              .concat(a, 'px)');
          };
      }
      function de(e, t) {
        var n = e.core.slideChangeFacade,
          o = e.elements,
          r = e.props.slideButtons,
          i = t.charAt(0).toUpperCase() + t.slice(1),
          s = 'slideButton'.concat(i),
          a = r[t];
        (o[s] = document.createElement('div')),
          (o[s].className = ''.concat(h, ' ').concat(h, '-').concat(t)),
          (o[s].title = a.title),
          (o[s].onclick = n['changeTo'.concat(i)]),
          (function (e, t) {
            var n = document.createElement('div');
            (n.className = ''.concat(p, ' ').concat(c)),
              G(n, t.width, t.height, t.viewBox, t.d),
              e.appendChild(n);
          })(o[s], a),
          o.container.appendChild(o[s]);
      }
      function pe(e) {
        var t = e.core,
          n = t.sourceEnhancementWrappersTransformer,
          o = t.thumbsRenderDispatcher,
          r = t.zoomer,
          i = e.data,
          s = e.elements,
          a = e.props.sources,
          c = e.stageIndexes;
        function u() {
          for (var e = 0; e < a.length; e++)
            n.ifSourceIsLoadedTransformEnhancementWrapperAtIndex(e);
        }
        function l(e) {
          s.captions[c.current] && s.captions[c.current].classList[e](w);
        }
        (this.openThumbs = function () {
          r.ifZoomingResetZoom(),
            (i.isThumbing = !0),
            s.thumbsContainer.classList.add(M),
            u(),
            l('remove'),
            o.renderThumbsIfNotYetAndAllTypesDetected();
        }),
          (this.closeThumbs = function () {
            r.ifZoomingResetZoom(),
              (i.isThumbing = !1),
              s.thumbsContainer.classList.remove(M),
              u(),
              l('add');
          });
      }
      function he(e, t) {
        var n = e.classList;
        n.contains(t) && n.remove(t);
      }
      function me(e, t) {
        var n = e.classList;
        n.contains(t) || n.add(t);
      }
      function fe(e) {
        var t = e.data,
          n = e.elements,
          o = e.stageIndexes;
        (this.runActions = function () {
          he(n.thumbsContainer, c);
          var e = innerWidth / 2,
            i = n.thumbsWrappers[o.current],
            s = i.offsetLeft + i.offsetWidth / 2,
            a = t.thumbsInnerWidth - s;
          s > e && a > e
            ? r(e - s)
            : s > e
            ? r(innerWidth - t.thumbsInnerWidth - 9)
            : a > e && r(0);
        }),
          (this.runToThinThumbsActions = function () {
            me(n.thumbsContainer, c), r(0);
          });
        var r = function (e) {
          (t.thumbsTransform = e),
            (n.thumbsInner.style.transform = 'translateX('.concat(e, 'px)'));
        };
      }
      function ge(e, t) {
        var n = [];
        return function () {
          n.push(!0),
            setTimeout(function () {
              n.pop(), n.length || e();
            }, t);
        };
      }
      function be(e) {
        var t,
          n,
          o,
          r,
          i,
          s,
          a = e.core,
          c = e.data,
          u = e.elements,
          d = e.props;
        (c.isThumbing = d.showThumbsOnMount),
          (c.thumbsInnerWidth = null),
          (c.thumbsTransform = 0),
          (c.thumbedSourceEnhancementWrapperScale = null),
          (c.thumbedSourceEnhancementWrapperTranslateY = null),
          (c.unloadedThumbsCount = d.sources.length),
          (e.thumbsSwipingProps = {
            isPointering: !1,
            downScreenX: null,
            swipedX: null,
          }),
          (a.thumbLoadHandler = {}),
          (a.thumbsRenderDispatcher = {}),
          (a.thumbsSwipingDown = {}),
          (a.thumbsToggler = {}),
          (a.thumbsTransformer = {}),
          (a.thumbsTransformTransitioner = {}),
          (u.thumbsContainer = null),
          (u.thumbs = []),
          (u.thumbsWrappers = []),
          (u.thumbsComponents = []),
          (u.thumbsInner = null),
          (function (e) {
            var t = e.core,
              n = t.thumbLoadHandler,
              o = t.windowResizeActioner,
              r = e.componentsServices,
              i = e.data,
              s = e.elements.thumbsWrappers;
            n.handleLoad = function () {
              if ((i.unloadedThumbsCount--, 0 === i.unloadedThumbsCount)) {
                for (var e = 0; e < s.length; e++) s[e].classList.add(S);
                o.runThumbsActions(), r.hideThumbsLoader();
              }
            };
          })(e),
          (n = (t = e).core.thumbsRenderDispatcher),
          (o = t.props.sources),
          (r = []),
          (i = !1),
          (s = 0),
          (n.addFunctionToToBeRenderedAtIndex = function (e, t) {
            (r[t] = e), s++;
          }),
          (n.renderThumbsIfNotYetAndAllTypesDetected = function () {
            if (!i && s === o.length) {
              i = !0;
              for (var e = 0; e < o.length; e++) r[e]();
            }
          }),
          (function (e) {
            var t = e.core,
              n = t.thumbsSwipingDown,
              o = t.pointeringBucket,
              r = e.thumbsSwipingProps;
            n.listener = function (e) {
              e.preventDefault(), o.runSwipingDownActionsForPropsAndEvent(r, e);
            };
          })(e),
          (function (e) {
            var t = e.core.thumbsToggler,
              n = e.data,
              o = (0, e.resolve)(pe);
            t.toggleThumbs = function () {
              n.isThumbing ? o.closeThumbs() : o.openThumbs();
            };
          })(e),
          (function (e) {
            var t = e.core,
              n = t.thumbsTransformer,
              o = t.thumbsTransformTransitioner,
              r = e.data,
              i = (0, e.resolve)(fe);
            (n.transformToCurrent = function () {
              r.thumbsInnerWidth > innerWidth
                ? i.runActions()
                : i.runToThinThumbsActions();
            }),
              (n.transformToCurrentWithTransition = function () {
                r.thumbsInnerWidth > innerWidth &&
                  o.callActionWithTransition(i.runActions);
              });
          })(e),
          (function (e) {
            var t = e.core.thumbsTransformTransitioner,
              n = e.elements,
              o = ge(function () {
                n.thumbsInner.classList.remove(l);
              }, 300);
            t.callActionWithTransition = function (e) {
              n.thumbsInner.classList.add(l), e(), o();
            };
          })(e);
      }
      function ve(e) {
        var t = e.componentsServices,
          n = e.elements,
          o = e.data;
        n.thumbsContainer = document.createElement('div');
        var r = W;
        o.isThumbing && (r += ' '.concat(M)),
          (n.thumbsContainer.className = r),
          n.container.appendChild(n.thumbsContainer),
          (n.thumbsContainer.innerHTML =
            '<div data-test-id="thumbs-loader" class="fslightbox-loader '.concat(
              z,
              '"><div></div><div></div><div></div><div></div></div>'
            )),
          (t.hideThumbsLoader = function () {
            n.thumbsContainer.removeChild(n.thumbsContainer.firstChild);
          }),
          (function (e) {
            var t = e.elements;
            (t.thumbsCursorer = document.createElement('div')),
              (t.thumbsCursorer.className = ''
                .concat(E, ' ')
                .concat(s, ' ')
                .concat(d));
          })(e),
          (function (e) {
            var t = e.core.thumbsSwipingDown.listener,
              n = e.elements;
            (n.thumbsInner = document.createElement('div')),
              (n.thumbsInner.className = F),
              n.thumbsInner.addEventListener('pointerdown', t),
              n.thumbsContainer.appendChild(n.thumbsInner);
          })(e);
      }
      function xe(e) {
        var t = this,
          n = e.core,
          o = n.eventsDispatcher,
          r = n.fullscreenToggler,
          i = n.globalEventsController,
          s = n.scrollbarRecompensor,
          a = n.slideshowManager,
          c = n.zoomer,
          l = e.data,
          d = e.elements,
          p = e.props,
          h = e.sourcePointerProps,
          m = e.thumbsSwipingProps;
        (this.isLightboxFadingOut = !1),
          (this.runActions = function () {
            (t.isLightboxFadingOut = !0),
              d.container.classList.add(b),
              i.removeListeners(),
              a.resetSlideshow(),
              p.exitFullscreenOnClose &&
                l.isFullscreenOpen &&
                r.exitFullscreen(),
              c.ifZoomingResetZoom(),
              setTimeout(function () {
                (t.isLightboxFadingOut = !1),
                  (h.isPointering = !1),
                  m && (m.isPointering = !1),
                  d.container.classList.remove(b),
                  document.documentElement.classList.remove(u),
                  s.removeRecompense(),
                  document.body.removeChild(d.container),
                  o.dispatch('onClose');
              }, 270);
          });
      }
      function we(e, t) {
        var n = e.elements.thumbs,
          o = e.stageIndexes;
        n &&
          n[o.current] &&
          (n[o.current].classList.remove(k), n[t].classList.add(k));
      }
      function ye(e) {
        var t,
          n = e.core,
          o = n.slideshowManager,
          r = n.slideChangeFacade,
          i = e.componentsServices,
          s = e.elements,
          a = e.props,
          c = !1;
        function u() {
          (c = !1),
            clearTimeout(t),
            s.slideshowBar.classList.remove(S),
            i.stopSlideshow();
        }
        (o.toggleSlideshow = function () {
          c
            ? u()
            : ((c = !0),
              i.startSlideshow(),
              s.slideshowBar.classList.add(S),
              (function e() {
                (s.slideshowBar.style.transition = 'opacity .2s'),
                  (s.slideshowBar.style.width = '0px'),
                  s.slideshowBar.offsetWidth,
                  (s.slideshowBar.style.transition =
                    'opacity .2s, width linear '.concat(a.slideshowTime, 'ms')),
                  (s.slideshowBar.style.width = innerWidth + 'px'),
                  (t = setTimeout(function () {
                    r.changeToNext(), e();
                  }, a.slideshowTime));
              })());
        }),
          (o.resetSlideshow = function () {
            c && u();
          });
      }
      function Te(e) {
        return !e.sourcePointerProps.isPointering;
      }
      function Se(e) {
        var t = e.core,
          n = t.clickZoomer,
          o = t.fullscreenToggler,
          r = t.lightboxCloser,
          i = t.slideChangeFacade,
          s = t.slideshowManager,
          a = t.thumbsToggler,
          c = e.middleware,
          u = e.props;
        this.listener = function (e) {
          if ('Space' !== e.code)
            switch (e.key) {
              case 'Escape':
                r.close();
                break;
              case 'ArrowLeft':
                i.changeToPrevious();
                break;
              case 'ArrowRight':
                i.changeToNext();
                break;
              case 't':
                u.disableThumbs || a.toggleThumbs();
                break;
              case '+':
                c(n.zoomIn, Te)();
                break;
              case '-':
                c(n.zoomOut, Te)();
                break;
              case 'F11':
                e.preventDefault(), o.enterFullscreen();
            }
          else s.toggleSlideshow();
        };
      }
      function Ce(e) {
        var t = e.core.pointeringBucket,
          n = e.data,
          o = e.elements,
          r = e.thumbsSwipingProps;
        this.runActions = function (e) {
          t.runSwipingMoveActionsForPropsAndEvent(r, e),
            (o.thumbsInner.style.transform = 'translateX('.concat(
              n.thumbsTransform + r.swipedX,
              'px)'
            )),
            o.thumbsContainer.contains(o.thumbsCursorer) ||
              o.thumbsContainer.appendChild(o.thumbsCursorer);
        };
      }
      function Ae(e) {
        var t = e.data,
          n = e.resolve,
          o = e.thumbsSwipingProps,
          r = n(Ce);
        this.listener = function (e) {
          t.thumbsInnerWidth > innerWidth && o.isPointering && r.runActions(e);
        };
      }
      function Le(e, t) {
        e.contains(t) && e.removeChild(t);
      }
      function Ie(e) {
        var t = e.data,
          n = e.core,
          o = n.slideIndexChanger,
          r = n.thumbsTransformTransitioner,
          i = n.pointeringBucket,
          s = e.elements,
          a = e.thumbsSwipingProps,
          c = s.thumbsWrappers;
        (this.runNoSwipeActionsForEvent = function (e) {
          Le(s.thumbsContainer, s.thumbsCursorer), (a.isPointering = !1);
          for (var t = 0; t < c.length; t++)
            if (c[t] && c[t].contains(e.target)) return void o.jumpTo(t);
        }),
          (this.runActions = function () {
            if (
              (Le(s.thumbsContainer, s.thumbsCursorer),
              (t.thumbsTransform += a.swipedX),
              i.runSwipingTopActionsForPropsAndEvent(a),
              t.thumbsTransform > 0)
            )
              return u(0);
            t.thumbsTransform < innerWidth - t.thumbsInnerWidth - 9 &&
              u(innerWidth - t.thumbsInnerWidth - 9);
          });
        var u = function (e) {
          (t.thumbsTransform = e),
            r.callActionWithTransition(function () {
              s.thumbsInner.style.transform = 'translateX('.concat(e, 'px)');
            });
        };
      }
      function We(e) {
        var t = e.resolve,
          n = e.thumbsSwipingProps,
          o = t(Ie);
        this.listener = function (e) {
          n.isPointering &&
            (n.swipedX ? o.runActions() : o.runNoSwipeActionsForEvent(e));
        };
      }
      function ze(e) {
        var t = e.collections.sourceMainWrapperTransformers,
          n = e.core.zoomer,
          o = e.data,
          r = e.sourcePointerProps;
        (this.runZoomingPinchActionsForHypot = function (e) {
          var t = e - r.pinchedHypot,
            i = o.zoom + (t / Math.hypot(innerWidth, innerHeight)) * 10;
          i < 0.9 && (i = 0.9), n.zoomTo(i), (r.pinchedHypot = e);
        }),
          (this.translateSourceMainWrapperAtIndexUsingMethod = function (e, n) {
            t[e].translate(r.swipedX)[n]();
          });
      }
      function Ee(e) {
        var t = Object.keys(e.pointers),
          n = e.pointers[t[0]],
          o = e.pointers[t[1]];
        return Math.hypot(n.screenX - o.screenX, n.screenY - o.screenY);
      }
      function Fe(e) {
        var t = e.collections.sourceMainWrapperTransformers,
          n = e.core.pointeringBucket,
          o = e.data,
          r = e.elements,
          i = e.resolve,
          s = e.sourcePointerProps,
          a = e.stageIndexes,
          c = i(ze);
        (this.runActions = function (e) {
          n.runSwipingMoveActionsForPropsAndEvent(s, e),
            r.container.contains(r.slideSwipingHoverer) ||
              r.container.appendChild(r.slideSwipingHoverer);
        }),
          (this.runPinchActions = function () {
            var e = Ee(s);
            s.pinchedHypot
              ? c.runZoomingPinchActionsForHypot(e)
              : (s.pinchedHypot = e);
          }),
          (this.runNormalSwipeActions = function () {
            c.translateSourceMainWrapperAtIndexUsingMethod(a.current, 'zero'),
              void 0 !== a.previous && s.swipedX > 0
                ? c.translateSourceMainWrapperAtIndexUsingMethod(
                    a.previous,
                    'negative'
                  )
                : void 0 !== a.next &&
                  s.swipedX < 0 &&
                  c.translateSourceMainWrapperAtIndexUsingMethod(
                    a.next,
                    'positive'
                  );
          }),
          (this.runZoomSwipeActions = function (e) {
            (s.swipedX = (e.screenX - s.downScreenX) / o.zoom),
              (s.swipedY = (e.screenY - s.downScreenY) / o.zoom),
              t[a.current]
                .translate(s.upSwipedX + s.swipedX, s.upSwipedY + s.swipedY)
                .zero();
          });
      }
      function Me(e) {
        var t = e.data,
          n = e.props.sources,
          o = e.resolve,
          r = e.sourcePointerProps,
          i = o(Fe);
        this.listener = function (e) {
          if (r.isPinching) return i.runActions(e), void i.runPinchActions();
          2 !== r.pointersCount &&
            (i.runActions(e),
            1 === t.zoom
              ? 1 === n.length
                ? (r.swipedX = 1)
                : i.runNormalSwipeActions()
              : i.runZoomSwipeActions(e));
        };
      }
      function Pe(e) {
        var t = e.collections.sourceMainWrapperTransformers,
          n = e.core,
          o = n.slideIndexChanger,
          r = n.clickZoomer,
          i = e.data,
          s = e.elements.sourceMainWrappers,
          a = e.sourcePointerProps,
          c = e.stageIndexes;
        (this.runPositiveSwipedXActions = function () {
          void 0 === c.previous || (u('positive'), o.changeTo(c.previous)),
            u('zero');
        }),
          (this.runNegativeSwipedXActions = function () {
            void 0 === c.next || (u('negative'), o.changeTo(c.next)), u('zero');
          }),
          (this.saveCurrentSourceMainWrapperPosition = function () {
            (a.upSwipedX = t[c.current].getTranslateX()),
              (a.upSwipedY = t[c.current].getTranslateY());
          }),
          (this.runSourceDownEventTargetActions = function () {
            i.zoom <= 1 ? r.zoomIn() : r.zoomOut();
          });
        var u = function (e) {
          s[c.current].classList.add(l), t[c.current][e]();
        };
      }
      function Ne(e) {
        var t = e.core,
          n = t.lightboxCloser,
          o = t.pointeringBucket,
          r = e.data,
          i = e.elements,
          s = e.resolve,
          a = e.sourcePointerProps,
          c = s(Pe);
        (this.runActions = function () {
          Le(i.container, i.slideSwipingHoverer),
            (a.isPinching = !1),
            (a.pinchedHypot = 0),
            o.runSwipingTopActionsForPropsAndEvent(a),
            he(i.sourceWrappersContainer, L);
        }),
          (this.runSwipeActions = function () {
            1 === r.zoom
              ? a.swipedX > 0
                ? c.runPositiveSwipedXActions()
                : c.runNegativeSwipedXActions()
              : c.saveCurrentSourceMainWrapperPosition();
          }),
          (this.runNoSwipeActions = function () {
            a.isSourceDownEventTarget
              ? c.runSourceDownEventTargetActions()
              : n.close();
          });
      }
      function Be(e) {
        var t = e.data,
          n = e.resolve,
          o = e.sourcePointerProps,
          r = e.core.zoomer,
          i = n(Ne);
        this.listener = function (e) {
          (o.pointers = {}),
            o.isPointering &&
              (o.isPinching ||
                (o.swipedX ? i.runSwipeActions() : i.runNoSwipeActions()),
              i.runActions(e),
              t.zoom < 1 && (r.zoomTo(1), r.stopZooming()));
        };
      }
      function ke(e) {
        return e.sourcePointerProps.isPointering;
      }
      function He(e) {
        var t = e.core.inactiver,
          n = e.middleware,
          o = e.props,
          r = e.resolve,
          i = r(Me),
          s = r(Be),
          a = r(Ae),
          c = r(We);
        (this.moveListener = function (e) {
          t.listener(e),
            n(n(i.listener, ie), ke)(e),
            o.disableThumbs || a.listener(e);
        }),
          (this.upListener = function (e) {
            s.listener(e), o.disableThumbs || c.listener(e);
          });
      }
      function Oe(e) {
        var t = e.core.zoomer,
          n = e.data;
        this.listener = function (e) {
          if (1 === n.zoom) {
            if (e.deltaY > 0) return;
            t.startZooming();
          }
          var o = 0.1 * n.zoom,
            r = n.zoom;
          e.deltaY < 0 ? (r += o) : (r -= o) < 1 && (r = 1),
            t.zoomTo(r),
            1 === r && t.stopZooming();
        };
      }
      function De(e) {
        var t,
          n = e.core,
          o = n.inactiver,
          r = n.globalEventsController,
          i = n.windowResizeActioner,
          s = e.middleware,
          a = e.resolve,
          c = a(He),
          u = a(Se),
          l = a(Oe);
        (r.addListeners = function () {
          document.addEventListener('pointerdown', o.listener),
            document.addEventListener('pointermove', c.moveListener),
            document.addEventListener('pointerup', c.upListener),
            addEventListener('resize', i.runActions),
            document.addEventListener('keydown', u.listener);
          var e,
            n =
              ((e = !1),
              function () {
                return (
                  !e &&
                  ((e = !0),
                  requestAnimationFrame(function () {
                    e = !1;
                  }),
                  !0)
                );
              });
          (t = s(
            (t = function (e) {
              return n() && l.listener(e);
            }),
            Te
          )),
            document.addEventListener('wheel', t);
        }),
          (r.removeListeners = function () {
            document.removeEventListener('pointerdown', o.listener),
              document.removeEventListener('pointermove', c.moveListener),
              document.removeEventListener('pointerup', c.upListener),
              removeEventListener('resize', i.runActions),
              document.removeEventListener('keydown', u.listener),
              document.removeEventListener('wheel', t);
          });
      }
      function Re(e) {
        var t = e.data,
          n = e.elements,
          o = e.stageIndexes;
        (this.runOpacity0ActionUsingMethod = function (e) {
          n.slideButtonPrevious &&
            (n.slideButtonPrevious.classList[e](T),
            n.slideButtonNext.classList[e](T));
        }),
          (this.runActiveEnhancementActionUsingMethod = function (e) {
            t.isThumbing
              ? n.thumbsContainer.classList[e](M)
              : n.captions[o.current] && n.captions[o.current].classList[e](w);
          });
      }
      function Xe(e) {
        var t = e.core.zoomer,
          n = e.data,
          o = e.elements,
          r = e.sourcePointerProps;
        this.runPinchActions = function () {
          (r.isPinching = !0),
            (r.pinchedHypot = Ee(r)),
            me(o.sourceWrappersContainer, L),
            1 === n.zoom && t.startZooming();
        };
      }
      function Ye(e) {
        var t,
          n,
          o,
          r = e.data,
          i = e.elements,
          s = r.captionHeights,
          a = r.notThumbedSourceEnhancementWrapperScales,
          c = r.notThumbedSourceEnhancementWrapperTranslatesY,
          u = i.sourceEnhancementWrappers,
          l = i.sources;
        (this.setUpThumbedEnhancementWrapperTransform = function () {
          (t = i.thumbsContainer.offsetHeight),
            (n = r.thumbedSourceEnhancementWrapperTranslateY),
            (o = 'translateY('
              .concat(n, 'px) scale(')
              .concat(r.thumbedSourceEnhancementWrapperScale, ')'));
        }),
          (this.setUpNotThumbedEnhancementWrapperTransformAtIndex = function (
            e
          ) {
            (t = s[e]),
              (n = c[e]),
              (o = 'translateY('.concat(n, 'px) scale(').concat(a[e], ')'));
          }),
          (this.ifSourceIsLoadedTransformEnhancementWrapperAtIndex = function (
            e
          ) {
            l[e] &&
              (innerWidth < innerHeight &&
              l[e].offsetWidth > l[e].offsetHeight + t
                ? (u[e].style.transform = 'translateY('.concat(
                    n / 2,
                    'px) scale(1)'
                  ))
                : (u[e].style.transform = o));
          });
      }
      function je(e) {
        var t, n, o;
        !(function (e) {
          var t = e.core.captionsActioner,
            n = e.data,
            o = e.elements.captions;
          t.changeActiveCaptionFromTo = function (e, t) {
            n.isThumbing || (r(e, he), r(t, me));
          };
          var r = function (e, t) {
            o[e] && t(o[e], w);
          };
        })(e),
          (n = (t = e).core.classFacade),
          (o = t.elements),
          (n.removeFromEachElementClassIfContains = function (e, t) {
            for (var n = 0; n < o[e].length; n++) he(o[e][n], t);
          }),
          (function (e) {
            var t = e.core,
              n = t.clickZoomer,
              o = t.zoomer,
              r = e.data,
              i = e.elements,
              s = e.props.zoomIncrement,
              a = ge(function () {
                he(i.sourceWrappersContainer, l);
              }, 300);
            (n.zoomIn = function () {
              c(), u(r.zoom + s);
            }),
              (n.zoomOut = function () {
                r.zoom - s <= 1
                  ? 1 !== r.zoom && (u(1), o.stopZooming())
                  : (c(), u(r.zoom - s), 1 === r.zoom && o.stopZooming());
              });
            var c = function () {
                1 === r.zoom && o.startZooming();
              },
              u = function (e) {
                me(i.sourceWrappersContainer, l), o.zoomTo(e), a();
              };
          })(e),
          (function (e) {
            var t = e.core.eventsDispatcher,
              n = e.props;
            t.dispatch = function (t) {
              n[t] && n[t](e);
            };
          })(e),
          (function (e) {
            var t = e.componentsServices,
              n = e.core.fullscreenToggler;
            (n.enterFullscreen = function () {
              t.enterFullscreen();
              var e = document.documentElement;
              e.requestFullscreen
                ? e.requestFullscreen()
                : e.mozRequestFullScreen
                ? e.mozRequestFullScreen()
                : e.webkitRequestFullscreen
                ? e.webkitRequestFullscreen()
                : e.msRequestFullscreen && e.msRequestFullscreen();
            }),
              (n.exitFullscreen = function () {
                t.exitFullscreen(),
                  document.exitFullscreen
                    ? document.exitFullscreen()
                    : document.mozCancelFullScreen
                    ? document.mozCancelFullScreen()
                    : document.webkitExitFullscreen
                    ? document.webkitExitFullscreen()
                    : document.msExitFullscreen && document.msExitFullscreen();
              });
          })(e),
          De(e),
          (function (e) {
            var t = e.core.inactiver,
              n = e.data,
              o = e.elements,
              r = e.props.UIFadeOutTime,
              i = !1,
              s = ge(function () {
                (i = !0), a(c);
              }, r);
            t.listener = function () {
              s(), i && (a(u), (i = !1));
            };
            var a = function (e) {
                e(o.nav),
                  1 === n.zoom &&
                    o.slideButtonPrevious &&
                    (e(o.slideButtonPrevious), e(o.slideButtonNext)),
                  n.isThumbing && e(o.thumbsContainer);
              },
              c = function (e) {
                e.classList.add(T);
              },
              u = function (e) {
                e.classList.remove(T);
              };
          })(e),
          (function (e) {
            var t = e.core.lightboxCloser,
              n = (0, e.resolve)(xe);
            t.close = function () {
              n.isLightboxFadingOut || n.runActions();
            };
          })(e),
          qe(e),
          (function (e) {
            var t = e.core.pointeringBucket,
              n = e.elements;
            (t.runSwipingDownActionsForPropsAndEvent = function (e, t) {
              (e.isPointering = !0),
                (e.downScreenX = t.screenX),
                (e.swipedX = 0);
            }),
              (t.runSwipingMoveActionsForPropsAndEvent = function (e, t) {
                me(n.container, a), (e.swipedX = t.screenX - e.downScreenX);
              }),
              (t.runSwipingTopActionsForPropsAndEvent = function (e) {
                he(n.container, a), (e.isPointering = !1);
              });
          })(e),
          (function (e) {
            var t = e.data,
              n = e.core.scrollbarRecompensor;
            n.addRecompense = function () {
              'complete' === document.readyState
                ? o()
                : window.addEventListener('load', function () {
                    o(), (n.addRecompense = o);
                  });
            };
            var o = function () {
              document.body.offsetHeight > window.innerHeight &&
                (document.body.style.marginRight = t.scrollbarWidth + 'px');
            };
            n.removeRecompense = function () {
              document.body.style.removeProperty('margin-right');
            };
          })(e),
          ye(e),
          (function (e) {
            var t = e.core,
              n = t.slideChangeFacade,
              o = t.slideIndexChanger,
              r = t.stageManager;
            e.props.sources.length > 1
              ? ((n.changeToPrevious = function () {
                  o.jumpTo(r.getPreviousSlideIndex());
                }),
                (n.changeToNext = function () {
                  o.jumpTo(r.getNextSlideIndex());
                }))
              : ((n.changeToPrevious = function () {}),
                (n.changeToNext = function () {}));
          })(e),
          (function (e) {
            var t = e.collections.sourceMainWrapperTransformers,
              n = e.componentsServices,
              o = e.core,
              r = o.captionsActioner,
              i = o.classFacade,
              s = o.eventsDispatcher,
              a = o.slideIndexChanger,
              c = o.sourceDisplayFacade,
              u = o.stageManager,
              d = o.thumbsTransformer,
              p = o.zoomer,
              h = e.elements.sourceAnimationWrappers,
              m = e.props,
              g = m.disableThumbs,
              b = m.initialAnimation,
              v = m.slideChangeAnimation,
              x = e.stageIndexes,
              w = ge(function () {
                i.removeFromEachElementClassIfContains(
                  'sourceAnimationWrappers',
                  f
                );
              }, 300);
            (a.changeTo = function (t) {
              we(e, t),
                p.ifZoomingResetZoom(),
                r.changeActiveCaptionFromTo(x.current, t),
                (x.current = t),
                u.updateStageIndexes(),
                g || d.transformToCurrentWithTransition(),
                n.setSlideNumber(t + 1),
                c.displaySourcesWhichShouldBeDisplayed(),
                s.dispatch('onSlideChange');
            }),
              (a.jumpTo = function (e) {
                var n = x.current;
                a.changeTo(e),
                  i.removeFromEachElementClassIfContains(
                    'sourceMainWrappers',
                    l
                  ),
                  he(h[n], b),
                  he(h[n], v),
                  h[n].classList.add(f),
                  he(h[e], b),
                  he(h[e], f),
                  h[e].classList.add(v),
                  w(),
                  t[e].zero(),
                  setTimeout(function () {
                    n !== x.current && t[n].negative();
                  }, 270);
              });
          })(e),
          (function (e) {
            var t = e.core.sourceEnhancementWrappersTransformer,
              n = e.data,
              o = (0, e.resolve)(Ye);
            (t.ifSourceIsLoadedTransformEnhancementWrapperAtIndex = function (
              e
            ) {
              n.isThumbing
                ? o.setUpThumbedEnhancementWrapperTransform()
                : o.setUpNotThumbedEnhancementWrapperTransformAtIndex(e),
                o.ifSourceIsLoadedTransformEnhancementWrapperAtIndex(e);
            }),
              (t.ifSourceIsLoadedTransformThumbedEnhancementWrapperAtIndex =
                function (e) {
                  o.setUpThumbedEnhancementWrapperTransform(e),
                    o.ifSourceIsLoadedTransformEnhancementWrapperAtIndex(e);
                }),
              (t.ifSourceIsLoadedTransformNotThumbedEnhancementWrapperAtIndex =
                function (e) {
                  o.setUpNotThumbedEnhancementWrapperTransformAtIndex(e),
                    o.ifSourceIsLoadedTransformEnhancementWrapperAtIndex(e);
                });
          })(e),
          (function (e) {
            var t = e.collections.sourcesRenderFunctions,
              n = e.core.sourceDisplayFacade,
              o = e.props.loadOnlyCurrentSource,
              r = e.stageIndexes;
            function i(e) {
              t[e] && (t[e](), delete t[e]);
            }
            n.displaySourcesWhichShouldBeDisplayed = function () {
              if (o) i(r.current);
              else for (var e in r) i(r[e]);
            };
          })(e),
          (function (e) {
            var t = e.core,
              n = t.classFacade,
              o = t.sourcesPointerDown,
              r = t.pointeringBucket,
              i = e.elements.sources,
              s = e.resolve,
              a = e.sourcePointerProps,
              c = e.stageIndexes,
              u = s(Xe);
            o.listener = function (e) {
              'touch' !== e.pointerType &&
                'VIDEO' !== e.target.tagName &&
                e.preventDefault(),
                r.runSwipingDownActionsForPropsAndEvent(a, e),
                (a.downScreenY = e.screenY),
                2 === a.pointersCount
                  ? u.runPinchActions()
                  : n.removeFromEachElementClassIfContains(
                      'sourceMainWrappers',
                      l
                    );
              var t = i[c.current];
              t && t.contains(e.target)
                ? (a.isSourceDownEventTarget = !0)
                : (a.isSourceDownEventTarget = !1);
            };
          })(e),
          (function (e) {
            var t = e.stageIndexes,
              n = e.core.stageManager,
              o = e.props.sources.length - 1;
            (n.getPreviousSlideIndex = function () {
              return 0 === t.current ? o : t.current - 1;
            }),
              (n.getNextSlideIndex = function () {
                return t.current === o ? 0 : t.current + 1;
              }),
              (n.updateStageIndexes =
                0 === o
                  ? function () {}
                  : 1 === o
                  ? function () {
                      0 === t.current
                        ? ((t.next = 1), delete t.previous)
                        : ((t.previous = 0), delete t.next);
                    }
                  : function () {
                      (t.previous = n.getPreviousSlideIndex()),
                        (t.next = n.getNextSlideIndex());
                    }),
              (n.isSourceInStage =
                o <= 2
                  ? function () {
                      return !0;
                    }
                  : function (e) {
                      var n = t.current;
                      if ((0 === n && e === o) || (n === o && 0 === e))
                        return !0;
                      var r = n - e;
                      return -1 === r || 0 === r || 1 === r;
                    });
          })(e),
          (function (e) {
            var t = e.collections,
              n = t.sourceMainWrapperTransformers,
              o = t.sourceSizers,
              r = e.core,
              i = r.sourceEnhancementWrappersTransformer,
              s = r.windowResizeActioner,
              a = r.thumbsTransformer,
              c = e.data,
              u = e.elements,
              d = e.props,
              p = d.disableThumbs,
              h = d.sources,
              m = e.stageIndexes,
              f = c.notThumbedSourceEnhancementWrapperScales,
              g = c.captionHeights,
              b = c.notThumbedSourceEnhancementWrapperTranslatesY,
              v = u.captions,
              x = u.sourceMainWrappers,
              w = u.thumbs;
            (s.runActions = function () {
              innerWidth < 992
                ? (c.maxSourceWidth = innerWidth)
                : (c.maxSourceWidth = 0.9 * innerWidth),
                (c.maxSourceHeight = 0.9 * innerHeight),
                p ||
                  ((c.thumbedSourceEnhancementWrapperScale =
                    1 - u.thumbsContainer.offsetHeight / innerHeight),
                  (c.thumbedSourceEnhancementWrapperTranslateY =
                    -u.thumbsContainer.offsetHeight / 2)),
                0 === c.unloadedThumbsCount && s.runThumbsActions();
              for (var e = 0; e < h.length; e++) {
                if (v[e]) {
                  g[e] = v[e].offsetHeight;
                  var t = g[e] - 25;
                  (f[e] = 1 - t / innerHeight), (b[e] = -t / 2);
                } else (f[e] = 1), (b[e] = 0);
                he(x[e], l),
                  i.ifSourceIsLoadedTransformEnhancementWrapperAtIndex(e),
                  e !== m.current && n[e].negative(),
                  o[e] && o[e].adjustSize();
              }
            }),
              (s.runThumbsActions = function () {
                c.thumbsInnerWidth = 0;
                for (var e = 0; e < h.length; e++)
                  c.thumbsInnerWidth += w[e].offsetWidth + 8;
                a.transformToCurrent();
              });
          })(e),
          (function (e) {
            var t = e.collections.sourceMainWrapperTransformers,
              n = e.core.zoomer,
              o = e.data,
              r = e.elements,
              i = e.resolve,
              s = e.sourcePointerProps,
              a = e.stageIndexes,
              c = r.sources,
              u = r.sourceMainWrappers,
              d = i(Re);
            (n.zoomTo = function (e) {
              (o.zoom = h(e)),
                (r.sourceWrappersContainer.style.transform = 'scale('.concat(
                  o.zoom,
                  ')'
                ));
            }),
              (n.ifZoomingResetZoom = function () {
                1 !== o.zoom && (n.zoomTo(1), n.stopZooming());
              }),
              (n.startZooming = function () {
                p('grab'),
                  d.runOpacity0ActionUsingMethod('add'),
                  d.runActiveEnhancementActionUsingMethod('remove');
              }),
              (n.stopZooming = function () {
                p('zoom-in'),
                  d.runOpacity0ActionUsingMethod('remove'),
                  d.runActiveEnhancementActionUsingMethod('add'),
                  u[a.current].classList.add(l),
                  t[a.current].translate(0, 0).zero(),
                  (s.upSwipedX = 0),
                  (s.upSwipedY = 0);
              });
            var p = function (e) {
                c[a.current] && (c[a.current].style.cursor = e);
              },
              h = function (e) {
                return parseFloat(e.toPrecision(12));
              };
          })(e);
      }
      function Ue(e, t) {
        var n = e.data.isThumbing,
          o = e.elements,
          r = o.captions,
          i = o.container,
          s = e.props.captions,
          a = e.stageIndexes.current;
        r[t] = document.createElement('div');
        var u = ''.concat(v, ' ').concat(c);
        a !== t || n || (u += ' '.concat(w)), (r[t].className = u);
        var l = document.createElement('div');
        (l.className = x),
          (l.innerHTML = s[t]),
          r[t].appendChild(l),
          i.appendChild(r[t]);
      }
      function Ze(e) {
        var t = e.props.disableLocalStorage;
        if (!t) {
          var n = localStorage.getItem('fslightbox-scrollbar-width');
          if (n) return n;
        }
        var o = (function () {
            var e = document.createElement('div'),
              t = e.style;
            return (
              (t.visibility = 'hidden'),
              (t.width = '100px'),
              (t.msOverflowStyle = 'scrollbar'),
              (t.overflow = 'scroll'),
              e
            );
          })(),
          r = (function () {
            var e = document.createElement('div');
            return (e.style.width = '100%'), e;
          })();
        document.body.appendChild(o);
        var i = o.offsetWidth;
        o.appendChild(r);
        var s = r.offsetWidth;
        document.body.removeChild(o);
        var a = i - s;
        return (
          t || localStorage.setItem('fslightbox-scrollbar-width', a.toString()),
          a
        );
      }
      function Ve(e) {
        var t = e.core.eventsDispatcher,
          n = e.data,
          o = e.elements,
          i = e.props,
          a = i.disableThumbs,
          c = i.showThumbsOnMount,
          u = i.sources;
        (n.isInitialized = !0),
          (n.scrollbarWidth = Ze(e)),
          (n.unloadedThumbsCount = u.length),
          (function (e) {
            for (
              var t = e.collections.sourceMainWrapperTransformers,
                n = e.props.sources,
                o = e.resolve,
                r = 0;
              r < n.length;
              r++
            )
              t[r] = o(le, [r]);
          })(e),
          a || ((n.isThumbing = c), be(e)),
          je(e),
          (o.container = document.createElement('div')),
          (o.container.className = ''
            .concat(r, 'container ')
            .concat(s, ' ')
            .concat(g)),
          (function (e) {
            var t = e.elements;
            (t.slideSwipingHoverer = document.createElement('div')),
              (t.slideSwipingHoverer.className = ''
                .concat(r, 'slide-swiping-hoverer ')
                .concat(s, ' ')
                .concat(d));
          })(e),
          ue(e),
          (function (e) {
            var t = e.elements;
            (t.slideshowBar = document.createElement('div')),
              (t.slideshowBar.className = ''
                .concat(r, 'slideshow-bar ')
                .concat(d)),
              t.container.appendChild(t.slideshowBar);
          })(e),
          (function (e) {
            var t = e.core.sourcesPointerDown.listener,
              n = e.elements,
              o = e.middleware,
              r = e.props.sources,
              i = document.createElement('div');
            (i.className = ''.concat(A, ' ').concat(d, ' ').concat(s)),
              n.container.appendChild(i),
              i.addEventListener('pointerdown', o(t, ie)),
              (n.sourceWrappersContainer = i);
            for (var a = 0; a < r.length; a++) re(e, a);
          })(e),
          (function (e) {
            for (var t = e.props.captions, n = 0; n < t.length; n++)
              t[n] && Ue(e, n);
          })(e),
          u.length > 1 &&
            (function (e) {
              de(e, 'previous'), de(e, 'next');
            })(e),
          a || ve(e),
          (function (e) {
            for (
              var t = e.props.sources,
                n = e.resolve,
                o = n(O),
                r = n(ee),
                i = n(ne, [o, r]),
                s = 0;
              s < t.length;
              s++
            )
              if ('string' == typeof t[s]) {
                var a = i.getTypeSetByClientForIndex(s);
                if (a) r.runActionsForSourceTypeAndIndex(a, s);
                else {
                  var c = o.getSourceTypeFromLocalStorageByUrl(t[s]);
                  c
                    ? r.runActionsForSourceTypeAndIndex(c, s)
                    : i.retrieveTypeWithXhrForIndex(s);
                }
              } else r.runActionsForSourceTypeAndIndex('custom', s);
          })(e),
          t.dispatch('onInit');
      }
      function qe(e) {
        var t = e.collections.sourceMainWrapperTransformers,
          n = e.componentsServices,
          o = e.core,
          r = o.captionsActioner,
          i = o.eventsDispatcher,
          s = o.lightboxOpener,
          a = o.globalEventsController,
          c = o.scrollbarRecompensor,
          l = o.sourceDisplayFacade,
          d = o.stageManager,
          p = o.windowResizeActioner,
          h = e.data,
          m = e.elements,
          f = e.stageIndexes;
        s.open = function () {
          var o =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 0,
            s = f.current;
          we(e, o),
            (f.current = o),
            h.isInitialized ? i.dispatch('onShow') : Ve(e),
            d.updateStageIndexes(),
            l.displaySourcesWhichShouldBeDisplayed(),
            r.changeActiveCaptionFromTo(s, o),
            n.setSlideNumber(o + 1),
            document.body.appendChild(m.container),
            document.documentElement.classList.add(u),
            c.addRecompense(),
            a.addListeners(),
            p.runActions(),
            t[f.current].zero(),
            i.dispatch('onOpen');
        };
      }
      function _e(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return Je(e);
          })(e) ||
          (function (e) {
            if ('undefined' != typeof Symbol && Symbol.iterator in Object(e))
              return Array.from(e);
          })(e) ||
          (function (e, t) {
            if (!e) return;
            if ('string' == typeof e) return Je(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === n && e.constructor && (n = e.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(e);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return Je(e, t);
          })(e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function Je(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
        return o;
      }
      function $e(e, t, n) {
        return ($e = Ge()
          ? Reflect.construct
          : function (e, t, n) {
              var o = [null];
              o.push.apply(o, t);
              var r = new (Function.bind.apply(e, o))();
              return n && Ke(r, n.prototype), r;
            }).apply(null, arguments);
      }
      function Ge() {
        if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ('function' == typeof Proxy) return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      }
      function Ke(e, t) {
        return (Ke =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function Qe(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return et(e);
          })(e) ||
          (function (e) {
            if ('undefined' != typeof Symbol && Symbol.iterator in Object(e))
              return Array.from(e);
          })(e) ||
          (function (e, t) {
            if (!e) return;
            if ('string' == typeof e) return et(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            'Object' === n && e.constructor && (n = e.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(e);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return et(e, t);
          })(e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            );
          })()
        );
      }
      function et(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
        return o;
      }
      function tt() {
        for (
          var e = document.getElementsByTagName('a'),
            t = function (t) {
              if (!e[t].hasAttribute('data-fslightbox')) return 'continue';
              var n = e[t].getAttribute('data-fslightbox'),
                o = e[t].getAttribute('href');
              fsLightboxInstances[n] ||
                (fsLightboxInstances[n] = new FsLightbox());
              var r = null;
              (r =
                '#' === o.charAt(0)
                  ? document.getElementById(o.substring(1))
                  : o),
                fsLightboxInstances[n].props.sources.push(r),
                fsLightboxInstances[n].elements.a.push(e[t]);
              var i = fsLightboxInstances[n].props.sources.length - 1;
              (e[t].onclick = function (e) {
                e.preventDefault(), fsLightboxInstances[n].open(i);
              }),
                d('captions', 'data-caption'),
                d('customClasses', 'data-class'),
                d('customClasses', 'data-custom-class'),
                d('types', 'data-type'),
                d('thumbs', 'data-thumb'),
                d('videosPosters', 'data-video-poster');
              for (
                var s = [
                    'href',
                    'data-fslightbox',
                    'data-caption',
                    'data-class',
                    'data-custom-class',
                    'data-type',
                    'data-thumb',
                    'data-video-poster',
                  ],
                  a = e[t].attributes,
                  c = fsLightboxInstances[n].props.customAttributes,
                  u = 0;
                u < a.length;
                u++
              )
                if (
                  -1 === s.indexOf(a[u].name) &&
                  'data-' === a[u].name.substr(0, 5)
                ) {
                  c[i] || (c[i] = {});
                  var l = a[u].name.substr(5);
                  c[i][l] = a[u].value;
                }
              function d(o, r) {
                e[t].hasAttribute(r) &&
                  (fsLightboxInstances[n].props[o][i] = e[t].getAttribute(r));
              }
            },
            n = 0;
          n < e.length;
          n++
        )
          t(n);
        var o = Object.keys(fsLightboxInstances);
        window.fsLightbox = fsLightboxInstances[o[o.length - 1]];
      }
      (window.FsLightbox = function () {
        var e = this;
        (this.props = {
          sources: [],
          maxYoutubeDimensions: null,
          customAttributes: [],
          customClasses: [],
          types: [],
          thumbs: [],
          thumbsIcons: [],
          captions: [],
          videosPosters: [],
          customToolbarButtons: [],
          initialAnimation: g,
          slideChangeAnimation: m,
          slideDistance: 0.3,
          slideshowTime: 8e3,
          UIFadeOutTime: 8e3,
          zoomIncrement: 0.25,
          toolbarButtons: {
            thumbs: {
              width: '17px',
              height: '17px',
              viewBox: '0 0 22 22',
              d: 'M 3 2 C 2.448 2 2 2.448 2 3 L 2 6 C 2 6.552 2.448 7 3 7 L 6 7 C 6.552 7 7 6.552 7 6 L 7 3 C 7 2.448 6.552 2 6 2 L 3 2 z M 10 2 C 9.448 2 9 2.448 9 3 L 9 6 C 9 6.552 9.448 7 10 7 L 13 7 C 13.552 7 14 6.552 14 6 L 14 3 C 14 2.448 13.552 2 13 2 L 10 2 z M 17 2 C 16.448 2 16 2.448 16 3 L 16 6 C 16 6.552 16.448 7 17 7 L 20 7 C 20.552 7 21 6.552 21 6 L 21 3 C 21 2.448 20.552 2 20 2 L 17 2 z M 3 9 C 2.448 9 2 9.448 2 10 L 2 13 C 2 13.552 2.448 14 3 14 L 6 14 C 6.552 14 7 13.552 7 13 L 7 10 C 7 9.448 6.552 9 6 9 L 3 9 z M 10 9 C 9.448 9 9 9.448 9 10 L 9 13 C 9 13.552 9.448 14 10 14 L 13 14 C 13.552 14 14 13.552 14 13 L 14 10 C 14 9.448 13.552 9 13 9 L 10 9 z M 17 9 C 16.448 9 16 9.448 16 10 L 16 13 C 16 13.552 16.448 14 17 14 L 20 14 C 20.552 14 21 13.552 21 13 L 21 10 C 21 9.448 20.552 9 20 9 L 17 9 z M 3 16 C 2.448 16 2 16.448 2 17 L 2 20 C 2 20.552 2.448 21 3 21 L 6 21 C 6.552 21 7 20.552 7 20 L 7 17 C 7 16.448 6.552 16 6 16 L 3 16 z M 10 16 C 9.448 16 9 16.448 9 17 L 9 20 C 9 20.552 9.448 21 10 21 L 13 21 C 13.552 21 14 20.552 14 20 L 14 17 C 14 16.448 13.552 16 13 16 L 10 16 z M 17 16 C 16.448 16 16 16.448 16 17 L 16 20 C 16 20.552 16.448 21 17 21 L 20 21 C 20.552 21 21 20.552 21 20 L 21 17 C 21 16.448 20.552 16 20 16 L 17 16 z',
              title: 'Thumbnails',
            },
            zoomIn: {
              width: '20px',
              height: '20px',
              viewBox: '0 0 30 30',
              d: 'M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z M 12.984375 7.9863281 A 1.0001 1.0001 0 0 0 12 9 L 12 12 L 9 12 A 1.0001 1.0001 0 1 0 9 14 L 12 14 L 12 17 A 1.0001 1.0001 0 1 0 14 17 L 14 14 L 17 14 A 1.0001 1.0001 0 1 0 17 12 L 14 12 L 14 9 A 1.0001 1.0001 0 0 0 12.984375 7.9863281 z',
              title: 'Zoom In',
            },
            zoomOut: {
              width: '20px',
              height: '20px',
              viewBox: '0 0 30 30',
              d: 'M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z M 9 12 A 1.0001 1.0001 0 1 0 9 14 L 17 14 A 1.0001 1.0001 0 1 0 17 12 L 9 12 z',
              title: 'Zoom Out',
            },
            slideshow: {
              start: {
                width: '16px',
                height: '16px',
                viewBox: '0 0 30 30',
                d: 'M 6 3 A 1 1 0 0 0 5 4 A 1 1 0 0 0 5 4.0039062 L 5 15 L 5 25.996094 A 1 1 0 0 0 5 26 A 1 1 0 0 0 6 27 A 1 1 0 0 0 6.5800781 26.8125 L 6.5820312 26.814453 L 26.416016 15.908203 A 1 1 0 0 0 27 15 A 1 1 0 0 0 26.388672 14.078125 L 6.5820312 3.1855469 L 6.5800781 3.1855469 A 1 1 0 0 0 6 3 z',
                title: 'Turn on slideshow',
              },
              pause: {
                width: '14px',
                height: '14px',
                viewBox: '0 0 356.19 356.19',
                d: 'M121,0c18,0,33,15,33,33v372c0,18-15,33-33,33s-32-15-32-33V33C89,15,103,0,121,0zM317,0c18,0,32,15,32,33v372c0,18-14,33-32,33s-33-15-33-33V33C284,15,299,0,317,0z',
                title: 'Turn off slideshow',
              },
            },
            fullscreen: {
              enter: {
                width: '20px',
                height: '20px',
                viewBox: '0 0 18 18',
                d: 'M4.5 11H3v4h4v-1.5H4.5V11zM3 7h1.5V4.5H7V3H3v4zm10.5 6.5H11V15h4v-4h-1.5v2.5zM11 3v1.5h2.5V7H15V3h-4z',
                title: 'Enter fullscreen',
              },
              exit: {
                width: '24px',
                height: '24px',
                viewBox: '0 0 950 1024',
                d: 'M682 342h128v84h-212v-212h84v128zM598 810v-212h212v84h-128v128h-84zM342 342v-128h84v212h-212v-84h128zM214 682v-84h212v212h-84v-128h-128z',
                title: 'Exit fullscreen',
              },
            },
            close: {
              width: '20px',
              height: '20px',
              viewBox: '0 0 24 24',
              d: 'M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z',
              title: 'Close',
            },
          },
          slideButtons: {
            previous: {
              width: '20px',
              height: '20px',
              viewBox: '0 0 20 20',
              d: 'M18.271,9.212H3.615l4.184-4.184c0.306-0.306,0.306-0.801,0-1.107c-0.306-0.306-0.801-0.306-1.107,0L1.21,9.403C1.194,9.417,1.174,9.421,1.158,9.437c-0.181,0.181-0.242,0.425-0.209,0.66c0.005,0.038,0.012,0.071,0.022,0.109c0.028,0.098,0.075,0.188,0.142,0.271c0.021,0.026,0.021,0.061,0.045,0.085c0.015,0.016,0.034,0.02,0.05,0.033l5.484,5.483c0.306,0.307,0.801,0.307,1.107,0c0.306-0.305,0.306-0.801,0-1.105l-4.184-4.185h14.656c0.436,0,0.788-0.353,0.788-0.788S18.707,9.212,18.271,9.212z',
              title: 'Previous',
            },
            next: {
              width: '20px',
              height: '20px',
              viewBox: '0 0 20 20',
              d: 'M1.729,9.212h14.656l-4.184-4.184c-0.307-0.306-0.307-0.801,0-1.107c0.305-0.306,0.801-0.306,1.106,0l5.481,5.482c0.018,0.014,0.037,0.019,0.053,0.034c0.181,0.181,0.242,0.425,0.209,0.66c-0.004,0.038-0.012,0.071-0.021,0.109c-0.028,0.098-0.075,0.188-0.143,0.271c-0.021,0.026-0.021,0.061-0.045,0.085c-0.015,0.016-0.034,0.02-0.051,0.033l-5.483,5.483c-0.306,0.307-0.802,0.307-1.106,0c-0.307-0.305-0.307-0.801,0-1.105l4.184-4.185H1.729c-0.436,0-0.788-0.353-0.788-0.788S1.293,9.212,1.729,9.212z',
              title: 'Next',
            },
          },
        }),
          (this.data = {
            isInitialized: !1,
            isThumbing: !1,
            maxSourceWidth: 0,
            maxSourceHeight: 0,
            scrollbarWidth: 0,
            isFullscreenOpen: !1,
            isSlideshowOn: !1,
            captionHeights: [],
            notThumbedSourceEnhancementWrapperScales: [],
            notThumbedSourceEnhancementWrapperTranslatesY: [],
            zoom: 1,
          }),
          (this.sourcePointerProps = {
            isPointering: !1,
            pointers: {},
            pointersCount: 0,
            downScreenX: null,
            downScreenY: null,
            isSourceDownEventTarget: !1,
            swipedX: 0,
            swipedY: 0,
            upSwipedX: 0,
            upSwipedY: 0,
            pinchedHypot: 0,
          }),
          (this.stageIndexes = {}),
          (this.elements = {
            a: [],
            captions: [],
            container: null,
            nav: null,
            slideSwipingHoverer: null,
            slideButtonPrevious: null,
            slideButtonNext: null,
            sourceWrappersContainer: null,
            slideshowBar: null,
            sourceAnimationWrappers: [],
            sourceEnhancementWrappers: [],
            sourceMainWrappers: [],
            sources: [],
          }),
          (this.componentsServices = {
            enterFullscreen: null,
            exitFullscreen: null,
            setSlideNumber: function () {},
            startSlideshow: null,
            stopSlideshow: null,
          }),
          (this.middleware = function (t, n) {
            return (function (e, t, n) {
              return function () {
                for (
                  var o = arguments.length, r = new Array(o), i = 0;
                  i < o;
                  i++
                )
                  r[i] = arguments[i];
                var s = n ? [].concat(_e(n), r) : r;
                t.apply(void 0, _e(s)) && e.apply(void 0, r);
              };
            })(t, n, [e]);
          }),
          (this.resolve = function (t) {
            var n =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : [];
            return n.unshift(e), $e(t, Qe(n));
          }),
          (this.collections = {
            sourceMainWrapperTransformers: [],
            sourceLoadHandlers: [],
            sourcesRenderFunctions: [],
            sourceSizers: [],
          }),
          (this.core = {
            captionsActioner: {},
            classFacade: {},
            clickZoomer: {},
            eventsDispatcher: {},
            fullscreenToggler: {},
            globalEventsController: {},
            inactiver: {},
            lightboxCloser: {},
            lightboxOpener: {},
            lightboxUpdater: {},
            pointeringBucket: {},
            scrollbarRecompensor: {},
            slideshowManager: {},
            slideChangeFacade: {},
            slideIndexChanger: {},
            sourceEnhancementWrappersTransformer: {},
            sourceDisplayFacade: {},
            sourcesPointerDown: {},
            stageManager: {},
            swipingActioner: {},
            windowResizeActioner: {},
            zoomer: {},
          }),
          qe(this),
          (this.open = this.core.lightboxOpener.open),
          (this.close = function () {
            return e.core.lightboxCloser.close();
          });
      }),
        (window.fsLightboxInstances = {}),
        tt(),
        (window.refreshFsLightbox = function () {
          for (var e in fsLightboxInstances) {
            var t = fsLightboxInstances[e].props;
            (fsLightboxInstances[e] = new FsLightbox()),
              (fsLightboxInstances[e].props = t),
              (fsLightboxInstances[e].props.sources = []),
              (fsLightboxInstances[e].elements.a = []);
          }
          tt();
        });
    },
  ]);
});
