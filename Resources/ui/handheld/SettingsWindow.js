//Application Window Component Constructor
function SettingsWindow() {
	//load component dependencies
	var SettingsView = require('ui/common/SettingsView');
		
	//create component instance
	var self = Ti.UI.createWindow({
		backgroundColor:'#ffffff',
		title: 'Settings'
	});
		
	//construct UI
	var settingsView = new SettingsView();
	self.add(settingsView);
	
	return self;
}

//make constructor function the public component interface
module.exports = SettingsWindow;
