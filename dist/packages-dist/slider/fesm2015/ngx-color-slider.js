import { CommonModule } from '@angular/common';
import { EventEmitter, Component, ChangeDetectionStrategy, Input, Output, NgModule } from '@angular/core';
import { ColorWrap, HueModule, SwatchModule } from 'ngx-color';

class SliderSwatchComponent {
    constructor() {
        this.first = false;
        this.last = false;
        this.onClick = new EventEmitter();
    }
    ngOnChanges() {
        this.background = `hsl(${this.hsl.h}, 50%, ${this.offset * 100}%)`;
    }
    handleClick($event) {
        this.onClick.emit({
            data: {
                h: this.hsl.h,
                s: 0.5,
                l: this.offset,
                source: 'hsl',
            },
            $event,
        });
    }
}
SliderSwatchComponent.decorators = [
    { type: Component, args: [{
                selector: 'color-slider-swatch',
                template: `
  <div class="slider-swatch" [style.background]="background"
    [class.first]="first" [class.last]="last" [class.active]="active"
    (click)="handleClick($event)"
  ></div>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                styles: [`
    .slider-swatch {
      height: 12px;
      background: rgb(121, 211, 166);
      cursor: pointer;
    }
    .slider-swatch.active {
      transform: scaleY(1.8);
      border-top-right-radius: 3.6px 2px;
      border-top-left-radius: 3.6px 2px;
      border-bottom-right-radius: 3.6px 2px;
      border-bottom-left-radius: 3.6px 2px;
    }
    .slider-swatch.first {
      border-radius: 2px 0px 0px 2px;
    }
    .slider-swatch.last {
      border-radius: 0px 2px 2px 0px;
    }

  `]
            },] }
];
SliderSwatchComponent.propDecorators = {
    hsl: [{ type: Input }],
    active: [{ type: Input }],
    offset: [{ type: Input }],
    first: [{ type: Input }],
    last: [{ type: Input }],
    onClick: [{ type: Output }]
};

class SliderSwatchesComponent {
    constructor() {
        this.onClick = new EventEmitter();
        this.onSwatchHover = new EventEmitter();
    }
    active(l, s) {
        return (Math.round(this.hsl.l * 100) / 100 === l &&
            Math.round(this.hsl.s * 100) / 100 === s);
    }
    handleClick({ data, $event }) {
        this.onClick.emit({ data, $event });
    }
}
SliderSwatchesComponent.decorators = [
    { type: Component, args: [{
                selector: 'color-slider-swatches',
                template: `
  <div class="slider-swatches">
    <div class="slider-swatch-wrap">
      <color-slider-swatch
        [hsl]="hsl"
        [offset]=".80"
        [active]="active(0.80, 0.50)"
        (onClick)="handleClick($event)"
        [first]="true"
      ></color-slider-swatch>
    </div>
    <div class="slider-swatch-wrap">
      <color-slider-swatch
        [hsl]="hsl"
        [offset]=".65"
        [active]="active(0.65, 0.50)"
        (onClick)="handleClick($event)"
      ></color-slider-swatch>
    </div>
    <div class="slider-swatch-wrap">
      <color-slider-swatch
        [hsl]="hsl"
        [offset]=".50"
        [active]="active(0.50, 0.50)"
        (onClick)="handleClick($event)"
      ></color-slider-swatch>
    </div>
    <div class="slider-swatch-wrap">
      <color-slider-swatch
        [hsl]="hsl"
        [offset]=".35"
        [active]="active(0.35, 0.50)"
        (onClick)="handleClick($event)"
      ></color-slider-swatch>
    </div>
    <div class="slider-swatch-wrap">
      <color-slider-swatch
        [hsl]="hsl"
        [offset]=".20"
        [active]="active(0.20, 0.50)"
        (onClick)="handleClick($event)"
        [last]="true"
      ></color-slider-swatch>
    </div>
  </div>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                styles: [`
    .slider-swatches {
      margin-top: 20px;
    }
    .slider-swatch-wrap {
      box-sizing: border-box;
      width: 20%;
      padding-right: 1px;
      float: left;
    }
  `]
            },] }
];
SliderSwatchesComponent.propDecorators = {
    hsl: [{ type: Input }],
    onClick: [{ type: Output }],
    onSwatchHover: [{ type: Output }]
};

class SliderComponent extends ColorWrap {
    constructor() {
        super();
        this.pointer = {
            width: '14px',
            height: '14px',
            borderRadius: '6px',
            transform: 'translate(-7px, -2px)',
            backgroundColor: 'rgb(248, 248, 248)',
            boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.37)',
        };
        this.radius = 2;
    }
    handlePickerChange({ data, $event }) {
        this.handleChange(data, $event);
    }
}
SliderComponent.decorators = [
    { type: Component, args: [{
                selector: 'color-slider',
                template: `
  <div class="slider-picker {{ className }}">
    <div class="slider-hue">
      <color-hue
        [hsl]="hsl" [radius]="radius" [pointer]="pointer"
        (onChange)="handlePickerChange($event)"
      ></color-hue>
    </div>
    <div class="slider-swatches">
      <color-slider-swatches [hsl]="hsl"
        (onClick)="handlePickerChange($event)"
      ></color-slider-swatches>
    </div>
  </div>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                styles: [`
    .slider-hue {
      height: 12px;
      position: relative;
    }
  `]
            },] }
];
SliderComponent.ctorParameters = () => [];
SliderComponent.propDecorators = {
    pointer: [{ type: Input }],
    radius: [{ type: Input }]
};
class ColorSliderModule {
}
ColorSliderModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    SliderComponent,
                    SliderSwatchComponent,
                    SliderSwatchesComponent,
                ],
                exports: [SliderComponent, SliderSwatchComponent, SliderSwatchesComponent],
                imports: [CommonModule, HueModule, SwatchModule],
            },] }
];

/**
 * Generated bundle index. Do not edit.
 */

export { ColorSliderModule, SliderComponent, SliderSwatchComponent as ɵa, SliderSwatchesComponent as ɵb };
//# sourceMappingURL=ngx-color-slider.js.map