//FirstView Component Constructor
function BookListView(inStatus) {
	//create object instance, a parasitic subclass of Observable
	var self = Ti.UI.createView();
	var Cloud = require('ti.cloud');
	Cloud.debug = true;
	var tableview;
	var detailWin;
	
	Cloud.Objects.query({
	    classname: 'books',
	    page: 1,
	    per_page: 10,
	    where: {
        	user_id: Ti.App.Properties.getString('userID'),
        	status: inStatus
		}
	}, function (e) {
	    if (e.success) {

			tableview = Titanium.UI.createTableView({
				data:e.books
			});
			
			//add behavior
			tableview.addEventListener('click', function(e) {
				self.fireEvent('itemSelected', {
					title:e.rowData.title,
					author:e.rowData.author
				});
			});

	        self.add(tableview);
	    } else {
	        alert('Error:\\n' +
	            ((e.error && e.message) || JSON.stringify(e)));
	    }
	});
	
	return self;
}
module.exports = BookListView;
