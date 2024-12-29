// eslint-disable-next-line react/prop-types
function Search({ searchQuery, setSearchQuery }) {
  return (
    <input
      type="text"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search..."
      className="col-start-1 col-end-3 mt-4 block h-16 w-full rounded-xl bg-white px-4 py-1.5 !text-[1.6rem] text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-500 sm:text-sm/6"
    />
  );
}

export default Search;
