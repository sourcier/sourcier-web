import * as sst from '@serverless-stack/resources';
import { Certificate } from 'aws-cdk-lib/aws-certificatemanager';
export default class GatsbyStack extends sst.Stack {
  constructor(scope: sst.App, id: string, props?: sst.StackProps) {
    super(scope, id, props);

    const isProduction = scope.stage === 'main';

    const site = new sst.StaticSite(this, 'gatsby-site', {
      path: 'apps/web',
      buildOutput: 'public',
      customDomain: {
        isExternalDomain: true,
        domainName: isProduction ? 'sourcier.uk' : `${scope.stage}.sourcier.uk`,
        domainAlias: isProduction ? 'www.sourcier.uk' : undefined,
        certificate: Certificate.fromCertificateArn(
          this,
          'SourcierUkCert',
          'arn:aws:acm:us-east-1:561381207426:certificate/d8f786c1-c7a4-4191-9e79-a5654cc45365'
        ),
      },
    });

    this.addOutputs({
      url: site.url,
    });
  }
}
