export function Footer() {
  return (
    <div className="bg-base-200 text-base-content">
      <div className="max-w-6xl px-4 mx-auto my-16">
        <div className="flex flex-col text-center md:flex-row md:text-left">
          <div className="mb-8 md:mb-0">
            <p>
              Handcrafted with{' '}
              <span role="img" aria-label="Heart emoji">
                ❤️
              </span>{' '}
              in London, UK.
            </p>
            <p>Copyright © 2022 All rights reserved by Sourcier Ltd.</p>
          </div>
          <div className="md:ml-auto md:text-right">
            <p>
              Projects on{' '}
              <a
                href="https://github.com/sourcier"
                target="_blank"
                rel="noopener noreferrer"
                className="underline link-accent"
              >
                Github
              </a>
            </p>
            <p>
              Follow on{' '}
              <a
                href="https://twitter.com/sourcier"
                target="_blank"
                rel="noopener noreferrer"
                className="underline link-accent"
              >
                Twitter
              </a>
            </p>
            <p>
              Contact via{' '}
              <a
                href="mailto:roger@sourcier.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="underline link-accent"
              >
                Email
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
