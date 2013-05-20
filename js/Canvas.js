
/*
	TODO
 */
var Canvas = Class.extend({

	init: function()
	{
		this.element = $("#main");
		this.context = this.element[0].getContext("2d");
		
		this.context.fillRect(0, 200, 500, 300);

		var that = this;
		this.element.mousemove(function (event) {
			that.onClick(event);
		});

		this.element.mousedown(function (event) {
			that.okCircle = true;
		});

		this.element.mouseup(function (event) {
			that.okCircle = false;
		});

		this.element.mouseout(function (event) {
			that.okCircle = false;
		});
	},

	onClick: function(event)
	{
		if (!this.okCircle) {
			return;
		}
		this.context.beginPath();
		this.context.arc(event.pageX - 5, event.pageY - 5, 10, 0, Math.PI*2, true); 
		this.context.closePath();
		this.context.fill();
	}
});