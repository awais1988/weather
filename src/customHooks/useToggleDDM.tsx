import {useState} from 'react';

const useToggleDDM = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const togglePress = () => {
    setIsVisible(!isVisible);
  };
  return {togglePress, isVisible};
};

export default useToggleDDM;
