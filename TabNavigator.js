import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from 'react-native-vector-icons'; // Thay đổi tên import
import Contacts from './screens/Contacts';
import Favorites from './screens/Favorites';
import colors from './utils/colors';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Contacts') {
            iconName = 'list';
          } else if (route.name === 'Favorites') {
            iconName = 'star';
          }

          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: colors.blue,
        tabBarInactiveTintColor: colors.greyDark,
        tabBarLabelStyle: {
          fontSize: 12,
        },
        tabBarStyle: {
          backgroundColor: 'white',
        },
      })}
    >
      <Tab.Screen name="Contacts" component={Contacts} />
      <Tab.Screen name="Favorites" component={Favorites} />
    </Tab.Navigator>
  );
};

export default TabNavigator;