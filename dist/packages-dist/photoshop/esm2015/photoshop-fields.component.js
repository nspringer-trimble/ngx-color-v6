import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, } from '@angular/core';
import { isValidHex } from 'ngx-color';
export class PhotoshopFieldsComponent {
    constructor() {
        this.onChange = new EventEmitter();
        this.RGBinput = {
            marginLeft: '35%',
            width: '40%',
            height: '22px',
            border: '1px solid rgb(136, 136, 136)',
            boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 1px inset, rgb(236, 236, 236) 0px 1px 0px 0px',
            marginBottom: '2px',
            fontSize: '13px',
            paddingLeft: '3px',
            marginRight: '10px',
        };
        this.RGBwrap = {
            position: 'relative',
        };
        this.RGBlabel = {
            left: '0px',
            width: '34px',
            textTransform: 'uppercase',
            fontSize: '13px',
            height: '24px',
            lineHeight: '24px',
            position: 'absolute',
        };
        this.HEXinput = {
            marginLeft: '20%',
            width: '80%',
            height: '22px',
            border: '1px solid #888888',
            boxShadow: 'inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC',
            marginBottom: '3px',
            fontSize: '13px',
            paddingLeft: '3px',
        };
        this.HEXwrap = {
            position: 'relative',
        };
        this.HEXlabel = {
            position: 'absolute',
            top: '0px',
            left: '0px',
            width: '14px',
            textTransform: 'uppercase',
            fontSize: '13px',
            height: '24px',
            lineHeight: '24px',
        };
    }
    round(v) {
        return Math.round(v);
    }
    handleValueChange({ data, $event }) {
        if (data['#']) {
            if (isValidHex(data['#'])) {
                this.onChange.emit({
                    data: {
                        hex: data['#'],
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
        else if (data.h || data.s || data.v) {
            this.onChange.emit({
                data: {
                    h: data.h || this.hsv.h,
                    s: data.s || this.hsv.s,
                    v: data.v || this.hsv.v,
                    source: 'hsv',
                },
                $event,
            });
        }
    }
}
PhotoshopFieldsComponent.decorators = [
    { type: Component, args: [{
                selector: 'color-photoshop-fields',
                template: `
  <div class="photoshop-fields">
    <color-editable-input
      [value]="round(hsv.h)"
      label="h"
      (onChange)="handleValueChange($event)"
      [style]="{input: RGBinput, wrap: RGBwrap, label: RGBlabel}"
    ></color-editable-input>
    <color-editable-input
      [value]="round(hsv.s * 100)"
      label="s"
      (onChange)="handleValueChange($event)"
      [style]="{input: RGBinput, wrap: RGBwrap, label: RGBlabel}"
    ></color-editable-input>
    <color-editable-input
      [value]="round(hsv.v * 100)"
      label="v"
      (onChange)="handleValueChange($event)"
      [style]="{input: RGBinput, wrap: RGBwrap, label: RGBlabel}"
    ></color-editable-input>
    <div class="photoshop-divider"></div>
    <color-editable-input
      [value]="rgb.r"
      label="r"
      (onChange)="handleValueChange($event)"
      [style]="{input: RGBinput, wrap: RGBwrap, label: RGBlabel}"
    ></color-editable-input>
    <color-editable-input
      [value]="rgb.g"
      label="g"
      (onChange)="handleValueChange($event)"
      [style]="{input: RGBinput, wrap: RGBwrap, label: RGBlabel}"
    ></color-editable-input>
    <color-editable-input
      [value]="rgb.b"
      label="b"
      (onChange)="handleValueChange($event)"
      [style]="{input: RGBinput, wrap: RGBwrap, label: RGBlabel}"
    ></color-editable-input>
    <div class="photoshop-divider"></div>
    <color-editable-input
      [value]="hex.replace('#', '')"
      label="#"
      (onChange)="handleValueChange($event)"
      [style]="{input: HEXinput, wrap: HEXwrap, label: HEXlabel}"
    ></color-editable-input>
    <div class="photoshop-field-symbols">
      <div class="photoshop-symbol">°</div>
      <div class="photoshop-symbol">%</div>
      <div class="photoshop-symbol">%</div>
    </div>
  </div>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                styles: [`
    .photoshop-fields {
      padding-top: 5px;
      padding-bottom: 9px;
      width: 85px;
      position: relative;
    }
    .photoshop-field-symbols {
      position: absolute;
      top: 5px;
      right: -7px;
      font-size: 13px;
    }
    .photoshop-symbol {
      height: 24px;
      line-height: 24px;
      padding-bottom: 7px;
    }
    .photoshop-divider {
      height: 5px;
    }
  `]
            },] }
];
PhotoshopFieldsComponent.propDecorators = {
    rgb: [{ type: Input }],
    hsv: [{ type: Input }],
    hex: [{ type: Input }],
    onChange: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGhvdG9zaG9wLWZpZWxkcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL3Bob3Rvc2hvcC8iLCJzb3VyY2VzIjpbInBob3Rvc2hvcC1maWVsZHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxVQUFVLEVBQVksTUFBTSxXQUFXLENBQUM7QUFvRmpELE1BQU0sT0FBTyx3QkFBd0I7SUFsRnJDO1FBc0ZZLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQzdDLGFBQVEsR0FBMkI7WUFDakMsVUFBVSxFQUFFLEtBQUs7WUFDakIsS0FBSyxFQUFFLEtBQUs7WUFDWixNQUFNLEVBQUUsTUFBTTtZQUNkLE1BQU0sRUFBRSw4QkFBOEI7WUFDdEMsU0FBUyxFQUNQLDBFQUEwRTtZQUM1RSxZQUFZLEVBQUUsS0FBSztZQUNuQixRQUFRLEVBQUUsTUFBTTtZQUNoQixXQUFXLEVBQUUsS0FBSztZQUNsQixXQUFXLEVBQUUsTUFBTTtTQUNwQixDQUFDO1FBQ0YsWUFBTyxHQUEyQjtZQUNoQyxRQUFRLEVBQUUsVUFBVTtTQUNyQixDQUFDO1FBQ0YsYUFBUSxHQUEyQjtZQUNqQyxJQUFJLEVBQUUsS0FBSztZQUNYLEtBQUssRUFBRSxNQUFNO1lBQ2IsYUFBYSxFQUFFLFdBQVc7WUFDMUIsUUFBUSxFQUFFLE1BQU07WUFDaEIsTUFBTSxFQUFFLE1BQU07WUFDZCxVQUFVLEVBQUUsTUFBTTtZQUNsQixRQUFRLEVBQUUsVUFBVTtTQUNyQixDQUFDO1FBQ0YsYUFBUSxHQUEyQjtZQUNqQyxVQUFVLEVBQUUsS0FBSztZQUNqQixLQUFLLEVBQUUsS0FBSztZQUNaLE1BQU0sRUFBRSxNQUFNO1lBQ2QsTUFBTSxFQUFFLG1CQUFtQjtZQUMzQixTQUFTLEVBQUUsbURBQW1EO1lBQzlELFlBQVksRUFBRSxLQUFLO1lBQ25CLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFdBQVcsRUFBRSxLQUFLO1NBQ25CLENBQUM7UUFDRixZQUFPLEdBQTJCO1lBQ2hDLFFBQVEsRUFBRSxVQUFVO1NBQ3JCLENBQUM7UUFDRixhQUFRLEdBQTJCO1lBQ2pDLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLEdBQUcsRUFBRSxLQUFLO1lBQ1YsSUFBSSxFQUFFLEtBQUs7WUFDWCxLQUFLLEVBQUUsTUFBTTtZQUNiLGFBQWEsRUFBRSxXQUFXO1lBQzFCLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLE1BQU0sRUFBRSxNQUFNO1lBQ2QsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztJQXNDSixDQUFDO0lBcENDLEtBQUssQ0FBQyxDQUFDO1FBQ0wsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFDRCxpQkFBaUIsQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUU7UUFDaEMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDYixJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtnQkFDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7b0JBQ2pCLElBQUksRUFBRTt3QkFDSixHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQzt3QkFDZCxNQUFNLEVBQUUsS0FBSztxQkFDZDtvQkFDRCxNQUFNO2lCQUNQLENBQUMsQ0FBQzthQUNKO1NBQ0Y7YUFBTSxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxFQUFFO1lBQ3JDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO2dCQUNqQixJQUFJLEVBQUU7b0JBQ0osQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUN2QixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ3ZCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDdkIsTUFBTSxFQUFFLEtBQUs7aUJBQ2Q7Z0JBQ0QsTUFBTTthQUNQLENBQUMsQ0FBQztTQUNKO2FBQU0sSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsRUFBRTtZQUNyQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztnQkFDakIsSUFBSSxFQUFFO29CQUNKLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDdkIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUN2QixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ3ZCLE1BQU0sRUFBRSxLQUFLO2lCQUNkO2dCQUNELE1BQU07YUFDUCxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7OztZQTFLRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBb0RUO2dCQXlCRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsbUJBQW1CLEVBQUUsS0FBSzt5QkF4QnhCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FxQkQ7YUFJRjs7O2tCQUVFLEtBQUs7a0JBQ0wsS0FBSztrQkFDTCxLQUFLO3VCQUNMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT3V0cHV0LFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgaXNWYWxpZEhleCwgSFNWLCBSR0IgfSBmcm9tICduZ3gtY29sb3InO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjb2xvci1waG90b3Nob3AtZmllbGRzJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gIDxkaXYgY2xhc3M9XCJwaG90b3Nob3AtZmllbGRzXCI+XHJcbiAgICA8Y29sb3ItZWRpdGFibGUtaW5wdXRcclxuICAgICAgW3ZhbHVlXT1cInJvdW5kKGhzdi5oKVwiXHJcbiAgICAgIGxhYmVsPVwiaFwiXHJcbiAgICAgIChvbkNoYW5nZSk9XCJoYW5kbGVWYWx1ZUNoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgW3N0eWxlXT1cIntpbnB1dDogUkdCaW5wdXQsIHdyYXA6IFJHQndyYXAsIGxhYmVsOiBSR0JsYWJlbH1cIlxyXG4gICAgPjwvY29sb3ItZWRpdGFibGUtaW5wdXQ+XHJcbiAgICA8Y29sb3ItZWRpdGFibGUtaW5wdXRcclxuICAgICAgW3ZhbHVlXT1cInJvdW5kKGhzdi5zICogMTAwKVwiXHJcbiAgICAgIGxhYmVsPVwic1wiXHJcbiAgICAgIChvbkNoYW5nZSk9XCJoYW5kbGVWYWx1ZUNoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgW3N0eWxlXT1cIntpbnB1dDogUkdCaW5wdXQsIHdyYXA6IFJHQndyYXAsIGxhYmVsOiBSR0JsYWJlbH1cIlxyXG4gICAgPjwvY29sb3ItZWRpdGFibGUtaW5wdXQ+XHJcbiAgICA8Y29sb3ItZWRpdGFibGUtaW5wdXRcclxuICAgICAgW3ZhbHVlXT1cInJvdW5kKGhzdi52ICogMTAwKVwiXHJcbiAgICAgIGxhYmVsPVwidlwiXHJcbiAgICAgIChvbkNoYW5nZSk9XCJoYW5kbGVWYWx1ZUNoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgW3N0eWxlXT1cIntpbnB1dDogUkdCaW5wdXQsIHdyYXA6IFJHQndyYXAsIGxhYmVsOiBSR0JsYWJlbH1cIlxyXG4gICAgPjwvY29sb3ItZWRpdGFibGUtaW5wdXQ+XHJcbiAgICA8ZGl2IGNsYXNzPVwicGhvdG9zaG9wLWRpdmlkZXJcIj48L2Rpdj5cclxuICAgIDxjb2xvci1lZGl0YWJsZS1pbnB1dFxyXG4gICAgICBbdmFsdWVdPVwicmdiLnJcIlxyXG4gICAgICBsYWJlbD1cInJcIlxyXG4gICAgICAob25DaGFuZ2UpPVwiaGFuZGxlVmFsdWVDaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAgIFtzdHlsZV09XCJ7aW5wdXQ6IFJHQmlucHV0LCB3cmFwOiBSR0J3cmFwLCBsYWJlbDogUkdCbGFiZWx9XCJcclxuICAgID48L2NvbG9yLWVkaXRhYmxlLWlucHV0PlxyXG4gICAgPGNvbG9yLWVkaXRhYmxlLWlucHV0XHJcbiAgICAgIFt2YWx1ZV09XCJyZ2IuZ1wiXHJcbiAgICAgIGxhYmVsPVwiZ1wiXHJcbiAgICAgIChvbkNoYW5nZSk9XCJoYW5kbGVWYWx1ZUNoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgW3N0eWxlXT1cIntpbnB1dDogUkdCaW5wdXQsIHdyYXA6IFJHQndyYXAsIGxhYmVsOiBSR0JsYWJlbH1cIlxyXG4gICAgPjwvY29sb3ItZWRpdGFibGUtaW5wdXQ+XHJcbiAgICA8Y29sb3ItZWRpdGFibGUtaW5wdXRcclxuICAgICAgW3ZhbHVlXT1cInJnYi5iXCJcclxuICAgICAgbGFiZWw9XCJiXCJcclxuICAgICAgKG9uQ2hhbmdlKT1cImhhbmRsZVZhbHVlQ2hhbmdlKCRldmVudClcIlxyXG4gICAgICBbc3R5bGVdPVwie2lucHV0OiBSR0JpbnB1dCwgd3JhcDogUkdCd3JhcCwgbGFiZWw6IFJHQmxhYmVsfVwiXHJcbiAgICA+PC9jb2xvci1lZGl0YWJsZS1pbnB1dD5cclxuICAgIDxkaXYgY2xhc3M9XCJwaG90b3Nob3AtZGl2aWRlclwiPjwvZGl2PlxyXG4gICAgPGNvbG9yLWVkaXRhYmxlLWlucHV0XHJcbiAgICAgIFt2YWx1ZV09XCJoZXgucmVwbGFjZSgnIycsICcnKVwiXHJcbiAgICAgIGxhYmVsPVwiI1wiXHJcbiAgICAgIChvbkNoYW5nZSk9XCJoYW5kbGVWYWx1ZUNoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgW3N0eWxlXT1cIntpbnB1dDogSEVYaW5wdXQsIHdyYXA6IEhFWHdyYXAsIGxhYmVsOiBIRVhsYWJlbH1cIlxyXG4gICAgPjwvY29sb3ItZWRpdGFibGUtaW5wdXQ+XHJcbiAgICA8ZGl2IGNsYXNzPVwicGhvdG9zaG9wLWZpZWxkLXN5bWJvbHNcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cInBob3Rvc2hvcC1zeW1ib2xcIj7CsDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicGhvdG9zaG9wLXN5bWJvbFwiPiU8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cInBob3Rvc2hvcC1zeW1ib2xcIj4lPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICBgLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgLnBob3Rvc2hvcC1maWVsZHMge1xyXG4gICAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogOXB4O1xyXG4gICAgICB3aWR0aDogODVweDtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgfVxyXG4gICAgLnBob3Rvc2hvcC1maWVsZC1zeW1ib2xzIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDVweDtcclxuICAgICAgcmlnaHQ6IC03cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIH1cclxuICAgIC5waG90b3Nob3Atc3ltYm9sIHtcclxuICAgICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDdweDtcclxuICAgIH1cclxuICAgIC5waG90b3Nob3AtZGl2aWRlciB7XHJcbiAgICAgIGhlaWdodDogNXB4O1xyXG4gICAgfVxyXG4gIGAsXHJcbiAgXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFBob3Rvc2hvcEZpZWxkc0NvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgcmdiITogUkdCO1xyXG4gIEBJbnB1dCgpIGhzdiE6IEhTVjtcclxuICBASW5wdXQoKSBoZXghOiBzdHJpbmc7XHJcbiAgQE91dHB1dCgpIG9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgUkdCaW5wdXQ6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XHJcbiAgICBtYXJnaW5MZWZ0OiAnMzUlJyxcclxuICAgIHdpZHRoOiAnNDAlJyxcclxuICAgIGhlaWdodDogJzIycHgnLFxyXG4gICAgYm9yZGVyOiAnMXB4IHNvbGlkIHJnYigxMzYsIDEzNiwgMTM2KScsXHJcbiAgICBib3hTaGFkb3c6XHJcbiAgICAgICdyZ2JhKDAsIDAsIDAsIDAuMSkgMHB4IDFweCAxcHggaW5zZXQsIHJnYigyMzYsIDIzNiwgMjM2KSAwcHggMXB4IDBweCAwcHgnLFxyXG4gICAgbWFyZ2luQm90dG9tOiAnMnB4JyxcclxuICAgIGZvbnRTaXplOiAnMTNweCcsXHJcbiAgICBwYWRkaW5nTGVmdDogJzNweCcsXHJcbiAgICBtYXJnaW5SaWdodDogJzEwcHgnLFxyXG4gIH07XHJcbiAgUkdCd3JhcDogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gIH07XHJcbiAgUkdCbGFiZWw6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XHJcbiAgICBsZWZ0OiAnMHB4JyxcclxuICAgIHdpZHRoOiAnMzRweCcsXHJcbiAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcclxuICAgIGZvbnRTaXplOiAnMTNweCcsXHJcbiAgICBoZWlnaHQ6ICcyNHB4JyxcclxuICAgIGxpbmVIZWlnaHQ6ICcyNHB4JyxcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gIH07XHJcbiAgSEVYaW5wdXQ6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XHJcbiAgICBtYXJnaW5MZWZ0OiAnMjAlJyxcclxuICAgIHdpZHRoOiAnODAlJyxcclxuICAgIGhlaWdodDogJzIycHgnLFxyXG4gICAgYm9yZGVyOiAnMXB4IHNvbGlkICM4ODg4ODgnLFxyXG4gICAgYm94U2hhZG93OiAnaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwwLDAsLjEpLCAwIDFweCAwIDAgI0VDRUNFQycsXHJcbiAgICBtYXJnaW5Cb3R0b206ICczcHgnLFxyXG4gICAgZm9udFNpemU6ICcxM3B4JyxcclxuICAgIHBhZGRpbmdMZWZ0OiAnM3B4JyxcclxuICB9O1xyXG4gIEhFWHdyYXA6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICB9O1xyXG4gIEhFWGxhYmVsOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICB0b3A6ICcwcHgnLFxyXG4gICAgbGVmdDogJzBweCcsXHJcbiAgICB3aWR0aDogJzE0cHgnLFxyXG4gICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXHJcbiAgICBmb250U2l6ZTogJzEzcHgnLFxyXG4gICAgaGVpZ2h0OiAnMjRweCcsXHJcbiAgICBsaW5lSGVpZ2h0OiAnMjRweCcsXHJcbiAgfTtcclxuXHJcbiAgcm91bmQodikge1xyXG4gICAgcmV0dXJuIE1hdGgucm91bmQodik7XHJcbiAgfVxyXG4gIGhhbmRsZVZhbHVlQ2hhbmdlKHsgZGF0YSwgJGV2ZW50IH0pIHtcclxuICAgIGlmIChkYXRhWycjJ10pIHtcclxuICAgICAgaWYgKGlzVmFsaWRIZXgoZGF0YVsnIyddKSkge1xyXG4gICAgICAgIHRoaXMub25DaGFuZ2UuZW1pdCh7XHJcbiAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIGhleDogZGF0YVsnIyddLFxyXG4gICAgICAgICAgICBzb3VyY2U6ICdoZXgnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgICRldmVudCxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChkYXRhLnIgfHwgZGF0YS5nIHx8IGRhdGEuYikge1xyXG4gICAgICB0aGlzLm9uQ2hhbmdlLmVtaXQoe1xyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIHI6IGRhdGEuciB8fCB0aGlzLnJnYi5yLFxyXG4gICAgICAgICAgZzogZGF0YS5nIHx8IHRoaXMucmdiLmcsXHJcbiAgICAgICAgICBiOiBkYXRhLmIgfHwgdGhpcy5yZ2IuYixcclxuICAgICAgICAgIHNvdXJjZTogJ3JnYicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAkZXZlbnQsXHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIGlmIChkYXRhLmggfHwgZGF0YS5zIHx8IGRhdGEudikge1xyXG4gICAgICB0aGlzLm9uQ2hhbmdlLmVtaXQoe1xyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgIGg6IGRhdGEuaCB8fCB0aGlzLmhzdi5oLFxyXG4gICAgICAgICAgczogZGF0YS5zIHx8IHRoaXMuaHN2LnMsXHJcbiAgICAgICAgICB2OiBkYXRhLnYgfHwgdGhpcy5oc3YudixcclxuICAgICAgICAgIHNvdXJjZTogJ2hzdicsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAkZXZlbnQsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=