import { Hero } from '@sourcier/ui-components';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';

export const IndexPage = () => {
  return (
    <Layout>
      <Hero
        copy="I'm making this by following the Gatsby Tutorial"
        heading="👋 Hello, world!"
      />
    </Layout>
  );
};

export default IndexPage;
