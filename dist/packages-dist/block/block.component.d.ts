import { ColorWrap } from 'ngx-color';
export declare class BlockComponent extends ColorWrap {
    /** Pixel value for picker width */
    width: string | number;
    /** Color squares to display */
    colors: string[];
    triangle: 'top' | 'hide';
    input: {
        [key: string]: string;
    };
    wrap: {
        [key: string]: string;
    };
    disableAlpha: boolean;
    constructor();
    handleValueChange({ data, $event }: {
        data: any;
        $event: any;
    }): void;
    getContrastingColor(hex: any): "#fff" | "rgba(0,0,0,0.4)" | "#000";
    handleBlockChange({ hex, $event }: {
        hex: any;
        $event: any;
    }): void;
}
export declare class ColorBlockModule {
}