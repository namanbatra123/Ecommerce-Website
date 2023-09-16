import Image from "next/image"
import Logo from "../styles/Images/amazon-logo.svg"
import { Search, MenuIcon, ShoppingCart } from "../Icons"

function Header() {
  return (
    <header>

      {/*  Top nav */}
      <div className="flex items-center bg-amazon_blue p-5 flex-grow py-2 gap-5 ">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image src={Logo} height={40} width={150} objectFit="contain" className="cursor-pointer" />
        </div>

        {/* SearchBar */}
        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500 w-full">
          <input type="text" className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4" />
          <Search className="h-12 p-4" />
        </div>

        {/* Right */}
        <div className="text-white font-sans flex items-center text-xs space-x-6 mx-6 whitespace-nowrap flex-grow">
          <div className="link">
            <p>Hello, Naman Batra</p>
            <p className="font-extrabold md:text-sm">Account & Lists</p>
          </div>

          <div className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>

          <div className="flex items-center link relative">
            <span className="absolute top-[-1px] right-0 md:right-5 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">12</span>
            <ShoppingCart className="h-10" />
            <p className="hidden md:inline font-extrabold md:text-sm mt-3">Cart</p>
          </div>
        </div>
      </div>


      {/* Bottom nav */}
      <div className="flex items-center p-2 bg-amazon_blue-light text-white text-sm justify-between font-medium px-5">
        <p className="link flex items-center">
          <MenuIcon className="h-6 mr-1"/>
          All
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
  )
}

export default Header