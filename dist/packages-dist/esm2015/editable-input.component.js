import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, NgModule, Output, } from '@angular/core';
import { fromEvent } from 'rxjs';
export class EditableInputComponent {
    constructor() {
        this.placeholder = '';
        this.onChange = new EventEmitter();
        this.focus = false;
    }
    ngOnInit() {
        this.wrapStyle = this.style && this.style.wrap ? this.style.wrap : {};
        this.inputStyle = this.style && this.style.input ? this.style.input : {};
        this.labelStyle = this.style && this.style.label ? this.style.label : {};
        if (this.dragLabel) {
            this.labelStyle.cursor = 'ew-resize';
        }
    }
    handleFocus($event) {
        this.focus = true;
    }
    handleFocusOut($event) {
        this.focus = false;
        this.currentValue = this.blurValue;
    }
    handleKeydown($event) {
        // In case `e.target.value` is a percentage remove the `%` character
        // and update accordingly with a percentage
        // https://github.com/casesandberg/react-color/issues/383
        const stringValue = String($event.target.value);
        const isPercentage = stringValue.indexOf('%') > -1;
        const num = Number(stringValue.replace(/%/g, ''));
        if (isNaN(num)) {
            return;
        }
        const amount = this.arrowOffset || 1;
        // Up
        if ($event.keyCode === 38) {
            if (this.label) {
                this.onChange.emit({
                    data: { [this.label]: num + amount },
                    $event,
                });
            }
            else {
                this.onChange.emit({ data: num + amount, $event });
            }
            if (isPercentage) {
                this.currentValue = `${num + amount}%`;
            }
            else {
                this.currentValue = num + amount;
            }
        }
        // Down
        if ($event.keyCode === 40) {
            if (this.label) {
                this.onChange.emit({
                    data: { [this.label]: num - amount },
                    $event,
                });
            }
            else {
                this.onChange.emit({ data: num - amount, $event });
            }
            if (isPercentage) {
                this.currentValue = `${num - amount}%`;
            }
            else {
                this.currentValue = num - amount;
            }
        }
    }
    handleKeyup($event) {
        if ($event.keyCode === 40 || $event.keyCode === 38) {
            return;
        }
        if (`${this.currentValue}` === $event.target.value) {
            return;
        }
        if (this.label) {
            this.onChange.emit({
                data: { [this.label]: $event.target.value },
                $event,
            });
        }
        else {
            this.onChange.emit({ data: $event.target.value, $event });
        }
    }
    ngOnChanges() {
        if (!this.focus) {
            this.currentValue = String(this.value).toUpperCase();
            this.blurValue = String(this.value).toUpperCase();
        }
        else {
            this.blurValue = String(this.value).toUpperCase();
        }
    }
    ngOnDestroy() {
        this.unsubscribe();
    }
    subscribe() {
        this.mousemove = fromEvent(document, 'mousemove').subscribe((ev) => this.handleDrag(ev));
        this.mouseup = fromEvent(document, 'mouseup').subscribe(() => this.unsubscribe());
    }
    unsubscribe() {
        if (this.mousemove) {
            this.mousemove.unsubscribe();
        }
        if (this.mouseup) {
            this.mouseup.unsubscribe();
        }
    }
    handleMousedown($event) {
        if (this.dragLabel) {
            $event.preventDefault();
            this.handleDrag($event);
            this.subscribe();
        }
    }
    handleDrag($event) {
        if (this.dragLabel) {
            const newValue = Math.round(this.value + $event.movementX);
            if (newValue >= 0 && newValue <= this.dragMax) {
                this.onChange.emit({ data: { [this.label]: newValue }, $event });
            }
        }
    }
}
EditableInputComponent.decorators = [
    { type: Component, args: [{
                selector: 'color-editable-input',
                template: `
    <div class="wrap" [ngStyle]="wrapStyle">
      <input
        [ngStyle]="inputStyle"
        spellCheck="false"
        [value]="currentValue"
        [placeholder]="placeholder"
        (keydown)="handleKeydown($event)"
        (keyup)="handleKeyup($event)"
        (focus)="handleFocus($event)"
        (focusout)="handleFocusOut($event)"
      />
      <span *ngIf="label" [ngStyle]="labelStyle" (mousedown)="handleMousedown($event)">
        {{ label }}
      </span>
    </div>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [`
      :host {
        display: flex;
      }
      .wrap {
        position: relative;
      }
    `]
            },] }
];
EditableInputComponent.propDecorators = {
    style: [{ type: Input }],
    label: [{ type: Input }],
    value: [{ type: Input }],
    arrowOffset: [{ type: Input }],
    dragLabel: [{ type: Input }],
    dragMax: [{ type: Input }],
    placeholder: [{ type: Input }],
    onChange: [{ type: Output }]
};
export class EditableInputModule {
}
EditableInputModule.decorators = [
    { type: NgModule, args: [{
                declarations: [EditableInputComponent],
                exports: [EditableInputComponent],
                imports: [CommonModule],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWRpdGFibGUtaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uL3NyYy9saWIvY29tbW9uLyIsInNvdXJjZXMiOlsiZWRpdGFibGUtaW5wdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUNMLFFBQVEsRUFJUixNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFNBQVMsRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFpQy9DLE1BQU0sT0FBTyxzQkFBc0I7SUEvQm5DO1FBMENXLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBTXhDLFVBQUssR0FBRyxLQUFLLENBQUM7SUEwSGhCLENBQUM7SUF0SEMsUUFBUTtRQUNOLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUN0RSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDekUsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ3pFLElBQUksSUFBSSxD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QkFDTCxNQUFNOztBQXVJVCxNQUFNLE9BQU8sbUJBQW1COzs7WUFML0IsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLHNCQUFzQixDQUFDO2dCQUN0QyxPQUFPLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztnQkFDakMsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2FBQ3hCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE5nTW9kdWxlLFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IGZyb21FdmVudCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NvbG9yLWVkaXRhYmxlLWlucHV0JyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiBjbGFzcz1cIndyYXBcIiBbbmdTdHlsZV09XCJ3cmFwU3R5bGVcIj5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgW25nU3R5bGVdPVwiaW5wdXRTdHlsZVwiXHJcbiAgICAgICAgc3BlbGxDaGVjaz1cImZhbHNlXCJcclxuICAgICAgICBbdmFsdWVdPVwiY3VycmVudFZhbHVlXCJcclxuICAgICAgICBbcGxhY2Vob2xkZXJdPVwicGxhY2Vob2xkZXJcIlxyXG4gICAgICAgIChrZXlkb3duKT1cImhhbmRsZUtleWRvd24oJGV2ZW50KVwiXHJcbiAgICAgICAgKGtleXVwKT1cImhhbmRsZUtleXVwKCRldmVudClcIlxyXG4gICAgICAgIChmb2N1cyk9XCJoYW5kbGVGb2N1cygkZXZlbnQpXCJcclxuICAgICAgICAoZm9jdXNvdXQpPVwiaGFuZGxlRm9jdXNPdXQoJGV2ZW50KVwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxzcGFuICpuZ0lmPVwibGFiZWxcIiBbbmdTdHlsZV09XCJsYWJlbFN0eWxlXCIgKG1vdXNlZG93bik9XCJoYW5kbGVNb3VzZWRvd24oJGV2ZW50KVwiPlxyXG4gICAgICAgIHt7IGxhYmVsIH19XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gIGAsXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAgIDpob3N0IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICB9XHJcbiAgICAgIC53cmFwIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIH1cclxuICAgIGAsXHJcbiAgXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxufSlcclxuZXhwb3J0IGNsYXNzIEVkaXRhYmxlSW5wdXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuICBASW5wdXQoKSBzdHlsZSE6IHtcclxuICAgIHdyYXA/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+O1xyXG4gICAgaW5wdXQ/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+O1xyXG4gICAgbGFiZWw/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+O1xyXG4gIH07XHJcbiAgQElucHV0KCkgbGFiZWwhOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgdmFsdWUhOiBzdHJpbmcgfCBudW1iZXI7XHJcbiAgQElucHV0KCkgYXJyb3dPZmZzZXQhOiBudW1iZXI7XHJcbiAgQElucHV0KCkgZHJhZ0xhYmVsITogYm9vbGVhbjtcclxuICBASW5wdXQoKSBkcmFnTWF4ITogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyID0gJyc7XHJcbiAgQE91dHB1dCgpIG9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIGN1cnJlbnRWYWx1ZSE6IHN0cmluZyB8IG51bWJlcjtcclxuICBibHVyVmFsdWUhOiBzdHJpbmc7XHJcbiAgd3JhcFN0eWxlITogUmVjb3JkPHN0cmluZywgc3RyaW5nPjtcclxuICBpbnB1dFN0eWxlITogUmVjb3JkPHN0cmluZywgc3RyaW5nPjtcclxuICBsYWJlbFN0eWxlITogUmVjb3JkPHN0cmluZywgc3RyaW5nPjtcclxuICBmb2N1cyA9IGZhbHNlO1xyXG4gIG1vdXNlbW92ZSE6IFN1YnNjcmlwdGlvbjtcclxuICBtb3VzZXVwITogU3Vic2NyaXB0aW9uO1xyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMud3JhcFN0eWxlID0gdGhpcy5zdHlsZSAmJiB0aGlzLnN0eWxlLndyYXAgPyB0aGlzLnN0eWxlLndyYXAgOiB7fTtcclxuICAgIHRoaXMuaW5wdXRTdHlsZSA9IHRoaXMuc3R5bGUgJiYgdGhpcy5zdHlsZS5pbnB1dCA/IHRoaXMuc3R5bGUuaW5wdXQgOiB7fTtcclxuICAgIHRoaXMubGFiZWxTdHlsZSA9IHRoaXMuc3R5bGUgJiYgdGhpcy5zdHlsZS5sYWJlbCA/IHRoaXMuc3R5bGUubGFiZWwgOiB7fTtcclxuICAgIGlmICh0aGlzLmRyYWdMYWJlbCkge1xyXG4gICAgICB0aGlzLmxhYmVsU3R5bGUuY3Vyc29yID0gJ2V3LXJlc2l6ZSc7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGhhbmRsZUZvY3VzKCRldmVudCkge1xyXG4gICAgdGhpcy5mb2N1cyA9IHRydWU7XHJcbiAgfVxyXG4gIGhhbmRsZUZvY3VzT3V0KCRldmVudCkge1xyXG4gICAgdGhpcy5mb2N1cyA9IGZhbHNlO1xyXG4gICAgdGhpcy5jdXJyZW50VmFsdWUgPSB0aGlzLmJsdXJWYWx1ZTtcclxuICB9XHJcbiAgaGFuZGxlS2V5ZG93bigkZXZlbnQpIHtcclxuICAgIC8vIEluIGNhc2UgYGUudGFyZ2V0LnZhbHVlYCBpcyBhIHBlcmNlbnRhZ2UgcmVtb3ZlIHRoZSBgJWAgY2hhcmFjdGVyXHJcbiAgICAvLyBhbmQgdXBkYXRlIGFjY29yZGluZ2x5IHdpdGggYSBwZXJjZW50YWdlXHJcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vY2FzZXNhbmRiZXJnL3JlYWN0LWNvbG9yL2lzc3Vlcy8zODNcclxuICAgIGNvbnN0IHN0cmluZ1ZhbHVlID0gU3RyaW5nKCRldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgY29uc3QgaXNQZXJjZW50YWdlID0gc3RyaW5nVmFsdWUuaW5kZXhPZignJScpID4gLTE7XHJcbiAgICBjb25zdCBudW0gPSBOdW1iZXIoc3RyaW5nVmFsdWUucmVwbGFjZSgvJS9nLCAnJykpO1xyXG4gICAgaWYgKGlzTmFOKG51bSkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgYW1vdW50ID0gdGhpcy5hcnJvd09mZnNldCB8fCAxO1xyXG5cclxuICAgIC8vIFVwXHJcbiAgICBpZiAoJGV2ZW50LmtleUNvZGUgPT09IDM4KSB7XHJcbiAgICAgIGlmICh0aGlzLmxhYmVsKSB7XHJcbiAgICAgICAgdGhpcy5vbkNoYW5nZS5lbWl0KHtcclxuICAgICAgICAgIGRhdGE6IHsgW3RoaXMubGFiZWxdOiBudW0gKyBhbW91bnQgfSxcclxuICAgICAgICAgICRldmVudCxcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlLmVtaXQoeyBkYXRhOiBudW0gKyBhbW91bnQsICRldmVudCB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGlzUGVyY2VudGFnZSkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudFZhbHVlID0gYCR7bnVtICsgYW1vdW50fSVgO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuY3VycmVudFZhbHVlID0gbnVtICsgYW1vdW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRG93blxyXG4gICAgaWYgKCRldmVudC5rZXlDb2RlID09PSA0MCkge1xyXG4gICAgICBpZiAodGhpcy5sYWJlbCkge1xyXG4gICAgICAgIHRoaXMub25DaGFuZ2UuZW1pdCh7XHJcbiAgICAgICAgICBkYXRhOiB7IFt0aGlzLmxhYmVsXTogbnVtIC0gYW1vdW50IH0sXHJcbiAgICAgICAgICAkZXZlbnQsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5vbkNoYW5nZS5lbWl0KHsgZGF0YTogbnVtIC0gYW1vdW50LCAkZXZlbnQgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChpc1BlcmNlbnRhZ2UpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRWYWx1ZSA9IGAke251bSAtIGFtb3VudH0lYDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRWYWx1ZSA9IG51bSAtIGFtb3VudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBoYW5kbGVLZXl1cCgkZXZlbnQpIHtcclxuICAgIGlmICgkZXZlbnQua2V5Q29kZSA9PT0gNDAgfHwgJGV2ZW50LmtleUNvZGUgPT09IDM4KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmIChgJHt0aGlzLmN1cnJlbnRWYWx1ZX1gID09PSAkZXZlbnQudGFyZ2V0LnZhbHVlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5sYWJlbCkge1xyXG4gICAgICB0aGlzLm9uQ2hhbmdlLmVtaXQoe1xyXG4gICAgICAgIGRhdGE6IHsgW3RoaXMubGFiZWxdOiAkZXZlbnQudGFyZ2V0LnZhbHVlIH0sXHJcbiAgICAgICAgJGV2ZW50LFxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMub25DaGFuZ2UuZW1pdCh7IGRhdGE6ICRldmVudC50YXJnZXQudmFsdWUsICRldmVudCB9KTtcclxuICAgIH1cclxuICB9XHJcbiAgbmdPbkNoYW5nZXMoKSB7XHJcbiAgICBpZiAoIXRoaXMuZm9jdXMpIHtcclxuICAgICAgdGhpcy5jdXJyZW50VmFsdWUgPSBTdHJpbmcodGhpcy52YWx1ZSkudG9VcHBlckNhc2UoKTtcclxuICAgICAgdGhpcy5ibHVyVmFsdWUgPSBTdHJpbmcodGhpcy52YWx1ZSkudG9VcHBlckNhc2UoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuYmx1clZhbHVlID0gU3RyaW5nKHRoaXMudmFsdWUpLnRvVXBwZXJDYXNlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy51bnN1YnNjcmliZSgpO1xyXG4gIH1cclxuICBzdWJzY3JpYmUoKSB7XHJcbiAgICB0aGlzLm1vdXNlbW92ZSA9IGZyb21FdmVudChkb2N1bWVudCwgJ21vdXNlbW92ZScpLnN1YnNjcmliZSgoZXY6IEV2ZW50KSA9PiB0aGlzLmhhbmRsZURyYWcoZXYpKTtcclxuICAgIHRoaXMubW91c2V1cCA9IGZyb21FdmVudChkb2N1bWVudCwgJ21vdXNldXAnKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy51bnN1YnNjcmliZSgpKTtcclxuICB9XHJcbiAgdW5zdWJzY3JpYmUoKSB7XHJcbiAgICBpZiAodGhpcy5tb3VzZW1vdmUpIHtcclxuICAgICAgdGhpcy5tb3VzZW1vdmUudW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLm1vdXNldXApIHtcclxuICAgICAgdGhpcy5tb3VzZXVwLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGhhbmRsZU1vdXNlZG93bigkZXZlbnQ6IEV2ZW50KSB7XHJcbiAgICBpZiAodGhpcy5kcmFnTGFiZWwpIHtcclxuICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHRoaXMuaGFuZGxlRHJhZygkZXZlbnQpO1xyXG4gICAgICB0aGlzLnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuICBoYW5kbGVEcmFnKCRldmVudCkge1xyXG4gICAgaWYgKHRoaXMuZHJhZ0xhYmVsKSB7XHJcbiAgICAgIGNvbnN0IG5ld1ZhbHVlID0gTWF0aC5yb3VuZCh0aGlzLnZhbHVlICsgJGV2ZW50Lm1vdmVtZW50WCk7XHJcbiAgICAgIGlmIChuZXdWYWx1ZSA+PSAwICYmIG5ld1ZhbHVlIDw9IHRoaXMuZHJhZ01heCkge1xyXG4gICAgICAgIHRoaXMub25DaGFuZ2UuZW1pdCh7IGRhdGE6IHsgW3RoaXMubGFiZWxdOiBuZXdWYWx1ZSB9LCAkZXZlbnQgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbRWRpdGFibGVJbnB1dENvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW0VkaXRhYmxlSW5wdXRDb21wb25lbnRdLFxyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRWRpdGFibGVJbnB1dE1vZHVsZSB7fVxyXG4iXX0=