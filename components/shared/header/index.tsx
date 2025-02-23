import { APP_NAME } from "@/lib/constants";
import Link from "next/link";
import Search from "./search";
import Menu from "./menu";
// import { Button } from "@/components/ui/button";
// import { MenuIcon } from "lucide-react";
import data from "@/lib/data";
import Sidebar from "./sidebar";
import { getAllCategories } from "@/lib/actions/product.actions";


const categories = await getAllCategories()
export default function Header(){
    return(
        <header className=" text-black">
            <div className="px-2">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <Link href='/' className="flex items-center header-button font-bold text-primary text-2xl m-1 ">
                            {APP_NAME}
                        </Link>
                    </div>
                    <div className="hidden md:block flex-1 max-w-xl">
                        <Search/>
                    </div>
                    <Menu/>
                </div>
                <div className="md:hidden block py-2">
                    <Search/>
                </div>
            </div>
            <div className="border-t border-gray-300 mx-3"></div>
            <div className="flex items-center px-3 mb-[1px] ">
                {/* <Button variant='ghost' className=" header-button flex items-center gap-1 text-base [&_svg]:size-6 hover:bg-primary hover:text-white  hover:rounded-md">
                    <MenuIcon/>
                    All
                </Button> */}
                
                <Sidebar categories={categories} />
                <div className="flex items-center flex-wrap gap-3 overflow-hidden max-h-[42px]">
                    {data.headerMenus.map((menu)=>(
                        <Link href={menu.href} key={menu.href} className='header-button !p-2 hover:bg-primary hover:text-white transition-colors duration-500 ease-in-out  hover:rounded-md'>
                            {menu.name}
                        </Link>
                    ))}
                </div>
            </div>
        </header>
    )
}