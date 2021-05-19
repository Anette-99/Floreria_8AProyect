import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import FlowerShops from '../screens/FlowerShops/FlowerShops'
import AddFlowerShop from '../screens/FlowerShops/AddFlowerShop'

const Stack = createStackNavigator()

export default function FlowerShopsStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen
            name='flowershop'
            component={FlowerShops}
            options={{ title:'Florerias'}}
            />
            <Stack.Screen
            name='add-flowershop'
            component={AddFlowerShop}
            options={{ title:'Crear Florerias'}}
            />
        </Stack.Navigator>
    )
}