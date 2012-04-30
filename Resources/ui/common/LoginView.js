//FirstView Component Constructor
function LoginView() {
	//create object instance, a parasitic subclass of Observable
	var self = Ti.UI.createView();
	var Cloud = require('ti.cloud');
	Cloud.debug = true;
	
	
	// User Name
	var userNameField = Ti.UI.createTextField({
		height : 35,
		top : 10,
		left : 40,
		width : 240,
		hintText : 'Username',
		keyboardType : Ti.UI.KEYBOARD_DEFAULT,
		returnKeyType : Ti.UI.RETURNKEY_DEFAULT,
		borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED
	});

	// Listen for return events.
	userNameField.addEventListener('return', function(e) {
		userNameField.blur();
		alert('Input was: ' + userNameField.value);
	});

	// Add to the parent view.
	self.add(userNameField);


	// Password
	var passwordField = Ti.UI.createTextField({
		height : 35,
		top : 50,
		left : 40,
		width : 240,
		hintText : 'password',
		keyboardType : Ti.UI.KEYBOARD_DEFAULT,
		returnKeyType : Ti.UI.RETURNKEY_DEFAULT,
		borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		passwordMask: true
	});

	// Listen for return events.
	passwordField.addEventListener('return', function(e) {
		passwordField.blur();
		alert('Input was: ' + passwordField.value);
	});

	// Add to the parent view.
	self.add(passwordField);
	
	
	//label using localization-ready strings from <app dir>/i18n/en/strings.xml
	var Login = Ti.UI.createButton({
		title : 'Login',
		height : 35,
		width : 100,
		top : 100,
	});
	
	Login.addEventListener('click', function(e) {
		Cloud.Users.login({
			login: userNameField.value,
			password: passwordField.value,
		}, function (e) {
		    if (e.success) {
		        var user = e.users[0];
		        // alert('Success:\\n' +
		            // 'id: ' + user.id + '\\n' +
		            // 'first name: ' + user.first_name + '\\n' +
		            // 'last name: ' + user.last_name);
				Ti.App.Properties.setString('userID',e.users[0]['id']);
				Ti.App.fireEvent('showApp');  
		    } else {
		        alert('Error:\\n' +
		            ((e.error && e.message) || JSON.stringify(e)));
		    }
		});
	});
	
	self.add(Login);
	
	
	//label using localization-ready strings from <app dir>/i18n/en/strings.xml
	var Register = Ti.UI.createButton({
		title : 'Register',
		height : 35,
		width : 100,
		top : 140,
	});
	
	Register.addEventListener('click', function(e) {
		Ti.App.fireEvent('showRegister');
	});
	
	self.add(Register);
	
	return self;
}

module.exports = LoginView;
