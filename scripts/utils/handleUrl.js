const os = require('os');
const { host, port } = require('../config.json');

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

const finalHost = host || handleHost();
const DEFAULT_PORT = parseInt(process.env.PORT) || port;
module.exports = { finalHost, DEFAULT_PORT };
