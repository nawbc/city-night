import React from 'react';
import classNames from 'classnames';
import { polyfill } from 'react-lifecycles-compat';
import { typeReplace } from '../../utils/muguetDash';
import { handleSize, JSXProps } from '../../utils/handleJSXProps';
import CitationTypeOne from './citationTypeOne';
import CitationTypeTwo from './citationTypeTwo';
import { CitationTypeTwoProps } from './citationTypeTwo';
import { JSXPropsInterface } from '../../interfaces/common.interface';
import { SizeType } from '../../interfaces/customTypes';

const customCitationAttr = [
	'src',
	'type',
	'size',
	'count',
	'icon',
	'style',
]

export interface CitationProps extends CitationTypeTwoProps {
	type?: string;
	count?: number;
	src: Promise<any>;
}

class Citation extends React.Component<CitationProps, any> {

	static TO: typeof CitationTypeOne = CitationTypeOne;
	static TT: typeof CitationTypeTwo = CitationTypeTwo;

	private static readonly defaultProps = {
		size: 'normal',
		type: 'one',
		count: 1,
		effect: false
	}

	handleExtraProps = (): JSXPropsInterface<CitationProps> => {
		const citationProps = JSXProps<CitationProps>(this.props, customCitationAttr);
		const { customProps } = citationProps
		customProps.size = handleSize(customProps.size as SizeType);
		return citationProps;
	}

	render() {
		const { nativeProps, customProps } = this.handleExtraProps();

		let citationType;
		let renderCount = customProps.count! >= 0 ? customProps.count : 1;
		switch (customProps.type) {
			case 'one': citationType = (
				<React.Fragment>
					{
						Array(renderCount).fill('').map((ele, index) => (
							<CitationTypeOne
								key={index}
								{...nativeProps}
								{...customProps}
							/>
						))
					}
				</React.Fragment>
			); break;
			case 'two': citationType = (
				<React.Fragment>
					{
						Array(renderCount).fill('').map((ele, index) => (
							<CitationTypeTwo
								key={index}
								{...nativeProps}
								{...customProps}
							/>
						))
					}
				</React.Fragment>
			); break;
		}
		const LazyLoader = React.lazy(() => customProps.src as Promise<any>)
		return (
			<React.Suspense fallback={citationType}>
				<LazyLoader />
			</React.Suspense>
		)
	}
}
polyfill(Citation);
export default Citation;

