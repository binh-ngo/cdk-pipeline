#!/usr/bin/env node
import { App } from '@aws-cdk/core';
import { CdkpipelinesDemoPipelineStack } from '../lib/cdk-pipelines-pipeline-stack';

const app = new App();

new CdkpipelinesDemoPipelineStack(app, 'CdkpipelinesDemoPipelineStack', {
  // complete steps for control tower https://aws.amazon.com/blogs/aws/aws-control-tower-set-up-govern-a-multi-account-aws-environment/
  // bootstrapped with specified profile and account number in code block below

  // npx cdk bootstrap \
  // --profile 539460444185_AWSAdministratorAccess \
  // --cloudformation-execution-policies arn:aws:iam::aws:policy/AdministratorAccess \
  // aws://539460444185/us-east-1
  env: { account: '539460444185', region: 'us-east-1' },
});

app.synth();