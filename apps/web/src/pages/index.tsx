import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';

export const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage alt="Random image" src="../images/logo.svg" />
    </Layout>
  );
};

export default IndexPage;
