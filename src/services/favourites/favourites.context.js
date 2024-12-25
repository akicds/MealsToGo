import React, { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthenticationContext } from "../authentication/authentication.context";


export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
  const { user } = useContext(AuthenticationContext);
  const [favourites, setFavourites] = useState([]);

  const saveFavourites = async (value, uid) => {
    try {
      if (Array.isArray(value)) {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(`@favourites-${uid}`, jsonValue);
      } else {
        console.log("Error: Attempted to save non-array value to AsyncStorage");
      }
    } catch (e) {
      console.log("error storing", e); // in case of any error
    }
  };

  const loadFavourites = async (uid) => {
    try {
      const value = await AsyncStorage.getItem(`@favourites-${uid}`);
      if (value !== null) {
        const parsedValue = JSON.parse(value);
  
        // String içeren hatalı diziyi temizler
        if (Array.isArray(parsedValue)) {
          const filteredFavourites = parsedValue.filter(
            (item) => typeof item === "object" && item !== null
          );
          setFavourites(filteredFavourites);
        } else {
          console.error("Error: Loaded favourites is not an array!");
          setFavourites([]);
        }
      }
    } catch (e) {
      console.log("error loading", e); // error reading value
    }
  };

  const add = (restaurant) => {
    setFavourites([...favourites, restaurant]);
  };

  const remove = (restaurant) => {
    const newFavourites = favourites.filter(
      (x) => x.placeId !== restaurant.placeId
    );

    setFavourites(newFavourites);
  };

  useEffect(() => {
    if (user && user.uid) {
      loadFavourites(user.uid);
    }
  }, [user]);

  useEffect(() => {
    if(user && user.uid && favourites.length) {
      saveFavourites(favourites, user.uid);
    }
  }, [favourites, user]);

  return (
    <FavouritesContext.Provider
      value={{
        favourites,
        addToFavourites: add,
        removeFromFavourites: remove,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};