module.exports = {
	routes: [
		{
			method: 'GET',
			path: '/espers/:slug',
			handler: 'esper.findOne',
			config: {
				auth: false,
			}
		},
		{
			method: 'GET',
			path: '/espers/gods/:slug_god',
			handler: 'esper.findOneGod',
			config: {
				auth: false,
			}
		},
	]
};