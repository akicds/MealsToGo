import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "react-native";

import { AuthButton } from "../../features/account/components/account.styles";
import { SafeArea } from "../../components/utility/safe-area.component";
import { MapScreen } from "../../features/map/screens/map.screen";
import { RestaurantsNavigator } from "./restaurants.navigator";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
import { Spacer } from "../../components/spacer/spacer.component";

import { FavouritesContextProvider } from "../../services/favourites/favourites.context";
import { LocationContextProvider } from "../../services/location/location.context";
import { RestaurantsContextProvider } from "../../services/restaurants/restaurants.context";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Restaurants: "home",
  Map: "map",
  Settings: "settings",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    tabBarActiveTintColor: "tomato",
    tabBarinactiveTintColor: "gray",
  };
};

const Settings = () => {
  const {onLogout} = useContext(AuthenticationContext);
    return(
      <SafeArea>
        <Text>Settings</Text>
        <Spacer size="large">
          <AuthButton
              icon= "logout"
              mode= "contained"
              onPress={() => onLogout()}
          >
              Logout
          </AuthButton>
        </Spacer>
      </SafeArea>
    );
};
export const AppNavigator = () => (
  <FavouritesContextProvider>
    <LocationContextProvider>
      <RestaurantsContextProvider>
        <Tab.Navigator
          screenOptions={createScreenOptions}>
          <Tab.Screen name="Restaurants" component={RestaurantsNavigator} options={{ headerShown: false }} />
          <Tab.Screen name="Map" component={MapScreen} options={{ headerShown: false }}/>
          <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
      </RestaurantsContextProvider>
    </LocationContextProvider>
  </FavouritesContextProvider>
);