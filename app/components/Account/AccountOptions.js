import React, {useState} from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { ListItem, Icon, Overlay } from 'react-native-elements'
import { map } from 'lodash'


export default function AccountOptions({ userInfo, toastRef }) {
 /*   const [showModal, setShowModal] = useState(false)
    const [renderComponent, setRenderComponent] = useState(null)*/
 
 
    const generateOptions = () => {
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
    const selectedComponent = (key) => {
        console.log('click')
        console.log(key)
    }

    const menuOptions = generateOptions()

    return (
        <View>
            {
                map(menuOptions, (menu, index) => (
                    <ListItem
                        key={index}
                        style={styles.menItem}
                        onPress={menu.onPress}
                    >
                        <Icon
                            type='material-community'
                            name={menu.iconNameLeft}
                            color={menu.iconColorLeft}
                        />
                        <ListItem.Content>
                            <ListItem.Title>{menu.title}</ListItem.Title>
                        </ListItem.Content>
                        <Icon
                            type='material-community'
                            name={menu.iconNameRight}
                            color={menu.iconColorRight}
                        />
                    </ListItem>
                ))
            }
        </View>
    )
}

const styles = StyleSheet.create({
    menItem:{
        borderBottomWidth: 1,
        borderBottomColor: '#218876'
    }
})
