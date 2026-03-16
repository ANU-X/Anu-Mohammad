import { useEffect, useState } from 'react'
import image_1 from '../../assets/web-bg-1.jpg'
import image_2 from '../../assets/web-bg-2.jpg'
import image_3 from '../../assets/web-bg-3.jpg'
import image_4 from '../../assets/web-bg-4.jpg'



const CrossfadeSlideshow = () => {
  const images = [image_1, image_2, image_3, image_4];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 8000); 

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-5000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default CrossfadeSlideshow
