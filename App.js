import React from 'react';
import { View, Text } from 'react-native';
import DrawerNavigator from './routes'; 
import Store from './store';
import { Provider } from 'react-redux';


const App = () => {
  return (
    <Provider store={Store}>
      <DrawerNavigator /> 
    </Provider>
  );
};

export default App;
