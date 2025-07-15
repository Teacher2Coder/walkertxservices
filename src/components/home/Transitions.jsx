import { useState, useEffect } from "react";
import { useTransition, animated } from "@react-spring/web";

const images = ["skidsteer.png", "trailer.png", "truck.png"];

function Transition() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Use the image filename as the transition item and key
  const transitions = useTransition(images[index], {
    key: images[index],
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
      {transitions((style, item) => (
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
            zIndex: 0,
            pointerEvents: "none",
          }}
        />
      ))}
    </div>
  );
}

export default Transition;