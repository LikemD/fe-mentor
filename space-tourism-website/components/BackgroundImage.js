import { useEffect, useState } from "react";
import Image from "next/image";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;

  return { width, height };
}

export default function BackgroundImage(props) {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const { width, height } = getWindowDimensions();

    setWidth(width);
    setHeight(height);
  }, []);

  useEffect(() => {
    function handleResize() {
      const { width, height } = getWindowDimensions();

      setWidth(width);
      setHeight(height);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (width && height) {
    return (
      <div className="z-0 fixed top-0">
        <Image
          src={width < 1025 ? props.tabletImage : props.desktopImage}
          width={width}
          height={height}
          alt="Background image"
        />
      </div>
    );
  }
  return null;
}
