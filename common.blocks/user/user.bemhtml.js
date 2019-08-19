block('user')({ addMix: [{ block: 'pt-icon-plus', mods: { 'vertical-align': 'center' } }] });
block('user').content()(function() {
	let _ctx = this.ctx;

	return [
	{
		block: 'avatar',
		mods: { status: 'away' },
		mix: { block: 'pt-icon-plus', elem: 'icon', elemMods: { 'indent-r': 'm' } },
		content: [
			{
				elem: 'photo',
				elemMods: { size: 's' }
			}
		]
	},
	{
		block: 'pt-icon-plus',
		elem: 'block',
		content: [
			{
				block: 'text',
				mods: { size: 'm', weight: 'semibold', view: 'primary', 'line-height': 'xs' },
				mix: { block: 'decorator', mods: { 'indent-b': '2xs' } },
				content: _ctx.name
			},
			{
				block: 'text',
				mods: { size: 's', view: 'secondary', 'line-height': 'xs' },
				content: _ctx.status == 'away' ? 'В другом офисе: Почтамтская' : ''
			}
		]
	}]
});
