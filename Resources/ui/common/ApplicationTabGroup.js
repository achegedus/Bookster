function ApplicationTabGroup() {
	//create module instance
	var self = Ti.UI.createTabGroup();
	
	var win1 = require('ui/handheld/DashboardWindow');
	
	var tab1 = Ti.UI.createTab({
		title: 'Dashboard',
		window: win1()
	});
	self.addTab(tab1);
	

	//create app tabs
	var win2 = require('ui/handheld/ApplicationWindow');
	
	var tab2 = Ti.UI.createTab({
		title: 'Wishlist',
		window: win2()
	});
	self.addTab(tab2);
		
	
	var win3 = require('ui/handheld/CompletedWindow');
	
	var tab3 = Ti.UI.createTab({
		title: 'Completed',
		window: win3()
	});
	self.addTab(tab3);
	
	
	var win4 = require('ui/handheld/SettingsWindow');
	
	var tab4 = Ti.UI.createTab({
		title: 'Settings',
		window: win4()
	});
	self.addTab(tab4);
	
	
	
	return self;
};

module.exports = ApplicationTabGroup;
