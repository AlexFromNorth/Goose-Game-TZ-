import { useState } from "react";
import Goose1 from '@/assets/goose.jpg';
import Goose2 from '@/assets/goose2.webp';
import Goose3 from '@/assets/goose3.webp';

export const gooseImages = [Goose1, Goose2, Goose3];

export function useTapButtonImages() {
  const [currentGoose, setCurrentGoose] = useState(0);

  const nextGoose = () => {
    setCurrentGoose((prev) => (prev + 1) % gooseImages.length);
  };

  return { currentGoose, nextGoose, gooseImages };
}
