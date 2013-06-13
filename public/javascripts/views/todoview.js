var TodoView = Backbone.View.extend({
	template: _.template('<h3 class=<% print(status) %>>' + 
		'<input type=checkbox ' +
		'<% if (status == "complete") print("checked") %>/>' +
		'<%= description %><a href="todos/<%= id %>" class="todo">☞</a></h3>'),

	events: {
		'change input': 'toggleStatus',
		'click a.todo' : 'showItem'
	},

	initialize: function() {
		this.model.on('change', this.render, this);
		// this.model.on('destroy', this.remove, this);
	},

	render: function() {
		var attr = this.model.toJSON();
		this.$el.html( this.template(attr) );

		return this;
	},

	toggleStatus: function() {
		this.model.toggleStatus();
	},

	showItem: function(e) {
		e.preventDefault();
		TodoApp.navigate('todos/' + this.model.get('id'),{trigger: true});
	},

	remove: function() {
		// remove elements from DOM
	}
});
