import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, NgModule, Output, } from '@angular/core';
import { CheckboardModule } from './checkboard.component';
import { CoordinatesModule } from './coordinates.directive';
export class AlphaComponent {
    constructor() {
        this.direction = 'horizontal';
        this.onChange = new EventEmitter();
    }
    ngOnChanges() {
        if (this.direction === 'vertical') {
            this.pointerLeft = 0;
            this.pointerTop = this.rgb.a * 100;
            this.gradient = {
                background: `linear-gradient(to bottom, rgba(${this.rgb.r},${this.rgb.g},${this.rgb.b}, 0) 0%,
          rgba(${this.rgb.r},${this.rgb.g},${this.rgb.b}, 1) 100%)`,
            };
        }
        else {
            this.gradient = {
                background: `linear-gradient(to right, rgba(${this.rgb.r},${this.rgb.g},${this.rgb.b}, 0) 0%,
          rgba(${this.rgb.r},${this.rgb.g},${this.rgb.b}, 1) 100%)`,
            };
            this.pointerLeft = this.rgb.a * 100;
        }
    }
    handleChange({ top, left, containerHeight, containerWidth, $event }) {
        let data;
        if (this.direction === 'vertical') {
            let a;
            if (top < 0) {
                a = 0;
            }
            else if (top > containerHeight) {
                a = 1;
            }
            else {
                a = Math.round(top * 100 / containerHeight) / 100;
            }
            if (this.hsl.a !== a) {
                data = {
                    h: this.hsl.h,
                    s: this.hsl.s,
                    l: this.hsl.l,
                    a,
                    source: 'rgb',
                };
            }
        }
        else {
            let a;
            if (left < 0) {
                a = 0;
            }
            else if (left > containerWidth) {
                a = 1;
            }
            else {
                a = Math.round(left * 100 / containerWidth) / 100;
            }
            if (this.hsl.a !== a) {
                data = {
                    h: this.hsl.h,
                    s: this.hsl.s,
                    l: this.hsl.l,
                    a,
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
AlphaComponent.decorators = [
    { type: Component, args: [{
                selector: 'color-alpha',
                template: `
  <div class="alpha" [style.border-radius]="radius">
    <div class="alpha-checkboard">
      <color-checkboard></color-checkboard>
    </div>
    <div class="alpha-gradient" [ngStyle]="gradient" [style.box-shadow]="shadow" [style.border-radius]="radius"></div>
    <div ngx-color-coordinates (coordinatesChange)="handleChange($event)" class="alpha-container color-alpha-{{direction}}">
      <div class="alpha-pointer" [style.left.%]="pointerLeft" [style.top.%]="pointerTop">
        <div class="alpha-slider" [ngStyle]="pointer"></div>
      </div>
    </div>
  </div>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                styles: [`
    .alpha {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
    .alpha-checkboard {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      overflow: hidden;
    }
    .alpha-gradient {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
    .alpha-container {
      position: relative;
      height: 100%;
      margin: 0 3px;
    }
    .alpha-pointer {
      position: absolute;
    }
    .alpha-slider {
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
AlphaComponent.propDecorators = {
    hsl: [{ type: Input }],
    rgb: [{ type: Input }],
    pointer: [{ type: Input }],
    shadow: [{ type: Input }],
    radius: [{ type: Input }],
    direction: [{ type: Input }],
    onChange: [{ type: Output }]
};
export class AlphaModule {
}
AlphaModule.decorators = [
    { type: NgModule, args: [{
                declarations: [AlphaComponent],
                exports: [AlphaComponent],
                imports: [CommonModule, CheckboardModule, CoordinatesModule],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxwaGEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uL3NyYy9saWIvY29tbW9uLyIsInNvdXJjZXMiOlsiYWxwaGEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUNMLFFBQVEsRUFFUixNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFpRTVELE1BQU0sT0FBTyxjQUFjO0lBN0QzQjtRQW1FVyxjQUFTLEdBQThCLFlBQVksQ0FBQztRQUNuRCxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQXlFL0MsQ0FBQztJQXBFQyxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLFVBQVUsRUFBRTtZQUNqQyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztZQUNyQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztZQUNuQyxJQUFJLENBQUMsUUFBUSxHQUFHO2dCQUNkLFVBQVUsRUFBRSxtQ0FBbUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQ3ZELElBQUksQ0FBQyxHQUFHLENBQUMsQ0FDWCxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDTCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsWUFBWTthQUM1RCxDQUFDO1NBQ0g7YUFBTTtZQUNMLElBQUksQ0FBQyxRQUFRLEdBQUc7Z0JB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Ozs7WUFMdkIsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLGNBQWMsQ0FBQztnQkFDOUIsT0FBTyxFQUFFLENBQUMsY0FBYyxDQUFDO2dCQUN6QixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsZ0JBQWdCLEVBQUUsaUJBQWlCLENBQUM7YUFDN0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgTmdNb2R1bGUsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE91dHB1dCxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IENoZWNrYm9hcmRNb2R1bGUgfSBmcm9tICcuL2NoZWNrYm9hcmQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29vcmRpbmF0ZXNNb2R1bGUgfSBmcm9tICcuL2Nvb3JkaW5hdGVzLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IEhTTEEsIFJHQkEgfSBmcm9tICcuL2hlbHBlcnMvY29sb3IuaW50ZXJmYWNlcyc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjb2xvci1hbHBoYScsXHJcbiAgdGVtcGxhdGU6IGBcclxuICA8ZGl2IGNsYXNzPVwiYWxwaGFcIiBbc3R5bGUuYm9yZGVyLXJhZGl1c109XCJyYWRpdXNcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJhbHBoYS1jaGVja2JvYXJkXCI+XHJcbiAgICAgIDxjb2xvci1jaGVja2JvYXJkPjwvY29sb3ItY2hlY2tib2FyZD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImFscGhhLWdyYWRpZW50XCIgW25nU3R5bGVdPVwiZ3JhZGllbnRcIiBbc3R5bGUuYm94LXNoYWRvd109XCJzaGFkb3dcIiBbc3R5bGUuYm9yZGVyLXJhZGl1c109XCJyYWRpdXNcIj48L2Rpdj5cclxuICAgIDxkaXYgbmd4LWNvbG9yLWNvb3JkaW5hdGVzIChjb29yZGluYXRlc0NoYW5nZSk9XCJoYW5kbGVDaGFuZ2UoJGV2ZW50KVwiIGNsYXNzPVwiYWxwaGEtY29udGFpbmVyIGNvbG9yLWFscGhhLXt7ZGlyZWN0aW9ufX1cIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImFscGhhLXBvaW50ZXJcIiBbc3R5bGUubGVmdC4lXT1cInBvaW50ZXJMZWZ0XCIgW3N0eWxlLnRvcC4lXT1cInBvaW50ZXJUb3BcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYWxwaGEtc2xpZGVyXCIgW25nU3R5bGVdPVwicG9pbnRlclwiPjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIGAsXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAuYWxwaGEge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICByaWdodDogMDtcclxuICAgIH1cclxuICAgIC5hbHBoYS1jaGVja2JvYXJkIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIGJvdHRvbTogMDtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB9XHJcbiAgICAuYWxwaGEtZ3JhZGllbnQge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICByaWdodDogMDtcclxuICAgIH1cclxuICAgIC5hbHBoYS1jb250YWluZXIge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgbWFyZ2luOiAwIDNweDtcclxuICAgIH1cclxuICAgIC5hbHBoYS1wb2ludGVyIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgfVxyXG4gICAgLmFscGhhLXNsaWRlciB7XHJcbiAgICAgIHdpZHRoOiA0cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDFweDtcclxuICAgICAgaGVpZ2h0OiA4cHg7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAycHggcmdiYSgwLCAwLCAwLCAuNik7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgIG1hcmdpbi10b3A6IDFweDtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0ycHgpO1xyXG4gICAgfSxcclxuICBgLFxyXG4gIF0sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBbHBoYUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcbiAgQElucHV0KCkgaHNsITogSFNMQTtcclxuICBASW5wdXQoKSByZ2IhOiBSR0JBO1xyXG4gIEBJbnB1dCgpIHBvaW50ZXIhOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+O1xyXG4gIEBJbnB1dCgpIHNoYWRvdyE6IHN0cmluZztcclxuICBASW5wdXQoKSByYWRpdXMhOiBudW1iZXIgfCBzdHJpbmc7XHJcbiAgQElucHV0KCkgZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcgfCAndmVydGljYWwnID0gJ2hvcml6b250YWwnO1xyXG4gIEBPdXRwdXQoKSBvbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIGdyYWRpZW50ITogUmVjb3JkPHN0cmluZywgc3RyaW5nPjtcclxuICBwb2ludGVyTGVmdCE6IG51bWJlcjtcclxuICBwb2ludGVyVG9wITogbnVtYmVyO1xyXG5cclxuICBuZ09uQ2hhbmdlcygpIHtcclxuICAgIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xyXG4gICAgICB0aGlzLnBvaW50ZXJMZWZ0ID0gMDtcclxuICAgICAgdGhpcy5wb2ludGVyVG9wID0gdGhpcy5yZ2IuYSAqIDEwMDtcclxuICAgICAgdGhpcy5ncmFkaWVudCA9IHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBgbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgke3RoaXMucmdiLnJ9LCR7XHJcbiAgICAgICAgICB0aGlzLnJnYi5nXHJcbiAgICAgICAgfSwke3RoaXMucmdiLmJ9LCAwKSAwJSxcclxuICAgICAgICAgIHJnYmEoJHt0aGlzLnJnYi5yfSwke3RoaXMucmdiLmd9LCR7dGhpcy5yZ2IuYn0sIDEpIDEwMCUpYCxcclxuICAgICAgfTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZ3JhZGllbnQgPSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogYGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgke3RoaXMucmdiLnJ9LCR7XHJcbiAgICAgICAgICB0aGlzLnJnYi5nXHJcbiAgICAgICAgfSwke3RoaXMucmdiLmJ9LCAwKSAwJSxcclxuICAgICAgICAgIHJnYmEoJHt0aGlzLnJnYi5yfSwke3RoaXMucmdiLmd9LCR7dGhpcy5yZ2IuYn0sIDEpIDEwMCUpYCxcclxuICAgICAgfTtcclxuICAgICAgdGhpcy5wb2ludGVyTGVmdCA9IHRoaXMucmdiLmEgKiAxMDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGhhbmRsZUNoYW5nZSh7IHRvcCwgbGVmdCwgY29udGFpbmVySGVpZ2h0LCBjb250YWluZXJXaWR0aCwgJGV2ZW50IH0pOiB2b2lkIHtcclxuICAgIGxldCBkYXRhOiBhbnk7XHJcbiAgICBpZiAodGhpcy5kaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCcpIHtcclxuICAgICAgbGV0IGE6IG51bWJlcjtcclxuICAgICAgaWYgKHRvcCA8IDApIHtcclxuICAgICAgICBhID0gMDtcclxuICAgICAgfSBlbHNlIGlmICh0b3AgPiBjb250YWluZXJIZWlnaHQpIHtcclxuICAgICAgICBhID0gMTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBhID0gTWF0aC5yb3VuZCh0b3AgKiAxMDAgLyBjb250YWluZXJIZWlnaHQpIC8gMTAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy5oc2wuYSAhPT0gYSkge1xyXG4gICAgICAgIGRhdGEgPSB7XHJcbiAgICAgICAgICBoOiB0aGlzLmhzbC5oLFxyXG4gICAgICAgICAgczogdGhpcy5oc2wucyxcclxuICAgICAgICAgIGw6IHRoaXMuaHNsLmwsXHJcbiAgICAgICAgICBhLFxyXG4gICAgICAgICAgc291cmNlOiAncmdiJyxcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsZXQgYTogbnVtYmVyO1xyXG4gICAgICBpZiAobGVmdCA8IDApIHtcclxuICAgICAgICBhID0gMDtcclxuICAgICAgfSBlbHNlIGlmIChsZWZ0ID4gY29udGFpbmVyV2lkdGgpIHtcclxuICAgICAgICBhID0gMTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBhID0gTWF0aC5yb3VuZChsZWZ0ICogMTAwIC8gY29udGFpbmVyV2lkdGgpIC8gMTAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy5oc2wuYSAhPT0gYSkge1xyXG4gICAgICAgIGRhdGEgPSB7XHJcbiAgICAgICAgICBoOiB0aGlzLmhzbC5oLFxyXG4gICAgICAgICAgczogdGhpcy5oc2wucyxcclxuICAgICAgICAgIGw6IHRoaXMuaHNsLmwsXHJcbiAgICAgICAgICBhLFxyXG4gICAgICAgICAgc291cmNlOiAncmdiJyxcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFkYXRhKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm9uQ2hhbmdlLmVtaXQoeyBkYXRhLCAkZXZlbnQgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW0FscGhhQ29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbQWxwaGFDb21wb25lbnRdLFxyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIENoZWNrYm9hcmRNb2R1bGUsIENvb3JkaW5hdGVzTW9kdWxlXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEFscGhhTW9kdWxlIHt9XHJcbiJdfQ==