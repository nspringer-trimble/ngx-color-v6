import { EventEmitter, OnInit } from '@angular/core';
import { Shape } from 'ngx-color';
export declare class BlockSwatchesComponent implements OnInit {
    colors: string[] | Shape[];
    onClick: EventEmitter<any>;
    onSwatchHover: EventEmitter<any>;
    swatchStyle?: {
        [key: string]: string;
    };
    constructor();
    ngOnInit(): void;
    handleClick({ hex, $event }: {
        hex: any;
        $event: any;
    }): void;
    focusStyle(c: any): {
        boxShadow: string;
    };
}
