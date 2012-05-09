//Application Window Component Constructor
function BookDetailWindow(event) {
	//load component dependencies
	var BookDetailView = require('ui/common/BookDetailView');
		
	//create component instance
	var self = Ti.UI.createWindow({
		backgroundColor:'#ffffff',
		title: event.title
	});
		
	//construct UI
	var bookDetailView = new BookDetailView(event);
	self.add(bookDetailView);
	
	return self;
}

//make constructor function the public component interface
module.exports = BookDetailWindow;
