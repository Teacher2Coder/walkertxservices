import { useState, useEffect } from "react";
import { useTransition, animated } from "@react-spring/web";

const images = ["skidsteer.webp", "trailer.webp", "truck.webp"];

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
        setTimeout(() => {
          setImagesLoaded(true);
        }, 2000); // 2 seconds delay to ensure images are loaded, logo will be visible
      } catch (error) {
        // Still set to true to allow component to function
        setTimeout(() => {
          setImagesLoaded(true);
        }, 2000);
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

  // Transition for the temporary logo
  const logoTransitions = useTransition(!imagesLoaded, {
    from: { opacity: 0 },
    enter: { opacity: 0.8 },
    leave: { opacity: 0 },
    config: { duration: 500 },
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
      {logoTransitions((style, item) =>
        item && (
          <animated.div
            style={{
              ...style,
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src="/wts-dark.svg"
              alt="Walker TX Services Logo"
              style={{
                width: "80%",
                height: "80%",
                objectFit: "contain"
              }}
            />
          </animated.div>
        )
      )}

      {transitions((style, item) => 
        item && (
          <animated.img
            key={item}
            src={`/${item}`}
            alt="Walker Texas Services construction equipment and vehicles"
            loading="lazy"
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