
#import "CDViCloudDocument.h"
#import "iCloud.h"

@implementation CDViCloudDocument

- (void)setiCloudDocumentContainer:(CDVInvokedUrlCommand*)command{

    CDVPluginResult* pluginResult = nil;
    NSString* container = [command.arguments objectAtIndex:0];

    if (container != nil) {
		[[iCloud sharedCloud] setupiCloudDocumentSyncWithUbiquityContainer:@"iCloud.br.com.meubolsoemdia.Meunegocioemdia"];
    }
}


- (void)listDocuments:(CDVInvokedUrlCommand*)command{
    // Check command.arguments here.
	NSArray *documentList = [[iCloud sharedCloud] listCloudFiles];

    [self.commandDelegate runInBackground:^{

    	if (documentList.count == 0)
    	{
    		
    	}

        NSString* payload = nil;
        // Some blocking logic...
        CDVPluginResult* pluginResult = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:payload];
        // The sendPluginResult method is thread-safe.
        [self.commandDelegate sendPluginResult:pluginResult callbackId:command.callbackId];
    }];
}


// - (CDVAccelerometer*)init
// {
//     self = [super init];
//     if (self) {
//         self.x = 0;
//         self.y = 0;
//         self.z = 0;
//         self.timestamp = 0;
//         self.callbackId = nil;
//         self.isRunning = NO;
//         self.haveReturnedResult = YES;
//         self.motionManager = nil;
//     }
//     return self;
// }

- (void)greet:(CDVInvokedUrlCommand*)command
{

    NSString* name = [[command arguments] objectAtIndex:0];
    NSString* msg = [NSString stringWithFormat: @"Hello, %@", name];

    CDVPluginResult* result = [CDVPluginResult
                               resultWithStatus:CDVCommandStatus_OK
                               messageAsString:msg];

    [self.commandDelegate sendPluginResult:result callbackId:command.callbackId];
}

@end
