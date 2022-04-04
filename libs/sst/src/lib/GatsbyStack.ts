import * as sst from '@serverless-stack/resources';
import { Certificate } from 'aws-cdk-lib/aws-certificatemanager';
import {
  LambdaEdgeEventType,
  experimental,
  // Function,
  // FunctionCode,
  // FunctionEventType,
} from 'aws-cdk-lib/aws-cloudfront';
import { Runtime, Code } from 'aws-cdk-lib/aws-lambda';
export default class GatsbyStack extends sst.Stack {
  constructor(scope: sst.App, id: string, props?: sst.StackProps) {
    super(scope, id, props);

    const isProduction = scope.stage === 'main';

    const edgeFunc = new experimental.EdgeFunction(this, 'EdgeFunction', {
      runtime: Runtime.NODEJS_14_X,
      handler: 'redirect.handler',
      code: Code.fromAsset('libs/sst/src/lib/functions/edge'),
      stackId: `${scope.logicalPrefixedName('edge-lambda')}`,
    });

    // const cfFunction = new Function(this, 'CFFunction', {
    //   code: FunctionCode.fromFile({
    //     filePath: path.resolve('libs/sst/src/lib/cloudfront/redirect.js'),
    //   }),
    // });

    const site = new sst.StaticSite(this, 'gatsby-site', {
      path: 'apps/web',
      buildOutput: 'public',
      customDomain: {
        isExternalDomain: true,
        domainName: isProduction ? 'sourcier.uk' : `${scope.stage}.sourcier.uk`,
        // domainAlias: isProduction ? 'www.sourcier.uk' : undefined,
        certificate: Certificate.fromCertificateArn(
          this,
          'SourcierUkCert',
          'arn:aws:acm:us-east-1:561381207426:certificate/d8f786c1-c7a4-4191-9e79-a5654cc45365'
        ),
      },
      cfDistribution: {
        defaultBehavior: {
          edgeLambdas: [
            {
              functionVersion: edgeFunc.currentVersion,
              eventType: LambdaEdgeEventType.VIEWER_REQUEST,
            },
          ],
          // functionAssociations: [
          //   {
          //     function: cfFunction,
          //     eventType: FunctionEventType.VIEWER_REQUEST,
          //   },
          // ],
        },
      },
    });

    this.addOutputs({
      url: site.url,
    });
  }
}
