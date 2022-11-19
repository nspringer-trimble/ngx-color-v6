import { ColorWrap } from 'ngx-color';
export declare class ChromeComponent extends ColorWrap {
    /** Remove alpha slider and options from picker */
    disableAlpha: boolean;
    circle: Record<string, string>;
    pointer: Record<string, string>;
    activeBackground: string;
    constructor();
    afterValidChange(): void;
    handleValueChange({ data, $event }: {
        data: any;
        $event: any;
    }): void;
}
export declare class ColorChromeModule {
}