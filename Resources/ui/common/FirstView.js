//FirstView Component Constructor
function FirstView() {
	//create object instance, a parasitic subclass of Observable
	var self = Ti.UI.createView();
	var Cloud = require('ti.cloud');
	Cloud.debug = true;
	
	

	//label using localization-ready strings from <app dir>/i18n/en/strings.xml\
	var Book = Ti.UI.createButton({
		title : 'Create Book',
		height : 35,
		width : 100,
		top : 290,
	});
	

	//Add behavior for UI
	Book.addEventListener('click', function(e) {
		Cloud.Users.login({
			login	: 'achegedus',
			password: 'carrieu',
		}, function(e) {
			if (e.success)	 {

				Cloud.Objects.create({
					classname : 'books',
					fields : {
						title : 'Kill Shot',
						author : 'Vince Flynn',
						year : 2012
					}
				}, function(e) {
					if(e.success) {
						var book = e.books[0];
						alert('Success:\\n' + 'id: ' + book.id + '\\n' + 'Title: ' 
						+ book.title + '\\n' + 'Author: ' + book.author + '\\n' + 'Year: ' 
						+ book.year + '\\n' + 'created_at: ' + book.created_at);
					} else {
						alert('Create Error:\\n' + ((e.error && e.message) || JSON.stringify(e)));
					}
				}); // Cloud.Objects.create

			} else {
				alert('Login Error:\\n' +
            		((e.error && e.message) || JSON.stringify(e)));
			} 
		}); // Cloud.Users.login

	}); // label.addEventListener
	// Add to the parent view.
	self.add(Book);
	
	
	//label using localization-ready strings from <app dir>/i18n/en/strings.xml\
	var Status = Ti.UI.createButton({
		title : 'Check User',
		height : 35,
		width : 100,
		top : 330,
	});
	
	Status.addEventListener('click', function(e) {
		Cloud.Users.showMe(function (e) {
		    if (e.success) {
		        var user = e.users[0];
		        alert('Success:\\n' +
		            'id: ' + user.id + '\\n' +
		            'first name: ' + user.first_name + '\\n' +
		            'last name: ' + user.last_name);
		    } else {
		        alert('Error:\\n' +
		            ((e.error && e.message) || JSON.stringify(e)));
		    }
		});
	});
	
	self.add(Status);
	
	
	//label using localization-ready strings from <app dir>/i18n/en/strings.xml\
	var Logout = Ti.UI.createButton({
		title : 'Logout',
		height : 35,
		width : 100,
		top : 370,
	});
	
	Logout.addEventListener('click', function(e) {
		Cloud.Users.logout(function (e) {
		    if (e.success) {
		        alert('Success: Logged out');
		        
		        Ti.App.fireEvent('logoutCalled');  
		    } else {
		        alert('Error:\\n' +
		            ((e.error && e.message) || JSON.stringify(e)));
		    }
		});
	});
	
	self.add(Logout);
	
	
	
	return self;
}

module.exports = FirstView;
