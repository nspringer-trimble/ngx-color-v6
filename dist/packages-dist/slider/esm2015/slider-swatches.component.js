import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, } from '@angular/core';
export class SliderSwatchesComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLXN3YXRjaGVzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvc2xpZGVyLyIsInNvdXJjZXMiOlsic2xpZGVyLXN3YXRjaGVzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQWtFdkIsTUFBTSxPQUFPLHVCQUF1QjtJQTlEcEM7UUFnRVksWUFBTyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDbEMsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0lBV3BELENBQUM7SUFUQyxNQUFNLENBQUMsQ0FBUyxFQUFFLENBQVM7UUFDekIsT0FBTyxDQUNMLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUM7WUFDeEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxDQUN6QyxDQUFDO0lBQ0osQ0FBQztJQUNELFdBQVcsQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUU7UUFDMUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUN0QyxDQUFDOzs7WUEzRUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBNkNUO2dCQVlELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxtQkFBbUIsRUFBRSxLQUFLO3lCQVpqQjs7Ozs7Ozs7OztHQVVSO2FBR0Y7OztrQkFFRSxLQUFLO3NCQUNMLE1BQU07NEJBQ04sTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPdXRwdXQsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBIU0wgfSBmcm9tICduZ3gtY29sb3InO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjb2xvci1zbGlkZXItc3dhdGNoZXMnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgPGRpdiBjbGFzcz1cInNsaWRlci1zd2F0Y2hlc1wiPlxyXG4gICAgPGRpdiBjbGFzcz1cInNsaWRlci1zd2F0Y2gtd3JhcFwiPlxyXG4gICAgICA8Y29sb3Itc2xpZGVyLXN3YXRjaFxyXG4gICAgICAgIFtoc2xdPVwiaHNsXCJcclxuICAgICAgICBbb2Zmc2V0XT1cIi44MFwiXHJcbiAgICAgICAgW2FjdGl2ZV09XCJhY3RpdmUoMC44MCwgMC41MClcIlxyXG4gICAgICAgIChvbkNsaWNrKT1cImhhbmRsZUNsaWNrKCRldmVudClcIlxyXG4gICAgICAgIFtmaXJzdF09XCJ0cnVlXCJcclxuICAgICAgPjwvY29sb3Itc2xpZGVyLXN3YXRjaD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInNsaWRlci1zd2F0Y2gtd3JhcFwiPlxyXG4gICAgICA8Y29sb3Itc2xpZGVyLXN3YXRjaFxyXG4gICAgICAgIFtoc2xdPVwiaHNsXCJcclxuICAgICAgICBbb2Zmc2V0XT1cIi42NVwiXHJcbiAgICAgICAgW2FjdGl2ZV09XCJhY3RpdmUoMC42NSwgMC41MClcIlxyXG4gICAgICAgIChvbkNsaWNrKT1cImhhbmRsZUNsaWNrKCRldmVudClcIlxyXG4gICAgICA+PC9jb2xvci1zbGlkZXItc3dhdGNoPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwic2xpZGVyLXN3YXRjaC13cmFwXCI+XHJcbiAgICAgIDxjb2xvci1zbGlkZXItc3dhdGNoXHJcbiAgICAgICAgW2hzbF09XCJoc2xcIlxyXG4gICAgICAgIFtvZmZzZXRdPVwiLjUwXCJcclxuICAgICAgICBbYWN0aXZlXT1cImFjdGl2ZSgwLjUwLCAwLjUwKVwiXHJcbiAgICAgICAgKG9uQ2xpY2spPVwiaGFuZGxlQ2xpY2soJGV2ZW50KVwiXHJcbiAgICAgID48L2NvbG9yLXNsaWRlci1zd2F0Y2g+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJzbGlkZXItc3dhdGNoLXdyYXBcIj5cclxuICAgICAgPGNvbG9yLXNsaWRlci1zd2F0Y2hcclxuICAgICAgICBbaHNsXT1cImhzbFwiXHJcbiAgICAgICAgW29mZnNldF09XCIuMzVcIlxyXG4gICAgICAgIFthY3RpdmVdPVwiYWN0aXZlKDAuMzUsIDAuNTApXCJcclxuICAgICAgICAob25DbGljayk9XCJoYW5kbGVDbGljaygkZXZlbnQpXCJcclxuICAgICAgPjwvY29sb3Itc2xpZGVyLXN3YXRjaD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInNsaWRlci1zd2F0Y2gtd3JhcFwiPlxyXG4gICAgICA8Y29sb3Itc2xpZGVyLXN3YXRjaFxyXG4gICAgICAgIFtoc2xdPVwiaHNsXCJcclxuICAgICAgICBbb2Zmc2V0XT1cIi4yMFwiXHJcbiAgICAgICAgW2FjdGl2ZV09XCJhY3RpdmUoMC4yMCwgMC41MClcIlxyXG4gICAgICAgIChvbkNsaWNrKT1cImhhbmRsZUNsaWNrKCRldmVudClcIlxyXG4gICAgICAgIFtsYXN0XT1cInRydWVcIlxyXG4gICAgICA+PC9jb2xvci1zbGlkZXItc3dhdGNoPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgYCxcclxuICBzdHlsZXM6IFtgXHJcbiAgICAuc2xpZGVyLXN3YXRjaGVzIHtcclxuICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIH1cclxuICAgIC5zbGlkZXItc3dhdGNoLXdyYXAge1xyXG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICB3aWR0aDogMjAlO1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAxcHg7XHJcbiAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgfVxyXG4gIGBdLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2xpZGVyU3dhdGNoZXNDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGhzbCE6IEhTTDtcclxuICBAT3V0cHV0KCkgb25DbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBvblN3YXRjaEhvdmVyID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIGFjdGl2ZShsOiBudW1iZXIsIHM6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgTWF0aC5yb3VuZCh0aGlzLmhzbC5sICogMTAwKSAvIDEwMCA9PT0gbCAmJlxyXG4gICAgICBNYXRoLnJvdW5kKHRoaXMuaHNsLnMgKiAxMDApIC8gMTAwID09PSBzXHJcbiAgICApO1xyXG4gIH1cclxuICBoYW5kbGVDbGljayh7IGRhdGEsICRldmVudCB9KSB7XHJcbiAgICB0aGlzLm9uQ2xpY2suZW1pdCh7IGRhdGEsICRldmVudCB9KTtcclxuICB9XHJcbn1cclxuIl19