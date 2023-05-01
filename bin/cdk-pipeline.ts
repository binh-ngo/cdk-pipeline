#!/usr/bin/env node
import { App } from '@aws-cdk/core';
import { CdkpipelinesDemoPipelineStack } from '../lib/cdk-pipelines-pipeline-stack';

const app = new App();

new CdkpipelinesDemoPipelineStack(app, 'CdkpipelinesDemoPipelineStack', {
  env: { account: 'admin', region: 'us-east-1' },
});

app.synth();