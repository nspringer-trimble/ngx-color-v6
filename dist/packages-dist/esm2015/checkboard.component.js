import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, NgModule, } from '@angular/core';
import { getCheckerboard } from './helpers/checkboard';
export class CheckboardComponent {
    constructor() {
        this.white = 'transparent';
        this.size = 8;
        this.grey = 'rgba(0,0,0,.08)';
    }
    ngOnInit() {
        const background = getCheckerboard(this.white, this.grey, this.size);
        this.gridStyles = {
            borderRadius: this.borderRadius,
            boxShadow: this.boxShadow,
            background: `url(${background}) center left`,
        };
    }
}
CheckboardComponent.decorators = [
    { type: Component, args: [{
                selector: 'color-checkboard',
                template: `<div class="grid" [ngStyle]="gridStyles"></div>`,
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [`
  .grid {
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    position: absolute;
  }
  `]
            },] }
];
CheckboardComponent.propDecorators = {
    white: [{ type: Input }],
    size: [{ type: Input }],
    grey: [{ type: Input }],
    boxShadow: [{ type: Input }],
    borderRadius: [{ type: Input }]
};
export class CheckboardModule {
}
CheckboardModule.decorators = [
    { type: NgModule, args: [{
                declarations: [CheckboardComponent],
                exports: [CheckboardComponent],
                imports: [CommonModule],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vc3JjL2xpYi9jb21tb24vIiwic291cmNlcyI6WyJjaGVja2JvYXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsS0FBSyxFQUNMLFFBQVEsR0FFVCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFtQnZELE1BQU0sT0FBTyxtQkFBbUI7SUFqQmhDO1FBa0JXLFVBQUssR0FBRyxhQUFhLENBQUM7UUFDdEIsU0FBSSxHQUFHLENBQUMsQ0FBQztRQUNULFNBQUksR0FBRyxpQkFBaUIsQ0FBQztJQWFwQyxDQUFDO0lBUkMsUUFBUTtRQUNOLE1BQU0sVUFBVSxHQUFHLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JFLElBQUksQ0FBQyxVQUFVLEdBQUc7WUFDaEIsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZO1lBQy9CLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixVQUFVLEVBQUUsT0FBTyxVQUFVLGVBQWU7U0FDN0MsQ0FBQztJQUNKLENBQUM7OztZQWhDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsUUFBUSxFQUFFLGlEQUFpRDtnQkFZM0QsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07eUJBWDdDOzs7Ozs7OztHQVFEO2FBSUY7OztvQkFFRSxLQUFLO21CQUNMLEtBQUs7bUJBQ0wsS0FBSzt3QkFDTCxLQUFLOzJCQUNMLEtBQUs7O0FBa0JSLE1BQU0sT0FBTyxnQkFBZ0I7OztZQUw1QixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsbUJBQW1CLENBQUM7Z0JBQ25DLE9BQU8sRUFBRSxDQUFDLG1CQUFtQixDQUFDO2dCQUM5QixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7YUFDeEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBJbnB1dCxcclxuICBOZ01vZHVsZSxcclxuICBPbkluaXQsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBnZXRDaGVja2VyYm9hcmQgfSBmcm9tICcuL2hlbHBlcnMvY2hlY2tib2FyZCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NvbG9yLWNoZWNrYm9hcmQnLFxyXG4gIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cImdyaWRcIiBbbmdTdHlsZV09XCJncmlkU3R5bGVzXCI+PC9kaXY+YCxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAuZ3JpZCB7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIHJpZ2h0OiAwcHg7XHJcbiAgICBib3R0b206IDBweDtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB9XHJcbiAgYCxcclxuICBdLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2hlY2tib2FyZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgd2hpdGUgPSAndHJhbnNwYXJlbnQnO1xyXG4gIEBJbnB1dCgpIHNpemUgPSA4O1xyXG4gIEBJbnB1dCgpIGdyZXkgPSAncmdiYSgwLDAsMCwuMDgpJztcclxuICBASW5wdXQoKSBib3hTaGFkb3chOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgYm9yZGVyUmFkaXVzITogc3RyaW5nO1xyXG4gIGdyaWRTdHlsZXMhOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+O1xyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGNvbnN0IGJhY2tncm91bmQgPSBnZXRDaGVja2VyYm9hcmQodGhpcy53aGl0ZSwgdGhpcy5ncmV5LCB0aGlzLnNpemUpO1xyXG4gICAgdGhpcy5ncmlkU3R5bGVzID0ge1xyXG4gICAgICBib3JkZXJSYWRpdXM6IHRoaXMuYm9yZGVyUmFkaXVzLFxyXG4gICAgICBib3hTaGFkb3c6IHRoaXMuYm94U2hhZG93LFxyXG4gICAgICBiYWNrZ3JvdW5kOiBgdXJsKCR7YmFja2dyb3VuZH0pIGNlbnRlciBsZWZ0YCxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW0NoZWNrYm9hcmRDb21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFtDaGVja2JvYXJkQ29tcG9uZW50XSxcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIENoZWNrYm9hcmRNb2R1bGUge31cclxuIl19