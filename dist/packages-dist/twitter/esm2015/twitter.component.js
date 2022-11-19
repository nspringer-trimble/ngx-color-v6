import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, NgModule } from '@angular/core';
import { ColorWrap, EditableInputModule, SwatchModule, isValidHex } from 'ngx-color';
export class TwitterComponent extends ColorWrap {
    constructor() {
        super();
        /** Pixel value for picker width */
        this.width = 276;
        /** Color squares to display */
        this.colors = [
            '#FF6900',
            '#FCB900',
            '#7BDCB5',
            '#00D084',
            '#8ED1FC',
            '#0693E3',
            '#ABB8C3',
            '#EB144C',
            '#F78DA7',
            '#9900EF',
        ];
        this.triangle = 'top-left';
        this.swatchStyle = {
            width: '30px',
            height: '30px',
            borderRadius: '4px',
            fontSize: '0',
        };
        this.input = {
            borderRadius: '4px',
            borderBottomLeftRadius: '0',
            borderTopLeftRadius: '0',
            border: '1px solid #e6ecf0',
            boxSizing: 'border-box',
            display: 'inline',
            fontSize: '14px',
            height: '30px',
            padding: '0',
            paddingLeft: '6px',
            width: '100%',
            color: '#657786',
        };
        this.disableAlpha = true;
    }
    focus(color) {
        return { boxShadow: `0 0 4px ${color}` };
    }
    handleBlockChange({ hex, $event }) {
        if (isValidHex(hex)) {
            // this.hex = hex;
            this.handleChange({ hex, source: 'hex' }, $event);
        }
    }
    handleValueChange({ data, $event }) {
        this.handleBlockChange({ hex: data, $event });
    }
}
TwitterComponent.decorators = [
    { type: Component, args: [{
                selector: 'color-twitter',
                template: `
  <div class="twitter-picker {{ triangle }}-triangle {{ className }}" [style.width.px]="width">
    <div class="triangleShadow"></div>
    <div class="triangle"></div>
    <div class="twitter-body">
      <div class="twitter-swatch" *ngFor="let color of colors">
        <color-swatch
          [color]="color"
          [style]="swatchStyle"
          [focusStyle]="focus(color)"
          (onClick)="handleBlockChange($event)"
          (onHover)="onSwatchHover.emit($event)"
        ></color-swatch>
      </div>
      <div class="twitter-hash">
        <div>#</div>
      </div>
      <div class="twitter-input">
        <color-editable-input
          [style]="{ input: input }"
          [value]="hex.replace('#', '')"
          (onChange)="handleValueChange($event)"
        ></color-editable-input>
      </div>
    </div>
  </div>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                styles: [`
    .twitter-picker {
      background: rgb(255, 255, 255);
      border: 0px solid rgba(0, 0, 0, 0.25);
      box-shadow: rgba(0, 0, 0, 0.25) 0px 1px 4px;
      border-radius: 4px;
      position: relative;
      box-sizing: border-box;
    }
    .triangleShadow {
      width: 0px;
      height: 0px;
      border-style: solid;
      border-width: 0px 9px 10px;
      border-color: transparent transparent rgba(0, 0, 0, 0.1);
      position: absolute;
    }
    .triangle {
      width: 0px;
      height: 0px;
      border-style: solid;
      border-width: 0px 9px 10px;
      border-color: transparent transparent rgb(255, 255, 255);
      position: absolute;
    }
    .hide-triangle > .triangle {
      display: none;
    }
    .hide-triangle > .triangleShadow {
      display: none;
    }
    .top-left-triangle > .triangle {
      top: -10px;
      left: 12px;
    }
    .top-left-triangle > .triangleShadow {
      top: -11px;
      left: 12px;
    }
    .top-right-triangle > .triangle {
      top: -10px;
      right: 12px;
    }
    .top-right-triangle > .triangleShadow {
      top: -11px;
      right: 12px;
    }
    .twitter-body {
      padding: 15px 9px 9px 15px;
    }
    .twitter-swatch {
      width: 30px;
      height: 30px;
      display: inline-block;
      margin: 0 6px 0 0;
    }
    .twitter-hash {
      background: rgb(240, 240, 240);
      height: 30px;
      width: 30px;
      border-radius: 4px 0px 0px 4px;
      color: rgb(152, 161, 164);
      margin-left: -3px;
      display: inline-block;

    }
    .twitter-hash > div {
      position: absolute;
      align-items: center;
      justify-content: center;
      height: 30px;
      width: 30px;
      display: flex;
    }
    .twitter-input {
      position: relative;
      display: inline-block;
      margin-top: -6px;
      font-size: 10px;
      height: 27px;
      padding: 0;
      position: relative;
      top: 6px;
      vertical-align: top;
      width: 108px;
      margin-left: -4px;
    }
  `]
            },] }
];
TwitterComponent.ctorParameters = () => [];
TwitterComponent.propDecorators = {
    width: [{ type: Input }],
    colors: [{ type: Input }],
    triangle: [{ type: Input }]
};
export class ColorTwitterModule {
}
ColorTwitterModule.decorators = [
    { type: NgModule, args: [{
                declarations: [TwitterComponent],
                exports: [TwitterComponent],
                imports: [CommonModule, SwatchModule, EditableInputModule],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHdpdHRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL3R3aXR0ZXIvIiwic291cmNlcyI6WyJ0d2l0dGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXBGLE9BQU8sRUFBRSxTQUFTLEVBQUUsbUJBQW1CLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQTRIckYsTUFBTSxPQUFPLGdCQUFpQixTQUFRLFNBQVM7SUF3QzdDO1FBQ0UsS0FBSyxFQUFFLENBQUM7UUF4Q1YsbUNBQW1DO1FBQzFCLFVBQUssR0FBb0IsR0FBRyxDQUFDO1FBQ3RDLCtCQUErQjtRQUN0QixXQUFNLEdBQUc7WUFDaEIsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztTQUNWLENBQUM7UUFDTyxhQUFRLEdBQXVELFVBQVUsQ0FBQztRQUVuRixnQkFBVyxHQUE0QjtZQUNyQyxLQUFLLEVBQUUsTUFBTTtZQUNiLE1BQU0sRUFBRSxNQUFNO1lBQ2QsWUFBWSxFQUFFLEtBQUs7WUFDbkIsUUFBUSxFQUFFLEdBQUc7U0FDZCxDQUFDO1FBQ0YsVUFBSyxHQUE0QjtZQUMvQixZQUFZLEVBQUUsS0FBSztZQUNuQixzQkFBc0IsRUFBRSxHQUFHO1lBQzNCLG1CQUFtQixFQUFFLEdBQUc7WUFDeEIsTUFBTSxFQUFFLG1CQUFtQjtZQUMzQixTQUFTLEVBQUUsWUFBWTtZQUN2QixPQUFPLEVBQUUsUUFBUTtZQUNqQixRQUFRLEVBQUUsTUFBTTtZQUNoQixNQUFNLEVBQUUsTUFBTTtZQUNkLE9BQU8sRUFBRSxHQUFHO1lBQ1osV0FBVyxFQUFFLEtBQUs7WUFDbEIsS0FBSyxFQUFFLE1BQU07WUFDYixLQUFLLEVBQUUsU0FBUztTQUNqQixDQUFDO1FBQ0YsaUJBQVksR0FBRyxJQUFJLENBQUM7SUFJcEIsQ0FBQztJQUVELEtBQUssQ0FBQyxLQUFhO1FBQ2pCLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxLQUFLLEVBQUUsRUFBRSxDQUFDO0lBQzNDLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQU87UUFDcEMsSUFBSSxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDbkIsa0JBQWtCO1lBQ2xCLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQ25EO0lBQ0gsQ0FBQztJQUVELGlCQUFpQixDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBTztRQUNyQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDaEQsQ0FBQzs7O1lBbkxGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTBCVDtnQkEyRkQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLG1CQUFtQixFQUFFLEtBQUs7eUJBMUZ4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBdUZEO2FBSUY7Ozs7b0JBR0UsS0FBSztxQkFFTCxLQUFLO3VCQVlMLEtBQUs7O0FBaURSLE1BQU0sT0FBTyxrQkFBa0I7OztZQUw5QixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsZ0JBQWdCLENBQUM7Z0JBQ2hDLE9BQU8sRUFBRSxDQUFDLGdCQUFnQixDQUFDO2dCQUMzQixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsWUFBWSxFQUFFLG1CQUFtQixDQUFDO2FBQzNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBDb2xvcldyYXAsIEVkaXRhYmxlSW5wdXRNb2R1bGUsIFN3YXRjaE1vZHVsZSwgaXNWYWxpZEhleCB9IGZyb20gJ25neC1jb2xvcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NvbG9yLXR3aXR0ZXInLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgPGRpdiBjbGFzcz1cInR3aXR0ZXItcGlja2VyIHt7IHRyaWFuZ2xlIH19LXRyaWFuZ2xlIHt7IGNsYXNzTmFtZSB9fVwiIFtzdHlsZS53aWR0aC5weF09XCJ3aWR0aFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInRyaWFuZ2xlU2hhZG93XCI+PC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwidHJpYW5nbGVcIj48L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJ0d2l0dGVyLWJvZHlcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cInR3aXR0ZXItc3dhdGNoXCIgKm5nRm9yPVwibGV0IGNvbG9yIG9mIGNvbG9yc1wiPlxyXG4gICAgICAgIDxjb2xvci1zd2F0Y2hcclxuICAgICAgICAgIFtjb2xvcl09XCJjb2xvclwiXHJcbiAgICAgICAgICBbc3R5bGVdPVwic3dhdGNoU3R5bGVcIlxyXG4gICAgICAgICAgW2ZvY3VzU3R5bGVdPVwiZm9jdXMoY29sb3IpXCJcclxuICAgICAgICAgIChvbkNsaWNrKT1cImhhbmRsZUJsb2NrQ2hhbmdlKCRldmVudClcIlxyXG4gICAgICAgICAgKG9uSG92ZXIpPVwib25Td2F0Y2hIb3Zlci5lbWl0KCRldmVudClcIlxyXG4gICAgICAgID48L2NvbG9yLXN3YXRjaD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJ0d2l0dGVyLWhhc2hcIj5cclxuICAgICAgICA8ZGl2PiM8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJ0d2l0dGVyLWlucHV0XCI+XHJcbiAgICAgICAgPGNvbG9yLWVkaXRhYmxlLWlucHV0XHJcbiAgICAgICAgICBbc3R5bGVdPVwieyBpbnB1dDogaW5wdXQgfVwiXHJcbiAgICAgICAgICBbdmFsdWVdPVwiaGV4LnJlcGxhY2UoJyMnLCAnJylcIlxyXG4gICAgICAgICAgKG9uQ2hhbmdlKT1cImhhbmRsZVZhbHVlQ2hhbmdlKCRldmVudClcIlxyXG4gICAgICAgID48L2NvbG9yLWVkaXRhYmxlLWlucHV0PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIGAsXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAudHdpdHRlci1waWNrZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICAgIGJvcmRlcjogMHB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNSkgMHB4IDFweCA0cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgfVxyXG4gICAgLnRyaWFuZ2xlU2hhZG93IHtcclxuICAgICAgd2lkdGg6IDBweDtcclxuICAgICAgaGVpZ2h0OiAwcHg7XHJcbiAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgIGJvcmRlci13aWR0aDogMHB4IDlweCAxMHB4O1xyXG4gICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgfVxyXG4gICAgLnRyaWFuZ2xlIHtcclxuICAgICAgd2lkdGg6IDBweDtcclxuICAgICAgaGVpZ2h0OiAwcHg7XHJcbiAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgIGJvcmRlci13aWR0aDogMHB4IDlweCAxMHB4O1xyXG4gICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgfVxyXG4gICAgLmhpZGUtdHJpYW5nbGUgPiAudHJpYW5nbGUge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgLmhpZGUtdHJpYW5nbGUgPiAudHJpYW5nbGVTaGFkb3cge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgLnRvcC1sZWZ0LXRyaWFuZ2xlID4gLnRyaWFuZ2xlIHtcclxuICAgICAgdG9wOiAtMTBweDtcclxuICAgICAgbGVmdDogMTJweDtcclxuICAgIH1cclxuICAgIC50b3AtbGVmdC10cmlhbmdsZSA+IC50cmlhbmdsZVNoYWRvdyB7XHJcbiAgICAgIHRvcDogLTExcHg7XHJcbiAgICAgIGxlZnQ6IDEycHg7XHJcbiAgICB9XHJcbiAgICAudG9wLXJpZ2h0LXRyaWFuZ2xlID4gLnRyaWFuZ2xlIHtcclxuICAgICAgdG9wOiAtMTBweDtcclxuICAgICAgcmlnaHQ6IDEycHg7XHJcbiAgICB9XHJcbiAgICAudG9wLXJpZ2h0LXRyaWFuZ2xlID4gLnRyaWFuZ2xlU2hhZG93IHtcclxuICAgICAgdG9wOiAtMTFweDtcclxuICAgICAgcmlnaHQ6IDEycHg7XHJcbiAgICB9XHJcbiAgICAudHdpdHRlci1ib2R5IHtcclxuICAgICAgcGFkZGluZzogMTVweCA5cHggOXB4IDE1cHg7XHJcbiAgICB9XHJcbiAgICAudHdpdHRlci1zd2F0Y2gge1xyXG4gICAgICB3aWR0aDogMzBweDtcclxuICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIG1hcmdpbjogMCA2cHggMCAwO1xyXG4gICAgfVxyXG4gICAgLnR3aXR0ZXItaGFzaCB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYigyNDAsIDI0MCwgMjQwKTtcclxuICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICB3aWR0aDogMzBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNHB4IDBweCAwcHggNHB4O1xyXG4gICAgICBjb2xvcjogcmdiKDE1MiwgMTYxLCAxNjQpO1xyXG4gICAgICBtYXJnaW4tbGVmdDogLTNweDtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cclxuICAgIH1cclxuICAgIC50d2l0dGVyLWhhc2ggPiBkaXYge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgfVxyXG4gICAgLnR3aXR0ZXItaW5wdXQge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgbWFyZ2luLXRvcDogLTZweDtcclxuICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICBoZWlnaHQ6IDI3cHg7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgdG9wOiA2cHg7XHJcbiAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICAgIHdpZHRoOiAxMDhweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IC00cHg7XHJcbiAgICB9XHJcbiAgYCxcclxuICBdLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgVHdpdHRlckNvbXBvbmVudCBleHRlbmRzIENvbG9yV3JhcCB7XHJcbiAgLyoqIFBpeGVsIHZhbHVlIGZvciBwaWNrZXIgd2lkdGggKi9cclxuICBASW5wdXQoKSB3aWR0aDogc3RyaW5nIHwgbnVtYmVyID0gMjc2O1xyXG4gIC8qKiBDb2xvciBzcXVhcmVzIHRvIGRpc3BsYXkgKi9cclxuICBASW5wdXQoKSBjb2xvcnMgPSBbXHJcbiAgICAnI0ZGNjkwMCcsXHJcbiAgICAnI0ZDQjkwMCcsXHJcbiAgICAnIzdCRENCNScsXHJcbiAgICAnIzAwRDA4NCcsXHJcbiAgICAnIzhFRDFGQycsXHJcbiAgICAnIzA2OTNFMycsXHJcbiAgICAnI0FCQjhDMycsXHJcbiAgICAnI0VCMTQ0QycsXHJcbiAgICAnI0Y3OERBNycsXHJcbiAgICAnIzk5MDBFRicsXHJcbiAgXTtcclxuICBASW5wdXQoKSB0cmlhbmdsZTogJ2hpZGUnIHwgJ3RvcC1sZWZ0JyB8ICd0b3AtcmlnaHQnIHwgJ2JvdHRvbS1yaWdodCcgPSAndG9wLWxlZnQnO1xyXG5cclxuICBzd2F0Y2hTdHlsZToge1trZXk6IHN0cmluZ106IHN0cmluZ30gPSB7XHJcbiAgICB3aWR0aDogJzMwcHgnLFxyXG4gICAgaGVpZ2h0OiAnMzBweCcsXHJcbiAgICBib3JkZXJSYWRpdXM6ICc0cHgnLFxyXG4gICAgZm9udFNpemU6ICcwJyxcclxuICB9O1xyXG4gIGlucHV0OiB7W2tleTogc3RyaW5nXTogc3RyaW5nfSA9IHtcclxuICAgIGJvcmRlclJhZGl1czogJzRweCcsXHJcbiAgICBib3JkZXJCb3R0b21MZWZ0UmFkaXVzOiAnMCcsXHJcbiAgICBib3JkZXJUb3BMZWZ0UmFkaXVzOiAnMCcsXHJcbiAgICBib3JkZXI6ICcxcHggc29saWQgI2U2ZWNmMCcsXHJcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcclxuICAgIGRpc3BsYXk6ICdpbmxpbmUnLFxyXG4gICAgZm9udFNpemU6ICcxNHB4JyxcclxuICAgIGhlaWdodDogJzMwcHgnLFxyXG4gICAgcGFkZGluZzogJzAnLFxyXG4gICAgcGFkZGluZ0xlZnQ6ICc2cHgnLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGNvbG9yOiAnIzY1Nzc4NicsXHJcbiAgfTtcclxuICBkaXNhYmxlQWxwaGEgPSB0cnVlO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBmb2N1cyhjb2xvcjogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4geyBib3hTaGFkb3c6IGAwIDAgNHB4ICR7Y29sb3J9YCB9O1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlQmxvY2tDaGFuZ2UoeyBoZXgsICRldmVudCB9OiBhbnkpIHtcclxuICAgIGlmIChpc1ZhbGlkSGV4KGhleCkpIHtcclxuICAgICAgLy8gdGhpcy5oZXggPSBoZXg7XHJcbiAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlKHsgaGV4LCBzb3VyY2U6ICdoZXgnIH0sICRldmVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoYW5kbGVWYWx1ZUNoYW5nZSh7IGRhdGEsICRldmVudCB9OiBhbnkpIHtcclxuICAgIHRoaXMuaGFuZGxlQmxvY2tDaGFuZ2UoeyBoZXg6IGRhdGEsICRldmVudCB9KTtcclxuICB9XHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbVHdpdHRlckNvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW1R3aXR0ZXJDb21wb25lbnRdLFxyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIFN3YXRjaE1vZHVsZSwgRWRpdGFibGVJbnB1dE1vZHVsZV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb2xvclR3aXR0ZXJNb2R1bGUge31cclxuIl19