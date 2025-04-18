import { useState } from 'react'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { FaUserDoctor } from "react-icons/fa6"

const navigation = [
  { name: 'Doctor Directory', href: '#', current: true },
  { name: 'Appointments Summary', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
]

function classNames(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ')
}

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleMenuItemClick = () => {
    setMenuOpen(false) // Cierra el menú cuando se hace clic en una opción
  }

  return (
    <Disclosure as="nav" className="bg-gray-800 py-3">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Mobile menu button */}
          <div className="flex sm:hidden">
            <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              {({ open }) => (
                <>
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                  )}
                </>
              )}
            </DisclosureButton>
          </div>

          {/* Logo */}
          <div className="flex items-center">
            <FaUserDoctor className="text-4xl text-white" />
          </div>

          {/* Desktop nav */}
          <div className="hidden sm:flex sm:space-x-4">
            {navigation.map((item) =>
              item.name === 'Doctor Directory' ? (
                <Menu as="div" key={item.name} className="relative">
                  <MenuButton
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'cursor-pointer rounded-md px-3 py-2 text-sm font-medium'
                    )}
                  >
                    {item.name}
                  </MenuButton>

                  <MenuItems className="absolute z-10 mt-2 w-48 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                    <MenuItem>
                      {({ active }) => (
                        <button
                          type='button'
                          onClick={handleMenuItemClick}
                          className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'cursor-pointer block px-4 py-2 text-sm'
                          )}
                        >
                          All Doctors
                        </button>
                      )}
                    </MenuItem>

                    <MenuItem>
                      {({ active }) => (
                        <button
                          type='button'
                          onClick={handleMenuItemClick}
                          className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'cursor-pointer block px-4 py-2 text-sm'
                          )}
                        >
                          By Specialty
                        </button>
                      )}
                    </MenuItem>

                    <MenuItem>
                      {({ active }) => (
                        <button
                          type='button'
                          onClick={handleMenuItemClick}
                          className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'cursor-pointer block px-4 py-2 text-sm'
                          )}
                        >
                          Available Now
                        </button>
                      )}
                    </MenuItem>
                  </MenuItems>
                </Menu>
              ) : (
                <button
                  type='button'
                  key={item.name}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'rounded-md px-3 py-2 text-sm font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </button>
              )
            )}
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            <button
              type="button"
              className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
            >
              <span className="sr-only">View notifications</span>
              <BellIcon className="h-6 w-6" aria-hidden="true" />
            </button>

            {/* Profile dropdown */}
            <Menu as="div" className="relative">
              <MenuButton
                onClick={() => setMenuOpen(!menuOpen)} // Controla la apertura/cierre del menú
                className="cursor-pointer flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white"
              >
                <span className="sr-only">Open user menu</span>
                <img
                  className="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                  alt=""
                />
              </MenuButton>

              <MenuItems
                className={`absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none ${menuOpen ? 'block' : 'hidden'}`}
              >
                <MenuItem>
                  {({ active }) => (
                    <button
                      type='button'
                      onClick={handleMenuItemClick} // Cierra el menú
                      className={classNames(
                        active ? 'bg-gray-100' : '',
                        'cursor-pointer block px-4 py-2 text-sm text-gray-700'
                      )}
                    >
                      Your Profile
                    </button>
                  )}
                </MenuItem>

                <MenuItem>
                  {({ active }) => (
                    <button
                      type='button'
                      onClick={handleMenuItemClick}
                      className={classNames(
                        active ? 'bg-gray-100' : '',
                        'cursor-pointer block px-4 py-2 text-sm text-gray-700'
                      )}
                    >
                      Settings
                    </button>
                  )}
                </MenuItem>

                <MenuItem>
                  {({ active }) => (
                    <button
                      type='button'
                      onClick={handleMenuItemClick}
                      className={classNames(
                        active ? 'bg-gray-100' : '',
                        'cursor-pointer block px-4 py-2 text-sm text-gray-700'
                      )}
                    >
                      Sign out
                    </button>
                  )}
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>

      {/* Mobile nav panel */}
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) =>
            item.name === 'Doctor Directory' ? (
              <Menu as="div" key={item.name} className="relative">
                <MenuButton
                  as="button"
                  className="cursor-pointer block w-full rounded-md px-3 py-2 text-left text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                  style={{ cursor: 'pointer' }}
                >
                  {item.name}
                </MenuButton>

                <MenuItems className="absolute left-2 z-10 mt-1 w-48 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                  <MenuItem>
                    {({ active }) => (
                      <button
                        type='button'
                        className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'}`}
                      >
                        All Doctors
                      </button>
                    )}
                  </MenuItem>

                  <MenuItem>
                    {({ active }) => (
                      <button
                        type='button'
                        className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'}`}
                      >
                        By Specialty
                      </button>
                    )}
                  </MenuItem>

                  <MenuItem>
                    {({ active }) => (
                      <button
                        type='button'
                        className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'}`}
                      >
                        Available Now
                      </button>
                    )}
                  </MenuItem>
                </MenuItems>
              </Menu>
            ) : (
              <button
                type='button'
                key={item.name}
                className={classNames(
                  item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                  'block rounded-md px-3 py-2 text-base font-medium'
                )}
              >
                {item.name}
              </button>
            )
          )}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
