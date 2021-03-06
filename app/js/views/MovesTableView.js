define(['backbone','jquery','views/Search','models/Move','collections/Moves','views/MovesRowView'], function(Backbone) {
	MovesTableView =Backbone.View.extend({
		el:$(".move-table"),
		renderMoveView: function(move) {
			var movesRowView = new MovesRowView({
				model:move
			})
	        this.$el.children("tbody").append(movesRowView.el);
	        movesRowView.render();
		},
		initialize: function() {
			thisView = this;
	        _.each(this.collection.models, function (move) {
	            // Call the renderPostView method
	            thisView.renderMoveView(move);
	        });

		}
	})
	return MovesTableView;
})