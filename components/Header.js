import Image from "next/image";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

import { Search, ShoppingCart, MenuIcon } from "../icons";
import { selectItems } from "../slices/basketSlice";

const Header = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const items = useSelector(selectItems);

  return (
    <header>
      <div className="flex items-center bg-amazon_blue p-1 flex-grow">
        <div
          onClick={() => router.push("/")}
          className="mt-2 flex items-center flex-grow sm:flex-grow-0"
        >
          <Image
            width={150}
            height={40}
            src="/amazon_PNG25.png"
            alt="amazon/logo"
            className="cursor-pointer p-4"
          />
        </div>
        <div className="hidden sm:flex items-center rounded-md h-10 flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
          <input
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
            type="text"
          />
          <Search className="h-12 p-4" />
        </div>
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div
            onClick={() => (session ? signOut() : signIn())}
            className="link"
          >
            <p>{session ? `Hello ${session?.user?.name}` : "Sign In"}</p>  
            <p className="font-extrabold md:text-sm">Account & List</p>
          </div>
          <div onClick={() => router.push("/orders")} className="link">
            <p>Return</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>
          <div
            onClick={() => router.push("/checkout")}
            className="link relative flex items-center"
          >
            <span className="absolute top-0 right-0 md:right-5 h-4 w-4 bg-yellow-400 text-center rounded-full font-bold text-black">
              {items.length}
            </span>
            <ShoppingCart className="h-10 text-white" />
            <p className="hidden md:inline mt-2 font-extrabold md:text-sm">
              Cart
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
        <p className="link flex items-center">
          <MenuIcon className="h-6 mr-1" /> All
        </p>
        <p className="link">Amazon miniTV</p>
        <p className="link">Sell</p>
        <p className="link">Gift Cards</p>
        <p className="link">Buy Again</p>
        <p className="link hidden xl:inline-flex">Baby</p>
        <p className="link hidden xl:inline-flex">Browsing History</p>
        <p className="link hidden xl:inline-flex">Subscribe & Save</p>
        <p className="link hidden xl:inline-flex">Grocery & Gourmet Foods</p>
        <p className="link hidden xl:inline-flex">Pet supplies</p>
        <p className="link hidden xl:inline-flex">Health,Household & Personal Care</p>
        <p className="link hidden xl:inline-flex">Toys & Games</p>
        <p className="link hidden xl:inline-flex">Coupons</p>
        <p className="link hidden xl:inline-flex">Gift Ideas</p>
      </div>
    </header>
  );
};

export default Header;
