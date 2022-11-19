import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, } from '@angular/core';
export class CircleSwatchComponent {
    constructor() {
        this.circleSize = 28;
        this.circleSpacing = 14;
        this.focus = false;
        this.onClick = new EventEmitter();
        this.onSwatchHover = new EventEmitter();
        this.focusStyle = {};
        this.swatchStyle = {
            borderRadius: '50%',
            background: 'transparent',
            transition: '100ms box-shadow ease 0s',
        };
    }
    ngOnChanges() {
        this.swatchStyle.boxShadow = `inset 0 0 0 ${this.circleSize / 2}px ${this.color}`;
        this.focusStyle.boxShadow = `inset 0 0 0 ${this.circleSize / 2}px ${this.color}, 0 0 5px ${this.color}`;
        if (this.focus) {
            this.focusStyle.boxShadow = `inset 0 0 0 3px ${this.color}, 0 0 5px ${this.color}`;
        }
    }
    handleClick({ hex, $event }) {
        this.onClick.emit({ hex, $event });
    }
}
CircleSwatchComponent.decorators = [
    { type: Component, args: [{
                selector: 'color-circle-swatch',
                template: `
  <div class="circle-swatch"
    [style.width.px]="circleSize" [style.height.px]="circleSize"
    [style.margin-right.px]="circleSpacing" [style.margin-bottom.px]="circleSpacing"
    >
    <color-swatch
      [color]="color" [style]="swatchStyle" [focus]="focus" [focusStyle]="focusStyle"
      (onClick)="handleClick($event)" (onHover)="onSwatchHover.emit($event)">
    </color-swatch>
    <div class="clear"></div>
  </div>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                styles: [`
  .circle-swatch {
    transform: scale(1);
    transition: transform 100ms ease;
  }
  .circle-swatch:hover {
    transform: scale(1.2);
  }
  `]
            },] }
];
CircleSwatchComponent.propDecorators = {
    color: [{ type: Input }],
    circleSize: [{ type: Input }],
    circleSpacing: [{ type: Input }],
    focus: [{ type: Input }],
    onClick: [{ type: Output }],
    onSwatchHover: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2lyY2xlLXN3YXRjaC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL2NpcmNsZS8iLCJzb3VyY2VzIjpbImNpcmNsZS1zd2F0Y2guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBOEJ2QixNQUFNLE9BQU8scUJBQXFCO0lBNUJsQztRQThCVyxlQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLGtCQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ25CLFVBQUssR0FBRyxLQUFLLENBQUM7UUFDYixZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNsQyxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDbEQsZUFBVSxHQUEyQixFQUFFLENBQUM7UUFDeEMsZ0JBQVcsR0FBMkI7WUFDcEMsWUFBWSxFQUFFLEtBQUs7WUFDbkIsVUFBVSxFQUFFLGFBQWE7WUFDekIsVUFBVSxFQUFFLDBCQUEwQjtTQUN2QyxDQUFDO0lBWUosQ0FBQztJQVZDLFdBQVc7UUFDVCxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsR0FBRyxlQUFlLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxNQUFNLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNsRixJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxlQUFnQixJQUFJLENBQUMsVUFBVSxHQUFHLENBQUUsTUFBTyxJQUFJLENBQUMsS0FBTSxhQUFjLElBQUksQ0FBQyxLQUFNLEVBQUUsQ0FBQztRQUM5RyxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZCxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxtQkFBb0IsSUFBSSxDQUFDLEtBQU0sYUFBYyxJQUFJLENBQUMsS0FBTSxFQUFFLENBQUM7U0FDeEY7SUFDSCxDQUFDO0lBQ0QsV0FBVyxDQUFDLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRTtRQUN6QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7OztZQW5ERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsUUFBUSxFQUFFOzs7Ozs7Ozs7OztHQVdUO2dCQVlELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxtQkFBbUIsRUFBRSxLQUFLO3lCQVh4Qjs7Ozs7Ozs7R0FRRDthQUlGOzs7b0JBRUUsS0FBSzt5QkFDTCxLQUFLOzRCQUNMLEtBQUs7b0JBQ0wsS0FBSztzQkFDTCxNQUFNOzRCQUNOLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE91dHB1dCxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY29sb3ItY2lyY2xlLXN3YXRjaCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICA8ZGl2IGNsYXNzPVwiY2lyY2xlLXN3YXRjaFwiXHJcbiAgICBbc3R5bGUud2lkdGgucHhdPVwiY2lyY2xlU2l6ZVwiIFtzdHlsZS5oZWlnaHQucHhdPVwiY2lyY2xlU2l6ZVwiXHJcbiAgICBbc3R5bGUubWFyZ2luLXJpZ2h0LnB4XT1cImNpcmNsZVNwYWNpbmdcIiBbc3R5bGUubWFyZ2luLWJvdHRvbS5weF09XCJjaXJjbGVTcGFjaW5nXCJcclxuICAgID5cclxuICAgIDxjb2xvci1zd2F0Y2hcclxuICAgICAgW2NvbG9yXT1cImNvbG9yXCIgW3N0eWxlXT1cInN3YXRjaFN0eWxlXCIgW2ZvY3VzXT1cImZvY3VzXCIgW2ZvY3VzU3R5bGVdPVwiZm9jdXNTdHlsZVwiXHJcbiAgICAgIChvbkNsaWNrKT1cImhhbmRsZUNsaWNrKCRldmVudClcIiAob25Ib3Zlcik9XCJvblN3YXRjaEhvdmVyLmVtaXQoJGV2ZW50KVwiPlxyXG4gICAgPC9jb2xvci1zd2F0Y2g+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY2xlYXJcIj48L2Rpdj5cclxuICA8L2Rpdj5cclxuICBgLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gIC5jaXJjbGUtc3dhdGNoIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTAwbXMgZWFzZTtcclxuICB9XHJcbiAgLmNpcmNsZS1zd2F0Y2g6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG4gIH1cclxuICBgLFxyXG4gIF0sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDaXJjbGVTd2F0Y2hDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG4gIEBJbnB1dCgpIGNvbG9yITogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGNpcmNsZVNpemUgPSAyODtcclxuICBASW5wdXQoKSBjaXJjbGVTcGFjaW5nID0gMTQ7XHJcbiAgQElucHV0KCkgZm9jdXMgPSBmYWxzZTtcclxuICBAT3V0cHV0KCkgb25DbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBvblN3YXRjaEhvdmVyID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgZm9jdXNTdHlsZTogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHt9O1xyXG4gIHN3YXRjaFN0eWxlOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xyXG4gICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcclxuICAgIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCcsXHJcbiAgICB0cmFuc2l0aW9uOiAnMTAwbXMgYm94LXNoYWRvdyBlYXNlIDBzJyxcclxuICB9O1xyXG5cclxuICBuZ09uQ2hhbmdlcygpIHtcclxuICAgIHRoaXMuc3dhdGNoU3R5bGUuYm94U2hhZG93ID0gYGluc2V0IDAgMCAwICR7dGhpcy5jaXJjbGVTaXplIC8gMn1weCAke3RoaXMuY29sb3J9YDtcclxuICAgIHRoaXMuZm9jdXNTdHlsZS5ib3hTaGFkb3cgPSBgaW5zZXQgMCAwIDAgJHsgdGhpcy5jaXJjbGVTaXplIC8gMiB9cHggJHsgdGhpcy5jb2xvciB9LCAwIDAgNXB4ICR7IHRoaXMuY29sb3IgfWA7XHJcbiAgICBpZiAodGhpcy5mb2N1cykge1xyXG4gICAgICB0aGlzLmZvY3VzU3R5bGUuYm94U2hhZG93ID0gYGluc2V0IDAgMCAwIDNweCAkeyB0aGlzLmNvbG9yIH0sIDAgMCA1cHggJHsgdGhpcy5jb2xvciB9YDtcclxuICAgIH1cclxuICB9XHJcbiAgaGFuZGxlQ2xpY2soeyBoZXgsICRldmVudCB9KSB7XHJcbiAgICB0aGlzLm9uQ2xpY2suZW1pdCh7IGhleCwgJGV2ZW50IH0pO1xyXG4gIH1cclxufVxyXG4iXX0=