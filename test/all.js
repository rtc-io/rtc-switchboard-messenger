var test = require('tape');

test('import messenger', function(t) {
	t.plan(1);
	t.ok(require('..'));
});
