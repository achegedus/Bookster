//FirstView Component Constructor
function LoginView() {
	//create object instance, a parasitic subclass of Observable
	var self = Ti.UI.createView();
	var Cloud = require('ti.cloud');
	Cloud.debug = true;
	
	
	
	//label using localization-ready strings from <app dir>/i18n/en/strings.xml\
	var Login = Ti.UI.createButton({
		title : 'Login',
		height : 35,
		width : 100,
		top : 410,
	});
	
	Login.addEventListener('click', function(e) {
		Cloud.Users.login({
		    login: 'adam@heged.us',
		    password: 'carrieu'
		}, function (e) {
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
	
	self.add(Login);
	
	return self;
}

module.exports = LoginView;
