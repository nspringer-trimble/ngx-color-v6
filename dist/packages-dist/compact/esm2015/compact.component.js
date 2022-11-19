import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, NgModule, } from '@angular/core';
import { ColorWrap, EditableInputModule, RaisedModule, SwatchModule, isValidHex, } from 'ngx-color';
import { CompactColorComponent } from './compact-color.component';
import { CompactFieldsComponent } from './compact-fields.component';
export class CompactComponent extends ColorWrap {
    constructor() {
        super();
        /** Color squares to display */
        this.colors = [
            '#4D4D4D',
            '#999999',
            '#FFFFFF',
            '#F44E3B',
            '#FE9200',
            '#FCDC00',
            '#DBDF00',
            '#A4DD00',
            '#68CCCA',
            '#73D8FF',
            '#AEA1FF',
            '#FDA1FF',
            '#333333',
            '#808080',
            '#cccccc',
            '#D33115',
            '#E27300',
            '#FCC400',
            '#B0BC00',
            '#68BC00',
            '#16A5A5',
            '#009CE0',
            '#7B64FF',
            '#FA28FF',
            '#000000',
            '#666666',
            '#B3B3B3',
            '#9F0500',
            '#C45100',
            '#FB9E00',
            '#808900',
            '#194D33',
            '#0C797D',
            '#0062B1',
            '#653294',
            '#AB149E',
        ];
        this.zDepth = 1;
        this.radius = 1;
        this.background = '#fff';
        this.disableAlpha = true;
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
CompactComponent.decorators = [
    { type: Component, args: [{
                selector: 'color-compact',
                template: `
  <color-raised class="color-compact" [zDepth]="zDepth" [background]="background" [radius]="radius">
    <div class="compact-picker {{ className }}">
      <div>
        <color-compact-color
          *ngFor="let color of colors" [color]="color"
          [active]="color.toLowerCase() === hex.toLowerCase()"
          (onClick)="handleBlockChange($event)"
        ></color-compact-color>
        <div class="compact-clear"></div>
      </div>
      <color-compact-fields
        [hex]="hex"
        [rgb]="rgb"
        (onChange)="handleValueChange($event)"
      ></color-compact-fields>
    </div>
  </color-raised>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                styles: [`
    .color-compact {
      background: #f6f6f6;
      radius: 4px;
    }
    .compact-picker {
      padding-top: 5px;
      padding-left: 5px;
      box-sizing: border-box;
      width: 245px;
    }
    .compact-clear {
      clear: both;
    }
  `]
            },] }
];
CompactComponent.ctorParameters = () => [];
CompactComponent.propDecorators = {
    colors: [{ type: Input }],
    zDepth: [{ type: Input }],
    radius: [{ type: Input }],
    background: [{ type: Input }]
};
export class ColorCompactModule {
}
ColorCompactModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    CompactComponent,
                    CompactColorComponent,
                    CompactFieldsComponent,
                ],
                exports: [CompactComponent, CompactColorComponent, CompactFieldsComponent],
                imports: [CommonModule, EditableInputModule, SwatchModule, RaisedModule],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGFjdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL2NvbXBhY3QvIiwic291cmNlcyI6WyJjb21wYWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsS0FBSyxFQUNMLFFBQVEsR0FDVCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQ0wsU0FBUyxFQUNULG1CQUFtQixFQUNuQixZQUFZLEVBQ1osWUFBWSxFQUNaLFVBQVUsR0FFWCxNQUFNLFdBQVcsQ0FBQztBQUNuQixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQTJDcEUsTUFBTSxPQUFPLGdCQUFpQixTQUFRLFNBQVM7SUE2QzdDO1FBQ0UsS0FBSyxFQUFFLENBQUM7UUE3Q1YsK0JBQStCO1FBQ3RCLFdBQU0sR0FBRztZQUNoQixTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7U0FDVixDQUFDO1FBQ08sV0FBTSxHQUFXLENBQUMsQ0FBQztRQUNuQixXQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsZUFBVSxHQUFHLE1BQU0sQ0FBQztRQUM3QixpQkFBWSxHQUFHLElBQUksQ0FBQztJQUlwQixDQUFDO0lBQ0QsaUJBQWlCLENBQUMsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFO1FBQy9CLElBQUksVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ25CLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQ25EO0lBQ0gsQ0FBQztJQUNELGlCQUFpQixDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRTtRQUNoQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNsQyxDQUFDOzs7WUFoR0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWtCVDtnQkFrQkQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLG1CQUFtQixFQUFFLEtBQUs7eUJBakJ4Qjs7Ozs7Ozs7Ozs7Ozs7R0FjRDthQUlGOzs7O3FCQUdFLEtBQUs7cUJBc0NMLEtBQUs7cUJBQ0wsS0FBSzt5QkFDTCxLQUFLOztBQXlCUixNQUFNLE9BQU8sa0JBQWtCOzs7WUFUOUIsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRTtvQkFDWixnQkFBZ0I7b0JBQ2hCLHFCQUFxQjtvQkFDckIsc0JBQXNCO2lCQUN2QjtnQkFDRCxPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxxQkFBcUIsRUFBRSxzQkFBc0IsQ0FBQztnQkFDMUUsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLG1CQUFtQixFQUFFLFlBQVksRUFBRSxZQUFZLENBQUM7YUFDekUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBJbnB1dCxcclxuICBOZ01vZHVsZSxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7XHJcbiAgQ29sb3JXcmFwLFxyXG4gIEVkaXRhYmxlSW5wdXRNb2R1bGUsXHJcbiAgUmFpc2VkTW9kdWxlLFxyXG4gIFN3YXRjaE1vZHVsZSxcclxuICBpc1ZhbGlkSGV4LFxyXG4gIHpEZXB0aCxcclxufSBmcm9tICduZ3gtY29sb3InO1xyXG5pbXBvcnQgeyBDb21wYWN0Q29sb3JDb21wb25lbnQgfSBmcm9tICcuL2NvbXBhY3QtY29sb3IuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29tcGFjdEZpZWxkc0NvbXBvbmVudCB9IGZyb20gJy4vY29tcGFjdC1maWVsZHMuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY29sb3ItY29tcGFjdCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICA8Y29sb3ItcmFpc2VkIGNsYXNzPVwiY29sb3ItY29tcGFjdFwiIFt6RGVwdGhdPVwiekRlcHRoXCIgW2JhY2tncm91bmRdPVwiYmFja2dyb3VuZFwiIFtyYWRpdXNdPVwicmFkaXVzXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29tcGFjdC1waWNrZXIge3sgY2xhc3NOYW1lIH19XCI+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGNvbG9yLWNvbXBhY3QtY29sb3JcclxuICAgICAgICAgICpuZ0Zvcj1cImxldCBjb2xvciBvZiBjb2xvcnNcIiBbY29sb3JdPVwiY29sb3JcIlxyXG4gICAgICAgICAgW2FjdGl2ZV09XCJjb2xvci50b0xvd2VyQ2FzZSgpID09PSBoZXgudG9Mb3dlckNhc2UoKVwiXHJcbiAgICAgICAgICAob25DbGljayk9XCJoYW5kbGVCbG9ja0NoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgICA+PC9jb2xvci1jb21wYWN0LWNvbG9yPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb21wYWN0LWNsZWFyXCI+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8Y29sb3ItY29tcGFjdC1maWVsZHNcclxuICAgICAgICBbaGV4XT1cImhleFwiXHJcbiAgICAgICAgW3JnYl09XCJyZ2JcIlxyXG4gICAgICAgIChvbkNoYW5nZSk9XCJoYW5kbGVWYWx1ZUNoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgPjwvY29sb3ItY29tcGFjdC1maWVsZHM+XHJcbiAgICA8L2Rpdj5cclxuICA8L2NvbG9yLXJhaXNlZD5cclxuICBgLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgLmNvbG9yLWNvbXBhY3Qge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZjZmNmY2O1xyXG4gICAgICByYWRpdXM6IDRweDtcclxuICAgIH1cclxuICAgIC5jb21wYWN0LXBpY2tlciB7XHJcbiAgICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICB3aWR0aDogMjQ1cHg7XHJcbiAgICB9XHJcbiAgICAuY29tcGFjdC1jbGVhciB7XHJcbiAgICAgIGNsZWFyOiBib3RoO1xyXG4gICAgfVxyXG4gIGAsXHJcbiAgXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbXBhY3RDb21wb25lbnQgZXh0ZW5kcyBDb2xvcldyYXAge1xyXG4gIC8qKiBDb2xvciBzcXVhcmVzIHRvIGRpc3BsYXkgKi9cclxuICBASW5wdXQoKSBjb2xvcnMgPSBbXHJcbiAgICAnIzRENEQ0RCcsXHJcbiAgICAnIzk5OTk5OScsXHJcbiAgICAnI0ZGRkZGRicsXHJcbiAgICAnI0Y0NEUzQicsXHJcbiAgICAnI0ZFOTIwMCcsXHJcbiAgICAnI0ZDREMwMCcsXHJcbiAgICAnI0RCREYwMCcsXHJcbiAgICAnI0E0REQwMCcsXHJcbiAgICAnIzY4Q0NDQScsXHJcbiAgICAnIzczRDhGRicsXHJcbiAgICAnI0FFQTFGRicsXHJcbiAgICAnI0ZEQTFGRicsXHJcbiAgICAnIzMzMzMzMycsXHJcbiAgICAnIzgwODA4MCcsXHJcbiAgICAnI2NjY2NjYycsXHJcbiAgICAnI0QzMzExNScsXHJcbiAgICAnI0UyNzMwMCcsXHJcbiAgICAnI0ZDQzQwMCcsXHJcbiAgICAnI0IwQkMwMCcsXHJcbiAgICAnIzY4QkMwMCcsXHJcbiAgICAnIzE2QTVBNScsXHJcbiAgICAnIzAwOUNFMCcsXHJcbiAgICAnIzdCNjRGRicsXHJcbiAgICAnI0ZBMjhGRicsXHJcbiAgICAnIzAwMDAwMCcsXHJcbiAgICAnIzY2NjY2NicsXHJcbiAgICAnI0IzQjNCMycsXHJcbiAgICAnIzlGMDUwMCcsXHJcbiAgICAnI0M0NTEwMCcsXHJcbiAgICAnI0ZCOUUwMCcsXHJcbiAgICAnIzgwODkwMCcsXHJcbiAgICAnIzE5NEQzMycsXHJcbiAgICAnIzBDNzk3RCcsXHJcbiAgICAnIzAwNjJCMScsXHJcbiAgICAnIzY1MzI5NCcsXHJcbiAgICAnI0FCMTQ5RScsXHJcbiAgXTtcclxuICBASW5wdXQoKSB6RGVwdGg6IHpEZXB0aCA9IDE7XHJcbiAgQElucHV0KCkgcmFkaXVzID0gMTtcclxuICBASW5wdXQoKSBiYWNrZ3JvdW5kID0gJyNmZmYnO1xyXG4gIGRpc2FibGVBbHBoYSA9IHRydWU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICB9XHJcbiAgaGFuZGxlQmxvY2tDaGFuZ2UoeyBoZXgsICRldmVudCB9KSB7XHJcbiAgICBpZiAoaXNWYWxpZEhleChoZXgpKSB7XHJcbiAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlKHsgaGV4LCBzb3VyY2U6ICdoZXgnIH0sICRldmVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGhhbmRsZVZhbHVlQ2hhbmdlKHsgZGF0YSwgJGV2ZW50IH0pIHtcclxuICAgIHRoaXMuaGFuZGxlQ2hhbmdlKGRhdGEsICRldmVudCk7XHJcbiAgfVxyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW1xyXG4gICAgQ29tcGFjdENvbXBvbmVudCxcclxuICAgIENvbXBhY3RDb2xvckNvbXBvbmVudCxcclxuICAgIENvbXBhY3RGaWVsZHNDb21wb25lbnQsXHJcbiAgXSxcclxuICBleHBvcnRzOiBbQ29tcGFjdENvbXBvbmVudCwgQ29tcGFjdENvbG9yQ29tcG9uZW50LCBDb21wYWN0RmllbGRzQ29tcG9uZW50XSxcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBFZGl0YWJsZUlucHV0TW9kdWxlLCBTd2F0Y2hNb2R1bGUsIFJhaXNlZE1vZHVsZV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb2xvckNvbXBhY3RNb2R1bGUge31cclxuIl19