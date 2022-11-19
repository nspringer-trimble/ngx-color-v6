import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, } from '@angular/core';
import { isValidHex } from 'ngx-color';
import { TinyColor } from '@ctrl/tinycolor';
export class SketchFieldsComponent {
    constructor() {
        this.disableAlpha = false;
        this.onChange = new EventEmitter();
        this.input = {
            width: '100%',
            padding: '4px 10% 3px',
            border: 'none',
            boxSizing: 'border-box',
            boxShadow: 'inset 0 0 0 1px #ccc',
            fontSize: '11px',
        };
        this.label = {
            display: 'block',
            textAlign: 'center',
            fontSize: '11px',
            color: '#222',
            paddingTop: '3px',
            paddingBottom: '4px',
            textTransform: 'capitalize',
        };
    }
    round(value) {
        return Math.round(value);
    }
    handleChange({ data, $event }) {
        if (data.hex) {
            if (isValidHex(data.hex)) {
                const color = new TinyColor(data.hex);
                this.onChange.emit({
                    data: {
                        hex: this.disableAlpha || data.hex.length <= 6 ? color.toHex() : color.toHex8(),
                        source: 'hex',
                    },
                    $event,
                });
            }
        }
        else if (data.r || data.g || data.b) {
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
        else if (data.a) {
            if (data.a < 0) {
                data.a = 0;
            }
            else if (data.a > 100) {
                data.a = 100;
            }
            data.a /= 100;
            if (this.disableAlpha) {
                data.a = 1;
            }
            this.onChange.emit({
                data: {
                    h: this.hsl.h,
                    s: this.hsl.s,
                    l: this.hsl.l,
                    a: Math.round(data.a * 100) / 100,
                    source: 'rgb',
                },
                $event,
            });
        }
        else if (data.h || data.s || data.l) {
            this.onChange.emit({
                data: {
                    h: data.h || this.hsl.h,
                    s: Number((data.s && data.s) || this.hsl.s),
                    l: Number((data.l && data.l) || this.hsl.l),
                    source: 'hsl',
                },
                $event,
            });
        }
    }
}
SketchFieldsComponent.decorators = [
    { type: Component, args: [{
                selector: 'color-sketch-fields',
                template: `
  <div class="sketch-fields">
    <div class="sketch-double">
      <color-editable-input
        [style]="{ input: input, label: label }"
        label="hex"
        [value]="hex.replace('#', '')"
        (onChange)="handleChange($event)"
      ></color-editable-input>
    </div>
    <div class="sketch-single">
      <color-editable-input
        [style]="{ input: input, label: label }"
        label="r"
        [value]="rgb.r"
        (onChange)="handleChange($event)"
        [dragLabel]="true"
        [dragMax]="255"
      ></color-editable-input>
    </div>
    <div class="sketch-single">
      <color-editable-input
        [style]="{ input: input, label: label }"
        label="g"
        [value]="rgb.g"
        (onChange)="handleChange($event)"
        [dragLabel]="true"
        [dragMax]="255"
      ></color-editable-input>
    </div>
    <div class="sketch-single">
      <color-editable-input
        [style]="{ input: input, label: label }"
        label="b"
        [value]="rgb.b"
        (onChange)="handleChange($event)"
        [dragLabel]="true"
        [dragMax]="255"
      ></color-editable-input>
    </div>
    <div class="sketch-alpha" *ngIf="disableAlpha === false">
      <color-editable-input
        [style]="{ input: input, label: label }"
        label="a"
        [value]="round(rgb.a * 100)"
        (onChange)="handleChange($event)"
        [dragLabel]="true"
        [dragMax]="100"
      ></color-editable-input>
    </div>
  </div>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                styles: [`
    .sketch-fields {
      display: flex;
      padding-top: 4px;
    }
    .sketch-double {
      -webkit-box-flex: 2;
      flex: 2 1 0%;
    }
    .sketch-single {
      flex: 1 1 0%;
      padding-left: 6px;
    }
    .sketch-alpha {
      -webkit-box-flex: 1;
      flex: 1 1 0%;
      padding-left: 6px;
    }
    :host-context([dir=rtl]) .sketch-single {
      padding-right: 6px;
      padding-left: 0;
    }
    :host-context([dir=rtl]) .sketch-alpha {
      padding-right: 6px;
      padding-left: 0;
    }
  `]
            },] }
];
SketchFieldsComponent.propDecorators = {
    hsl: [{ type: Input }],
    rgb: [{ type: Input }],
    hex: [{ type: Input }],
    disableAlpha: [{ type: Input }],
    onChange: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tldGNoLWZpZWxkcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL3NrZXRjaC8iLCJzb3VyY2VzIjpbInNrZXRjaC1maWVsZHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxVQUFVLEVBQWMsTUFBTSxXQUFXLENBQUM7QUFDbkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBd0Y1QyxNQUFNLE9BQU8scUJBQXFCO0lBdEZsQztRQTBGVyxpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUNwQixhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUM3QyxVQUFLLEdBQTRCO1lBQy9CLEtBQUssRUFBRSxNQUFNO1lBQ2IsT0FBTyxFQUFFLGFBQWE7WUFDdEIsTUFBTSxFQUFFLE1BQU07WUFDZCxTQUFTLEVBQUUsWUFBWTtZQUN2QixTQUFTLEVBQUUsc0JBQXNCO1lBQ2pDLFFBQVEsRUFBRSxNQUFNO1NBQ2pCLENBQUM7UUFDRixVQUFLLEdBQTRCO1lBQy9CLE9BQU8sRUFBRSxPQUFPO1lBQ2hCLFNBQVMsRUFBRSxRQUFRO1lBQ25CLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLEtBQUssRUFBRSxNQUFNO1lBQ2IsVUFBVSxFQUFFLEtBQUs7WUFDakIsYUFBYSxFQUFFLEtBQUs7WUFDcEIsYUFBYSxFQUFFLFlBQVk7U0FDNUIsQ0FBQztJQTZESixDQUFDO0lBM0RDLEtBQUssQ0FBQyxLQUFLO1FBQ1QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFDRCxZQUFZLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFO1FBQzNCLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNaLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDeEIsTUFBTSxLQUFLLEdBQUcsSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUN0QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztvQkFDakIsSUFBSSxFQUFFO3dCQUNKLEdBQUcsRUFBRSxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFO3dCQUMvRSxNQUFNLEVBQUUsS0FBSztxQkFDZDtvQkFDRCxNQUFNO2lCQUNQLENBQUMsQ0FBQzthQUNKO1NBQ0Y7YUFBTSxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxFQUFFO1lBQ3JDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO2dCQUNqQixJQUFJLEVBQUU7b0JBQ0osQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUN2QixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ3ZCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDdkIsTUFBTSxFQUFFLEtBQUs7aUJBQ2Q7Z0JBQ0QsTUFBTTthQUNQLENBQUMsQ0FBQztTQUNKO2FBQU0sSUFBSSxJQUFJLENBQUMsQ0FBQyxFQUFFO1lBQ2pCLElBQUksSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDWjtpQkFBTSxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFFO2dCQUN2QixJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQzthQUNkO1lBQ0QsSUFBSSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUM7WUFFZCxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7Z0JBQ3JCLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ1o7WUFFRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztnQkFDakIsSUFBSSxFQUFFO29CQUNKLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ2IsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDYixDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNiLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRztvQkFDakMsTUFBTSxFQUFFLEtBQUs7aUJBQ2Q7Z0JBQ0QsTUFBTTthQUNQLENBQUMsQ0FBQztTQUNKO2FBQU0sSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsRUFBRTtZQUNyQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztnQkFDakIsSUFBSSxFQUFFO29CQUNKLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDdkIsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUMzQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQzNDLE1BQU0sRUFBRSxLQUFLO2lCQUNkO2dCQUNELE1BQU07YUFDUCxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7OztZQXhLRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FtRFQ7Z0JBOEJELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxtQkFBbUIsRUFBRSxLQUFLO3lCQTdCeEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBMEJEO2FBSUY7OztrQkFFRSxLQUFLO2tCQUNMLEtBQUs7a0JBQ0wsS0FBSzsyQkFDTCxLQUFLO3VCQUNMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT3V0cHV0LFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgaXNWYWxpZEhleCwgSFNMQSwgUkdCQSB9IGZyb20gJ25neC1jb2xvcic7XHJcbmltcG9ydCB7IFRpbnlDb2xvciB9IGZyb20gJ0BjdHJsL3Rpbnljb2xvcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NvbG9yLXNrZXRjaC1maWVsZHMnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgPGRpdiBjbGFzcz1cInNrZXRjaC1maWVsZHNcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJza2V0Y2gtZG91YmxlXCI+XHJcbiAgICAgIDxjb2xvci1lZGl0YWJsZS1pbnB1dFxyXG4gICAgICAgIFtzdHlsZV09XCJ7IGlucHV0OiBpbnB1dCwgbGFiZWw6IGxhYmVsIH1cIlxyXG4gICAgICAgIGxhYmVsPVwiaGV4XCJcclxuICAgICAgICBbdmFsdWVdPVwiaGV4LnJlcGxhY2UoJyMnLCAnJylcIlxyXG4gICAgICAgIChvbkNoYW5nZSk9XCJoYW5kbGVDaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAgID48L2NvbG9yLWVkaXRhYmxlLWlucHV0PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwic2tldGNoLXNpbmdsZVwiPlxyXG4gICAgICA8Y29sb3ItZWRpdGFibGUtaW5wdXRcclxuICAgICAgICBbc3R5bGVdPVwieyBpbnB1dDogaW5wdXQsIGxhYmVsOiBsYWJlbCB9XCJcclxuICAgICAgICBsYWJlbD1cInJcIlxyXG4gICAgICAgIFt2YWx1ZV09XCJyZ2IuclwiXHJcbiAgICAgICAgKG9uQ2hhbmdlKT1cImhhbmRsZUNoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgICBbZHJhZ0xhYmVsXT1cInRydWVcIlxyXG4gICAgICAgIFtkcmFnTWF4XT1cIjI1NVwiXHJcbiAgICAgID48L2NvbG9yLWVkaXRhYmxlLWlucHV0PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwic2tldGNoLXNpbmdsZVwiPlxyXG4gICAgICA8Y29sb3ItZWRpdGFibGUtaW5wdXRcclxuICAgICAgICBbc3R5bGVdPVwieyBpbnB1dDogaW5wdXQsIGxhYmVsOiBsYWJlbCB9XCJcclxuICAgICAgICBsYWJlbD1cImdcIlxyXG4gICAgICAgIFt2YWx1ZV09XCJyZ2IuZ1wiXHJcbiAgICAgICAgKG9uQ2hhbmdlKT1cImhhbmRsZUNoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgICBbZHJhZ0xhYmVsXT1cInRydWVcIlxyXG4gICAgICAgIFtkcmFnTWF4XT1cIjI1NVwiXHJcbiAgICAgID48L2NvbG9yLWVkaXRhYmxlLWlucHV0PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwic2tldGNoLXNpbmdsZVwiPlxyXG4gICAgICA8Y29sb3ItZWRpdGFibGUtaW5wdXRcclxuICAgICAgICBbc3R5bGVdPVwieyBpbnB1dDogaW5wdXQsIGxhYmVsOiBsYWJlbCB9XCJcclxuICAgICAgICBsYWJlbD1cImJcIlxyXG4gICAgICAgIFt2YWx1ZV09XCJyZ2IuYlwiXHJcbiAgICAgICAgKG9uQ2hhbmdlKT1cImhhbmRsZUNoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgICBbZHJhZ0xhYmVsXT1cInRydWVcIlxyXG4gICAgICAgIFtkcmFnTWF4XT1cIjI1NVwiXHJcbiAgICAgID48L2NvbG9yLWVkaXRhYmxlLWlucHV0PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwic2tldGNoLWFscGhhXCIgKm5nSWY9XCJkaXNhYmxlQWxwaGEgPT09IGZhbHNlXCI+XHJcbiAgICAgIDxjb2xvci1lZGl0YWJsZS1pbnB1dFxyXG4gICAgICAgIFtzdHlsZV09XCJ7IGlucHV0OiBpbnB1dCwgbGFiZWw6IGxhYmVsIH1cIlxyXG4gICAgICAgIGxhYmVsPVwiYVwiXHJcbiAgICAgICAgW3ZhbHVlXT1cInJvdW5kKHJnYi5hICogMTAwKVwiXHJcbiAgICAgICAgKG9uQ2hhbmdlKT1cImhhbmRsZUNoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgICBbZHJhZ0xhYmVsXT1cInRydWVcIlxyXG4gICAgICAgIFtkcmFnTWF4XT1cIjEwMFwiXHJcbiAgICAgID48L2NvbG9yLWVkaXRhYmxlLWlucHV0PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgYCxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgIC5za2V0Y2gtZmllbGRzIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgcGFkZGluZy10b3A6IDRweDtcclxuICAgIH1cclxuICAgIC5za2V0Y2gtZG91YmxlIHtcclxuICAgICAgLXdlYmtpdC1ib3gtZmxleDogMjtcclxuICAgICAgZmxleDogMiAxIDAlO1xyXG4gICAgfVxyXG4gICAgLnNrZXRjaC1zaW5nbGUge1xyXG4gICAgICBmbGV4OiAxIDEgMCU7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogNnB4O1xyXG4gICAgfVxyXG4gICAgLnNrZXRjaC1hbHBoYSB7XHJcbiAgICAgIC13ZWJraXQtYm94LWZsZXg6IDE7XHJcbiAgICAgIGZsZXg6IDEgMSAwJTtcclxuICAgICAgcGFkZGluZy1sZWZ0OiA2cHg7XHJcbiAgICB9XHJcbiAgICA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgLnNrZXRjaC1zaW5nbGUge1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiA2cHg7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgIH1cclxuICAgIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSAuc2tldGNoLWFscGhhIHtcclxuICAgICAgcGFkZGluZy1yaWdodDogNnB4O1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICB9XHJcbiAgYCxcclxuICBdLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2tldGNoRmllbGRzQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSBoc2whOiBIU0xBO1xyXG4gIEBJbnB1dCgpIHJnYiE6IFJHQkE7XHJcbiAgQElucHV0KCkgaGV4ITogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGRpc2FibGVBbHBoYSA9IGZhbHNlO1xyXG4gIEBPdXRwdXQoKSBvbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIGlucHV0OiB7W2tleTogc3RyaW5nXTogc3RyaW5nfSA9IHtcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBwYWRkaW5nOiAnNHB4IDEwJSAzcHgnLFxyXG4gICAgYm9yZGVyOiAnbm9uZScsXHJcbiAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcclxuICAgIGJveFNoYWRvdzogJ2luc2V0IDAgMCAwIDFweCAjY2NjJyxcclxuICAgIGZvbnRTaXplOiAnMTFweCcsXHJcbiAgfTtcclxuICBsYWJlbDoge1trZXk6IHN0cmluZ106IHN0cmluZ30gPSB7XHJcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgIGZvbnRTaXplOiAnMTFweCcsXHJcbiAgICBjb2xvcjogJyMyMjInLFxyXG4gICAgcGFkZGluZ1RvcDogJzNweCcsXHJcbiAgICBwYWRkaW5nQm90dG9tOiAnNHB4JyxcclxuICAgIHRleHRUcmFuc2Zvcm06ICdjYXBpdGFsaXplJyxcclxuICB9O1xyXG5cclxuICByb3VuZCh2YWx1ZSkge1xyXG4gICAgcmV0dXJuIE1hdGgucm91bmQodmFsdWUpO1xyXG4gIH1cclxuICBoYW5kbGVDaGFuZ2UoeyBkYXRhLCAkZXZlbnQgfSkge1xyXG4gICAgaWYgKGRhdGEuaGV4KSB7XHJcbiAgICAgIGlmIChpc1ZhbGlkSGV4KGRhdGEuaGV4KSkge1xyXG4gICAgICAgIGNvbnN0IGNvbG9yID0gbmV3IFRpbnlDb2xvcihkYXRhLmhleCk7XHJcbiAgICAgICAgdGhpcy5vbkNoYW5nZS5lbWl0KHtcclxuICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgaGV4OiB0aGlzLmRpc2FibGVBbHBoYSB8fCBkYXRhLmhleC5sZW5ndGggPD0gNiA/IGNvbG9yLnRvSGV4KCkgOiBjb2xvci50b0hleDgoKSxcclxuICAgICAgICAgICAgc291cmNlOiAnaGV4JyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICAkZXZlbnQsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoZGF0YS5yIHx8IGRhdGEuZyB8fCBkYXRhLmIpIHtcclxuICAgICAgdGhpcy5vbkNoYW5nZS5lbWl0KHtcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICByOiBkYXRhLnIgfHwgdGhpcy5yZ2IucixcclxuICAgICAgICAgIGc6IGRhdGEuZyB8fCB0aGlzLnJnYi5nLFxyXG4gICAgICAgICAgYjogZGF0YS5iIHx8IHRoaXMucmdiLmIsXHJcbiAgICAgICAgICBzb3VyY2U6ICdyZ2InLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJGV2ZW50LFxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSBpZiAoZGF0YS5hKSB7XHJcbiAgICAgIGlmIChkYXRhLmEgPCAwKSB7XHJcbiAgICAgICAgZGF0YS5hID0gMDtcclxuICAgICAgfSBlbHNlIGlmIChkYXRhLmEgPiAxMDApIHtcclxuICAgICAgICBkYXRhLmEgPSAxMDA7XHJcbiAgICAgIH1cclxuICAgICAgZGF0YS5hIC89IDEwMDtcclxuXHJcbiAgICAgIGlmICh0aGlzLmRpc2FibGVBbHBoYSkge1xyXG4gICAgICAgIGRhdGEuYSA9IDE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMub25DaGFuZ2UuZW1pdCh7XHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgaDogdGhpcy5oc2wuaCxcclxuICAgICAgICAgIHM6IHRoaXMuaHNsLnMsXHJcbiAgICAgICAgICBsOiB0aGlzLmhzbC5sLFxyXG4gICAgICAgICAgYTogTWF0aC5yb3VuZChkYXRhLmEgKiAxMDApIC8gMTAwLFxyXG4gICAgICAgICAgc291cmNlOiAncmdiJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgICRldmVudCxcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2UgaWYgKGRhdGEuaCB8fCBkYXRhLnMgfHwgZGF0YS5sKSB7XHJcbiAgICAgIHRoaXMub25DaGFuZ2UuZW1pdCh7XHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgaDogZGF0YS5oIHx8IHRoaXMuaHNsLmgsXHJcbiAgICAgICAgICBzOiBOdW1iZXIoKGRhdGEucyAmJiBkYXRhLnMpIHx8IHRoaXMuaHNsLnMpLFxyXG4gICAgICAgICAgbDogTnVtYmVyKChkYXRhLmwgJiYgZGF0YS5sKSB8fCB0aGlzLmhzbC5sKSxcclxuICAgICAgICAgIHNvdXJjZTogJ2hzbCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAkZXZlbnQsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=