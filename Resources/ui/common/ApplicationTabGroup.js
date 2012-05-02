function ApplicationTabGroup() {
	//create module instance
	var self = Ti.UI.createTabGroup();

	//create app tabs
	var win1 = require('ui/handheld/ApplicationWindow');
	//	win2 = new Window();
	
	var tab1 = Ti.UI.createTab({
		title: 'Wishlist',
		window: win1()
	});
	self.addTab(tab1);

	var win2 = require('ui/handheld/SettingsWindow');
	
	var tab2 = Ti.UI.createTab({
		title: 'Settings',
		window: win2()
	});
 	
	self.addTab(tab2);
	
	return self;
};

module.exports = ApplicationTabGroup;
