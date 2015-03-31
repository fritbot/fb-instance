// Incredibly simple module to demonstrate how it's done!

module.exports = {
	'displayname': "Test",
	'description': "Test",

	commands: [{
			'name': 'Test',
			'description': "Test",
			'usage': 'test',
			'trigger': /test/i,
			'func': function (route, args) {
				route.send("You tested it!");
			}
		}
	],

	web_init : function (web) {
		var app = web.express();

		// Set up views!
		app.set('views', __dirname + '/templates');
		app.set('view engine', 'jade');

		app.get('/', web.render(app, 'test'));

		app.get('/pants', web.render(app, 'pants', function(req, next) {
			next({ pants : 'Yes'});
		}));

		web.addModuleApp('/test/', app, 'Test');
	}
};
