([
	{
		mustDeps: [
			{ block: 'decorator', mods: { 'space-h': '2xl', 'space-v': 's', 'indent-r': '3xl', 'indent-l': ['xs', 'xl' ] } },
			{ block: 'search' },
			{ block: 'icon', mods: { size: 'm', view: 'primary', name: ['chat', 'mail', 'hamburger'] } },
			{ block: 'user' },
			{ block: 'pt-icon-plus', mods: { 'vertical-align': 'center' } },
			{ block: 'pt-icon-plus', elem: 'icon', mods: { 'indent-r': 'xs' } },
			{ block: 'text', mods: { size: ['xs', 'l'], view: ['primary', 'link', 'ghost' ], weight: 'semibold', 'line-height': 's', transform: 'uppercase', display: 'inline-block' } },
		]
	}
]);
