import React, {useRef, useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AddFlowerShopForm from '../../components/FlowerShops/AddFlowerShopForm'
import Toast from 'react-native-toast-message'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Loading from '../../components/Loading'
import { useNavigation } from '@react-navigation/native'

export default function AddFlowerShop() {
    const navigation = useNavigation()
    console.log(navigation)
    const toastRef = useRef()
    const [loading, setLoading] = useState(false)
    
    return (
        <KeyboardAwareScrollView>
            <AddFlowerShopForm 
                toastRef={toastRef} 
                setLoading={setLoading} 
                navigation={useNavigation}
            />
        </KeyboardAwareScrollView>
    )
}

const styles = StyleSheet.create({})
