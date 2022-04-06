export function Footer() {
  return (
    <>
      <footer className="p-10 footer bg-base-200 text-base-content">
        <div>
          <svg
            width="50"
            height="50"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            className="-rotate-6"
          >
            <rect width="512" height="512" rx="25" fill="#570DF8" />
            <path
              d="M354.336 141.152C352.288 144.736 350.069 147.381 347.68 149.088C345.461 150.624 342.645 151.392 339.232 151.392C335.648 151.392 331.723 150.112 327.456 147.552C323.36 144.821 318.411 141.835 312.608 138.592C306.805 135.349 299.979 132.448 292.128 129.888C284.448 127.157 275.317 125.792 264.736 125.792C255.179 125.792 246.816 126.987 239.648 129.376C232.48 131.595 226.421 134.752 221.472 138.848C216.693 142.944 213.109 147.893 210.72 153.696C208.331 159.328 207.136 165.557 207.136 172.384C207.136 181.088 209.525 188.341 214.304 194.144C219.253 199.947 225.739 204.896 233.76 208.992C241.781 213.088 250.912 216.757 261.152 220C271.392 223.243 281.888 226.741 292.64 230.496C303.392 234.08 313.888 238.347 324.128 243.296C334.368 248.075 343.499 254.219 351.52 261.728C359.541 269.067 365.941 278.112 370.72 288.864C375.669 299.616 378.144 312.672 378.144 328.032C378.144 344.757 375.243 360.459 369.44 375.136C363.808 389.643 355.445 402.357 344.352 413.28C333.429 424.032 320.032 432.565 304.16 438.88C288.288 445.024 270.112 448.096 249.632 448.096C237.856 448.096 226.251 446.901 214.816 444.512C203.381 442.293 192.373 439.051 181.792 434.784C171.381 430.517 161.568 425.397 152.352 419.424C143.136 413.451 134.944 406.795 127.776 399.456L148 366.432C149.707 364.043 151.925 362.08 154.656 360.544C157.387 358.837 160.288 357.984 163.36 357.984C167.627 357.984 172.235 359.776 177.184 363.36C182.133 366.773 188.021 370.613 194.848 374.88C201.675 379.147 209.611 383.072 218.656 386.656C227.872 390.069 238.88 391.776 251.68 391.776C271.307 391.776 286.496 387.168 297.248 377.952C308 368.565 313.376 355.168 313.376 337.76C313.376 328.032 310.901 320.096 305.952 313.952C301.173 307.808 294.773 302.688 286.752 298.592C278.731 294.325 269.6 290.741 259.36 287.84C249.12 284.939 238.709 281.781 228.128 278.368C217.547 274.955 207.136 270.859 196.896 266.08C186.656 261.301 177.525 255.072 169.504 247.392C161.483 239.712 154.997 230.155 150.048 218.72C145.269 207.115 142.88 192.864 142.88 175.968C142.88 162.485 145.525 149.344 150.816 136.544C156.277 123.744 164.128 112.395 174.368 102.496C184.608 92.5973 197.237 84.6613 212.256 78.688C227.275 72.7147 244.512 69.728 263.968 69.728C285.813 69.728 305.952 73.1413 324.384 79.968C342.816 86.7946 358.517 96.352 371.488 108.64L354.336 141.152Z"
              fill="white"
            />
          </svg>

          <p>
            Sourcier Ltd.
            <br />
            Building meaningful digital experiences since 2012.
          </p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a href="/blog" className="link link-hover">
            Blog
          </a>
          <a href="/contact-us" className="link link-hover">
            Contact
          </a>
        </div>
        <div>
          <span className="footer-title">Social</span>
          <p>
            Projects on{' '}
            <a
              href="https://github.com/sourcier"
              target="_blank"
              rel="noopener noreferrer"
              className="link-accent link-hover"
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
              className="link-accent link-hover"
            >
              Twitter
            </a>
          </p>
          <p>
            Connect on{' '}
            <a
              href="https://www.linkedin.com/in/roger-rajaratnam-3888021a4/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-accent link-hover"
            >
              LinkedIn
            </a>
          </p>
          <p>
            Contact via{' '}
            <a
              href="mailto:hello@sourcier.uk"
              className="link-accent link-hover"
            >
              Email
            </a>
          </p>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <p>
            <a href="/cookie-policy" className="link link-hover">
              Cookie Policy
            </a>
          </p>
          <p>
            <a href="/cookie-policy" className="link link-hover">
              Privacy Policy
            </a>
          </p>
          <p>
            <a href="/terms-and-conditions" className="link link-hover">
              Terms &amp; Conditions
            </a>
          </p>
        </div>
      </footer>
      <footer className="p-4 border-t footer footer-center bg-base-200 text-base-content border-base-300">
        <div>
          <p>
            Made with{' '}
            <span role="img" aria-label="Heart emoji">
              ❤️
            </span>{' '}
            in London, UK.
          </p>
          <p>Copyright © 2022 All rights reserved by Sourcier Ltd.</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
