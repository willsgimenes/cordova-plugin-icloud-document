#import <UIKit/UIKit.h>
#import <Cordova/CDVPlugin.h>
#import "iCloud.h"

@interface CDViCloudDocument : CDVPlugin
{
    double x;
    double y;
    double z;
    NSTimeInterval timestamp;
}

@property (readonly, assign) BOOL isRunning;
@property (nonatomic, strong) NSString* callbackId;

- (CDViCloudDocument*)init;

- (void)start:(CDVInvokedUrlCommand*)command;
- (void)stop:(CDVInvokedUrlCommand*)command;

@end