import { useEffect, useState } from "react";

export const useResponsiveRadius = (): number => {
  const [radiusScale, setRadiusScale] = useState<number>(1);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 480) setRadiusScale(0.5);
      else if (width < 768) setRadiusScale(0.75);
      else if (width < 1024) setRadiusScale(0.9);
      else setRadiusScale(1);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return radiusScale;
};
