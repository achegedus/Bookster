//Application Window Component Constructor
function LoginWindow() {
	//load component dependencies
	var LoginView = require('ui/common/LoginView');
		
	//create component instance
	var self = Ti.UI.createWindow({
		backgroundColor:'#ffffff'
	});
		
	//construct UI
	var loginView = new LoginView();
	self.add(loginView);
	
	return self;
}

//make constructor function the public component interface
module.exports = LoginWindow;
