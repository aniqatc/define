import SearchInput from './SearchInput';
import Suggestions from './Suggestions';

function SearchContainer() {
    return (
        <div className="w-full my-2 px-3 py-4 border rounded-md shadow-sm">
            <SearchInput />
            <Suggestions />
        </div>
    )
}

export default SearchContainer;