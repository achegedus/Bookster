//Application Window Component Constructor
function ApplicationWindow() {

	Titanium.UI.setBackgroundColor('#000');
			
	//create tab group
	var tabGroup = Ti.UI.createTabGroup();
	
	
	//dashboard tab
	var DashboardView = require('ui/common/DashboardView');
	var dashboardView = new DashboardView();
	
	var dashboardContainerWindow = Ti.UI.createWindow({
		title:'Dashboard'
	});
	dashboardContainerWindow.add(dashboardView);
	
	var tab1 = Ti.UI.createTab({
		title: 'Dashboard',
		window: dashboardContainerWindow,
		icon: 'images/41-picture-frame.png'
	});
	
	
	
	//wishlist tab
	var WishlistView = require('ui/common/BookListView');
	var wishlistView = new WishlistView();
	
	//var DetailView = require('ui/common/BookListView');
	
	var wishlistContainerWindow = Ti.UI.createWindow({
		title:'Wishlist'
	});
	wishlistContainerWindow.add(wishlistView);
	
	var wishlistDetailWindow = Ti.UI.createWindow({
		title: 'Detail'
	});
	
	var tab2 = Ti.UI.createTab({
		title: 'Wishlist',
		window: wishlistContainerWindow,
		icon: 'images/83-calendar.png'
	});
	
	wishlistContainerWindow.addEventListener('itemSelected', function(e) {
		tab2.open(wishlistDetailWindow);
	});
	
	
	
	//completed tab
	var CompletedView = require('ui/common/BookListView');
	//var completedView = new CompletedView();
	
	var completedContainerWindow = Ti.UI.createWindow({
		title:'Completed'
	});
	//completedContainerWindow.add(completedView);
	
	var tab3 = Ti.UI.createTab({
		title: 'Completed',
		window: completedContainerWindow,
		icon: 'images/58-bookmark.png'
	});
	
	
	
	//settings tab
	var SettingsView = require('ui/common/SettingsView');
	//var settingsView = new SettingsView();
	
	var settingsContainerWindow = Ti.UI.createWindow({
		title:'Settings'
	});
	//settingsContainerWindow.add(settingsView);
	
	var tab4 = Ti.UI.createTab({
		title: 'Settings',
		window: settingsContainerWindow,
		icon: 'images/20-gear-2.png'
	});
	
	
	
	// Create tabs
	
	tabGroup.addTab(tab1);
	tabGroup.addTab(tab2);
	tabGroup.addTab(tab3);
	tabGroup.addTab(tab4);
	
	tabGroup.open();
	
	return self;
}

//make constructor function the public component interface
module.exports = ApplicationWindow;
