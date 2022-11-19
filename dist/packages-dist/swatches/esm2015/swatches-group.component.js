import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
export class SwatchesGroupComponent {
    constructor() {
        this.onClick = new EventEmitter();
        this.onSwatchHover = new EventEmitter();
    }
}
SwatchesGroupComponent.decorators = [
    { type: Component, args: [{
                selector: 'color-swatches-group',
                template: `
    <div class="swatches-group">
      <color-swatches-color
        *ngFor="let color of group; let idx = index"
        [active]="color.toLowerCase() === active"
        [color]="color"
        [first]="idx === 0"
        [last]="idx === group.length - 1"
        (onClick)="onClick.emit($event)"
      >
      </color-swatches-color>
    </div>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                styles: [`
      .swatches-group {
        padding-bottom: 10px;
        width: 40px;
        float: left;
        margin-right: 10px;
      }
    `]
            },] }
];
SwatchesGroupComponent.propDecorators = {
    group: [{ type: Input }],
    active: [{ type: Input }],
    onClick: [{ type: Output }],
    onSwatchHover: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dhdGNoZXMtZ3JvdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9zd2F0Y2hlcy8iLCJzb3VyY2VzIjpbInN3YXRjaGVzLWdyb3VwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBOEJoRyxNQUFNLE9BQU8sc0JBQXNCO0lBNUJuQztRQStCWSxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNsQyxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7SUFDcEQsQ0FBQzs7O1lBakNBLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7OztHQVlUO2dCQVdELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxtQkFBbUIsRUFBRSxLQUFLO3lCQVZ4Qjs7Ozs7OztLQU9DO2FBSUo7OztvQkFFRSxLQUFLO3FCQUNMLEtBQUs7c0JBQ0wsTUFBTTs0QkFDTixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NvbG9yLXN3YXRjaGVzLWdyb3VwJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiBjbGFzcz1cInN3YXRjaGVzLWdyb3VwXCI+XHJcbiAgICAgIDxjb2xvci1zd2F0Y2hlcy1jb2xvclxyXG4gICAgICAgICpuZ0Zvcj1cImxldCBjb2xvciBvZiBncm91cDsgbGV0IGlkeCA9IGluZGV4XCJcclxuICAgICAgICBbYWN0aXZlXT1cImNvbG9yLnRvTG93ZXJDYXNlKCkgPT09IGFjdGl2ZVwiXHJcbiAgICAgICAgW2NvbG9yXT1cImNvbG9yXCJcclxuICAgICAgICBbZmlyc3RdPVwiaWR4ID09PSAwXCJcclxuICAgICAgICBbbGFzdF09XCJpZHggPT09IGdyb3VwLmxlbmd0aCAtIDFcIlxyXG4gICAgICAgIChvbkNsaWNrKT1cIm9uQ2xpY2suZW1pdCgkZXZlbnQpXCJcclxuICAgICAgPlxyXG4gICAgICA8L2NvbG9yLXN3YXRjaGVzLWNvbG9yPlxyXG4gICAgPC9kaXY+XHJcbiAgYCxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgICAgLnN3YXRjaGVzLWdyb3VwIHtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgIH1cclxuICAgIGAsXHJcbiAgXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFN3YXRjaGVzR3JvdXBDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGdyb3VwITogc3RyaW5nW107XHJcbiAgQElucHV0KCkgYWN0aXZlITogc3RyaW5nO1xyXG4gIEBPdXRwdXQoKSBvbkNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIG9uU3dhdGNoSG92ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxufVxyXG4iXX0=