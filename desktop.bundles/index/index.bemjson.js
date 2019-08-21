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
			mix: { block: 'main-page', mods: { models: true }, },
			content: [


				{
					tag: 'section',
					elem: 'section',
					mix: { block: 'decorator', mods: { 'space-l': '2xl', 'space-r': 'xl' }},
					content: {
						elem: 'container',
						elemMods: { size: 'xs' },
						content: [
							{
								tag: 'h2',
								block: 'text',
								mods: { size: 's', view: 'secondary', transform: 'uppercase', spacing: 'xs' },
								mix: { block: 'decorator', mods: { 'indent-t': '2xl', 'indent-b': 'm' }},
								content: 'Центральные происшествия'
							},
							{
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
								block: 'central-event',
								// mods: { state: 'active' },
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
											content: '6'
										},
									},
								]
							},
							{
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
											content: '16'
										},
									},
								]
							},
						]
					}
				},


				{
					elem: 'section',
					mix: [
						{ block: 'decorator', mods: { 'space-h': 'xl' }},
						{ block: 'main-page', elem: 'cluster-events', elemMods: { state: 'closed' }, }
					],
					content: {
						elem: 'container',
						elemMods: { size: 'xs' },
						content: [
							{
								tag: 'h2',
								block: 'text',
								mods: { size: 's', view: 'secondary', transform: 'uppercase', spacing: 'xs' },
								mix: { block: 'decorator', mods: { 'indent-t': '2xl', 'indent-b': 'm', 'space-l': 's' }},
								content: 'Кластерные происшествия'
							},
							{
								block: 'pt-list',
								mods: { 'space-a': 's', 'vertical-align': 'baseline', distribute: 'between' },
								content: [
									{
										elem: 'item',
										mix: { block: 'cluster-event' },
										content: [
											{
												block: 'text',
												mods: { size: 'l', view: 'primary' },
												mix: { block: 'cluster-event', elem: 'title' },
												content: 'Пожарная безопасность'
											},
											{
												block: 'text',
												mods: { size: 'm', view: 'ghost' },
												content: '2'
											},
										]
									},
									{
										elem: 'item',
										mix: { block: 'cluster-event' },
										content: [
											{
												block: 'text',
												mods: { size: 'l', view: 'primary' },
												mix: { block: 'cluster-event', elem: 'title' },
												content: 'Пожарная безопасность'
											},
											{
												block: 'text',
												mods: { size: 'm', view: 'ghost' },
												content: '2'
											},
										]
									},
									{
										elem: 'item',
										mix: { block: 'cluster-event' },
										content: [
											{
												block: 'text',
												mods: { size: 'l', view: 'primary' },
												mix: { block: 'cluster-event', elem: 'title' },
												content: 'Сложный технологический объект'
											},
											{
												block: 'text',
												mods: { size: 'm', view: 'ghost' },
												content: '3'
											},
										]
									},
									{
										elem: 'item',
										mix: { block: 'cluster-event' },
										content: [
											{
												block: 'text',
												mods: { size: 'l', view: 'primary' },
												mix: { block: 'cluster-event', elem: 'title' },
												content: 'Сероводород'
											},
											{
												block: 'text',
												mods: { size: 'm', view: 'ghost' },
												content: '2'
											},
										]
									},
									{
										elem: 'item',
										mix: { block: 'cluster-event' },
										content: [
											{
												block: 'text',
												mods: { size: 'l', view: 'primary' },
												mix: { block: 'cluster-event', elem: 'title' },
												content: 'Разливы нефтепродуктов'
											},
											{
												block: 'text',
												mods: { size: 'm', view: 'ghost' },
												content: '2'
											},
										]
									},
									{
										elem: 'item',
										mix: { block: 'cluster-event' },
										content: [
											{
												block: 'text',
												mods: { size: 'l', view: 'primary' },
												mix: { block: 'cluster-event', elem: 'title' },
												content: 'Авария на платформе'
											},
											{
												block: 'text',
												mods: { size: 'm', view: 'ghost' },
												content: '3'
											},
										]
									},
								]
							},
						]
					}
				},


				{
					elem: 'section',
					mix: [
						{ block: 'decorator', mods: { 'space-l': 'xl', 'space-r': '2xl' }},
						{ block: 'main-page', elem: 'scenario-events', elemMods: { state: 'closed' }, }
					],
					content: {
						elem: 'container',
						elemMods: { size: 'xs', distribute: 'center' },
						content: [
							{
								block: 'pt-icon-plus',
								mods: { 'vertical-align': 'center', distribute: 'between' },
								mix: { block: 'decorator', mods: { 'indent-t': 'xl', 'indent-b': 's' }},
								content: [
									{
										tag: 'h2',
										block: 'text',
										mods: { size: 's', view: 'secondary', transform: 'uppercase', spacing: 'xs' },
										mix: { block: 'decorator', mods: { 'indent-v': 'none' }},
										content: 'Сценарные происшествия'
									},
									{
										tag: 'button',
										block: 'button',
										mods: { size: 's', view: 'primary' },
										content: '+ Новая модель'
									}
								]
							},
							{
								block: 'scenario-empty',
								content: [
									{
										block: 'text',
										mods: { size: 'm', view: 'secondary', align: 'center' },
										mix: { block: 'scenario-empty', elem: 'text' },
										content: 'Выберите кластерное происшествия для просмотра списка моделей.'
									},
									{
										block: 'loader',
										mods: { size: 'm' },
										mix: { block: 'scenario-empty', elem: 'loader' },
										content: { elem: 'dot' },
									},
								]
							},
							{
								block: 'scenario-event',
								mix: { block: 'pt-card' },
								content: [
									{
										elem: 'content',
										mix: { block: 'pt-card', elem: 'content', elemMods: { 'space-t': 'l', 'space-h': 'xl', 'space-b': '5xl' }, },
										content: [
											{
												block: 'text',
												mods: { size: 'xs', view: 'secondary' },
												mix: { block: 'decorator', mods: { 'indent-b': '2xs' }},
												content: 'Последнее изменение: 02.09.2019'
											},
											{
												block: 'text',
												mods: { size: 'xl', view: 'primary', 'line-height': 'm' },
												mix: { block: 'scenario-event', elem: 'title' },
												content: 'Пожар/взрыв: разгерметизация насосно-компрессорного оборудования'
											},
										]
									},
									{
										elem: 'footer',
										mix: { block: 'pt-card', elem: 'footer', elemMods: { distribute: 'between', 'space-v': 'm', 'space-h': 'xl' }, },
										content: [
											{
												block: 'cards-tags',
												content: {
													elem: 'tag',
													elemMods: { color: 'normal' },
													content: '44 проекта'
												},
											},
											{ block: 'icon', mods: { name: 'forward', size: 'm', view: 'link' }, mix: { block: 'scenario-event', elem: 'arrow' },},
										]
									},
								]
							},
							{
								block: 'scenario-event',
								mix: { block: 'pt-card' },
								content: [
									{
										elem: 'content',
										mix: { block: 'pt-card', elem: 'content', elemMods: { 'space-t': 'l', 'space-h': 'xl', 'space-b': '5xl' }, },
										content: [
											{
												block: 'text',
												mods: { size: 'xs', view: 'secondary' },
												mix: { block: 'decorator', mods: { 'indent-b': '2xs' }},
												content: 'Последнее изменение: 02.09.2019'
											},
											{
												block: 'text',
												mods: { size: 'xl', view: 'primary', 'line-height': 'm' },
												mix: { block: 'scenario-event', elem: 'title' },
												content: 'Пожар/взрыв: разгерметизация трубопроводов, колонн и печей'
											},
										]
									},
									{
										elem: 'footer',
										mix: { block: 'pt-card', elem: 'footer', elemMods: { distribute: 'between', 'space-v': 'm', 'space-h': 'xl' }, },
										content: [
											{
												block: 'cards-tags',
												content: {
													elem: 'tag',
													elemMods: { color: 'normal' },
													content: 'Вся компания'
												},
											},
											{ block: 'icon', mods: { name: 'forward', size: 'm', view: 'link' }, mix: { block: 'scenario-event', elem: 'arrow' },},
										]
									},
								]
							},
							{
								block: 'scenario-event',
								mix: { block: 'pt-card' },
								content: [
									{
										elem: 'content',
										mix: { block: 'pt-card', elem: 'content', elemMods: { 'space-t': 'l', 'space-h': 'xl', 'space-b': '5xl' }, },
										content: [
											{
												block: 'text',
												mods: { size: 'xs', view: 'secondary' },
												mix: { block: 'decorator', mods: { 'indent-b': '2xs' }},
												content: 'Последнее изменение: 02.09.2019'
											},
											{
												block: 'text',
												mods: { size: 'xl', view: 'primary', 'line-height': 'm' },
												mix: { block: 'scenario-event', elem: 'title' },
												content: 'Пожар/взрыв: на резервуаре с взрывопожароопасными жидкостями'
											},
										]
									},
									{
										elem: 'footer',
										mix: { block: 'pt-card', elem: 'footer', elemMods: { distribute: 'between', 'space-v': 'm', 'space-h': 'xl' }, },
										content: [
											{
												block: 'cards-tags',
												content: {
													elem: 'tag',
													elemMods: { color: 'normal' },
													content: '72 проекта'
												},
											},
											{ block: 'icon', mods: { name: 'forward', size: 'm', view: 'link' }, mix: { block: 'scenario-event', elem: 'arrow' },},
										]
									},
								]
							},
						]
					}
				},


				{
					elem: 'section',
					mix: [
						{ block: 'decorator', mods: { 'space-h': 'xl' }},
						{ block: 'main-page', elem: 'empty-section', elemMods: { state: 'visible' }, }
					],
					content: {
						elem: 'container',
						elemMods: { size: 'xs', distribute: 'center' },
						attrs: { style: 'text-align: center' },
						content: [
							// {
							// 	tag: 'img',
							// 	block: 'image',
							// 	mix: { block: 'decorator', mods: { 'indent-h': 'auto', 'indent-b': '4xl' }},
							// 	attrs: { src: '../../assets/illustration.svg' },
							// },
							{
								block: 'image',
								mix: { block: 'decorator', mods: { 'indent-h': 'auto', 'indent-b': '4xl' }},
								content: {
									html: `<svg width="340" height="316" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><ellipse fill-opacity=".5" fill="#EBEFF2" cx="172.65" cy="157.919" rx="158.381" ry="157.919"/><path d="M267.983 172.799c8.095 13.58 17.524 26.73 23.186 41.579-.228-1.75-.47-3.499-.741-5.244-1.437-9.255-3.222-18.443-5.099-27.619a823.221 823.221 0 0 0-3.002-13.982c-.558-2.5-1.108-5.001-1.677-7.5-.138-.604-.256-1.661-.429-2.732 5.503 18.057 10.809 36.127 14.69 54.618.51 2.427.943 4.849 1.298 7.267.122-.551.241-1.103.372-1.653 1.57-6.595 3.926-13.138 6.731-19.304 1.341-2.95 2.882-5.834 4.695-8.521 1.131-1.676 3.798-3.667 4.83-5.383-5.642 10.348-7.68 23.296-10.937 34.546-.795 2.745-1.596 5.486-2.38 8.232 4.913-9.852 12.535-17.947 23.133-21.455-12.828 8.476-20.522 23.32-25.707 38.5-.017.18-.038.36-.055.54 1.526-2.895 3.447-5.514 6.052-7.348 5.575-3.927 11.76-2.783 17.167.585-4.244-2.698-11.914-.241-15.486 2.501-2.556 1.963-4.741 4.596-6.638 7.166-.455.616-1.075 1.334-1.73 2.1a94.717 94.717 0 0 1-4.536 17.762c.35-1.686.097-4.384.194-5.64l.03-.409a380.425 380.425 0 0 0-.933 3.81c.595-2.388.92-4.88 1.172-7.399.065-1.082.128-2.164.196-3.247a105.224 105.224 0 0 0-.25-6.18c-.507-2.008-1.075-3.901-1.543-5.476-1.69-5.681-4.169-11.124-7.22-16.202-2.782-4.634-6.113-8.831-9.959-12.627-2.073-2.046-4.243-3.994-6.382-5.97-.773-.714-2.156-2.47-3.352-3.385 8.709 4.8 17.672 9.995 24.025 17.73a192.8 192.8 0 0 0-2.41-8.442c-4.34-14.019-9.822-28.548-17.305-41.218z" fill="#DDE3E9"/><path d="M276.684 249.673c0 15.569 1.233 28.19 17.78 28.19 16.548 0 17.78-12.621 17.78-28.19" fill="#C5CFD6"/><g transform="translate(0 69.509)"><path stroke="#B0B9C0" stroke-width=".867" stroke-linecap="square" d="M27.518 10.975h98.046l24.052 46.746"/><path stroke="#B0B9C0" stroke-width=".867" stroke-linecap="square" d="M27.518 44.307h98.046l24.052 13.414M313.297 26.625H204.47L189.772 57.72M313.297 58.127H204.47l-14.697-.406M313.297 89.426H204.47l-14.697-31.705M27.518 74.793h98.046l24.052-17.072"/><path stroke="#B0B9C0" stroke-width=".867" stroke-linecap="square" d="M27.518 104.466h98.046l24.052-46.745"/><ellipse fill="#AFB9C5" cx="169.592" cy="58.534" rx="20.791" ry="20.731"/><ellipse fill="#DDE3E9" cx="169.592" cy="58.33" rx="19.365" ry="19.308"/><rect fill="#C5CFD6" x="94.988" y="34.145" width="30.576" height="18.292" rx="1.735"/><rect fill="#C5CFD6" x="94.988" y="1.219" width="30.576" height="18.292" rx="1.735"/><rect fill="#C5CFD6" x="53.813" y="34.145" width="30.576" height="18.292" rx="1.735"/><path d="M1.735 31.706H28.84c.958 0 1.735.776 1.735 1.734v18.888c0 .958-.777 1.734-1.735 1.734H1.735A1.735 1.735 0 0 1 0 52.328V33.44c0-.958.777-1.734 1.735-1.734zM1.735 0H28.84c.958 0 1.735.777 1.735 1.735v18.887c0 .958-.777 1.735-1.735 1.735H1.735A1.735 1.735 0 0 1 0 20.622V1.735C0 .777.777 0 1.735 0zM311.16 15.446h27.105c.958 0 1.735.777 1.735 1.735v18.887c0 .958-.777 1.735-1.735 1.735H311.16a1.735 1.735 0 0 1-1.735-1.735V17.181c0-.958.777-1.735 1.735-1.735z" fill="#DDE3E9"/><rect fill="#C5CFD6" x="94.988" y="65.037" width="30.576" height="18.292" rx="1.735"/><rect fill="#C5CFD6" x="216.475" y="48.778" width="30.576" height="18.292" rx="1.735"/><rect fill="#C5CFD6" x="53.813" y="65.037" width="30.576" height="18.292" rx="1.735"/><path d="M1.735 63.005H28.84c.958 0 1.735.777 1.735 1.735v18.887c0 .958-.777 1.735-1.735 1.735H1.735A1.735 1.735 0 0 1 0 83.627V64.74c0-.958.777-1.735 1.735-1.735zM311.16 46.746h27.105c.958 0 1.735.776 1.735 1.734v18.888c0 .958-.777 1.734-1.735 1.734H311.16a1.735 1.735 0 0 1-1.735-1.734V48.48c0-.958.777-1.734 1.735-1.734z" fill="#DDE3E9"/><rect fill="#C5CFD6" x="94.988" y="95.93" width="30.576" height="18.292" rx="1.735"/><rect fill="#C5CFD6" x="216.475" y="79.671" width="30.576" height="18.292" rx="1.735"/><rect fill="#C5CFD6" x="257.242" y="48.778" width="30.576" height="18.292" rx="1.735"/><rect fill="#C5CFD6" x="216.475" y="17.479" width="30.576" height="18.292" rx="1.735"/><rect fill="#E9EDF0" x="153.693" y="9.349" width="30.576" height="18.292" rx="1.735"/><rect fill="#C5CFD6" x="257.242" y="79.671" width="30.576" height="18.292" rx="1.735"/><rect fill="#C5CFD6" x="53.813" y="95.93" width="30.576" height="18.292" rx="1.735"/><path d="M1.735 93.898H28.84c.958 0 1.735.776 1.735 1.734v18.888c0 .958-.777 1.734-1.735 1.734H1.735A1.735 1.735 0 0 1 0 114.52V95.632c0-.958.777-1.734 1.735-1.734zM311.16 77.638h27.105c.958 0 1.735.777 1.735 1.735V98.26c0 .958-.777 1.735-1.735 1.735H311.16a1.735 1.735 0 0 1-1.735-1.735V79.373c0-.958.777-1.735 1.735-1.735z" fill="#DDE3E9"/></g><g><path d="M87.131 161.183c-2.1-2.502-3.521-5.569-3.284-9.005.685-9.9 14.26-7.721 16.902-2.725 2.64 4.997 2.327 17.67-1.086 18.563-1.361.357-4.261-.516-7.212-2.321l1.852 13.302H83.366l3.765-17.814z" fill="#D4A181"/><path d="M92.998 153.272c.418 5.92 1.526 8.88 3.322 8.88 2.695 0 4.98-1.737 6.163-1.737.862 0 .67 1.095.098 1.907-.47.67-2.766 1.315-2.766 2.353 0 1.038 1.813.235 1.813.85 0 1.02.319 2.934-1.423 2.934-1.762 0-6.816-.652-7.682-3.307-.559-1.714-.92-5.265-1.084-10.653a2.722 2.722 0 0 0-.326-.02c-1.51 0-2.734 1.243-2.734 2.776 0 .778.315 1.482.824 1.986a42.013 42.013 0 0 1-2.155 2.83c-3.052-1.859-5.317-7.3-2.333-12.528.825-2.56 2.692-3.929 4.898-4.564 1.786-.758 3.64-.844 5.206-.39 3.069.268 5.81 1.218 6.586 1.782 0 2.949-.563 3.824-5.372 3.747-1.181.633-2.09 1.724-3.035 3.154z" fill="#191847"/><path fill="#C5CFD6" d="M67.043 235.882h35.162l4.608 55.767H54.47z"/><path fill-opacity=".1" fill="#000" d="M67.043 235.882h10.815l6.472 55.767H54.471z"/><path d="M142.76 226.226c3.764-2.248 10.08.64 10.075 3.856-.013 9.62-8.84 54.957-9.301 57.823-.461 2.866-5.398 3.623-5.686.01-.457-5.75-1.307-25.656-.457-34.869.351-3.803.73-7.425 1.101-10.656-4.632 8.319-11.795 20.23-21.49 35.733l-5.264-2.392c4.133-13.543 7.522-23.104 10.167-28.683 4.53-9.553 8.776-17.733 10.563-20.615 2.812-4.532 7.705-2.95 10.291-.207z" fill="#B28B67"/><path d="M112.114 268.21l18.065-42.56c4.328-6.924 16.462 1.408 14.986 5.424-3.35 9.117-20.391 38.631-21.39 41.347l-11.66-4.21z" fill="#004F8C"/><path d="M111.136 273.084c-1.169.946-1.926 1.72-2.272 2.318-.414.717-.897 1.834-1.448 3.35l22.812 13.17c1.706-1.584 1.964-2.822.775-3.713a148.25 148.25 0 0 1-2.942-2.254l-7.943-10.8a.434.434 0 0 0-.612-.088l-1.646 1.252c-1.496-.14-2.613-.424-3.352-.85-.612-.354-1.319-1.092-2.12-2.215a.867.867 0 0 0-1.252-.17zM136.744 285.66c-.54 1.405-.809 2.453-.809 3.144 0 .828.14 2.037.421 3.625h26.342c.684-2.225.289-3.426-1.186-3.603a148.25 148.25 0 0 1-3.675-.48l-12.279-5.383a.434.434 0 0 0-.574.23l-.8 1.907c-1.365.626-2.474.94-3.328.94-.706 0-1.687-.286-2.943-.858a.867.867 0 0 0-1.169.478z" fill="#E4E4E4"/><path d="M154.101 233.352c0 12.075-5.766 40.242-5.77 42.9l-12.406.01c1.816-25.133 2.46-37.835 1.932-38.106-.792-.406-32.472 3.146-41.973 3.146-13.701 0-19.37-8.592-19.83-24.51h27.142c5.526.588 34.351 6.37 45.056 8.358 4.583.85 5.85 4.875 5.85 8.202z" fill="#0070BF"/><g><path d="M106.543 187.79l15.866-8.652c2.639-3.12 5.239-5.542 7.8-7.268.782-.325 2.15-.522.87 1.74-1.28 2.26-2.523 4.696-1.871 5.393.652.696 2.278-.277 3.055.88.519.772-2.259 1.991-8.332 3.658l-11.529 10.509-5.859-6.26zm24.85 7.299l6.97-3.812c.977-3.705 2.146-5.569 3.506-5.592 1.045-.484-.775 4.197 1.206 3.791 1.98-.406 6.815-3.985 7.648-3.258 1.232 1.075.133 4.376-1.162 6.019-2.42 3.069-4.423 4.119-9.374 5.493-2.589.719-5.388 2.16-8.397 4.322l-.397-6.963z" fill="#D4A181"/><path d="M98.816 185.862c5.557-.059 12.968-1.227 20.876-6.224l3.105 6.894c-5.454 5.39-13.124 9.817-19.83 9.63-5.284-.148-7.985-6.512-4.151-10.3z" fill="#004070"/><path d="M106.3 196.919c5.899 1.464 15.793-.263 29.68-5.183 3.445 7.095 5.037 12.153 4.778 15.174-11.914 6.196-22.125 8.958-30.537 9.14.267 4.97-.34 9.699-2.382 14.02-4.196 8.882-28.765.656-37.026 2.275-5.174-16.727 4.829-23.524 4.837-34.227.009-11.72 9.462-29.761 10.853-29.761h12.683c.7 8.95 4.222 18.816 7.113 28.562z" fill="#004F8C"/></g><g><path d="M231.314 120.128c2.1-2.502 3.521-5.569 3.284-9.004-.685-9.9-14.26-7.722-16.902-2.726-2.64 4.997-2.327 17.67 1.086 18.564 1.361.356 4.261-.517 7.212-2.322l-1.852 13.302h10.937l-3.765-17.814z" fill="#D4A181"/><path d="M227.91 114.751a2.17 2.17 0 0 1 1.245-.401c1.258 0 2.278 1.139 2.278 2.313 0 1.221-.568 2.165-1.38 2.566.434.86.87 1.484 1.38 1.597 1.97-.202 4.558-5.171 4.558-9.252 0-4.466-3.501-8.326-10.026-8.326-5.865 0-8.089 2.454-8.203 4.626 2.513.7 6.904.97 13.216.925v.462l-5.47.463-.91 2.776c1.45-.11 2.486.9 3.313 2.251z" fill="#191847"/></g><g><path fill="#004070" d="M242.364 176.007l-16.57 57.828-12.089 42.622h-8.817l12.847-100.45z"/><path d="M246.795 176.007c.384 29.805 1.69 46.062 2.093 48.77.402 2.708 6.487 19.935 18.253 51.68h-9.134c-14.98-30.454-23.342-47.681-25.086-51.68-1.745-4-7.128-20.256-15.236-48.77h29.11z" fill="#004F8C"/><path d="M267.958 284.825l-.468-9.643h-9.807c-4.65 3.214-10.722 5.816-18.215 7.806v1.837h17.748l6.071-.918v.918h4.67zM214.943 284.825l-.467-9.643h-9.808c-4.65 3.214-10.722 5.816-18.214 7.806v1.837H204.2l6.071-.918v.918h4.67z" fill="#191847"/></g><g><path d="M197.235 133.116l-17.879-2.716c-3.549-2.031-6.823-3.42-9.822-4.169-.846-.038-2.2.244-.222 1.932 1.978 1.688 3.983 3.552 3.609 4.429-.374.877-2.236.517-2.57 1.87-.222.902 2.806 1.1 9.085.594l14.44 5.941 3.359-7.88zm5.749 29.903l-12.956 12.586c-3.768 1.602-6.856 3.371-9.264 5.306-.541.65-1.131 1.896 1.415 1.337 2.546-.558 5.25-1.032 5.728-.208.478.824-.933 2.088-.05 3.167.59.719 2.574-1.57 5.953-6.868l13.47-7.913-4.296-7.407z" fill="#D4A181"/><path d="M221.416 131.44c-5.812 15.7-15.61 28.488-30.459 42.437l7.226 6.13c17.449-9.397 26.585-14.87 29.417-29.332.71-3.63-.003-14.78-.101-20.687l-6.083 1.451z" fill="#191847"/><path d="M250.233 176.982l-34.856 4.899c4.527-25.083 6.247-42.103 5.163-51.061-.055-.457.677-1.378 1.065-1.325 2.842.384 5.727-.315 8.655-2.096 10.123 12.07 15.27 27.957 19.973 49.583z" fill="#F2F2F2"/><path d="M227.289 127.838c-9.98 1.486-25.935 5.58-45.469 2.233l-.555 9.44c15.4 7.062 30.692 12.06 43.089 9.302-2.177 24.013.749 43.009 12.767 41.32l18.585-2.612c.176-20.164-11.43-46.456-20.562-59.257a59172064679308310 59172064679308310 0 0 1-7.855-.426z" fill="#2F3676"/></g></g></g></svg>`
								}
							},
							{
								block: 'text',
								mods: { size: 'l', view: 'primary', 'line-height': 'm', align: 'center' },
								mix: { block: 'decorator', mods: { 'indent-h': 'auto', 'indent-b': 'xl' }},
								attrs: { style: 'max-width: 320px' },
								content: 'Выберите модель, которую хотите просмотреть или создайте новую.'
							},
							{
								tag: 'button',
								block: 'button',
								mods: { size: 'xl', view: 'primary' },
								mix: { block: 'decorator', mods: { 'indent-h': 'auto', 'indent-b': '3xl' }},
								content: 'Создать новую модель'
							},
						]
					}
				},
			]
		},
	]
};
