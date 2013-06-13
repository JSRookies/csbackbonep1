var TodoListView = Backbone.View.extend({
	initialize: function() {
		this.collection.on('reset', this.render, this);
		this.collection.on('add', this.addOne, this);
	},

	render: function() {
		this.collection.forEach(this.addOne, this);

		todoListDom.append(this.$el);
	},

	addOne: function(todoItem) {
		var todoView = new TodoView({model: todoItem});
		this.$el.append(todoView.render().el);
	}
});