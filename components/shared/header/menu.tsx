import { ShoppingCartIcon, UserIcon } from "lucide-react";
import Link from "next/link";

export default function Menu(){
    return (
        <div className="flex justify-end">
            <nav className="flex gap-3 w-full items-center">
                <Link href='/cart' className="header-button place-items-center ">
                    <UserIcon className="h-6 w-6 text-primary"/>
                    <span className="font-semibold ">Sign in</span>
                </Link>
                <Link href='/cart' className="header-buton ">
                    <ShoppingCartIcon className="h-6 w-6 text-primary"/>
                    <span className="font-semibold ">Cart</span>
                </Link>
            </nav>
        </div>
    )
}