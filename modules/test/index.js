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
				route.send("You tested it!")
			}
		}
	]
}