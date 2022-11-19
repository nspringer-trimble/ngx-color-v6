import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
export class GithubSwatchComponent {
    constructor() {
        this.onClick = new EventEmitter();
        this.onSwatchHover = new EventEmitter();
        this.focusStyle = {
            position: 'relative',
            'z-index': '2',
            outline: '2px solid #fff',
            'box-shadow': '0 0 5px 2px rgba(0,0,0,0.25)',
        };
    }
    handleClick({ hex, $event }) {
        this.onClick.emit({ hex, $event });
    }
}
GithubSwatchComponent.decorators = [
    { type: Component, args: [{
                selector: 'color-github-swatch',
                template: `
    <div class="github-swatch">
      <color-swatch
        [color]="color"
        [focusStyle]="focusStyle"
        (onClick)="handleClick($event)"
        (onHover)="onSwatchHover.emit($event)"
        class="swatch"
      ></color-swatch>
      <div class="clear"></div>
    </div>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                styles: [`
      .github-swatch {
        width: 25px;
        height: 25px;
        font-size: 0;
      }
    `]
            },] }
];
GithubSwatchComponent.propDecorators = {
    color: [{ type: Input }],
    onClick: [{ type: Output }],
    onSwatchHover: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2l0aHViLXN3YXRjaC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL2dpdGh1Yi8iLCJzb3VyY2VzIjpbImdpdGh1Yi1zd2F0Y2guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUE0QmhHLE1BQU0sT0FBTyxxQkFBcUI7SUExQmxDO1FBNEJZLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ2xDLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNsRCxlQUFVLEdBQUc7WUFDWCxRQUFRLEVBQUUsVUFBVTtZQUNwQixTQUFTLEVBQUUsR0FBRztZQUNkLE9BQU8sRUFBRSxnQkFBZ0I7WUFDekIsWUFBWSxFQUFFLDhCQUE4QjtTQUM3QyxDQUFDO0lBS0osQ0FBQztJQUhDLFdBQVcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUU7UUFDekIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7WUF2Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7R0FXVDtnQkFVRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsbUJBQW1CLEVBQUUsS0FBSzt5QkFUeEI7Ozs7OztLQU1DO2FBSUo7OztvQkFFRSxLQUFLO3NCQUNMLE1BQU07NEJBQ04sTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjb2xvci1naXRodWItc3dhdGNoJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiBjbGFzcz1cImdpdGh1Yi1zd2F0Y2hcIj5cclxuICAgICAgPGNvbG9yLXN3YXRjaFxyXG4gICAgICAgIFtjb2xvcl09XCJjb2xvclwiXHJcbiAgICAgICAgW2ZvY3VzU3R5bGVdPVwiZm9jdXNTdHlsZVwiXHJcbiAgICAgICAgKG9uQ2xpY2spPVwiaGFuZGxlQ2xpY2soJGV2ZW50KVwiXHJcbiAgICAgICAgKG9uSG92ZXIpPVwib25Td2F0Y2hIb3Zlci5lbWl0KCRldmVudClcIlxyXG4gICAgICAgIGNsYXNzPVwic3dhdGNoXCJcclxuICAgICAgPjwvY29sb3Itc3dhdGNoPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2xlYXJcIj48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIGAsXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAgIC5naXRodWItc3dhdGNoIHtcclxuICAgICAgICB3aWR0aDogMjVweDtcclxuICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAwO1xyXG4gICAgICB9XHJcbiAgICBgLFxyXG4gIF0sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHaXRodWJTd2F0Y2hDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGNvbG9yITogc3RyaW5nO1xyXG4gIEBPdXRwdXQoKSBvbkNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIG9uU3dhdGNoSG92ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBmb2N1c1N0eWxlID0ge1xyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAnei1pbmRleCc6ICcyJyxcclxuICAgIG91dGxpbmU6ICcycHggc29saWQgI2ZmZicsXHJcbiAgICAnYm94LXNoYWRvdyc6ICcwIDAgNXB4IDJweCByZ2JhKDAsMCwwLDAuMjUpJyxcclxuICB9O1xyXG5cclxuICBoYW5kbGVDbGljayh7IGhleCwgJGV2ZW50IH0pIHtcclxuICAgIHRoaXMub25DbGljay5lbWl0KHsgaGV4LCAkZXZlbnQgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==