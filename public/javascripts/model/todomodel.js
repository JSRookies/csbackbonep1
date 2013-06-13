var TodoItem = Backbone.Model.extend({
	urlRoot: 'todo',

	defaults: function() { 
		
    	return {
	      'date': new Date(), 
	      'cancelled': false, 
	      'title': 'Checkup'
	    }
	},

	toggleStatus: function() {
		if (this.get('status') == 'incomplete') {
			this.set({'status': 'complete'});
		} else {
			this.set({'status': 'incomplete'});
		}

		this.save();
	}
});