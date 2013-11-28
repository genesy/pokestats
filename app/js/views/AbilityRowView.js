define(['backbone','jquery'], function(Backbone) {
	AbilityRowView = Backbone.View.extend({
		className:"ability-row",
		tagName: "tr",
		template: _.template($("#ability-row").html()),
		render: function() {
			// console.log(this.model);
			this.$el.attr("data-model", JSON.stringify(this.model.toJSON()))
				.append(this.template(_.extend(
					this.model.toJSON()
			)))
		}
	})
})