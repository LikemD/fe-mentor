import Image from "next/image";
import { useState, useEffect } from "react";

export function ImageComponent(props) {
  const [width, setWidth] = useState(0);

  function getWindowDimensions() {
    const { innerWidth: width } = window;

    return { width };
  }
  useEffect(() => {
    const { width } = getWindowDimensions();

    setWidth(width);
  }, []);

  useEffect(() => {
    function handleResize() {
      const { width } = getWindowDimensions();

      setWidth(width);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function setImageWidth() {
    if (width < 768) {
      return props.mobileWidth;
    }
    if (width > 1279) {
      return props.desktopWidth;
    }
    return props.tabletWidth;
  }

  function setImageHeight() {
    if (width < 768) {
      return props.mobileHeight;
    }
    if (width > 1279) {
      return props.desktopHeight;
    }
    return props.tabletHeight;
  }

  return (
    <Image
      src={props.source}
      width={setImageWidth}
      height={setImageHeight}
      alt={props.alt}
    />
  );
}
