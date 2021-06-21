
import {  BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon} from "@heroicons/react/outline";
import Header_item from "./Header_item";
import Image from "next/image"


function Header() {
    return (
     
<header className="flex flex-grow 
tracking-widest px-5 items-center space-x-5  justify-evenly sm:flex-row m-5 
 h-auto bg-[#F2E9E4]  md:auto-rows-max ml-2 mr-2">
    
            <div className="flex flex-grow justify-between items-center
             w-40   ">
           <Image className="object-contain" src="/social icons.svg" alt="me" width={100}
            height={100} />
            <Header_item title='Home' />
            <Header_item title='About' />
            <Header_item title='Services' />
           <p className="text-[#000000] font-bold text-xl  ">OLIVA GRACE</p>
            <Header_item title='Contact' />
            <Header_item title='Search' />
            <SearchIcon className="h-5 w-5 cursor-pointer 
           hover:animate-bounce"/>
         
           
            </div>
</header>
    )
}

export default Header;
