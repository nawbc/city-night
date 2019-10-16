import React from 'react';

export type ShapeType = 'fillet' | 'circle' | 'rect' | 'square';

export type TipsType = 'danger' | 'success' | 'info' | 'warning' | 'loading' | 'notice';

export type SizeType =
	| 'tiny'
	| 'small'
	| 'normal'
	| 'large'
	| 'largest'
	| [number | string, number | string]
	| React.CSSProperties
	| [string]
	| [number];

export type PositionType =
	| 'topLeft'
	| 'top'
	| 'left'
	| 'right'
	| 'bottom'
	| 'topRight'
	| 'bottomRight'
	| 'bottomLeft'
	| [string | number, string | number]
	| [string | number];

export type EffectType =
	| 'click-down'
	| 'click-left'
	| 'click-top'
	| 'click-right'
	| 'click-shrink'
	| 'click-grow'
	| 'hover-down'
	| 'hover-left'
	| 'hover-right'
	| 'hover-top'
	| 'hover-shrink'
	| 'hover-grow';

export type InputType =
	| 'area'
	| 'button'
	| 'checkbox'
	| 'colorNew'
	| 'dateNew'
	| 'datetimeNew'
	| 'datetime'
	| 'emailNew'
	| 'file'
	| 'hidden'
	| 'image'
	| 'monthNew'
	| 'numberNew'
	| 'password'
	| 'radio'
	| 'rangeNew'
	| 'reset'
	| 'searchNew'
	| 'submit'
	| 'tel'
	| 'text'
	| 'timeNew'
	| 'urlNew'
	| 'week';

export type PlatFormType = 'phone' | 'pad' | 'desktop' | 'desktopA' | 'desktopB' | 'desktopC';

export type DefaultColor =
	| 'green'
	| 'blue'
	| 'red'
	| 'grey'
	| 'magenta'
	| 'cyan'
	| 'brown'
	| 'gold'
	| 'yellow'
	| 'white'
	| 'black'
	| string;
