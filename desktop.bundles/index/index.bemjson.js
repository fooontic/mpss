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
		{
			block: 'tpl-layout',
			mods: { structure: 'mpss' },
			content: [
				{
					tag: 'section',
					elem: 'section',
					mix: { block: 'decorator', mods: { 'space-l': '2xl', 'space-r': 'xl' }},
					content: [
						{
							tag: 'h2',
							block: 'text',
							mods: { size: 's', view: 'primary', transform: 'uppercase', spacing: 'xs' },
							mix: { block: 'decorator', mods: { 'indent-t': 'l', 'indent-b': 'm' }},
							content: 'Центральные происшествия'
						},
						{
							tag: 'a',
							attrs: { href: '#' },
							block: 'central-event',
							mix: { block: 'pt-card' },
							content: [
								{
									elem: 'content',
									mix: { block: 'pt-card', elem: 'content', elemMods: { 'space-t': 'l', 'space-h': 'xl', 'space-b': '2xl' }, },
									content: {
										block: 'text',
										mods: { size: 'xl', view: 'primary', 'line-height': 'm' },
										mix: { block: 'central-event', elem: 'title' },
										content: 'Общеприменимые сценарии'
									},
								},
								{
									elem: 'footer',
									mix: { block: 'pt-card', elem: 'footer', elemMods: { 'space-h': 'l', 'space-v': 's', 'distribute': 'right' }, },
									content: {
										block: 'text',
										mods: { size: 'xl', view: 'ghost' },
										content: '9'
									},
								},
							]
						},
						{
							tag: 'a',
							attrs: { href: '#' },
							block: 'central-event',
							mods: { state: 'active' },
							mix: { block: 'pt-card' },
							content: [
								{
									elem: 'content',
									mix: { block: 'pt-card', elem: 'content', elemMods: { 'space-t': 'l', 'space-h': 'xl', 'space-b': '2xl' }, },
									content: {
										block: 'text',
										mods: { size: 'xl', view: 'primary', 'line-height': 'm' },
										mix: { block: 'central-event', elem: 'title' },
										content: 'Блоковые сценарии'
									},
								},
								{
									elem: 'footer',
									mix: { block: 'pt-card', elem: 'footer', elemMods: { 'space-h': 'l', 'space-v': 's', 'distribute': 'right' }, },
									content: {
										block: 'text',
										mods: { size: 'xl', view: 'ghost' },
										content: '9'
									},
								},
							]
						},
						{
							tag: 'a',
							attrs: { href: '#' },
							block: 'central-event',
							mix: { block: 'pt-card' },
							content: [
								{
									elem: 'content',
									mix: { block: 'pt-card', elem: 'content', elemMods: { 'space-t': 'l', 'space-h': 'xl', 'space-b': '2xl' }, },
									content: {
										block: 'text',
										mods: { size: 'xl', view: 'primary', 'line-height': 'm' },
										mix: { block: 'central-event', elem: 'title' },
										content: 'Техногенная безопасность'
									},
								},
								{
									elem: 'footer',
									mix: { block: 'pt-card', elem: 'footer', elemMods: { 'space-h': 'l', 'space-v': 's', 'distribute': 'right' }, },
									content: {
										block: 'text',
										mods: { size: 'xl', view: 'ghost' },
										content: '9'
									},
								},
							]
						},
					]
				},
				{
					elem: 'section',
					attrs: { style: 'background: var(--color-bg-stripe);' },
					content: ''
				},
				{
					elem: 'section',
					attrs: { style: 'background: var(--color-bg-ghost);' },
					content: ''
				},
			]
		},
	]
};
