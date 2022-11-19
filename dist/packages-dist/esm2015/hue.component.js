import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, NgModule, Output, } from '@angular/core';
import { CoordinatesModule } from './coordinates.directive';
export class HueComponent {
    constructor() {
        this.hidePointer = false;
        this.direction = 'horizontal';
        this.onChange = new EventEmitter();
        this.left = '0px';
        this.top = '';
    }
    ngOnChanges() {
        if (this.direction === 'horizontal') {
            this.left = `${this.hsl.h * 100 / 360}%`;
        }
        else {
            this.top = `${-(this.hsl.h * 100 / 360) + 100}%`;
        }
    }
    handleChange({ top, left, containerHeight, containerWidth, $event }) {
        let data;
        if (this.direction === 'vertical') {
            let h;
            if (top < 0) {
                h = 359;
            }
            else if (top > containerHeight) {
                h = 0;
            }
            else {
                const percent = -(top * 100 / containerHeight) + 100;
                h = 360 * percent / 100;
            }
            if (this.hsl.h !== h) {
                data = {
                    h,
                    s: this.hsl.s,
                    l: this.hsl.l,
                    a: this.hsl.a,
                    source: 'rgb',
                };
            }
        }
        else {
            let h;
            if (left < 0) {
                h = 0;
            }
            else if (left > containerWidth) {
                h = 359;
            }
            else {
                const percent = left * 100 / containerWidth;
                h = 360 * percent / 100;
            }
            if (this.hsl.h !== h) {
                data = {
                    h,
                    s: this.hsl.s,
                    l: this.hsl.l,
                    a: this.hsl.a,
                    source: 'rgb',
                };
            }
        }
        if (!data) {
            return;
        }
        this.onChange.emit({ data, $event });
    }
}
HueComponent.decorators = [
    { type: Component, args: [{
                selector: 'color-hue',
                template: `
  <div class="color-hue color-hue-{{direction}}" [style.border-radius.px]="radius" [style.box-shadow]="shadow">
    <div ngx-color-coordinates (coordinatesChange)="handleChange($event)" class="color-hue-container">
      <div class="color-hue-pointer" [style.left]="left" [style.top]="top" *ngIf="!hidePointer">
        <div class="color-hue-slider" [ngStyle]="pointer"></div>
      </div>
    </div>
  </div>
  `,
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [`
    .color-hue {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
    .color-hue-container {
      margin: 0 2px;
      position: relative;
      height: 100%;
    }
    .color-hue-pointer {
      position: absolute;
    }
    .color-hue-slider {
      margin-top: 1px;
      width: 4px;
      border-radius: 1px;
      height: 8px;
      box-shadow: 0 0 2px rgba(0, 0, 0, .6);
      background: #fff;
      transform: translateX(-2px);
    }
    .color-hue-horizontal {
      background: linear-gradient(to right, #f00 0%, #ff0 17%, #0f0
        33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);
    }
    .color-hue-vertical {
      background: linear-gradient(to top, #f00 0%, #ff0 17%, #0f0 33%,
        #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);
    }
  `]
            },] }
];
HueComponent.propDecorators = {
    hsl: [{ type: Input }],
    pointer: [{ type: Input }],
    radius: [{ type: Input }],
    shadow: [{ type: Input }],
    hidePointer: [{ type: Input }],
    direction: [{ type: Input }],
    onChange: [{ type: Output }]
};
export class HueModule {
}
HueModule.decorators = [
    { type: NgModule, args: [{
                declarations: [HueComponent],
                exports: [HueComponent],
                imports: [CommonModule, CoordinatesModule],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHVlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi9zcmMvbGliL2NvbW1vbi8iLCJzb3VyY2VzIjpbImh1ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsUUFBUSxFQUVSLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQXFENUQsTUFBTSxPQUFPLFlBQVk7SUFsRHpCO1FBdURXLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLGNBQVMsR0FBOEIsWUFBWSxDQUFDO1FBQ25ELGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBdUMsQ0FBQztRQUM3RSxTQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ2IsUUFBRyxHQUFHLEVBQUUsQ0FBQztJQTJEWCxDQUFDO0lBekRDLFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssWUFBWSxFQUFFO1lBQ25DLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7U0FDMUM7YUFBTTtZQUNMLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1NBQ2xEO0lBQ0gsQ0FBQztJQUNELFlBQVksQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFLGNBQWMsRUFBRSxNQUFNLEVBQUU7UUFDakUsSUFBSSxJQUE0QixDQUFDO1FBQ2pDLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxVQUFVLEVBQUU7WUFDakMsSUFBSSxDQUFTLENBQUM7WUFDZCxJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUU7Z0JBQ1gsQ0FBQyxHQUFHLEdBQUcsQ0FBQzthQUNUO2lCQUFNLElBQUksR0FBRyxHQUFHLGVBQWUsRUFBRTtnQkFDaEMsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNQO2lCQUFNO2dCQUNMLE1BQU0sT0FBTyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLGVBQWUsQ0FBQyxHQUFHLEdBQUcsQ0FBQztnQkFDckQsQ0FBQyxHQUFHLEdBQUcsR0FBRyxPQUFPLEdBQUcsR0FBRyxDQUFDO2FBQ3pCO1lBRUQsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ3BCLElBQUksR0FBRztvQkFDTCxDQUFDO29CQUNELENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ2IsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDYixDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNiLE1BQU0sRUFBRSxLQUFLO2lCQUNkLENBQUM7YUFDSDtTQUNGO2FBQU07WUFDTCxJQUFJLENBQVMsQ0FBQztZQUNkLElBQUksSUFBSSxHQUFHLENBQUMsRUFBRTtnQkFDWixDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ1A7aUJBQU0sSUFBSSxJQUFJLEdBQUcsY0FBYyxFQUFFO2dCQUNoQyxDQUFDLEdBQUcsR0FBRyxDQUFDO2FBQ1Q7aUJBQU07Z0JBQ0wsTUFBTSxPQUFPLEdBQUcsSUFBSSxHQUFHLEdBQUcsR0FBRyxjQUFjLENBQUM7Z0JBQzVDLENBQUMsR0FBRyxHQUFHLEdBQUcsT0FBTyxHQUFHLEdBQUcsQ0FBQzthQUN6QjtZQUVELElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNwQixJQUFJLEdBQUc7b0JBQ0wsQ0FBQztvQkFDRCxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNiLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ2IsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDYixNQUFNLEVBQUUsS0FBSztpQkFDZCxDQUFDO2FBQ0g7U0FDRjtRQUVELElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDVCxPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7OztZQXJIRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLFFBQVEsRUFBRTs7Ozs7Ozs7R0FRVDtnQkFxQ0QsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07eUJBcEM3Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBaUNEO2FBSUY7OztrQkFFRSxLQUFLO3NCQUNMLEtBQUs7cUJBQ0wsS0FBSztxQkFDTCxLQUFLOzBCQUNMLEtBQUs7d0JBQ0wsS0FBSzt1QkFDTCxNQUFNOztBQW9FVCxNQUFNLE9BQU8sU0FBUzs7O1lBTHJCLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxZQUFZLENBQUM7Z0JBQzVCLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztnQkFDdkIsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGlCQUFpQixDQUFDO2FBQzNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE5nTW9kdWxlLFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPdXRwdXQsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBDb29yZGluYXRlc01vZHVsZSB9IGZyb20gJy4vY29vcmRpbmF0ZXMuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgSFNMQSwgSFNMQXNvdXJjZSB9IGZyb20gJy4vaGVscGVycy9jb2xvci5pbnRlcmZhY2VzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY29sb3ItaHVlJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gIDxkaXYgY2xhc3M9XCJjb2xvci1odWUgY29sb3ItaHVlLXt7ZGlyZWN0aW9ufX1cIiBbc3R5bGUuYm9yZGVyLXJhZGl1cy5weF09XCJyYWRpdXNcIiBbc3R5bGUuYm94LXNoYWRvd109XCJzaGFkb3dcIj5cclxuICAgIDxkaXYgbmd4LWNvbG9yLWNvb3JkaW5hdGVzIChjb29yZGluYXRlc0NoYW5nZSk9XCJoYW5kbGVDaGFuZ2UoJGV2ZW50KVwiIGNsYXNzPVwiY29sb3ItaHVlLWNvbnRhaW5lclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29sb3ItaHVlLXBvaW50ZXJcIiBbc3R5bGUubGVmdF09XCJsZWZ0XCIgW3N0eWxlLnRvcF09XCJ0b3BcIiAqbmdJZj1cIiFoaWRlUG9pbnRlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2xvci1odWUtc2xpZGVyXCIgW25nU3R5bGVdPVwicG9pbnRlclwiPjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIGAsXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAuY29sb3ItaHVlIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIGJvdHRvbTogMDtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICB9XHJcbiAgICAuY29sb3ItaHVlLWNvbnRhaW5lciB7XHJcbiAgICAgIG1hcmdpbjogMCAycHg7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLmNvbG9yLWh1ZS1wb2ludGVyIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgfVxyXG4gICAgLmNvbG9yLWh1ZS1zbGlkZXIge1xyXG4gICAgICBtYXJnaW4tdG9wOiAxcHg7XHJcbiAgICAgIHdpZHRoOiA0cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDFweDtcclxuICAgICAgaGVpZ2h0OiA4cHg7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAycHggcmdiYSgwLCAwLCAwLCAuNik7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMnB4KTtcclxuICAgIH1cclxuICAgIC5jb2xvci1odWUtaG9yaXpvbnRhbCB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2YwMCAwJSwgI2ZmMCAxNyUsICMwZjBcclxuICAgICAgICAzMyUsICMwZmYgNTAlLCAjMDBmIDY3JSwgI2YwZiA4MyUsICNmMDAgMTAwJSk7XHJcbiAgICB9XHJcbiAgICAuY29sb3ItaHVlLXZlcnRpY2FsIHtcclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgI2YwMCAwJSwgI2ZmMCAxNyUsICMwZjAgMzMlLFxyXG4gICAgICAgICMwZmYgNTAlLCAjMDBmIDY3JSwgI2YwZiA4MyUsICNmMDAgMTAwJSk7XHJcbiAgICB9XHJcbiAgYCxcclxuICBdLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSHVlQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuICBASW5wdXQoKSBoc2whOiBIU0xBO1xyXG4gIEBJbnB1dCgpIHBvaW50ZXIhOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+O1xyXG4gIEBJbnB1dCgpIHJhZGl1cyE6IG51bWJlcjtcclxuICBASW5wdXQoKSBzaGFkb3chOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgaGlkZVBvaW50ZXIgPSBmYWxzZTtcclxuICBASW5wdXQoKSBkaXJlY3Rpb246ICdob3Jpem9udGFsJyB8ICd2ZXJ0aWNhbCcgPSAnaG9yaXpvbnRhbCc7XHJcbiAgQE91dHB1dCgpIG9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjx7IGRhdGE6IEhTTEFzb3VyY2U7ICRldmVudDogRXZlbnQgfT4oKTtcclxuICBsZWZ0ID0gJzBweCc7XHJcbiAgdG9wID0gJyc7XHJcblxyXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcclxuICAgICAgdGhpcy5sZWZ0ID0gYCR7dGhpcy5oc2wuaCAqIDEwMCAvIDM2MH0lYDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudG9wID0gYCR7LSh0aGlzLmhzbC5oICogMTAwIC8gMzYwKSArIDEwMH0lYDtcclxuICAgIH1cclxuICB9XHJcbiAgaGFuZGxlQ2hhbmdlKHsgdG9wLCBsZWZ0LCBjb250YWluZXJIZWlnaHQsIGNvbnRhaW5lcldpZHRoLCAkZXZlbnQgfSk6IHZvaWQge1xyXG4gICAgbGV0IGRhdGE6IEhTTEFzb3VyY2UgfCB1bmRlZmluZWQ7XHJcbiAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCcpIHtcclxuICAgICAgbGV0IGg6IG51bWJlcjtcclxuICAgICAgaWYgKHRvcCA8IDApIHtcclxuICAgICAgICBoID0gMzU5O1xyXG4gICAgICB9IGVsc2UgaWYgKHRvcCA+IGNvbnRhaW5lckhlaWdodCkge1xyXG4gICAgICAgIGggPSAwO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IHBlcmNlbnQgPSAtKHRvcCAqIDEwMCAvIGNvbnRhaW5lckhlaWdodCkgKyAxMDA7XHJcbiAgICAgICAgaCA9IDM2MCAqIHBlcmNlbnQgLyAxMDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzLmhzbC5oICE9PSBoKSB7XHJcbiAgICAgICAgZGF0YSA9IHtcclxuICAgICAgICAgIGgsXHJcbiAgICAgICAgICBzOiB0aGlzLmhzbC5zLFxyXG4gICAgICAgICAgbDogdGhpcy5oc2wubCxcclxuICAgICAgICAgIGE6IHRoaXMuaHNsLmEsXHJcbiAgICAgICAgICBzb3VyY2U6ICdyZ2InLFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxldCBoOiBudW1iZXI7XHJcbiAgICAgIGlmIChsZWZ0IDwgMCkge1xyXG4gICAgICAgIGggPSAwO1xyXG4gICAgICB9IGVsc2UgaWYgKGxlZnQgPiBjb250YWluZXJXaWR0aCkge1xyXG4gICAgICAgIGggPSAzNTk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgcGVyY2VudCA9IGxlZnQgKiAxMDAgLyBjb250YWluZXJXaWR0aDtcclxuICAgICAgICBoID0gMzYwICogcGVyY2VudCAvIDEwMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRoaXMuaHNsLmggIT09IGgpIHtcclxuICAgICAgICBkYXRhID0ge1xyXG4gICAgICAgICAgaCxcclxuICAgICAgICAgIHM6IHRoaXMuaHNsLnMsXHJcbiAgICAgICAgICBsOiB0aGlzLmhzbC5sLFxyXG4gICAgICAgICAgYTogdGhpcy5oc2wuYSxcclxuICAgICAgICAgIHNvdXJjZTogJ3JnYicsXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICghZGF0YSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5vbkNoYW5nZS5lbWl0KHsgZGF0YSwgJGV2ZW50IH0pO1xyXG4gIH1cclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtIdWVDb21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFtIdWVDb21wb25lbnRdLFxyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIENvb3JkaW5hdGVzTW9kdWxlXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEh1ZU1vZHVsZSB7fVxyXG4iXX0=