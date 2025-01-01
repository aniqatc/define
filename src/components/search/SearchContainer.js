import SearchInput from './SearchInput';
import Suggestions from './Suggestions';

function SearchContainer({ onSearch }) {
    return (
        <div className="w-full my-1 px-3 py-3 border rounded-md shadow-sm">
            <SearchInput onSearch={onSearch} />
            <Suggestions onSuggest={onSearch} />
        </div>
    )
}

export default SearchContainer;