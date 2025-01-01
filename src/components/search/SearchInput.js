import { Search } from 'lucide-react';

function SearchInput() {
    return (
        <form className="w-full flex items-center gap-2">
            <input
                type="text"
                className="w-full h-full px-2 py-1 rounded-md
                    bg-white border border-gray-200 shadow-sm
                    placeholder:text-sm
                    focus:outline-none focus:ring-1 focus:ring-slate-300"
                placeholder="Type a word to define..."
            />
            <button
                type="submit"
                className="px-3 py-1 h-full rounded-md
                    bg-white border border-gray-200 shadow-sm
                    flex items-center gap-2
                    text-sm text-slate-600
                    hover:bg-gray-50
                    transition-colors
                    focus:outline-none focus:ring-1 focus:ring-slate-300"
            >
                Search
                <Search strokeWidth={1.6} size={18}/>
            </button>
        </form>
    )
}

export default SearchInput;