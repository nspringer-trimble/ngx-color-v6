import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, } from '@angular/core';
import { isValidHex } from 'ngx-color';
import { TinyColor } from '@ctrl/tinycolor';
export class ChromeFieldsComponent {
    constructor() {
        this.onChange = new EventEmitter();
        this.view = '';
        this.input = {
            fontSize: '11px',
            color: '#333',
            width: '100%',
            borderRadius: '2px',
            border: 'none',
            boxShadow: 'inset 0 0 0 1px #dadada',
            height: '21px',
            'text-align': 'center',
        };
        this.label = {
            'text-transform': 'uppercase',
            fontSize: '11px',
            'line-height': '11px',
            color: '#969696',
            'text-align': 'center',
            display: 'block',
            marginTop: '12px',
        };
    }
    ngOnInit() {
        if (this.hsl.a === 1 && this.view !== 'hex') {
            this.view = 'hex';
        }
        else if (this.view !== 'rgb' && this.view !== 'hsl') {
            this.view = 'rgb';
        }
    }
    toggleViews() {
        if (this.view === 'hex') {
            this.view = 'rgb';
        }
        else if (this.view === 'rgb') {
            this.view = 'hsl';
        }
        else if (this.view === 'hsl') {
            if (this.hsl.a === 1) {
                this.view = 'hex';
            }
            else {
                this.view = 'rgb';
            }
        }
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
                        hex: this.disableAlpha ? color.toHex() : color.toHex8(),
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
            else if (data.a > 1) {
                data.a = 1;
            }
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
                    s: data.s || this.hsl.s,
                    l: data.l || this.hsl.l,
                    source: 'hsl',
                },
                $event,
            });
        }
    }
}
ChromeFieldsComponent.decorators = [
    { type: Component, args: [{
                selector: 'color-chrome-fields',
                template: `
    <div class="chrome-wrap">
      <div class="chrome-fields">
        <ng-template [ngIf]="view === 'hex'">
          <div class="chrome-field">
            <color-editable-input
              [style]="{ input: input, label: label }"
              label="hex"
              [value]="hex"
              (onChange)="handleChange($event)"
            ></color-editable-input>
          </div>
        </ng-template>
        <ng-template [ngIf]="view === 'rgb'">
          <div class="chrome-field">
            <color-editable-input
              [style]="{ input: input, label: label }"
              label="r"
              [value]="rgb.r"
              (onChange)="handleChange($event)"
            ></color-editable-input>
          </div>
          <div class="chrome-field">
            <color-editable-input
              [style]="{ input: input, label: label }"
              label="g"
              [value]="rgb.g"
              (onChange)="handleChange($event)"
            ></color-editable-input>
          </div>
          <div class="chrome-field">
            <color-editable-input
              [style]="{ input: input, label: label }"
              label="b"
              [value]="rgb.b"
              (onChange)="handleChange($event)"
            ></color-editable-input>
          </div>
          <div class="chrome-field">
            <color-editable-input
              *ngIf="!disableAlpha"
              [style]="{ input: input, label: label }"
              label="a"
              [value]="rgb.a"
              [arrowOffset]="0.01"
              (onChange)="handleChange($event)"
            ></color-editable-input>
          </div>
        </ng-template>
        <ng-template [ngIf]="view === 'hsl'">
          <div class="chrome-field">
            <color-editable-input
              [style]="{ input: input, label: label }"
              label="h"
              [value]="round(hsl.h)"
              (onChange)="handleChange($event)"
            ></color-editable-input>
          </div>
          <div class="chrome-field">
            <color-editable-input
              [style]="{ input: input, label: label }"
              label="s"
              [value]="round(hsl.s * 100) + '%'"
              (onChange)="handleChange($event)"
            ></color-editable-input>
          </div>
          <div class="chrome-field">
            <color-editable-input
              [style]="{ input: input, label: label }"
              label="l"
              [value]="round(hsl.l * 100) + '%'"
              (onChange)="handleChange($event)"
            ></color-editable-input>
          </div>
          <div class="chrome-field">
            <color-editable-input
              *ngIf="!disableAlpha"
              [style]="{ input: input, label: label }"
              label="a"
              [value]="hsl.a"
              [arrowOffset]="0.01"
              (onChange)="handleChange($event)"
            ></color-editable-input>
          </div>
        </ng-template>
      </div>

      <div class="chrome-toggle">
        <div class="chrome-icon" (click)="toggleViews()" #icon>
          <svg class="chrome-toggle-svg" viewBox="0 0 24 24">
            <path
              #iconUp
              fill="#333"
              d="M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z"
            />
            <path
              #iconDown
              fill="#333"
              d="M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15Z"
            />
          </svg>
        </div>
      </div>
    </div>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                styles: [`
      .chrome-wrap {
        padding-top: 16px;
        display: flex;
      }
      .chrome-fields {
        flex: 1;
        display: flex;
        margin-left: -6px;
      }
      .chrome-field {
        padding-left: 6px;
        width: 100%;
      }
      .chrome-toggle {
        width: 32px;
        text-align: right;
        position: relative;
      }
      .chrome-icon {
        margin-right: -4px;
        margin-top: 12px;
        cursor: pointer;
        position: relative;
      }
      .chrome-toggle-svg {
        width: 24px;
        height: 24px;
        border: 1px transparent solid;
        border-radius: 5px;
      }
      .chrome-toggle-svg:hover {
        background: #eee;
      }
    `]
            },] }
];
ChromeFieldsComponent.propDecorators = {
    disableAlpha: [{ type: Input }],
    hsl: [{ type: Input }],
    rgb: [{ type: Input }],
    hex: [{ type: Input }],
    onChange: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hyb21lLWZpZWxkcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL2Nocm9tZS8iLCJzb3VyY2VzIjpbImNocm9tZS1maWVsZHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxVQUFVLEVBQWMsTUFBTSxXQUFXLENBQUM7QUFDbkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBcUo1QyxNQUFNLE9BQU8scUJBQXFCO0lBbkpsQztRQXdKWSxhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUM3QyxTQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ1YsVUFBSyxHQUEyQjtZQUM5QixRQUFRLEVBQUUsTUFBTTtZQUNoQixLQUFLLEVBQUUsTUFBTTtZQUNiLEtBQUssRUFBRSxNQUFNO1lBQ2IsWUFBWSxFQUFFLEtBQUs7WUFDbkIsTUFBTSxFQUFFLE1BQU07WUFDZCxTQUFTLEVBQUUseUJBQXlCO1lBQ3BDLE1BQU0sRUFBRSxNQUFNO1lBQ2QsWUFBWSxFQUFFLFFBQVE7U0FDdkIsQ0FBQztRQUNGLFVBQUssR0FBMkI7WUFDOUIsZ0JBQWdCLEVBQUUsV0FBVztZQUM3QixRQUFRLEVBQUUsTUFBTTtZQUNoQixhQUFhLEVBQUUsTUFBTTtZQUNyQixLQUFLLEVBQUUsU0FBUztZQUNoQixZQUFZLEVBQUUsUUFBUTtZQUN0QixPQUFPLEVBQUUsT0FBTztZQUNoQixTQUFTLEVBQUUsTUFBTTtTQUNsQixDQUFDO0lBZ0ZKLENBQUM7SUE5RUMsUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssS0FBSyxFQUFFO1lBQzNDLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1NBQ25CO2FBQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLEtBQUssSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLEtBQUssRUFBRTtZQUNyRCxJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztTQUNuQjtJQUNILENBQUM7SUFDRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLEtBQUssRUFBRTtZQUN2QixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztTQUNuQjthQUFNLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxLQUFLLEVBQUU7WUFDOUIsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7U0FDbkI7YUFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssS0FBSyxFQUFFO1lBQzlCLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNwQixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQzthQUNuQjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQzthQUNuQjtTQUNGO0lBQ0gsQ0FBQztJQUNELEtBQUssQ0FBQyxLQUFLO1FBQ1QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFDRCxZQUFZLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFO1FBQzNCLElBQUksSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNaLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDeEIsTUFBTSxLQUFLLEdBQUcsSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUN0QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztvQkFDakIsSUFBSSxFQUFFO3dCQUNKLEdBQUcsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7d0JBQ3ZELE1BQU0sRUFBRSxLQUFLO3FCQUNkO29CQUNELE1BQU07aUJBQ1AsQ0FBQyxDQUFDO2FBQ0o7U0FDRjthQUFNLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU7WUFDckMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7Z0JBQ2pCLElBQUksRUFBRTtvQkFDSixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ3ZCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDdkIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUN2QixNQUFNLEVBQUUsS0FBSztpQkFDZDtnQkFDRCxNQUFNO2FBQ1AsQ0FBQyxDQUFDO1NBQ0o7YUFBTSxJQUFJLElBQUksQ0FBQyxDQUFDLEVBQUU7WUFDakIsSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDZCxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNaO2lCQUFNLElBQUksSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ3JCLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ1o7WUFFRCxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7Z0JBQ3JCLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ1o7WUFFRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztnQkFDakIsSUFBSSxFQUFFO29CQUNKLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ2IsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDYixDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNiLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRztvQkFDakMsTUFBTSxFQUFFLEtBQUs7aUJBQ2Q7Z0JBQ0QsTUFBTTthQUNQLENBQUMsQ0FBQztTQUNKO2FBQU0sSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsRUFBRTtZQUNyQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztnQkFDakIsSUFBSSxFQUFFO29CQUNKLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDdkIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUN2QixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ3ZCLE1BQU0sRUFBRSxLQUFLO2lCQUNkO2dCQUNELE1BQU07YUFDUCxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7OztZQTNQRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdHVDtnQkFzQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLG1CQUFtQixFQUFFLEtBQUs7eUJBckN4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQWtDQzthQUlKOzs7MkJBRUUsS0FBSztrQkFDTCxLQUFLO2tCQUNMLEtBQUs7a0JBQ0wsS0FBSzt1QkFDTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBpc1ZhbGlkSGV4LCBIU0xBLCBSR0JBIH0gZnJvbSAnbmd4LWNvbG9yJztcclxuaW1wb3J0IHsgVGlueUNvbG9yIH0gZnJvbSAnQGN0cmwvdGlueWNvbG9yJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY29sb3ItY2hyb21lLWZpZWxkcycsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXYgY2xhc3M9XCJjaHJvbWUtd3JhcFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2hyb21lLWZpZWxkc1wiPlxyXG4gICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdJZl09XCJ2aWV3ID09PSAnaGV4J1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNocm9tZS1maWVsZFwiPlxyXG4gICAgICAgICAgICA8Y29sb3ItZWRpdGFibGUtaW5wdXRcclxuICAgICAgICAgICAgICBbc3R5bGVdPVwieyBpbnB1dDogaW5wdXQsIGxhYmVsOiBsYWJlbCB9XCJcclxuICAgICAgICAgICAgICBsYWJlbD1cImhleFwiXHJcbiAgICAgICAgICAgICAgW3ZhbHVlXT1cImhleFwiXHJcbiAgICAgICAgICAgICAgKG9uQ2hhbmdlKT1cImhhbmRsZUNoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgICAgICAgPjwvY29sb3ItZWRpdGFibGUtaW5wdXQ+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdJZl09XCJ2aWV3ID09PSAncmdiJ1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNocm9tZS1maWVsZFwiPlxyXG4gICAgICAgICAgICA8Y29sb3ItZWRpdGFibGUtaW5wdXRcclxuICAgICAgICAgICAgICBbc3R5bGVdPVwieyBpbnB1dDogaW5wdXQsIGxhYmVsOiBsYWJlbCB9XCJcclxuICAgICAgICAgICAgICBsYWJlbD1cInJcIlxyXG4gICAgICAgICAgICAgIFt2YWx1ZV09XCJyZ2IuclwiXHJcbiAgICAgICAgICAgICAgKG9uQ2hhbmdlKT1cImhhbmRsZUNoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgICAgICAgPjwvY29sb3ItZWRpdGFibGUtaW5wdXQ+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaHJvbWUtZmllbGRcIj5cclxuICAgICAgICAgICAgPGNvbG9yLWVkaXRhYmxlLWlucHV0XHJcbiAgICAgICAgICAgICAgW3N0eWxlXT1cInsgaW5wdXQ6IGlucHV0LCBsYWJlbDogbGFiZWwgfVwiXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJnXCJcclxuICAgICAgICAgICAgICBbdmFsdWVdPVwicmdiLmdcIlxyXG4gICAgICAgICAgICAgIChvbkNoYW5nZSk9XCJoYW5kbGVDaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgID48L2NvbG9yLWVkaXRhYmxlLWlucHV0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hyb21lLWZpZWxkXCI+XHJcbiAgICAgICAgICAgIDxjb2xvci1lZGl0YWJsZS1pbnB1dFxyXG4gICAgICAgICAgICAgIFtzdHlsZV09XCJ7IGlucHV0OiBpbnB1dCwgbGFiZWw6IGxhYmVsIH1cIlxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiYlwiXHJcbiAgICAgICAgICAgICAgW3ZhbHVlXT1cInJnYi5iXCJcclxuICAgICAgICAgICAgICAob25DaGFuZ2UpPVwiaGFuZGxlQ2hhbmdlKCRldmVudClcIlxyXG4gICAgICAgICAgICA+PC9jb2xvci1lZGl0YWJsZS1pbnB1dD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNocm9tZS1maWVsZFwiPlxyXG4gICAgICAgICAgICA8Y29sb3ItZWRpdGFibGUtaW5wdXRcclxuICAgICAgICAgICAgICAqbmdJZj1cIiFkaXNhYmxlQWxwaGFcIlxyXG4gICAgICAgICAgICAgIFtzdHlsZV09XCJ7IGlucHV0OiBpbnB1dCwgbGFiZWw6IGxhYmVsIH1cIlxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiYVwiXHJcbiAgICAgICAgICAgICAgW3ZhbHVlXT1cInJnYi5hXCJcclxuICAgICAgICAgICAgICBbYXJyb3dPZmZzZXRdPVwiMC4wMVwiXHJcbiAgICAgICAgICAgICAgKG9uQ2hhbmdlKT1cImhhbmRsZUNoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgICAgICAgPjwvY29sb3ItZWRpdGFibGUtaW5wdXQ+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdJZl09XCJ2aWV3ID09PSAnaHNsJ1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNocm9tZS1maWVsZFwiPlxyXG4gICAgICAgICAgICA8Y29sb3ItZWRpdGFibGUtaW5wdXRcclxuICAgICAgICAgICAgICBbc3R5bGVdPVwieyBpbnB1dDogaW5wdXQsIGxhYmVsOiBsYWJlbCB9XCJcclxuICAgICAgICAgICAgICBsYWJlbD1cImhcIlxyXG4gICAgICAgICAgICAgIFt2YWx1ZV09XCJyb3VuZChoc2wuaClcIlxyXG4gICAgICAgICAgICAgIChvbkNoYW5nZSk9XCJoYW5kbGVDaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgID48L2NvbG9yLWVkaXRhYmxlLWlucHV0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hyb21lLWZpZWxkXCI+XHJcbiAgICAgICAgICAgIDxjb2xvci1lZGl0YWJsZS1pbnB1dFxyXG4gICAgICAgICAgICAgIFtzdHlsZV09XCJ7IGlucHV0OiBpbnB1dCwgbGFiZWw6IGxhYmVsIH1cIlxyXG4gICAgICAgICAgICAgIGxhYmVsPVwic1wiXHJcbiAgICAgICAgICAgICAgW3ZhbHVlXT1cInJvdW5kKGhzbC5zICogMTAwKSArICclJ1wiXHJcbiAgICAgICAgICAgICAgKG9uQ2hhbmdlKT1cImhhbmRsZUNoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgICAgICAgPjwvY29sb3ItZWRpdGFibGUtaW5wdXQ+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaHJvbWUtZmllbGRcIj5cclxuICAgICAgICAgICAgPGNvbG9yLWVkaXRhYmxlLWlucHV0XHJcbiAgICAgICAgICAgICAgW3N0eWxlXT1cInsgaW5wdXQ6IGlucHV0LCBsYWJlbDogbGFiZWwgfVwiXHJcbiAgICAgICAgICAgICAgbGFiZWw9XCJsXCJcclxuICAgICAgICAgICAgICBbdmFsdWVdPVwicm91bmQoaHNsLmwgKiAxMDApICsgJyUnXCJcclxuICAgICAgICAgICAgICAob25DaGFuZ2UpPVwiaGFuZGxlQ2hhbmdlKCRldmVudClcIlxyXG4gICAgICAgICAgICA+PC9jb2xvci1lZGl0YWJsZS1pbnB1dD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNocm9tZS1maWVsZFwiPlxyXG4gICAgICAgICAgICA8Y29sb3ItZWRpdGFibGUtaW5wdXRcclxuICAgICAgICAgICAgICAqbmdJZj1cIiFkaXNhYmxlQWxwaGFcIlxyXG4gICAgICAgICAgICAgIFtzdHlsZV09XCJ7IGlucHV0OiBpbnB1dCwgbGFiZWw6IGxhYmVsIH1cIlxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiYVwiXHJcbiAgICAgICAgICAgICAgW3ZhbHVlXT1cImhzbC5hXCJcclxuICAgICAgICAgICAgICBbYXJyb3dPZmZzZXRdPVwiMC4wMVwiXHJcbiAgICAgICAgICAgICAgKG9uQ2hhbmdlKT1cImhhbmRsZUNoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgICAgICAgPjwvY29sb3ItZWRpdGFibGUtaW5wdXQ+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjaHJvbWUtdG9nZ2xlXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNocm9tZS1pY29uXCIgKGNsaWNrKT1cInRvZ2dsZVZpZXdzKClcIiAjaWNvbj5cclxuICAgICAgICAgIDxzdmcgY2xhc3M9XCJjaHJvbWUtdG9nZ2xlLXN2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAjaWNvblVwXHJcbiAgICAgICAgICAgICAgZmlsbD1cIiMzMzNcIlxyXG4gICAgICAgICAgICAgIGQ9XCJNMTIsNS44M0wxNS4xNyw5TDE2LjU4LDcuNTlMMTIsM0w3LjQxLDcuNTlMOC44Myw5TDEyLDUuODNaXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAjaWNvbkRvd25cclxuICAgICAgICAgICAgICBmaWxsPVwiIzMzM1wiXHJcbiAgICAgICAgICAgICAgZD1cIk0xMiwxOC4xN0w4LjgzLDE1TDcuNDIsMTYuNDFMMTIsMjFMMTYuNTksMTYuNDFMMTUuMTcsMTVaXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIGAsXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAgIC5jaHJvbWUtd3JhcCB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDE2cHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgfVxyXG4gICAgICAuY2hyb21lLWZpZWxkcyB7XHJcbiAgICAgICAgZmxleDogMTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtNnB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5jaHJvbWUtZmllbGQge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNnB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICB9XHJcbiAgICAgIC5jaHJvbWUtdG9nZ2xlIHtcclxuICAgICAgICB3aWR0aDogMzJweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIH1cclxuICAgICAgLmNocm9tZS1pY29uIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IC00cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTJweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB9XHJcbiAgICAgIC5jaHJvbWUtdG9nZ2xlLXN2ZyB7XHJcbiAgICAgICAgd2lkdGg6IDI0cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHRyYW5zcGFyZW50IHNvbGlkO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgfVxyXG4gICAgICAuY2hyb21lLXRvZ2dsZS1zdmc6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNlZWU7XHJcbiAgICAgIH1cclxuICAgIGAsXHJcbiAgXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxufSlcclxuZXhwb3J0IGNsYXNzIENocm9tZUZpZWxkc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgZGlzYWJsZUFscGhhITogYm9vbGVhbjtcclxuICBASW5wdXQoKSBoc2whOiBIU0xBO1xyXG4gIEBJbnB1dCgpIHJnYiE6IFJHQkE7XHJcbiAgQElucHV0KCkgaGV4ITogc3RyaW5nO1xyXG4gIEBPdXRwdXQoKSBvbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIHZpZXcgPSAnJztcclxuICBpbnB1dDogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcclxuICAgIGZvbnRTaXplOiAnMTFweCcsXHJcbiAgICBjb2xvcjogJyMzMzMnLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGJvcmRlclJhZGl1czogJzJweCcsXHJcbiAgICBib3JkZXI6ICdub25lJyxcclxuICAgIGJveFNoYWRvdzogJ2luc2V0IDAgMCAwIDFweCAjZGFkYWRhJyxcclxuICAgIGhlaWdodDogJzIxcHgnLFxyXG4gICAgJ3RleHQtYWxpZ24nOiAnY2VudGVyJyxcclxuICB9O1xyXG4gIGxhYmVsOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xyXG4gICAgJ3RleHQtdHJhbnNmb3JtJzogJ3VwcGVyY2FzZScsXHJcbiAgICBmb250U2l6ZTogJzExcHgnLFxyXG4gICAgJ2xpbmUtaGVpZ2h0JzogJzExcHgnLFxyXG4gICAgY29sb3I6ICcjOTY5Njk2JyxcclxuICAgICd0ZXh0LWFsaWduJzogJ2NlbnRlcicsXHJcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgbWFyZ2luVG9wOiAnMTJweCcsXHJcbiAgfTtcclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBpZiAodGhpcy5oc2wuYSA9PT0gMSAmJiB0aGlzLnZpZXcgIT09ICdoZXgnKSB7XHJcbiAgICAgIHRoaXMudmlldyA9ICdoZXgnO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLnZpZXcgIT09ICdyZ2InICYmIHRoaXMudmlldyAhPT0gJ2hzbCcpIHtcclxuICAgICAgdGhpcy52aWV3ID0gJ3JnYic7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHRvZ2dsZVZpZXdzKCkge1xyXG4gICAgaWYgKHRoaXMudmlldyA9PT0gJ2hleCcpIHtcclxuICAgICAgdGhpcy52aWV3ID0gJ3JnYic7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMudmlldyA9PT0gJ3JnYicpIHtcclxuICAgICAgdGhpcy52aWV3ID0gJ2hzbCc7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMudmlldyA9PT0gJ2hzbCcpIHtcclxuICAgICAgaWYgKHRoaXMuaHNsLmEgPT09IDEpIHtcclxuICAgICAgICB0aGlzLnZpZXcgPSAnaGV4JztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnZpZXcgPSAncmdiJztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICByb3VuZCh2YWx1ZSkge1xyXG4gICAgcmV0dXJuIE1hdGgucm91bmQodmFsdWUpO1xyXG4gIH1cclxuICBoYW5kbGVDaGFuZ2UoeyBkYXRhLCAkZXZlbnQgfSkge1xyXG4gICAgaWYgKGRhdGEuaGV4KSB7XHJcbiAgICAgIGlmIChpc1ZhbGlkSGV4KGRhdGEuaGV4KSkge1xyXG4gICAgICAgIGNvbnN0IGNvbG9yID0gbmV3IFRpbnlDb2xvcihkYXRhLmhleCk7XHJcbiAgICAgICAgdGhpcy5vbkNoYW5nZS5lbWl0KHtcclxuICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgaGV4OiB0aGlzLmRpc2FibGVBbHBoYSA/IGNvbG9yLnRvSGV4KCkgOiBjb2xvci50b0hleDgoKSxcclxuICAgICAgICAgICAgc291cmNlOiAnaGV4JyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICAkZXZlbnQsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoZGF0YS5yIHx8IGRhdGEuZyB8fCBkYXRhLmIpIHtcclxuICAgICAgdGhpcy5vbkNoYW5nZS5lbWl0KHtcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICByOiBkYXRhLnIgfHwgdGhpcy5yZ2IucixcclxuICAgICAgICAgIGc6IGRhdGEuZyB8fCB0aGlzLnJnYi5nLFxyXG4gICAgICAgICAgYjogZGF0YS5iIHx8IHRoaXMucmdiLmIsXHJcbiAgICAgICAgICBzb3VyY2U6ICdyZ2InLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJGV2ZW50LFxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSBpZiAoZGF0YS5hKSB7XHJcbiAgICAgIGlmIChkYXRhLmEgPCAwKSB7XHJcbiAgICAgICAgZGF0YS5hID0gMDtcclxuICAgICAgfSBlbHNlIGlmIChkYXRhLmEgPiAxKSB7XHJcbiAgICAgICAgZGF0YS5hID0gMTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRoaXMuZGlzYWJsZUFscGhhKSB7XHJcbiAgICAgICAgZGF0YS5hID0gMTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5vbkNoYW5nZS5lbWl0KHtcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBoOiB0aGlzLmhzbC5oLFxyXG4gICAgICAgICAgczogdGhpcy5oc2wucyxcclxuICAgICAgICAgIGw6IHRoaXMuaHNsLmwsXHJcbiAgICAgICAgICBhOiBNYXRoLnJvdW5kKGRhdGEuYSAqIDEwMCkgLyAxMDAsXHJcbiAgICAgICAgICBzb3VyY2U6ICdyZ2InLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJGV2ZW50LFxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSBpZiAoZGF0YS5oIHx8IGRhdGEucyB8fCBkYXRhLmwpIHtcclxuICAgICAgdGhpcy5vbkNoYW5nZS5lbWl0KHtcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBoOiBkYXRhLmggfHwgdGhpcy5oc2wuaCxcclxuICAgICAgICAgIHM6IGRhdGEucyB8fCB0aGlzLmhzbC5zLFxyXG4gICAgICAgICAgbDogZGF0YS5sIHx8IHRoaXMuaHNsLmwsXHJcbiAgICAgICAgICBzb3VyY2U6ICdoc2wnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJGV2ZW50LFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19