/* Typescript file generated by genType. */

import {round as roundNotChecked} from'./MyMath';

import {area as areaNotChecked} from'./MyMath';

// In case of type error, check the type of 'round' in 'WrapJsValue.re' and './MyMath'.
export const roundTypeChecked: (_1:number) => number = roundNotChecked;

// Export 'round' early to allow circular import from the '.bs.js' file.
export const round: (_1:number) => number = roundTypeChecked;

// In case of type error, check the type of 'area' in 'WrapJsValue.re' and './MyMath'.
export const areaTypeChecked: (_1:point) => number = areaNotChecked;

// Export 'area' early to allow circular import from the '.bs.js' file.
export const area: (_1:point) => number = function _(Arg1) { const result = areaTypeChecked({x:Arg1[0], y:Arg1[1]}); return result };

// tslint:disable-next-line:no-var-requires
const WrapJsValueBS = require('./WrapJsValue.bs');

import {AbsoluteValue as absoluteVaue} from './MyMath';

// tslint:disable-next-line:interface-over-type-literal
export type point = {x: number, y?: number};

export const roundedNumber: number = WrapJsValueBS.roundedNumber;

export const areaValue: number = WrapJsValueBS.areaValue;

export const useGetProp: (_1:absoluteVaue) => number = WrapJsValueBS.useGetProp;

export const useGetAbs: (_1:absoluteVaue) => number = WrapJsValueBS.useGetAbs;
