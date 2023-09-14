import Image from "next/Image"
import Logo from "../styles/Images/amazon-logo.svg"

function Header() {
  return (
    <header>

        {/*  Top nav */}
        <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2 ">
            <div>
                <Image src= {Logo} objectFit="contain" className="cursor-pointer" />
            </div>
        </div>

        {/* Bottom nav */}
        <div>

        </div>
    </header>
  )
}

export default Header