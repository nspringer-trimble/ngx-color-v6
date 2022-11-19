import { EventEmitter, OnInit } from '@angular/core';
import { getContrastingColor } from 'ngx-color';
export declare class SwatchesColorComponent implements OnInit {
    color: string;
    first: boolean;
    last: boolean;
    active: boolean;
    onClick: EventEmitter<any>;
    onSwatchHover: EventEmitter<any>;
    getContrastingColor: typeof getContrastingColor;
    colorStyle: Record<string, string>;
    focusStyle: Record<string, string>;
    ngOnInit(): void;
    handleClick($event: any): void;
}
