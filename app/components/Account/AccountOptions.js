import React, {useState} from 'react'
import { StyleSheet, Text, View} from 'react-native'
import { ListItem, Icon} from 'react-native-elements'
import Modal from '../Modal'


export default function AccountOptions(props) {
    const {userInfo, toastRef } = props
    const [showModal, setShowModal] = useState(true)
    const [renderComponent , setRenderComponent] = useState(null)
    const selectedComponent = (key) =>{
        switch(key){
            case 'displayName':
                setRenderComponent(<Text>Cambiando nombre y Apellido</Text>)
                setShowModal(true)
                break
            case 'email':
                setRenderComponent(<Text>Cambiando Email</Text>)
                setShowModal(true)
                break
            case 'password':
                setRenderComponent(<Text>Cambiando Password</Text>)
                setShowModal(true)
                break
            default:
                setRenderComponent(null)
                setShowModal(false)
                break
        }
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
             {renderComponent && (
             <Modal isVisible={showModal} setIsVisible={setShowModal}>
                 {renderComponent}
             </Modal>
             )}
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
