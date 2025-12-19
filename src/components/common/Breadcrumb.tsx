import Link from "next/link";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="container py-4">
      <ol className="flex items-center gap-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            {item.href ? (
              <Link 
                href={item.href} 
                className="font-normal text-md text-primary-dark hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="font-normal text-md text-primary-dark">{item.label}</span>
            )}
            {index < items.length - 1 && (
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="7" 
                height="12" 
                viewBox="0 0 7 12" 
                fill="none"
                className="text-secondary"
              >
                <path 
                  d="M0.530273 0.530334L5.53027 5.53033L0.530273 10.5303" 
                  stroke="currentColor" 
                  strokeWidth="1.5"
                />
              </svg>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default Breadcrumb;
