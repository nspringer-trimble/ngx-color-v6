import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, NgModule, Output, } from '@angular/core';
import { ColorWrap, AlphaModule, EditableInputModule, HueModule, SaturationModule, SwatchModule, } from 'ngx-color';
import { PhotoshopButtonComponent } from './photoshop-button.component';
import { PhotoshopFieldsComponent } from './photoshop-fields.component';
import { PhotoshopPreviewsComponent } from './photoshop-previews.component';
export class PhotoshopComponent extends ColorWrap {
    constructor() {
        super();
        /** Title text */
        this.header = 'Color Picker';
        this.onAccept = new EventEmitter();
        this.onCancel = new EventEmitter();
        this.circle = {
            width: '12px',
            height: '12px',
            borderRadius: '6px',
            boxShadow: 'rgb(255, 255, 255) 0px 0px 0px 1px inset',
            transform: 'translate(-6px, -10px)',
        };
    }
    handleValueChange({ data, $event }) {
        this.handleChange(data, $event);
    }
}
PhotoshopComponent.decorators = [
    { type: Component, args: [{
                selector: 'color-photoshop',
                template: `
  <div class="photoshop-picker {{ className }}">
    <div class="photoshop-head">{{ header }}</div>
    <div class="photoshop-body">
      <div class="photoshop-saturation">
        <color-saturation
          [hsl]="hsl" [hsv]="hsv" [circle]="circle"
          (onChange)="handleValueChange($event)"
        ></color-saturation>
      </div>
      <div class="photoshop-hue">
        <color-hue direction="vertical"
          [hsl]="hsl" [hidePointer]="true"
          (onChange)="handleValueChange($event)"
        ></color-hue>
      </div>
      <div class="photoshop-controls">
        <div class="photoshop-top">
          <div class="photoshop-previews">
            <color-photoshop-previews
              [rgb]="rgb" [currentColor]="currentColor"
            ></color-photoshop-previews>
          </div>
          <div class="photoshop-actions">
            <color-photoshop-button label="OK"
              [active]="true" (onClick)="onAccept.emit($event)"
            ></color-photoshop-button>
            <color-photoshop-button label="Cancel"
              (onClick)="onCancel.emit($event)"
            >
            </color-photoshop-button>
            <color-photoshop-fields
              [rgb]="rgb" [hex]="hex" [hsv]="hsv"
              (onChange)="handleValueChange($event)"
            ></color-photoshop-fields>
          </div>
        </div>
      </div>
    </div>
  </div>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                styles: [`
    .photoshop-picker {
      background: rgb(220, 220, 220);
      border-radius: 4px;
      box-shadow: rgba(0, 0, 0, 0.25) 0px 0px 0px 1px, rgba(0, 0, 0, 0.15) 0px 8px 16px;
      box-sizing: initial; width: 513px;
    }
    .photoshop-head {
      background-image: linear-gradient(
        -180deg,
        rgb(240, 240, 240) 0%,
        rgb(212, 212, 212) 100%
      );
      border-bottom: 1px solid rgb(177, 177, 177);
      box-shadow: rgba(255, 255, 255, 0.2) 0px 1px 0px 0px inset,
        rgba(0, 0, 0, 0.02) 0px -1px 0px 0px inset;
      height: 23px;
      line-height: 24px;
      border-radius: 4px 4px 0px 0px;
      font-size: 13px;
      color: rgb(77, 77, 77);
      text-align: center;
    }
    .photoshop-body {
      padding: 15px 15px 0px;
      display: flex;
    }
    .photoshop-saturation {
      width: 256px;
      height: 256px;
      position: relative;
      border-width: 2px;
      border-style: solid;
      border-color: rgb(179, 179, 179) rgb(179, 179, 179) rgb(240, 240, 240);
      border-image: initial;
      overflow: hidden;
    }
    .photoshop-hue {
      position: relative;
      height: 256px;
      width: 23px;
      margin-left: 10px;
      border-width: 2px;
      border-style: solid;
      border-color: rgb(179, 179, 179) rgb(179, 179, 179) rgb(240, 240, 240);
      border-image: initial;
    }
    .photoshop-controls {
      width: 180px;
      margin-left: 10px;
    }
    .photoshop-top {
      display: flex;
    }
    .photoshop-previews {
      width: 60px;
    }
    .photoshop-actions {
      -webkit-box-flex: 1;
      flex: 1 1 0%;
      margin-left: 20px;
    }
  `]
            },] }
];
PhotoshopComponent.ctorParameters = () => [];
PhotoshopComponent.propDecorators = {
    header: [{ type: Input }],
    onAccept: [{ type: Output }],
    onCancel: [{ type: Output }]
};
export class ColorPhotoshopModule {
}
ColorPhotoshopModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    PhotoshopComponent,
                    PhotoshopPreviewsComponent,
                    PhotoshopButtonComponent,
                    PhotoshopFieldsComponent,
                ],
                exports: [
                    PhotoshopComponent,
                    PhotoshopPreviewsComponent,
                    PhotoshopButtonComponent,
                    PhotoshopFieldsComponent,
                ],
                imports: [
                    CommonModule,
                    EditableInputModule,
                    HueModule,
                    AlphaModule,
                    SwatchModule,
                    SaturationModule,
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGhvdG9zaG9wLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvcGhvdG9zaG9wLyIsInNvdXJjZXMiOlsicGhvdG9zaG9wLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFDTCxRQUFRLEVBQ1IsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFDTCxTQUFTLEVBQ1QsV0FBVyxFQUNYLG1CQUFtQixFQUNuQixTQUFTLEVBQ1QsZ0JBQWdCLEVBQ2hCLFlBQVksR0FDYixNQUFNLFdBQVcsQ0FBQztBQUNuQixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQWlINUUsTUFBTSxPQUFPLGtCQUFtQixTQUFRLFNBQVM7SUFZL0M7UUFDRSxLQUFLLEVBQUUsQ0FBQztRQVpWLGlCQUFpQjtRQUNSLFdBQU0sR0FBRyxjQUFjLENBQUM7UUFDdkIsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFTLENBQUM7UUFDckMsYUFBUSxHQUFHLElBQUksWUFBWSxFQUFTLENBQUM7UUFDL0MsV0FBTSxHQUFHO1lBQ1AsS0FBSyxFQUFFLE1BQU07WUFDYixNQUFNLEVBQUUsTUFBTTtZQUNkLFlBQVksRUFBRSxLQUFLO1lBQ25CLFNBQVMsRUFBRSwwQ0FBMEM7WUFDckQsU0FBUyxFQUFFLHdCQUF3QjtTQUNwQyxDQUFDO0lBR0YsQ0FBQztJQUNELGlCQUFpQixDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRTtRQUNoQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNsQyxDQUFDOzs7WUFoSUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXdDVDtnQkFrRUQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLG1CQUFtQixFQUFFLEtBQUs7eUJBakV4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0E4REQ7YUFJRjs7OztxQkFHRSxLQUFLO3VCQUNMLE1BQU07dUJBQ04sTUFBTTs7QUFzQ1QsTUFBTSxPQUFPLG9CQUFvQjs7O1lBdEJoQyxRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFO29CQUNaLGtCQUFrQjtvQkFDbEIsMEJBQTBCO29CQUMxQix3QkFBd0I7b0JBQ3hCLHdCQUF3QjtpQkFDekI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLGtCQUFrQjtvQkFDbEIsMEJBQTBCO29CQUMxQix3QkFBd0I7b0JBQ3hCLHdCQUF3QjtpQkFDekI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osbUJBQW1CO29CQUNuQixTQUFTO29CQUNULFdBQVc7b0JBQ1gsWUFBWTtvQkFDWixnQkFBZ0I7aUJBQ2pCO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgTmdNb2R1bGUsXHJcbiAgT3V0cHV0LFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHtcclxuICBDb2xvcldyYXAsXHJcbiAgQWxwaGFNb2R1bGUsXHJcbiAgRWRpdGFibGVJbnB1dE1vZHVsZSxcclxuICBIdWVNb2R1bGUsXHJcbiAgU2F0dXJhdGlvbk1vZHVsZSxcclxuICBTd2F0Y2hNb2R1bGUsXHJcbn0gZnJvbSAnbmd4LWNvbG9yJztcclxuaW1wb3J0IHsgUGhvdG9zaG9wQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9waG90b3Nob3AtYnV0dG9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBob3Rvc2hvcEZpZWxkc0NvbXBvbmVudCB9IGZyb20gJy4vcGhvdG9zaG9wLWZpZWxkcy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQaG90b3Nob3BQcmV2aWV3c0NvbXBvbmVudCB9IGZyb20gJy4vcGhvdG9zaG9wLXByZXZpZXdzLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NvbG9yLXBob3Rvc2hvcCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICA8ZGl2IGNsYXNzPVwicGhvdG9zaG9wLXBpY2tlciB7eyBjbGFzc05hbWUgfX1cIj5cclxuICAgIDxkaXYgY2xhc3M9XCJwaG90b3Nob3AtaGVhZFwiPnt7IGhlYWRlciB9fTwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInBob3Rvc2hvcC1ib2R5XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJwaG90b3Nob3Atc2F0dXJhdGlvblwiPlxyXG4gICAgICAgIDxjb2xvci1zYXR1cmF0aW9uXHJcbiAgICAgICAgICBbaHNsXT1cImhzbFwiIFtoc3ZdPVwiaHN2XCIgW2NpcmNsZV09XCJjaXJjbGVcIlxyXG4gICAgICAgICAgKG9uQ2hhbmdlKT1cImhhbmRsZVZhbHVlQ2hhbmdlKCRldmVudClcIlxyXG4gICAgICAgID48L2NvbG9yLXNhdHVyYXRpb24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicGhvdG9zaG9wLWh1ZVwiPlxyXG4gICAgICAgIDxjb2xvci1odWUgZGlyZWN0aW9uPVwidmVydGljYWxcIlxyXG4gICAgICAgICAgW2hzbF09XCJoc2xcIiBbaGlkZVBvaW50ZXJdPVwidHJ1ZVwiXHJcbiAgICAgICAgICAob25DaGFuZ2UpPVwiaGFuZGxlVmFsdWVDaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAgICAgPjwvY29sb3ItaHVlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cInBob3Rvc2hvcC1jb250cm9sc1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwaG90b3Nob3AtdG9wXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicGhvdG9zaG9wLXByZXZpZXdzXCI+XHJcbiAgICAgICAgICAgIDxjb2xvci1waG90b3Nob3AtcHJldmlld3NcclxuICAgICAgICAgICAgICBbcmdiXT1cInJnYlwiIFtjdXJyZW50Q29sb3JdPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgICAgICAgPjwvY29sb3ItcGhvdG9zaG9wLXByZXZpZXdzPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicGhvdG9zaG9wLWFjdGlvbnNcIj5cclxuICAgICAgICAgICAgPGNvbG9yLXBob3Rvc2hvcC1idXR0b24gbGFiZWw9XCJPS1wiXHJcbiAgICAgICAgICAgICAgW2FjdGl2ZV09XCJ0cnVlXCIgKG9uQ2xpY2spPVwib25BY2NlcHQuZW1pdCgkZXZlbnQpXCJcclxuICAgICAgICAgICAgPjwvY29sb3ItcGhvdG9zaG9wLWJ1dHRvbj5cclxuICAgICAgICAgICAgPGNvbG9yLXBob3Rvc2hvcC1idXR0b24gbGFiZWw9XCJDYW5jZWxcIlxyXG4gICAgICAgICAgICAgIChvbkNsaWNrKT1cIm9uQ2FuY2VsLmVtaXQoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgPC9jb2xvci1waG90b3Nob3AtYnV0dG9uPlxyXG4gICAgICAgICAgICA8Y29sb3ItcGhvdG9zaG9wLWZpZWxkc1xyXG4gICAgICAgICAgICAgIFtyZ2JdPVwicmdiXCIgW2hleF09XCJoZXhcIiBbaHN2XT1cImhzdlwiXHJcbiAgICAgICAgICAgICAgKG9uQ2hhbmdlKT1cImhhbmRsZVZhbHVlQ2hhbmdlKCRldmVudClcIlxyXG4gICAgICAgICAgICA+PC9jb2xvci1waG90b3Nob3AtZmllbGRzPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgYCxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgIC5waG90b3Nob3AtcGlja2VyIHtcclxuICAgICAgYmFja2dyb3VuZDogcmdiKDIyMCwgMjIwLCAyMjApO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yNSkgMHB4IDBweCAwcHggMXB4LCByZ2JhKDAsIDAsIDAsIDAuMTUpIDBweCA4cHggMTZweDtcclxuICAgICAgYm94LXNpemluZzogaW5pdGlhbDsgd2lkdGg6IDUxM3B4O1xyXG4gICAgfVxyXG4gICAgLnBob3Rvc2hvcC1oZWFkIHtcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgIC0xODBkZWcsXHJcbiAgICAgICAgcmdiKDI0MCwgMjQwLCAyNDApIDAlLFxyXG4gICAgICAgIHJnYigyMTIsIDIxMiwgMjEyKSAxMDAlXHJcbiAgICAgICk7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMTc3LCAxNzcsIDE3Nyk7XHJcbiAgICAgIGJveC1zaGFkb3c6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKSAwcHggMXB4IDBweCAwcHggaW5zZXQsXHJcbiAgICAgICAgcmdiYSgwLCAwLCAwLCAwLjAyKSAwcHggLTFweCAwcHggMHB4IGluc2V0O1xyXG4gICAgICBoZWlnaHQ6IDIzcHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA0cHggNHB4IDBweCAwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgY29sb3I6IHJnYig3NywgNzcsIDc3KTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLnBob3Rvc2hvcC1ib2R5IHtcclxuICAgICAgcGFkZGluZzogMTVweCAxNXB4IDBweDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgIH1cclxuICAgIC5waG90b3Nob3Atc2F0dXJhdGlvbiB7XHJcbiAgICAgIHdpZHRoOiAyNTZweDtcclxuICAgICAgaGVpZ2h0OiAyNTZweDtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBib3JkZXItd2lkdGg6IDJweDtcclxuICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgYm9yZGVyLWNvbG9yOiByZ2IoMTc5LCAxNzksIDE3OSkgcmdiKDE3OSwgMTc5LCAxNzkpIHJnYigyNDAsIDI0MCwgMjQwKTtcclxuICAgICAgYm9yZGVyLWltYWdlOiBpbml0aWFsO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgfVxyXG4gICAgLnBob3Rvc2hvcC1odWUge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGhlaWdodDogMjU2cHg7XHJcbiAgICAgIHdpZHRoOiAyM3B4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgYm9yZGVyLXdpZHRoOiAycHg7XHJcbiAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogcmdiKDE3OSwgMTc5LCAxNzkpIHJnYigxNzksIDE3OSwgMTc5KSByZ2IoMjQwLCAyNDAsIDI0MCk7XHJcbiAgICAgIGJvcmRlci1pbWFnZTogaW5pdGlhbDtcclxuICAgIH1cclxuICAgIC5waG90b3Nob3AtY29udHJvbHMge1xyXG4gICAgICB3aWR0aDogMTgwcHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLnBob3Rvc2hvcC10b3Age1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgfVxyXG4gICAgLnBob3Rvc2hvcC1wcmV2aWV3cyB7XHJcbiAgICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgfVxyXG4gICAgLnBob3Rvc2hvcC1hY3Rpb25zIHtcclxuICAgICAgLXdlYmtpdC1ib3gtZmxleDogMTtcclxuICAgICAgZmxleDogMSAxIDAlO1xyXG4gICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIH1cclxuICBgLFxyXG4gIF0sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQaG90b3Nob3BDb21wb25lbnQgZXh0ZW5kcyBDb2xvcldyYXAge1xyXG4gIC8qKiBUaXRsZSB0ZXh0ICovXHJcbiAgQElucHV0KCkgaGVhZGVyID0gJ0NvbG9yIFBpY2tlcic7XHJcbiAgQE91dHB1dCgpIG9uQWNjZXB0ID0gbmV3IEV2ZW50RW1pdHRlcjxFdmVudD4oKTtcclxuICBAT3V0cHV0KCkgb25DYW5jZWwgPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50PigpO1xyXG4gIGNpcmNsZSA9IHtcclxuICAgIHdpZHRoOiAnMTJweCcsXHJcbiAgICBoZWlnaHQ6ICcxMnB4JyxcclxuICAgIGJvcmRlclJhZGl1czogJzZweCcsXHJcbiAgICBib3hTaGFkb3c6ICdyZ2IoMjU1LCAyNTUsIDI1NSkgMHB4IDBweCAwcHggMXB4IGluc2V0JyxcclxuICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNnB4LCAtMTBweCknLFxyXG4gIH07XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gIH1cclxuICBoYW5kbGVWYWx1ZUNoYW5nZSh7IGRhdGEsICRldmVudCB9KSB7XHJcbiAgICB0aGlzLmhhbmRsZUNoYW5nZShkYXRhLCAkZXZlbnQpO1xyXG4gIH1cclxufVxyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIFBob3Rvc2hvcENvbXBvbmVudCxcclxuICAgIFBob3Rvc2hvcFByZXZpZXdzQ29tcG9uZW50LFxyXG4gICAgUGhvdG9zaG9wQnV0dG9uQ29tcG9uZW50LFxyXG4gICAgUGhvdG9zaG9wRmllbGRzQ29tcG9uZW50LFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgUGhvdG9zaG9wQ29tcG9uZW50LFxyXG4gICAgUGhvdG9zaG9wUHJldmlld3NDb21wb25lbnQsXHJcbiAgICBQaG90b3Nob3BCdXR0b25Db21wb25lbnQsXHJcbiAgICBQaG90b3Nob3BGaWVsZHNDb21wb25lbnQsXHJcbiAgXSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBFZGl0YWJsZUlucHV0TW9kdWxlLFxyXG4gICAgSHVlTW9kdWxlLFxyXG4gICAgQWxwaGFNb2R1bGUsXHJcbiAgICBTd2F0Y2hNb2R1bGUsXHJcbiAgICBTYXR1cmF0aW9uTW9kdWxlLFxyXG4gIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb2xvclBob3Rvc2hvcE1vZHVsZSB7fVxyXG4iXX0=