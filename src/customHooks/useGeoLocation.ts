import {useState} from 'react';
import Geolocation from '@react-native-community/geolocation';
import {Alert} from 'react-native';

interface Coordinates {
  latitude: number;
  longitude: number;
}

const useGeoLocation = () => {
  const [coords, setCoords] = useState<Coordinates | null>(null);

  const getCurrentPosition = () => {
    Geolocation.getCurrentPosition(
      pos => {
        const {latitude, longitude} = pos.coords;
        setCoords({latitude, longitude});
      },
      error => Alert.alert('GetCurrentPosition Error', JSON.stringify(error)),
      {enableHighAccuracy: true},
    );
  };

  return {getCurrentPosition, coords};
};

export default useGeoLocation;
