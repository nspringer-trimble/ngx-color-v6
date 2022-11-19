import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, NgModule, Output, } from '@angular/core';
import { CoordinatesModule } from './coordinates.directive';
import { TinyColor } from '@ctrl/tinycolor';
export class ShadeComponent {
    constructor() {
        this.onChange = new EventEmitter();
    }
    ngOnChanges() {
        this.gradient = {
            background: `linear-gradient(to right,
          hsl(${this.hsl.h}, 90%, 55%),
          #000)`,
        };
        const hsv = new TinyColor(this.hsl).toHsv();
        this.pointerLeft = 100 - (hsv.v * 100);
    }
    handleChange({ left, containerWidth, $event }) {
        let data;
        let v;
        if (left < 0) {
            v = 0;
        }
        else if (left > containerWidth) {
            v = 1;
        }
        else {
            v = Math.round((left * 100) / containerWidth) / 100;
        }
        const hsv = new TinyColor(this.hsl).toHsv();
        if (hsv.v !== v) {
            data = {
                h: this.hsl.h,
                s: 100,
                v: 1 - v,
                l: this.hsl.l,
                a: this.hsl.a,
                source: 'rgb',
            };
        }
        if (!data) {
            return;
        }
        this.onChange.emit({ data, $event });
    }
}
ShadeComponent.decorators = [
    { type: Component, args: [{
                selector: 'color-shade',
                template: `
    <div class="shade" [style.border-radius]="radius">
      <div
        class="shade-gradient"
        [ngStyle]="gradient"
        [style.box-shadow]="shadow"
        [style.border-radius]="radius"
      ></div>
      <div
        ngx-color-coordinates
        (coordinatesChange)="handleChange($event)"
        class="shade-container"
      >
        <div
          class="shade-pointer"
          [style.left.%]="pointerLeft"
          [style.top.%]="pointerTop"
        >
          <div class="shade-slider" [ngStyle]="pointer"></div>
        </div>
      </div>
    </div>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                styles: [`
    .shade {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
    .shade-gradient {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
    .shade-container {
      position: relative;
      height: 100%;
      margin: 0 3px;
    }
    .shade-pointer {
      position: absolute;
    }
    .shade-slider {
      width: 4px;
      border-radius: 1px;
      height: 8px;
      box-shadow: 0 0 2px rgba(0, 0, 0, .6);
      background: #fff;
      margin-top: 1px;
      transform: translateX(-2px);
    },
  `]
            },] }
];
ShadeComponent.propDecorators = {
    hsl: [{ type: Input }],
    rgb: [{ type: Input }],
    pointer: [{ type: Input }],
    shadow: [{ type: Input }],
    radius: [{ type: Input }],
    onChange: [{ type: Output }]
};
export class ShadeModule {
}
ShadeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ShadeComponent],
                exports: [ShadeComponent],
                imports: [CommonModule, CoordinatesModule],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhZGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uL3NyYy9saWIvY29tbW9uLyIsInNvdXJjZXMiOlsic2hhZGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUNMLFFBQVEsRUFFUixNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFNUQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBa0U1QyxNQUFNLE9BQU8sY0FBYztJQS9EM0I7UUFxRVksYUFBUSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7SUE0Qy9DLENBQUM7SUF2Q0MsV0FBVztRQUNULElBQUksQ0FBQyxRQUFRLEdBQUc7WUFDZCxVQUFVLEVBQUU7Z0JBQ0YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNWO1NBQ1gsQ0FBQztRQUNGLE1BQU0sR0FBRyxHQUFHLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM1QyxJQUFJLENBQUMsV0FBVyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELFlBQVksQ0FBQyxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsTUFBTSxFQUFFO1FBQzNDLElBQUksSUFBSSxDQUFDO1FBQ1QsSUFBSSxDQUFTLENBQUM7UUFDZCxJQUFJLElBQUksR0FBRyxDQUFDLEVBQUU7WUFDWixDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ1A7YUFBTSxJQUFJLElBQUksR0FBRyxjQUFjLEVBQUU7WUFDaEMsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNQO2FBQU07WUFDTCxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsR0FBRyxjQUFjLENBQUMsR0FBRyxHQUFHLENBQUM7U0FDckQ7UUFFRCxNQUFNLEdBQUcsR0FBRyxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDNUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNmLElBQUksR0FBRztnQkFDTCxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNiLENBQUMsRUFBRSxHQUFHO2dCQUNOLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQztnQkFDUixDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNiLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2IsTUFBTSxFQUFFLEtBQUs7YUFDZCxDQUFDO1NBQ0g7UUFFRCxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1QsT0FBTztTQUNSO1FBRUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUN2QyxDQUFDOzs7WUFoSEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FzQlQ7Z0JBb0NELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxtQkFBbUIsRUFBRSxLQUFLO3lCQW5DeEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBZ0NEO2FBSUY7OztrQkFFRSxLQUFLO2tCQUNMLEtBQUs7c0JBQ0wsS0FBSztxQkFDTCxLQUFLO3FCQUNMLEtBQUs7dUJBQ0wsTUFBTTs7QUFtRFQsTUFBTSxPQUFPLFdBQVc7OztZQUx2QixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsY0FBYyxDQUFDO2dCQUM5QixPQUFPLEVBQUUsQ0FBQyxjQUFjLENBQUM7Z0JBQ3pCLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxpQkFBaUIsQ0FBQzthQUMzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBOZ01vZHVsZSxcclxuICBPbkNoYW5nZXMsXHJcbiAgT3V0cHV0LFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb29yZGluYXRlc01vZHVsZSB9IGZyb20gJy4vY29vcmRpbmF0ZXMuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgSFNMQSwgUkdCQSB9IGZyb20gJy4vaGVscGVycy9jb2xvci5pbnRlcmZhY2VzJztcclxuaW1wb3J0IHsgVGlueUNvbG9yIH0gZnJvbSAnQGN0cmwvdGlueWNvbG9yJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NvbG9yLXNoYWRlJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiBjbGFzcz1cInNoYWRlXCIgW3N0eWxlLmJvcmRlci1yYWRpdXNdPVwicmFkaXVzXCI+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzcz1cInNoYWRlLWdyYWRpZW50XCJcclxuICAgICAgICBbbmdTdHlsZV09XCJncmFkaWVudFwiXHJcbiAgICAgICAgW3N0eWxlLmJveC1zaGFkb3ddPVwic2hhZG93XCJcclxuICAgICAgICBbc3R5bGUuYm9yZGVyLXJhZGl1c109XCJyYWRpdXNcIlxyXG4gICAgICA+PC9kaXY+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBuZ3gtY29sb3ItY29vcmRpbmF0ZXNcclxuICAgICAgICAoY29vcmRpbmF0ZXNDaGFuZ2UpPVwiaGFuZGxlQ2hhbmdlKCRldmVudClcIlxyXG4gICAgICAgIGNsYXNzPVwic2hhZGUtY29udGFpbmVyXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzPVwic2hhZGUtcG9pbnRlclwiXHJcbiAgICAgICAgICBbc3R5bGUubGVmdC4lXT1cInBvaW50ZXJMZWZ0XCJcclxuICAgICAgICAgIFtzdHlsZS50b3AuJV09XCJwb2ludGVyVG9wXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2hhZGUtc2xpZGVyXCIgW25nU3R5bGVdPVwicG9pbnRlclwiPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIGAsXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAuc2hhZGUge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICByaWdodDogMDtcclxuICAgIH1cclxuICAgIC5zaGFkZS1ncmFkaWVudCB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgfVxyXG4gICAgLnNoYWRlLWNvbnRhaW5lciB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBtYXJnaW46IDAgM3B4O1xyXG4gICAgfVxyXG4gICAgLnNoYWRlLXBvaW50ZXIge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB9XHJcbiAgICAuc2hhZGUtc2xpZGVyIHtcclxuICAgICAgd2lkdGg6IDRweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMXB4O1xyXG4gICAgICBoZWlnaHQ6IDhweDtcclxuICAgICAgYm94LXNoYWRvdzogMCAwIDJweCByZ2JhKDAsIDAsIDAsIC42KTtcclxuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgbWFyZ2luLXRvcDogMXB4O1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTJweCk7XHJcbiAgICB9LFxyXG4gIGAsXHJcbiAgXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFNoYWRlQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuICBASW5wdXQoKSBoc2whOiBIU0xBO1xyXG4gIEBJbnB1dCgpIHJnYiE6IFJHQkE7XHJcbiAgQElucHV0KCkgcG9pbnRlciE6IFJlY29yZDxzdHJpbmcsIHN0cmluZz47XHJcbiAgQElucHV0KCkgc2hhZG93ITogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHJhZGl1cyE6IHN0cmluZztcclxuICBAT3V0cHV0KCkgb25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBncmFkaWVudCE6IFJlY29yZDxzdHJpbmcsIHN0cmluZz47XHJcbiAgcG9pbnRlckxlZnQhOiBudW1iZXI7XHJcbiAgcG9pbnRlclRvcD86IG51bWJlcjtcclxuXHJcbiAgbmdPbkNoYW5nZXMoKSB7XHJcbiAgICB0aGlzLmdyYWRpZW50ID0ge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LFxyXG4gICAgICAgICAgaHNsKCR7dGhpcy5oc2wuaH0sIDkwJSwgNTUlKSxcclxuICAgICAgICAgICMwMDApYCxcclxuICAgIH07XHJcbiAgICBjb25zdCBoc3YgPSBuZXcgVGlueUNvbG9yKHRoaXMuaHNsKS50b0hzdigpO1xyXG4gICAgdGhpcy5wb2ludGVyTGVmdCA9IDEwMCAtIChoc3YudiAqIDEwMCk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVDaGFuZ2UoeyBsZWZ0LCBjb250YWluZXJXaWR0aCwgJGV2ZW50IH0pOiB2b2lkIHtcclxuICAgIGxldCBkYXRhO1xyXG4gICAgbGV0IHY6IG51bWJlcjtcclxuICAgIGlmIChsZWZ0IDwgMCkge1xyXG4gICAgICB2ID0gMDtcclxuICAgIH0gZWxzZSBpZiAobGVmdCA+IGNvbnRhaW5lcldpZHRoKSB7XHJcbiAgICAgIHYgPSAxO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdiA9IE1hdGgucm91bmQoKGxlZnQgKiAxMDApIC8gY29udGFpbmVyV2lkdGgpIC8gMTAwO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhzdiA9IG5ldyBUaW55Q29sb3IodGhpcy5oc2wpLnRvSHN2KCk7XHJcbiAgICBpZiAoaHN2LnYgIT09IHYpIHtcclxuICAgICAgZGF0YSA9IHtcclxuICAgICAgICBoOiB0aGlzLmhzbC5oLFxyXG4gICAgICAgIHM6IDEwMCxcclxuICAgICAgICB2OiAxIC0gdixcclxuICAgICAgICBsOiB0aGlzLmhzbC5sLFxyXG4gICAgICAgIGE6IHRoaXMuaHNsLmEsXHJcbiAgICAgICAgc291cmNlOiAncmdiJyxcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWRhdGEpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMub25DaGFuZ2UuZW1pdCh7IGRhdGEsICRldmVudCB9KTtcclxuICB9XHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbU2hhZGVDb21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFtTaGFkZUNvbXBvbmVudF0sXHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgQ29vcmRpbmF0ZXNNb2R1bGVdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2hhZGVNb2R1bGUge31cclxuIl19