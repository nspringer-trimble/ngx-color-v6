import { Component, EventEmitter, Input, Output } from '@angular/core';
export class BlockSwatchesComponent {
    constructor() {
        this.onClick = new EventEmitter();
        this.onSwatchHover = new EventEmitter();
    }
    ngOnInit() {
        this.swatchStyle = {
            width: '22px',
            height: '22px',
            float: 'left',
            marginRight: '10px',
            marginBottom: '10px',
            borderRadius: '4px',
        };
    }
    handleClick({ hex, $event }) {
        this.onClick.emit({ hex, $event });
    }
    focusStyle(c) {
        return {
            boxShadow: `${c} 0 0 4px`,
        };
    }
}
BlockSwatchesComponent.decorators = [
    { type: Component, args: [{
                selector: 'color-block-swatches',
                template: `
    <div class="block-swatches">
      <color-swatch
        *ngFor="let c of colors"
        [color]="c"
        [style]="swatchStyle"
        [focusStyle]="focusStyle(c)"
        (onClick)="handleClick($event)"
        (onHover)="onSwatchHover.emit($event)"
      ></color-swatch>
      <div class="clear"></div>
    </div>
  `,
                styles: [`
    .block-swatches {
      margin-right: -10px;
    }
    .clear {
      clear: both;
    }
  `]
            },] }
];
BlockSwatchesComponent.ctorParameters = () => [];
BlockSwatchesComponent.propDecorators = {
    colors: [{ type: Input }],
    onClick: [{ type: Output }],
    onSwatchHover: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvY2stc3dhdGNoZXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uLy4uL3NyYy9saWIvY29tcG9uZW50cy9ibG9jay8iLCJzb3VyY2VzIjpbImJsb2NrLXN3YXRjaGVzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBNEIvRSxNQUFNLE9BQU8sc0JBQXNCO0lBTWpDO1FBSlUsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFDbEMsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO0lBR2xDLENBQUM7SUFFakIsUUFBUTtRQUNOLElBQUksQ0FBQyxXQUFXLEdBQUc7WUFDakIsS0FBSyxFQUFFLE1BQU07WUFDYixNQUFNLEVBQUUsTUFBTTtZQUNkLEtBQUssRUFBRSxNQUFNO1lBQ2IsV0FBVyxFQUFFLE1BQU07WUFDbkIsWUFBWSxFQUFFLE1BQU07WUFDcEIsWUFBWSxFQUFFLEtBQUs7U0FDcEIsQ0FBQztJQUNKLENBQUM7SUFDRCxXQUFXLENBQUMsRUFBQyxHQUFHLEVBQUUsTUFBTSxFQUFDO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUMsR0FBRyxFQUFFLE1BQU0sRUFBQyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUNELFVBQVUsQ0FBQyxDQUFDO1FBQ1YsT0FBTztZQUNMLFNBQVMsRUFBRSxHQUFJLENBQUUsVUFBVTtTQUM1QixDQUFDO0lBQ0osQ0FBQzs7O1lBakRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7OztHQVlUO3lCQUNROzs7Ozs7O0dBT1I7YUFDRjs7OztxQkFFRSxLQUFLO3NCQUNMLE1BQU07NEJBQ04sTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IFNoYXBlIH0gZnJvbSAnbmd4LWNvbG9yJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY29sb3ItYmxvY2stc3dhdGNoZXMnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2IGNsYXNzPVwiYmxvY2stc3dhdGNoZXNcIj5cclxuICAgICAgPGNvbG9yLXN3YXRjaFxyXG4gICAgICAgICpuZ0Zvcj1cImxldCBjIG9mIGNvbG9yc1wiXHJcbiAgICAgICAgW2NvbG9yXT1cImNcIlxyXG4gICAgICAgIFtzdHlsZV09XCJzd2F0Y2hTdHlsZVwiXHJcbiAgICAgICAgW2ZvY3VzU3R5bGVdPVwiZm9jdXNTdHlsZShjKVwiXHJcbiAgICAgICAgKG9uQ2xpY2spPVwiaGFuZGxlQ2xpY2soJGV2ZW50KVwiXHJcbiAgICAgICAgKG9uSG92ZXIpPVwib25Td2F0Y2hIb3Zlci5lbWl0KCRldmVudClcIlxyXG4gICAgICA+PC9jb2xvci1zd2F0Y2g+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjbGVhclwiPjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgYCxcclxuICBzdHlsZXM6IFtgXHJcbiAgICAuYmxvY2stc3dhdGNoZXMge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IC0xMHB4O1xyXG4gICAgfVxyXG4gICAgLmNsZWFyIHtcclxuICAgICAgY2xlYXI6IGJvdGg7XHJcbiAgICB9XHJcbiAgYF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCbG9ja1N3YXRjaGVzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBjb2xvcnMhOiBzdHJpbmdbXSB8IFNoYXBlW107XHJcbiAgQE91dHB1dCgpIG9uQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgb25Td2F0Y2hIb3ZlciA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIHN3YXRjaFN0eWxlPzoge1trZXk6IHN0cmluZ106IHN0cmluZ307XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5zd2F0Y2hTdHlsZSA9IHtcclxuICAgICAgd2lkdGg6ICcyMnB4JyxcclxuICAgICAgaGVpZ2h0OiAnMjJweCcsXHJcbiAgICAgIGZsb2F0OiAnbGVmdCcsXHJcbiAgICAgIG1hcmdpblJpZ2h0OiAnMTBweCcsXHJcbiAgICAgIG1hcmdpbkJvdHRvbTogJzEwcHgnLFxyXG4gICAgICBib3JkZXJSYWRpdXM6ICc0cHgnLFxyXG4gICAgfTtcclxuICB9XHJcbiAgaGFuZGxlQ2xpY2soe2hleCwgJGV2ZW50fSkge1xyXG4gICAgdGhpcy5vbkNsaWNrLmVtaXQoe2hleCwgJGV2ZW50fSk7XHJcbiAgfVxyXG4gIGZvY3VzU3R5bGUoYykge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgYm94U2hhZG93OiBgJHsgYyB9IDAgMCA0cHhgLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==