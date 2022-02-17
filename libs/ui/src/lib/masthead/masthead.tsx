import React, { FC, Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import clsx from 'clsx';

import Logo from '../logo/logo';

export interface Navigation {
  name: string;
  description: string;
  href: string;
  icon?: React.ReactNode;
}

export interface MastheadProps {
  navigation: Navigation[];
}

export const Masthead: FC<MastheadProps> = ({ navigation }) => {
  return (
    <div className="bg-white">
      <header>
        {/* md and above */}
        <Popover className="relative bg-white">
          <div className="flex items-center justify-between px-4 py-6 mx-auto max-w-7xl sm:px-6 md:space-x-10 lg:px-8">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="/">
                <span className="sr-only">Workflow</span>
                <Logo />
              </a>
            </div>
            <div className="-my-2 -mr-2 md:hidden">
              <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="w-6 h-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <nav className="hidden space-x-10 md:flex">
              {navigation.map(({ name, href, description }) => (
                <a
                  key={name}
                  href={href}
                  title={description}
                  className="text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  {name}
                </a>
              ))}
            </nav>
          </div>

          {/* sm */}
          <Transition
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="absolute inset-x-0 top-0 z-30 p-2 transition origin-top-right transform md:hidden"
            >
              <div className="bg-white divide-y-2 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-gray-50">
                <div className="px-5 pt-5 pb-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <a href="/">
                        <Logo />
                      </a>
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close menu</span>
                        <XIcon className="w-6 h-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                <div className="px-5 py-6">
                  <div className="grid grid-cols-1 gap-4">
                    {navigation.map(({ name, description, href, icon }) => {
                      return (
                        <a
                          key={name}
                          href={href}
                          title={description}
                          className="flex items-center p-3 -m-3 rounded-lg hover:bg-gray-50"
                        >
                          {icon}
                          <div
                            className={clsx([
                              'text-base font-medium text-gray-900',
                              { 'ml-4 ': icon },
                            ])}
                          >
                            {name}
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </header>
    </div>
  );
};

export default Masthead;
