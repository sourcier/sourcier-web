import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout';

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>
        Hi there! I'm the proud creator of this site, which I built with Gatsby.
      </p>
    </Layout>
  );
};

export default AboutPage;