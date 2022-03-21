export interface FooterProps {
  copyright: string;
}

export function Footer({ copyright }: FooterProps) {
  return (
    <footer className="p-16 text-center bg-gray-100 text-gray-100-contrast dark:bg-gray-700 dark:text-gray-700-contrast">
      <div>
        <p>{copyright}</p>
      </div>
    </footer>
  );
}

export default Footer;
