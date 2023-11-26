const { exec } = require('child_process');

const postcss=require('./postcss.config.js');
const path = require('path');

const build = (bash) => {
  bash.hooks.afterDone.tap('build', async () => {
   await exec('node .acode/build.js', (err, ok) => {
     if (!err) return console.log(ok);
   });
 });
};




module.exports = (env, options) => {
	const { mode = 'development' } = options;
	const rules = [
		{
			test: /\.m?js$/,
			use: [
				'html-tag-js/jsx/tag-loader.js',
				{
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
			],
		},
	];

	const main = {
		mode,
		entry: {
			main: './src/main.js',
		},
		output: {
			path: path.resolve(__dirname, 'dist'),
			filename: '[name].js',
			chunkFilename: '[name].js',
		},
		module: {
			rules,
		},
		plugins: [
			{
				apply: compiler => {
					compiler.hooks.afterDone.tap('pack-zip', () => {
						// run pack-zip.js
						exec('node .acode/pack-zip.js', (err, stdout, stderr) => {
							if (err) {
								console.error(err);
								return;
							}
							console.log(stdout);
						});
					});
				},
			},
		],
	};

	return [main];
};
