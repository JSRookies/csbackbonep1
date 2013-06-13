var TodoList = Backbone.Collection.extend({
	model: TodoItem,
	url: 'todos'
});
