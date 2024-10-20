import { useEffect, useState } from "react";

const useToggleModal = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    return () => setIsVisible(false);
  }, []);

  const togglePress = () => {
    setIsVisible(!isVisible);
  };
  return { togglePress, isVisible };
};

export default useToggleModal;
