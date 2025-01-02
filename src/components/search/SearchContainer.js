import SearchInput from './SearchInput';
import Suggestions from './Suggestions';

function SearchContainer({ onSearch }) {
  return (
    <div
      className="transition-all duration-100 bg-transparent w-full my-1 px-3 py-3 border rounded-md
        shadow-sm dark:border-neutral-700 ocean:border-blue-200 forest:border-neutral-800 forest:bg-black"
    >
      <SearchInput onSearch={onSearch} />
      <Suggestions onSuggest={onSearch} />
    </div>
  );
}

export default SearchContainer;
