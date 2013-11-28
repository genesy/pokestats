define(['backbone','jquery'], function(Backbone) {
	MovesRowView = Backbone.View.extend({
		className:"move-row",
		tagName: "tr",
		template: _.template($("#move-row").html()),
		render: function() {
			// console.log(this.model);
			this.$el.attr("data-model", JSON.stringify(this.model.toJSON()))
				.append(this.template(_.extend(
					this.model.toJSON()
			)))
		}
	})
})