'use client';

import { useState } from 'react';
import {
  ArrowLeftFromLineIcon,
  ArrowRightFromLineIcon,
  PanelRightIcon,
  PlaySquareIcon,
  PuzzleIcon,
  User2,
} from 'lucide-react';
import Logo from '@/icon/Logo';
import LogoText from '@/icon/LogoText';
import NavList from './NavList';
import { Button } from '../ui/Button';
import { cn } from '@/lib/utils';

const Sidebar = () => {
  const [isExtended, setIsExtended] = useState(false);

  return (
    <nav
      className={cn('flex flex-col justify-between py-6 h-screen shadow-md', {
        'min-w-[240px]': isExtended,
      })}
    >
      <section className="flex flex-col gap-8 items-center w-full">
        <div className="flex items-center space-x-4">
          <Logo />
          {isExtended && <LogoText />}
        </div>
        <div className="w-full px-3 space-y-8">
          <NavList
            title={isExtended ? 'Main Pages' : 'Main'}
            list={[
              {
                label: isExtended ? 'Topic Posts' : '',
                icon: <PanelRightIcon />,
              },
              {
                label: isExtended ? 'Learning' : '',
                icon: <PlaySquareIcon />,
              },
            ]}
          />
          <NavList
            title={isExtended ? 'My Deck' : 'Deck'}
            list={[
              {
                label: isExtended ? 'Draft' : '',
                icon: <PanelRightIcon />,
              },
            ]}
          />
        </div>
      </section>

      <div className="flex flex-col gap-4 items-center">
        {isExtended && (
          <Button className="bg-[#5243C2] px-4 py-3 flex-1 text-lg hover:bg-white hover:text-gray-500" size="lg">
            <PuzzleIcon className=" mr-2" />
            <span>Chrome Extension</span>
          </Button>
        )}
        <div className="flex items-center px-4">
          <User2 />
          {isExtended && <span className="px-2 text-lg">My Profile</span>}
          <Button variant="ghost" size="icon" onClick={() => setIsExtended((prev) => !prev)}>
            {isExtended ? (
              <ArrowLeftFromLineIcon className="font-bold" />
            ) : (
              <ArrowRightFromLineIcon className="font-bold" />
            )}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
