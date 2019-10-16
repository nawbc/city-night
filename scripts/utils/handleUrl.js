const os = require('os');
const { config } = require('../../package.json');

const handleHost = () => {
	let HOST;
	switch (os.platform()) {
		case 'win32':
			HOST = os.networkInterfaces()['WLAN'] ? os.networkInterfaces()['WLAN'][1]['address'] : '0.0.0.0';
			break;
		case 'linux':
			HOST = os.networkInterfaces()['eth0'] ? os.networkInterfaces()['eth0'][1]['address'] : '0.0.0.0';
			break;
		default:
			HOST = '0.0.0.0';
			break;
	}
	return HOST;
};

const LAUNCH_HOST = config.host || handleHost();
const LAUNCH_PORT = parseInt(process.env.PORT) || config.port;
module.exports = { LAUNCH_HOST, LAUNCH_PORT };
