import { EventEmitter } from '@angular/core';
import { HSL } from 'ngx-color';
export declare class SliderSwatchesComponent {
    hsl: HSL;
    onClick: EventEmitter<any>;
    onSwatchHover: EventEmitter<any>;
    active(l: number, s: number): boolean;
    handleClick({ data, $event }: {
        data: any;
        $event: any;
    }): void;
}
