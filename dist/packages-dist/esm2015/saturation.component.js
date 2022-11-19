import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, NgModule, Output, } from '@angular/core';
import { CoordinatesModule } from './coordinates.directive';
export class SaturationComponent {
    constructor() {
        this.onChange = new EventEmitter();
    }
    ngOnChanges() {
        this.background = `hsl(${this.hsl.h}, 100%, 50%)`;
        this.pointerTop = -(this.hsv.v * 100) + 1 + 100 + '%';
        this.pointerLeft = this.hsv.s * 100 + '%';
    }
    handleChange({ top, left, containerHeight, containerWidth, $event }) {
        if (left < 0) {
            left = 0;
        }
        else if (left > containerWidth) {
            left = containerWidth;
        }
        else if (top < 0) {
            top = 0;
        }
        else if (top > containerHeight) {
            top = containerHeight;
        }
        const saturation = left / containerWidth;
        let bright = -(top / containerHeight) + 1;
        bright = bright > 0 ? bright : 0;
        bright = bright > 1 ? 1 : bright;
        const data = {
            h: this.hsl.h,
            s: saturation,
            v: bright,
            a: this.hsl.a,
            source: 'hsva',
        };
        this.onChange.emit({ data, $event });
    }
}
SaturationComponent.decorators = [
    { type: Component, args: [{
                selector: 'color-saturation',
                template: `
  <div class="color-saturation" ngx-color-coordinates (coordinatesChange)="handleChange($event)" [style.background]="background">
    <div class="saturation-white">
      <div class="saturation-black"></div>
      <div class="saturation-pointer" [ngStyle]="pointer" [style.top]="pointerTop" [style.left]="pointerLeft">
        <div class="saturation-circle" [ngStyle]="circle"></div>
      </div>
    </div>
  </div>
  `,
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [`
    .saturation-white {
      background: linear-gradient(to right, #fff, rgba(255,255,255,0));
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
    .saturation-black {
      background: linear-gradient(to top, #000, rgba(0,0,0,0));
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
    .color-saturation {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
    .saturation-pointer {
      position: absolute;
      cursor: default;
    }
    .saturation-circle {
      width: 4px;
      height: 4px;
      box-shadow: 0 0 0 1.5px #fff, inset 0 0 1px 1px rgba(0,0,0,.3), 0 0 1px 2px rgba(0,0,0,.4);
      border-radius: 50%;
      cursor: hand;
      transform: translate(-2px, -4px);
    }
  `]
            },] }
];
SaturationComponent.propDecorators = {
    hsl: [{ type: Input }],
    hsv: [{ type: Input }],
    radius: [{ type: Input }],
    pointer: [{ type: Input }],
    circle: [{ type: Input }],
    onChange: [{ type: Output }]
};
export class SaturationModule {
}
SaturationModule.decorators = [
    { type: NgModule, args: [{
                declarations: [SaturationComponent],
                exports: [SaturationComponent],
                imports: [CommonModule, CoordinatesModule],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2F0dXJhdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vc3JjL2xpYi9jb21tb24vIiwic291cmNlcyI6WyJzYXR1cmF0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFDTCxRQUFRLEVBRVIsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBR3ZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBeUQ1RCxNQUFNLE9BQU8sbUJBQW1CO0lBdERoQztRQTREWSxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQXVDLENBQUM7SUFtQy9FLENBQUM7SUE5QkMsV0FBVztRQUNULElBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsY0FBYyxDQUFDO1FBQ2xELElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ3RELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztJQUM1QyxDQUFDO0lBQ0QsWUFBWSxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsY0FBYyxFQUFFLE1BQU0sRUFBRTtRQUNqRSxJQUFJLElBQUksR0FBRyxDQUFDLEVBQUU7WUFDWixJQUFJLEdBQUcsQ0FBQyxDQUFDO1NBQ1Y7YUFBTSxJQUFJLElBQUksR0FBRyxjQUFjLEVBQUU7WUFDaEMsSUFBSSxHQUFHLGNBQWMsQ0FBQztTQUN2QjthQUFNLElBQUksR0FBRyxHQUFHLENBQUMsRUFBRTtZQUNsQixHQUFHLEdBQUcsQ0FBQyxDQUFDO1NBQ1Q7YUFBTSxJQUFJLEdBQUcsR0FBRyxlQUFlLEVBQUU7WUFDaEMsR0FBRyxHQUFHLGVBQWUsQ0FBQztTQUN2QjtRQUVELE1BQU0sVUFBVSxHQUFHLElBQUksR0FBRyxjQUFjLENBQUM7UUFDekMsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDMUMsTUFBTSxHQUFHLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pDLE1BQU0sR0FBRyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUVqQyxNQUFNLElBQUksR0FBZTtZQUN2QixDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2IsQ0FBQyxFQUFFLFVBQVU7WUFDYixDQUFDLEVBQUUsTUFBTTtZQUNULENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDYixNQUFNLEVBQUUsTUFBTTtTQUNmLENBQUM7UUFDRixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7OztZQTlGRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsUUFBUSxFQUFFOzs7Ozs7Ozs7R0FTVDtnQkF3Q0QsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07eUJBdkM3Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBb0NEO2FBSUY7OztrQkFFRSxLQUFLO2tCQUNMLEtBQUs7cUJBQ0wsS0FBSztzQkFDTCxLQUFLO3FCQUNMLEtBQUs7dUJBQ0wsTUFBTTs7QUEwQ1QsTUFBTSxPQUFPLGdCQUFnQjs7O1lBTDVCLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztnQkFDbkMsT0FBTyxFQUFFLENBQUMsbUJBQW1CLENBQUM7Z0JBQzlCLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxpQkFBaUIsQ0FBQzthQUMzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBOZ01vZHVsZSxcclxuICBPbkNoYW5nZXMsXHJcbiAgT3V0cHV0LFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuXHJcbmltcG9ydCB7IENvb3JkaW5hdGVzTW9kdWxlIH0gZnJvbSAnLi9jb29yZGluYXRlcy5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBIU0xBLCBIU1ZBLCBIU1ZBc291cmNlIH0gZnJvbSAnLi9oZWxwZXJzL2NvbG9yLmludGVyZmFjZXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjb2xvci1zYXR1cmF0aW9uJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gIDxkaXYgY2xhc3M9XCJjb2xvci1zYXR1cmF0aW9uXCIgbmd4LWNvbG9yLWNvb3JkaW5hdGVzIChjb29yZGluYXRlc0NoYW5nZSk9XCJoYW5kbGVDaGFuZ2UoJGV2ZW50KVwiIFtzdHlsZS5iYWNrZ3JvdW5kXT1cImJhY2tncm91bmRcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJzYXR1cmF0aW9uLXdoaXRlXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJzYXR1cmF0aW9uLWJsYWNrXCI+PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJzYXR1cmF0aW9uLXBvaW50ZXJcIiBbbmdTdHlsZV09XCJwb2ludGVyXCIgW3N0eWxlLnRvcF09XCJwb2ludGVyVG9wXCIgW3N0eWxlLmxlZnRdPVwicG9pbnRlckxlZnRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwic2F0dXJhdGlvbi1jaXJjbGVcIiBbbmdTdHlsZV09XCJjaXJjbGVcIj48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICBgLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgLnNhdHVyYXRpb24td2hpdGUge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZmYsIHJnYmEoMjU1LDI1NSwyNTUsMCkpO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICByaWdodDogMDtcclxuICAgIH1cclxuICAgIC5zYXR1cmF0aW9uLWJsYWNrIHtcclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgIzAwMCwgcmdiYSgwLDAsMCwwKSk7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgfVxyXG4gICAgLmNvbG9yLXNhdHVyYXRpb24ge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICByaWdodDogMDtcclxuICAgIH1cclxuICAgIC5zYXR1cmF0aW9uLXBvaW50ZXIge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgIH1cclxuICAgIC5zYXR1cmF0aW9uLWNpcmNsZSB7XHJcbiAgICAgIHdpZHRoOiA0cHg7XHJcbiAgICAgIGhlaWdodDogNHB4O1xyXG4gICAgICBib3gtc2hhZG93OiAwIDAgMCAxLjVweCAjZmZmLCBpbnNldCAwIDAgMXB4IDFweCByZ2JhKDAsMCwwLC4zKSwgMCAwIDFweCAycHggcmdiYSgwLDAsMCwuNCk7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgY3Vyc29yOiBoYW5kO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMnB4LCAtNHB4KTtcclxuICAgIH1cclxuICBgLFxyXG4gIF0sXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTYXR1cmF0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuICBASW5wdXQoKSBoc2whOiBIU0xBO1xyXG4gIEBJbnB1dCgpIGhzdiE6IEhTVkE7XHJcbiAgQElucHV0KCkgcmFkaXVzITogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIHBvaW50ZXIhOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+O1xyXG4gIEBJbnB1dCgpIGNpcmNsZSE6IFJlY29yZDxzdHJpbmcsIHN0cmluZz47XHJcbiAgQE91dHB1dCgpIG9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjx7IGRhdGE6IEhTVkFzb3VyY2U7ICRldmVudDogRXZlbnQgfT4oKTtcclxuICBiYWNrZ3JvdW5kITogc3RyaW5nO1xyXG4gIHBvaW50ZXJUb3AhOiBzdHJpbmc7XHJcbiAgcG9pbnRlckxlZnQhOiBzdHJpbmc7XHJcblxyXG4gIG5nT25DaGFuZ2VzKCkge1xyXG4gICAgdGhpcy5iYWNrZ3JvdW5kID0gYGhzbCgke3RoaXMuaHNsLmh9LCAxMDAlLCA1MCUpYDtcclxuICAgIHRoaXMucG9pbnRlclRvcCA9IC0odGhpcy5oc3YudiAqIDEwMCkgKyAxICsgMTAwICsgJyUnO1xyXG4gICAgdGhpcy5wb2ludGVyTGVmdCA9IHRoaXMuaHN2LnMgKiAxMDAgKyAnJSc7XHJcbiAgfVxyXG4gIGhhbmRsZUNoYW5nZSh7IHRvcCwgbGVmdCwgY29udGFpbmVySGVpZ2h0LCBjb250YWluZXJXaWR0aCwgJGV2ZW50IH0pIHtcclxuICAgIGlmIChsZWZ0IDwgMCkge1xyXG4gICAgICBsZWZ0ID0gMDtcclxuICAgIH0gZWxzZSBpZiAobGVmdCA+IGNvbnRhaW5lcldpZHRoKSB7XHJcbiAgICAgIGxlZnQgPSBjb250YWluZXJXaWR0aDtcclxuICAgIH0gZWxzZSBpZiAodG9wIDwgMCkge1xyXG4gICAgICB0b3AgPSAwO1xyXG4gICAgfSBlbHNlIGlmICh0b3AgPiBjb250YWluZXJIZWlnaHQpIHtcclxuICAgICAgdG9wID0gY29udGFpbmVySGVpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNhdHVyYXRpb24gPSBsZWZ0IC8gY29udGFpbmVyV2lkdGg7XHJcbiAgICBsZXQgYnJpZ2h0ID0gLSh0b3AgLyBjb250YWluZXJIZWlnaHQpICsgMTtcclxuICAgIGJyaWdodCA9IGJyaWdodCA+IDAgPyBicmlnaHQgOiAwO1xyXG4gICAgYnJpZ2h0ID0gYnJpZ2h0ID4gMSA/IDEgOiBicmlnaHQ7XHJcblxyXG4gICAgY29uc3QgZGF0YTogSFNWQXNvdXJjZSA9IHtcclxuICAgICAgaDogdGhpcy5oc2wuaCxcclxuICAgICAgczogc2F0dXJhdGlvbixcclxuICAgICAgdjogYnJpZ2h0LFxyXG4gICAgICBhOiB0aGlzLmhzbC5hLFxyXG4gICAgICBzb3VyY2U6ICdoc3ZhJyxcclxuICAgIH07XHJcbiAgICB0aGlzLm9uQ2hhbmdlLmVtaXQoeyBkYXRhLCAkZXZlbnQgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1NhdHVyYXRpb25Db21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFtTYXR1cmF0aW9uQ29tcG9uZW50XSxcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBDb29yZGluYXRlc01vZHVsZV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTYXR1cmF0aW9uTW9kdWxlIHt9XHJcbiJdfQ==