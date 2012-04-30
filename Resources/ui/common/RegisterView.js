function RegisterView() {
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



	// Create a TextField.
	var passwordConfirmation = Ti.UI.createTextField({
		height : 35,
		top : 90,
		left : 40,
		width : 240,
		hintText : 'confirm password',
		keyboardType : Ti.UI.KEYBOARD_DEFAULT,
		returnKeyType : Ti.UI.RETURNKEY_DEFAULT,
		borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		passwordMask: true
	});

	// Listen for return events.
	passwordConfirmation.addEventListener('return', function(e) {
		passwordConfirmation.blur();
		alert('Input was: ' + passwordConfirmation.value);
	});

	// Add to the parent view.
	self.add(passwordConfirmation);



	// Create a TextField.
	var firstName = Ti.UI.createTextField({
		height : 35,
		top : 130,
		left : 40,
		width : 240,
		hintText : 'First Name',
		keyboardType : Ti.UI.KEYBOARD_DEFAULT,
		returnKeyType : Ti.UI.RETURNKEY_DEFAULT,
		borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED
	});

	// Listen for return events.
	firstName.addEventListener('return', function(e) {
		firstName.blur();
		alert('Input was: ' + firstName.value);
	});

	// Add to the parent view.
	self.add(firstName);



	// Create a TextField.
	var lastName = Ti.UI.createTextField({
		height : 35,
		top : 170,
		left : 40,
		width : 240,
		hintText : 'Last Name',
		keyboardType : Ti.UI.KEYBOARD_DEFAULT,
		returnKeyType : Ti.UI.RETURNKEY_DEFAULT,
		borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED
	});

	// Listen for return events.
	lastName.addEventListener('return', function(e) {
		lastName.blur();
		alert('Input was: ' + lastName.value);
	});

	// Add to the parent view.
	self.add(lastName);



	// Create a TextField.
	var emailAddress = Ti.UI.createTextField({
		height : 35,
		top : 210,
		left : 40,
		width : 240,
		hintText : 'email@address.com',
		keyboardType : Ti.UI.KEYBOARD_DEFAULT,
		returnKeyType : Ti.UI.RETURNKEY_DEFAULT,
		borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED
	});

	// Listen for return events.
	emailAddress.addEventListener('return', function(e) {
		emailAddress.blur();
		alert('Input was: ' + emailAddress.value);
	});

	// Add to the parent view.
	self.add(emailAddress);



	// Create a Button.
	var Create = Ti.UI.createButton({
		title : 'Create',
		height : 35,
		width : 100,
		top : 250,
	});
	
	// Listen for click events.
	Create.addEventListener('click', function() {
		//burr
		Cloud.Users.create ({
			username: userNameField.value,
			password: passwordField.value,
			password_confirmation : passwordConfirmation.value,
			first_name: firstName.value,
			last_name: lastName.value,
			email: emailAddress.value
		}, function (e) {
			if (e.success) {
				alert('Success');
			} else {
				alert('Fail');
			}
		});
	});

	// Add to the parent view.
	self.add(Create);
	
	
	
	// Create a Button.
	var Login = Ti.UI.createButton({
		title : 'Login',
		height : 35,
		width : 100,
		top : 290,
	});
	
	// Listen for click events.
	Login.addEventListener('click', function() {
		Ti.App.fireEvent('showLogin');
	});

	// Add to the parent view.
	self.add(Login);
	
	
	return self;
}

module.exports = RegisterView;