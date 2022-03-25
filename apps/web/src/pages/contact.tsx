import { HeroCentered, Prose } from '@sourcier/ui-components';
import { VscTwitter, VscMail } from 'react-icons/vsc';
import Layout from '../components/layout';

export const IndexPage = () => {
  return (
    <Layout>
      <div className="max-w-6xl px-4 mx-auto my-8">
        <HeroCentered heading="🤙 say hey!" fullHeight />
        <Prose>
          <p>
            I enjoy connecting with others, drop me a message and let's talk!
          </p>
          <p>
            Social media is great for informal chats.
            <br />
            Email works best for in depth discussions.
          </p>

          <p>
            <VscMail className="inline-block mr-2" />
            <a
              href="mailto:roger@sourcier.uk"
              target="_blank"
              rel="noopener noreferrer"
            >
              roger@sourcer.uk
            </a>
            <br />
            <VscTwitter className="inline-block mr-2" />
            <a
              href="https://twitter.com/sourcier"
              target="_blank"
              rel="noopener noreferrer"
            >
              @sourcier
            </a>
          </p>
        </Prose>
      </div>
    </Layout>
  );
};

export default IndexPage;
