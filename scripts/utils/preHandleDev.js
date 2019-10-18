const os = require('os');
const { config } = require('../../package.json');
const platformChrome =
	process.platform === 'linux'
		? 'google-chrome '
		: process.platform === 'win32'
			? 'chrome'
			: process.platform === 'darwin' && 'google chrome';

const handleHost = () => {
	let HOST;
	const network = os.networkInterfaces();
	switch (os.platform()) {
		case 'win32':
			HOST = network['WLAN'] ? network['WLAN'][1]['address'] : '0.0.0.0';
			break;
		case 'linux':
			HOST = !!network['eth0']
				? network['eth0'][1]['address']
				: !!network['wlp3s0']
					? network['wlp3s0'][0]['address']
					: '0.0.0.0';
			break;
		default:
			HOST = '0.0.0.0';
			break;
	}
	return HOST;
};

const LAUNCH_HOST = config.host || handleHost();
const LAUNCH_PORT = parseInt(process.env.PORT) || config.port;
module.exports = { LAUNCH_HOST, LAUNCH_PORT, platformChrome };
