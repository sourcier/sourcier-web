export interface FooterProps {
  copyright: string;
}

export function Footer({ copyright }: FooterProps) {
  return (
    <footer className="p-16 text-center bg-grey-100 text-grey-100-contrast">
      <div>
        <p>{copyright}</p>
      </div>
    </footer>
  );
}

export default Footer;
