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
  ActivatedRoute,
  Router
} from "./chunk-SDN65SGC.js";
import {
  CommonModule,
  DecimalPipe,
  NgForOf,
  NgIf,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-U7W74ZSJ.js";

// src/app/components/destination-page/destination-page.component.ts
function DestinationPageComponent_div_0_div_25_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 33);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pkg_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(pkg_r4.badge);
  }
}
function DestinationPageComponent_div_0_div_25_li_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275element(1, "i", 34);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const h_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", h_r5, " ");
  }
}
function DestinationPageComponent_div_0_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 19);
    \u0275\u0275element(2, "img", 20);
    \u0275\u0275elementStart(3, "span", 21);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, DestinationPageComponent_div_0_div_25_span_5_Template, 2, 1, "span", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 23)(7, "h3");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "ul", 24);
    \u0275\u0275template(10, DestinationPageComponent_div_0_div_25_li_10_Template, 3, 1, "li", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 26)(12, "div", 27)(13, "span", 28);
    \u0275\u0275text(14, "Starting from");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 29);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 30);
    \u0275\u0275text(19, "per person");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "button", 31);
    \u0275\u0275listener("click", function DestinationPageComponent_div_0_div_25_Template_button_click_20_listener() {
      const pkg_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openDetail(pkg_r4));
    });
    \u0275\u0275text(21, " View Details ");
    \u0275\u0275element(22, "i", 32);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const pkg_r4 = ctx.$implicit;
    const i_r6 = ctx.index;
    \u0275\u0275classProp("featured", i_r6 === 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", pkg_r4.image, \u0275\u0275sanitizeUrl)("alt", pkg_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(pkg_r4.duration);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", pkg_r4.badge);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(pkg_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", pkg_r4.highlights.slice(0, 3));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("\u20B9 ", \u0275\u0275pipeBind1(17, 9, pkg_r4.price), "");
  }
}
function DestinationPageComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "section", 4);
    \u0275\u0275element(2, "div", 5);
    \u0275\u0275elementStart(3, "div", 6)(4, "button", 7);
    \u0275\u0275listener("click", function DestinationPageComponent_div_0_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goHome());
    });
    \u0275\u0275element(5, "i", 8);
    \u0275\u0275text(6, " Back ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 9);
    \u0275\u0275element(8, "i", 10);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "h1");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "section", 11)(15, "div", 12)(16, "div", 13)(17, "span", 14);
    \u0275\u0275element(18, "i", 15);
    \u0275\u0275text(19, " Choose Your Plan");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "h2");
    \u0275\u0275text(21, "Select Your Package");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "p");
    \u0275\u0275text(23, "Pick the duration that suits you best \u2014 every package includes flights, hotels & guided tours");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 16);
    \u0275\u0275template(25, DestinationPageComponent_div_0_div_25_Template, 23, 11, "div", 17);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-image", "url(" + ctx_r1.dest.heroImage + ")");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", ctx_r1.isInternational ? "International" : "Domestic", "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.dest.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.dest.tagline);
    \u0275\u0275advance(12);
    \u0275\u0275property("ngForOf", ctx_r1.dest.packages);
  }
}
function DestinationPageComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275element(1, "i", 36);
    \u0275\u0275elementStart(2, "h2");
    \u0275\u0275text(3, "Destination not found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 37);
    \u0275\u0275listener("click", function DestinationPageComponent_ng_template_1_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goHome());
    });
    \u0275\u0275text(5, "Go Home");
    \u0275\u0275elementEnd()();
  }
}
function DestinationPageComponent_div_3_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 81);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.detailPkg.badge);
  }
}
function DestinationPageComponent_div_3_li_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275element(1, "i", 34);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const h_r9 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", h_r9, " ");
  }
}
function DestinationPageComponent_div_3_div_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 82)(1, "div", 83);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 84)(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const day_r10 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Day ", day_r10.day, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(day_r10.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(day_r10.description);
  }
}
function DestinationPageComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275listener("click", function DestinationPageComponent_div_3_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeAll());
    });
    \u0275\u0275elementStart(1, "div", 39);
    \u0275\u0275listener("click", function DestinationPageComponent_div_3_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r8);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 40);
    \u0275\u0275element(3, "div", 41);
    \u0275\u0275elementStart(4, "button", 42);
    \u0275\u0275listener("click", function DestinationPageComponent_div_3_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeAll());
    });
    \u0275\u0275element(5, "i", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 44);
    \u0275\u0275template(7, DestinationPageComponent_div_3_span_7_Template, 2, 1, "span", 45);
    \u0275\u0275elementStart(8, "h2");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p");
    \u0275\u0275element(11, "i", 10);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 46)(14, "div", 47)(15, "div", 48)(16, "h4");
    \u0275\u0275element(17, "i", 49);
    \u0275\u0275text(18, " Tour Highlights");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "ul");
    \u0275\u0275template(20, DestinationPageComponent_div_3_li_20_Template, 3, 1, "li", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 48)(22, "h4");
    \u0275\u0275element(23, "i", 50);
    \u0275\u0275text(24, " What's Included");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 51)(26, "div", 52);
    \u0275\u0275element(27, "i", 53);
    \u0275\u0275elementStart(28, "span");
    \u0275\u0275text(29, "Flights");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 52);
    \u0275\u0275element(31, "i", 54);
    \u0275\u0275elementStart(32, "span");
    \u0275\u0275text(33, "Hotels");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 52);
    \u0275\u0275element(35, "i", 55);
    \u0275\u0275elementStart(36, "span");
    \u0275\u0275text(37, "Meals");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 52);
    \u0275\u0275element(39, "i", 56);
    \u0275\u0275elementStart(40, "span");
    \u0275\u0275text(41, "Transfers");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 52);
    \u0275\u0275element(43, "i", 57);
    \u0275\u0275elementStart(44, "span");
    \u0275\u0275text(45, "Sightseeing");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div", 52);
    \u0275\u0275element(47, "i", 58);
    \u0275\u0275elementStart(48, "span");
    \u0275\u0275text(49, "Tour Guide");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div", 52);
    \u0275\u0275element(51, "i", 59);
    \u0275\u0275elementStart(52, "span");
    \u0275\u0275text(53, "Travel Insurance");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "div", 52);
    \u0275\u0275element(55, "i", 60);
    \u0275\u0275elementStart(56, "span");
    \u0275\u0275text(57, "24/7 Support");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(58, "div", 48)(59, "h4");
    \u0275\u0275element(60, "i", 61);
    \u0275\u0275text(61, " Day-wise Itinerary");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "div", 62);
    \u0275\u0275template(63, DestinationPageComponent_div_3_div_63_Template, 8, 3, "div", 63);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(64, "div", 64)(65, "div", 65)(66, "span", 66);
    \u0275\u0275text(67, "STARTING FROM");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "div", 67);
    \u0275\u0275text(69);
    \u0275\u0275pipe(70, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "span", 68);
    \u0275\u0275text(72, "per person (twin sharing)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "ul", 69)(74, "li");
    \u0275\u0275element(75, "i", 59);
    \u0275\u0275text(76, " 100% Safe & Secure");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "li");
    \u0275\u0275element(78, "i", 70);
    \u0275\u0275text(79, " Best Price Guarantee");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "li");
    \u0275\u0275element(81, "i", 60);
    \u0275\u0275text(82, " 24/7 Support");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "li");
    \u0275\u0275element(84, "i", 71);
    \u0275\u0275text(85, " Free Cancellation");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(86, "button", 72);
    \u0275\u0275listener("click", function DestinationPageComponent_div_3_Template_button_click_86_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.switchToBooking());
    });
    \u0275\u0275element(87, "i", 73);
    \u0275\u0275text(88, " Book This Tour ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(89, "a", 74);
    \u0275\u0275element(90, "i", 75);
    \u0275\u0275text(91, " Call: +91 94224 21993 ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(92, "div", 76)(93, "div", 77)(94, "div", 78);
    \u0275\u0275element(95, "i", 79);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(96, "div")(97, "span");
    \u0275\u0275text(98, "Duration");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(99, "strong");
    \u0275\u0275text(100);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(101, "div", 77)(102, "div", 78);
    \u0275\u0275element(103, "i", 80);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(104, "div")(105, "span");
    \u0275\u0275text(106, "Group Size");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(107, "strong");
    \u0275\u0275text(108);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(109, "div", 77)(110, "div", 78);
    \u0275\u0275element(111, "i", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(112, "div")(113, "span");
    \u0275\u0275text(114, "Transport");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(115, "strong");
    \u0275\u0275text(116);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(117, "div", 77)(118, "div", 78);
    \u0275\u0275element(119, "i", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(120, "div")(121, "span");
    \u0275\u0275text(122, "Accommodation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(123, "strong");
    \u0275\u0275text(124);
    \u0275\u0275elementEnd()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background-image", "url(" + ctx_r1.detailPkg.image + ")");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.detailPkg.badge);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.detailPkg.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", ctx_r1.detailPkg.itinerary[1].title, ", ", ctx_r1.detailPkg.itinerary[2].title, "...");
    \u0275\u0275advance(8);
    \u0275\u0275property("ngForOf", ctx_r1.detailPkg.highlights);
    \u0275\u0275advance(43);
    \u0275\u0275property("ngForOf", ctx_r1.detailPkg.itinerary);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("\u20B9 ", \u0275\u0275pipeBind1(70, 14, ctx_r1.detailPkg.price), "");
    \u0275\u0275advance(31);
    \u0275\u0275textInterpolate2("", ctx_r1.detailPkg.nights, " Nights / ", ctx_r1.detailPkg.nights + 1, " Days");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.detailPkg.groupSize);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.detailPkg.transport);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.detailPkg.accommodation);
  }
}
function DestinationPageComponent_div_4_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 90)(1, "h3");
    \u0275\u0275element(2, "i", 73);
    \u0275\u0275text(3, " Book This Tour");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "form", 91);
    \u0275\u0275listener("ngSubmit", function DestinationPageComponent_div_4_div_15_Template_form_ngSubmit_4_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.submitBooking());
    });
    \u0275\u0275elementStart(5, "div", 92)(6, "div", 93)(7, "label");
    \u0275\u0275text(8, "FULL NAME *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 94);
    \u0275\u0275element(10, "i", 95);
    \u0275\u0275elementStart(11, "input", 96);
    \u0275\u0275twoWayListener("ngModelChange", function DestinationPageComponent_div_4_div_15_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.booking.name, $event) || (ctx_r1.booking.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 93)(13, "label");
    \u0275\u0275text(14, "PHONE *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 94);
    \u0275\u0275element(16, "i", 75);
    \u0275\u0275elementStart(17, "input", 97);
    \u0275\u0275twoWayListener("ngModelChange", function DestinationPageComponent_div_4_div_15_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.booking.phone, $event) || (ctx_r1.booking.phone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(18, "div", 92)(19, "div", 93)(20, "label");
    \u0275\u0275text(21, "EMAIL");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 94);
    \u0275\u0275element(23, "i", 98);
    \u0275\u0275elementStart(24, "input", 99);
    \u0275\u0275twoWayListener("ngModelChange", function DestinationPageComponent_div_4_div_15_Template_input_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.booking.email, $event) || (ctx_r1.booking.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 93)(26, "label");
    \u0275\u0275text(27, "TRAVEL DATE");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 94);
    \u0275\u0275element(29, "i", 100);
    \u0275\u0275elementStart(30, "input", 101);
    \u0275\u0275twoWayListener("ngModelChange", function DestinationPageComponent_div_4_div_15_Template_input_ngModelChange_30_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.booking.date, $event) || (ctx_r1.booking.date = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(31, "div", 92)(32, "div", 93)(33, "label");
    \u0275\u0275text(34, "TRAVELERS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 102);
    \u0275\u0275element(36, "i", 80);
    \u0275\u0275elementStart(37, "select", 103);
    \u0275\u0275twoWayListener("ngModelChange", function DestinationPageComponent_div_4_div_15_Template_select_ngModelChange_37_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.booking.travelers, $event) || (ctx_r1.booking.travelers = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(38, "option", 104);
    \u0275\u0275text(39, "1 Person");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "option", 105);
    \u0275\u0275text(41, "2 People");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "option", 106);
    \u0275\u0275text(43, "3 People");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "option", 107);
    \u0275\u0275text(45, "4 People");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "option", 108);
    \u0275\u0275text(47, "5 People");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "option", 109);
    \u0275\u0275text(49, "6+ People");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(50, "i", 110);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "div", 93)(52, "label");
    \u0275\u0275text(53, "SPECIAL REQUESTS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "div", 94);
    \u0275\u0275element(55, "i", 111);
    \u0275\u0275elementStart(56, "input", 112);
    \u0275\u0275twoWayListener("ngModelChange", function DestinationPageComponent_div_4_div_15_Template_input_ngModelChange_56_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.booking.special, $event) || (ctx_r1.booking.special = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(57, "button", 113);
    \u0275\u0275element(58, "i", 114);
    \u0275\u0275text(59, " Send Booking Request ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "a", 74);
    \u0275\u0275element(61, "i", 75);
    \u0275\u0275text(62, " +91 94224 21993 ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.booking.name);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.booking.phone);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.booking.email);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.booking.date);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.booking.travelers);
    \u0275\u0275advance(19);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.booking.special);
  }
}
function DestinationPageComponent_div_4_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 115)(1, "div", 116);
    \u0275\u0275element(2, "i", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "Booking Request Sent!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Our team will contact you within 24 hours to confirm your tour.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 37);
    \u0275\u0275listener("click", function DestinationPageComponent_div_4_div_16_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.closeAll());
    });
    \u0275\u0275text(8, "Done");
    \u0275\u0275elementEnd()();
  }
}
function DestinationPageComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275listener("click", function DestinationPageComponent_div_4_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeAll());
    });
    \u0275\u0275elementStart(1, "div", 85);
    \u0275\u0275listener("click", function DestinationPageComponent_div_4_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r11);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 86);
    \u0275\u0275element(3, "div", 41);
    \u0275\u0275elementStart(4, "button", 42);
    \u0275\u0275listener("click", function DestinationPageComponent_div_4_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeAll());
    });
    \u0275\u0275element(5, "i", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 44)(7, "h2");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 87)(10, "span", 29);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 30);
    \u0275\u0275text(14, "per person");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(15, DestinationPageComponent_div_4_div_15_Template, 63, 6, "div", 88)(16, DestinationPageComponent_div_4_div_16_Template, 9, 0, "div", 89);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background-image", "url(" + ctx_r1.bookingPkg.image + ")");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.bookingPkg.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u20B9 ", \u0275\u0275pipeBind1(12, 6, ctx_r1.bookingPkg.price), "");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", !ctx_r1.bookingSent);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.bookingSent);
  }
}
var DestinationPageComponent = class _DestinationPageComponent {
  constructor(route, router, data) {
    this.route = route;
    this.router = router;
    this.data = data;
    this.notFound = false;
    this.isInternational = false;
    this.detailPkg = null;
    this.bookingPkg = null;
    this.booking = { name: "", phone: "", email: "", date: "", travelers: "2", special: "" };
    this.bookingSent = false;
  }
  ngOnInit() {
    const key = this.route.snapshot.paramMap.get("name")?.toLowerCase() ?? "";
    if (this.data.internationalDestinationPages[key]) {
      this.dest = this.data.internationalDestinationPages[key];
      this.isInternational = true;
    } else if (this.data.domesticDestinationPages[key]) {
      this.dest = this.data.domesticDestinationPages[key];
    } else {
      this.notFound = true;
    }
  }
  openDetail(pkg) {
    this.detailPkg = pkg;
    this.bookingPkg = null;
    document.body.style.overflow = "hidden";
  }
  openBooking(pkg) {
    this.bookingPkg = pkg;
    this.detailPkg = null;
    this.bookingSent = false;
    this.booking = { name: "", phone: "", email: "", date: "", travelers: "2", special: "" };
    document.body.style.overflow = "hidden";
  }
  closeAll() {
    this.detailPkg = null;
    this.bookingPkg = null;
    document.body.style.overflow = "";
  }
  switchToBooking() {
    if (this.detailPkg) {
      this.openBooking(this.detailPkg);
    }
  }
  submitBooking() {
    this.bookingSent = true;
  }
  goHome() {
    this.router.navigate(["/"]);
  }
  onEsc() {
    this.closeAll();
  }
  static {
    this.\u0275fac = function DestinationPageComponent_Factory(t) {
      return new (t || _DestinationPageComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(DataService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DestinationPageComponent, selectors: [["app-destination-page"]], hostBindings: function DestinationPageComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("keydown.escape", function DestinationPageComponent_keydown_escape_HostBindingHandler() {
          return ctx.onEsc();
        }, false, \u0275\u0275resolveDocument);
      }
    }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 5, vars: 4, consts: [["notFoundTpl", ""], ["class", "dest-page", 4, "ngIf", "ngIfElse"], ["class", "dp-overlay", 3, "click", 4, "ngIf"], [1, "dest-page"], [1, "dp-hero"], [1, "dp-hero-overlay"], [1, "dp-hero-content"], [1, "dp-back", 3, "click"], [1, "fas", "fa-arrow-left"], [1, "dp-hero-tag"], [1, "fas", "fa-map-marker-alt"], [1, "dp-packages"], [1, "container"], [1, "section-header"], [1, "section-tag"], [1, "fas", "fa-suitcase-rolling"], [1, "dp-pkg-grid"], ["class", "dp-pkg-card", 3, "featured", 4, "ngFor", "ngForOf"], [1, "dp-pkg-card"], [1, "dp-pkg-img-wrap"], ["loading", "lazy", 3, "src", "alt"], [1, "dp-duration-tag"], ["class", "dp-badge", 4, "ngIf"], [1, "dp-pkg-body"], [1, "dp-highlights"], [4, "ngFor", "ngForOf"], [1, "dp-pkg-footer"], [1, "dp-price"], [1, "dp-from"], [1, "dp-amount"], [1, "dp-pp"], [1, "btn", "btn-outline", "btn-sm", "dp-view-btn", 3, "click"], [1, "fas", "fa-arrow-right"], [1, "dp-badge"], [1, "fas", "fa-check-circle"], [1, "dp-notfound"], [1, "fas", "fa-map-marked-alt"], [1, "btn", "btn-primary", 3, "click"], [1, "dp-overlay", 3, "click"], [1, "dp-dialog", "dp-dialog--detail", 3, "click"], [1, "dp-dlg-hero"], [1, "dp-dlg-hero-overlay"], [1, "dp-dlg-close", 3, "click"], [1, "fas", "fa-times"], [1, "dp-dlg-hero-info"], ["class", "dp-badge dp-badge--hero", 4, "ngIf"], [1, "dp-dlg-body"], [1, "dp-dlg-left"], [1, "dp-dlg-section"], [1, "fas", "fa-star"], [1, "fas", "fa-check"], [1, "dp-inclusions"], [1, "dp-inc-item"], [1, "fas", "fa-plane"], [1, "fas", "fa-hotel"], [1, "fas", "fa-utensils"], [1, "fas", "fa-bus"], [1, "fas", "fa-camera"], [1, "fas", "fa-user-tie"], [1, "fas", "fa-shield-alt"], [1, "fas", "fa-headset"], [1, "fas", "fa-route"], [1, "dp-itinerary"], ["class", "dp-itin-item", 4, "ngFor", "ngForOf"], [1, "dp-dlg-right"], [1, "dp-price-card"], [1, "dp-price-label"], [1, "dp-price-big"], [1, "dp-price-sub"], [1, "dp-trust"], [1, "fas", "fa-tag"], [1, "fas", "fa-undo"], [1, "btn", "btn-primary", "dp-book-btn", 3, "click"], [1, "fas", "fa-calendar-check"], ["href", "tel:+919422421993", 1, "btn", "btn-outline", "dp-call-btn"], [1, "fas", "fa-phone"], [1, "dp-meta-card"], [1, "dp-meta-item"], [1, "dp-meta-icon"], [1, "fas", "fa-clock"], [1, "fas", "fa-users"], [1, "dp-badge", "dp-badge--hero"], [1, "dp-itin-item"], [1, "dp-day-badge"], [1, "dp-day-content"], [1, "dp-dialog", "dp-dialog--booking", 3, "click"], [1, "dp-dlg-hero", "dp-dlg-hero--sm"], [1, "dp-booking-price"], ["class", "dp-booking-body", 4, "ngIf"], ["class", "dp-booking-success", 4, "ngIf"], [1, "dp-booking-body"], [1, "dp-booking-form", 3, "ngSubmit"], [1, "dp-form-row"], [1, "dp-form-group"], [1, "dp-input-wrap"], [1, "fas", "fa-user"], ["type", "text", "name", "name", "placeholder", "Your name", "required", "", 3, "ngModelChange", "ngModel"], ["type", "tel", "name", "phone", "placeholder", "+91 XXXXX XXXXX", "required", "", 3, "ngModelChange", "ngModel"], [1, "fas", "fa-envelope"], ["type", "email", "name", "email", "placeholder", "your@email.com", 3, "ngModelChange", "ngModel"], [1, "fas", "fa-calendar"], ["type", "date", "name", "date", 3, "ngModelChange", "ngModel"], [1, "dp-input-wrap", "dp-select-wrap"], ["name", "travelers", 3, "ngModelChange", "ngModel"], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], ["value", "5"], ["value", "6+"], [1, "fas", "fa-chevron-down", "dp-select-arrow"], [1, "fas", "fa-comment"], ["type", "text", "name", "special", "placeholder", "Any special needs...", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "btn", "btn-primary", "dp-submit-btn"], [1, "fas", "fa-paper-plane"], [1, "dp-booking-success"], [1, "dp-success-icon"]], template: function DestinationPageComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, DestinationPageComponent_div_0_Template, 26, 6, "div", 1)(1, DestinationPageComponent_ng_template_1_Template, 6, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(3, DestinationPageComponent_div_3_Template, 125, 16, "div", 2)(4, DestinationPageComponent_div_4_Template, 17, 8, "div", 2);
      }
      if (rf & 2) {
        const notFoundTpl_r14 = \u0275\u0275reference(2);
        \u0275\u0275property("ngIf", ctx.dest)("ngIfElse", notFoundTpl_r14);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.detailPkg);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.bookingPkg);
      }
    }, dependencies: [CommonModule, NgForOf, NgIf, DecimalPipe, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm], styles: ["\n\n.dp-hero[_ngcontent-%COMP%] {\n  height: 70vh;\n  min-height: 480px;\n  background-size: cover;\n  background-position: center;\n  position: relative;\n  display: flex;\n  align-items: flex-end;\n}\n.dp-hero[_ngcontent-%COMP%]   .dp-hero-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      to top,\n      rgba(0, 0, 0, 0.75) 0%,\n      rgba(0, 0, 0, 0.2) 60%,\n      transparent 100%);\n}\n.dp-hero[_ngcontent-%COMP%]   .dp-hero-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  padding: 3rem 2rem;\n  max-width: 1280px;\n  width: 100%;\n  margin: 0 auto;\n  animation: fadeInUp 0.7s ease both;\n}\n.dp-hero[_ngcontent-%COMP%]   .dp-hero-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: clamp(2.4rem, 5vw, 4rem);\n  color: #fff;\n  margin: 0.5rem 0 0.4rem;\n  text-shadow: 0 2px 12px rgba(0, 0, 0, 0.4);\n}\n.dp-hero[_ngcontent-%COMP%]   .dp-hero-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.85);\n  font-size: 1.15rem;\n  font-style: italic;\n}\n.dp-hero[_ngcontent-%COMP%]   .dp-back[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  color: rgba(255, 255, 255, 0.9);\n  font-size: 0.85rem;\n  font-weight: 600;\n  background: rgba(255, 255, 255, 0.15);\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  padding: 0.45rem 1rem;\n  border-radius: 50px;\n  cursor: pointer;\n  transition: var(--transition);\n  margin-bottom: 1rem;\n}\n.dp-hero[_ngcontent-%COMP%]   .dp-back[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.25);\n}\n.dp-hero[_ngcontent-%COMP%]   .dp-hero-tag[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  background: var(--accent);\n  color: #fff;\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  padding: 0.35rem 0.9rem;\n  border-radius: 50px;\n  margin-bottom: 0.6rem;\n}\n.dp-packages[_ngcontent-%COMP%] {\n  padding: 5rem 0;\n  background: var(--bg-light);\n}\n.dp-pkg-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 1.5rem;\n}\n@media (max-width: 1100px) {\n  .dp-pkg-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 600px) {\n  .dp-pkg-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.dp-pkg-card[_ngcontent-%COMP%] {\n  background: var(--bg-card);\n  border-radius: var(--radius-md);\n  overflow: hidden;\n  box-shadow: var(--shadow-sm);\n  transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.35s;\n  animation: fadeInUp 0.6s ease both;\n}\n.dp-pkg-card[_ngcontent-%COMP%]:nth-child(1) {\n  animation-delay: 0s;\n}\n.dp-pkg-card[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: 0.1s;\n}\n.dp-pkg-card[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: 0.2s;\n}\n.dp-pkg-card[_ngcontent-%COMP%]:nth-child(4) {\n  animation-delay: 0.3s;\n}\n.dp-pkg-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-8px);\n  box-shadow: var(--shadow-lg);\n}\n.dp-pkg-card.featured[_ngcontent-%COMP%] {\n  border: 2px solid var(--accent);\n  transform: translateY(-4px);\n  box-shadow: var(--shadow-md);\n}\n.dp-pkg-card.featured[_ngcontent-%COMP%]:hover {\n  transform: translateY(-12px);\n}\n.dp-pkg-img-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  height: 200px;\n  overflow: hidden;\n}\n.dp-pkg-img-wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.5s ease;\n}\n.dp-pkg-card[_ngcontent-%COMP%]:hover   .dp-pkg-img-wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scale(1.06);\n}\n.dp-duration-tag[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0.75rem;\n  right: 0.75rem;\n  background: var(--primary);\n  color: #fff;\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 1px;\n  padding: 0.3rem 0.75rem;\n  border-radius: 50px;\n}\n.dp-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0.75rem;\n  left: 0.75rem;\n  background: var(--accent);\n  color: #fff;\n  font-size: 0.68rem;\n  font-weight: 700;\n  letter-spacing: 1.5px;\n  text-transform: uppercase;\n  padding: 0.28rem 0.7rem;\n  border-radius: 50px;\n}\n.dp-pkg-body[_ngcontent-%COMP%] {\n  padding: 1.4rem;\n}\n.dp-pkg-body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: var(--text-dark);\n  margin-bottom: 0.9rem;\n}\n.dp-highlights[_ngcontent-%COMP%] {\n  list-style: none;\n  margin-bottom: 1.2rem;\n}\n.dp-highlights[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.5rem;\n  font-size: 0.82rem;\n  color: var(--text-mid);\n  margin-bottom: 0.45rem;\n  line-height: 1.4;\n}\n.dp-highlights[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--primary);\n  margin-top: 2px;\n  flex-shrink: 0;\n}\n.dp-pkg-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 0.5rem;\n  padding-top: 1rem;\n  border-top: 1px solid var(--border);\n}\n.dp-price[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.dp-price[_ngcontent-%COMP%]   .dp-from[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  color: var(--text-light);\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.dp-price[_ngcontent-%COMP%]   .dp-amount[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  font-weight: 700;\n  color: var(--primary);\n  line-height: 1.1;\n}\n.dp-price[_ngcontent-%COMP%]   .dp-pp[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: var(--text-light);\n}\n.dp-view-btn[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.dp-notfound[_ngcontent-%COMP%] {\n  min-height: 60vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n  color: var(--text-mid);\n}\n.dp-notfound[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  color: var(--border);\n}\n.dp-notfound[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.dp-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.65);\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  z-index: 2000;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 1rem;\n  animation: _ngcontent-%COMP%_fadeIn 0.25s ease;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.dp-dialog[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: var(--radius-lg);\n  overflow: hidden;\n  width: 100%;\n  max-height: 90vh;\n  overflow-y: auto;\n  animation: _ngcontent-%COMP%_dialogSlideUp 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) both;\n  scrollbar-width: thin;\n}\n.dp-dialog--detail[_ngcontent-%COMP%] {\n  max-width: 1000px;\n}\n.dp-dialog--booking[_ngcontent-%COMP%] {\n  max-width: 640px;\n}\n@keyframes _ngcontent-%COMP%_dialogSlideUp {\n  from {\n    opacity: 0;\n    transform: translateY(40px) scale(0.97);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n.dp-dlg-hero[_ngcontent-%COMP%] {\n  height: 260px;\n  background-size: cover;\n  background-position: center;\n  position: relative;\n  display: flex;\n  align-items: flex-end;\n}\n.dp-dlg-hero--sm[_ngcontent-%COMP%] {\n  height: 200px;\n}\n.dp-dlg-hero[_ngcontent-%COMP%]   .dp-dlg-hero-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      to top,\n      rgba(0, 0, 0, 0.75) 0%,\n      rgba(0, 0, 0, 0.15) 70%,\n      transparent 100%);\n}\n.dp-dlg-hero[_ngcontent-%COMP%]   .dp-dlg-hero-info[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  padding: 1.5rem 1.8rem;\n  width: 100%;\n}\n.dp-dlg-hero[_ngcontent-%COMP%]   .dp-dlg-hero-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 1.6rem;\n  margin: 0.3rem 0 0.2rem;\n  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);\n}\n.dp-dlg-hero[_ngcontent-%COMP%]   .dp-dlg-hero-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 0.85rem;\n  display: flex;\n  align-items: center;\n  gap: 0.3rem;\n}\n.dp-dlg-hero[_ngcontent-%COMP%]   .dp-booking-price[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 0.4rem;\n  margin-top: 0.3rem;\n}\n.dp-dlg-hero[_ngcontent-%COMP%]   .dp-booking-price[_ngcontent-%COMP%]   .dp-amount[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  font-weight: 700;\n  color: var(--accent);\n}\n.dp-dlg-hero[_ngcontent-%COMP%]   .dp-booking-price[_ngcontent-%COMP%]   .dp-pp[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.8);\n  font-size: 0.85rem;\n}\n.dp-dlg-hero[_ngcontent-%COMP%]   .dp-badge--hero[_ngcontent-%COMP%] {\n  position: static;\n  display: inline-block;\n  margin-bottom: 0.4rem;\n}\n.dp-dlg-close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  z-index: 10;\n  width: 38px;\n  height: 38px;\n  border-radius: 50%;\n  background: rgba(50, 50, 50, 0.7);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1rem;\n  cursor: pointer;\n  transition: background 0.2s;\n  border: none;\n}\n.dp-dlg-close[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.9);\n}\n.dp-dlg-body[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 320px;\n  gap: 0;\n}\n@media (max-width: 768px) {\n  .dp-dlg-body[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.dp-dlg-left[_ngcontent-%COMP%] {\n  padding: 2rem;\n  border-right: 1px solid var(--border);\n}\n@media (max-width: 768px) {\n  .dp-dlg-left[_ngcontent-%COMP%] {\n    border-right: none;\n    border-bottom: 1px solid var(--border);\n  }\n}\n.dp-dlg-section[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.dp-dlg-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 1rem;\n  font-weight: 700;\n  color: var(--text-dark);\n  margin-bottom: 1rem;\n}\n.dp-dlg-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--primary);\n}\n.dp-dlg-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n}\n.dp-dlg-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.6rem;\n  font-size: 0.9rem;\n  color: var(--text-mid);\n  margin-bottom: 0.6rem;\n  line-height: 1.5;\n}\n.dp-dlg-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--primary);\n  margin-top: 2px;\n  flex-shrink: 0;\n}\n.dp-inclusions[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 0.75rem;\n}\n@media (max-width: 500px) {\n  .dp-inclusions[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.dp-inc-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.4rem;\n  padding: 0.9rem 0.5rem;\n  background: var(--bg-light);\n  border-radius: var(--radius-sm);\n  border: 1px solid var(--border);\n  font-size: 0.78rem;\n  color: var(--text-mid);\n  text-align: center;\n  transition: var(--transition);\n}\n.dp-inc-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  color: var(--primary);\n}\n.dp-inc-item[_ngcontent-%COMP%]:hover {\n  background: var(--primary-glow);\n  border-color: var(--primary);\n  color: var(--primary);\n}\n.dp-itinerary[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n.dp-itin-item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  padding: 1rem 0;\n  border-bottom: 1px solid var(--border);\n}\n.dp-itin-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.dp-day-badge[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 52px;\n  height: 28px;\n  background: var(--primary);\n  color: #fff;\n  font-size: 0.72rem;\n  font-weight: 700;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 2px;\n}\n.dp-day-content[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.92rem;\n  color: var(--text-dark);\n  margin-bottom: 0.25rem;\n}\n.dp-day-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.83rem;\n  color: var(--text-mid);\n  line-height: 1.55;\n  margin: 0;\n}\n.dp-dlg-right[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  background: var(--bg-light);\n}\n.dp-price-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: var(--radius-md);\n  padding: 1.5rem;\n  box-shadow: var(--shadow-xs);\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.dp-price-card[_ngcontent-%COMP%]   .dp-price-label[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  color: var(--text-light);\n}\n.dp-price-card[_ngcontent-%COMP%]   .dp-price-big[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 800;\n  color: var(--primary);\n  line-height: 1;\n}\n.dp-price-card[_ngcontent-%COMP%]   .dp-price-sub[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: var(--text-light);\n  margin-bottom: 0.5rem;\n}\n.dp-trust[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0.5rem 0 1rem;\n}\n.dp-trust[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.83rem;\n  color: var(--text-mid);\n  padding: 0.3rem 0;\n}\n.dp-trust[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--primary);\n  width: 16px;\n}\n.dp-book-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  justify-content: center;\n  margin-bottom: 0.5rem;\n}\n.dp-call-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  justify-content: center;\n  font-size: 0.85rem;\n}\n.dp-meta-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: var(--radius-md);\n  padding: 1.2rem;\n  box-shadow: var(--shadow-xs);\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n.dp-meta-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 0.85rem 0;\n  border-bottom: 1px solid var(--border);\n}\n.dp-meta-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.dp-meta-item[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\n  display: flex;\n  flex-direction: column;\n}\n.dp-meta-item[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child   span[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: var(--text-light);\n}\n.dp-meta-item[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child   strong[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: var(--text-dark);\n}\n.dp-meta-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: var(--bg-light);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.dp-meta-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--primary);\n  font-size: 1rem;\n}\n.dp-booking-body[_ngcontent-%COMP%] {\n  padding: 2rem;\n}\n.dp-booking-body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 1.2rem;\n  color: var(--text-dark);\n  margin-bottom: 1.5rem;\n}\n.dp-booking-body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--primary);\n}\n.dp-booking-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.dp-form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n}\n@media (max-width: 500px) {\n  .dp-form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.dp-form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.4rem;\n}\n.dp-form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 1.5px;\n  color: var(--text-mid);\n}\n.dp-input-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  border: 1.5px solid var(--border);\n  border-radius: var(--radius-sm);\n  padding: 0 1rem;\n  background: #fff;\n  transition: border-color 0.2s;\n  position: relative;\n}\n.dp-input-wrap[_ngcontent-%COMP%]:focus-within {\n  border-color: var(--primary);\n}\n.dp-input-wrap[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:first-child {\n  color: var(--text-light);\n  font-size: 0.9rem;\n  flex-shrink: 0;\n}\n.dp-input-wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .dp-input-wrap[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  flex: 1;\n  border: none;\n  outline: none;\n  padding: 0.85rem 0;\n  font-size: 0.9rem;\n  font-family: var(--font-body);\n  color: var(--text-dark);\n  background: transparent;\n}\n.dp-input-wrap[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder, .dp-input-wrap[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]::placeholder {\n  color: var(--text-light);\n}\n.dp-input-wrap[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  cursor: pointer;\n  appearance: none;\n}\n.dp-select-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.dp-select-arrow[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 1rem;\n  color: var(--text-light);\n  font-size: 0.75rem;\n  pointer-events: none;\n}\n.dp-submit-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  justify-content: center;\n  padding: 1rem;\n  font-size: 1rem;\n  margin-top: 0.5rem;\n}\n.dp-booking-success[_ngcontent-%COMP%] {\n  padding: 3rem 2rem;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n}\n.dp-booking-success[_ngcontent-%COMP%]   .dp-success-icon[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 72px;\n  border-radius: 50%;\n  background: #e8f5e9;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.dp-booking-success[_ngcontent-%COMP%]   .dp-success-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 2.2rem;\n  color: #2e7d32;\n}\n.dp-booking-success[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  color: var(--text-dark);\n}\n.dp-booking-success[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--text-mid);\n  font-size: 0.9rem;\n}\n.dp-dialog[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 4px;\n}\n.dp-dialog[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--border);\n  border-radius: 2px;\n}\n/*# sourceMappingURL=destination-page.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DestinationPageComponent, { className: "DestinationPageComponent", filePath: "src\\app\\components\\destination-page\\destination-page.component.ts", lineNumber: 14 });
})();
export {
  DestinationPageComponent
};
//# sourceMappingURL=chunk-GIP67CP2.js.map
