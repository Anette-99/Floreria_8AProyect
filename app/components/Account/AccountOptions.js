import React from 'react'
import { StyleSheet, Text, View} from 'react-native'
import { ListItem, Icon} from 'react-native-elements'


export default function AccountOptions(props) {
    const {userInfo, toastRef } = props
    const selectedComponent = (key) =>{
        console.log('click')
        console.log(key)
    }
    const menuOptions = generateOptions(selectedComponent)

    return (
        <View>
            {menuOptions.map((menu,index)=>(
                <ListItem 
                key={index} 
                bottomDivider 
                style={styles.menItem}
                onPress={menu.onPress}>
                    <Icon 
                    type='material-community'
                    name={menu.iconNameLeft}
                    color={menu.iconColorLeft}
                    />
                    <ListItem.Content>
                            <ListItem.Title>{menu.title}</ListItem.Title>
                        </ListItem.Content>
                        <ListItem.Chevron/>
                </ListItem>
             ))}
        </View>
    )
}
 
    function generateOptions(selectedComponent){
        return [
            {
                title:'Cambiar Nombre y Apellidos',
                iconNameLeft: 'account-circle',
                iconColorLeft: '#218876',
                iconNameRight: 'chevron-right',
                iconColorRight: '#218876',
                onPress: () => selectedComponent('displayName')
            },
            {
                title:'Cambiar Email',
                iconNameLeft: 'email-sync',
                iconColorLeft: '#218876',
                iconNameRight: 'chevron-right',
                iconColorRight: '#218876',
                onPress: () => selectedComponent('email')
            },
            {
                title:'Cambiar Contraseñas',
                iconNameLeft: 'lock-reset',
                iconColorLeft: '#218876',
                iconNameRight: 'chevron-right',
                iconColorRight: '#218876',
                onPress: () => selectedComponent('password')
            }
        ]
    }

const styles = StyleSheet.create({
    menItem:{
        borderBottomWidth: 1,
        borderBottomColor: '#218876'
    }
})
