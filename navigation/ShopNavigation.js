import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import Colors from '../constants/Colors';

const Stack = createStackNavigator();
export default function ShopNavigation(){
    return(
     <NavigationContainer>
        <Stack.Navigator screenOptions={{
             headerStyle:{
                backgroundColor: 'white',
              },
              headerTintColor: Colors.primary
        }}>
          <Stack.Screen name='All Products' component={ProductsOverviewScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}
      