import { SafeUser } from "@/app/types";

import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";
import { FcGoogle } from "react-icons/fc";
import LgSearchBar from "./LgSearchBar";

interface NavbarProps {
  currentUser?: SafeUser | null;
}

const Navbar: React.FC<NavbarProps> = ({
  currentUser,
}) => {
  return ( 
    <div className="w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
          <Logo />
          <Search />
          <UserMenu currentUser={currentUser} />
        </div>
      </div>
        <LgSearchBar switchBox/>
    </div>
  );
}

export default Navbar;