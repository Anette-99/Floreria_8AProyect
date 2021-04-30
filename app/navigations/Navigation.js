import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from 'react-native-elements'

import FlowerShopsStack from './FlowerShopsStack'
import FavoritesStack from './FavoritesStack'
import TopFlowerShopsStack from './TopFlowerShopsStack'
import AccountStack from './AccountStack'
import SearchStack from './SearchStack'


const Tab = createBottomTabNavigator()

export default function navigation(){
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName='flowershops'
                tabBarOptions={{
                    inactiveTintColor: '#00666e',
                    activeTintColor: '#4a2e00'
                }}
                screenOptions={({ route }) => ({
                    tabBarIcon:({ color }) => screenOptions(route, color)
                })}
            >
                <Tab.Screen 
                name='flowershops' 
                component={FlowerShopsStack}
                options={{ title: 'Florerias'}}
                />
                <Tab.Screen 
                name='favorites' 
                component={FavoritesStack}
                options={{ title: 'Favoritos'}}
                />
                <Tab.Screen 
                name='top-flowershops' 
                component={TopFlowerShopsStack}
                options={{ title: 'Top 5'}}
                />
                <Tab.Screen 
                name='search' 
                component={SearchStack}
                options={{ title: 'Buscar'}}
                />
                <Tab.Screen 
                name='account' 
                component={AccountStack}
                options={{ title: 'Cuenta'}}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

function screenOptions(route, color){
    let iconName

    switch (route.name){
        case 'flowershops':
            iconName='home-map-marker'
            break
        case 'favorites':
            iconName='home-heart'
            break
        case 'top-flowershops':
            iconName='star-outline'
            break
        case 'search':
            iconName='magnify'
            break
        case 'account':
            iconName='account-circle'
            break
    }
    return(
        <Icon type='material-community' name={iconName} size={22} color={color}/>
    )
}