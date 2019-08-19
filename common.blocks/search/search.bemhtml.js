block('search').content()(function() {
	let _ctx = this.ctx;

	return [
	{
		tag: 'input',
		block: 'input',
		attrs: { placeholder: _ctx.placeholder },
		mods: { size: _ctx.size, view: 'default' },
		mix: { block: 'search', elem: 'input' }
	},
	{
		tag: 'button',
		block: 'button',
		mods: { size: _ctx.size, view: 'clear', form: 'brick-default' },
		mix: { block: 'search', elem: 'button' },
		content: [
		{
			block: 'icon',
			mods: { size: _ctx.size, name: 'search' }
		}]
	}]
});
