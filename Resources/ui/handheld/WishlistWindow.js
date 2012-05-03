//Application Window Component Constructor
function WishlistWindow() {
	//load component dependencies
	var BookListView = require('ui/common/BookListView');
		
	//create component instance
	var self = Ti.UI.createWindow({
		backgroundColor:'#ffffff',
		title: 'My Books'
	});
		
	//construct UI
	var firstView = new BookListView('Wishlist');
	self.add(firstView);
	
	return self;
}

//make constructor function the public component interface
module.exports = WishlistWindow;
