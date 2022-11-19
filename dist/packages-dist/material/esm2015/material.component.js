import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule, Input } from '@angular/core';
import { ColorWrap, EditableInputModule, RaisedModule, isValidHex } from 'ngx-color';
export class MaterialComponent extends ColorWrap {
    constructor() {
        super();
        this.HEXinput = {
            width: '100%',
            marginTop: '12px',
            fontSize: '15px',
            color: 'rgb(51, 51, 51)',
            padding: '0px',
            'border-width': '0px 0px 2px',
            outline: 'none',
            height: '30px',
        };
        this.HEXlabel = {
            position: 'absolute',
            top: '0px',
            left: '0px',
            fontSize: '11px',
            color: 'rgb(153, 153, 153)',
            'text-transform': 'capitalize',
        };
        this.RGBinput = {
            width: '100%',
            marginTop: '12px',
            fontSize: '15px',
            color: '#333',
            padding: '0px',
            border: '0px',
            'border-bottom': '1px solid #eee',
            outline: 'none',
            height: '30px',
        };
        this.RGBlabel = {
            position: 'absolute',
            top: '0px',
            left: '0px',
            fontSize: '11px',
            color: '#999999',
            'text-transform': 'capitalize',
        };
        this.zDepth = 1;
        this.radius = 1;
        this.background = '#fff';
        this.disableAlpha = true;
    }
    handleValueChange({ data, $event }) {
        this.handleChange(data, $event);
    }
    handleInputChange({ data, $event }) {
        if (data.hex) {
            if (isValidHex(data.hex)) {
                this.handleValueChange({
                    data: {
                        hex: data.hex,
                        source: 'hex',
                    },
                    $event,
                });
            }
        }
        else if (data.r || data.g || data.b) {
            this.handleValueChange({
                data: {
                    r: data.r || this.rgb.r,
                    g: data.g || this.rgb.g,
                    b: data.b || this.rgb.b,
                    source: 'rgb',
                },
                $event,
            });
        }
    }
    afterValidChange() {
        this.HEXinput['border-bottom-color'] = this.hex;
    }
}
MaterialComponent.decorators = [
    { type: Component, args: [{
                selector: 'color-material',
                template: `
  <color-raised [zDepth]="zDepth" [background]="background" [radius]="radius">
    <div class="material-picker {{ className }}">
      <color-editable-input label="hex" [value]="hex"
        (onChange)="handleValueChange($event)"
        [style]="{input: HEXinput, label: HEXlabel}"
      ></color-editable-input>
      <div class="material-split">
        <div class="material-third">
          <color-editable-input label="r" [value]="rgb.r"
            [style]="{ input: RGBinput, label: RGBlabel }"
            (onChange)="handleInputChange($event)"
          ></color-editable-input>
        </div>
        <div class="material-third">
          <color-editable-input label="g" [value]="rgb.g"
            [style]="{ input: RGBinput, label: RGBlabel }"
            (onChange)="handleInputChange($event)"
          ></color-editable-input>
        </div>
        <div class="material-third">
          <color-editable-input label="b" [value]="rgb.b"
            [style]="{ input: RGBinput, label: RGBlabel }"
            (onChange)="handleInputChange($event)"
          ></color-editable-input>
        </div>
      </div>
    </div>
  </color-raised>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                styles: [`
  .material-picker {
    width: 130px;
    height: 130px;
    padding: 16px;
    font-family: Roboto;
  }
  .material-split {
    display: flex;
    margin-right: -10px;
    padding-top: 11px;
  }
  .material-third {
    flex: 1 1 0%;
    padding-right: 10px;
  }
  `]
            },] }
];
MaterialComponent.ctorParameters = () => [];
MaterialComponent.propDecorators = {
    zDepth: [{ type: Input }],
    radius: [{ type: Input }],
    background: [{ type: Input }]
};
export class ColorMaterialModule {
}
ColorMaterialModule.decorators = [
    { type: NgModule, args: [{
                exports: [MaterialComponent],
                declarations: [MaterialComponent],
                imports: [CommonModule, EditableInputModule, RaisedModule],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0ZXJpYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9tYXRlcmlhbC8iLCJzb3VyY2VzIjpbIm1hdGVyaWFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXBGLE9BQU8sRUFBRSxTQUFTLEVBQUUsbUJBQW1CLEVBQUUsWUFBWSxFQUFFLFVBQVUsRUFBVSxNQUFNLFdBQVcsQ0FBQztBQXdEN0YsTUFBTSxPQUFPLGlCQUFrQixTQUFRLFNBQVM7SUEyQzlDO1FBQ0UsS0FBSyxFQUFFLENBQUM7UUEzQ1YsYUFBUSxHQUE0QjtZQUNsQyxLQUFLLEVBQUUsTUFBTTtZQUNiLFNBQVMsRUFBRSxNQUFNO1lBQ2pCLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLEtBQUssRUFBRSxpQkFBaUI7WUFDeEIsT0FBTyxFQUFFLEtBQUs7WUFDZCxjQUFjLEVBQUUsYUFBYTtZQUM3QixPQUFPLEVBQUUsTUFBTTtZQUNmLE1BQU0sRUFBRSxNQUFNO1NBQ2YsQ0FBQztRQUNGLGFBQVEsR0FBNEI7WUFDbEMsUUFBUSxFQUFFLFVBQVU7WUFDcEIsR0FBRyxFQUFFLEtBQUs7WUFDVixJQUFJLEVBQUUsS0FBSztZQUNYLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLEtBQUssRUFBRSxvQkFBb0I7WUFDM0IsZ0JBQWdCLEVBQUUsWUFBWTtTQUMvQixDQUFDO1FBQ0YsYUFBUSxHQUE0QjtZQUNsQyxLQUFLLEVBQUUsTUFBTTtZQUNiLFNBQVMsRUFBRSxNQUFNO1lBQ2pCLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLEtBQUssRUFBRSxNQUFNO1lBQ2IsT0FBTyxFQUFFLEtBQUs7WUFDZCxNQUFNLEVBQUUsS0FBSztZQUNiLGVBQWUsRUFBRSxnQkFBZ0I7WUFDakMsT0FBTyxFQUFFLE1BQU07WUFDZixNQUFNLEVBQUUsTUFBTTtTQUNmLENBQUM7UUFDRixhQUFRLEdBQTRCO1lBQ2xDLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLEdBQUcsRUFBRSxLQUFLO1lBQ1YsSUFBSSxFQUFFLEtBQUs7WUFDWCxRQUFRLEVBQUUsTUFBTTtZQUNoQixLQUFLLEVBQUUsU0FBUztZQUNoQixnQkFBZ0IsRUFBRSxZQUFZO1NBQy9CLENBQUM7UUFDTyxXQUFNLEdBQVcsQ0FBQyxDQUFDO1FBQ25CLFdBQU0sR0FBRyxDQUFDLENBQUM7UUFDWCxlQUFVLEdBQUcsTUFBTSxDQUFDO1FBQzdCLGlCQUFZLEdBQUcsSUFBSSxDQUFDO0lBSXBCLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUU7UUFDaEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELGlCQUFpQixDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRTtRQUNoQyxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDWixJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ3hCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztvQkFDckIsSUFBSSxFQUFFO3dCQUNKLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRzt3QkFDYixNQUFNLEVBQUUsS0FBSztxQkFDZDtvQkFDRCxNQUFNO2lCQUNQLENBQUMsQ0FBQzthQUNKO1NBQ0Y7YUFBTSxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxFQUFFO1lBQ3JDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztnQkFDckIsSUFBSSxFQUFFO29CQUNKLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDdkIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUN2QixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ3ZCLE1BQU0sRUFBRSxLQUFLO2lCQUNkO2dCQUNELE1BQU07YUFDUCxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7SUFFRCxnQkFBZ0I7UUFDZCxJQUFJLENBQUMsUUFBUSxDQUFDLHFCQUFxQixDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNsRCxDQUFDOzs7WUFuSUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0E2QlQ7Z0JBb0JELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxtQkFBbUIsRUFBRSxLQUFLO3lCQW5CeEI7Ozs7Ozs7Ozs7Ozs7Ozs7R0FnQkQ7YUFJRjs7OztxQkF1Q0UsS0FBSztxQkFDTCxLQUFLO3lCQUNMLEtBQUs7O0FBNkNSLE1BQU0sT0FBTyxtQkFBbUI7OztZQUwvQixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsaUJBQWlCLENBQUM7Z0JBQzVCLFlBQVksRUFBRSxDQUFDLGlCQUFpQixDQUFDO2dCQUNqQyxPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsbUJBQW1CLEVBQUUsWUFBWSxDQUFDO2FBQzNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgTmdNb2R1bGUsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBDb2xvcldyYXAsIEVkaXRhYmxlSW5wdXRNb2R1bGUsIFJhaXNlZE1vZHVsZSwgaXNWYWxpZEhleCwgekRlcHRoIH0gZnJvbSAnbmd4LWNvbG9yJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY29sb3ItbWF0ZXJpYWwnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgPGNvbG9yLXJhaXNlZCBbekRlcHRoXT1cInpEZXB0aFwiIFtiYWNrZ3JvdW5kXT1cImJhY2tncm91bmRcIiBbcmFkaXVzXT1cInJhZGl1c1wiPlxyXG4gICAgPGRpdiBjbGFzcz1cIm1hdGVyaWFsLXBpY2tlciB7eyBjbGFzc05hbWUgfX1cIj5cclxuICAgICAgPGNvbG9yLWVkaXRhYmxlLWlucHV0IGxhYmVsPVwiaGV4XCIgW3ZhbHVlXT1cImhleFwiXHJcbiAgICAgICAgKG9uQ2hhbmdlKT1cImhhbmRsZVZhbHVlQ2hhbmdlKCRldmVudClcIlxyXG4gICAgICAgIFtzdHlsZV09XCJ7aW5wdXQ6IEhFWGlucHV0LCBsYWJlbDogSEVYbGFiZWx9XCJcclxuICAgICAgPjwvY29sb3ItZWRpdGFibGUtaW5wdXQ+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJtYXRlcmlhbC1zcGxpdFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtYXRlcmlhbC10aGlyZFwiPlxyXG4gICAgICAgICAgPGNvbG9yLWVkaXRhYmxlLWlucHV0IGxhYmVsPVwiclwiIFt2YWx1ZV09XCJyZ2IuclwiXHJcbiAgICAgICAgICAgIFtzdHlsZV09XCJ7IGlucHV0OiBSR0JpbnB1dCwgbGFiZWw6IFJHQmxhYmVsIH1cIlxyXG4gICAgICAgICAgICAob25DaGFuZ2UpPVwiaGFuZGxlSW5wdXRDaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAgICAgICA+PC9jb2xvci1lZGl0YWJsZS1pbnB1dD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibWF0ZXJpYWwtdGhpcmRcIj5cclxuICAgICAgICAgIDxjb2xvci1lZGl0YWJsZS1pbnB1dCBsYWJlbD1cImdcIiBbdmFsdWVdPVwicmdiLmdcIlxyXG4gICAgICAgICAgICBbc3R5bGVdPVwieyBpbnB1dDogUkdCaW5wdXQsIGxhYmVsOiBSR0JsYWJlbCB9XCJcclxuICAgICAgICAgICAgKG9uQ2hhbmdlKT1cImhhbmRsZUlucHV0Q2hhbmdlKCRldmVudClcIlxyXG4gICAgICAgICAgPjwvY29sb3ItZWRpdGFibGUtaW5wdXQ+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1hdGVyaWFsLXRoaXJkXCI+XHJcbiAgICAgICAgICA8Y29sb3ItZWRpdGFibGUtaW5wdXQgbGFiZWw9XCJiXCIgW3ZhbHVlXT1cInJnYi5iXCJcclxuICAgICAgICAgICAgW3N0eWxlXT1cInsgaW5wdXQ6IFJHQmlucHV0LCBsYWJlbDogUkdCbGFiZWwgfVwiXHJcbiAgICAgICAgICAgIChvbkNoYW5nZSk9XCJoYW5kbGVJbnB1dENoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgICAgID48L2NvbG9yLWVkaXRhYmxlLWlucHV0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvY29sb3ItcmFpc2VkPlxyXG4gIGAsXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgLm1hdGVyaWFsLXBpY2tlciB7XHJcbiAgICB3aWR0aDogMTMwcHg7XHJcbiAgICBoZWlnaHQ6IDEzMHB4O1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgfVxyXG4gIC5tYXRlcmlhbC1zcGxpdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtMTBweDtcclxuICAgIHBhZGRpbmctdG9wOiAxMXB4O1xyXG4gIH1cclxuICAubWF0ZXJpYWwtdGhpcmQge1xyXG4gICAgZmxleDogMSAxIDAlO1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICB9XHJcbiAgYCxcclxuICBdLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWF0ZXJpYWxDb21wb25lbnQgZXh0ZW5kcyBDb2xvcldyYXAge1xyXG4gIEhFWGlucHV0OiB7W2tleTogc3RyaW5nXTogc3RyaW5nfSA9IHtcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBtYXJnaW5Ub3A6ICcxMnB4JyxcclxuICAgIGZvbnRTaXplOiAnMTVweCcsXHJcbiAgICBjb2xvcjogJ3JnYig1MSwgNTEsIDUxKScsXHJcbiAgICBwYWRkaW5nOiAnMHB4JyxcclxuICAgICdib3JkZXItd2lkdGgnOiAnMHB4IDBweCAycHgnLFxyXG4gICAgb3V0bGluZTogJ25vbmUnLFxyXG4gICAgaGVpZ2h0OiAnMzBweCcsXHJcbiAgfTtcclxuICBIRVhsYWJlbDoge1trZXk6IHN0cmluZ106IHN0cmluZ30gPSB7XHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIHRvcDogJzBweCcsXHJcbiAgICBsZWZ0OiAnMHB4JyxcclxuICAgIGZvbnRTaXplOiAnMTFweCcsXHJcbiAgICBjb2xvcjogJ3JnYigxNTMsIDE1MywgMTUzKScsXHJcbiAgICAndGV4dC10cmFuc2Zvcm0nOiAnY2FwaXRhbGl6ZScsXHJcbiAgfTtcclxuICBSR0JpbnB1dDoge1trZXk6IHN0cmluZ106IHN0cmluZ30gPSB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgbWFyZ2luVG9wOiAnMTJweCcsXHJcbiAgICBmb250U2l6ZTogJzE1cHgnLFxyXG4gICAgY29sb3I6ICcjMzMzJyxcclxuICAgIHBhZGRpbmc6ICcwcHgnLFxyXG4gICAgYm9yZGVyOiAnMHB4JyxcclxuICAgICdib3JkZXItYm90dG9tJzogJzFweCBzb2xpZCAjZWVlJyxcclxuICAgIG91dGxpbmU6ICdub25lJyxcclxuICAgIGhlaWdodDogJzMwcHgnLFxyXG4gIH07XHJcbiAgUkdCbGFiZWw6IHtba2V5OiBzdHJpbmddOiBzdHJpbmd9ID0ge1xyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICB0b3A6ICcwcHgnLFxyXG4gICAgbGVmdDogJzBweCcsXHJcbiAgICBmb250U2l6ZTogJzExcHgnLFxyXG4gICAgY29sb3I6ICcjOTk5OTk5JyxcclxuICAgICd0ZXh0LXRyYW5zZm9ybSc6ICdjYXBpdGFsaXplJyxcclxuICB9O1xyXG4gIEBJbnB1dCgpIHpEZXB0aDogekRlcHRoID0gMTtcclxuICBASW5wdXQoKSByYWRpdXMgPSAxO1xyXG4gIEBJbnB1dCgpIGJhY2tncm91bmQgPSAnI2ZmZic7XHJcbiAgZGlzYWJsZUFscGhhID0gdHJ1ZTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlVmFsdWVDaGFuZ2UoeyBkYXRhLCAkZXZlbnQgfSkge1xyXG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UoZGF0YSwgJGV2ZW50KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUlucHV0Q2hhbmdlKHsgZGF0YSwgJGV2ZW50IH0pIHtcclxuICAgIGlmIChkYXRhLmhleCkge1xyXG4gICAgICBpZiAoaXNWYWxpZEhleChkYXRhLmhleCkpIHtcclxuICAgICAgICB0aGlzLmhhbmRsZVZhbHVlQ2hhbmdlKHtcclxuICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgaGV4OiBkYXRhLmhleCxcclxuICAgICAgICAgICAgc291cmNlOiAnaGV4JyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICAkZXZlbnQsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoZGF0YS5yIHx8IGRhdGEuZyB8fCBkYXRhLmIpIHtcclxuICAgICAgdGhpcy5oYW5kbGVWYWx1ZUNoYW5nZSh7XHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgcjogZGF0YS5yIHx8IHRoaXMucmdiLnIsXHJcbiAgICAgICAgICBnOiBkYXRhLmcgfHwgdGhpcy5yZ2IuZyxcclxuICAgICAgICAgIGI6IGRhdGEuYiB8fCB0aGlzLnJnYi5iLFxyXG4gICAgICAgICAgc291cmNlOiAncmdiJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgICRldmVudCxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhZnRlclZhbGlkQ2hhbmdlKCkge1xyXG4gICAgdGhpcy5IRVhpbnB1dFsnYm9yZGVyLWJvdHRvbS1jb2xvciddID0gdGhpcy5oZXg7XHJcbiAgfVxyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGV4cG9ydHM6IFtNYXRlcmlhbENvbXBvbmVudF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbTWF0ZXJpYWxDb21wb25lbnRdLFxyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEVkaXRhYmxlSW5wdXRNb2R1bGUsIFJhaXNlZE1vZHVsZV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb2xvck1hdGVyaWFsTW9kdWxlIHsgfVxyXG4iXX0=