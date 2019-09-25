Structure

```
├── app
│   ├── assets
│   ├── pages
│   └── public
├── assets // default icons
├── auto
│   ├── gradientsMaker.js  			//get gradients from  https://webgradients.com/ and generate react pages
│   ├── langTypesMaker.js 			// generate lang types
│   └── svgModuleMaker.js 			// svg  -> React Component
├── for_contributors.md
├── include.json
├── jest.config.js
├── jest.e2e.js
├── jest-puppeteer.config.js
├── lib
│   ├── assets
│   │   └── svg
│   ├── helper
│   ├── index.tsx
│   ├── interfaces
│   ├── layout   // layout components
│   ├── silent   // root component
│   ├── stylesheet
│   ├── tips     //	tip components
│   ├── utils
│   └── views   // normal Component
├── LICENSE
├── package.json
├── package-lock.json
├── plugins     // other plugins for silent
│   └── height-zero2auto
├── README.md
├── README-zh.md
├── silent-concept.rar
├── tests
├── todo-list.md
├── tsconfig.json
```

program Template
```typescript
/**=================================================================================================
 *			LICENSE --- Apache-2.0
 *			LASTMODIFY --- 2019-09-09T13:51:34.709Z
 *			REPOSITORY --- https://github.com/sewerganger/silent-concept
 *=================================================================================================*/
import React, { ReactElement, useState, useLayoutEffect, useRef, HTMLAttributes, FC } from 'react';
import { SilentCommonAttr, SizeType, ClassValue } from '../../interfaces';
import classNames from 'classnames';
import {
	accordType,
	splitJsxProps,
	handleSize,
	useDefaultProps
} from '../../helper';


const prefix = 's-demo';

const DemoAttrs = [

];

interface DemoTempProps extends SilentCommonAttr, HTMLAttributes<any> {

}

interface DemoProps extends LoadingDemoTempProps {
	className?: ClassValue;
}

const presetClassName = function (cProps: LoadingDemoProps): string {

};

const presetProps = function (props: LoadingDemoProps) {

};

/**=================================================================================================
 *			LASTMODIFY --- 2019-08-27T15:00:04.462Z
 *			DESCRIPTION --- Demo
 *			PROPS
 *				--- size [SizeType]
 *   =================================================================================================*/

const Demo: FC<LoadingDemoProps> = function (props) {
	const { nativeProps, customProps } = presetProps(props);
	const className = presetClassName(customProps);
	const { size, style, children } = customProps;
	const containerStyle = {
		...accordType(size, 'Object', {}),
		...style
	};

	return (
		<span
			{...nativeProps}
			style={containerStyle}
			className={className}
		>
			{children}
		</span>
	);
};

Demo.defaultProps = {};

export default React.memo(Demo);

```
