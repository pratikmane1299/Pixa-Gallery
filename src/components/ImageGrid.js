import ImageCard from "./ImageCard";

function ImageGrid({ images }) {
  return (
    <div className="container mx-auto py-4">
      <div className="grid grid-cols-3 gap-4">
        {images.map((image) => (
          <ImageCard key={image.id} image={image} />
        ))}
      </div>
    </div>
  );
}

export default ImageGrid;
