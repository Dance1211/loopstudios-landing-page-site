import { useEffect, useState } from "react";
import useWindowSize from "./WindowSize";

const MOBILE_SIZE = 640;

export default function useIsMobile () {
  const windowSize = useWindowSize();
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    setIsMobile(() => windowSize.width <= MOBILE_SIZE);
  }, [windowSize])

  return isMobile;
}