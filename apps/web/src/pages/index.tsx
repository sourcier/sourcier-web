import { HeroCentered, Prose } from '@sourcier/ui-components';
import Layout from '../components/layout';

export const IndexPage = () => {
  return (
    <Layout>
      <div className="max-w-6xl px-4 mx-auto my-8">
        <HeroCentered
          copy="I'm Roger. I build meaningful digital experiences."
          heading="👋 hey there!"
          fullHeight
        />
        <Prose>
          <p>
            I love making sites and apps that are memorable and truly joyful to
            use. My goal with this blog is to document and share the things I
            learn with every new project.
          </p>
          <p>
            Need to get in touch with me? Reach out on{' '}
            <a
              href="https://twitter.com/sourcier"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>{' '}
            or by{' '}
            <a
              href="mailto:roger@sourcier.uk"
              target="_blank"
              rel="noopener noreferrer"
            >
              email
            </a>
            .
          </p>
        </Prose>
      </div>
    </Layout>
  );
};

export default IndexPage;
