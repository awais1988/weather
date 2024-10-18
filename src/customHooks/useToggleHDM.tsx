import {useState} from 'react';

const useToggleHDM = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const togglePress = () => {
    setIsVisible(!isVisible);
  };
  return {togglePress, isVisible};
};

export default useToggleHDM;
