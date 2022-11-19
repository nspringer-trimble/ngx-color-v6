import { CommonModule } from '@angular/common';
import { EventEmitter, Component, ChangeDetectionStrategy, Input, Output, NgModule } from '@angular/core';
import { isValidHex, ColorWrap, EditableInputModule, HueModule, AlphaModule, SwatchModule, SaturationModule } from 'ngx-color';

class PhotoshopButtonComponent {
    constructor() {
        this.label = '';
        this.active = false;
        this.onClick = new EventEmitter();
    }
}
PhotoshopButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'color-photoshop-button',
                template: `
    <div class="photoshop-button"  [class.active]="active"
      (click)="onClick.emit($event)"
    >
      {{ label }}
    </div>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                styles: [`
    .photoshop-button {
      background-image: linear-gradient(
        -180deg,
        rgb(255, 255, 255) 0%,
        rgb(230, 230, 230) 100%
      );
      border: 1px solid rgb(135, 135, 135);
      border-radius: 2px;
      height: 22px;
      box-shadow: rgb(234, 234, 234) 0px 1px 0px 0px;
      font-size: 14px;
      color: rgb(0, 0, 0);
      line-height: 20px;
      text-align: center;
      margin-bottom: 10px;
      cursor: pointer;
    }
    .photoshop-button.active {
      box-shadow: 0 0 0 1px #878787;
    }
  `]
            },] }
];
PhotoshopButtonComponent.propDecorators = {
    label: [{ type: Input }],
    active: [{ type: Input }],
    onClick: [{ type: Output }]
};

class PhotoshopFieldsComponent {
    constructor() {
        this.onChange = new EventEmitter();
        this.RGBinput = {
            marginLeft: '35%',
            width: '40%',
            height: '22px',
            border: '1px solid rgb(136, 136, 136)',
            boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 1px inset, rgb(236, 236, 236) 0px 1px 0px 0px',
            marginBottom: '2px',
            fontSize: '13px',
            paddingLeft: '3px',
            marginRight: '10px',
        };
        this.RGBwrap = {
            position: 'relative',
        };
        this.RGBlabel = {
            left: '0px',
            width: '34px',
            textTransform: 'uppercase',
            fontSize: '13px',
            height: '24px',
            lineHeight: '24px',
            position: 'absolute',
        };
        this.HEXinput = {
            marginLeft: '20%',
            width: '80%',
            height: '22px',
            border: '1px solid #888888',
            boxShadow: 'inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC',
            marginBottom: '3px',
            fontSize: '13px',
            paddingLeft: '3px',
        };
        this.HEXwrap = {
            position: 'relative',
        };
        this.HEXlabel = {
            position: 'absolute',
            top: '0px',
            left: '0px',
            width: '14px',
            textTransform: 'uppercase',
            fontSize: '13px',
            height: '24px',
            lineHeight: '24px',
        };
    }
    round(v) {
        return Math.round(v);
    }
    handleValueChange({ data, $event }) {
        if (data['#']) {
            if (isValidHex(data['#'])) {
                this.onChange.emit({
                    data: {
                        hex: data['#'],
                        source: 'hex',
                    },
                    $event,
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
                $event,
            });
        }
        else if (data.h || data.s || data.v) {
            this.onChange.emit({
                data: {
                    h: data.h || this.hsv.h,
                    s: data.s || this.hsv.s,
                    v: data.v || this.hsv.v,
                    source: 'hsv',
                },
                $event,
            });
        }
    }
}
PhotoshopFieldsComponent.decorators = [
    { type: Component, args: [{
                selector: 'color-photoshop-fields',
                template: `
  <div class="photoshop-fields">
    <color-editable-input
      [value]="round(hsv.h)"
      label="h"
      (onChange)="handleValueChange($event)"
      [style]="{input: RGBinput, wrap: RGBwrap, label: RGBlabel}"
    ></color-editable-input>
    <color-editable-input
      [value]="round(hsv.s * 100)"
      label="s"
      (onChange)="handleValueChange($event)"
      [style]="{input: RGBinput, wrap: RGBwrap, label: RGBlabel}"
    ></color-editable-input>
    <color-editable-input
      [value]="round(hsv.v * 100)"
      label="v"
      (onChange)="handleValueChange($event)"
      [style]="{input: RGBinput, wrap: RGBwrap, label: RGBlabel}"
    ></color-editable-input>
    <div class="photoshop-divider"></div>
    <color-editable-input
      [value]="rgb.r"
      label="r"
      (onChange)="handleValueChange($event)"
      [style]="{input: RGBinput, wrap: RGBwrap, label: RGBlabel}"
    ></color-editable-input>
    <color-editable-input
      [value]="rgb.g"
      label="g"
      (onChange)="handleValueChange($event)"
      [style]="{input: RGBinput, wrap: RGBwrap, label: RGBlabel}"
    ></color-editable-input>
    <color-editable-input
      [value]="rgb.b"
      label="b"
      (onChange)="handleValueChange($event)"
      [style]="{input: RGBinput, wrap: RGBwrap, label: RGBlabel}"
    ></color-editable-input>
    <div class="photoshop-divider"></div>
    <color-editable-input
      [value]="hex.replace('#', '')"
      label="#"
      (onChange)="handleValueChange($event)"
      [style]="{input: HEXinput, wrap: HEXwrap, label: HEXlabel}"
    ></color-editable-input>
    <div class="photoshop-field-symbols">
      <div class="photoshop-symbol">°</div>
      <div class="photoshop-symbol">%</div>
      <div class="photoshop-symbol">%</div>
    </div>
  </div>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                styles: [`
    .photoshop-fields {
      padding-top: 5px;
      padding-bottom: 9px;
      width: 85px;
      position: relative;
    }
    .photoshop-field-symbols {
      position: absolute;
      top: 5px;
      right: -7px;
      font-size: 13px;
    }
    .photoshop-symbol {
      height: 24px;
      line-height: 24px;
      padding-bottom: 7px;
    }
    .photoshop-divider {
      height: 5px;
    }
  `]
            },] }
];
PhotoshopFieldsComponent.propDecorators = {
    rgb: [{ type: Input }],
    hsv: [{ type: Input }],
    hex: [{ type: Input }],
    onChange: [{ type: Output }]
};

class PhotoshopPreviewsComponent {
    constructor() {
        this.currentColor = '';
        this.backgroundNew = '';
    }
    ngOnChanges() {
        this.backgroundNew = `rgb(${this.rgb.r},${this.rgb.g}, ${this.rgb.b})`;
    }
}
PhotoshopPreviewsComponent.decorators = [
    { type: Component, args: [{
                selector: 'color-photoshop-previews',
                template: `
  <div>
    <div class="photoshop-label">new</div>
    <div class="photoshop-swatches">
      <div class="photoshop-new" [style.background]="backgroundNew"></div>
      <div class="photoshop-current" [style.background]="currentColor"></div>
    </div>
    <div class="photoshop-label">current</div>
  </div>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                styles: [`
  .photoshop-swatches {
    border: 1px solid #B3B3B3;
    border-bottom: 1px solid #F0F0F0;
    margin-bottom: 2px;
    margin-top: 1px;
  }
  .photoshop-new {
    height: 34px;
    box-shadow: inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 1px 0 #000;
  }
  .photoshop-current {
    height: 34px;
    box-shadow: inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 -1px 0 #000;
  }
  .photoshop-label {
    font-size: 14px;
    color: #000;
    text-align: center;
  }
  `]
            },] }
];
PhotoshopPreviewsComponent.propDecorators = {
    rgb: [{ type: Input }],
    currentColor: [{ type: Input }]
};

class PhotoshopComponent extends ColorWrap {
    constructor() {
        super();
        /** Title text */
        this.header = 'Color Picker';
        this.onAccept = new EventEmitter();
        this.onCancel = new EventEmitter();
        this.circle = {
            width: '12px',
            height: '12px',
            borderRadius: '6px',
            boxShadow: 'rgb(255, 255, 255) 0px 0px 0px 1px inset',
            transform: 'translate(-6px, -10px)',
        };
    }
    handleValueChange({ data, $event }) {
        this.handleChange(data, $event);
    }
}
PhotoshopComponent.decorators = [
    { type: Component, args: [{
                selector: 'color-photoshop',
                template: `
  <div class="photoshop-picker {{ className }}">
    <div class="photoshop-head">{{ header }}</div>
    <div class="photoshop-body">
      <div class="photoshop-saturation">
        <color-saturation
          [hsl]="hsl" [hsv]="hsv" [circle]="circle"
          (onChange)="handleValueChange($event)"
        ></color-saturation>
      </div>
      <div class="photoshop-hue">
        <color-hue direction="vertical"
          [hsl]="hsl" [hidePointer]="true"
          (onChange)="handleValueChange($event)"
        ></color-hue>
      </div>
      <div class="photoshop-controls">
        <div class="photoshop-top">
          <div class="photoshop-previews">
            <color-photoshop-previews
              [rgb]="rgb" [currentColor]="currentColor"
            ></color-photoshop-previews>
          </div>
          <div class="photoshop-actions">
            <color-photoshop-button label="OK"
              [active]="true" (onClick)="onAccept.emit($event)"
            ></color-photoshop-button>
            <color-photoshop-button label="Cancel"
              (onClick)="onCancel.emit($event)"
            >
            </color-photoshop-button>
            <color-photoshop-fields
              [rgb]="rgb" [hex]="hex" [hsv]="hsv"
              (onChange)="handleValueChange($event)"
            ></color-photoshop-fields>
          </div>
        </div>
      </div>
    </div>
  </div>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                styles: [`
    .photoshop-picker {
      background: rgb(220, 220, 220);
      border-radius: 4px;
      box-shadow: rgba(0, 0, 0, 0.25) 0px 0px 0px 1px, rgba(0, 0, 0, 0.15) 0px 8px 16px;
      box-sizing: initial; width: 513px;
    }
    .photoshop-head {
      background-image: linear-gradient(
        -180deg,
        rgb(240, 240, 240) 0%,
        rgb(212, 212, 212) 100%
      );
      border-bottom: 1px solid rgb(177, 177, 177);
      box-shadow: rgba(255, 255, 255, 0.2) 0px 1px 0px 0px inset,
        rgba(0, 0, 0, 0.02) 0px -1px 0px 0px inset;
      height: 23px;
      line-height: 24px;
      border-radius: 4px 4px 0px 0px;
      font-size: 13px;
      color: rgb(77, 77, 77);
      text-align: center;
    }
    .photoshop-body {
      padding: 15px 15px 0px;
      display: flex;
    }
    .photoshop-saturation {
      width: 256px;
      height: 256px;
      position: relative;
      border-width: 2px;
      border-style: solid;
      border-color: rgb(179, 179, 179) rgb(179, 179, 179) rgb(240, 240, 240);
      border-image: initial;
      overflow: hidden;
    }
    .photoshop-hue {
      position: relative;
      height: 256px;
      width: 23px;
      margin-left: 10px;
      border-width: 2px;
      border-style: solid;
      border-color: rgb(179, 179, 179) rgb(179, 179, 179) rgb(240, 240, 240);
      border-image: initial;
    }
    .photoshop-controls {
      width: 180px;
      margin-left: 10px;
    }
    .photoshop-top {
      display: flex;
    }
    .photoshop-previews {
      width: 60px;
    }
    .photoshop-actions {
      -webkit-box-flex: 1;
      flex: 1 1 0%;
      margin-left: 20px;
    }
  `]
            },] }
];
PhotoshopComponent.ctorParameters = () => [];
PhotoshopComponent.propDecorators = {
    header: [{ type: Input }],
    onAccept: [{ type: Output }],
    onCancel: [{ type: Output }]
};
class ColorPhotoshopModule {
}
ColorPhotoshopModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    PhotoshopComponent,
                    PhotoshopPreviewsComponent,
                    PhotoshopButtonComponent,
                    PhotoshopFieldsComponent,
                ],
                exports: [
                    PhotoshopComponent,
                    PhotoshopPreviewsComponent,
                    PhotoshopButtonComponent,
                    PhotoshopFieldsComponent,
                ],
                imports: [
                    CommonModule,
                    EditableInputModule,
                    HueModule,
                    AlphaModule,
                    SwatchModule,
                    SaturationModule,
                ],
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { ColorPhotoshopModule, PhotoshopComponent, PhotoshopPreviewsComponent as ɵa, PhotoshopButtonComponent as ɵb, PhotoshopFieldsComponent as ɵc };
//# sourceMappingURL=ngx-color-photoshop.js.map