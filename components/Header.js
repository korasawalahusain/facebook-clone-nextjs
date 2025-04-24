import Image from "next/image";
import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import {
  BellIcon,
  HomeIcon,
  ChatIcon,
  ChevronDownIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import HeaderIcon from "./HeaderIcon";
import { signOut } from "next-auth/client";

const Header = ({ userImage }) => {
  return (
    <div className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
      {/* Left */}
      <div className="flex items-center ml-2 lg:ml-0">
        <Image
          src="https://links.papareact.com/5me"
          height={40}
          width={40}
          layout="fixed"
        />
        <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
          <SearchIcon className="h-4 text-gray-600" />
          <input
            className="hidden lg:inline-flex items-center outline-none placeholder-gray-500 bg-transparent ml-2 flex-shrink"
            type="text"
            placeholder="Search Facebook"
          />
        </div>
      </div>
      {/* Center */}
      <div className="flex justify-center flex-grow">
        <div className="flex space-x-2 md:space-x-6">
          <HeaderIcon active={true} Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>
      {/* Right */}
      <div className="flex items-center justify-end md:space-x-2">
        <Image
          onClick={signOut}
          src={userImage}
          height={40}
          width={40}
          layout="fixed"
          className="rounded-full cursor-pointer"
        />
        <p className="hidden text-sm xl:inline-flex whitespace-nowrap pr-3 font-semibold">
          Husain Korasawala
        </p>
        <ViewGridIcon className="icon" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <ChevronDownIcon className="icon" />
      </div>
    </div>
  );
};

export default Header;
