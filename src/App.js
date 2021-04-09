import { useEffect, useState } from 'react';
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
      <div className="container mx-auto py-4">
        <div className="grid grid-cols-3 gap-4">
          {images.map((image) => (
            <div
              key={image.id}
              className="max-w-sm mx-auto bg-white rounded-lg shadow-md flex flex-col"
            >
              <div className="w-full h-64 rounded-lg">
                <img
                  className="w-full h-full rounded-lg"
                  alt={image.type}
                  src={image.webformatURL}
                />
              </div>
              <div className="w-full px-4 py-4 flex flex-col space-y-4">
                <h3 className="text-2xl text-center text-blue-500 cursor-pointer hover:underline">
                  <a href={`https://pixabay.com/users/${image.user}/`}>{image.user}</a>
                </h3>
                <div className="w-full flex justify-evenly items-center">
                  <div className="flex flex-col items-center space-y-1">
                    <span className="text-sm">{image.views}</span>
                    <span className="text-xl font-bold text-gray-500">Views</span>
                  </div>
                  <div className="flex flex-col space-y-1 items-center">
                    <span className="text-sm">{image.likes}</span>
                    <span className="text-xl font-bold text-gray-500">Likes</span>
                  </div>
                  <div className="flex flex-col space-y-1 items-center">
                    <span className="text-sm">{image.comments}</span>
                    <span className="text-xl font-bold text-gray-500">Comments</span>
                  </div>
                </div>
                <div className="flex flex-wrap justify-center gap-2">
                  {image.tags.split(',').map(tag => (
                    <div className="bg-gray-300 px-2 rounded-xl text-sm">
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
