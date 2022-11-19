import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, } from '@angular/core';
import { isValidHex } from 'ngx-color';
export class CompactFieldsComponent {
    constructor() {
        this.onChange = new EventEmitter();
        this.HEXWrap = {
            marginTop: '-3px',
            marginBottom: '-3px',
            // flex: '6 1 0%',
            position: 'relative',
        };
        this.HEXinput = {
            width: '80%',
            padding: '0px',
            paddingLeft: '20%',
            border: 'none',
            outline: 'none',
            background: 'none',
            fontSize: '12px',
            color: '#333',
            height: '16px',
        };
        this.HEXlabel = {
            display: 'none',
        };
        this.RGBwrap = {
            marginTop: '-3px',
            marginBottom: '-3px',
            // flex: '3 1 0%',
            position: 'relative',
        };
        this.RGBinput = {
            width: '80%',
            padding: '0px',
            paddingLeft: '30%',
            border: 'none',
            outline: 'none',
            background: 'none',
            fontSize: '12px',
            color: '#333',
            height: '16px',
        };
        this.RGBlabel = {
            position: 'absolute',
            top: '6px',
            left: '0px',
            'line-height': '16px',
            'text-transform': 'uppercase',
            fontSize: '12px',
            color: '#999',
        };
    }
    handleChange({ data, $event }) {
        if (data.hex) {
            if (isValidHex(data.hex)) {
                this.onChange.emit({
                    data: {
                        hex: data.hex,
                        source: 'hex',
                    },
                    $event,
                });
            }
        }
        else {
            this.onChange.emit({
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
}
CompactFieldsComponent.decorators = [
    { type: Component, args: [{
                selector: 'color-compact-fields',
                template: `
  <div class="compact-fields">
    <div class="compact-active" [style.background]="hex"></div>
    <div style="flex: 6 1 0%;">
      <color-editable-input
        [style]="{ wrap: HEXWrap, input: HEXinput, label: HEXlabel }"
        label="hex"
        [value]="hex"
        (onChange)="handleChange($event)"
      ></color-editable-input>
    </div>
    <div style="flex: 3 1 0%">
      <color-editable-input
        [style]="{ wrap: RGBwrap, input: RGBinput, label: RGBlabel }"
        label="r"
        [value]="rgb.r"
        (onChange)="handleChange($event)"
      ></color-editable-input>
    </div>
    <div style="flex: 3 1 0%">
      <color-editable-input
        [style]="{ wrap: RGBwrap, input: RGBinput, label: RGBlabel }"
        label="g"
        [value]="rgb.g"
        (onChange)="handleChange($event)"
      ></color-editable-input>
    </div>
    <div style="flex: 3 1 0%">
      <color-editable-input
        [style]="{ wrap: RGBwrap, input: RGBinput, label: RGBlabel }"
        label="b"
        [value]="rgb.b"
        (onChange)="handleChange($event)"
      ></color-editable-input>
    </div>
  </div>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                styles: [`
  .compact-fields {
    display: flex;
    padding-bottom: 6px;
    padding-right: 5px;
    position: relative;
  }
  .compact-active {
    position: absolute;
    top: 6px;
    left: 5px;
    height: 9px;
    width: 9px;
  }
  `]
            },] }
];
CompactFieldsComponent.propDecorators = {
    hex: [{ type: Input }],
    rgb: [{ type: Input }],
    onChange: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGFjdC1maWVsZHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9jb21wYWN0LyIsInNvdXJjZXMiOlsiY29tcGFjdC1maWVsZHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxVQUFVLEVBQVEsTUFBTSxXQUFXLENBQUM7QUE2RDdDLE1BQU0sT0FBTyxzQkFBc0I7SUEzRG5DO1FBOERZLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQzdDLFlBQU8sR0FBNEI7WUFDakMsU0FBUyxFQUFFLE1BQU07WUFDakIsWUFBWSxFQUFFLE1BQU07WUFDcEIsa0JBQWtCO1lBQ2xCLFFBQVEsRUFBRSxVQUFVO1NBQ3JCLENBQUM7UUFDRixhQUFRLEdBQTRCO1lBQ2xDLEtBQUssRUFBRSxLQUFLO1lBQ1osT0FBTyxFQUFFLEtBQUs7WUFDZCxXQUFXLEVBQUUsS0FBSztZQUNsQixNQUFNLEVBQUUsTUFBTTtZQUNkLE9BQU8sRUFBRSxNQUFNO1lBQ2YsVUFBVSxFQUFFLE1BQU07WUFDbEIsUUFBUSxFQUFFLE1BQU07WUFDaEIsS0FBSyxFQUFFLE1BQU07WUFDYixNQUFNLEVBQUUsTUFBTTtTQUNmLENBQUM7UUFDRixhQUFRLEdBQTRCO1lBQ2xDLE9BQU8sRUFBRSxNQUFNO1NBQ2hCLENBQUM7UUFDRixZQUFPLEdBQTRCO1lBQ2pDLFNBQVMsRUFBRSxNQUFNO1lBQ2pCLFlBQVksRUFBRSxNQUFNO1lBQ3BCLGtCQUFrQjtZQUNsQixRQUFRLEVBQUUsVUFBVTtTQUNyQixDQUFDO1FBQ0YsYUFBUSxHQUE0QjtZQUNsQyxLQUFLLEVBQUUsS0FBSztZQUNaLE9BQU8sRUFBRSxLQUFLO1lBQ2QsV0FBVyxFQUFFLEtBQUs7WUFDbEIsTUFBTSxFQUFFLE1BQU07WUFDZCxPQUFPLEVBQUUsTUFBTTtZQUNmLFVBQVUsRUFBRSxNQUFNO1lBQ2xCLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLEtBQUssRUFBRSxNQUFNO1lBQ2IsTUFBTSxFQUFFLE1BQU07U0FDZixDQUFDO1FBQ0YsYUFBUSxHQUE0QjtZQUNsQyxRQUFRLEVBQUUsVUFBVTtZQUNwQixHQUFHLEVBQUUsS0FBSztZQUNWLElBQUksRUFBRSxLQUFLO1lBQ1gsYUFBYSxFQUFFLE1BQU07WUFDckIsZ0JBQWdCLEVBQUUsV0FBVztZQUM3QixRQUFRLEVBQUUsTUFBTTtZQUNoQixLQUFLLEVBQUUsTUFBTTtTQUNkLENBQUM7SUF5QkosQ0FBQztJQXZCQyxZQUFZLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFO1FBQzNCLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNaLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7b0JBQ2pCLElBQUksRUFBRTt3QkFDSixHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUc7d0JBQ2IsTUFBTSxFQUFFLEtBQUs7cUJBQ2Q7b0JBQ0QsTUFBTTtpQkFDUCxDQUFDLENBQUM7YUFDSjtTQUNGO2FBQU07WUFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztnQkFDakIsSUFBSSxFQUFFO29CQUNKLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDdkIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUN2QixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ3ZCLE1BQU0sRUFBRSxLQUFLO2lCQUNkO2dCQUNELE1BQU07YUFDUCxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7OztZQXBJRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FvQ1Q7Z0JBa0JELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxtQkFBbUIsRUFBRSxLQUFLO3lCQWpCeEI7Ozs7Ozs7Ozs7Ozs7O0dBY0Q7YUFJRjs7O2tCQUVFLEtBQUs7a0JBQ0wsS0FBSzt1QkFDTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE91dHB1dCxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IGlzVmFsaWRIZXgsIFJHQkEgfSBmcm9tICduZ3gtY29sb3InO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjb2xvci1jb21wYWN0LWZpZWxkcycsXHJcbiAgdGVtcGxhdGU6IGBcclxuICA8ZGl2IGNsYXNzPVwiY29tcGFjdC1maWVsZHNcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJjb21wYWN0LWFjdGl2ZVwiIFtzdHlsZS5iYWNrZ3JvdW5kXT1cImhleFwiPjwvZGl2PlxyXG4gICAgPGRpdiBzdHlsZT1cImZsZXg6IDYgMSAwJTtcIj5cclxuICAgICAgPGNvbG9yLWVkaXRhYmxlLWlucHV0XHJcbiAgICAgICAgW3N0eWxlXT1cInsgd3JhcDogSEVYV3JhcCwgaW5wdXQ6IEhFWGlucHV0LCBsYWJlbDogSEVYbGFiZWwgfVwiXHJcbiAgICAgICAgbGFiZWw9XCJoZXhcIlxyXG4gICAgICAgIFt2YWx1ZV09XCJoZXhcIlxyXG4gICAgICAgIChvbkNoYW5nZSk9XCJoYW5kbGVDaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAgID48L2NvbG9yLWVkaXRhYmxlLWlucHV0PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IHN0eWxlPVwiZmxleDogMyAxIDAlXCI+XHJcbiAgICAgIDxjb2xvci1lZGl0YWJsZS1pbnB1dFxyXG4gICAgICAgIFtzdHlsZV09XCJ7IHdyYXA6IFJHQndyYXAsIGlucHV0OiBSR0JpbnB1dCwgbGFiZWw6IFJHQmxhYmVsIH1cIlxyXG4gICAgICAgIGxhYmVsPVwiclwiXHJcbiAgICAgICAgW3ZhbHVlXT1cInJnYi5yXCJcclxuICAgICAgICAob25DaGFuZ2UpPVwiaGFuZGxlQ2hhbmdlKCRldmVudClcIlxyXG4gICAgICA+PC9jb2xvci1lZGl0YWJsZS1pbnB1dD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBzdHlsZT1cImZsZXg6IDMgMSAwJVwiPlxyXG4gICAgICA8Y29sb3ItZWRpdGFibGUtaW5wdXRcclxuICAgICAgICBbc3R5bGVdPVwieyB3cmFwOiBSR0J3cmFwLCBpbnB1dDogUkdCaW5wdXQsIGxhYmVsOiBSR0JsYWJlbCB9XCJcclxuICAgICAgICBsYWJlbD1cImdcIlxyXG4gICAgICAgIFt2YWx1ZV09XCJyZ2IuZ1wiXHJcbiAgICAgICAgKG9uQ2hhbmdlKT1cImhhbmRsZUNoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgPjwvY29sb3ItZWRpdGFibGUtaW5wdXQ+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgc3R5bGU9XCJmbGV4OiAzIDEgMCVcIj5cclxuICAgICAgPGNvbG9yLWVkaXRhYmxlLWlucHV0XHJcbiAgICAgICAgW3N0eWxlXT1cInsgd3JhcDogUkdCd3JhcCwgaW5wdXQ6IFJHQmlucHV0LCBsYWJlbDogUkdCbGFiZWwgfVwiXHJcbiAgICAgICAgbGFiZWw9XCJiXCJcclxuICAgICAgICBbdmFsdWVdPVwicmdiLmJcIlxyXG4gICAgICAgIChvbkNoYW5nZSk9XCJoYW5kbGVDaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAgID48L2NvbG9yLWVkaXRhYmxlLWlucHV0PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgYCxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAuY29tcGFjdC1maWVsZHMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA2cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIC5jb21wYWN0LWFjdGl2ZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDZweDtcclxuICAgIGxlZnQ6IDVweDtcclxuICAgIGhlaWdodDogOXB4O1xyXG4gICAgd2lkdGg6IDlweDtcclxuICB9XHJcbiAgYCxcclxuICBdLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29tcGFjdEZpZWxkc0NvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgaGV4ITogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHJnYiE6IFJHQkE7XHJcbiAgQE91dHB1dCgpIG9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgSEVYV3JhcDoge1trZXk6IHN0cmluZ106IHN0cmluZ30gPSB7XHJcbiAgICBtYXJnaW5Ub3A6ICctM3B4JyxcclxuICAgIG1hcmdpbkJvdHRvbTogJy0zcHgnLFxyXG4gICAgLy8gZmxleDogJzYgMSAwJScsXHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICB9O1xyXG4gIEhFWGlucHV0OiB7W2tleTogc3RyaW5nXTogc3RyaW5nfSA9IHtcclxuICAgIHdpZHRoOiAnODAlJyxcclxuICAgIHBhZGRpbmc6ICcwcHgnLFxyXG4gICAgcGFkZGluZ0xlZnQ6ICcyMCUnLFxyXG4gICAgYm9yZGVyOiAnbm9uZScsXHJcbiAgICBvdXRsaW5lOiAnbm9uZScsXHJcbiAgICBiYWNrZ3JvdW5kOiAnbm9uZScsXHJcbiAgICBmb250U2l6ZTogJzEycHgnLFxyXG4gICAgY29sb3I6ICcjMzMzJyxcclxuICAgIGhlaWdodDogJzE2cHgnLFxyXG4gIH07XHJcbiAgSEVYbGFiZWw6IHtba2V5OiBzdHJpbmddOiBzdHJpbmd9ID0ge1xyXG4gICAgZGlzcGxheTogJ25vbmUnLFxyXG4gIH07XHJcbiAgUkdCd3JhcDoge1trZXk6IHN0cmluZ106IHN0cmluZ30gPSB7XHJcbiAgICBtYXJnaW5Ub3A6ICctM3B4JyxcclxuICAgIG1hcmdpbkJvdHRvbTogJy0zcHgnLFxyXG4gICAgLy8gZmxleDogJzMgMSAwJScsXHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICB9O1xyXG4gIFJHQmlucHV0OiB7W2tleTogc3RyaW5nXTogc3RyaW5nfSA9IHtcclxuICAgIHdpZHRoOiAnODAlJyxcclxuICAgIHBhZGRpbmc6ICcwcHgnLFxyXG4gICAgcGFkZGluZ0xlZnQ6ICczMCUnLFxyXG4gICAgYm9yZGVyOiAnbm9uZScsXHJcbiAgICBvdXRsaW5lOiAnbm9uZScsXHJcbiAgICBiYWNrZ3JvdW5kOiAnbm9uZScsXHJcbiAgICBmb250U2l6ZTogJzEycHgnLFxyXG4gICAgY29sb3I6ICcjMzMzJyxcclxuICAgIGhlaWdodDogJzE2cHgnLFxyXG4gIH07XHJcbiAgUkdCbGFiZWw6IHtba2V5OiBzdHJpbmddOiBzdHJpbmd9ID0ge1xyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICB0b3A6ICc2cHgnLFxyXG4gICAgbGVmdDogJzBweCcsXHJcbiAgICAnbGluZS1oZWlnaHQnOiAnMTZweCcsXHJcbiAgICAndGV4dC10cmFuc2Zvcm0nOiAndXBwZXJjYXNlJyxcclxuICAgIGZvbnRTaXplOiAnMTJweCcsXHJcbiAgICBjb2xvcjogJyM5OTknLFxyXG4gIH07XHJcblxyXG4gIGhhbmRsZUNoYW5nZSh7IGRhdGEsICRldmVudCB9KSB7XHJcbiAgICBpZiAoZGF0YS5oZXgpIHtcclxuICAgICAgaWYgKGlzVmFsaWRIZXgoZGF0YS5oZXgpKSB7XHJcbiAgICAgICAgdGhpcy5vbkNoYW5nZS5lbWl0KHtcclxuICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgaGV4OiBkYXRhLmhleCxcclxuICAgICAgICAgICAgc291cmNlOiAnaGV4JyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICAkZXZlbnQsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMub25DaGFuZ2UuZW1pdCh7XHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgcjogZGF0YS5yIHx8IHRoaXMucmdiLnIsXHJcbiAgICAgICAgICBnOiBkYXRhLmcgfHwgdGhpcy5yZ2IuZyxcclxuICAgICAgICAgIGI6IGRhdGEuYiB8fCB0aGlzLnJnYi5iLFxyXG4gICAgICAgICAgc291cmNlOiAncmdiJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgICRldmVudCxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==