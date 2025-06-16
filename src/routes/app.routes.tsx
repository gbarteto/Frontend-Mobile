import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Start } from '../screens/start';
import { Home } from '../screens/home';
import { SignIn } from '../screens/signin';
import { Password } from '../screens/password';
import { Confirm } from '../screens/confirm';
import { Address } from '../screens/address';
import { Address2 } from '../screens/address2';	
import { Personal } from '../screens/personal';
import { Account } from '../screens/account';
import { Photo } from '../screens/photo';
import { Success } from '../screens/success';
import { Sales } from '../screens/sales';


// import { App4 } from '../screens/reset';

const Stack = createStackNavigator();

export function AppRoutes() {
  return(
    <Stack.Navigator screenOptions={{headerShown:false}} >
      <Stack.Screen name="Start" component={Start} />      
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="Password" component={Password} />
      <Stack.Screen name="Confirm" component={Confirm} />
      <Stack.Screen name="Address" component={Address} />
      <Stack.Screen name="Address2" component={Address2} />
      <Stack.Screen name="Personal" component={Personal} />
      <Stack.Screen name="Account" component={Account} />
      <Stack.Screen name="Photo" component={Photo} />
      <Stack.Screen name="Success" component={Success} />
      <Stack.Screen name="Sales" component={Sales} />
      {/* <Stack.Screen name="Reset" component={App4} /> */}
      
    </Stack.Navigator>
  );
}