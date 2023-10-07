import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Contacts from './screens/Contacts';
import Favorites from './screens/Favorites';
import User from './screens/User';
import Profile from './screens/Profile';
import Options from './screens/Options';
import colors from './utils/colors';

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="CloseDrawer"
        onPress={() => props.navigation.closeDrawer()}
      />
      <DrawerItem
        label=""
        onPress={() => props.navigation.toggleDrawer()}
      />
    </DrawerContentScrollView>
  );
}

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function ContactsStackScreen() {
  return (
    <Stack.Navigator
      initialRouteName="Contacts"
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'tomato' },
        headerTitleAlign: 'center',
      }}
    >
      <Stack.Screen name="Contacts" component={Contacts} options={{ title: 'Contacts' }} />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={({ route }) => {
          const { contact } = route.params;
          const { name } = contact;
          return {
            title: name.split(' ')[0],
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: colors.blue,
            },
          };
        }}
      />
    </Stack.Navigator>
  );
}

function FavoritesStackScreen() {
  return (
    <Stack.Navigator initialRouteName="Favorites">
      <Stack.Screen name="Favorites" component={Favorites} options={{ title: 'Favorites' }} />
      <Stack.Screen name="Profile" component={Profile} options={{ title: 'Profile' }} />
    </Stack.Navigator>
  );
}

function UserStackScreen({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="User">
      <Stack.Screen
        name="User"
        component={User}
        options={{
          headerTitle: 'Me',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: colors.blue,
          },
          headerRight: () => (
            <Ionicons
              name="settings"
              size={24}
              style={{ color: 'white', marginRight: 10 }}
              onPress={() => navigation.navigate('Options')}
            />
          ),
        }}
      />
      <Stack.Screen name="Options" component={Options} options={{ title: 'Options' }} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        useLegacyImplementation
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen name="Contacts" component={ContactsStackScreen} />
        <Drawer.Screen name="Favorites" component={FavoritesStackScreen} />
        <Drawer.Screen name="User" component={UserStackScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
