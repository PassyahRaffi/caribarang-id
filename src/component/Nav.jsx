import React from "react";
import "flowbite";
import logo from "../assets/logo-navbar.png";

export default function Nav() {
  return (
    <>
      <nav className="bg-white h-14 w-full shadow-xl">
        <div className="container flex justify-between mx-auto h-full items-center max-w-screen-xl px-7">
          <div className="flex h-full w-1/4">
            <div className="h-full flex items-center">
              <a href="https://caribarang.id/">
                <img src={logo} className="h-8" alt="Logo" />
              </a>
            </div>
            
          </div>
          <div className="flex justify-center items-center w-4/5 h-full mx-9">
            <ul className="flex w-full h-6 justify-center">
              <li className="">
                <a
                  href="/"
                  className="font-semibold mx-2 text-white bg-blue-700 md:bg-transparent md:text-blue-500 md:p-0 dark:text-white"
                >
                  Product 16888.com
                </a>
              </li>
              <li className="">
                <a
                  href="https://caribarang.id/?product=local"
                  className="font-semibold mx-2 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Produk Lokal Indonesia
                </a>
              </li>
            </ul>
          </div>

          <div className="flex w-2/4 h-full justify-end items-center">
            <a href="https://caribarang.id/signin">
              <button
                type="button"
                className="text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-5 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Sign in
              </button>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
