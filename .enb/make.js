const techs = {
	// essential
	fileProvider: require('enb/techs/file-provider'),
	fileMerge: require('enb/techs/file-merge'),
	// fileCopy: require('enb/techs/file-copy'),

	// optimization
	borschik: require('enb-borschik/techs/borschik'),

	// css
	postcss: require('enb-postcss/techs/enb-postcss'),
	postcssPlugins: [
		require('postcss-import')(),
		require('postcss-each'),
		require('postcss-for'),
		require('postcss-simple-vars')(),
		require('postcss-color-function')(),
		require('postcss-calc')(),
		require('postcss-nested'),
		require('postcss-url')({ url: 'rebase' }),
		require('autoprefixer')(),
		require('postcss-reporter')()
	],

	// js
	browserJs: require('enb-js/techs/browser-js'),

	// bemtree
	// bemtree: require('enb-bemxjst/techs/bemtree'),

	// bemhtml
	bemhtml: require('enb-bemxjst/techs/bemhtml'),
	bemjsonToHtml: require('enb-bemxjst/techs/bemjson-to-html')
},

enbBemTechs = require('enb-bem-techs'),
levels = [
	{ path: 'node_modules/bem-core/common.blocks', check: false },
	{ path: 'node_modules/bem-core/desktop.blocks', check: false },
	{ path: 'node_modules/nozdrebombilnya-common', check: false },
	'common.blocks',
	'desktop.blocks',
	// { path: 'node_modules/bem-components-custom/common.blocks', check: false },
	// { path: 'node_modules/bem-components-custom/desktop.blocks', check: false },
	// { path: 'node_modules/bem-components-custom/design/common.blocks', check: false },
	// { path: 'node_modules/bem-components-custom/design/desktop.blocks', check: false },
	{ path: 'node_modules/whitepaper-bem', check: false },
];

module.exports = function(config) {
	config.nodes('*.bundles/*', function(nodeConfig) {
		nodeConfig.addTechs([
			// essential
			[enbBemTechs.levels, { levels: levels }],
			[techs.fileProvider, { target: '?.bemjson.js' }],
			[enbBemTechs.bemjsonToBemdecl],
			[enbBemTechs.deps],
			[enbBemTechs.files],

			// css
			[techs.postcss, {
				target: '?.css',
				oneOfSourceSuffixes: ['post.css', 'css'],
				plugins: techs.postcssPlugins
			}],

			// bemtree
			// [techs.bemtree, { sourceSuffixes: ['bemtree', 'bemtree.js'] }],

			// bemhtml
			[techs.bemhtml, {
				sourceSuffixes: ['bemhtml', 'bemhtml.js'],
				forceBaseTemplates: true,
				engineOptions : { elemJsInstances : true }
			}],

			// html
			[techs.bemjsonToHtml],

			// client bemhtml
			[enbBemTechs.depsByTechToBemdecl, {
				target: '?.bemhtml.bemdecl.js',
				sourceTech: 'js',
				destTech: 'bemhtml'
			}],
			[enbBemTechs.deps, {
				target: '?.bemhtml.deps.js',
				bemdeclFile: '?.bemhtml.bemdecl.js'
			}],
			[enbBemTechs.files, {
				depsFile: '?.bemhtml.deps.js',
				filesTarget: '?.bemhtml.files',
				dirsTarget: '?.bemhtml.dirs'
			}],
			[techs.bemhtml, {
				target: '?.browser.bemhtml.js',
				filesTarget: '?.bemhtml.files',
				sourceSuffixes: ['bemhtml', 'bemhtml.js'],
				engineOptions : { elemJsInstances : true }
			}],

			// js
			[techs.browserJs, { includeYM: true }],
			[techs.fileMerge, {
				target: '?.js',
				sources: ['?.browser.js', '?.browser.bemhtml.js']
			}],

			// borschik
			[techs.borschik, { source: '?.js', target: '?.min.js', minify: true }],
			[techs.borschik, { source: '?.css', target: '?.min.css', minify: true }]


			// // Copy static
			// [techs.fileCopy, { source: '?.min.css', target: '../../?.min.css' }],
			// [techs.fileCopy, { source: '?.min.js', target: '../../?.min.js' }],
			// [techs.fileCopy, { source: '?.html', target: '../../?.html' }]
		]);

		nodeConfig.addTargets([/* '?.bemtree.js', */ '?.html', '?.min.css', '?.min.js']);

		// nodeConfig.addTargets([/* '?.bemtree.js', */ '../../?.html', '../../?.min.css', '../../?.min.js']);
	});
};
