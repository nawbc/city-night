// const { toMatchImageSnapshot } = require('jest-image-snapshot');
// const { finalHost, DEFAULT_PORT } = require('../../.scripts/utils/handleUrl');
// const url = require('url');

// expect.extend({ toMatchImageSnapshot });

// const theUrl = url.format({
// 	hostname: finalHost,
// 	port: DEFAULT_PORT,
// 	protocol: 'http'
// });

// jest.setTimeout(30000);

// describe('muguet test', () => {
// 	beforeAll(async () => {
// 		await page.goto(theUrl);
// 	});

// 	it('测试', async () => {
// 		await page.click('#testButton');
// 		await page.click('#click1-button');
// 		const image = await page.screenshot();
// 		expect(image).toMatchImageSnapshot();
// 	});
// });
