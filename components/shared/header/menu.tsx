// import { ShoppingCartIcon} from "lucide-react";
// import Link from "next/link";
import CartButton from "./cart-button";
import UserButton from "./user-button";

export default function Menu({forAdmin = false} : {forAdmin?:boolean}){
    return (
        <div className="flex justify-end">
            <nav className="flex gap-3 w-full items-center">
                <UserButton />
                {forAdmin? null : <CartButton/>}
            </nav>
        </div>
    )
}