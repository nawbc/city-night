const request = require('request');
const cheerio = require('cheerio');
const path = require('path');
const { green } = require('chalk');
const { writeFile } = require('fs');


/**
 * color from https://webgradients.com/
 * 😜😜 😜😜
 * @author 下水道的包工头
 */

// get gradients from if you want to get details, see https://webgradients.com/ for details

const writeToGradientsColorScss = (url) => new Promise((resolve, reject) => {
	request(url, (error, reponse, body) => {
		if (error) reject(error);
		var $ = cheerio.load(body.toString());
		var gradientsColorPath = path.resolve(__dirname, './gradientColor.scss');
		var nameArrayPath = path.resolve(__dirname, '../../utils/gradientsArray.tsx');
		var gradients = '', nameArray = '';
		var styleNames = [];
		$('.gradient__background').each((index, ele) => {
			var name = $('.gradient__title ').eq(index).text().replace(/\s|\d+|'/gi, '');
			var color = ele.attribs['data-css-code'];
			styleNames.push(name);
			var template = `
            //${name}
            .m-gradients-${name}{
                ${color.replace(/linear|radial|to\s/gi, (val) => 'to ' === val ? '' : '-webkit-' + val)}
                ${color.replace(/linear|radial|to\s/gi, (val) => 'to ' === val ? '' : '-moz-' + val)}
                ${color.replace(/linear|radial|to\s/gi, (val) => 'to ' === val ? '' : '-ms-' + val)}
                ${color.replace(/linear|radial|to\s/gi, (val) => 'to ' === val ? '' : '-o-' + val)}
                ${color}
            }\n`;
			gradients += template;
			nameArray += '"' + name + '",';
		})

		writeFile(gradientsColorPath, gradients, { encoding: 'utf8' }, (error) => {
			if (error) reject(error);
			process.stdout.write(green('gradientColor.scss create successfully\n'));
			var names = 'export const gradientsArray = [' + nameArray + ']';
			writeFile(nameArrayPath, names, (err) => {
				if (err) reject(err)
				process.stdout.write(green('gradientsArray .tsx create successfully\n'));
				resolve(styleNames);
			})
		})
	})
})

const generateGradientCardHtml = (styleNames) => new Promise((resolve, reject) => {
	var div = '';
	var htmlPath = path.resolve(__dirname, '../../../site/color/gradients.htm');
	styleNames.forEach((ele, index) => {
		div +=
			`<div class="box" style="width: 200px;height: 220px;margin: 30px 40px;">
            <div class="m-site-gradient-${ele}" style="width: 100%;height: 90%;"></div>
            <div style="width: 100%;height: 10%;text-align: center;">${ele}</div>
        </div>`
	})
	var html = `<!DOCTYPE html>
                        <html lang="en">
                            <head>
                                <meta charset="UTF-8">
                                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                                <title>Gradients Card</title>
																<link rel="stylesheet" href="./site.css">
																<link rel="shortcut icon" href="../assets/logo/muguet256.gif" type="image/gif">
																<link rel="icon" href="../assets/logo/muguet256.gif" type="image/gif" />
                            </head>
                            <style>
														*{padding: 0px;margin: 0px;}
														.box div{border-radius: 5px}
                            .box{transition: all 400ms ease-in;}
														.box:hover{ transform: translate(-5px, -5px)}
														.headline{font-size: 24px;font-weight: bolder;line-height: 60px;margin-left: 20px;color: #fff;}
														.headline span{font-size: 13px;}
														.footer{text-align: center;width: 100vw;height: 350px;font-size: 24px;}
                        </style>
                        <body style="display: flex;justify-content: space-around;flex-wrap: wrap;overflow-x: hidden">
														<div class="m-site-grandient-MalibuBeach" style="width: 100vw;height: 60px;">
														<div class="headline">Muguet Gradients Card&nbsp;<span>单击复制</span></div></div>
														${div}
														<div class='footer' style="margin-top: 20px">
																<div  style="margin-top: 200px;">Use for Muguet</div>
																<div style="font-size: 13px;margin: 15px 0;">遵循MIT 协议</div>
																<div style="font-size: 13px;">使用源来自<a href="https://webgradients.com" style="text-decoration: none; color: rgb(105, 105, 105)">https://webgradients.com</a></div>
														</div>
                            <input id="a" type="text" style="width:100px;height:20px;transform: translate(10000px); position:absolute">
                        </body>
                        <script>
                            document.onclick = (e)=>{
                                var a = document.getElementById('a');
                                a.value = e.target.nextElementSibling.innerText;
                                a.select();
                                document.execCommand('copy');
                            }
                        </script>
                    </html>`
	writeFile(htmlPath, html, { encoding: 'utf8' }, (error) => {
		if (error) reject(error);
	})
})

async function gradients() {
	const WEB_URL = 'https://webgradients.com/';
	const data = await writeToGradientsColorScss(WEB_URL).then((name) => name).catch((err) => {
		console.error(err);
	});

	const html = await generateGradientCardHtml(data).catch((err) => {
		console.error(err);
	});
}

gradients();
