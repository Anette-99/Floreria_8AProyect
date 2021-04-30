import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import TopFlowerShops from '../screens/TopFlowerShops'

const Stack = createStackNavigator()

export default function TopFlowerShopsStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen
            name='topflowershops'
            component={TopFlowerShops}
            options={{ title:'Top 5'}}
            />
        </Stack.Navigator>
    )
}