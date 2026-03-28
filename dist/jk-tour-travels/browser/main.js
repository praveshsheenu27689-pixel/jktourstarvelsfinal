import {
  HeroComponent,
  ScrollService,
  gsapWithCSS
} from "./chunk-CDPUSMAP.js";
import {
  DataService,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  RequiredValidator,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-FBYEDTVH.js";
import {
  BrowserModule,
  DomRendererFactory2,
  NavigationEnd,
  Router,
  RouterModule,
  RouterOutlet,
  bootstrapApplication,
  provideRouter,
  withInMemoryScrolling
} from "./chunk-SDN65SGC.js";
import {
  ANIMATION_MODULE_TYPE,
  ChangeDetectionScheduler,
  CommonModule,
  DOCUMENT,
  DecimalPipe,
  EventEmitter,
  Inject,
  Injectable,
  NgForOf,
  NgIf,
  NgModule,
  NgZone,
  RendererFactory2,
  RuntimeError,
  ViewEncapsulation$1,
  __objRest,
  __spreadValues,
  filter,
  inject,
  performanceMarkFeature,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtrustConstantResourceUrl,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-U7W74ZSJ.js";

// src/app/components/loader/loader.component.ts
var LoaderComponent = class _LoaderComponent {
  ngAfterViewInit() {
    const pctEl = document.querySelector(".loader-percent");
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    gsapWithCSS.fromTo(".cloud", { opacity: 0, x: -30 }, { opacity: 0.12, x: 0, stagger: 0.4, duration: 1, ease: "power2.out" });
    gsapWithCSS.fromTo(".brand-jk", { opacity: 0, y: 30, letterSpacing: "20px" }, { opacity: 1, y: 0, letterSpacing: "8px", duration: 0.8, ease: "power3.out", delay: 0.2 });
    gsapWithCSS.fromTo(".brand-sub", { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", delay: 0.6 });
    gsapWithCSS.fromTo(".brand-tagline", { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out", delay: 0.9 });
    gsapWithCSS.to(".loader-plane", {
      x: vw + 200,
      y: -(vh * 0.8),
      duration: 2.2,
      ease: "power1.inOut",
      delay: 0.3
    });
    gsapWithCSS.to([".t1", ".t2", ".t3"], {
      x: vw + 200,
      y: -(vh * 0.8),
      duration: 2.2,
      ease: "power1.inOut",
      delay: 0.3,
      stagger: 0.06
    });
    gsapWithCSS.to(".loader-fill", {
      width: "100%",
      duration: 2.4,
      ease: "power2.inOut",
      delay: 0.1,
      onUpdate: function() {
        const el = document.querySelector(".loader-fill");
        if (el && pctEl) {
          const w = parseFloat(el.style.width || "0");
          pctEl.textContent = Math.min(Math.round(w), 100) + "%";
        }
      }
    });
    gsapWithCSS.to(".loader", {
      clipPath: "inset(0 0 100% 0)",
      duration: 0.7,
      ease: "power3.inOut",
      delay: 2.7
    });
  }
  static {
    this.\u0275fac = function LoaderComponent_Factory(t) {
      return new (t || _LoaderComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoaderComponent, selectors: [["app-loader"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 42, vars: 0, consts: [[1, "loader"], [1, "loader-plane"], ["viewBox", "0 0 120 120", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "plane-svg"], ["cx", "60", "cy", "60", "rx", "48", "ry", "12", "fill", "white", "opacity", "0.97"], ["d", "M108 60 Q120 60 108 54 L96 60 L108 66 Q120 60 108 60Z", "fill", "white"], ["d", "M18 60 L12 38 L28 52 Z", "fill", "rgba(255,255,255,0.9)"], ["d", "M22 60 L8 68 L26 64 Z", "fill", "rgba(255,255,255,0.85)"], ["d", "M22 60 L8 52 L26 56 Z", "fill", "rgba(255,255,255,0.85)"], ["d", "M72 58 L40 20 L52 56 Z", "fill", "rgba(255,255,255,0.95)"], ["d", "M72 62 L40 100 L52 64 Z", "fill", "rgba(255,255,255,0.95)"], ["d", "M72 58 L52 56 L52 64 L72 62 Z", "fill", "rgba(245,166,35,0.85)"], ["cx", "62", "cy", "50", "rx", "10", "ry", "4", "fill", "rgba(200,220,255,0.7)"], ["cx", "62", "cy", "70", "rx", "10", "ry", "4", "fill", "rgba(200,220,255,0.7)"], ["cx", "90", "cy", "57", "r", "2.5", "fill", "rgba(173,216,255,0.9)"], ["cx", "82", "cy", "57", "r", "2.5", "fill", "rgba(173,216,255,0.9)"], ["cx", "74", "cy", "57", "r", "2.5", "fill", "rgba(173,216,255,0.9)"], ["cx", "66", "cy", "57", "r", "2.5", "fill", "rgba(173,216,255,0.9)"], ["cx", "90", "cy", "63", "r", "2.5", "fill", "rgba(173,216,255,0.9)"], ["cx", "82", "cy", "63", "r", "2.5", "fill", "rgba(173,216,255,0.9)"], ["cx", "74", "cy", "63", "r", "2.5", "fill", "rgba(173,216,255,0.9)"], ["cx", "66", "cy", "63", "r", "2.5", "fill", "rgba(173,216,255,0.9)"], ["x", "28", "y", "58", "width", "80", "height", "4", "rx", "2", "fill", "rgba(245,166,35,0.6)"], [1, "trail", "t1"], [1, "trail", "t2"], [1, "trail", "t3"], [1, "cloud", "c1"], [1, "cloud", "c2"], [1, "cloud", "c3"], [1, "loader-brand"], [1, "brand-jk"], [1, "brand-sub"], [1, "brand-tagline"], [1, "loader-bar"], [1, "loader-fill"], [1, "loader-percent"]], template: function LoaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(2, "svg", 2);
        \u0275\u0275element(3, "ellipse", 3)(4, "path", 4)(5, "path", 5)(6, "path", 6)(7, "path", 7)(8, "path", 8)(9, "path", 9)(10, "path", 10)(11, "ellipse", 11)(12, "ellipse", 12)(13, "circle", 13)(14, "circle", 14)(15, "circle", 15)(16, "circle", 16)(17, "circle", 17)(18, "circle", 18)(19, "circle", 19)(20, "circle", 20)(21, "rect", 21);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275element(22, "div", 22)(23, "div", 23)(24, "div", 24);
        \u0275\u0275elementStart(25, "div", 25);
        \u0275\u0275text(26, "\u2601");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "div", 26);
        \u0275\u0275text(28, "\u2601");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "div", 27);
        \u0275\u0275text(30, "\u2601");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "div", 28)(32, "div", 29);
        \u0275\u0275text(33, "JK");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "div", 30);
        \u0275\u0275text(35, "TOURS & TRAVELS");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "div", 31);
        \u0275\u0275text(37, "Your Journey, Our Passion");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(38, "div", 32);
        \u0275\u0275element(39, "div", 33);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "div", 34);
        \u0275\u0275text(41, "0%");
        \u0275\u0275elementEnd()();
      }
    }, dependencies: [CommonModule], styles: ['\n\n.loader[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 9999;\n  background:\n    radial-gradient(\n      ellipse at 30% 50%,\n      #0d3b22 0%,\n      #071a0f 100%);\n  overflow: hidden;\n}\n.loader[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background-image:\n    radial-gradient(\n      1px 1px at 10% 20%,\n      rgba(255, 255, 255, 0.6) 0%,\n      transparent 100%),\n    radial-gradient(\n      1px 1px at 30% 60%,\n      rgba(255, 255, 255, 0.4) 0%,\n      transparent 100%),\n    radial-gradient(\n      1px 1px at 55% 15%,\n      rgba(255, 255, 255, 0.5) 0%,\n      transparent 100%),\n    radial-gradient(\n      1px 1px at 75% 40%,\n      rgba(255, 255, 255, 0.3) 0%,\n      transparent 100%),\n    radial-gradient(\n      1px 1px at 90% 70%,\n      rgba(255, 255, 255, 0.5) 0%,\n      transparent 100%),\n    radial-gradient(\n      1px 1px at 20% 80%,\n      rgba(255, 255, 255, 0.4) 0%,\n      transparent 100%),\n    radial-gradient(\n      1px 1px at 65% 85%,\n      rgba(255, 255, 255, 0.3) 0%,\n      transparent 100%),\n    radial-gradient(\n      2px 2px at 45% 45%,\n      rgba(245, 166, 35, 0.4) 0%,\n      transparent 100%);\n}\n.loader-plane[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 12%;\n  left: -220px;\n  z-index: 3;\n  filter: drop-shadow(0 0 32px rgba(245, 166, 35, 0.95)) drop-shadow(0 0 80px rgba(255, 255, 255, 0.5));\n}\n.plane-svg[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n}\n.trail[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  background: rgba(245, 166, 35, 0.5);\n  bottom: 18%;\n  z-index: 2;\n  filter: blur(2px);\n}\n.t1[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  left: -40px;\n}\n.t2[_ngcontent-%COMP%] {\n  width: 5px;\n  height: 5px;\n  left: -70px;\n  opacity: 0.6;\n}\n.t3[_ngcontent-%COMP%] {\n  width: 3px;\n  height: 3px;\n  left: -95px;\n  opacity: 0.3;\n}\n.cloud[_ngcontent-%COMP%] {\n  position: absolute;\n  font-size: 2.5rem;\n  opacity: 0.12;\n  color: #fff;\n  z-index: 1;\n  animation: _ngcontent-%COMP%_cloudDrift 8s ease-in-out infinite;\n}\n.c1[_ngcontent-%COMP%] {\n  top: 20%;\n  left: 10%;\n  animation-delay: 0s;\n  font-size: 3rem;\n}\n.c2[_ngcontent-%COMP%] {\n  top: 35%;\n  right: 15%;\n  animation-delay: 2s;\n  font-size: 2rem;\n}\n.c3[_ngcontent-%COMP%] {\n  top: 60%;\n  left: 25%;\n  animation-delay: 4s;\n  font-size: 1.8rem;\n}\n@keyframes _ngcontent-%COMP%_cloudDrift {\n  0%, 100% {\n    transform: translateX(0);\n  }\n  50% {\n    transform: translateX(20px);\n  }\n}\n.loader-brand[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: center;\n  color: #fff;\n  z-index: 4;\n}\n.brand-jk[_ngcontent-%COMP%] {\n  font-size: 5rem;\n  font-weight: 900;\n  line-height: 1;\n  font-family: "Georgia", serif;\n  background:\n    linear-gradient(\n      135deg,\n      #ffffff 20%,\n      #f5a623 80%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  letter-spacing: 8px;\n  text-shadow: none;\n}\n.brand-sub[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  letter-spacing: 6px;\n  text-transform: uppercase;\n  color: rgba(255, 255, 255, 0.75);\n  margin-top: 0.3rem;\n}\n.brand-tagline[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  letter-spacing: 2px;\n  color: rgba(245, 166, 35, 0.8);\n  margin-top: 0.5rem;\n  font-style: italic;\n}\n.loader-bar[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 8%;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 280px;\n  height: 3px;\n  background: rgba(255, 255, 255, 0.12);\n  border-radius: 2px;\n  overflow: hidden;\n  z-index: 4;\n}\n.loader-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 0;\n  background:\n    linear-gradient(\n      90deg,\n      #f5a623,\n      #fff 80%);\n  border-radius: 2px;\n}\n.loader-percent[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: calc(8% + 14px);\n  left: 50%;\n  transform: translateX(-50%);\n  font-size: 0.78rem;\n  font-weight: 700;\n  color: #f5a623;\n  letter-spacing: 2px;\n  z-index: 4;\n}\n/*# sourceMappingURL=loader.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoaderComponent, { className: "LoaderComponent", filePath: "src\\app\\components\\loader\\loader.component.ts", lineNumber: 174 });
})();

// src/app/components/topbar/topbar.component.ts
function TopbarComponent_div_0_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const w_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u{1F389} ", w_r2, " \xA0\xA0\xA0");
  }
}
function TopbarComponent_div_0_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const w_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u{1F389} ", w_r3, " \xA0\xA0\xA0");
  }
}
function TopbarComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "span", 4);
    \u0275\u0275element(4, "i", 5);
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "Holiday Deals");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 6)(8, "div", 7);
    \u0275\u0275template(9, TopbarComponent_div_0_span_9_Template, 2, 1, "span", 8)(10, TopbarComponent_div_0_span_10_Template, 2, 1, "span", 8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 9)(12, "button", 10);
    \u0275\u0275listener("click", function TopbarComponent_div_0_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.goTo("contact"));
    });
    \u0275\u0275element(13, "i", 11);
    \u0275\u0275text(14, " Contact Us ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 12);
    \u0275\u0275listener("click", function TopbarComponent_div_0_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.visible = false);
    });
    \u0275\u0275element(16, "i", 13);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275property("ngForOf", ctx_r3.data.typewriterWords);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.data.typewriterWords);
  }
}
var TopbarComponent = class _TopbarComponent {
  constructor(data, scrollSvc) {
    this.data = data;
    this.scrollSvc = scrollSvc;
    this.visible = true;
  }
  goTo(id) {
    this.scrollSvc.scrollTo(id);
  }
  static {
    this.\u0275fac = function TopbarComponent_Factory(t) {
      return new (t || _TopbarComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(ScrollService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TopbarComponent, selectors: [["app-topbar"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 1, vars: 1, consts: [["class", "topbar", 4, "ngIf"], [1, "topbar"], [1, "container", "topbar-inner"], [1, "topbar-left"], [1, "topbar-item"], [1, "fas", "fa-tag"], [1, "topbar-marquee"], [1, "marquee-track"], [4, "ngFor", "ngForOf"], [1, "topbar-right"], [1, "topbar-contact", 3, "click"], [1, "fas", "fa-phone"], [1, "topbar-close", 3, "click"], [1, "fas", "fa-times"]], template: function TopbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, TopbarComponent_div_0_Template, 17, 2, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.visible);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf], styles: ["\n\n.topbar[_ngcontent-%COMP%] {\n  background: var(--primary-dark);\n  color: rgba(255, 255, 255, 0.9);\n  font-size: 0.78rem;\n  padding: 0.45rem 0;\n  position: relative;\n  z-index: 1001;\n}\n.topbar-inner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n}\n.topbar-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  flex-shrink: 0;\n  @media (max-width: 768px) {\n    display: none;\n  }\n}\n.topbar-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.35rem;\n  font-weight: 600;\n  i {\n    color: var(--accent);\n  }\n}\n.topbar-marquee[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow: hidden;\n  -webkit-mask-image:\n    linear-gradient(\n      to right,\n      transparent,\n      black 8%,\n      black 92%,\n      transparent);\n  mask-image:\n    linear-gradient(\n      to right,\n      transparent,\n      black 8%,\n      black 92%,\n      transparent);\n}\n.marquee-track[_ngcontent-%COMP%] {\n  display: flex;\n  white-space: nowrap;\n  animation: _ngcontent-%COMP%_marqueeScroll 35s linear infinite;\n  span {\n    color: rgba(255, 255, 255, 0.85);\n    font-weight: 500;\n    padding-right: 2rem;\n  }\n}\n@keyframes _ngcontent-%COMP%_marqueeScroll {\n  from {\n    transform: translateX(0);\n  }\n  to {\n    transform: translateX(-50%);\n  }\n}\n.topbar-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  flex-shrink: 0;\n}\n.topbar-contact[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.35rem;\n  background: var(--accent);\n  color: #fff;\n  padding: 0.25rem 0.75rem;\n  border-radius: 50px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  transition: background 0.2s;\n  cursor: pointer;\n  border: none;\n  font-family: var(--font-body);\n  &:hover {\n    background: var(--accent-dark);\n  }\n  @media (max-width: 600px) {\n    display: none;\n  }\n}\n.topbar-close[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.6);\n  font-size: 0.75rem;\n  padding: 0.2rem 0.4rem;\n  transition: color 0.2s;\n  &:hover {\n    color: #fff;\n  }\n}\n/*# sourceMappingURL=topbar.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TopbarComponent, { className: "TopbarComponent", filePath: "src\\app\\components\\topbar\\topbar.component.ts", lineNumber: 82 });
})();

// src/app/components/navbar/navbar.component.ts
function NavbarComponent_div_11_a_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 37);
    \u0275\u0275listener("click", function NavbarComponent_div_11_a_5_Template_a_click_0_listener() {
      const d_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.navigateDomestic(d_r4.name);
      return \u0275\u0275resetView(ctx_r1.closeMega());
    });
    \u0275\u0275elementStart(1, "div", 38);
    \u0275\u0275element(2, "img", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const d_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", d_r4.image, \u0275\u0275sanitizeUrl)("alt", d_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r4.name);
  }
}
function NavbarComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275listener("mouseenter", function NavbarComponent_div_11_Template_div_mouseenter_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openMega("domestic"));
    })("mouseleave", function NavbarComponent_div_11_Template_div_mouseleave_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeMega());
    });
    \u0275\u0275elementStart(1, "div", 34);
    \u0275\u0275element(2, "i", 24);
    \u0275\u0275text(3, " Within India");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 35);
    \u0275\u0275template(5, NavbarComponent_div_11_a_5_Template, 5, 3, "a", 36);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r1.domesticDestinations);
  }
}
function NavbarComponent_div_16_a_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 37);
    \u0275\u0275listener("click", function NavbarComponent_div_16_a_5_Template_a_click_0_listener() {
      const d_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.navigateInternational(d_r7.name);
      return \u0275\u0275resetView(ctx_r1.closeMega());
    });
    \u0275\u0275elementStart(1, "div", 38);
    \u0275\u0275element(2, "img", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const d_r7 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", d_r7.image, \u0275\u0275sanitizeUrl)("alt", d_r7.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r7.name);
  }
}
function NavbarComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275listener("mouseenter", function NavbarComponent_div_16_Template_div_mouseenter_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openMega("international"));
    })("mouseleave", function NavbarComponent_div_16_Template_div_mouseleave_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeMega());
    });
    \u0275\u0275elementStart(1, "div", 34);
    \u0275\u0275element(2, "i", 25);
    \u0275\u0275text(3, " Outside India");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 35);
    \u0275\u0275template(5, NavbarComponent_div_16_a_5_Template, 5, 3, "a", 36);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r1.internationalDestinations);
  }
}
function NavbarComponent_div_21_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 37);
    \u0275\u0275listener("click", function NavbarComponent_div_21_a_2_Template_a_click_0_listener() {
      const item_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.navigateExperience(item_r9.label);
      return \u0275\u0275resetView(ctx_r1.closeMega());
    });
    \u0275\u0275elementStart(1, "div", 38);
    \u0275\u0275element(2, "img", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", item_r9.image, \u0275\u0275sanitizeUrl)("alt", item_r9.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r9.label);
  }
}
function NavbarComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40)(1, "div", 41);
    \u0275\u0275template(2, NavbarComponent_div_21_a_2_Template, 5, 3, "a", 36);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.data.megaExperiences);
  }
}
function NavbarComponent_div_34_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 49);
    \u0275\u0275listener("click", function NavbarComponent_div_34_button_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.clearSearch());
    });
    \u0275\u0275element(1, "i", 50);
    \u0275\u0275elementEnd();
  }
}
function NavbarComponent_div_34_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275listener("click", function NavbarComponent_div_34_div_6_div_1_Template_div_click_0_listener() {
      const r_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.selectResult(r_r13));
    });
    \u0275\u0275elementStart(1, "div", 54);
    \u0275\u0275element(2, "img", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 55)(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(8, "i", 56);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r13 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", r_r13.image, \u0275\u0275sanitizeUrl)("alt", r_r13.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r13.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r13.type);
  }
}
function NavbarComponent_div_34_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275template(1, NavbarComponent_div_34_div_6_div_1_Template, 9, 4, "div", 52);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.searchResults);
  }
}
function NavbarComponent_div_34_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275element(1, "i", 16);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1('No results for "', ctx_r1.searchQuery, '"');
  }
}
function NavbarComponent_div_34_div_8_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 23);
    \u0275\u0275listener("click", function NavbarComponent_div_34_div_8_button_4_Template_button_click_0_listener() {
      const tag_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.quickSearch(tag_r15));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tag_r15 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tag_r15);
  }
}
function NavbarComponent_div_34_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58)(1, "p", 59);
    \u0275\u0275text(2, "Popular Searches");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 60);
    \u0275\u0275template(4, NavbarComponent_div_34_div_8_button_4_Template, 2, 1, "button", 61);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx_r1.popularTags);
  }
}
function NavbarComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275listener("click", function NavbarComponent_div_34_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(1, "div", 43);
    \u0275\u0275element(2, "i", 16);
    \u0275\u0275elementStart(3, "input", 44, 0);
    \u0275\u0275twoWayListener("ngModelChange", function NavbarComponent_div_34_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchQuery, $event) || (ctx_r1.searchQuery = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function NavbarComponent_div_34_Template_input_input_3_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSearch());
    })("keydown.enter", function NavbarComponent_div_34_Template_input_keydown_enter_3_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.doSearch());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, NavbarComponent_div_34_button_5_Template, 2, 0, "button", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, NavbarComponent_div_34_div_6_Template, 2, 1, "div", 46)(7, NavbarComponent_div_34_div_7_Template, 4, 1, "div", 47)(8, NavbarComponent_div_34_div_8_Template, 5, 1, "div", 48);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchQuery);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.searchQuery);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.searchResults.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.searchQuery && ctx_r1.searchResults.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.searchQuery);
  }
}
var NavbarComponent = class _NavbarComponent {
  constructor(data, scrollSvc, router) {
    this.data = data;
    this.scrollSvc = scrollSvc;
    this.router = router;
    this.scrolled = false;
    this.mobileOpen = false;
    this.searchOpen = false;
    this.activeMenu = null;
    this.activeSection = "home";
    this.searchQuery = "";
    this.searchResults = [];
    this.domesticDestinations = [
      { name: "Andamans", image: "https://cdn.yourholiday.me/static/dynimg/destination/33/600x300/2210456-2210455_andaman.jpg" },
      { name: "Goa", image: "https://cdn.yourholiday.me/static/dynimg/itinerary/76/600x300/2210775-2210774_goa-pack1.jpg" },
      { name: "Kerala", image: "https://cdn.yourholiday.me/static/dynimg/itinerary/14/600x300/2228853-2228852_kerala-1.jpg" },
      { name: "Himachal Pradesh", image: "https://cdn.yourholiday.me/static/dynimg/itinerary/11/600x300/2228921-2228920_hp-3.jpg" },
      { name: "Rajasthan", image: "https://cdn.yourholiday.me/static/dynimg/itinerary/37/600x450/2185258-2185257_pexels-photo-209741.jpg" },
      { name: "Ladakh", image: "https://cdn.yourholiday.me/static/dynimg/itinerary/99/600x300/3191480-3191479_azin-javadzadeh-wmpyrpas7dq-unsplash.jpg" },
      { name: "Uttarakhand", image: "https://cdn.yourholiday.me/static/dynimg/itinerary/21/600x300/2228887-2228886_manali-1.jpg" },
      { name: "Kashmir", image: "https://cdn.yourholiday.me/static/dynimg/itinerary/28/600x300/2210839-2210838_hampi.jpg" }
    ];
    this.internationalDestinations = [
      { name: "Bali", image: "https://cdn.yourholiday.me/static/dynimg/destination/48/600x300/3996290-3996289_bali-4.jpg" },
      { name: "Dubai", image: "https://cdn.yourholiday.me/static/dynimg/destination/16/600x300/3598628-3598627_adobestock_47088158.jpg" },
      { name: "Thailand", image: "https://cdn.yourholiday.me/static/dynimg/destination/32/600x300/3076721-3076720_thailand2.jpg" },
      { name: "Singapore", image: "https://cdn.yourholiday.me/static/dynimg/destination/58/600x300/3996296-3996295_singapore-stock-image.jpg" },
      { name: "Europe", image: "https://cdn.yourholiday.me/static/dynimg/destination/21/600x300/2190173-2190172_europe-1-main-image.jpg" },
      { name: "Maldives", image: "https://cdn.yourholiday.me/static/dynimg/destination/98/600x300/2750963-2750962_maldives.jpg" },
      { name: "Malaysia", image: "https://cdn.yourholiday.me/static/dynimg/destination/64/600x300/3160627-3160626_tourist-places-in-malaysia.jpg" },
      { name: "Switzerland", image: "https://cdn.yourholiday.me/static/dynimg/destination/74/600x300/2190187-2190186_zurich-switzerland-view-of-the-historic-city-center-with-famous-fraumunster-church-5.jpg" },
      { name: "Australia", image: "https://cdn.yourholiday.me/static/dynimg/destination/58/600x300/2210344-2210343_australia.jpg" },
      { name: "Japan", image: "https://cdn.yourholiday.me/static/dynimg/destination/64/600x300/2750318-2750317_japan.jpg" },
      { name: "Turkey", image: "https://cdn.yourholiday.me/static/dynimg/destination/45/600x300/2750974-2750973_turkey.jpg" },
      { name: "Vietnam", image: "https://cdn.yourholiday.me/static/dynimg/destination/35/600x300/3078047-3078046_vietnam.jpg" }
    ];
    this.popularTags = ["Dubai", "Bali", "Europe", "Thailand", "Andaman", "Kerala", "Singapore", "Maldives"];
  }
  ngOnInit() {
    this.scrollSvc.init();
    this.sub = this.scrollSvc.activeSection$.subscribe((s) => this.activeSection = s);
    setTimeout(() => {
      gsapWithCSS.fromTo(".navbar", { y: -80, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" });
      gsapWithCSS.fromTo(".nav-link", { y: -20, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.08, duration: 0.5, ease: "power2.out", delay: 0.2 });
    }, 3400);
  }
  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
  onScroll() {
    this.scrolled = window.scrollY > 60;
  }
  onDocClick() {
    this.searchOpen = false;
    this.activeMenu = null;
  }
  toggleMobile() {
    this.mobileOpen = !this.mobileOpen;
    if (this.mobileOpen) {
      setTimeout(() => {
        gsapWithCSS.fromTo(".mobile-nav-item", { x: -30, opacity: 0 }, { x: 0, opacity: 1, stagger: 0.07, duration: 0.4, ease: "power2.out" });
      }, 10);
    }
  }
  toggleSearch(e) {
    e.stopPropagation();
    this.searchOpen = !this.searchOpen;
    if (this.searchOpen) {
      this.searchQuery = "";
      this.searchResults = [];
      setTimeout(() => {
        gsapWithCSS.fromTo(".search-panel", { y: -10, opacity: 0 }, { y: 0, opacity: 1, duration: 0.3, ease: "power2.out" });
        const input = document.querySelector(".search-panel input");
        input?.focus();
      }, 10);
    }
  }
  onSearch() {
    const q = this.searchQuery.toLowerCase().trim();
    if (!q) {
      this.searchResults = [];
      return;
    }
    const results = [];
    this.domesticDestinations.forEach((d) => {
      if (d.name.toLowerCase().includes(q)) {
        results.push({ name: d.name, type: "Domestic Destination", image: d.image, section: "domestic:" + d.name });
      }
    });
    this.internationalDestinations.forEach((d) => {
      if (d.name.toLowerCase().includes(q)) {
        results.push({ name: d.name, type: "International Destination", image: d.image, section: "international:" + d.name });
      }
    });
    this.data.destinations.forEach((d) => {
      if (d.name.toLowerCase().includes(q) && !results.find((r) => r.name === d.name)) {
        results.push({ name: d.name, type: "Destination", image: d.image, section: "dest:" + d.name });
      }
    });
    const allPkgs = [
      ...this.data.domesticPackages,
      ...this.data.internationalPackages,
      ...this.data.europePackages,
      ...this.data.andamanPackages
    ];
    allPkgs.forEach((p) => {
      if (p.title.toLowerCase().includes(q) || p.itinerary.toLowerCase().includes(q)) {
        results.push({ name: p.title, type: p.category + " Package", image: p.image, section: "home:packages" });
      }
    });
    this.searchResults = results.slice(0, 6);
  }
  doSearch() {
    if (this.searchResults.length > 0) {
      this.selectResult(this.searchResults[0]);
    } else {
      this.navigateToSection("destinations");
      this.searchOpen = false;
    }
  }
  selectResult(r) {
    this.searchOpen = false;
    this.searchQuery = "";
    this.searchResults = [];
    if (r.section.startsWith("domestic:")) {
      const name = r.section.replace("domestic:", "");
      this.navigateDomestic(name);
    } else if (r.section.startsWith("international:")) {
      const name = r.section.replace("international:", "");
      this.navigateInternational(name);
    } else if (r.section.startsWith("dest:")) {
      const name = r.section.replace("dest:", "");
      const key = name.toLowerCase().replace(/\s+/g, "-");
      this.router.navigate(["/destination", key]);
    } else if (r.section.startsWith("home:")) {
      const sectionId = r.section.replace("home:", "");
      this.navigateToSection(sectionId);
    } else {
      this.navigateToSection(r.section);
    }
  }
  navigateDomestic(name) {
    const key = name.toLowerCase().replace(/\s+/g, "-");
    this.router.navigate(["/destination", key]);
    this.mobileOpen = false;
    this.activeMenu = null;
  }
  navigateInternational(name) {
    const key = name.toLowerCase().replace(/\s+/g, "-");
    this.router.navigate(["/destination", key]);
    this.mobileOpen = false;
    this.activeMenu = null;
  }
  navigateExperience(label) {
    const key = label.toLowerCase().replace(/\s+/g, "-");
    this.router.navigate(["/experience", key]);
    this.mobileOpen = false;
    this.activeMenu = null;
  }
  goHome() {
    this.router.navigate(["/"]);
    this.mobileOpen = false;
    this.activeMenu = null;
  }
  quickSearch(tag) {
    this.searchQuery = tag;
    this.onSearch();
  }
  clearSearch() {
    this.searchQuery = "";
    this.searchResults = [];
  }
  openMega(key) {
    this.activeMenu = key;
    setTimeout(() => {
      gsapWithCSS.fromTo(".mega-item", { y: -10, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.04, duration: 0.3, ease: "power2.out" });
    }, 10);
  }
  closeMega() {
    this.activeMenu = null;
  }
  // Navigate to a home page section from anywhere
  navigateToSection(id) {
    this.mobileOpen = false;
    this.searchOpen = false;
    this.activeMenu = null;
    const isHome = this.router.url === "/" || this.router.url === "";
    if (isHome) {
      this.scrollSvc.scrollTo(id);
    } else {
      this.router.navigate(["/"]).then(() => {
        setTimeout(() => this.scrollSvc.scrollTo(id), 400);
      });
    }
  }
  scrollTo(id) {
    this.navigateToSection(id);
  }
  static {
    this.\u0275fac = function NavbarComponent_Factory(t) {
      return new (t || _NavbarComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(ScrollService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NavbarComponent, selectors: [["app-navbar"]], hostBindings: function NavbarComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("scroll", function NavbarComponent_scroll_HostBindingHandler() {
          return ctx.onScroll();
        }, false, \u0275\u0275resolveWindow)("click", function NavbarComponent_click_HostBindingHandler() {
          return ctx.onDocClick();
        }, false, \u0275\u0275resolveDocument);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 72, vars: 22, consts: [["searchInput", ""], [1, "navbar"], [1, "container", "nav-container"], [1, "nav-logo", 2, "cursor", "pointer", 3, "click"], ["src", "https://cdn.yourholiday.me/static/dynimg/partner/37/300x150/3562268-3562267_j-k-new-logo.jpg", "alt", "J K Tours And Travels, Pune", "onerror", "this.style.display='none'; this.nextElementSibling.style.display='flex'", "loading", "eager", 1, "logo-img"], [1, "logo-text-fallback", 2, "display", "none"], [1, "nav-links"], [1, "nav-item", 3, "mouseenter", "mouseleave"], [1, "nav-link"], [1, "fas", "fa-chevron-down"], ["class", "mega-menu mega-menu--dest", 3, "mouseenter", "mouseleave", 4, "ngIf"], ["class", "mega-menu", 4, "ngIf"], [1, "nav-item", 3, "mouseenter"], [1, "nav-link", 3, "click"], [1, "nav-actions"], ["title", "Search", 1, "nav-icon-btn", "search-trigger", 3, "click"], [1, "fas", "fa-search"], ["class", "search-panel", 3, "click", 4, "ngIf"], [1, "nav-divider"], [1, "btn", "btn-accent", "btn-sm", 2, "cursor", "pointer", 3, "click"], ["aria-label", "Menu", 1, "hamburger", 3, "click"], [1, "mobile-menu"], [1, "mobile-nav-item"], [3, "click"], [1, "fas", "fa-flag"], [1, "fas", "fa-globe"], [1, "fas", "fa-briefcase"], [1, "fas", "fa-info-circle"], [1, "fas", "fa-concierge-bell"], [1, "fas", "fa-envelope"], [1, "mobile-nav-item", "mobile-cta"], [1, "btn", "btn-accent", 3, "click"], [1, "fas", "fa-calendar-check"], [1, "mega-menu", "mega-menu--dest", 3, "mouseenter", "mouseleave"], [1, "mega-menu-header"], [1, "mega-grid", "mega-grid--dest"], ["class", "mega-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "mega-item", 3, "click"], [1, "mega-img"], ["loading", "lazy", 3, "src", "alt"], [1, "mega-menu"], [1, "mega-grid"], [1, "search-panel", 3, "click"], [1, "search-input-wrap"], ["type", "text", "placeholder", "Search destinations, packages...", "autofocus", "", 3, "ngModelChange", "input", "keydown.enter", "ngModel"], ["class", "search-clear", 3, "click", 4, "ngIf"], ["class", "search-results", 4, "ngIf"], ["class", "search-empty", 4, "ngIf"], ["class", "search-popular", 4, "ngIf"], [1, "search-clear", 3, "click"], [1, "fas", "fa-times"], [1, "search-results"], ["class", "search-result-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "search-result-item", 3, "click"], [1, "result-img"], [1, "result-info"], [1, "fas", "fa-arrow-right"], [1, "search-empty"], [1, "search-popular"], [1, "popular-label"], [1, "popular-tags"], [3, "click", 4, "ngFor", "ngForOf"]], template: function NavbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "nav", 1)(1, "div", 2)(2, "a", 3);
        \u0275\u0275listener("click", function NavbarComponent_Template_a_click_2_listener() {
          return ctx.goHome();
        });
        \u0275\u0275element(3, "img", 4);
        \u0275\u0275elementStart(4, "span", 5);
        \u0275\u0275text(5, "JK Tours");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "ul", 6)(7, "li", 7);
        \u0275\u0275listener("mouseenter", function NavbarComponent_Template_li_mouseenter_7_listener() {
          return ctx.openMega("domestic");
        })("mouseleave", function NavbarComponent_Template_li_mouseleave_7_listener() {
          return ctx.closeMega();
        });
        \u0275\u0275elementStart(8, "a", 8);
        \u0275\u0275text(9, " Domestic ");
        \u0275\u0275element(10, "i", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275template(11, NavbarComponent_div_11_Template, 6, 1, "div", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "li", 7);
        \u0275\u0275listener("mouseenter", function NavbarComponent_Template_li_mouseenter_12_listener() {
          return ctx.openMega("international");
        })("mouseleave", function NavbarComponent_Template_li_mouseleave_12_listener() {
          return ctx.closeMega();
        });
        \u0275\u0275elementStart(13, "a", 8);
        \u0275\u0275text(14, " International ");
        \u0275\u0275element(15, "i", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275template(16, NavbarComponent_div_16_Template, 6, 1, "div", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "li", 7);
        \u0275\u0275listener("mouseenter", function NavbarComponent_Template_li_mouseenter_17_listener() {
          return ctx.openMega("experiences");
        })("mouseleave", function NavbarComponent_Template_li_mouseleave_17_listener() {
          return ctx.closeMega();
        });
        \u0275\u0275elementStart(18, "a", 8);
        \u0275\u0275text(19, " Business Tour ");
        \u0275\u0275element(20, "i", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275template(21, NavbarComponent_div_21_Template, 3, 1, "div", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "li", 12);
        \u0275\u0275listener("mouseenter", function NavbarComponent_Template_li_mouseenter_22_listener() {
          return ctx.closeMega();
        });
        \u0275\u0275elementStart(23, "a", 13);
        \u0275\u0275listener("click", function NavbarComponent_Template_a_click_23_listener() {
          return ctx.navigateToSection("about");
        });
        \u0275\u0275text(24, " About Us ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "li", 12);
        \u0275\u0275listener("mouseenter", function NavbarComponent_Template_li_mouseenter_25_listener() {
          return ctx.closeMega();
        });
        \u0275\u0275elementStart(26, "a", 13);
        \u0275\u0275listener("click", function NavbarComponent_Template_a_click_26_listener() {
          return ctx.navigateToSection("timeline");
        });
        \u0275\u0275text(27, " Services ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "li", 12);
        \u0275\u0275listener("mouseenter", function NavbarComponent_Template_li_mouseenter_28_listener() {
          return ctx.closeMega();
        });
        \u0275\u0275elementStart(29, "a", 13);
        \u0275\u0275listener("click", function NavbarComponent_Template_a_click_29_listener() {
          return ctx.navigateToSection("contact");
        });
        \u0275\u0275text(30, " Contact Us ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(31, "div", 14)(32, "button", 15);
        \u0275\u0275listener("click", function NavbarComponent_Template_button_click_32_listener($event) {
          return ctx.toggleSearch($event);
        });
        \u0275\u0275element(33, "i", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275template(34, NavbarComponent_div_34_Template, 9, 5, "div", 17);
        \u0275\u0275element(35, "div", 18);
        \u0275\u0275elementStart(36, "a", 19);
        \u0275\u0275listener("click", function NavbarComponent_Template_a_click_36_listener() {
          return ctx.navigateToSection("booking");
        });
        \u0275\u0275text(37, " Book Now ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "button", 20);
        \u0275\u0275listener("click", function NavbarComponent_Template_button_click_38_listener() {
          return ctx.toggleMobile();
        });
        \u0275\u0275element(39, "span")(40, "span")(41, "span");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(42, "div", 21)(43, "ul")(44, "li", 22)(45, "a", 23);
        \u0275\u0275listener("click", function NavbarComponent_Template_a_click_45_listener() {
          return ctx.navigateToSection("destinations");
        });
        \u0275\u0275element(46, "i", 24);
        \u0275\u0275text(47, " Domestic");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(48, "li", 22)(49, "a", 23);
        \u0275\u0275listener("click", function NavbarComponent_Template_a_click_49_listener() {
          return ctx.navigateToSection("packages");
        });
        \u0275\u0275element(50, "i", 25);
        \u0275\u0275text(51, " International");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(52, "li", 22)(53, "a", 23);
        \u0275\u0275listener("click", function NavbarComponent_Template_a_click_53_listener() {
          return ctx.navigateToSection("categories");
        });
        \u0275\u0275element(54, "i", 26);
        \u0275\u0275text(55, " Business Tour");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(56, "li", 22)(57, "a", 23);
        \u0275\u0275listener("click", function NavbarComponent_Template_a_click_57_listener() {
          return ctx.navigateToSection("about");
        });
        \u0275\u0275element(58, "i", 27);
        \u0275\u0275text(59, " About Us");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(60, "li", 22)(61, "a", 23);
        \u0275\u0275listener("click", function NavbarComponent_Template_a_click_61_listener() {
          return ctx.navigateToSection("timeline");
        });
        \u0275\u0275element(62, "i", 28);
        \u0275\u0275text(63, " Services");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(64, "li", 22)(65, "a", 23);
        \u0275\u0275listener("click", function NavbarComponent_Template_a_click_65_listener() {
          return ctx.navigateToSection("contact");
        });
        \u0275\u0275element(66, "i", 29);
        \u0275\u0275text(67, " Contact Us");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(68, "li", 30)(69, "a", 31);
        \u0275\u0275listener("click", function NavbarComponent_Template_a_click_69_listener() {
          return ctx.navigateToSection("booking");
        });
        \u0275\u0275element(70, "i", 32);
        \u0275\u0275text(71, " Book Now");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275classProp("scrolled", ctx.scrolled);
        \u0275\u0275advance(8);
        \u0275\u0275classProp("active", ctx.activeSection === "destinations");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.activeMenu === "domestic");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.activeSection === "packages");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.activeMenu === "international");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.activeSection === "categories");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.activeMenu === "experiences");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("active", ctx.activeSection === "about");
        \u0275\u0275advance(3);
        \u0275\u0275classProp("active", ctx.activeSection === "timeline");
        \u0275\u0275advance(3);
        \u0275\u0275classProp("active", ctx.activeSection === "contact");
        \u0275\u0275advance(5);
        \u0275\u0275property("ngIf", ctx.searchOpen);
        \u0275\u0275advance(4);
        \u0275\u0275classProp("open", ctx.mobileOpen);
        \u0275\u0275advance(4);
        \u0275\u0275classProp("open", ctx.mobileOpen);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, RouterModule], styles: ['\n\n.navbar[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  padding: 1rem 0;\n  top: 32px;\n  transition: all 0.35s ease;\n  background: transparent;\n}\n.navbar.scrolled[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.97);\n  -webkit-backdrop-filter: blur(16px);\n  backdrop-filter: blur(16px);\n  padding: 0.6rem 0;\n  top: 0;\n  box-shadow: 0 2px 24px rgba(30, 58, 95, 0.12);\n}\n.navbar.scrolled[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: var(--text-dark);\n}\n.navbar.scrolled[_ngcontent-%COMP%]   .nav-icon-btn[_ngcontent-%COMP%] {\n  color: var(--text-dark);\n}\n.navbar.scrolled[_ngcontent-%COMP%]   .hamburger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: var(--text-dark);\n}\n.navbar.scrolled[_ngcontent-%COMP%]   .logo-img[_ngcontent-%COMP%] {\n  filter: none;\n}\n.nav-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 2rem;\n}\n.nav-logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n  flex-shrink: 0;\n  cursor: pointer;\n}\n.nav-logo[_ngcontent-%COMP%]   .logo-img[_ngcontent-%COMP%] {\n  height: 52px;\n  width: auto;\n  max-width: 160px;\n  object-fit: contain;\n  transition: opacity 0.3s, filter 0.3s;\n  filter: brightness(0) invert(1);\n  display: block;\n}\n.nav-logo[_ngcontent-%COMP%]   .logo-text-fallback[_ngcontent-%COMP%] {\n  display: none;\n  align-items: center;\n  gap: 0.5rem;\n  color: #fff;\n  font-weight: 800;\n  font-size: 1.1rem;\n  letter-spacing: 1px;\n}\n.nav-logo[_ngcontent-%COMP%]:hover   .logo-img[_ngcontent-%COMP%] {\n  opacity: 0.85;\n}\n.navbar.scrolled[_ngcontent-%COMP%]   .logo-img[_ngcontent-%COMP%] {\n  filter: none !important;\n}\n.nav-links[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.1rem;\n  margin-left: auto;\n  list-style: none;\n}\n.nav-item[_ngcontent-%COMP%] {\n  position: relative;\n}\n.nav-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.3rem;\n  padding: 0.5rem 0.85rem;\n  color: rgba(255, 255, 255, 0.92);\n  font-size: 0.88rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: color 0.3s;\n  position: relative;\n  white-space: nowrap;\n}\n.nav-link[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  bottom: 0;\n  left: 0.85rem;\n  right: 0.85rem;\n  height: 2px;\n  background: var(--accent);\n  transform: scaleX(0);\n  transition: transform 0.3s ease;\n  border-radius: 1px;\n}\n.nav-link[_ngcontent-%COMP%]:hover, .nav-link.active[_ngcontent-%COMP%] {\n  color: var(--accent);\n}\n.nav-link[_ngcontent-%COMP%]:hover::after, .nav-link.active[_ngcontent-%COMP%]::after {\n  transform: scaleX(1);\n}\n.nav-link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n  transition: transform 0.3s;\n}\n.nav-item[_ngcontent-%COMP%]:hover   .nav-link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.mega-menu-header[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  color: var(--primary);\n  margin-bottom: 1rem;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.mega-menu-header[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--accent);\n}\n.mega-menu--dest[_ngcontent-%COMP%] {\n  min-width: 700px;\n}\n.mega-grid--dest[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(4, 1fr);\n}\n.mega-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 0.75rem);\n  left: 50%;\n  transform: translateX(-50%);\n  background: #fff;\n  border-radius: var(--radius-md);\n  box-shadow: 0 20px 60px rgba(30, 58, 95, 0.18);\n  padding: 1.5rem;\n  min-width: 600px;\n  animation: _ngcontent-%COMP%_megaFadeIn 0.25s ease;\n  z-index: 100;\n  border-top: 3px solid var(--accent);\n}\n@keyframes _ngcontent-%COMP%_megaFadeIn {\n  from {\n    opacity: 0;\n    transform: translateX(-50%) translateY(-8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(-50%) translateY(0);\n  }\n}\n.mega-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 0.75rem;\n}\n.mega-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  border-radius: var(--radius-sm);\n  overflow: hidden;\n  color: var(--text-dark);\n  font-size: 0.82rem;\n  font-weight: 600;\n  transition: var(--transition);\n  text-align: center;\n  cursor: pointer;\n}\n.mega-item[_ngcontent-%COMP%]   .mega-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 90px;\n  border-radius: var(--radius-sm);\n  overflow: hidden;\n  position: relative;\n}\n.mega-item[_ngcontent-%COMP%]   .mega-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.3s ease;\n  opacity: 1;\n  filter: none;\n}\n.mega-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: 0 0.3rem 0.3rem;\n  color: var(--text-dark);\n  font-weight: 600;\n}\n.mega-item[_ngcontent-%COMP%]:hover {\n  color: var(--primary);\n}\n.mega-item[_ngcontent-%COMP%]:hover   .mega-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scale(1.08);\n}\n.mega-item[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\n  color: var(--accent);\n}\n.nav-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  position: relative;\n  flex-shrink: 0;\n}\n.nav-icon-btn[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: rgba(255, 255, 255, 0.9);\n  font-size: 0.95rem;\n  transition: var(--transition);\n}\n.nav-icon-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.15);\n  color: #fff;\n}\n.nav-divider[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 24px;\n  background: rgba(255, 255, 255, 0.3);\n}\n.search-panel[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 1rem);\n  right: 0;\n  background: #fff;\n  border-radius: var(--radius-md);\n  box-shadow: 0 20px 60px rgba(30, 58, 95, 0.18);\n  width: 420px;\n  z-index: 200;\n  overflow: hidden;\n  border-top: 3px solid var(--accent);\n}\n.search-input-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 1rem 1.25rem;\n  border-bottom: 1px solid var(--border);\n}\n.search-input-wrap[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  color: var(--primary);\n  font-size: 0.95rem;\n  flex-shrink: 0;\n}\n.search-input-wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  outline: none;\n  font-size: 0.95rem;\n  font-family: var(--font-body);\n  color: var(--text-dark);\n}\n.search-input-wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: var(--text-light);\n}\n.search-clear[_ngcontent-%COMP%] {\n  color: var(--text-light);\n  font-size: 0.8rem;\n  padding: 0.2rem;\n  transition: color 0.2s;\n}\n.search-clear[_ngcontent-%COMP%]:hover {\n  color: var(--text-dark);\n}\n.search-results[_ngcontent-%COMP%] {\n  max-height: 320px;\n  overflow-y: auto;\n}\n.search-result-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.75rem 1.25rem;\n  cursor: pointer;\n  transition: background 0.2s;\n  border-bottom: 1px solid #f5f5f5;\n}\n.search-result-item[_ngcontent-%COMP%]:hover {\n  background: var(--bg-light);\n}\n.search-result-item[_ngcontent-%COMP%]   .result-img[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: var(--radius-xs);\n  overflow: hidden;\n  flex-shrink: 0;\n}\n.search-result-item[_ngcontent-%COMP%]   .result-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.search-result-item[_ngcontent-%COMP%]   .result-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.search-result-item[_ngcontent-%COMP%]   .result-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.88rem;\n  color: var(--text-dark);\n}\n.search-result-item[_ngcontent-%COMP%]   .result-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-light);\n}\n.search-result-item[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  color: var(--text-light);\n  font-size: 0.75rem;\n}\n.search-empty[_ngcontent-%COMP%] {\n  padding: 2rem;\n  text-align: center;\n  color: var(--text-light);\n}\n.search-empty[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  margin-bottom: 0.5rem;\n  display: block;\n}\n.search-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n}\n.search-popular[_ngcontent-%COMP%] {\n  padding: 1rem 1.25rem;\n}\n.popular-label[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 700;\n  color: var(--text-light);\n  text-transform: uppercase;\n  letter-spacing: 1.5px;\n  margin-bottom: 0.75rem;\n}\n.popular-tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.4rem;\n}\n.popular-tags[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 0.3rem 0.85rem;\n  border-radius: 50px;\n  background: var(--bg-light);\n  border: 1px solid var(--border);\n  font-size: 0.8rem;\n  color: var(--text-mid);\n  transition: var(--transition);\n  cursor: pointer;\n  font-family: var(--font-body);\n}\n.popular-tags[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: var(--primary);\n  color: #fff;\n  border-color: var(--primary);\n}\n.hamburger[_ngcontent-%COMP%] {\n  display: none;\n  flex-direction: column;\n  gap: 5px;\n  padding: 4px;\n}\n.hamburger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  width: 24px;\n  height: 2px;\n  background: #fff;\n  border-radius: 2px;\n  transition: var(--transition);\n}\n.hamburger.open[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(1) {\n  transform: rotate(45deg) translate(5px, 5px);\n}\n.hamburger.open[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n  opacity: 0;\n}\n.hamburger.open[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\n  transform: rotate(-45deg) translate(5px, -5px);\n}\n.mobile-menu[_ngcontent-%COMP%] {\n  display: none;\n  background: #fff;\n  padding: 0;\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 0.4s ease, padding 0.3s ease;\n}\n.mobile-menu.open[_ngcontent-%COMP%] {\n  max-height: 500px;\n  padding: 0.5rem 0;\n}\n.mobile-menu[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n}\n.mobile-menu[_ngcontent-%COMP%]   .mobile-nav-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.9rem 1.5rem;\n  color: var(--text-dark);\n  font-weight: 500;\n  font-size: 0.95rem;\n  border-bottom: 1px solid #f0f0f0;\n  transition: color 0.3s, background 0.3s;\n}\n.mobile-menu[_ngcontent-%COMP%]   .mobile-nav-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--primary);\n  width: 16px;\n  font-size: 0.85rem;\n}\n.mobile-menu[_ngcontent-%COMP%]   .mobile-nav-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--accent);\n  background: var(--bg-light);\n}\n.mobile-menu[_ngcontent-%COMP%]   .mobile-cta[_ngcontent-%COMP%] {\n  padding: 1rem 1.5rem;\n}\n.mobile-menu[_ngcontent-%COMP%]   .mobile-cta[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-flex;\n}\n@media (max-width: 1100px) {\n  .nav-links[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .nav-divider[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .hamburger[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .mobile-menu[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n@media (max-width: 480px) {\n  .search-panel[_ngcontent-%COMP%] {\n    width: 320px;\n    right: -1rem;\n  }\n}\n/*# sourceMappingURL=navbar.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NavbarComponent, { className: "NavbarComponent", filePath: "src\\app\\components\\navbar\\navbar.component.ts", lineNumber: 21 });
})();

// src/app/components/sticky-bar/sticky-bar.component.ts
var StickyBarComponent = class _StickyBarComponent {
  constructor(scrollSvc) {
    this.scrollSvc = scrollSvc;
    this.visible = false;
  }
  onScroll() {
    this.visible = window.scrollY > window.innerHeight * 0.6;
  }
  goTo(id) {
    this.scrollSvc.scrollTo(id);
  }
  static {
    this.\u0275fac = function StickyBarComponent_Factory(t) {
      return new (t || _StickyBarComponent)(\u0275\u0275directiveInject(ScrollService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StickyBarComponent, selectors: [["app-sticky-bar"]], hostBindings: function StickyBarComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("scroll", function StickyBarComponent_scroll_HostBindingHandler() {
          return ctx.onScroll();
        }, false, \u0275\u0275resolveWindow);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 24, vars: 2, consts: [[1, "sticky-bar"], [1, "container", "sticky-inner"], [1, "sticky-brand"], [1, "sticky-logo"], [1, "sticky-tagline"], [1, "sticky-offers"], [1, "sticky-offer"], [1, "fas", "fa-tag"], [1, "fas", "fa-shield-alt"], [1, "fas", "fa-headset"], [1, "sticky-actions"], [1, "sticky-call", 3, "click"], [1, "fas", "fa-phone"], [1, "btn", "btn-accent", "btn-sm", 3, "click"], [1, "fas", "fa-calendar-check"]], template: function StickyBarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275text(4, "\u2708 J K Tours And Travels");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "span", 4);
        \u0275\u0275text(6, "Pune | Global Travel Experts");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 5)(8, "span", 6);
        \u0275\u0275element(9, "i", 7);
        \u0275\u0275text(10, " Up to 30% OFF");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "span", 6);
        \u0275\u0275element(12, "i", 8);
        \u0275\u0275text(13, " Free Cancellation");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "span", 6);
        \u0275\u0275element(15, "i", 9);
        \u0275\u0275text(16, " 24/7 Support");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "div", 10)(18, "button", 11);
        \u0275\u0275listener("click", function StickyBarComponent_Template_button_click_18_listener() {
          return ctx.goTo("contact");
        });
        \u0275\u0275element(19, "i", 12);
        \u0275\u0275text(20, " Call Now ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "button", 13);
        \u0275\u0275listener("click", function StickyBarComponent_Template_button_click_21_listener() {
          return ctx.goTo("booking");
        });
        \u0275\u0275element(22, "i", 14);
        \u0275\u0275text(23, " Book Now ");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275classProp("visible", ctx.visible);
      }
    }, dependencies: [CommonModule], styles: ['\n\n.sticky-bar[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: -80px;\n  left: 0;\n  right: 0;\n  z-index: 998;\n  background: rgba(10, 46, 26, 0.97);\n  -webkit-backdrop-filter: blur(12px);\n  backdrop-filter: blur(12px);\n  border-top: 2px solid var(--accent);\n  padding: 0.75rem 0;\n  transition: bottom 0.4s cubic-bezier(0.4, 0, 0.2, 1);\n  box-shadow: 0 -4px 24px rgba(0, 0, 0, 0.2);\n  &.visible {\n    bottom: 0;\n  }\n}\n.sticky-inner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1.5rem;\n  flex-wrap: wrap;\n}\n.sticky-brand[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  @media (max-width: 768px) {\n    display: none;\n  }\n}\n.sticky-logo[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #fff;\n  font-family: "Playfair Display", serif;\n}\n.sticky-tagline[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: var(--accent);\n  letter-spacing: 1px;\n  text-transform: uppercase;\n}\n.sticky-offers[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1.5rem;\n  flex-wrap: wrap;\n  @media (max-width: 600px) {\n    display: none;\n  }\n}\n.sticky-offer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  font-size: 0.82rem;\n  color: rgba(255, 255, 255, 0.85);\n  font-weight: 500;\n  i {\n    color: var(--accent);\n    font-size: 0.75rem;\n  }\n}\n.sticky-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.sticky-call[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  color: rgba(255, 255, 255, 0.85);\n  font-size: 0.88rem;\n  font-weight: 600;\n  padding: 0.5rem 1rem;\n  border-radius: 50px;\n  border: 1.5px solid rgba(255, 255, 255, 0.25);\n  transition: all 0.3s;\n  cursor: pointer;\n  background: none;\n  font-family: var(--font-body);\n  &:hover {\n    border-color: var(--accent);\n    color: var(--accent);\n  }\n  i {\n    font-size: 0.8rem;\n  }\n}\n/*# sourceMappingURL=sticky-bar.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StickyBarComponent, { className: "StickyBarComponent", filePath: "src\\app\\components\\sticky-bar\\sticky-bar.component.ts", lineNumber: 75 });
})();

// node_modules/gsap/Observer.js
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  return Constructor;
}
var gsap;
var _coreInitted;
var _clamp;
var _win;
var _doc;
var _docEl;
var _body;
var _isTouch;
var _pointerType;
var ScrollTrigger;
var _root;
var _normalizer;
var _eventTypes;
var _context;
var _getGSAP = function _getGSAP2() {
  return gsap || typeof window !== "undefined" && (gsap = window.gsap) && gsap.registerPlugin && gsap;
};
var _startup = 1;
var _observers = [];
var _scrollers = [];
var _proxies = [];
var _getTime = Date.now;
var _bridge = function _bridge2(name, value) {
  return value;
};
var _integrate = function _integrate2() {
  var core = ScrollTrigger.core, data = core.bridge || {}, scrollers = core._scrollers, proxies = core._proxies;
  scrollers.push.apply(scrollers, _scrollers);
  proxies.push.apply(proxies, _proxies);
  _scrollers = scrollers;
  _proxies = proxies;
  _bridge = function _bridge3(name, value) {
    return data[name](value);
  };
};
var _getProxyProp = function _getProxyProp2(element, property) {
  return ~_proxies.indexOf(element) && _proxies[_proxies.indexOf(element) + 1][property];
};
var _isViewport = function _isViewport2(el) {
  return !!~_root.indexOf(el);
};
var _addListener = function _addListener2(element, type, func, passive, capture) {
  return element.addEventListener(type, func, {
    passive: passive !== false,
    capture: !!capture
  });
};
var _removeListener = function _removeListener2(element, type, func, capture) {
  return element.removeEventListener(type, func, !!capture);
};
var _scrollLeft = "scrollLeft";
var _scrollTop = "scrollTop";
var _onScroll = function _onScroll2() {
  return _normalizer && _normalizer.isPressed || _scrollers.cache++;
};
var _scrollCacheFunc = function _scrollCacheFunc2(f, doNotCache) {
  var cachingFunc = function cachingFunc2(value) {
    if (value || value === 0) {
      _startup && (_win.history.scrollRestoration = "manual");
      var isNormalizing = _normalizer && _normalizer.isPressed;
      value = cachingFunc2.v = Math.round(value) || (_normalizer && _normalizer.iOS ? 1 : 0);
      f(value);
      cachingFunc2.cacheID = _scrollers.cache;
      isNormalizing && _bridge("ss", value);
    } else if (doNotCache || _scrollers.cache !== cachingFunc2.cacheID || _bridge("ref")) {
      cachingFunc2.cacheID = _scrollers.cache;
      cachingFunc2.v = f();
    }
    return cachingFunc2.v + cachingFunc2.offset;
  };
  cachingFunc.offset = 0;
  return f && cachingFunc;
};
var _horizontal = {
  s: _scrollLeft,
  p: "left",
  p2: "Left",
  os: "right",
  os2: "Right",
  d: "width",
  d2: "Width",
  a: "x",
  sc: _scrollCacheFunc(function(value) {
    return arguments.length ? _win.scrollTo(value, _vertical.sc()) : _win.pageXOffset || _doc[_scrollLeft] || _docEl[_scrollLeft] || _body[_scrollLeft] || 0;
  })
};
var _vertical = {
  s: _scrollTop,
  p: "top",
  p2: "Top",
  os: "bottom",
  os2: "Bottom",
  d: "height",
  d2: "Height",
  a: "y",
  op: _horizontal,
  sc: _scrollCacheFunc(function(value) {
    return arguments.length ? _win.scrollTo(_horizontal.sc(), value) : _win.pageYOffset || _doc[_scrollTop] || _docEl[_scrollTop] || _body[_scrollTop] || 0;
  })
};
var _getTarget = function _getTarget2(t, self) {
  return (self && self._ctx && self._ctx.selector || gsap.utils.toArray)(t)[0] || (typeof t === "string" && gsap.config().nullTargetWarn !== false ? console.warn("Element not found:", t) : null);
};
var _isWithin = function _isWithin2(element, list) {
  var i = list.length;
  while (i--) {
    if (list[i] === element || list[i].contains(element)) {
      return true;
    }
  }
  return false;
};
var _getScrollFunc = function _getScrollFunc2(element, _ref) {
  var s = _ref.s, sc = _ref.sc;
  _isViewport(element) && (element = _doc.scrollingElement || _docEl);
  var i = _scrollers.indexOf(element), offset = sc === _vertical.sc ? 1 : 2;
  !~i && (i = _scrollers.push(element) - 1);
  _scrollers[i + offset] || _addListener(element, "scroll", _onScroll);
  var prev = _scrollers[i + offset], func = prev || (_scrollers[i + offset] = _scrollCacheFunc(_getProxyProp(element, s), true) || (_isViewport(element) ? sc : _scrollCacheFunc(function(value) {
    return arguments.length ? element[s] = value : element[s];
  })));
  func.target = element;
  prev || (func.smooth = gsap.getProperty(element, "scrollBehavior") === "smooth");
  return func;
};
var _getVelocityProp = function _getVelocityProp2(value, minTimeRefresh, useDelta) {
  var v1 = value, v2 = value, t1 = _getTime(), t2 = t1, min = minTimeRefresh || 50, dropToZeroTime = Math.max(500, min * 3), update = function update2(value2, force) {
    var t = _getTime();
    if (force || t - t1 > min) {
      v2 = v1;
      v1 = value2;
      t2 = t1;
      t1 = t;
    } else if (useDelta) {
      v1 += value2;
    } else {
      v1 = v2 + (value2 - v2) / (t - t2) * (t1 - t2);
    }
  }, reset = function reset2() {
    v2 = v1 = useDelta ? 0 : v1;
    t2 = t1 = 0;
  }, getVelocity = function getVelocity2(latestValue) {
    var tOld = t2, vOld = v2, t = _getTime();
    (latestValue || latestValue === 0) && latestValue !== v1 && update(latestValue);
    return t1 === t2 || t - t2 > dropToZeroTime ? 0 : (v1 + (useDelta ? vOld : -vOld)) / ((useDelta ? t : t1) - tOld) * 1e3;
  };
  return {
    update,
    reset,
    getVelocity
  };
};
var _getEvent = function _getEvent2(e, preventDefault) {
  preventDefault && !e._gsapAllow && e.preventDefault();
  return e.changedTouches ? e.changedTouches[0] : e;
};
var _getAbsoluteMax = function _getAbsoluteMax2(a) {
  var max = Math.max.apply(Math, a), min = Math.min.apply(Math, a);
  return Math.abs(max) >= Math.abs(min) ? max : min;
};
var _setScrollTrigger = function _setScrollTrigger2() {
  ScrollTrigger = gsap.core.globals().ScrollTrigger;
  ScrollTrigger && ScrollTrigger.core && _integrate();
};
var _initCore = function _initCore2(core) {
  gsap = core || _getGSAP();
  if (!_coreInitted && gsap && typeof document !== "undefined" && document.body) {
    _win = window;
    _doc = document;
    _docEl = _doc.documentElement;
    _body = _doc.body;
    _root = [_win, _doc, _docEl, _body];
    _clamp = gsap.utils.clamp;
    _context = gsap.core.context || function() {
    };
    _pointerType = "onpointerenter" in _body ? "pointer" : "mouse";
    _isTouch = Observer.isTouch = _win.matchMedia && _win.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in _win || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0;
    _eventTypes = Observer.eventTypes = ("ontouchstart" in _docEl ? "touchstart,touchmove,touchcancel,touchend" : !("onpointerdown" in _docEl) ? "mousedown,mousemove,mouseup,mouseup" : "pointerdown,pointermove,pointercancel,pointerup").split(",");
    setTimeout(function() {
      return _startup = 0;
    }, 500);
    _setScrollTrigger();
    _coreInitted = 1;
  }
  return _coreInitted;
};
_horizontal.op = _vertical;
_scrollers.cache = 0;
var Observer = /* @__PURE__ */ function() {
  function Observer2(vars) {
    this.init(vars);
  }
  var _proto = Observer2.prototype;
  _proto.init = function init(vars) {
    _coreInitted || _initCore(gsap) || console.warn("Please gsap.registerPlugin(Observer)");
    ScrollTrigger || _setScrollTrigger();
    var tolerance = vars.tolerance, dragMinimum = vars.dragMinimum, type = vars.type, target = vars.target, lineHeight = vars.lineHeight, debounce = vars.debounce, preventDefault = vars.preventDefault, onStop = vars.onStop, onStopDelay = vars.onStopDelay, ignore = vars.ignore, wheelSpeed = vars.wheelSpeed, event = vars.event, onDragStart = vars.onDragStart, onDragEnd = vars.onDragEnd, onDrag = vars.onDrag, onPress = vars.onPress, onRelease = vars.onRelease, onRight = vars.onRight, onLeft = vars.onLeft, onUp = vars.onUp, onDown = vars.onDown, onChangeX = vars.onChangeX, onChangeY = vars.onChangeY, onChange = vars.onChange, onToggleX = vars.onToggleX, onToggleY = vars.onToggleY, onHover = vars.onHover, onHoverEnd = vars.onHoverEnd, onMove = vars.onMove, ignoreCheck = vars.ignoreCheck, isNormalizer = vars.isNormalizer, onGestureStart = vars.onGestureStart, onGestureEnd = vars.onGestureEnd, onWheel = vars.onWheel, onEnable = vars.onEnable, onDisable = vars.onDisable, onClick = vars.onClick, scrollSpeed = vars.scrollSpeed, capture = vars.capture, allowClicks = vars.allowClicks, lockAxis = vars.lockAxis, onLockAxis = vars.onLockAxis;
    this.target = target = _getTarget(target) || _docEl;
    this.vars = vars;
    ignore && (ignore = gsap.utils.toArray(ignore));
    tolerance = tolerance || 1e-9;
    dragMinimum = dragMinimum || 0;
    wheelSpeed = wheelSpeed || 1;
    scrollSpeed = scrollSpeed || 1;
    type = type || "wheel,touch,pointer";
    debounce = debounce !== false;
    lineHeight || (lineHeight = parseFloat(_win.getComputedStyle(_body).lineHeight) || 22);
    var id, onStopDelayedCall, dragged, moved, wheeled, locked, axis, self = this, prevDeltaX = 0, prevDeltaY = 0, passive = vars.passive || !preventDefault && vars.passive !== false, scrollFuncX = _getScrollFunc(target, _horizontal), scrollFuncY = _getScrollFunc(target, _vertical), scrollX = scrollFuncX(), scrollY = scrollFuncY(), limitToTouch = ~type.indexOf("touch") && !~type.indexOf("pointer") && _eventTypes[0] === "pointerdown", isViewport = _isViewport(target), ownerDoc = target.ownerDocument || _doc, deltaX = [0, 0, 0], deltaY = [0, 0, 0], onClickTime = 0, clickCapture = function clickCapture2() {
      return onClickTime = _getTime();
    }, _ignoreCheck = function _ignoreCheck2(e, isPointerOrTouch) {
      return (self.event = e) && ignore && _isWithin(e.target, ignore) || isPointerOrTouch && limitToTouch && e.pointerType !== "touch" || ignoreCheck && ignoreCheck(e, isPointerOrTouch);
    }, onStopFunc = function onStopFunc2() {
      self._vx.reset();
      self._vy.reset();
      onStopDelayedCall.pause();
      onStop && onStop(self);
    }, update = function update2() {
      var dx = self.deltaX = _getAbsoluteMax(deltaX), dy = self.deltaY = _getAbsoluteMax(deltaY), changedX = Math.abs(dx) >= tolerance, changedY = Math.abs(dy) >= tolerance;
      onChange && (changedX || changedY) && onChange(self, dx, dy, deltaX, deltaY);
      if (changedX) {
        onRight && self.deltaX > 0 && onRight(self);
        onLeft && self.deltaX < 0 && onLeft(self);
        onChangeX && onChangeX(self);
        onToggleX && self.deltaX < 0 !== prevDeltaX < 0 && onToggleX(self);
        prevDeltaX = self.deltaX;
        deltaX[0] = deltaX[1] = deltaX[2] = 0;
      }
      if (changedY) {
        onDown && self.deltaY > 0 && onDown(self);
        onUp && self.deltaY < 0 && onUp(self);
        onChangeY && onChangeY(self);
        onToggleY && self.deltaY < 0 !== prevDeltaY < 0 && onToggleY(self);
        prevDeltaY = self.deltaY;
        deltaY[0] = deltaY[1] = deltaY[2] = 0;
      }
      if (moved || dragged) {
        onMove && onMove(self);
        if (dragged) {
          onDragStart && dragged === 1 && onDragStart(self);
          onDrag && onDrag(self);
          dragged = 0;
        }
        moved = false;
      }
      locked && !(locked = false) && onLockAxis && onLockAxis(self);
      if (wheeled) {
        onWheel(self);
        wheeled = false;
      }
      id = 0;
    }, onDelta = function onDelta2(x, y, index) {
      deltaX[index] += x;
      deltaY[index] += y;
      self._vx.update(x);
      self._vy.update(y);
      debounce ? id || (id = requestAnimationFrame(update)) : update();
    }, onTouchOrPointerDelta = function onTouchOrPointerDelta2(x, y) {
      if (lockAxis && !axis) {
        self.axis = axis = Math.abs(x) > Math.abs(y) ? "x" : "y";
        locked = true;
      }
      if (axis !== "y") {
        deltaX[2] += x;
        self._vx.update(x, true);
      }
      if (axis !== "x") {
        deltaY[2] += y;
        self._vy.update(y, true);
      }
      debounce ? id || (id = requestAnimationFrame(update)) : update();
    }, _onDrag = function _onDrag2(e) {
      if (_ignoreCheck(e, 1)) {
        return;
      }
      e = _getEvent(e, preventDefault);
      var x = e.clientX, y = e.clientY, dx = x - self.x, dy = y - self.y, isDragging = self.isDragging;
      self.x = x;
      self.y = y;
      if (isDragging || (dx || dy) && (Math.abs(self.startX - x) >= dragMinimum || Math.abs(self.startY - y) >= dragMinimum)) {
        dragged || (dragged = isDragging ? 2 : 1);
        isDragging || (self.isDragging = true);
        onTouchOrPointerDelta(dx, dy);
      }
    }, _onPress = self.onPress = function(e) {
      if (_ignoreCheck(e, 1) || e && e.button) {
        return;
      }
      self.axis = axis = null;
      onStopDelayedCall.pause();
      self.isPressed = true;
      e = _getEvent(e);
      prevDeltaX = prevDeltaY = 0;
      self.startX = self.x = e.clientX;
      self.startY = self.y = e.clientY;
      self._vx.reset();
      self._vy.reset();
      _addListener(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, passive, true);
      self.deltaX = self.deltaY = 0;
      onPress && onPress(self);
    }, _onRelease = self.onRelease = function(e) {
      if (_ignoreCheck(e, 1)) {
        return;
      }
      _removeListener(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, true);
      var isTrackingDrag = !isNaN(self.y - self.startY), wasDragging = self.isDragging, isDragNotClick = wasDragging && (Math.abs(self.x - self.startX) > 3 || Math.abs(self.y - self.startY) > 3), eventData = _getEvent(e);
      if (!isDragNotClick && isTrackingDrag) {
        self._vx.reset();
        self._vy.reset();
        if (preventDefault && allowClicks) {
          gsap.delayedCall(0.08, function() {
            if (_getTime() - onClickTime > 300 && !e.defaultPrevented) {
              if (e.target.click) {
                e.target.click();
              } else if (ownerDoc.createEvent) {
                var syntheticEvent = ownerDoc.createEvent("MouseEvents");
                syntheticEvent.initMouseEvent("click", true, true, _win, 1, eventData.screenX, eventData.screenY, eventData.clientX, eventData.clientY, false, false, false, false, 0, null);
                e.target.dispatchEvent(syntheticEvent);
              }
            }
          });
        }
      }
      self.isDragging = self.isGesturing = self.isPressed = false;
      onStop && wasDragging && !isNormalizer && onStopDelayedCall.restart(true);
      dragged && update();
      onDragEnd && wasDragging && onDragEnd(self);
      onRelease && onRelease(self, isDragNotClick);
    }, _onGestureStart = function _onGestureStart2(e) {
      return e.touches && e.touches.length > 1 && (self.isGesturing = true) && onGestureStart(e, self.isDragging);
    }, _onGestureEnd = function _onGestureEnd2() {
      return (self.isGesturing = false) || onGestureEnd(self);
    }, onScroll = function onScroll2(e) {
      if (_ignoreCheck(e)) {
        return;
      }
      var x = scrollFuncX(), y = scrollFuncY();
      onDelta((x - scrollX) * scrollSpeed, (y - scrollY) * scrollSpeed, 1);
      scrollX = x;
      scrollY = y;
      onStop && onStopDelayedCall.restart(true);
    }, _onWheel = function _onWheel2(e) {
      if (_ignoreCheck(e)) {
        return;
      }
      e = _getEvent(e, preventDefault);
      onWheel && (wheeled = true);
      var multiplier = (e.deltaMode === 1 ? lineHeight : e.deltaMode === 2 ? _win.innerHeight : 1) * wheelSpeed;
      onDelta(e.deltaX * multiplier, e.deltaY * multiplier, 0);
      onStop && !isNormalizer && onStopDelayedCall.restart(true);
    }, _onMove = function _onMove2(e) {
      if (_ignoreCheck(e)) {
        return;
      }
      var x = e.clientX, y = e.clientY, dx = x - self.x, dy = y - self.y;
      self.x = x;
      self.y = y;
      moved = true;
      onStop && onStopDelayedCall.restart(true);
      (dx || dy) && onTouchOrPointerDelta(dx, dy);
    }, _onHover = function _onHover2(e) {
      self.event = e;
      onHover(self);
    }, _onHoverEnd = function _onHoverEnd2(e) {
      self.event = e;
      onHoverEnd(self);
    }, _onClick = function _onClick2(e) {
      return _ignoreCheck(e) || _getEvent(e, preventDefault) && onClick(self);
    };
    onStopDelayedCall = self._dc = gsap.delayedCall(onStopDelay || 0.25, onStopFunc).pause();
    self.deltaX = self.deltaY = 0;
    self._vx = _getVelocityProp(0, 50, true);
    self._vy = _getVelocityProp(0, 50, true);
    self.scrollX = scrollFuncX;
    self.scrollY = scrollFuncY;
    self.isDragging = self.isGesturing = self.isPressed = false;
    _context(this);
    self.enable = function(e) {
      if (!self.isEnabled) {
        _addListener(isViewport ? ownerDoc : target, "scroll", _onScroll);
        type.indexOf("scroll") >= 0 && _addListener(isViewport ? ownerDoc : target, "scroll", onScroll, passive, capture);
        type.indexOf("wheel") >= 0 && _addListener(target, "wheel", _onWheel, passive, capture);
        if (type.indexOf("touch") >= 0 && _isTouch || type.indexOf("pointer") >= 0) {
          _addListener(target, _eventTypes[0], _onPress, passive, capture);
          _addListener(ownerDoc, _eventTypes[2], _onRelease);
          _addListener(ownerDoc, _eventTypes[3], _onRelease);
          allowClicks && _addListener(target, "click", clickCapture, true, true);
          onClick && _addListener(target, "click", _onClick);
          onGestureStart && _addListener(ownerDoc, "gesturestart", _onGestureStart);
          onGestureEnd && _addListener(ownerDoc, "gestureend", _onGestureEnd);
          onHover && _addListener(target, _pointerType + "enter", _onHover);
          onHoverEnd && _addListener(target, _pointerType + "leave", _onHoverEnd);
          onMove && _addListener(target, _pointerType + "move", _onMove);
        }
        self.isEnabled = true;
        self.isDragging = self.isGesturing = self.isPressed = moved = dragged = false;
        self._vx.reset();
        self._vy.reset();
        scrollX = scrollFuncX();
        scrollY = scrollFuncY();
        e && e.type && _onPress(e);
        onEnable && onEnable(self);
      }
      return self;
    };
    self.disable = function() {
      if (self.isEnabled) {
        _observers.filter(function(o) {
          return o !== self && _isViewport(o.target);
        }).length || _removeListener(isViewport ? ownerDoc : target, "scroll", _onScroll);
        if (self.isPressed) {
          self._vx.reset();
          self._vy.reset();
          _removeListener(isNormalizer ? target : ownerDoc, _eventTypes[1], _onDrag, true);
        }
        _removeListener(isViewport ? ownerDoc : target, "scroll", onScroll, capture);
        _removeListener(target, "wheel", _onWheel, capture);
        _removeListener(target, _eventTypes[0], _onPress, capture);
        _removeListener(ownerDoc, _eventTypes[2], _onRelease);
        _removeListener(ownerDoc, _eventTypes[3], _onRelease);
        _removeListener(target, "click", clickCapture, true);
        _removeListener(target, "click", _onClick);
        _removeListener(ownerDoc, "gesturestart", _onGestureStart);
        _removeListener(ownerDoc, "gestureend", _onGestureEnd);
        _removeListener(target, _pointerType + "enter", _onHover);
        _removeListener(target, _pointerType + "leave", _onHoverEnd);
        _removeListener(target, _pointerType + "move", _onMove);
        self.isEnabled = self.isPressed = self.isDragging = false;
        onDisable && onDisable(self);
      }
    };
    self.kill = self.revert = function() {
      self.disable();
      var i = _observers.indexOf(self);
      i >= 0 && _observers.splice(i, 1);
      _normalizer === self && (_normalizer = 0);
    };
    _observers.push(self);
    isNormalizer && _isViewport(target) && (_normalizer = self);
    self.enable(event);
  };
  _createClass(Observer2, [{
    key: "velocityX",
    get: function get() {
      return this._vx.getVelocity();
    }
  }, {
    key: "velocityY",
    get: function get() {
      return this._vy.getVelocity();
    }
  }]);
  return Observer2;
}();
Observer.version = "3.14.2";
Observer.create = function(vars) {
  return new Observer(vars);
};
Observer.register = _initCore;
Observer.getAll = function() {
  return _observers.slice();
};
Observer.getById = function(id) {
  return _observers.filter(function(o) {
    return o.vars.id === id;
  })[0];
};
_getGSAP() && gsap.registerPlugin(Observer);

// node_modules/gsap/ScrollTrigger.js
var gsap2;
var _coreInitted2;
var _win2;
var _doc2;
var _docEl2;
var _body2;
var _root2;
var _resizeDelay;
var _toArray;
var _clamp2;
var _time2;
var _syncInterval;
var _refreshing;
var _pointerIsDown;
var _transformProp;
var _i;
var _prevWidth;
var _prevHeight;
var _autoRefresh;
var _sort;
var _suppressOverwrites;
var _ignoreResize;
var _normalizer2;
var _ignoreMobileResize;
var _baseScreenHeight;
var _baseScreenWidth;
var _fixIOSBug;
var _context2;
var _scrollRestoration;
var _div100vh;
var _100vh;
var _isReverted;
var _clampingMax;
var _limitCallbacks;
var _startup2 = 1;
var _getTime2 = Date.now;
var _time1 = _getTime2();
var _lastScrollTime = 0;
var _enabled = 0;
var _parseClamp = function _parseClamp2(value, type, self) {
  var clamp = _isString(value) && (value.substr(0, 6) === "clamp(" || value.indexOf("max") > -1);
  self["_" + type + "Clamp"] = clamp;
  return clamp ? value.substr(6, value.length - 7) : value;
};
var _keepClamp = function _keepClamp2(value, clamp) {
  return clamp && (!_isString(value) || value.substr(0, 6) !== "clamp(") ? "clamp(" + value + ")" : value;
};
var _rafBugFix = function _rafBugFix2() {
  return _enabled && requestAnimationFrame(_rafBugFix2);
};
var _pointerDownHandler = function _pointerDownHandler2() {
  return _pointerIsDown = 1;
};
var _pointerUpHandler = function _pointerUpHandler2() {
  return _pointerIsDown = 0;
};
var _passThrough = function _passThrough2(v) {
  return v;
};
var _round = function _round2(value) {
  return Math.round(value * 1e5) / 1e5 || 0;
};
var _windowExists = function _windowExists2() {
  return typeof window !== "undefined";
};
var _getGSAP3 = function _getGSAP4() {
  return gsap2 || _windowExists() && (gsap2 = window.gsap) && gsap2.registerPlugin && gsap2;
};
var _isViewport3 = function _isViewport4(e) {
  return !!~_root2.indexOf(e);
};
var _getViewportDimension = function _getViewportDimension2(dimensionProperty) {
  return (dimensionProperty === "Height" ? _100vh : _win2["inner" + dimensionProperty]) || _docEl2["client" + dimensionProperty] || _body2["client" + dimensionProperty];
};
var _getBoundsFunc = function _getBoundsFunc2(element) {
  return _getProxyProp(element, "getBoundingClientRect") || (_isViewport3(element) ? function() {
    _winOffsets.width = _win2.innerWidth;
    _winOffsets.height = _100vh;
    return _winOffsets;
  } : function() {
    return _getBounds(element);
  });
};
var _getSizeFunc = function _getSizeFunc2(scroller, isViewport, _ref) {
  var d = _ref.d, d2 = _ref.d2, a = _ref.a;
  return (a = _getProxyProp(scroller, "getBoundingClientRect")) ? function() {
    return a()[d];
  } : function() {
    return (isViewport ? _getViewportDimension(d2) : scroller["client" + d2]) || 0;
  };
};
var _getOffsetsFunc = function _getOffsetsFunc2(element, isViewport) {
  return !isViewport || ~_proxies.indexOf(element) ? _getBoundsFunc(element) : function() {
    return _winOffsets;
  };
};
var _maxScroll = function _maxScroll2(element, _ref2) {
  var s = _ref2.s, d2 = _ref2.d2, d = _ref2.d, a = _ref2.a;
  return Math.max(0, (s = "scroll" + d2) && (a = _getProxyProp(element, s)) ? a() - _getBoundsFunc(element)()[d] : _isViewport3(element) ? (_docEl2[s] || _body2[s]) - _getViewportDimension(d2) : element[s] - element["offset" + d2]);
};
var _iterateAutoRefresh = function _iterateAutoRefresh2(func, events) {
  for (var i = 0; i < _autoRefresh.length; i += 3) {
    (!events || ~events.indexOf(_autoRefresh[i + 1])) && func(_autoRefresh[i], _autoRefresh[i + 1], _autoRefresh[i + 2]);
  }
};
var _isString = function _isString2(value) {
  return typeof value === "string";
};
var _isFunction = function _isFunction2(value) {
  return typeof value === "function";
};
var _isNumber = function _isNumber2(value) {
  return typeof value === "number";
};
var _isObject = function _isObject2(value) {
  return typeof value === "object";
};
var _endAnimation = function _endAnimation2(animation, reversed, pause) {
  return animation && animation.progress(reversed ? 0 : 1) && pause && animation.pause();
};
var _callback = function _callback2(self, func) {
  if (self.enabled) {
    var result = self._ctx ? self._ctx.add(function() {
      return func(self);
    }) : func(self);
    result && result.totalTime && (self.callbackAnimation = result);
  }
};
var _abs = Math.abs;
var _left = "left";
var _top = "top";
var _right = "right";
var _bottom = "bottom";
var _width = "width";
var _height = "height";
var _Right = "Right";
var _Left = "Left";
var _Top = "Top";
var _Bottom = "Bottom";
var _padding = "padding";
var _margin = "margin";
var _Width = "Width";
var _Height = "Height";
var _px = "px";
var _getComputedStyle = function _getComputedStyle2(element) {
  return _win2.getComputedStyle(element);
};
var _makePositionable = function _makePositionable2(element) {
  var position = _getComputedStyle(element).position;
  element.style.position = position === "absolute" || position === "fixed" ? position : "relative";
};
var _setDefaults = function _setDefaults2(obj, defaults) {
  for (var p in defaults) {
    p in obj || (obj[p] = defaults[p]);
  }
  return obj;
};
var _getBounds = function _getBounds2(element, withoutTransforms) {
  var tween = withoutTransforms && _getComputedStyle(element)[_transformProp] !== "matrix(1, 0, 0, 1, 0, 0)" && gsap2.to(element, {
    x: 0,
    y: 0,
    xPercent: 0,
    yPercent: 0,
    rotation: 0,
    rotationX: 0,
    rotationY: 0,
    scale: 1,
    skewX: 0,
    skewY: 0
  }).progress(1), bounds = element.getBoundingClientRect();
  tween && tween.progress(0).kill();
  return bounds;
};
var _getSize = function _getSize2(element, _ref3) {
  var d2 = _ref3.d2;
  return element["offset" + d2] || element["client" + d2] || 0;
};
var _getLabelRatioArray = function _getLabelRatioArray2(timeline) {
  var a = [], labels = timeline.labels, duration = timeline.duration(), p;
  for (p in labels) {
    a.push(labels[p] / duration);
  }
  return a;
};
var _getClosestLabel = function _getClosestLabel2(animation) {
  return function(value) {
    return gsap2.utils.snap(_getLabelRatioArray(animation), value);
  };
};
var _snapDirectional = function _snapDirectional2(snapIncrementOrArray) {
  var snap = gsap2.utils.snap(snapIncrementOrArray), a = Array.isArray(snapIncrementOrArray) && snapIncrementOrArray.slice(0).sort(function(a2, b) {
    return a2 - b;
  });
  return a ? function(value, direction, threshold) {
    if (threshold === void 0) {
      threshold = 1e-3;
    }
    var i;
    if (!direction) {
      return snap(value);
    }
    if (direction > 0) {
      value -= threshold;
      for (i = 0; i < a.length; i++) {
        if (a[i] >= value) {
          return a[i];
        }
      }
      return a[i - 1];
    } else {
      i = a.length;
      value += threshold;
      while (i--) {
        if (a[i] <= value) {
          return a[i];
        }
      }
    }
    return a[0];
  } : function(value, direction, threshold) {
    if (threshold === void 0) {
      threshold = 1e-3;
    }
    var snapped = snap(value);
    return !direction || Math.abs(snapped - value) < threshold || snapped - value < 0 === direction < 0 ? snapped : snap(direction < 0 ? value - snapIncrementOrArray : value + snapIncrementOrArray);
  };
};
var _getLabelAtDirection = function _getLabelAtDirection2(timeline) {
  return function(value, st) {
    return _snapDirectional(_getLabelRatioArray(timeline))(value, st.direction);
  };
};
var _multiListener = function _multiListener2(func, element, types, callback) {
  return types.split(",").forEach(function(type) {
    return func(element, type, callback);
  });
};
var _addListener3 = function _addListener4(element, type, func, nonPassive, capture) {
  return element.addEventListener(type, func, {
    passive: !nonPassive,
    capture: !!capture
  });
};
var _removeListener3 = function _removeListener4(element, type, func, capture) {
  return element.removeEventListener(type, func, !!capture);
};
var _wheelListener = function _wheelListener2(func, el, scrollFunc) {
  scrollFunc = scrollFunc && scrollFunc.wheelHandler;
  if (scrollFunc) {
    func(el, "wheel", scrollFunc);
    func(el, "touchmove", scrollFunc);
  }
};
var _markerDefaults = {
  startColor: "green",
  endColor: "red",
  indent: 0,
  fontSize: "16px",
  fontWeight: "normal"
};
var _defaults = {
  toggleActions: "play",
  anticipatePin: 0
};
var _keywords = {
  top: 0,
  left: 0,
  center: 0.5,
  bottom: 1,
  right: 1
};
var _offsetToPx = function _offsetToPx2(value, size) {
  if (_isString(value)) {
    var eqIndex = value.indexOf("="), relative = ~eqIndex ? +(value.charAt(eqIndex - 1) + 1) * parseFloat(value.substr(eqIndex + 1)) : 0;
    if (~eqIndex) {
      value.indexOf("%") > eqIndex && (relative *= size / 100);
      value = value.substr(0, eqIndex - 1);
    }
    value = relative + (value in _keywords ? _keywords[value] * size : ~value.indexOf("%") ? parseFloat(value) * size / 100 : parseFloat(value) || 0);
  }
  return value;
};
var _createMarker = function _createMarker2(type, name, container, direction, _ref4, offset, matchWidthEl, containerAnimation) {
  var startColor = _ref4.startColor, endColor = _ref4.endColor, fontSize = _ref4.fontSize, indent = _ref4.indent, fontWeight = _ref4.fontWeight;
  var e = _doc2.createElement("div"), useFixedPosition = _isViewport3(container) || _getProxyProp(container, "pinType") === "fixed", isScroller = type.indexOf("scroller") !== -1, parent = useFixedPosition ? _body2 : container, isStart = type.indexOf("start") !== -1, color = isStart ? startColor : endColor, css = "border-color:" + color + ";font-size:" + fontSize + ";color:" + color + ";font-weight:" + fontWeight + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
  css += "position:" + ((isScroller || containerAnimation) && useFixedPosition ? "fixed;" : "absolute;");
  (isScroller || containerAnimation || !useFixedPosition) && (css += (direction === _vertical ? _right : _bottom) + ":" + (offset + parseFloat(indent)) + "px;");
  matchWidthEl && (css += "box-sizing:border-box;text-align:left;width:" + matchWidthEl.offsetWidth + "px;");
  e._isStart = isStart;
  e.setAttribute("class", "gsap-marker-" + type + (name ? " marker-" + name : ""));
  e.style.cssText = css;
  e.innerText = name || name === 0 ? type + "-" + name : type;
  parent.children[0] ? parent.insertBefore(e, parent.children[0]) : parent.appendChild(e);
  e._offset = e["offset" + direction.op.d2];
  _positionMarker(e, 0, direction, isStart);
  return e;
};
var _positionMarker = function _positionMarker2(marker, start, direction, flipped) {
  var vars = {
    display: "block"
  }, side = direction[flipped ? "os2" : "p2"], oppositeSide = direction[flipped ? "p2" : "os2"];
  marker._isFlipped = flipped;
  vars[direction.a + "Percent"] = flipped ? -100 : 0;
  vars[direction.a] = flipped ? "1px" : 0;
  vars["border" + side + _Width] = 1;
  vars["border" + oppositeSide + _Width] = 0;
  vars[direction.p] = start + "px";
  gsap2.set(marker, vars);
};
var _triggers = [];
var _ids = {};
var _rafID;
var _sync = function _sync2() {
  return _getTime2() - _lastScrollTime > 34 && (_rafID || (_rafID = requestAnimationFrame(_updateAll)));
};
var _onScroll3 = function _onScroll4() {
  if (!_normalizer2 || !_normalizer2.isPressed || _normalizer2.startX > _body2.clientWidth) {
    _scrollers.cache++;
    if (_normalizer2) {
      _rafID || (_rafID = requestAnimationFrame(_updateAll));
    } else {
      _updateAll();
    }
    _lastScrollTime || _dispatch("scrollStart");
    _lastScrollTime = _getTime2();
  }
};
var _setBaseDimensions = function _setBaseDimensions2() {
  _baseScreenWidth = _win2.innerWidth;
  _baseScreenHeight = _win2.innerHeight;
};
var _onResize = function _onResize2(force) {
  _scrollers.cache++;
  (force === true || !_refreshing && !_ignoreResize && !_doc2.fullscreenElement && !_doc2.webkitFullscreenElement && (!_ignoreMobileResize || _baseScreenWidth !== _win2.innerWidth || Math.abs(_win2.innerHeight - _baseScreenHeight) > _win2.innerHeight * 0.25)) && _resizeDelay.restart(true);
};
var _listeners = {};
var _emptyArray = [];
var _softRefresh = function _softRefresh2() {
  return _removeListener3(ScrollTrigger2, "scrollEnd", _softRefresh2) || _refreshAll(true);
};
var _dispatch = function _dispatch2(type) {
  return _listeners[type] && _listeners[type].map(function(f) {
    return f();
  }) || _emptyArray;
};
var _savedStyles = [];
var _revertRecorded = function _revertRecorded2(media) {
  for (var i = 0; i < _savedStyles.length; i += 5) {
    if (!media || _savedStyles[i + 4] && _savedStyles[i + 4].query === media) {
      _savedStyles[i].style.cssText = _savedStyles[i + 1];
      _savedStyles[i].getBBox && _savedStyles[i].setAttribute("transform", _savedStyles[i + 2] || "");
      _savedStyles[i + 3].uncache = 1;
    }
  }
};
var _recordScrollPositions = function _recordScrollPositions2() {
  return _scrollers.forEach(function(obj) {
    return _isFunction(obj) && ++obj.cacheID && (obj.rec = obj());
  });
};
var _revertAll = function _revertAll2(kill, media) {
  var trigger;
  for (_i = 0; _i < _triggers.length; _i++) {
    trigger = _triggers[_i];
    if (trigger && (!media || trigger._ctx === media)) {
      if (kill) {
        trigger.kill(1);
      } else {
        trigger.revert(true, true);
      }
    }
  }
  _isReverted = true;
  media && _revertRecorded(media);
  media || _dispatch("revert");
};
var _clearScrollMemory = function _clearScrollMemory2(scrollRestoration, force) {
  _scrollers.cache++;
  (force || !_refreshingAll) && _scrollers.forEach(function(obj) {
    return _isFunction(obj) && obj.cacheID++ && (obj.rec = 0);
  });
  _isString(scrollRestoration) && (_win2.history.scrollRestoration = _scrollRestoration = scrollRestoration);
};
var _refreshingAll;
var _refreshID = 0;
var _queueRefreshID;
var _queueRefreshAll = function _queueRefreshAll2() {
  if (_queueRefreshID !== _refreshID) {
    var id = _queueRefreshID = _refreshID;
    requestAnimationFrame(function() {
      return id === _refreshID && _refreshAll(true);
    });
  }
};
var _refresh100vh = function _refresh100vh2() {
  _body2.appendChild(_div100vh);
  _100vh = !_normalizer2 && _div100vh.offsetHeight || _win2.innerHeight;
  _body2.removeChild(_div100vh);
};
var _hideAllMarkers = function _hideAllMarkers2(hide) {
  return _toArray(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(el) {
    return el.style.display = hide ? "none" : "block";
  });
};
var _refreshAll = function _refreshAll2(force, skipRevert) {
  _docEl2 = _doc2.documentElement;
  _body2 = _doc2.body;
  _root2 = [_win2, _doc2, _docEl2, _body2];
  if (_lastScrollTime && !force && !_isReverted) {
    _addListener3(ScrollTrigger2, "scrollEnd", _softRefresh);
    return;
  }
  _refresh100vh();
  _refreshingAll = ScrollTrigger2.isRefreshing = true;
  _isReverted || _recordScrollPositions();
  var refreshInits = _dispatch("refreshInit");
  _sort && ScrollTrigger2.sort();
  skipRevert || _revertAll();
  _scrollers.forEach(function(obj) {
    if (_isFunction(obj)) {
      obj.smooth && (obj.target.style.scrollBehavior = "auto");
      obj(0);
    }
  });
  _triggers.slice(0).forEach(function(t) {
    return t.refresh();
  });
  _isReverted = false;
  _triggers.forEach(function(t) {
    if (t._subPinOffset && t.pin) {
      var prop = t.vars.horizontal ? "offsetWidth" : "offsetHeight", original = t.pin[prop];
      t.revert(true, 1);
      t.adjustPinSpacing(t.pin[prop] - original);
      t.refresh();
    }
  });
  _clampingMax = 1;
  _hideAllMarkers(true);
  _triggers.forEach(function(t) {
    var max = _maxScroll(t.scroller, t._dir), endClamp = t.vars.end === "max" || t._endClamp && t.end > max, startClamp = t._startClamp && t.start >= max;
    (endClamp || startClamp) && t.setPositions(startClamp ? max - 1 : t.start, endClamp ? Math.max(startClamp ? max : t.start + 1, max) : t.end, true);
  });
  _hideAllMarkers(false);
  _clampingMax = 0;
  refreshInits.forEach(function(result) {
    return result && result.render && result.render(-1);
  });
  _scrollers.forEach(function(obj) {
    if (_isFunction(obj)) {
      obj.smooth && requestAnimationFrame(function() {
        return obj.target.style.scrollBehavior = "smooth";
      });
      obj.rec && obj(obj.rec);
    }
  });
  _clearScrollMemory(_scrollRestoration, 1);
  _resizeDelay.pause();
  _refreshID++;
  _refreshingAll = 2;
  _updateAll(2);
  _triggers.forEach(function(t) {
    return _isFunction(t.vars.onRefresh) && t.vars.onRefresh(t);
  });
  _refreshingAll = ScrollTrigger2.isRefreshing = false;
  _dispatch("refresh");
};
var _lastScroll = 0;
var _direction = 1;
var _primary;
var _updateAll = function _updateAll2(force) {
  if (force === 2 || !_refreshingAll && !_isReverted) {
    ScrollTrigger2.isUpdating = true;
    _primary && _primary.update(0);
    var l = _triggers.length, time = _getTime2(), recordVelocity = time - _time1 >= 50, scroll = l && _triggers[0].scroll();
    _direction = _lastScroll > scroll ? -1 : 1;
    _refreshingAll || (_lastScroll = scroll);
    if (recordVelocity) {
      if (_lastScrollTime && !_pointerIsDown && time - _lastScrollTime > 200) {
        _lastScrollTime = 0;
        _dispatch("scrollEnd");
      }
      _time2 = _time1;
      _time1 = time;
    }
    if (_direction < 0) {
      _i = l;
      while (_i-- > 0) {
        _triggers[_i] && _triggers[_i].update(0, recordVelocity);
      }
      _direction = 1;
    } else {
      for (_i = 0; _i < l; _i++) {
        _triggers[_i] && _triggers[_i].update(0, recordVelocity);
      }
    }
    ScrollTrigger2.isUpdating = false;
  }
  _rafID = 0;
};
var _propNamesToCopy = [_left, _top, _bottom, _right, _margin + _Bottom, _margin + _Right, _margin + _Top, _margin + _Left, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"];
var _stateProps = _propNamesToCopy.concat([_width, _height, "boxSizing", "max" + _Width, "max" + _Height, "position", _margin, _padding, _padding + _Top, _padding + _Right, _padding + _Bottom, _padding + _Left]);
var _swapPinOut = function _swapPinOut2(pin, spacer, state) {
  _setState(state);
  var cache = pin._gsap;
  if (cache.spacerIsNative) {
    _setState(cache.spacerState);
  } else if (pin._gsap.swappedIn) {
    var parent = spacer.parentNode;
    if (parent) {
      parent.insertBefore(pin, spacer);
      parent.removeChild(spacer);
    }
  }
  pin._gsap.swappedIn = false;
};
var _swapPinIn = function _swapPinIn2(pin, spacer, cs, spacerState) {
  if (!pin._gsap.swappedIn) {
    var i = _propNamesToCopy.length, spacerStyle = spacer.style, pinStyle = pin.style, p;
    while (i--) {
      p = _propNamesToCopy[i];
      spacerStyle[p] = cs[p];
    }
    spacerStyle.position = cs.position === "absolute" ? "absolute" : "relative";
    cs.display === "inline" && (spacerStyle.display = "inline-block");
    pinStyle[_bottom] = pinStyle[_right] = "auto";
    spacerStyle.flexBasis = cs.flexBasis || "auto";
    spacerStyle.overflow = "visible";
    spacerStyle.boxSizing = "border-box";
    spacerStyle[_width] = _getSize(pin, _horizontal) + _px;
    spacerStyle[_height] = _getSize(pin, _vertical) + _px;
    spacerStyle[_padding] = pinStyle[_margin] = pinStyle[_top] = pinStyle[_left] = "0";
    _setState(spacerState);
    pinStyle[_width] = pinStyle["max" + _Width] = cs[_width];
    pinStyle[_height] = pinStyle["max" + _Height] = cs[_height];
    pinStyle[_padding] = cs[_padding];
    if (pin.parentNode !== spacer) {
      pin.parentNode.insertBefore(spacer, pin);
      spacer.appendChild(pin);
    }
    pin._gsap.swappedIn = true;
  }
};
var _capsExp = /([A-Z])/g;
var _setState = function _setState2(state) {
  if (state) {
    var style2 = state.t.style, l = state.length, i = 0, p, value;
    (state.t._gsap || gsap2.core.getCache(state.t)).uncache = 1;
    for (; i < l; i += 2) {
      value = state[i + 1];
      p = state[i];
      if (value) {
        style2[p] = value;
      } else if (style2[p]) {
        style2.removeProperty(p.replace(_capsExp, "-$1").toLowerCase());
      }
    }
  }
};
var _getState = function _getState2(element) {
  var l = _stateProps.length, style2 = element.style, state = [], i = 0;
  for (; i < l; i++) {
    state.push(_stateProps[i], style2[_stateProps[i]]);
  }
  state.t = element;
  return state;
};
var _copyState = function _copyState2(state, override, omitOffsets) {
  var result = [], l = state.length, i = omitOffsets ? 8 : 0, p;
  for (; i < l; i += 2) {
    p = state[i];
    result.push(p, p in override ? override[p] : state[i + 1]);
  }
  result.t = state.t;
  return result;
};
var _winOffsets = {
  left: 0,
  top: 0
};
var _parsePosition = function _parsePosition2(value, trigger, scrollerSize, direction, scroll, marker, markerScroller, self, scrollerBounds, borderWidth, useFixedPosition, scrollerMax, containerAnimation, clampZeroProp) {
  _isFunction(value) && (value = value(self));
  if (_isString(value) && value.substr(0, 3) === "max") {
    value = scrollerMax + (value.charAt(4) === "=" ? _offsetToPx("0" + value.substr(3), scrollerSize) : 0);
  }
  var time = containerAnimation ? containerAnimation.time() : 0, p1, p2, element;
  containerAnimation && containerAnimation.seek(0);
  isNaN(value) || (value = +value);
  if (!_isNumber(value)) {
    _isFunction(trigger) && (trigger = trigger(self));
    var offsets = (value || "0").split(" "), bounds, localOffset, globalOffset, display;
    element = _getTarget(trigger, self) || _body2;
    bounds = _getBounds(element) || {};
    if ((!bounds || !bounds.left && !bounds.top) && _getComputedStyle(element).display === "none") {
      display = element.style.display;
      element.style.display = "block";
      bounds = _getBounds(element);
      display ? element.style.display = display : element.style.removeProperty("display");
    }
    localOffset = _offsetToPx(offsets[0], bounds[direction.d]);
    globalOffset = _offsetToPx(offsets[1] || "0", scrollerSize);
    value = bounds[direction.p] - scrollerBounds[direction.p] - borderWidth + localOffset + scroll - globalOffset;
    markerScroller && _positionMarker(markerScroller, globalOffset, direction, scrollerSize - globalOffset < 20 || markerScroller._isStart && globalOffset > 20);
    scrollerSize -= scrollerSize - globalOffset;
  } else {
    containerAnimation && (value = gsap2.utils.mapRange(containerAnimation.scrollTrigger.start, containerAnimation.scrollTrigger.end, 0, scrollerMax, value));
    markerScroller && _positionMarker(markerScroller, scrollerSize, direction, true);
  }
  if (clampZeroProp) {
    self[clampZeroProp] = value || -1e-3;
    value < 0 && (value = 0);
  }
  if (marker) {
    var position = value + scrollerSize, isStart = marker._isStart;
    p1 = "scroll" + direction.d2;
    _positionMarker(marker, position, direction, isStart && position > 20 || !isStart && (useFixedPosition ? Math.max(_body2[p1], _docEl2[p1]) : marker.parentNode[p1]) <= position + 1);
    if (useFixedPosition) {
      scrollerBounds = _getBounds(markerScroller);
      useFixedPosition && (marker.style[direction.op.p] = scrollerBounds[direction.op.p] - direction.op.m - marker._offset + _px);
    }
  }
  if (containerAnimation && element) {
    p1 = _getBounds(element);
    containerAnimation.seek(scrollerMax);
    p2 = _getBounds(element);
    containerAnimation._caScrollDist = p1[direction.p] - p2[direction.p];
    value = value / containerAnimation._caScrollDist * scrollerMax;
  }
  containerAnimation && containerAnimation.seek(time);
  return containerAnimation ? value : Math.round(value);
};
var _prefixExp = /(webkit|moz|length|cssText|inset)/i;
var _reparent = function _reparent2(element, parent, top, left) {
  if (element.parentNode !== parent) {
    var style2 = element.style, p, cs;
    if (parent === _body2) {
      element._stOrig = style2.cssText;
      cs = _getComputedStyle(element);
      for (p in cs) {
        if (!+p && !_prefixExp.test(p) && cs[p] && typeof style2[p] === "string" && p !== "0") {
          style2[p] = cs[p];
        }
      }
      style2.top = top;
      style2.left = left;
    } else {
      style2.cssText = element._stOrig;
    }
    gsap2.core.getCache(element).uncache = 1;
    parent.appendChild(element);
  }
};
var _interruptionTracker = function _interruptionTracker2(getValueFunc, initialValue, onInterrupt) {
  var last1 = initialValue, last2 = last1;
  return function(value) {
    var current = Math.round(getValueFunc());
    if (current !== last1 && current !== last2 && Math.abs(current - last1) > 3 && Math.abs(current - last2) > 3) {
      value = current;
      onInterrupt && onInterrupt();
    }
    last2 = last1;
    last1 = Math.round(value);
    return last1;
  };
};
var _shiftMarker = function _shiftMarker2(marker, direction, value) {
  var vars = {};
  vars[direction.p] = "+=" + value;
  gsap2.set(marker, vars);
};
var _getTweenCreator = function _getTweenCreator2(scroller, direction) {
  var getScroll = _getScrollFunc(scroller, direction), prop = "_scroll" + direction.p2, getTween = function getTween2(scrollTo, vars, initialValue, change1, change2) {
    var tween = getTween2.tween, onComplete = vars.onComplete, modifiers = {};
    initialValue = initialValue || getScroll();
    var checkForInterruption = _interruptionTracker(getScroll, initialValue, function() {
      tween.kill();
      getTween2.tween = 0;
    });
    change2 = change1 && change2 || 0;
    change1 = change1 || scrollTo - initialValue;
    tween && tween.kill();
    vars[prop] = scrollTo;
    vars.inherit = false;
    vars.modifiers = modifiers;
    modifiers[prop] = function() {
      return checkForInterruption(initialValue + change1 * tween.ratio + change2 * tween.ratio * tween.ratio);
    };
    vars.onUpdate = function() {
      _scrollers.cache++;
      getTween2.tween && _updateAll();
    };
    vars.onComplete = function() {
      getTween2.tween = 0;
      onComplete && onComplete.call(tween);
    };
    tween = getTween2.tween = gsap2.to(scroller, vars);
    return tween;
  };
  scroller[prop] = getScroll;
  getScroll.wheelHandler = function() {
    return getTween.tween && getTween.tween.kill() && (getTween.tween = 0);
  };
  _addListener3(scroller, "wheel", getScroll.wheelHandler);
  ScrollTrigger2.isTouch && _addListener3(scroller, "touchmove", getScroll.wheelHandler);
  return getTween;
};
var ScrollTrigger2 = /* @__PURE__ */ function() {
  function ScrollTrigger3(vars, animation) {
    _coreInitted2 || ScrollTrigger3.register(gsap2) || console.warn("Please gsap.registerPlugin(ScrollTrigger)");
    _context2(this);
    this.init(vars, animation);
  }
  var _proto = ScrollTrigger3.prototype;
  _proto.init = function init(vars, animation) {
    this.progress = this.start = 0;
    this.vars && this.kill(true, true);
    if (!_enabled) {
      this.update = this.refresh = this.kill = _passThrough;
      return;
    }
    vars = _setDefaults(_isString(vars) || _isNumber(vars) || vars.nodeType ? {
      trigger: vars
    } : vars, _defaults);
    var _vars = vars, onUpdate = _vars.onUpdate, toggleClass = _vars.toggleClass, id = _vars.id, onToggle = _vars.onToggle, onRefresh = _vars.onRefresh, scrub = _vars.scrub, trigger = _vars.trigger, pin = _vars.pin, pinSpacing = _vars.pinSpacing, invalidateOnRefresh = _vars.invalidateOnRefresh, anticipatePin = _vars.anticipatePin, onScrubComplete = _vars.onScrubComplete, onSnapComplete = _vars.onSnapComplete, once = _vars.once, snap = _vars.snap, pinReparent = _vars.pinReparent, pinSpacer = _vars.pinSpacer, containerAnimation = _vars.containerAnimation, fastScrollEnd = _vars.fastScrollEnd, preventOverlaps = _vars.preventOverlaps, direction = vars.horizontal || vars.containerAnimation && vars.horizontal !== false ? _horizontal : _vertical, isToggle = !scrub && scrub !== 0, scroller = _getTarget(vars.scroller || _win2), scrollerCache = gsap2.core.getCache(scroller), isViewport = _isViewport3(scroller), useFixedPosition = ("pinType" in vars ? vars.pinType : _getProxyProp(scroller, "pinType") || isViewport && "fixed") === "fixed", callbacks = [vars.onEnter, vars.onLeave, vars.onEnterBack, vars.onLeaveBack], toggleActions = isToggle && vars.toggleActions.split(" "), markers = "markers" in vars ? vars.markers : _defaults.markers, borderWidth = isViewport ? 0 : parseFloat(_getComputedStyle(scroller)["border" + direction.p2 + _Width]) || 0, self = this, onRefreshInit = vars.onRefreshInit && function() {
      return vars.onRefreshInit(self);
    }, getScrollerSize = _getSizeFunc(scroller, isViewport, direction), getScrollerOffsets = _getOffsetsFunc(scroller, isViewport), lastSnap = 0, lastRefresh = 0, prevProgress = 0, scrollFunc = _getScrollFunc(scroller, direction), tweenTo, pinCache, snapFunc, scroll1, scroll2, start, end, markerStart, markerEnd, markerStartTrigger, markerEndTrigger, markerVars, executingOnRefresh, change, pinOriginalState, pinActiveState, pinState, spacer, offset, pinGetter, pinSetter, pinStart, pinChange, spacingStart, spacerState, markerStartSetter, pinMoves, markerEndSetter, cs, snap1, snap2, scrubTween, scrubSmooth, snapDurClamp, snapDelayedCall, prevScroll, prevAnimProgress, caMarkerSetter, customRevertReturn;
    self._startClamp = self._endClamp = false;
    self._dir = direction;
    anticipatePin *= 45;
    self.scroller = scroller;
    self.scroll = containerAnimation ? containerAnimation.time.bind(containerAnimation) : scrollFunc;
    scroll1 = scrollFunc();
    self.vars = vars;
    animation = animation || vars.animation;
    if ("refreshPriority" in vars) {
      _sort = 1;
      vars.refreshPriority === -9999 && (_primary = self);
    }
    scrollerCache.tweenScroll = scrollerCache.tweenScroll || {
      top: _getTweenCreator(scroller, _vertical),
      left: _getTweenCreator(scroller, _horizontal)
    };
    self.tweenTo = tweenTo = scrollerCache.tweenScroll[direction.p];
    self.scrubDuration = function(value) {
      scrubSmooth = _isNumber(value) && value;
      if (!scrubSmooth) {
        scrubTween && scrubTween.progress(1).kill();
        scrubTween = 0;
      } else {
        scrubTween ? scrubTween.duration(value) : scrubTween = gsap2.to(animation, {
          ease: "expo",
          totalProgress: "+=0",
          inherit: false,
          duration: scrubSmooth,
          paused: true,
          onComplete: function onComplete() {
            return onScrubComplete && onScrubComplete(self);
          }
        });
      }
    };
    if (animation) {
      animation.vars.lazy = false;
      animation._initted && !self.isReverted || animation.vars.immediateRender !== false && vars.immediateRender !== false && animation.duration() && animation.render(0, true, true);
      self.animation = animation.pause();
      animation.scrollTrigger = self;
      self.scrubDuration(scrub);
      snap1 = 0;
      id || (id = animation.vars.id);
    }
    if (snap) {
      if (!_isObject(snap) || snap.push) {
        snap = {
          snapTo: snap
        };
      }
      "scrollBehavior" in _body2.style && gsap2.set(isViewport ? [_body2, _docEl2] : scroller, {
        scrollBehavior: "auto"
      });
      _scrollers.forEach(function(o) {
        return _isFunction(o) && o.target === (isViewport ? _doc2.scrollingElement || _docEl2 : scroller) && (o.smooth = false);
      });
      snapFunc = _isFunction(snap.snapTo) ? snap.snapTo : snap.snapTo === "labels" ? _getClosestLabel(animation) : snap.snapTo === "labelsDirectional" ? _getLabelAtDirection(animation) : snap.directional !== false ? function(value, st) {
        return _snapDirectional(snap.snapTo)(value, _getTime2() - lastRefresh < 500 ? 0 : st.direction);
      } : gsap2.utils.snap(snap.snapTo);
      snapDurClamp = snap.duration || {
        min: 0.1,
        max: 2
      };
      snapDurClamp = _isObject(snapDurClamp) ? _clamp2(snapDurClamp.min, snapDurClamp.max) : _clamp2(snapDurClamp, snapDurClamp);
      snapDelayedCall = gsap2.delayedCall(snap.delay || scrubSmooth / 2 || 0.1, function() {
        var scroll = scrollFunc(), refreshedRecently = _getTime2() - lastRefresh < 500, tween = tweenTo.tween;
        if ((refreshedRecently || Math.abs(self.getVelocity()) < 10) && !tween && !_pointerIsDown && lastSnap !== scroll) {
          var progress = (scroll - start) / change, totalProgress = animation && !isToggle ? animation.totalProgress() : progress, velocity = refreshedRecently ? 0 : (totalProgress - snap2) / (_getTime2() - _time2) * 1e3 || 0, change1 = gsap2.utils.clamp(-progress, 1 - progress, _abs(velocity / 2) * velocity / 0.185), naturalEnd = progress + (snap.inertia === false ? 0 : change1), endValue, endScroll, _snap = snap, onStart = _snap.onStart, _onInterrupt = _snap.onInterrupt, _onComplete = _snap.onComplete;
          endValue = snapFunc(naturalEnd, self);
          _isNumber(endValue) || (endValue = naturalEnd);
          endScroll = Math.max(0, Math.round(start + endValue * change));
          if (scroll <= end && scroll >= start && endScroll !== scroll) {
            if (tween && !tween._initted && tween.data <= _abs(endScroll - scroll)) {
              return;
            }
            if (snap.inertia === false) {
              change1 = endValue - progress;
            }
            tweenTo(endScroll, {
              duration: snapDurClamp(_abs(Math.max(_abs(naturalEnd - totalProgress), _abs(endValue - totalProgress)) * 0.185 / velocity / 0.05 || 0)),
              ease: snap.ease || "power3",
              data: _abs(endScroll - scroll),
              // record the distance so that if another snap tween occurs (conflict) we can prioritize the closest snap.
              onInterrupt: function onInterrupt() {
                return snapDelayedCall.restart(true) && _onInterrupt && _onInterrupt(self);
              },
              onComplete: function onComplete() {
                self.update();
                lastSnap = scrollFunc();
                if (animation && !isToggle) {
                  scrubTween ? scrubTween.resetTo("totalProgress", endValue, animation._tTime / animation._tDur) : animation.progress(endValue);
                }
                snap1 = snap2 = animation && !isToggle ? animation.totalProgress() : self.progress;
                onSnapComplete && onSnapComplete(self);
                _onComplete && _onComplete(self);
              }
            }, scroll, change1 * change, endScroll - scroll - change1 * change);
            onStart && onStart(self, tweenTo.tween);
          }
        } else if (self.isActive && lastSnap !== scroll) {
          snapDelayedCall.restart(true);
        }
      }).pause();
    }
    id && (_ids[id] = self);
    trigger = self.trigger = _getTarget(trigger || pin !== true && pin);
    customRevertReturn = trigger && trigger._gsap && trigger._gsap.stRevert;
    customRevertReturn && (customRevertReturn = customRevertReturn(self));
    pin = pin === true ? trigger : _getTarget(pin);
    _isString(toggleClass) && (toggleClass = {
      targets: trigger,
      className: toggleClass
    });
    if (pin) {
      pinSpacing === false || pinSpacing === _margin || (pinSpacing = !pinSpacing && pin.parentNode && pin.parentNode.style && _getComputedStyle(pin.parentNode).display === "flex" ? false : _padding);
      self.pin = pin;
      pinCache = gsap2.core.getCache(pin);
      if (!pinCache.spacer) {
        if (pinSpacer) {
          pinSpacer = _getTarget(pinSpacer);
          pinSpacer && !pinSpacer.nodeType && (pinSpacer = pinSpacer.current || pinSpacer.nativeElement);
          pinCache.spacerIsNative = !!pinSpacer;
          pinSpacer && (pinCache.spacerState = _getState(pinSpacer));
        }
        pinCache.spacer = spacer = pinSpacer || _doc2.createElement("div");
        spacer.classList.add("pin-spacer");
        id && spacer.classList.add("pin-spacer-" + id);
        pinCache.pinState = pinOriginalState = _getState(pin);
      } else {
        pinOriginalState = pinCache.pinState;
      }
      vars.force3D !== false && gsap2.set(pin, {
        force3D: true
      });
      self.spacer = spacer = pinCache.spacer;
      cs = _getComputedStyle(pin);
      spacingStart = cs[pinSpacing + direction.os2];
      pinGetter = gsap2.getProperty(pin);
      pinSetter = gsap2.quickSetter(pin, direction.a, _px);
      _swapPinIn(pin, spacer, cs);
      pinState = _getState(pin);
    }
    if (markers) {
      markerVars = _isObject(markers) ? _setDefaults(markers, _markerDefaults) : _markerDefaults;
      markerStartTrigger = _createMarker("scroller-start", id, scroller, direction, markerVars, 0);
      markerEndTrigger = _createMarker("scroller-end", id, scroller, direction, markerVars, 0, markerStartTrigger);
      offset = markerStartTrigger["offset" + direction.op.d2];
      var content = _getTarget(_getProxyProp(scroller, "content") || scroller);
      markerStart = this.markerStart = _createMarker("start", id, content, direction, markerVars, offset, 0, containerAnimation);
      markerEnd = this.markerEnd = _createMarker("end", id, content, direction, markerVars, offset, 0, containerAnimation);
      containerAnimation && (caMarkerSetter = gsap2.quickSetter([markerStart, markerEnd], direction.a, _px));
      if (!useFixedPosition && !(_proxies.length && _getProxyProp(scroller, "fixedMarkers") === true)) {
        _makePositionable(isViewport ? _body2 : scroller);
        gsap2.set([markerStartTrigger, markerEndTrigger], {
          force3D: true
        });
        markerStartSetter = gsap2.quickSetter(markerStartTrigger, direction.a, _px);
        markerEndSetter = gsap2.quickSetter(markerEndTrigger, direction.a, _px);
      }
    }
    if (containerAnimation) {
      var oldOnUpdate = containerAnimation.vars.onUpdate, oldParams = containerAnimation.vars.onUpdateParams;
      containerAnimation.eventCallback("onUpdate", function() {
        self.update(0, 0, 1);
        oldOnUpdate && oldOnUpdate.apply(containerAnimation, oldParams || []);
      });
    }
    self.previous = function() {
      return _triggers[_triggers.indexOf(self) - 1];
    };
    self.next = function() {
      return _triggers[_triggers.indexOf(self) + 1];
    };
    self.revert = function(revert, temp) {
      if (!temp) {
        return self.kill(true);
      }
      var r = revert !== false || !self.enabled, prevRefreshing = _refreshing;
      if (r !== self.isReverted) {
        if (r) {
          prevScroll = Math.max(scrollFunc(), self.scroll.rec || 0);
          prevProgress = self.progress;
          prevAnimProgress = animation && animation.progress();
        }
        markerStart && [markerStart, markerEnd, markerStartTrigger, markerEndTrigger].forEach(function(m) {
          return m.style.display = r ? "none" : "block";
        });
        if (r) {
          _refreshing = self;
          self.update(r);
        }
        if (pin && (!pinReparent || !self.isActive)) {
          if (r) {
            _swapPinOut(pin, spacer, pinOriginalState);
          } else {
            _swapPinIn(pin, spacer, _getComputedStyle(pin), spacerState);
          }
        }
        r || self.update(r);
        _refreshing = prevRefreshing;
        self.isReverted = r;
      }
    };
    self.refresh = function(soft, force, position, pinOffset) {
      if ((_refreshing || !self.enabled) && !force) {
        return;
      }
      if (pin && soft && _lastScrollTime) {
        _addListener3(ScrollTrigger3, "scrollEnd", _softRefresh);
        return;
      }
      !_refreshingAll && onRefreshInit && onRefreshInit(self);
      _refreshing = self;
      if (tweenTo.tween && !position) {
        tweenTo.tween.kill();
        tweenTo.tween = 0;
      }
      scrubTween && scrubTween.pause();
      if (invalidateOnRefresh && animation) {
        animation.revert({
          kill: false
        }).invalidate();
        animation.getChildren ? animation.getChildren(true, true, false).forEach(function(t) {
          return t.vars.immediateRender && t.render(0, true, true);
        }) : animation.vars.immediateRender && animation.render(0, true, true);
      }
      self.isReverted || self.revert(true, true);
      self._subPinOffset = false;
      var size = getScrollerSize(), scrollerBounds = getScrollerOffsets(), max = containerAnimation ? containerAnimation.duration() : _maxScroll(scroller, direction), isFirstRefresh = change <= 0.01 || !change, offset2 = 0, otherPinOffset = pinOffset || 0, parsedEnd = _isObject(position) ? position.end : vars.end, parsedEndTrigger = vars.endTrigger || trigger, parsedStart = _isObject(position) ? position.start : vars.start || (vars.start === 0 || !trigger ? 0 : pin ? "0 0" : "0 100%"), pinnedContainer = self.pinnedContainer = vars.pinnedContainer && _getTarget(vars.pinnedContainer, self), triggerIndex = trigger && Math.max(0, _triggers.indexOf(self)) || 0, i = triggerIndex, cs2, bounds, scroll, isVertical, override, curTrigger, curPin, oppositeScroll, initted, revertedPins, forcedOverflow, markerStartOffset, markerEndOffset;
      if (markers && _isObject(position)) {
        markerStartOffset = gsap2.getProperty(markerStartTrigger, direction.p);
        markerEndOffset = gsap2.getProperty(markerEndTrigger, direction.p);
      }
      while (i-- > 0) {
        curTrigger = _triggers[i];
        curTrigger.end || curTrigger.refresh(0, 1) || (_refreshing = self);
        curPin = curTrigger.pin;
        if (curPin && (curPin === trigger || curPin === pin || curPin === pinnedContainer) && !curTrigger.isReverted) {
          revertedPins || (revertedPins = []);
          revertedPins.unshift(curTrigger);
          curTrigger.revert(true, true);
        }
        if (curTrigger !== _triggers[i]) {
          triggerIndex--;
          i--;
        }
      }
      _isFunction(parsedStart) && (parsedStart = parsedStart(self));
      parsedStart = _parseClamp(parsedStart, "start", self);
      start = _parsePosition(parsedStart, trigger, size, direction, scrollFunc(), markerStart, markerStartTrigger, self, scrollerBounds, borderWidth, useFixedPosition, max, containerAnimation, self._startClamp && "_startClamp") || (pin ? -1e-3 : 0);
      _isFunction(parsedEnd) && (parsedEnd = parsedEnd(self));
      if (_isString(parsedEnd) && !parsedEnd.indexOf("+=")) {
        if (~parsedEnd.indexOf(" ")) {
          parsedEnd = (_isString(parsedStart) ? parsedStart.split(" ")[0] : "") + parsedEnd;
        } else {
          offset2 = _offsetToPx(parsedEnd.substr(2), size);
          parsedEnd = _isString(parsedStart) ? parsedStart : (containerAnimation ? gsap2.utils.mapRange(0, containerAnimation.duration(), containerAnimation.scrollTrigger.start, containerAnimation.scrollTrigger.end, start) : start) + offset2;
          parsedEndTrigger = trigger;
        }
      }
      parsedEnd = _parseClamp(parsedEnd, "end", self);
      end = Math.max(start, _parsePosition(parsedEnd || (parsedEndTrigger ? "100% 0" : max), parsedEndTrigger, size, direction, scrollFunc() + offset2, markerEnd, markerEndTrigger, self, scrollerBounds, borderWidth, useFixedPosition, max, containerAnimation, self._endClamp && "_endClamp")) || -1e-3;
      offset2 = 0;
      i = triggerIndex;
      while (i--) {
        curTrigger = _triggers[i] || {};
        curPin = curTrigger.pin;
        if (curPin && curTrigger.start - curTrigger._pinPush <= start && !containerAnimation && curTrigger.end > 0) {
          cs2 = curTrigger.end - (self._startClamp ? Math.max(0, curTrigger.start) : curTrigger.start);
          if ((curPin === trigger && curTrigger.start - curTrigger._pinPush < start || curPin === pinnedContainer) && isNaN(parsedStart)) {
            offset2 += cs2 * (1 - curTrigger.progress);
          }
          curPin === pin && (otherPinOffset += cs2);
        }
      }
      start += offset2;
      end += offset2;
      self._startClamp && (self._startClamp += offset2);
      if (self._endClamp && !_refreshingAll) {
        self._endClamp = end || -1e-3;
        end = Math.min(end, _maxScroll(scroller, direction));
      }
      change = end - start || (start -= 0.01) && 1e-3;
      if (isFirstRefresh) {
        prevProgress = gsap2.utils.clamp(0, 1, gsap2.utils.normalize(start, end, prevScroll));
      }
      self._pinPush = otherPinOffset;
      if (markerStart && offset2) {
        cs2 = {};
        cs2[direction.a] = "+=" + offset2;
        pinnedContainer && (cs2[direction.p] = "-=" + scrollFunc());
        gsap2.set([markerStart, markerEnd], cs2);
      }
      if (pin && !(_clampingMax && self.end >= _maxScroll(scroller, direction))) {
        cs2 = _getComputedStyle(pin);
        isVertical = direction === _vertical;
        scroll = scrollFunc();
        pinStart = parseFloat(pinGetter(direction.a)) + otherPinOffset;
        if (!max && end > 1) {
          forcedOverflow = (isViewport ? _doc2.scrollingElement || _docEl2 : scroller).style;
          forcedOverflow = {
            style: forcedOverflow,
            value: forcedOverflow["overflow" + direction.a.toUpperCase()]
          };
          if (isViewport && _getComputedStyle(_body2)["overflow" + direction.a.toUpperCase()] !== "scroll") {
            forcedOverflow.style["overflow" + direction.a.toUpperCase()] = "scroll";
          }
        }
        _swapPinIn(pin, spacer, cs2);
        pinState = _getState(pin);
        bounds = _getBounds(pin, true);
        oppositeScroll = useFixedPosition && _getScrollFunc(scroller, isVertical ? _horizontal : _vertical)();
        if (pinSpacing) {
          spacerState = [pinSpacing + direction.os2, change + otherPinOffset + _px];
          spacerState.t = spacer;
          i = pinSpacing === _padding ? _getSize(pin, direction) + change + otherPinOffset : 0;
          if (i) {
            spacerState.push(direction.d, i + _px);
            spacer.style.flexBasis !== "auto" && (spacer.style.flexBasis = i + _px);
          }
          _setState(spacerState);
          if (pinnedContainer) {
            _triggers.forEach(function(t) {
              if (t.pin === pinnedContainer && t.vars.pinSpacing !== false) {
                t._subPinOffset = true;
              }
            });
          }
          useFixedPosition && scrollFunc(prevScroll);
        } else {
          i = _getSize(pin, direction);
          i && spacer.style.flexBasis !== "auto" && (spacer.style.flexBasis = i + _px);
        }
        if (useFixedPosition) {
          override = {
            top: bounds.top + (isVertical ? scroll - start : oppositeScroll) + _px,
            left: bounds.left + (isVertical ? oppositeScroll : scroll - start) + _px,
            boxSizing: "border-box",
            position: "fixed"
          };
          override[_width] = override["max" + _Width] = Math.ceil(bounds.width) + _px;
          override[_height] = override["max" + _Height] = Math.ceil(bounds.height) + _px;
          override[_margin] = override[_margin + _Top] = override[_margin + _Right] = override[_margin + _Bottom] = override[_margin + _Left] = "0";
          override[_padding] = cs2[_padding];
          override[_padding + _Top] = cs2[_padding + _Top];
          override[_padding + _Right] = cs2[_padding + _Right];
          override[_padding + _Bottom] = cs2[_padding + _Bottom];
          override[_padding + _Left] = cs2[_padding + _Left];
          pinActiveState = _copyState(pinOriginalState, override, pinReparent);
          _refreshingAll && scrollFunc(0);
        }
        if (animation) {
          initted = animation._initted;
          _suppressOverwrites(1);
          animation.render(animation.duration(), true, true);
          pinChange = pinGetter(direction.a) - pinStart + change + otherPinOffset;
          pinMoves = Math.abs(change - pinChange) > 1;
          useFixedPosition && pinMoves && pinActiveState.splice(pinActiveState.length - 2, 2);
          animation.render(0, true, true);
          initted || animation.invalidate(true);
          animation.parent || animation.totalTime(animation.totalTime());
          _suppressOverwrites(0);
        } else {
          pinChange = change;
        }
        forcedOverflow && (forcedOverflow.value ? forcedOverflow.style["overflow" + direction.a.toUpperCase()] = forcedOverflow.value : forcedOverflow.style.removeProperty("overflow-" + direction.a));
      } else if (trigger && scrollFunc() && !containerAnimation) {
        bounds = trigger.parentNode;
        while (bounds && bounds !== _body2) {
          if (bounds._pinOffset) {
            start -= bounds._pinOffset;
            end -= bounds._pinOffset;
          }
          bounds = bounds.parentNode;
        }
      }
      revertedPins && revertedPins.forEach(function(t) {
        return t.revert(false, true);
      });
      self.start = start;
      self.end = end;
      scroll1 = scroll2 = _refreshingAll ? prevScroll : scrollFunc();
      if (!containerAnimation && !_refreshingAll) {
        scroll1 < prevScroll && scrollFunc(prevScroll);
        self.scroll.rec = 0;
      }
      self.revert(false, true);
      lastRefresh = _getTime2();
      if (snapDelayedCall) {
        lastSnap = -1;
        snapDelayedCall.restart(true);
      }
      _refreshing = 0;
      animation && isToggle && (animation._initted || prevAnimProgress) && animation.progress() !== prevAnimProgress && animation.progress(prevAnimProgress || 0, true).render(animation.time(), true, true);
      if (isFirstRefresh || prevProgress !== self.progress || containerAnimation || invalidateOnRefresh || animation && !animation._initted) {
        animation && !isToggle && (animation._initted || prevProgress || animation.vars.immediateRender !== false) && animation.totalProgress(containerAnimation && start < -1e-3 && !prevProgress ? gsap2.utils.normalize(start, end, 0) : prevProgress, true);
        self.progress = isFirstRefresh || (scroll1 - start) / change === prevProgress ? 0 : prevProgress;
      }
      pin && pinSpacing && (spacer._pinOffset = Math.round(self.progress * pinChange));
      scrubTween && scrubTween.invalidate();
      if (!isNaN(markerStartOffset)) {
        markerStartOffset -= gsap2.getProperty(markerStartTrigger, direction.p);
        markerEndOffset -= gsap2.getProperty(markerEndTrigger, direction.p);
        _shiftMarker(markerStartTrigger, direction, markerStartOffset);
        _shiftMarker(markerStart, direction, markerStartOffset - (pinOffset || 0));
        _shiftMarker(markerEndTrigger, direction, markerEndOffset);
        _shiftMarker(markerEnd, direction, markerEndOffset - (pinOffset || 0));
      }
      isFirstRefresh && !_refreshingAll && self.update();
      if (onRefresh && !_refreshingAll && !executingOnRefresh) {
        executingOnRefresh = true;
        onRefresh(self);
        executingOnRefresh = false;
      }
    };
    self.getVelocity = function() {
      return (scrollFunc() - scroll2) / (_getTime2() - _time2) * 1e3 || 0;
    };
    self.endAnimation = function() {
      _endAnimation(self.callbackAnimation);
      if (animation) {
        scrubTween ? scrubTween.progress(1) : !animation.paused() ? _endAnimation(animation, animation.reversed()) : isToggle || _endAnimation(animation, self.direction < 0, 1);
      }
    };
    self.labelToScroll = function(label) {
      return animation && animation.labels && (start || self.refresh() || start) + animation.labels[label] / animation.duration() * change || 0;
    };
    self.getTrailing = function(name) {
      var i = _triggers.indexOf(self), a = self.direction > 0 ? _triggers.slice(0, i).reverse() : _triggers.slice(i + 1);
      return (_isString(name) ? a.filter(function(t) {
        return t.vars.preventOverlaps === name;
      }) : a).filter(function(t) {
        return self.direction > 0 ? t.end <= start : t.start >= end;
      });
    };
    self.update = function(reset, recordVelocity, forceFake) {
      if (containerAnimation && !forceFake && !reset) {
        return;
      }
      var scroll = _refreshingAll === true ? prevScroll : self.scroll(), p = reset ? 0 : (scroll - start) / change, clipped = p < 0 ? 0 : p > 1 ? 1 : p || 0, prevProgress2 = self.progress, isActive, wasActive, toggleState, action, stateChanged, toggled, isAtMax, isTakingAction;
      if (recordVelocity) {
        scroll2 = scroll1;
        scroll1 = containerAnimation ? scrollFunc() : scroll;
        if (snap) {
          snap2 = snap1;
          snap1 = animation && !isToggle ? animation.totalProgress() : clipped;
        }
      }
      if (anticipatePin && pin && !_refreshing && !_startup2 && _lastScrollTime) {
        if (!clipped && start < scroll + (scroll - scroll2) / (_getTime2() - _time2) * anticipatePin) {
          clipped = 1e-4;
        } else if (clipped === 1 && end > scroll + (scroll - scroll2) / (_getTime2() - _time2) * anticipatePin) {
          clipped = 0.9999;
        }
      }
      if (clipped !== prevProgress2 && self.enabled) {
        isActive = self.isActive = !!clipped && clipped < 1;
        wasActive = !!prevProgress2 && prevProgress2 < 1;
        toggled = isActive !== wasActive;
        stateChanged = toggled || !!clipped !== !!prevProgress2;
        self.direction = clipped > prevProgress2 ? 1 : -1;
        self.progress = clipped;
        if (stateChanged && !_refreshing) {
          toggleState = clipped && !prevProgress2 ? 0 : clipped === 1 ? 1 : prevProgress2 === 1 ? 2 : 3;
          if (isToggle) {
            action = !toggled && toggleActions[toggleState + 1] !== "none" && toggleActions[toggleState + 1] || toggleActions[toggleState];
            isTakingAction = animation && (action === "complete" || action === "reset" || action in animation);
          }
        }
        preventOverlaps && (toggled || isTakingAction) && (isTakingAction || scrub || !animation) && (_isFunction(preventOverlaps) ? preventOverlaps(self) : self.getTrailing(preventOverlaps).forEach(function(t) {
          return t.endAnimation();
        }));
        if (!isToggle) {
          if (scrubTween && !_refreshing && !_startup2) {
            scrubTween._dp._time - scrubTween._start !== scrubTween._time && scrubTween.render(scrubTween._dp._time - scrubTween._start);
            if (scrubTween.resetTo) {
              scrubTween.resetTo("totalProgress", clipped, animation._tTime / animation._tDur);
            } else {
              scrubTween.vars.totalProgress = clipped;
              scrubTween.invalidate().restart();
            }
          } else if (animation) {
            animation.totalProgress(clipped, !!(_refreshing && (lastRefresh || reset)));
          }
        }
        if (pin) {
          reset && pinSpacing && (spacer.style[pinSpacing + direction.os2] = spacingStart);
          if (!useFixedPosition) {
            pinSetter(_round(pinStart + pinChange * clipped));
          } else if (stateChanged) {
            isAtMax = !reset && clipped > prevProgress2 && end + 1 > scroll && scroll + 1 >= _maxScroll(scroller, direction);
            if (pinReparent) {
              if (!reset && (isActive || isAtMax)) {
                var bounds = _getBounds(pin, true), _offset = scroll - start;
                _reparent(pin, _body2, bounds.top + (direction === _vertical ? _offset : 0) + _px, bounds.left + (direction === _vertical ? 0 : _offset) + _px);
              } else {
                _reparent(pin, spacer);
              }
            }
            _setState(isActive || isAtMax ? pinActiveState : pinState);
            pinMoves && clipped < 1 && isActive || pinSetter(pinStart + (clipped === 1 && !isAtMax ? pinChange : 0));
          }
        }
        snap && !tweenTo.tween && !_refreshing && !_startup2 && snapDelayedCall.restart(true);
        toggleClass && (toggled || once && clipped && (clipped < 1 || !_limitCallbacks)) && _toArray(toggleClass.targets).forEach(function(el) {
          return el.classList[isActive || once ? "add" : "remove"](toggleClass.className);
        });
        onUpdate && !isToggle && !reset && onUpdate(self);
        if (stateChanged && !_refreshing) {
          if (isToggle) {
            if (isTakingAction) {
              if (action === "complete") {
                animation.pause().totalProgress(1);
              } else if (action === "reset") {
                animation.restart(true).pause();
              } else if (action === "restart") {
                animation.restart(true);
              } else {
                animation[action]();
              }
            }
            onUpdate && onUpdate(self);
          }
          if (toggled || !_limitCallbacks) {
            onToggle && toggled && _callback(self, onToggle);
            callbacks[toggleState] && _callback(self, callbacks[toggleState]);
            once && (clipped === 1 ? self.kill(false, 1) : callbacks[toggleState] = 0);
            if (!toggled) {
              toggleState = clipped === 1 ? 1 : 3;
              callbacks[toggleState] && _callback(self, callbacks[toggleState]);
            }
          }
          if (fastScrollEnd && !isActive && Math.abs(self.getVelocity()) > (_isNumber(fastScrollEnd) ? fastScrollEnd : 2500)) {
            _endAnimation(self.callbackAnimation);
            scrubTween ? scrubTween.progress(1) : _endAnimation(animation, action === "reverse" ? 1 : !clipped, 1);
          }
        } else if (isToggle && onUpdate && !_refreshing) {
          onUpdate(self);
        }
      }
      if (markerEndSetter) {
        var n = containerAnimation ? scroll / containerAnimation.duration() * (containerAnimation._caScrollDist || 0) : scroll;
        markerStartSetter(n + (markerStartTrigger._isFlipped ? 1 : 0));
        markerEndSetter(n);
      }
      caMarkerSetter && caMarkerSetter(-scroll / containerAnimation.duration() * (containerAnimation._caScrollDist || 0));
    };
    self.enable = function(reset, refresh) {
      if (!self.enabled) {
        self.enabled = true;
        _addListener3(scroller, "resize", _onResize);
        isViewport || _addListener3(scroller, "scroll", _onScroll3);
        onRefreshInit && _addListener3(ScrollTrigger3, "refreshInit", onRefreshInit);
        if (reset !== false) {
          self.progress = prevProgress = 0;
          scroll1 = scroll2 = lastSnap = scrollFunc();
        }
        refresh !== false && self.refresh();
      }
    };
    self.getTween = function(snap3) {
      return snap3 && tweenTo ? tweenTo.tween : scrubTween;
    };
    self.setPositions = function(newStart, newEnd, keepClamp, pinOffset) {
      if (containerAnimation) {
        var st = containerAnimation.scrollTrigger, duration = containerAnimation.duration(), _change = st.end - st.start;
        newStart = st.start + _change * newStart / duration;
        newEnd = st.start + _change * newEnd / duration;
      }
      self.refresh(false, false, {
        start: _keepClamp(newStart, keepClamp && !!self._startClamp),
        end: _keepClamp(newEnd, keepClamp && !!self._endClamp)
      }, pinOffset);
      self.update();
    };
    self.adjustPinSpacing = function(amount) {
      if (spacerState && amount) {
        var i = spacerState.indexOf(direction.d) + 1;
        spacerState[i] = parseFloat(spacerState[i]) + amount + _px;
        spacerState[1] = parseFloat(spacerState[1]) + amount + _px;
        _setState(spacerState);
      }
    };
    self.disable = function(reset, allowAnimation) {
      reset !== false && self.revert(true, true);
      if (self.enabled) {
        self.enabled = self.isActive = false;
        allowAnimation || scrubTween && scrubTween.pause();
        prevScroll = 0;
        pinCache && (pinCache.uncache = 1);
        onRefreshInit && _removeListener3(ScrollTrigger3, "refreshInit", onRefreshInit);
        if (snapDelayedCall) {
          snapDelayedCall.pause();
          tweenTo.tween && tweenTo.tween.kill() && (tweenTo.tween = 0);
        }
        if (!isViewport) {
          var i = _triggers.length;
          while (i--) {
            if (_triggers[i].scroller === scroller && _triggers[i] !== self) {
              return;
            }
          }
          _removeListener3(scroller, "resize", _onResize);
          isViewport || _removeListener3(scroller, "scroll", _onScroll3);
        }
      }
    };
    self.kill = function(revert, allowAnimation) {
      self.disable(revert, allowAnimation);
      scrubTween && !allowAnimation && scrubTween.kill();
      id && delete _ids[id];
      var i = _triggers.indexOf(self);
      i >= 0 && _triggers.splice(i, 1);
      i === _i && _direction > 0 && _i--;
      i = 0;
      _triggers.forEach(function(t) {
        return t.scroller === self.scroller && (i = 1);
      });
      i || _refreshingAll || (self.scroll.rec = 0);
      if (animation) {
        animation.scrollTrigger = null;
        revert && animation.revert({
          kill: false
        });
        allowAnimation || animation.kill();
      }
      markerStart && [markerStart, markerEnd, markerStartTrigger, markerEndTrigger].forEach(function(m) {
        return m.parentNode && m.parentNode.removeChild(m);
      });
      _primary === self && (_primary = 0);
      if (pin) {
        pinCache && (pinCache.uncache = 1);
        i = 0;
        _triggers.forEach(function(t) {
          return t.pin === pin && i++;
        });
        i || (pinCache.spacer = 0);
      }
      vars.onKill && vars.onKill(self);
    };
    _triggers.push(self);
    self.enable(false, false);
    customRevertReturn && customRevertReturn(self);
    if (animation && animation.add && !change) {
      var updateFunc = self.update;
      self.update = function() {
        self.update = updateFunc;
        _scrollers.cache++;
        start || end || self.refresh();
      };
      gsap2.delayedCall(0.01, self.update);
      change = 0.01;
      start = end = 0;
    } else {
      self.refresh();
    }
    pin && _queueRefreshAll();
  };
  ScrollTrigger3.register = function register(core) {
    if (!_coreInitted2) {
      gsap2 = core || _getGSAP3();
      _windowExists() && window.document && ScrollTrigger3.enable();
      _coreInitted2 = _enabled;
    }
    return _coreInitted2;
  };
  ScrollTrigger3.defaults = function defaults(config) {
    if (config) {
      for (var p in config) {
        _defaults[p] = config[p];
      }
    }
    return _defaults;
  };
  ScrollTrigger3.disable = function disable(reset, kill) {
    _enabled = 0;
    _triggers.forEach(function(trigger) {
      return trigger[kill ? "kill" : "disable"](reset);
    });
    _removeListener3(_win2, "wheel", _onScroll3);
    _removeListener3(_doc2, "scroll", _onScroll3);
    clearInterval(_syncInterval);
    _removeListener3(_doc2, "touchcancel", _passThrough);
    _removeListener3(_body2, "touchstart", _passThrough);
    _multiListener(_removeListener3, _doc2, "pointerdown,touchstart,mousedown", _pointerDownHandler);
    _multiListener(_removeListener3, _doc2, "pointerup,touchend,mouseup", _pointerUpHandler);
    _resizeDelay.kill();
    _iterateAutoRefresh(_removeListener3);
    for (var i = 0; i < _scrollers.length; i += 3) {
      _wheelListener(_removeListener3, _scrollers[i], _scrollers[i + 1]);
      _wheelListener(_removeListener3, _scrollers[i], _scrollers[i + 2]);
    }
  };
  ScrollTrigger3.enable = function enable() {
    _win2 = window;
    _doc2 = document;
    _docEl2 = _doc2.documentElement;
    _body2 = _doc2.body;
    if (gsap2) {
      _toArray = gsap2.utils.toArray;
      _clamp2 = gsap2.utils.clamp;
      _context2 = gsap2.core.context || _passThrough;
      _suppressOverwrites = gsap2.core.suppressOverwrites || _passThrough;
      _scrollRestoration = _win2.history.scrollRestoration || "auto";
      _lastScroll = _win2.pageYOffset || 0;
      gsap2.core.globals("ScrollTrigger", ScrollTrigger3);
      if (_body2) {
        _enabled = 1;
        _div100vh = document.createElement("div");
        _div100vh.style.height = "100vh";
        _div100vh.style.position = "absolute";
        _refresh100vh();
        _rafBugFix();
        Observer.register(gsap2);
        ScrollTrigger3.isTouch = Observer.isTouch;
        _fixIOSBug = Observer.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent);
        _ignoreMobileResize = Observer.isTouch === 1;
        _addListener3(_win2, "wheel", _onScroll3);
        _root2 = [_win2, _doc2, _docEl2, _body2];
        if (gsap2.matchMedia) {
          ScrollTrigger3.matchMedia = function(vars) {
            var mm = gsap2.matchMedia(), p;
            for (p in vars) {
              mm.add(p, vars[p]);
            }
            return mm;
          };
          gsap2.addEventListener("matchMediaInit", function() {
            _recordScrollPositions();
            _revertAll();
          });
          gsap2.addEventListener("matchMediaRevert", function() {
            return _revertRecorded();
          });
          gsap2.addEventListener("matchMedia", function() {
            _refreshAll(0, 1);
            _dispatch("matchMedia");
          });
          gsap2.matchMedia().add("(orientation: portrait)", function() {
            _setBaseDimensions();
            return _setBaseDimensions;
          });
        } else {
          console.warn("Requires GSAP 3.11.0 or later");
        }
        _setBaseDimensions();
        _addListener3(_doc2, "scroll", _onScroll3);
        var bodyHasStyle = _body2.hasAttribute("style"), bodyStyle = _body2.style, border = bodyStyle.borderTopStyle, AnimationProto = gsap2.core.Animation.prototype, bounds, i;
        AnimationProto.revert || Object.defineProperty(AnimationProto, "revert", {
          value: function value() {
            return this.time(-0.01, true);
          }
        });
        bodyStyle.borderTopStyle = "solid";
        bounds = _getBounds(_body2);
        _vertical.m = Math.round(bounds.top + _vertical.sc()) || 0;
        _horizontal.m = Math.round(bounds.left + _horizontal.sc()) || 0;
        border ? bodyStyle.borderTopStyle = border : bodyStyle.removeProperty("border-top-style");
        if (!bodyHasStyle) {
          _body2.setAttribute("style", "");
          _body2.removeAttribute("style");
        }
        _syncInterval = setInterval(_sync, 250);
        gsap2.delayedCall(0.5, function() {
          return _startup2 = 0;
        });
        _addListener3(_doc2, "touchcancel", _passThrough);
        _addListener3(_body2, "touchstart", _passThrough);
        _multiListener(_addListener3, _doc2, "pointerdown,touchstart,mousedown", _pointerDownHandler);
        _multiListener(_addListener3, _doc2, "pointerup,touchend,mouseup", _pointerUpHandler);
        _transformProp = gsap2.utils.checkPrefix("transform");
        _stateProps.push(_transformProp);
        _coreInitted2 = _getTime2();
        _resizeDelay = gsap2.delayedCall(0.2, _refreshAll).pause();
        _autoRefresh = [_doc2, "visibilitychange", function() {
          var w = _win2.innerWidth, h = _win2.innerHeight;
          if (_doc2.hidden) {
            _prevWidth = w;
            _prevHeight = h;
          } else if (_prevWidth !== w || _prevHeight !== h) {
            _onResize();
          }
        }, _doc2, "DOMContentLoaded", _refreshAll, _win2, "load", _refreshAll, _win2, "resize", _onResize];
        _iterateAutoRefresh(_addListener3);
        _triggers.forEach(function(trigger) {
          return trigger.enable(0, 1);
        });
        for (i = 0; i < _scrollers.length; i += 3) {
          _wheelListener(_removeListener3, _scrollers[i], _scrollers[i + 1]);
          _wheelListener(_removeListener3, _scrollers[i], _scrollers[i + 2]);
        }
      }
    }
  };
  ScrollTrigger3.config = function config(vars) {
    "limitCallbacks" in vars && (_limitCallbacks = !!vars.limitCallbacks);
    var ms = vars.syncInterval;
    ms && clearInterval(_syncInterval) || (_syncInterval = ms) && setInterval(_sync, ms);
    "ignoreMobileResize" in vars && (_ignoreMobileResize = ScrollTrigger3.isTouch === 1 && vars.ignoreMobileResize);
    if ("autoRefreshEvents" in vars) {
      _iterateAutoRefresh(_removeListener3) || _iterateAutoRefresh(_addListener3, vars.autoRefreshEvents || "none");
      _ignoreResize = (vars.autoRefreshEvents + "").indexOf("resize") === -1;
    }
  };
  ScrollTrigger3.scrollerProxy = function scrollerProxy(target, vars) {
    var t = _getTarget(target), i = _scrollers.indexOf(t), isViewport = _isViewport3(t);
    if (~i) {
      _scrollers.splice(i, isViewport ? 6 : 2);
    }
    if (vars) {
      isViewport ? _proxies.unshift(_win2, vars, _body2, vars, _docEl2, vars) : _proxies.unshift(t, vars);
    }
  };
  ScrollTrigger3.clearMatchMedia = function clearMatchMedia(query) {
    _triggers.forEach(function(t) {
      return t._ctx && t._ctx.query === query && t._ctx.kill(true, true);
    });
  };
  ScrollTrigger3.isInViewport = function isInViewport(element, ratio, horizontal) {
    var bounds = (_isString(element) ? _getTarget(element) : element).getBoundingClientRect(), offset = bounds[horizontal ? _width : _height] * ratio || 0;
    return horizontal ? bounds.right - offset > 0 && bounds.left + offset < _win2.innerWidth : bounds.bottom - offset > 0 && bounds.top + offset < _win2.innerHeight;
  };
  ScrollTrigger3.positionInViewport = function positionInViewport(element, referencePoint, horizontal) {
    _isString(element) && (element = _getTarget(element));
    var bounds = element.getBoundingClientRect(), size = bounds[horizontal ? _width : _height], offset = referencePoint == null ? size / 2 : referencePoint in _keywords ? _keywords[referencePoint] * size : ~referencePoint.indexOf("%") ? parseFloat(referencePoint) * size / 100 : parseFloat(referencePoint) || 0;
    return horizontal ? (bounds.left + offset) / _win2.innerWidth : (bounds.top + offset) / _win2.innerHeight;
  };
  ScrollTrigger3.killAll = function killAll(allowListeners) {
    _triggers.slice(0).forEach(function(t) {
      return t.vars.id !== "ScrollSmoother" && t.kill();
    });
    if (allowListeners !== true) {
      var listeners = _listeners.killAll || [];
      _listeners = {};
      listeners.forEach(function(f) {
        return f();
      });
    }
  };
  return ScrollTrigger3;
}();
ScrollTrigger2.version = "3.14.2";
ScrollTrigger2.saveStyles = function(targets) {
  return targets ? _toArray(targets).forEach(function(target) {
    if (target && target.style) {
      var i = _savedStyles.indexOf(target);
      i >= 0 && _savedStyles.splice(i, 5);
      _savedStyles.push(target, target.style.cssText, target.getBBox && target.getAttribute("transform"), gsap2.core.getCache(target), _context2());
    }
  }) : _savedStyles;
};
ScrollTrigger2.revert = function(soft, media) {
  return _revertAll(!soft, media);
};
ScrollTrigger2.create = function(vars, animation) {
  return new ScrollTrigger2(vars, animation);
};
ScrollTrigger2.refresh = function(safe) {
  return safe ? _onResize(true) : (_coreInitted2 || ScrollTrigger2.register()) && _refreshAll(true);
};
ScrollTrigger2.update = function(force) {
  return ++_scrollers.cache && _updateAll(force === true ? 2 : 0);
};
ScrollTrigger2.clearScrollMemory = _clearScrollMemory;
ScrollTrigger2.maxScroll = function(element, horizontal) {
  return _maxScroll(element, horizontal ? _horizontal : _vertical);
};
ScrollTrigger2.getScrollFunc = function(element, horizontal) {
  return _getScrollFunc(_getTarget(element), horizontal ? _horizontal : _vertical);
};
ScrollTrigger2.getById = function(id) {
  return _ids[id];
};
ScrollTrigger2.getAll = function() {
  return _triggers.filter(function(t) {
    return t.vars.id !== "ScrollSmoother";
  });
};
ScrollTrigger2.isScrolling = function() {
  return !!_lastScrollTime;
};
ScrollTrigger2.snapDirectional = _snapDirectional;
ScrollTrigger2.addEventListener = function(type, callback) {
  var a = _listeners[type] || (_listeners[type] = []);
  ~a.indexOf(callback) || a.push(callback);
};
ScrollTrigger2.removeEventListener = function(type, callback) {
  var a = _listeners[type], i = a && a.indexOf(callback);
  i >= 0 && a.splice(i, 1);
};
ScrollTrigger2.batch = function(targets, vars) {
  var result = [], varsCopy = {}, interval = vars.interval || 0.016, batchMax = vars.batchMax || 1e9, proxyCallback = function proxyCallback2(type, callback) {
    var elements = [], triggers = [], delay = gsap2.delayedCall(interval, function() {
      callback(elements, triggers);
      elements = [];
      triggers = [];
    }).pause();
    return function(self) {
      elements.length || delay.restart(true);
      elements.push(self.trigger);
      triggers.push(self);
      batchMax <= elements.length && delay.progress(1);
    };
  }, p;
  for (p in vars) {
    varsCopy[p] = p.substr(0, 2) === "on" && _isFunction(vars[p]) && p !== "onRefreshInit" ? proxyCallback(p, vars[p]) : vars[p];
  }
  if (_isFunction(batchMax)) {
    batchMax = batchMax();
    _addListener3(ScrollTrigger2, "refresh", function() {
      return batchMax = vars.batchMax();
    });
  }
  _toArray(targets).forEach(function(target) {
    var config = {};
    for (p in varsCopy) {
      config[p] = varsCopy[p];
    }
    config.trigger = target;
    result.push(ScrollTrigger2.create(config));
  });
  return result;
};
var _clampScrollAndGetDurationMultiplier = function _clampScrollAndGetDurationMultiplier2(scrollFunc, current, end, max) {
  current > max ? scrollFunc(max) : current < 0 && scrollFunc(0);
  return end > max ? (max - current) / (end - current) : end < 0 ? current / (current - end) : 1;
};
var _allowNativePanning = function _allowNativePanning2(target, direction) {
  if (direction === true) {
    target.style.removeProperty("touch-action");
  } else {
    target.style.touchAction = direction === true ? "auto" : direction ? "pan-" + direction + (Observer.isTouch ? " pinch-zoom" : "") : "none";
  }
  target === _docEl2 && _allowNativePanning2(_body2, direction);
};
var _overflow = {
  auto: 1,
  scroll: 1
};
var _nestedScroll = function _nestedScroll2(_ref5) {
  var event = _ref5.event, target = _ref5.target, axis = _ref5.axis;
  var node = (event.changedTouches ? event.changedTouches[0] : event).target, cache = node._gsap || gsap2.core.getCache(node), time = _getTime2(), cs;
  if (!cache._isScrollT || time - cache._isScrollT > 2e3) {
    while (node && node !== _body2 && (node.scrollHeight <= node.clientHeight && node.scrollWidth <= node.clientWidth || !(_overflow[(cs = _getComputedStyle(node)).overflowY] || _overflow[cs.overflowX]))) {
      node = node.parentNode;
    }
    cache._isScroll = node && node !== target && !_isViewport3(node) && (_overflow[(cs = _getComputedStyle(node)).overflowY] || _overflow[cs.overflowX]);
    cache._isScrollT = time;
  }
  if (cache._isScroll || axis === "x") {
    event.stopPropagation();
    event._gsapAllow = true;
  }
};
var _inputObserver = function _inputObserver2(target, type, inputs, nested) {
  return Observer.create({
    target,
    capture: true,
    debounce: false,
    lockAxis: true,
    type,
    onWheel: nested = nested && _nestedScroll,
    onPress: nested,
    onDrag: nested,
    onScroll: nested,
    onEnable: function onEnable() {
      return inputs && _addListener3(_doc2, Observer.eventTypes[0], _captureInputs, false, true);
    },
    onDisable: function onDisable() {
      return _removeListener3(_doc2, Observer.eventTypes[0], _captureInputs, true);
    }
  });
};
var _inputExp = /(input|label|select|textarea)/i;
var _inputIsFocused;
var _captureInputs = function _captureInputs2(e) {
  var isInput = _inputExp.test(e.target.tagName);
  if (isInput || _inputIsFocused) {
    e._gsapAllow = true;
    _inputIsFocused = isInput;
  }
};
var _getScrollNormalizer = function _getScrollNormalizer2(vars) {
  _isObject(vars) || (vars = {});
  vars.preventDefault = vars.isNormalizer = vars.allowClicks = true;
  vars.type || (vars.type = "wheel,touch");
  vars.debounce = !!vars.debounce;
  vars.id = vars.id || "normalizer";
  var _vars2 = vars, normalizeScrollX = _vars2.normalizeScrollX, momentum = _vars2.momentum, allowNestedScroll = _vars2.allowNestedScroll, onRelease = _vars2.onRelease, self, maxY, target = _getTarget(vars.target) || _docEl2, smoother = gsap2.core.globals().ScrollSmoother, smootherInstance = smoother && smoother.get(), content = _fixIOSBug && (vars.content && _getTarget(vars.content) || smootherInstance && vars.content !== false && !smootherInstance.smooth() && smootherInstance.content()), scrollFuncY = _getScrollFunc(target, _vertical), scrollFuncX = _getScrollFunc(target, _horizontal), scale = 1, initialScale = (Observer.isTouch && _win2.visualViewport ? _win2.visualViewport.scale * _win2.visualViewport.width : _win2.outerWidth) / _win2.innerWidth, wheelRefresh = 0, resolveMomentumDuration = _isFunction(momentum) ? function() {
    return momentum(self);
  } : function() {
    return momentum || 2.8;
  }, lastRefreshID, skipTouchMove, inputObserver = _inputObserver(target, vars.type, true, allowNestedScroll), resumeTouchMove = function resumeTouchMove2() {
    return skipTouchMove = false;
  }, scrollClampX = _passThrough, scrollClampY = _passThrough, updateClamps = function updateClamps2() {
    maxY = _maxScroll(target, _vertical);
    scrollClampY = _clamp2(_fixIOSBug ? 1 : 0, maxY);
    normalizeScrollX && (scrollClampX = _clamp2(0, _maxScroll(target, _horizontal)));
    lastRefreshID = _refreshID;
  }, removeContentOffset = function removeContentOffset2() {
    content._gsap.y = _round(parseFloat(content._gsap.y) + scrollFuncY.offset) + "px";
    content.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(content._gsap.y) + ", 0, 1)";
    scrollFuncY.offset = scrollFuncY.cacheID = 0;
  }, ignoreDrag = function ignoreDrag2() {
    if (skipTouchMove) {
      requestAnimationFrame(resumeTouchMove);
      var offset = _round(self.deltaY / 2), scroll = scrollClampY(scrollFuncY.v - offset);
      if (content && scroll !== scrollFuncY.v + scrollFuncY.offset) {
        scrollFuncY.offset = scroll - scrollFuncY.v;
        var y = _round((parseFloat(content && content._gsap.y) || 0) - scrollFuncY.offset);
        content.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + y + ", 0, 1)";
        content._gsap.y = y + "px";
        scrollFuncY.cacheID = _scrollers.cache;
        _updateAll();
      }
      return true;
    }
    scrollFuncY.offset && removeContentOffset();
    skipTouchMove = true;
  }, tween, startScrollX, startScrollY, onStopDelayedCall, onResize = function onResize2() {
    updateClamps();
    if (tween.isActive() && tween.vars.scrollY > maxY) {
      scrollFuncY() > maxY ? tween.progress(1) && scrollFuncY(maxY) : tween.resetTo("scrollY", maxY);
    }
  };
  content && gsap2.set(content, {
    y: "+=0"
  });
  vars.ignoreCheck = function(e) {
    return _fixIOSBug && e.type === "touchmove" && ignoreDrag(e) || scale > 1.05 && e.type !== "touchstart" || self.isGesturing || e.touches && e.touches.length > 1;
  };
  vars.onPress = function() {
    skipTouchMove = false;
    var prevScale = scale;
    scale = _round((_win2.visualViewport && _win2.visualViewport.scale || 1) / initialScale);
    tween.pause();
    prevScale !== scale && _allowNativePanning(target, scale > 1.01 ? true : normalizeScrollX ? false : "x");
    startScrollX = scrollFuncX();
    startScrollY = scrollFuncY();
    updateClamps();
    lastRefreshID = _refreshID;
  };
  vars.onRelease = vars.onGestureStart = function(self2, wasDragging) {
    scrollFuncY.offset && removeContentOffset();
    if (!wasDragging) {
      onStopDelayedCall.restart(true);
    } else {
      _scrollers.cache++;
      var dur = resolveMomentumDuration(), currentScroll, endScroll;
      if (normalizeScrollX) {
        currentScroll = scrollFuncX();
        endScroll = currentScroll + dur * 0.05 * -self2.velocityX / 0.227;
        dur *= _clampScrollAndGetDurationMultiplier(scrollFuncX, currentScroll, endScroll, _maxScroll(target, _horizontal));
        tween.vars.scrollX = scrollClampX(endScroll);
      }
      currentScroll = scrollFuncY();
      endScroll = currentScroll + dur * 0.05 * -self2.velocityY / 0.227;
      dur *= _clampScrollAndGetDurationMultiplier(scrollFuncY, currentScroll, endScroll, _maxScroll(target, _vertical));
      tween.vars.scrollY = scrollClampY(endScroll);
      tween.invalidate().duration(dur).play(0.01);
      if (_fixIOSBug && tween.vars.scrollY >= maxY || currentScroll >= maxY - 1) {
        gsap2.to({}, {
          onUpdate: onResize,
          duration: dur
        });
      }
    }
    onRelease && onRelease(self2);
  };
  vars.onWheel = function() {
    tween._ts && tween.pause();
    if (_getTime2() - wheelRefresh > 1e3) {
      lastRefreshID = 0;
      wheelRefresh = _getTime2();
    }
  };
  vars.onChange = function(self2, dx, dy, xArray, yArray) {
    _refreshID !== lastRefreshID && updateClamps();
    dx && normalizeScrollX && scrollFuncX(scrollClampX(xArray[2] === dx ? startScrollX + (self2.startX - self2.x) : scrollFuncX() + dx - xArray[1]));
    if (dy) {
      scrollFuncY.offset && removeContentOffset();
      var isTouch = yArray[2] === dy, y = isTouch ? startScrollY + self2.startY - self2.y : scrollFuncY() + dy - yArray[1], yClamped = scrollClampY(y);
      isTouch && y !== yClamped && (startScrollY += yClamped - y);
      scrollFuncY(yClamped);
    }
    (dy || dx) && _updateAll();
  };
  vars.onEnable = function() {
    _allowNativePanning(target, normalizeScrollX ? false : "x");
    ScrollTrigger2.addEventListener("refresh", onResize);
    _addListener3(_win2, "resize", onResize);
    if (scrollFuncY.smooth) {
      scrollFuncY.target.style.scrollBehavior = "auto";
      scrollFuncY.smooth = scrollFuncX.smooth = false;
    }
    inputObserver.enable();
  };
  vars.onDisable = function() {
    _allowNativePanning(target, true);
    _removeListener3(_win2, "resize", onResize);
    ScrollTrigger2.removeEventListener("refresh", onResize);
    inputObserver.kill();
  };
  vars.lockAxis = vars.lockAxis !== false;
  self = new Observer(vars);
  self.iOS = _fixIOSBug;
  _fixIOSBug && !scrollFuncY() && scrollFuncY(1);
  _fixIOSBug && gsap2.ticker.add(_passThrough);
  onStopDelayedCall = self._dc;
  tween = gsap2.to(self, {
    ease: "power4",
    paused: true,
    inherit: false,
    scrollX: normalizeScrollX ? "+=0.1" : "+=0",
    scrollY: "+=0.1",
    modifiers: {
      scrollY: _interruptionTracker(scrollFuncY, scrollFuncY(), function() {
        return tween.pause();
      })
    },
    onUpdate: _updateAll,
    onComplete: onStopDelayedCall.vars.onComplete
  });
  return self;
};
ScrollTrigger2.sort = function(func) {
  if (_isFunction(func)) {
    return _triggers.sort(func);
  }
  var scroll = _win2.pageYOffset || 0;
  ScrollTrigger2.getAll().forEach(function(t) {
    return t._sortY = t.trigger ? scroll + t.trigger.getBoundingClientRect().top : t.start + _win2.innerHeight;
  });
  return _triggers.sort(func || function(a, b) {
    return (a.vars.refreshPriority || 0) * -1e6 + (a.vars.containerAnimation ? 1e6 : a._sortY) - ((b.vars.containerAnimation ? 1e6 : b._sortY) + (b.vars.refreshPriority || 0) * -1e6);
  });
};
ScrollTrigger2.observe = function(vars) {
  return new Observer(vars);
};
ScrollTrigger2.normalizeScroll = function(vars) {
  if (typeof vars === "undefined") {
    return _normalizer2;
  }
  if (vars === true && _normalizer2) {
    return _normalizer2.enable();
  }
  if (vars === false) {
    _normalizer2 && _normalizer2.kill();
    _normalizer2 = vars;
    return;
  }
  var normalizer = vars instanceof Observer ? vars : _getScrollNormalizer(vars);
  _normalizer2 && _normalizer2.target === normalizer.target && _normalizer2.kill();
  _isViewport3(normalizer.target) && (_normalizer2 = normalizer);
  return normalizer;
};
ScrollTrigger2.core = {
  // smaller file size way to leverage in ScrollSmoother and Observer
  _getVelocityProp,
  _inputObserver,
  _scrollers,
  _proxies,
  bridge: {
    // when normalizeScroll sets the scroll position (ss = setScroll)
    ss: function ss() {
      _lastScrollTime || _dispatch("scrollStart");
      _lastScrollTime = _getTime2();
    },
    // a way to get the _refreshing value in Observer
    ref: function ref() {
      return _refreshing;
    }
  }
};
_getGSAP3() && gsap2.registerPlugin(ScrollTrigger2);

// src/app/components/destinations/destinations.component.ts
function DestinationsComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275listener("click", function DestinationsComponent_div_11_Template_div_click_0_listener() {
      const dest_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openDest(dest_r2));
    });
    \u0275\u0275elementStart(1, "div", 9);
    \u0275\u0275element(2, "img", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 11)(4, "span", 12);
    \u0275\u0275text(5, "Explore ");
    \u0275\u0275element(6, "i", 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 14)(8, "p", 15);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const dest_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", dest_r2.image, \u0275\u0275sanitizeUrl)("alt", dest_r2.name);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(dest_r2.name);
  }
}
function DestinationsComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "button", 17);
    \u0275\u0275listener("click", function DestinationsComponent_div_12_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.showAll = true);
    });
    \u0275\u0275element(2, "i", 18);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" View All ", ctx_r2.data.destinations.length, " Destinations ");
  }
}
gsapWithCSS.registerPlugin(ScrollTrigger2);
var DestinationsComponent = class _DestinationsComponent {
  constructor(data, scrollSvc, router) {
    this.data = data;
    this.scrollSvc = scrollSvc;
    this.router = router;
    this.showAll = false;
    this.selectedDest = null;
    this.subPackages = [];
    this.openDestTab = new EventEmitter();
  }
  get visibleDestinations() {
    return this.showAll ? this.data.destinations : this.data.destinations.slice(0, 12);
  }
  ngAfterViewInit() {
    gsapWithCSS.fromTo(".destinations .section-header", { y: 40, opacity: 0 }, {
      y: 0,
      opacity: 1,
      duration: 0.7,
      ease: "power3.out",
      scrollTrigger: { trigger: "#destinations", start: "top 80%", once: true }
    });
    gsapWithCSS.fromTo(".dest-card", { y: 50, opacity: 0 }, {
      y: 0,
      opacity: 1,
      stagger: 0.06,
      duration: 0.55,
      ease: "power3.out",
      scrollTrigger: { trigger: "#destinations", start: "top 75%", once: true }
    });
  }
  openDest(dest) {
    const domesticKeys = ["andamans", "goa", "kerala", "himachal pradesh", "rajasthan", "ladakh", "uttarakhand", "kashmir"];
    const routedIntlKeys = ["bali", "dubai", "thailand", "singapore", "europe", "maldives", "malaysia", "switzerland", "australia", "japan", "turkey", "vietnam", "cambodia", "georgia", "greece", "italy", "kazakhstan", "new zealand", "spain", "russia", "seychelles", "mauritius", "portugal", "sri lanka"];
    const key = dest.name.toLowerCase();
    if (domesticKeys.includes(key)) {
      this.router.navigate(["/destination", key.replace(/\s+/g, "-")]);
    } else if (routedIntlKeys.includes(key)) {
      this.router.navigate(["/destination", key]);
    } else {
      this.openDestTab.emit(dest.name);
      this.scrollSvc.scrollTo("packages");
    }
  }
  goTo(id) {
    this.scrollSvc.scrollTo(id);
  }
  static {
    this.\u0275fac = function DestinationsComponent_Factory(t) {
      return new (t || _DestinationsComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(ScrollService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DestinationsComponent, selectors: [["app-destinations"]], outputs: { openDestTab: "openDestTab" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 13, vars: 2, consts: [["id", "destinations", 1, "destinations"], [1, "container"], [1, "section-header"], [1, "section-tag"], [1, "fas", "fa-map-marker-alt"], [1, "dest-grid"], ["class", "dest-card", 3, "click", 4, "ngFor", "ngForOf"], ["class", "dest-show-more", 4, "ngIf"], [1, "dest-card", 3, "click"], [1, "dest-img-wrap"], ["loading", "lazy", 3, "src", "alt"], [1, "dest-overlay"], [1, "dest-explore"], [1, "fas", "fa-arrow-right"], [1, "dest-info"], [1, "dest-name"], [1, "dest-show-more"], [1, "btn", "btn-outline", 3, "click"], [1, "fas", "fa-th-large"]], template: function DestinationsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275element(4, "i", 4);
        \u0275\u0275text(5, " Explore The World");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "h2");
        \u0275\u0275text(7, "Top Destinations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p");
        \u0275\u0275text(9, "Explore the world's most beautiful destinations with J K Tours And Travels, Pune");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "div", 5);
        \u0275\u0275template(11, DestinationsComponent_div_11_Template, 10, 3, "div", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275template(12, DestinationsComponent_div_12_Template, 4, 1, "div", 7);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(11);
        \u0275\u0275property("ngForOf", ctx.visibleDestinations);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.showAll);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule], styles: ['@charset "UTF-8";\n\n\n\n.destinations[_ngcontent-%COMP%] {\n  background: var(--bg-light);\n}\n.dest-modal-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 1100;\n  background: rgba(0, 0, 0, 0.65);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 1rem;\n}\n.dest-modal[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: var(--radius-lg);\n  width: 100%;\n  max-width: 680px;\n  max-height: 90vh;\n  overflow-y: auto;\n  position: relative;\n  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.3);\n}\n.dest-modal-close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background: rgba(0, 0, 0, 0.5);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.9rem;\n  z-index: 2;\n  transition: background 0.2s;\n}\n.dest-modal-close[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.8);\n}\n.dest-modal-hero[_ngcontent-%COMP%] {\n  position: relative;\n  height: 200px;\n  overflow: hidden;\n  border-radius: var(--radius-lg) var(--radius-lg) 0 0;\n}\n.dest-modal-hero[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.dest-modal-hero-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      to top,\n      rgba(0, 0, 0, 0.75) 0%,\n      transparent 60%);\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  padding: 1.5rem;\n}\n.dest-modal-hero-overlay[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 1.8rem;\n  margin: 0;\n}\n.dest-modal-hero-overlay[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 0.85rem;\n  margin: 0.3rem 0 0;\n}\n.dest-modal-body[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n.dest-modal-body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  color: var(--text-dark);\n  margin-bottom: 1rem;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.sub-pkg-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 1rem;\n}\n@media (max-width: 480px) {\n  .sub-pkg-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.sub-pkg-card[_ngcontent-%COMP%] {\n  border: 1.5px solid var(--border);\n  border-radius: var(--radius-md);\n  padding: 1.2rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  transition:\n    border-color 0.25s,\n    box-shadow 0.25s,\n    transform 0.25s;\n}\n.sub-pkg-card[_ngcontent-%COMP%]:hover {\n  border-color: var(--primary);\n  box-shadow: 0 8px 24px rgba(30, 58, 95, 0.12);\n  transform: translateY(-3px);\n}\n.sub-pkg-duration[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.sub-pkg-duration[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--primary);\n  font-size: 0.85rem;\n}\n.sub-pkg-duration[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: var(--primary);\n}\n.sub-pkg-name[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: var(--text-dark);\n}\n.sub-pkg-features[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n}\n.sub-pkg-features[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: var(--text-light);\n  display: flex;\n  align-items: center;\n  gap: 0.3rem;\n}\n.sub-pkg-features[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--accent);\n}\n.sub-pkg-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  justify-content: center;\n  font-size: 0.85rem;\n  padding: 0.6rem;\n}\n.dest-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 1rem;\n}\n@media (max-width: 1100px) {\n  .dest-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (max-width: 768px) {\n  .dest-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 480px) {\n  .dest-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.dest-card[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: var(--radius-md);\n  overflow: hidden;\n  cursor: pointer;\n  display: block;\n  aspect-ratio: 4/3;\n  box-shadow: var(--shadow-sm);\n  opacity: 1 !important;\n}\n.dest-card[_ngcontent-%COMP%]:hover   .dest-img-wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scale(1.1);\n}\n.dest-card[_ngcontent-%COMP%]:hover   .dest-overlay[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.dest-card[_ngcontent-%COMP%]:hover   .dest-name[_ngcontent-%COMP%] {\n  transform: translateY(0);\n  opacity: 1;\n}\n.dest-img-wrap[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n}\n.dest-img-wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.dest-img-wrap[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      to top,\n      rgba(0, 0, 0, 0.7) 0%,\n      rgba(0, 0, 0, 0.1) 60%,\n      transparent 100%);\n}\n.dest-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: rgba(30, 58, 95, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: 0;\n  transition: opacity 0.35s ease;\n  z-index: 2;\n}\n.dest-explore[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 0.88rem;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  background: rgba(255, 255, 255, 0.2);\n  border: 1.5px solid rgba(255, 255, 255, 0.5);\n  padding: 0.5rem 1.2rem;\n  border-radius: 50px;\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  transition: var(--transition);\n}\n.dest-explore[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n.dest-explore[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.35);\n}\n.dest-info[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  padding: 1rem 1.2rem;\n  z-index: 3;\n}\n.dest-name[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  font-weight: 700;\n  color: #fff;\n  font-family: var(--font-heading);\n  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);\n  margin: 0;\n  transform: translateY(4px);\n  opacity: 0.9;\n  transition: var(--transition);\n}\n.dest-show-more[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 2.5rem;\n}\n/*# sourceMappingURL=destinations.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DestinationsComponent, { className: "DestinationsComponent", filePath: "src\\app\\components\\destinations\\destinations.component.ts", lineNumber: 50 });
})();

// src/app/components/deals/deals.component.ts
function DealsComponent_div_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17);
    \u0275\u0275element(2, "img", 18);
    \u0275\u0275elementStart(3, "span", 19);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 20);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 21)(8, "div", 22)(9, "span");
    \u0275\u0275element(10, "i", 8);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275element(13, "i", 23);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "h3");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 24)(18, "span", 25);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 26);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 27);
    \u0275\u0275text(25, "/ person");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 28);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "button", 29);
    \u0275\u0275listener("click", function DealsComponent_div_43_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goTo("packages"));
    });
    \u0275\u0275element(30, "i", 5);
    \u0275\u0275text(31, " Grab This Deal ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const deal_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", deal_r3.image, \u0275\u0275sanitizeUrl)("alt", deal_r3.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(deal_r3.discount);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(deal_r3.tag);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", deal_r3.duration, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", deal_r3.validity, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(deal_r3.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind1(20, 10, deal_r3.originalPrice), "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind1(23, 12, deal_r3.salePrice), "");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" You save \u20B9", \u0275\u0275pipeBind1(28, 14, deal_r3.originalPrice - deal_r3.salePrice), "! ");
  }
}
gsapWithCSS.registerPlugin(ScrollTrigger2);
var DealsComponent = class _DealsComponent {
  constructor(scrollSvc) {
    this.scrollSvc = scrollSvc;
    this.countdown = { days: 0, hours: 0, mins: 0, secs: 0 };
    this.deals = [
      {
        title: "Dubai on a Budget",
        image: "https://cdn.yourholiday.me/static/dynimg/itinerary/98/600x300/2211579-2211578_dubai-pac1.jpg",
        discount: "30% OFF",
        originalPrice: 40767,
        salePrice: 28536,
        duration: "4N / 5D",
        validity: "Limited Seats",
        tag: "Best Seller",
        link: "packages"
      },
      {
        title: "Andaman Island Delight",
        image: "https://cdn.yourholiday.me/static/dynimg/itinerary/16/600x300/3032141-3032140_hero-anadaman-19-1-min.jpg",
        discount: "25% OFF",
        originalPrice: 37685,
        salePrice: 28264,
        duration: "4N / 5D",
        validity: "Fixed Departure",
        tag: "Popular",
        link: "packages"
      },
      {
        title: "Stunning Kerala Budget",
        image: "https://cdn.yourholiday.me/static/dynimg/itinerary/14/600x300/2228853-2228852_kerala-1.jpg",
        discount: "20% OFF",
        originalPrice: 20703,
        salePrice: 16562,
        duration: "5N / 6D",
        validity: "Book Now",
        tag: "Couples Special",
        link: "packages"
      }
    ];
  }
  ngOnInit() {
    this.startCountdown();
  }
  ngOnDestroy() {
    clearInterval(this.timer);
  }
  ngAfterViewInit() {
    gsapWithCSS.fromTo(".deals-header", { y: 40, opacity: 0 }, {
      y: 0,
      opacity: 1,
      duration: 0.7,
      ease: "power3.out",
      scrollTrigger: { trigger: "#deals", start: "top 80%", once: true }
    });
    gsapWithCSS.fromTo(".countdown-box", { scale: 0.7, opacity: 0 }, {
      scale: 1,
      opacity: 1,
      stagger: 0.1,
      duration: 0.5,
      ease: "back.out(1.7)",
      scrollTrigger: { trigger: "#deals", start: "top 75%", once: true }
    });
    gsapWithCSS.fromTo(".deal-card", { y: 60, opacity: 0 }, {
      y: 0,
      opacity: 1,
      stagger: 0.15,
      duration: 0.7,
      ease: "power3.out",
      scrollTrigger: { trigger: "#deals", start: "top 70%", once: true }
    });
  }
  startCountdown() {
    const target = /* @__PURE__ */ new Date();
    target.setDate(target.getDate() + 7);
    this.timer = setInterval(() => {
      const diff = target.getTime() - Date.now();
      if (diff <= 0) {
        clearInterval(this.timer);
        return;
      }
      this.countdown = {
        days: Math.floor(diff / 864e5),
        hours: Math.floor(diff % 864e5 / 36e5),
        mins: Math.floor(diff % 36e5 / 6e4),
        secs: Math.floor(diff % 6e4 / 1e3)
      };
    }, 1e3);
  }
  goTo(id) {
    this.scrollSvc.scrollTo(id);
  }
  static {
    this.\u0275fac = function DealsComponent_Factory(t) {
      return new (t || _DealsComponent)(\u0275\u0275directiveInject(ScrollService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DealsComponent, selectors: [["app-deals"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 44, vars: 5, consts: [["id", "deals", 1, "deals-section"], [1, "container"], [1, "deals-header"], [1, "deals-header-left"], [1, "section-tag"], [1, "fas", "fa-bolt"], [1, "deals-countdown"], [1, "countdown-label"], [1, "fas", "fa-clock"], [1, "countdown-timer"], [1, "countdown-box"], [1, "count-num"], [1, "count-label"], [1, "count-sep"], [1, "deals-grid"], ["class", "deal-card", 4, "ngFor", "ngForOf"], [1, "deal-card"], [1, "deal-img"], ["loading", "lazy", 3, "src", "alt"], [1, "deal-discount"], [1, "deal-tag"], [1, "deal-body"], [1, "deal-meta"], [1, "fas", "fa-calendar"], [1, "deal-price"], [1, "deal-original"], [1, "deal-sale"], [1, "deal-pp"], [1, "deal-savings"], [1, "btn", "btn-primary", 3, "click"]], template: function DealsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "span", 4);
        \u0275\u0275element(5, "i", 5);
        \u0275\u0275text(6, " Flash Deals");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "h2");
        \u0275\u0275text(8, "Exclusive Limited-Time Offers");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "p");
        \u0275\u0275text(10, "Grab these incredible deals before they're gone \u2014 handpicked discounts on our most popular tours");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 6)(12, "p", 7);
        \u0275\u0275element(13, "i", 8);
        \u0275\u0275text(14, " Offer ends in:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "div", 9)(16, "div", 10)(17, "span", 11);
        \u0275\u0275text(18);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "span", 12);
        \u0275\u0275text(20, "Days");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "span", 13);
        \u0275\u0275text(22, ":");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "div", 10)(24, "span", 11);
        \u0275\u0275text(25);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "span", 12);
        \u0275\u0275text(27, "Hours");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "span", 13);
        \u0275\u0275text(29, ":");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "div", 10)(31, "span", 11);
        \u0275\u0275text(32);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "span", 12);
        \u0275\u0275text(34, "Mins");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(35, "span", 13);
        \u0275\u0275text(36, ":");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "div", 10)(38, "span", 11);
        \u0275\u0275text(39);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "span", 12);
        \u0275\u0275text(41, "Secs");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(42, "div", 14);
        \u0275\u0275template(43, DealsComponent_div_43_Template, 32, 16, "div", 15);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(18);
        \u0275\u0275textInterpolate(ctx.countdown.days);
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(ctx.countdown.hours);
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(ctx.countdown.mins);
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(ctx.countdown.secs);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngForOf", ctx.deals);
      }
    }, dependencies: [CommonModule, NgForOf, DecimalPipe], styles: ['\n\n.deals-section[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      #fff 0%,\n      var(--bg-light) 100%);\n  position: relative;\n  overflow: hidden;\n}\n.deals-section[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: -100px;\n  right: -100px;\n  width: 400px;\n  height: 400px;\n  border-radius: 50%;\n  background: rgba(245, 166, 35, 0.06);\n  pointer-events: none;\n}\n.deals-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 2rem;\n  margin-bottom: 3rem;\n  flex-wrap: wrap;\n}\n.deals-header[_ngcontent-%COMP%]   .section-tag[_ngcontent-%COMP%] {\n  margin-bottom: 0.75rem;\n}\n.deals-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: var(--text-dark);\n  margin-bottom: 0.5rem;\n}\n.deals-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-mid);\n  max-width: 480px;\n}\n.deals-countdown[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  text-align: center;\n}\n.countdown-label[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: var(--text-mid);\n  margin-bottom: 0.75rem;\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  justify-content: center;\n}\n.countdown-label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--accent);\n}\n.countdown-timer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.countdown-box[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: #fff;\n  border-radius: var(--radius-sm);\n  padding: 0.75rem 1rem;\n  min-width: 64px;\n  text-align: center;\n}\n.countdown-box[_ngcontent-%COMP%]   .count-num[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 1.8rem;\n  font-weight: 800;\n  font-family: var(--font-heading);\n  line-height: 1;\n}\n.countdown-box[_ngcontent-%COMP%]   .count-label[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  opacity: 0.8;\n  margin-top: 0.2rem;\n  display: block;\n}\n.count-sep[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  font-weight: 800;\n  color: var(--primary);\n  line-height: 1;\n  margin-bottom: 1rem;\n}\n.deals-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1.5rem;\n}\n@media (max-width: 1024px) {\n  .deals-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 600px) {\n  .deals-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.deal-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: var(--radius-md);\n  overflow: hidden;\n  box-shadow: var(--shadow-sm);\n  border: 1px solid #f0f0f0;\n  transition: var(--transition);\n}\n.deal-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-8px);\n  box-shadow: var(--shadow-lg);\n  border-color: transparent;\n}\n.deal-card[_ngcontent-%COMP%]:hover   .deal-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scale(1.06);\n}\n.deal-img[_ngcontent-%COMP%] {\n  position: relative;\n  height: 200px;\n  overflow: hidden;\n}\n.deal-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.5s ease;\n}\n.deal-discount[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0.75rem;\n  left: 0.75rem;\n  background: #e74c3c;\n  color: #fff;\n  font-size: 0.85rem;\n  font-weight: 800;\n  padding: 0.3rem 0.8rem;\n  border-radius: 50px;\n  letter-spacing: 0.5px;\n}\n.deal-tag[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0.75rem;\n  right: 0.75rem;\n  background: var(--accent);\n  color: #fff;\n  font-size: 0.72rem;\n  font-weight: 600;\n  padding: 0.25rem 0.7rem;\n  border-radius: 50px;\n}\n.deal-body[_ngcontent-%COMP%] {\n  padding: 1.25rem;\n}\n.deal-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  margin-bottom: 0.6rem;\n}\n.deal-meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: var(--text-light);\n  display: flex;\n  align-items: center;\n  gap: 0.3rem;\n}\n.deal-meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--primary);\n}\n.deal-body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  color: var(--text-dark);\n  margin-bottom: 0.75rem;\n}\n.deal-price[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 0.5rem;\n  margin-bottom: 0.4rem;\n}\n.deal-original[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: var(--text-light);\n  text-decoration: line-through;\n}\n.deal-sale[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 800;\n  color: var(--primary);\n  font-family: var(--font-heading);\n}\n.deal-pp[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-light);\n}\n.deal-savings[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #27ae60;\n  font-weight: 600;\n  margin-bottom: 1rem;\n  background: rgba(39, 174, 96, 0.1);\n  padding: 0.3rem 0.7rem;\n  border-radius: 50px;\n  display: inline-block;\n}\n.deal-body[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  width: 100%;\n  justify-content: center;\n}\n@media (max-width: 768px) {\n  .deals-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}\n/*# sourceMappingURL=deals.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DealsComponent, { className: "DealsComponent", filePath: "src\\app\\components\\deals\\deals.component.ts", lineNumber: 16 });
})();

// src/app/components/categories/categories.component.ts
function CategoriesComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275listener("click", function CategoriesComponent_div_11_Template_div_click_0_listener() {
      const exp_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.navigate(exp_r2.label));
    });
    \u0275\u0275elementStart(1, "div", 8);
    \u0275\u0275element(2, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h4");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const exp_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275classMap(exp_r2.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(exp_r2.label);
  }
}
gsapWithCSS.registerPlugin(ScrollTrigger2);
var CategoriesComponent = class _CategoriesComponent {
  constructor(data, scrollSvc, router) {
    this.data = data;
    this.scrollSvc = scrollSvc;
    this.router = router;
  }
  ngAfterViewInit() {
    gsapWithCSS.fromTo(".cat-card", { scale: 0.7, opacity: 0 }, {
      scale: 1,
      opacity: 1,
      stagger: 0.08,
      duration: 0.6,
      ease: "back.out(1.7)",
      scrollTrigger: { trigger: "#categories", start: "top 75%", once: true }
    });
  }
  navigate(label) {
    const key = label.toLowerCase().replace(/\s+/g, "-");
    this.router.navigate(["/experience", key]);
  }
  static {
    this.\u0275fac = function CategoriesComponent_Factory(t) {
      return new (t || _CategoriesComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(ScrollService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CategoriesComponent, selectors: [["app-categories"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 12, vars: 1, consts: [["id", "categories", 1, "categories"], [1, "container"], [1, "section-header"], [1, "section-tag"], [1, "fas", "fa-th"], [1, "cat-grid"], ["class", "cat-card", 3, "click", 4, "ngFor", "ngForOf"], [1, "cat-card", 3, "click"], [1, "cat-icon"]], template: function CategoriesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275element(4, "i", 4);
        \u0275\u0275text(5, " Experiences");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "h2");
        \u0275\u0275text(7, "Travel Your Way");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p");
        \u0275\u0275text(9, "Choose from a wide range of travel experiences tailored to your style");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "div", 5);
        \u0275\u0275template(11, CategoriesComponent_div_11_Template, 5, 3, "div", 6);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(11);
        \u0275\u0275property("ngForOf", ctx.data.experiences);
      }
    }, dependencies: [CommonModule, NgForOf], styles: ["\n\n.categories[_ngcontent-%COMP%] {\n  background: var(--bg-light);\n}\n.cat-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(8, 1fr);\n  gap: 1.25rem;\n}\n@media (max-width: 1100px) {\n  .cat-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(4, 1fr);\n  }\n}\n@media (max-width: 600px) {\n  .cat-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.cat-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 1.5rem 1rem;\n  background: #fff;\n  border-radius: var(--radius-md);\n  box-shadow: var(--shadow-sm);\n  cursor: pointer;\n  transition: var(--transition);\n  text-align: center;\n}\n.cat-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-8px);\n  box-shadow: var(--shadow-md);\n}\n.cat-card[_ngcontent-%COMP%]:hover   .cat-icon[_ngcontent-%COMP%] {\n  transform: scale(1.15) rotate(-5deg);\n}\n.cat-icon[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.5rem;\n  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);\n  background: rgba(30, 58, 95, 0.1);\n  color: var(--primary);\n}\n.cat-card[_ngcontent-%COMP%]:nth-child(1)   .cat-icon[_ngcontent-%COMP%] {\n  background: rgba(245, 166, 35, 0.12);\n  color: #f5a623;\n}\n.cat-card[_ngcontent-%COMP%]:nth-child(2)   .cat-icon[_ngcontent-%COMP%] {\n  background: rgba(52, 152, 219, 0.12);\n  color: #3498db;\n}\n.cat-card[_ngcontent-%COMP%]:nth-child(3)   .cat-icon[_ngcontent-%COMP%] {\n  background: rgba(155, 89, 182, 0.12);\n  color: #9b59b6;\n}\n.cat-card[_ngcontent-%COMP%]:nth-child(4)   .cat-icon[_ngcontent-%COMP%] {\n  background: rgba(231, 76, 60, 0.12);\n  color: #e74c3c;\n}\n.cat-card[_ngcontent-%COMP%]:nth-child(5)   .cat-icon[_ngcontent-%COMP%] {\n  background: rgba(26, 188, 156, 0.12);\n  color: #1abc9c;\n}\n.cat-card[_ngcontent-%COMP%]:nth-child(6)   .cat-icon[_ngcontent-%COMP%] {\n  background: rgba(230, 126, 34, 0.12);\n  color: #e67e22;\n}\n.cat-card[_ngcontent-%COMP%]:nth-child(7)   .cat-icon[_ngcontent-%COMP%] {\n  background: rgba(231, 76, 60, 0.12);\n  color: #e74c3c;\n}\n.cat-card[_ngcontent-%COMP%]:nth-child(8)   .cat-icon[_ngcontent-%COMP%] {\n  background: rgba(30, 58, 95, 0.12);\n  color: var(--primary);\n}\n.cat-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: var(--text-dark);\n  font-family: var(--font-body);\n}\n.cat-count[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-light);\n}\n/*# sourceMappingURL=categories.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CategoriesComponent, { className: "CategoriesComponent", filePath: "src\\app\\components\\categories\\categories.component.ts", lineNumber: 18 });
})();

// src/app/components/scroll-story/scroll-story.component.ts
function ScrollStoryComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "span", 5);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 6)(10, "div", 7)(11, "span", 8);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 9);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 7)(16, "span", 8);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 9);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "button", 10);
    \u0275\u0275listener("click", function ScrollStoryComponent_div_1_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goTo("packages"));
    });
    \u0275\u0275element(21, "i", 11);
    \u0275\u0275text(22, " Explore Tours ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 12);
    \u0275\u0275element(24, "img", 13);
    \u0275\u0275elementStart(25, "div", 14);
    \u0275\u0275element(26, "i", 15);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const s_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    \u0275\u0275classMap("story-panel-" + i_r4);
    \u0275\u0275classProp("reverse", i_r4 % 2 !== 0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(s_r3.tag);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r3.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r3.text);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(s_r3.stat1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r3.stat1Label);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(s_r3.stat2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r3.stat2Label);
    \u0275\u0275advance(5);
    \u0275\u0275property("src", s_r3.image, \u0275\u0275sanitizeUrl)("alt", s_r3.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", s_r3.title.split("\u2014")[0].trim(), " ");
  }
}
gsapWithCSS.registerPlugin(ScrollTrigger2);
var ScrollStoryComponent = class _ScrollStoryComponent {
  constructor(scrollSvc) {
    this.scrollSvc = scrollSvc;
    this.stories = [
      {
        image: "https://cdn.yourholiday.me/static/dynimg/destination/16/600x300/3598628-3598627_adobestock_47088158.jpg",
        tag: "International",
        title: "Dubai \u2014 City of Gold",
        text: "Experience the dazzling skyline of Dubai \u2014 from the iconic Burj Khalifa to desert safaris and world-class shopping. Starting at just Rs. 39,999 per person.",
        stat1: "Rs. 39,999",
        stat1Label: "Starting Price",
        stat2: "4N / 5D",
        stat2Label: "Duration"
      },
      {
        image: "https://cdn.yourholiday.me/static/dynimg/destination/21/600x300/2190173-2190172_europe-1-main-image.jpg",
        tag: "Fixed Departure",
        title: "Europe \u2014 A Grand Tour",
        text: "Explore the timeless beauty of Europe \u2014 Paris, London, Switzerland, Rome and more. Fully guided group tours with all meals included.",
        stat1: "Rs. 1,19,999",
        stat1Label: "Starting Price",
        stat2: "10N / 11D",
        stat2Label: "Duration"
      },
      {
        image: "https://cdn.yourholiday.me/static/dynimg/destination/48/600x300/3996290-3996289_bali-4.jpg",
        tag: "International",
        title: "Bali \u2014 Island of the Gods",
        text: "Discover the magical island of Bali \u2014 lush rice terraces, ancient temples, pristine beaches and vibrant culture. A paradise for every traveler.",
        stat1: "Rs. 29,999",
        stat1Label: "Starting Price",
        stat2: "5N / 6D",
        stat2Label: "Duration"
      }
    ];
  }
  ngAfterViewInit() {
    this.stories.forEach((_, i) => {
      const panel = `.story-panel-${i}`;
      gsapWithCSS.fromTo(`${panel} .story-text-content`, { x: i % 2 === 0 ? -70 : 70, opacity: 0 }, {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: panel, start: "top 65%", once: true }
      });
      gsapWithCSS.fromTo(`${panel} .story-img`, { x: i % 2 === 0 ? 70 : -70, opacity: 0 }, {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: panel, start: "top 65%", once: true }
      });
      gsapWithCSS.fromTo(`${panel} .story-stat`, { y: 30, opacity: 0 }, {
        y: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: { trigger: panel, start: "top 55%", once: true }
      });
    });
  }
  goTo(id) {
    this.scrollSvc.scrollTo(id);
  }
  static {
    this.\u0275fac = function ScrollStoryComponent_Factory(t) {
      return new (t || _ScrollStoryComponent)(\u0275\u0275directiveInject(ScrollService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ScrollStoryComponent, selectors: [["app-scroll-story"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 1, consts: [["id", "story", 1, "scroll-story"], ["class", "story-panel", 3, "class", "reverse", 4, "ngFor", "ngForOf"], [1, "story-panel"], [1, "container", "story-container"], [1, "story-text-content"], [1, "story-tag"], [1, "story-stats"], [1, "story-stat"], [1, "story-stat-num"], [1, "story-stat-label"], [1, "btn", "btn-primary", 3, "click"], [1, "fas", "fa-arrow-right"], [1, "story-img"], ["loading", "lazy", 3, "src", "alt"], [1, "story-img-badge"], [1, "fas", "fa-map-marker-alt"]], template: function ScrollStoryComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0);
        \u0275\u0275template(1, ScrollStoryComponent_div_1_Template, 28, 14, "div", 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.stories);
      }
    }, dependencies: [CommonModule, NgForOf], styles: ["\n\n.scroll-story[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.story-panel[_ngcontent-%COMP%] {\n  padding: 5rem 0;\n  background: var(--bg-white);\n}\n.story-panel[_ngcontent-%COMP%]:nth-child(even) {\n  background: var(--bg-light);\n}\n.story-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 4rem;\n  align-items: center;\n}\n.story-panel.reverse[_ngcontent-%COMP%]   .story-container[_ngcontent-%COMP%] {\n  direction: rtl;\n}\n.story-panel.reverse[_ngcontent-%COMP%]   .story-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  direction: ltr;\n}\n.story-text-content[_ngcontent-%COMP%]   .story-tag[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: rgba(30, 58, 95, 0.1);\n  color: var(--primary);\n  font-size: 0.78rem;\n  font-weight: 700;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  padding: 0.35rem 0.9rem;\n  border-radius: 50px;\n  margin-bottom: 1.2rem;\n}\n.story-text-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: var(--text-dark);\n  margin-bottom: 1.2rem;\n}\n.story-text-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-mid);\n  font-size: 1.05rem;\n  line-height: 1.8;\n  margin-bottom: 2rem;\n}\n.story-stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 2rem;\n  margin-bottom: 2rem;\n}\n.story-stat[_ngcontent-%COMP%]   .story-stat-num[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 1.8rem;\n  font-weight: 700;\n  font-family: var(--font-heading);\n  color: var(--primary);\n}\n.story-stat[_ngcontent-%COMP%]   .story-stat-label[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: var(--text-light);\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.story-img[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: var(--radius-lg);\n  overflow: hidden;\n  box-shadow: var(--shadow-lg);\n}\n.story-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 420px;\n  object-fit: cover;\n  display: block;\n  transition: transform 0.6s ease;\n}\n.story-img[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  transform: scale(1.04);\n}\n.story-img-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 1.5rem;\n  left: 1.5rem;\n  background: rgba(255, 255, 255, 0.95);\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n  padding: 0.6rem 1.2rem;\n  border-radius: 50px;\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: var(--primary);\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n}\n.story-img-badge[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--accent);\n}\n@media (max-width: 900px) {\n  .story-container[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 2rem;\n  }\n  .story-panel.reverse[_ngcontent-%COMP%]   .story-container[_ngcontent-%COMP%] {\n    direction: ltr;\n  }\n  .story-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 280px;\n  }\n}\n/*# sourceMappingURL=scroll-story.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ScrollStoryComponent, { className: "ScrollStoryComponent", filePath: "src\\app\\components\\scroll-story\\scroll-story.component.ts", lineNumber: 16 });
})();

// src/app/components/map-section/map-section.component.ts
function MapSectionComponent_div_13_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275listener("click", function MapSectionComponent_div_13_div_7_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275element(1, "img", 20);
    \u0275\u0275elementStart(2, "div", 21)(3, "h4");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 22)(8, "span", 23);
    \u0275\u0275element(9, "i", 24);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 25);
    \u0275\u0275element(12, "i", 26);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "button", 27);
    \u0275\u0275listener("click", function MapSectionComponent_div_13_div_7_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.goTo("packages"));
    });
    \u0275\u0275text(15, " View Tours ");
    \u0275\u0275element(16, "i", 28);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const r_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", r_r2.image, \u0275\u0275sanitizeUrl)("alt", r_r2.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r2.desc);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", r_r2.price, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", r_r2.tours, " Tours");
  }
}
function MapSectionComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275listener("click", function MapSectionComponent_div_13_Template_div_click_0_listener() {
      const r_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectRegion(r_r2));
    });
    \u0275\u0275elementStart(1, "div", 14)(2, "span", 15);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "div", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 17);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, MapSectionComponent_div_13_div_7_Template, 17, 6, "div", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("left", r_r2.x, "%")("top", r_r2.y, "%");
    \u0275\u0275classProp("active", (ctx_r2.activeRegion == null ? null : ctx_r2.activeRegion.id) === r_r2.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r2.flag);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r2.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r2.activeRegion == null ? null : ctx_r2.activeRegion.id) === r_r2.id);
  }
}
function MapSectionComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275listener("click", function MapSectionComponent_div_19_Template_div_click_0_listener() {
      const r_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectRegion(r_r6));
    });
    \u0275\u0275element(1, "img", 30);
    \u0275\u0275elementStart(2, "div", 31)(3, "div", 32)(4, "span", 33);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(10, "i", 34);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", (ctx_r2.activeRegion == null ? null : ctx_r2.activeRegion.id) === r_r6.id);
    \u0275\u0275advance();
    \u0275\u0275property("src", r_r6.image, \u0275\u0275sanitizeUrl)("alt", r_r6.name);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(r_r6.flag);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r6.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", r_r6.tours, " tours \xB7 ", r_r6.price, "");
  }
}
gsapWithCSS.registerPlugin(ScrollTrigger2);
var MapSectionComponent = class _MapSectionComponent {
  constructor(scrollSvc) {
    this.scrollSvc = scrollSvc;
    this.activeRegion = null;
    this.regions = [
      {
        id: 1,
        name: "Dubai",
        flag: "\u{1F1E6}\u{1F1EA}",
        x: 56,
        y: 44,
        tours: 8,
        desc: "City of Gold \u2014 Burj Khalifa, Desert Safari, Shopping Malls.",
        price: "From \u20B939,999",
        image: "https://cdn.yourholiday.me/static/dynimg/destination/16/600x300/3598628-3598627_adobestock_47088158.jpg"
      },
      {
        id: 2,
        name: "Europe",
        flag: "\u{1F1EA}\u{1F1FA}",
        x: 44,
        y: 26,
        tours: 4,
        desc: "Paris, London, Switzerland, Rome \u2014 Grand Tour packages.",
        price: "From \u20B91,19,999",
        image: "https://cdn.yourholiday.me/static/dynimg/destination/21/600x300/2190173-2190172_europe-1-main-image.jpg"
      },
      {
        id: 3,
        name: "Thailand",
        flag: "\u{1F1F9}\u{1F1ED}",
        x: 74,
        y: 46,
        tours: 6,
        desc: "Bangkok, Phuket, Chiang Mai \u2014 tropical paradise.",
        price: "From \u20B919,999",
        image: "https://cdn.yourholiday.me/static/dynimg/destination/32/600x300/3076721-3076720_thailand2.jpg"
      },
      {
        id: 4,
        name: "Singapore",
        flag: "\u{1F1F8}\u{1F1EC}",
        x: 77,
        y: 55,
        tours: 5,
        desc: "Gardens by the Bay, Sentosa, Universal Studios.",
        price: "From \u20B944,999",
        image: "https://cdn.yourholiday.me/static/dynimg/destination/58/600x300/3996296-3996295_singapore-stock-image.jpg"
      },
      {
        id: 5,
        name: "Bali",
        flag: "\u{1F1EE}\u{1F1E9}",
        x: 80,
        y: 60,
        tours: 4,
        desc: "Temples, rice terraces, beaches \u2014 Island of the Gods.",
        price: "From \u20B929,999",
        image: "https://cdn.yourholiday.me/static/dynimg/destination/48/600x300/3996290-3996289_bali-4.jpg"
      },
      {
        id: 6,
        name: "Maldives",
        flag: "\u{1F1F2}\u{1F1FB}",
        x: 63,
        y: 57,
        tours: 3,
        desc: "Overwater bungalows, crystal lagoons, coral reefs.",
        price: "From \u20B949,999",
        image: "https://cdn.yourholiday.me/static/dynimg/destination/98/600x300/2750963-2750962_maldives.jpg"
      },
      {
        id: 7,
        name: "Australia",
        flag: "\u{1F1E6}\u{1F1FA}",
        x: 84,
        y: 70,
        tours: 3,
        desc: "Sydney Opera House, Great Barrier Reef, Outback.",
        price: "From \u20B91,29,999",
        image: "https://cdn.yourholiday.me/static/dynimg/destination/58/600x300/2210344-2210343_australia.jpg"
      },
      {
        id: 8,
        name: "Andamans",
        flag: "\u{1F1EE}\u{1F1F3}",
        x: 70,
        y: 50,
        tours: 8,
        desc: "Radhanagar Beach, Havelock Island, coral reefs.",
        price: "From \u20B916,836",
        image: "https://cdn.yourholiday.me/static/dynimg/destination/33/600x300/2210456-2210455_andaman.jpg"
      }
    ];
  }
  ngAfterViewInit() {
    gsapWithCSS.fromTo(".map-section .section-header", { y: 40, opacity: 0 }, {
      y: 0,
      opacity: 1,
      duration: 0.7,
      ease: "power3.out",
      scrollTrigger: { trigger: "#map", start: "top 80%", once: true }
    });
    gsapWithCSS.fromTo(".region-marker", { scale: 0, opacity: 0 }, {
      scale: 1,
      opacity: 1,
      stagger: 0.1,
      duration: 0.5,
      ease: "back.out(2)",
      scrollTrigger: { trigger: "#map", start: "top 70%", once: true }
    });
    gsapWithCSS.fromTo(".map-dest-item", { x: 40, opacity: 0 }, {
      x: 0,
      opacity: 1,
      stagger: 0.08,
      duration: 0.5,
      ease: "power3.out",
      scrollTrigger: { trigger: "#map", start: "top 70%", once: true }
    });
  }
  selectRegion(r) {
    this.activeRegion = this.activeRegion?.id === r.id ? null : r;
    if (this.activeRegion) {
      setTimeout(() => {
        gsapWithCSS.from(".marker-popup", { scale: 0.8, opacity: 0, duration: 0.3, ease: "back.out(1.7)" });
      }, 10);
    }
  }
  goTo(id) {
    this.scrollSvc.scrollTo(id);
  }
  static {
    this.\u0275fac = function MapSectionComponent_Factory(t) {
      return new (t || _MapSectionComponent)(\u0275\u0275directiveInject(ScrollService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MapSectionComponent, selectors: [["app-map-section"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 20, vars: 2, consts: [["id", "map", 1, "map-section"], [1, "container"], [1, "section-header"], [1, "section-tag"], [1, "fas", "fa-globe"], [1, "map-wrapper"], [1, "map-bg"], ["src", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/World_map_-_low_resolution.svg/1200px-World_map_-_low_resolution.svg.png", "alt", "World Map", "loading", "lazy", 1, "world-map-img"], ["class", "region-marker", 3, "left", "top", "active", "click", 4, "ngFor", "ngForOf"], [1, "map-sidebar"], [1, "fas", "fa-map-marker-alt"], [1, "map-dest-list"], ["class", "map-dest-item", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "region-marker", 3, "click"], [1, "marker-pin"], [1, "marker-flag"], [1, "marker-tip"], [1, "marker-label"], ["class", "marker-popup", 3, "click", 4, "ngIf"], [1, "marker-popup", 3, "click"], [1, "popup-img", 3, "src", "alt"], [1, "popup-body"], [1, "popup-meta"], [1, "popup-price"], [1, "fas", "fa-tag"], [1, "popup-tours"], [1, "fas", "fa-suitcase"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "fas", "fa-arrow-right"], [1, "map-dest-item", 3, "click"], [1, "dest-thumb", 3, "src", "alt"], [1, "dest-info"], [1, "dest-flag-name"], [1, "dest-flag-badge"], [1, "fas", "fa-chevron-right"]], template: function MapSectionComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275element(4, "i", 4);
        \u0275\u0275text(5, " Explore the World");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "h2");
        \u0275\u0275text(7, "Our Global Destinations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p");
        \u0275\u0275text(9, "Click on any destination to discover tours, packages and travel tips from J K Tours And Travels, Pune");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "div", 5)(11, "div", 6);
        \u0275\u0275element(12, "img", 7);
        \u0275\u0275template(13, MapSectionComponent_div_13_Template, 8, 9, "div", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 9)(15, "h3");
        \u0275\u0275element(16, "i", 10);
        \u0275\u0275text(17, " Top Destinations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "div", 11);
        \u0275\u0275template(19, MapSectionComponent_div_19_Template, 11, 8, "div", 12);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(13);
        \u0275\u0275property("ngForOf", ctx.regions);
        \u0275\u0275advance(6);
        \u0275\u0275property("ngForOf", ctx.regions);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf], styles: ['\n\n.map-section[_ngcontent-%COMP%] {\n  background: var(--bg-light);\n}\n.map-wrapper[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 300px;\n  gap: 2rem;\n  align-items: start;\n}\n@media (max-width: 1024px) {\n  .map-wrapper[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.map-bg[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: var(--radius-lg);\n  overflow: visible;\n  background:\n    linear-gradient(\n      135deg,\n      #e8f4f0 0%,\n      #d4eee3 100%);\n  min-height: 460px;\n  box-shadow: var(--shadow-md);\n}\n.world-map-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 460px;\n  object-fit: contain;\n  border-radius: var(--radius-lg);\n  display: block;\n  opacity: 0.55;\n  filter: sepia(20%) hue-rotate(100deg);\n}\n.region-marker[_ngcontent-%COMP%] {\n  position: absolute;\n  transform: translate(-50%, -100%);\n  cursor: pointer;\n  z-index: 10;\n}\n.region-marker[_ngcontent-%COMP%]:hover   .marker-pin[_ngcontent-%COMP%], .region-marker.active[_ngcontent-%COMP%]   .marker-pin[_ngcontent-%COMP%] {\n  transform: scale(1.2) translateY(-4px);\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);\n}\n.region-marker[_ngcontent-%COMP%]:hover   .marker-label[_ngcontent-%COMP%], .region-marker.active[_ngcontent-%COMP%]   .marker-label[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.marker-pin[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 2px solid var(--primary);\n  border-radius: 50px;\n  padding: 0.25rem 0.55rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.22);\n  transition: var(--transition);\n  position: relative;\n  white-space: nowrap;\n  animation: _ngcontent-%COMP%_markerBounce 2.5s ease-in-out infinite;\n}\n.marker-pin[_ngcontent-%COMP%]   .marker-flag[_ngcontent-%COMP%] {\n  font-size: 1.35rem;\n  line-height: 1;\n  display: block;\n}\n.marker-pin[_ngcontent-%COMP%]   .marker-tip[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -8px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 0;\n  height: 0;\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n  border-top: 8px solid var(--primary);\n}\n.region-marker.active[_ngcontent-%COMP%]   .marker-pin[_ngcontent-%COMP%] {\n  background: var(--primary);\n  border-color: var(--primary);\n  animation: none;\n}\n.region-marker.active[_ngcontent-%COMP%]   .marker-pin[_ngcontent-%COMP%]   .marker-tip[_ngcontent-%COMP%] {\n  border-top-color: var(--primary);\n}\n@keyframes _ngcontent-%COMP%_markerBounce {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-6px);\n  }\n}\n.marker-label[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: calc(100% + 10px);\n  left: 50%;\n  transform: translateX(-50%);\n  background: var(--primary);\n  color: #fff;\n  font-size: 0.72rem;\n  font-weight: 700;\n  padding: 0.25rem 0.65rem;\n  border-radius: 4px;\n  white-space: nowrap;\n  opacity: 0;\n  transition: opacity 0.2s;\n  pointer-events: none;\n  z-index: 50;\n}\n.marker-label[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  transform: translateX(-50%);\n  border: 4px solid transparent;\n  border-top-color: var(--primary);\n}\n.marker-popup[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: calc(100% + 16px);\n  left: 50%;\n  transform: translateX(-50%);\n  background: #fff;\n  border-radius: var(--radius-md);\n  box-shadow: var(--shadow-lg);\n  min-width: 220px;\n  z-index: 30;\n  overflow: hidden;\n  border: 1px solid rgba(0, 0, 0, 0.06);\n}\n.marker-popup[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  bottom: -8px;\n  left: 50%;\n  transform: translateX(-50%);\n  border: 8px solid transparent;\n  border-bottom: none;\n  border-top-color: #fff;\n}\n.popup-img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 110px;\n  object-fit: cover;\n}\n.popup-body[_ngcontent-%COMP%] {\n  padding: 0.85rem;\n}\n.popup-body[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  color: var(--primary);\n  margin-bottom: 0.3rem;\n}\n.popup-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-mid);\n  margin-bottom: 0.6rem;\n  line-height: 1.5;\n}\n.popup-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  margin-bottom: 0.75rem;\n  flex-wrap: wrap;\n}\n.popup-price[_ngcontent-%COMP%], .popup-tours[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.3rem;\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: var(--text-dark);\n}\n.popup-price[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .popup-tours[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--primary);\n  font-size: 0.7rem;\n}\n.map-sidebar[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: var(--radius-md);\n  padding: 1.5rem;\n  box-shadow: var(--shadow-sm);\n  max-height: 500px;\n  overflow-y: auto;\n}\n.map-sidebar[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: var(--text-dark);\n  margin-bottom: 1rem;\n  padding-bottom: 0.75rem;\n  border-bottom: 2px solid var(--bg-light);\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.map-sidebar[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--primary);\n}\n.map-dest-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.4rem;\n}\n.map-dest-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.6rem 0.75rem;\n  border-radius: var(--radius-sm);\n  cursor: pointer;\n  transition: var(--transition);\n}\n.map-dest-item[_ngcontent-%COMP%]:hover, .map-dest-item.active[_ngcontent-%COMP%] {\n  background: rgba(30, 58, 95, 0.08);\n}\n.map-dest-item[_ngcontent-%COMP%]:hover   .dest-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .map-dest-item.active[_ngcontent-%COMP%]   .dest-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--primary);\n}\n.map-dest-item[_ngcontent-%COMP%]   .dest-thumb[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 36px;\n  object-fit: cover;\n  border-radius: 6px;\n  flex-shrink: 0;\n}\n.map-dest-item[_ngcontent-%COMP%]   .dest-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.map-dest-item[_ngcontent-%COMP%]   .dest-info[_ngcontent-%COMP%]   .dest-flag-name[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n}\n.map-dest-item[_ngcontent-%COMP%]   .dest-info[_ngcontent-%COMP%]   .dest-flag-name[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--text-dark);\n  transition: color 0.3s;\n}\n.map-dest-item[_ngcontent-%COMP%]   .dest-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: var(--text-light);\n}\n.map-dest-item[_ngcontent-%COMP%]   .dest-flag-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 26px;\n  height: 20px;\n  background: #fff;\n  border: 1px solid #e0e0e0;\n  border-radius: 3px;\n  font-size: 0.9rem;\n  line-height: 1;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n  flex-shrink: 0;\n}\n.map-dest-item[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: var(--text-light);\n}\n/*# sourceMappingURL=map-section.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MapSectionComponent, { className: "MapSectionComponent", filePath: "src\\app\\components\\map-section\\map-section.component.ts", lineNumber: 16 });
})();

// src/app/components/timeline/timeline.component.ts
function TimelineComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "span", 18);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 19);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275attribute("data-target", s_r1.num);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r1.num);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r1.label);
  }
}
function TimelineComponent_div_14_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 26);
  }
}
function TimelineComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 21);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 22)(4, "div", 23);
    \u0275\u0275element(5, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, TimelineComponent_div_14_div_6_Template, 1, 0, "div", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 25)(8, "h3");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const step_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(i_r3 + 1);
    \u0275\u0275advance(3);
    \u0275\u0275classMap(step_r2.icon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", i_r3 < ctx_r3.timelineSteps.length - 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(step_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(step_r2.desc);
  }
}
function TimelineComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 28);
    \u0275\u0275element(2, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const w_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275classMap(w_r5.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(w_r5.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(w_r5.desc);
  }
}
gsapWithCSS.registerPlugin(ScrollTrigger2);
var TimelineComponent = class _TimelineComponent {
  constructor(scrollSvc) {
    this.scrollSvc = scrollSvc;
    this.stats = [
      { num: "5000+", label: "Happy Travellers" },
      { num: "25+", label: "Destinations" },
      { num: "15+", label: "Years Experience" },
      { num: "98%", label: "Satisfaction Rate" }
    ];
    this.timelineSteps = [
      { title: "Choose Your Destination", desc: "Browse 25+ domestic & international destinations. Pick your dream holiday spot.", icon: "fas fa-map-marker-alt" },
      { title: "Select a Package", desc: "Choose from curated packages or request a fully customized itinerary.", icon: "fas fa-suitcase-rolling" },
      { title: "Contact Our Team", desc: "Our experienced travel agents guide you through every detail of your trip.", icon: "fas fa-headset" },
      { title: "Confirm & Book", desc: "Confirm your itinerary, make payment and receive all travel documents.", icon: "fas fa-check-circle" },
      { title: "Pack Your Bags", desc: "We handle hotels, transfers & sightseeing. You just need to show up!", icon: "fas fa-plane-departure" },
      { title: "Enjoy Your Holiday", desc: "Experience your dream holiday with 24/7 support from JK Tours, Pune.", icon: "fas fa-star" }
    ];
    this.whyUs = [
      { icon: "fas fa-shield-alt", title: "100% Safe & Secure", desc: "Verified hotels, licensed guides & insured travel." },
      { icon: "fas fa-tag", title: "Best Price Guarantee", desc: "We match any lower price you find elsewhere." },
      { icon: "fas fa-headset", title: "24/7 Support", desc: "Round-the-clock assistance throughout your trip." },
      { icon: "fas fa-undo", title: "Free Cancellation", desc: "Flexible booking with hassle-free cancellation." }
    ];
  }
  ngAfterViewInit() {
    gsapWithCSS.fromTo(".timeline-section .section-header", { y: 40, opacity: 0 }, {
      y: 0,
      opacity: 1,
      duration: 0.7,
      ease: "power3.out",
      scrollTrigger: { trigger: "#timeline", start: "top 80%", once: true }
    });
    gsapWithCSS.fromTo(".tl-stat", { y: 30, opacity: 0 }, {
      y: 0,
      opacity: 1,
      stagger: 0.1,
      duration: 0.6,
      ease: "power3.out",
      scrollTrigger: { trigger: ".tl-stats", start: "top 85%", once: true }
    });
    gsapWithCSS.fromTo(".tl-step", { y: 50, opacity: 0 }, {
      y: 0,
      opacity: 1,
      stagger: 0.12,
      duration: 0.65,
      ease: "power3.out",
      scrollTrigger: { trigger: ".tl-steps", start: "top 80%", once: true }
    });
    gsapWithCSS.fromTo(".tl-why-card", { scale: 0.85, opacity: 0 }, {
      scale: 1,
      opacity: 1,
      stagger: 0.1,
      duration: 0.55,
      ease: "back.out(1.5)",
      scrollTrigger: { trigger: ".tl-why", start: "top 85%", once: true }
    });
    gsapWithCSS.fromTo(".timeline-cta", { y: 30, opacity: 0 }, {
      y: 0,
      opacity: 1,
      duration: 0.6,
      ease: "power3.out",
      scrollTrigger: { trigger: ".timeline-cta", start: "top 90%", once: true }
    });
  }
  goTo(id) {
    this.scrollSvc.scrollTo(id);
  }
  static {
    this.\u0275fac = function TimelineComponent_Factory(t) {
      return new (t || _TimelineComponent)(\u0275\u0275directiveInject(ScrollService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TimelineComponent, selectors: [["app-timeline"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 26, vars: 3, consts: [["id", "timeline", 1, "timeline-section"], [1, "tl-map-bg"], [1, "container"], [1, "section-header"], [1, "section-tag"], [1, "fas", "fa-route"], [1, "tl-stats"], ["class", "tl-stat", 4, "ngFor", "ngForOf"], [1, "tl-steps"], ["class", "tl-step", 4, "ngFor", "ngForOf"], [1, "tl-why"], ["class", "tl-why-card", 4, "ngFor", "ngForOf"], [1, "timeline-cta"], [1, "btn", "btn-primary", "btn-lg", 3, "click"], [1, "fas", "fa-calendar-check"], ["href", "tel:+919422421993", 1, "btn", "btn-outline", "btn-lg"], [1, "fas", "fa-phone"], [1, "tl-stat"], [1, "tl-stat-num"], [1, "tl-stat-label"], [1, "tl-step"], [1, "tl-step-num"], [1, "tl-step-icon-wrap"], [1, "tl-step-icon"], ["class", "tl-step-connector", 4, "ngIf"], [1, "tl-step-body"], [1, "tl-step-connector"], [1, "tl-why-card"], [1, "tl-why-icon"]], template: function TimelineComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0);
        \u0275\u0275element(1, "div", 1);
        \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "span", 4);
        \u0275\u0275element(5, "i", 5);
        \u0275\u0275text(6, " How It Works");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "h2");
        \u0275\u0275text(8, "Your Journey Starts Here");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "p");
        \u0275\u0275text(10, "From dream to destination \u2014 we handle every detail so you travel stress-free");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 6);
        \u0275\u0275template(12, TimelineComponent_div_12_Template, 5, 3, "div", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div", 8);
        \u0275\u0275template(14, TimelineComponent_div_14_Template, 12, 6, "div", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "div", 10);
        \u0275\u0275template(16, TimelineComponent_div_16_Template, 8, 4, "div", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "div", 12)(18, "p");
        \u0275\u0275text(19, "Every tour is fully customized to your preferences and budget.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "button", 13);
        \u0275\u0275listener("click", function TimelineComponent_Template_button_click_20_listener() {
          return ctx.goTo("booking");
        });
        \u0275\u0275element(21, "i", 14);
        \u0275\u0275text(22, " Plan My Custom Tour ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "a", 15);
        \u0275\u0275element(24, "i", 16);
        \u0275\u0275text(25, " Call Us Now ");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(12);
        \u0275\u0275property("ngForOf", ctx.stats);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.timelineSteps);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngForOf", ctx.whyUs);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf], styles: ['\n\n.timeline-section[_ngcontent-%COMP%] {\n  background: var(--bg-white);\n  position: relative;\n  overflow: hidden;\n}\n.tl-map-bg[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background-image: url(https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/World_map_-_low_resolution.svg/1200px-World_map_-_low_resolution.svg.png);\n  background-size: 80%;\n  background-position: center;\n  background-repeat: no-repeat;\n  opacity: 0.03;\n  pointer-events: none;\n}\n.tl-stats[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 1.5rem;\n  margin-bottom: 4rem;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary) 0%,\n      var(--primary-light) 100%);\n  border-radius: var(--radius-lg);\n  padding: 2rem;\n  box-shadow: var(--shadow-md);\n}\n@media (max-width: 768px) {\n  .tl-stats[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 400px) {\n  .tl-stats[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n.tl-stat[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #fff;\n  position: relative;\n}\n.tl-stat[_ngcontent-%COMP%]:not(:last-child)::after {\n  content: "";\n  position: absolute;\n  right: 0;\n  top: 20%;\n  bottom: 20%;\n  width: 1px;\n  background: rgba(255, 255, 255, 0.2);\n}\n.tl-stat[_ngcontent-%COMP%]   .tl-stat-num[_ngcontent-%COMP%] {\n  display: block;\n  font-size: clamp(1.8rem, 3vw, 2.6rem);\n  font-weight: 800;\n  font-family: var(--font-heading);\n  line-height: 1;\n  margin-bottom: 0.3rem;\n}\n.tl-stat[_ngcontent-%COMP%]   .tl-stat-label[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  opacity: 0.8;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n}\n.tl-steps[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 2rem;\n  margin-bottom: 4rem;\n  position: relative;\n}\n@media (max-width: 900px) {\n  .tl-steps[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 560px) {\n  .tl-steps[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.tl-step[_ngcontent-%COMP%] {\n  position: relative;\n  background: var(--bg-card);\n  border-radius: var(--radius-md);\n  padding: 2rem 1.5rem 1.5rem;\n  box-shadow: var(--shadow-sm);\n  border: 1px solid var(--border);\n  transition:\n    transform 0.35s cubic-bezier(0.4, 0, 0.2, 1),\n    box-shadow 0.35s,\n    border-color 0.35s;\n  overflow: hidden;\n}\n.tl-step[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 3px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--primary),\n      var(--accent));\n  transform: scaleX(0);\n  transform-origin: left;\n  transition: transform 0.4s ease;\n}\n.tl-step[_ngcontent-%COMP%]:hover {\n  transform: translateY(-8px);\n  box-shadow: var(--shadow-lg);\n  border-color: var(--primary-light);\n}\n.tl-step[_ngcontent-%COMP%]:hover::before {\n  transform: scaleX(1);\n}\n.tl-step[_ngcontent-%COMP%]:hover   .tl-step-icon[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: #fff;\n  transform: scale(1.1) rotate(-5deg);\n}\n.tl-step-num[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  font-size: 3.5rem;\n  font-weight: 900;\n  color: rgba(30, 58, 95, 0.06);\n  font-family: var(--font-heading);\n  line-height: 1;\n  pointer-events: none;\n}\n.tl-step-icon-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.tl-step-icon[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  border-radius: var(--radius-sm);\n  background: var(--primary-glow);\n  color: var(--primary);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.3rem;\n  flex-shrink: 0;\n  transition:\n    background 0.3s,\n    color 0.3s,\n    transform 0.3s;\n}\n.tl-step-connector[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 2px;\n  background:\n    linear-gradient(\n      90deg,\n      var(--primary-glow),\n      transparent);\n  display: none;\n}\n.tl-step-body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  color: var(--text-dark);\n  margin-bottom: 0.5rem;\n  font-family: var(--font-body);\n}\n.tl-step-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--text-mid);\n  line-height: 1.65;\n  margin: 0;\n}\n.tl-why[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 1.25rem;\n  margin-bottom: 3rem;\n  padding: 2rem;\n  background: var(--bg-light);\n  border-radius: var(--radius-lg);\n}\n@media (max-width: 900px) {\n  .tl-why[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 500px) {\n  .tl-why[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.tl-why-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n  padding: 1.25rem;\n  background: #fff;\n  border-radius: var(--radius-md);\n  box-shadow: var(--shadow-xs);\n  transition: var(--transition);\n}\n.tl-why-card[_ngcontent-%COMP%]:hover {\n  box-shadow: var(--shadow-sm);\n  transform: translateY(-3px);\n}\n.tl-why-card[_ngcontent-%COMP%]   .tl-why-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  background: var(--primary-glow);\n  color: var(--primary);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.1rem;\n  flex-shrink: 0;\n}\n.tl-why-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.9rem;\n  color: var(--text-dark);\n  margin-bottom: 0.25rem;\n}\n.tl-why-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: var(--text-mid);\n  line-height: 1.5;\n  margin: 0;\n}\n.timeline-cta[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 2.5rem;\n  background:\n    linear-gradient(\n      135deg,\n      var(--primary-glow) 0%,\n      rgba(255, 122, 0, 0.06) 100%);\n  border-radius: var(--radius-lg);\n  border: 1px solid rgba(30, 58, 95, 0.1);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n}\n.timeline-cta[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-mid);\n  font-size: 1rem;\n  margin: 0;\n}\n.timeline-cta[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  min-width: 200px;\n  justify-content: center;\n}\n@media (min-width: 600px) {\n  .timeline-cta[_ngcontent-%COMP%] {\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=timeline.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TimelineComponent, { className: "TimelineComponent", filePath: "src\\app\\components\\timeline\\timeline.component.ts", lineNumber: 16 });
})();

// src/app/components/gallery/gallery.component.ts
function GalleryComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275listener("click", function GalleryComponent_div_11_Template_div_click_0_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openLightbox(item_r2));
    });
    \u0275\u0275element(1, "img", 9);
    \u0275\u0275elementStart(2, "div", 10);
    \u0275\u0275element(3, "i", 11);
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275classMap("size-" + item_r2.size);
    \u0275\u0275advance();
    \u0275\u0275property("src", item_r2.image, \u0275\u0275sanitizeUrl)("alt", item_r2.title);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(item_r2.title);
  }
}
function GalleryComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275listener("click", function GalleryComponent_div_12_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeLightbox());
    });
    \u0275\u0275elementStart(1, "div", 13);
    \u0275\u0275listener("click", function GalleryComponent_div_12_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "button", 14);
    \u0275\u0275listener("click", function GalleryComponent_div_12_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeLightbox());
    });
    \u0275\u0275element(3, "i", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "img", 16);
    \u0275\u0275elementStart(5, "div", 17);
    \u0275\u0275element(6, "i", 18);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("src", ctx_r2.lightboxItem.image, \u0275\u0275sanitizeUrl)("alt", ctx_r2.lightboxItem.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.lightboxItem.title, " ");
  }
}
gsapWithCSS.registerPlugin(ScrollTrigger2);
var GalleryComponent = class _GalleryComponent {
  constructor() {
    this.lightboxItem = null;
    this.galleryImages = [
      { image: "https://cdn.yourholiday.me/static/dynimg/destination/16/600x300/3598628-3598627_adobestock_47088158.jpg", title: "Dubai", size: "large" },
      { image: "https://cdn.yourholiday.me/static/dynimg/destination/48/600x300/3996290-3996289_bali-4.jpg", title: "Bali", size: "small" },
      { image: "https://cdn.yourholiday.me/static/dynimg/destination/98/600x300/2750963-2750962_maldives.jpg", title: "Maldives", size: "small" },
      { image: "https://cdn.yourholiday.me/static/dynimg/destination/21/600x300/2190173-2190172_europe-1-main-image.jpg", title: "Europe", size: "medium" },
      { image: "https://cdn.yourholiday.me/static/dynimg/destination/32/600x300/3076721-3076720_thailand2.jpg", title: "Thailand", size: "medium" },
      { image: "https://cdn.yourholiday.me/static/dynimg/destination/64/600x300/2750318-2750317_japan.jpg", title: "Japan", size: "small" },
      { image: "https://cdn.yourholiday.me/static/dynimg/destination/74/600x300/2190187-2190186_zurich-switzerland-view-of-the-historic-city-center-with-famous-fraumunster-church-5.jpg", title: "Switzerland", size: "large" },
      { image: "https://cdn.yourholiday.me/static/dynimg/destination/33/600x300/2210456-2210455_andaman.jpg", title: "Andamans", size: "small" },
      { image: "https://cdn.yourholiday.me/static/dynimg/destination/58/600x300/3996296-3996295_singapore-stock-image.jpg", title: "Singapore", size: "medium" },
      { image: "https://cdn.yourholiday.me/static/dynimg/destination/45/600x300/2750974-2750973_turkey.jpg", title: "Turkey", size: "small" },
      { image: "https://cdn.yourholiday.me/static/dynimg/destination/93/600x300/2210565-2210564_srilanka.jpg", title: "Sri Lanka", size: "small" },
      { image: "https://cdn.yourholiday.me/static/dynimg/destination/70/600x300/2210601-2210600_mauritius.jpg", title: "Mauritius", size: "medium" },
      { image: "https://cdn.yourholiday.me/static/dynimg/itinerary/14/600x300/2228853-2228852_kerala-1.jpg", title: "Kerala", size: "large" },
      { image: "https://cdn.yourholiday.me/static/dynimg/itinerary/11/600x300/2228921-2228920_hp-3.jpg", title: "Himachal Pradesh", size: "small" },
      { image: "https://cdn.yourholiday.me/static/dynimg/itinerary/37/600x450/2185258-2185257_pexels-photo-209741.jpg", title: "Rajasthan", size: "small" },
      { image: "https://cdn.yourholiday.me/static/dynimg/destination/35/600x300/3078047-3078046_vietnam.jpg", title: "Vietnam", size: "medium" }
    ];
  }
  ngAfterViewInit() {
    gsapWithCSS.fromTo(".gallery-item", { scale: 0.9, opacity: 0 }, {
      scale: 1,
      opacity: 1,
      stagger: 0.07,
      duration: 0.55,
      ease: "power3.out",
      scrollTrigger: { trigger: "#gallery", start: "top 80%", once: true }
    });
  }
  openLightbox(item) {
    this.lightboxItem = item;
    document.body.style.overflow = "hidden";
    setTimeout(() => {
      gsapWithCSS.from(".lightbox-inner", { scale: 0.85, opacity: 0, duration: 0.4, ease: "back.out(1.5)" });
    }, 10);
  }
  closeLightbox() {
    gsapWithCSS.to(".lightbox-inner", {
      scale: 0.85,
      opacity: 0,
      duration: 0.25,
      ease: "power2.in",
      onComplete: () => {
        this.lightboxItem = null;
        document.body.style.overflow = "";
      }
    });
  }
  static {
    this.\u0275fac = function GalleryComponent_Factory(t) {
      return new (t || _GalleryComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GalleryComponent, selectors: [["app-gallery"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 13, vars: 2, consts: [["id", "gallery", 1, "gallery-section"], [1, "container"], [1, "section-header"], [1, "section-tag"], [1, "fas", "fa-images"], [1, "gallery-grid"], ["class", "gallery-item", 3, "class", "click", 4, "ngFor", "ngForOf"], ["class", "lightbox", 3, "click", 4, "ngIf"], [1, "gallery-item", 3, "click"], ["loading", "lazy", 3, "src", "alt"], [1, "gallery-overlay"], [1, "fas", "fa-expand-alt"], [1, "lightbox", 3, "click"], [1, "lightbox-inner", 3, "click"], [1, "lightbox-close", 3, "click"], [1, "fas", "fa-times"], [3, "src", "alt"], [1, "lightbox-caption"], [1, "fas", "fa-map-marker-alt"]], template: function GalleryComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275element(4, "i", 4);
        \u0275\u0275text(5, " Photo Gallery");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "h2");
        \u0275\u0275text(7, "Moments from Paradise");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p");
        \u0275\u0275text(9, "A visual journey through the world's most stunning destinations");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "div", 5);
        \u0275\u0275template(11, GalleryComponent_div_11_Template, 6, 5, "div", 6);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(12, GalleryComponent_div_12_Template, 8, 3, "div", 7);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(11);
        \u0275\u0275property("ngForOf", ctx.galleryImages);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.lightboxItem);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf], styles: ['@charset "UTF-8";\n\n\n\n.gallery-section[_ngcontent-%COMP%] {\n  background: var(--bg-light);\n}\n.gallery-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-auto-rows: 200px;\n  gap: 1rem;\n}\n@media (max-width: 900px) {\n  .gallery-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 480px) {\n  .gallery-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    grid-auto-rows: 220px;\n  }\n}\n.gallery-item[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: var(--radius-md);\n  overflow: hidden;\n  cursor: pointer;\n  opacity: 1;\n}\n.gallery-item.size-large[_ngcontent-%COMP%] {\n  grid-column: span 2;\n  grid-row: span 2;\n}\n.gallery-item.size-medium[_ngcontent-%COMP%] {\n  grid-column: span 2;\n}\n.gallery-item.size-small[_ngcontent-%COMP%] {\n  grid-column: span 1;\n}\n.gallery-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.5s ease;\n  display: block;\n}\n.gallery-item[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  transform: scale(1.08);\n}\n.gallery-item[_ngcontent-%COMP%]:hover   .gallery-overlay[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.gallery-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: rgba(30, 58, 95, 0.6);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n  opacity: 0;\n  transition: opacity 0.3s ease;\n  color: #fff;\n}\n.gallery-overlay[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.gallery-overlay[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 600;\n}\n.lightbox[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.92);\n  z-index: 2000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem;\n}\n.lightbox-inner[_ngcontent-%COMP%] {\n  position: relative;\n  max-width: 900px;\n  width: 100%;\n  border-radius: var(--radius-lg);\n  overflow: hidden;\n}\n.lightbox-inner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  max-height: 80vh;\n  object-fit: contain;\n  display: block;\n}\n.lightbox-close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: rgba(0, 0, 0, 0.6);\n  color: #fff;\n  font-size: 1rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 10;\n  transition: var(--transition);\n}\n.lightbox-close[_ngcontent-%COMP%]:hover {\n  background: var(--accent);\n}\n.lightbox-caption[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: rgba(0, 0, 0, 0.7);\n  color: #fff;\n  padding: 0.75rem 1.25rem;\n  font-size: 0.9rem;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.lightbox-caption[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--accent);\n}\n/*# sourceMappingURL=gallery.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GalleryComponent, { className: "GalleryComponent", filePath: "src\\app\\components\\gallery\\gallery.component.ts", lineNumber: 17 });
})();

// src/app/components/testimonials/testimonials.component.ts
var _c0 = () => [1, 2, 3, 4, 5];
function TestimonialsComponent_i_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 16);
  }
}
function TestimonialsComponent_div_13_i_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 16);
  }
}
function TestimonialsComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18);
    \u0275\u0275element(2, "i", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 20);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 21)(6, "div", 22);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 23)(9, "strong");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275element(12, "i", 24);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 25);
    \u0275\u0275template(15, TestimonialsComponent_div_13_i_15_Template, 1, 0, "i", 7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const t_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.current === i_r2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(t_r1.text);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r1.name.charAt(0));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r1.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", t_r1.location, "");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(7, _c0));
  }
}
function TestimonialsComponent_button_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 26);
    \u0275\u0275listener("click", function TestimonialsComponent_button_18_Template_button_click_0_listener() {
      const i_r5 = \u0275\u0275restoreView(_r4).index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goTo(i_r5));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r5 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.current === i_r5);
  }
}
var TestimonialsComponent = class _TestimonialsComponent {
  constructor(data) {
    this.data = data;
    this.current = 0;
  }
  ngOnInit() {
    this.startAuto();
  }
  ngOnDestroy() {
    clearInterval(this.timer);
  }
  startAuto() {
    this.timer = setInterval(() => this.next(), 5e3);
  }
  next() {
    this.current = (this.current + 1) % this.data.testimonials.length;
  }
  prev() {
    this.current = (this.current - 1 + this.data.testimonials.length) % this.data.testimonials.length;
  }
  goTo(i) {
    this.current = i;
  }
  static {
    this.\u0275fac = function TestimonialsComponent_Factory(t) {
      return new (t || _TestimonialsComponent)(\u0275\u0275directiveInject(DataService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TestimonialsComponent, selectors: [["app-testimonials"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 21, vars: 4, consts: [["id", "testimonials", 1, "testimonials-section"], [1, "container"], [1, "section-header"], [1, "google-badge"], ["src", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/272px-Google_2015_logo.svg.png", "alt", "Google", "loading", "lazy", 1, "google-icon"], [1, "hear-label"], [1, "google-stars"], ["class", "fas fa-star", 4, "ngFor", "ngForOf"], [1, "testimonials-slider"], ["class", "testimonial-card", 3, "active", 4, "ngFor", "ngForOf"], [1, "testimonial-nav"], [1, "nav-btn", 3, "click"], [1, "fas", "fa-chevron-left"], [1, "testimonial-dots"], [3, "active", "click", 4, "ngFor", "ngForOf"], [1, "fas", "fa-chevron-right"], [1, "fas", "fa-star"], [1, "testimonial-card"], [1, "quote-icon"], [1, "fas", "fa-quote-left"], [1, "testimonial-text"], [1, "testimonial-footer"], [1, "testimonial-avatar"], [1, "testimonial-info"], [1, "fas", "fa-map-marker-alt"], [1, "testimonial-stars"], [3, "click"]], template: function TestimonialsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        \u0275\u0275element(4, "img", 4);
        \u0275\u0275elementStart(5, "div")(6, "p", 5);
        \u0275\u0275text(7, "Hear From Our Customers");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 6);
        \u0275\u0275template(9, TestimonialsComponent_i_9_Template, 1, 0, "i", 7);
        \u0275\u0275elementStart(10, "span");
        \u0275\u0275text(11, "4.9 / 5 on Google");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(12, "div", 8);
        \u0275\u0275template(13, TestimonialsComponent_div_13_Template, 16, 8, "div", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 10)(15, "button", 11);
        \u0275\u0275listener("click", function TestimonialsComponent_Template_button_click_15_listener() {
          return ctx.prev();
        });
        \u0275\u0275element(16, "i", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "div", 13);
        \u0275\u0275template(18, TestimonialsComponent_button_18_Template, 1, 2, "button", 14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "button", 11);
        \u0275\u0275listener("click", function TestimonialsComponent_Template_button_click_19_listener() {
          return ctx.next();
        });
        \u0275\u0275element(20, "i", 15);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(9);
        \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(3, _c0));
        \u0275\u0275advance(4);
        \u0275\u0275property("ngForOf", ctx.data.testimonials);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngForOf", ctx.data.testimonials);
      }
    }, dependencies: [CommonModule, NgForOf], styles: ['\n\n.testimonials-section[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #0d1f35 0%,\n      #1E3A5F 100%);\n  position: relative;\n  overflow: hidden;\n}\n.testimonials-section[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: -50%;\n  right: -20%;\n  width: 600px;\n  height: 600px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.03);\n  pointer-events: none;\n}\n.testimonials-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 3rem;\n}\n.google-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 1.25rem;\n  background: rgba(255, 255, 255, 0.12);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  padding: 1rem 2rem;\n  border-radius: var(--radius-md);\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n}\n.google-icon[_ngcontent-%COMP%] {\n  height: 32px;\n  width: auto;\n  object-fit: contain;\n  filter: brightness(0) invert(1);\n}\n.hear-label[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 700;\n  letter-spacing: 1.5px;\n  color: rgba(255, 255, 255, 0.8);\n  text-transform: uppercase;\n  margin-bottom: 0.4rem;\n}\n.google-stars[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.3rem;\n}\n.google-stars[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #fbbc04;\n  font-size: 1rem;\n}\n.google-stars[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #fff;\n  font-weight: 700;\n  font-size: 0.9rem;\n  margin-left: 0.3rem;\n}\n.testimonials-slider[_ngcontent-%COMP%] {\n  max-width: 780px;\n  margin: 0 auto 2.5rem;\n  position: relative;\n  min-height: 240px;\n}\n.testimonial-card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.1);\n  -webkit-backdrop-filter: blur(12px);\n  backdrop-filter: blur(12px);\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  border-radius: var(--radius-lg);\n  padding: 2.5rem;\n  display: none;\n}\n.testimonial-card.active[_ngcontent-%COMP%] {\n  display: block;\n  animation: _ngcontent-%COMP%_slideIn 0.45s ease forwards;\n}\n@keyframes _ngcontent-%COMP%_slideIn {\n  from {\n    opacity: 0;\n    transform: translateX(30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateX(0);\n  }\n}\n.quote-icon[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  color: var(--accent);\n  opacity: 0.7;\n  margin-bottom: 1rem;\n  line-height: 1;\n}\n.testimonial-text[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.92);\n  font-size: 1.05rem;\n  line-height: 1.85;\n  font-style: italic;\n  margin-bottom: 1.75rem;\n}\n.testimonial-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.testimonial-avatar[_ngcontent-%COMP%] {\n  width: 52px;\n  height: 52px;\n  border-radius: 50%;\n  background: var(--accent);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.3rem;\n  font-weight: 700;\n  font-family: var(--font-heading);\n  flex-shrink: 0;\n  border: 3px solid rgba(255, 255, 255, 0.3);\n}\n.testimonial-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.testimonial-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  color: #fff;\n  font-size: 1rem;\n  margin-bottom: 0.2rem;\n}\n.testimonial-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.65);\n  font-size: 0.82rem;\n  display: flex;\n  align-items: center;\n  gap: 0.3rem;\n}\n.testimonial-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--accent);\n  font-size: 0.7rem;\n}\n.testimonial-stars[_ngcontent-%COMP%] {\n  color: #fbbc04;\n  font-size: 0.9rem;\n  display: flex;\n  gap: 2px;\n}\n.testimonial-nav[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1.5rem;\n}\n.nav-btn[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.15);\n  color: #fff;\n  font-size: 0.9rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: var(--transition);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  cursor: pointer;\n}\n.nav-btn[_ngcontent-%COMP%]:hover {\n  background: var(--accent);\n  border-color: var(--accent);\n}\n.testimonial-dots[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n}\n.testimonial-dots[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.3);\n  transition: var(--transition);\n  cursor: pointer;\n  border: none;\n}\n.testimonial-dots[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: var(--accent);\n  width: 24px;\n  border-radius: 4px;\n}\n/*# sourceMappingURL=testimonials.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TestimonialsComponent, { className: "TestimonialsComponent", filePath: "src\\app\\components\\testimonials\\testimonials.component.ts", lineNumber: 12 });
})();

// src/app/components/booking/booking.component.ts
function BookingComponent_div_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 23);
    \u0275\u0275element(2, "i", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "Booking Request Sent!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 25);
    \u0275\u0275listener("click", function BookingComponent_div_54_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.reset());
    });
    \u0275\u0275text(8, "Book Another Tour");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("Thank you, ", ctx_r1.form.name, "! Our team will contact you within 2 hours to confirm your tour details.");
  }
}
function BookingComponent_form_55_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29)(1, "label");
    \u0275\u0275text(2, "Selected Package");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 30);
    \u0275\u0275element(4, "i", 55);
    \u0275\u0275elementStart(5, "input", 56);
    \u0275\u0275twoWayListener("ngModelChange", function BookingComponent_form_55_div_2_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.form.packageName, $event) || (ctx_r1.form.packageName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.packageName);
  }
}
function BookingComponent_form_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 26, 0);
    \u0275\u0275listener("ngSubmit", function BookingComponent_form_55_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submit());
    });
    \u0275\u0275template(2, BookingComponent_form_55_div_2_Template, 6, 1, "div", 27);
    \u0275\u0275elementStart(3, "div", 28)(4, "div", 29)(5, "label");
    \u0275\u0275text(6, "Full Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 30);
    \u0275\u0275element(8, "i", 31);
    \u0275\u0275elementStart(9, "input", 32);
    \u0275\u0275twoWayListener("ngModelChange", function BookingComponent_form_55_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.name, $event) || (ctx_r1.form.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 29)(11, "label");
    \u0275\u0275text(12, "Email Address *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 30);
    \u0275\u0275element(14, "i", 33);
    \u0275\u0275elementStart(15, "input", 34);
    \u0275\u0275twoWayListener("ngModelChange", function BookingComponent_form_55_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.email, $event) || (ctx_r1.form.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(16, "div", 28)(17, "div", 29)(18, "label");
    \u0275\u0275text(19, "Phone Number *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 30);
    \u0275\u0275element(21, "i", 16);
    \u0275\u0275elementStart(22, "input", 35);
    \u0275\u0275twoWayListener("ngModelChange", function BookingComponent_form_55_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.phone, $event) || (ctx_r1.form.phone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 29)(24, "label");
    \u0275\u0275text(25, "Destination");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 30);
    \u0275\u0275element(27, "i", 36);
    \u0275\u0275elementStart(28, "select", 37);
    \u0275\u0275twoWayListener("ngModelChange", function BookingComponent_form_55_Template_select_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.destination, $event) || (ctx_r1.form.destination = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(29, "option", 38);
    \u0275\u0275text(30, "Select Destination");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "option");
    \u0275\u0275text(32, "Dubai");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "option");
    \u0275\u0275text(34, "Thailand");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "option");
    \u0275\u0275text(36, "Singapore");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "option");
    \u0275\u0275text(38, "Europe");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "option");
    \u0275\u0275text(40, "Australia");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "option");
    \u0275\u0275text(42, "Bali");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "option");
    \u0275\u0275text(44, "Maldives");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "option");
    \u0275\u0275text(46, "Andamans");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "option");
    \u0275\u0275text(48, "Goa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "option");
    \u0275\u0275text(50, "Kerala");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "option");
    \u0275\u0275text(52, "Himachal Pradesh");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "option");
    \u0275\u0275text(54, "Custom Itinerary");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(55, "div", 28)(56, "div", 29)(57, "label");
    \u0275\u0275text(58, "Travel Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "div", 30);
    \u0275\u0275element(60, "i", 39);
    \u0275\u0275elementStart(61, "input", 40);
    \u0275\u0275twoWayListener("ngModelChange", function BookingComponent_form_55_Template_input_ngModelChange_61_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.date, $event) || (ctx_r1.form.date = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(62, "div", 29)(63, "label");
    \u0275\u0275text(64, "No. of Travelers");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "div", 30);
    \u0275\u0275element(66, "i", 41);
    \u0275\u0275elementStart(67, "select", 42);
    \u0275\u0275twoWayListener("ngModelChange", function BookingComponent_form_55_Template_select_ngModelChange_67_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.travelers, $event) || (ctx_r1.form.travelers = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(68, "option", 43);
    \u0275\u0275text(69, "1 Person");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "option", 44);
    \u0275\u0275text(71, "2 People");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "option", 45);
    \u0275\u0275text(73, "3-5 People");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "option", 46);
    \u0275\u0275text(75, "6-10 People");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "option", 47);
    \u0275\u0275text(77, "10+ People");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(78, "div", 29)(79, "label");
    \u0275\u0275text(80, "Budget per Person");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "div", 30);
    \u0275\u0275element(82, "i", 48);
    \u0275\u0275elementStart(83, "select", 49);
    \u0275\u0275twoWayListener("ngModelChange", function BookingComponent_form_55_Template_select_ngModelChange_83_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.budget, $event) || (ctx_r1.form.budget = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(84, "option", 38);
    \u0275\u0275text(85, "Select Budget Range");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "option");
    \u0275\u0275text(87, "Under \u20B910,000");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "option");
    \u0275\u0275text(89, "\u20B910,000 - \u20B920,000");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "option");
    \u0275\u0275text(91, "\u20B920,000 - \u20B935,000");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(92, "option");
    \u0275\u0275text(93, "\u20B935,000 - \u20B950,000");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "option");
    \u0275\u0275text(95, "Above \u20B950,000");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(96, "div", 29)(97, "label");
    \u0275\u0275text(98, "Special Requirements");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(99, "div", 50);
    \u0275\u0275element(100, "i", 51);
    \u0275\u0275elementStart(101, "textarea", 52);
    \u0275\u0275twoWayListener("ngModelChange", function BookingComponent_form_55_Template_textarea_ngModelChange_101_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.message, $event) || (ctx_r1.form.message = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(102, "button", 53);
    \u0275\u0275element(103, "i", 54);
    \u0275\u0275text(104, " Send Booking Request ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const bookingForm_r5 = \u0275\u0275reference(1);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.form.packageName);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.name);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.email);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.phone);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.destination);
    \u0275\u0275advance(33);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.date);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.travelers);
    \u0275\u0275advance(16);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.budget);
    \u0275\u0275advance(18);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.message);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", bookingForm_r5.invalid);
  }
}
gsapWithCSS.registerPlugin(ScrollTrigger2);
var BookingComponent = class _BookingComponent {
  constructor() {
    this.prefilledPackage = "";
    this.submitted = false;
    this.form = {
      name: "",
      email: "",
      phone: "",
      destination: "",
      date: "",
      travelers: "2",
      budget: "",
      message: "",
      packageName: ""
    };
  }
  ngOnChanges() {
    if (this.prefilledPackage) {
      this.form.packageName = this.prefilledPackage;
      this.form.destination = this.prefilledPackage;
    }
  }
  submit() {
    this.submitted = true;
    setTimeout(() => {
      gsapWithCSS.fromTo(".success-msg", { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" });
    }, 10);
  }
  reset() {
    this.submitted = false;
    this.form = { name: "", email: "", phone: "", destination: "", date: "", travelers: "2", budget: "", message: "", packageName: "" };
  }
  static {
    this.\u0275fac = function BookingComponent_Factory(t) {
      return new (t || _BookingComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BookingComponent, selectors: [["app-booking"]], inputs: { prefilledPackage: "prefilledPackage" }, standalone: true, features: [\u0275\u0275NgOnChangesFeature, \u0275\u0275StandaloneFeature], decls: 56, vars: 2, consts: [["bookingForm", "ngForm"], ["id", "booking", 1, "booking-section"], [1, "container"], [1, "booking-wrapper"], [1, "booking-info"], [1, "section-tag"], [1, "fas", "fa-calendar-check"], [1, "booking-features"], [1, "booking-feature"], [1, "feature-icon"], [1, "fas", "fa-shield-alt"], [1, "fas", "fa-headset"], [1, "fas", "fa-tags"], [1, "fas", "fa-undo"], [1, "booking-contact"], ["href", "tel:+919422421993", 1, "booking-phone"], [1, "fas", "fa-phone"], ["href", "https://wa.me/919422421993", "target", "_blank", "rel", "noopener noreferrer", 1, "booking-whatsapp"], [1, "fab", "fa-whatsapp"], [1, "booking-form-wrap"], ["class", "success-msg", 4, "ngIf"], [3, "ngSubmit", 4, "ngIf"], [1, "success-msg"], [1, "success-icon"], [1, "fas", "fa-check-circle"], [1, "btn", "btn-primary", 3, "click"], [3, "ngSubmit"], ["class", "form-group", 4, "ngIf"], [1, "form-row"], [1, "form-group"], [1, "input-wrap"], [1, "fas", "fa-user"], ["type", "text", "name", "name", "placeholder", "Your full name", "required", "", 3, "ngModelChange", "ngModel"], [1, "fas", "fa-envelope"], ["type", "email", "name", "email", "placeholder", "your@email.com", "required", "", 3, "ngModelChange", "ngModel"], ["type", "tel", "name", "phone", "placeholder", "+91 XXXXX XXXXX", "required", "", 3, "ngModelChange", "ngModel"], [1, "fas", "fa-map-marker-alt"], ["name", "destination", 3, "ngModelChange", "ngModel"], ["value", ""], [1, "fas", "fa-calendar"], ["type", "date", "name", "date", 3, "ngModelChange", "ngModel"], [1, "fas", "fa-users"], ["name", "travelers", 3, "ngModelChange", "ngModel"], ["value", "1"], ["value", "2"], ["value", "3-5"], ["value", "6-10"], ["value", "10+"], [1, "fas", "fa-rupee-sign"], ["name", "budget", 3, "ngModelChange", "ngModel"], [1, "input-wrap", "textarea-wrap"], [1, "fas", "fa-comment"], ["name", "message", "rows", "3", "placeholder", "Any special requests, dietary needs, or questions...", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "btn", "btn-primary", "submit-btn", 3, "disabled"], [1, "fas", "fa-paper-plane"], [1, "fas", "fa-suitcase"], ["type", "text", "name", "packageName", "readonly", "", 2, "background", "#f0f4ff", "color", "var(--primary)", "font-weight", "600", 3, "ngModelChange", "ngModel"]], template: function BookingComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "span", 5);
        \u0275\u0275element(5, "i", 6);
        \u0275\u0275text(6, " Book Your Tour");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "h2");
        \u0275\u0275text(8, "Start Your Dream Journey");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "p");
        \u0275\u0275text(10, "Fill in your details and our travel experts will craft a personalized itinerary just for you \u2014 completely free!");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 7)(12, "div", 8)(13, "div", 9);
        \u0275\u0275element(14, "i", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "div")(16, "strong");
        \u0275\u0275text(17, "100% Safe & Secure");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "span");
        \u0275\u0275text(19, "Your data is protected");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(20, "div", 8)(21, "div", 9);
        \u0275\u0275element(22, "i", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "div")(24, "strong");
        \u0275\u0275text(25, "24/7 Support");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "span");
        \u0275\u0275text(27, "We're always here for you");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(28, "div", 8)(29, "div", 9);
        \u0275\u0275element(30, "i", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "div")(32, "strong");
        \u0275\u0275text(33, "Best Price Guarantee");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "span");
        \u0275\u0275text(35, "No hidden charges");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(36, "div", 8)(37, "div", 9);
        \u0275\u0275element(38, "i", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "div")(40, "strong");
        \u0275\u0275text(41, "Free Cancellation");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "span");
        \u0275\u0275text(43, "Up to 7 days before travel");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(44, "div", 14)(45, "p");
        \u0275\u0275text(46, "Prefer to talk? Call us directly:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "a", 15);
        \u0275\u0275element(48, "i", 16);
        \u0275\u0275text(49, " +91 94224 21993 ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "a", 17);
        \u0275\u0275element(51, "i", 18);
        \u0275\u0275text(52, " WhatsApp Us ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(53, "div", 19);
        \u0275\u0275template(54, BookingComponent_div_54_Template, 9, 1, "div", 20)(55, BookingComponent_form_55_Template, 105, 10, "form", 21);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(54);
        \u0275\u0275property("ngIf", ctx.submitted);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.submitted);
      }
    }, dependencies: [CommonModule, NgIf, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm], styles: ["\n\n.booking-section[_ngcontent-%COMP%] {\n  background: var(--bg-white);\n}\n.booking-wrapper[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1.4fr;\n  gap: 4rem;\n  align-items: start;\n}\n@media (max-width: 900px) {\n  .booking-wrapper[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 2.5rem;\n  }\n}\n.booking-info[_ngcontent-%COMP%]   .section-tag[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: rgba(30, 58, 95, 0.1);\n  color: var(--primary);\n  font-size: 0.8rem;\n  font-weight: 600;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  padding: 0.4rem 1rem;\n  border-radius: 50px;\n  margin-bottom: 1rem;\n}\n.booking-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: var(--text-dark);\n  margin-bottom: 1rem;\n}\n.booking-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-mid);\n  line-height: 1.7;\n  margin-bottom: 2rem;\n}\n.booking-features[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  margin-bottom: 2rem;\n}\n.booking-feature[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.booking-feature[_ngcontent-%COMP%]   .feature-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  background: rgba(30, 58, 95, 0.1);\n  color: var(--primary);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1rem;\n  flex-shrink: 0;\n}\n.booking-feature[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.9rem;\n  color: var(--text-dark);\n}\n.booking-feature[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--text-light);\n}\n.booking-contact[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.booking-contact[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-mid);\n  font-size: 0.9rem;\n  margin-bottom: 0.75rem;\n}\n.booking-phone[_ngcontent-%COMP%], .booking-whatsapp[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.6rem 1.2rem;\n  border-radius: 50px;\n  font-weight: 600;\n  font-size: 0.9rem;\n  transition: var(--transition);\n  width: fit-content;\n}\n.booking-phone[_ngcontent-%COMP%] {\n  background: rgba(30, 58, 95, 0.1);\n  color: var(--primary);\n}\n.booking-phone[_ngcontent-%COMP%]:hover {\n  background: var(--primary);\n  color: #fff;\n}\n.booking-whatsapp[_ngcontent-%COMP%] {\n  background: rgba(37, 211, 102, 0.1);\n  color: #25d366;\n}\n.booking-whatsapp[_ngcontent-%COMP%]:hover {\n  background: #25d366;\n  color: #fff;\n}\n.booking-form-wrap[_ngcontent-%COMP%] {\n  background: var(--bg-light);\n  border-radius: var(--radius-lg);\n  padding: 2.5rem;\n  box-shadow: var(--shadow-sm);\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n}\n@media (max-width: 600px) {\n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1.2rem;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: var(--text-dark);\n  margin-bottom: 0.4rem;\n}\n.input-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.input-wrap[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0.9rem;\n  color: var(--primary);\n  font-size: 0.85rem;\n  z-index: 1;\n}\n.input-wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .input-wrap[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .input-wrap[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.8rem 0.9rem 0.8rem 2.5rem;\n  border: 1.5px solid #e0e0e0;\n  border-radius: var(--radius-sm);\n  font-size: 0.9rem;\n  font-family: var(--font-body);\n  color: var(--text-dark);\n  background: #fff;\n  outline: none;\n  transition: border-color 0.3s, box-shadow 0.3s;\n  appearance: none;\n}\n.input-wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .input-wrap[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, .input-wrap[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  border-color: var(--primary);\n  box-shadow: 0 0 0 3px rgba(30, 58, 95, 0.1);\n}\n.input-wrap[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 90px;\n  padding-top: 0.8rem;\n}\n.textarea-wrap[_ngcontent-%COMP%] {\n  align-items: flex-start;\n}\n.textarea-wrap[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  top: 0.9rem;\n}\n.submit-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  justify-content: center;\n  padding: 1rem;\n  font-size: 1rem;\n  margin-top: 0.5rem;\n}\n.submit-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.success-msg[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 2rem;\n}\n.success-msg[_ngcontent-%COMP%]   .success-icon[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  color: var(--primary);\n  margin-bottom: 1rem;\n}\n.success-msg[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--text-dark);\n  margin-bottom: 0.75rem;\n}\n.success-msg[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-mid);\n  margin-bottom: 1.5rem;\n  line-height: 1.7;\n}\n/*# sourceMappingURL=booking.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BookingComponent, { className: "BookingComponent", filePath: "src\\app\\components\\booking\\booking.component.ts", lineNumber: 16 });
})();

// src/app/components/about/about.component.ts
function AboutComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 15);
    \u0275\u0275element(2, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const w_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275classMap(w_r1.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(w_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(w_r1.desc);
  }
}
gsapWithCSS.registerPlugin(ScrollTrigger2);
var AboutComponent = class _AboutComponent {
  constructor(data, scrollSvc) {
    this.data = data;
    this.scrollSvc = scrollSvc;
    this.whyUs = [
      { icon: "fas fa-user-tie", title: "Expert Travel Agents", desc: "Our team of experienced travel agents will save you huge on your dream holidays." },
      { icon: "fas fa-tags", title: "Best Price in the Market", desc: "We travel across the world to find you the best price for your dream holidays." },
      { icon: "fas fa-sliders-h", title: "Fully Customized Tours", desc: "Tours can be fully customized. We create a tour itinerary just for you." },
      { icon: "fas fa-headset", title: "Helpful Support Team", desc: "Contact our helpful team anytime \u2014 we are always here to assist you." }
    ];
  }
  ngAfterViewInit() {
    gsapWithCSS.fromTo(".customize-text", { x: -60, opacity: 0 }, {
      x: 0,
      opacity: 1,
      duration: 0.9,
      ease: "power3.out",
      scrollTrigger: { trigger: "#about", start: "top 70%", once: true }
    });
    gsapWithCSS.fromTo(".customize-img", { x: 60, opacity: 0 }, {
      x: 0,
      opacity: 1,
      duration: 0.9,
      ease: "power3.out",
      scrollTrigger: { trigger: "#about", start: "top 70%", once: true }
    });
    gsapWithCSS.fromTo(".why-card", { y: 40, opacity: 0 }, {
      y: 0,
      opacity: 1,
      stagger: 0.12,
      duration: 0.6,
      ease: "power3.out",
      scrollTrigger: { trigger: ".why-grid", start: "top 75%", once: true }
    });
  }
  goTo(id) {
    this.scrollSvc.scrollTo(id);
  }
  static {
    this.\u0275fac = function AboutComponent_Factory(t) {
      return new (t || _AboutComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(ScrollService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AboutComponent, selectors: [["app-about"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 24, vars: 1, consts: [["id", "about", 1, "about-section"], [1, "container"], [1, "customize-block"], [1, "customize-text"], [1, "btn", "btn-primary", 3, "click"], [1, "fas", "fa-phone"], [1, "customize-img"], ["src", "https://cdn.yourholiday.me/static/dynimg/itinerary/99/1200x900/3191480-3191479_azin-javadzadeh-wmpyrpas7dq-unsplash.jpg", "alt", "Customize your tour", "loading", "lazy"], [1, "why-us"], [1, "section-header"], [1, "section-tag"], [1, "fas", "fa-thumbs-up"], [1, "why-grid"], ["class", "why-card", 4, "ngFor", "ngForOf"], [1, "why-card"], [1, "why-icon"]], template: function AboutComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2");
        \u0275\u0275text(5, "Looking for something different?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p");
        \u0275\u0275text(7, "Tours can be fully customized. Contact our helpful team to create a tour itinerary just for you.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "button", 4);
        \u0275\u0275listener("click", function AboutComponent_Template_button_click_8_listener() {
          return ctx.goTo("contact");
        });
        \u0275\u0275element(9, "i", 5);
        \u0275\u0275text(10, " Contact Us ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 6);
        \u0275\u0275element(12, "img", 7);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "div", 8)(14, "div", 9)(15, "span", 10);
        \u0275\u0275element(16, "i", 11);
        \u0275\u0275text(17, " Why Choose Us");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "h2");
        \u0275\u0275text(19, "The J K Tours And Travels Difference");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "p");
        \u0275\u0275text(21, "We don't just plan tours \u2014 we create memories that last a lifetime");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "div", 12);
        \u0275\u0275template(23, AboutComponent_div_23_Template, 7, 4, "div", 13);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(23);
        \u0275\u0275property("ngForOf", ctx.whyUs);
      }
    }, dependencies: [CommonModule, NgForOf], styles: ['@charset "UTF-8";\n\n\n\n.about-section[_ngcontent-%COMP%] {\n  background: var(--bg-white);\n}\n.customize-block[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1.4fr;\n  gap: 4rem;\n  align-items: center;\n  margin-bottom: 5rem;\n  background: var(--bg-light);\n  border-radius: var(--radius-lg);\n  padding: 3rem;\n}\n@media (max-width: 900px) {\n  .customize-block[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 2rem;\n    padding: 2rem;\n    margin-bottom: 3rem;\n  }\n}\n.customize-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: var(--text-dark);\n  margin-bottom: 1.2rem;\n  font-size: clamp(1.6rem, 3vw, 2.4rem);\n}\n.customize-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-mid);\n  line-height: 1.8;\n  margin-bottom: 2rem;\n  font-size: 1.05rem;\n}\n.customize-img[_ngcontent-%COMP%] {\n  border-radius: var(--radius-md);\n  overflow: hidden;\n  box-shadow: var(--shadow-lg);\n}\n.customize-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 380px;\n  object-fit: cover;\n  display: block;\n  transition: transform 0.5s ease;\n}\n.customize-img[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  transform: scale(1.04);\n}\n@media (max-width: 600px) {\n  .customize-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 240px;\n  }\n}\n.about-img-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  height: 480px;\n}\n@media (max-width: 600px) {\n  .about-img-wrap[_ngcontent-%COMP%] {\n    height: 320px;\n  }\n}\n.about-img-main[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 80%;\n  height: 85%;\n  border-radius: var(--radius-lg);\n  overflow: hidden;\n  box-shadow: var(--shadow-lg);\n}\n.about-img-main[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.about-img-secondary[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  width: 55%;\n  height: 50%;\n  border-radius: var(--radius-md);\n  overflow: hidden;\n  box-shadow: var(--shadow-lg);\n  border: 4px solid #fff;\n}\n.about-img-secondary[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.about-experience-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 72%;\n  transform: translate(-50%, -50%);\n  background: var(--primary);\n  color: #fff;\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  box-shadow: 0 8px 24px rgba(30, 58, 95, 0.4);\n  z-index: 10;\n  border: 4px solid #fff;\n}\n.about-experience-badge[_ngcontent-%COMP%]   .badge-num[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  font-weight: 800;\n  font-family: var(--font-heading);\n  line-height: 1;\n}\n.about-experience-badge[_ngcontent-%COMP%]   .badge-text[_ngcontent-%COMP%] {\n  font-size: 0.62rem;\n  line-height: 1.3;\n  opacity: 0.9;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.about-text-content[_ngcontent-%COMP%]   .section-tag[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: rgba(30, 58, 95, 0.1);\n  color: var(--primary);\n  font-size: 0.8rem;\n  font-weight: 600;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  padding: 0.4rem 1rem;\n  border-radius: 50px;\n  margin-bottom: 1rem;\n}\n.about-text-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: var(--text-dark);\n  margin-bottom: 1.2rem;\n}\n.about-lead[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  color: var(--text-mid);\n  line-height: 1.8;\n  margin-bottom: 1rem;\n  font-weight: 500;\n}\n.about-text-content[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%]:last-of-type {\n  color: var(--text-mid);\n  line-height: 1.8;\n  margin-bottom: 2rem;\n}\n.about-stats[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 1rem;\n  margin-bottom: 2rem;\n  padding: 1.5rem;\n  background: var(--bg-light);\n  border-radius: var(--radius-md);\n}\n@media (max-width: 600px) {\n  .about-stats[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.about-stat[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.about-stat[_ngcontent-%COMP%]   .stat-num[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 1.6rem;\n  font-weight: 800;\n  font-family: var(--font-heading);\n  color: var(--primary);\n  line-height: 1;\n  margin-bottom: 0.3rem;\n}\n.about-stat[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--text-light);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.about-ctas[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.why-us[_ngcontent-%COMP%] {\n  border-top: 1px solid #f0f0f0;\n  padding-top: 4rem;\n}\n.why-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 1.5rem;\n}\n@media (max-width: 1024px) {\n  .why-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 480px) {\n  .why-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.why-card[_ngcontent-%COMP%] {\n  padding: 2rem 1.5rem;\n  border-radius: var(--radius-md);\n  background: var(--bg-light);\n  border: 1px solid #f0f0f0;\n  transition: var(--transition);\n  text-align: center;\n}\n.why-card[_ngcontent-%COMP%]:hover {\n  background: #fff;\n  box-shadow: var(--shadow-md);\n  transform: translateY(-6px);\n  border-color: transparent;\n}\n.why-card[_ngcontent-%COMP%]:hover   .why-icon[_ngcontent-%COMP%] {\n  background: var(--primary);\n  color: #fff;\n  transform: scale(1.1) rotate(-5deg);\n}\n.why-icon[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  background: rgba(30, 58, 95, 0.1);\n  color: var(--primary);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.4rem;\n  margin: 0 auto 1.2rem;\n  transition: var(--transition);\n}\n.why-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: var(--text-dark);\n  margin-bottom: 0.6rem;\n  font-family: var(--font-body);\n  font-weight: 600;\n}\n.why-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--text-mid);\n  line-height: 1.7;\n}\n/*# sourceMappingURL=about.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AboutComponent, { className: "AboutComponent", filePath: "src\\app\\components\\about\\about.component.ts", lineNumber: 17 });
})();

// src/app/components/newsletter/newsletter.component.ts
function NewsletterComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 9)(2, "input", 10);
    \u0275\u0275twoWayListener("ngModelChange", function NewsletterComponent_div_11_Template_input_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.email, $event) || (ctx_r1.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 11);
    \u0275\u0275listener("click", function NewsletterComponent_div_11_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.subscribe());
    });
    \u0275\u0275element(4, "i", 12);
    \u0275\u0275text(5, " Subscribe ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "p", 13);
    \u0275\u0275element(7, "i", 14);
    \u0275\u0275text(8, " No spam. Unsubscribe anytime.");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.email);
  }
}
function NewsletterComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "i", 16);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "You're subscribed! Watch your inbox for amazing deals.");
    \u0275\u0275elementEnd()();
  }
}
var NewsletterComponent = class _NewsletterComponent {
  constructor() {
    this.email = "";
    this.subscribed = false;
  }
  subscribe() {
    if (this.email) {
      this.subscribed = true;
      gsapWithCSS.from(".nl-success", { scale: 0.8, opacity: 0, duration: 0.5, ease: "back.out(1.7)" });
    }
  }
  static {
    this.\u0275fac = function NewsletterComponent_Factory(t) {
      return new (t || _NewsletterComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewsletterComponent, selectors: [["app-newsletter"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 13, vars: 2, consts: [["id", "newsletter", 1, "newsletter"], [1, "container"], [1, "newsletter-inner"], [1, "newsletter-text"], [1, "nl-tag"], [1, "fas", "fa-envelope"], ["class", "newsletter-form", 4, "ngIf"], ["class", "nl-success", 4, "ngIf"], [1, "newsletter-form"], [1, "nl-input-wrap"], ["type", "email", "placeholder", "Enter your email address", 3, "ngModelChange", "ngModel"], [1, "btn", "btn-accent", 3, "click"], [1, "fas", "fa-paper-plane"], [1, "nl-note"], [1, "fas", "fa-lock"], [1, "nl-success"], [1, "fas", "fa-check-circle"]], template: function NewsletterComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "span", 4);
        \u0275\u0275element(5, "i", 5);
        \u0275\u0275text(6, " Newsletter");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "h2");
        \u0275\u0275text(8, "Get Exclusive Travel Deals");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "p");
        \u0275\u0275text(10, "Subscribe to receive early bird offers, seasonal discounts, and travel inspiration for worldwide tours.");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(11, NewsletterComponent_div_11_Template, 9, 1, "div", 6)(12, NewsletterComponent_div_12_Template, 4, 0, "div", 7);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(11);
        \u0275\u0275property("ngIf", !ctx.subscribed);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.subscribed);
      }
    }, dependencies: [CommonModule, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.newsletter[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f5a623 0%,\n      #d4891a 100%);\n  padding: 4rem 0;\n}\n.newsletter-inner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 3rem;\n  flex-wrap: wrap;\n}\n.newsletter-text[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 280px;\n}\n.nl-tag[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  background: rgba(255, 255, 255, 0.2);\n  color: #fff;\n  font-size: 0.8rem;\n  font-weight: 600;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  padding: 0.35rem 0.9rem;\n  border-radius: 50px;\n  margin-bottom: 0.75rem;\n}\nh2[_ngcontent-%COMP%] {\n  color: #fff;\n  margin-bottom: 0.75rem;\n}\np[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.85);\n}\n.newsletter-form[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 320px;\n}\n.nl-input-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  background: rgba(255, 255, 255, 0.15);\n  border-radius: 50px;\n  padding: 0.4rem 0.4rem 0.4rem 1.2rem;\n}\ninput[_ngcontent-%COMP%] {\n  flex: 1;\n  background: none;\n  border: none;\n  outline: none;\n  color: #fff;\n  font-size: 0.95rem;\n  font-family: var(--font-body);\n  &::placeholder {\n    color: rgba(255, 255, 255, 0.65);\n  }\n}\n.nl-note[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: rgba(255, 255, 255, 0.7);\n  margin-top: 0.6rem;\n  display: flex;\n  align-items: center;\n  gap: 0.3rem;\n}\n.nl-success[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  color: #fff;\n  font-size: 1rem;\n  i {\n    font-size: 2rem;\n  }\n}\n/*# sourceMappingURL=newsletter.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewsletterComponent, { className: "NewsletterComponent", filePath: "src\\app\\components\\newsletter\\newsletter.component.ts", lineNumber: 77 });
})();

// src/app/components/contact/contact.component.ts
function ContactComponent_div_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275element(1, "i", 18);
    \u0275\u0275elementStart(2, "h3");
    \u0275\u0275text(3, "Message Sent!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "Thank you for reaching out. We'll get back to you within 24 hours.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 19);
    \u0275\u0275listener("click", function ContactComponent_div_53_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sent = false);
    });
    \u0275\u0275text(7, "Send Another");
    \u0275\u0275elementEnd()();
  }
}
function ContactComponent_form_54_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 20);
    \u0275\u0275listener("ngSubmit", function ContactComponent_form_54_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.send());
    });
    \u0275\u0275elementStart(1, "div", 21)(2, "div", 22)(3, "label");
    \u0275\u0275text(4, "Your Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 23);
    \u0275\u0275element(6, "i", 24);
    \u0275\u0275elementStart(7, "input", 25);
    \u0275\u0275twoWayListener("ngModelChange", function ContactComponent_form_54_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.name, $event) || (ctx_r1.form.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 22)(9, "label");
    \u0275\u0275text(10, "Email Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 23);
    \u0275\u0275element(12, "i", 4);
    \u0275\u0275elementStart(13, "input", 26);
    \u0275\u0275twoWayListener("ngModelChange", function ContactComponent_form_54_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.email, $event) || (ctx_r1.form.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(14, "div", 22)(15, "label");
    \u0275\u0275text(16, "Subject");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 23);
    \u0275\u0275element(18, "i", 27);
    \u0275\u0275elementStart(19, "input", 28);
    \u0275\u0275twoWayListener("ngModelChange", function ContactComponent_form_54_Template_input_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.subject, $event) || (ctx_r1.form.subject = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 22)(21, "label");
    \u0275\u0275text(22, "Message");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 29);
    \u0275\u0275element(24, "i", 30);
    \u0275\u0275elementStart(25, "textarea", 31);
    \u0275\u0275twoWayListener("ngModelChange", function ContactComponent_form_54_Template_textarea_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.form.message, $event) || (ctx_r1.form.message = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "button", 32);
    \u0275\u0275element(27, "i", 33);
    \u0275\u0275text(28, " Send Message ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.name);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.email);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.subject);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.form.message);
  }
}
var ContactComponent = class _ContactComponent {
  constructor() {
    this.sent = false;
    this.form = { name: "", email: "", subject: "", message: "" };
  }
  send() {
    this.sent = true;
    gsapWithCSS.from(".contact-success", { y: 20, opacity: 0, duration: 0.5, ease: "power3.out" });
  }
  static {
    this.\u0275fac = function ContactComponent_Factory(t) {
      return new (t || _ContactComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContactComponent, selectors: [["app-contact"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 55, vars: 2, consts: [["id", "contact", 1, "contact-section"], [1, "container"], [1, "section-header"], [1, "section-tag"], [1, "fas", "fa-envelope"], [1, "contact-grid"], [1, "contact-info"], [1, "contact-card"], [1, "contact-icon"], [1, "fas", "fa-map-marker-alt"], [1, "fas", "fa-phone"], [1, "fas", "fa-clock"], [1, "contact-map"], ["src", \u0275\u0275trustConstantResourceUrl`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242117.78!2d73.7278!3d18.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890`, "width", "100%", "height", "200", "allowfullscreen", "", "loading", "lazy", "referrerpolicy", "no-referrer-when-downgrade", 2, "border", "0", "border-radius", "12px"], [1, "contact-form-wrap"], ["class", "contact-success", 4, "ngIf"], [3, "ngSubmit", 4, "ngIf"], [1, "contact-success"], [1, "fas", "fa-check-circle"], [1, "btn", "btn-primary", 3, "click"], [3, "ngSubmit"], [1, "form-row"], [1, "form-group"], [1, "input-wrap"], [1, "fas", "fa-user"], ["type", "text", "name", "name", "placeholder", "Full name", "required", "", 3, "ngModelChange", "ngModel"], ["type", "email", "name", "email", "placeholder", "your@email.com", "required", "", 3, "ngModelChange", "ngModel"], [1, "fas", "fa-tag"], ["type", "text", "name", "subject", "placeholder", "How can we help?", 3, "ngModelChange", "ngModel"], [1, "input-wrap", "textarea-wrap"], [1, "fas", "fa-comment"], ["name", "message", "rows", "5", "placeholder", "Tell us about your travel plans...", "required", "", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "btn", "btn-primary", "submit-btn"], [1, "fas", "fa-paper-plane"]], template: function ContactComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
        \u0275\u0275element(4, "i", 4);
        \u0275\u0275text(5, " We'd Love To Hear From You");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "h2");
        \u0275\u0275text(7, "Get In Touch");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p");
        \u0275\u0275text(9, "Have questions? Our travel experts are ready to help you plan your perfect holiday");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "div", 5)(11, "div", 6)(12, "div", 7)(13, "div", 8);
        \u0275\u0275element(14, "i", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "div")(16, "h4");
        \u0275\u0275text(17, "Our Office");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "p");
        \u0275\u0275text(19, "J K Tours And Travels");
        \u0275\u0275element(20, "br");
        \u0275\u0275text(21, "Pune, Maharashtra, India");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(22, "div", 7)(23, "div", 8);
        \u0275\u0275element(24, "i", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "div")(26, "h4");
        \u0275\u0275text(27, "Call Us");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "p");
        \u0275\u0275text(29, "+91 94224 21993");
        \u0275\u0275element(30, "br");
        \u0275\u0275text(31, "+91 98220 12346");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(32, "div", 7)(33, "div", 8);
        \u0275\u0275element(34, "i", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "div")(36, "h4");
        \u0275\u0275text(37, "Email Us");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "p");
        \u0275\u0275text(39, "info@jktourstravels.in");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(40, "div", 7)(41, "div", 8);
        \u0275\u0275element(42, "i", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "div")(44, "h4");
        \u0275\u0275text(45, "Working Hours");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "p");
        \u0275\u0275text(47, "Mon\u2013Sat: 9:00 AM \u2013 7:00 PM");
        \u0275\u0275element(48, "br");
        \u0275\u0275text(49, "Sunday: 10:00 AM \u2013 4:00 PM");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(50, "div", 12);
        \u0275\u0275element(51, "iframe", 13);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(52, "div", 14);
        \u0275\u0275template(53, ContactComponent_div_53_Template, 8, 0, "div", 15)(54, ContactComponent_form_54_Template, 29, 4, "form", 16);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(53);
        \u0275\u0275property("ngIf", ctx.sent);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.sent);
      }
    }, dependencies: [CommonModule, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm], styles: ["\n\n.contact-section[_ngcontent-%COMP%] {\n  background: var(--bg-light);\n}\n.contact-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1.4fr;\n  gap: 3rem;\n  align-items: start;\n}\n@media (max-width: 900px) {\n  .contact-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.contact-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.contact-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n  background: #fff;\n  border-radius: var(--radius-md);\n  padding: 1.25rem;\n  box-shadow: var(--shadow-sm);\n  transition: var(--transition);\n}\n.contact-card[_ngcontent-%COMP%]:hover {\n  transform: translateX(4px);\n  box-shadow: var(--shadow-md);\n}\n.contact-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  color: var(--text-dark);\n  margin-bottom: 0.3rem;\n  font-family: var(--font-body);\n  font-weight: 600;\n}\n.contact-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--text-mid);\n  line-height: 1.6;\n}\n.contact-card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--primary);\n}\n.contact-card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--accent);\n}\n.contact-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  background: rgba(30, 58, 95, 0.1);\n  color: var(--primary);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1rem;\n  flex-shrink: 0;\n}\n.contact-map[_ngcontent-%COMP%] {\n  border-radius: var(--radius-md);\n  overflow: hidden;\n  box-shadow: var(--shadow-sm);\n}\n.contact-form-wrap[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: var(--radius-lg);\n  padding: 2.5rem;\n  box-shadow: var(--shadow-sm);\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n}\n@media (max-width: 600px) {\n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1.2rem;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: var(--text-dark);\n  margin-bottom: 0.4rem;\n}\n.input-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.input-wrap[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0.9rem;\n  color: var(--primary);\n  font-size: 0.85rem;\n  z-index: 1;\n}\n.input-wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .input-wrap[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.8rem 0.9rem 0.8rem 2.5rem;\n  border: 1.5px solid #e0e0e0;\n  border-radius: var(--radius-sm);\n  font-size: 0.9rem;\n  font-family: var(--font-body);\n  color: var(--text-dark);\n  background: #f8f9ff;\n  outline: none;\n  transition: border-color 0.3s, box-shadow 0.3s;\n}\n.input-wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .input-wrap[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  border-color: var(--primary);\n  box-shadow: 0 0 0 3px rgba(30, 58, 95, 0.1);\n  background: #fff;\n}\n.input-wrap[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 120px;\n  padding-top: 0.8rem;\n}\n.textarea-wrap[_ngcontent-%COMP%] {\n  align-items: flex-start;\n}\n.textarea-wrap[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  top: 0.9rem;\n}\n.submit-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  justify-content: center;\n  padding: 1rem;\n  font-size: 1rem;\n}\n.contact-success[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 2rem;\n}\n.contact-success[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 3.5rem;\n  color: var(--primary);\n  display: block;\n  margin-bottom: 1rem;\n}\n.contact-success[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: var(--text-dark);\n  margin-bottom: 0.75rem;\n}\n.contact-success[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-mid);\n  margin-bottom: 1.5rem;\n}\n/*# sourceMappingURL=contact.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContactComponent, { className: "ContactComponent", filePath: "src\\app\\components\\contact\\contact.component.ts", lineNumber: 13 });
})();

// src/app/components/footer/footer.component.ts
function FooterComponent_li_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "a", 25);
    \u0275\u0275listener("click", function FooterComponent_li_55_Template_a_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goTo("categories"));
    });
    \u0275\u0275element(2, "i", 26);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const exp_r3 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", exp_r3, " ");
  }
}
gsapWithCSS.registerPlugin(ScrollTrigger2);
var FooterComponent = class _FooterComponent {
  constructor(data, scrollSvc) {
    this.data = data;
    this.scrollSvc = scrollSvc;
    this.currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  }
  ngAfterViewInit() {
    gsapWithCSS.from(".footer-col", {
      scrollTrigger: { trigger: "footer", start: "top 85%" },
      y: 40,
      opacity: 0,
      stagger: 0.12,
      duration: 0.7,
      ease: "power3.out"
    });
  }
  goTo(id) {
    this.scrollSvc.scrollTo(id);
  }
  static {
    this.\u0275fac = function FooterComponent_Factory(t) {
      return new (t || _FooterComponent)(\u0275\u0275directiveInject(DataService), \u0275\u0275directiveInject(ScrollService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FooterComponent, selectors: [["app-footer"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 122, vars: 2, consts: [[1, "footer-top"], [1, "container", "footer-grid"], [1, "footer-col", "footer-brand"], [1, "footer-logo-wrap"], ["src", "https://cdn.yourholiday.me/static/dynimg/partner/37/300x150/3562268-3562267_j-k-new-logo.jpg", "alt", "J K Tours And Travels", "onerror", "this.style.display='none'; this.nextElementSibling.style.display='flex'", 1, "footer-logo-img"], [1, "footer-logo-fallback", 2, "display", "none"], [1, "fas", "fa-globe-americas"], [1, "footer-social"], ["href", "#", "title", "Facebook", 1, "social-btn", 3, "click"], [1, "fab", "fa-facebook-f"], ["href", "#", "title", "Instagram", 1, "social-btn", 3, "click"], [1, "fab", "fa-instagram"], ["href", "#", "title", "Twitter", 1, "social-btn", 3, "click"], [1, "fab", "fa-twitter"], ["href", "#", "title", "YouTube", 1, "social-btn", 3, "click"], [1, "fab", "fa-youtube"], ["href", "#", "title", "WhatsApp", 1, "social-btn", 3, "click"], [1, "fab", "fa-whatsapp"], [1, "footer-currency"], ["selected", ""], [1, "footer-lang"], ["value", ""], ["value", "en-US", "selected", ""], [1, "footer-col"], [4, "ngFor", "ngForOf"], [2, "cursor", "pointer", 3, "click"], [1, "fas", "fa-chevron-right"], [1, "footer-col", "footer-contact"], [1, "contact-item"], [1, "fas", "fa-map-marker-alt"], [1, "fas", "fa-phone"], [1, "fas", "fa-envelope"], [1, "fas", "fa-clock"], [1, "footer-badges"], [1, "fas", "fa-shield-alt"], [1, "fas", "fa-headset"], [1, "fas", "fa-tags"], [1, "footer-bottom"], [1, "container", "footer-bottom-inner"], [1, "footer-bottom-links"]], template: function FooterComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "footer")(1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3);
        \u0275\u0275element(5, "img", 4);
        \u0275\u0275elementStart(6, "div", 5);
        \u0275\u0275element(7, "i", 6);
        \u0275\u0275elementStart(8, "span");
        \u0275\u0275text(9, "JK Tours & Travels");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(10, "p");
        \u0275\u0275text(11, "Tours can be fully customized. Contact our helpful team to create a tour itinerary just for you.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 7)(13, "a", 8);
        \u0275\u0275listener("click", function FooterComponent_Template_a_click_13_listener($event) {
          return $event.preventDefault();
        });
        \u0275\u0275element(14, "i", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "a", 10);
        \u0275\u0275listener("click", function FooterComponent_Template_a_click_15_listener($event) {
          return $event.preventDefault();
        });
        \u0275\u0275element(16, "i", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "a", 12);
        \u0275\u0275listener("click", function FooterComponent_Template_a_click_17_listener($event) {
          return $event.preventDefault();
        });
        \u0275\u0275element(18, "i", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "a", 14);
        \u0275\u0275listener("click", function FooterComponent_Template_a_click_19_listener($event) {
          return $event.preventDefault();
        });
        \u0275\u0275element(20, "i", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "a", 16);
        \u0275\u0275listener("click", function FooterComponent_Template_a_click_21_listener($event) {
          return $event.preventDefault();
        });
        \u0275\u0275element(22, "i", 17);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "div", 18)(24, "label");
        \u0275\u0275text(25, "Currency");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "select")(27, "option");
        \u0275\u0275text(28, "United Arab Emirates Dirham");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "option");
        \u0275\u0275text(30, "Australian Dollar");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "option");
        \u0275\u0275text(32, "Euro");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "option");
        \u0275\u0275text(34, "British Pound Sterling");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "option", 19);
        \u0275\u0275text(36, "Indian Rupee");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "option");
        \u0275\u0275text(38, "New Zealand Dollar");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "option");
        \u0275\u0275text(40, "Singapore Dollar");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "option");
        \u0275\u0275text(42, "US Dollar");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(43, "div", 20)(44, "label");
        \u0275\u0275text(45, "Language");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "select")(47, "option", 21);
        \u0275\u0275text(48, "-- Select --");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "option", 22);
        \u0275\u0275text(50, "English");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(51, "div", 23)(52, "h4");
        \u0275\u0275text(53, "Experiences");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(54, "ul");
        \u0275\u0275template(55, FooterComponent_li_55_Template, 4, 1, "li", 24);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(56, "div", 23)(57, "h4");
        \u0275\u0275text(58, "Quick Links");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(59, "ul")(60, "li")(61, "a", 25);
        \u0275\u0275listener("click", function FooterComponent_Template_a_click_61_listener() {
          return ctx.goTo("destinations");
        });
        \u0275\u0275element(62, "i", 26);
        \u0275\u0275text(63, " Destinations");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(64, "li")(65, "a", 25);
        \u0275\u0275listener("click", function FooterComponent_Template_a_click_65_listener() {
          return ctx.goTo("packages");
        });
        \u0275\u0275element(66, "i", 26);
        \u0275\u0275text(67, " Fixed Departures");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(68, "li")(69, "a", 25);
        \u0275\u0275listener("click", function FooterComponent_Template_a_click_69_listener() {
          return ctx.goTo("packages");
        });
        \u0275\u0275element(70, "i", 26);
        \u0275\u0275text(71, " Tour Packages");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(72, "li")(73, "a", 25);
        \u0275\u0275listener("click", function FooterComponent_Template_a_click_73_listener() {
          return ctx.goTo("about");
        });
        \u0275\u0275element(74, "i", 26);
        \u0275\u0275text(75, " About Us");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(76, "li")(77, "a", 25);
        \u0275\u0275listener("click", function FooterComponent_Template_a_click_77_listener() {
          return ctx.goTo("contact");
        });
        \u0275\u0275element(78, "i", 26);
        \u0275\u0275text(79, " Contact Us");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(80, "li")(81, "a", 25);
        \u0275\u0275listener("click", function FooterComponent_Template_a_click_81_listener() {
          return ctx.goTo("booking");
        });
        \u0275\u0275element(82, "i", 26);
        \u0275\u0275text(83, " Book a Tour");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(84, "div", 27)(85, "h4");
        \u0275\u0275text(86, "Contact Us");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(87, "div", 28);
        \u0275\u0275element(88, "i", 29);
        \u0275\u0275elementStart(89, "span");
        \u0275\u0275text(90, "J K Tours And Travels, Pune, Maharashtra, India");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(91, "div", 28);
        \u0275\u0275element(92, "i", 30);
        \u0275\u0275elementStart(93, "span");
        \u0275\u0275text(94, "+91 94224 21993");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(95, "div", 28);
        \u0275\u0275element(96, "i", 31);
        \u0275\u0275elementStart(97, "span");
        \u0275\u0275text(98, "info@jktourstravels.in");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(99, "div", 28);
        \u0275\u0275element(100, "i", 32);
        \u0275\u0275elementStart(101, "span");
        \u0275\u0275text(102, "Mon\u2013Sat: 9AM\u20137PM | Sun: 10AM\u20134PM");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(103, "div", 33)(104, "span");
        \u0275\u0275element(105, "i", 34);
        \u0275\u0275text(106, " 100% Safe");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(107, "span");
        \u0275\u0275element(108, "i", 35);
        \u0275\u0275text(109, " 24/7 Support");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(110, "span");
        \u0275\u0275element(111, "i", 36);
        \u0275\u0275text(112, " Best Price");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(113, "div", 37)(114, "div", 38)(115, "p");
        \u0275\u0275text(116);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(117, "div", 39)(118, "a", 25);
        \u0275\u0275listener("click", function FooterComponent_Template_a_click_118_listener() {
          return ctx.goTo("home");
        });
        \u0275\u0275text(119, "Privacy Policy");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(120, "a", 25);
        \u0275\u0275listener("click", function FooterComponent_Template_a_click_120_listener() {
          return ctx.goTo("home");
        });
        \u0275\u0275text(121, "Terms of Service");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(55);
        \u0275\u0275property("ngForOf", ctx.data.footerExperiences);
        \u0275\u0275advance(61);
        \u0275\u0275textInterpolate1("\xA9 Copyright ", ctx.currentYear, " J K Tours And Travels, Pune. All Rights Reserved.");
      }
    }, dependencies: [CommonModule, NgForOf], styles: ['\n\nfooter[_ngcontent-%COMP%] {\n  background: #0d1f35;\n  color: rgba(255, 255, 255, 0.8);\n}\n.footer-top[_ngcontent-%COMP%] {\n  padding: 4rem 0;\n}\n.footer-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.6fr 1fr 1fr 1.3fr;\n  gap: 3rem;\n}\n@media (max-width: 1100px) {\n  .footer-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n    gap: 2rem;\n  }\n}\n@media (max-width: 600px) {\n  .footer-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 2rem;\n  }\n}\n.footer-logo-wrap[_ngcontent-%COMP%] {\n  margin-bottom: 1.2rem;\n}\n.footer-logo-img[_ngcontent-%COMP%] {\n  height: 60px;\n  width: auto;\n  object-fit: contain;\n  filter: brightness(0) invert(1);\n  opacity: 1;\n  display: block;\n  min-width: 120px;\n}\n.footer-logo-fallback[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  color: #fff;\n}\n.footer-logo-fallback[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: var(--accent);\n}\n.footer-logo-fallback[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 700;\n  font-family: var(--font-heading);\n}\n.footer-brand[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  line-height: 1.7;\n  margin-bottom: 1.2rem;\n  color: rgba(255, 255, 255, 0.65);\n}\n.footer-social[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  margin-bottom: 1.2rem;\n}\n.social-btn[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.08);\n  color: rgba(255, 255, 255, 0.7);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.85rem;\n  transition: var(--transition);\n}\n.social-btn[_ngcontent-%COMP%]:hover {\n  background: var(--accent);\n  color: #fff;\n  transform: translateY(-3px);\n}\n.footer-currency[_ngcontent-%COMP%], .footer-lang[_ngcontent-%COMP%] {\n  margin-bottom: 0.75rem;\n}\n.footer-currency[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .footer-lang[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.75rem;\n  color: rgba(255, 255, 255, 0.45);\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  margin-bottom: 0.3rem;\n}\n.footer-currency[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .footer-lang[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.07);\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  color: rgba(255, 255, 255, 0.75);\n  padding: 0.4rem 0.7rem;\n  border-radius: var(--radius-sm);\n  font-size: 0.82rem;\n  font-family: var(--font-body);\n  outline: none;\n  width: 100%;\n  cursor: pointer;\n  transition: border-color 0.3s;\n}\n.footer-currency[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, .footer-lang[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  border-color: var(--accent);\n}\n.footer-currency[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%], .footer-lang[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  background: #0a2e1a;\n  color: #fff;\n}\n.footer-col[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #fff;\n  margin-bottom: 1.2rem;\n  font-family: var(--font-body);\n  position: relative;\n  padding-bottom: 0.6rem;\n}\n.footer-col[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 30px;\n  height: 2px;\n  background: var(--accent);\n  border-radius: 1px;\n}\n.footer-col[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n}\n.footer-col[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.footer-col[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: rgba(255, 255, 255, 0.6);\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  transition: var(--transition);\n}\n.footer-col[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.6rem;\n  color: var(--accent);\n}\n.footer-col[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--accent);\n  transform: translateX(4px);\n}\n.contact-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.75rem;\n  margin-bottom: 0.85rem;\n}\n.contact-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--accent);\n  font-size: 0.9rem;\n  margin-top: 2px;\n  flex-shrink: 0;\n  width: 16px;\n}\n.contact-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.84rem;\n  color: rgba(255, 255, 255, 0.65);\n  line-height: 1.5;\n}\n.footer-badges[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n  margin-top: 1rem;\n}\n.footer-badges[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.3rem;\n  font-size: 0.72rem;\n  color: rgba(255, 255, 255, 0.6);\n  background: rgba(255, 255, 255, 0.06);\n  padding: 0.3rem 0.65rem;\n  border-radius: 50px;\n  border: 1px solid rgba(255, 255, 255, 0.08);\n}\n.footer-badges[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--accent);\n  font-size: 0.65rem;\n}\n.footer-bottom[_ngcontent-%COMP%] {\n  border-top: 1px solid rgba(255, 255, 255, 0.08);\n  padding: 1.2rem 0;\n}\n.footer-bottom-inner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 1rem;\n}\n.footer-bottom-inner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: rgba(255, 255, 255, 0.45);\n}\n.footer-bottom-links[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1.5rem;\n}\n.footer-bottom-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: rgba(255, 255, 255, 0.45);\n  transition: color 0.3s;\n}\n.footer-bottom-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--accent);\n}\n/*# sourceMappingURL=footer.component.css.map */'] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FooterComponent, { className: "FooterComponent", filePath: "src\\app\\components\\footer\\footer.component.ts", lineNumber: 17 });
})();

// src/app/app.component.ts
function AppComponent_app_loader_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-loader");
  }
}
function AppComponent_main_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main");
    \u0275\u0275element(1, "app-hero")(2, "app-destinations")(3, "app-deals")(4, "app-categories")(5, "app-scroll-story")(6, "app-map-section")(7, "app-timeline")(8, "app-gallery")(9, "app-testimonials")(10, "app-booking", 8)(11, "app-about")(12, "app-newsletter")(13, "app-contact");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275property("prefilledPackage", ctx_r0.selectedPackage);
  }
}
function AppComponent_router_outlet_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "router-outlet");
  }
}
var AppComponent = class _AppComponent {
  constructor(scrollSvc, router) {
    this.scrollSvc = scrollSvc;
    this.router = router;
    this.loading = true;
    this.selectedPackage = "";
    this.isHomePage = true;
  }
  ngOnInit() {
    setTimeout(() => this.loading = false, 3300);
    this.router.events.pipe(filter((e) => e instanceof NavigationEnd)).subscribe((e) => {
      this.isHomePage = e.url === "/" || e.url === "";
      window.scrollTo(0, 0);
    });
  }
  scrollTop(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  scrollTo(id) {
    this.scrollSvc.scrollTo(id);
  }
  onBookPackage(pkgName) {
    this.selectedPackage = pkgName;
    setTimeout(() => this.scrollSvc.scrollTo("booking"), 50);
  }
  static {
    this.\u0275fac = function AppComponent_Factory(t) {
      return new (t || _AppComponent)(\u0275\u0275directiveInject(ScrollService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 15, vars: 5, consts: [[4, "ngIf"], [1, "floating-cta"], ["href", "https://wa.me/919422421993", "target", "_blank", "title", "WhatsApp", "rel", "noopener noreferrer", 1, "whatsapp"], [1, "fab", "fa-whatsapp"], ["title", "Call Us", 1, "call", 3, "click"], [1, "fas", "fa-phone"], ["title", "Back to Top", 1, "top", 3, "click"], [1, "fas", "fa-chevron-up"], [3, "prefilledPackage"]], template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, AppComponent_app_loader_0_Template, 1, 0, "app-loader", 0);
        \u0275\u0275elementStart(1, "div");
        \u0275\u0275element(2, "app-topbar")(3, "app-navbar");
        \u0275\u0275template(4, AppComponent_main_4_Template, 14, 1, "main", 0)(5, AppComponent_router_outlet_5_Template, 1, 0, "router-outlet", 0);
        \u0275\u0275element(6, "app-footer")(7, "app-sticky-bar");
        \u0275\u0275elementStart(8, "div", 1)(9, "a", 2);
        \u0275\u0275element(10, "i", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "button", 4);
        \u0275\u0275listener("click", function AppComponent_Template_button_click_11_listener() {
          return ctx.scrollTo("contact");
        });
        \u0275\u0275element(12, "i", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "button", 6);
        \u0275\u0275listener("click", function AppComponent_Template_button_click_13_listener($event) {
          return ctx.scrollTop($event);
        });
        \u0275\u0275element(14, "i", 7);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275classProp("hidden", ctx.loading);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.isHomePage);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.isHomePage);
      }
    }, dependencies: [
      CommonModule,
      NgIf,
      RouterOutlet,
      LoaderComponent,
      TopbarComponent,
      NavbarComponent,
      StickyBarComponent,
      HeroComponent,
      DestinationsComponent,
      DealsComponent,
      CategoriesComponent,
      ScrollStoryComponent,
      MapSectionComponent,
      TimelineComponent,
      GalleryComponent,
      TestimonialsComponent,
      BookingComponent,
      AboutComponent,
      NewsletterComponent,
      ContactComponent,
      FooterComponent
    ], styles: ["\n\n.hidden[_ngcontent-%COMP%] {\n  visibility: hidden;\n  opacity: 0;\n}\n/*# sourceMappingURL=app.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src\\app\\app.component.ts", lineNumber: 39 });
})();

// node_modules/@angular/animations/fesm2022/animations.mjs
var AnimationMetadataType;
(function(AnimationMetadataType2) {
  AnimationMetadataType2[AnimationMetadataType2["State"] = 0] = "State";
  AnimationMetadataType2[AnimationMetadataType2["Transition"] = 1] = "Transition";
  AnimationMetadataType2[AnimationMetadataType2["Sequence"] = 2] = "Sequence";
  AnimationMetadataType2[AnimationMetadataType2["Group"] = 3] = "Group";
  AnimationMetadataType2[AnimationMetadataType2["Animate"] = 4] = "Animate";
  AnimationMetadataType2[AnimationMetadataType2["Keyframes"] = 5] = "Keyframes";
  AnimationMetadataType2[AnimationMetadataType2["Style"] = 6] = "Style";
  AnimationMetadataType2[AnimationMetadataType2["Trigger"] = 7] = "Trigger";
  AnimationMetadataType2[AnimationMetadataType2["Reference"] = 8] = "Reference";
  AnimationMetadataType2[AnimationMetadataType2["AnimateChild"] = 9] = "AnimateChild";
  AnimationMetadataType2[AnimationMetadataType2["AnimateRef"] = 10] = "AnimateRef";
  AnimationMetadataType2[AnimationMetadataType2["Query"] = 11] = "Query";
  AnimationMetadataType2[AnimationMetadataType2["Stagger"] = 12] = "Stagger";
})(AnimationMetadataType || (AnimationMetadataType = {}));
var AUTO_STYLE = "*";
function sequence(steps, options = null) {
  return {
    type: AnimationMetadataType.Sequence,
    steps,
    options
  };
}
function style(tokens) {
  return {
    type: AnimationMetadataType.Style,
    styles: tokens,
    offset: null
  };
}
var AnimationBuilder = class _AnimationBuilder {
  static {
    this.\u0275fac = function AnimationBuilder_Factory(t) {
      return new (t || _AnimationBuilder)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _AnimationBuilder,
      factory: () => (() => inject(BrowserAnimationBuilder))(),
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnimationBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root",
      useFactory: () => inject(BrowserAnimationBuilder)
    }]
  }], null, null);
})();
var AnimationFactory = class {
};
var BrowserAnimationBuilder = class _BrowserAnimationBuilder extends AnimationBuilder {
  constructor(rootRenderer, doc) {
    super();
    this.animationModuleType = inject(ANIMATION_MODULE_TYPE, {
      optional: true
    });
    this._nextAnimationId = 0;
    const typeData = {
      id: "0",
      encapsulation: ViewEncapsulation$1.None,
      styles: [],
      data: {
        animation: []
      }
    };
    this._renderer = rootRenderer.createRenderer(doc.body, typeData);
    if (this.animationModuleType === null && !isAnimationRenderer(this._renderer)) {
      throw new RuntimeError(3600, (typeof ngDevMode === "undefined" || ngDevMode) && "Angular detected that the `AnimationBuilder` was injected, but animation support was not enabled. Please make sure that you enable animations in your application by calling `provideAnimations()` or `provideAnimationsAsync()` function.");
    }
  }
  build(animation) {
    const id = this._nextAnimationId;
    this._nextAnimationId++;
    const entry = Array.isArray(animation) ? sequence(animation) : animation;
    issueAnimationCommand(this._renderer, null, id, "register", [entry]);
    return new BrowserAnimationFactory(id, this._renderer);
  }
  static {
    this.\u0275fac = function BrowserAnimationBuilder_Factory(t) {
      return new (t || _BrowserAnimationBuilder)(\u0275\u0275inject(RendererFactory2), \u0275\u0275inject(DOCUMENT));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _BrowserAnimationBuilder,
      factory: _BrowserAnimationBuilder.\u0275fac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrowserAnimationBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: RendererFactory2
  }, {
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], null);
})();
var BrowserAnimationFactory = class extends AnimationFactory {
  constructor(_id, _renderer) {
    super();
    this._id = _id;
    this._renderer = _renderer;
  }
  create(element, options) {
    return new RendererAnimationPlayer(this._id, element, options || {}, this._renderer);
  }
};
var RendererAnimationPlayer = class {
  constructor(id, element, options, _renderer) {
    this.id = id;
    this.element = element;
    this._renderer = _renderer;
    this.parentPlayer = null;
    this._started = false;
    this.totalTime = 0;
    this._command("create", options);
  }
  _listen(eventName, callback) {
    return this._renderer.listen(this.element, `@@${this.id}:${eventName}`, callback);
  }
  _command(command, ...args) {
    issueAnimationCommand(this._renderer, this.element, this.id, command, args);
  }
  onDone(fn) {
    this._listen("done", fn);
  }
  onStart(fn) {
    this._listen("start", fn);
  }
  onDestroy(fn) {
    this._listen("destroy", fn);
  }
  init() {
    this._command("init");
  }
  hasStarted() {
    return this._started;
  }
  play() {
    this._command("play");
    this._started = true;
  }
  pause() {
    this._command("pause");
  }
  restart() {
    this._command("restart");
  }
  finish() {
    this._command("finish");
  }
  destroy() {
    this._command("destroy");
  }
  reset() {
    this._command("reset");
    this._started = false;
  }
  setPosition(p) {
    this._command("setPosition", p);
  }
  getPosition() {
    return unwrapAnimationRenderer(this._renderer)?.engine?.players[this.id]?.getPosition() ?? 0;
  }
};
function issueAnimationCommand(renderer, element, id, command, args) {
  renderer.setProperty(element, `@@${id}:${command}`, args);
}
function unwrapAnimationRenderer(renderer) {
  const type = renderer.\u0275type;
  if (type === 0) {
    return renderer;
  } else if (type === 1) {
    return renderer.animationRenderer;
  }
  return null;
}
function isAnimationRenderer(renderer) {
  const type = renderer.\u0275type;
  return type === 0 || type === 1;
}
var NoopAnimationPlayer = class {
  constructor(duration = 0, delay = 0) {
    this._onDoneFns = [];
    this._onStartFns = [];
    this._onDestroyFns = [];
    this._originalOnDoneFns = [];
    this._originalOnStartFns = [];
    this._started = false;
    this._destroyed = false;
    this._finished = false;
    this._position = 0;
    this.parentPlayer = null;
    this.totalTime = duration + delay;
  }
  _onFinish() {
    if (!this._finished) {
      this._finished = true;
      this._onDoneFns.forEach((fn) => fn());
      this._onDoneFns = [];
    }
  }
  onStart(fn) {
    this._originalOnStartFns.push(fn);
    this._onStartFns.push(fn);
  }
  onDone(fn) {
    this._originalOnDoneFns.push(fn);
    this._onDoneFns.push(fn);
  }
  onDestroy(fn) {
    this._onDestroyFns.push(fn);
  }
  hasStarted() {
    return this._started;
  }
  init() {
  }
  play() {
    if (!this.hasStarted()) {
      this._onStart();
      this.triggerMicrotask();
    }
    this._started = true;
  }
  /** @internal */
  triggerMicrotask() {
    queueMicrotask(() => this._onFinish());
  }
  _onStart() {
    this._onStartFns.forEach((fn) => fn());
    this._onStartFns = [];
  }
  pause() {
  }
  restart() {
  }
  finish() {
    this._onFinish();
  }
  destroy() {
    if (!this._destroyed) {
      this._destroyed = true;
      if (!this.hasStarted()) {
        this._onStart();
      }
      this.finish();
      this._onDestroyFns.forEach((fn) => fn());
      this._onDestroyFns = [];
    }
  }
  reset() {
    this._started = false;
    this._finished = false;
    this._onStartFns = this._originalOnStartFns;
    this._onDoneFns = this._originalOnDoneFns;
  }
  setPosition(position) {
    this._position = this.totalTime ? position * this.totalTime : 1;
  }
  getPosition() {
    return this.totalTime ? this._position / this.totalTime : 1;
  }
  /** @internal */
  triggerCallback(phaseName) {
    const methods = phaseName == "start" ? this._onStartFns : this._onDoneFns;
    methods.forEach((fn) => fn());
    methods.length = 0;
  }
};
var AnimationGroupPlayer = class {
  constructor(_players) {
    this._onDoneFns = [];
    this._onStartFns = [];
    this._finished = false;
    this._started = false;
    this._destroyed = false;
    this._onDestroyFns = [];
    this.parentPlayer = null;
    this.totalTime = 0;
    this.players = _players;
    let doneCount = 0;
    let destroyCount = 0;
    let startCount = 0;
    const total = this.players.length;
    if (total == 0) {
      queueMicrotask(() => this._onFinish());
    } else {
      this.players.forEach((player) => {
        player.onDone(() => {
          if (++doneCount == total) {
            this._onFinish();
          }
        });
        player.onDestroy(() => {
          if (++destroyCount == total) {
            this._onDestroy();
          }
        });
        player.onStart(() => {
          if (++startCount == total) {
            this._onStart();
          }
        });
      });
    }
    this.totalTime = this.players.reduce((time, player) => Math.max(time, player.totalTime), 0);
  }
  _onFinish() {
    if (!this._finished) {
      this._finished = true;
      this._onDoneFns.forEach((fn) => fn());
      this._onDoneFns = [];
    }
  }
  init() {
    this.players.forEach((player) => player.init());
  }
  onStart(fn) {
    this._onStartFns.push(fn);
  }
  _onStart() {
    if (!this.hasStarted()) {
      this._started = true;
      this._onStartFns.forEach((fn) => fn());
      this._onStartFns = [];
    }
  }
  onDone(fn) {
    this._onDoneFns.push(fn);
  }
  onDestroy(fn) {
    this._onDestroyFns.push(fn);
  }
  hasStarted() {
    return this._started;
  }
  play() {
    if (!this.parentPlayer) {
      this.init();
    }
    this._onStart();
    this.players.forEach((player) => player.play());
  }
  pause() {
    this.players.forEach((player) => player.pause());
  }
  restart() {
    this.players.forEach((player) => player.restart());
  }
  finish() {
    this._onFinish();
    this.players.forEach((player) => player.finish());
  }
  destroy() {
    this._onDestroy();
  }
  _onDestroy() {
    if (!this._destroyed) {
      this._destroyed = true;
      this._onFinish();
      this.players.forEach((player) => player.destroy());
      this._onDestroyFns.forEach((fn) => fn());
      this._onDestroyFns = [];
    }
  }
  reset() {
    this.players.forEach((player) => player.reset());
    this._destroyed = false;
    this._finished = false;
    this._started = false;
  }
  setPosition(p) {
    const timeAtPosition = p * this.totalTime;
    this.players.forEach((player) => {
      const position = player.totalTime ? Math.min(1, timeAtPosition / player.totalTime) : 1;
      player.setPosition(position);
    });
  }
  getPosition() {
    const longestPlayer = this.players.reduce((longestSoFar, player) => {
      const newPlayerIsLongest = longestSoFar === null || player.totalTime > longestSoFar.totalTime;
      return newPlayerIsLongest ? player : longestSoFar;
    }, null);
    return longestPlayer != null ? longestPlayer.getPosition() : 0;
  }
  beforeDestroy() {
    this.players.forEach((player) => {
      if (player.beforeDestroy) {
        player.beforeDestroy();
      }
    });
  }
  /** @internal */
  triggerCallback(phaseName) {
    const methods = phaseName == "start" ? this._onStartFns : this._onDoneFns;
    methods.forEach((fn) => fn());
    methods.length = 0;
  }
};
var \u0275PRE_STYLE = "!";

// node_modules/@angular/animations/fesm2022/browser.mjs
var LINE_START = "\n - ";
function invalidTimingValue(exp) {
  return new RuntimeError(3e3, ngDevMode && `The provided timing value "${exp}" is invalid.`);
}
function negativeStepValue() {
  return new RuntimeError(3100, ngDevMode && "Duration values below 0 are not allowed for this animation step.");
}
function negativeDelayValue() {
  return new RuntimeError(3101, ngDevMode && "Delay values below 0 are not allowed for this animation step.");
}
function invalidStyleParams(varName) {
  return new RuntimeError(3001, ngDevMode && `Unable to resolve the local animation param ${varName} in the given list of values`);
}
function invalidParamValue(varName) {
  return new RuntimeError(3003, ngDevMode && `Please provide a value for the animation param ${varName}`);
}
function invalidNodeType(nodeType) {
  return new RuntimeError(3004, ngDevMode && `Unable to resolve animation metadata node #${nodeType}`);
}
function invalidCssUnitValue(userProvidedProperty, value) {
  return new RuntimeError(3005, ngDevMode && `Please provide a CSS unit value for ${userProvidedProperty}:${value}`);
}
function invalidTrigger() {
  return new RuntimeError(3006, ngDevMode && "animation triggers cannot be prefixed with an `@` sign (e.g. trigger('@foo', [...]))");
}
function invalidDefinition() {
  return new RuntimeError(3007, ngDevMode && "only state() and transition() definitions can sit inside of a trigger()");
}
function invalidState(metadataName, missingSubs) {
  return new RuntimeError(3008, ngDevMode && `state("${metadataName}", ...) must define default values for all the following style substitutions: ${missingSubs.join(", ")}`);
}
function invalidStyleValue(value) {
  return new RuntimeError(3002, ngDevMode && `The provided style string value ${value} is not allowed.`);
}
function invalidParallelAnimation(prop, firstStart, firstEnd, secondStart, secondEnd) {
  return new RuntimeError(3010, ngDevMode && `The CSS property "${prop}" that exists between the times of "${firstStart}ms" and "${firstEnd}ms" is also being animated in a parallel animation between the times of "${secondStart}ms" and "${secondEnd}ms"`);
}
function invalidKeyframes() {
  return new RuntimeError(3011, ngDevMode && `keyframes() must be placed inside of a call to animate()`);
}
function invalidOffset() {
  return new RuntimeError(3012, ngDevMode && `Please ensure that all keyframe offsets are between 0 and 1`);
}
function keyframeOffsetsOutOfOrder() {
  return new RuntimeError(3200, ngDevMode && `Please ensure that all keyframe offsets are in order`);
}
function keyframesMissingOffsets() {
  return new RuntimeError(3202, ngDevMode && `Not all style() steps within the declared keyframes() contain offsets`);
}
function invalidStagger() {
  return new RuntimeError(3013, ngDevMode && `stagger() can only be used inside of query()`);
}
function invalidQuery(selector) {
  return new RuntimeError(3014, ngDevMode && `\`query("${selector}")\` returned zero elements. (Use \`query("${selector}", { optional: true })\` if you wish to allow this.)`);
}
function invalidExpression(expr) {
  return new RuntimeError(3015, ngDevMode && `The provided transition expression "${expr}" is not supported`);
}
function invalidTransitionAlias(alias) {
  return new RuntimeError(3016, ngDevMode && `The transition alias value "${alias}" is not supported`);
}
function triggerBuildFailed(name, errors) {
  return new RuntimeError(3404, ngDevMode && `The animation trigger "${name}" has failed to build due to the following errors:
 - ${errors.map((err) => err.message).join("\n - ")}`);
}
function animationFailed(errors) {
  return new RuntimeError(3502, ngDevMode && `Unable to animate due to the following errors:${LINE_START}${errors.map((err) => err.message).join(LINE_START)}`);
}
function registerFailed(errors) {
  return new RuntimeError(3503, ngDevMode && `Unable to build the animation due to the following errors: ${errors.map((err) => err.message).join("\n")}`);
}
function missingOrDestroyedAnimation() {
  return new RuntimeError(3300, ngDevMode && "The requested animation doesn't exist or has already been destroyed");
}
function createAnimationFailed(errors) {
  return new RuntimeError(3504, ngDevMode && `Unable to create the animation due to the following errors:${errors.map((err) => err.message).join("\n")}`);
}
function missingPlayer(id) {
  return new RuntimeError(3301, ngDevMode && `Unable to find the timeline player referenced by ${id}`);
}
function missingTrigger(phase, name) {
  return new RuntimeError(3302, ngDevMode && `Unable to listen on the animation trigger event "${phase}" because the animation trigger "${name}" doesn't exist!`);
}
function missingEvent(name) {
  return new RuntimeError(3303, ngDevMode && `Unable to listen on the animation trigger "${name}" because the provided event is undefined!`);
}
function unsupportedTriggerEvent(phase, name) {
  return new RuntimeError(3400, ngDevMode && `The provided animation trigger event "${phase}" for the animation trigger "${name}" is not supported!`);
}
function unregisteredTrigger(name) {
  return new RuntimeError(3401, ngDevMode && `The provided animation trigger "${name}" has not been registered!`);
}
function triggerTransitionsFailed(errors) {
  return new RuntimeError(3402, ngDevMode && `Unable to process animations due to the following failed trigger transitions
 ${errors.map((err) => err.message).join("\n")}`);
}
function transitionFailed(name, errors) {
  return new RuntimeError(3505, ngDevMode && `@${name} has failed due to:
 ${errors.map((err) => err.message).join("\n- ")}`);
}
var ANIMATABLE_PROP_SET = /* @__PURE__ */ new Set(["-moz-outline-radius", "-moz-outline-radius-bottomleft", "-moz-outline-radius-bottomright", "-moz-outline-radius-topleft", "-moz-outline-radius-topright", "-ms-grid-columns", "-ms-grid-rows", "-webkit-line-clamp", "-webkit-text-fill-color", "-webkit-text-stroke", "-webkit-text-stroke-color", "accent-color", "all", "backdrop-filter", "background", "background-color", "background-position", "background-size", "block-size", "border", "border-block-end", "border-block-end-color", "border-block-end-width", "border-block-start", "border-block-start-color", "border-block-start-width", "border-bottom", "border-bottom-color", "border-bottom-left-radius", "border-bottom-right-radius", "border-bottom-width", "border-color", "border-end-end-radius", "border-end-start-radius", "border-image-outset", "border-image-slice", "border-image-width", "border-inline-end", "border-inline-end-color", "border-inline-end-width", "border-inline-start", "border-inline-start-color", "border-inline-start-width", "border-left", "border-left-color", "border-left-width", "border-radius", "border-right", "border-right-color", "border-right-width", "border-start-end-radius", "border-start-start-radius", "border-top", "border-top-color", "border-top-left-radius", "border-top-right-radius", "border-top-width", "border-width", "bottom", "box-shadow", "caret-color", "clip", "clip-path", "color", "column-count", "column-gap", "column-rule", "column-rule-color", "column-rule-width", "column-width", "columns", "filter", "flex", "flex-basis", "flex-grow", "flex-shrink", "font", "font-size", "font-size-adjust", "font-stretch", "font-variation-settings", "font-weight", "gap", "grid-column-gap", "grid-gap", "grid-row-gap", "grid-template-columns", "grid-template-rows", "height", "inline-size", "input-security", "inset", "inset-block", "inset-block-end", "inset-block-start", "inset-inline", "inset-inline-end", "inset-inline-start", "left", "letter-spacing", "line-clamp", "line-height", "margin", "margin-block-end", "margin-block-start", "margin-bottom", "margin-inline-end", "margin-inline-start", "margin-left", "margin-right", "margin-top", "mask", "mask-border", "mask-position", "mask-size", "max-block-size", "max-height", "max-inline-size", "max-lines", "max-width", "min-block-size", "min-height", "min-inline-size", "min-width", "object-position", "offset", "offset-anchor", "offset-distance", "offset-path", "offset-position", "offset-rotate", "opacity", "order", "outline", "outline-color", "outline-offset", "outline-width", "padding", "padding-block-end", "padding-block-start", "padding-bottom", "padding-inline-end", "padding-inline-start", "padding-left", "padding-right", "padding-top", "perspective", "perspective-origin", "right", "rotate", "row-gap", "scale", "scroll-margin", "scroll-margin-block", "scroll-margin-block-end", "scroll-margin-block-start", "scroll-margin-bottom", "scroll-margin-inline", "scroll-margin-inline-end", "scroll-margin-inline-start", "scroll-margin-left", "scroll-margin-right", "scroll-margin-top", "scroll-padding", "scroll-padding-block", "scroll-padding-block-end", "scroll-padding-block-start", "scroll-padding-bottom", "scroll-padding-inline", "scroll-padding-inline-end", "scroll-padding-inline-start", "scroll-padding-left", "scroll-padding-right", "scroll-padding-top", "scroll-snap-coordinate", "scroll-snap-destination", "scrollbar-color", "shape-image-threshold", "shape-margin", "shape-outside", "tab-size", "text-decoration", "text-decoration-color", "text-decoration-thickness", "text-emphasis", "text-emphasis-color", "text-indent", "text-shadow", "text-underline-offset", "top", "transform", "transform-origin", "translate", "vertical-align", "visibility", "width", "word-spacing", "z-index", "zoom"]);
function optimizeGroupPlayer(players) {
  switch (players.length) {
    case 0:
      return new NoopAnimationPlayer();
    case 1:
      return players[0];
    default:
      return new AnimationGroupPlayer(players);
  }
}
function normalizeKeyframes$1(normalizer, keyframes, preStyles = /* @__PURE__ */ new Map(), postStyles = /* @__PURE__ */ new Map()) {
  const errors = [];
  const normalizedKeyframes = [];
  let previousOffset = -1;
  let previousKeyframe = null;
  keyframes.forEach((kf) => {
    const offset = kf.get("offset");
    const isSameOffset = offset == previousOffset;
    const normalizedKeyframe = isSameOffset && previousKeyframe || /* @__PURE__ */ new Map();
    kf.forEach((val, prop) => {
      let normalizedProp = prop;
      let normalizedValue = val;
      if (prop !== "offset") {
        normalizedProp = normalizer.normalizePropertyName(normalizedProp, errors);
        switch (normalizedValue) {
          case \u0275PRE_STYLE:
            normalizedValue = preStyles.get(prop);
            break;
          case AUTO_STYLE:
            normalizedValue = postStyles.get(prop);
            break;
          default:
            normalizedValue = normalizer.normalizeStyleValue(prop, normalizedProp, normalizedValue, errors);
            break;
        }
      }
      normalizedKeyframe.set(normalizedProp, normalizedValue);
    });
    if (!isSameOffset) {
      normalizedKeyframes.push(normalizedKeyframe);
    }
    previousKeyframe = normalizedKeyframe;
    previousOffset = offset;
  });
  if (errors.length) {
    throw animationFailed(errors);
  }
  return normalizedKeyframes;
}
function listenOnPlayer(player, eventName, event, callback) {
  switch (eventName) {
    case "start":
      player.onStart(() => callback(event && copyAnimationEvent(event, "start", player)));
      break;
    case "done":
      player.onDone(() => callback(event && copyAnimationEvent(event, "done", player)));
      break;
    case "destroy":
      player.onDestroy(() => callback(event && copyAnimationEvent(event, "destroy", player)));
      break;
  }
}
function copyAnimationEvent(e, phaseName, player) {
  const totalTime = player.totalTime;
  const disabled = player.disabled ? true : false;
  const event = makeAnimationEvent(e.element, e.triggerName, e.fromState, e.toState, phaseName || e.phaseName, totalTime == void 0 ? e.totalTime : totalTime, disabled);
  const data = e["_data"];
  if (data != null) {
    event["_data"] = data;
  }
  return event;
}
function makeAnimationEvent(element, triggerName, fromState, toState, phaseName = "", totalTime = 0, disabled) {
  return {
    element,
    triggerName,
    fromState,
    toState,
    phaseName,
    totalTime,
    disabled: !!disabled
  };
}
function getOrSetDefaultValue(map, key, defaultValue) {
  let value = map.get(key);
  if (!value) {
    map.set(key, value = defaultValue);
  }
  return value;
}
function parseTimelineCommand(command) {
  const separatorPos = command.indexOf(":");
  const id = command.substring(1, separatorPos);
  const action = command.slice(separatorPos + 1);
  return [id, action];
}
var documentElement = /* @__PURE__ */ (() => typeof document === "undefined" ? null : document.documentElement)();
function getParentElement(element) {
  const parent = element.parentNode || element.host || null;
  if (parent === documentElement) {
    return null;
  }
  return parent;
}
function containsVendorPrefix(prop) {
  return prop.substring(1, 6) == "ebkit";
}
var _CACHED_BODY = null;
var _IS_WEBKIT = false;
function validateStyleProperty(prop) {
  if (!_CACHED_BODY) {
    _CACHED_BODY = getBodyNode() || {};
    _IS_WEBKIT = _CACHED_BODY.style ? "WebkitAppearance" in _CACHED_BODY.style : false;
  }
  let result = true;
  if (_CACHED_BODY.style && !containsVendorPrefix(prop)) {
    result = prop in _CACHED_BODY.style;
    if (!result && _IS_WEBKIT) {
      const camelProp = "Webkit" + prop.charAt(0).toUpperCase() + prop.slice(1);
      result = camelProp in _CACHED_BODY.style;
    }
  }
  return result;
}
function validateWebAnimatableStyleProperty(prop) {
  return ANIMATABLE_PROP_SET.has(prop);
}
function getBodyNode() {
  if (typeof document != "undefined") {
    return document.body;
  }
  return null;
}
function containsElement(elm1, elm2) {
  while (elm2) {
    if (elm2 === elm1) {
      return true;
    }
    elm2 = getParentElement(elm2);
  }
  return false;
}
function invokeQuery(element, selector, multi) {
  if (multi) {
    return Array.from(element.querySelectorAll(selector));
  }
  const elem = element.querySelector(selector);
  return elem ? [elem] : [];
}
var NoopAnimationDriver = class _NoopAnimationDriver {
  /**
   * @returns Whether `prop` is a valid CSS property
   */
  validateStyleProperty(prop) {
    return validateStyleProperty(prop);
  }
  /**
   * @deprecated unused
   */
  matchesElement(_element, _selector) {
    return false;
  }
  /**
   *
   * @returns Whether elm1 contains elm2.
   */
  containsElement(elm1, elm2) {
    return containsElement(elm1, elm2);
  }
  /**
   * @returns Rhe parent of the given element or `null` if the element is the `document`
   */
  getParentElement(element) {
    return getParentElement(element);
  }
  /**
   * @returns The result of the query selector on the element. The array will contain up to 1 item
   *     if `multi` is  `false`.
   */
  query(element, selector, multi) {
    return invokeQuery(element, selector, multi);
  }
  /**
   * @returns The `defaultValue` or empty string
   */
  computeStyle(element, prop, defaultValue) {
    return defaultValue || "";
  }
  /**
   * @returns An `NoopAnimationPlayer`
   */
  animate(element, keyframes, duration, delay, easing, previousPlayers = [], scrubberAccessRequested) {
    return new NoopAnimationPlayer(duration, delay);
  }
  static {
    this.\u0275fac = function NoopAnimationDriver_Factory(t) {
      return new (t || _NoopAnimationDriver)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _NoopAnimationDriver,
      factory: _NoopAnimationDriver.\u0275fac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NoopAnimationDriver, [{
    type: Injectable
  }], null, null);
})();
var AnimationDriver = class {
  static {
    this.NOOP = new NoopAnimationDriver();
  }
};
var AnimationStyleNormalizer = class {
};
var ONE_SECOND = 1e3;
var SUBSTITUTION_EXPR_START = "{{";
var SUBSTITUTION_EXPR_END = "}}";
var ENTER_CLASSNAME = "ng-enter";
var LEAVE_CLASSNAME = "ng-leave";
var NG_TRIGGER_CLASSNAME = "ng-trigger";
var NG_TRIGGER_SELECTOR = ".ng-trigger";
var NG_ANIMATING_CLASSNAME = "ng-animating";
var NG_ANIMATING_SELECTOR = ".ng-animating";
function resolveTimingValue(value) {
  if (typeof value == "number")
    return value;
  const matches = value.match(/^(-?[\.\d]+)(m?s)/);
  if (!matches || matches.length < 2)
    return 0;
  return _convertTimeValueToMS(parseFloat(matches[1]), matches[2]);
}
function _convertTimeValueToMS(value, unit) {
  switch (unit) {
    case "s":
      return value * ONE_SECOND;
    default:
      return value;
  }
}
function resolveTiming(timings, errors, allowNegativeValues) {
  return timings.hasOwnProperty("duration") ? timings : parseTimeExpression(timings, errors, allowNegativeValues);
}
function parseTimeExpression(exp, errors, allowNegativeValues) {
  const regex = /^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i;
  let duration;
  let delay = 0;
  let easing = "";
  if (typeof exp === "string") {
    const matches = exp.match(regex);
    if (matches === null) {
      errors.push(invalidTimingValue(exp));
      return {
        duration: 0,
        delay: 0,
        easing: ""
      };
    }
    duration = _convertTimeValueToMS(parseFloat(matches[1]), matches[2]);
    const delayMatch = matches[3];
    if (delayMatch != null) {
      delay = _convertTimeValueToMS(parseFloat(delayMatch), matches[4]);
    }
    const easingVal = matches[5];
    if (easingVal) {
      easing = easingVal;
    }
  } else {
    duration = exp;
  }
  if (!allowNegativeValues) {
    let containsErrors = false;
    let startIndex = errors.length;
    if (duration < 0) {
      errors.push(negativeStepValue());
      containsErrors = true;
    }
    if (delay < 0) {
      errors.push(negativeDelayValue());
      containsErrors = true;
    }
    if (containsErrors) {
      errors.splice(startIndex, 0, invalidTimingValue(exp));
    }
  }
  return {
    duration,
    delay,
    easing
  };
}
function normalizeKeyframes(keyframes) {
  if (!keyframes.length) {
    return [];
  }
  if (keyframes[0] instanceof Map) {
    return keyframes;
  }
  return keyframes.map((kf) => new Map(Object.entries(kf)));
}
function setStyles(element, styles, formerStyles) {
  styles.forEach((val, prop) => {
    const camelProp = dashCaseToCamelCase(prop);
    if (formerStyles && !formerStyles.has(prop)) {
      formerStyles.set(prop, element.style[camelProp]);
    }
    element.style[camelProp] = val;
  });
}
function eraseStyles(element, styles) {
  styles.forEach((_, prop) => {
    const camelProp = dashCaseToCamelCase(prop);
    element.style[camelProp] = "";
  });
}
function normalizeAnimationEntry(steps) {
  if (Array.isArray(steps)) {
    if (steps.length == 1)
      return steps[0];
    return sequence(steps);
  }
  return steps;
}
function validateStyleParams(value, options, errors) {
  const params = options.params || {};
  const matches = extractStyleParams(value);
  if (matches.length) {
    matches.forEach((varName) => {
      if (!params.hasOwnProperty(varName)) {
        errors.push(invalidStyleParams(varName));
      }
    });
  }
}
var PARAM_REGEX = new RegExp(`${SUBSTITUTION_EXPR_START}\\s*(.+?)\\s*${SUBSTITUTION_EXPR_END}`, "g");
function extractStyleParams(value) {
  let params = [];
  if (typeof value === "string") {
    let match;
    while (match = PARAM_REGEX.exec(value)) {
      params.push(match[1]);
    }
    PARAM_REGEX.lastIndex = 0;
  }
  return params;
}
function interpolateParams(value, params, errors) {
  const original = `${value}`;
  const str = original.replace(PARAM_REGEX, (_, varName) => {
    let localVal = params[varName];
    if (localVal == null) {
      errors.push(invalidParamValue(varName));
      localVal = "";
    }
    return localVal.toString();
  });
  return str == original ? value : str;
}
var DASH_CASE_REGEXP = /-+([a-z0-9])/g;
function dashCaseToCamelCase(input) {
  return input.replace(DASH_CASE_REGEXP, (...m) => m[1].toUpperCase());
}
function camelCaseToDashCase(input) {
  return input.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
function allowPreviousPlayerStylesMerge(duration, delay) {
  return duration === 0 || delay === 0;
}
function balancePreviousStylesIntoKeyframes(element, keyframes, previousStyles) {
  if (previousStyles.size && keyframes.length) {
    let startingKeyframe = keyframes[0];
    let missingStyleProps = [];
    previousStyles.forEach((val, prop) => {
      if (!startingKeyframe.has(prop)) {
        missingStyleProps.push(prop);
      }
      startingKeyframe.set(prop, val);
    });
    if (missingStyleProps.length) {
      for (let i = 1; i < keyframes.length; i++) {
        let kf = keyframes[i];
        missingStyleProps.forEach((prop) => kf.set(prop, computeStyle(element, prop)));
      }
    }
  }
  return keyframes;
}
function visitDslNode(visitor, node, context) {
  switch (node.type) {
    case AnimationMetadataType.Trigger:
      return visitor.visitTrigger(node, context);
    case AnimationMetadataType.State:
      return visitor.visitState(node, context);
    case AnimationMetadataType.Transition:
      return visitor.visitTransition(node, context);
    case AnimationMetadataType.Sequence:
      return visitor.visitSequence(node, context);
    case AnimationMetadataType.Group:
      return visitor.visitGroup(node, context);
    case AnimationMetadataType.Animate:
      return visitor.visitAnimate(node, context);
    case AnimationMetadataType.Keyframes:
      return visitor.visitKeyframes(node, context);
    case AnimationMetadataType.Style:
      return visitor.visitStyle(node, context);
    case AnimationMetadataType.Reference:
      return visitor.visitReference(node, context);
    case AnimationMetadataType.AnimateChild:
      return visitor.visitAnimateChild(node, context);
    case AnimationMetadataType.AnimateRef:
      return visitor.visitAnimateRef(node, context);
    case AnimationMetadataType.Query:
      return visitor.visitQuery(node, context);
    case AnimationMetadataType.Stagger:
      return visitor.visitStagger(node, context);
    default:
      throw invalidNodeType(node.type);
  }
}
function computeStyle(element, prop) {
  return window.getComputedStyle(element)[prop];
}
var DIMENSIONAL_PROP_SET = /* @__PURE__ */ new Set(["width", "height", "minWidth", "minHeight", "maxWidth", "maxHeight", "left", "top", "bottom", "right", "fontSize", "outlineWidth", "outlineOffset", "paddingTop", "paddingLeft", "paddingBottom", "paddingRight", "marginTop", "marginLeft", "marginBottom", "marginRight", "borderRadius", "borderWidth", "borderTopWidth", "borderLeftWidth", "borderRightWidth", "borderBottomWidth", "textIndent", "perspective"]);
var WebAnimationsStyleNormalizer = class extends AnimationStyleNormalizer {
  normalizePropertyName(propertyName, errors) {
    return dashCaseToCamelCase(propertyName);
  }
  normalizeStyleValue(userProvidedProperty, normalizedProperty, value, errors) {
    let unit = "";
    const strVal = value.toString().trim();
    if (DIMENSIONAL_PROP_SET.has(normalizedProperty) && value !== 0 && value !== "0") {
      if (typeof value === "number") {
        unit = "px";
      } else {
        const valAndSuffixMatch = value.match(/^[+-]?[\d\.]+([a-z]*)$/);
        if (valAndSuffixMatch && valAndSuffixMatch[1].length == 0) {
          errors.push(invalidCssUnitValue(userProvidedProperty, value));
        }
      }
    }
    return strVal + unit;
  }
};
function createListOfWarnings(warnings) {
  const LINE_START2 = "\n - ";
  return `${LINE_START2}${warnings.filter(Boolean).map((warning) => warning).join(LINE_START2)}`;
}
function warnTriggerBuild(name, warnings) {
  (typeof ngDevMode === "undefined" || ngDevMode) && console.warn(`The animation trigger "${name}" has built with the following warnings:${createListOfWarnings(warnings)}`);
}
function warnRegister(warnings) {
  (typeof ngDevMode === "undefined" || ngDevMode) && console.warn(`Animation built with the following warnings:${createListOfWarnings(warnings)}`);
}
function pushUnrecognizedPropertiesWarning(warnings, props) {
  if (props.length) {
    warnings.push(`The following provided properties are not recognized: ${props.join(", ")}`);
  }
}
var ANY_STATE = "*";
function parseTransitionExpr(transitionValue, errors) {
  const expressions = [];
  if (typeof transitionValue == "string") {
    transitionValue.split(/\s*,\s*/).forEach((str) => parseInnerTransitionStr(str, expressions, errors));
  } else {
    expressions.push(transitionValue);
  }
  return expressions;
}
function parseInnerTransitionStr(eventStr, expressions, errors) {
  if (eventStr[0] == ":") {
    const result = parseAnimationAlias(eventStr, errors);
    if (typeof result == "function") {
      expressions.push(result);
      return;
    }
    eventStr = result;
  }
  const match = eventStr.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);
  if (match == null || match.length < 4) {
    errors.push(invalidExpression(eventStr));
    return expressions;
  }
  const fromState = match[1];
  const separator = match[2];
  const toState = match[3];
  expressions.push(makeLambdaFromStates(fromState, toState));
  const isFullAnyStateExpr = fromState == ANY_STATE && toState == ANY_STATE;
  if (separator[0] == "<" && !isFullAnyStateExpr) {
    expressions.push(makeLambdaFromStates(toState, fromState));
  }
  return;
}
function parseAnimationAlias(alias, errors) {
  switch (alias) {
    case ":enter":
      return "void => *";
    case ":leave":
      return "* => void";
    case ":increment":
      return (fromState, toState) => parseFloat(toState) > parseFloat(fromState);
    case ":decrement":
      return (fromState, toState) => parseFloat(toState) < parseFloat(fromState);
    default:
      errors.push(invalidTransitionAlias(alias));
      return "* => *";
  }
}
var TRUE_BOOLEAN_VALUES = /* @__PURE__ */ new Set(["true", "1"]);
var FALSE_BOOLEAN_VALUES = /* @__PURE__ */ new Set(["false", "0"]);
function makeLambdaFromStates(lhs, rhs) {
  const LHS_MATCH_BOOLEAN = TRUE_BOOLEAN_VALUES.has(lhs) || FALSE_BOOLEAN_VALUES.has(lhs);
  const RHS_MATCH_BOOLEAN = TRUE_BOOLEAN_VALUES.has(rhs) || FALSE_BOOLEAN_VALUES.has(rhs);
  return (fromState, toState) => {
    let lhsMatch = lhs == ANY_STATE || lhs == fromState;
    let rhsMatch = rhs == ANY_STATE || rhs == toState;
    if (!lhsMatch && LHS_MATCH_BOOLEAN && typeof fromState === "boolean") {
      lhsMatch = fromState ? TRUE_BOOLEAN_VALUES.has(lhs) : FALSE_BOOLEAN_VALUES.has(lhs);
    }
    if (!rhsMatch && RHS_MATCH_BOOLEAN && typeof toState === "boolean") {
      rhsMatch = toState ? TRUE_BOOLEAN_VALUES.has(rhs) : FALSE_BOOLEAN_VALUES.has(rhs);
    }
    return lhsMatch && rhsMatch;
  };
}
var SELF_TOKEN = ":self";
var SELF_TOKEN_REGEX = new RegExp(`s*${SELF_TOKEN}s*,?`, "g");
function buildAnimationAst(driver, metadata, errors, warnings) {
  return new AnimationAstBuilderVisitor(driver).build(metadata, errors, warnings);
}
var ROOT_SELECTOR = "";
var AnimationAstBuilderVisitor = class {
  constructor(_driver) {
    this._driver = _driver;
  }
  build(metadata, errors, warnings) {
    const context = new AnimationAstBuilderContext(errors);
    this._resetContextStyleTimingState(context);
    const ast = visitDslNode(this, normalizeAnimationEntry(metadata), context);
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (context.unsupportedCSSPropertiesFound.size) {
        pushUnrecognizedPropertiesWarning(warnings, [...context.unsupportedCSSPropertiesFound.keys()]);
      }
    }
    return ast;
  }
  _resetContextStyleTimingState(context) {
    context.currentQuerySelector = ROOT_SELECTOR;
    context.collectedStyles = /* @__PURE__ */ new Map();
    context.collectedStyles.set(ROOT_SELECTOR, /* @__PURE__ */ new Map());
    context.currentTime = 0;
  }
  visitTrigger(metadata, context) {
    let queryCount = context.queryCount = 0;
    let depCount = context.depCount = 0;
    const states = [];
    const transitions = [];
    if (metadata.name.charAt(0) == "@") {
      context.errors.push(invalidTrigger());
    }
    metadata.definitions.forEach((def) => {
      this._resetContextStyleTimingState(context);
      if (def.type == AnimationMetadataType.State) {
        const stateDef = def;
        const name = stateDef.name;
        name.toString().split(/\s*,\s*/).forEach((n) => {
          stateDef.name = n;
          states.push(this.visitState(stateDef, context));
        });
        stateDef.name = name;
      } else if (def.type == AnimationMetadataType.Transition) {
        const transition = this.visitTransition(def, context);
        queryCount += transition.queryCount;
        depCount += transition.depCount;
        transitions.push(transition);
      } else {
        context.errors.push(invalidDefinition());
      }
    });
    return {
      type: AnimationMetadataType.Trigger,
      name: metadata.name,
      states,
      transitions,
      queryCount,
      depCount,
      options: null
    };
  }
  visitState(metadata, context) {
    const styleAst = this.visitStyle(metadata.styles, context);
    const astParams = metadata.options && metadata.options.params || null;
    if (styleAst.containsDynamicStyles) {
      const missingSubs = /* @__PURE__ */ new Set();
      const params = astParams || {};
      styleAst.styles.forEach((style2) => {
        if (style2 instanceof Map) {
          style2.forEach((value) => {
            extractStyleParams(value).forEach((sub) => {
              if (!params.hasOwnProperty(sub)) {
                missingSubs.add(sub);
              }
            });
          });
        }
      });
      if (missingSubs.size) {
        context.errors.push(invalidState(metadata.name, [...missingSubs.values()]));
      }
    }
    return {
      type: AnimationMetadataType.State,
      name: metadata.name,
      style: styleAst,
      options: astParams ? {
        params: astParams
      } : null
    };
  }
  visitTransition(metadata, context) {
    context.queryCount = 0;
    context.depCount = 0;
    const animation = visitDslNode(this, normalizeAnimationEntry(metadata.animation), context);
    const matchers = parseTransitionExpr(metadata.expr, context.errors);
    return {
      type: AnimationMetadataType.Transition,
      matchers,
      animation,
      queryCount: context.queryCount,
      depCount: context.depCount,
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitSequence(metadata, context) {
    return {
      type: AnimationMetadataType.Sequence,
      steps: metadata.steps.map((s) => visitDslNode(this, s, context)),
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitGroup(metadata, context) {
    const currentTime = context.currentTime;
    let furthestTime = 0;
    const steps = metadata.steps.map((step) => {
      context.currentTime = currentTime;
      const innerAst = visitDslNode(this, step, context);
      furthestTime = Math.max(furthestTime, context.currentTime);
      return innerAst;
    });
    context.currentTime = furthestTime;
    return {
      type: AnimationMetadataType.Group,
      steps,
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitAnimate(metadata, context) {
    const timingAst = constructTimingAst(metadata.timings, context.errors);
    context.currentAnimateTimings = timingAst;
    let styleAst;
    let styleMetadata = metadata.styles ? metadata.styles : style({});
    if (styleMetadata.type == AnimationMetadataType.Keyframes) {
      styleAst = this.visitKeyframes(styleMetadata, context);
    } else {
      let styleMetadata2 = metadata.styles;
      let isEmpty = false;
      if (!styleMetadata2) {
        isEmpty = true;
        const newStyleData = {};
        if (timingAst.easing) {
          newStyleData["easing"] = timingAst.easing;
        }
        styleMetadata2 = style(newStyleData);
      }
      context.currentTime += timingAst.duration + timingAst.delay;
      const _styleAst = this.visitStyle(styleMetadata2, context);
      _styleAst.isEmptyStep = isEmpty;
      styleAst = _styleAst;
    }
    context.currentAnimateTimings = null;
    return {
      type: AnimationMetadataType.Animate,
      timings: timingAst,
      style: styleAst,
      options: null
    };
  }
  visitStyle(metadata, context) {
    const ast = this._makeStyleAst(metadata, context);
    this._validateStyleAst(ast, context);
    return ast;
  }
  _makeStyleAst(metadata, context) {
    const styles = [];
    const metadataStyles = Array.isArray(metadata.styles) ? metadata.styles : [metadata.styles];
    for (let styleTuple of metadataStyles) {
      if (typeof styleTuple === "string") {
        if (styleTuple === AUTO_STYLE) {
          styles.push(styleTuple);
        } else {
          context.errors.push(invalidStyleValue(styleTuple));
        }
      } else {
        styles.push(new Map(Object.entries(styleTuple)));
      }
    }
    let containsDynamicStyles = false;
    let collectedEasing = null;
    styles.forEach((styleData) => {
      if (styleData instanceof Map) {
        if (styleData.has("easing")) {
          collectedEasing = styleData.get("easing");
          styleData.delete("easing");
        }
        if (!containsDynamicStyles) {
          for (let value of styleData.values()) {
            if (value.toString().indexOf(SUBSTITUTION_EXPR_START) >= 0) {
              containsDynamicStyles = true;
              break;
            }
          }
        }
      }
    });
    return {
      type: AnimationMetadataType.Style,
      styles,
      easing: collectedEasing,
      offset: metadata.offset,
      containsDynamicStyles,
      options: null
    };
  }
  _validateStyleAst(ast, context) {
    const timings = context.currentAnimateTimings;
    let endTime = context.currentTime;
    let startTime = context.currentTime;
    if (timings && startTime > 0) {
      startTime -= timings.duration + timings.delay;
    }
    ast.styles.forEach((tuple) => {
      if (typeof tuple === "string")
        return;
      tuple.forEach((value, prop) => {
        if (typeof ngDevMode === "undefined" || ngDevMode) {
          if (!this._driver.validateStyleProperty(prop)) {
            tuple.delete(prop);
            context.unsupportedCSSPropertiesFound.add(prop);
            return;
          }
        }
        const collectedStyles = context.collectedStyles.get(context.currentQuerySelector);
        const collectedEntry = collectedStyles.get(prop);
        let updateCollectedStyle = true;
        if (collectedEntry) {
          if (startTime != endTime && startTime >= collectedEntry.startTime && endTime <= collectedEntry.endTime) {
            context.errors.push(invalidParallelAnimation(prop, collectedEntry.startTime, collectedEntry.endTime, startTime, endTime));
            updateCollectedStyle = false;
          }
          startTime = collectedEntry.startTime;
        }
        if (updateCollectedStyle) {
          collectedStyles.set(prop, {
            startTime,
            endTime
          });
        }
        if (context.options) {
          validateStyleParams(value, context.options, context.errors);
        }
      });
    });
  }
  visitKeyframes(metadata, context) {
    const ast = {
      type: AnimationMetadataType.Keyframes,
      styles: [],
      options: null
    };
    if (!context.currentAnimateTimings) {
      context.errors.push(invalidKeyframes());
      return ast;
    }
    const MAX_KEYFRAME_OFFSET = 1;
    let totalKeyframesWithOffsets = 0;
    const offsets = [];
    let offsetsOutOfOrder = false;
    let keyframesOutOfRange = false;
    let previousOffset = 0;
    const keyframes = metadata.steps.map((styles) => {
      const style2 = this._makeStyleAst(styles, context);
      let offsetVal = style2.offset != null ? style2.offset : consumeOffset(style2.styles);
      let offset = 0;
      if (offsetVal != null) {
        totalKeyframesWithOffsets++;
        offset = style2.offset = offsetVal;
      }
      keyframesOutOfRange = keyframesOutOfRange || offset < 0 || offset > 1;
      offsetsOutOfOrder = offsetsOutOfOrder || offset < previousOffset;
      previousOffset = offset;
      offsets.push(offset);
      return style2;
    });
    if (keyframesOutOfRange) {
      context.errors.push(invalidOffset());
    }
    if (offsetsOutOfOrder) {
      context.errors.push(keyframeOffsetsOutOfOrder());
    }
    const length = metadata.steps.length;
    let generatedOffset = 0;
    if (totalKeyframesWithOffsets > 0 && totalKeyframesWithOffsets < length) {
      context.errors.push(keyframesMissingOffsets());
    } else if (totalKeyframesWithOffsets == 0) {
      generatedOffset = MAX_KEYFRAME_OFFSET / (length - 1);
    }
    const limit = length - 1;
    const currentTime = context.currentTime;
    const currentAnimateTimings = context.currentAnimateTimings;
    const animateDuration = currentAnimateTimings.duration;
    keyframes.forEach((kf, i) => {
      const offset = generatedOffset > 0 ? i == limit ? 1 : generatedOffset * i : offsets[i];
      const durationUpToThisFrame = offset * animateDuration;
      context.currentTime = currentTime + currentAnimateTimings.delay + durationUpToThisFrame;
      currentAnimateTimings.duration = durationUpToThisFrame;
      this._validateStyleAst(kf, context);
      kf.offset = offset;
      ast.styles.push(kf);
    });
    return ast;
  }
  visitReference(metadata, context) {
    return {
      type: AnimationMetadataType.Reference,
      animation: visitDslNode(this, normalizeAnimationEntry(metadata.animation), context),
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitAnimateChild(metadata, context) {
    context.depCount++;
    return {
      type: AnimationMetadataType.AnimateChild,
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitAnimateRef(metadata, context) {
    return {
      type: AnimationMetadataType.AnimateRef,
      animation: this.visitReference(metadata.animation, context),
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitQuery(metadata, context) {
    const parentSelector = context.currentQuerySelector;
    const options = metadata.options || {};
    context.queryCount++;
    context.currentQuery = metadata;
    const [selector, includeSelf] = normalizeSelector(metadata.selector);
    context.currentQuerySelector = parentSelector.length ? parentSelector + " " + selector : selector;
    getOrSetDefaultValue(context.collectedStyles, context.currentQuerySelector, /* @__PURE__ */ new Map());
    const animation = visitDslNode(this, normalizeAnimationEntry(metadata.animation), context);
    context.currentQuery = null;
    context.currentQuerySelector = parentSelector;
    return {
      type: AnimationMetadataType.Query,
      selector,
      limit: options.limit || 0,
      optional: !!options.optional,
      includeSelf,
      animation,
      originalSelector: metadata.selector,
      options: normalizeAnimationOptions(metadata.options)
    };
  }
  visitStagger(metadata, context) {
    if (!context.currentQuery) {
      context.errors.push(invalidStagger());
    }
    const timings = metadata.timings === "full" ? {
      duration: 0,
      delay: 0,
      easing: "full"
    } : resolveTiming(metadata.timings, context.errors, true);
    return {
      type: AnimationMetadataType.Stagger,
      animation: visitDslNode(this, normalizeAnimationEntry(metadata.animation), context),
      timings,
      options: null
    };
  }
};
function normalizeSelector(selector) {
  const hasAmpersand = selector.split(/\s*,\s*/).find((token) => token == SELF_TOKEN) ? true : false;
  if (hasAmpersand) {
    selector = selector.replace(SELF_TOKEN_REGEX, "");
  }
  selector = selector.replace(/@\*/g, NG_TRIGGER_SELECTOR).replace(/@\w+/g, (match) => NG_TRIGGER_SELECTOR + "-" + match.slice(1)).replace(/:animating/g, NG_ANIMATING_SELECTOR);
  return [selector, hasAmpersand];
}
function normalizeParams(obj) {
  return obj ? __spreadValues({}, obj) : null;
}
var AnimationAstBuilderContext = class {
  constructor(errors) {
    this.errors = errors;
    this.queryCount = 0;
    this.depCount = 0;
    this.currentTransition = null;
    this.currentQuery = null;
    this.currentQuerySelector = null;
    this.currentAnimateTimings = null;
    this.currentTime = 0;
    this.collectedStyles = /* @__PURE__ */ new Map();
    this.options = null;
    this.unsupportedCSSPropertiesFound = /* @__PURE__ */ new Set();
  }
};
function consumeOffset(styles) {
  if (typeof styles == "string")
    return null;
  let offset = null;
  if (Array.isArray(styles)) {
    styles.forEach((styleTuple) => {
      if (styleTuple instanceof Map && styleTuple.has("offset")) {
        const obj = styleTuple;
        offset = parseFloat(obj.get("offset"));
        obj.delete("offset");
      }
    });
  } else if (styles instanceof Map && styles.has("offset")) {
    const obj = styles;
    offset = parseFloat(obj.get("offset"));
    obj.delete("offset");
  }
  return offset;
}
function constructTimingAst(value, errors) {
  if (value.hasOwnProperty("duration")) {
    return value;
  }
  if (typeof value == "number") {
    const duration = resolveTiming(value, errors).duration;
    return makeTimingAst(duration, 0, "");
  }
  const strValue = value;
  const isDynamic = strValue.split(/\s+/).some((v) => v.charAt(0) == "{" && v.charAt(1) == "{");
  if (isDynamic) {
    const ast = makeTimingAst(0, 0, "");
    ast.dynamic = true;
    ast.strValue = strValue;
    return ast;
  }
  const timings = resolveTiming(strValue, errors);
  return makeTimingAst(timings.duration, timings.delay, timings.easing);
}
function normalizeAnimationOptions(options) {
  if (options) {
    options = __spreadValues({}, options);
    if (options["params"]) {
      options["params"] = normalizeParams(options["params"]);
    }
  } else {
    options = {};
  }
  return options;
}
function makeTimingAst(duration, delay, easing) {
  return {
    duration,
    delay,
    easing
  };
}
function createTimelineInstruction(element, keyframes, preStyleProps, postStyleProps, duration, delay, easing = null, subTimeline = false) {
  return {
    type: 1,
    element,
    keyframes,
    preStyleProps,
    postStyleProps,
    duration,
    delay,
    totalTime: duration + delay,
    easing,
    subTimeline
  };
}
var ElementInstructionMap = class {
  constructor() {
    this._map = /* @__PURE__ */ new Map();
  }
  get(element) {
    return this._map.get(element) || [];
  }
  append(element, instructions) {
    let existingInstructions = this._map.get(element);
    if (!existingInstructions) {
      this._map.set(element, existingInstructions = []);
    }
    existingInstructions.push(...instructions);
  }
  has(element) {
    return this._map.has(element);
  }
  clear() {
    this._map.clear();
  }
};
var ONE_FRAME_IN_MILLISECONDS = 1;
var ENTER_TOKEN = ":enter";
var ENTER_TOKEN_REGEX = new RegExp(ENTER_TOKEN, "g");
var LEAVE_TOKEN = ":leave";
var LEAVE_TOKEN_REGEX = new RegExp(LEAVE_TOKEN, "g");
function buildAnimationTimelines(driver, rootElement, ast, enterClassName, leaveClassName, startingStyles = /* @__PURE__ */ new Map(), finalStyles = /* @__PURE__ */ new Map(), options, subInstructions, errors = []) {
  return new AnimationTimelineBuilderVisitor().buildKeyframes(driver, rootElement, ast, enterClassName, leaveClassName, startingStyles, finalStyles, options, subInstructions, errors);
}
var AnimationTimelineBuilderVisitor = class {
  buildKeyframes(driver, rootElement, ast, enterClassName, leaveClassName, startingStyles, finalStyles, options, subInstructions, errors = []) {
    subInstructions = subInstructions || new ElementInstructionMap();
    const context = new AnimationTimelineContext(driver, rootElement, subInstructions, enterClassName, leaveClassName, errors, []);
    context.options = options;
    const delay = options.delay ? resolveTimingValue(options.delay) : 0;
    context.currentTimeline.delayNextStep(delay);
    context.currentTimeline.setStyles([startingStyles], null, context.errors, options);
    visitDslNode(this, ast, context);
    const timelines = context.timelines.filter((timeline) => timeline.containsAnimation());
    if (timelines.length && finalStyles.size) {
      let lastRootTimeline;
      for (let i = timelines.length - 1; i >= 0; i--) {
        const timeline = timelines[i];
        if (timeline.element === rootElement) {
          lastRootTimeline = timeline;
          break;
        }
      }
      if (lastRootTimeline && !lastRootTimeline.allowOnlyTimelineStyles()) {
        lastRootTimeline.setStyles([finalStyles], null, context.errors, options);
      }
    }
    return timelines.length ? timelines.map((timeline) => timeline.buildKeyframes()) : [createTimelineInstruction(rootElement, [], [], [], 0, delay, "", false)];
  }
  visitTrigger(ast, context) {
  }
  visitState(ast, context) {
  }
  visitTransition(ast, context) {
  }
  visitAnimateChild(ast, context) {
    const elementInstructions = context.subInstructions.get(context.element);
    if (elementInstructions) {
      const innerContext = context.createSubContext(ast.options);
      const startTime = context.currentTimeline.currentTime;
      const endTime = this._visitSubInstructions(elementInstructions, innerContext, innerContext.options);
      if (startTime != endTime) {
        context.transformIntoNewTimeline(endTime);
      }
    }
    context.previousNode = ast;
  }
  visitAnimateRef(ast, context) {
    const innerContext = context.createSubContext(ast.options);
    innerContext.transformIntoNewTimeline();
    this._applyAnimationRefDelays([ast.options, ast.animation.options], context, innerContext);
    this.visitReference(ast.animation, innerContext);
    context.transformIntoNewTimeline(innerContext.currentTimeline.currentTime);
    context.previousNode = ast;
  }
  _applyAnimationRefDelays(animationsRefsOptions, context, innerContext) {
    for (const animationRefOptions of animationsRefsOptions) {
      const animationDelay = animationRefOptions?.delay;
      if (animationDelay) {
        const animationDelayValue = typeof animationDelay === "number" ? animationDelay : resolveTimingValue(interpolateParams(animationDelay, animationRefOptions?.params ?? {}, context.errors));
        innerContext.delayNextStep(animationDelayValue);
      }
    }
  }
  _visitSubInstructions(instructions, context, options) {
    const startTime = context.currentTimeline.currentTime;
    let furthestTime = startTime;
    const duration = options.duration != null ? resolveTimingValue(options.duration) : null;
    const delay = options.delay != null ? resolveTimingValue(options.delay) : null;
    if (duration !== 0) {
      instructions.forEach((instruction) => {
        const instructionTimings = context.appendInstructionToTimeline(instruction, duration, delay);
        furthestTime = Math.max(furthestTime, instructionTimings.duration + instructionTimings.delay);
      });
    }
    return furthestTime;
  }
  visitReference(ast, context) {
    context.updateOptions(ast.options, true);
    visitDslNode(this, ast.animation, context);
    context.previousNode = ast;
  }
  visitSequence(ast, context) {
    const subContextCount = context.subContextCount;
    let ctx = context;
    const options = ast.options;
    if (options && (options.params || options.delay)) {
      ctx = context.createSubContext(options);
      ctx.transformIntoNewTimeline();
      if (options.delay != null) {
        if (ctx.previousNode.type == AnimationMetadataType.Style) {
          ctx.currentTimeline.snapshotCurrentStyles();
          ctx.previousNode = DEFAULT_NOOP_PREVIOUS_NODE;
        }
        const delay = resolveTimingValue(options.delay);
        ctx.delayNextStep(delay);
      }
    }
    if (ast.steps.length) {
      ast.steps.forEach((s) => visitDslNode(this, s, ctx));
      ctx.currentTimeline.applyStylesToKeyframe();
      if (ctx.subContextCount > subContextCount) {
        ctx.transformIntoNewTimeline();
      }
    }
    context.previousNode = ast;
  }
  visitGroup(ast, context) {
    const innerTimelines = [];
    let furthestTime = context.currentTimeline.currentTime;
    const delay = ast.options && ast.options.delay ? resolveTimingValue(ast.options.delay) : 0;
    ast.steps.forEach((s) => {
      const innerContext = context.createSubContext(ast.options);
      if (delay) {
        innerContext.delayNextStep(delay);
      }
      visitDslNode(this, s, innerContext);
      furthestTime = Math.max(furthestTime, innerContext.currentTimeline.currentTime);
      innerTimelines.push(innerContext.currentTimeline);
    });
    innerTimelines.forEach((timeline) => context.currentTimeline.mergeTimelineCollectedStyles(timeline));
    context.transformIntoNewTimeline(furthestTime);
    context.previousNode = ast;
  }
  _visitTiming(ast, context) {
    if (ast.dynamic) {
      const strValue = ast.strValue;
      const timingValue = context.params ? interpolateParams(strValue, context.params, context.errors) : strValue;
      return resolveTiming(timingValue, context.errors);
    } else {
      return {
        duration: ast.duration,
        delay: ast.delay,
        easing: ast.easing
      };
    }
  }
  visitAnimate(ast, context) {
    const timings = context.currentAnimateTimings = this._visitTiming(ast.timings, context);
    const timeline = context.currentTimeline;
    if (timings.delay) {
      context.incrementTime(timings.delay);
      timeline.snapshotCurrentStyles();
    }
    const style2 = ast.style;
    if (style2.type == AnimationMetadataType.Keyframes) {
      this.visitKeyframes(style2, context);
    } else {
      context.incrementTime(timings.duration);
      this.visitStyle(style2, context);
      timeline.applyStylesToKeyframe();
    }
    context.currentAnimateTimings = null;
    context.previousNode = ast;
  }
  visitStyle(ast, context) {
    const timeline = context.currentTimeline;
    const timings = context.currentAnimateTimings;
    if (!timings && timeline.hasCurrentStyleProperties()) {
      timeline.forwardFrame();
    }
    const easing = timings && timings.easing || ast.easing;
    if (ast.isEmptyStep) {
      timeline.applyEmptyStep(easing);
    } else {
      timeline.setStyles(ast.styles, easing, context.errors, context.options);
    }
    context.previousNode = ast;
  }
  visitKeyframes(ast, context) {
    const currentAnimateTimings = context.currentAnimateTimings;
    const startTime = context.currentTimeline.duration;
    const duration = currentAnimateTimings.duration;
    const innerContext = context.createSubContext();
    const innerTimeline = innerContext.currentTimeline;
    innerTimeline.easing = currentAnimateTimings.easing;
    ast.styles.forEach((step) => {
      const offset = step.offset || 0;
      innerTimeline.forwardTime(offset * duration);
      innerTimeline.setStyles(step.styles, step.easing, context.errors, context.options);
      innerTimeline.applyStylesToKeyframe();
    });
    context.currentTimeline.mergeTimelineCollectedStyles(innerTimeline);
    context.transformIntoNewTimeline(startTime + duration);
    context.previousNode = ast;
  }
  visitQuery(ast, context) {
    const startTime = context.currentTimeline.currentTime;
    const options = ast.options || {};
    const delay = options.delay ? resolveTimingValue(options.delay) : 0;
    if (delay && (context.previousNode.type === AnimationMetadataType.Style || startTime == 0 && context.currentTimeline.hasCurrentStyleProperties())) {
      context.currentTimeline.snapshotCurrentStyles();
      context.previousNode = DEFAULT_NOOP_PREVIOUS_NODE;
    }
    let furthestTime = startTime;
    const elms = context.invokeQuery(ast.selector, ast.originalSelector, ast.limit, ast.includeSelf, options.optional ? true : false, context.errors);
    context.currentQueryTotal = elms.length;
    let sameElementTimeline = null;
    elms.forEach((element, i) => {
      context.currentQueryIndex = i;
      const innerContext = context.createSubContext(ast.options, element);
      if (delay) {
        innerContext.delayNextStep(delay);
      }
      if (element === context.element) {
        sameElementTimeline = innerContext.currentTimeline;
      }
      visitDslNode(this, ast.animation, innerContext);
      innerContext.currentTimeline.applyStylesToKeyframe();
      const endTime = innerContext.currentTimeline.currentTime;
      furthestTime = Math.max(furthestTime, endTime);
    });
    context.currentQueryIndex = 0;
    context.currentQueryTotal = 0;
    context.transformIntoNewTimeline(furthestTime);
    if (sameElementTimeline) {
      context.currentTimeline.mergeTimelineCollectedStyles(sameElementTimeline);
      context.currentTimeline.snapshotCurrentStyles();
    }
    context.previousNode = ast;
  }
  visitStagger(ast, context) {
    const parentContext = context.parentContext;
    const tl = context.currentTimeline;
    const timings = ast.timings;
    const duration = Math.abs(timings.duration);
    const maxTime = duration * (context.currentQueryTotal - 1);
    let delay = duration * context.currentQueryIndex;
    let staggerTransformer = timings.duration < 0 ? "reverse" : timings.easing;
    switch (staggerTransformer) {
      case "reverse":
        delay = maxTime - delay;
        break;
      case "full":
        delay = parentContext.currentStaggerTime;
        break;
    }
    const timeline = context.currentTimeline;
    if (delay) {
      timeline.delayNextStep(delay);
    }
    const startingTime = timeline.currentTime;
    visitDslNode(this, ast.animation, context);
    context.previousNode = ast;
    parentContext.currentStaggerTime = tl.currentTime - startingTime + (tl.startTime - parentContext.currentTimeline.startTime);
  }
};
var DEFAULT_NOOP_PREVIOUS_NODE = {};
var AnimationTimelineContext = class _AnimationTimelineContext {
  constructor(_driver, element, subInstructions, _enterClassName, _leaveClassName, errors, timelines, initialTimeline) {
    this._driver = _driver;
    this.element = element;
    this.subInstructions = subInstructions;
    this._enterClassName = _enterClassName;
    this._leaveClassName = _leaveClassName;
    this.errors = errors;
    this.timelines = timelines;
    this.parentContext = null;
    this.currentAnimateTimings = null;
    this.previousNode = DEFAULT_NOOP_PREVIOUS_NODE;
    this.subContextCount = 0;
    this.options = {};
    this.currentQueryIndex = 0;
    this.currentQueryTotal = 0;
    this.currentStaggerTime = 0;
    this.currentTimeline = initialTimeline || new TimelineBuilder(this._driver, element, 0);
    timelines.push(this.currentTimeline);
  }
  get params() {
    return this.options.params;
  }
  updateOptions(options, skipIfExists) {
    if (!options)
      return;
    const newOptions = options;
    let optionsToUpdate = this.options;
    if (newOptions.duration != null) {
      optionsToUpdate.duration = resolveTimingValue(newOptions.duration);
    }
    if (newOptions.delay != null) {
      optionsToUpdate.delay = resolveTimingValue(newOptions.delay);
    }
    const newParams = newOptions.params;
    if (newParams) {
      let paramsToUpdate = optionsToUpdate.params;
      if (!paramsToUpdate) {
        paramsToUpdate = this.options.params = {};
      }
      Object.keys(newParams).forEach((name) => {
        if (!skipIfExists || !paramsToUpdate.hasOwnProperty(name)) {
          paramsToUpdate[name] = interpolateParams(newParams[name], paramsToUpdate, this.errors);
        }
      });
    }
  }
  _copyOptions() {
    const options = {};
    if (this.options) {
      const oldParams = this.options.params;
      if (oldParams) {
        const params = options["params"] = {};
        Object.keys(oldParams).forEach((name) => {
          params[name] = oldParams[name];
        });
      }
    }
    return options;
  }
  createSubContext(options = null, element, newTime) {
    const target = element || this.element;
    const context = new _AnimationTimelineContext(this._driver, target, this.subInstructions, this._enterClassName, this._leaveClassName, this.errors, this.timelines, this.currentTimeline.fork(target, newTime || 0));
    context.previousNode = this.previousNode;
    context.currentAnimateTimings = this.currentAnimateTimings;
    context.options = this._copyOptions();
    context.updateOptions(options);
    context.currentQueryIndex = this.currentQueryIndex;
    context.currentQueryTotal = this.currentQueryTotal;
    context.parentContext = this;
    this.subContextCount++;
    return context;
  }
  transformIntoNewTimeline(newTime) {
    this.previousNode = DEFAULT_NOOP_PREVIOUS_NODE;
    this.currentTimeline = this.currentTimeline.fork(this.element, newTime);
    this.timelines.push(this.currentTimeline);
    return this.currentTimeline;
  }
  appendInstructionToTimeline(instruction, duration, delay) {
    const updatedTimings = {
      duration: duration != null ? duration : instruction.duration,
      delay: this.currentTimeline.currentTime + (delay != null ? delay : 0) + instruction.delay,
      easing: ""
    };
    const builder = new SubTimelineBuilder(this._driver, instruction.element, instruction.keyframes, instruction.preStyleProps, instruction.postStyleProps, updatedTimings, instruction.stretchStartingKeyframe);
    this.timelines.push(builder);
    return updatedTimings;
  }
  incrementTime(time) {
    this.currentTimeline.forwardTime(this.currentTimeline.duration + time);
  }
  delayNextStep(delay) {
    if (delay > 0) {
      this.currentTimeline.delayNextStep(delay);
    }
  }
  invokeQuery(selector, originalSelector, limit, includeSelf, optional, errors) {
    let results = [];
    if (includeSelf) {
      results.push(this.element);
    }
    if (selector.length > 0) {
      selector = selector.replace(ENTER_TOKEN_REGEX, "." + this._enterClassName);
      selector = selector.replace(LEAVE_TOKEN_REGEX, "." + this._leaveClassName);
      const multi = limit != 1;
      let elements = this._driver.query(this.element, selector, multi);
      if (limit !== 0) {
        elements = limit < 0 ? elements.slice(elements.length + limit, elements.length) : elements.slice(0, limit);
      }
      results.push(...elements);
    }
    if (!optional && results.length == 0) {
      errors.push(invalidQuery(originalSelector));
    }
    return results;
  }
};
var TimelineBuilder = class _TimelineBuilder {
  constructor(_driver, element, startTime, _elementTimelineStylesLookup) {
    this._driver = _driver;
    this.element = element;
    this.startTime = startTime;
    this._elementTimelineStylesLookup = _elementTimelineStylesLookup;
    this.duration = 0;
    this.easing = null;
    this._previousKeyframe = /* @__PURE__ */ new Map();
    this._currentKeyframe = /* @__PURE__ */ new Map();
    this._keyframes = /* @__PURE__ */ new Map();
    this._styleSummary = /* @__PURE__ */ new Map();
    this._localTimelineStyles = /* @__PURE__ */ new Map();
    this._pendingStyles = /* @__PURE__ */ new Map();
    this._backFill = /* @__PURE__ */ new Map();
    this._currentEmptyStepKeyframe = null;
    if (!this._elementTimelineStylesLookup) {
      this._elementTimelineStylesLookup = /* @__PURE__ */ new Map();
    }
    this._globalTimelineStyles = this._elementTimelineStylesLookup.get(element);
    if (!this._globalTimelineStyles) {
      this._globalTimelineStyles = this._localTimelineStyles;
      this._elementTimelineStylesLookup.set(element, this._localTimelineStyles);
    }
    this._loadKeyframe();
  }
  containsAnimation() {
    switch (this._keyframes.size) {
      case 0:
        return false;
      case 1:
        return this.hasCurrentStyleProperties();
      default:
        return true;
    }
  }
  hasCurrentStyleProperties() {
    return this._currentKeyframe.size > 0;
  }
  get currentTime() {
    return this.startTime + this.duration;
  }
  delayNextStep(delay) {
    const hasPreStyleStep = this._keyframes.size === 1 && this._pendingStyles.size;
    if (this.duration || hasPreStyleStep) {
      this.forwardTime(this.currentTime + delay);
      if (hasPreStyleStep) {
        this.snapshotCurrentStyles();
      }
    } else {
      this.startTime += delay;
    }
  }
  fork(element, currentTime) {
    this.applyStylesToKeyframe();
    return new _TimelineBuilder(this._driver, element, currentTime || this.currentTime, this._elementTimelineStylesLookup);
  }
  _loadKeyframe() {
    if (this._currentKeyframe) {
      this._previousKeyframe = this._currentKeyframe;
    }
    this._currentKeyframe = this._keyframes.get(this.duration);
    if (!this._currentKeyframe) {
      this._currentKeyframe = /* @__PURE__ */ new Map();
      this._keyframes.set(this.duration, this._currentKeyframe);
    }
  }
  forwardFrame() {
    this.duration += ONE_FRAME_IN_MILLISECONDS;
    this._loadKeyframe();
  }
  forwardTime(time) {
    this.applyStylesToKeyframe();
    this.duration = time;
    this._loadKeyframe();
  }
  _updateStyle(prop, value) {
    this._localTimelineStyles.set(prop, value);
    this._globalTimelineStyles.set(prop, value);
    this._styleSummary.set(prop, {
      time: this.currentTime,
      value
    });
  }
  allowOnlyTimelineStyles() {
    return this._currentEmptyStepKeyframe !== this._currentKeyframe;
  }
  applyEmptyStep(easing) {
    if (easing) {
      this._previousKeyframe.set("easing", easing);
    }
    for (let [prop, value] of this._globalTimelineStyles) {
      this._backFill.set(prop, value || AUTO_STYLE);
      this._currentKeyframe.set(prop, AUTO_STYLE);
    }
    this._currentEmptyStepKeyframe = this._currentKeyframe;
  }
  setStyles(input, easing, errors, options) {
    if (easing) {
      this._previousKeyframe.set("easing", easing);
    }
    const params = options && options.params || {};
    const styles = flattenStyles(input, this._globalTimelineStyles);
    for (let [prop, value] of styles) {
      const val = interpolateParams(value, params, errors);
      this._pendingStyles.set(prop, val);
      if (!this._localTimelineStyles.has(prop)) {
        this._backFill.set(prop, this._globalTimelineStyles.get(prop) ?? AUTO_STYLE);
      }
      this._updateStyle(prop, val);
    }
  }
  applyStylesToKeyframe() {
    if (this._pendingStyles.size == 0)
      return;
    this._pendingStyles.forEach((val, prop) => {
      this._currentKeyframe.set(prop, val);
    });
    this._pendingStyles.clear();
    this._localTimelineStyles.forEach((val, prop) => {
      if (!this._currentKeyframe.has(prop)) {
        this._currentKeyframe.set(prop, val);
      }
    });
  }
  snapshotCurrentStyles() {
    for (let [prop, val] of this._localTimelineStyles) {
      this._pendingStyles.set(prop, val);
      this._updateStyle(prop, val);
    }
  }
  getFinalKeyframe() {
    return this._keyframes.get(this.duration);
  }
  get properties() {
    const properties = [];
    for (let prop in this._currentKeyframe) {
      properties.push(prop);
    }
    return properties;
  }
  mergeTimelineCollectedStyles(timeline) {
    timeline._styleSummary.forEach((details1, prop) => {
      const details0 = this._styleSummary.get(prop);
      if (!details0 || details1.time > details0.time) {
        this._updateStyle(prop, details1.value);
      }
    });
  }
  buildKeyframes() {
    this.applyStylesToKeyframe();
    const preStyleProps = /* @__PURE__ */ new Set();
    const postStyleProps = /* @__PURE__ */ new Set();
    const isEmpty = this._keyframes.size === 1 && this.duration === 0;
    let finalKeyframes = [];
    this._keyframes.forEach((keyframe, time) => {
      const finalKeyframe = new Map([...this._backFill, ...keyframe]);
      finalKeyframe.forEach((value, prop) => {
        if (value === \u0275PRE_STYLE) {
          preStyleProps.add(prop);
        } else if (value === AUTO_STYLE) {
          postStyleProps.add(prop);
        }
      });
      if (!isEmpty) {
        finalKeyframe.set("offset", time / this.duration);
      }
      finalKeyframes.push(finalKeyframe);
    });
    const preProps = [...preStyleProps.values()];
    const postProps = [...postStyleProps.values()];
    if (isEmpty) {
      const kf0 = finalKeyframes[0];
      const kf1 = new Map(kf0);
      kf0.set("offset", 0);
      kf1.set("offset", 1);
      finalKeyframes = [kf0, kf1];
    }
    return createTimelineInstruction(this.element, finalKeyframes, preProps, postProps, this.duration, this.startTime, this.easing, false);
  }
};
var SubTimelineBuilder = class extends TimelineBuilder {
  constructor(driver, element, keyframes, preStyleProps, postStyleProps, timings, _stretchStartingKeyframe = false) {
    super(driver, element, timings.delay);
    this.keyframes = keyframes;
    this.preStyleProps = preStyleProps;
    this.postStyleProps = postStyleProps;
    this._stretchStartingKeyframe = _stretchStartingKeyframe;
    this.timings = {
      duration: timings.duration,
      delay: timings.delay,
      easing: timings.easing
    };
  }
  containsAnimation() {
    return this.keyframes.length > 1;
  }
  buildKeyframes() {
    let keyframes = this.keyframes;
    let {
      delay,
      duration,
      easing
    } = this.timings;
    if (this._stretchStartingKeyframe && delay) {
      const newKeyframes = [];
      const totalTime = duration + delay;
      const startingGap = delay / totalTime;
      const newFirstKeyframe = new Map(keyframes[0]);
      newFirstKeyframe.set("offset", 0);
      newKeyframes.push(newFirstKeyframe);
      const oldFirstKeyframe = new Map(keyframes[0]);
      oldFirstKeyframe.set("offset", roundOffset(startingGap));
      newKeyframes.push(oldFirstKeyframe);
      const limit = keyframes.length - 1;
      for (let i = 1; i <= limit; i++) {
        let kf = new Map(keyframes[i]);
        const oldOffset = kf.get("offset");
        const timeAtKeyframe = delay + oldOffset * duration;
        kf.set("offset", roundOffset(timeAtKeyframe / totalTime));
        newKeyframes.push(kf);
      }
      duration = totalTime;
      delay = 0;
      easing = "";
      keyframes = newKeyframes;
    }
    return createTimelineInstruction(this.element, keyframes, this.preStyleProps, this.postStyleProps, duration, delay, easing, true);
  }
};
function roundOffset(offset, decimalPoints = 3) {
  const mult = Math.pow(10, decimalPoints - 1);
  return Math.round(offset * mult) / mult;
}
function flattenStyles(input, allStyles) {
  const styles = /* @__PURE__ */ new Map();
  let allProperties;
  input.forEach((token) => {
    if (token === "*") {
      allProperties ??= allStyles.keys();
      for (let prop of allProperties) {
        styles.set(prop, AUTO_STYLE);
      }
    } else {
      for (let [prop, val] of token) {
        styles.set(prop, val);
      }
    }
  });
  return styles;
}
function createTransitionInstruction(element, triggerName, fromState, toState, isRemovalTransition, fromStyles, toStyles, timelines, queriedElements, preStyleProps, postStyleProps, totalTime, errors) {
  return {
    type: 0,
    element,
    triggerName,
    isRemovalTransition,
    fromState,
    fromStyles,
    toState,
    toStyles,
    timelines,
    queriedElements,
    preStyleProps,
    postStyleProps,
    totalTime,
    errors
  };
}
var EMPTY_OBJECT = {};
var AnimationTransitionFactory = class {
  constructor(_triggerName, ast, _stateStyles) {
    this._triggerName = _triggerName;
    this.ast = ast;
    this._stateStyles = _stateStyles;
  }
  match(currentState, nextState, element, params) {
    return oneOrMoreTransitionsMatch(this.ast.matchers, currentState, nextState, element, params);
  }
  buildStyles(stateName, params, errors) {
    let styler = this._stateStyles.get("*");
    if (stateName !== void 0) {
      styler = this._stateStyles.get(stateName?.toString()) || styler;
    }
    return styler ? styler.buildStyles(params, errors) : /* @__PURE__ */ new Map();
  }
  build(driver, element, currentState, nextState, enterClassName, leaveClassName, currentOptions, nextOptions, subInstructions, skipAstBuild) {
    const errors = [];
    const transitionAnimationParams = this.ast.options && this.ast.options.params || EMPTY_OBJECT;
    const currentAnimationParams = currentOptions && currentOptions.params || EMPTY_OBJECT;
    const currentStateStyles = this.buildStyles(currentState, currentAnimationParams, errors);
    const nextAnimationParams = nextOptions && nextOptions.params || EMPTY_OBJECT;
    const nextStateStyles = this.buildStyles(nextState, nextAnimationParams, errors);
    const queriedElements = /* @__PURE__ */ new Set();
    const preStyleMap = /* @__PURE__ */ new Map();
    const postStyleMap = /* @__PURE__ */ new Map();
    const isRemoval = nextState === "void";
    const animationOptions = {
      params: applyParamDefaults(nextAnimationParams, transitionAnimationParams),
      delay: this.ast.options?.delay
    };
    const timelines = skipAstBuild ? [] : buildAnimationTimelines(driver, element, this.ast.animation, enterClassName, leaveClassName, currentStateStyles, nextStateStyles, animationOptions, subInstructions, errors);
    let totalTime = 0;
    timelines.forEach((tl) => {
      totalTime = Math.max(tl.duration + tl.delay, totalTime);
    });
    if (errors.length) {
      return createTransitionInstruction(element, this._triggerName, currentState, nextState, isRemoval, currentStateStyles, nextStateStyles, [], [], preStyleMap, postStyleMap, totalTime, errors);
    }
    timelines.forEach((tl) => {
      const elm = tl.element;
      const preProps = getOrSetDefaultValue(preStyleMap, elm, /* @__PURE__ */ new Set());
      tl.preStyleProps.forEach((prop) => preProps.add(prop));
      const postProps = getOrSetDefaultValue(postStyleMap, elm, /* @__PURE__ */ new Set());
      tl.postStyleProps.forEach((prop) => postProps.add(prop));
      if (elm !== element) {
        queriedElements.add(elm);
      }
    });
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      checkNonAnimatableInTimelines(timelines, this._triggerName, driver);
    }
    return createTransitionInstruction(element, this._triggerName, currentState, nextState, isRemoval, currentStateStyles, nextStateStyles, timelines, [...queriedElements.values()], preStyleMap, postStyleMap, totalTime);
  }
};
function checkNonAnimatableInTimelines(timelines, triggerName, driver) {
  if (!driver.validateAnimatableStyleProperty) {
    return;
  }
  const allowedNonAnimatableProps = /* @__PURE__ */ new Set([
    // 'easing' is a utility/synthetic prop we use to represent
    // easing functions, it represents a property of the animation
    // which is not animatable but different values can be used
    // in different steps
    "easing"
  ]);
  const invalidNonAnimatableProps = /* @__PURE__ */ new Set();
  timelines.forEach(({
    keyframes
  }) => {
    const nonAnimatablePropsInitialValues = /* @__PURE__ */ new Map();
    keyframes.forEach((keyframe) => {
      const entriesToCheck = Array.from(keyframe.entries()).filter(([prop]) => !allowedNonAnimatableProps.has(prop));
      for (const [prop, value] of entriesToCheck) {
        if (!driver.validateAnimatableStyleProperty(prop)) {
          if (nonAnimatablePropsInitialValues.has(prop) && !invalidNonAnimatableProps.has(prop)) {
            const propInitialValue = nonAnimatablePropsInitialValues.get(prop);
            if (propInitialValue !== value) {
              invalidNonAnimatableProps.add(prop);
            }
          } else {
            nonAnimatablePropsInitialValues.set(prop, value);
          }
        }
      }
    });
  });
  if (invalidNonAnimatableProps.size > 0) {
    console.warn(`Warning: The animation trigger "${triggerName}" is attempting to animate the following not animatable properties: ` + Array.from(invalidNonAnimatableProps).join(", ") + "\n(to check the list of all animatable properties visit https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties)");
  }
}
function oneOrMoreTransitionsMatch(matchFns, currentState, nextState, element, params) {
  return matchFns.some((fn) => fn(currentState, nextState, element, params));
}
function applyParamDefaults(userParams, defaults) {
  const result = __spreadValues({}, defaults);
  Object.entries(userParams).forEach(([key, value]) => {
    if (value != null) {
      result[key] = value;
    }
  });
  return result;
}
var AnimationStateStyles = class {
  constructor(styles, defaultParams, normalizer) {
    this.styles = styles;
    this.defaultParams = defaultParams;
    this.normalizer = normalizer;
  }
  buildStyles(params, errors) {
    const finalStyles = /* @__PURE__ */ new Map();
    const combinedParams = applyParamDefaults(params, this.defaultParams);
    this.styles.styles.forEach((value) => {
      if (typeof value !== "string") {
        value.forEach((val, prop) => {
          if (val) {
            val = interpolateParams(val, combinedParams, errors);
          }
          const normalizedProp = this.normalizer.normalizePropertyName(prop, errors);
          val = this.normalizer.normalizeStyleValue(prop, normalizedProp, val, errors);
          finalStyles.set(prop, val);
        });
      }
    });
    return finalStyles;
  }
};
function buildTrigger(name, ast, normalizer) {
  return new AnimationTrigger(name, ast, normalizer);
}
var AnimationTrigger = class {
  constructor(name, ast, _normalizer3) {
    this.name = name;
    this.ast = ast;
    this._normalizer = _normalizer3;
    this.transitionFactories = [];
    this.states = /* @__PURE__ */ new Map();
    ast.states.forEach((ast2) => {
      const defaultParams = ast2.options && ast2.options.params || {};
      this.states.set(ast2.name, new AnimationStateStyles(ast2.style, defaultParams, _normalizer3));
    });
    balanceProperties(this.states, "true", "1");
    balanceProperties(this.states, "false", "0");
    ast.transitions.forEach((ast2) => {
      this.transitionFactories.push(new AnimationTransitionFactory(name, ast2, this.states));
    });
    this.fallbackTransition = createFallbackTransition(name, this.states, this._normalizer);
  }
  get containsQueries() {
    return this.ast.queryCount > 0;
  }
  matchTransition(currentState, nextState, element, params) {
    const entry = this.transitionFactories.find((f) => f.match(currentState, nextState, element, params));
    return entry || null;
  }
  matchStyles(currentState, params, errors) {
    return this.fallbackTransition.buildStyles(currentState, params, errors);
  }
};
function createFallbackTransition(triggerName, states, normalizer) {
  const matchers = [(fromState, toState) => true];
  const animation = {
    type: AnimationMetadataType.Sequence,
    steps: [],
    options: null
  };
  const transition = {
    type: AnimationMetadataType.Transition,
    animation,
    matchers,
    options: null,
    queryCount: 0,
    depCount: 0
  };
  return new AnimationTransitionFactory(triggerName, transition, states);
}
function balanceProperties(stateMap, key1, key2) {
  if (stateMap.has(key1)) {
    if (!stateMap.has(key2)) {
      stateMap.set(key2, stateMap.get(key1));
    }
  } else if (stateMap.has(key2)) {
    stateMap.set(key1, stateMap.get(key2));
  }
}
var EMPTY_INSTRUCTION_MAP = new ElementInstructionMap();
var TimelineAnimationEngine = class {
  constructor(bodyNode, _driver, _normalizer3) {
    this.bodyNode = bodyNode;
    this._driver = _driver;
    this._normalizer = _normalizer3;
    this._animations = /* @__PURE__ */ new Map();
    this._playersById = /* @__PURE__ */ new Map();
    this.players = [];
  }
  register(id, metadata) {
    const errors = [];
    const warnings = [];
    const ast = buildAnimationAst(this._driver, metadata, errors, warnings);
    if (errors.length) {
      throw registerFailed(errors);
    } else {
      if (warnings.length) {
        warnRegister(warnings);
      }
      this._animations.set(id, ast);
    }
  }
  _buildPlayer(i, preStyles, postStyles) {
    const element = i.element;
    const keyframes = normalizeKeyframes$1(this._normalizer, i.keyframes, preStyles, postStyles);
    return this._driver.animate(element, keyframes, i.duration, i.delay, i.easing, [], true);
  }
  create(id, element, options = {}) {
    const errors = [];
    const ast = this._animations.get(id);
    let instructions;
    const autoStylesMap = /* @__PURE__ */ new Map();
    if (ast) {
      instructions = buildAnimationTimelines(this._driver, element, ast, ENTER_CLASSNAME, LEAVE_CLASSNAME, /* @__PURE__ */ new Map(), /* @__PURE__ */ new Map(), options, EMPTY_INSTRUCTION_MAP, errors);
      instructions.forEach((inst) => {
        const styles = getOrSetDefaultValue(autoStylesMap, inst.element, /* @__PURE__ */ new Map());
        inst.postStyleProps.forEach((prop) => styles.set(prop, null));
      });
    } else {
      errors.push(missingOrDestroyedAnimation());
      instructions = [];
    }
    if (errors.length) {
      throw createAnimationFailed(errors);
    }
    autoStylesMap.forEach((styles, element2) => {
      styles.forEach((_, prop) => {
        styles.set(prop, this._driver.computeStyle(element2, prop, AUTO_STYLE));
      });
    });
    const players = instructions.map((i) => {
      const styles = autoStylesMap.get(i.element);
      return this._buildPlayer(i, /* @__PURE__ */ new Map(), styles);
    });
    const player = optimizeGroupPlayer(players);
    this._playersById.set(id, player);
    player.onDestroy(() => this.destroy(id));
    this.players.push(player);
    return player;
  }
  destroy(id) {
    const player = this._getPlayer(id);
    player.destroy();
    this._playersById.delete(id);
    const index = this.players.indexOf(player);
    if (index >= 0) {
      this.players.splice(index, 1);
    }
  }
  _getPlayer(id) {
    const player = this._playersById.get(id);
    if (!player) {
      throw missingPlayer(id);
    }
    return player;
  }
  listen(id, element, eventName, callback) {
    const baseEvent = makeAnimationEvent(element, "", "", "");
    listenOnPlayer(this._getPlayer(id), eventName, baseEvent, callback);
    return () => {
    };
  }
  command(id, element, command, args) {
    if (command == "register") {
      this.register(id, args[0]);
      return;
    }
    if (command == "create") {
      const options = args[0] || {};
      this.create(id, element, options);
      return;
    }
    const player = this._getPlayer(id);
    switch (command) {
      case "play":
        player.play();
        break;
      case "pause":
        player.pause();
        break;
      case "reset":
        player.reset();
        break;
      case "restart":
        player.restart();
        break;
      case "finish":
        player.finish();
        break;
      case "init":
        player.init();
        break;
      case "setPosition":
        player.setPosition(parseFloat(args[0]));
        break;
      case "destroy":
        this.destroy(id);
        break;
    }
  }
};
var QUEUED_CLASSNAME = "ng-animate-queued";
var QUEUED_SELECTOR = ".ng-animate-queued";
var DISABLED_CLASSNAME = "ng-animate-disabled";
var DISABLED_SELECTOR = ".ng-animate-disabled";
var STAR_CLASSNAME = "ng-star-inserted";
var STAR_SELECTOR = ".ng-star-inserted";
var EMPTY_PLAYER_ARRAY = [];
var NULL_REMOVAL_STATE = {
  namespaceId: "",
  setForRemoval: false,
  setForMove: false,
  hasAnimation: false,
  removedBeforeQueried: false
};
var NULL_REMOVED_QUERIED_STATE = {
  namespaceId: "",
  setForMove: false,
  setForRemoval: false,
  hasAnimation: false,
  removedBeforeQueried: true
};
var REMOVAL_FLAG = "__ng_removed";
var StateValue = class {
  get params() {
    return this.options.params;
  }
  constructor(input, namespaceId = "") {
    this.namespaceId = namespaceId;
    const isObj = input && input.hasOwnProperty("value");
    const value = isObj ? input["value"] : input;
    this.value = normalizeTriggerValue(value);
    if (isObj) {
      const _a = input, {
        value: value2
      } = _a, options = __objRest(_a, [
        "value"
      ]);
      this.options = options;
    } else {
      this.options = {};
    }
    if (!this.options.params) {
      this.options.params = {};
    }
  }
  absorbOptions(options) {
    const newParams = options.params;
    if (newParams) {
      const oldParams = this.options.params;
      Object.keys(newParams).forEach((prop) => {
        if (oldParams[prop] == null) {
          oldParams[prop] = newParams[prop];
        }
      });
    }
  }
};
var VOID_VALUE = "void";
var DEFAULT_STATE_VALUE = new StateValue(VOID_VALUE);
var AnimationTransitionNamespace = class {
  constructor(id, hostElement, _engine) {
    this.id = id;
    this.hostElement = hostElement;
    this._engine = _engine;
    this.players = [];
    this._triggers = /* @__PURE__ */ new Map();
    this._queue = [];
    this._elementListeners = /* @__PURE__ */ new Map();
    this._hostClassName = "ng-tns-" + id;
    addClass(hostElement, this._hostClassName);
  }
  listen(element, name, phase, callback) {
    if (!this._triggers.has(name)) {
      throw missingTrigger(phase, name);
    }
    if (phase == null || phase.length == 0) {
      throw missingEvent(name);
    }
    if (!isTriggerEventValid(phase)) {
      throw unsupportedTriggerEvent(phase, name);
    }
    const listeners = getOrSetDefaultValue(this._elementListeners, element, []);
    const data = {
      name,
      phase,
      callback
    };
    listeners.push(data);
    const triggersWithStates = getOrSetDefaultValue(this._engine.statesByElement, element, /* @__PURE__ */ new Map());
    if (!triggersWithStates.has(name)) {
      addClass(element, NG_TRIGGER_CLASSNAME);
      addClass(element, NG_TRIGGER_CLASSNAME + "-" + name);
      triggersWithStates.set(name, DEFAULT_STATE_VALUE);
    }
    return () => {
      this._engine.afterFlush(() => {
        const index = listeners.indexOf(data);
        if (index >= 0) {
          listeners.splice(index, 1);
        }
        if (!this._triggers.has(name)) {
          triggersWithStates.delete(name);
        }
      });
    };
  }
  register(name, ast) {
    if (this._triggers.has(name)) {
      return false;
    } else {
      this._triggers.set(name, ast);
      return true;
    }
  }
  _getTrigger(name) {
    const trigger = this._triggers.get(name);
    if (!trigger) {
      throw unregisteredTrigger(name);
    }
    return trigger;
  }
  trigger(element, triggerName, value, defaultToFallback = true) {
    const trigger = this._getTrigger(triggerName);
    const player = new TransitionAnimationPlayer(this.id, triggerName, element);
    let triggersWithStates = this._engine.statesByElement.get(element);
    if (!triggersWithStates) {
      addClass(element, NG_TRIGGER_CLASSNAME);
      addClass(element, NG_TRIGGER_CLASSNAME + "-" + triggerName);
      this._engine.statesByElement.set(element, triggersWithStates = /* @__PURE__ */ new Map());
    }
    let fromState = triggersWithStates.get(triggerName);
    const toState = new StateValue(value, this.id);
    const isObj = value && value.hasOwnProperty("value");
    if (!isObj && fromState) {
      toState.absorbOptions(fromState.options);
    }
    triggersWithStates.set(triggerName, toState);
    if (!fromState) {
      fromState = DEFAULT_STATE_VALUE;
    }
    const isRemoval = toState.value === VOID_VALUE;
    if (!isRemoval && fromState.value === toState.value) {
      if (!objEquals(fromState.params, toState.params)) {
        const errors = [];
        const fromStyles = trigger.matchStyles(fromState.value, fromState.params, errors);
        const toStyles = trigger.matchStyles(toState.value, toState.params, errors);
        if (errors.length) {
          this._engine.reportError(errors);
        } else {
          this._engine.afterFlush(() => {
            eraseStyles(element, fromStyles);
            setStyles(element, toStyles);
          });
        }
      }
      return;
    }
    const playersOnElement = getOrSetDefaultValue(this._engine.playersByElement, element, []);
    playersOnElement.forEach((player2) => {
      if (player2.namespaceId == this.id && player2.triggerName == triggerName && player2.queued) {
        player2.destroy();
      }
    });
    let transition = trigger.matchTransition(fromState.value, toState.value, element, toState.params);
    let isFallbackTransition = false;
    if (!transition) {
      if (!defaultToFallback)
        return;
      transition = trigger.fallbackTransition;
      isFallbackTransition = true;
    }
    this._engine.totalQueuedPlayers++;
    this._queue.push({
      element,
      triggerName,
      transition,
      fromState,
      toState,
      player,
      isFallbackTransition
    });
    if (!isFallbackTransition) {
      addClass(element, QUEUED_CLASSNAME);
      player.onStart(() => {
        removeClass(element, QUEUED_CLASSNAME);
      });
    }
    player.onDone(() => {
      let index = this.players.indexOf(player);
      if (index >= 0) {
        this.players.splice(index, 1);
      }
      const players = this._engine.playersByElement.get(element);
      if (players) {
        let index2 = players.indexOf(player);
        if (index2 >= 0) {
          players.splice(index2, 1);
        }
      }
    });
    this.players.push(player);
    playersOnElement.push(player);
    return player;
  }
  deregister(name) {
    this._triggers.delete(name);
    this._engine.statesByElement.forEach((stateMap) => stateMap.delete(name));
    this._elementListeners.forEach((listeners, element) => {
      this._elementListeners.set(element, listeners.filter((entry) => {
        return entry.name != name;
      }));
    });
  }
  clearElementCache(element) {
    this._engine.statesByElement.delete(element);
    this._elementListeners.delete(element);
    const elementPlayers = this._engine.playersByElement.get(element);
    if (elementPlayers) {
      elementPlayers.forEach((player) => player.destroy());
      this._engine.playersByElement.delete(element);
    }
  }
  _signalRemovalForInnerTriggers(rootElement, context) {
    const elements = this._engine.driver.query(rootElement, NG_TRIGGER_SELECTOR, true);
    elements.forEach((elm) => {
      if (elm[REMOVAL_FLAG])
        return;
      const namespaces = this._engine.fetchNamespacesByElement(elm);
      if (namespaces.size) {
        namespaces.forEach((ns) => ns.triggerLeaveAnimation(elm, context, false, true));
      } else {
        this.clearElementCache(elm);
      }
    });
    this._engine.afterFlushAnimationsDone(() => elements.forEach((elm) => this.clearElementCache(elm)));
  }
  triggerLeaveAnimation(element, context, destroyAfterComplete, defaultToFallback) {
    const triggerStates = this._engine.statesByElement.get(element);
    const previousTriggersValues = /* @__PURE__ */ new Map();
    if (triggerStates) {
      const players = [];
      triggerStates.forEach((state, triggerName) => {
        previousTriggersValues.set(triggerName, state.value);
        if (this._triggers.has(triggerName)) {
          const player = this.trigger(element, triggerName, VOID_VALUE, defaultToFallback);
          if (player) {
            players.push(player);
          }
        }
      });
      if (players.length) {
        this._engine.markElementAsRemoved(this.id, element, true, context, previousTriggersValues);
        if (destroyAfterComplete) {
          optimizeGroupPlayer(players).onDone(() => this._engine.processLeaveNode(element));
        }
        return true;
      }
    }
    return false;
  }
  prepareLeaveAnimationListeners(element) {
    const listeners = this._elementListeners.get(element);
    const elementStates = this._engine.statesByElement.get(element);
    if (listeners && elementStates) {
      const visitedTriggers = /* @__PURE__ */ new Set();
      listeners.forEach((listener) => {
        const triggerName = listener.name;
        if (visitedTriggers.has(triggerName))
          return;
        visitedTriggers.add(triggerName);
        const trigger = this._triggers.get(triggerName);
        const transition = trigger.fallbackTransition;
        const fromState = elementStates.get(triggerName) || DEFAULT_STATE_VALUE;
        const toState = new StateValue(VOID_VALUE);
        const player = new TransitionAnimationPlayer(this.id, triggerName, element);
        this._engine.totalQueuedPlayers++;
        this._queue.push({
          element,
          triggerName,
          transition,
          fromState,
          toState,
          player,
          isFallbackTransition: true
        });
      });
    }
  }
  removeNode(element, context) {
    const engine = this._engine;
    if (element.childElementCount) {
      this._signalRemovalForInnerTriggers(element, context);
    }
    if (this.triggerLeaveAnimation(element, context, true))
      return;
    let containsPotentialParentTransition = false;
    if (engine.totalAnimations) {
      const currentPlayers = engine.players.length ? engine.playersByQueriedElement.get(element) : [];
      if (currentPlayers && currentPlayers.length) {
        containsPotentialParentTransition = true;
      } else {
        let parent = element;
        while (parent = parent.parentNode) {
          const triggers = engine.statesByElement.get(parent);
          if (triggers) {
            containsPotentialParentTransition = true;
            break;
          }
        }
      }
    }
    this.prepareLeaveAnimationListeners(element);
    if (containsPotentialParentTransition) {
      engine.markElementAsRemoved(this.id, element, false, context);
    } else {
      const removalFlag = element[REMOVAL_FLAG];
      if (!removalFlag || removalFlag === NULL_REMOVAL_STATE) {
        engine.afterFlush(() => this.clearElementCache(element));
        engine.destroyInnerAnimations(element);
        engine._onRemovalComplete(element, context);
      }
    }
  }
  insertNode(element, parent) {
    addClass(element, this._hostClassName);
  }
  drainQueuedTransitions(microtaskId) {
    const instructions = [];
    this._queue.forEach((entry) => {
      const player = entry.player;
      if (player.destroyed)
        return;
      const element = entry.element;
      const listeners = this._elementListeners.get(element);
      if (listeners) {
        listeners.forEach((listener) => {
          if (listener.name == entry.triggerName) {
            const baseEvent = makeAnimationEvent(element, entry.triggerName, entry.fromState.value, entry.toState.value);
            baseEvent["_data"] = microtaskId;
            listenOnPlayer(entry.player, listener.phase, baseEvent, listener.callback);
          }
        });
      }
      if (player.markedForDestroy) {
        this._engine.afterFlush(() => {
          player.destroy();
        });
      } else {
        instructions.push(entry);
      }
    });
    this._queue = [];
    return instructions.sort((a, b) => {
      const d0 = a.transition.ast.depCount;
      const d1 = b.transition.ast.depCount;
      if (d0 == 0 || d1 == 0) {
        return d0 - d1;
      }
      return this._engine.driver.containsElement(a.element, b.element) ? 1 : -1;
    });
  }
  destroy(context) {
    this.players.forEach((p) => p.destroy());
    this._signalRemovalForInnerTriggers(this.hostElement, context);
  }
};
var TransitionAnimationEngine = class {
  /** @internal */
  _onRemovalComplete(element, context) {
    this.onRemovalComplete(element, context);
  }
  constructor(bodyNode, driver, _normalizer3, scheduler) {
    this.bodyNode = bodyNode;
    this.driver = driver;
    this._normalizer = _normalizer3;
    this.scheduler = scheduler;
    this.players = [];
    this.newHostElements = /* @__PURE__ */ new Map();
    this.playersByElement = /* @__PURE__ */ new Map();
    this.playersByQueriedElement = /* @__PURE__ */ new Map();
    this.statesByElement = /* @__PURE__ */ new Map();
    this.disabledNodes = /* @__PURE__ */ new Set();
    this.totalAnimations = 0;
    this.totalQueuedPlayers = 0;
    this._namespaceLookup = {};
    this._namespaceList = [];
    this._flushFns = [];
    this._whenQuietFns = [];
    this.namespacesByHostElement = /* @__PURE__ */ new Map();
    this.collectedEnterElements = [];
    this.collectedLeaveElements = [];
    this.onRemovalComplete = (element, context) => {
    };
  }
  get queuedPlayers() {
    const players = [];
    this._namespaceList.forEach((ns) => {
      ns.players.forEach((player) => {
        if (player.queued) {
          players.push(player);
        }
      });
    });
    return players;
  }
  createNamespace(namespaceId, hostElement) {
    const ns = new AnimationTransitionNamespace(namespaceId, hostElement, this);
    if (this.bodyNode && this.driver.containsElement(this.bodyNode, hostElement)) {
      this._balanceNamespaceList(ns, hostElement);
    } else {
      this.newHostElements.set(hostElement, ns);
      this.collectEnterElement(hostElement);
    }
    return this._namespaceLookup[namespaceId] = ns;
  }
  _balanceNamespaceList(ns, hostElement) {
    const namespaceList = this._namespaceList;
    const namespacesByHostElement = this.namespacesByHostElement;
    const limit = namespaceList.length - 1;
    if (limit >= 0) {
      let found = false;
      let ancestor = this.driver.getParentElement(hostElement);
      while (ancestor) {
        const ancestorNs = namespacesByHostElement.get(ancestor);
        if (ancestorNs) {
          const index = namespaceList.indexOf(ancestorNs);
          namespaceList.splice(index + 1, 0, ns);
          found = true;
          break;
        }
        ancestor = this.driver.getParentElement(ancestor);
      }
      if (!found) {
        namespaceList.unshift(ns);
      }
    } else {
      namespaceList.push(ns);
    }
    namespacesByHostElement.set(hostElement, ns);
    return ns;
  }
  register(namespaceId, hostElement) {
    let ns = this._namespaceLookup[namespaceId];
    if (!ns) {
      ns = this.createNamespace(namespaceId, hostElement);
    }
    return ns;
  }
  registerTrigger(namespaceId, name, trigger) {
    let ns = this._namespaceLookup[namespaceId];
    if (ns && ns.register(name, trigger)) {
      this.totalAnimations++;
    }
  }
  destroy(namespaceId, context) {
    if (!namespaceId)
      return;
    this.afterFlush(() => {
    });
    this.afterFlushAnimationsDone(() => {
      const ns = this._fetchNamespace(namespaceId);
      this.namespacesByHostElement.delete(ns.hostElement);
      const index = this._namespaceList.indexOf(ns);
      if (index >= 0) {
        this._namespaceList.splice(index, 1);
      }
      ns.destroy(context);
      delete this._namespaceLookup[namespaceId];
    });
  }
  _fetchNamespace(id) {
    return this._namespaceLookup[id];
  }
  fetchNamespacesByElement(element) {
    const namespaces = /* @__PURE__ */ new Set();
    const elementStates = this.statesByElement.get(element);
    if (elementStates) {
      for (let stateValue of elementStates.values()) {
        if (stateValue.namespaceId) {
          const ns = this._fetchNamespace(stateValue.namespaceId);
          if (ns) {
            namespaces.add(ns);
          }
        }
      }
    }
    return namespaces;
  }
  trigger(namespaceId, element, name, value) {
    if (isElementNode(element)) {
      const ns = this._fetchNamespace(namespaceId);
      if (ns) {
        ns.trigger(element, name, value);
        return true;
      }
    }
    return false;
  }
  insertNode(namespaceId, element, parent, insertBefore) {
    if (!isElementNode(element))
      return;
    const details = element[REMOVAL_FLAG];
    if (details && details.setForRemoval) {
      details.setForRemoval = false;
      details.setForMove = true;
      const index = this.collectedLeaveElements.indexOf(element);
      if (index >= 0) {
        this.collectedLeaveElements.splice(index, 1);
      }
    }
    if (namespaceId) {
      const ns = this._fetchNamespace(namespaceId);
      if (ns) {
        ns.insertNode(element, parent);
      }
    }
    if (insertBefore) {
      this.collectEnterElement(element);
    }
  }
  collectEnterElement(element) {
    this.collectedEnterElements.push(element);
  }
  markElementAsDisabled(element, value) {
    if (value) {
      if (!this.disabledNodes.has(element)) {
        this.disabledNodes.add(element);
        addClass(element, DISABLED_CLASSNAME);
      }
    } else if (this.disabledNodes.has(element)) {
      this.disabledNodes.delete(element);
      removeClass(element, DISABLED_CLASSNAME);
    }
  }
  removeNode(namespaceId, element, context) {
    if (isElementNode(element)) {
      this.scheduler?.notify();
      const ns = namespaceId ? this._fetchNamespace(namespaceId) : null;
      if (ns) {
        ns.removeNode(element, context);
      } else {
        this.markElementAsRemoved(namespaceId, element, false, context);
      }
      const hostNS = this.namespacesByHostElement.get(element);
      if (hostNS && hostNS.id !== namespaceId) {
        hostNS.removeNode(element, context);
      }
    } else {
      this._onRemovalComplete(element, context);
    }
  }
  markElementAsRemoved(namespaceId, element, hasAnimation, context, previousTriggersValues) {
    this.collectedLeaveElements.push(element);
    element[REMOVAL_FLAG] = {
      namespaceId,
      setForRemoval: context,
      hasAnimation,
      removedBeforeQueried: false,
      previousTriggersValues
    };
  }
  listen(namespaceId, element, name, phase, callback) {
    if (isElementNode(element)) {
      return this._fetchNamespace(namespaceId).listen(element, name, phase, callback);
    }
    return () => {
    };
  }
  _buildInstruction(entry, subTimelines, enterClassName, leaveClassName, skipBuildAst) {
    return entry.transition.build(this.driver, entry.element, entry.fromState.value, entry.toState.value, enterClassName, leaveClassName, entry.fromState.options, entry.toState.options, subTimelines, skipBuildAst);
  }
  destroyInnerAnimations(containerElement) {
    let elements = this.driver.query(containerElement, NG_TRIGGER_SELECTOR, true);
    elements.forEach((element) => this.destroyActiveAnimationsForElement(element));
    if (this.playersByQueriedElement.size == 0)
      return;
    elements = this.driver.query(containerElement, NG_ANIMATING_SELECTOR, true);
    elements.forEach((element) => this.finishActiveQueriedAnimationOnElement(element));
  }
  destroyActiveAnimationsForElement(element) {
    const players = this.playersByElement.get(element);
    if (players) {
      players.forEach((player) => {
        if (player.queued) {
          player.markedForDestroy = true;
        } else {
          player.destroy();
        }
      });
    }
  }
  finishActiveQueriedAnimationOnElement(element) {
    const players = this.playersByQueriedElement.get(element);
    if (players) {
      players.forEach((player) => player.finish());
    }
  }
  whenRenderingDone() {
    return new Promise((resolve) => {
      if (this.players.length) {
        return optimizeGroupPlayer(this.players).onDone(() => resolve());
      } else {
        resolve();
      }
    });
  }
  processLeaveNode(element) {
    const details = element[REMOVAL_FLAG];
    if (details && details.setForRemoval) {
      element[REMOVAL_FLAG] = NULL_REMOVAL_STATE;
      if (details.namespaceId) {
        this.destroyInnerAnimations(element);
        const ns = this._fetchNamespace(details.namespaceId);
        if (ns) {
          ns.clearElementCache(element);
        }
      }
      this._onRemovalComplete(element, details.setForRemoval);
    }
    if (element.classList?.contains(DISABLED_CLASSNAME)) {
      this.markElementAsDisabled(element, false);
    }
    this.driver.query(element, DISABLED_SELECTOR, true).forEach((node) => {
      this.markElementAsDisabled(node, false);
    });
  }
  flush(microtaskId = -1) {
    let players = [];
    if (this.newHostElements.size) {
      this.newHostElements.forEach((ns, element) => this._balanceNamespaceList(ns, element));
      this.newHostElements.clear();
    }
    if (this.totalAnimations && this.collectedEnterElements.length) {
      for (let i = 0; i < this.collectedEnterElements.length; i++) {
        const elm = this.collectedEnterElements[i];
        addClass(elm, STAR_CLASSNAME);
      }
    }
    if (this._namespaceList.length && (this.totalQueuedPlayers || this.collectedLeaveElements.length)) {
      const cleanupFns = [];
      try {
        players = this._flushAnimations(cleanupFns, microtaskId);
      } finally {
        for (let i = 0; i < cleanupFns.length; i++) {
          cleanupFns[i]();
        }
      }
    } else {
      for (let i = 0; i < this.collectedLeaveElements.length; i++) {
        const element = this.collectedLeaveElements[i];
        this.processLeaveNode(element);
      }
    }
    this.totalQueuedPlayers = 0;
    this.collectedEnterElements.length = 0;
    this.collectedLeaveElements.length = 0;
    this._flushFns.forEach((fn) => fn());
    this._flushFns = [];
    if (this._whenQuietFns.length) {
      const quietFns = this._whenQuietFns;
      this._whenQuietFns = [];
      if (players.length) {
        optimizeGroupPlayer(players).onDone(() => {
          quietFns.forEach((fn) => fn());
        });
      } else {
        quietFns.forEach((fn) => fn());
      }
    }
  }
  reportError(errors) {
    throw triggerTransitionsFailed(errors);
  }
  _flushAnimations(cleanupFns, microtaskId) {
    const subTimelines = new ElementInstructionMap();
    const skippedPlayers = [];
    const skippedPlayersMap = /* @__PURE__ */ new Map();
    const queuedInstructions = [];
    const queriedElements = /* @__PURE__ */ new Map();
    const allPreStyleElements = /* @__PURE__ */ new Map();
    const allPostStyleElements = /* @__PURE__ */ new Map();
    const disabledElementsSet = /* @__PURE__ */ new Set();
    this.disabledNodes.forEach((node) => {
      disabledElementsSet.add(node);
      const nodesThatAreDisabled = this.driver.query(node, QUEUED_SELECTOR, true);
      for (let i2 = 0; i2 < nodesThatAreDisabled.length; i2++) {
        disabledElementsSet.add(nodesThatAreDisabled[i2]);
      }
    });
    const bodyNode = this.bodyNode;
    const allTriggerElements = Array.from(this.statesByElement.keys());
    const enterNodeMap = buildRootMap(allTriggerElements, this.collectedEnterElements);
    const enterNodeMapIds = /* @__PURE__ */ new Map();
    let i = 0;
    enterNodeMap.forEach((nodes, root) => {
      const className = ENTER_CLASSNAME + i++;
      enterNodeMapIds.set(root, className);
      nodes.forEach((node) => addClass(node, className));
    });
    const allLeaveNodes = [];
    const mergedLeaveNodes = /* @__PURE__ */ new Set();
    const leaveNodesWithoutAnimations = /* @__PURE__ */ new Set();
    for (let i2 = 0; i2 < this.collectedLeaveElements.length; i2++) {
      const element = this.collectedLeaveElements[i2];
      const details = element[REMOVAL_FLAG];
      if (details && details.setForRemoval) {
        allLeaveNodes.push(element);
        mergedLeaveNodes.add(element);
        if (details.hasAnimation) {
          this.driver.query(element, STAR_SELECTOR, true).forEach((elm) => mergedLeaveNodes.add(elm));
        } else {
          leaveNodesWithoutAnimations.add(element);
        }
      }
    }
    const leaveNodeMapIds = /* @__PURE__ */ new Map();
    const leaveNodeMap = buildRootMap(allTriggerElements, Array.from(mergedLeaveNodes));
    leaveNodeMap.forEach((nodes, root) => {
      const className = LEAVE_CLASSNAME + i++;
      leaveNodeMapIds.set(root, className);
      nodes.forEach((node) => addClass(node, className));
    });
    cleanupFns.push(() => {
      enterNodeMap.forEach((nodes, root) => {
        const className = enterNodeMapIds.get(root);
        nodes.forEach((node) => removeClass(node, className));
      });
      leaveNodeMap.forEach((nodes, root) => {
        const className = leaveNodeMapIds.get(root);
        nodes.forEach((node) => removeClass(node, className));
      });
      allLeaveNodes.forEach((element) => {
        this.processLeaveNode(element);
      });
    });
    const allPlayers = [];
    const erroneousTransitions = [];
    for (let i2 = this._namespaceList.length - 1; i2 >= 0; i2--) {
      const ns = this._namespaceList[i2];
      ns.drainQueuedTransitions(microtaskId).forEach((entry) => {
        const player = entry.player;
        const element = entry.element;
        allPlayers.push(player);
        if (this.collectedEnterElements.length) {
          const details = element[REMOVAL_FLAG];
          if (details && details.setForMove) {
            if (details.previousTriggersValues && details.previousTriggersValues.has(entry.triggerName)) {
              const previousValue = details.previousTriggersValues.get(entry.triggerName);
              const triggersWithStates = this.statesByElement.get(entry.element);
              if (triggersWithStates && triggersWithStates.has(entry.triggerName)) {
                const state = triggersWithStates.get(entry.triggerName);
                state.value = previousValue;
                triggersWithStates.set(entry.triggerName, state);
              }
            }
            player.destroy();
            return;
          }
        }
        const nodeIsOrphaned = !bodyNode || !this.driver.containsElement(bodyNode, element);
        const leaveClassName = leaveNodeMapIds.get(element);
        const enterClassName = enterNodeMapIds.get(element);
        const instruction = this._buildInstruction(entry, subTimelines, enterClassName, leaveClassName, nodeIsOrphaned);
        if (instruction.errors && instruction.errors.length) {
          erroneousTransitions.push(instruction);
          return;
        }
        if (nodeIsOrphaned) {
          player.onStart(() => eraseStyles(element, instruction.fromStyles));
          player.onDestroy(() => setStyles(element, instruction.toStyles));
          skippedPlayers.push(player);
          return;
        }
        if (entry.isFallbackTransition) {
          player.onStart(() => eraseStyles(element, instruction.fromStyles));
          player.onDestroy(() => setStyles(element, instruction.toStyles));
          skippedPlayers.push(player);
          return;
        }
        const timelines = [];
        instruction.timelines.forEach((tl) => {
          tl.stretchStartingKeyframe = true;
          if (!this.disabledNodes.has(tl.element)) {
            timelines.push(tl);
          }
        });
        instruction.timelines = timelines;
        subTimelines.append(element, instruction.timelines);
        const tuple = {
          instruction,
          player,
          element
        };
        queuedInstructions.push(tuple);
        instruction.queriedElements.forEach((element2) => getOrSetDefaultValue(queriedElements, element2, []).push(player));
        instruction.preStyleProps.forEach((stringMap, element2) => {
          if (stringMap.size) {
            let setVal = allPreStyleElements.get(element2);
            if (!setVal) {
              allPreStyleElements.set(element2, setVal = /* @__PURE__ */ new Set());
            }
            stringMap.forEach((_, prop) => setVal.add(prop));
          }
        });
        instruction.postStyleProps.forEach((stringMap, element2) => {
          let setVal = allPostStyleElements.get(element2);
          if (!setVal) {
            allPostStyleElements.set(element2, setVal = /* @__PURE__ */ new Set());
          }
          stringMap.forEach((_, prop) => setVal.add(prop));
        });
      });
    }
    if (erroneousTransitions.length) {
      const errors = [];
      erroneousTransitions.forEach((instruction) => {
        errors.push(transitionFailed(instruction.triggerName, instruction.errors));
      });
      allPlayers.forEach((player) => player.destroy());
      this.reportError(errors);
    }
    const allPreviousPlayersMap = /* @__PURE__ */ new Map();
    const animationElementMap = /* @__PURE__ */ new Map();
    queuedInstructions.forEach((entry) => {
      const element = entry.element;
      if (subTimelines.has(element)) {
        animationElementMap.set(element, element);
        this._beforeAnimationBuild(entry.player.namespaceId, entry.instruction, allPreviousPlayersMap);
      }
    });
    skippedPlayers.forEach((player) => {
      const element = player.element;
      const previousPlayers = this._getPreviousPlayers(element, false, player.namespaceId, player.triggerName, null);
      previousPlayers.forEach((prevPlayer) => {
        getOrSetDefaultValue(allPreviousPlayersMap, element, []).push(prevPlayer);
        prevPlayer.destroy();
      });
    });
    const replaceNodes = allLeaveNodes.filter((node) => {
      return replacePostStylesAsPre(node, allPreStyleElements, allPostStyleElements);
    });
    const postStylesMap = /* @__PURE__ */ new Map();
    const allLeaveQueriedNodes = cloakAndComputeStyles(postStylesMap, this.driver, leaveNodesWithoutAnimations, allPostStyleElements, AUTO_STYLE);
    allLeaveQueriedNodes.forEach((node) => {
      if (replacePostStylesAsPre(node, allPreStyleElements, allPostStyleElements)) {
        replaceNodes.push(node);
      }
    });
    const preStylesMap = /* @__PURE__ */ new Map();
    enterNodeMap.forEach((nodes, root) => {
      cloakAndComputeStyles(preStylesMap, this.driver, new Set(nodes), allPreStyleElements, \u0275PRE_STYLE);
    });
    replaceNodes.forEach((node) => {
      const post = postStylesMap.get(node);
      const pre = preStylesMap.get(node);
      postStylesMap.set(node, new Map([...post?.entries() ?? [], ...pre?.entries() ?? []]));
    });
    const rootPlayers = [];
    const subPlayers = [];
    const NO_PARENT_ANIMATION_ELEMENT_DETECTED = {};
    queuedInstructions.forEach((entry) => {
      const {
        element,
        player,
        instruction
      } = entry;
      if (subTimelines.has(element)) {
        if (disabledElementsSet.has(element)) {
          player.onDestroy(() => setStyles(element, instruction.toStyles));
          player.disabled = true;
          player.overrideTotalTime(instruction.totalTime);
          skippedPlayers.push(player);
          return;
        }
        let parentWithAnimation = NO_PARENT_ANIMATION_ELEMENT_DETECTED;
        if (animationElementMap.size > 1) {
          let elm = element;
          const parentsToAdd = [];
          while (elm = elm.parentNode) {
            const detectedParent = animationElementMap.get(elm);
            if (detectedParent) {
              parentWithAnimation = detectedParent;
              break;
            }
            parentsToAdd.push(elm);
          }
          parentsToAdd.forEach((parent) => animationElementMap.set(parent, parentWithAnimation));
        }
        const innerPlayer = this._buildAnimation(player.namespaceId, instruction, allPreviousPlayersMap, skippedPlayersMap, preStylesMap, postStylesMap);
        player.setRealPlayer(innerPlayer);
        if (parentWithAnimation === NO_PARENT_ANIMATION_ELEMENT_DETECTED) {
          rootPlayers.push(player);
        } else {
          const parentPlayers = this.playersByElement.get(parentWithAnimation);
          if (parentPlayers && parentPlayers.length) {
            player.parentPlayer = optimizeGroupPlayer(parentPlayers);
          }
          skippedPlayers.push(player);
        }
      } else {
        eraseStyles(element, instruction.fromStyles);
        player.onDestroy(() => setStyles(element, instruction.toStyles));
        subPlayers.push(player);
        if (disabledElementsSet.has(element)) {
          skippedPlayers.push(player);
        }
      }
    });
    subPlayers.forEach((player) => {
      const playersForElement = skippedPlayersMap.get(player.element);
      if (playersForElement && playersForElement.length) {
        const innerPlayer = optimizeGroupPlayer(playersForElement);
        player.setRealPlayer(innerPlayer);
      }
    });
    skippedPlayers.forEach((player) => {
      if (player.parentPlayer) {
        player.syncPlayerEvents(player.parentPlayer);
      } else {
        player.destroy();
      }
    });
    for (let i2 = 0; i2 < allLeaveNodes.length; i2++) {
      const element = allLeaveNodes[i2];
      const details = element[REMOVAL_FLAG];
      removeClass(element, LEAVE_CLASSNAME);
      if (details && details.hasAnimation)
        continue;
      let players = [];
      if (queriedElements.size) {
        let queriedPlayerResults = queriedElements.get(element);
        if (queriedPlayerResults && queriedPlayerResults.length) {
          players.push(...queriedPlayerResults);
        }
        let queriedInnerElements = this.driver.query(element, NG_ANIMATING_SELECTOR, true);
        for (let j = 0; j < queriedInnerElements.length; j++) {
          let queriedPlayers = queriedElements.get(queriedInnerElements[j]);
          if (queriedPlayers && queriedPlayers.length) {
            players.push(...queriedPlayers);
          }
        }
      }
      const activePlayers = players.filter((p) => !p.destroyed);
      if (activePlayers.length) {
        removeNodesAfterAnimationDone(this, element, activePlayers);
      } else {
        this.processLeaveNode(element);
      }
    }
    allLeaveNodes.length = 0;
    rootPlayers.forEach((player) => {
      this.players.push(player);
      player.onDone(() => {
        player.destroy();
        const index = this.players.indexOf(player);
        this.players.splice(index, 1);
      });
      player.play();
    });
    return rootPlayers;
  }
  afterFlush(callback) {
    this._flushFns.push(callback);
  }
  afterFlushAnimationsDone(callback) {
    this._whenQuietFns.push(callback);
  }
  _getPreviousPlayers(element, isQueriedElement, namespaceId, triggerName, toStateValue) {
    let players = [];
    if (isQueriedElement) {
      const queriedElementPlayers = this.playersByQueriedElement.get(element);
      if (queriedElementPlayers) {
        players = queriedElementPlayers;
      }
    } else {
      const elementPlayers = this.playersByElement.get(element);
      if (elementPlayers) {
        const isRemovalAnimation = !toStateValue || toStateValue == VOID_VALUE;
        elementPlayers.forEach((player) => {
          if (player.queued)
            return;
          if (!isRemovalAnimation && player.triggerName != triggerName)
            return;
          players.push(player);
        });
      }
    }
    if (namespaceId || triggerName) {
      players = players.filter((player) => {
        if (namespaceId && namespaceId != player.namespaceId)
          return false;
        if (triggerName && triggerName != player.triggerName)
          return false;
        return true;
      });
    }
    return players;
  }
  _beforeAnimationBuild(namespaceId, instruction, allPreviousPlayersMap) {
    const triggerName = instruction.triggerName;
    const rootElement = instruction.element;
    const targetNameSpaceId = instruction.isRemovalTransition ? void 0 : namespaceId;
    const targetTriggerName = instruction.isRemovalTransition ? void 0 : triggerName;
    for (const timelineInstruction of instruction.timelines) {
      const element = timelineInstruction.element;
      const isQueriedElement = element !== rootElement;
      const players = getOrSetDefaultValue(allPreviousPlayersMap, element, []);
      const previousPlayers = this._getPreviousPlayers(element, isQueriedElement, targetNameSpaceId, targetTriggerName, instruction.toState);
      previousPlayers.forEach((player) => {
        const realPlayer = player.getRealPlayer();
        if (realPlayer.beforeDestroy) {
          realPlayer.beforeDestroy();
        }
        player.destroy();
        players.push(player);
      });
    }
    eraseStyles(rootElement, instruction.fromStyles);
  }
  _buildAnimation(namespaceId, instruction, allPreviousPlayersMap, skippedPlayersMap, preStylesMap, postStylesMap) {
    const triggerName = instruction.triggerName;
    const rootElement = instruction.element;
    const allQueriedPlayers = [];
    const allConsumedElements = /* @__PURE__ */ new Set();
    const allSubElements = /* @__PURE__ */ new Set();
    const allNewPlayers = instruction.timelines.map((timelineInstruction) => {
      const element = timelineInstruction.element;
      allConsumedElements.add(element);
      const details = element[REMOVAL_FLAG];
      if (details && details.removedBeforeQueried)
        return new NoopAnimationPlayer(timelineInstruction.duration, timelineInstruction.delay);
      const isQueriedElement = element !== rootElement;
      const previousPlayers = flattenGroupPlayers((allPreviousPlayersMap.get(element) || EMPTY_PLAYER_ARRAY).map((p) => p.getRealPlayer())).filter((p) => {
        const pp = p;
        return pp.element ? pp.element === element : false;
      });
      const preStyles = preStylesMap.get(element);
      const postStyles = postStylesMap.get(element);
      const keyframes = normalizeKeyframes$1(this._normalizer, timelineInstruction.keyframes, preStyles, postStyles);
      const player2 = this._buildPlayer(timelineInstruction, keyframes, previousPlayers);
      if (timelineInstruction.subTimeline && skippedPlayersMap) {
        allSubElements.add(element);
      }
      if (isQueriedElement) {
        const wrappedPlayer = new TransitionAnimationPlayer(namespaceId, triggerName, element);
        wrappedPlayer.setRealPlayer(player2);
        allQueriedPlayers.push(wrappedPlayer);
      }
      return player2;
    });
    allQueriedPlayers.forEach((player2) => {
      getOrSetDefaultValue(this.playersByQueriedElement, player2.element, []).push(player2);
      player2.onDone(() => deleteOrUnsetInMap(this.playersByQueriedElement, player2.element, player2));
    });
    allConsumedElements.forEach((element) => addClass(element, NG_ANIMATING_CLASSNAME));
    const player = optimizeGroupPlayer(allNewPlayers);
    player.onDestroy(() => {
      allConsumedElements.forEach((element) => removeClass(element, NG_ANIMATING_CLASSNAME));
      setStyles(rootElement, instruction.toStyles);
    });
    allSubElements.forEach((element) => {
      getOrSetDefaultValue(skippedPlayersMap, element, []).push(player);
    });
    return player;
  }
  _buildPlayer(instruction, keyframes, previousPlayers) {
    if (keyframes.length > 0) {
      return this.driver.animate(instruction.element, keyframes, instruction.duration, instruction.delay, instruction.easing, previousPlayers);
    }
    return new NoopAnimationPlayer(instruction.duration, instruction.delay);
  }
};
var TransitionAnimationPlayer = class {
  constructor(namespaceId, triggerName, element) {
    this.namespaceId = namespaceId;
    this.triggerName = triggerName;
    this.element = element;
    this._player = new NoopAnimationPlayer();
    this._containsRealPlayer = false;
    this._queuedCallbacks = /* @__PURE__ */ new Map();
    this.destroyed = false;
    this.parentPlayer = null;
    this.markedForDestroy = false;
    this.disabled = false;
    this.queued = true;
    this.totalTime = 0;
  }
  setRealPlayer(player) {
    if (this._containsRealPlayer)
      return;
    this._player = player;
    this._queuedCallbacks.forEach((callbacks, phase) => {
      callbacks.forEach((callback) => listenOnPlayer(player, phase, void 0, callback));
    });
    this._queuedCallbacks.clear();
    this._containsRealPlayer = true;
    this.overrideTotalTime(player.totalTime);
    this.queued = false;
  }
  getRealPlayer() {
    return this._player;
  }
  overrideTotalTime(totalTime) {
    this.totalTime = totalTime;
  }
  syncPlayerEvents(player) {
    const p = this._player;
    if (p.triggerCallback) {
      player.onStart(() => p.triggerCallback("start"));
    }
    player.onDone(() => this.finish());
    player.onDestroy(() => this.destroy());
  }
  _queueEvent(name, callback) {
    getOrSetDefaultValue(this._queuedCallbacks, name, []).push(callback);
  }
  onDone(fn) {
    if (this.queued) {
      this._queueEvent("done", fn);
    }
    this._player.onDone(fn);
  }
  onStart(fn) {
    if (this.queued) {
      this._queueEvent("start", fn);
    }
    this._player.onStart(fn);
  }
  onDestroy(fn) {
    if (this.queued) {
      this._queueEvent("destroy", fn);
    }
    this._player.onDestroy(fn);
  }
  init() {
    this._player.init();
  }
  hasStarted() {
    return this.queued ? false : this._player.hasStarted();
  }
  play() {
    !this.queued && this._player.play();
  }
  pause() {
    !this.queued && this._player.pause();
  }
  restart() {
    !this.queued && this._player.restart();
  }
  finish() {
    this._player.finish();
  }
  destroy() {
    this.destroyed = true;
    this._player.destroy();
  }
  reset() {
    !this.queued && this._player.reset();
  }
  setPosition(p) {
    if (!this.queued) {
      this._player.setPosition(p);
    }
  }
  getPosition() {
    return this.queued ? 0 : this._player.getPosition();
  }
  /** @internal */
  triggerCallback(phaseName) {
    const p = this._player;
    if (p.triggerCallback) {
      p.triggerCallback(phaseName);
    }
  }
};
function deleteOrUnsetInMap(map, key, value) {
  let currentValues = map.get(key);
  if (currentValues) {
    if (currentValues.length) {
      const index = currentValues.indexOf(value);
      currentValues.splice(index, 1);
    }
    if (currentValues.length == 0) {
      map.delete(key);
    }
  }
  return currentValues;
}
function normalizeTriggerValue(value) {
  return value != null ? value : null;
}
function isElementNode(node) {
  return node && node["nodeType"] === 1;
}
function isTriggerEventValid(eventName) {
  return eventName == "start" || eventName == "done";
}
function cloakElement(element, value) {
  const oldValue = element.style.display;
  element.style.display = value != null ? value : "none";
  return oldValue;
}
function cloakAndComputeStyles(valuesMap, driver, elements, elementPropsMap, defaultStyle) {
  const cloakVals = [];
  elements.forEach((element) => cloakVals.push(cloakElement(element)));
  const failedElements = [];
  elementPropsMap.forEach((props, element) => {
    const styles = /* @__PURE__ */ new Map();
    props.forEach((prop) => {
      const value = driver.computeStyle(element, prop, defaultStyle);
      styles.set(prop, value);
      if (!value || value.length == 0) {
        element[REMOVAL_FLAG] = NULL_REMOVED_QUERIED_STATE;
        failedElements.push(element);
      }
    });
    valuesMap.set(element, styles);
  });
  let i = 0;
  elements.forEach((element) => cloakElement(element, cloakVals[i++]));
  return failedElements;
}
function buildRootMap(roots, nodes) {
  const rootMap = /* @__PURE__ */ new Map();
  roots.forEach((root) => rootMap.set(root, []));
  if (nodes.length == 0)
    return rootMap;
  const NULL_NODE = 1;
  const nodeSet = new Set(nodes);
  const localRootMap = /* @__PURE__ */ new Map();
  function getRoot(node) {
    if (!node)
      return NULL_NODE;
    let root = localRootMap.get(node);
    if (root)
      return root;
    const parent = node.parentNode;
    if (rootMap.has(parent)) {
      root = parent;
    } else if (nodeSet.has(parent)) {
      root = NULL_NODE;
    } else {
      root = getRoot(parent);
    }
    localRootMap.set(node, root);
    return root;
  }
  nodes.forEach((node) => {
    const root = getRoot(node);
    if (root !== NULL_NODE) {
      rootMap.get(root).push(node);
    }
  });
  return rootMap;
}
function addClass(element, className) {
  element.classList?.add(className);
}
function removeClass(element, className) {
  element.classList?.remove(className);
}
function removeNodesAfterAnimationDone(engine, element, players) {
  optimizeGroupPlayer(players).onDone(() => engine.processLeaveNode(element));
}
function flattenGroupPlayers(players) {
  const finalPlayers = [];
  _flattenGroupPlayersRecur(players, finalPlayers);
  return finalPlayers;
}
function _flattenGroupPlayersRecur(players, finalPlayers) {
  for (let i = 0; i < players.length; i++) {
    const player = players[i];
    if (player instanceof AnimationGroupPlayer) {
      _flattenGroupPlayersRecur(player.players, finalPlayers);
    } else {
      finalPlayers.push(player);
    }
  }
}
function objEquals(a, b) {
  const k1 = Object.keys(a);
  const k2 = Object.keys(b);
  if (k1.length != k2.length)
    return false;
  for (let i = 0; i < k1.length; i++) {
    const prop = k1[i];
    if (!b.hasOwnProperty(prop) || a[prop] !== b[prop])
      return false;
  }
  return true;
}
function replacePostStylesAsPre(element, allPreStyleElements, allPostStyleElements) {
  const postEntry = allPostStyleElements.get(element);
  if (!postEntry)
    return false;
  let preEntry = allPreStyleElements.get(element);
  if (preEntry) {
    postEntry.forEach((data) => preEntry.add(data));
  } else {
    allPreStyleElements.set(element, postEntry);
  }
  allPostStyleElements.delete(element);
  return true;
}
var AnimationEngine = class {
  constructor(doc, _driver, _normalizer3, scheduler) {
    this._driver = _driver;
    this._normalizer = _normalizer3;
    this._triggerCache = {};
    this.onRemovalComplete = (element, context) => {
    };
    this._transitionEngine = new TransitionAnimationEngine(doc.body, _driver, _normalizer3, scheduler);
    this._timelineEngine = new TimelineAnimationEngine(doc.body, _driver, _normalizer3);
    this._transitionEngine.onRemovalComplete = (element, context) => this.onRemovalComplete(element, context);
  }
  registerTrigger(componentId, namespaceId, hostElement, name, metadata) {
    const cacheKey = componentId + "-" + name;
    let trigger = this._triggerCache[cacheKey];
    if (!trigger) {
      const errors = [];
      const warnings = [];
      const ast = buildAnimationAst(this._driver, metadata, errors, warnings);
      if (errors.length) {
        throw triggerBuildFailed(name, errors);
      }
      if (warnings.length) {
        warnTriggerBuild(name, warnings);
      }
      trigger = buildTrigger(name, ast, this._normalizer);
      this._triggerCache[cacheKey] = trigger;
    }
    this._transitionEngine.registerTrigger(namespaceId, name, trigger);
  }
  register(namespaceId, hostElement) {
    this._transitionEngine.register(namespaceId, hostElement);
  }
  destroy(namespaceId, context) {
    this._transitionEngine.destroy(namespaceId, context);
  }
  onInsert(namespaceId, element, parent, insertBefore) {
    this._transitionEngine.insertNode(namespaceId, element, parent, insertBefore);
  }
  onRemove(namespaceId, element, context) {
    this._transitionEngine.removeNode(namespaceId, element, context);
  }
  disableAnimations(element, disable) {
    this._transitionEngine.markElementAsDisabled(element, disable);
  }
  process(namespaceId, element, property, value) {
    if (property.charAt(0) == "@") {
      const [id, action] = parseTimelineCommand(property);
      const args = value;
      this._timelineEngine.command(id, element, action, args);
    } else {
      this._transitionEngine.trigger(namespaceId, element, property, value);
    }
  }
  listen(namespaceId, element, eventName, eventPhase, callback) {
    if (eventName.charAt(0) == "@") {
      const [id, action] = parseTimelineCommand(eventName);
      return this._timelineEngine.listen(id, element, action, callback);
    }
    return this._transitionEngine.listen(namespaceId, element, eventName, eventPhase, callback);
  }
  flush(microtaskId = -1) {
    this._transitionEngine.flush(microtaskId);
  }
  get players() {
    return [...this._transitionEngine.players, ...this._timelineEngine.players];
  }
  whenRenderingDone() {
    return this._transitionEngine.whenRenderingDone();
  }
  afterFlushAnimationsDone(cb) {
    this._transitionEngine.afterFlushAnimationsDone(cb);
  }
};
function packageNonAnimatableStyles(element, styles) {
  let startStyles = null;
  let endStyles = null;
  if (Array.isArray(styles) && styles.length) {
    startStyles = filterNonAnimatableStyles(styles[0]);
    if (styles.length > 1) {
      endStyles = filterNonAnimatableStyles(styles[styles.length - 1]);
    }
  } else if (styles instanceof Map) {
    startStyles = filterNonAnimatableStyles(styles);
  }
  return startStyles || endStyles ? new SpecialCasedStyles(element, startStyles, endStyles) : null;
}
var SpecialCasedStyles = class _SpecialCasedStyles {
  static {
    this.initialStylesByElement = /* @__PURE__ */ new WeakMap();
  }
  constructor(_element, _startStyles, _endStyles) {
    this._element = _element;
    this._startStyles = _startStyles;
    this._endStyles = _endStyles;
    this._state = 0;
    let initialStyles = _SpecialCasedStyles.initialStylesByElement.get(_element);
    if (!initialStyles) {
      _SpecialCasedStyles.initialStylesByElement.set(_element, initialStyles = /* @__PURE__ */ new Map());
    }
    this._initialStyles = initialStyles;
  }
  start() {
    if (this._state < 1) {
      if (this._startStyles) {
        setStyles(this._element, this._startStyles, this._initialStyles);
      }
      this._state = 1;
    }
  }
  finish() {
    this.start();
    if (this._state < 2) {
      setStyles(this._element, this._initialStyles);
      if (this._endStyles) {
        setStyles(this._element, this._endStyles);
        this._endStyles = null;
      }
      this._state = 1;
    }
  }
  destroy() {
    this.finish();
    if (this._state < 3) {
      _SpecialCasedStyles.initialStylesByElement.delete(this._element);
      if (this._startStyles) {
        eraseStyles(this._element, this._startStyles);
        this._endStyles = null;
      }
      if (this._endStyles) {
        eraseStyles(this._element, this._endStyles);
        this._endStyles = null;
      }
      setStyles(this._element, this._initialStyles);
      this._state = 3;
    }
  }
};
function filterNonAnimatableStyles(styles) {
  let result = null;
  styles.forEach((val, prop) => {
    if (isNonAnimatableStyle(prop)) {
      result = result || /* @__PURE__ */ new Map();
      result.set(prop, val);
    }
  });
  return result;
}
function isNonAnimatableStyle(prop) {
  return prop === "display" || prop === "position";
}
var WebAnimationsPlayer = class {
  constructor(element, keyframes, options, _specialStyles) {
    this.element = element;
    this.keyframes = keyframes;
    this.options = options;
    this._specialStyles = _specialStyles;
    this._onDoneFns = [];
    this._onStartFns = [];
    this._onDestroyFns = [];
    this._initialized = false;
    this._finished = false;
    this._started = false;
    this._destroyed = false;
    this._originalOnDoneFns = [];
    this._originalOnStartFns = [];
    this.time = 0;
    this.parentPlayer = null;
    this.currentSnapshot = /* @__PURE__ */ new Map();
    this._duration = options["duration"];
    this._delay = options["delay"] || 0;
    this.time = this._duration + this._delay;
  }
  _onFinish() {
    if (!this._finished) {
      this._finished = true;
      this._onDoneFns.forEach((fn) => fn());
      this._onDoneFns = [];
    }
  }
  init() {
    this._buildPlayer();
    this._preparePlayerBeforeStart();
  }
  _buildPlayer() {
    if (this._initialized)
      return;
    this._initialized = true;
    const keyframes = this.keyframes;
    this.domPlayer = this._triggerWebAnimation(this.element, keyframes, this.options);
    this._finalKeyframe = keyframes.length ? keyframes[keyframes.length - 1] : /* @__PURE__ */ new Map();
    const onFinish = () => this._onFinish();
    this.domPlayer.addEventListener("finish", onFinish);
    this.onDestroy(() => {
      this.domPlayer.removeEventListener("finish", onFinish);
    });
  }
  _preparePlayerBeforeStart() {
    if (this._delay) {
      this._resetDomPlayerState();
    } else {
      this.domPlayer.pause();
    }
  }
  _convertKeyframesToObject(keyframes) {
    const kfs = [];
    keyframes.forEach((frame) => {
      kfs.push(Object.fromEntries(frame));
    });
    return kfs;
  }
  /** @internal */
  _triggerWebAnimation(element, keyframes, options) {
    return element.animate(this._convertKeyframesToObject(keyframes), options);
  }
  onStart(fn) {
    this._originalOnStartFns.push(fn);
    this._onStartFns.push(fn);
  }
  onDone(fn) {
    this._originalOnDoneFns.push(fn);
    this._onDoneFns.push(fn);
  }
  onDestroy(fn) {
    this._onDestroyFns.push(fn);
  }
  play() {
    this._buildPlayer();
    if (!this.hasStarted()) {
      this._onStartFns.forEach((fn) => fn());
      this._onStartFns = [];
      this._started = true;
      if (this._specialStyles) {
        this._specialStyles.start();
      }
    }
    this.domPlayer.play();
  }
  pause() {
    this.init();
    this.domPlayer.pause();
  }
  finish() {
    this.init();
    if (this._specialStyles) {
      this._specialStyles.finish();
    }
    this._onFinish();
    this.domPlayer.finish();
  }
  reset() {
    this._resetDomPlayerState();
    this._destroyed = false;
    this._finished = false;
    this._started = false;
    this._onStartFns = this._originalOnStartFns;
    this._onDoneFns = this._originalOnDoneFns;
  }
  _resetDomPlayerState() {
    if (this.domPlayer) {
      this.domPlayer.cancel();
    }
  }
  restart() {
    this.reset();
    this.play();
  }
  hasStarted() {
    return this._started;
  }
  destroy() {
    if (!this._destroyed) {
      this._destroyed = true;
      this._resetDomPlayerState();
      this._onFinish();
      if (this._specialStyles) {
        this._specialStyles.destroy();
      }
      this._onDestroyFns.forEach((fn) => fn());
      this._onDestroyFns = [];
    }
  }
  setPosition(p) {
    if (this.domPlayer === void 0) {
      this.init();
    }
    this.domPlayer.currentTime = p * this.time;
  }
  getPosition() {
    return +(this.domPlayer.currentTime ?? 0) / this.time;
  }
  get totalTime() {
    return this._delay + this._duration;
  }
  beforeDestroy() {
    const styles = /* @__PURE__ */ new Map();
    if (this.hasStarted()) {
      const finalKeyframe = this._finalKeyframe;
      finalKeyframe.forEach((val, prop) => {
        if (prop !== "offset") {
          styles.set(prop, this._finished ? val : computeStyle(this.element, prop));
        }
      });
    }
    this.currentSnapshot = styles;
  }
  /** @internal */
  triggerCallback(phaseName) {
    const methods = phaseName === "start" ? this._onStartFns : this._onDoneFns;
    methods.forEach((fn) => fn());
    methods.length = 0;
  }
};
var WebAnimationsDriver = class {
  validateStyleProperty(prop) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      return validateStyleProperty(prop);
    }
    return true;
  }
  validateAnimatableStyleProperty(prop) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      const cssProp = camelCaseToDashCase(prop);
      return validateWebAnimatableStyleProperty(cssProp);
    }
    return true;
  }
  matchesElement(_element, _selector) {
    return false;
  }
  containsElement(elm1, elm2) {
    return containsElement(elm1, elm2);
  }
  getParentElement(element) {
    return getParentElement(element);
  }
  query(element, selector, multi) {
    return invokeQuery(element, selector, multi);
  }
  computeStyle(element, prop, defaultValue) {
    return computeStyle(element, prop);
  }
  animate(element, keyframes, duration, delay, easing, previousPlayers = []) {
    const fill = delay == 0 ? "both" : "forwards";
    const playerOptions = {
      duration,
      delay,
      fill
    };
    if (easing) {
      playerOptions["easing"] = easing;
    }
    const previousStyles = /* @__PURE__ */ new Map();
    const previousWebAnimationPlayers = previousPlayers.filter((player) => player instanceof WebAnimationsPlayer);
    if (allowPreviousPlayerStylesMerge(duration, delay)) {
      previousWebAnimationPlayers.forEach((player) => {
        player.currentSnapshot.forEach((val, prop) => previousStyles.set(prop, val));
      });
    }
    let _keyframes = normalizeKeyframes(keyframes).map((styles) => new Map(styles));
    _keyframes = balancePreviousStylesIntoKeyframes(element, _keyframes, previousStyles);
    const specialStyles = packageNonAnimatableStyles(element, _keyframes);
    return new WebAnimationsPlayer(element, _keyframes, playerOptions, specialStyles);
  }
};
var ANIMATION_PREFIX = "@";
var DISABLE_ANIMATIONS_FLAG = "@.disabled";
var BaseAnimationRenderer = class {
  constructor(namespaceId, delegate, engine, _onDestroy) {
    this.namespaceId = namespaceId;
    this.delegate = delegate;
    this.engine = engine;
    this._onDestroy = _onDestroy;
    this.\u0275type = 0;
  }
  get data() {
    return this.delegate.data;
  }
  destroyNode(node) {
    this.delegate.destroyNode?.(node);
  }
  destroy() {
    this.engine.destroy(this.namespaceId, this.delegate);
    this.engine.afterFlushAnimationsDone(() => {
      queueMicrotask(() => {
        this.delegate.destroy();
      });
    });
    this._onDestroy?.();
  }
  createElement(name, namespace) {
    return this.delegate.createElement(name, namespace);
  }
  createComment(value) {
    return this.delegate.createComment(value);
  }
  createText(value) {
    return this.delegate.createText(value);
  }
  appendChild(parent, newChild) {
    this.delegate.appendChild(parent, newChild);
    this.engine.onInsert(this.namespaceId, newChild, parent, false);
  }
  insertBefore(parent, newChild, refChild, isMove = true) {
    this.delegate.insertBefore(parent, newChild, refChild);
    this.engine.onInsert(this.namespaceId, newChild, parent, isMove);
  }
  removeChild(parent, oldChild, isHostElement) {
    this.engine.onRemove(this.namespaceId, oldChild, this.delegate);
  }
  selectRootElement(selectorOrNode, preserveContent) {
    return this.delegate.selectRootElement(selectorOrNode, preserveContent);
  }
  parentNode(node) {
    return this.delegate.parentNode(node);
  }
  nextSibling(node) {
    return this.delegate.nextSibling(node);
  }
  setAttribute(el, name, value, namespace) {
    this.delegate.setAttribute(el, name, value, namespace);
  }
  removeAttribute(el, name, namespace) {
    this.delegate.removeAttribute(el, name, namespace);
  }
  addClass(el, name) {
    this.delegate.addClass(el, name);
  }
  removeClass(el, name) {
    this.delegate.removeClass(el, name);
  }
  setStyle(el, style2, value, flags) {
    this.delegate.setStyle(el, style2, value, flags);
  }
  removeStyle(el, style2, flags) {
    this.delegate.removeStyle(el, style2, flags);
  }
  setProperty(el, name, value) {
    if (name.charAt(0) == ANIMATION_PREFIX && name == DISABLE_ANIMATIONS_FLAG) {
      this.disableAnimations(el, !!value);
    } else {
      this.delegate.setProperty(el, name, value);
    }
  }
  setValue(node, value) {
    this.delegate.setValue(node, value);
  }
  listen(target, eventName, callback) {
    return this.delegate.listen(target, eventName, callback);
  }
  disableAnimations(element, value) {
    this.engine.disableAnimations(element, value);
  }
};
var AnimationRenderer = class extends BaseAnimationRenderer {
  constructor(factory, namespaceId, delegate, engine, onDestroy) {
    super(namespaceId, delegate, engine, onDestroy);
    this.factory = factory;
    this.namespaceId = namespaceId;
  }
  setProperty(el, name, value) {
    if (name.charAt(0) == ANIMATION_PREFIX) {
      if (name.charAt(1) == "." && name == DISABLE_ANIMATIONS_FLAG) {
        value = value === void 0 ? true : !!value;
        this.disableAnimations(el, value);
      } else {
        this.engine.process(this.namespaceId, el, name.slice(1), value);
      }
    } else {
      this.delegate.setProperty(el, name, value);
    }
  }
  listen(target, eventName, callback) {
    if (eventName.charAt(0) == ANIMATION_PREFIX) {
      const element = resolveElementFromTarget(target);
      let name = eventName.slice(1);
      let phase = "";
      if (name.charAt(0) != ANIMATION_PREFIX) {
        [name, phase] = parseTriggerCallbackName(name);
      }
      return this.engine.listen(this.namespaceId, element, name, phase, (event) => {
        const countId = event["_data"] || -1;
        this.factory.scheduleListenerCallback(countId, callback, event);
      });
    }
    return this.delegate.listen(target, eventName, callback);
  }
};
function resolveElementFromTarget(target) {
  switch (target) {
    case "body":
      return document.body;
    case "document":
      return document;
    case "window":
      return window;
    default:
      return target;
  }
}
function parseTriggerCallbackName(triggerName) {
  const dotIndex = triggerName.indexOf(".");
  const trigger = triggerName.substring(0, dotIndex);
  const phase = triggerName.slice(dotIndex + 1);
  return [trigger, phase];
}
var AnimationRendererFactory = class {
  constructor(delegate, engine, _zone) {
    this.delegate = delegate;
    this.engine = engine;
    this._zone = _zone;
    this._currentId = 0;
    this._microtaskId = 1;
    this._animationCallbacksBuffer = [];
    this._rendererCache = /* @__PURE__ */ new Map();
    this._cdRecurDepth = 0;
    engine.onRemovalComplete = (element, delegate2) => {
      const parentNode = delegate2?.parentNode(element);
      if (parentNode) {
        delegate2.removeChild(parentNode, element);
      }
    };
  }
  createRenderer(hostElement, type) {
    const EMPTY_NAMESPACE_ID = "";
    const delegate = this.delegate.createRenderer(hostElement, type);
    if (!hostElement || !type?.data?.["animation"]) {
      const cache = this._rendererCache;
      let renderer = cache.get(delegate);
      if (!renderer) {
        const onRendererDestroy = () => cache.delete(delegate);
        renderer = new BaseAnimationRenderer(EMPTY_NAMESPACE_ID, delegate, this.engine, onRendererDestroy);
        cache.set(delegate, renderer);
      }
      return renderer;
    }
    const componentId = type.id;
    const namespaceId = type.id + "-" + this._currentId;
    this._currentId++;
    this.engine.register(namespaceId, hostElement);
    const registerTrigger = (trigger) => {
      if (Array.isArray(trigger)) {
        trigger.forEach(registerTrigger);
      } else {
        this.engine.registerTrigger(componentId, namespaceId, hostElement, trigger.name, trigger);
      }
    };
    const animationTriggers = type.data["animation"];
    animationTriggers.forEach(registerTrigger);
    return new AnimationRenderer(this, namespaceId, delegate, this.engine);
  }
  begin() {
    this._cdRecurDepth++;
    if (this.delegate.begin) {
      this.delegate.begin();
    }
  }
  _scheduleCountTask() {
    queueMicrotask(() => {
      this._microtaskId++;
    });
  }
  /** @internal */
  scheduleListenerCallback(count, fn, data) {
    if (count >= 0 && count < this._microtaskId) {
      this._zone.run(() => fn(data));
      return;
    }
    const animationCallbacksBuffer = this._animationCallbacksBuffer;
    if (animationCallbacksBuffer.length == 0) {
      queueMicrotask(() => {
        this._zone.run(() => {
          animationCallbacksBuffer.forEach((tuple) => {
            const [fn2, data2] = tuple;
            fn2(data2);
          });
          this._animationCallbacksBuffer = [];
        });
      });
    }
    animationCallbacksBuffer.push([fn, data]);
  }
  end() {
    this._cdRecurDepth--;
    if (this._cdRecurDepth == 0) {
      this._zone.runOutsideAngular(() => {
        this._scheduleCountTask();
        this.engine.flush(this._microtaskId);
      });
    }
    if (this.delegate.end) {
      this.delegate.end();
    }
  }
  whenRenderingDone() {
    return this.engine.whenRenderingDone();
  }
};

// node_modules/@angular/platform-browser/fesm2022/animations.mjs
var InjectableAnimationEngine = class _InjectableAnimationEngine extends AnimationEngine {
  // The `ApplicationRef` is injected here explicitly to force the dependency ordering.
  // Since the `ApplicationRef` should be created earlier before the `AnimationEngine`, they
  // both have `ngOnDestroy` hooks and `flush()` must be called after all views are destroyed.
  constructor(doc, driver, normalizer) {
    super(doc, driver, normalizer, inject(ChangeDetectionScheduler, {
      optional: true
    }));
  }
  ngOnDestroy() {
    this.flush();
  }
  static {
    this.\u0275fac = function InjectableAnimationEngine_Factory(t) {
      return new (t || _InjectableAnimationEngine)(\u0275\u0275inject(DOCUMENT), \u0275\u0275inject(AnimationDriver), \u0275\u0275inject(AnimationStyleNormalizer));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
      token: _InjectableAnimationEngine,
      factory: _InjectableAnimationEngine.\u0275fac
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InjectableAnimationEngine, [{
    type: Injectable
  }], () => [{
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: AnimationDriver
  }, {
    type: AnimationStyleNormalizer
  }], null);
})();
function instantiateDefaultStyleNormalizer() {
  return new WebAnimationsStyleNormalizer();
}
function instantiateRendererFactory(renderer, engine, zone) {
  return new AnimationRendererFactory(renderer, engine, zone);
}
var SHARED_ANIMATION_PROVIDERS = [{
  provide: AnimationStyleNormalizer,
  useFactory: instantiateDefaultStyleNormalizer
}, {
  provide: AnimationEngine,
  useClass: InjectableAnimationEngine
}, {
  provide: RendererFactory2,
  useFactory: instantiateRendererFactory,
  deps: [DomRendererFactory2, AnimationEngine, NgZone]
}];
var BROWSER_ANIMATIONS_PROVIDERS = [{
  provide: AnimationDriver,
  useFactory: () => new WebAnimationsDriver()
}, {
  provide: ANIMATION_MODULE_TYPE,
  useValue: "BrowserAnimations"
}, ...SHARED_ANIMATION_PROVIDERS];
var BROWSER_NOOP_ANIMATIONS_PROVIDERS = [{
  provide: AnimationDriver,
  useClass: NoopAnimationDriver
}, {
  provide: ANIMATION_MODULE_TYPE,
  useValue: "NoopAnimations"
}, ...SHARED_ANIMATION_PROVIDERS];
var BrowserAnimationsModule = class _BrowserAnimationsModule {
  /**
   * Configures the module based on the specified object.
   *
   * @param config Object used to configure the behavior of the `BrowserAnimationsModule`.
   * @see {@link BrowserAnimationsModuleConfig}
   *
   * @usageNotes
   * When registering the `BrowserAnimationsModule`, you can use the `withConfig`
   * function as follows:
   * ```
   * @NgModule({
   *   imports: [BrowserAnimationsModule.withConfig(config)]
   * })
   * class MyNgModule {}
   * ```
   */
  static withConfig(config) {
    return {
      ngModule: _BrowserAnimationsModule,
      providers: config.disableAnimations ? BROWSER_NOOP_ANIMATIONS_PROVIDERS : BROWSER_ANIMATIONS_PROVIDERS
    };
  }
  static {
    this.\u0275fac = function BrowserAnimationsModule_Factory(t) {
      return new (t || _BrowserAnimationsModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _BrowserAnimationsModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      providers: BROWSER_ANIMATIONS_PROVIDERS,
      imports: [BrowserModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrowserAnimationsModule, [{
    type: NgModule,
    args: [{
      exports: [BrowserModule],
      providers: BROWSER_ANIMATIONS_PROVIDERS
    }]
  }], null, null);
})();
function provideAnimations() {
  performanceMarkFeature("NgEagerAnimations");
  return [...BROWSER_ANIMATIONS_PROVIDERS];
}
var NoopAnimationsModule = class _NoopAnimationsModule {
  static {
    this.\u0275fac = function NoopAnimationsModule_Factory(t) {
      return new (t || _NoopAnimationsModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
      type: _NoopAnimationsModule
    });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
      providers: BROWSER_NOOP_ANIMATIONS_PROVIDERS,
      imports: [BrowserModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NoopAnimationsModule, [{
    type: NgModule,
    args: [{
      exports: [BrowserModule],
      providers: BROWSER_NOOP_ANIMATIONS_PROVIDERS
    }]
  }], null, null);
})();

// src/app/app.routes.ts
var routes = [
  { path: "", loadComponent: () => import("./chunk-S7YUPNMV.js").then((m) => m.HeroComponent) },
  { path: "destination/:name", loadComponent: () => import("./chunk-GIP67CP2.js").then((m) => m.DestinationPageComponent) },
  { path: "experience/:name", loadComponent: () => import("./chunk-7OTJNATO.js").then((m) => m.CategoryPageComponent) },
  { path: "**", redirectTo: "" }
];

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideRouter(routes, withInMemoryScrolling({ scrollPositionRestoration: "top" })),
    provideAnimations()
  ]
};

// src/main.ts
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
/*! Bundled license information:

gsap/Observer.js:
  (*!
   * Observer 3.14.2
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/ScrollTrigger.js:
  (*!
   * ScrollTrigger 3.14.2
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

@angular/animations/fesm2022/animations.mjs:
  (**
   * @license Angular v17.3.12
   * (c) 2010-2024 Google LLC. https://angular.io/
   * License: MIT
   *)

@angular/animations/fesm2022/browser.mjs:
  (**
   * @license Angular v17.3.12
   * (c) 2010-2024 Google LLC. https://angular.io/
   * License: MIT
   *)

@angular/platform-browser/fesm2022/animations.mjs:
  (**
   * @license Angular v17.3.12
   * (c) 2010-2024 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
//# sourceMappingURL=main.js.map
