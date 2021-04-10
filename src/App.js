import { useEffect, useState } from 'react';
import ImageGrid from './components/ImageGrid';
import Nav from './components/Nav';

import { getImages} from './API';

function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    getImages(query, page)
      .then((response) => {
        const temp = [...images, ...response.hits];
        setImages(temp);
      });
  }, [query, page]);

  const handleOnSearch = (term) => {
    setQuery(term)
  };

  const handleOnClick = (e) => {
    e.preventDefault();
    setPage(page+1);
  }

  return (
    <div className="w-full">
      <Nav searchText={query} onSearch={handleOnSearch} />
      <ImageGrid images={images} />
      {page < 26 ? (
        <div className="flex justify-center py-4">
          <button
            className="py-2 px-4 rounded-3xl bg-purple-700 text-white font-bold focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
            onClick={handleOnClick}
          >
            Load More
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default App;
