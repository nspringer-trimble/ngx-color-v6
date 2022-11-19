import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, NgModule } from '@angular/core';
export class RaisedComponent {
    constructor() {
        this.zDepth = 1;
        this.radius = 1;
        this.background = '#fff';
    }
}
RaisedComponent.decorators = [
    { type: Component, args: [{
                selector: 'color-raised',
                template: `
  <div class="raised-wrap">
    <div class="raised-bg zDepth-{{zDepth}}" [style.background]="background"></div>
    <div class="raised-content">
      <ng-content></ng-content>
    </div>
  </div>
  `,
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [`
    .raised-wrap {
      position: relative;
      display: inline-block;
    }
    .raised-bg {
      position: absolute;
      top: 0px;
      right: 0px;
      bottom: 0px;
      left: 0px;
    }
    .raised-content {
      position: relative;
    }
    .zDepth-0 {
      box-shadow: none;
    }
    .zDepth-1 {
      box-shadow: 0 2px 10px rgba(0,0,0,.12), 0 2px 5px rgba(0,0,0,.16);
    }
    .zDepth-2 {
      box-shadow: 0 6px 20px rgba(0,0,0,.19), 0 8px 17px rgba(0,0,0,.2);
    }
    .zDepth-3 {
      box-shadow: 0 17px 50px rgba(0,0,0,.19), 0 12px 15px rgba(0,0,0,.24);
    }
    .zDepth-4 {
      box-shadow: 0 25px 55px rgba(0,0,0,.21), 0 16px 28px rgba(0,0,0,.22);
    }
    .zDepth-5 {
      box-shadow: 0 40px 77px rgba(0,0,0,.22), 0 27px 24px rgba(0,0,0,.2);
    }
  `]
            },] }
];
RaisedComponent.propDecorators = {
    zDepth: [{ type: Input }],
    radius: [{ type: Input }],
    background: [{ type: Input }]
};
export class RaisedModule {
}
RaisedModule.decorators = [
    { type: NgModule, args: [{
                declarations: [RaisedComponent],
                exports: [RaisedComponent],
                imports: [CommonModule],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFpc2VkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi9zcmMvbGliL2NvbW1vbi8iLCJzb3VyY2VzIjpbInJhaXNlZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQW1EcEYsTUFBTSxPQUFPLGVBQWU7SUEvQzVCO1FBZ0RXLFdBQU0sR0FBVyxDQUFDLENBQUM7UUFDbkIsV0FBTSxHQUFHLENBQUMsQ0FBQztRQUNYLGVBQVUsR0FBRyxNQUFNLENBQUM7SUFDL0IsQ0FBQzs7O1lBbkRBLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsUUFBUSxFQUFFOzs7Ozs7O0dBT1Q7Z0JBbUNELG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO3lCQW5DdEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQWlDUjthQUdGOzs7cUJBRUUsS0FBSztxQkFDTCxLQUFLO3lCQUNMLEtBQUs7O0FBUVIsTUFBTSxPQUFPLFlBQVk7OztZQUx4QixRQUFRLFNBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsZUFBZSxDQUFDO2dCQUMvQixPQUFPLEVBQUUsQ0FBQyxlQUFlLENBQUM7Z0JBQzFCLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQzthQUN4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0LCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuZXhwb3J0IHR5cGUgekRlcHRoID0gMCB8IDEgfCAyIHwgMyB8IDQgfCA1O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjb2xvci1yYWlzZWQnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgPGRpdiBjbGFzcz1cInJhaXNlZC13cmFwXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwicmFpc2VkLWJnIHpEZXB0aC17e3pEZXB0aH19XCIgW3N0eWxlLmJhY2tncm91bmRdPVwiYmFja2dyb3VuZFwiPjwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInJhaXNlZC1jb250ZW50XCI+XHJcbiAgICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIGAsXHJcbiAgc3R5bGVzOiBbYFxyXG4gICAgLnJhaXNlZC13cmFwIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB9XHJcbiAgICAucmFpc2VkLWJnIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDBweDtcclxuICAgICAgcmlnaHQ6IDBweDtcclxuICAgICAgYm90dG9tOiAwcHg7XHJcbiAgICAgIGxlZnQ6IDBweDtcclxuICAgIH1cclxuICAgIC5yYWlzZWQtY29udGVudCB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxuICAgIC56RGVwdGgtMCB7XHJcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAuekRlcHRoLTEge1xyXG4gICAgICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMCwwLDAsLjEyKSwgMCAycHggNXB4IHJnYmEoMCwwLDAsLjE2KTtcclxuICAgIH1cclxuICAgIC56RGVwdGgtMiB7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgNnB4IDIwcHggcmdiYSgwLDAsMCwuMTkpLCAwIDhweCAxN3B4IHJnYmEoMCwwLDAsLjIpO1xyXG4gICAgfVxyXG4gICAgLnpEZXB0aC0zIHtcclxuICAgICAgYm94LXNoYWRvdzogMCAxN3B4IDUwcHggcmdiYSgwLDAsMCwuMTkpLCAwIDEycHggMTVweCByZ2JhKDAsMCwwLC4yNCk7XHJcbiAgICB9XHJcbiAgICAuekRlcHRoLTQge1xyXG4gICAgICBib3gtc2hhZG93OiAwIDI1cHggNTVweCByZ2JhKDAsMCwwLC4yMSksIDAgMTZweCAyOHB4IHJnYmEoMCwwLDAsLjIyKTtcclxuICAgIH1cclxuICAgIC56RGVwdGgtNSB7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgNDBweCA3N3B4IHJnYmEoMCwwLDAsLjIyKSwgMCAyN3B4IDI0cHggcmdiYSgwLDAsMCwuMik7XHJcbiAgICB9XHJcbiAgYF0sXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSYWlzZWRDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIHpEZXB0aDogekRlcHRoID0gMTtcclxuICBASW5wdXQoKSByYWRpdXMgPSAxO1xyXG4gIEBJbnB1dCgpIGJhY2tncm91bmQgPSAnI2ZmZic7XHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbUmFpc2VkQ29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbUmFpc2VkQ29tcG9uZW50XSxcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFJhaXNlZE1vZHVsZSB7IH1cclxuIl19