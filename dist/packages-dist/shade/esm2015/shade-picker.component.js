import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, NgModule, } from '@angular/core';
import { ColorWrap, ShadeModule, toState } from 'ngx-color';
export class ShadeSliderComponent extends ColorWrap {
    constructor() {
        super();
        /** Pixel value for picker width */
        this.width = 316;
        /** Pixel value for picker height */
        this.height = 16;
        this.pointer = {
            width: '18px',
            height: '18px',
            borderRadius: '50%',
            transform: 'translate(-9px, -2px)',
            boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.37)',
        };
    }
    ngOnChanges() {
        this.setState(toState(this.color, this.oldHue));
    }
    handlePickerChange({ data, $event }) {
        this.handleChange(data, $event);
    }
}
ShadeSliderComponent.decorators = [
    { type: Component, args: [{
                selector: 'color-shade-picker',
                template: `
    <div class="shade-slider {{ className || '' }}"
      [style.width.px]="width" [style.height.px]="height">
      <color-shade
        [hsl]="hsl"
        [rgb]="rgb"
        [pointer]="pointer"
        (onChange)="handlePickerChange($event)"
      ></color-shade>
    </div>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                styles: [`
    .shade-slider {
      position: relative;
    }
  `]
            },] }
];
ShadeSliderComponent.ctorParameters = () => [];
ShadeSliderComponent.propDecorators = {
    width: [{ type: Input }],
    height: [{ type: Input }]
};
export class ColorShadeModule {
}
ColorShadeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ShadeSliderComponent],
                exports: [ShadeSliderComponent],
                imports: [CommonModule, ShadeModule],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhZGUtcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvc2hhZGUvIiwic291cmNlcyI6WyJzaGFkZS1waWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxLQUFLLEVBQ0wsUUFBUSxHQUVULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRSxNQUFNLFdBQVcsQ0FBQztBQXlCNUQsTUFBTSxPQUFPLG9CQUFxQixTQUFRLFNBQVM7SUFhakQ7UUFDRSxLQUFLLEVBQUUsQ0FBQztRQWJWLG1DQUFtQztRQUMxQixVQUFLLEdBQW9CLEdBQUcsQ0FBQztRQUN0QyxvQ0FBb0M7UUFDM0IsV0FBTSxHQUFvQixFQUFFLENBQUM7UUFDdEMsWUFBTyxHQUE0QjtZQUNqQyxLQUFLLEVBQUUsTUFBTTtZQUNiLE1BQU0sRUFBRSxNQUFNO1lBQ2QsWUFBWSxFQUFFLEtBQUs7WUFDbkIsU0FBUyxFQUFFLHVCQUF1QjtZQUNsQyxTQUFTLEVBQUUsaUNBQWlDO1NBQzdDLENBQUM7SUFJRixDQUFDO0lBQ0QsV0FBVztRQUNULElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUNELGtCQUFrQixDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRTtRQUNqQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNsQyxDQUFDOzs7WUE1Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLFFBQVEsRUFBRTs7Ozs7Ozs7OztHQVVUO2dCQVFELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxtQkFBbUIsRUFBRSxLQUFLO3lCQVB4Qjs7OztHQUlEO2FBSUY7Ozs7b0JBR0UsS0FBSztxQkFFTCxLQUFLOztBQXlCUixNQUFNLE9BQU8sZ0JBQWdCOzs7WUFMNUIsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLG9CQUFvQixDQUFDO2dCQUNwQyxPQUFPLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztnQkFDL0IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFdBQVcsQ0FBQzthQUNyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIElucHV0LFxyXG4gIE5nTW9kdWxlLFxyXG4gIE9uQ2hhbmdlcyxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29sb3JXcmFwLCBTaGFkZU1vZHVsZSwgdG9TdGF0ZSB9IGZyb20gJ25neC1jb2xvcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NvbG9yLXNoYWRlLXBpY2tlcicsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXYgY2xhc3M9XCJzaGFkZS1zbGlkZXIge3sgY2xhc3NOYW1lIHx8ICcnIH19XCJcclxuICAgICAgW3N0eWxlLndpZHRoLnB4XT1cIndpZHRoXCIgW3N0eWxlLmhlaWdodC5weF09XCJoZWlnaHRcIj5cclxuICAgICAgPGNvbG9yLXNoYWRlXHJcbiAgICAgICAgW2hzbF09XCJoc2xcIlxyXG4gICAgICAgIFtyZ2JdPVwicmdiXCJcclxuICAgICAgICBbcG9pbnRlcl09XCJwb2ludGVyXCJcclxuICAgICAgICAob25DaGFuZ2UpPVwiaGFuZGxlUGlja2VyQ2hhbmdlKCRldmVudClcIlxyXG4gICAgICA+PC9jb2xvci1zaGFkZT5cclxuICAgIDwvZGl2PlxyXG4gIGAsXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAuc2hhZGUtc2xpZGVyIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgfVxyXG4gIGAsXHJcbiAgXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFNoYWRlU2xpZGVyQ29tcG9uZW50IGV4dGVuZHMgQ29sb3JXcmFwIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuICAvKiogUGl4ZWwgdmFsdWUgZm9yIHBpY2tlciB3aWR0aCAqL1xyXG4gIEBJbnB1dCgpIHdpZHRoOiBzdHJpbmcgfCBudW1iZXIgPSAzMTY7XHJcbiAgLyoqIFBpeGVsIHZhbHVlIGZvciBwaWNrZXIgaGVpZ2h0ICovXHJcbiAgQElucHV0KCkgaGVpZ2h0OiBzdHJpbmcgfCBudW1iZXIgPSAxNjtcclxuICBwb2ludGVyOiB7W2tleTogc3RyaW5nXTogc3RyaW5nfSA9IHtcclxuICAgIHdpZHRoOiAnMThweCcsXHJcbiAgICBoZWlnaHQ6ICcxOHB4JyxcclxuICAgIGJvcmRlclJhZGl1czogJzUwJScsXHJcbiAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTlweCwgLTJweCknLFxyXG4gICAgYm94U2hhZG93OiAnMCAxcHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjM3KScsXHJcbiAgfTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuICBuZ09uQ2hhbmdlcygpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUodG9TdGF0ZSh0aGlzLmNvbG9yLCB0aGlzLm9sZEh1ZSkpO1xyXG4gIH1cclxuICBoYW5kbGVQaWNrZXJDaGFuZ2UoeyBkYXRhLCAkZXZlbnQgfSkge1xyXG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UoZGF0YSwgJGV2ZW50KTtcclxuICB9XHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbU2hhZGVTbGlkZXJDb21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFtTaGFkZVNsaWRlckNvbXBvbmVudF0sXHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgU2hhZGVNb2R1bGVdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29sb3JTaGFkZU1vZHVsZSB7fVxyXG4iXX0=