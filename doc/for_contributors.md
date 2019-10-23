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
import React, { HTMLAttributes, FC } from 'react';
import { SilentCommonAttr, ClassValue } from '../../lib/interfaces';
import {
	accordType,
	splitJsxProps,
	handleSize,
} from '../../lib/helper';



const ParallaxAttrs = [
	'size',
	'className',
	'style'
];

interface ParallaxTempProps extends SilentCommonAttr, HTMLAttributes<any> {
	className?: any;
}

interface ParallaxProps extends ParallaxTempProps {
	className?: ClassValue;
}

const presetClassName = function (): string {

	return '';
};

const presetProps = function (props: ParallaxProps) {
	const sProps = splitJsxProps<ParallaxProps>(props, ParallaxAttrs);
	sProps.customProps.size = handleSize(sProps.customProps.size!);
	return sProps;
};

/**=================================================================================================
 *			LASTMODIFY --- 2019-08-27T15:00:04.462Z
 *			DESCRIPTION --- Parallax
 *			PROPS
 *				--- size [SizeType]
 *   =================================================================================================*/

const Parallax: FC<ParallaxProps> = function (props) {
	const { nativeProps, customProps } = presetProps(props);
	const className = presetClassName();
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

Parallax.defaultProps = {};

export default React.memo(Parallax);

```
