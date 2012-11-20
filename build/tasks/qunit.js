/**
 * @module Build
 * @submodule Build.Tasks
 * @class Build.Tasks.QUnit
 * @static
 */

module.exports = function(config) {

	return {
		'local': ['http://local.boilerplate:8888/javascripts/test/index.html'],
		'dev': ['http://dev.foo.com/javascripts/test/index.html'],
		'stage': ['http://stage.foo.com/javascripts/test/index.html']
	};

}