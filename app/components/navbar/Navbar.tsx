'use client'
import { SafeUser } from "@/app/types";

import Categories from "./Categories";
import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";
import Regions from "./RegionSelector";
import Button from "../Button";
import { FcGoogle } from "react-icons/fc";
import { useCallback } from "react";

interface NavbarProps {
  currentUser?: SafeUser | null;
}

const Navbar: React.FC<NavbarProps> = ({
  currentUser,
}) => {
  const handleClick = useCallback(() => {
    return(console.log('yippr'))
  }, [])

  return ( 
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div
        className="
          py-4 
          border-b-[1px]
        "
      >
      <Container>
        <div 
          className="
            flex 
            flex-row 
            items-center 
            justify-between
            gap-3
            md:gap-0
          "
        >
          <Logo />
          <Search />
          <UserMenu currentUser={currentUser} />
        </div>
      </Container>
      </div>
        <div className="flex">
          <div className="w-[25rem] align-middle p-4">
            <div className="bg-red-700 text-white ml-2 p-2">
              <p className="text-xl">Where would you like to search ?</p>
              <p>Please select a region</p>
            </div>
          </div>
        <Regions />
      </div>
    </div>
  );
}


export default Navbar;