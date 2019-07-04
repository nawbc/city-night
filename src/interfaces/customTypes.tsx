import React from 'react'

export type ShapeType = 'fillet'
	| 'circle'
	| 'rect'
	| 'square';

export type TipsType = 'danger'
	| 'success'
	| 'info'
	| 'warning'
	| 'loading'
	| 'notice';

export type SizeType = 'tiny'
	| 'small'
	| 'normal'
	| 'large'
	| 'title'
	| [number | string, number | string]
	| React.CSSProperties
	| [string]
	| [number];

export type PositionType = 'topLeft'
	| 'top'
	| 'left'
	| 'right'
	| 'bottom'
	| 'topRight'
	| 'bottomRight'
	| 'bottomLeft'
	| [string | number, string | number] | [string | number];

export type EffectType = 'click-static'
	| 'click-down'
	| 'click-left'
	| 'click-top'
	| 'click-right'
	| 'click-focus'
	| 'click-static'
	| 'hover-down'
	| 'hover-left'
	| 'hover-right'
	| 'hover-top'
	| 'hover-static';

export type InputType = 'area'
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
	| 'week'
