import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, NgModule, } from '@angular/core';
import { AlphaModule, CheckboardModule, ColorWrap, EditableInputModule, HueModule, SaturationModule, } from 'ngx-color';
import { ChromeFieldsComponent } from './chrome-fields.component';
export class ChromeComponent extends ColorWrap {
    constructor() {
        super();
        /** Remove alpha slider and options from picker */
        this.disableAlpha = false;
        this.circle = {
            width: '12px',
            height: '12px',
            borderRadius: '6px',
            boxShadow: 'rgb(255, 255, 255) 0px 0px 0px 1px inset',
            transform: 'translate(-6px, -8px)',
        };
        this.pointer = {
            width: '12px',
            height: '12px',
            borderRadius: '6px',
            transform: 'translate(-6px, -2px)',
            backgroundColor: 'rgb(248, 248, 248)',
            boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.37)',
        };
    }
    afterValidChange() {
        const alpha = this.disableAlpha ? 1 : this.rgb.a;
        this.activeBackground = `rgba(${this.rgb.r}, ${this.rgb.g}, ${this.rgb.b}, ${alpha})`;
    }
    handleValueChange({ data, $event }) {
        this.handleChange(data, $event);
    }
}
ChromeComponent.decorators = [
    { type: Component, args: [{
                selector: 'color-chrome',
                template: `
  <div class="chrome-picker {{ className }}">
    <div class="saturation">
      <color-saturation
        [hsl]="hsl"
        [hsv]="hsv"
        [circle]="circle"
        (onChange)="handleValueChange($event)"
      ></color-saturation>
    </div>
    <div class="chrome-body">
      <div class="chrome-controls">
        <div class="chrome-color">
          <div class="chrome-swatch">
            <div class="chrome-active"
              [style.background]="activeBackground"
            ></div>
            <color-checkboard></color-checkboard>
          </div>
        </div>
        <div class="chrome-toggles">
          <div class="chrome-hue">
            <color-hue
              [radius]="2"
              [hsl]="hsl"
              [pointer]="pointer"
              (onChange)="handleValueChange($event)"
            ></color-hue>
          </div>
          <div class="chrome-alpha" *ngIf="!disableAlpha">
            <color-alpha
              [radius]="2" [rgb]="rgb" [hsl]="hsl"
              [pointer]="pointer" (onChange)="handleValueChange($event)"
            ></color-alpha>
          </div>
        </div>
      </div>
      <color-chrome-fields
        [rgb]="rgb" [hsl]="hsl" [hex]="hex"
        [disableAlpha]="disableAlpha"
        (onChange)="handleValueChange($event)"
      ></color-chrome-fields>
    </div>
  </div>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                styles: [`
      .chrome-picker {
        background: #fff;
        border-radius: 2px;
        box-shadow: 0 0 2px rgba(0, 0, 0, 0.3), 0 4px 8px rgba(0, 0, 0, 0.3);
        box-sizing: initial;
        width: 225px;
        font-family: 'Menlo';
      }
      .chrome-controls {
        display: flex;
      }
      .chrome-color {
        width: 42px;
      }
      .chrome-body {
        padding: 14px 14px 12px;
      }
      .chrome-active {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        border-radius: 20px;
        box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
        z-index: 2;
      }
      .chrome-swatch {
        width: 28px;
        height: 28px;
        border-radius: 15px;
        position: relative;
        overflow: hidden;
      }
      .saturation {
        width: 100%;
        padding-bottom: 55%;
        position: relative;
        border-radius: 2px 2px 0 0;
        overflow: hidden;
      }
      .chrome-toggles {
        flex: 1;
      }
      .chrome-hue {
        height: 10px;
        position: relative;
        margin-bottom: 8px;
      }
      .chrome-alpha {
        height: 10px;
        position: relative;
      }
    `]
            },] }
];
ChromeComponent.ctorParameters = () => [];
ChromeComponent.propDecorators = {
    disableAlpha: [{ type: Input }]
};
export class ColorChromeModule {
}
ColorChromeModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ChromeComponent, ChromeFieldsComponent],
                exports: [ChromeComponent, ChromeFieldsComponent],
                imports: [
                    CommonModule,
                    AlphaModule,
                    CheckboardModule,
                    EditableInputModule,
                    HueModule,
                    SaturationModule,
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hyb21lLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvY2hyb21lLyIsInNvdXJjZXMiOlsiY2hyb21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsS0FBSyxFQUNMLFFBQVEsR0FDVCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQ0wsV0FBVyxFQUNYLGdCQUFnQixFQUNoQixTQUFTLEVBQ1QsbUJBQW1CLEVBQ25CLFNBQVMsRUFDVCxnQkFBZ0IsR0FDakIsTUFBTSxXQUFXLENBQUM7QUFDbkIsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUE2R2xFLE1BQU0sT0FBTyxlQUFnQixTQUFRLFNBQVM7SUFvQjVDO1FBQ0UsS0FBSyxFQUFFLENBQUM7UUFwQlYsa0RBQWtEO1FBQ3pDLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBQzlCLFdBQU0sR0FBMkI7WUFDL0IsS0FBSyxFQUFFLE1BQU07WUFDYixNQUFNLEVBQUUsTUFBTTtZQUNkLFlBQVksRUFBRSxLQUFLO1lBQ25CLFNBQVMsRUFBRSwwQ0FBMEM7WUFDckQsU0FBUyxFQUFFLHVCQUF1QjtTQUNuQyxDQUFDO1FBQ0YsWUFBTyxHQUEyQjtZQUNoQyxLQUFLLEVBQUUsTUFBTTtZQUNiLE1BQU0sRUFBRSxNQUFNO1lBQ2QsWUFBWSxFQUFFLEtBQUs7WUFDbkIsU0FBUyxFQUFFLHVCQUF1QjtZQUNsQyxlQUFlLEVBQUUsb0JBQW9CO1lBQ3JDLFNBQVMsRUFBRSxpQ0FBaUM7U0FDN0MsQ0FBQztJQUtGLENBQUM7SUFFRCxnQkFBZ0I7UUFDZCxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxRQUFRLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEtBQUssR0FBRyxDQUFDO0lBQ3hGLENBQUM7SUFDRCxpQkFBaUIsQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUU7UUFDaEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7O1lBeklGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTRDVDtnQkEwREQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLG1CQUFtQixFQUFFLEtBQUs7eUJBekR4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBc0RDO2FBSUo7Ozs7MkJBR0UsS0FBSzs7QUEyQ1IsTUFBTSxPQUFPLGlCQUFpQjs7O1lBWjdCLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxlQUFlLEVBQUUscUJBQXFCLENBQUM7Z0JBQ3RELE9BQU8sRUFBRSxDQUFDLGVBQWUsRUFBRSxxQkFBcUIsQ0FBQztnQkFDakQsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osV0FBVztvQkFDWCxnQkFBZ0I7b0JBQ2hCLG1CQUFtQjtvQkFDbkIsU0FBUztvQkFDVCxnQkFBZ0I7aUJBQ2pCO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBJbnB1dCxcclxuICBOZ01vZHVsZSxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7XHJcbiAgQWxwaGFNb2R1bGUsXHJcbiAgQ2hlY2tib2FyZE1vZHVsZSxcclxuICBDb2xvcldyYXAsXHJcbiAgRWRpdGFibGVJbnB1dE1vZHVsZSxcclxuICBIdWVNb2R1bGUsXHJcbiAgU2F0dXJhdGlvbk1vZHVsZSxcclxufSBmcm9tICduZ3gtY29sb3InO1xyXG5pbXBvcnQgeyBDaHJvbWVGaWVsZHNDb21wb25lbnQgfSBmcm9tICcuL2Nocm9tZS1maWVsZHMuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY29sb3ItY2hyb21lJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gIDxkaXYgY2xhc3M9XCJjaHJvbWUtcGlja2VyIHt7IGNsYXNzTmFtZSB9fVwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInNhdHVyYXRpb25cIj5cclxuICAgICAgPGNvbG9yLXNhdHVyYXRpb25cclxuICAgICAgICBbaHNsXT1cImhzbFwiXHJcbiAgICAgICAgW2hzdl09XCJoc3ZcIlxyXG4gICAgICAgIFtjaXJjbGVdPVwiY2lyY2xlXCJcclxuICAgICAgICAob25DaGFuZ2UpPVwiaGFuZGxlVmFsdWVDaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAgID48L2NvbG9yLXNhdHVyYXRpb24+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJjaHJvbWUtYm9keVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2hyb21lLWNvbnRyb2xzXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNocm9tZS1jb2xvclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNocm9tZS1zd2F0Y2hcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNocm9tZS1hY3RpdmVcIlxyXG4gICAgICAgICAgICAgIFtzdHlsZS5iYWNrZ3JvdW5kXT1cImFjdGl2ZUJhY2tncm91bmRcIlxyXG4gICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICAgIDxjb2xvci1jaGVja2JvYXJkPjwvY29sb3ItY2hlY2tib2FyZD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaHJvbWUtdG9nZ2xlc1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNocm9tZS1odWVcIj5cclxuICAgICAgICAgICAgPGNvbG9yLWh1ZVxyXG4gICAgICAgICAgICAgIFtyYWRpdXNdPVwiMlwiXHJcbiAgICAgICAgICAgICAgW2hzbF09XCJoc2xcIlxyXG4gICAgICAgICAgICAgIFtwb2ludGVyXT1cInBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgIChvbkNoYW5nZSk9XCJoYW5kbGVWYWx1ZUNoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgICAgICAgPjwvY29sb3ItaHVlPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hyb21lLWFscGhhXCIgKm5nSWY9XCIhZGlzYWJsZUFscGhhXCI+XHJcbiAgICAgICAgICAgIDxjb2xvci1hbHBoYVxyXG4gICAgICAgICAgICAgIFtyYWRpdXNdPVwiMlwiIFtyZ2JdPVwicmdiXCIgW2hzbF09XCJoc2xcIlxyXG4gICAgICAgICAgICAgIFtwb2ludGVyXT1cInBvaW50ZXJcIiAob25DaGFuZ2UpPVwiaGFuZGxlVmFsdWVDaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgID48L2NvbG9yLWFscGhhPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8Y29sb3ItY2hyb21lLWZpZWxkc1xyXG4gICAgICAgIFtyZ2JdPVwicmdiXCIgW2hzbF09XCJoc2xcIiBbaGV4XT1cImhleFwiXHJcbiAgICAgICAgW2Rpc2FibGVBbHBoYV09XCJkaXNhYmxlQWxwaGFcIlxyXG4gICAgICAgIChvbkNoYW5nZSk9XCJoYW5kbGVWYWx1ZUNoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgPjwvY29sb3ItY2hyb21lLWZpZWxkcz5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIGAsXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAgIC5jaHJvbWUtcGlja2VyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDAgMnB4IHJnYmEoMCwgMCwgMCwgMC4zKSwgMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgICAgICBib3gtc2l6aW5nOiBpbml0aWFsO1xyXG4gICAgICAgIHdpZHRoOiAyMjVweDtcclxuICAgICAgICBmb250LWZhbWlseTogJ01lbmxvJztcclxuICAgICAgfVxyXG4gICAgICAuY2hyb21lLWNvbnRyb2xzIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICB9XHJcbiAgICAgIC5jaHJvbWUtY29sb3Ige1xyXG4gICAgICAgIHdpZHRoOiA0MnB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5jaHJvbWUtYm9keSB7XHJcbiAgICAgICAgcGFkZGluZzogMTRweCAxNHB4IDEycHg7XHJcbiAgICAgIH1cclxuICAgICAgLmNocm9tZS1hY3RpdmUge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgIH1cclxuICAgICAgLmNocm9tZS1zd2F0Y2gge1xyXG4gICAgICAgIHdpZHRoOiAyOHB4O1xyXG4gICAgICAgIGhlaWdodDogMjhweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICB9XHJcbiAgICAgIC5zYXR1cmF0aW9uIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNTUlO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAycHggMnB4IDAgMDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICB9XHJcbiAgICAgIC5jaHJvbWUtdG9nZ2xlcyB7XHJcbiAgICAgICAgZmxleDogMTtcclxuICAgICAgfVxyXG4gICAgICAuY2hyb21lLWh1ZSB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICAgIH1cclxuICAgICAgLmNocm9tZS1hbHBoYSB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgfVxyXG4gICAgYCxcclxuICBdLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2hyb21lQ29tcG9uZW50IGV4dGVuZHMgQ29sb3JXcmFwIHtcclxuICAvKiogUmVtb3ZlIGFscGhhIHNsaWRlciBhbmQgb3B0aW9ucyBmcm9tIHBpY2tlciAqL1xyXG4gIEBJbnB1dCgpIGRpc2FibGVBbHBoYSA9IGZhbHNlO1xyXG4gIGNpcmNsZTogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcclxuICAgIHdpZHRoOiAnMTJweCcsXHJcbiAgICBoZWlnaHQ6ICcxMnB4JyxcclxuICAgIGJvcmRlclJhZGl1czogJzZweCcsXHJcbiAgICBib3hTaGFkb3c6ICdyZ2IoMjU1LCAyNTUsIDI1NSkgMHB4IDBweCAwcHggMXB4IGluc2V0JyxcclxuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNnB4LCAtOHB4KScsXHJcbiAgfTtcclxuICBwb2ludGVyOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xyXG4gICAgd2lkdGg6ICcxMnB4JyxcclxuICAgIGhlaWdodDogJzEycHgnLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAnNnB4JyxcclxuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNnB4LCAtMnB4KScsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2IoMjQ4LCAyNDgsIDI0OCknLFxyXG4gICAgYm94U2hhZG93OiAnMCAxcHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjM3KScsXHJcbiAgfTtcclxuICBhY3RpdmVCYWNrZ3JvdW5kITogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBhZnRlclZhbGlkQ2hhbmdlKCkge1xyXG4gICAgY29uc3QgYWxwaGEgPSB0aGlzLmRpc2FibGVBbHBoYSA/IDEgOiB0aGlzLnJnYi5hO1xyXG4gICAgdGhpcy5hY3RpdmVCYWNrZ3JvdW5kID0gYHJnYmEoJHt0aGlzLnJnYi5yfSwgJHt0aGlzLnJnYi5nfSwgJHt0aGlzLnJnYi5ifSwgJHthbHBoYX0pYDtcclxuICB9XHJcbiAgaGFuZGxlVmFsdWVDaGFuZ2UoeyBkYXRhLCAkZXZlbnQgfSkge1xyXG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UoZGF0YSwgJGV2ZW50KTtcclxuICB9XHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbQ2hyb21lQ29tcG9uZW50LCBDaHJvbWVGaWVsZHNDb21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFtDaHJvbWVDb21wb25lbnQsIENocm9tZUZpZWxkc0NvbXBvbmVudF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlLFxyXG4gICAgQWxwaGFNb2R1bGUsXHJcbiAgICBDaGVja2JvYXJkTW9kdWxlLFxyXG4gICAgRWRpdGFibGVJbnB1dE1vZHVsZSxcclxuICAgIEh1ZU1vZHVsZSxcclxuICAgIFNhdHVyYXRpb25Nb2R1bGUsXHJcbiAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbG9yQ2hyb21lTW9kdWxlIHt9XHJcbiJdfQ==