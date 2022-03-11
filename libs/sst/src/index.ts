import GatsbyStack from './lib/GatsbyStack';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function main(app: any) {
  new GatsbyStack(app, 'gatsby-stack');
}
