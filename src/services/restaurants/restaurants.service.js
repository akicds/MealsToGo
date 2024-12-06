import { mocks, mockImages } from "./mock";
import camelize from "camelize";

export const restaurantsRequest = (location) => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location]; // Retrieve data based on location
    if (!mock) {
      reject("Location not found");
    }
    resolve(mock); // Return mock data
  });
};

export const restaurantsTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    // Assign random images to each restaurant
    restaurant.photos = restaurant.photos.map(() => {
      const randomIndex = Math.floor(Math.random() * mockImages.length);
      return mockImages[randomIndex];
    });

    return {
      ...restaurant,
      address: restaurant.vicinity,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
    };
  });

  console.log(mappedResults); // Debug transformed data
  return camelize(mappedResults); // Return formatted data
};
