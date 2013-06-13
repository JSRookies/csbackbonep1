var todoListDom = $('#app');

var TodoRouter = Backbone.Router.extend({
	routes: {
		'': 'index',
		'todos/:id': 'show'
	},

	initialize: function() {
		Backbone.history.start({pushState: true});
	},

	index: function() {
		console.log('index requested');
	},

	show: function(id) {
		console.log('show id : ' + id);
	}

});

var todoItem = new TodoItem();
var todoView = new TodoView({model: todoItem});

var todoList = new TodoList();
var todoListView = new TodoListView({collection: todoList});

var TodoApp = new TodoRouter({todoList: todoList});

todoList.fetch();