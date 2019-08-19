module.exports = {
	block: 'page',
	title: 'mpss',
	lang: 'ru',
	head: [
		{ elem: 'meta', attrs: { name: 'description', content: '' } },
		{ elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
		{ elem: 'css', url: 'index.min.css' },
		{ elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' },
	],
	scripts: [{ elem: 'js', url: 'index.min.js' }],
	mix: {
		block: 'theme',
		mods: { color: 'gpn-default', control: 'gpn-default', space: 'default', breakpoint: 'default', space: 'default', size: 'gpn-default', gap: 'medium', font: 'gpn-default' }
	},
	content: [
		{
			block: 'header'
		},
	]
};
