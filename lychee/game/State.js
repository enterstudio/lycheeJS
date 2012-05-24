
lychee.define('lychee.game.State').includes([
	'lychee.Events'
]).exports(function(lychee) {

	var Class = function(game, id) {

		this.game = game;
		this.id = id;

		lychee.Events.call(this, 'state-' + id);

	};

	Class.prototype = {

		enter: function() {
			this.trigger('enter');
		},

		leave: function() {
			this.trigger('leave');
		},

		render: function(clock, delta) {
		},

		update: function(clock, delta) {
		}

	};


	return Class;

});

