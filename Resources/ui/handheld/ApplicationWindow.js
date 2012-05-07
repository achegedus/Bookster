//Application Window Component Constructor
function ApplicationWindow() {
	// //load component dependencies
	// var BookListView = require('ui/common/BookListView');
// 		
	// //create component instance
	// var self = Ti.UI.createWindow({
		// backgroundColor:'#ffffff',
		// title: 'What I want to read'
	// });
// 		
	// //construct UI
	// var firstView = new BookListView();
	// self.add(firstView);
// 	
	// return self;
	
	var tabgroup = Ti.UI.createTabGroup();
	
	//declare module dependencies
	var DashboardView = require('ui/common/DashboardView'),
		WishlistView = require('ui/common/BookListView'),
		CompletedView = require('ui/common/BookListView'),
		DetailView = require('ui/common/BookListView'),
		SettingsView = require('ui/common/SettingsView');
		
	//create object instance
	var self = Ti.UI.createTabGroup();
		
		
	//construct UI
	var dashboardView = new DashboardView(),
		wishlistView = new WishlistView(),
		completedView = new CompletedView(),
		//detailView = new DetailView(),
		settingsView = new SettingsView();
	
	
	//create master view containers
	var dashboardContainerWindow = Ti.UI.createWindow({
		title:'Dashboard'
	});
	dashboardContainerWindow.add(dashboardView);
	
	//create master view container
	var wishlistContainerWindow = Ti.UI.createWindow({
		title:'Wishlist'
	});
	wishlistContainerWindow.add(wishlistView);
	
	//create master view container
	var completedContainerWindow = Ti.UI.createWindow({
		title:'Completed'
	});
	completedContainerWindow.add(completedView);
	
	//create master view container
	// var detailContainerWindow = Ti.UI.createWindow({
		// title:'Detail'
	// });
	// detailContainerWindow.add(detailView);
	
	//create master view container
	var settingsContainerWindow = Ti.UI.createWindow({
		title:'Settings'
	});
	settingsContainerWindow.add(settingsView);
	
	
	//create iOS specific NavGroup UI
	// var wishlistNavGroup = Ti.UI.iPhone.createNavigationGroup({
		// window:masterContainerWindow
	// });
	// wishlistContainerWindow.add(navGroup);
	
	// //create iOS specific NavGroup UI
	// var navGroup = Ti.UI.iPhone.createNavigationGroup({
		// window:masterContainerWindow
	// });
	// completedContainerWindow.add(navGroup);
	
	
	// Create tabs
	var tab1 = Ti.UI.createTab({
		title: 'Dashboard',
		window: dashboardContainerWindow,
		icon: 'images/41-picture-frame.png'
	});
	self.addTab(tab1);
	
	var tab2 = Ti.UI.createTab({
		title: 'Wishlist',
		window: wishlistContainerWindow,
		icon: 'images/83-calendar.png'
	});
	self.addTab(tab2);
			
	var tab3 = Ti.UI.createTab({
		title: 'Completed',
		window: completedContainerWindow,
		icon: 'images/58-bookmark.png'
	});
	self.addTab(tab3);
		
	var tab4 = Ti.UI.createTab({
		title: 'Settings',
		window: settingsContainerWindow,
		icon: 'images/20-gear-2.png'
	});
	self.addTab(tab4);
	
	//self.add(tabgroup);
	
	return self;
}

//make constructor function the public component interface
module.exports = ApplicationWindow;
