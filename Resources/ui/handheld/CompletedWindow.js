//Application Window Component Constructor
function CompletedWindow() {
	//load component dependencies
	var BookListView = require('ui/common/BookListView');
		
	//create component instance
	var self = Ti.UI.createWindow({
		backgroundColor:'#ffffff',
		title: 'Books I read'
	});
		
	//construct UI
	var completedView = new BookListView('Completed');
	self.add(completedView);
	
	return self;
}

//make constructor function the public component interface
module.exports = CompletedWindow;
