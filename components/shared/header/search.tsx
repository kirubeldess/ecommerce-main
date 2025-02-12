import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { SearchIcon } from "lucide-react"

const categories= ['Food and Groceries','Accessories', 'Cosmestics', 'Home Supplies','Kids']

export default function Search(){
    return (
        <form action="/search" method="GET" className="flex items-stretch h-10">
            <Select name="category">
                <SelectTrigger className="w-auto h-full dark:border-gray-200 bg-gray-100 text-black border-r rounded-r-none rounded-l-md">
                    <SelectValue placeholder='All'/>
                </SelectTrigger>
                <SelectContent position="popper">
                    <SelectItem value="all">All</SelectItem>
                    {categories.map((category)=>(
                        <SelectItem key={category} value={category}>
                            {category}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
            <Input className="flex-1 rounded-none dark:border-gray-200 bg-gray-100 text-black text-base h-full " 
                    placeholder={`Search site...`}
                    name="q"
                    type="search"
            />
            <button type="submit" className="bg-primary text-primary-foreground text-black rounded-s-none rounded-e-md h-full px-3 py-2     hover:bg-green-900 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-900 focus:ring-offset-2">
                    <SearchIcon className="w-6 h-6"/>
            </button>   
        </form>
    )
}