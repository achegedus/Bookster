//Application Window Component Constructor
function DashboardWindow() {
	//load component dependencies
	var DashboardView = require('ui/common/DashboardView');
		
	//create component instance
	var self = Ti.UI.createWindow({
		backgroundColor:'#ffffff',
		title: 'Dashboard'
	});
		
	//construct UI
	var dashboardView = new DashboardView();
	self.add(dashboardView);
	
	return self;
}

//make constructor function the public component interface
module.exports = DashboardWindow;
