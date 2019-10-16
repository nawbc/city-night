const JestExcludeSrc = require('./.scripts/jest/jest-exclude-src');

module.exports = {
	collectCoverage: true,

	coverageDirectory: 'coverage',

	collectCoverageFrom: ['**/*.{js,jsx,ts,tsx}', '!**/node_modules/**', '!**/vendor/**'],

	moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node'],

	moduleNameMapper: {
		'\\.s?[ca]ss$': 'identity-obj-proxy',
		'\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': JestExcludeSrc
	},

	rootDir: '.',

	roots: ['<rootDir>'],

	setupFilesAfterEnv: ['<rootDir>/.scripts/jest/jest-global.js'],

	testEnvironment: 'jsdom',

	testMatch: ['**/__tests__/**/*.[jt]s?(x)'],

	transform: {
		'^.+\\.[jt]sx?$': 'babel-jest'
	}
};
