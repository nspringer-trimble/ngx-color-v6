import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, NgModule, } from '@angular/core';
import { ColorWrap, SwatchModule, isValidHex } from 'ngx-color';
import { GithubSwatchComponent } from './github-swatch.component';
export class GithubComponent extends ColorWrap {
    constructor() {
        super();
        /** Pixel value for picker width */
        this.width = 212;
        /** Color squares to display */
        this.colors = [
            '#B80000',
            '#DB3E00',
            '#FCCB00',
            '#008B02',
            '#006B76',
            '#1273DE',
            '#004DCF',
            '#5300EB',
            '#EB9694',
            '#FAD0C3',
            '#FEF3BD',
            '#C1E1C5',
            '#BEDADC',
            '#C4DEF6',
            '#BED3F3',
            '#D4C4FB',
        ];
        this.triangle = 'top-left';
    }
    handleBlockChange({ hex, $event }) {
        if (isValidHex(hex)) {
            this.handleChange({ hex, source: 'hex' }, $event);
        }
    }
    handleValueChange({ data, $event }) {
        this.handleChange(data, $event);
    }
}
GithubComponent.decorators = [
    { type: Component, args: [{
                selector: 'color-github',
                template: `
  <div class="github-picker {{ triangle }}-triangle {{ className }}"
    [style.width.px]="width"
  >
    <div class="triangleShadow"></div>
    <div class="triangle"></div>
    <color-github-swatch *ngFor="let color of colors"
      [color]="color"
      (onClick)="handleBlockChange($event)"
      (onSwatchHover)="onSwatchHover.emit($event)"
    ></color-github-swatch>
  </div>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                styles: [`
  .github-picker {
    background: rgb(255, 255, 255);
    border: 1px solid rgba(0, 0, 0, 0.2);
    box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 12px;
    border-radius: 4px;
    position: relative;
    padding: 5px;
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
  }
  .triangleShadow {
    position: absolute;
    border-width: 8px;
    border-style: solid;
    border-color: transparent transparent rgba(0, 0, 0, 0.15);
    border-image: initial;
  }
  .triangle {
    position: absolute;
    border-width: 7px;
    border-style: solid;
    border-color: transparent transparent rgb(255, 255, 255);
    border-image: initial;
  }
  .hide-triangle > .triangle {
    display: none;
  }
  .hide-triangle > .triangleShadow {
    display: none;
  }
  .top-left-triangle > .triangle {
    top: -14px;
    left: 10px;
  }
  .top-left-triangle > .triangleShadow {
    top: -16px;
    left: 9px;
  }
  .top-right-triangle > .triangle {
    top: -14px;
    right: 10px;
  }
  .top-right-triangle > .triangleShadow {
    top: -16px;
    right: 9px;
  }
  .bottom-right-triangle > .triangle {
    top: 35px;
    right: 10px;
    transform: rotate(180deg);
  }
  .bottom-right-triangle > .triangleShadow {
    top: 37px;
    right: 9px;
    transform: rotate(180deg);
  }
  `]
            },] }
];
GithubComponent.ctorParameters = () => [];
GithubComponent.propDecorators = {
    width: [{ type: Input }],
    colors: [{ type: Input }],
    triangle: [{ type: Input }]
};
export class ColorGithubModule {
}
ColorGithubModule.decorators = [
    { type: NgModule, args: [{
                declarations: [GithubComponent, GithubSwatchComponent],
                exports: [GithubComponent, GithubSwatchComponent],
                imports: [CommonModule, SwatchModule],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2l0aHViLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvZ2l0aHViLyIsInNvdXJjZXMiOlsiZ2l0aHViLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsS0FBSyxFQUNMLFFBQVEsR0FDVCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDaEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFpRmxFLE1BQU0sT0FBTyxlQUFnQixTQUFRLFNBQVM7SUF3QjVDO1FBQ0UsS0FBSyxFQUFFLENBQUM7UUF4QlYsbUNBQW1DO1FBQzFCLFVBQUssR0FBb0IsR0FBRyxDQUFDO1FBQ3RDLCtCQUErQjtRQUN0QixXQUFNLEdBQUc7WUFDaEIsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztTQUNWLENBQUM7UUFDTyxhQUFRLEdBQXVELFVBQVUsQ0FBQztJQUluRixDQUFDO0lBRUQsaUJBQWlCLENBQUMsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFrQztRQUMvRCxJQUFJLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNuQixJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQztTQUNuRDtJQUNILENBQUM7SUFDRCxpQkFBaUIsQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUU7UUFDaEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7O1lBbEhGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7R0FZVDtnQkE4REQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLG1CQUFtQixFQUFFLEtBQUs7eUJBN0R4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTBERDthQUlGOzs7O29CQUdFLEtBQUs7cUJBRUwsS0FBSzt1QkFrQkwsS0FBSzs7QUFxQlIsTUFBTSxPQUFPLGlCQUFpQjs7O1lBTDdCLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxlQUFlLEVBQUUscUJBQXFCLENBQUM7Z0JBQ3RELE9BQU8sRUFBRSxDQUFDLGVBQWUsRUFBRSxxQkFBcUIsQ0FBQztnQkFDakQsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFlBQVksQ0FBQzthQUN0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIElucHV0LFxyXG4gIE5nTW9kdWxlLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgQ29sb3JXcmFwLCBTd2F0Y2hNb2R1bGUsIGlzVmFsaWRIZXggfSBmcm9tICduZ3gtY29sb3InO1xyXG5pbXBvcnQgeyBHaXRodWJTd2F0Y2hDb21wb25lbnQgfSBmcm9tICcuL2dpdGh1Yi1zd2F0Y2guY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY29sb3ItZ2l0aHViJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gIDxkaXYgY2xhc3M9XCJnaXRodWItcGlja2VyIHt7IHRyaWFuZ2xlIH19LXRyaWFuZ2xlIHt7IGNsYXNzTmFtZSB9fVwiXHJcbiAgICBbc3R5bGUud2lkdGgucHhdPVwid2lkdGhcIlxyXG4gID5cclxuICAgIDxkaXYgY2xhc3M9XCJ0cmlhbmdsZVNoYWRvd1wiPjwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInRyaWFuZ2xlXCI+PC9kaXY+XHJcbiAgICA8Y29sb3ItZ2l0aHViLXN3YXRjaCAqbmdGb3I9XCJsZXQgY29sb3Igb2YgY29sb3JzXCJcclxuICAgICAgW2NvbG9yXT1cImNvbG9yXCJcclxuICAgICAgKG9uQ2xpY2spPVwiaGFuZGxlQmxvY2tDaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAgIChvblN3YXRjaEhvdmVyKT1cIm9uU3dhdGNoSG92ZXIuZW1pdCgkZXZlbnQpXCJcclxuICAgID48L2NvbG9yLWdpdGh1Yi1zd2F0Y2g+XHJcbiAgPC9kaXY+XHJcbiAgYCxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAuZ2l0aHViLXBpY2tlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTUpIDBweCAzcHggMTJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxuICAudHJpYW5nbGVTaGFkb3cge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm9yZGVyLXdpZHRoOiA4cHg7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gICAgYm9yZGVyLWltYWdlOiBpbml0aWFsO1xyXG4gIH1cclxuICAudHJpYW5nbGUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm9yZGVyLXdpZHRoOiA3cHg7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICBib3JkZXItaW1hZ2U6IGluaXRpYWw7XHJcbiAgfVxyXG4gIC5oaWRlLXRyaWFuZ2xlID4gLnRyaWFuZ2xlIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC5oaWRlLXRyaWFuZ2xlID4gLnRyaWFuZ2xlU2hhZG93IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC50b3AtbGVmdC10cmlhbmdsZSA+IC50cmlhbmdsZSB7XHJcbiAgICB0b3A6IC0xNHB4O1xyXG4gICAgbGVmdDogMTBweDtcclxuICB9XHJcbiAgLnRvcC1sZWZ0LXRyaWFuZ2xlID4gLnRyaWFuZ2xlU2hhZG93IHtcclxuICAgIHRvcDogLTE2cHg7XHJcbiAgICBsZWZ0OiA5cHg7XHJcbiAgfVxyXG4gIC50b3AtcmlnaHQtdHJpYW5nbGUgPiAudHJpYW5nbGUge1xyXG4gICAgdG9wOiAtMTRweDtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG4gIH1cclxuICAudG9wLXJpZ2h0LXRyaWFuZ2xlID4gLnRyaWFuZ2xlU2hhZG93IHtcclxuICAgIHRvcDogLTE2cHg7XHJcbiAgICByaWdodDogOXB4O1xyXG4gIH1cclxuICAuYm90dG9tLXJpZ2h0LXRyaWFuZ2xlID4gLnRyaWFuZ2xlIHtcclxuICAgIHRvcDogMzVweDtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICB9XHJcbiAgLmJvdHRvbS1yaWdodC10cmlhbmdsZSA+IC50cmlhbmdsZVNoYWRvdyB7XHJcbiAgICB0b3A6IDM3cHg7XHJcbiAgICByaWdodDogOXB4O1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICB9XHJcbiAgYCxcclxuICBdLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgR2l0aHViQ29tcG9uZW50IGV4dGVuZHMgQ29sb3JXcmFwIHtcclxuICAvKiogUGl4ZWwgdmFsdWUgZm9yIHBpY2tlciB3aWR0aCAqL1xyXG4gIEBJbnB1dCgpIHdpZHRoOiBzdHJpbmcgfCBudW1iZXIgPSAyMTI7XHJcbiAgLyoqIENvbG9yIHNxdWFyZXMgdG8gZGlzcGxheSAqL1xyXG4gIEBJbnB1dCgpIGNvbG9ycyA9IFtcclxuICAgICcjQjgwMDAwJyxcclxuICAgICcjREIzRTAwJyxcclxuICAgICcjRkNDQjAwJyxcclxuICAgICcjMDA4QjAyJyxcclxuICAgICcjMDA2Qjc2JyxcclxuICAgICcjMTI3M0RFJyxcclxuICAgICcjMDA0RENGJyxcclxuICAgICcjNTMwMEVCJyxcclxuICAgICcjRUI5Njk0JyxcclxuICAgICcjRkFEMEMzJyxcclxuICAgICcjRkVGM0JEJyxcclxuICAgICcjQzFFMUM1JyxcclxuICAgICcjQkVEQURDJyxcclxuICAgICcjQzRERUY2JyxcclxuICAgICcjQkVEM0YzJyxcclxuICAgICcjRDRDNEZCJyxcclxuICBdO1xyXG4gIEBJbnB1dCgpIHRyaWFuZ2xlOiAnaGlkZScgfCAndG9wLWxlZnQnIHwgJ3RvcC1yaWdodCcgfCAnYm90dG9tLXJpZ2h0JyA9ICd0b3AtbGVmdCc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUJsb2NrQ2hhbmdlKHsgaGV4LCAkZXZlbnQgfTogeyBoZXg6IHN0cmluZywgJGV2ZW50OiBFdmVudCB9KSB7XHJcbiAgICBpZiAoaXNWYWxpZEhleChoZXgpKSB7XHJcbiAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlKHsgaGV4LCBzb3VyY2U6ICdoZXgnIH0sICRldmVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGhhbmRsZVZhbHVlQ2hhbmdlKHsgZGF0YSwgJGV2ZW50IH0pIHtcclxuICAgIHRoaXMuaGFuZGxlQ2hhbmdlKGRhdGEsICRldmVudCk7XHJcbiAgfVxyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW0dpdGh1YkNvbXBvbmVudCwgR2l0aHViU3dhdGNoQ29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbR2l0aHViQ29tcG9uZW50LCBHaXRodWJTd2F0Y2hDb21wb25lbnRdLFxyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIFN3YXRjaE1vZHVsZV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb2xvckdpdGh1Yk1vZHVsZSB7fVxyXG4iXX0=