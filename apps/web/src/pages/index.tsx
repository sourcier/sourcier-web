import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout';

export const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </Layout>
  );
};

export default IndexPage;
