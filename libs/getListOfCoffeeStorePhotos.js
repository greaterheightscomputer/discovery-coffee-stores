import { unsplashApi } from '../pages/lib/coffee-stores';

export async function getListOfCoffeeStorePhotos() {
  const photos = await unsplashApi.search.getPhotos({
    query: 'coffee stores',
    perPage: 40, //change from 10 to 40
  });
  const unsplashResults = photos.response.results;
  return unsplashResults.map((result) => result.urls['small']);
}
