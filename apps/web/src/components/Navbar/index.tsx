import { useState } from 'react';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'skills', href: '#skills' },
  { label: 'experiência', href: '#experiencia' },
  { label: 'projetos', href: '#projetos' },
  { label: 'playground', href: '#playground' },
  { label: 'cursos', href: '#cursos' },
  { label: 'login', href: '#login' }
];

export const Navbar = () => {
  const [activeItem, setActiveItem] = useState('experiência');

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-7 py-4.5 bg-[rgba(10,12,15,0.92)] border-b border-border">
      {/* Brand / Logo */}
      <h2 className="font-mono font-medium text-[14px] text-text-main cursor-pointer">
        mauricioamaraldev
      </h2>

      {/* Navigation Links */}
      <ul className="flex items-center gap-6.5 text-[13px]">
        {navItems.map((item) => {
          const isActive = activeItem === item.label;

          return (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setActiveItem(item.label)}
                className={`relative inline-block pb-1.5 transition-colors duration-200 cursor-pointer
                  after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-current
                  after:transition-transform after:duration-200 after:ease-out
                  ${isActive
                    ? 'text-text-main font-semibold after:scale-x-100'
                    : 'text-text-muted hover:text-text-muted after:scale-x-0 hover:after:scale-x-100'
                  }
                `}
              >
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
