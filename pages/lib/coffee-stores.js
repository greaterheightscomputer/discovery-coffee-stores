// const response = await fetch(
//   'https://api.foursquare.com/v3/places/nearby?query=coffee stores&ll=6.523999122374296,3.3772545789333024&limit=6',
//   {
//     headers: {
//       Authorization: 'fsq3fcQz2lk/7LskOPdFr+OCA50KH3HnOYQ3mUQlB7OI4RE=',
//       //   Authorization: 'fsq3Kv9L0FtscscNu2491KgYhbS0DYyRPWJSOT7AzhtAz2k=', //hameedah
//     },
//   }
// );
// const data = await response.json();
// console.log('dataFSQ: ', data.results);

// convert fetch api block of codes to function like this
// export const fetchCoffeeStores = async () => {
//     const response = await fetch(
//         'https://api.foursquare.com/v3/places/nearby?query=coffee stores&ll=6.523999122374296,3.3772545789333024&limit=6',
//       {
//         headers: {
//           // Authorization: 'fsq3fcQz2lk/7LskOPdFr+OCA50KH3HnOYQ3mUQlB7OI4RE=',
//           Authorization: 'fsq3Kv9L0FtscscNu2491KgYhbS0DYyRPWJSOT7AzhtAz2k=', //hameedah
//         },
//       }
//     );
//     const data = await response.json();
//     console.log('dataFSQ: ', data.results);
//     return data.results;
//   };

//passing dynamic latLong, query, and limit as an argument onto foursquare api
// const getUrlForCoffeeStores = (latLong, query, limit) => {
//   return `https://api.foursquare.com/v3/places/nearby?ll=${latLong}&query=${query}&limit=${limit}`;
// };

// export const fetchCoffeeStores = async () => {
//   const response = await fetch(
//     getUrlForCoffeeStores(
//       '6.523999122374296,3.3772545789333024',
//       'coffee stores',
//       6
//     ),
//     {
//       headers: {
//         // Authorization: 'fsq3fcQz2lk/7LskOPdFr+OCA50KH3HnOYQ3mUQlB7OI4RE=',
//         Authorization: 'fsq3Kv9L0FtscscNu2491KgYhbS0DYyRPWJSOT7AzhtAz2k=', //hameedah
//       },
//     }
//   );
//   const data = await response.json();
//   console.log('dataFSQ: ', data.results);
//   return data.results;
// };

//add unsplash api
import { createApi } from 'unsplash-js';
import { getListOfCoffeeStorePhotos } from '../../libs/getListOfCoffeeStorePhotos';

// // on your node server
// const unsplashApi = createApi({
//  accessKey: process.env.UNSPLASH_ACCESS_KEY,
// });

// const getUrlForCoffeeStores = (latLong, query, limit) => {
//   return `https://api.foursquare.com/v3/places/nearby?ll=${latLong}&query=${query}&limit=${limit}`;
// };

// export const fetchCoffeeStores = async () => {
//   const photos = await unsplashApi.search.getPhotos({
//     query: 'cat',
//     page: 1,
//     perPage: 10,
//     color: 'green',
//     orientation: 'portrait',
//   });
//   // console.log('photos:', photos);
//   const unsplashResults = photos.response.results;
//   // console.log('photos:', unsplashResults);
//   // const photoResponse = unsplashResults.map((result) => result.urls.small);
//   const photoResponse = unsplashResults.map((result) => result.urls['small']);
//   console.log('photos:', photoResponse);

//   const response = await fetch(
//     getUrlForCoffeeStores(
//       '6.523999122374296,3.3772545789333024',
//       'coffee stores',
//       6
//     ),
//     {
//       headers: {
//         // Authorization: 'fsq3fcQz2lk/7LskOPdFr+OCA50KH3HnOYQ3mUQlB7OI4RE=',
//         Authorization: 'fsq3Kv9L0FtscscNu2491KgYhbS0DYyRPWJSOT7AzhtAz2k=', //hameedah
//       },
//     }
//   );
//   const data = await response.json();
//   console.log('dataFSQ: ', data.results);
//   return data.results;
// };

//add unsplash block of into a function called getListOfCoffeeStorePhotos()
// const unsplashApi = createApi({
//   accessKey: process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY,
// });

// const getUrlForCoffeeStores = (latLong, query, limit) => {
//   return `https://api.foursquare.com/v3/places/nearby?ll=${latLong}&query=${query}&limit=${limit}`;
// };

// const getListOfCoffeeStorePhotos = async () => {
//   const photos = await unsplashApi.search.getPhotos({
//     query: 'coffee stores',
//     perPage: 10,
//   });
//   const unsplashResults = photos.response.results;
//   return unsplashResults.map((result) => result.urls['small']);
// };

// export const fetchCoffeeStores = async () => {
//   const photos = await getListOfCoffeeStorePhotos();
//   const response = await fetch(
//     getUrlForCoffeeStores(
//       '6.523999122374296,3.3772545789333024',
//       'coffee stores',
//       6
//     ),
//     {
//       headers: {
//         // Authorization: 'fsq3fcQz2lk/7LskOPdFr+OCA50KH3HnOYQ3mUQlB7OI4RE=',
//         Authorization: 'fsq3Kv9L0FtscscNu2491KgYhbS0DYyRPWJSOT7AzhtAz2k=', //hameedah
//       },
//     }
//   );
//   const data = await response.json();
//   return data.results.map((result, id) => {
//     return {
//       ...result,
//       imgUrl: photos[id],
//     };
//   });
// };

//pass in latLong argument onto fetchCoffeeStores() function to dynamically render coffee store from other latitude and longitude

export const unsplashApi = createApi({
  // accessKey: process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY,
  accessKey: 'butHMyz3gW9e47BXJN1uuJBBfaVxsUljuTX7r8Q4JKA',
});

const getUrlForCoffeeStores = (latLong, query, limit) => {
  return `https://api.foursquare.com/v3/places/nearby?ll=${latLong}&query=${query}&limit=${limit}`;
};

const FetchCoffeeStores = async (
  latLong = '6.523999122374296,3.3772545789333024',
  limit = 15
) => {
  const photos = await getListOfCoffeeStorePhotos();

  const response = await fetch(
    getUrlForCoffeeStores(latLong, 'coffee stores', limit),
    {
      headers: {
        Authorization: 'fsq3fcQz2lk/7LskOPdFr+OCA50KH3HnOYQ3mUQlB7OI4RE=',
        // Authorization: 'fsq3Kv9L0FtscscNu2491KgYhbS0DYyRPWJSOT7AzhtAz2k=', //hameedah
      },
    }
  );
  const data = await response.json();
  const dataResp = data.results || [
    {
      fsq_id: '',
      name: '',
      address: '',
      locality: '',
      imgUrl: '',
    },
  ];

  // console.log(dataResp);

  return dataResp.map((result, id) => {
    // return {
    //   ...result,
    //   imgUrl: photos[id],
    // };
    const address = result?.location?.formatted_address || '';
    const locality = result?.location?.locality || '';
    return {
      fsq_id: result.fsq_id || '',
      name: result.name || '',
      address,
      locality,
      imgUrl: photos[id] || '',
    };
  });
};
export default FetchCoffeeStores;
