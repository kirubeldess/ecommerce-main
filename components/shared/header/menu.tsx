// import { ShoppingCartIcon} from "lucide-react";
import Link from "next/link";
import CartButton from "./cart-button";

export default function Menu(){
    return (
        <div className="flex justify-end">
            <nav className="flex gap-3 w-full items-center">
                <Link href='/signin' className="header-button place-items-center ">
                    {/* <UserIcon className="h-6 w-6 text-primary"/> */}
                    <span className="font-semibold ">Hello, Sign in</span>
                </Link>
                {/* <Link href='/cart' className="header-buton ">
                    <ShoppingCartIcon className="h-6 w-6 text-primary"/>
                    <span className="font-semibold ">Cart</span>
                </Link> */}
                <CartButton/>
            </nav>
        </div>
    )
}