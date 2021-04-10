import { useEffect, useState } from 'react';
import ImageGrid from './components/ImageGrid';
import Nav from './components/Nav';

function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABY_API}`)
      .then((data) => data.json())
      .then((response) => setImages(response.hits));
  }, []);

  useEffect(() => {
    if (query.length > 3) {
      fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABY_API}&q=${query}`)
        .then((data) => data.json())
        .then((response) => setImages(response.hits));
    }
  }, [query]);

  const handleOnSearch = (term) => {
    setQuery(term)
  };

  return (
    <div className="w-full">
      <Nav searchText={query} onSearch={handleOnSearch} />
      <ImageGrid images={images} />
    </div>
  );
}

export default App;
