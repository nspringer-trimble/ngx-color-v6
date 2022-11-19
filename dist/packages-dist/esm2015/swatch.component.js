import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, NgModule, Output, } from '@angular/core';
import { CheckboardModule } from './checkboard.component';
export class SwatchComponent {
    constructor() {
        this.style = {};
        this.focusStyle = {};
        this.onClick = new EventEmitter();
        this.onHover = new EventEmitter();
        this.divStyles = {};
        this.focusStyles = {};
        this.inFocus = false;
    }
    ngOnInit() {
        this.divStyles = Object.assign({ background: this.color }, this.style);
    }
    currentStyles() {
        this.focusStyles = Object.assign(Object.assign({}, this.divStyles), this.focusStyle);
        return this.focus || this.inFocus ? this.focusStyles : this.divStyles;
    }
    handleFocusOut() {
        this.inFocus = false;
    }
    handleFocus() {
        this.inFocus = true;
    }
    handleHover(hex, $event) {
        this.onHover.emit({ hex, $event });
    }
    handleClick(hex, $event) {
        this.onClick.emit({ hex, $event });
    }
}
SwatchComponent.decorators = [
    { type: Component, args: [{
                selector: 'color-swatch',
                template: `
    <div
      class="swatch"
      [ngStyle]="currentStyles()"
      [attr.title]="color"
      (click)="handleClick(color, $event)"
      (keydown.enter)="handleClick(color, $event)"
      (focus)="handleFocus()"
      (blur)="handleFocusOut()"
      (mouseover)="handleHover(color, $event)"
      tabindex="0"
    >
      <ng-content></ng-content>
      <color-checkboard
        *ngIf="color === 'transparent'"
        boxShadow="inset 0 0 0 1px rgba(0,0,0,0.1)"
      ></color-checkboard>
    </div>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [`
      .swatch {
        outline: none;
        height: 100%;
        width: 100%;
        cursor: pointer;
        position: relative;
      }
    `]
            },] }
];
SwatchComponent.propDecorators = {
    color: [{ type: Input }],
    style: [{ type: Input }],
    focusStyle: [{ type: Input }],
    focus: [{ type: Input }],
    onClick: [{ type: Output }],
    onHover: [{ type: Output }]
};
export class SwatchModule {
}
SwatchModule.decorators = [
    { type: NgModule, args: [{
                declarations: [SwatchComponent],
                exports: [SwatchComponent],
                imports: [CommonModule, CheckboardModule],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dhdGNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi9zcmMvbGliL2NvbW1vbi8iLCJzb3VyY2VzIjpbInN3YXRjaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsUUFBUSxFQUVSLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQW9DMUQsTUFBTSxPQUFPLGVBQWU7SUFsQzVCO1FBb0NXLFVBQUssR0FBMkIsRUFBRSxDQUFDO1FBQ25DLGVBQVUsR0FBMkIsRUFBRSxDQUFDO1FBRXZDLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ2xDLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQzVDLGNBQVMsR0FBMkIsRUFBRSxDQUFDO1FBQ3ZDLGdCQUFXLEdBQTJCLEVBQUUsQ0FBQztRQUN6QyxZQUFPLEdBQUcsS0FBSyxDQUFDO0lBMkJsQixDQUFDO0lBekJDLFFBQVE7UUFDTixJQUFJLENBQUMsU0FBUyxtQkFDWixVQUFVLEVBQUUsSUFBSSxDQUFDLEtBQWUsSUFDN0IsSUFBSSxDQUFDLEtBQUssQ0FDZCxDQUFDO0lBQ0osQ0FBQztJQUNELGFBQWE7UUFDWCxJQUFJLENBQUMsV0FBVyxtQ0FDWCxJQUFJLENBQUMsU0FBUyxHQUNkLElBQUksQ0FBQyxVQUFVLENBQ25CLENBQUM7UUFDRixPQUFPLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUN4RSxDQUFDO0lBQ0QsY0FBYztRQUNaLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ3ZCLENBQUM7SUFDRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7SUFDdEIsQ0FBQztJQUNELFdBQVcsQ0FBQyxHQUFXLEVBQUUsTUFBTTtRQUM3QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFDRCxXQUFXLENBQUMsR0FBVyxFQUFFLE1BQU07UUFDN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7WUFyRUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2dCQUN4QixRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWtCVDtnQkFZRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTt5QkFWN0M7Ozs7Ozs7O0tBUUM7YUFHSjs7O29CQUVFLEtBQUs7b0JBQ0wsS0FBSzt5QkFDTCxLQUFLO29CQUNMLEtBQUs7c0JBQ0wsTUFBTTtzQkFDTixNQUFNOztBQXFDVCxNQUFNLE9BQU8sWUFBWTs7O1lBTHhCLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxlQUFlLENBQUM7Z0JBQy9CLE9BQU8sRUFBRSxDQUFDLGVBQWUsQ0FBQztnQkFDMUIsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGdCQUFnQixDQUFDO2FBQzFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE5nTW9kdWxlLFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBDaGVja2JvYXJkTW9kdWxlIH0gZnJvbSAnLi9jaGVja2JvYXJkLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NvbG9yLXN3YXRjaCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3M9XCJzd2F0Y2hcIlxyXG4gICAgICBbbmdTdHlsZV09XCJjdXJyZW50U3R5bGVzKClcIlxyXG4gICAgICBbYXR0ci50aXRsZV09XCJjb2xvclwiXHJcbiAgICAgIChjbGljayk9XCJoYW5kbGVDbGljayhjb2xvciwgJGV2ZW50KVwiXHJcbiAgICAgIChrZXlkb3duLmVudGVyKT1cImhhbmRsZUNsaWNrKGNvbG9yLCAkZXZlbnQpXCJcclxuICAgICAgKGZvY3VzKT1cImhhbmRsZUZvY3VzKClcIlxyXG4gICAgICAoYmx1cik9XCJoYW5kbGVGb2N1c091dCgpXCJcclxuICAgICAgKG1vdXNlb3Zlcik9XCJoYW5kbGVIb3Zlcihjb2xvciwgJGV2ZW50KVwiXHJcbiAgICAgIHRhYmluZGV4PVwiMFwiXHJcbiAgICA+XHJcbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICAgICAgPGNvbG9yLWNoZWNrYm9hcmRcclxuICAgICAgICAqbmdJZj1cImNvbG9yID09PSAndHJhbnNwYXJlbnQnXCJcclxuICAgICAgICBib3hTaGFkb3c9XCJpbnNldCAwIDAgMCAxcHggcmdiYSgwLDAsMCwwLjEpXCJcclxuICAgICAgPjwvY29sb3ItY2hlY2tib2FyZD5cclxuICAgIDwvZGl2PlxyXG4gIGAsXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAgIC5zd2F0Y2gge1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIH1cclxuICAgIGAsXHJcbiAgXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxufSlcclxuZXhwb3J0IGNsYXNzIFN3YXRjaENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgY29sb3IhOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgc3R5bGU6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7fTtcclxuICBASW5wdXQoKSBmb2N1c1N0eWxlOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge307XHJcbiAgQElucHV0KCkgZm9jdXMhOiBib29sZWFuO1xyXG4gIEBPdXRwdXQoKSBvbkNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIG9uSG92ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBkaXZTdHlsZXM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7fTtcclxuICBmb2N1c1N0eWxlczogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHt9O1xyXG4gIGluRm9jdXMgPSBmYWxzZTtcclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmRpdlN0eWxlcyA9IHtcclxuICAgICAgYmFja2dyb3VuZDogdGhpcy5jb2xvciBhcyBzdHJpbmcsXHJcbiAgICAgIC4uLnRoaXMuc3R5bGUsXHJcbiAgICB9O1xyXG4gIH1cclxuICBjdXJyZW50U3R5bGVzKCkge1xyXG4gICAgdGhpcy5mb2N1c1N0eWxlcyA9IHtcclxuICAgICAgLi4udGhpcy5kaXZTdHlsZXMsXHJcbiAgICAgIC4uLnRoaXMuZm9jdXNTdHlsZSxcclxuICAgIH07XHJcbiAgICByZXR1cm4gdGhpcy5mb2N1cyB8fCB0aGlzLmluRm9jdXMgPyB0aGlzLmZvY3VzU3R5bGVzIDogdGhpcy5kaXZTdHlsZXM7XHJcbiAgfVxyXG4gIGhhbmRsZUZvY3VzT3V0KCkge1xyXG4gICAgdGhpcy5pbkZvY3VzID0gZmFsc2U7XHJcbiAgfVxyXG4gIGhhbmRsZUZvY3VzKCkge1xyXG4gICAgdGhpcy5pbkZvY3VzID0gdHJ1ZTtcclxuICB9XHJcbiAgaGFuZGxlSG92ZXIoaGV4OiBzdHJpbmcsICRldmVudCkge1xyXG4gICAgdGhpcy5vbkhvdmVyLmVtaXQoeyBoZXgsICRldmVudCB9KTtcclxuICB9XHJcbiAgaGFuZGxlQ2xpY2soaGV4OiBzdHJpbmcsICRldmVudCkge1xyXG4gICAgdGhpcy5vbkNsaWNrLmVtaXQoeyBoZXgsICRldmVudCB9KTtcclxuICB9XHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbU3dhdGNoQ29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbU3dhdGNoQ29tcG9uZW50XSxcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBDaGVja2JvYXJkTW9kdWxlXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFN3YXRjaE1vZHVsZSB7fVxyXG4iXX0=