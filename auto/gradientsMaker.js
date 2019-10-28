const request = require('request');
const cheerio = require('cheerio');
const path = require('path');
const { green } = require('chalk');
const { writeFile } = require('fs-extra');
const scssPath = path.resolve('./lib/stylesheet/colors/gradientColors.scss');
const gradientArrPath = path.resolve('./lib/interfaces/gradientArr.tsx');
const gradientTypesPath = path.resolve('./lib/interfaces/GradientTypes.tsx');
const pkg = require('../package.json');

/**=================================================================================================
 *			AUTHOR --- Han Wang
 *			LICENSE --- Apache-2.0
 *			LASTMODIFY --- 2019-08-23T07:25:01.454Z
 *			DESCRIPTION --- get the gradients from webgradients
 * 			REPOSITORY --- https://github.com/sewerganger/silent-concept
 *			SEE --- https://webgradients.com/
 * =================================================================================================*/

const writeGradientArr = data => writeFile(gradientArrPath, data);

const writeGradientTypes = data => writeFile(gradientTypesPath, data);

const writeGradientToScss = gradients => writeFile(scssPath, gradients);

/* 从gradients抓取颜色 */
const getGradientColors = url =>
	new Promise((resolve, reject) => {
		request(url, (error, _response, body) => {
			if (error) reject(error);
			const $ = cheerio.load(body.toString());
			let gradientScss = '';
			let gradientArrContent = '';
			let gradientTypesContent = '';
			const styleNames = [];
			const collections = $('.gradient__background');
			collections.each((index, ele) => {
				const name = $('.gradient__title ')
					.eq(index)
					.text()
					.replace(/\s|\d+|\'/gi, '');
				const color = ele.attribs['data-css-code'];
				styleNames.push(name);
				const template = `
			      //${name}
			      .m-gradient-${name}{
			          ${color.replace(/linear|radial|to\s/gi, val => ('to ' === val ? '' : '-webkit-' + val))}
			          ${color.replace(/linear|radial|to\s/gi, val => ('to ' === val ? '' : '-moz-' + val))}
			          ${color.replace(/linear|radial|to\s/gi, val => ('to ' === val ? '' : '-o-' + val))}
			          ${color}
			      }\n`;
				gradientScss += template;
				gradientArrContent += "'" + name + (collections.length - 1 === index ? "'" : "',");
				gradientTypesContent +=
					index === 0
						? '\n'
						: '\t| ' + "'" + (name + "'" + (index === collections.length - 1 ? ';' : '')) + '\n';
			});
			const typesArr = 'export const gradientsArray = [' + gradientArrContent + '];';
			const gradientTypes = 'export type GradientTypes =' + gradientTypesContent;
			resolve({ gradientScss, typesArr, styleNames, gradientTypes });
		});
	});

// const generateGradientsTsx = styleNames => {
// 	var tsx = '';
// 	var htmlPath = path.resolve(__dirname, '../../../site/color/gradients.htm');
// 	styleNames.forEach((ele) => {
// 		div += `<div style="width: 200px;height: 220px;margin: 30px 40px;">
// 									<div class=".m-gradient-${ele}" style="width: 100%;height: 90%;"></div>
// 									<div style="width: 100%;height: 10%;text-align: center;">${ele}</div>
// 							</div>`;
// 	});
{
	/* <div style={{
	display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', overflowX: 'hidden'
}}>
	<div
		className='gradients-block'
		style={{ width: '200px', height: '220px', margin: '30px 40px' }}
		onClick={() => {

		}}
	>
		<div className='m-gradients-SpringWarmth' style={{ width: '100%', height: '80%' }}></div>
		<div style={{ width: '100%', height: '20%', textAlign: 'center', backgroundColor: '#999', lineHeight: '44px' }}>SpringWarmth</div>
	</div>
</div> */
}

// 	writeFile(htmlPath, html, { encoding: 'utf8' }, error => {
// 		if (error) reject(error);
// 	});
// };

async function gradients() {
	const data = await getGradientColors(pkg.config.webgradients)
		.then(obj => {
			console.log('downloading gradients colors');
			return obj;
		})
		.catch(err => {
			console.error(err);
		});
	await writeGradientToScss(data.gradientScss)
		.then(() => {
			console.log(green('Success: gradientColors.scss write done'));
		})
		.catch(err => {
			console.error(err);
		});
	await writeGradientArr(data.typesArr)
		.then(() => {
			console.log(green('Success: gradientArr.tsx write done'));
		})
		.catch(err => {
			console.error(err);
		});
	await writeGradientTypes(data.gradientTypes)
		.then(() => {
			console.log(green('Success: GradientTypes.tsx write done'));
		})
		.catch(err => {
			console.error(err);
		});
	// await generateGradientsTsx(data.styleNames).catch(err => {
	// 	console.error(err);
	// });
}

gradients();
