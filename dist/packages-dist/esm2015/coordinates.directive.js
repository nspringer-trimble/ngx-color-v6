import { Directive, ElementRef, HostListener, NgModule, Output, } from '@angular/core';
import { Subject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
export class CoordinatesDirective {
    constructor(el) {
        this.el = el;
        this.coordinatesChange = new Subject();
        this.mousechange = new Subject();
        this.mouseListening = false;
    }
    mousemove($event, x, y, isTouch = false) {
        if (this.mouseListening) {
            $event.preventDefault();
            this.mousechange.next({ $event, x, y, isTouch });
        }
    }
    mouseup() {
        this.mouseListening = false;
    }
    mousedown($event, x, y, isTouch = false) {
        $event.preventDefault();
        this.mouseListening = true;
        this.mousechange.next({ $event, x, y, isTouch });
    }
    ngOnInit() {
        this.sub = this.mousechange
            .pipe(
        // limit times it is updated for the same area
        distinctUntilChanged((p, q) => p.x === q.x && p.y === q.y))
            .subscribe(n => this.handleChange(n.x, n.y, n.$event, n.isTouch));
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    handleChange(x, y, $event, isTouch) {
        const containerWidth = this.el.nativeElement.clientWidth;
        const containerHeight = this.el.nativeElement.clientHeight;
        const left = x -
            (this.el.nativeElement.getBoundingClientRect().left + window.pageXOffset);
        let top = y - this.el.nativeElement.getBoundingClientRect().top;
        if (!isTouch) {
            top = top - window.pageYOffset;
        }
        this.coordinatesChange.next({
            x,
            y,
            top,
            left,
            containerWidth,
            containerHeight,
            $event,
        });
    }
}
CoordinatesDirective.decorators = [
    { type: Directive, args: [{ selector: '[ngx-color-coordinates]' },] }
];
CoordinatesDirective.ctorParameters = () => [
    { type: ElementRef }
];
CoordinatesDirective.propDecorators = {
    coordinatesChange: [{ type: Output }],
    mousemove: [{ type: HostListener, args: ['window:mousemove', ['$event', '$event.pageX', '$event.pageY'],] }, { type: HostListener, args: ['window:touchmove', [
                    '$event',
                    '$event.touches[0].clientX',
                    '$event.touches[0].clientY',
                    'true',
                ],] }],
    mouseup: [{ type: HostListener, args: ['window:mouseup',] }, { type: HostListener, args: ['window:touchend',] }],
    mousedown: [{ type: HostListener, args: ['mousedown', ['$event', '$event.pageX', '$event.pageY'],] }, { type: HostListener, args: ['touchstart', [
                    '$event',
                    '$event.touches[0].clientX',
                    '$event.touches[0].clientY',
                    'true',
                ],] }]
};
export class CoordinatesModule {
}
CoordinatesModule.decorators = [
    { type: NgModule, args: [{
                declarations: [CoordinatesDirective],
                exports: [CoordinatesDirective],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29vcmRpbmF0ZXMuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uL3NyYy9saWIvY29tbW9uLyIsInNvdXJjZXMiOlsiY29vcmRpbmF0ZXMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixRQUFRLEVBR1IsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxPQUFPLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQzdDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR3RELE1BQU0sT0FBTyxvQkFBb0I7SUFtRC9CLFlBQW9CLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBakRsQyxzQkFBaUIsR0FBRyxJQUFJLE9BQU8sRUFRM0IsQ0FBQztRQUNHLGdCQUFXLEdBQUcsSUFBSSxPQUFPLEVBSzdCLENBQUM7UUFFRyxtQkFBYyxHQUFHLEtBQUssQ0FBQztJQWlDTSxDQUFDO0lBeEJ0QyxTQUFTLENBQUMsTUFBYSxFQUFFLENBQVMsRUFBRSxDQUFTLEVBQUUsT0FBTyxHQUFHLEtBQUs7UUFDNUQsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3ZCLE1BQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUN4QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7U0FDbEQ7SUFDSCxDQUFDO0lBR0QsT0FBTztRQUNMLElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO0lBQzlCLENBQUM7SUFRRCxTQUFTLENBQUMsTUFBYSxFQUFFLENBQVMsRUFBRSxDQUFTLEVBQUUsT0FBTyxHQUFHLEtBQUs7UUFDNUQsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1FBQzNCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBSUQsUUFBUTtRQUNOLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFdBQVc7YUFDeEIsSUFBSTtRQUNILDhDQUE4QztRQUM5QyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDM0Q7YUFDQSxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQsWUFBWSxDQUFDLENBQVMsRUFBRSxDQUFTLEVBQUUsTUFBYSxFQUFFLE9BQWdCO1FBQ2hFLE1BQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQztRQUN6RCxNQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUM7UUFDM0QsTUFBTSxJQUFJLEdBQ1IsQ0FBQztZQUNELENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzVFLElBQUksR0FBRyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLEdBQUcsQ0FBQztRQUVoRSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ1osR0FBRyxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDO1NBQ2hDO1FBQ0QsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQztZQUMxQixDQUFDO1lBQ0QsQ0FBQztZQUNELEdBQUc7WUFDSCxJQUFJO1lBQ0osY0FBYztZQUNkLGVBQWU7WUFDZixNQUFNO1NBQ1AsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBdkZGLFNBQVMsU0FBQyxFQUFFLFFBQVEsRUFBRSx5QkFBeUIsRUFBRTs7O1lBWGhELFVBQVU7OztnQ0FhVCxNQUFNO3dCQW1CTixZQUFZLFNBQUMsa0JBQWtCLEVBQUUsQ0FBQyxRQUFRLEVBQUUsY0FBYyxFQUFFLGNBQWMsQ0FBQyxjQUMzRSxZQUFZLFNBQUMsa0JBQWtCLEVBQUU7b0JBQ2hDLFFBQVE7b0JBQ1IsMkJBQTJCO29CQUMzQiwyQkFBMkI7b0JBQzNCLE1BQU07aUJBQ1A7c0JBT0EsWUFBWSxTQUFDLGdCQUFnQixjQUM3QixZQUFZLFNBQUMsaUJBQWlCO3dCQUk5QixZQUFZLFNBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxFQUFFLGNBQWMsRUFBRSxjQUFjLENBQUMsY0FDcEUsWUFBWSxTQUFDLFlBQVksRUFBRTtvQkFDMUIsUUFBUTtvQkFDUiwyQkFBMkI7b0JBQzNCLDJCQUEyQjtvQkFDM0IsTUFBTTtpQkFDUDs7QUFpREgsTUFBTSxPQUFPLGlCQUFpQjs7O1lBSjdCLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztnQkFDcEMsT0FBTyxFQUFFLENBQUMsb0JBQW9CLENBQUM7YUFDaEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIERpcmVjdGl2ZSxcclxuICBFbGVtZW50UmVmLFxyXG4gIEhvc3RMaXN0ZW5lcixcclxuICBOZ01vZHVsZSxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbkBEaXJlY3RpdmUoeyBzZWxlY3RvcjogJ1tuZ3gtY29sb3ItY29vcmRpbmF0ZXNdJyB9KVxyXG5leHBvcnQgY2xhc3MgQ29vcmRpbmF0ZXNEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgQE91dHB1dCgpXHJcbiAgY29vcmRpbmF0ZXNDaGFuZ2UgPSBuZXcgU3ViamVjdDx7XHJcbiAgICB4OiBudW1iZXI7XHJcbiAgICB5OiBudW1iZXI7XHJcbiAgICB0b3A6IG51bWJlcjtcclxuICAgIGxlZnQ6IG51bWJlcjtcclxuICAgIGNvbnRhaW5lcldpZHRoOiBudW1iZXI7XHJcbiAgICBjb250YWluZXJIZWlnaHQ6IG51bWJlcjtcclxuICAgICRldmVudDogYW55O1xyXG4gIH0+KCk7XHJcbiAgcHJpdmF0ZSBtb3VzZWNoYW5nZSA9IG5ldyBTdWJqZWN0PHtcclxuICAgIHg6IG51bWJlcjtcclxuICAgIHk6IG51bWJlcjtcclxuICAgICRldmVudDogYW55O1xyXG4gICAgaXNUb3VjaDogYm9vbGVhbjtcclxuICB9PigpO1xyXG5cclxuICBwcml2YXRlIG1vdXNlTGlzdGVuaW5nID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBzdWIhOiBTdWJzY3JpcHRpb247XHJcbiAgQEhvc3RMaXN0ZW5lcignd2luZG93Om1vdXNlbW92ZScsIFsnJGV2ZW50JywgJyRldmVudC5wYWdlWCcsICckZXZlbnQucGFnZVknXSlcclxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6dG91Y2htb3ZlJywgW1xyXG4gICAgJyRldmVudCcsXHJcbiAgICAnJGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WCcsXHJcbiAgICAnJGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WScsXHJcbiAgICAndHJ1ZScsXHJcbiAgXSlcclxuICBtb3VzZW1vdmUoJGV2ZW50OiBFdmVudCwgeDogbnVtYmVyLCB5OiBudW1iZXIsIGlzVG91Y2ggPSBmYWxzZSkge1xyXG4gICAgaWYgKHRoaXMubW91c2VMaXN0ZW5pbmcpIHtcclxuICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIHRoaXMubW91c2VjaGFuZ2UubmV4dCh7ICRldmVudCwgeCwgeSwgaXNUb3VjaCB9KTtcclxuICAgIH1cclxuICB9XHJcbiAgQEhvc3RMaXN0ZW5lcignd2luZG93Om1vdXNldXAnKVxyXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzp0b3VjaGVuZCcpXHJcbiAgbW91c2V1cCgpIHtcclxuICAgIHRoaXMubW91c2VMaXN0ZW5pbmcgPSBmYWxzZTtcclxuICB9XHJcbiAgQEhvc3RMaXN0ZW5lcignbW91c2Vkb3duJywgWyckZXZlbnQnLCAnJGV2ZW50LnBhZ2VYJywgJyRldmVudC5wYWdlWSddKVxyXG4gIEBIb3N0TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBbXHJcbiAgICAnJGV2ZW50JyxcclxuICAgICckZXZlbnQudG91Y2hlc1swXS5jbGllbnRYJyxcclxuICAgICckZXZlbnQudG91Y2hlc1swXS5jbGllbnRZJyxcclxuICAgICd0cnVlJyxcclxuICBdKVxyXG4gIG1vdXNlZG93bigkZXZlbnQ6IEV2ZW50LCB4OiBudW1iZXIsIHk6IG51bWJlciwgaXNUb3VjaCA9IGZhbHNlKSB7XHJcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMubW91c2VMaXN0ZW5pbmcgPSB0cnVlO1xyXG4gICAgdGhpcy5tb3VzZWNoYW5nZS5uZXh0KHsgJGV2ZW50LCB4LCB5LCBpc1RvdWNoIH0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZikge31cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLnN1YiA9IHRoaXMubW91c2VjaGFuZ2VcclxuICAgICAgLnBpcGUoXHJcbiAgICAgICAgLy8gbGltaXQgdGltZXMgaXQgaXMgdXBkYXRlZCBmb3IgdGhlIHNhbWUgYXJlYVxyXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKChwLCBxKSA9PiBwLnggPT09IHEueCAmJiBwLnkgPT09IHEueSksXHJcbiAgICAgIClcclxuICAgICAgLnN1YnNjcmliZShuID0+IHRoaXMuaGFuZGxlQ2hhbmdlKG4ueCwgbi55LCBuLiRldmVudCwgbi5pc1RvdWNoKSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVDaGFuZ2UoeDogbnVtYmVyLCB5OiBudW1iZXIsICRldmVudDogRXZlbnQsIGlzVG91Y2g6IGJvb2xlYW4pIHtcclxuICAgIGNvbnN0IGNvbnRhaW5lcldpZHRoID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNsaWVudFdpZHRoO1xyXG4gICAgY29uc3QgY29udGFpbmVySGVpZ2h0ID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNsaWVudEhlaWdodDtcclxuICAgIGNvbnN0IGxlZnQgPVxyXG4gICAgICB4IC1cclxuICAgICAgKHRoaXMuZWwubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0ICsgd2luZG93LnBhZ2VYT2Zmc2V0KTtcclxuICAgIGxldCB0b3AgPSB5IC0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcclxuXHJcbiAgICBpZiAoIWlzVG91Y2gpIHtcclxuICAgICAgdG9wID0gdG9wIC0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG4gICAgfVxyXG4gICAgdGhpcy5jb29yZGluYXRlc0NoYW5nZS5uZXh0KHtcclxuICAgICAgeCxcclxuICAgICAgeSxcclxuICAgICAgdG9wLFxyXG4gICAgICBsZWZ0LFxyXG4gICAgICBjb250YWluZXJXaWR0aCxcclxuICAgICAgY29udGFpbmVySGVpZ2h0LFxyXG4gICAgICAkZXZlbnQsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbQ29vcmRpbmF0ZXNEaXJlY3RpdmVdLFxyXG4gIGV4cG9ydHM6IFtDb29yZGluYXRlc0RpcmVjdGl2ZV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDb29yZGluYXRlc01vZHVsZSB7fVxyXG4iXX0=