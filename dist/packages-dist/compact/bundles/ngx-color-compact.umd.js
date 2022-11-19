(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('ngx-color')) :
    typeof define === 'function' && define.amd ? define('ngx-color/compact', ['exports', '@angular/common', '@angular/core', 'ngx-color'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['ngx-color'] = global['ngx-color'] || {}, global['ngx-color'].compact = {}), global.ng.common, global.ng.core, global['ngx-color']));
}(this, (function (exports, common, core, ngxColor) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    ;
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    var CompactColorComponent = /** @class */ (function () {
        function CompactColorComponent() {
            this.onClick = new core.EventEmitter();
            this.onSwatchHover = new core.EventEmitter();
            this.swatchStyle = {
                width: '15px',
                height: '15px',
                float: 'left',
                marginRight: '5px',
                marginBottom: '5px',
                position: 'relative',
                cursor: 'pointer',
            };
            this.swatchFocus = {};
            this.getContrastingColor = ngxColor.getContrastingColor;
        }
        CompactColorComponent.prototype.ngOnChanges = function () {
            this.swatchStyle.background = this.color;
            this.swatchFocus.boxShadow = "0 0 4px " + this.color;
            if (this.color.toLowerCase() === '#ffffff') {
                this.swatchStyle.boxShadow = 'inset 0 0 0 1px #ddd';
            }
        };
        CompactColorComponent.prototype.handleClick = function (_a) {
            var hex = _a.hex, $event = _a.$event;
            this.onClick.emit({ hex: hex, $event: $event });
        };
        return CompactColorComponent;
    }());
    CompactColorComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'color-compact-color',
                    template: "\n  <div class=\"compact-color\">\n    <color-swatch class=\"swatch\"\n      [color]=\"color\" [style]=\"swatchStyle\"\n      [focusStyle]=\"swatchFocus\"\n      (onClick)=\"handleClick($event)\" (onHover)=\"onSwatchHover.emit($event)\"\n      >\n      <div class=\"compact-dot\"\n        [class.active]=\"active\" [style.background]=\"getContrastingColor(color)\"\n      ></div>\n    </color-swatch>\n  </div>\n  ",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    preserveWhitespaces: false,
                    styles: ["\n  .compact-dot {\n    position: absolute;\n    top: 5px;\n    right: 5px;\n    bottom: 5px;\n    left: 5px;\n    border-radius: 50%;\n    opacity: 0;\n  }\n  .compact-dot.active {\n    opacity: 1;\n  }\n  "]
                },] }
    ];
    CompactColorComponent.propDecorators = {
        color: [{ type: core.Input }],
        active: [{ type: core.Input }],
        onClick: [{ type: core.Output }],
        onSwatchHover: [{ type: core.Output }]
    };

    var CompactFieldsComponent = /** @class */ (function () {
        function CompactFieldsComponent() {
            this.onChange = new core.EventEmitter();
            this.HEXWrap = {
                marginTop: '-3px',
                marginBottom: '-3px',
                // flex: '6 1 0%',
                position: 'relative',
            };
            this.HEXinput = {
                width: '80%',
                padding: '0px',
                paddingLeft: '20%',
                border: 'none',
                outline: 'none',
                background: 'none',
                fontSize: '12px',
                color: '#333',
                height: '16px',
            };
            this.HEXlabel = {
                display: 'none',
            };
            this.RGBwrap = {
                marginTop: '-3px',
                marginBottom: '-3px',
                // flex: '3 1 0%',
                position: 'relative',
            };
            this.RGBinput = {
                width: '80%',
                padding: '0px',
                paddingLeft: '30%',
                border: 'none',
                outline: 'none',
                background: 'none',
                fontSize: '12px',
                color: '#333',
                height: '16px',
            };
            this.RGBlabel = {
                position: 'absolute',
                top: '6px',
                left: '0px',
                'line-height': '16px',
                'text-transform': 'uppercase',
                fontSize: '12px',
                color: '#999',
            };
        }
        CompactFieldsComponent.prototype.handleChange = function (_a) {
            var data = _a.data, $event = _a.$event;
            if (data.hex) {
                if (ngxColor.isValidHex(data.hex)) {
                    this.onChange.emit({
                        data: {
                            hex: data.hex,
                            source: 'hex',
                        },
                        $event: $event,
                    });
                }
            }
            else {
                this.onChange.emit({
                    data: {
                        r: data.r || this.rgb.r,
                        g: data.g || this.rgb.g,
                        b: data.b || this.rgb.b,
                        source: 'rgb',
                    },
                    $event: $event,
                });
            }
        };
        return CompactFieldsComponent;
    }());
    CompactFieldsComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'color-compact-fields',
                    template: "\n  <div class=\"compact-fields\">\n    <div class=\"compact-active\" [style.background]=\"hex\"></div>\n    <div style=\"flex: 6 1 0%;\">\n      <color-editable-input\n        [style]=\"{ wrap: HEXWrap, input: HEXinput, label: HEXlabel }\"\n        label=\"hex\"\n        [value]=\"hex\"\n        (onChange)=\"handleChange($event)\"\n      ></color-editable-input>\n    </div>\n    <div style=\"flex: 3 1 0%\">\n      <color-editable-input\n        [style]=\"{ wrap: RGBwrap, input: RGBinput, label: RGBlabel }\"\n        label=\"r\"\n        [value]=\"rgb.r\"\n        (onChange)=\"handleChange($event)\"\n      ></color-editable-input>\n    </div>\n    <div style=\"flex: 3 1 0%\">\n      <color-editable-input\n        [style]=\"{ wrap: RGBwrap, input: RGBinput, label: RGBlabel }\"\n        label=\"g\"\n        [value]=\"rgb.g\"\n        (onChange)=\"handleChange($event)\"\n      ></color-editable-input>\n    </div>\n    <div style=\"flex: 3 1 0%\">\n      <color-editable-input\n        [style]=\"{ wrap: RGBwrap, input: RGBinput, label: RGBlabel }\"\n        label=\"b\"\n        [value]=\"rgb.b\"\n        (onChange)=\"handleChange($event)\"\n      ></color-editable-input>\n    </div>\n  </div>\n  ",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    preserveWhitespaces: false,
                    styles: ["\n  .compact-fields {\n    display: flex;\n    padding-bottom: 6px;\n    padding-right: 5px;\n    position: relative;\n  }\n  .compact-active {\n    position: absolute;\n    top: 6px;\n    left: 5px;\n    height: 9px;\n    width: 9px;\n  }\n  "]
                },] }
    ];
    CompactFieldsComponent.propDecorators = {
        hex: [{ type: core.Input }],
        rgb: [{ type: core.Input }],
        onChange: [{ type: core.Output }]
    };

    var CompactComponent = /** @class */ (function (_super) {
        __extends(CompactComponent, _super);
        function CompactComponent() {
            var _this = _super.call(this) || this;
            /** Color squares to display */
            _this.colors = [
                '#4D4D4D',
                '#999999',
                '#FFFFFF',
                '#F44E3B',
                '#FE9200',
                '#FCDC00',
                '#DBDF00',
                '#A4DD00',
                '#68CCCA',
                '#73D8FF',
                '#AEA1FF',
                '#FDA1FF',
                '#333333',
                '#808080',
                '#cccccc',
                '#D33115',
                '#E27300',
                '#FCC400',
                '#B0BC00',
                '#68BC00',
                '#16A5A5',
                '#009CE0',
                '#7B64FF',
                '#FA28FF',
                '#000000',
                '#666666',
                '#B3B3B3',
                '#9F0500',
                '#C45100',
                '#FB9E00',
                '#808900',
                '#194D33',
                '#0C797D',
                '#0062B1',
                '#653294',
                '#AB149E',
            ];
            _this.zDepth = 1;
            _this.radius = 1;
            _this.background = '#fff';
            _this.disableAlpha = true;
            return _this;
        }
        CompactComponent.prototype.handleBlockChange = function (_a) {
            var hex = _a.hex, $event = _a.$event;
            if (ngxColor.isValidHex(hex)) {
                this.handleChange({ hex: hex, source: 'hex' }, $event);
            }
        };
        CompactComponent.prototype.handleValueChange = function (_a) {
            var data = _a.data, $event = _a.$event;
            this.handleChange(data, $event);
        };
        return CompactComponent;
    }(ngxColor.ColorWrap));
    CompactComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'color-compact',
                    template: "\n  <color-raised class=\"color-compact\" [zDepth]=\"zDepth\" [background]=\"background\" [radius]=\"radius\">\n    <div class=\"compact-picker {{ className }}\">\n      <div>\n        <color-compact-color\n          *ngFor=\"let color of colors\" [color]=\"color\"\n          [active]=\"color.toLowerCase() === hex.toLowerCase()\"\n          (onClick)=\"handleBlockChange($event)\"\n        ></color-compact-color>\n        <div class=\"compact-clear\"></div>\n      </div>\n      <color-compact-fields\n        [hex]=\"hex\"\n        [rgb]=\"rgb\"\n        (onChange)=\"handleValueChange($event)\"\n      ></color-compact-fields>\n    </div>\n  </color-raised>\n  ",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    preserveWhitespaces: false,
                    styles: ["\n    .color-compact {\n      background: #f6f6f6;\n      radius: 4px;\n    }\n    .compact-picker {\n      padding-top: 5px;\n      padding-left: 5px;\n      box-sizing: border-box;\n      width: 245px;\n    }\n    .compact-clear {\n      clear: both;\n    }\n  "]
                },] }
    ];
    CompactComponent.ctorParameters = function () { return []; };
    CompactComponent.propDecorators = {
        colors: [{ type: core.Input }],
        zDepth: [{ type: core.Input }],
        radius: [{ type: core.Input }],
        background: [{ type: core.Input }]
    };
    var ColorCompactModule = /** @class */ (function () {
        function ColorCompactModule() {
        }
        return ColorCompactModule;
    }());
    ColorCompactModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [
                        CompactComponent,
                        CompactColorComponent,
                        CompactFieldsComponent,
                    ],
                    exports: [CompactComponent, CompactColorComponent, CompactFieldsComponent],
                    imports: [common.CommonModule, ngxColor.EditableInputModule, ngxColor.SwatchModule, ngxColor.RaisedModule],
                },] }
    ];

    /**
     * Generated bundle index. Do not edit.
     */

    exports.ColorCompactModule = ColorCompactModule;
    exports.CompactComponent = CompactComponent;
    exports.ɵa = CompactColorComponent;
    exports.ɵb = CompactFieldsComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-color-compact.umd.js.map
