import Tag from './Tag';

function ImageCard({ image }) {
  return (
    <div
      className="max-w-sm h-30 sm:w-46 sm:h-46 mx-auto bg-white rounded-lg shadow-md flex flex-col"
    >
      <div className="w-full h-full sm:h-64 rounded-lg">
        <img
          className="w-full h-full rounded-lg"
          alt={image.type}
          src={image.webformatURL}
        />
      </div>
      <div className="hidden w-full px-4 py-4 lg:flex lg:flex-col lg:space-y-4">
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
          {image.tags.split(",").map((tag) => (
            <Tag key={tag} tag={tag} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ImageCard;
