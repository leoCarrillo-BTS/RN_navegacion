import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { colores } from '../theme/appTheme';
import { TouchableIcon } from '../components/TouchableIcon';


export const Tab1Screen = () => {

    useEffect(() => {
        console.log('Tab1Screen Effect')
    }, [])

    return (
        <View>
            <Text>
                <TouchableIcon iconName='airplane-outline' />
                <TouchableIcon iconName='attach-outline' />
                <TouchableIcon iconName='bonfire-outline' />
                <TouchableIcon iconName='calculator-outline' />
                <TouchableIcon iconName='chatbubble-ellipses-outline' />
            </Text>
        </View>
    )
}
