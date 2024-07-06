import { useContext } from "react";
import { UnsplashContext } from "../main";

const useUnsplash = () => {
  const unsplash = useContext(UnsplashContext);
  return unsplash;
};

export default useUnsplash;
