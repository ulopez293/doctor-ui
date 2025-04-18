import { useState } from 'react'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { FaUserDoctor } from "react-icons/fa6"
import { specialtiesMap } from '../data/specialties'
import type { Specialty } from '../data/specialties'

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
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const handleMenuItemClick = () => {
    setMenuOpen(false)
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
                <div key={item.name} className="relative">
                  <button
                    type="button"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'cursor-pointer rounded-md px-3 py-2 text-sm font-medium'
                    )}
                  >
                    {item.name}
                  </button>
                  {dropdownOpen && (
                    <div className="absolute left-0 z-10 mt-2 w-48 rounded-md bg-white shadow-lg ring-1 ring-black/5">
                      {Array.from(specialtiesMap.values()).map((specialty: Specialty) => (
                        <button
                          key={specialty}
                          type="button"
                          onClick={() => {
                            handleMenuItemClick()
                            setDropdownOpen(false)
                          }}
                          className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        >
                          {specialty}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
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
            <div className="relative">
              <button
                type="button"
                onClick={() => setMenuOpen(!menuOpen)}
                className="cursor-pointer flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white"
              >
                <span className="sr-only">Open user menu</span>
                <img
                  className="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                  alt=""
                />
              </button>
              {menuOpen && (
                <div className="absolute right-0 z-10 mt-2 w-48 rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5">
                  <button
                    type="button"
                    onClick={handleMenuItemClick}
                    className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Your Profile
                  </button>
                  <button
                    type="button"
                    onClick={handleMenuItemClick}
                    className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Settings
                  </button>
                  <button
                    type="button"
                    onClick={handleMenuItemClick}
                    className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Sign out
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile nav panel */}
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) =>
            item.name === 'Doctor Directory' ? (
              <div key={item.name} className="relative">
                <button
                  type="button"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="block w-full rounded-md px-3 py-2 text-left text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  {item.name}
                </button>
                {dropdownOpen && (
                  <div className="mt-1 space-y-1">
                    {Array.from(specialtiesMap.values()).map((specialty: Specialty) => (
                      <button
                        key={specialty}
                        type="button"
                        onClick={() => {
                          handleMenuItemClick()
                          setDropdownOpen(false)
                        }}
                        className="block w-full px-4 py-2 text-left text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                      >
                        {specialty}
                      </button>
                    ))}
                  </div>
                )}
              </div>
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
