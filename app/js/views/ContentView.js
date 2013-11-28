define(['backbone','jquery','collections/CaughtPokemons'], function(Backbone, $, CaughtPokemons) {

	ContentView = Backbone.View.extend({
		el:$(".main-content"),
		events: {
			"click .caught-button":"addToCaught"
		},
		updateCounters: function() {

		    	caughtPokemons = new CaughtPokemons;
		    	caughtPokemons.fetch();
	    	$("#tab-caught .count").html(caughtPokemons.length);
		},
		showPage: function(page) {

			page = (page == "") ? "welcome" : page;
	    	template = _.template($("#"+page).html());
		    this.$el.html(template);
	    	new DocumentView;
		},
	    showPokemon: function(pokemon) {
	    	template = _.template($("#pokemon-content").html());
	        model = (pokemon.model[0]) ? pokemon.model[0] : pokemon.model;
	        attr = model.attributes;
	        currentModel = model.toJSON();
	        this.$el.attr("data-model",JSON.stringify(model.toJSON()))
	        	.html(template(_.extend(
	            model.toJSON()
	            )))

	        if($(window).width() < 1000) {
	        	console.log('s');
	        	$(".contentWrap").css({
	        		right: "0%"
	        	})
	        }
	    },
	    addToCaught: function(evt) {
	    	// console.log("we");
	    	pokemon = currentModel;
	    	console.log(pokemon);
	    	caughtPokemons.addPokemon(pokemon);
	    	// pokemons.where({name:pokemon.name})[0].set({caught:1});
	    	// $(".pokemon-row").each(function(e,v){
	    	// 	rowmodel = $(this).data("model");
	    	// 	if(rowmodel.name==pokemon.name) {
	    	// 		$(this).addClass("caught");
	    	// 	}
	    	// })
	    	// caughtPokemons = new CaughtPokemons({
	    	// 	model: pokemons.where({name:pokemon.name})[0]
	    	// });
	    	// console.log(caughtPokemons);
	    	// $(".caught-button").text("Remove from caught")
	    },
	    showMove: function(move) {

	    	template = _.template($("#move-content").html());
	        model = (move.model[0]) ? move.model[0] : move.model;
	        attr = model.attributes;
	        this.$el.html(template(_.extend(
	            model.toJSON()
	            )))
	    	
	        if($(window).width() < 1000) {
	        	console.log('s');
	        	$(".contentWrap").css({
	        		right: "0%"
	        	})
	    	new DocumentView;
	        }
	    }
	})
return ContentView
})