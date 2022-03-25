import { VscFolder, VscFile } from 'react-icons/vsc';

export interface BreadcrumbsProps {
  path: string;
  leafRewrite?: { pattern: string; replacement: string };
  leafAsFolder?: boolean;
}

export function Breadcrumbs({ path, leafAsFolder }: BreadcrumbsProps) {
  const crumbs = path.split('/').filter(Boolean);
  const labels = crumbs.map((crumb) => crumb.replace(/-/g, ' '));
  const links = crumbs.map((crumb, index, array) =>
    array.slice(0, index + 1).join('/')
  );

  return (
    <div className="text-lg breadcrumbs">
      <ul>
        {crumbs.map((crumb, index, array) => {
          return (
            <li key={index}>
              <a className="capitalize" href={`/${links[index]}`}>
                {index === array.length - 1 && !leafAsFolder ? (
                  <VscFile className="mr-2" />
                ) : (
                  <VscFolder className="mr-2" />
                )}
                {labels[index]}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Breadcrumbs;
