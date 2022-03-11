import * as sst from '@serverless-stack/resources';

export default class GatsbyStack extends sst.Stack {
  constructor(scope: sst.App, id: string, props?: sst.StackProps) {
    super(scope, id, props);

    const site = new sst.StaticSite(this, 'gatsby-site', {
      path: 'apps/web',
      buildOutput: 'public',
    });

    this.addOutputs({
      url: site.url,
    });
  }
}