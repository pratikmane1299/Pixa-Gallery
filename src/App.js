import { useEffect, useState } from 'react';
import ImageGrid from './components/ImageGrid';
import Nav from './components/Nav';

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABY_API}`)
      .then((data) => data.json())
      .then((response) => setImages(response.hits));
  });

  return (
    <div className="w-full">
      <Nav />
      <ImageGrid images={images} />
    </div>
  );
}

export default App;
