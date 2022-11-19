import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, NgModule, } from '@angular/core';
import { AlphaModule, CheckboardModule, ColorWrap, toState } from 'ngx-color';
export class AlphaPickerComponent extends ColorWrap {
    constructor() {
        super();
        /** Pixel value for picker width */
        this.width = 316;
        /** Pixel value for picker height */
        this.height = 16;
        this.direction = 'horizontal';
        this.pointer = {
            width: '18px',
            height: '18px',
            borderRadius: '50%',
            transform: 'translate(-9px, -2px)',
            boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.37)',
        };
    }
    ngOnChanges() {
        if (this.direction === 'vertical') {
            this.pointer.transform = 'translate(-3px, -9px)';
        }
        this.setState(toState(this.color, this.oldHue));
    }
    handlePickerChange({ data, $event }) {
        this.handleChange(data, $event);
    }
}
AlphaPickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'color-alpha-picker',
                template: `
    <div class="alpha-picker {{ className }}"
      [style.width.px]="width" [style.height.px]="height">
      <color-alpha
        [hsl]="hsl"
        [rgb]="rgb"
        [pointer]="pointer"
        [direction]="direction"
        (onChange)="handlePickerChange($event)"
      ></color-alpha>
    </div>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                styles: [`
    .alpha-picker {
      position: relative;
    }
    .color-alpha {
      radius: 2px;
    }
  `]
            },] }
];
AlphaPickerComponent.ctorParameters = () => [];
AlphaPickerComponent.propDecorators = {
    width: [{ type: Input }],
    height: [{ type: Input }],
    direction: [{ type: Input }]
};
export class ColorAlphaModule {
}
ColorAlphaModule.decorators = [
    { type: NgModule, args: [{
                declarations: [AlphaPickerComponent],
                exports: [AlphaPickerComponent],
                imports: [CommonModule, AlphaModule, CheckboardModule],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxwaGEtcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvYWxwaGEvIiwic291cmNlcyI6WyJhbHBoYS1waWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxLQUFLLEVBQ0wsUUFBUSxHQUVULE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxNQUFNLFdBQVcsQ0FBQztBQTZCOUUsTUFBTSxPQUFPLG9CQUFxQixTQUFRLFNBQVM7SUFjakQ7UUFDRSxLQUFLLEVBQUUsQ0FBQztRQWRWLG1DQUFtQztRQUMxQixVQUFLLEdBQW9CLEdBQUcsQ0FBQztRQUN0QyxvQ0FBb0M7UUFDM0IsV0FBTSxHQUFvQixFQUFFLENBQUM7UUFDN0IsY0FBUyxHQUE4QixZQUFZLENBQUM7UUFDN0QsWUFBTyxHQUE0QjtZQUNqQyxLQUFLLEVBQUUsTUFBTTtZQUNiLE1BQU0sRUFBRSxNQUFNO1lBQ2QsWUFBWSxFQUFFLEtBQUs7WUFDbkIsU0FBUyxFQUFFLHVCQUF1QjtZQUNsQyxTQUFTLEVBQUUsaUNBQWlDO1NBQzdDLENBQUM7SUFJRixDQUFDO0lBQ0QsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxVQUFVLEVBQUU7WUFDakMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsdUJBQXVCLENBQUM7U0FDbEQ7UUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFDRCxrQkFBa0IsQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUU7UUFDakMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7O1lBcERGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7O0dBV1Q7Z0JBV0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLG1CQUFtQixFQUFFLEtBQUs7eUJBVnhCOzs7Ozs7O0dBT0Q7YUFJRjs7OztvQkFHRSxLQUFLO3FCQUVMLEtBQUs7d0JBQ0wsS0FBSzs7QUE0QlIsTUFBTSxPQUFPLGdCQUFnQjs7O1lBTDVCLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztnQkFDcEMsT0FBTyxFQUFFLENBQUMsb0JBQW9CLENBQUM7Z0JBQy9CLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLENBQUM7YUFDdkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBJbnB1dCxcclxuICBOZ01vZHVsZSxcclxuICBPbkNoYW5nZXMsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBBbHBoYU1vZHVsZSwgQ2hlY2tib2FyZE1vZHVsZSwgQ29sb3JXcmFwLCB0b1N0YXRlIH0gZnJvbSAnbmd4LWNvbG9yJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY29sb3ItYWxwaGEtcGlja2VyJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiBjbGFzcz1cImFscGhhLXBpY2tlciB7eyBjbGFzc05hbWUgfX1cIlxyXG4gICAgICBbc3R5bGUud2lkdGgucHhdPVwid2lkdGhcIiBbc3R5bGUuaGVpZ2h0LnB4XT1cImhlaWdodFwiPlxyXG4gICAgICA8Y29sb3ItYWxwaGFcclxuICAgICAgICBbaHNsXT1cImhzbFwiXHJcbiAgICAgICAgW3JnYl09XCJyZ2JcIlxyXG4gICAgICAgIFtwb2ludGVyXT1cInBvaW50ZXJcIlxyXG4gICAgICAgIFtkaXJlY3Rpb25dPVwiZGlyZWN0aW9uXCJcclxuICAgICAgICAob25DaGFuZ2UpPVwiaGFuZGxlUGlja2VyQ2hhbmdlKCRldmVudClcIlxyXG4gICAgICA+PC9jb2xvci1hbHBoYT5cclxuICAgIDwvZGl2PlxyXG4gIGAsXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAuYWxwaGEtcGlja2VyIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgfVxyXG4gICAgLmNvbG9yLWFscGhhIHtcclxuICAgICAgcmFkaXVzOiAycHg7XHJcbiAgICB9XHJcbiAgYCxcclxuICBdLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWxwaGFQaWNrZXJDb21wb25lbnQgZXh0ZW5kcyBDb2xvcldyYXAgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG4gIC8qKiBQaXhlbCB2YWx1ZSBmb3IgcGlja2VyIHdpZHRoICovXHJcbiAgQElucHV0KCkgd2lkdGg6IHN0cmluZyB8IG51bWJlciA9IDMxNjtcclxuICAvKiogUGl4ZWwgdmFsdWUgZm9yIHBpY2tlciBoZWlnaHQgKi9cclxuICBASW5wdXQoKSBoZWlnaHQ6IHN0cmluZyB8IG51bWJlciA9IDE2O1xyXG4gIEBJbnB1dCgpIGRpcmVjdGlvbjogJ2hvcml6b250YWwnIHwgJ3ZlcnRpY2FsJyA9ICdob3Jpem9udGFsJztcclxuICBwb2ludGVyOiB7W2tleTogc3RyaW5nXTogc3RyaW5nfSA9IHtcclxuICAgIHdpZHRoOiAnMThweCcsXHJcbiAgICBoZWlnaHQ6ICcxOHB4JyxcclxuICAgIGJvcmRlclJhZGl1czogJzUwJScsXHJcbiAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGUoLTlweCwgLTJweCknLFxyXG4gICAgYm94U2hhZG93OiAnMCAxcHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjM3KScsXHJcbiAgfTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuICBuZ09uQ2hhbmdlcygpIHtcclxuICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xyXG4gICAgICB0aGlzLnBvaW50ZXIudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZSgtM3B4LCAtOXB4KSc7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNldFN0YXRlKHRvU3RhdGUodGhpcy5jb2xvciwgdGhpcy5vbGRIdWUpKTtcclxuICB9XHJcbiAgaGFuZGxlUGlja2VyQ2hhbmdlKHsgZGF0YSwgJGV2ZW50IH0pIHtcclxuICAgIHRoaXMuaGFuZGxlQ2hhbmdlKGRhdGEsICRldmVudCk7XHJcbiAgfVxyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW0FscGhhUGlja2VyQ29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbQWxwaGFQaWNrZXJDb21wb25lbnRdLFxyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEFscGhhTW9kdWxlLCBDaGVja2JvYXJkTW9kdWxlXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbG9yQWxwaGFNb2R1bGUge31cclxuIl19