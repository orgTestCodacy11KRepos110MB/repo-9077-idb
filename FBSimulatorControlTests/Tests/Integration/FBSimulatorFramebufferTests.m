/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#import <Foundation/Foundation.h>
#import <Metal/Metal.h>

#import <FBSimulatorControl/FBSimulatorControl.h>

#import "FBSimulatorControlAssertions.h"
#import "FBSimulatorControlFixtures.h"
#import "FBSimulatorControlTestCase.h"

@interface FBSimulatorFramebufferTests : FBSimulatorControlTestCase

@end

@implementation FBSimulatorFramebufferTests

- (void)testRecordsVideoForSimulatorApp
{
  if (!MTLCreateSystemDefaultDevice()) {
    NSLog(@"Skipping running -[%@ %@] since Metal is not supported on this Hardware", NSStringFromClass(self.class), NSStringFromSelector(_cmd));
    return;
  }
  FBSimulatorBootConfiguration *bootConfiguration = self.bootConfiguration;
  FBSimulator *simulator = [self assertObtainsBootedSimulatorWithConfiguration:self.simulatorConfiguration bootConfiguration:bootConfiguration];

  NSString *filePath = [[NSTemporaryDirectory() stringByAppendingPathComponent:NSUUID.UUID.UUIDString] stringByAppendingPathExtension:@"mp4"];
  NSError *error = nil;
  id success = [[simulator startRecordingToFile:filePath] await:&error];
  XCTAssertNil(error);
  XCTAssertNotNil(success);

  success = [[simulator stopRecording] await:&error];
  XCTAssertNil(error);
  XCTAssertNotNil(success);
}

@end
