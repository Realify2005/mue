'use client';
import React, { useEffect, useState } from 'react';
import { NavItem } from './NavItem';

const SidebarNav: React.FC<{ items: NavItem[] }> = ({ items }) => {
  const [activeId, setActiveId] = useState(items[0].id);
  useEffect(() => {
    const onScroll = () => {
      for (let i = items.length - 1; i >= 0; i--) {
        const el = document.getElementById(items[i].id);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveId(items[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [items]);

  return (
    <nav className="pl-4">
      <ul className="space-y-4">
        {items.map((item, idx) => (
          <React.Fragment key={item.id}>
            <li className="flex items-center">
              <span className={activeId === item.id ? 'text-MUE-sky-blue mr-1.5' : 'invisible mr-1.5'}>▶</span>
              <a
                href={`#${item.id}`}
                className={
                  activeId === item.id
                    ? 'text-MUE-white font-bold text-[18px] underline underline-offset-4 decoration-MUE-sky-blue block'
                    : 'text-MUE-grey text-sm hover:text-MUE-sky-blue hover:text-base block'
                }
              >
                {item.label}
              </a>
            </li>

            {idx === 0 && (
              <li className="text-MUE-white font-medium text-[16px] pl-5">Alumni</li>
            )}
          </React.Fragment>
        ))}
      </ul>
    </nav>
  );
};

export default SidebarNav;