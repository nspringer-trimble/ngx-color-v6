import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, NgModule, } from '@angular/core';
import { ColorWrap, HueModule, toState } from 'ngx-color';
export class HuePickerComponent extends ColorWrap {
    constructor() {
        super();
        /** Pixel value for picker width */
        this.width = 316;
        /** Pixel value for picker height */
        this.height = 16;
        this.radius = 2;
        this.direction = 'horizontal';
        this.pointer = {
            width: '18px',
            height: '18px',
            borderRadius: '50%',
            transform: 'translate(-9px, -2px)',
            backgroundColor: 'rgb(248, 248, 248)',
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
        this.handleChange({ a: 1, h: data.h, l: 0.5, s: 1 }, $event);
    }
}
HuePickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'color-hue-picker',
                template: `
  <div class="hue-picker {{ className }}"
    [style.width.px]="width" [style.height.px]="height"
  >
    <color-hue [hsl]="hsl" [pointer]="pointer"
      [direction]="direction" [radius]="radius"
      (onChange)="handlePickerChange($event)"
    ></color-hue>
  </div>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                styles: [`
    .hue-picker {
      position: relative;
    }
  `]
            },] }
];
HuePickerComponent.ctorParameters = () => [];
HuePickerComponent.propDecorators = {
    width: [{ type: Input }],
    height: [{ type: Input }],
    radius: [{ type: Input }],
    direction: [{ type: Input }]
};
export class ColorHueModule {
}
ColorHueModule.decorators = [
    { type: NgModule, args: [{
                declarations: [HuePickerComponent],
                exports: [HuePickerComponent],
                imports: [CommonModule, HueModule],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHVlLXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL2h1ZS8iLCJzb3VyY2VzIjpbImh1ZS1waWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxLQUFLLEVBQ0wsUUFBUSxHQUVULE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxNQUFNLFdBQVcsQ0FBQztBQXdCMUQsTUFBTSxPQUFPLGtCQUFtQixTQUFRLFNBQVM7SUFnQi9DO1FBQ0UsS0FBSyxFQUFFLENBQUM7UUFoQlYsbUNBQW1DO1FBQzFCLFVBQUssR0FBb0IsR0FBRyxDQUFDO1FBQ3RDLG9DQUFvQztRQUMzQixXQUFNLEdBQW9CLEVBQUUsQ0FBQztRQUM3QixXQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsY0FBUyxHQUE4QixZQUFZLENBQUM7UUFDN0QsWUFBTyxHQUE0QjtZQUNqQyxLQUFLLEVBQUUsTUFBTTtZQUNiLE1BQU0sRUFBRSxNQUFNO1lBQ2QsWUFBWSxFQUFFLEtBQUs7WUFDbkIsU0FBUyxFQUFFLHVCQUF1QjtZQUNsQyxlQUFlLEVBQUUsb0JBQW9CO1lBQ3JDLFNBQVMsRUFBRSxpQ0FBaUM7U0FDN0MsQ0FBQztJQUlGLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLFVBQVUsRUFBRTtZQUNqQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyx1QkFBdUIsQ0FBQztTQUNsRDtRQUNELElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUNELGtCQUFrQixDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRTtRQUNqQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUMvRCxDQUFDOzs7WUFsREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFFBQVEsRUFBRTs7Ozs7Ozs7O0dBU1Q7Z0JBUUQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLG1CQUFtQixFQUFFLEtBQUs7eUJBUHhCOzs7O0dBSUQ7YUFJRjs7OztvQkFHRSxLQUFLO3FCQUVMLEtBQUs7cUJBQ0wsS0FBSzt3QkFDTCxLQUFLOztBQThCUixNQUFNLE9BQU8sY0FBYzs7O1lBTDFCLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztnQkFDbEMsT0FBTyxFQUFFLENBQUMsa0JBQWtCLENBQUM7Z0JBQzdCLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxTQUFTLENBQUM7YUFDbkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBJbnB1dCxcclxuICBOZ01vZHVsZSxcclxuICBPbkNoYW5nZXMsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBDb2xvcldyYXAsIEh1ZU1vZHVsZSwgdG9TdGF0ZSB9IGZyb20gJ25neC1jb2xvcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NvbG9yLWh1ZS1waWNrZXInLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgPGRpdiBjbGFzcz1cImh1ZS1waWNrZXIge3sgY2xhc3NOYW1lIH19XCJcclxuICAgIFtzdHlsZS53aWR0aC5weF09XCJ3aWR0aFwiIFtzdHlsZS5oZWlnaHQucHhdPVwiaGVpZ2h0XCJcclxuICA+XHJcbiAgICA8Y29sb3ItaHVlIFtoc2xdPVwiaHNsXCIgW3BvaW50ZXJdPVwicG9pbnRlclwiXHJcbiAgICAgIFtkaXJlY3Rpb25dPVwiZGlyZWN0aW9uXCIgW3JhZGl1c109XCJyYWRpdXNcIlxyXG4gICAgICAob25DaGFuZ2UpPVwiaGFuZGxlUGlja2VyQ2hhbmdlKCRldmVudClcIlxyXG4gICAgPjwvY29sb3ItaHVlPlxyXG4gIDwvZGl2PlxyXG4gIGAsXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAuaHVlLXBpY2tlciB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxuICBgLFxyXG4gIF0sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIdWVQaWNrZXJDb21wb25lbnQgZXh0ZW5kcyBDb2xvcldyYXAgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG4gIC8qKiBQaXhlbCB2YWx1ZSBmb3IgcGlja2VyIHdpZHRoICovXHJcbiAgQElucHV0KCkgd2lkdGg6IHN0cmluZyB8IG51bWJlciA9IDMxNjtcclxuICAvKiogUGl4ZWwgdmFsdWUgZm9yIHBpY2tlciBoZWlnaHQgKi9cclxuICBASW5wdXQoKSBoZWlnaHQ6IHN0cmluZyB8IG51bWJlciA9IDE2O1xyXG4gIEBJbnB1dCgpIHJhZGl1cyA9IDI7XHJcbiAgQElucHV0KCkgZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcgfCAndmVydGljYWwnID0gJ2hvcml6b250YWwnO1xyXG4gIHBvaW50ZXI6IHtba2V5OiBzdHJpbmddOiBzdHJpbmd9ID0ge1xyXG4gICAgd2lkdGg6ICcxOHB4JyxcclxuICAgIGhlaWdodDogJzE4cHgnLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcclxuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtOXB4LCAtMnB4KScsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2IoMjQ4LCAyNDgsIDI0OCknLFxyXG4gICAgYm94U2hhZG93OiAnMCAxcHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjM3KScsXHJcbiAgfTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoKSB7XHJcbiAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCcpIHtcclxuICAgICAgdGhpcy5wb2ludGVyLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGUoLTNweCwgLTlweCknO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZXRTdGF0ZSh0b1N0YXRlKHRoaXMuY29sb3IsIHRoaXMub2xkSHVlKSk7XHJcbiAgfVxyXG4gIGhhbmRsZVBpY2tlckNoYW5nZSh7IGRhdGEsICRldmVudCB9KSB7XHJcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSh7IGE6IDEsIGg6IGRhdGEuaCwgbDogMC41LCBzOiAxIH0sICRldmVudCk7XHJcbiAgfVxyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW0h1ZVBpY2tlckNvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW0h1ZVBpY2tlckNvbXBvbmVudF0sXHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgSHVlTW9kdWxlXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbG9ySHVlTW9kdWxlIHt9XHJcbiJdfQ==