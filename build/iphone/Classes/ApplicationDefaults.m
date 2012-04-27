/**
* Appcelerator Titanium Mobile
* This is generated code. Do not modify. Your changes *will* be lost.
* Generated code is Copyright (c) 2009-2011 by Appcelerator, Inc.
* All Rights Reserved.
*/
#import <Foundation/Foundation.h>
#import "TiUtils.h"
#import "ApplicationDefaults.h"
 
@implementation ApplicationDefaults
  
+ (NSMutableDictionary*) copyDefaults
{
    NSMutableDictionary * _property = [[NSMutableDictionary alloc] init];

    [_property setObject:[TiUtils stringValue:@"iG4L8a6ukKP7W1I7Ffc4qHGUfGGSBb1v"] forKey:@"acs-oauth-secret-development"];
    [_property setObject:[TiUtils stringValue:@"7U0DGfMUgkGyqxIlMPDOeP0HM3RxIM59"] forKey:@"acs-oauth-key-development"];
    [_property setObject:[TiUtils stringValue:@"XemXxKOgukg85SMKnAconu7bMWhNCEjV"] forKey:@"acs-api-key-development"];
    [_property setObject:[TiUtils stringValue:@"WV137sfms1qucTHFqJmwRrzVjVjr05EH"] forKey:@"acs-oauth-secret-production"];
    [_property setObject:[TiUtils stringValue:@"Rjw7U6gtVpln479Gd6qkLupWLsR72ksz"] forKey:@"acs-oauth-key-production"];
    [_property setObject:[TiUtils stringValue:@"1KsIcqYu23zJmszWk5kms5vxQRJE89FM"] forKey:@"acs-api-key-production"];
    [_property setObject:[TiUtils stringValue:@"system"] forKey:@"ti.ui.defaultunit"];

    return _property;
}
@end
