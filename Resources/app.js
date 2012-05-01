/*
 * Single Window Application Template:
 * A basic starting point for your application.  Mostly a blank canvas.
 * 
 * In app.js, we generally take care of a few things:
 * - Bootstrap the application with any data we need
 * - Check for dependencies like device type, platform version or network connection
 * - Require and open our top-level UI component
 *  
 */

//bootstrap and check dependencies
if (Ti.version < 1.8 ) {
	alert('Sorry - this application template requires Titanium Mobile SDK 1.8 or later');	  	
}

// This is a single context application with mutliple windows in a stack
(function() {
	var Cloud = require('ti.cloud');
	Cloud.debug = true;
	
	
	
	
	//determine platform and form factor and render approproate components
	var osname = Ti.Platform.osname,
		version = Ti.Platform.version,
		height = Ti.Platform.displayCaps.platformHeight,
		width = Ti.Platform.displayCaps.platformWidth;
	
	//considering tablet to have one dimension over 900px - this is imperfect, so you should feel free to decide
	//yourself what you consider a tablet form factor for android
	var isTablet = osname === 'ipad' || (osname === 'android' && (width > 899 || height > 899));
	
	var Window;
	
	Cloud.Users.showMe(function (e) {
	    if (e.success) {
	    	// User is already logged in
	    	Ti.App.Properties.setString('userID',e.users[0]['id']);
	    	
	    	// Show app window
	    	
	    	openAppWindow();
	    } else {
	    	// User is not logged in
	    	
	    	// Show login window
	        self.openLoginWindow();
	    }
	});
	
	
	Ti.App.addEventListener('showLogin', function(event)  
	{  
		Window().close();
		self.openLoginWindow();
	});  

	
	Ti.App.addEventListener('showApp', function(event)  
	{  
		Window().close();
		self.openAppWindow();
	}); 
	
	
	Ti.App.addEventListener('showRegister', function(event)  
	{  
		Window().close();
		self.openRegisterWindow();
	}); 
	
	
	var openAppWindow = function() {
		
		// if (isTablet) {
			// Window = require('ui/tablet/ApplicationWindow');
		// }
		// else {
			// // Android uses platform-specific properties to create windows.
			// // All other platforms follow a similar UI pattern.
			// if (osname === 'android') {
				// Window = require('ui/handheld/android/ApplicationWindow');
			// }
			// else {
				// Window = require('ui/handheld/ApplicationWindow');
			// }
		// }
		
		// Create a tab group to hold our windows.
		var tab_group = require('ui/handheld/common/ApplicationTabGroup');
		new tab_group().open();
	}
	
	
	function openRegisterWindow() {
		if (isTablet) {
			Window = require('ui/tablet/RegisterWindow');
		}
		else {
			// Android uses platform-specific properties to create windows.
			// All other platforms follow a similar UI pattern.
			if (osname === 'android') {
				Window = require('ui/handheld/android/RegisterWindow');
			}
			else {
				Window = require('ui/handheld/RegisterWindow');
			}
		}
		new Window().open();
	}
	
	
	function openLoginWindow() {
		if (isTablet) {
			Window = require('ui/tablet/LoginWindow');
		}
		else {
			// Android uses platform-specific properties to create windows.
			// All other platforms follow a similar UI pattern.
			if (osname === 'android') {
				Window = require('ui/handheld/android/LoginWindow');
			}
			else {
				Window = require('ui/handheld/LoginWindow');
			}
		}
		
		new Window().open();
	}
	
})();
