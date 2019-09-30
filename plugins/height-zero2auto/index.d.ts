import { FC, Props, HTMLAttributes } from 'react';
interface AutoHeightProps extends Props<any>, HTMLAttributes<any> {
    height: string;
    transitionDuration: number;
    transitionFunc: string;
}
declare const HeightZeroToAuto: FC<AutoHeightProps>;
export { HeightZeroToAuto };
