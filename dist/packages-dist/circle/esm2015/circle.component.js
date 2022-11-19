import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, NgModule, } from '@angular/core';
import { amber, blue, blueGrey, brown, cyan, deepOrange, deepPurple, green, indigo, lightBlue, lightGreen, lime, orange, pink, purple, red, teal, yellow, } from 'material-colors';
import { TinyColor } from '@ctrl/tinycolor';
import { ColorWrap, SwatchModule, isValidHex } from 'ngx-color';
import { CircleSwatchComponent } from './circle-swatch.component';
export class CircleComponent extends ColorWrap {
    constructor() {
        super();
        /** Pixel value for picker width */
        this.width = 252;
        /** Color squares to display */
        this.colors = [
            red['500'],
            pink['500'],
            purple['500'],
            deepPurple['500'],
            indigo['500'],
            blue['500'],
            lightBlue['500'],
            cyan['500'],
            teal['500'],
            green['500'],
            lightGreen['500'],
            lime['500'],
            yellow['500'],
            amber['500'],
            orange['500'],
            deepOrange['500'],
            brown['500'],
            blueGrey['500'],
        ];
        /** Value for circle size */
        this.circleSize = 28;
        /** Value for spacing between circles */
        this.circleSpacing = 14;
    }
    isActive(color) {
        return new TinyColor(this.hex).equals(color);
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
CircleComponent.decorators = [
    { type: Component, args: [{
                selector: 'color-circle',
                template: `
    <div
      class="circle-picker {{ className }}"
      [style.width.px]="width"
      [style.margin-right.px]="-circleSpacing"
      [style.margin-bottom.px]="-circleSpacing"
    >
      <color-circle-swatch
        *ngFor="let color of colors"
        [circleSize]="circleSize"
        [circleSpacing]="circleSpacing"
        [color]="color"
        [focus]="isActive(color)"
        (onClick)="handleBlockChange($event)"
        (onSwatchHover)="onSwatchHover.emit($event)"
      ></color-circle-swatch>
    </div>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                styles: [`
      .circle-picker {
        display: flex;
        flex-wrap: wrap;
      }
    `]
            },] }
];
CircleComponent.ctorParameters = () => [];
CircleComponent.propDecorators = {
    width: [{ type: Input }],
    colors: [{ type: Input }],
    circleSize: [{ type: Input }],
    circleSpacing: [{ type: Input }]
};
export class ColorCircleModule {
}
ColorCircleModule.decorators = [
    { type: NgModule, args: [{
                declarations: [CircleComponent, CircleSwatchComponent],
                exports: [CircleComponent, CircleSwatchComponent],
                imports: [CommonModule, SwatchModule],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2lyY2xlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvY2lyY2xlLyIsInNvdXJjZXMiOlsiY2lyY2xlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsS0FBSyxFQUNMLFFBQVEsR0FDVCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQ0wsS0FBSyxFQUNMLElBQUksRUFDSixRQUFRLEVBQ1IsS0FBSyxFQUNMLElBQUksRUFDSixVQUFVLEVBQ1YsVUFBVSxFQUNWLEtBQUssRUFDTCxNQUFNLEVBQ04sU0FBUyxFQUNULFVBQVUsRUFDVixJQUFJLEVBQ0osTUFBTSxFQUNOLElBQUksRUFDSixNQUFNLEVBQ04sR0FBRyxFQUNILElBQUksRUFDSixNQUFNLEdBQ1AsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFNUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFFLE1BQU0sV0FBVyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBaUNsRSxNQUFNLE9BQU8sZUFBZ0IsU0FBUSxTQUFTO0lBOEI1QztRQUNFLEtBQUssRUFBRSxDQUFDO1FBOUJWLG1DQUFtQztRQUMxQixVQUFLLEdBQW9CLEdBQUcsQ0FBQztRQUN0QywrQkFBK0I7UUFFL0IsV0FBTSxHQUFhO1lBQ2pCLEdBQUcsQ0FBQyxLQUFLLENBQUM7WUFDVixJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ1gsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUNiLFVBQVUsQ0FBQyxLQUFLLENBQUM7WUFDakIsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUNiLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDWCxTQUFTLENBQUMsS0FBSyxDQUFDO1lBQ2hCLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDWCxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ1gsS0FBSyxDQUFDLEtBQUssQ0FBQztZQUNaLFVBQVUsQ0FBQyxLQUFLLENBQUM7WUFDakIsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUNYLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDYixLQUFLLENBQUMsS0FBSyxDQUFDO1lBQ1osTUFBTSxDQUFDLEtBQUssQ0FBQztZQUNiLFVBQVUsQ0FBQyxLQUFLLENBQUM7WUFDakIsS0FBSyxDQUFDLEtBQUssQ0FBQztZQUNaLFFBQVEsQ0FBQyxLQUFLLENBQUM7U0FDaEIsQ0FBQztRQUNGLDRCQUE0QjtRQUNuQixlQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ3pCLHdDQUF3QztRQUMvQixrQkFBYSxHQUFHLEVBQUUsQ0FBQztJQUk1QixDQUFDO0lBQ0QsUUFBUSxDQUFDLEtBQWE7UUFDcEIsT0FBTyxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFDRCxpQkFBaUIsQ0FBQyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQWtDO1FBQy9ELElBQUksVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ25CLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQ25EO0lBQ0gsQ0FBQztJQUNELGlCQUFpQixDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRTtRQUNoQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNsQyxDQUFDOzs7WUExRUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2dCQUN4QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBaUJUO2dCQVNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxtQkFBbUIsRUFBRSxLQUFLO3lCQVJ4Qjs7Ozs7S0FLQzthQUlKOzs7O29CQUdFLEtBQUs7cUJBRUwsS0FBSzt5QkFzQkwsS0FBSzs0QkFFTCxLQUFLOztBQXVCUixNQUFNLE9BQU8saUJBQWlCOzs7WUFMN0IsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLGVBQWUsRUFBRSxxQkFBcUIsQ0FBQztnQkFDdEQsT0FBTyxFQUFFLENBQUMsZUFBZSxFQUFFLHFCQUFxQixDQUFDO2dCQUNqRCxPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsWUFBWSxDQUFDO2FBQ3RDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgSW5wdXQsXHJcbiAgTmdNb2R1bGUsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgYW1iZXIsXHJcbiAgYmx1ZSxcclxuICBibHVlR3JleSxcclxuICBicm93bixcclxuICBjeWFuLFxyXG4gIGRlZXBPcmFuZ2UsXHJcbiAgZGVlcFB1cnBsZSxcclxuICBncmVlbixcclxuICBpbmRpZ28sXHJcbiAgbGlnaHRCbHVlLFxyXG4gIGxpZ2h0R3JlZW4sXHJcbiAgbGltZSxcclxuICBvcmFuZ2UsXHJcbiAgcGluayxcclxuICBwdXJwbGUsXHJcbiAgcmVkLFxyXG4gIHRlYWwsXHJcbiAgeWVsbG93LFxyXG59IGZyb20gJ21hdGVyaWFsLWNvbG9ycyc7XHJcbmltcG9ydCB7IFRpbnlDb2xvciB9IGZyb20gJ0BjdHJsL3Rpbnljb2xvcic7XHJcblxyXG5pbXBvcnQgeyBDb2xvcldyYXAsIFN3YXRjaE1vZHVsZSwgaXNWYWxpZEhleCB9IGZyb20gJ25neC1jb2xvcic7XHJcbmltcG9ydCB7IENpcmNsZVN3YXRjaENvbXBvbmVudCB9IGZyb20gJy4vY2lyY2xlLXN3YXRjaC5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjb2xvci1jaXJjbGUnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzPVwiY2lyY2xlLXBpY2tlciB7eyBjbGFzc05hbWUgfX1cIlxyXG4gICAgICBbc3R5bGUud2lkdGgucHhdPVwid2lkdGhcIlxyXG4gICAgICBbc3R5bGUubWFyZ2luLXJpZ2h0LnB4XT1cIi1jaXJjbGVTcGFjaW5nXCJcclxuICAgICAgW3N0eWxlLm1hcmdpbi1ib3R0b20ucHhdPVwiLWNpcmNsZVNwYWNpbmdcIlxyXG4gICAgPlxyXG4gICAgICA8Y29sb3ItY2lyY2xlLXN3YXRjaFxyXG4gICAgICAgICpuZ0Zvcj1cImxldCBjb2xvciBvZiBjb2xvcnNcIlxyXG4gICAgICAgIFtjaXJjbGVTaXplXT1cImNpcmNsZVNpemVcIlxyXG4gICAgICAgIFtjaXJjbGVTcGFjaW5nXT1cImNpcmNsZVNwYWNpbmdcIlxyXG4gICAgICAgIFtjb2xvcl09XCJjb2xvclwiXHJcbiAgICAgICAgW2ZvY3VzXT1cImlzQWN0aXZlKGNvbG9yKVwiXHJcbiAgICAgICAgKG9uQ2xpY2spPVwiaGFuZGxlQmxvY2tDaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAgICAgKG9uU3dhdGNoSG92ZXIpPVwib25Td2F0Y2hIb3Zlci5lbWl0KCRldmVudClcIlxyXG4gICAgICA+PC9jb2xvci1jaXJjbGUtc3dhdGNoPlxyXG4gICAgPC9kaXY+XHJcbiAgYCxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgICAgLmNpcmNsZS1waWNrZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICB9XHJcbiAgICBgLFxyXG4gIF0sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDaXJjbGVDb21wb25lbnQgZXh0ZW5kcyBDb2xvcldyYXAge1xyXG4gIC8qKiBQaXhlbCB2YWx1ZSBmb3IgcGlja2VyIHdpZHRoICovXHJcbiAgQElucHV0KCkgd2lkdGg6IHN0cmluZyB8IG51bWJlciA9IDI1MjtcclxuICAvKiogQ29sb3Igc3F1YXJlcyB0byBkaXNwbGF5ICovXHJcbiAgQElucHV0KClcclxuICBjb2xvcnM6IHN0cmluZ1tdID0gW1xyXG4gICAgcmVkWyc1MDAnXSxcclxuICAgIHBpbmtbJzUwMCddLFxyXG4gICAgcHVycGxlWyc1MDAnXSxcclxuICAgIGRlZXBQdXJwbGVbJzUwMCddLFxyXG4gICAgaW5kaWdvWyc1MDAnXSxcclxuICAgIGJsdWVbJzUwMCddLFxyXG4gICAgbGlnaHRCbHVlWyc1MDAnXSxcclxuICAgIGN5YW5bJzUwMCddLFxyXG4gICAgdGVhbFsnNTAwJ10sXHJcbiAgICBncmVlblsnNTAwJ10sXHJcbiAgICBsaWdodEdyZWVuWyc1MDAnXSxcclxuICAgIGxpbWVbJzUwMCddLFxyXG4gICAgeWVsbG93Wyc1MDAnXSxcclxuICAgIGFtYmVyWyc1MDAnXSxcclxuICAgIG9yYW5nZVsnNTAwJ10sXHJcbiAgICBkZWVwT3JhbmdlWyc1MDAnXSxcclxuICAgIGJyb3duWyc1MDAnXSxcclxuICAgIGJsdWVHcmV5Wyc1MDAnXSxcclxuICBdO1xyXG4gIC8qKiBWYWx1ZSBmb3IgY2lyY2xlIHNpemUgKi9cclxuICBASW5wdXQoKSBjaXJjbGVTaXplID0gMjg7XHJcbiAgLyoqIFZhbHVlIGZvciBzcGFjaW5nIGJldHdlZW4gY2lyY2xlcyAqL1xyXG4gIEBJbnB1dCgpIGNpcmNsZVNwYWNpbmcgPSAxNDtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuICBpc0FjdGl2ZShjb2xvcjogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gbmV3IFRpbnlDb2xvcih0aGlzLmhleCkuZXF1YWxzKGNvbG9yKTtcclxuICB9XHJcbiAgaGFuZGxlQmxvY2tDaGFuZ2UoeyBoZXgsICRldmVudCB9OiB7IGhleDogc3RyaW5nLCAkZXZlbnQ6IEV2ZW50IH0pIHtcclxuICAgIGlmIChpc1ZhbGlkSGV4KGhleCkpIHtcclxuICAgICAgdGhpcy5oYW5kbGVDaGFuZ2UoeyBoZXgsIHNvdXJjZTogJ2hleCcgfSwgJGV2ZW50KTtcclxuICAgIH1cclxuICB9XHJcbiAgaGFuZGxlVmFsdWVDaGFuZ2UoeyBkYXRhLCAkZXZlbnQgfSkge1xyXG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UoZGF0YSwgJGV2ZW50KTtcclxuICB9XHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbQ2lyY2xlQ29tcG9uZW50LCBDaXJjbGVTd2F0Y2hDb21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFtDaXJjbGVDb21wb25lbnQsIENpcmNsZVN3YXRjaENvbXBvbmVudF0sXHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgU3dhdGNoTW9kdWxlXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbG9yQ2lyY2xlTW9kdWxlIHt9XHJcbiJdfQ==