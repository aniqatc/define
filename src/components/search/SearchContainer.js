import SearchInput from './SearchInput';
import Suggestions from './Suggestions';

function SearchContainer() {
    return (
        <div className="w-full my-1 px-3 py-3 border rounded-md shadow-sm">
            <SearchInput />
            <Suggestions />
        </div>
    )
}

export default SearchContainer;