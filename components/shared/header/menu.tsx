// import { ShoppingCartIcon} from "lucide-react";
// import Link from "next/link";
import CartButton from "./cart-button";
import UserButton from "./user-button";

export default function Menu(){
    return (
        <div className="flex justify-end">
            <nav className="flex gap-3 w-full items-center">
                {/* <Link href='/signin' className="header-button place-items-center ">
                    <span className="font-semibold ">Hello, Sign in</span>
                </Link> */}
                <UserButton />
                {/* <Link href='/cart' className="header-buton ">
                    <ShoppingCartIcon className="h-6 w-6 text-primary"/>
                    <span className="font-semibold ">Cart</span>
                </Link> */}
                <CartButton/>
            </nav>
        </div>
    )
}