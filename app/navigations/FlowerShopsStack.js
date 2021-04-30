import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import FlowerShops from '../screens/FlowerShops'

const Stack = createStackNavigator()

export default function FlowerShopsStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen
            name='flowershop'
            component={FlowerShops}
            options={{ title:'Florerias'}}
            />
        </Stack.Navigator>
    )
}