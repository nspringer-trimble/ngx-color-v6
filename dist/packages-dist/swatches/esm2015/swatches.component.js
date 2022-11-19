import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, NgModule, } from '@angular/core';
import { amber, blue, blueGrey, brown, cyan, deepOrange, deepPurple, green, indigo, lightBlue, lightGreen, lime, orange, pink, purple, red, teal, yellow, } from 'material-colors';
import { ColorWrap, RaisedModule, SwatchModule } from 'ngx-color';
import { SwatchesColorComponent } from './swatches-color.component';
import { SwatchesGroupComponent } from './swatches-group.component';
export class SwatchesComponent extends ColorWrap {
    constructor() {
        super();
        /** Pixel value for picker width */
        this.width = 320;
        /** Color squares to display */
        this.height = 240;
        /** An array of color groups, each with an array of colors */
        this.colors = [
            [
                red['900'],
                red['700'],
                red['500'],
                red['300'],
                red['100'],
            ],
            [
                pink['900'],
                pink['700'],
                pink['500'],
                pink['300'],
                pink['100'],
            ],
            [
                purple['900'],
                purple['700'],
                purple['500'],
                purple['300'],
                purple['100'],
            ],
            [
                deepPurple['900'],
                deepPurple['700'],
                deepPurple['500'],
                deepPurple['300'],
                deepPurple['100'],
            ],
            [
                indigo['900'],
                indigo['700'],
                indigo['500'],
                indigo['300'],
                indigo['100'],
            ],
            [
                blue['900'],
                blue['700'],
                blue['500'],
                blue['300'],
                blue['100'],
            ],
            [
                lightBlue['900'],
                lightBlue['700'],
                lightBlue['500'],
                lightBlue['300'],
                lightBlue['100'],
            ],
            [
                cyan['900'],
                cyan['700'],
                cyan['500'],
                cyan['300'],
                cyan['100'],
            ],
            [
                teal['900'],
                teal['700'],
                teal['500'],
                teal['300'],
                teal['100'],
            ],
            [
                '#194D33',
                green['700'],
                green['500'],
                green['300'],
                green['100'],
            ],
            [
                lightGreen['900'],
                lightGreen['700'],
                lightGreen['500'],
                lightGreen['300'],
                lightGreen['100'],
            ],
            [
                lime['900'],
                lime['700'],
                lime['500'],
                lime['300'],
                lime['100'],
            ],
            [
                yellow['900'],
                yellow['700'],
                yellow['500'],
                yellow['300'],
                yellow['100'],
            ],
            [
                amber['900'],
                amber['700'],
                amber['500'],
                amber['300'],
                amber['100'],
            ],
            [
                orange['900'],
                orange['700'],
                orange['500'],
                orange['300'],
                orange['100'],
            ],
            [
                deepOrange['900'],
                deepOrange['700'],
                deepOrange['500'],
                deepOrange['300'],
                deepOrange['100'],
            ],
            [
                brown['900'],
                brown['700'],
                brown['500'],
                brown['300'],
                brown['100'],
            ],
            [
                blueGrey['900'],
                blueGrey['700'],
                blueGrey['500'],
                blueGrey['300'],
                blueGrey['100'],
            ],
            ['#000000', '#525252', '#969696', '#D9D9D9', '#FFFFFF'],
        ];
        this.zDepth = 1;
        this.radius = 1;
        this.background = '#fff';
    }
    handlePickerChange({ data, $event }) {
        this.handleChange(data, $event);
    }
}
SwatchesComponent.decorators = [
    { type: Component, args: [{
                selector: 'color-swatches',
                template: `
  <div class="swatches-picker {{ className }}"
    [style.width.px]="width" [style.height.px]="height">
    <color-raised [zDepth]="zDepth" [background]="background" [radius]="radius">
      <div class="swatches-overflow" [style.height.px]="height">
        <div class="swatches-body">
          <color-swatches-group
            *ngFor="let group of colors"
            [group]="group" [active]="hex"
            (onClick)="handlePickerChange($event)"
          ></color-swatches-group>
        </div>
      </div>
    </color-raised>
  </div>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                styles: [`
      .swatches-overflow {
        overflow-y: scroll;
      }
      .swatches-overflow {
        padding: 16px 0 6px 16px;
      }
    `]
            },] }
];
SwatchesComponent.ctorParameters = () => [];
SwatchesComponent.propDecorators = {
    width: [{ type: Input }],
    height: [{ type: Input }],
    colors: [{ type: Input }],
    zDepth: [{ type: Input }],
    radius: [{ type: Input }],
    background: [{ type: Input }]
};
export class ColorSwatchesModule {
}
ColorSwatchesModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    SwatchesComponent,
                    SwatchesGroupComponent,
                    SwatchesColorComponent,
                ],
                exports: [SwatchesComponent, SwatchesGroupComponent, SwatchesColorComponent],
                imports: [CommonModule, SwatchModule, RaisedModule],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dhdGNoZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9zd2F0Y2hlcy8iLCJzb3VyY2VzIjpbInN3YXRjaGVzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsS0FBSyxFQUNMLFFBQVEsR0FDVCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQ0wsS0FBSyxFQUNMLElBQUksRUFDSixRQUFRLEVBQ1IsS0FBSyxFQUNMLElBQUksRUFDSixVQUFVLEVBQ1YsVUFBVSxFQUNWLEtBQUssRUFDTCxNQUFNLEVBQ04sU0FBUyxFQUNULFVBQVUsRUFDVixJQUFJLEVBQ0osTUFBTSxFQUNOLElBQUksRUFDSixNQUFNLEVBQ04sR0FBRyxFQUNILElBQUksRUFDSixNQUFNLEdBQ1AsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QixPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQVUsTUFBTSxXQUFXLENBQUM7QUFDMUUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDcEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFpQ3BFLE1BQU0sT0FBTyxpQkFBa0IsU0FBUSxTQUFTO0lBNEk5QztRQUNFLEtBQUssRUFBRSxDQUFDO1FBNUlWLG1DQUFtQztRQUMxQixVQUFLLEdBQW9CLEdBQUcsQ0FBQztRQUN0QywrQkFBK0I7UUFDdEIsV0FBTSxHQUFvQixHQUFHLENBQUM7UUFDdkMsNkRBQTZEO1FBRTdELFdBQU0sR0FBZTtZQUNuQjtnQkFDRSxHQUFHLENBQUMsS0FBSyxDQUFDO2dCQUNWLEdBQUcsQ0FBQyxLQUFLLENBQUM7Z0JBQ1YsR0FBRyxDQUFDLEtBQUssQ0FBQztnQkFDVixH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WUFqTEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7O0dBZVQ7Z0JBV0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLG1CQUFtQixFQUFFLEtBQUs7eUJBVnhCOzs7Ozs7O0tBT0M7YUFJSjs7OztvQkFHRSxLQUFLO3FCQUVMLEtBQUs7cUJBRUwsS0FBSztxQkFrSUwsS0FBSztxQkFDTCxLQUFLO3lCQUNMLEtBQUs7O0FBb0JSLE1BQU0sT0FBTyxtQkFBbUI7OztZQVQvQixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFO29CQUNaLGlCQUFpQjtvQkFDakIsc0JBQXNCO29CQUN0QixzQkFBc0I7aUJBQ3ZCO2dCQUNELE9BQU8sRUFBRSxDQUFDLGlCQUFpQixFQUFFLHNCQUFzQixFQUFFLHNCQUFzQixDQUFDO2dCQUM1RSxPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsWUFBWSxFQUFFLFlBQVksQ0FBQzthQUNwRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIElucHV0LFxyXG4gIE5nTW9kdWxlLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIGFtYmVyLFxyXG4gIGJsdWUsXHJcbiAgYmx1ZUdyZXksXHJcbiAgYnJvd24sXHJcbiAgY3lhbixcclxuICBkZWVwT3JhbmdlLFxyXG4gIGRlZXBQdXJwbGUsXHJcbiAgZ3JlZW4sXHJcbiAgaW5kaWdvLFxyXG4gIGxpZ2h0Qmx1ZSxcclxuICBsaWdodEdyZWVuLFxyXG4gIGxpbWUsXHJcbiAgb3JhbmdlLFxyXG4gIHBpbmssXHJcbiAgcHVycGxlLFxyXG4gIHJlZCxcclxuICB0ZWFsLFxyXG4gIHllbGxvdyxcclxufSBmcm9tICdtYXRlcmlhbC1jb2xvcnMnO1xyXG5cclxuaW1wb3J0IHsgQ29sb3JXcmFwLCBSYWlzZWRNb2R1bGUsIFN3YXRjaE1vZHVsZSwgekRlcHRoIH0gZnJvbSAnbmd4LWNvbG9yJztcclxuaW1wb3J0IHsgU3dhdGNoZXNDb2xvckNvbXBvbmVudCB9IGZyb20gJy4vc3dhdGNoZXMtY29sb3IuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU3dhdGNoZXNHcm91cENvbXBvbmVudCB9IGZyb20gJy4vc3dhdGNoZXMtZ3JvdXAuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY29sb3Itc3dhdGNoZXMnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgPGRpdiBjbGFzcz1cInN3YXRjaGVzLXBpY2tlciB7eyBjbGFzc05hbWUgfX1cIlxyXG4gICAgW3N0eWxlLndpZHRoLnB4XT1cIndpZHRoXCIgW3N0eWxlLmhlaWdodC5weF09XCJoZWlnaHRcIj5cclxuICAgIDxjb2xvci1yYWlzZWQgW3pEZXB0aF09XCJ6RGVwdGhcIiBbYmFja2dyb3VuZF09XCJiYWNrZ3JvdW5kXCIgW3JhZGl1c109XCJyYWRpdXNcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cInN3YXRjaGVzLW92ZXJmbG93XCIgW3N0eWxlLmhlaWdodC5weF09XCJoZWlnaHRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwic3dhdGNoZXMtYm9keVwiPlxyXG4gICAgICAgICAgPGNvbG9yLXN3YXRjaGVzLWdyb3VwXHJcbiAgICAgICAgICAgICpuZ0Zvcj1cImxldCBncm91cCBvZiBjb2xvcnNcIlxyXG4gICAgICAgICAgICBbZ3JvdXBdPVwiZ3JvdXBcIiBbYWN0aXZlXT1cImhleFwiXHJcbiAgICAgICAgICAgIChvbkNsaWNrKT1cImhhbmRsZVBpY2tlckNoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgICAgID48L2NvbG9yLXN3YXRjaGVzLWdyb3VwPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvY29sb3ItcmFpc2VkPlxyXG4gIDwvZGl2PlxyXG4gIGAsXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAgIC5zd2F0Y2hlcy1vdmVyZmxvdyB7XHJcbiAgICAgICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgICB9XHJcbiAgICAgIC5zd2F0Y2hlcy1vdmVyZmxvdyB7XHJcbiAgICAgICAgcGFkZGluZzogMTZweCAwIDZweCAxNnB4O1xyXG4gICAgICB9XHJcbiAgICBgLFxyXG4gIF0sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTd2F0Y2hlc0NvbXBvbmVudCBleHRlbmRzIENvbG9yV3JhcCB7XHJcbiAgLyoqIFBpeGVsIHZhbHVlIGZvciBwaWNrZXIgd2lkdGggKi9cclxuICBASW5wdXQoKSB3aWR0aDogc3RyaW5nIHwgbnVtYmVyID0gMzIwO1xyXG4gIC8qKiBDb2xvciBzcXVhcmVzIHRvIGRpc3BsYXkgKi9cclxuICBASW5wdXQoKSBoZWlnaHQ6IHN0cmluZyB8IG51bWJlciA9IDI0MDtcclxuICAvKiogQW4gYXJyYXkgb2YgY29sb3IgZ3JvdXBzLCBlYWNoIHdpdGggYW4gYXJyYXkgb2YgY29sb3JzICovXHJcbiAgQElucHV0KClcclxuICBjb2xvcnM6IHN0cmluZ1tdW10gPSBbXHJcbiAgICBbXHJcbiAgICAgIHJlZFsnOTAwJ10sXHJcbiAgICAgIHJlZFsnNzAwJ10sXHJcbiAgICAgIHJlZFsnNTAwJ10sXHJcbiAgICAgIHJlZFsnMzAwJ10sXHJcbiAgICAgIHJlZFsnMTAwJ10sXHJcbiAgICBdLFxyXG4gICAgW1xyXG4gICAgICBwaW5rWyc5MDAnXSxcclxuICAgICAgcGlua1snNzAwJ10sXHJcbiAgICAgIHBpbmtbJzUwMCddLFxyXG4gICAgICBwaW5rWyczMDAnXSxcclxuICAgICAgcGlua1snMTAwJ10sXHJcbiAgICBdLFxyXG4gICAgW1xyXG4gICAgICBwdXJwbGVbJzkwMCddLFxyXG4gICAgICBwdXJwbGVbJzcwMCddLFxyXG4gICAgICBwdXJwbGVbJzUwMCddLFxyXG4gICAgICBwdXJwbGVbJzMwMCddLFxyXG4gICAgICBwdXJwbGVbJzEwMCddLFxyXG4gICAgXSxcclxuICAgIFtcclxuICAgICAgZGVlcFB1cnBsZVsnOTAwJ10sXHJcbiAgICAgIGRlZXBQdXJwbGVbJzcwMCddLFxyXG4gICAgICBkZWVwUHVycGxlWyc1MDAnXSxcclxuICAgICAgZGVlcFB1cnBsZVsnMzAwJ10sXHJcbiAgICAgIGRlZXBQdXJwbGVbJzEwMCddLFxyXG4gICAgXSxcclxuICAgIFtcclxuICAgICAgaW5kaWdvWyc5MDAnXSxcclxuICAgICAgaW5kaWdvWyc3MDAnXSxcclxuICAgICAgaW5kaWdvWyc1MDAnXSxcclxuICAgICAgaW5kaWdvWyczMDAnXSxcclxuICAgICAgaW5kaWdvWycxMDAnXSxcclxuICAgIF0sXHJcbiAgICBbXHJcbiAgICAgIGJsdWVbJzkwMCddLFxyXG4gICAgICBibHVlWyc3MDAnXSxcclxuICAgICAgYmx1ZVsnNTAwJ10sXHJcbiAgICAgIGJsdWVbJzMwMCddLFxyXG4gICAgICBibHVlWycxMDAnXSxcclxuICAgIF0sXHJcbiAgICBbXHJcbiAgICAgIGxpZ2h0Qmx1ZVsnOTAwJ10sXHJcbiAgICAgIGxpZ2h0Qmx1ZVsnNzAwJ10sXHJcbiAgICAgIGxpZ2h0Qmx1ZVsnNTAwJ10sXHJcbiAgICAgIGxpZ2h0Qmx1ZVsnMzAwJ10sXHJcbiAgICAgIGxpZ2h0Qmx1ZVsnMTAwJ10sXHJcbiAgICBdLFxyXG4gICAgW1xyXG4gICAgICBjeWFuWyc5MDAnXSxcclxuICAgICAgY3lhblsnNzAwJ10sXHJcbiAgICAgIGN5YW5bJzUwMCddLFxyXG4gICAgICBjeWFuWyczMDAnXSxcclxuICAgICAgY3lhblsnMTAwJ10sXHJcbiAgICBdLFxyXG4gICAgW1xyXG4gICAgICB0ZWFsWyc5MDAnXSxcclxuICAgICAgdGVhbFsnNzAwJ10sXHJcbiAgICAgIHRlYWxbJzUwMCddLFxyXG4gICAgICB0ZWFsWyczMDAnXSxcclxuICAgICAgdGVhbFsnMTAwJ10sXHJcbiAgICBdLFxyXG4gICAgW1xyXG4gICAgICAnIzE5NEQzMycsXHJcbiAgICAgIGdyZWVuWyc3MDAnXSxcclxuICAgICAgZ3JlZW5bJzUwMCddLFxyXG4gICAgICBncmVlblsnMzAwJ10sXHJcbiAgICAgIGdyZWVuWycxMDAnXSxcclxuICAgIF0sXHJcbiAgICBbXHJcbiAgICAgIGxpZ2h0R3JlZW5bJzkwMCddLFxyXG4gICAgICBsaWdodEdyZWVuWyc3MDAnXSxcclxuICAgICAgbGlnaHRHcmVlblsnNTAwJ10sXHJcbiAgICAgIGxpZ2h0R3JlZW5bJzMwMCddLFxyXG4gICAgICBsaWdodEdyZWVuWycxMDAnXSxcclxuICAgIF0sXHJcbiAgICBbXHJcbiAgICAgIGxpbWVbJzkwMCddLFxyXG4gICAgICBsaW1lWyc3MDAnXSxcclxuICAgICAgbGltZVsnNTAwJ10sXHJcbiAgICAgIGxpbWVbJzMwMCddLFxyXG4gICAgICBsaW1lWycxMDAnXSxcclxuICAgIF0sXHJcbiAgICBbXHJcbiAgICAgIHllbGxvd1snOTAwJ10sXHJcbiAgICAgIHllbGxvd1snNzAwJ10sXHJcbiAgICAgIHllbGxvd1snNTAwJ10sXHJcbiAgICAgIHllbGxvd1snMzAwJ10sXHJcbiAgICAgIHllbGxvd1snMTAwJ10sXHJcbiAgICBdLFxyXG4gICAgW1xyXG4gICAgICBhbWJlclsnOTAwJ10sXHJcbiAgICAgIGFtYmVyWyc3MDAnXSxcclxuICAgICAgYW1iZXJbJzUwMCddLFxyXG4gICAgICBhbWJlclsnMzAwJ10sXHJcbiAgICAgIGFtYmVyWycxMDAnXSxcclxuICAgIF0sXHJcbiAgICBbXHJcbiAgICAgIG9yYW5nZVsnOTAwJ10sXHJcbiAgICAgIG9yYW5nZVsnNzAwJ10sXHJcbiAgICAgIG9yYW5nZVsnNTAwJ10sXHJcbiAgICAgIG9yYW5nZVsnMzAwJ10sXHJcbiAgICAgIG9yYW5nZVsnMTAwJ10sXHJcbiAgICBdLFxyXG4gICAgW1xyXG4gICAgICBkZWVwT3JhbmdlWyc5MDAnXSxcclxuICAgICAgZGVlcE9yYW5nZVsnNzAwJ10sXHJcbiAgICAgIGRlZXBPcmFuZ2VbJzUwMCddLFxyXG4gICAgICBkZWVwT3JhbmdlWyczMDAnXSxcclxuICAgICAgZGVlcE9yYW5nZVsnMTAwJ10sXHJcbiAgICBdLFxyXG4gICAgW1xyXG4gICAgICBicm93blsnOTAwJ10sXHJcbiAgICAgIGJyb3duWyc3MDAnXSxcclxuICAgICAgYnJvd25bJzUwMCddLFxyXG4gICAgICBicm93blsnMzAwJ10sXHJcbiAgICAgIGJyb3duWycxMDAnXSxcclxuICAgIF0sXHJcbiAgICBbXHJcbiAgICAgIGJsdWVHcmV5Wyc5MDAnXSxcclxuICAgICAgYmx1ZUdyZXlbJzcwMCddLFxyXG4gICAgICBibHVlR3JleVsnNTAwJ10sXHJcbiAgICAgIGJsdWVHcmV5WyczMDAnXSxcclxuICAgICAgYmx1ZUdyZXlbJzEwMCddLFxyXG4gICAgXSxcclxuICAgIFsnIzAwMDAwMCcsICcjNTI1MjUyJywgJyM5Njk2OTYnLCAnI0Q5RDlEOScsICcjRkZGRkZGJ10sXHJcbiAgXTtcclxuICBASW5wdXQoKSB6RGVwdGg6IHpEZXB0aCA9IDE7XHJcbiAgQElucHV0KCkgcmFkaXVzID0gMTtcclxuICBASW5wdXQoKSBiYWNrZ3JvdW5kID0gJyNmZmYnO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVQaWNrZXJDaGFuZ2UoeyBkYXRhLCAkZXZlbnQgfSkge1xyXG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UoZGF0YSwgJGV2ZW50KTtcclxuICB9XHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBTd2F0Y2hlc0NvbXBvbmVudCxcclxuICAgIFN3YXRjaGVzR3JvdXBDb21wb25lbnQsXHJcbiAgICBTd2F0Y2hlc0NvbG9yQ29tcG9uZW50LFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1N3YXRjaGVzQ29tcG9uZW50LCBTd2F0Y2hlc0dyb3VwQ29tcG9uZW50LCBTd2F0Y2hlc0NvbG9yQ29tcG9uZW50XSxcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBTd2F0Y2hNb2R1bGUsIFJhaXNlZE1vZHVsZV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb2xvclN3YXRjaGVzTW9kdWxlIHt9XHJcbiJdfQ==