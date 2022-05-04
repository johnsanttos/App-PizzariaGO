import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../pages/Dashboard';
import Order from '../pages/Order';

export type StackParamsList ={
    Dashboard: undefined;
    Order: {
    number: number | string;
    order_id: string
  }
}

const Stack = createStackNavigator <StackParamsList>();

function AppRoutes(){
  return(
    <Stack.Navigator>
      <Stack.Screen 
      name="Dashboard" 
      component={Dashboard} 
      options={{ headerShown: false }} />

      <Stack.Screen 
      name="Order" 
      component={Order} 
      options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export default AppRoutes;

