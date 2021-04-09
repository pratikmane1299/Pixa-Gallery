function SearchBox({ name, placeholder, value, onSearch }) {
  return (
    <div className="w-full rounded-lg">
      <input
        name={name}
        className="w-full py-2 px-4 bg-gray-100 text-lg rounded-lg focus:outline-none"
        placeholder={placeholder}
        value={value}
        onChange={onSearch}
      />
    </div>
  );
}

export default SearchBox;
