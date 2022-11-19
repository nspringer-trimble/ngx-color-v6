import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, NgModule, } from '@angular/core';
import { AlphaModule, CheckboardModule, ColorWrap, EditableInputModule, HueModule, SaturationModule, SwatchModule, isValidHex, } from 'ngx-color';
import { SketchFieldsComponent } from './sketch-fields.component';
import { SketchPresetColorsComponent } from './sketch-preset-colors.component';
export class SketchComponent extends ColorWrap {
    constructor() {
        super();
        /** Remove alpha slider and options from picker */
        this.disableAlpha = false;
        /** Hex strings for default colors at bottom of picker */
        this.presetColors = [
            '#D0021B',
            '#F5A623',
            '#F8E71C',
            '#8B572A',
            '#7ED321',
            '#417505',
            '#BD10E0',
            '#9013FE',
            '#4A90E2',
            '#50E3C2',
            '#B8E986',
            '#000000',
            '#4A4A4A',
            '#9B9B9B',
            '#FFFFFF',
        ];
        /** Width of picker */
        this.width = 200;
    }
    afterValidChange() {
        const alpha = this.disableAlpha ? 1 : this.rgb.a;
        this.activeBackground = `rgba(${this.rgb.r}, ${this.rgb.g}, ${this.rgb.b}, ${alpha})`;
    }
    handleValueChange({ data, $event }) {
        this.handleChange(data, $event);
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
SketchComponent.decorators = [
    { type: Component, args: [{
                selector: 'color-sketch',
                template: `
  <div class="sketch-picker {{ className }}" [style.width]="width">
    <div class="sketch-saturation">
      <color-saturation [hsl]="hsl" [hsv]="hsv"
        (onChange)="handleValueChange($event)"
      >
      </color-saturation>
    </div>
    <div class="sketch-controls">
      <div class="sketch-sliders">
        <div class="sketch-hue">
          <color-hue [hsl]="hsl"
            (onChange)="handleValueChange($event)"
          ></color-hue>
        </div>
        <div class="sketch-alpha" *ngIf="disableAlpha === false">
          <color-alpha
            [radius]="2" [rgb]="rgb" [hsl]="hsl"
            (onChange)="handleValueChange($event)"
          ></color-alpha>
        </div>
      </div>
      <div class="sketch-color">
        <color-checkboard></color-checkboard>
        <div class="sketch-active" [style.background]="activeBackground"></div>
      </div>
    </div>
    <div class="sketch-fields-container">
      <color-sketch-fields
        [rgb]="rgb" [hsl]="hsl" [hex]="hex"
        [disableAlpha]="disableAlpha"
        (onChange)="handleValueChange($event)"
      ></color-sketch-fields>
    </div>
    <div class="sketch-swatches-container" *ngIf="presetColors && presetColors.length">
      <color-sketch-preset-colors
        [colors]="presetColors"
        (onClick)="handleBlockChange($event)"
        (onSwatchHover)="onSwatchHover.emit($event)"
      ></color-sketch-preset-colors>
    </div>
  </div>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                styles: [`
    .sketch-picker {
      padding: 10px 10px 3px;
      box-sizing: initial;
      background: #fff;
      border-radius: 4px;
      box-shadow: 0 0 0 1px rgba(0,0,0,.15), 0 8px 16px rgba(0,0,0,.15);
    }
    .sketch-saturation {
      width: 100%;
      padding-bottom: 75%;
      position: relative;
      overflow: hidden;
    }
    .sketch-fields-container {
      display: block;
    }
    .sketch-swatches-container {
      display: block;
    }
    .sketch-controls {
      display: flex;
    }
    .sketch-sliders {
      padding: 4px 0px;
      -webkit-box-flex: 1;
      flex: 1 1 0%;
    }
    .sketch-hue {
      position: relative;
      height: 10px;
      overflow: hidden;
    }
    .sketch-alpha {
      position: relative;
      height: 10px;
      margin-top: 4px;
      overflow: hidden;
    }
    .sketch-color {
      width: 24px;
      height: 24px;
      position: relative;
      margin-top: 4px;
      margin-left: 4px;
      border-radius: 3px;
    }
    .sketch-active {
      position: absolute;
      top: 0px;
      right: 0px;
      bottom: 0px;
      left: 0px;
      border-radius: 2px;
      box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.25) 0px 0px 4px inset;
    }
    :host-context([dir=rtl]) .sketch-color {
      margin-right: 4px;
      margin-left: 0;
    }
  `]
            },] }
];
SketchComponent.ctorParameters = () => [];
SketchComponent.propDecorators = {
    disableAlpha: [{ type: Input }],
    presetColors: [{ type: Input }],
    width: [{ type: Input }]
};
export class ColorSketchModule {
}
ColorSketchModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    SketchComponent,
                    SketchFieldsComponent,
                    SketchPresetColorsComponent,
                ],
                exports: [
                    SketchComponent,
                    SketchFieldsComponent,
                    SketchPresetColorsComponent,
                ],
                imports: [
                    CommonModule,
                    AlphaModule,
                    CheckboardModule,
                    EditableInputModule,
                    HueModule,
                    SaturationModule,
                    SwatchModule,
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tldGNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvc2tldGNoLyIsInNvdXJjZXMiOlsic2tldGNoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsS0FBSyxFQUNMLFFBQVEsR0FDVCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQ0wsV0FBVyxFQUNYLGdCQUFnQixFQUNoQixTQUFTLEVBQ1QsbUJBQW1CLEVBQ25CLFNBQVMsRUFDVCxnQkFBZ0IsRUFDaEIsWUFBWSxFQUNaLFVBQVUsR0FDWCxNQUFNLFdBQVcsQ0FBQztBQUNuQixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQWlIL0UsTUFBTSxPQUFPLGVBQWdCLFNBQVEsU0FBUztJQXdCNUM7UUFDRSxLQUFLLEVBQUUsQ0FBQztRQXhCVixrREFBa0Q7UUFDekMsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDOUIseURBQXlEO1FBQ2hELGlCQUFZLEdBQUc7WUFDdEIsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1NBQ1YsQ0FBQztRQUNGLHNCQUFzQjtRQUNiLFVBQUssR0FBRyxHQUFHLENBQUM7SUFJckIsQ0FBQztJQUNELGdCQUFnQjtRQUNkLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFFBQVEsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssS0FBSyxHQUFHLENBQUM7SUFDeEYsQ0FBQztJQUNELGlCQUFpQixDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRTtRQUNoQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBQ0QsaUJBQWlCLENBQUMsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFO1FBQy9CLElBQUksVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ25CLGtCQUFrQjtZQUNsQixJQUFJLENBQUMsWUFBWSxDQUNmO2dCQUNFLEdBQUc7Z0JBQ0gsTUFBTSxFQUFFLEtBQUs7YUFDZCxFQUNELE1BQU0sQ0FDUCxDQUFDO1NBQ0g7SUFDSCxDQUFDOzs7WUE1SkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2dCQUN4QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTBDVDtnQkFnRUQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLG1CQUFtQixFQUFFLEtBQUs7eUJBL0R4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBNEREO2FBSUY7Ozs7MkJBR0UsS0FBSzsyQkFFTCxLQUFLO29CQWtCTCxLQUFLOztBQStDUixNQUFNLE9BQU8saUJBQWlCOzs7WUFyQjdCLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUU7b0JBQ1osZUFBZTtvQkFDZixxQkFBcUI7b0JBQ3JCLDJCQUEyQjtpQkFDNUI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLGVBQWU7b0JBQ2YscUJBQXFCO29CQUNyQiwyQkFBMkI7aUJBQzVCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLFdBQVc7b0JBQ1gsZ0JBQWdCO29CQUNoQixtQkFBbUI7b0JBQ25CLFNBQVM7b0JBQ1QsZ0JBQWdCO29CQUNoQixZQUFZO2lCQUNiO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBJbnB1dCxcclxuICBOZ01vZHVsZSxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7XHJcbiAgQWxwaGFNb2R1bGUsXHJcbiAgQ2hlY2tib2FyZE1vZHVsZSxcclxuICBDb2xvcldyYXAsXHJcbiAgRWRpdGFibGVJbnB1dE1vZHVsZSxcclxuICBIdWVNb2R1bGUsXHJcbiAgU2F0dXJhdGlvbk1vZHVsZSxcclxuICBTd2F0Y2hNb2R1bGUsXHJcbiAgaXNWYWxpZEhleCxcclxufSBmcm9tICduZ3gtY29sb3InO1xyXG5pbXBvcnQgeyBTa2V0Y2hGaWVsZHNDb21wb25lbnQgfSBmcm9tICcuL3NrZXRjaC1maWVsZHMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2tldGNoUHJlc2V0Q29sb3JzQ29tcG9uZW50IH0gZnJvbSAnLi9za2V0Y2gtcHJlc2V0LWNvbG9ycy5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjb2xvci1za2V0Y2gnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgPGRpdiBjbGFzcz1cInNrZXRjaC1waWNrZXIge3sgY2xhc3NOYW1lIH19XCIgW3N0eWxlLndpZHRoXT1cIndpZHRoXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwic2tldGNoLXNhdHVyYXRpb25cIj5cclxuICAgICAgPGNvbG9yLXNhdHVyYXRpb24gW2hzbF09XCJoc2xcIiBbaHN2XT1cImhzdlwiXHJcbiAgICAgICAgKG9uQ2hhbmdlKT1cImhhbmRsZVZhbHVlQ2hhbmdlKCRldmVudClcIlxyXG4gICAgICA+XHJcbiAgICAgIDwvY29sb3Itc2F0dXJhdGlvbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInNrZXRjaC1jb250cm9sc1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwic2tldGNoLXNsaWRlcnNcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwic2tldGNoLWh1ZVwiPlxyXG4gICAgICAgICAgPGNvbG9yLWh1ZSBbaHNsXT1cImhzbFwiXHJcbiAgICAgICAgICAgIChvbkNoYW5nZSk9XCJoYW5kbGVWYWx1ZUNoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgICAgID48L2NvbG9yLWh1ZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwic2tldGNoLWFscGhhXCIgKm5nSWY9XCJkaXNhYmxlQWxwaGEgPT09IGZhbHNlXCI+XHJcbiAgICAgICAgICA8Y29sb3ItYWxwaGFcclxuICAgICAgICAgICAgW3JhZGl1c109XCIyXCIgW3JnYl09XCJyZ2JcIiBbaHNsXT1cImhzbFwiXHJcbiAgICAgICAgICAgIChvbkNoYW5nZSk9XCJoYW5kbGVWYWx1ZUNoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgICAgID48L2NvbG9yLWFscGhhPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cInNrZXRjaC1jb2xvclwiPlxyXG4gICAgICAgIDxjb2xvci1jaGVja2JvYXJkPjwvY29sb3ItY2hlY2tib2FyZD5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwic2tldGNoLWFjdGl2ZVwiIFtzdHlsZS5iYWNrZ3JvdW5kXT1cImFjdGl2ZUJhY2tncm91bmRcIj48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJza2V0Y2gtZmllbGRzLWNvbnRhaW5lclwiPlxyXG4gICAgICA8Y29sb3Itc2tldGNoLWZpZWxkc1xyXG4gICAgICAgIFtyZ2JdPVwicmdiXCIgW2hzbF09XCJoc2xcIiBbaGV4XT1cImhleFwiXHJcbiAgICAgICAgW2Rpc2FibGVBbHBoYV09XCJkaXNhYmxlQWxwaGFcIlxyXG4gICAgICAgIChvbkNoYW5nZSk9XCJoYW5kbGVWYWx1ZUNoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgPjwvY29sb3Itc2tldGNoLWZpZWxkcz5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInNrZXRjaC1zd2F0Y2hlcy1jb250YWluZXJcIiAqbmdJZj1cInByZXNldENvbG9ycyAmJiBwcmVzZXRDb2xvcnMubGVuZ3RoXCI+XHJcbiAgICAgIDxjb2xvci1za2V0Y2gtcHJlc2V0LWNvbG9yc1xyXG4gICAgICAgIFtjb2xvcnNdPVwicHJlc2V0Q29sb3JzXCJcclxuICAgICAgICAob25DbGljayk9XCJoYW5kbGVCbG9ja0NoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgICAob25Td2F0Y2hIb3Zlcik9XCJvblN3YXRjaEhvdmVyLmVtaXQoJGV2ZW50KVwiXHJcbiAgICAgID48L2NvbG9yLXNrZXRjaC1wcmVzZXQtY29sb3JzPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgYCxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgIC5za2V0Y2gtcGlja2VyIHtcclxuICAgICAgcGFkZGluZzogMTBweCAxMHB4IDNweDtcclxuICAgICAgYm94LXNpemluZzogaW5pdGlhbDtcclxuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICBib3gtc2hhZG93OiAwIDAgMCAxcHggcmdiYSgwLDAsMCwuMTUpLCAwIDhweCAxNnB4IHJnYmEoMCwwLDAsLjE1KTtcclxuICAgIH1cclxuICAgIC5za2V0Y2gtc2F0dXJhdGlvbiB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogNzUlO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB9XHJcbiAgICAuc2tldGNoLWZpZWxkcy1jb250YWluZXIge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICAgIC5za2V0Y2gtc3dhdGNoZXMtY29udGFpbmVyIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgICAuc2tldGNoLWNvbnRyb2xzIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgIH1cclxuICAgIC5za2V0Y2gtc2xpZGVycyB7XHJcbiAgICAgIHBhZGRpbmc6IDRweCAwcHg7XHJcbiAgICAgIC13ZWJraXQtYm94LWZsZXg6IDE7XHJcbiAgICAgIGZsZXg6IDEgMSAwJTtcclxuICAgIH1cclxuICAgIC5za2V0Y2gtaHVlIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB9XHJcbiAgICAuc2tldGNoLWFscGhhIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIH1cclxuICAgIC5za2V0Y2gtY29sb3Ige1xyXG4gICAgICB3aWR0aDogMjRweDtcclxuICAgICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIG1hcmdpbi10b3A6IDRweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgfVxyXG4gICAgLnNrZXRjaC1hY3RpdmUge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMHB4O1xyXG4gICAgICByaWdodDogMHB4O1xyXG4gICAgICBib3R0b206IDBweDtcclxuICAgICAgbGVmdDogMHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNSkgMHB4IDBweCAwcHggMXB4IGluc2V0LCByZ2JhKDAsIDAsIDAsIDAuMjUpIDBweCAwcHggNHB4IGluc2V0O1xyXG4gICAgfVxyXG4gICAgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIC5za2V0Y2gtY29sb3Ige1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICB9XHJcbiAgYCxcclxuICBdLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2tldGNoQ29tcG9uZW50IGV4dGVuZHMgQ29sb3JXcmFwIHtcclxuICAvKiogUmVtb3ZlIGFscGhhIHNsaWRlciBhbmQgb3B0aW9ucyBmcm9tIHBpY2tlciAqL1xyXG4gIEBJbnB1dCgpIGRpc2FibGVBbHBoYSA9IGZhbHNlO1xyXG4gIC8qKiBIZXggc3RyaW5ncyBmb3IgZGVmYXVsdCBjb2xvcnMgYXQgYm90dG9tIG9mIHBpY2tlciAqL1xyXG4gIEBJbnB1dCgpIHByZXNldENvbG9ycyA9IFtcclxuICAgICcjRDAwMjFCJyxcclxuICAgICcjRjVBNjIzJyxcclxuICAgICcjRjhFNzFDJyxcclxuICAgICcjOEI1NzJBJyxcclxuICAgICcjN0VEMzIxJyxcclxuICAgICcjNDE3NTA1JyxcclxuICAgICcjQkQxMEUwJyxcclxuICAgICcjOTAxM0ZFJyxcclxuICAgICcjNEE5MEUyJyxcclxuICAgICcjNTBFM0MyJyxcclxuICAgICcjQjhFOTg2JyxcclxuICAgICcjMDAwMDAwJyxcclxuICAgICcjNEE0QTRBJyxcclxuICAgICcjOUI5QjlCJyxcclxuICAgICcjRkZGRkZGJyxcclxuICBdO1xyXG4gIC8qKiBXaWR0aCBvZiBwaWNrZXIgKi9cclxuICBASW5wdXQoKSB3aWR0aCA9IDIwMDtcclxuICBhY3RpdmVCYWNrZ3JvdW5kITogc3RyaW5nO1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcbiAgYWZ0ZXJWYWxpZENoYW5nZSgpIHtcclxuICAgIGNvbnN0IGFscGhhID0gdGhpcy5kaXNhYmxlQWxwaGEgPyAxIDogdGhpcy5yZ2IuYTtcclxuICAgIHRoaXMuYWN0aXZlQmFja2dyb3VuZCA9IGByZ2JhKCR7dGhpcy5yZ2Iucn0sICR7dGhpcy5yZ2IuZ30sICR7dGhpcy5yZ2IuYn0sICR7YWxwaGF9KWA7XHJcbiAgfVxyXG4gIGhhbmRsZVZhbHVlQ2hhbmdlKHsgZGF0YSwgJGV2ZW50IH0pIHtcclxuICAgIHRoaXMuaGFuZGxlQ2hhbmdlKGRhdGEsICRldmVudCk7XHJcbiAgfVxyXG4gIGhhbmRsZUJsb2NrQ2hhbmdlKHsgaGV4LCAkZXZlbnQgfSkge1xyXG4gICAgaWYgKGlzVmFsaWRIZXgoaGV4KSkge1xyXG4gICAgICAvLyB0aGlzLmhleCA9IGhleDtcclxuICAgICAgdGhpcy5oYW5kbGVDaGFuZ2UoXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaGV4LFxyXG4gICAgICAgICAgc291cmNlOiAnaGV4JyxcclxuICAgICAgICB9LFxyXG4gICAgICAgICRldmVudCxcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBTa2V0Y2hDb21wb25lbnQsXHJcbiAgICBTa2V0Y2hGaWVsZHNDb21wb25lbnQsXHJcbiAgICBTa2V0Y2hQcmVzZXRDb2xvcnNDb21wb25lbnQsXHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBTa2V0Y2hDb21wb25lbnQsXHJcbiAgICBTa2V0Y2hGaWVsZHNDb21wb25lbnQsXHJcbiAgICBTa2V0Y2hQcmVzZXRDb2xvcnNDb21wb25lbnQsXHJcbiAgXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBBbHBoYU1vZHVsZSxcclxuICAgIENoZWNrYm9hcmRNb2R1bGUsXHJcbiAgICBFZGl0YWJsZUlucHV0TW9kdWxlLFxyXG4gICAgSHVlTW9kdWxlLFxyXG4gICAgU2F0dXJhdGlvbk1vZHVsZSxcclxuICAgIFN3YXRjaE1vZHVsZSxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29sb3JTa2V0Y2hNb2R1bGUge31cclxuIl19