import { useEffect, useState } from "react";

export default function useWidth() {
  const [width, setWidth] = useState<number>(window.innerWidth);

  const handleWidth = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleWidth);
    window.addEventListener("orientationchange", handleWidth);

    return () => {
      window.removeEventListener("resize", handleWidth);
      window.removeEventListener("orientationchange", handleWidth);
    };
  }, []);

  return width;
}
