function ApplicationTabGroup() {
	//create module instance
	var self = Ti.UI.createTabGroup();
	alert('hi');
	//create app tabs
	var win1 = require('ui/handheld/WishlistWindow');
	//	win2 = new Window();
	
	var tab1 = Ti.UI.createTab({
		title: 'Wishlist',
		window: win1()
	});
	//win1.containingTab = tab1;
	
	// var tab2 = Ti.UI.createTab({
		// title: "Books I've Read",
		// window: win2
	// });
	// win2.containingTab = tab2;
// 	
	self.addTab(tab1);
	// self.addTab(tab2);
	
	return self;
};

module.exports = ApplicationTabGroup;
