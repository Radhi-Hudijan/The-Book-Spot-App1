import React, { createContext, useState, useEffect } from "react";

export const FavoriteIDContext = createContext();

export const FavoriteIdProvider = ({ children }) => {
  const localStorageData = localStorage.getItem("favoriteBookIds");
  const [favoriteIDs, setFavoriteIDs] = useState(
    localStorageData ? JSON.parse(localStorageData) : []
  );

  useEffect(() => {
    localStorage.setItem("favoriteBookIds", JSON.stringify(favoriteIDs));
  });
  // get the favorite products ids and put them into array
  const getFavoritesID = (productId) => {
    if (favoriteIDs.includes(productId)) {
      let filteredFavoriteIDs = favoriteIDs.filter((id) => productId !== id);
      setFavoriteIDs(filteredFavoriteIDs);
    } else {
      setFavoriteIDs([...favoriteIDs, productId]);
    }
  };
  return (
    <FavoriteIDContext.Provider
      value={{
        favoriteIDs: favoriteIDs,
        setFavoriteIDs: setFavoriteIDs,
        getFavoritesID,
      }}
    >
      {children}
    </FavoriteIDContext.Provider>
  );
};
