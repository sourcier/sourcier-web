export interface FooterProps {
  copyright: string;
}

export function Footer({ copyright }: FooterProps) {
  return (
    <footer className="p-16 text-center border-t border-gray-100 bg-gray-50 dark:border-gray-800 text-gray-50-contrast dark:bg-gray-900 dark:text-gray-900-contrast">
      <div>
        <p>{copyright}</p>
      </div>
    </footer>
  );
}

export default Footer;
