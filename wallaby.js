
module.exports = () => {
	return {
		debug: true,
		testFramework: 'jasmine',
		files: [
			'src/**/*.ts',
			{pattern: 'src/**/package.json', instrument: false, load: false},
			'!src/**/*.spec.ts'
		],
		tests: [
			'src/**/*.spec.ts'
		],
		env: {
			type: 'node',
		},
		preprocessors: {
        	'**/*.json': file => file.content.replace('.ts', '.js')
		}
	};
};
