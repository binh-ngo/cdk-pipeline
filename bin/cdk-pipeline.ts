#!/usr/bin/env node
import { App } from '@aws-cdk/core';
import { CdkpipelinesDemoPipelineStack } from '../lib/cdk-pipelines-pipeline-stack';

const app = new App();

new CdkpipelinesDemoPipelineStack(app, 'CdkpipelinesDemoPipelineStack', {
  // no need to create multiple accounts through control tower
  env: { account: '539460444185', region: 'us-east-1' },
});

app.synth();