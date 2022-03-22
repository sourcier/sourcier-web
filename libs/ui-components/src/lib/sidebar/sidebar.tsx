export interface SidebarProps {
  nav: {
    text: string;
    href: string;
  }[];
  brand: string;
}

export const Sidebar = ({ nav, brand }: SidebarProps) => (
  <div className="drawer-side">
    <label htmlFor="my-drawer" className="drawer-overlay"></label>
    <aside className="w-80 bg-base-100">
      <ul className="p-4 overflow-y-auto menu text-base-content">
        <li>
          <a href="/">{brand}</a>
        </li>
        {nav.map(({ text, href }, idx) => (
          <li key={idx}>
            <a href={href}>{text}</a>
          </li>
        ))}
      </ul>
    </aside>
  </div>
);

export default Sidebar;
