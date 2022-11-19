import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, } from '@angular/core';
export class SketchPresetColorsComponent {
    constructor() {
        this.onClick = new EventEmitter();
        this.onSwatchHover = new EventEmitter();
        this.swatchStyle = {
            borderRadius: '3px',
            boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.15)',
        };
    }
    handleClick({ hex, $event }) {
        this.onClick.emit({ hex, $event });
    }
    normalizeValue(val) {
        if (typeof val === 'string') {
            return { color: val };
        }
        return val;
    }
    focusStyle(val) {
        const c = this.normalizeValue(val);
        return {
            boxShadow: `inset 0 0 0 1px rgba(0,0,0,.15), 0 0 4px ${c.color}`,
        };
    }
}
SketchPresetColorsComponent.decorators = [
    { type: Component, args: [{
                selector: 'color-sketch-preset-colors',
                template: `
  <div class="sketch-swatches">
    <div class="sketch-wrap" *ngFor="let c of colors">
      <color-swatch
        [color]="normalizeValue(c).color"
        [style]="swatchStyle"
        [focusStyle]="focusStyle(c)"
        (onClick)="handleClick($event)"
        (onHover)="onSwatchHover.emit($event)"
        class="swatch"
      ></color-swatch>
    </div>
  </div>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                styles: [`
    .sketch-swatches {
      position: relative;
      display: flex;
      flex-wrap: wrap;
      margin: 0px -10px;
      padding: 10px 0px 0px 10px;
      border-top: 1px solid rgb(238, 238, 238);
    }
    .sketch-wrap {
      width: 16px;
      height: 16px;
      margin: 0px 10px 10px 0px;
    }
    :host-context([dir=rtl]) .sketch-swatches {
      padding-right: 10px;
      padding-left: 0;
    }
    :host-context([dir=rtl]) .sketch-wrap {
      margin-left: 10px;
      margin-right: 0;
    }
  `]
            },] }
];
SketchPresetColorsComponent.propDecorators = {
    colors: [{ type: Input }],
    onClick: [{ type: Output }],
    onSwatchHover: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tldGNoLXByZXNldC1jb2xvcnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9za2V0Y2gvIiwic291cmNlcyI6WyJza2V0Y2gtcHJlc2V0LWNvbG9ycy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7QUFnRHZCLE1BQU0sT0FBTywyQkFBMkI7SUE1Q3hDO1FBOENZLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ2xDLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNsRCxnQkFBVyxHQUFHO1lBQ1osWUFBWSxFQUFFLEtBQUs7WUFDbkIsU0FBUyxFQUFFLGlDQUFpQztTQUM3QyxDQUFDO0lBaUJKLENBQUM7SUFmQyxXQUFXLENBQUMsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFO1FBQ3pCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUNELGNBQWMsQ0FBQyxHQUFtQjtRQUNoQyxJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVEsRUFBRTtZQUMzQixPQUFPLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDO1NBQ3ZCO1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0lBQ0QsVUFBVSxDQUFDLEdBQW1CO1FBQzVCLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbkMsT0FBTztZQUNMLFNBQVMsRUFBRSw0Q0FBNEMsQ0FBQyxDQUFDLEtBQUssRUFBRTtTQUNqRSxDQUFDO0lBQ0osQ0FBQzs7O1lBbkVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsNEJBQTRCO2dCQUN0QyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7R0FhVDtnQkEwQkQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLG1CQUFtQixFQUFFLEtBQUs7eUJBekJ4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXNCRDthQUlGOzs7cUJBRUUsS0FBSztzQkFDTCxNQUFNOzRCQUNOLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT3V0cHV0LFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgU2hhcGUgfSBmcm9tICduZ3gtY29sb3InO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjb2xvci1za2V0Y2gtcHJlc2V0LWNvbG9ycycsXHJcbiAgdGVtcGxhdGU6IGBcclxuICA8ZGl2IGNsYXNzPVwic2tldGNoLXN3YXRjaGVzXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwic2tldGNoLXdyYXBcIiAqbmdGb3I9XCJsZXQgYyBvZiBjb2xvcnNcIj5cclxuICAgICAgPGNvbG9yLXN3YXRjaFxyXG4gICAgICAgIFtjb2xvcl09XCJub3JtYWxpemVWYWx1ZShjKS5jb2xvclwiXHJcbiAgICAgICAgW3N0eWxlXT1cInN3YXRjaFN0eWxlXCJcclxuICAgICAgICBbZm9jdXNTdHlsZV09XCJmb2N1c1N0eWxlKGMpXCJcclxuICAgICAgICAob25DbGljayk9XCJoYW5kbGVDbGljaygkZXZlbnQpXCJcclxuICAgICAgICAob25Ib3Zlcik9XCJvblN3YXRjaEhvdmVyLmVtaXQoJGV2ZW50KVwiXHJcbiAgICAgICAgY2xhc3M9XCJzd2F0Y2hcIlxyXG4gICAgICA+PC9jb2xvci1zd2F0Y2g+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICBgLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgLnNrZXRjaC1zd2F0Y2hlcyB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICBtYXJnaW46IDBweCAtMTBweDtcclxuICAgICAgcGFkZGluZzogMTBweCAwcHggMHB4IDEwcHg7XHJcbiAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2IoMjM4LCAyMzgsIDIzOCk7XHJcbiAgICB9XHJcbiAgICAuc2tldGNoLXdyYXAge1xyXG4gICAgICB3aWR0aDogMTZweDtcclxuICAgICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgICBtYXJnaW46IDBweCAxMHB4IDEwcHggMHB4O1xyXG4gICAgfVxyXG4gICAgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIC5za2V0Y2gtc3dhdGNoZXMge1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICB9XHJcbiAgICA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgLnNrZXRjaC13cmFwIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgIH1cclxuICBgLFxyXG4gIF0sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTa2V0Y2hQcmVzZXRDb2xvcnNDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGNvbG9ycyE6IHN0cmluZ1tdO1xyXG4gIEBPdXRwdXQoKSBvbkNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIG9uU3dhdGNoSG92ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBzd2F0Y2hTdHlsZSA9IHtcclxuICAgIGJvcmRlclJhZGl1czogJzNweCcsXHJcbiAgICBib3hTaGFkb3c6ICdpbnNldCAwIDAgMCAxcHggcmdiYSgwLDAsMCwuMTUpJyxcclxuICB9O1xyXG5cclxuICBoYW5kbGVDbGljayh7IGhleCwgJGV2ZW50IH0pIHtcclxuICAgIHRoaXMub25DbGljay5lbWl0KHsgaGV4LCAkZXZlbnQgfSk7XHJcbiAgfVxyXG4gIG5vcm1hbGl6ZVZhbHVlKHZhbDogc3RyaW5nIHwgU2hhcGUpIHtcclxuICAgIGlmICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJykge1xyXG4gICAgICByZXR1cm4geyBjb2xvcjogdmFsIH07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdmFsO1xyXG4gIH1cclxuICBmb2N1c1N0eWxlKHZhbDogc3RyaW5nIHwgU2hhcGUpIHtcclxuICAgIGNvbnN0IGMgPSB0aGlzLm5vcm1hbGl6ZVZhbHVlKHZhbCk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBib3hTaGFkb3c6IGBpbnNldCAwIDAgMCAxcHggcmdiYSgwLDAsMCwuMTUpLCAwIDAgNHB4ICR7Yy5jb2xvcn1gLFxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl19