import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, } from '@angular/core';
import { getContrastingColor } from 'ngx-color';
export class CompactColorComponent {
    constructor() {
        this.onClick = new EventEmitter();
        this.onSwatchHover = new EventEmitter();
        this.swatchStyle = {
            width: '15px',
            height: '15px',
            float: 'left',
            marginRight: '5px',
            marginBottom: '5px',
            position: 'relative',
            cursor: 'pointer',
        };
        this.swatchFocus = {};
        this.getContrastingColor = getContrastingColor;
    }
    ngOnChanges() {
        this.swatchStyle.background = this.color;
        this.swatchFocus.boxShadow = `0 0 4px ${this.color}`;
        if (this.color.toLowerCase() === '#ffffff') {
            this.swatchStyle.boxShadow = 'inset 0 0 0 1px #ddd';
        }
    }
    handleClick({ hex, $event }) {
        this.onClick.emit({ hex, $event });
    }
}
CompactColorComponent.decorators = [
    { type: Component, args: [{
                selector: 'color-compact-color',
                template: `
  <div class="compact-color">
    <color-swatch class="swatch"
      [color]="color" [style]="swatchStyle"
      [focusStyle]="swatchFocus"
      (onClick)="handleClick($event)" (onHover)="onSwatchHover.emit($event)"
      >
      <div class="compact-dot"
        [class.active]="active" [style.background]="getContrastingColor(color)"
      ></div>
    </color-swatch>
  </div>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                styles: [`
  .compact-dot {
    position: absolute;
    top: 5px;
    right: 5px;
    bottom: 5px;
    left: 5px;
    border-radius: 50%;
    opacity: 0;
  }
  .compact-dot.active {
    opacity: 1;
  }
  `]
            },] }
];
CompactColorComponent.propDecorators = {
    color: [{ type: Input }],
    active: [{ type: Input }],
    onClick: [{ type: Output }],
    onSwatchHover: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGFjdC1jb2xvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vLi4vc3JjL2xpYi9jb21wb25lbnRzL2NvbXBhY3QvIiwic291cmNlcyI6WyJjb21wYWN0LWNvbG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFvQ2hELE1BQU0sT0FBTyxxQkFBcUI7SUFsQ2xDO1FBcUNZLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ2xDLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNsRCxnQkFBVyxHQUEyQjtZQUNwQyxLQUFLLEVBQUUsTUFBTTtZQUNiLE1BQU0sRUFBRSxNQUFNO1lBQ2QsS0FBSyxFQUFFLE1BQU07WUFDYixXQUFXLEVBQUUsS0FBSztZQUNsQixZQUFZLEVBQUUsS0FBSztZQUNuQixRQUFRLEVBQUUsVUFBVTtZQUNwQixNQUFNLEVBQUUsU0FBUztTQUNsQixDQUFDO1FBQ0YsZ0JBQVcsR0FBMkIsRUFBRSxDQUFDO1FBQ3pDLHdCQUFtQixHQUFHLG1CQUFtQixDQUFDO0lBWTVDLENBQUM7SUFWQyxXQUFXO1FBQ1QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN6QyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsR0FBRyxXQUFXLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNyRCxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLEtBQUssU0FBUyxFQUFFO1lBQzFDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxHQUFHLHNCQUFzQixDQUFDO1NBQ3JEO0lBQ0gsQ0FBQztJQUNELFdBQVcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUU7UUFDekIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUNyQyxDQUFDOzs7WUE1REYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7O0dBWVQ7Z0JBaUJELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxtQkFBbUIsRUFBRSxLQUFLO3lCQWhCeEI7Ozs7Ozs7Ozs7Ozs7R0FhRDthQUlGOzs7b0JBRUUsS0FBSztxQkFDTCxLQUFLO3NCQUNMLE1BQU07NEJBQ04sTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT3V0cHV0LFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgZ2V0Q29udHJhc3RpbmdDb2xvciB9IGZyb20gJ25neC1jb2xvcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NvbG9yLWNvbXBhY3QtY29sb3InLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgPGRpdiBjbGFzcz1cImNvbXBhY3QtY29sb3JcIj5cclxuICAgIDxjb2xvci1zd2F0Y2ggY2xhc3M9XCJzd2F0Y2hcIlxyXG4gICAgICBbY29sb3JdPVwiY29sb3JcIiBbc3R5bGVdPVwic3dhdGNoU3R5bGVcIlxyXG4gICAgICBbZm9jdXNTdHlsZV09XCJzd2F0Y2hGb2N1c1wiXHJcbiAgICAgIChvbkNsaWNrKT1cImhhbmRsZUNsaWNrKCRldmVudClcIiAob25Ib3Zlcik9XCJvblN3YXRjaEhvdmVyLmVtaXQoJGV2ZW50KVwiXHJcbiAgICAgID5cclxuICAgICAgPGRpdiBjbGFzcz1cImNvbXBhY3QtZG90XCJcclxuICAgICAgICBbY2xhc3MuYWN0aXZlXT1cImFjdGl2ZVwiIFtzdHlsZS5iYWNrZ3JvdW5kXT1cImdldENvbnRyYXN0aW5nQ29sb3IoY29sb3IpXCJcclxuICAgICAgPjwvZGl2PlxyXG4gICAgPC9jb2xvci1zd2F0Y2g+XHJcbiAgPC9kaXY+XHJcbiAgYCxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAuY29tcGFjdC1kb3Qge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1cHg7XHJcbiAgICByaWdodDogNXB4O1xyXG4gICAgYm90dG9tOiA1cHg7XHJcbiAgICBsZWZ0OiA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICAuY29tcGFjdC1kb3QuYWN0aXZlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG4gIGAsXHJcbiAgXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbXBhY3RDb2xvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcbiAgQElucHV0KCkgY29sb3IhOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgYWN0aXZlITogYm9vbGVhbjtcclxuICBAT3V0cHV0KCkgb25DbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBvblN3YXRjaEhvdmVyID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgc3dhdGNoU3R5bGU6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XHJcbiAgICB3aWR0aDogJzE1cHgnLFxyXG4gICAgaGVpZ2h0OiAnMTVweCcsXHJcbiAgICBmbG9hdDogJ2xlZnQnLFxyXG4gICAgbWFyZ2luUmlnaHQ6ICc1cHgnLFxyXG4gICAgbWFyZ2luQm90dG9tOiAnNXB4JyxcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgfTtcclxuICBzd2F0Y2hGb2N1czogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHt9O1xyXG4gIGdldENvbnRyYXN0aW5nQ29sb3IgPSBnZXRDb250cmFzdGluZ0NvbG9yO1xyXG5cclxuICBuZ09uQ2hhbmdlcygpIHtcclxuICAgIHRoaXMuc3dhdGNoU3R5bGUuYmFja2dyb3VuZCA9IHRoaXMuY29sb3I7XHJcbiAgICB0aGlzLnN3YXRjaEZvY3VzLmJveFNoYWRvdyA9IGAwIDAgNHB4ICR7dGhpcy5jb2xvcn1gO1xyXG4gICAgaWYgKHRoaXMuY29sb3IudG9Mb3dlckNhc2UoKSA9PT0gJyNmZmZmZmYnKSB7XHJcbiAgICAgIHRoaXMuc3dhdGNoU3R5bGUuYm94U2hhZG93ID0gJ2luc2V0IDAgMCAwIDFweCAjZGRkJztcclxuICAgIH1cclxuICB9XHJcbiAgaGFuZGxlQ2xpY2soeyBoZXgsICRldmVudCB9KSB7XHJcbiAgICB0aGlzLm9uQ2xpY2suZW1pdCh7IGhleCwgJGV2ZW50IH0pO1xyXG4gIH1cclxufVxyXG4iXX0=