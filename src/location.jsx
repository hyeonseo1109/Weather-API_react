import { useState, useEffect } from "react";


export default function useLocation() {
  const [location, setLocation] = useState({ lat: null, lon: null });
  const [error, setError] = useState(null);

  useEffect(() => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
          console.log(position);
        },
        (error) => {
          setError(error.message);
        }
      );
  }, []);

  return { location, error };
}


