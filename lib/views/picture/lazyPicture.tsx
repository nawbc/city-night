import * as React from 'react';

function LazyPicture({ src, className, nativeProps, customStyle }): React.ReactElement {
	return (
		<img
			src={src}
			{...nativeProps}
			style={customStyle}
			className={className}
		/>
	);
}

export default LazyPicture;
