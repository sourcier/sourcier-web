import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';

export const IndexPage = () => {
  return (
    <Layout>
      <article>
        <p>I'm making this by following the Gatsby Tutorial.</p>
        <StaticImage alt="Random image" src="../images/logo.svg" />
      </article>
    </Layout>
  );
};

export default IndexPage;
