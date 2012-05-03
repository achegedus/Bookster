//Application Window Component Constructor
function ApplicationWindow() {
	//load component dependencies
	var BookListView = require('ui/common/BookListView');
		
	//create component instance
	var self = Ti.UI.createWindow({
		backgroundColor:'#ffffff',
		title: 'What I want to read'
	});
		
	//construct UI
	var firstView = new BookListView();
	self.add(firstView);
	
	return self;
}

//make constructor function the public component interface
module.exports = ApplicationWindow;
