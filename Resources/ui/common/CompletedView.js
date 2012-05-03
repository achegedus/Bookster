//FirstView Component Constructor
function CompletedView() {
	//create object instance, a parasitic subclass of Observable
	var self = Ti.UI.createView();
	var Cloud = require('ti.cloud');
	Cloud.debug = true;
	
	
	Cloud.Objects.query({
	    classname: 'books',
	    page: 1,
	    per_page: 10,
	    where: {
        	user_id: Ti.App.Properties.getString('userID'),
        	status: 'Completed'
		}
	}, function (e) {
	    if (e.success) {

			var tableview = Titanium.UI.createTableView({
				data:e.books
			});

	        self.add(tableview);
	    } else {
	        alert('Error:\\n' +
	            ((e.error && e.message) || JSON.stringify(e)));
	    }
	});
	
	return self;
}
module.exports = CompletedView;
