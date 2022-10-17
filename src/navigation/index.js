import {
  AddScreen,
  DetailScreen,
  ListScreen,
} from '~screens';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { mainStack } from '~config';
const Stack = createNativeStackNavigator();
function RootStack() {

  return (
    <Stack.Navigator
      initialRouteName={mainStack.listScreen}
      screenOptions={{gestureEnabled: false}}>
      <Stack.Screen
        options={{headerShown: false}}
        name={mainStack.listScreen}
        component={ListScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={mainStack.detailScreen}
        component={DetailScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={mainStack.addScreen}
        component={AddScreen}
      />
    </Stack.Navigator>
  );
}

export default RootStack;
