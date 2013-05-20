var ApplicationManager = Class.extend({
	init: function() {
		// Get the canvas
		this.canvas = new Canvas();
	}
});

var appController;
$(document).ready(function () {
	appController = new ApplicationManager();
});