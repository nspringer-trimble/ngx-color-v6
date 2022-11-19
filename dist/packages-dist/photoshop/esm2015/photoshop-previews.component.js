import { ChangeDetectionStrategy, Component, Input, } from '@angular/core';
export class PhotoshopPreviewsComponent {
    constructor() {
        this.currentColor = '';
        this.backgroundNew = '';
    }
    ngOnChanges() {
        this.backgroundNew = `rgb(${this.rgb.r},${this.rgb.g}, ${this.rgb.b})`;
    }
}
PhotoshopPreviewsComponent.decorators = [
    { type: Component, args: [{
                selector: 'color-photoshop-previews',
                template: `
  <div>
    <div class="photoshop-label">new</div>
    <div class="photoshop-swatches">
      <div class="photoshop-new" [style.background]="backgroundNew"></div>
      <div class="photoshop-current" [style.background]="currentColor"></div>
    </div>
    <div class="photoshop-label">current</div>
  </div>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                styles: [`
  .photoshop-swatches {
    border: 1px solid #B3B3B3;
    border-bottom: 1px solid #F0F0F0;
    margin-bottom: 2px;
    margin-top: 1px;
  }
  .photoshop-new {
    height: 34px;
    box-shadow: inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 1px 0 #000;
  }
  .photoshop-current {
    height: 34px;
    box-shadow: inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 -1px 0 #000;
  }
  .photoshop-label {
    font-size: 14px;
    color: #000;
    text-align: center;
  }
  `]
            },] }
];
PhotoshopPreviewsComponent.propDecorators = {
    rgb: [{ type: Input }],
    currentColor: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGhvdG9zaG9wLXByZXZpZXdzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi8uLi9zcmMvbGliL2NvbXBvbmVudHMvcGhvdG9zaG9wLyIsInNvdXJjZXMiOlsicGhvdG9zaG9wLXByZXZpZXdzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxLQUFLLEdBRU4sTUFBTSxlQUFlLENBQUM7QUF5Q3ZCLE1BQU0sT0FBTywwQkFBMEI7SUF0Q3ZDO1FBd0NXLGlCQUFZLEdBQUcsRUFBRSxDQUFDO1FBQzNCLGtCQUFhLEdBQUcsRUFBRSxDQUFDO0lBS3JCLENBQUM7SUFIQyxXQUFXO1FBQ1QsSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUM7SUFDekUsQ0FBQzs7O1lBN0NGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsMEJBQTBCO2dCQUNwQyxRQUFRLEVBQUU7Ozs7Ozs7OztHQVNUO2dCQXdCRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsbUJBQW1CLEVBQUUsS0FBSzt5QkF2QnhCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW9CRDthQUlGOzs7a0JBRUUsS0FBSzsyQkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSR0IgfSBmcm9tICduZ3gtY29sb3InO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjb2xvci1waG90b3Nob3AtcHJldmlld3MnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgPGRpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJwaG90b3Nob3AtbGFiZWxcIj5uZXc8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJwaG90b3Nob3Atc3dhdGNoZXNcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cInBob3Rvc2hvcC1uZXdcIiBbc3R5bGUuYmFja2dyb3VuZF09XCJiYWNrZ3JvdW5kTmV3XCI+PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJwaG90b3Nob3AtY3VycmVudFwiIFtzdHlsZS5iYWNrZ3JvdW5kXT1cImN1cnJlbnRDb2xvclwiPjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwicGhvdG9zaG9wLWxhYmVsXCI+Y3VycmVudDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIGAsXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgLnBob3Rvc2hvcC1zd2F0Y2hlcyB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjQjNCM0IzO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNGMEYwRjA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxcHg7XHJcbiAgfVxyXG4gIC5waG90b3Nob3AtbmV3IHtcclxuICAgIGhlaWdodDogMzRweDtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDFweCAwIDAgIzAwMCwgaW5zZXQgLTFweCAwIDAgIzAwMCwgaW5zZXQgMCAxcHggMCAjMDAwO1xyXG4gIH1cclxuICAucGhvdG9zaG9wLWN1cnJlbnQge1xyXG4gICAgaGVpZ2h0OiAzNHB4O1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDAgMCAjMDAwLCBpbnNldCAtMXB4IDAgMCAjMDAwLCBpbnNldCAwIC0xcHggMCAjMDAwO1xyXG4gIH1cclxuICAucGhvdG9zaG9wLWxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBgLFxyXG4gIF0sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQaG90b3Nob3BQcmV2aWV3c0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XHJcbiAgQElucHV0KCkgcmdiITogUkdCO1xyXG4gIEBJbnB1dCgpIGN1cnJlbnRDb2xvciA9ICcnO1xyXG4gIGJhY2tncm91bmROZXcgPSAnJztcclxuXHJcbiAgbmdPbkNoYW5nZXMoKSB7XHJcbiAgICB0aGlzLmJhY2tncm91bmROZXcgPSBgcmdiKCR7dGhpcy5yZ2Iucn0sJHt0aGlzLnJnYi5nfSwgJHt0aGlzLnJnYi5ifSlgO1xyXG4gIH1cclxufVxyXG4iXX0=