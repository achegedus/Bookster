//FirstView Component Constructor
function BookListView(inStatus) {
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
        	status: inStatus
		}
	}, function (e) {
	    if (e.success) {

			var tableview = Titanium.UI.createTableView({
				data:e.books
			});
			alert('hi');
			
			// create table view event listener
			tableview.addEventListener('click', function(event)
			{
				alert(event.rowData.title);
				if (event.rowData.title)
				{
					var win = Titanium.UI.createWindow({
						//url:e.rowData.test,
						title:event.rowData.title
					});
					
					Ti.UI.currentTab.open(win,{animated:true});
				}
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
