import { HeroCentered } from '@sourcier/ui-components';
import Layout from '../components/layout';

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <HeroCentered
        heading="👨‍💻 Hi there!"
        copy="I'm the proud creator of this site, which I built with Gatsby."
        fullHeight
      />
    </Layout>
  );
};

export default AboutPage;
