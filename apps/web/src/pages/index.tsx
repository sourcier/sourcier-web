import { HeroCentered } from '@sourcier/ui-components';
import Layout from '../components/layout';

export const IndexPage = () => {
  return (
    <Layout>
      <HeroCentered
        copy="I'm making this by following the Gatsby Tutorial"
        heading="👋 Hello, world!"
        fullHeight
      />
    </Layout>
  );
};

export default IndexPage;
