import SearchBox from "./SearchBox";

function Nav({ searchText, onSearch }) {
  return (
    <nav className="bg-white">
      <div className="max-w-8xl mx-auto border-b-2 border-gray-200">
        <div className="flex sm:justify-center">
          <div className="py-3 px-3 w-full sm:max-w-sm sm:px-0">
            <SearchBox
              name="search"
              placeholder="search places, mountains..."
              value={searchText}
              onChange={onSearch}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
