import { useState } from "react";
import Link from "next/link";
import React from "react";
import Block from "./block";
export default function Nav() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <>
      <Block bordercolor="border-pink">
        <nav>
          <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
              <Link
                className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap"
                href="/"
              >
                Yomek33s Blog
              </Link>
              <button
                className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                type="button"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <i className="fas fa-bars"></i>
              </button>
            </div>
            <div
              className={
                "lg:flex flex-grow items-center hidden" +
                (navbarOpen ? " flex" : " hidden")
              }
              id="example-navbar-danger"
            >
              <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                <li className="nav-item">
                  <Link
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75"
                    href="/About"
                  >
                    <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i>
                    <span className="ml-2">About</span>
                  </Link>
                </li>
                {/* <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#pablo"
                >
                  <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2">Product</span>
                </a>
              </li> */}
                <li className="nav-item">
                  <Link
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75"
                    href="#pablo"
                  >
                    <i className="fab fa-pinterest text-lg leading-lg opacity-75"></i>
                    <span className="ml-2">Post</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </Block>
    </>
  );
}
