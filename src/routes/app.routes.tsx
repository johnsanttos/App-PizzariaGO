import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../pages/Dashboard';
import Order from '../pages/Order';
import FinishOrder from '../FinishOrder';

//parametros que eu quero passar quando for navegar para a tela
export type StackParamsList ={
    Dashboard: undefined;
    Order: {
    number: number | string;
    order_id: string
  }
  FinishOrder: {
    number: number | string;
    order_id: string
  }}

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


      <Stack.Screen 
      name="FinishOrder" 
      component={FinishOrder} 
      options={{ title: 'Finalizando',
      headerStyle:{
        backgroundColor: '#1d1d2e'
      },
      headerTintColor: '#fff'
      }} />
    </Stack.Navigator>

    

   
  )
}

export default AppRoutes;

