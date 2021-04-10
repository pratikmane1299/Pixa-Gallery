function SearchBox({ name, placeholder, value, onChange }) {
  return (
    <div className="w-full rounded-lg">
      <input
        name={name}
        className="w-full py-2 px-4 bg-gray-100 text-lg rounded-lg focus:outline-none"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default SearchBox;
