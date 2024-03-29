/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#import "FBProcessInfo.h"

@implementation FBProcessInfo

@synthesize launchPath = _launchPath;
@synthesize processIdentifier = _processIdentifier;
@synthesize arguments = _arguments;
@synthesize environment = _environment;

#pragma mark NSObject

- (instancetype)initWithProcessIdentifier:(pid_t)processIdentifier launchPath:(NSString *)launchPath arguments:(NSArray<NSString *> *)arguments environment:(NSDictionary<NSString *, NSString *> *)environment
{
  NSParameterAssert(launchPath);
  NSParameterAssert(arguments);
  NSParameterAssert(environment);

  self = [super init];
  if (!self) {
    return nil;
  }

  _processIdentifier = processIdentifier;
  _launchPath = launchPath;
  _arguments = arguments;
  _environment = environment;

  return self;
}

- (NSUInteger)hash
{
  return ((unsigned long) self.processIdentifier) ^ self.launchPath.hash ^ self.arguments.hash;
}

- (BOOL)isEqual:(FBProcessInfo *)object
{
  if (![object isKindOfClass:self.class]) {
    return NO;
  }
  return self.processIdentifier == object.processIdentifier &&
         [self.launchPath isEqual:object.launchPath] &&
         [self.arguments isEqual:object.arguments];
}

- (NSString *)description
{
  return [NSString stringWithFormat:
    @"Process %@ | PID %d",
    self.processName,
    self.processIdentifier
  ];
}

#pragma mark Accessors

- (NSString *)processName
{
  // This should be fetched from sysctl/libproc instead.
  return self.launchPath.lastPathComponent;
}

#pragma mark NSCopying

- (instancetype)copyWithZone:(NSZone *)zone
{
  return self;
}

@end
