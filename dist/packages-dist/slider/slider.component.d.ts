import { ColorWrap } from 'ngx-color';
export declare class SliderComponent extends ColorWrap {
    pointer: Record<string, string>;
    radius: number;
    constructor();
    handlePickerChange({ data, $event }: {
        data: any;
        $event: any;
    }): void;
}
export declare class ColorSliderModule {
}
