
/*
	TODO
 */
var Canvas = Class.extend({

	init: function()
	{
		this.element = $("#main")[0];
		this.context = this.element.getContext("2d");


		this.context.fillRect(0, 200, 500, 300);
	}
});