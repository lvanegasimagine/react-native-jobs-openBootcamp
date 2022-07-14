import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  HomeScreen,
  FavoriteScreen,
  BookingScreen,
  CitiesScreen,
  ProfileScreen,
} from "../screen";

import MenuItems from "../menu/MenuItems";
import JobsDetails from "../components/JobsDetails";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={(props) => <MenuItems {...props} />}
      >
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Favorites" component={FavoriteScreen} />
        <Drawer.Screen name="Bookings" component={BookingScreen} />
        <Drawer.Screen name="Cities" component={CitiesScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
        <Drawer.Screen name="Details" component={JobsDetails} />
      </Drawer.Navigator>
  );
};

export default DrawerNavigation;
