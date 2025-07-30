import { useState, useEffect } from "react";
import { useTransition, animated } from "@react-spring/web";

const images = ["skidsteer.png", "trailer.png", "truck.png"];

function Transition() {
  const [index, setIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Preload all images
  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = images.map((imageSrc) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = reject;
          img.src = `/${imageSrc}`;
        });
      });

      try {
        await Promise.all(imagePromises);
        setImagesLoaded(true);
      } catch (error) {
        console.error("Error preloading images:", error);
        // Still set to true to allow component to function
        setImagesLoaded(true);
      }
    };

    preloadImages();
  }, []);

  useEffect(() => {
    // Only start the interval after images are loaded
    if (!imagesLoaded) return;

    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [imagesLoaded]);

  // Use the image filename as the transition item and key
  const transitions = useTransition(imagesLoaded ? images[index] : null, {
    key: imagesLoaded ? images[index] : 'loading',
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 1000 },
  });

  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        zIndex: 0,
      }}
    >
      {/* Centered logo while loading */}
      {!imagesLoaded && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 5,
            opacity: 0.8,
          }}
        >
          <img
            src="/wts-white.svg"
            alt="Walker TX Services Logo"
            style={{
              width: "200px",
              height: "auto",
              filter: "drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))",
            }}
          />
        </div>
      )}

      {transitions((style, item) => 
        item && (
          <animated.img
            key={item}
            src={`/${item}`}
            alt=""
            style={{
              ...style,
              position: "absolute",
              width: "100%",
              height: "100%",
              objectFit: "cover",
              top: 0,
              left: 0,
              zIndex: 10,
              pointerEvents: "none",
            }}
          />
        )
      )}
    </div>
  );
}

export default Transition;