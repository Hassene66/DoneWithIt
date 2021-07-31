import { useState, useEffect } from "react";
import * as Location from "expo-location";

export default useLocation = () => {
  const [location, setLocation] = useState();
  const getLocation = async () => {
    const { granted } = await Location.requestPermisionAsync();
    if (!granted) return;
    const {
      coords: { latitude, longitude },
    } = Location.getLastKnownPositionAsync();
    setLocation(latitude, longitude);
  };

  useEffect(() => {
    getLocation();
  }, []);
  return location;
};
