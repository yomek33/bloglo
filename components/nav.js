import Link from "next/link";
import React from "react";
import Block from "./block";
export default function Nav() {
  return (
    <>
      <Block bordercolor="border-pink-100">
        <nav>
          <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div className=" w-auto static block justify-start">
              <Link
                className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap"
                href="/"
              >
                <span className=" bg-gradient-to-r from-blue to-blue dark:from-purple-800 dark:to-purple-900 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-300 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]">
                  Yomek33&apos;s Blog
                </span>
              </Link>
            </div>
            <div className={"flex flex-grow items-center "}>
              <ul className="flex flex-row list-none ml-auto">
                <li className="nav-item">
                  <Link
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75"
                    href="/about"
                  >
                    <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i>
                    <span className="ml-2  bg-gradient-to-r from-blue to-blue dark:from-purple-800 dark:to-purple-900 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-300 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]">
                      About
                    </span>
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
                {/* <li className="nav-item">
                  <Link
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75"
                    href="#pablo"
                  >
                    <i className="fab fa-pinterest text-lg leading-lg opacity-75"></i>
                    <span className="ml-2  bg-gradient-to-r from-blue to-blue dark:from-purple-800 dark:to-purple-900 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-300 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]">
                      Post
                    </span>
                  </Link>
                </li> */}
              </ul>
            </div>
          </div>
        </nav>
      </Block>
    </>
  );
}
