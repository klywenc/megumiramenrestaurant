'use client'

import Link from 'next/link';
import { IoIosLogOut, IoIosLogIn } from "react-icons/io";
import { FaShoppingBasket } from "react-icons/fa";
import { useSession, signOut } from 'next-auth/react';
import { useCart } from '@/app/contexts/CartContext';

const Navigation = () => {
  const { data: session } = useSession();
  const { totalItemsInCart } = useCart();

  return (
      <nav className='bg-white md:dark:bg-gray-50 px-2 sm:px-48 shadow-lg'>
        <div className='max-w-screen-3xl flex flex-wrap items-center justify-between mx-auto p-1'>
          <Link
              href="/"
              className="px-2 py-4 text-4xl font-extrabold text-orange-600"
          >
            Megumi Ramen
          </Link>
          <ul className='text-base flex flex-col p-4 md:p-0 mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white md:dark:bg-gray-50'>
            <li>
              <Link
                  href="/menu"
                  className='block py-2 px-3 text-orange-600 rounded-sm md:text-orange-600 md:p-0 md:hover:text-red-600 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-red-700 after:transition-all after:duration-300 hover:after:w-full'
              >
                Menu
              </Link>
            </li>

            {(session?.user.role === 'employee' || session?.user.role === 'admin') && (
                <li>
                  <Link
                      href="/employeePanel"
                      className='block py-2 px-3 text-gray-600 rounded-sm md:hover:bg-transparent md:border-0 md:hover:text-orange-600 md:p-0 dark:text-gray-600 dark:hover:text-orange-600 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-orange-600 after:transition-all after:duration-300 hover:after:w-full'
                  >
                    Panel Pracownika
                  </Link>
                </li>
            )}

            {session?.user.role === 'admin' && (
                <li>
                  <Link
                      href="/adminPanel"
                      className='block py-2 px-3 text-gray-600 rounded-sm md:hover:bg-transparent md:border-0 md:hover:text-orange-600 md:p-0 dark:text-gray-600 dark:hover:text-orange-600 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-orange-600 after:transition-all after:duration-300 hover:after:w-full'
                  >
                    Panel Administratora
                  </Link>
                </li>
            )}

            {session && (
                <li>
                  <Link
                      href="/orders"
                      className='block py-2 px-3 text-gray-600 rounded-sm md:hover:bg-transparent md:border-0 md:hover:text-orange-600 md:p-0 dark:text-gray-600 dark:hover:text-orange-600 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-orange-600 after:transition-all after:duration-300 hover:after:w-full'
                  >
                    Twoje zamówienia
                  </Link>
                </li>
            )}

            <li className='relative flex items-center'>
              <Link
                  href="/cart"
                  className="flex items-center space-x-1 py-2 px-3 text-gray-600 rounded-sm
                   md:hover:bg-transparent md:border-0 md:hover:text-orange-600 md:p-0
                   dark:text-gray-600 dark:hover:text-orange-600 relative
                   after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5
                   after:bg-orange-600 after:transition-all after:duration-300
                   hover:after:w-full"
              >
                <FaShoppingBasket className="text-xl" />
                <span>Koszyk</span>
              </Link>
              {totalItemsInCart > 0 && (
                  <span className="absolute -top-2 -right-5 bg-orange-600 text-white text-xs font-bold px-2 py-1 rounded-full">
            {totalItemsInCart}
        </span>
              )}
            </li>

            {!session ? (
                <>
                  <li>
                    <Link
                        href="/login"
                        className="flex items-center space-x-1 py-2 px-3 text-gray-600 rounded-sm
                           md:hover:bg-transparent md:border-0 md:hover:text-orange-600 md:p-0
                           dark:text-gray-600 dark:hover:text-orange-600 relative
                           after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5
                           after:bg-orange-600 after:transition-all after:duration-300
                           hover:after:w-full"
                    >
                      <IoIosLogIn className="text-xl" />
                      <span>Zaloguj</span>
                    </Link>
                  </li>
                  <li>
                    <Link
                        href="/register"
                        className='block py-2 px-3 text-gray-600 rounded-sm md:hover:bg-transparent md:border-0 md:hover:text-orange-600 md:p-0 dark:text-gray-600 dark:hover:text-orange-600 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-orange-600 after:transition-all after:duration-300 hover:after:w-full'
                    >
                      Zarejestruj się
                    </Link>
                  </li>
                </>
            ) : (
                <li>
                  <button
                      onClick={() => signOut({callbackUrl: '/'})}
                      className="flex items-center space-x-1 py-2 px-3 text-gray-600 rounded-sm
                         md:hover:bg-transparent md:border-0 md:hover:text-orange-600 md:p-0
                         dark:text-gray-600 dark:hover:text-orange-600 relative
                         after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5
                         after:bg-orange-600 after:transition-all after:duration-300
                         hover:after:w-full"
                  >
                    <IoIosLogOut className="text-xl" />
                    <span>Wyloguj</span>
                  </button>
                </li>
            )}
          </ul>
        </div>
      </nav>
  );
};

export default Navigation;
