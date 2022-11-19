(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('ngx-color'), require('@ctrl/tinycolor')) :
    typeof define === 'function' && define.amd ? define('ngx-color/chrome', ['exports', '@angular/common', '@angular/core', 'ngx-color', '@ctrl/tinycolor'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['ngx-color'] = global['ngx-color'] || {}, global['ngx-color'].chrome = {}), global.ng.common, global.ng.core, global['ngx-color'], global['@ctrl/tinycolor']));
}(this, (function (exports, common, core, ngxColor, tinycolor) { 'use strict';

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

    var ChromeFieldsComponent = /** @class */ (function () {
        function ChromeFieldsComponent() {
            this.onChange = new core.EventEmitter();
            this.view = '';
            this.input = {
                fontSize: '11px',
                color: '#333',
                width: '100%',
                borderRadius: '2px',
                border: 'none',
                boxShadow: 'inset 0 0 0 1px #dadada',
                height: '21px',
                'text-align': 'center',
            };
            this.label = {
                'text-transform': 'uppercase',
                fontSize: '11px',
                'line-height': '11px',
                color: '#969696',
                'text-align': 'center',
                display: 'block',
                marginTop: '12px',
            };
        }
        ChromeFieldsComponent.prototype.ngOnInit = function () {
            if (this.hsl.a === 1 && this.view !== 'hex') {
                this.view = 'hex';
            }
            else if (this.view !== 'rgb' && this.view !== 'hsl') {
                this.view = 'rgb';
            }
        };
        ChromeFieldsComponent.prototype.toggleViews = function () {
            if (this.view === 'hex') {
                this.view = 'rgb';
            }
            else if (this.view === 'rgb') {
                this.view = 'hsl';
            }
            else if (this.view === 'hsl') {
                if (this.hsl.a === 1) {
                    this.view = 'hex';
                }
                else {
                    this.view = 'rgb';
                }
            }
        };
        ChromeFieldsComponent.prototype.round = function (value) {
            return Math.round(value);
        };
        ChromeFieldsComponent.prototype.handleChange = function (_a) {
            var data = _a.data, $event = _a.$event;
            if (data.hex) {
                if (ngxColor.isValidHex(data.hex)) {
                    var color = new tinycolor.TinyColor(data.hex);
                    this.onChange.emit({
                        data: {
                            hex: this.disableAlpha ? color.toHex() : color.toHex8(),
                            source: 'hex',
                        },
                        $event: $event,
                    });
                }
            }
            else if (data.r || data.g || data.b) {
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
            else if (data.a) {
                if (data.a < 0) {
                    data.a = 0;
                }
                else if (data.a > 1) {
                    data.a = 1;
                }
                if (this.disableAlpha) {
                    data.a = 1;
                }
                this.onChange.emit({
                    data: {
                        h: this.hsl.h,
                        s: this.hsl.s,
                        l: this.hsl.l,
                        a: Math.round(data.a * 100) / 100,
                        source: 'rgb',
                    },
                    $event: $event,
                });
            }
            else if (data.h || data.s || data.l) {
                this.onChange.emit({
                    data: {
                        h: data.h || this.hsl.h,
                        s: data.s || this.hsl.s,
                        l: data.l || this.hsl.l,
                        source: 'hsl',
                    },
                    $event: $event,
                });
            }
        };
        return ChromeFieldsComponent;
    }());
    ChromeFieldsComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'color-chrome-fields',
                    template: "\n    <div class=\"chrome-wrap\">\n      <div class=\"chrome-fields\">\n        <ng-template [ngIf]=\"view === 'hex'\">\n          <div class=\"chrome-field\">\n            <color-editable-input\n              [style]=\"{ input: input, label: label }\"\n              label=\"hex\"\n              [value]=\"hex\"\n              (onChange)=\"handleChange($event)\"\n            ></color-editable-input>\n          </div>\n        </ng-template>\n        <ng-template [ngIf]=\"view === 'rgb'\">\n          <div class=\"chrome-field\">\n            <color-editable-input\n              [style]=\"{ input: input, label: label }\"\n              label=\"r\"\n              [value]=\"rgb.r\"\n              (onChange)=\"handleChange($event)\"\n            ></color-editable-input>\n          </div>\n          <div class=\"chrome-field\">\n            <color-editable-input\n              [style]=\"{ input: input, label: label }\"\n              label=\"g\"\n              [value]=\"rgb.g\"\n              (onChange)=\"handleChange($event)\"\n            ></color-editable-input>\n          </div>\n          <div class=\"chrome-field\">\n            <color-editable-input\n              [style]=\"{ input: input, label: label }\"\n              label=\"b\"\n              [value]=\"rgb.b\"\n              (onChange)=\"handleChange($event)\"\n            ></color-editable-input>\n          </div>\n          <div class=\"chrome-field\">\n            <color-editable-input\n              *ngIf=\"!disableAlpha\"\n              [style]=\"{ input: input, label: label }\"\n              label=\"a\"\n              [value]=\"rgb.a\"\n              [arrowOffset]=\"0.01\"\n              (onChange)=\"handleChange($event)\"\n            ></color-editable-input>\n          </div>\n        </ng-template>\n        <ng-template [ngIf]=\"view === 'hsl'\">\n          <div class=\"chrome-field\">\n            <color-editable-input\n              [style]=\"{ input: input, label: label }\"\n              label=\"h\"\n              [value]=\"round(hsl.h)\"\n              (onChange)=\"handleChange($event)\"\n            ></color-editable-input>\n          </div>\n          <div class=\"chrome-field\">\n            <color-editable-input\n              [style]=\"{ input: input, label: label }\"\n              label=\"s\"\n              [value]=\"round(hsl.s * 100) + '%'\"\n              (onChange)=\"handleChange($event)\"\n            ></color-editable-input>\n          </div>\n          <div class=\"chrome-field\">\n            <color-editable-input\n              [style]=\"{ input: input, label: label }\"\n              label=\"l\"\n              [value]=\"round(hsl.l * 100) + '%'\"\n              (onChange)=\"handleChange($event)\"\n            ></color-editable-input>\n          </div>\n          <div class=\"chrome-field\">\n            <color-editable-input\n              *ngIf=\"!disableAlpha\"\n              [style]=\"{ input: input, label: label }\"\n              label=\"a\"\n              [value]=\"hsl.a\"\n              [arrowOffset]=\"0.01\"\n              (onChange)=\"handleChange($event)\"\n            ></color-editable-input>\n          </div>\n        </ng-template>\n      </div>\n\n      <div class=\"chrome-toggle\">\n        <div class=\"chrome-icon\" (click)=\"toggleViews()\" #icon>\n          <svg class=\"chrome-toggle-svg\" viewBox=\"0 0 24 24\">\n            <path\n              #iconUp\n              fill=\"#333\"\n              d=\"M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z\"\n            />\n            <path\n              #iconDown\n              fill=\"#333\"\n              d=\"M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15Z\"\n            />\n          </svg>\n        </div>\n      </div>\n    </div>\n  ",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    preserveWhitespaces: false,
                    styles: ["\n      .chrome-wrap {\n        padding-top: 16px;\n        display: flex;\n      }\n      .chrome-fields {\n        flex: 1;\n        display: flex;\n        margin-left: -6px;\n      }\n      .chrome-field {\n        padding-left: 6px;\n        width: 100%;\n      }\n      .chrome-toggle {\n        width: 32px;\n        text-align: right;\n        position: relative;\n      }\n      .chrome-icon {\n        margin-right: -4px;\n        margin-top: 12px;\n        cursor: pointer;\n        position: relative;\n      }\n      .chrome-toggle-svg {\n        width: 24px;\n        height: 24px;\n        border: 1px transparent solid;\n        border-radius: 5px;\n      }\n      .chrome-toggle-svg:hover {\n        background: #eee;\n      }\n    "]
                },] }
    ];
    ChromeFieldsComponent.propDecorators = {
        disableAlpha: [{ type: core.Input }],
        hsl: [{ type: core.Input }],
        rgb: [{ type: core.Input }],
        hex: [{ type: core.Input }],
        onChange: [{ type: core.Output }]
    };

    var ChromeComponent = /** @class */ (function (_super) {
        __extends(ChromeComponent, _super);
        function ChromeComponent() {
            var _this = _super.call(this) || this;
            /** Remove alpha slider and options from picker */
            _this.disableAlpha = false;
            _this.circle = {
                width: '12px',
                height: '12px',
                borderRadius: '6px',
                boxShadow: 'rgb(255, 255, 255) 0px 0px 0px 1px inset',
                transform: 'translate(-6px, -8px)',
            };
            _this.pointer = {
                width: '12px',
                height: '12px',
                borderRadius: '6px',
                transform: 'translate(-6px, -2px)',
                backgroundColor: 'rgb(248, 248, 248)',
                boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.37)',
            };
            return _this;
        }
        ChromeComponent.prototype.afterValidChange = function () {
            var alpha = this.disableAlpha ? 1 : this.rgb.a;
            this.activeBackground = "rgba(" + this.rgb.r + ", " + this.rgb.g + ", " + this.rgb.b + ", " + alpha + ")";
        };
        ChromeComponent.prototype.handleValueChange = function (_a) {
            var data = _a.data, $event = _a.$event;
            this.handleChange(data, $event);
        };
        return ChromeComponent;
    }(ngxColor.ColorWrap));
    ChromeComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'color-chrome',
                    template: "\n  <div class=\"chrome-picker {{ className }}\">\n    <div class=\"saturation\">\n      <color-saturation\n        [hsl]=\"hsl\"\n        [hsv]=\"hsv\"\n        [circle]=\"circle\"\n        (onChange)=\"handleValueChange($event)\"\n      ></color-saturation>\n    </div>\n    <div class=\"chrome-body\">\n      <div class=\"chrome-controls\">\n        <div class=\"chrome-color\">\n          <div class=\"chrome-swatch\">\n            <div class=\"chrome-active\"\n              [style.background]=\"activeBackground\"\n            ></div>\n            <color-checkboard></color-checkboard>\n          </div>\n        </div>\n        <div class=\"chrome-toggles\">\n          <div class=\"chrome-hue\">\n            <color-hue\n              [radius]=\"2\"\n              [hsl]=\"hsl\"\n              [pointer]=\"pointer\"\n              (onChange)=\"handleValueChange($event)\"\n            ></color-hue>\n          </div>\n          <div class=\"chrome-alpha\" *ngIf=\"!disableAlpha\">\n            <color-alpha\n              [radius]=\"2\" [rgb]=\"rgb\" [hsl]=\"hsl\"\n              [pointer]=\"pointer\" (onChange)=\"handleValueChange($event)\"\n            ></color-alpha>\n          </div>\n        </div>\n      </div>\n      <color-chrome-fields\n        [rgb]=\"rgb\" [hsl]=\"hsl\" [hex]=\"hex\"\n        [disableAlpha]=\"disableAlpha\"\n        (onChange)=\"handleValueChange($event)\"\n      ></color-chrome-fields>\n    </div>\n  </div>\n  ",
                    changeDetection: core.ChangeDetectionStrategy.OnPush,
                    preserveWhitespaces: false,
                    styles: ["\n      .chrome-picker {\n        background: #fff;\n        border-radius: 2px;\n        box-shadow: 0 0 2px rgba(0, 0, 0, 0.3), 0 4px 8px rgba(0, 0, 0, 0.3);\n        box-sizing: initial;\n        width: 225px;\n        font-family: 'Menlo';\n      }\n      .chrome-controls {\n        display: flex;\n      }\n      .chrome-color {\n        width: 42px;\n      }\n      .chrome-body {\n        padding: 14px 14px 12px;\n      }\n      .chrome-active {\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        left: 0;\n        right: 0;\n        border-radius: 20px;\n        box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);\n        z-index: 2;\n      }\n      .chrome-swatch {\n        width: 28px;\n        height: 28px;\n        border-radius: 15px;\n        position: relative;\n        overflow: hidden;\n      }\n      .saturation {\n        width: 100%;\n        padding-bottom: 55%;\n        position: relative;\n        border-radius: 2px 2px 0 0;\n        overflow: hidden;\n      }\n      .chrome-toggles {\n        flex: 1;\n      }\n      .chrome-hue {\n        height: 10px;\n        position: relative;\n        margin-bottom: 8px;\n      }\n      .chrome-alpha {\n        height: 10px;\n        position: relative;\n      }\n    "]
                },] }
    ];
    ChromeComponent.ctorParameters = function () { return []; };
    ChromeComponent.propDecorators = {
        disableAlpha: [{ type: core.Input }]
    };
    var ColorChromeModule = /** @class */ (function () {
        function ColorChromeModule() {
        }
        return ColorChromeModule;
    }());
    ColorChromeModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [ChromeComponent, ChromeFieldsComponent],
                    exports: [ChromeComponent, ChromeFieldsComponent],
                    imports: [
                        common.CommonModule,
                        ngxColor.AlphaModule,
                        ngxColor.CheckboardModule,
                        ngxColor.EditableInputModule,
                        ngxColor.HueModule,
                        ngxColor.SaturationModule,
                    ],
                },] }
    ];

    /**
     * Generated bundle index. Do not edit.
     */

    exports.ChromeComponent = ChromeComponent;
    exports.ColorChromeModule = ColorChromeModule;
    exports.ɵa = ChromeFieldsComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-color-chrome.umd.js.map
