export interface FooterProps {
  copyright: string;
}

export function Footer({ copyright }: FooterProps) {
  return (
    <footer className="p-16 footer footer-center bg-base-200 text-base-content">
      <div>
        <p>{copyright}</p>
      </div>
    </footer>
  );
}

export default Footer;
