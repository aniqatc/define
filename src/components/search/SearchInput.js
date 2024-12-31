import { Search } from 'lucide-react';

function SearchInput() {
    return (
        <form className="w-full flex items-center gap-2">
            <input type="text" className="w-full px-2 py-1 rounded-md bg-white border border-gray-200 shadow-sm placeholder:text-sm"
                   placeholder="Type a word to define..."/>
            <button type="submit" className="px-2 py-1 rounded-md border border-gray-200 shadow-sm flex justify-between items-center gap-1">
                Search <Search strokeWidth={2} size={20}/>
            </button>
        </form>
    )
}

export default SearchInput;