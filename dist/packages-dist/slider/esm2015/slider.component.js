import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, NgModule, } from '@angular/core';
import { ColorWrap, HueModule, SwatchModule } from 'ngx-color';
import { SliderSwatchComponent } from './slider-swatch.component';
import { SliderSwatchesComponent } from './slider-swatches.component';
export class SliderComponent extends ColorWrap {
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
export class ColorSliderModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvc2xpZGVyLyIsInNvdXJjZXMiOlsic2xpZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsS0FBSyxFQUNMLFFBQVEsR0FDVCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDL0QsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUE4QnRFLE1BQU0sT0FBTyxlQUFnQixTQUFRLFNBQVM7SUFZNUM7UUFDRSxLQUFLLEVBQUUsQ0FBQztRQVhWLFlBQU8sR0FBMkI7WUFDaEMsS0FBSyxFQUFFLE1BQU07WUFDYixNQUFNLEVBQUUsTUFBTTtZQUNkLFlBQVksRUFBRSxLQUFLO1lBQ25CLFNBQVMsRUFBRSx1QkFBdUI7WUFDbEMsZUFBZSxFQUFFLG9CQUFvQjtZQUNyQyxTQUFTLEVBQUUsaUNBQWlDO1NBQzdDLENBQUM7UUFDTyxXQUFNLEdBQUcsQ0FBQyxDQUFDO0lBSXBCLENBQUM7SUFFRCxrQkFBa0IsQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUU7UUFDakMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7O1lBOUNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7OztHQWNUO2dCQVNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxtQkFBbUIsRUFBRSxLQUFLO3lCQVJ4Qjs7Ozs7R0FLRDthQUlGOzs7O3NCQUVFLEtBQUs7cUJBU0wsS0FBSzs7QUFvQlIsTUFBTSxPQUFPLGlCQUFpQjs7O1lBVDdCLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUU7b0JBQ1osZUFBZTtvQkFDZixxQkFBcUI7b0JBQ3JCLHVCQUF1QjtpQkFDeEI7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsZUFBZSxFQUFFLHFCQUFxQixFQUFFLHVCQUF1QixDQUFDO2dCQUMxRSxPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsU0FBUyxFQUFFLFlBQVksQ0FBQzthQUNqRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIElucHV0LFxyXG4gIE5nTW9kdWxlLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgQ29sb3JXcmFwLCBIdWVNb2R1bGUsIFN3YXRjaE1vZHVsZSB9IGZyb20gJ25neC1jb2xvcic7XHJcbmltcG9ydCB7IFNsaWRlclN3YXRjaENvbXBvbmVudCB9IGZyb20gJy4vc2xpZGVyLXN3YXRjaC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTbGlkZXJTd2F0Y2hlc0NvbXBvbmVudCB9IGZyb20gJy4vc2xpZGVyLXN3YXRjaGVzLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NvbG9yLXNsaWRlcicsXHJcbiAgdGVtcGxhdGU6IGBcclxuICA8ZGl2IGNsYXNzPVwic2xpZGVyLXBpY2tlciB7eyBjbGFzc05hbWUgfX1cIj5cclxuICAgIDxkaXYgY2xhc3M9XCJzbGlkZXItaHVlXCI+XHJcbiAgICAgIDxjb2xvci1odWVcclxuICAgICAgICBbaHNsXT1cImhzbFwiIFtyYWRpdXNdPVwicmFkaXVzXCIgW3BvaW50ZXJdPVwicG9pbnRlclwiXHJcbiAgICAgICAgKG9uQ2hhbmdlKT1cImhhbmRsZVBpY2tlckNoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgPjwvY29sb3ItaHVlPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwic2xpZGVyLXN3YXRjaGVzXCI+XHJcbiAgICAgIDxjb2xvci1zbGlkZXItc3dhdGNoZXMgW2hzbF09XCJoc2xcIlxyXG4gICAgICAgIChvbkNsaWNrKT1cImhhbmRsZVBpY2tlckNoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgPjwvY29sb3Itc2xpZGVyLXN3YXRjaGVzPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgYCxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgIC5zbGlkZXItaHVlIHtcclxuICAgICAgaGVpZ2h0OiAxMnB4O1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB9XHJcbiAgYCxcclxuICBdLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2xpZGVyQ29tcG9uZW50IGV4dGVuZHMgQ29sb3JXcmFwIHtcclxuICBASW5wdXQoKVxyXG4gIHBvaW50ZXI6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XHJcbiAgICB3aWR0aDogJzE0cHgnLFxyXG4gICAgaGVpZ2h0OiAnMTRweCcsXHJcbiAgICBib3JkZXJSYWRpdXM6ICc2cHgnLFxyXG4gICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC03cHgsIC0ycHgpJyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYigyNDgsIDI0OCwgMjQ4KScsXHJcbiAgICBib3hTaGFkb3c6ICcwIDFweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuMzcpJyxcclxuICB9O1xyXG4gIEBJbnB1dCgpIHJhZGl1cyA9IDI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVBpY2tlckNoYW5nZSh7IGRhdGEsICRldmVudCB9KSB7XHJcbiAgICB0aGlzLmhhbmRsZUNoYW5nZShkYXRhLCAkZXZlbnQpO1xyXG4gIH1cclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIFNsaWRlckNvbXBvbmVudCxcclxuICAgIFNsaWRlclN3YXRjaENvbXBvbmVudCxcclxuICAgIFNsaWRlclN3YXRjaGVzQ29tcG9uZW50LFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1NsaWRlckNvbXBvbmVudCwgU2xpZGVyU3dhdGNoQ29tcG9uZW50LCBTbGlkZXJTd2F0Y2hlc0NvbXBvbmVudF0sXHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgSHVlTW9kdWxlLCBTd2F0Y2hNb2R1bGVdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29sb3JTbGlkZXJNb2R1bGUge31cclxuIl19