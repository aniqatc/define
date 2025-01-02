import { Search } from 'lucide-react';
import { useState } from 'react';

function SearchInput({ onSearch }) {
  const [word, setWord] = useState('');

  function handleSearch(event) {
    event.preventDefault();
    if (word.trim()) {
      onSearch(word);
      setWord('');
    }
  }

  return (
    <form className="w-full flex items-center gap-2" onSubmit={handleSearch}>
      <input
        type="text"
        className="w-full h-full px-2 py-1 rounded-md
                    bg-white border border-gray-200 shadow-sm
                    placeholder:text-sm
                    dark:bg-neutral-900 dark:border-neutral-700 dark:text-gray-300
                    focus:outline-none focus:ring-1 focus:ring-slate-300
                    dark:focus:ring-slate-500 forest:focus:ring-slate-600
                    forest:bg-neutral-900 forest:border-neutral-800 forest:text-gray-300"
        placeholder="Type a word to define..."
        value={word}
        onChange={(event) => setWord(event.target.value)}
      />
      <button
        type="submit"
        className="px-3 py-1 h-full rounded-md
                    bg-white border border-gray-200 shadow-sm
                    dark:bg-neutral-800 dark:border-gray-700 dark:text-gray-200
                    flex items-center gap-2
                    text-sm text-slate-600
                    hover:bg-gray-50
                    dark:hover:bg-neutral-900
                    transition-colors
                    focus:outline-none focus:ring-1 focus:ring-slate-300 dark:focus:ring-slate-500
                    forest:focus:ring-slate-600
                    forest:bg-black forest:border-zinc-800 forest:text-green-200
                    forest:hover:bg-[#010a05] forest:hover:border-green-950"
      >
        Search
        <Search strokeWidth={1.6} size={18} />
      </button>
    </form>
  );
}

export default SearchInput;
