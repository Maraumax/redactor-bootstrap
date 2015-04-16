if (!RedactorPlugins)
	var RedactorPlugins = {};

RedactorPlugins.bootstrapalerts = function()
{
	return {
		init: function()
		{
			var dropdown = {};
			dropdown['success'] = { title: 'Success alert', func: function() { this.bootstrapalerts.add('success'); } };
			dropdown['info'] = { title: 'Info alert', func: function() { this.bootstrapalerts.add('info'); } };
			dropdown['warning'] = { title: 'Warning alert', func: function() { this.bootstrapalerts.add('warning'); } };
			dropdown['danger'] = { title: 'Danger alert', func: function() { this.bootstrapalerts.add('danger'); } };

			var button = this.button.add('alerts', 'Alerts');
			this.button.setAwesome('alerts', 'fa-caret-square-o-right');
			this.button.addDropdown(button, dropdown);

		},
		add: function(type)
		{
			this.insert.html('<p class="alert alert-'+type+'"></p>', false);
		}
	};
};
