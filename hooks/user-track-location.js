// import { useState } from 'react';

// const UserTrackLocation = () => {
//   const [locationErrorMsg, setLocationErrorMsg] = useState('');
//   const [latLong, setLatLong] = useState('');
//   const [isFindingLocation, setIsFindingLocation] = useState(false);

//   const success = (position) => {
//     const latitude = position.coords.latitude;
//     const longitude = position.coords.longitude;
//     setLatLong(`${latitude},${longitude}`); //don't put space between `${latitude},${longitude}`
//     setLocationErrorMsg(''); //clear the error
//     setIsFindingLocation(false);
//   };

//   const error = () => {
//     setLocationErrorMsg('Unable to retrieve your location');
//     setIsFindingLocation(false); //becos it has successfully completed
//   };

//   const handleTrackLocation = () => {
//     setIsFindingLocation(true);

//     if (!navigator.geolocation) {
//       setIsFindingLocation(false);
//       setLocationErrorMsg('Geolocation is not supported by your browser');
//     } else {
//       //   status.textContent = 'Locating…';
//       navigator.geolocation.getCurrentPosition(success, error);
//     }
//   };

//   return { latLong, handleTrackLocation, locationErrorMsg, isFindingLocation };
// };
// export default UserTrackLocation;

//using context store api in getting the value store on latLong variable in place of useState() method
import { useState, useContext } from 'react';
import { ACTION_TYPES, StoreContext } from '../store/store-context';

const UserTrackLocation = () => {
  const [locationErrorMsg, setLocationErrorMsg] = useState('');
  // const [latLong, setLatLong] = useState('');
  const [isFindingLocation, setIsFindingLocation] = useState(false);

  const { dispatch } = useContext(StoreContext); //fetching dispatch method from context store

  const success = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    // setLatLong(`${latitude},${longitude}`); //don't put space between `${latitude},${longitude}`
    dispatch({
      type: ACTION_TYPES.SET_LAT_LONG,
      payload: { latLong: `${latitude},${longitude}` },
    });
    setLocationErrorMsg(''); //clear the error
    setIsFindingLocation(false);
  };

  const error = () => {
    setLocationErrorMsg('Unable to retrieve your location');
    setIsFindingLocation(false); //becos it has successfully completed
  };

  const handleTrackLocation = () => {
    setIsFindingLocation(true);

    if (!navigator.geolocation) {
      setIsFindingLocation(false);
      setLocationErrorMsg('Geolocation is not supported by your browser');
    } else {
      navigator.geolocation.getCurrentPosition(success, error);
    }
  };

  return {
    // latLong,
    handleTrackLocation,
    locationErrorMsg,
    isFindingLocation,
  };
};
export default UserTrackLocation;
