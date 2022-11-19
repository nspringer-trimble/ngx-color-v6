import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, NgModule, } from '@angular/core';
import { CheckboardModule, ColorWrap, EditableInputModule, SwatchModule, getContrastingColor, isValidHex, } from 'ngx-color';
import { BlockSwatchesComponent } from './block-swatches.component';
export class BlockComponent extends ColorWrap {
    constructor() {
        super();
        /** Pixel value for picker width */
        this.width = 170;
        /** Color squares to display */
        this.colors = [
            '#D9E3F0',
            '#F47373',
            '#697689',
            '#37D67A',
            '#2CCCE4',
            '#555555',
            '#dce775',
            '#ff8a65',
            '#ba68c8',
        ];
        this.triangle = 'top';
        this.input = {
            width: '100%',
            fontSize: '12px',
            color: '#666',
            border: '0px',
            outline: 'none',
            height: '22px',
            boxShadow: 'inset 0 0 0 1px #ddd',
            borderRadius: '4px',
            padding: '0 7px',
            boxSizing: 'border-box',
        };
        this.wrap = {
            position: 'relative',
            width: '100%',
        };
        this.disableAlpha = true;
    }
    handleValueChange({ data, $event }) {
        this.handleBlockChange({ hex: data, $event });
    }
    getContrastingColor(hex) {
        return getContrastingColor(hex);
    }
    handleBlockChange({ hex, $event }) {
        if (isValidHex(hex)) {
            // this.hex = hex;
            this.handleChange({
                hex,
                source: 'hex',
            }, $event);
        }
    }
}
BlockComponent.decorators = [
    { type: Component, args: [{
                selector: 'color-block',
                template: `
  <div class="block-card block-picker {{ className }}">
    <div class="block-triangle" *ngIf="triangle !== 'hide'"
      [style.border-color]="'transparent transparent ' + this.hex + ' transparent'"
    ></div>

    <div class="block-head" [style.background]="hex">
      <color-checkboard *ngIf="hex === 'transparent'"
        borderRadius="6px 6px 0 0"
      ></color-checkboard>
      <div class="block-label" [style.color]="getContrastingColor(hex)">
        {{ hex }}
      </div>
    </div>

    <div class="block-body">
      <color-block-swatches [colors]="colors"
        (onClick)="handleBlockChange($event)"
        (onSwatchHover)="onSwatchHover.emit($event)"
      ></color-block-swatches>
      <color-editable-input [value]="hex"
        (onChange)="handleValueChange($event)"
        [style]="{input: input, wrap: wrap}"
      ></color-editable-input>
    </div>
  </div>
  `,
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [`
    .block-card {
      background: #fff;
      border-radius: 6px;
      box-shadow: 0 1px rgba(0, 0, 0, .1);
      position: relative;
    }
    .block-head {
      align-items: center;
      border-radius: 6px 6px 0 0;
      display: flex;
      height: 110px;
      justify-content: center;
      position: relative;
    }
    .block-body {
      padding: 10px;
    }
    .block-label {
      font-size: 18px;
      position: relative;
    }
    .block-triangle {
      border-style: solid;
      border-width: 0 10px 10px 10px;
      height: 0;
      left: 50%;
      margin-left: -10px;
      position: absolute;
      top: -10px;
      width: 0;
    }
  `]
            },] }
];
BlockComponent.ctorParameters = () => [];
BlockComponent.propDecorators = {
    width: [{ type: Input }],
    colors: [{ type: Input }],
    triangle: [{ type: Input }]
};
export class ColorBlockModule {
}
ColorBlockModule.decorators = [
    { type: NgModule, args: [{
                declarations: [BlockComponent, BlockSwatchesComponent],
                exports: [BlockComponent, BlockSwatchesComponent],
                imports: [CommonModule, CheckboardModule, SwatchModule, EditableInputModule],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvY2suY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9ibG9jay8iLCJzb3VyY2VzIjpbImJsb2NrLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsS0FBSyxFQUNMLFFBQVEsR0FDVCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQ0wsZ0JBQWdCLEVBQ2hCLFNBQVMsRUFDVCxtQkFBbUIsRUFDbkIsWUFBWSxFQUNaLG1CQUFtQixFQUNuQixVQUFVLEdBQ1gsTUFBTSxXQUFXLENBQUM7QUFDbkIsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFxRXBFLE1BQU0sT0FBTyxjQUFlLFNBQVEsU0FBUztJQWtDM0M7UUFDRSxLQUFLLEVBQUUsQ0FBQztRQWxDVixtQ0FBbUM7UUFDMUIsVUFBSyxHQUFvQixHQUFHLENBQUM7UUFDdEMsK0JBQStCO1FBQ3RCLFdBQU0sR0FBRztZQUNoQixTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7U0FDVixDQUFDO1FBQ08sYUFBUSxHQUFtQixLQUFLLENBQUM7UUFDMUMsVUFBSyxHQUE0QjtZQUMvQixLQUFLLEVBQUUsTUFBTTtZQUNiLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLEtBQUssRUFBRSxNQUFNO1lBQ2IsTUFBTSxFQUFFLEtBQUs7WUFDYixPQUFPLEVBQUUsTUFBTTtZQUNmLE1BQU0sRUFBRSxNQUFNO1lBQ2QsU0FBUyxFQUFFLHNCQUFzQjtZQUNqQyxZQUFZLEVBQUUsS0FBSztZQUNuQixPQUFPLEVBQUUsT0FBTztZQUNoQixTQUFTLEVBQUUsWUFBWTtTQUN4QixDQUFDO1FBQ0YsU0FBSSxHQUE0QjtZQUM5QixRQUFRLEVBQUUsVUFBVTtZQUNwQixLQUFLLEVBQUUsTUFBTTtTQUNkLENBQUM7UUFDRixpQkFBWSxHQUFHLElBQUksQ0FBQztJQUlwQixDQUFDO0lBRUQsaUJBQWlCLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFO1FBQ2hDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBQ0QsbUJBQW1CLENBQUMsR0FBRztRQUNyQixPQUFPLG1CQUFtQixDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFDRCxpQkFBaUIsQ0FBQyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUU7UUFDL0IsSUFBSSxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDbkIsa0JBQWtCO1lBQ2xCLElBQUksQ0FBQyxZQUFZLENBQ2Y7Z0JBQ0UsR0FBRztnQkFDSCxNQUFNLEVBQUUsS0FBSzthQUNkLEVBQ0QsTUFBTSxDQUNQLENBQUM7U0FDSDtJQUNILENBQUM7OztZQTFIRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0EwQlQ7Z0JBb0NELG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO3lCQW5DN0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBZ0NEO2FBSUY7Ozs7b0JBR0UsS0FBSztxQkFFTCxLQUFLO3VCQVdMLEtBQUs7O0FBZ0RSLE1BQU0sT0FBTyxnQkFBZ0I7OztZQUw1QixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsY0FBYyxFQUFFLHNCQUFzQixDQUFDO2dCQUN0RCxPQUFPLEVBQUUsQ0FBQyxjQUFjLEVBQUUsc0JBQXNCLENBQUM7Z0JBQ2pELE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxnQkFBZ0IsRUFBRSxZQUFZLEVBQUUsbUJBQW1CLENBQUM7YUFDN0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBJbnB1dCxcclxuICBOZ01vZHVsZSxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7XHJcbiAgQ2hlY2tib2FyZE1vZHVsZSxcclxuICBDb2xvcldyYXAsXHJcbiAgRWRpdGFibGVJbnB1dE1vZHVsZSxcclxuICBTd2F0Y2hNb2R1bGUsXHJcbiAgZ2V0Q29udHJhc3RpbmdDb2xvcixcclxuICBpc1ZhbGlkSGV4LFxyXG59IGZyb20gJ25neC1jb2xvcic7XHJcbmltcG9ydCB7IEJsb2NrU3dhdGNoZXNDb21wb25lbnQgfSBmcm9tICcuL2Jsb2NrLXN3YXRjaGVzLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NvbG9yLWJsb2NrJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gIDxkaXYgY2xhc3M9XCJibG9jay1jYXJkIGJsb2NrLXBpY2tlciB7eyBjbGFzc05hbWUgfX1cIj5cclxuICAgIDxkaXYgY2xhc3M9XCJibG9jay10cmlhbmdsZVwiICpuZ0lmPVwidHJpYW5nbGUgIT09ICdoaWRlJ1wiXHJcbiAgICAgIFtzdHlsZS5ib3JkZXItY29sb3JdPVwiJ3RyYW5zcGFyZW50IHRyYW5zcGFyZW50ICcgKyB0aGlzLmhleCArICcgdHJhbnNwYXJlbnQnXCJcclxuICAgID48L2Rpdj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwiYmxvY2staGVhZFwiIFtzdHlsZS5iYWNrZ3JvdW5kXT1cImhleFwiPlxyXG4gICAgICA8Y29sb3ItY2hlY2tib2FyZCAqbmdJZj1cImhleCA9PT0gJ3RyYW5zcGFyZW50J1wiXHJcbiAgICAgICAgYm9yZGVyUmFkaXVzPVwiNnB4IDZweCAwIDBcIlxyXG4gICAgICA+PC9jb2xvci1jaGVja2JvYXJkPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYmxvY2stbGFiZWxcIiBbc3R5bGUuY29sb3JdPVwiZ2V0Q29udHJhc3RpbmdDb2xvcihoZXgpXCI+XHJcbiAgICAgICAge3sgaGV4IH19XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cImJsb2NrLWJvZHlcIj5cclxuICAgICAgPGNvbG9yLWJsb2NrLXN3YXRjaGVzIFtjb2xvcnNdPVwiY29sb3JzXCJcclxuICAgICAgICAob25DbGljayk9XCJoYW5kbGVCbG9ja0NoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgICAob25Td2F0Y2hIb3Zlcik9XCJvblN3YXRjaEhvdmVyLmVtaXQoJGV2ZW50KVwiXHJcbiAgICAgID48L2NvbG9yLWJsb2NrLXN3YXRjaGVzPlxyXG4gICAgICA8Y29sb3ItZWRpdGFibGUtaW5wdXQgW3ZhbHVlXT1cImhleFwiXHJcbiAgICAgICAgKG9uQ2hhbmdlKT1cImhhbmRsZVZhbHVlQ2hhbmdlKCRldmVudClcIlxyXG4gICAgICAgIFtzdHlsZV09XCJ7aW5wdXQ6IGlucHV0LCB3cmFwOiB3cmFwfVwiXHJcbiAgICAgID48L2NvbG9yLWVkaXRhYmxlLWlucHV0PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgYCxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgIC5ibG9jay1jYXJkIHtcclxuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICBib3gtc2hhZG93OiAwIDFweCByZ2JhKDAsIDAsIDAsIC4xKTtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgfVxyXG4gICAgLmJsb2NrLWhlYWQge1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA2cHggNnB4IDAgMDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgaGVpZ2h0OiAxMTBweDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxuICAgIC5ibG9jay1ib2R5IHtcclxuICAgICAgcGFkZGluZzogMTBweDtcclxuICAgIH1cclxuICAgIC5ibG9jay1sYWJlbCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgfVxyXG4gICAgLmJsb2NrLXRyaWFuZ2xlIHtcclxuICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgYm9yZGVyLXdpZHRoOiAwIDEwcHggMTBweCAxMHB4O1xyXG4gICAgICBoZWlnaHQ6IDA7XHJcbiAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogLTEwcHg7XHJcbiAgICAgIHdpZHRoOiAwO1xyXG4gICAgfVxyXG4gIGAsXHJcbiAgXSxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxufSlcclxuZXhwb3J0IGNsYXNzIEJsb2NrQ29tcG9uZW50IGV4dGVuZHMgQ29sb3JXcmFwIHtcclxuICAvKiogUGl4ZWwgdmFsdWUgZm9yIHBpY2tlciB3aWR0aCAqL1xyXG4gIEBJbnB1dCgpIHdpZHRoOiBzdHJpbmcgfCBudW1iZXIgPSAxNzA7XHJcbiAgLyoqIENvbG9yIHNxdWFyZXMgdG8gZGlzcGxheSAqL1xyXG4gIEBJbnB1dCgpIGNvbG9ycyA9IFtcclxuICAgICcjRDlFM0YwJyxcclxuICAgICcjRjQ3MzczJyxcclxuICAgICcjNjk3Njg5JyxcclxuICAgICcjMzdENjdBJyxcclxuICAgICcjMkNDQ0U0JyxcclxuICAgICcjNTU1NTU1JyxcclxuICAgICcjZGNlNzc1JyxcclxuICAgICcjZmY4YTY1JyxcclxuICAgICcjYmE2OGM4JyxcclxuICBdO1xyXG4gIEBJbnB1dCgpIHRyaWFuZ2xlOiAndG9wJyB8ICdoaWRlJyA9ICd0b3AnO1xyXG4gIGlucHV0OiB7W2tleTogc3RyaW5nXTogc3RyaW5nfSA9IHtcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBmb250U2l6ZTogJzEycHgnLFxyXG4gICAgY29sb3I6ICcjNjY2JyxcclxuICAgIGJvcmRlcjogJzBweCcsXHJcbiAgICBvdXRsaW5lOiAnbm9uZScsXHJcbiAgICBoZWlnaHQ6ICcyMnB4JyxcclxuICAgIGJveFNoYWRvdzogJ2luc2V0IDAgMCAwIDFweCAjZGRkJyxcclxuICAgIGJvcmRlclJhZGl1czogJzRweCcsXHJcbiAgICBwYWRkaW5nOiAnMCA3cHgnLFxyXG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXHJcbiAgfTtcclxuICB3cmFwOiB7W2tleTogc3RyaW5nXTogc3RyaW5nfSA9IHtcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICB9O1xyXG4gIGRpc2FibGVBbHBoYSA9IHRydWU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVZhbHVlQ2hhbmdlKHsgZGF0YSwgJGV2ZW50IH0pIHtcclxuICAgIHRoaXMuaGFuZGxlQmxvY2tDaGFuZ2UoeyBoZXg6IGRhdGEsICRldmVudCB9KTtcclxuICB9XHJcbiAgZ2V0Q29udHJhc3RpbmdDb2xvcihoZXgpIHtcclxuICAgIHJldHVybiBnZXRDb250cmFzdGluZ0NvbG9yKGhleCk7XHJcbiAgfVxyXG4gIGhhbmRsZUJsb2NrQ2hhbmdlKHsgaGV4LCAkZXZlbnQgfSkge1xyXG4gICAgaWYgKGlzVmFsaWRIZXgoaGV4KSkge1xyXG4gICAgICAvLyB0aGlzLmhleCA9IGhleDtcclxuICAgICAgdGhpcy5oYW5kbGVDaGFuZ2UoXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaGV4LFxyXG4gICAgICAgICAgc291cmNlOiAnaGV4JyxcclxuICAgICAgICB9LFxyXG4gICAgICAgICRldmVudCxcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbQmxvY2tDb21wb25lbnQsIEJsb2NrU3dhdGNoZXNDb21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFtCbG9ja0NvbXBvbmVudCwgQmxvY2tTd2F0Y2hlc0NvbXBvbmVudF0sXHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgQ2hlY2tib2FyZE1vZHVsZSwgU3dhdGNoTW9kdWxlLCBFZGl0YWJsZUlucHV0TW9kdWxlXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbG9yQmxvY2tNb2R1bGUge31cclxuIl19