"use client";
import { useState } from "react";
// import abstractlyLogo from "../../public/abstractly-logo.svg";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button"
import IconButton from "./icon_Button";
import TextInput from "./text_Input";
import { RiCloseLine, RiMenuLine , RiQuestionLine , RiSearchLine} from "@remixicon/react";

const pages = [
  { id: 0, page: "Elections", href: "/" },
  { id: 1, page: "Markets", href: "/features/grid" },
];

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    setShowMenu(true);
  };
  const closeMenu = () => {
    setShowMenu(false);
  };


   
  
  function NavMenu() {
    return (
      <nav
        aria-label="Site navigation panel z-[999]"
        className="xm:block   lg:flex flex-col xl:gap-x-24 lg:gap-x-8 lg:flex-row mx-auto items-center pb-4 pt-8 md:px-2 lg:p-0 lg:m-0 max-w-screen md:max-w-screen-md lg:max-w-full lg:grow"
        role="navigation"
      >
         <div className="block md:flex  text-center lg:gap-x-14 xl:gap-x-24 mx-auto">
        <ul className="block md:flex flex-col lg:flex-row lg:items-center gap-y-2 lg:gap-x-8">
          {pages.map(({ id, page, href }) => (
            <li className="py-2 px-3 lg:p-0 lg:text-xs xl:text-sm" key={id}>
              <Link
                className="link--xl link--secondary font-custom"
                 href={`${href}`}
              >
                {page}
                </Link>
            </li>
          ))}

      
        </ul>
     {!showMenu &&   <TextInput 
           IconRight={RiSearchLine}
           placeholder="Search"
           type="text"
          //  classess="grow"
          />
        }
        </div>
       
        <div className="flex flex-col md:flex-row lg:mt-0 mt-1 lg:mt-0 items-center gap-x-8 ml-[auto]  lg:text-center lg:text-xs xl:text-sm">
          <Button
            classes=""
            text="Log in"
            href="/features/side-image-right"
            onClick={closeMenu}
          />
          <Button
            classes="bg-buttonBg-default lg:text-center lg:text-xs xl:text-sm px-6 h-[60px] flex items-center justify-center font-semibold rounded-[15px] shadow-xl"
            text="Start Now – It’s Free"
            href="/pricing/tiers"
            onClick={closeMenu}
          />
        </div>
        {showMenu &&   <TextInput 
           IconRight={RiSearchLine}
           placeholder="Search"
           type="text"
           classess="mx-auto"
          />
        }
      </nav>
    );
  }

  return (
    <header className="sticky z-10 top-0 bg-white  w-full border-b-[1.5px]">
      <div className="h-[106px] mx-auto flex flex-row items-center w-11/12 px-4 md:px-8 lg:px-8 xl:gap-x-24 lg:gap-x-14 ">
        <div className="flex flex-col">
          <Link className="flex flex-row items-center" href="/">
            {/* <Image
              src={abstractlyLogo}
              height={32}
              width={32}
              alt="Abstractly logo"
            /> */}
            <span className="text-neutral-900 font-bold px-1  italic -tracking-widest text-[46px]">
               balshi
            </span>
          </Link>
        </div>
        
        {showMenu ? (
          <IconButton
            Icon={RiCloseLine}
            onClick={closeMenu}
            ariaExpanded={!!showMenu ? true : false}
            ariaLabel="Close site navigation panel"
            classes="ml-auto text-neutral-600 lg:hidden"
          />
        ) : (
          <IconButton
            Icon={RiMenuLine}
            onClick={openMenu}
            ariaExpanded={!!showMenu ? true : false}
            ariaLabel="Expand site navigation panel"
            classes="ml-auto text-neutral-600 lg:hidden"
          />
        )}
        <div className="hidden lg:flex lg:grow">
          <NavMenu />


        </div>
      </div>
      <div
        className={`w-full relative h-screen absolute shadow-md bg-white left-0 overflow-hidden transition-max-height duration-150 ease-in-out ${showMenu ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}
      >
        <NavMenu />
      </div>
    </header>
  );
}
