import * as sst from '@serverless-stack/resources';
import { Certificate } from 'aws-cdk-lib/aws-certificatemanager';

export default class GatsbyStack extends sst.Stack {
  constructor(scope: sst.App, id: string, props?: sst.StackProps) {
    super(scope, id, props);

    const site = new sst.StaticSite(this, 'gatsby-site', {
      path: 'apps/web',
      buildOutput: 'public',
      customDomain: {
        isExternalDomain: true,
        domainName:
          scope.stage === 'main' ? 'sourcier.uk' : `${scope.stage}.sourcier.uk`,
        domainAlias: scope.stage === 'prod' ? 'www.sourcier.uk' : undefined,
        certificate: Certificate.fromCertificateArn(
          this,
          'SourcierUkCert',
          'arn:aws:acm:eu-west-2:561381207426:certificate/d7f51f72-1e1c-4cc8-8631-3525a9aeddb2'
        ),
      },
    });

    this.addOutputs({
      url: site.url,
    });
  }
}
