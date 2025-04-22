import { useState } from 'react'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { FaUserDoctor } from "react-icons/fa6"
import { specialtiesMap } from '../data/specialties'
import type { Specialty } from '../data/specialties'
import { specialtyAtom } from '../atoms/specialty'
import { useAtom } from 'jotai'
import { authAtom } from '../atoms/auth'
import { availableAtom } from '../atoms/available'
import { useNavigate } from 'react-router-dom'

const navigation = [
  { name: 'Doctor Directory', href: '/', current: true },
  { name: 'Appointments Summary', href: '/appointment', current: false },
]

function classNames(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ')
}

export function Navbar() {
  const [, setSpecialty] = useAtom(specialtyAtom)
  const [, setAuth] = useAtom(authAtom)
  const [available, setAvailable] = useAtom(availableAtom)
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const navigate = useNavigate()


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
            <div className="inline-flex items-center mr-10">
              <label
                className="relative flex cursor-pointer items-center rounded-full p-3"
                htmlFor="ripple-on"
                data-ripple-dark="true"
              >
                <input
                  id="ripple-on"
                  type="checkbox"
                  checked={available}
                  className="peer relative h-5 w-5 cursor-pointer appearance-none rounded border border-slate-300 shadow hover:shadow-md transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-slate-400 before:opacity-0 before:transition-opacity checked:border-slate-800 checked:bg-slate-800 checked:before:bg-slate-400 hover:before:opacity-10"
                  onChange={(e) => {
                    if (e.target.checked) {
                      console.log("Checkbox activado ✅")
                      setAvailable(true)
                    } else {
                      console.log("Checkbox desactivado ❌")
                      setAvailable(false)
                    }
                  }}
                />
                <span className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="1"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
              </label>
              <label className="cursor-pointer text-white text-sm"
                htmlFor="ripple-on"
              >
                Available
              </label>
            </div>
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
                            setSpecialty(specialty)
                            navigate('/')
                          }}
                          className="cursor-pointer block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
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
                  onClick={() => navigate(item.href)}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'rounded-md px-3 py-2 text-sm font-medium cursor-pointer'
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
                    onClick={() => {
                      handleMenuItemClick()
                      setAuth(false)
                    }}
                    className="cursor-pointer block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
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
          <div className="inline-flex items-center mr-10">
            <label
              className="relative flex cursor-pointer items-center rounded-full p-3"
              htmlFor="ripple-on"
              data-ripple-dark="true"
            >
              <input
                id="ripple-on"
                type="checkbox"
                checked={available}
                className="peer relative h-5 w-5 cursor-pointer appearance-none rounded border border-slate-300 shadow hover:shadow-md transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-slate-400 before:opacity-0 before:transition-opacity checked:border-slate-800 checked:bg-slate-800 checked:before:bg-slate-400 hover:before:opacity-10"
                onChange={(e) => {
                  if (e.target.checked) {
                    console.log("Checkbox activado ✅")
                    setAvailable(true)
                  } else {
                    console.log("Checkbox desactivado ❌")
                    setAvailable(false)
                  }
                }}
              />
              <span className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3.5 w-3.5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            </label>
            <label className="cursor-pointer text-white text-sm"
              htmlFor="ripple-on"
            >
              Available
            </label>
          </div>
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
                          setSpecialty(specialty)
                          navigate('/')
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
                onClick={() => navigate(item.href)}
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
