import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, } from '@angular/core';
import { getContrastingColor } from 'ngx-color';
export class SwatchesColorComponent {
    constructor() {
        this.first = false;
        this.last = false;
        this.onClick = new EventEmitter();
        this.onSwatchHover = new EventEmitter();
        this.getContrastingColor = getContrastingColor;
        this.colorStyle = {
            width: '40px',
            height: '24px',
            cursor: 'pointer',
            marginBottom: '1px',
        };
        this.focusStyle = {};
    }
    ngOnInit() {
        this.colorStyle.background = this.color;
        this.focusStyle.boxShadow = `0 0 4px ${this.color}`;
        if (this.first) {
            this.colorStyle.borderRadius = '2px 2px 0 0';
        }
        if (this.last) {
            this.colorStyle.borderRadius = '0 0 2px 2px';
        }
        if (this.color === '#FFFFFF') {
            this.colorStyle.boxShadow = 'inset 0 0 0 1px #ddd';
        }
    }
    handleClick($event) {
        this.onClick.emit({
            data: {
                hex: this.color,
                source: 'hex',
            },
            $event,
        });
    }
}
SwatchesColorComponent.decorators = [
    { type: Component, args: [{
                selector: 'color-swatches-color',
                template: `
    <color-swatch
      [color]="color"
      [style]="colorStyle"
      [focusStyle]="focusStyle"
      [class.first]="first"
      [class.last]="last"
      (click)="handleClick($event)"
      (keydown.enter)="handleClick($event)"
      (onHover)="onSwatchHover.emit($event)"
    >
      <div class="swatch-check" *ngIf="active" [class.first]="first" [class.last]="last">
        <svg
          style="width: 24px; height: 24px;"
          viewBox="0 0 24 24"
          [style.fill]="getContrastingColor(color)"
        >
          <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
        </svg>
      </div>
    </color-swatch>
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
      .swatch-check {
        display: flex;
        margin-left: 8px;
      }
    `]
            },] }
];
SwatchesColorComponent.propDecorators = {
    color: [{ type: Input }],
    first: [{ type: Input }],
    last: [{ type: Input }],
    active: [{ type: Input }],
    onClick: [{ type: Output }],
    onSwatchHover: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dhdGNoZXMtY29sb3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9zd2F0Y2hlcy8iLCJzb3VyY2VzIjpbInN3YXRjaGVzLWNvbG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxXQUFXLENBQUM7QUEyQ2hELE1BQU0sT0FBTyxzQkFBc0I7SUF6Q25DO1FBMkNXLFVBQUssR0FBRyxLQUFLLENBQUM7UUFDZCxTQUFJLEdBQUcsS0FBSyxDQUFDO1FBRVosWUFBTyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDbEMsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ2xELHdCQUFtQixHQUFHLG1CQUFtQixDQUFDO1FBQzFDLGVBQVUsR0FBMkI7WUFDbkMsS0FBSyxFQUFFLE1BQU07WUFDYixNQUFNLEVBQUUsTUFBTTtZQUNkLE1BQU0sRUFBRSxTQUFTO1lBQ2pCLFlBQVksRUFBRSxLQUFLO1NBQ3BCLENBQUM7UUFDRixlQUFVLEdBQTJCLEVBQUUsQ0FBQztJQXdCMUMsQ0FBQztJQXRCQyxRQUFRO1FBQ04sSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN4QyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxXQUFXLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNwRCxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZCxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksR0FBRyxhQUFhLENBQUM7U0FDOUM7UUFDRCxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDYixJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksR0FBRyxhQUFhLENBQUM7U0FDOUM7UUFDRCxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssU0FBUyxFQUFFO1lBQzVCLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLHNCQUFzQixDQUFDO1NBQ3BEO0lBQ0gsQ0FBQztJQUNELFdBQVcsQ0FBQyxNQUFNO1FBQ2hCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO1lBQ2hCLElBQUksRUFBRTtnQkFDSixHQUFHLEVBQUUsSUFBSSxDQUFDLEtBQUs7Z0JBQ2YsTUFBTSxFQUFFLEtBQUs7YUFDZDtZQUNELE1BQU07U0FDUCxDQUFDLENBQUM7SUFDTCxDQUFDOzs7WUE5RUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBcUJUO2dCQWVELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxtQkFBbUIsRUFBRSxLQUFLO3lCQWR4Qjs7Ozs7Ozs7Ozs7S0FXQzthQUlKOzs7b0JBRUUsS0FBSztvQkFDTCxLQUFLO21CQUNMLEtBQUs7cUJBQ0wsS0FBSztzQkFDTCxNQUFNOzRCQUNOLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IGdldENvbnRyYXN0aW5nQ29sb3IgfSBmcm9tICduZ3gtY29sb3InO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjb2xvci1zd2F0Y2hlcy1jb2xvcicsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxjb2xvci1zd2F0Y2hcclxuICAgICAgW2NvbG9yXT1cImNvbG9yXCJcclxuICAgICAgW3N0eWxlXT1cImNvbG9yU3R5bGVcIlxyXG4gICAgICBbZm9jdXNTdHlsZV09XCJmb2N1c1N0eWxlXCJcclxuICAgICAgW2NsYXNzLmZpcnN0XT1cImZpcnN0XCJcclxuICAgICAgW2NsYXNzLmxhc3RdPVwibGFzdFwiXHJcbiAgICAgIChjbGljayk9XCJoYW5kbGVDbGljaygkZXZlbnQpXCJcclxuICAgICAgKGtleWRvd24uZW50ZXIpPVwiaGFuZGxlQ2xpY2soJGV2ZW50KVwiXHJcbiAgICAgIChvbkhvdmVyKT1cIm9uU3dhdGNoSG92ZXIuZW1pdCgkZXZlbnQpXCJcclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzcz1cInN3YXRjaC1jaGVja1wiICpuZ0lmPVwiYWN0aXZlXCIgW2NsYXNzLmZpcnN0XT1cImZpcnN0XCIgW2NsYXNzLmxhc3RdPVwibGFzdFwiPlxyXG4gICAgICAgIDxzdmdcclxuICAgICAgICAgIHN0eWxlPVwid2lkdGg6IDI0cHg7IGhlaWdodDogMjRweDtcIlxyXG4gICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXHJcbiAgICAgICAgICBbc3R5bGUuZmlsbF09XCJnZXRDb250cmFzdGluZ0NvbG9yKGNvbG9yKVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHBhdGggZD1cIk0yMSw3TDksMTlMMy41LDEzLjVMNC45MSwxMi4wOUw5LDE2LjE3TDE5LjU5LDUuNTlMMjEsN1pcIiAvPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvY29sb3Itc3dhdGNoPlxyXG4gIGAsXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAgIC5zd2F0Y2hlcy1ncm91cCB7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5zd2F0Y2gtY2hlY2sge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgICAgfVxyXG4gICAgYCxcclxuICBdLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3dhdGNoZXNDb2xvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgY29sb3IhOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgZmlyc3QgPSBmYWxzZTtcclxuICBASW5wdXQoKSBsYXN0ID0gZmFsc2U7XHJcbiAgQElucHV0KCkgYWN0aXZlITogYm9vbGVhbjtcclxuICBAT3V0cHV0KCkgb25DbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBvblN3YXRjaEhvdmVyID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgZ2V0Q29udHJhc3RpbmdDb2xvciA9IGdldENvbnRyYXN0aW5nQ29sb3I7XHJcbiAgY29sb3JTdHlsZTogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcclxuICAgIHdpZHRoOiAnNDBweCcsXHJcbiAgICBoZWlnaHQ6ICcyNHB4JyxcclxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgbWFyZ2luQm90dG9tOiAnMXB4JyxcclxuICB9O1xyXG4gIGZvY3VzU3R5bGU6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7fTtcclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmNvbG9yU3R5bGUuYmFja2dyb3VuZCA9IHRoaXMuY29sb3I7XHJcbiAgICB0aGlzLmZvY3VzU3R5bGUuYm94U2hhZG93ID0gYDAgMCA0cHggJHt0aGlzLmNvbG9yfWA7XHJcbiAgICBpZiAodGhpcy5maXJzdCkge1xyXG4gICAgICB0aGlzLmNvbG9yU3R5bGUuYm9yZGVyUmFkaXVzID0gJzJweCAycHggMCAwJztcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmxhc3QpIHtcclxuICAgICAgdGhpcy5jb2xvclN0eWxlLmJvcmRlclJhZGl1cyA9ICcwIDAgMnB4IDJweCc7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5jb2xvciA9PT0gJyNGRkZGRkYnKSB7XHJcbiAgICAgIHRoaXMuY29sb3JTdHlsZS5ib3hTaGFkb3cgPSAnaW5zZXQgMCAwIDAgMXB4ICNkZGQnO1xyXG4gICAgfVxyXG4gIH1cclxuICBoYW5kbGVDbGljaygkZXZlbnQpIHtcclxuICAgIHRoaXMub25DbGljay5lbWl0KHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIGhleDogdGhpcy5jb2xvcixcclxuICAgICAgICBzb3VyY2U6ICdoZXgnLFxyXG4gICAgICB9LFxyXG4gICAgICAkZXZlbnQsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19