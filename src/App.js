import { useEffect, useState } from 'react';
import ImageGrid from './components/ImageGrid';
import Nav from './components/Nav';

import { getImages} from './API';

function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    getImages(query)
      .then((response) => setImages(response.hits));
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
