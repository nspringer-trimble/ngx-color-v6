import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, } from '@angular/core';
export class SliderSwatchComponent {
    constructor() {
        this.first = false;
        this.last = false;
        this.onClick = new EventEmitter();
    }
    ngOnChanges() {
        this.background = `hsl(${this.hsl.h}, 50%, ${this.offset * 100}%)`;
    }
    handleClick($event) {
        this.onClick.emit({
            data: {
                h: this.hsl.h,
                s: 0.5,
                l: this.offset,
                source: 'hsl',
            },
            $event,
        });
    }
}
SliderSwatchComponent.decorators = [
    { type: Component, args: [{
                selector: 'color-slider-swatch',
                template: `
  <div class="slider-swatch" [style.background]="background"
    [class.first]="first" [class.last]="last" [class.active]="active"
    (click)="handleClick($event)"
  ></div>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                styles: [`
    .slider-swatch {
      height: 12px;
      background: rgb(121, 211, 166);
      cursor: pointer;
    }
    .slider-swatch.active {
      transform: scaleY(1.8);
      border-top-right-radius: 3.6px 2px;
      border-top-left-radius: 3.6px 2px;
      border-bottom-right-radius: 3.6px 2px;
      border-bottom-left-radius: 3.6px 2px;
    }
    .slider-swatch.first {
      border-radius: 2px 0px 0px 2px;
    }
    .slider-swatch.last {
      border-radius: 0px 2px 2px 0px;
    }

  `]
            },] }
];
SliderSwatchComponent.propDecorators = {
    hsl: [{ type: Input }],
    active: [{ type: Input }],
    offset: [{ type: Input }],
    first: [{ type: Input }],
    last: [{ type: Input }],
    onClick: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGVyLXN3YXRjaC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL3NsaWRlci8iLCJzb3VyY2VzIjpbInNsaWRlci1zd2F0Y2guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBc0N2QixNQUFNLE9BQU8scUJBQXFCO0lBbENsQztRQXNDVyxVQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ2QsU0FBSSxHQUFHLEtBQUssQ0FBQztRQUNaLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0lBaUI5QyxDQUFDO0lBZEMsV0FBVztRQUNULElBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDO0lBQ3JFLENBQUM7SUFDRCxXQUFXLENBQUMsTUFBTTtRQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQztZQUNoQixJQUFJLEVBQUU7Z0JBQ0osQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDYixDQUFDLEVBQUUsR0FBRztnQkFDTixDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU07Z0JBQ2QsTUFBTSxFQUFFLEtBQUs7YUFDZDtZQUNELE1BQU07U0FDUCxDQUFDLENBQUM7SUFDTCxDQUFDOzs7WUF4REYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLFFBQVEsRUFBRTs7Ozs7R0FLVDtnQkF3QkQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLG1CQUFtQixFQUFFLEtBQUs7eUJBdkJ4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FvQkQ7YUFJRjs7O2tCQUVFLEtBQUs7cUJBQ0wsS0FBSztxQkFDTCxLQUFLO29CQUNMLEtBQUs7bUJBQ0wsS0FBSztzQkFDTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPdXRwdXQsXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBIU0wgfSBmcm9tICduZ3gtY29sb3InO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjb2xvci1zbGlkZXItc3dhdGNoJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gIDxkaXYgY2xhc3M9XCJzbGlkZXItc3dhdGNoXCIgW3N0eWxlLmJhY2tncm91bmRdPVwiYmFja2dyb3VuZFwiXHJcbiAgICBbY2xhc3MuZmlyc3RdPVwiZmlyc3RcIiBbY2xhc3MubGFzdF09XCJsYXN0XCIgW2NsYXNzLmFjdGl2ZV09XCJhY3RpdmVcIlxyXG4gICAgKGNsaWNrKT1cImhhbmRsZUNsaWNrKCRldmVudClcIlxyXG4gID48L2Rpdj5cclxuICBgLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgLnNsaWRlci1zd2F0Y2gge1xyXG4gICAgICBoZWlnaHQ6IDEycHg7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYigxMjEsIDIxMSwgMTY2KTtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gICAgLnNsaWRlci1zd2F0Y2guYWN0aXZlIHtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZVkoMS44KTtcclxuICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDMuNnB4IDJweDtcclxuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMy42cHggMnB4O1xyXG4gICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMy42cHggMnB4O1xyXG4gICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzLjZweCAycHg7XHJcbiAgICB9XHJcbiAgICAuc2xpZGVyLXN3YXRjaC5maXJzdCB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJweCAwcHggMHB4IDJweDtcclxuICAgIH1cclxuICAgIC5zbGlkZXItc3dhdGNoLmxhc3Qge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAwcHggMnB4IDJweCAwcHg7XHJcbiAgICB9XHJcblxyXG4gIGAsXHJcbiAgXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxufSlcclxuZXhwb3J0IGNsYXNzIFNsaWRlclN3YXRjaENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcbiAgQElucHV0KCkgaHNsITogSFNMO1xyXG4gIEBJbnB1dCgpIGFjdGl2ZSE6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgb2Zmc2V0ITogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIGZpcnN0ID0gZmFsc2U7XHJcbiAgQElucHV0KCkgbGFzdCA9IGZhbHNlO1xyXG4gIEBPdXRwdXQoKSBvbkNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgYmFja2dyb3VuZCE6IHN0cmluZztcclxuXHJcbiAgbmdPbkNoYW5nZXMoKSB7XHJcbiAgICB0aGlzLmJhY2tncm91bmQgPSBgaHNsKCR7dGhpcy5oc2wuaH0sIDUwJSwgJHt0aGlzLm9mZnNldCAqIDEwMH0lKWA7XHJcbiAgfVxyXG4gIGhhbmRsZUNsaWNrKCRldmVudCkge1xyXG4gICAgdGhpcy5vbkNsaWNrLmVtaXQoe1xyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgaDogdGhpcy5oc2wuaCxcclxuICAgICAgICBzOiAwLjUsXHJcbiAgICAgICAgbDogdGhpcy5vZmZzZXQsXHJcbiAgICAgICAgc291cmNlOiAnaHNsJyxcclxuICAgICAgfSxcclxuICAgICAgJGV2ZW50LFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==