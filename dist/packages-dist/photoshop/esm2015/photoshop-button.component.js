import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, } from '@angular/core';
export class PhotoshopButtonComponent {
    constructor() {
        this.label = '';
        this.active = false;
        this.onClick = new EventEmitter();
    }
}
PhotoshopButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'color-photoshop-button',
                template: `
    <div class="photoshop-button"  [class.active]="active"
      (click)="onClick.emit($event)"
    >
      {{ label }}
    </div>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                styles: [`
    .photoshop-button {
      background-image: linear-gradient(
        -180deg,
        rgb(255, 255, 255) 0%,
        rgb(230, 230, 230) 100%
      );
      border: 1px solid rgb(135, 135, 135);
      border-radius: 2px;
      height: 22px;
      box-shadow: rgb(234, 234, 234) 0px 1px 0px 0px;
      font-size: 14px;
      color: rgb(0, 0, 0);
      line-height: 20px;
      text-align: center;
      margin-bottom: 10px;
      cursor: pointer;
    }
    .photoshop-button.active {
      box-shadow: 0 0 0 1px #878787;
    }
  `]
            },] }
];
PhotoshopButtonComponent.propDecorators = {
    label: [{ type: Input }],
    active: [{ type: Input }],
    onClick: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGhvdG9zaG9wLWJ1dHRvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL3Bob3Rvc2hvcC8iLCJzb3VyY2VzIjpbInBob3Rvc2hvcC1idXR0b24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBc0N2QixNQUFNLE9BQU8sd0JBQXdCO0lBcENyQztRQXFDVyxVQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ1gsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUNkLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBUyxDQUFDO0lBQ2hELENBQUM7OztZQXhDQSxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsUUFBUSxFQUFFOzs7Ozs7R0FNVDtnQkF5QkQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLG1CQUFtQixFQUFFLEtBQUs7eUJBeEJ4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBcUJEO2FBSUY7OztvQkFFRSxLQUFLO3FCQUNMLEtBQUs7c0JBQ0wsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPdXRwdXQsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NvbG9yLXBob3Rvc2hvcC1idXR0b24nLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2IGNsYXNzPVwicGhvdG9zaG9wLWJ1dHRvblwiICBbY2xhc3MuYWN0aXZlXT1cImFjdGl2ZVwiXHJcbiAgICAgIChjbGljayk9XCJvbkNsaWNrLmVtaXQoJGV2ZW50KVwiXHJcbiAgICA+XHJcbiAgICAgIHt7IGxhYmVsIH19XHJcbiAgICA8L2Rpdj5cclxuICBgLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgLnBob3Rvc2hvcC1idXR0b24ge1xyXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgLTE4MGRlZyxcclxuICAgICAgICByZ2IoMjU1LCAyNTUsIDI1NSkgMCUsXHJcbiAgICAgICAgcmdiKDIzMCwgMjMwLCAyMzApIDEwMCVcclxuICAgICAgKTtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDEzNSwgMTM1LCAxMzUpO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgIGhlaWdodDogMjJweDtcclxuICAgICAgYm94LXNoYWRvdzogcmdiKDIzNCwgMjM0LCAyMzQpIDBweCAxcHggMHB4IDBweDtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBjb2xvcjogcmdiKDAsIDAsIDApO1xyXG4gICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgICAucGhvdG9zaG9wLWJ1dHRvbi5hY3RpdmUge1xyXG4gICAgICBib3gtc2hhZG93OiAwIDAgMCAxcHggIzg3ODc4NztcclxuICAgIH1cclxuICBgLFxyXG4gIF0sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQaG90b3Nob3BCdXR0b25Db21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGxhYmVsID0gJyc7XHJcbiAgQElucHV0KCkgYWN0aXZlID0gZmFsc2U7XHJcbiAgQE91dHB1dCgpIG9uQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPEV2ZW50PigpO1xyXG59XHJcbiJdfQ==